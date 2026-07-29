using System;
using UnityEngine;

public class InputManager : MonoBehaviour
{
	public Action<Vector2> OnClickedDown;

	[Header("Swipe Settings")]
	[Tooltip("Khoảng cách vuốt tối thiểu (pixel) để ghi nhận hành động Swipe")]
	[SerializeField]
	private float minimumSwipeDistance = 80f;

	private Vector2 startPosition;

	private Vector2 endPosition;

	private bool isDragging;

	public static InputManager Instance { get; private set; }

	public event Action<Vector2> OnSwipe;

	public event Action<SwipeDirection> OnSwipeDirection;

	public event Action<Vector2> OnDrag;

	public event Action OnDragEnd;

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void Update()
	{
		HandleInput();
	}

	private void HandleInput()
	{
		HandleTouchInput();
	}

	private void HandleMouseInput()
	{
		if (Input.GetMouseButtonDown(0))
		{
			StartSwipe(Input.mousePosition);
		}
		if (Input.GetMouseButton(0) && isDragging)
		{
			this.OnDrag?.Invoke(Input.mousePosition);
		}
		if (Input.GetMouseButtonUp(0))
		{
			EndSwipe(Input.mousePosition);
			this.OnDragEnd?.Invoke();
		}
	}

	private void HandleTouchInput()
	{
		if (Input.touchCount == 0)
		{
			return;
		}
		Touch touch = Input.GetTouch(0);
		switch (touch.phase)
		{
		case TouchPhase.Began:
			StartSwipe(touch.position);
			break;
		case TouchPhase.Moved:
		case TouchPhase.Stationary:
			if (isDragging)
			{
				this.OnDrag?.Invoke(touch.position);
			}
			break;
		case TouchPhase.Ended:
		case TouchPhase.Canceled:
			EndSwipe(touch.position);
			this.OnDragEnd?.Invoke();
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
		if (isDragging)
		{
			isDragging = false;
			endPosition = position;
			Vector2 swipe = endPosition - startPosition;
			if (!(swipe.magnitude < minimumSwipeDistance))
			{
				this.OnSwipe?.Invoke(swipe);
				this.OnSwipeDirection?.Invoke(GetSwipeDirection(swipe));
			}
		}
	}

	private SwipeDirection GetSwipeDirection(Vector2 swipe)
	{
		swipe.Normalize();
		if (Mathf.Abs(swipe.x) > Mathf.Abs(swipe.y))
		{
			return (swipe.x > 0f) ? SwipeDirection.Right : SwipeDirection.Left;
		}
		return (swipe.y > 0f) ? SwipeDirection.Up : SwipeDirection.Down;
	}
}
