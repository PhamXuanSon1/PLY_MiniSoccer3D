using DG.Tweening;
using UnityEngine;

public class PlayerVisual : MonoBehaviour
{
	[Header("Renderers")]
	[Tooltip("SpriteRenderer chính hiển thị hình ảnh cầu thủ")]
	[SerializeField]
	private SpriteRenderer playerSpriteRenderer;

	[Tooltip("SpriteRenderer hiển thị bóng giả dưới chân cầu thủ")]
	[SerializeField]
	private SpriteRenderer fakeShadowRenderer;

	[Header("Level Visual Data")]
	[Tooltip("Mảng chứa hình ảnh cầu thủ tương ứng từng cấp độ (Level 1, 2, 3...)")]
	[SerializeField]
	private Sprite[] levelSprite;

	[Header("Level 4 Scale Settings")]
	[Tooltip("Tỉ lệ phóng to hình ảnh khi đạt Cấp độ 4 (Mặc định 1.1 tương ứng X1.1)")]
	[SerializeField]
	private float maxLevelScaleMultiplier = 1.1f;

	[Header("Effects")]
	[Tooltip("Particle System phát hiệu ứng khi nhân vật đạt sức mạnh tối đa")]
	[SerializeField]
	private ParticleSystem maxPowerPar;

	private Vector3 defaultScale;

	private bool isScaleInitialized;

	private void Awake()
	{
		InitScale();
	}

	private void InitScale()
	{
		if (!isScaleInitialized)
		{
			defaultScale = base.transform.localScale;
			isScaleInitialized = true;
		}
	}

	private void Start()
	{
		InitScale();
		if (maxPowerPar != null)
		{
			maxPowerPar.gameObject.SetActive(false);
		}
		if (levelSprite == null || levelSprite.Length == 0)
		{
			Debug.LogWarning("Sprites for player level are empty");
		}
	}

	public void AssingPlayerVisual(Sprite newVisual)
	{
		if (playerSpriteRenderer != null)
		{
			playerSpriteRenderer.sprite = newVisual;
		}
	}

	public void UpdateVisualBylevel(int currentLevel)
	{
		InitScale();
		if (levelSprite != null && levelSprite.Length != 0)
		{
			int level = Mathf.Clamp(currentLevel - 1, 0, levelSprite.Length - 1);
			AssingPlayerVisual(levelSprite[level]);
			bool isMaxLevel = currentLevel >= 4 || level == levelSprite.Length - 1;
			if (maxPowerPar != null)
			{
				maxPowerPar.gameObject.SetActive(isMaxLevel);
			}
			base.transform.DOKill();
			if (isMaxLevel)
			{
				base.transform.DOScale(defaultScale * maxLevelScaleMultiplier, 0.2f);
			}
			else
			{
				base.transform.DOScale(defaultScale, 0.2f);
			}
		}
	}

	public void ClearPlayerVisual()
	{
		AssingPlayerVisual(null);
	}

	public void SetVisualEnable(bool enableState)
	{
		if (playerSpriteRenderer != null)
		{
			playerSpriteRenderer.enabled = enableState;
		}
		if (fakeShadowRenderer != null)
		{
			fakeShadowRenderer.enabled = enableState;
		}
		if (maxPowerPar != null)
		{
			maxPowerPar.gameObject.SetActive(enableState);
		}
	}
}
