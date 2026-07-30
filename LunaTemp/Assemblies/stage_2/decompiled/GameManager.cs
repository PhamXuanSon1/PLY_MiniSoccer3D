using System;
using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	public static Action OnGameStart;

	public static Action<int> OnCharacterReachedTheEnd;

	public static Action<bool> OnGameEnded;

	private static bool isGamePaused;

	[Header("Game Rules")]
	[Tooltip("Cấp độ tối đa cầu thủ có thể đạt tới (Mặc định = 4)")]
	[SerializeField]
	private int maxLevel = 4;

	[Tooltip("Cấp độ tối thiểu cần đạt để tính chiến thắng khi tới đích (Win Level)")]
	[SerializeField]
	private int winLevel = 3;

	[Tooltip("Tổng thời gian di chuyển từ vị trí bắt đầu tới điểm đích (giây)")]
	[SerializeField]
	private float totalMoveTime = 10f;

	[Header("Runtime Status")]
	[Tooltip("Cấp độ hiện tại của Cầu thủ trong màn chơi (Tự động cập nhật để theo dõi)")]
	[SerializeField]
	private int currentPlayerLevel = 1;

	public static GameManager Instance { get; private set; }

	public static bool isGameEnded { get; private set; }

	public static bool IsGamePause => isGamePaused;

	public static Camera MainCamera { get; private set; }

	public int MaxLevel => maxLevel;

	public int WinLevel => winLevel;

	public float TotalMoveTime => totalMoveTime;

	public int CurrentPlayerLevel => currentPlayerLevel;

	private void Update()
	{
		PlayerController player = UnityEngine.Object.FindObjectOfType<PlayerController>();
		if (player != null)
		{
			currentPlayerLevel = player.CurrentLevel;
		}
	}

	public static bool CheckWinCondition(int currentLevel)
	{
		int targetWinLevel = ((Instance != null) ? Instance.winLevel : 4);
		return currentLevel >= targetWinLevel;
	}

	private void Awake()
	{
		MainCamera = Camera.main;
		if (Instance != null && Instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void Start()
	{
		OnGameEnded = (Action<bool>)Delegate.Combine(OnGameEnded, new Action<bool>(OnGameEnd));
		OnCharacterReachedTheEnd = (Action<int>)Delegate.Combine(OnCharacterReachedTheEnd, new Action<int>(OnCharacterReachedEnd));
		if (Ply_SoundManager.Instance != null)
		{
			Ply_SoundManager.Instance.UpdateBGMState();
		}
	}

	public static void PauseGame()
	{
		isGamePaused = true;
		Time.timeScale = 0f;
	}

	public static void UnPauseGame()
	{
		isGamePaused = false;
		Time.timeScale = 1f;
	}

	public static void GotoStore()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}

	private void OnGameEnd(bool winState)
	{
		isGameEnded = true;
	}

	private void OnCharacterReachedEnd(int currentLevel)
	{
		OnGameEnded?.Invoke(currentLevel >= winLevel);
	}
}
