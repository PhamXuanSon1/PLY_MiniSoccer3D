using UnityEngine;
using DG.Tweening;

public class ChoiceBoard : MonoBehaviour
{
    [Header("Renderers")]
    [Tooltip("Renderer hiển thị hình ảnh của bảng lựa chọn")]
    [SerializeField] private SpriteRenderer spriteRenderer;

    [Tooltip("Renderer hiển thị khung viền của bảng lựa chọn")]
    [SerializeField] private SpriteRenderer borderRenderer;

    [Header("Choice Settings")]
    [Tooltip("Loại lựa chọn của bảng (Tăng/Giảm chỉ số...)")]
    [SerializeField] private EChoiceType choiceBoardType = EChoiceType.IncreaseGeneric;

    public EChoiceType ChoiceType => choiceBoardType;
    public SpriteRenderer VisualRender => spriteRenderer;

    private Sequence choosenSeq;

    private void Awake()
    {
        if (spriteRenderer == null) spriteRenderer = GetComponent<SpriteRenderer>();
    }

    public void AssignVisualData(Sprite newSprite)
    {
        if (spriteRenderer != null) spriteRenderer.sprite = newSprite;
    }

    public void SetChoiceBoardType(EChoiceType choiceType)
    {
        choiceBoardType = choiceType;
    }

    public void AssignData(ChoiceData choiceData)
    {
        if (choiceData == null) return;
        if (spriteRenderer != null) spriteRenderer.sprite = choiceData.VisualSprite;
        choiceBoardType = choiceData.ChoiceType;
    }

    public void PlayChooseSequence()
    {
        choosenSeq?.Kill();
        choosenSeq = DOTween.Sequence();

        float targetZ = transform.localPosition.z + 5f;
        choosenSeq.Append(transform.DOLocalMoveZ(targetZ, 0.5f));

        if (spriteRenderer != null) choosenSeq.Join(spriteRenderer.DOFade(0f, 0.5f));
        if (borderRenderer != null) choosenSeq.Join(borderRenderer.DOFade(0f, 0.5f));

        choosenSeq.OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }
}

[System.Serializable]
public class ChoiceData
{
    [Header("Choice Data")]
    [Tooltip("Hình ảnh đại diện cho lựa chọn này")]
    public Sprite VisualSprite;

    [Tooltip("Loại lựa chọn tương ứng")]
    public EChoiceType ChoiceType;
}

[System.Serializable]
public class ChoicePairData
{
    [Header("Pair Choices")]
    [Tooltip("Dữ liệu lựa chọn ô thứ nhất (trái)")]
    public ChoiceData choiceData1;

    [Tooltip("Dữ liệu lựa chọn ô thứ hai (phải)")]
    public ChoiceData choiceData2;
}

[CreateAssetMenu(fileName = "ChoiceBoardPairData", menuName = "Scriptable Objects/Data/ChoiceBoardPairData")]
public class ChoiceBoardPairData : ScriptableObject
{
    [Header("Data List")]
    [Tooltip("Danh sách các cặp lựa chọn trong màn chơi")]
    public ChoicePairData[] ChoicePairDatas;
}
