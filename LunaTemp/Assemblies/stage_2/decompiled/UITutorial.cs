using System;
using UnityEngine;

public class UITutorial : MonoBehaviour
{
	[Header("UI References")]
	[Tooltip("Panel UI chứa các thành phần hướng dẫn chơi ban đầu")]
	[SerializeField]
	private GameObject tutorialUIHolder;

	private void Start()
	{
		if (tutorialUIHolder != null)
		{
			tutorialUIHolder.SetActive(true);
		}
		GameManager.OnGameStart = (Action)Delegate.Combine(GameManager.OnGameStart, new Action(OnGameStarted));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Combine(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
		if (InputManager.Instance != null)
		{
			InputManager instance = InputManager.Instance;
			instance.OnClickedDown = (Action<Vector2>)Delegate.Combine(instance.OnClickedDown, new Action<Vector2>(OnClicked));
		}
	}

	private void OnDestroy()
	{
		GameManager.OnGameStart = (Action)Delegate.Remove(GameManager.OnGameStart, new Action(OnGameStarted));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Remove(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
		if (InputManager.Instance != null)
		{
			InputManager instance = InputManager.Instance;
			instance.OnClickedDown = (Action<Vector2>)Delegate.Remove(instance.OnClickedDown, new Action<Vector2>(OnClicked));
		}
	}

	private void OnGameEnded(bool obj)
	{
		base.gameObject.SetActive(false);
	}

	private void OnClicked(Vector2 vector)
	{
		GameManager.OnGameStart?.Invoke();
		if (InputManager.Instance != null)
		{
			InputManager instance = InputManager.Instance;
			instance.OnClickedDown = (Action<Vector2>)Delegate.Remove(instance.OnClickedDown, new Action<Vector2>(OnClicked));
		}
	}

	private void OnGameStarted()
	{
		if (tutorialUIHolder != null)
		{
			tutorialUIHolder.SetActive(false);
		}
		GameManager.OnGameStart = (Action)Delegate.Remove(GameManager.OnGameStart, new Action(OnGameStarted));
	}
}
