using System;
using DG.Tweening;
using UnityEngine;

public class PlayerFootball : MonoBehaviour
{
    [Header("Components")]
    [Tooltip("Tham chiếu tới script kiểm soát animation của cầu thủ")]
    [SerializeField] private PlayerAnimation playerAnim;
    private int currentLevel = 1;

    public int CurrentLevel => currentLevel;
    public PlayerAnimation PlayerAnim => playerAnim;

    private void Awake()
    {
        if (playerAnim == null)
        {
            playerAnim = GetComponent<PlayerAnimation>();
            if (playerAnim == null)
            {
                playerAnim = GetComponentInChildren<PlayerAnimation>();
            }
        }
    }

    private void Start()
    {
        GameManager.OnGameEnded += OnGameEnded;
        if (playerAnim != null)
        {
            playerAnim.SetRunning(false);
        }

        GameManager.OnGameStart += OnGameStart;
    }

    private void OnGameStart()
    {
        if (playerAnim != null)
        {
            playerAnim.SetRunning(true);
        }
        GameManager.OnGameStart -= OnGameStart;
    }

    private void OnGameEnded(bool win)
    {
        if (win && playerAnim != null)
        {
            playerAnim.SetRunning(false);
        }
    }

    public void MoveTo(Vector3 newPos, float moveTime)
    {
        transform.DOKill();
        transform.DOLocalMove(newPos, moveTime);
    }

    public void UpgradePlayer(int upgradePointsChanged)
    {
        if (currentLevel + upgradePointsChanged >= 4) 
            AudioManager.PlaySound(SoundID.MaxLevel);

        if (GameManager.Instance != null && currentLevel + upgradePointsChanged > GameManager.Instance.MaxLevel) 
            return;

        AudioManager.PlaySound((upgradePointsChanged > 0) ? SoundID.RightChoice : SoundID.WrongChoice);

        currentLevel += upgradePointsChanged;
        currentLevel = Mathf.Clamp(currentLevel, 1, 4);
    }
}

public class PlayerAnimation : MonoBehaviour
{
    [Header("Components")]
    [Tooltip("Animator xử lý các trạng thái hoạt họa của nhân vật")]
    [SerializeField] private Animator animator;

    private void Awake()
    {
        if (animator == null) animator = GetComponent<Animator>();
    }

    public void SetRunning(bool isRunning)
    {
        if (animator != null)
        {
            animator.SetBool("IsRunning", isRunning);
        }
    }
}
