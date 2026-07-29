using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class UIProgressBar : MonoBehaviour
{
    [Header("UI References")]
    [Tooltip("Image hiển thị phần tiến trình (Fill Image)")]
    [SerializeField] private Image fillImage;

    [Tooltip("Image hiển thị phông nền của thanh tiến trình")]
    [SerializeField] private Image fillBackground;

    private void Start()
    {
        GameManager.OnGameEnded += OnGameEnded;
        UIManager.OnCharacterStartMove += OnCharacterStartMove;
    }

    private void OnDestroy()
    {
        GameManager.OnGameEnded -= OnGameEnded;
        UIManager.OnCharacterStartMove -= OnCharacterStartMove;
    }

    private void OnCharacterStartMove(float totalMoveTime)
    {
        if (fillImage != null)
        {
            fillImage.DOFillAmount(1, totalMoveTime);
        }
    }

    private void OnGameEnded(bool winState)
    {
        gameObject.SetActive(false);
        if (fillImage != null) fillImage.enabled = false;
        if (fillBackground != null) fillBackground.enabled = false;
    }
}
