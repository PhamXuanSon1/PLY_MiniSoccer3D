using UnityEngine;
using DG.Tweening;

public class UIPulse : MonoBehaviour
{
    [Header("Pulse Settings")]
    [Tooltip("Kích thước phóng to mục tiêu khi tạo hiệu ứng nảy")]
    [SerializeField] private Vector3 targetScale = new Vector3(1.1f, 1.1f, 1.1f);

    [Tooltip("Thời gian thực hiện một lượt phóng to/thu nhỏ (giây)")]
    [SerializeField] private float duration = 0.5f;

    [Tooltip("Đường cong biến thiên (Ease) của animation DOTween")]
    [SerializeField] private Ease ease = Ease.InOutSine;

    private RectTransform rectTransform;
    private Vector3 originalScale;
    private Tween pulseTween;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        if (rectTransform != null)
        {
            originalScale = rectTransform.localScale;
        }
    }

    private void OnEnable()
    {
        if (rectTransform == null) return;
        rectTransform.localScale = originalScale;

        pulseTween = rectTransform
            .DOScale(targetScale, duration)
            .SetEase(ease)
            .SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        pulseTween?.Kill();

        if (rectTransform != null)
        {
            rectTransform.localScale = originalScale;
        }
    }
}
