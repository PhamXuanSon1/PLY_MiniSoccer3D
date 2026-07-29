using UnityEngine;
using DG.Tweening;
using System;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Path & Timing")]
    [Tooltip("Điểm đích mà nhân vật sẽ di chuyển tới")]
    [SerializeField] private Transform endPos;

    private float totalMoveTime => GameManager.Instance != null ? GameManager.Instance.TotalMoveTime : 10f;

    [Tooltip("Thời gian chuyển đổi giữa các làn đường")]
    [SerializeField] private float switchTrackTime = 0.5f;

    [Header("Track Transforms")]
    [Tooltip("Transform định vị vị trí làn bên phải")]
    [SerializeField] private Transform trackRightTransform;

    [Tooltip("Transform định vị vị trí làn bên trái")]
    [SerializeField] private Transform trackLeftTransform;

    [Tooltip("Khởi đầu ở làn đường bên phải hay không")]
    [SerializeField] private bool startRight = true;

    [Header("References")]
    [Tooltip("Transform điều khiển vị trí/hình ảnh nhân vật")]
    [SerializeField] private Transform playerTransform;

    [Tooltip("Script quản lý hình ảnh/level của cầu thủ")]
    [SerializeField] private PlayerVisual playerVisual;

    [Tooltip("Particle System hiển thị hiệu ứng khi chiến thắng")]
    [SerializeField] private ParticleSystem winPar;

    private int currentLevel = 1;
    public int CurrentLevel => currentLevel;

    public void UpgradePlayer(int upgradePointsChanged)
    {
        if (currentLevel + upgradePointsChanged >= 4)
        {
            Ply_SoundManager.Instance?.PlayFx(FxType.MaxLevel);
        }
        else
        {
            Ply_SoundManager.Instance?.PlayFx((upgradePointsChanged > 0) ? FxType.RightChoice : FxType.WrongChoice);
        }

        if (GameManager.Instance != null && currentLevel + upgradePointsChanged > GameManager.Instance.MaxLevel)
            return;

        currentLevel += upgradePointsChanged;
        currentLevel = Mathf.Clamp(currentLevel, 1, 4);

        if (playerVisual != null)
        {
            playerVisual.UpdateVisualBylevel(currentLevel);
        }
    }

    [Header("Drag & Curve Settings")]
    [Tooltip("Tốc độ làm mượt vị trí khi người chơi kéo vuốt")]
    [SerializeField] private float dragSmoothSpeed = 20f;

    [Tooltip("Thời gian hít (snap) về vị trí làn")]
    [SerializeField] private float snapTime = 0.15f;

    [Tooltip("Đường cong gia tốc di chuyển của nhân vật")]
    [SerializeField] private AnimationCurve moveCurve;

    private Vector3 currentLocalPos;
    private bool OnRight;

    private Sequence moveSeq;
    private bool gameStart;
    private Camera mainCam;

    private void Start()
    {
        if (playerVisual == null && playerTransform != null)
        {
            playerVisual = playerTransform.GetComponent<PlayerVisual>();
            if (playerVisual == null) playerVisual = playerTransform.GetComponentInChildren<PlayerVisual>();
        }

        SwitchTrack(startRight);
        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnSwipeDirection += OnSwipe;
            InputManager.Instance.OnDrag += OnDrag;
            InputManager.Instance.OnDragEnd += OnDragEnd;
        }
        GameManager.OnGameStart += OnGameStarted;
        GameManager.OnGameEnded += OnGameEnd;
        mainCam = GameManager.MainCamera != null ? GameManager.MainCamera : Camera.main;

        if (playerTransform != null)
        {
            playerTransform.rotation = Quaternion.Euler(0, 180f, 0);
        }
    }

    private void OnGameEnd(bool winState)
    {
        if (playerTransform != null)
        {
            playerTransform.rotation = Quaternion.Euler(0, 180f, 0);
        }

        if (winState && winPar != null) winPar.Play();

        Ply_SoundManager.Instance?.PlayFx(winState ? FxType.PlayerWin : FxType.PlayerLoose);
        moveSeq?.Kill();
        DOVirtual.DelayedCall(4, () => gameObject.SetActive(false));

        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnSwipeDirection -= OnSwipe;
            InputManager.Instance.OnDrag -= OnDrag;
            InputManager.Instance.OnDragEnd -= OnDragEnd;
        }
    }

    private void OnDestroy()
    {
        if (InputManager.Instance != null)
        {
            InputManager.Instance.OnSwipeDirection -= OnSwipe;
            InputManager.Instance.OnDrag -= OnDrag;
            InputManager.Instance.OnDragEnd -= OnDragEnd;
        }
        GameManager.OnGameStart -= OnGameStarted;
    }

    private void OnGameStarted()
    {
        if (playerTransform != null)
        {
            playerTransform.rotation = Quaternion.Euler(0, 0, 0);
        }
        StartMoving();
        GameManager.OnGameStart -= OnGameStarted;
    }

    private void StartMoving()
    {
        moveSeq?.Kill();
        moveSeq = DOTween.Sequence();

        moveSeq.AppendCallback(() =>
        {
            UIManager.OnCharacterStartMove?.Invoke(totalMoveTime);
        });

        if (endPos != null)
        {
            moveSeq.Append(
                transform.DOMove(endPos.position, totalMoveTime)
                    .SetEase(moveCurve)
            );
        }

        moveSeq.OnComplete(() =>
        {
            GameManager.OnGameEnded?.Invoke(true);
        });

        gameStart = true;
    }

    private void OnDrag(Vector2 screenPosition)
    {
        if (playerTransform == null || mainCam == null) return;

        float screenZ = mainCam.WorldToScreenPoint(playerTransform.position).z;
        Vector3 screenPoint = new Vector3(screenPosition.x, screenPosition.y, screenZ);
        Vector3 worldPoint = mainCam.ScreenToWorldPoint(screenPoint);

        Transform parent = playerTransform.parent;
        Vector3 localPoint = parent != null
            ? parent.InverseTransformPoint(worldPoint)
            : playerTransform.localPosition;

        float leftX = trackLeftTransform != null ? trackLeftTransform.localPosition.x : -2f;
        float rightX = trackRightTransform != null ? trackRightTransform.localPosition.x : 2f;

        float minX = Mathf.Min(leftX, rightX);
        float maxX = Mathf.Max(leftX, rightX);

        float targetX = Mathf.Clamp(localPoint.x, minX, maxX);

        currentLocalPos = new Vector3(
            targetX,
            playerTransform.localPosition.y,
            playerTransform.localPosition.z);

        playerTransform.localPosition = Vector3.Lerp(
            playerTransform.localPosition,
            currentLocalPos,
            Time.deltaTime * dragSmoothSpeed);

        if (!gameStart)
        {
            GameManager.OnGameStart?.Invoke();
            gameStart = true;
        }
    }

    private void OnDragEnd()
    {
        if (playerTransform != null)
        {
            currentLocalPos = playerTransform.localPosition;
        }
    }

    private void SwitchTrack(bool rightTrack)
    {
        if (playerTransform == null) return;
        currentLocalPos = rightTrack
            ? (trackRightTransform != null ? trackRightTransform.localPosition : Vector3.right)
            : (trackLeftTransform != null ? trackLeftTransform.localPosition : Vector3.left);
        
        playerTransform.DOKill();
        playerTransform.DOLocalMove(currentLocalPos, switchTrackTime);
        OnRight = rightTrack;
    }

    private void OnSwipe(SwipeDirection swipeDir)
    {
    }
}
