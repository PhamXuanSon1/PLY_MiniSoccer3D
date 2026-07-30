using UnityEngine;
using DG.Tweening;

public class PlayerVisual : MonoBehaviour
{
    [Header("Renderers")]
    [Tooltip("SpriteRenderer chính hiển thị hình ảnh cầu thủ")]
    [SerializeField] private SpriteRenderer playerSpriteRenderer;

    [Tooltip("SpriteRenderer hiển thị bóng giả dưới chân cầu thủ")]
    [SerializeField] private SpriteRenderer fakeShadowRenderer;

    [Header("Level Visual Data")]
    [Tooltip("Mảng chứa hình ảnh cầu thủ tương ứng từng cấp độ (Level 1, 2, 3...)")]
    [SerializeField] private Sprite[] levelSprite;

    [Header("Level 4 Scale Settings")]
    [Tooltip("Tỉ lệ phóng to hình ảnh khi đạt Cấp độ 4 (Mặc định 1.1 tương ứng X1.1)")]
    [SerializeField] private float maxLevelScaleMultiplier = 1.1f;

    [Header("Bouncing Animation Settings")]
    [Tooltip("Tỉ lệ giảm chiều cao Y khi nhún nhảy (Mặc định 0.95 tương ứng 95% chiều cao)")]
    [SerializeField] private float bounceYMultiplier = 0.95f;

    [Tooltip("Thời gian một lượt nhún xuống / nảy lên (giây)")]
    [SerializeField] private float bounceDuration = 0.4f;

    [Header("Effects")]
    [Tooltip("Particle System phát hiệu ứng khi nhân vật đạt sức mạnh tối đa")]
    [SerializeField] private ParticleSystem maxPowerPar;

    private Vector3 defaultScale;
    private Vector3 maxPowerParDefaultScale;
    private bool isScaleInitialized;
    private bool isGameStarted;
    private int currentLevelInternal = 1;

    private void Awake()
    {
        InitScale();
    }

    private void InitScale()
    {
        if (!isScaleInitialized)
        {
            defaultScale = transform.localScale;
            if (maxPowerPar != null)
            {
                maxPowerParDefaultScale = maxPowerPar.transform.localScale;
            }
            isScaleInitialized = true;
        }
    }

    private void Start()
    {
        InitScale();

        if (maxPowerPar != null)
        {
            maxPowerPar.gameObject.SetActive(false);
        }

        if (levelSprite == null || levelSprite.Length <= 0)
        {
            Debug.LogWarning("Sprites for player level are empty");
        }

        GameManager.OnGameStart += OnGameStart;
        // Khởi tạo visual mặc định ở Level 1
        UpdateVisualBylevel(1);
    }

    private void OnDestroy()
    {
        GameManager.OnGameStart -= OnGameStart;
    }

    private void OnGameStart()
    {
        isGameStarted = true;
        StartBouncing();
    }

    public void AssingPlayerVisual(Sprite newVisual)
    {
        if (playerSpriteRenderer != null)
        {
            playerSpriteRenderer.sprite = newVisual;
        }
    }

    public void UpdateVisualBylevel(int currentLevel)
    {
        InitScale();
        currentLevelInternal = currentLevel;

        if (levelSprite != null && levelSprite.Length > 0)
        {
            int levelIdx = Mathf.Clamp(currentLevel - 1, 0, levelSprite.Length - 1);
            AssingPlayerVisual(levelSprite[levelIdx]);
        }

        bool isMaxLevel = (currentLevel >= 4);

        if (maxPowerPar != null)
        {
            maxPowerPar.gameObject.SetActive(isMaxLevel);
        }

        if (isGameStarted)
        {
            StartBouncing();
        }
        else
        {
            // Chưa click/chưa start game -> Đặt scale chuẩn không nhún nhảy
            Vector3 targetPlayerScale = isMaxLevel ? defaultScale * maxLevelScaleMultiplier : defaultScale;
            Vector3 targetParScale = isMaxLevel ? maxPowerParDefaultScale * maxLevelScaleMultiplier : maxPowerParDefaultScale;

            transform.DOKill();
            transform.localScale = targetPlayerScale;

            if (maxPowerPar != null)
            {
                maxPowerPar.transform.DOKill();
                maxPowerPar.transform.localScale = targetParScale;
            }
        }
    }

    private void StartBouncing()
    {
        InitScale();
        bool isMaxLevel = (currentLevelInternal >= 4);

        Vector3 targetPlayerScale = isMaxLevel ? defaultScale * maxLevelScaleMultiplier : defaultScale;
        Vector3 targetParScale = isMaxLevel ? maxPowerParDefaultScale * maxLevelScaleMultiplier : maxPowerParDefaultScale;

        // Dừng các tween cũ
        transform.DOKill();
        if (maxPowerPar != null) maxPowerPar.transform.DOKill();

        // Biến đổi mượt mà scale X,Y,Z sang scale mới (X1.1 nếu Level 4), sau đó lặp lại nhún nhảy Y
        transform.DOScale(targetPlayerScale, 0.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            transform.DOScaleY(targetPlayerScale.y * bounceYMultiplier, bounceDuration)
                     .SetEase(Ease.InOutSine)
                     .SetLoops(-1, LoopType.Yoyo);
        });

        if (maxPowerPar != null && isMaxLevel)
        {
            maxPowerPar.transform.DOScale(targetParScale, 0.25f).SetEase(Ease.OutBack).OnComplete(() =>
            {
                maxPowerPar.transform.DOScaleY(targetParScale.y * bounceYMultiplier, bounceDuration)
                         .SetEase(Ease.InOutSine)
                         .SetLoops(-1, LoopType.Yoyo);
            });
        }
    }

    public void ClearPlayerVisual()
    {
        AssingPlayerVisual(null);
    }

    public void SetVisualEnable(bool enableState)
    {
        if (playerSpriteRenderer != null) playerSpriteRenderer.enabled = enableState;
        if (fakeShadowRenderer != null) fakeShadowRenderer.enabled = enableState;
        if (maxPowerPar != null) maxPowerPar.gameObject.SetActive(enableState);
    }
}
