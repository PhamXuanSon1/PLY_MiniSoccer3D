using System;
using UnityEngine;

[Serializable]
public class ChoiceData
{
	[Header("Choice Data")]
	[Tooltip("Hình ảnh đại diện cho lựa chọn này")]
	public Sprite VisualSprite;

	[Tooltip("Loại lựa chọn tương ứng")]
	public EChoiceType ChoiceType;
}
