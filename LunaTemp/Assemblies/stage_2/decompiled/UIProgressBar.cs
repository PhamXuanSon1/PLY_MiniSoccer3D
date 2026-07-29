using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class UIProgressBar : MonoBehaviour
{
	[Header("UI References")]
	[Tooltip("Image hiển thị phần tiến trình (Fill Image)")]
	[SerializeField]
	private Image fillImage;

	[Tooltip("Image hiển thị phông nền của thanh tiến trình")]
	[SerializeField]
	private Image fillBackground;

	private void Start()
	{
		GameManager.OnGameEnded = (Action<bool>)Delegate.Combine(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
		UIManager.OnCharacterStartMove = (Action<float>)Delegate.Combine(UIManager.OnCharacterStartMove, new Action<float>(OnCharacterStartMove));
	}

	private void OnDestroy()
	{
		GameManager.OnGameEnded = (Action<bool>)Delegate.Remove(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
		UIManager.OnCharacterStartMove = (Action<float>)Delegate.Remove(UIManager.OnCharacterStartMove, new Action<float>(OnCharacterStartMove));
	}

	private void OnCharacterStartMove(float totalMoveTime)
	{
		if (fillImage != null)
		{
			fillImage.DOFillAmount(1f, totalMoveTime);
		}
	}

	private void OnGameEnded(bool winState)
	{
		base.gameObject.SetActive(false);
		if (fillImage != null)
		{
			fillImage.enabled = false;
		}
		if (fillBackground != null)
		{
			fillBackground.enabled = false;
		}
	}
}
