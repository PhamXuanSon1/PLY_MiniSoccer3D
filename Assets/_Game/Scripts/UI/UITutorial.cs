using UnityEngine;

public class UITutorial : MonoBehaviour
{
    [Header("UI References")]
    [Tooltip("Panel UI chứa các thành phần hướng dẫn chơi ban đầu")]
    [SerializeField] private GameObject tutorialUIHolder;

    private void Start()
    {
        if (tutorialUIHolder != null) tutorialUIHolder.SetActive(true);

        GameManager.OnGameStart += OnGameStarted;
        GameManager.OnGameEnded += OnGameEnded;

        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnClickedDown += OnClicked;
        }
    }

    private void OnDestroy()
    {
        GameManager.OnGameStart -= OnGameStarted;
        GameManager.OnGameEnded -= OnGameEnded;

        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnClickedDown -= OnClicked;
        }
    }

    private void OnGameEnded(bool obj)
    {
        gameObject.SetActive(false);
    }

    private void OnClicked(Vector2 vector)
    {
        GameManager.OnGameStart?.Invoke();
        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnClickedDown -= OnClicked;
        }
    }

    private void OnGameStarted()
    {
        if (tutorialUIHolder != null) tutorialUIHolder.SetActive(false);
        GameManager.OnGameStart -= OnGameStarted;
    }
}
