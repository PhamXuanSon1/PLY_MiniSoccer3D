using UnityEngine;

[CreateAssetMenu(fileName = "ChoiceBoardPairData", menuName = "Scriptable Objects/Data/ChoiceBoardPairData")]
public class ChoiceBoardPairData : ScriptableObject
{
	[Header("Data List")]
	[Tooltip("Danh sách các cặp lựa chọn trong màn chơi")]
	public ChoicePairData[] ChoicePairDatas;
}
