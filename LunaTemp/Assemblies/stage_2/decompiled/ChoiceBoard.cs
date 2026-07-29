using DG.Tweening;
using UnityEngine;

public class ChoiceBoard : MonoBehaviour
{
	[Header("Renderers")]
	[Tooltip("Renderer hiển thị hình ảnh của bảng lựa chọn")]
	[SerializeField]
	private SpriteRenderer spriteRenderer;

	[Tooltip("Renderer hiển thị khung viền của bảng lựa chọn")]
	[SerializeField]
	private SpriteRenderer borderRenderer;

	[Header("Choice Settings")]
	[Tooltip("Loại lựa chọn của bảng (Tăng/Giảm chỉ số...)")]
	[SerializeField]
	private EChoiceType choiceBoardType = EChoiceType.IncreaseGeneric;

	private Sequence choosenSeq;

	public EChoiceType ChoiceType => choiceBoardType;

	public SpriteRenderer VisualRender => spriteRenderer;

	private void Awake()
	{
		if (spriteRenderer == null)
		{
			spriteRenderer = GetComponent<SpriteRenderer>();
		}
	}

	public void AssignVisualData(Sprite newSprite)
	{
		if (spriteRenderer != null)
		{
			spriteRenderer.sprite = newSprite;
		}
	}

	public void SetChoiceBoardType(EChoiceType choiceType)
	{
		choiceBoardType = choiceType;
	}

	public void AssignData(ChoiceData choiceData)
	{
		if (choiceData != null)
		{
			if (spriteRenderer != null)
			{
				spriteRenderer.sprite = choiceData.VisualSprite;
			}
			choiceBoardType = choiceData.ChoiceType;
		}
	}

	public void PlayChooseSequence()
	{
		choosenSeq?.Kill();
		choosenSeq = DOTween.Sequence();
		float targetZ = base.transform.localPosition.z + 5f;
		choosenSeq.Append(base.transform.DOLocalMoveZ(targetZ, 0.5f));
		if (spriteRenderer != null)
		{
			choosenSeq.Join(spriteRenderer.DOFade(0f, 0.5f));
		}
		if (borderRenderer != null)
		{
			choosenSeq.Join(borderRenderer.DOFade(0f, 0.5f));
		}
		choosenSeq.OnComplete(delegate
		{
			base.gameObject.SetActive(false);
		});
	}
}
