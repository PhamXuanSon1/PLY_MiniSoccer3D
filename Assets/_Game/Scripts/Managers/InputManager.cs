using System;
using UnityEngine;

public class InputManager : MonoBehaviour
{
    public static InputManager Instance { get; private set; }

    public event Action<Vector2> OnSwipe;
    public event Action<SwipeDirection> OnSwipeDirection;
    public event Action<Vector2> OnDrag;
    public event Action OnDragEnd;
    public Action<Vector2> OnClickedDown;

    [Header("Swipe Settings")]
    [Tooltip("Khoảng cách vuốt tối thiểu (pixel) để ghi nhận hành động Swipe")]
    [SerializeField] private float minimumSwipeDistance = 80f;

    private Vector2 startPosition;
    private Vector2 endPosition;

    private bool isDragging;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    private void Update()
    {
        HandleInput();
    }

    private void HandleInput()
    {
#if UNITY_EDITOR || UNITY_STANDALONE
        HandleMouseInput();
#else
        HandleTouchInput();
#endif
    }

    private void HandleMouseInput()
    {
        if (Input.GetMouseButtonDown(0))
        {
            StartSwipe(Input.mousePosition);
        }

        if (Input.GetMouseButton(0))
        {
            if (isDragging)
                OnDrag?.Invoke(Input.mousePosition);
        }

        if (Input.GetMouseButtonUp(0))
        {
            EndSwipe(Input.mousePosition);
            OnDragEnd?.Invoke();
        }
    }

    private void HandleTouchInput()
    {
        if (Input.touchCount == 0)
            return;

        Touch touch = Input.GetTouch(0);

        switch (touch.phase)
        {
            case TouchPhase.Began:
                StartSwipe(touch.position);
                break;
            case TouchPhase.Moved:
            case TouchPhase.Stationary:
                if (isDragging)
                    OnDrag?.Invoke(touch.position);
                break;

            case TouchPhase.Ended:
            case TouchPhase.Canceled:
                EndSwipe(touch.position);
                OnDragEnd?.Invoke();
                break;
        }
    }

    private void StartSwipe(Vector2 position)
    {
        isDragging = true;
        startPosition = position;
        OnClickedDown?.Invoke(position);
    }

    private void EndSwipe(Vector2 position)
    {
        if (!isDragging)
            return;

        isDragging = false;
        endPosition = position;

        Vector2 swipe = endPosition - startPosition;

        if (swipe.magnitude < minimumSwipeDistance)
            return;

        OnSwipe?.Invoke(swipe);
        OnSwipeDirection?.Invoke(GetSwipeDirection(swipe));
    }

    private SwipeDirection GetSwipeDirection(Vector2 swipe)
    {
        swipe.Normalize();

        if (Mathf.Abs(swipe.x) > Mathf.Abs(swipe.y))
        {
            return swipe.x > 0
                ? SwipeDirection.Right
                : SwipeDirection.Left;
        }

        return swipe.y > 0
            ? SwipeDirection.Up
            : SwipeDirection.Down;
    }
}

public enum SwipeDirection
{
    None,
    Up,
    Down,
    Left,
    Right
}
