using System;
using DG.Tweening;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
	[Header("Movement Path & Timing")]
	[Tooltip("Điểm đích mà nhân vật sẽ di chuyển tới")]
	[SerializeField]
	private Transform endPos;

	[Tooltip("Thời gian chuyển đổi giữa các làn đường")]
	[SerializeField]
	private float switchTrackTime = 0.5f;

	[Header("Track Transforms")]
	[Tooltip("Transform định vị vị trí làn bên phải")]
	[SerializeField]
	private Transform trackRightTransform;

	[Tooltip("Transform định vị vị trí làn bên trái")]
	[SerializeField]
	private Transform trackLeftTransform;

	[Tooltip("Khởi đầu ở làn đường bên phải hay không")]
	[SerializeField]
	private bool startRight = true;

	[Header("References")]
	[Tooltip("Transform điều khiển vị trí/hình ảnh nhân vật")]
	[SerializeField]
	private Transform playerTransform;

	[Tooltip("Script quản lý hình ảnh/level của cầu thủ")]
	[SerializeField]
	private PlayerVisual playerVisual;

	[Tooltip("Particle System hiển thị hiệu ứng khi chiến thắng")]
	[SerializeField]
	private ParticleSystem winPar;

	[Header("Player Status")]
	[Tooltip("Cấp độ hiện tại của Cầu thủ (1 -> 4) (Hiển thị trực tiếp trên Inspector)")]
	[SerializeField]
	private int currentLevel = 1;

	[Header("Drag & Curve Settings")]
	[Tooltip("Tốc độ làm mượt vị trí khi người chơi kéo vuốt")]
	[SerializeField]
	private float dragSmoothSpeed = 20f;

	[Tooltip("Tỉ lệ cạnh ngắn màn hình cần vuốt để đi hết bề ngang đường chạy (0.5 = vuốt nửa cạnh ngắn)")]
	[SerializeField]
	private float dragScreenRatioForFullTrack = 0.5f;

	[Tooltip("Đường cong gia tốc di chuyển của nhân vật")]
	[SerializeField]
	private AnimationCurve moveCurve;

	private Vector3 currentLocalPos;

	private bool OnRight;

	private bool isDragActive;

	private float dragStartScreenX;

	private float dragStartLocalX;

	private Sequence moveSeq;

	private bool gameStart;

	private Camera mainCam;

	private float totalMoveTime => (GameManager.Instance != null) ? GameManager.Instance.TotalMoveTime : 10f;

	public int CurrentLevel => currentLevel;

	public void UpgradePlayer(int upgradePointsChanged)
	{
		int targetMaxLevel = ((GameManager.Instance != null) ? GameManager.Instance.MaxLevel : 4);
		int nextLevel = Mathf.Clamp(currentLevel + upgradePointsChanged, 1, targetMaxLevel);
		if (nextLevel != currentLevel)
		{
			currentLevel = nextLevel;
			if (currentLevel >= targetMaxLevel)
			{
				Ply_SoundManager.Instance?.PlayFx(FxType.MaxLevel);
			}
			else
			{
				Ply_SoundManager.Instance?.PlayFx((upgradePointsChanged > 0) ? FxType.RightChoice : FxType.WrongChoice);
			}
			if (playerVisual != null)
			{
				playerVisual.UpdateVisualBylevel(currentLevel);
			}
		}
	}

	private void Start()
	{
		if (playerVisual == null && playerTransform != null)
		{
			playerVisual = playerTransform.GetComponent<PlayerVisual>();
			if (playerVisual == null)
			{
				playerVisual = playerTransform.GetComponentInChildren<PlayerVisual>();
			}
		}
		SwitchTrack(startRight);
		if (InputManager.Instance != null)
		{
			InputManager.Instance.OnSwipeDirection += OnSwipe;
			InputManager.Instance.OnDrag += OnDrag;
			InputManager.Instance.OnDragEnd += OnDragEnd;
		}
		GameManager.OnGameStart = (Action)Delegate.Combine(GameManager.OnGameStart, new Action(OnGameStarted));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Combine(GameManager.OnGameEnded, new Action<bool>(OnGameEnd));
		mainCam = ((GameManager.MainCamera != null) ? GameManager.MainCamera : Camera.main);
	}

	public void StopMoving()
	{
		moveSeq?.Kill();
		if (InputManager.Instance != null)
		{
			InputManager.Instance.OnSwipeDirection -= OnSwipe;
			InputManager.Instance.OnDrag -= OnDrag;
			InputManager.Instance.OnDragEnd -= OnDragEnd;
		}
	}

	private void OnGameEnd(bool winState)
	{
		if (winState && winPar != null)
		{
			winPar.Play();
		}
		StopMoving();
		DOVirtual.DelayedCall(4f, delegate
		{
			base.gameObject.SetActive(false);
		});
	}

	private void OnDestroy()
	{
		if (InputManager.Instance != null)
		{
			InputManager.Instance.OnSwipeDirection -= OnSwipe;
			InputManager.Instance.OnDrag -= OnDrag;
			InputManager.Instance.OnDragEnd -= OnDragEnd;
		}
		GameManager.OnGameStart = (Action)Delegate.Remove(GameManager.OnGameStart, new Action(OnGameStarted));
	}

	private void OnGameStarted()
	{
		if (playerTransform != null)
		{
			playerTransform.rotation = Quaternion.Euler(0f, 0f, 0f);
		}
		StartMoving();
		GameManager.OnGameStart = (Action)Delegate.Remove(GameManager.OnGameStart, new Action(OnGameStarted));
	}

	private void StartMoving()
	{
		moveSeq?.Kill();
		moveSeq = DOTween.Sequence();
		moveSeq.AppendCallback(delegate
		{
			UIManager.OnCharacterStartMove?.Invoke(totalMoveTime);
		});
		if (endPos != null)
		{
			moveSeq.Append(base.transform.DOMove(endPos.position, totalMoveTime).SetEase(moveCurve));
		}
		moveSeq.OnComplete(delegate
		{
			GameManager.OnCharacterReachedTheEnd?.Invoke(currentLevel);
		});
		gameStart = true;
	}

	private void Update()
	{
		if (gameStart && !(playerTransform == null))
		{
			playerTransform.localPosition = Vector3.Lerp(playerTransform.localPosition, currentLocalPos, Time.deltaTime * dragSmoothSpeed);
		}
	}

	private void OnDrag(Vector2 screenPosition)
	{
		if (!(playerTransform == null))
		{
			float leftX = ((trackLeftTransform != null) ? trackLeftTransform.localPosition.x : (-2f));
			float rightX = ((trackRightTransform != null) ? trackRightTransform.localPosition.x : 2f);
			float minX = Mathf.Min(leftX, rightX);
			float maxX = Mathf.Max(leftX, rightX);
			if (!isDragActive)
			{
				isDragActive = true;
				dragStartScreenX = screenPosition.x;
				dragStartLocalX = playerTransform.localPosition.x;
				playerTransform.DOKill();
			}
			float screenShortSide = Mathf.Min(Screen.width, Screen.height);
			float screenWidthForFullTrack = Mathf.Max(1f, screenShortSide * dragScreenRatioForFullTrack);
			float deltaX = (screenPosition.x - dragStartScreenX) / screenWidthForFullTrack * (maxX - minX);
			float targetX = Mathf.Clamp(dragStartLocalX + deltaX, minX, maxX);
			currentLocalPos = new Vector3(targetX, playerTransform.localPosition.y, playerTransform.localPosition.z);
			if (!gameStart)
			{
				GameManager.OnGameStart?.Invoke();
				gameStart = true;
			}
		}
	}

	private void OnDragEnd()
	{
		isDragActive = false;
	}

	private void SwitchTrack(bool rightTrack)
	{
		if (!(playerTransform == null))
		{
			currentLocalPos = ((!rightTrack) ? ((trackLeftTransform != null) ? trackLeftTransform.localPosition : Vector3.left) : ((trackRightTransform != null) ? trackRightTransform.localPosition : Vector3.right));
			playerTransform.DOKill();
			playerTransform.DOLocalMove(currentLocalPos, switchTrackTime);
			OnRight = rightTrack;
		}
	}

	private void OnSwipe(SwipeDirection swipeDir)
	{
	}
}
