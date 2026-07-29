using UnityEngine;

public class UICheckBoxHolder : MonoBehaviour
{
    [Header("UI Configuration")]
    [Tooltip("Mảng các thành phần UICheckBox hiển thị tiến trình chọn lựa")]
    [SerializeField] private UICheckBox[] uICheckBoxes;
    private int choiceNum;

    private void Start()
    {
        choiceNum = 0;
        if (uICheckBoxes != null)
        {
            foreach (var checkBox in uICheckBoxes)
            {
                if (checkBox != null) checkBox.ResetIcon();
            }
        }

        UIManager.OnCharacterChoose += OnCharacterChoose;
        GameManager.OnGameEnded += OnGameEnded;
    }

    private void OnDestroy()
    {
        UIManager.OnCharacterChoose -= OnCharacterChoose;
        GameManager.OnGameEnded -= OnGameEnded;
    }

    private void OnGameEnded(bool obj)
    {
        gameObject.SetActive(false);
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
