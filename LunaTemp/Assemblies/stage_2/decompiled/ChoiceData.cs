using System;
using UnityEngine;

[Serializable]
public class ChoiceData
{
	[Header("Choice Data")]
	[Tooltip("Hình ảnh đại diện cho lựa chọn này")]
	public Sprite VisualSprite;

	[Tooltip("Hình ảnh khung viền tùy chọn (Nếu để trống sẽ dùng khung mặc định theo Increase/Decrease)")]
	public Sprite BorderSprite;

	[Tooltip("Loại lựa chọn tương ứng")]
	public EChoiceType ChoiceType;
}
