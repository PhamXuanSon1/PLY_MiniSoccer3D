using System;
using UnityEngine;

public class UICheckBoxHolder : MonoBehaviour
{
	[Header("UI Configuration")]
	[Tooltip("Mảng các thành phần UICheckBox hiển thị tiến trình chọn lựa")]
	[SerializeField]
	private UICheckBox[] uICheckBoxes;

	private int choiceNum;

	private void Start()
	{
		choiceNum = 0;
		if (uICheckBoxes != null)
		{
			UICheckBox[] array = uICheckBoxes;
			foreach (UICheckBox checkBox in array)
			{
				if (checkBox != null)
				{
					checkBox.ResetIcon();
				}
			}
		}
		UIManager.OnCharacterChoose = (Action<EChoiceType, Sprite>)Delegate.Combine(UIManager.OnCharacterChoose, new Action<EChoiceType, Sprite>(OnCharacterChoose));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Combine(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
	}

	private void OnDestroy()
	{
		UIManager.OnCharacterChoose = (Action<EChoiceType, Sprite>)Delegate.Remove(UIManager.OnCharacterChoose, new Action<EChoiceType, Sprite>(OnCharacterChoose));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Remove(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
	}

	private void OnGameEnded(bool obj)
	{
		base.gameObject.SetActive(false);
	}

	private void OnCharacterChoose(EChoiceType type, Sprite sprite)
	{
		if (uICheckBoxes != null && choiceNum >= 0 && choiceNum < uICheckBoxes.Length)
		{
			uICheckBoxes[choiceNum].ChangeIcon(sprite);
			choiceNum++;
		}
	}
}
