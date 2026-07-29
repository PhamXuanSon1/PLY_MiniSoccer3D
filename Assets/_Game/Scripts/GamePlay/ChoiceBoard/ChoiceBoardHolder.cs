using UnityEngine;
using DG.Tweening;

public class ChoiceBoardHolder : MonoBehaviour
{
    [Header("Board References")]
    [Tooltip("Danh sách các ChoiceBoard thuộc Holder này (thường gồm 2 ô lựa chọn)")]
    [SerializeField] private ChoiceBoard[] choiceBoards;

    public void ApplyBoardData(int index, ChoiceData choiceData)
    {
        if (choiceBoards != null && index >= 0 && index < choiceBoards.Length)
        {
            choiceBoards[index].AssignData(choiceData);
        }
    }

    private Collider holderCollider;

    private void Awake()
    {
        holderCollider = GetComponent<Collider>();
    }

    private void PickBoard(PlayerController player, Vector3 currentWorldPos)
    {
        if (player == null || choiceBoards == null || choiceBoards.Length == 0) return;

        // Tắt Collider ngay khi vừa va chạm để tránh lặp trigger va chạm
        if (holderCollider != null) holderCollider.enabled = false;

        ChoiceBoard tempChoiceBoard = GetNearestBoard(currentWorldPos);
        if (tempChoiceBoard != null)
        {
            tempChoiceBoard.PlayChooseSequence();

            Sprite chosenSprite = tempChoiceBoard.VisualRender != null ? tempChoiceBoard.VisualRender.sprite : null;
            UIManager.OnCharacterChoose?.Invoke(tempChoiceBoard.ChoiceType, chosenSprite);
            UIManager.OnCharacterPick?.Invoke(tempChoiceBoard.ChoiceType);

            if (tempChoiceBoard.ChoiceType == EChoiceType.IncreaseGeneric)
            {
                player.UpgradePlayer(1);
            }
            else
            {
                player.UpgradePlayer(-1);
                if (player.CurrentLevel < 1)
                {
                    GameManager.OnGameEnded?.Invoke(false);
                }
            }

            // Ẩn toàn bộ cụm ChoiceBoardHolder sau khi hiệu ứng 0.5s hoàn tất
            DOVirtual.DelayedCall(0.6f, () => gameObject.SetActive(false));
        }
    }

    private ChoiceBoard GetNearestBoard(Vector3 worldPos)
    {
        ChoiceBoard nearestBoard = null;
        float closestSqrDistance = float.MaxValue;

        for (int i = 0; i < choiceBoards.Length; i++)
        {
            ChoiceBoard board = choiceBoards[i];
            if (board == null) continue;

            float sqrDistance = (board.transform.position - worldPos).sqrMagnitude;
            if (sqrDistance < closestSqrDistance)
            {
                closestSqrDistance = sqrDistance;
                nearestBoard = board;
            }
        }

        return nearestBoard;
    }

    private void OnTriggerEnter(Collider other)
    {
        PlayerController player = other.GetComponent<PlayerController>();
        if (player == null) player = other.GetComponentInParent<PlayerController>();
        if (player != null)
        {
            PickBoard(player, other.transform.position);
        }
    }
}
