using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
    public enum PenaltyGameState
    {
        WaitingForStart,
        Aiming,
        Shooting,
        Result,
        Lose
    }

    public class PenaltyGameManager : MonoBehaviour
    {
        public static PenaltyGameManager Instance { get; private set; }

        [Header("Controllers")]
        [SerializeField] private PenaltyBallController ball;
        [SerializeField] private PenaltyTargetMover targetMover;
        [SerializeField] private PenaltyGoalkeeperAI goalkeeper;
        [SerializeField] private PenaltyPlayerAnimator ronaldoAnimator;
        [SerializeField] private PenaltyUIManager uiManager;

        [Header("Defenders Theo Từng Round (Round 1 Không Có)")]
        [Tooltip("Hậu vệ xuất hiện ở Lần sút 2 (VD: Messi)")]
        [SerializeField] private PenaltyDefenderAI defenderRound2;
        [Tooltip("Hậu vệ xuất hiện ở Lần sút 3 (Cầu thủ tiếp theo)")]
        [SerializeField] private PenaltyDefenderAI defenderRound3;

        [Header("Settings")]
        [SerializeField] private float[] targetSpeeds = { 2.0f, 2.8f, 3.6f };
        [SerializeField] private float delayBetweenRounds = 1.2f;
        [Tooltip("Độ trễ từ khi Click/Ronaldo vung chân đến khi chân chạm bóng (giây)")]
        public float kickImpactDelay = 0.35f;
        [Tooltip("Hiện Prompt Text và chờ tap lần 1 trước mỗi hiệp (true) hay chỉ ở hiệp đầu tiên (false)")]
        [SerializeField] private bool promptEveryRound = false;

        private PenaltyGameState currentState;
        private int currentRound = 1;
        private int totalGoals = 0;
        private bool isTapToStoreActive = false;

        private bool isChallengeStarted = false;
        private bool pass25Tracked = false;
        private bool pass50Tracked = false;
        private bool pass75Tracked = false;

        public void SetupDependencies(
            PenaltyBallController b,
            PenaltyTargetMover t,
            PenaltyGoalkeeperAI gk,
            PenaltyDefenderAI def2,
            PenaltyDefenderAI def3,
            PenaltyPlayerAnimator anim,
            PenaltyUIManager ui)
        {
            ball = b;
            targetMover = t;
            goalkeeper = gk;
            defenderRound2 = def2;
            defenderRound3 = def3;
            ronaldoAnimator = anim;
            uiManager = ui;
        }

        private void Awake()
        {
            AppLovinAnalytics.Track(ALEvent.LOADING);

            if (Instance != null && Instance != this) { Destroy(gameObject); return; }
            Instance = this;

            ResolveUIManager();
        }

        private void Start()
        {
            AppLovinAnalytics.Track(ALEvent.LOADED);
            AppLovinAnalytics.Track(ALEvent.DISPLAYED);

            if (ball != null)
            {
                ball.OnGoal += HandleGoal;
                ball.OnBlocked += HandleMiss;
            }

            ResolveUIManager();
            InitGameFlow();
        }

        private void ResolveUIManager()
        {
            if (uiManager == null || !uiManager.HasValidSprites)
            {
                var myMgr = GetComponent<PenaltyUIManager>();
                if (myMgr != null && myMgr.HasValidSprites)
                {
                    uiManager = myMgr;
                    return;
                }

                var allUIs = FindObjectsOfType<PenaltyUIManager>();
                foreach (var u in allUIs)
                {
                    if (u != null && u.HasValidSprites)
                    {
                        uiManager = u;
                        return;
                    }
                }

                if (uiManager == null)
                {
                    uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
                }
            }
        }

        private void InitGameFlow()
        {
            currentRound = 1;
            totalGoals = 0;
            isTapToStoreActive = false;

            if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
            if (uiManager != null) uiManager.ResetUI();
            if (ball != null) ball.ResetBall();

            if (defenderRound2 != null) defenderRound2.Deactivate();
            if (defenderRound3 != null) defenderRound3.Deactivate();

            StartRound(currentRound);
        }

        private void Update()
        {
            if (isTapToStoreActive)
            {
                if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
                {
                    Debug.Log("<color=green>[PenaltyGameManager]</color> Tap to store detected!");
                    GameManager.GotoStore();
                }
                return;
            }

            if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
            {
                if (currentState == PenaltyGameState.WaitingForStart)
                {
                    StartAiming();
                }
                else if (currentState == PenaltyGameState.Aiming)
                {
                    ExecuteShot();
                }
            }
        }

        private void StartAiming()
        {
            if (!isChallengeStarted)
            {
                isChallengeStarted = true;
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
                Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_STARTED");
            }

            currentState = PenaltyGameState.Aiming;
            if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
            if (uiManager != null) uiManager.SetPromptVisible(false);

            if (targetMover != null)
            {
                int speedIdx = Mathf.Clamp(currentRound - 1, 0, targetSpeeds.Length - 1);
                targetMover.SetSpeed(targetSpeeds[speedIdx]);
                targetMover.StartMoving();
            }

            Debug.Log($"<color=yellow>[PenaltyGameManager]</color> Click 1: Bắt đầu chạy TargetCrosshair (Round {currentRound}) -> Chờ Click 2 để sút!");
        }

        private void StartRound(int round)
        {
            if (goalkeeper != null) goalkeeper.SetupRound(round);

            // QUY TẮC DEFENDER THEO ROUND:
            // Round 1: Chỉ có Thủ môn (0 Defender)
            // Round 2: Thủ môn + 1 Defender (Defender 01)
            // Round 3: Thủ môn + CẢ 2 DEFENDER CÙNG LÚC (Defender 01 & Defender 02)
            if (round == 1)
            {
                if (defenderRound2 != null) defenderRound2.Deactivate();
                if (defenderRound3 != null) defenderRound3.Deactivate();
            }
            else if (round == 2)
            {
                if (defenderRound2 != null) defenderRound2.Activate();
                if (defenderRound3 != null) defenderRound3.Deactivate();
            }
            else if (round >= 3)
            {
                if (defenderRound2 != null) defenderRound2.Activate();
                if (defenderRound3 != null) defenderRound3.Activate();
            }

            if (ronaldoAnimator != null) ronaldoAnimator.PlayIdle();

            // Hiệp 1 (hoặc nếu bật promptEveryRound): Hiện Prompt Text, ẩn TargetCrosshair và chờ Click 1 để bắt đầu ngắm
            if (round == 1 || promptEveryRound)
            {
                currentState = PenaltyGameState.WaitingForStart;
                if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
                if (uiManager != null) uiManager.SetPromptVisible(true);

                if (targetMover != null)
                {
                    targetMover.StopMoving();
                    targetMover.Hide();
                }
            }
            else
            {
                // Các hiệp tiếp theo: Bật luôn TargetCrosshair
                currentState = PenaltyGameState.Aiming;
                if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
                if (uiManager != null) uiManager.SetPromptVisible(false);

                if (targetMover != null)
                {
                    int speedIdx = Mathf.Clamp(round - 1, 0, targetSpeeds.Length - 1);
                    targetMover.SetSpeed(targetSpeeds[speedIdx]);
                    targetMover.StartMoving();
                }
            }
        }

        private void ExecuteShot()
        {
            if (!isChallengeStarted)
            {
                isChallengeStarted = true;
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
                Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_STARTED");
            }

            currentState = PenaltyGameState.Shooting;
            if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
            if (uiManager != null) uiManager.SetPromptVisible(false);

            // Lấy trực tiếp vị trí Crosshair hiện tại
            Vector3 crosshairPos = targetMover != null ? targetMover.GetCurrentPosition() : Vector3.zero;
            if (targetMover != null)
            {
                targetMover.StopMoving();
                targetMover.Hide();
            }

            if (ronaldoAnimator != null) ronaldoAnimator.PlayKick();

            StartCoroutine(ShootBallAfterDelay(crosshairPos, kickImpactDelay));
        }

        private IEnumerator ShootBallAfterDelay(Vector3 crosshairPos, float delay)
        {
            if (delay > 0f)
            {
                yield return new WaitForSeconds(delay);
            }

            if (ball != null)
            {
                ball.Shoot(crosshairPos);
            }
        }

        private void TrackRoundProgress(int roundJustFinished)
        {
            // 3 lần đá tương ứng với 100% tiến độ:
            // Lần 1: 1/3 (~33%) >= 25%
            if (roundJustFinished == 1 && !pass25Tracked)
            {
                pass25Tracked = true;
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
                Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_25 (Đã hoàn thành lượt sút 1/3)");
            }
            // Lần 2: 2/3 (~67%) >= 50%
            else if (roundJustFinished == 2 && !pass50Tracked)
            {
                pass50Tracked = true;
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
                Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_50 (Đã hoàn thành lượt sút 2/3)");
            }
            // Lần 3: 3/3 (100%) >= 75%
            else if (roundJustFinished >= 3 && !pass75Tracked)
            {
                pass75Tracked = true;
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
                Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_75 (Đã hoàn thành lượt sút 3/3)");
            }
        }

        private void HandleGoal()
        {
            if (currentState != PenaltyGameState.Shooting) return;
            currentState = PenaltyGameState.Result;

            totalGoals++;
            if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
            if (uiManager != null) uiManager.UpdateRoundResult(currentRound - 1, true);

            TrackRoundProgress(currentRound);

            if (currentRound >= 3)
            {
                StartCoroutine(EndGameEvaluationRoutine());
            }
            else
            {
                currentRound++;
                StartCoroutine(NextRoundRoutine());
            }
        }

        private void HandleMiss()
        {
            if (currentState != PenaltyGameState.Shooting) return;
            currentState = PenaltyGameState.Result;

            // Đánh dấu ❌ ở ô hiệp hiện tại
            if (uiManager == null) uiManager = PenaltyUIManager.Instance ?? FindObjectOfType<PenaltyUIManager>();
            if (uiManager != null) uiManager.UpdateRoundResult(currentRound - 1, false);

            TrackRoundProgress(currentRound);

            if (currentRound >= 3)
            {
                StartCoroutine(EndGameEvaluationRoutine());
            }
            else
            {
                currentRound++;
                StartCoroutine(NextRoundRoutine());
            }
        }

        private IEnumerator NextRoundRoutine()
        {
            yield return new WaitForSeconds(delayBetweenRounds);
            if (ball != null) ball.ResetBall();
            StartRound(currentRound);
        }

        private IEnumerator EndGameEvaluationRoutine()
        {
            yield return new WaitForSeconds(delayBetweenRounds);

            // Hoàn thành cả 3 quả: nếu đủ 3 bàn thắng -> Win, nếu có ít nhất 1 quả ko vào -> Lose
            bool isWin = (totalGoals >= 3);

            if (isWin)
            {
                currentState = PenaltyGameState.Result;
                if (ronaldoAnimator != null) ronaldoAnimator.PlayCelebrate();

                AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
                AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
                Debug.Log("<color=green>[AppLovin Track]</color> CHALLENGE_SOLVED & ENDCARD_SHOWN (Win)");

                if (uiManager != null)
                {
                    uiManager.ShowWinEndcard(2.0f, () =>
                    {
                        GameManager.GotoStore();
                    });
                }
                else
                {
                    Ply_SoundManager.Instance?.PlayFx(FxType.PlayerWin);
                }

                StartCoroutine(EnableTapToStoreAfterDelay(2.0f));
                GameManager.OnGameEnded?.Invoke(true);
            }
            else
            {
                currentState = PenaltyGameState.Lose;

                AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
                AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
                Debug.Log("<color=red>[AppLovin Track]</color> CHALLENGE_FAILED & ENDCARD_SHOWN (Lose)");

                if (uiManager != null)
                {
                    uiManager.ShowLoseScreen(2.0f, () =>
                    {
                        // Sau khoảng 2s: chuyển về gameplay ban đầu và tap to store
                        ResetToGameplayInitialState();
                        isTapToStoreActive = true;
                    });
                }
                else
                {
                    Ply_SoundManager.Instance?.PlayFx(FxType.PlayerLoose);
                    yield return new WaitForSeconds(2.0f);
                    ResetToGameplayInitialState();
                    isTapToStoreActive = true;
                }

                GameManager.OnGameEnded?.Invoke(false);
            }
        }

        private IEnumerator EnableTapToStoreAfterDelay(float delay)
        {
            if (delay > 0f)
            {
                yield return new WaitForSeconds(delay);
            }
            isTapToStoreActive = true;
        }

        private void ResetToGameplayInitialState()
        {
            AppLovinAnalytics.Track(ALEvent.CHALLENGE_RETRY);
            Debug.Log("<color=yellow>[AppLovin Track]</color> CHALLENGE_RETRY");

            currentRound = 1;
            totalGoals = 0;
            pass25Tracked = false;
            pass50Tracked = false;
            pass75Tracked = false;

            if (uiManager != null)
            {
                uiManager.ResetUI();
            }

            if (ball != null) ball.ResetBall();

            if (defenderRound2 != null) defenderRound2.Deactivate();
            if (defenderRound3 != null) defenderRound3.Deactivate();

            StartRound(1);
        }

        public void RestartGame()
        {
            InitGameFlow();
        }

        /// <summary>
        /// Hàm public instance để gán trực tiếp vào sự kiện On Click () của Button trong Unity Inspector
        /// </summary>
        public void GotoStore()
        {
            GameManager.GotoStore();
        }

        public void GoToStore()
        {
            GameManager.GotoStore();
        }
    }
}
