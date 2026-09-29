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

	[Header("Max Level Boost Settings")]
	[Tooltip("Tỉ lệ phóng to thêm khi vừa lên Max Level (nhân với Level Scale Multiplier)")]
	[SerializeField]
	private float maxBoostScaleMultiplier = 1.4f;

	[Tooltip("Thời gian nhân vật to lên + nháy nháy trước khi về lại bình thường (giây)")]
	[SerializeField]
	private float maxBoostDuration = 2.25f;

	[Tooltip("Thời gian thu nhỏ PowerFullPar về 0 trước khi tắt (giây)")]
	[SerializeField]
	private float maxPowerParHideDuration = 0.25f;

	[Header("Max Level Glow Animation (như video ref)")]
	[Tooltip("Bấm Tools > PLY > Build Max Level Glow Animation để tự tạo layer, AnimationClip và gán các ô dưới đây")]
	[SerializeField]
	private AnimationClip maxGlowClip;

	[Tooltip("Tên State chứa Max Glow Clip trong Animator Controller")]
	[SerializeField]
	private string maxGlowStateName = "MaxLevelGlow";

	[Tooltip("Tốc độ chạy animation (1 = đúng tốc độ video, ~4s)")]
	[SerializeField]
	private float glowTimelineSpeed = 1f;

	[Tooltip("Độ sáng viền hào quang giữ lại sau khi hết Boost (0 = tắt hẳn)")]
	[Range(0f, 1f)]
	[SerializeField]
	private float rimGlowAlphaAfterBoost = 0f;

	[Tooltip("Các layer glow con (Editor tool tự gán): hào quang sau, bóng trắng, hào quang trước, FX mờ/lệch màu")]
	[SerializeField]
	private SpriteRenderer rimGlowBack;

	[SerializeField]
	private SpriteRenderer whiteFront;

	[SerializeField]
	private SpriteRenderer glowFront;

	[SerializeField]
	private SpriteRenderer burstLayer;

	[Header("Max Level Glow Sprites (dùng cho Editor tool)")]
	[Tooltip("Sprite bóng trắng cùng dáng với Sprite Level 4 (Ply23/fullWhite)")]
	[SerializeField]
	private Sprite glowSilhouetteSprite;

	[Tooltip("Sprite hào quang trắng đã làm mờ viền (Ply23/fullWhiteGlow)")]
	[SerializeField]
	private Sprite glowHaloSprite;

	[Tooltip("Sprite nhân vật trắng chói bị mờ chuyển động ngang (Ply23/fx_blurBurst)")]
	[SerializeField]
	private Sprite blurBurstSprite;

	[Tooltip("Sprite ảnh màu mờ chuyển động ngang, tối (Ply23/fx_blurColor)")]
	[SerializeField]
	private Sprite blurColorSprite;

	[Tooltip("Sprite mờ chuyển động + lệch màu RGB (Ply23/fx_blurChroma)")]
	[SerializeField]
	private Sprite blurChromaSprite;

	[Tooltip("Sprite nhân vật có viền lệch màu RGB nhẹ (Ply23/fx_chromaEdge)")]
	[SerializeField]
	private Sprite chromaEdgeSprite;

	[Header("Effects")]
	[Tooltip("Particle System phát hiệu ứng khi nhân vật đạt sức mạnh tối đa")]
	[SerializeField]
	private ParticleSystem maxPowerPar;

	[Tooltip("Bật PowerFullPar khi Boost (video ref không có particle -> mặc định tắt)")]
	[SerializeField]
	private bool showPowerFullParOnBoost = false;

	private Vector3 defaultScale;

	private Vector3 maxPowerParDefaultScale;

	private Color defaultColor = Color.white;

	private bool isScaleInitialized;

	private bool isGameStarted;

	private int currentLevelInternal = 1;

	private Tween level4DelayTween;

	private Tween maxBoostEndTween;

	private bool isGlowPlaying;

	private bool isMaxBoosting;

	private bool UseGlowEffect => visualAnimator != null && maxGlowClip != null;

	private void Awake()
	{
		InitScale();
		ResetGlowLayers();
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
		maxBoostEndTween?.Kill();
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
		bool wasMaxLevel = currentLevelInternal >= 4;
		currentLevelInternal = currentLevel;
		level4DelayTween?.Kill();
		bool isMaxLevel = currentLevel >= 4;
		if (isMaxLevel && !wasMaxLevel)
		{
			BeginMaxBoost();
		}
		else if (!isMaxLevel)
		{
			CancelMaxBoost();
		}
		if (levelSprite != null && levelSprite.Length != 0)
		{
			int levelIdx = Mathf.Clamp(currentLevel - 1, 0, levelSprite.Length - 1);
			if (isMaxLevel && UseGlowEffect)
			{
				if (visualAnimator != null)
				{
					visualAnimator.enabled = false;
				}
				AssingPlayerVisual(levelSprite[levelIdx]);
				if (isMaxBoosting)
				{
					PlayGlowSequence();
				}
			}
			else if (isMaxLevel)
			{
				if (visualAnimator != null)
				{
					visualAnimator.enabled = true;
					visualAnimator.SetTrigger(level4TriggerName);
				}
				AssingPlayerVisual(levelSprite[levelIdx]);
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
					if (isMaxBoosting)
					{
						PlayGlowSequence();
					}
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
		if (isGameStarted)
		{
			StartBouncing();
			return;
		}
		base.transform.DOKill();
		base.transform.localScale = GetTargetPlayerScale();
		if (maxPowerPar != null && isMaxBoosting)
		{
			maxPowerPar.transform.DOKill();
			maxPowerPar.transform.localScale = maxPowerParDefaultScale * maxPowerParScaleMultiplier;
		}
	}

	private Vector3 GetTargetPlayerScale()
	{
		float mult = GetScaleMultiplierForLevel(currentLevelInternal);
		if (isMaxBoosting)
		{
			mult *= maxBoostScaleMultiplier;
		}
		return defaultScale * mult;
	}

	private void BeginMaxBoost()
	{
		isMaxBoosting = true;
		if (maxPowerPar != null && showPowerFullParOnBoost)
		{
			maxPowerPar.transform.DOKill();
			maxPowerPar.transform.localScale = maxPowerParDefaultScale;
			maxPowerPar.gameObject.SetActive(true);
		}
		maxBoostEndTween?.Kill();
		if (!UseGlowEffect)
		{
			maxBoostEndTween = DOVirtual.DelayedCall(maxBoostDuration, EndMaxBoost);
		}
	}

	private void EndMaxBoost()
	{
		isMaxBoosting = false;
		StopGlowSequence(rimGlowAlphaAfterBoost);
		if (isGameStarted)
		{
			StartBouncing();
		}
		else
		{
			base.transform.DOKill();
			base.transform.DOScale(GetTargetPlayerScale(), scaleTransitionDuration).SetEase(Ease.OutBack);
		}
		if (maxPowerPar != null && maxPowerPar.gameObject.activeSelf)
		{
			maxPowerPar.transform.DOKill();
			maxPowerPar.transform.DOScale(Vector3.zero, maxPowerParHideDuration).SetEase(Ease.InBack).OnComplete(delegate
			{
				maxPowerPar.gameObject.SetActive(false);
			});
		}
	}

	private void CancelMaxBoost()
	{
		maxBoostEndTween?.Kill();
		isMaxBoosting = false;
		StopGlowSequence(0f);
		if (maxPowerPar != null)
		{
			maxPowerPar.transform.DOKill();
			maxPowerPar.gameObject.SetActive(false);
		}
	}

	private void PlayGlowSequence()
	{
		if (UseGlowEffect)
		{
			SetGlowLayersEnabled(true);
			visualAnimator.enabled = true;
			visualAnimator.speed = Mathf.Max(0.01f, glowTimelineSpeed);
			visualAnimator.Play(maxGlowStateName, 0, 0f);
			isGlowPlaying = true;
		}
	}

	private void Update()
	{
		if (!isGlowPlaying || visualAnimator == null || !visualAnimator.enabled)
		{
			return;
		}
		AnimatorStateInfo state = visualAnimator.GetCurrentAnimatorStateInfo(0);
		if (state.shortNameHash == Animator.StringToHash(maxGlowStateName) && state.normalizedTime >= 1f)
		{
			isGlowPlaying = false;
			if (isMaxBoosting)
			{
				EndMaxBoost();
			}
		}
	}

	private void StopGlowSequence(float keepRimAlpha)
	{
		isGlowPlaying = false;
		if (visualAnimator != null)
		{
			visualAnimator.enabled = false;
			visualAnimator.speed = 1f;
		}
		if (playerSpriteRenderer != null)
		{
			playerSpriteRenderer.color = defaultColor;
		}
		SetLayerAlpha(whiteFront, 0f);
		SetLayerAlpha(glowFront, 0f);
		SetLayerAlpha(burstLayer, 0f);
		if (!(rimGlowBack != null))
		{
			return;
		}
		rimGlowBack.DOKill();
		rimGlowBack.DOFade(keepRimAlpha, scaleTransitionDuration).OnComplete(delegate
		{
			if (keepRimAlpha <= 0f)
			{
				SetGlowLayersEnabled(false);
			}
		});
	}

	private void ResetGlowLayers()
	{
		SetLayerAlpha(rimGlowBack, 0f);
		SetLayerAlpha(whiteFront, 0f);
		SetLayerAlpha(glowFront, 0f);
		SetLayerAlpha(burstLayer, 0f);
		SetGlowLayersEnabled(false);
	}

	private void SetLayerAlpha(SpriteRenderer sr, float alpha)
	{
		if (!(sr == null))
		{
			sr.DOKill();
			Color c = sr.color;
			c.a = alpha;
			sr.color = c;
		}
	}

	private void SetGlowLayersEnabled(bool enabled)
	{
		if (rimGlowBack != null)
		{
			rimGlowBack.enabled = enabled;
		}
		if (whiteFront != null)
		{
			whiteFront.enabled = enabled;
		}
		if (glowFront != null)
		{
			glowFront.enabled = enabled;
		}
		if (burstLayer != null)
		{
			burstLayer.enabled = enabled;
		}
	}

	private void StartBouncing()
	{
		InitScale();
		Vector3 targetPlayerScale = GetTargetPlayerScale();
		Vector3 targetParScale = maxPowerParDefaultScale * maxPowerParScaleMultiplier;
		base.transform.DOKill();
		base.transform.DOScale(targetPlayerScale, scaleTransitionDuration).SetEase(Ease.OutBack).OnComplete(delegate
		{
			base.transform.DOScaleY(targetPlayerScale.y * bounceYMultiplier, bounceDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
		});
		if (maxPowerPar != null && isMaxBoosting)
		{
			maxPowerPar.transform.DOKill();
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
			maxPowerPar.gameObject.SetActive(enableState && isMaxBoosting && showPowerFullParOnBoost);
		}
		if (!enableState)
		{
			SetGlowLayersEnabled(false);
		}
	}
}
