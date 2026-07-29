using System;
using DG.Tweening;
using UnityEngine;

public class ChoiceBoardHolder : MonoBehaviour
{
	[Header("Board References")]
	[Tooltip("Danh sách các ChoiceBoard thuộc Holder này (thường gồm 2 ô lựa chọn)")]
	[SerializeField]
	private ChoiceBoard[] choiceBoards;

	public static Action<PlayerController> OnLastBoardPassed;

	private Collider holderCollider;

	public bool IsLastBoard { get; set; }

	public void ApplyBoardData(int index, ChoiceData choiceData)
	{
		if (choiceBoards != null && index >= 0 && index < choiceBoards.Length)
		{
			choiceBoards[index].AssignData(choiceData);
		}
	}

	private void Awake()
	{
		holderCollider = GetComponent<Collider>();
	}

	private void PickBoard(PlayerController player, Vector3 currentWorldPos)
	{
		if (player == null || choiceBoards == null || choiceBoards.Length == 0)
		{
			return;
		}
		if (holderCollider != null)
		{
			holderCollider.enabled = false;
		}
		if (IsLastBoard)
		{
			OnLastBoardPassed?.Invoke(player);
		}
		ChoiceBoard tempChoiceBoard = GetNearestBoard(currentWorldPos);
		if (!(tempChoiceBoard != null))
		{
			return;
		}
		tempChoiceBoard.PlayChooseSequence();
		Sprite chosenSprite = ((tempChoiceBoard.VisualRender != null) ? tempChoiceBoard.VisualRender.sprite : null);
		UIManager.OnCharacterChoose?.Invoke(tempChoiceBoard.ChoiceType, chosenSprite);
		UIManager.OnCharacterPick?.Invoke(tempChoiceBoard.ChoiceType);
		if (tempChoiceBoard.ChoiceType == EChoiceType.IncreaseGeneric)
		{
			Ply_SoundManager.Instance?.PlayFx(FxType.RightChoice);
			player.UpgradePlayer(1);
		}
		else
		{
			Ply_SoundManager.Instance?.PlayFx(FxType.WrongChoice);
			player.UpgradePlayer(-1);
			if (player.CurrentLevel < 1)
			{
				GameManager.OnGameEnded?.Invoke(false);
			}
		}
		DOVirtual.DelayedCall(0.6f, delegate
		{
			base.gameObject.SetActive(false);
		});
	}

	private ChoiceBoard GetNearestBoard(Vector3 worldPos)
	{
		ChoiceBoard nearestBoard = null;
		float closestSqrDistance = float.MaxValue;
		for (int i = 0; i < choiceBoards.Length; i++)
		{
			ChoiceBoard board = choiceBoards[i];
			if (!(board == null))
			{
				float sqrDistance = (board.transform.position - worldPos).sqrMagnitude;
				if (sqrDistance < closestSqrDistance)
				{
					closestSqrDistance = sqrDistance;
					nearestBoard = board;
				}
			}
		}
		return nearestBoard;
	}

	private void OnTriggerEnter(Collider other)
	{
		PlayerController player = other.GetComponent<PlayerController>();
		if (player == null)
		{
			player = other.GetComponentInParent<PlayerController>();
		}
		if (player != null)
		{
			PickBoard(player, other.transform.position);
		}
	}
}
