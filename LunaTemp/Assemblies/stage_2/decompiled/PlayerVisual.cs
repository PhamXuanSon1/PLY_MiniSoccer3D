using System;
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

	[Header("Level Scale Settings")]
	[Tooltip("Tỉ lệ phóng to nhân vật theo từng cấp độ (Level 1, 2, 3, 4...). Mặc định Level 4 = 1.1")]
	[SerializeField]
	private float[] levelScaleMultipliers = new float[4] { 1f, 1f, 1f, 1.1f };

	[Tooltip("Tỉ lệ phóng to riêng cho Particle System (PowerFulPar) khi ở Level 4")]
	[SerializeField]
	private float maxPowerParScaleMultiplier = 1.1f;

	[Header("Bouncing Animation Settings")]
	[Tooltip("Tỉ lệ giảm chiều cao Y khi nhún nhảy (Mặc định 0.95 tương ứng 95% chiều cao)")]
	[SerializeField]
	private float bounceYMultiplier = 0.95f;

	[Tooltip("Thời gian một lượt nhún xuống / nảy lên (giây)")]
	[SerializeField]
	private float bounceDuration = 0.4f;

	[Tooltip("Thời gian hiệu ứng phóng to / thu nhỏ khi đổi Level (giây)")]
	[SerializeField]
	private float scaleTransitionDuration = 0.25f;

	[Header("Level 4 Animation Settings")]
	[Tooltip("Animator thực hiện hiệu ứng chuyển đổi khi lên Level 4 (Tùy chọn)")]
	[SerializeField]
	private Animator visualAnimator;

	[Tooltip("Tên Trigger parameter trong Animator Controller để chạy Animation (Mặc định: 1)")]
	[SerializeField]
	private string level4TriggerName = "1";

	[Tooltip("Thời gian chờ (giây) chạy hiệu ứng trước khi gán Sprite Level 4 (Mặc định 0.3s)")]
	[SerializeField]
	private float level4SpriteDelay = 0.3f;

	[Header("Effects")]
	[Tooltip("Particle System phát hiệu ứng khi nhân vật đạt sức mạnh tối đa")]
	[SerializeField]
	private ParticleSystem maxPowerPar;

	private Vector3 defaultScale;

	private Vector3 maxPowerParDefaultScale;

	private Color defaultColor = Color.white;

	private bool isScaleInitialized;

	private bool isGameStarted;

	private int currentLevelInternal = 1;

	private Tween level4DelayTween;

	private void Awake()
	{
		InitScale();
	}

	private void InitScale()
	{
		if (!isScaleInitialized)
		{
			defaultScale = base.transform.localScale;
			if (playerSpriteRenderer != null)
			{
				defaultColor = playerSpriteRenderer.color;
			}
			if (maxPowerPar != null)
			{
				maxPowerParDefaultScale = maxPowerPar.transform.localScale;
			}
			isScaleInitialized = true;
		}
	}

	private float GetScaleMultiplierForLevel(int level)
	{
		if (levelScaleMultipliers == null || levelScaleMultipliers.Length == 0)
		{
			return 1f;
		}
		int idx = Mathf.Clamp(level - 1, 0, levelScaleMultipliers.Length - 1);
		return levelScaleMultipliers[idx];
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
		GameManager.OnGameStart = (Action)Delegate.Combine(GameManager.OnGameStart, new Action(OnGameStart));
		UpdateVisualBylevel(1);
	}

	private void OnDestroy()
	{
		GameManager.OnGameStart = (Action)Delegate.Remove(GameManager.OnGameStart, new Action(OnGameStart));
		level4DelayTween?.Kill();
	}

	private void OnGameStart()
	{
		isGameStarted = true;
		StartBouncing();
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
		currentLevelInternal = currentLevel;
		level4DelayTween?.Kill();
		bool isMaxLevel = currentLevel >= 4;
		if (levelSprite != null && levelSprite.Length != 0)
		{
			int levelIdx = Mathf.Clamp(currentLevel - 1, 0, levelSprite.Length - 1);
			if (isMaxLevel)
			{
				if (visualAnimator != null)
				{
					visualAnimator.enabled = true;
					visualAnimator.SetTrigger(level4TriggerName);
				}
				level4DelayTween = DOVirtual.DelayedCall(level4SpriteDelay, delegate
				{
					if (visualAnimator != null)
					{
						visualAnimator.enabled = false;
					}
					if (playerSpriteRenderer != null)
					{
						playerSpriteRenderer.color = defaultColor;
					}
					AssingPlayerVisual(levelSprite[levelIdx]);
				});
			}
			else
			{
				if (visualAnimator != null)
				{
					visualAnimator.enabled = false;
				}
				if (playerSpriteRenderer != null)
				{
					playerSpriteRenderer.color = defaultColor;
				}
				AssingPlayerVisual(levelSprite[levelIdx]);
			}
		}
		if (maxPowerPar != null)
		{
			maxPowerPar.gameObject.SetActive(isMaxLevel);
		}
		if (isGameStarted)
		{
			StartBouncing();
			return;
		}
		float playerScaleMult = GetScaleMultiplierForLevel(currentLevel);
		Vector3 targetPlayerScale = defaultScale * playerScaleMult;
		Vector3 targetParScale = (isMaxLevel ? (maxPowerParDefaultScale * maxPowerParScaleMultiplier) : maxPowerParDefaultScale);
		base.transform.DOKill();
		base.transform.localScale = targetPlayerScale;
		if (maxPowerPar != null)
		{
			maxPowerPar.transform.DOKill();
			maxPowerPar.transform.localScale = targetParScale;
		}
	}

	private void StartBouncing()
	{
		InitScale();
		bool isMaxLevel = currentLevelInternal >= 4;
		float playerScaleMult = GetScaleMultiplierForLevel(currentLevelInternal);
		Vector3 targetPlayerScale = defaultScale * playerScaleMult;
		Vector3 targetParScale = (isMaxLevel ? (maxPowerParDefaultScale * maxPowerParScaleMultiplier) : maxPowerParDefaultScale);
		base.transform.DOKill();
		if (maxPowerPar != null)
		{
			maxPowerPar.transform.DOKill();
		}
		base.transform.DOScale(targetPlayerScale, scaleTransitionDuration).SetEase(Ease.OutBack).OnComplete(delegate
		{
			base.transform.DOScaleY(targetPlayerScale.y * bounceYMultiplier, bounceDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
		});
		if (maxPowerPar != null && isMaxLevel)
		{
			maxPowerPar.transform.DOScale(targetParScale, scaleTransitionDuration).SetEase(Ease.OutBack).OnComplete(delegate
			{
				maxPowerPar.transform.DOScaleY(targetParScale.y * bounceYMultiplier, bounceDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
			});
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
