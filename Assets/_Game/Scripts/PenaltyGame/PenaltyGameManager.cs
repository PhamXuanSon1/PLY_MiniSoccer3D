using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
    public enum PenaltyGameState
    {
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

        private PenaltyGameState currentState;
        private int currentRound = 1;

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
            if (Instance != null && Instance != this) { Destroy(gameObject); return; }
            Instance = this;
        }

        private void Start()
        {
            if (ball != null)
            {
                ball.OnGoal += HandleGoal;
                ball.OnBlocked += HandleMiss;
            }

            InitGameFlow();
        }

        private void InitGameFlow()
        {
            currentRound = 1;
            if (uiManager != null) uiManager.ResetUI();
            if (ball != null) ball.ResetBall();

            if (defenderRound2 != null) defenderRound2.Deactivate();
            if (defenderRound3 != null) defenderRound3.Deactivate();

            StartRound(currentRound);
        }

        private void Update()
        {
            if (Input.GetMouseButtonDown(0))
            {
                if (currentState == PenaltyGameState.Aiming)
                {
                    ExecuteShot();
                }
            }
        }

        private void StartRound(int round)
        {
            currentState = PenaltyGameState.Aiming;
            if (uiManager != null) uiManager.SetPromptVisible(true);

            if (targetMover != null)
            {
                int speedIdx = Mathf.Clamp(round - 1, 0, targetSpeeds.Length - 1);
                targetMover.SetSpeed(targetSpeeds[speedIdx]);
                targetMover.StartMoving();
            }

            if (goalkeeper != null) goalkeeper.SetupRound(round);

            // QUY TẮC DEFENDER:
            // Round 1: KHÔNG CÓ DEFENDER (Chỉ có thủ môn)
            // Round 2: Có Defender 2 (Ví dụ Messi)
            // Round 3: Có Defender 3 (Cầu thủ chắn tiếp theo)
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
                if (defenderRound2 != null) defenderRound2.Deactivate();
                if (defenderRound3 != null) defenderRound3.Activate();
            }

            if (ronaldoAnimator != null) ronaldoAnimator.PlayIdle();
        }

        private void ExecuteShot()
        {
            currentState = PenaltyGameState.Shooting;
            if (uiManager != null) uiManager.SetPromptVisible(false);

            Vector3 targetPoint = targetMover != null ? targetMover.GetCurrentPosition() : Vector3.zero;
            if (targetMover != null)
            {
                targetMover.StopMoving();
                targetMover.Hide();
            }

            if (ronaldoAnimator != null) ronaldoAnimator.PlayKick();

            StartCoroutine(ShootBallAfterDelay(targetPoint, kickImpactDelay));
        }

        private IEnumerator ShootBallAfterDelay(Vector3 targetPoint, float delay)
        {
            if (delay > 0f)
            {
                yield return new WaitForSeconds(delay);
            }

            if (ball != null)
            {
                ball.Shoot(targetPoint);
            }
        }

        private void HandleGoal()
        {
            if (currentState != PenaltyGameState.Shooting) return;
            currentState = PenaltyGameState.Result;

            if (uiManager != null) uiManager.UpdateRoundResult(currentRound - 1, true);
            if (ronaldoAnimator != null) ronaldoAnimator.PlayCelebrate();

            if (currentRound >= 3)
            {
                // Sút thành công cả 3 quả -> đợi 2s rồi tự động reset lượt mới
                Invoke(nameof(RestartGame), 2.0f);
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
            currentState = PenaltyGameState.Lose;

            if (uiManager != null) uiManager.UpdateRoundResult(currentRound - 1, false);
            if (ronaldoAnimator != null) ronaldoAnimator.PlayDisappointed();

            if (uiManager != null)
            {
                uiManager.ShowLoseScreen(2.0f, () =>
                {
                    RestartGame();
                });
            }
            else
            {
                Invoke(nameof(RestartGame), 2f);
            }
        }

        private IEnumerator NextRoundRoutine()
        {
            yield return new WaitForSeconds(delayBetweenRounds);
            if (ball != null) ball.ResetBall();
            StartRound(currentRound);
        }

        public void RestartGame()
        {
            InitGameFlow();
        }
    }
}
