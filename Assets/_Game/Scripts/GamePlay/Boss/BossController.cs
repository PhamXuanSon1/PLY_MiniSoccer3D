using UnityEngine;
using DG.Tweening;

public class BossController : MonoBehaviour
{
    [Header("Visual References")]
    [Tooltip("SpriteRenderer hiển thị hình ảnh của Boss")]
    [SerializeField] private SpriteRenderer bossSpriteRenderer;

    [Tooltip("GameObject hiển thị hình ảnh của Cầu thủ (Character Visual)")]
    [SerializeField] private GameObject characterVisual;

    [Header("Fight Effect")]
    [Tooltip("GameObject / ParticleSystem hiệu ứng mây đối kháng (FightingCloud)")]
    [SerializeField] private GameObject fightingCloud;

    [Header("Result Showcase")]
    [Tooltip("GameObject hiển thị kết quả sau khi đấu với Boss")]
    [SerializeField] private GameObject resultObject;

    [Tooltip("SpriteRenderer trên Result Object dùng để gán Sprite kết quả")]
    [SerializeField] private SpriteRenderer resultSpriteRenderer;

    [Tooltip("Sprite hiển thị khi Cầu thủ Chiến thắng Boss")]
    [SerializeField] private Sprite winSprite;

    [Tooltip("Sprite hiển thị khi Cầu thủ Thất bại trước Boss")]
    [SerializeField] private Sprite lossSprite;

    [Tooltip("GameObject phụ hiện lên cùng lúc với Win Sprite (Chỉ bật khi Thắng)")]
    [SerializeField] private GameObject extraWinObject;

    [Header("UI Result Panels")]
    [Tooltip("UI Panel hiển thị màn hình Chiến Thắng (Win Panel)")]
    [SerializeField] private GameObject winPanel;

    [Tooltip("UI Panel hiển thị màn hình Thất Bại (Lose Panel)")]
    [SerializeField] private GameObject losePanel;

    [Tooltip("Danh sách các GameObject phụ cần tự động tắt khi UI Result xuất hiện (ví dụ resultObject, extraWinObject...)")]
    [SerializeField] private GameObject[] extraObjectsToHide;

    [Header("Audio Settings (Ply_SoundManager)")]
    [Tooltip("Loại âm thanh phát khi hiệu ứng FightingCloud xuất hiện")]
    [SerializeField] private FxType fightingCloudFx = FxType.FightingCloud;

    [Tooltip("Loại âm thanh phát khi màn hình Win Panel xuất hiện")]
    [SerializeField] private FxType winPanelFx = FxType.PlayerWin;

    [Tooltip("Loại âm thanh phát khi màn hình Lose Panel xuất hiện")]
    [SerializeField] private FxType losePanelFx = FxType.PlayerLoose;


    [Header("Timing Settings")]
    [Tooltip("Thời gian chờ (giây) sau khi đi qua cổng cuối trước khi kích hoạt đấu Boss (ví dụ 1.5s tương ứng đi được nửa đoạn đường còn lại)")]
    [SerializeField] private float delayAfterLastBoard = 1.5f;

    [Tooltip("Thời gian (giây) hiển thị hiệu ứng mây đối kháng FightingCloud")]
    [SerializeField] private float fightDuration = 3f;

    [Tooltip("Thời gian (giây) hiển thị Result Object trước khi bật màn hình Win/Loss UI")]
    [SerializeField] private float showResultDuration = 2f;

    [Header("Runtime Status")]
    [Tooltip("Cấp độ hiện tại của Cầu thủ (Tự động cập nhật để tiện theo dõi)")]
    [SerializeField] private int currentPlayerLevel = 1;

    private Sequence bossSeq;
    private bool isSequenceStarted;
    private bool canClickToStore;
    private PlayerController currentPlayer;

    private void Start()
    {
        canClickToStore = false;
        if (fightingCloud != null) fightingCloud.SetActive(false);
        if (resultObject != null) resultObject.SetActive(false);
        if (extraWinObject != null) extraWinObject.SetActive(false);
        if (winPanel != null) winPanel.SetActive(false);
        if (losePanel != null) losePanel.SetActive(false);

        ChoiceBoardHolder.OnLastBoardPassed += OnLastBoardPassed;
        GameManager.OnGameEnded += OnGameEnded;
    }

    private void Update()
    {
        if (currentPlayer == null) currentPlayer = FindObjectOfType<PlayerController>();
        if (currentPlayer != null)
        {
            currentPlayerLevel = currentPlayer.CurrentLevel;
        }

        if (canClickToStore)
        {
            if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
            {
                canClickToStore = false;
                GameManager.GotoStore();
            }
        }
    }

    private void OnDestroy()
    {
        ChoiceBoardHolder.OnLastBoardPassed -= OnLastBoardPassed;
        GameManager.OnGameEnded -= OnGameEnded;
        bossSeq?.Kill();
    }

    private void OnLastBoardPassed(PlayerController player)
    {
        if (isSequenceStarted) return;
        currentPlayer = player;
        bool isWin = GameManager.CheckWinCondition(player != null ? player.CurrentLevel : 1);
        StartBossSequence(isWin);
    }

    private void OnGameEnded(bool isWin)
    {
        if (isSequenceStarted) return;
        StartBossSequence(isWin);
    }

    public void StartBossSequence(bool isWin)
    {
        if (isSequenceStarted) return;
        isSequenceStarted = true;

        bossSeq?.Kill();
        bossSeq = DOTween.Sequence();
        bossSeq.SetUpdate(true); // Đảm bảo hoạt động kể cả khi timescale bị thay đổi

        // 1. Chờ delayAfterLastBoard (ví dụ 1.5s - đi nửa đoạn còn lại đến Boss)
        bossSeq.AppendInterval(delayAfterLastBoard);

        // 2. Tắt Boss & Character Visual, Dừng Player, Bật FightingCloud & Phát Sound từ SoundManager
        bossSeq.AppendCallback(() =>
        {
            if (currentPlayer == null) currentPlayer = FindObjectOfType<PlayerController>();
            if (currentPlayer != null)
            {
                currentPlayer.StopMoving();
            }

            if (bossSpriteRenderer != null) bossSpriteRenderer.gameObject.SetActive(false);
            if (characterVisual != null) characterVisual.SetActive(false);

            if (fightingCloud != null)
            {
                fightingCloud.SetActive(true);
                ParticleSystem ps = fightingCloud.GetComponent<ParticleSystem>();
                if (ps != null) ps.Play();
            }

            Ply_SoundManager.Instance?.PlayFx(fightingCloudFx);
        });

        // 3. Sau fightDuration (ví dụ 3s): Tắt FightingCloud, Bật resultObject, Gán Win/Loss Sprite, Bật extraWinObject & Phát Sound Win/Lose ngay
        bossSeq.AppendInterval(fightDuration);
        bossSeq.AppendCallback(() =>
        {
            if (fightingCloud != null) fightingCloud.SetActive(false);

            if (resultObject != null) resultObject.SetActive(true);

            if (resultSpriteRenderer != null)
            {
                resultSpriteRenderer.sprite = isWin ? winSprite : lossSprite;
            }

            if (isWin && extraWinObject != null)
            {
                extraWinObject.SetActive(true);
            }

            // Phát âm thanh Win/Lose ngay khi hiện Result Sprite
            Ply_SoundManager.Instance?.PlayFx(isWin ? winPanelFx : losePanelFx);
        });

        // 4. Sau showResultDuration (ví dụ 2s): Tắt các extraObjectsToHide, Bật màn hình Win/Loss UI Panel & Tắt BGM
        bossSeq.AppendInterval(showResultDuration);
        bossSeq.AppendCallback(() =>
        {
            // Tắt BGM nhạc nền khi hiển thị màn hình kết quả UI
            Ply_SoundManager.Instance?.StopBGM();

            if (extraObjectsToHide != null)
            {
                foreach (var obj in extraObjectsToHide)
                {
                    if (obj != null) obj.SetActive(false);
                }
            }

            if (isWin)
            {
                if (winPanel != null) winPanel.SetActive(true);
            }
            else
            {
                if (losePanel != null) losePanel.SetActive(true);
            }

            canClickToStore = true;
        });
    }
}
