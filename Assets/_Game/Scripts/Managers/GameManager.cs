using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    public static Action OnGameStart;
    public static Action<int> OnCharacterReachedTheEnd; // PlayerLevel
    public static Action<bool> OnGameEnded;
    public static bool isGameEnded { get; private set; }
    private static bool isGamePaused;
    public static bool IsGamePause => isGamePaused;

    public static Camera MainCamera { get; private set; }

    [Header("Game Rules")]
    [Tooltip("Cấp độ tối đa cần đạt để tính chiến thắng khi tới đích")]
    [SerializeField] private int winLevel = 4;
    public int MaxLevel => winLevel;

    private void Awake()
    {
        MainCamera = Camera.main;
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    private void Start()
    {
        OnGameEnded += OnGameEnd;
        OnCharacterReachedTheEnd += OnCharacterReachedEnd;
        if (AudioManager.Instance != null)
        {
            AudioManager.PlayMusic(MusicID.Gameplay, 0.6f);
        }
    }

    public static void PauseGame()
    {
        isGamePaused = true;
        Time.timeScale = 0;
    }

    public static void UnPauseGame()
    {
        isGamePaused = false;
        Time.timeScale = 1;
    }

    public static void GotoStore()
    {
#if LUNA_PLAYABLE
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
#else
        Debug.Log("Redirecting to Store...");
#endif
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
