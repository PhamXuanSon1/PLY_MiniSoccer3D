using System;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance { get; private set; }

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    public static Action<float> OnCharacterStartMove; // Total MoveTime
    public static Action<EChoiceType, Sprite> OnCharacterChoose;
    public static Action<EChoiceType> OnCharacterPick;
    public static Action<bool> OnLooseSequenceStart;
}
