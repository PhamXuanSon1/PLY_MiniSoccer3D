using UnityEngine;
using UnityEngine.UI;

public class ImageScroller : MonoBehaviour
{
	[SerializeField]
	private RawImage rawImage;

	[SerializeField]
	private Vector2 moveVector = new Vector2(0.1f, 0.1f);

	private void Awake()
	{
		if (rawImage == null)
		{
			rawImage = GetComponent<RawImage>();
		}
	}

	private void Update()
	{
		if (rawImage != null)
		{
			rawImage.uvRect = new Rect(rawImage.uvRect.position + moveVector * Time.deltaTime, rawImage.uvRect.size);
		}
	}
}
