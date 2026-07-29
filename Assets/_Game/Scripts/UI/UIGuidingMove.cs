using DG.Tweening;
using UnityEngine;

public class UIGuidingMove : MonoBehaviour
{
    [Header("UI Component")]
    [Tooltip("RectTransform của đối tượng hướng dẫn di chuyển (ví dụ: Icon bàn tay)")]
    [SerializeField] private RectTransform target;

    [Header("Movement")]
    [Tooltip("Vị trí bắt đầu di chuyển (Anchored Position)")]
    [SerializeField] private Vector2 startPosition = new Vector2(-230f, 0f);

    [Tooltip("Vị trí kết thúc di chuyển (Anchored Position)")]
    [SerializeField] private Vector2 endPosition = new Vector2(290f, 0f);

    [Tooltip("Thời gian thực hiện di chuyển")]
    [SerializeField] private float duration = 0.8f;

    [Tooltip("Kiểu đường cong di chuyển Ease của DOTween")]
    [SerializeField] private Ease ease = Ease.Linear;

    [Tooltip("Tự động dịch chuyển về vị trí bắt đầu (Start Position) sau khi di chuyển xong tới End Position")]
    [SerializeField] private bool resetToStartOnComplete = false;

    [Header("Looping")]
    [Tooltip("Bật/Tắt chế độ lặp lại")]
    [SerializeField] private bool loop = true;

    [Tooltip("Số lần lặp lại (-1 là lặp vô hạn)")]
    [SerializeField] private int loopCount = -1;

    [Tooltip("Kiểu lặp lại (Yoyo, Restart, Incremental)")]
    [SerializeField] private LoopType loopType = LoopType.Yoyo;

    private Tween moveTween;
    private Sequence moveSequence;

    private void Awake()
    {
        if (target == null)
        {
            target = GetComponent<RectTransform>();
        }
    }

    private void OnEnable()
    {
        PlaySequence();
    }

    private void OnDisable()
    {
        KillTween();
    }

    private void KillTween()
    {
        moveTween?.Kill();
        moveSequence?.Kill();
    }

    public void ResetSequence(Vector2 startPos, Vector2 endPos)
    {
        startPosition = startPos;
        endPosition = endPos;
        PlaySequence();
    }

    public void PlaySequence()
    {
        if (target == null) return;

        KillTween();
        target.anchoredPosition = startPosition;

        if (resetToStartOnComplete)
        {
            moveSequence = DOTween.Sequence();
            moveSequence.Append(target.DOAnchorPos(endPosition, duration).SetEase(ease));
            moveSequence.AppendCallback(() =>
            {
                if (target != null)
                {
                    target.anchoredPosition = startPosition;
                }
            });

            if (loop)
            {
                moveSequence.SetLoops(loopCount, LoopType.Restart);
            }
        }
        else
        {
            moveTween = target.DOAnchorPos(endPosition, duration)
                .SetEase(ease);

            if (loop)
            {
                moveTween.SetLoops(loopCount, loopType);
            }
        }
    }
}
