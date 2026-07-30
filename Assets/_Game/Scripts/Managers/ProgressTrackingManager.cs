using UnityEngine;

public class ProgressTrackingManager : MonoBehaviour
{
    public static ProgressTrackingManager Instance { get; private set; }

    [Header("Progress Settings")]
    [Tooltip("Tổng số điểm/cổng tối đa (Tự động lấy dựa trên số lượng cổng sinh ra trong ChoiceBoardPlacer)")]
    public int maxScore = 5;

    [Header("Debug (Chỉ xem khi đang chơi)")]
    [Tooltip("Số điểm hiện tại đang đạt được")]
    [SerializeField] private int currentScore = 0;

    [Tooltip("Phần trăm tiến độ hiện tại (%)")]
    [SerializeField] private int currentPercent = 0;

    private bool isStarted = false;
    private bool pass25 = false;
    private bool pass50 = false;
    private bool pass75 = false;
    private bool pass100 = false;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else if (Instance != this)
        {
            Destroy(gameObject);
            return;
        }
    }

    private void Start()
    {
        int dynamicMaxScore = GetDynamicMaxScore();
        if (dynamicMaxScore > 0)
        {
            maxScore = dynamicMaxScore;
        }

        GameManager.OnGameEnded += OnGameEnded;
    }

    private void OnDestroy()
    {
        GameManager.OnGameEnded -= OnGameEnded;
    }

    /// <summary>
    /// Cộng thêm điểm (mặc định thêm 1). Bạn có thể gọi hàm này mỗi khi user hoàn thành 1 item/cổng.
    /// Vd: ProgressTrackingManager.Instance.AddProgress();
    /// </summary>
    public void AddProgress(int amount = 1)
    {
        UpdateGameProgress(currentScore + amount);
    }

    /// <summary>
    /// Gán trực tiếp số điểm hiện tại và kiểm tra %
    /// </summary>
    public void UpdateGameProgress(int score)
    {
        currentScore = score;

        int dynamicMaxScore = GetDynamicMaxScore();
        if (dynamicMaxScore > 0)
        {
            maxScore = dynamicMaxScore;
        }

        // Bắn event Started ngay lần đầu tiên user hoàn thành 1 item
        if (!isStarted && currentScore > 0)
        {
            AppLovinAnalytics.TrackChallengeStarted();
            Debug.Log("Track: Challenge Started");
            isStarted = true;
        }

        if (maxScore <= 0) return; // Tránh lỗi chia cho 0 nếu quên set maxScore

        int progressPercent = (currentScore * 100) / maxScore;
        currentPercent = progressPercent; // Lưu lại để hiện ra ngoài Inspector

        if (progressPercent >= 25 && !pass25)
        {
            AppLovinAnalytics.TrackChallengePass25();
            Debug.Log("Track: Challenge Pass 25%");
            pass25 = true;
        }

        if (progressPercent >= 50 && !pass50)
        {
            AppLovinAnalytics.TrackChallengePass50();
            Debug.Log("Track: Challenge Pass 50%");
            pass50 = true;
        }

        if (progressPercent >= 75 && !pass75)
        {
            AppLovinAnalytics.TrackChallengePass75();
            Debug.Log("Track: Challenge Pass 75%");
            pass75 = true;
        }

        if (progressPercent >= 100 && !pass100)
        {
            AppLovinAnalytics.TrackChallengeSolved();
            Debug.Log("Track: Challenge Pass 100% (Solved)");
            pass100 = true;
        }
    }

    private void OnGameEnded(bool winState)
    {
        if (winState)
        {
            AppLovinAnalytics.TrackChallengeSolved();
        }
        else
        {
            AppLovinAnalytics.TrackChallengeFailed();
        }
    }

    private int GetDynamicMaxScore()
    {
        ChoiceBoardPlacer placer = FindObjectOfType<ChoiceBoardPlacer>();
        if (placer != null)
        {
            int count = placer.SpawnedCount;
            if (count > 0) return count;
        }

        return maxScore;
    }
}
