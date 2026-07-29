using System;
using UnityEngine;

[Serializable]
public class ChoicePairData
{
	[Header("Pair Choices")]
	[Tooltip("Dữ liệu lựa chọn ô thứ nhất (trái)")]
	public ChoiceData choiceData1;

	[Tooltip("Dữ liệu lựa chọn ô thứ hai (phải)")]
	public ChoiceData choiceData2;
}
