using System;
using UnityEngine;

public class UIManager : MonoBehaviour
{
	public static Action<float> OnCharacterStartMove;

	public static Action<EChoiceType, Sprite> OnCharacterChoose;

	public static Action<EChoiceType> OnCharacterPick;

	public static Action<bool> OnLooseSequenceStart;

	public static UIManager Instance { get; private set; }

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
}
