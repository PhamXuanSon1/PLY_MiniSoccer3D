using UnityEngine;
using UnityEngine.UI;

public class UICheckBox : MonoBehaviour
{
	[Header("UI References")]
	[Tooltip("Component Image dùng hiển thị icon của checkbox")]
	[SerializeField]
	private Image iconImg;

	[Header("Icon Configuration")]
	[Tooltip("Sprite hình ảnh icon mặc định khi khởi tạo")]
	[SerializeField]
	private Sprite startingSprite;

	private void Awake()
	{
		ResetIcon();
	}

	public void ResetIcon()
	{
		if (startingSprite != null)
		{
			ChangeIcon(startingSprite);
		}
	}

	public void ChangeIcon(Sprite sprite)
	{
		if (iconImg != null && sprite != null)
		{
			iconImg.sprite = sprite;
		}
	}
}
