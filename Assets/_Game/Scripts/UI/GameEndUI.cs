using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class GameEndUI : MonoBehaviour
{
    [Header("UI Canvas Holders")]
    [Tooltip("Panel UI hiển thị khi người chơi chiến thắng")]
    [SerializeField] private GameObject winCanvasHolder;

    [Tooltip("Panel UI hiển thị khi người chơi thất bại")]
    [SerializeField] private GameObject loseCanvasHolder;

    [Tooltip("Nút bấm chuyển hướng người chơi tới cửa hàng (Store)")]
    [SerializeField] private Button toStoreButton;

    [Header("End Sequence Timings")]
    [Tooltip("Thời gian chờ (giây) trước khi xuất hiện giao diện kết thúc")]
    [SerializeField] private float endDisplayDelayTime = 2.5f;

    private Sequence seq;

    private void Start()
    {
        if (toStoreButton != null) toStoreButton.gameObject.SetActive(false);
        if (winCanvasHolder != null) winCanvasHolder.SetActive(false);
        if (loseCanvasHolder != null) loseCanvasHolder.SetActive(false);

        GameManager.OnGameEnded += OnGameEnded;
        if (toStoreButton != null) toStoreButton.onClick.AddListener(ToStoreButtonClicked);
    }

    private void OnDestroy()
    {
        GameManager.OnGameEnded -= OnGameEnded;
    }

    private void OnGameEnded(bool winState)
    {
        if (endDisplayDelayTime <= 0)
        {
            if (winCanvasHolder != null) winCanvasHolder.SetActive(winState);
            if (loseCanvasHolder != null) loseCanvasHolder.SetActive(!winState);
            if (toStoreButton != null) toStoreButton.gameObject.SetActive(true);
            return;
        }

        seq?.Kill();
        seq = DOTween.Sequence();
        seq.SetUpdate(true);
        seq.AppendInterval(endDisplayDelayTime);
        seq.AppendCallback(() =>
        {
            if (winState) Ply_SoundManager.Instance?.UpdateBGMState();
            if (winCanvasHolder != null) winCanvasHolder.SetActive(winState);
            if (loseCanvasHolder != null) loseCanvasHolder.SetActive(!winState);
            if (toStoreButton != null) toStoreButton.gameObject.SetActive(true);
        });
    }

    private void ToStoreButtonClicked()
    {
        GameManager.GotoStore();
    }
}
