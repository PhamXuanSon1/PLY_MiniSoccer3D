using UnityEngine;

namespace RonaldoPenalty
{
	public class PenaltyTargetMover : MonoBehaviour
	{
		[Header("Movement Bounds (Đường chạy ngang màu Đỏ)")]
		[SerializeField]
		private Transform leftPoint;

		[SerializeField]
		private Transform rightPoint;

		[SerializeField]
		private float speed = 2f;

		private bool isMoving = false;

		private float t = 0.5f;

		private int direction = 1;

		[Header("Dashed Aim Line (Sprite thay cho LineRenderer)")]
		[Tooltip("SpriteRenderer vẽ đường nét đứt (tự tạo lúc Awake nếu để trống, KHÔNG parent vào Crosshair để không bị ảnh hưởng bởi hiệu ứng Pulse)")]
		[SerializeField]
		private SpriteRenderer aimLineRenderer;

		[SerializeField]
		private Transform ballTransform;

		[Tooltip("Độ rộng của vạch nét đứt")]
		[SerializeField]
		private float lineWidth = 0.18f;

		[Tooltip("Mật độ nét đứt: số chu kỳ gạch/khoảng-trống trên mỗi đơn vị khoảng cách. CÀNG THẤP -> gạch càng thưa/dài ra")]
		[SerializeField]
		private float dashDensity = 0.5f;

		[Tooltip("Tỷ lệ phần đặc (vạch) trong 1 chu kỳ, còn lại là khoảng trống. CÀNG THẤP -> vạch càng ngắn, khoảng trống càng nhiều (thưa hơn)")]
		[Range(0.05f, 0.9f)]
		[SerializeField]
		private float dashRatio = 0.35f;

		[Tooltip("Màu vàng tươi của nét đứt")]
		[SerializeField]
		private Color dashColor = new Color(1f, 0.88f, 0.05f, 1f);

		[Tooltip("Độ cao của line trên mặt cỏ để không bị chìm")]
		[SerializeField]
		private float lineGroundY = 0.04f;

		[Header("Visual Effects")]
		[SerializeField]
		private bool pulseEffect = true;

		[SerializeField]
		private float pulseSpeed = 6f;

		[SerializeField]
		private float pulseScaleAmount = 0.12f;

		[Header("Rendering Order (Always On Top)")]
		[SerializeField]
		private int sortingOrder = 50;

		[SerializeField]
		private string sortingLayerName = "Default";

		private Vector3 baseScale;

		private Texture2D dashedTexture;

		private Sprite dashedSprite;

		private void Awake()
		{
			baseScale = base.transform.localScale;
			if (baseScale == Vector3.zero)
			{
				baseScale = Vector3.one;
			}
			if (ballTransform == null)
			{
				GameObject ballObj = GameObject.FindWithTag("Ball");
				if (ballObj != null)
				{
					ballTransform = ballObj.transform;
				}
			}
			SetupAimLineSprite();
			ApplySortingOrder();
		}

		public void SetBallTransform(Transform ball)
		{
			ballTransform = ball;
		}

		public void SetupAimLineSprite()
		{
			if (aimLineRenderer == null)
			{
				GameObject lineObj = new GameObject("AimLineSprite");
				lineObj.transform.SetParent(base.transform.parent, false);
				aimLineRenderer = lineObj.AddComponent<SpriteRenderer>();
			}
			if (dashedSprite == null)
			{
				dashedSprite = CreateDashedSprite();
			}
			aimLineRenderer.sprite = dashedSprite;
			aimLineRenderer.drawMode = SpriteDrawMode.Tiled;
			aimLineRenderer.size = new Vector2(0.01f, lineWidth);
			aimLineRenderer.color = Color.white;
			aimLineRenderer.sortingLayerName = sortingLayerName;
			aimLineRenderer.sortingOrder = sortingOrder;
			aimLineRenderer.enabled = false;
		}

		private Sprite CreateDashedSprite()
		{
			int texWidth = 64;
			int texHeight = 16;
			if (dashedTexture == null)
			{
				dashedTexture = new Texture2D(texWidth, texHeight, TextureFormat.RGBA32, false);
				dashedTexture.wrapMode = TextureWrapMode.Clamp;
				dashedTexture.filterMode = FilterMode.Point;
				Color emptyColor = new Color(0f, 0f, 0f, 0f);
				Color[] pixels = new Color[texWidth * texHeight];
				for (int y = 0; y < texHeight; y++)
				{
					for (int x = 0; x < texWidth; x++)
					{
						bool isDash = (float)x < (float)texWidth * dashRatio;
						pixels[y * texWidth + x] = (isDash ? dashColor : emptyColor);
					}
				}
				dashedTexture.SetPixels(pixels);
				dashedTexture.Apply();
			}
			float pixelsPerUnit = (float)texWidth * Mathf.Max(dashDensity, 0.001f);
			return Sprite.Create(dashedTexture, new Rect(0f, 0f, texWidth, texHeight), new Vector2(0f, 0.5f), pixelsPerUnit, 0u, SpriteMeshType.FullRect);
		}

		public void ApplySortingOrder()
		{
			Renderer r = GetComponent<Renderer>();
			if (r != null)
			{
				r.sortingLayerName = sortingLayerName;
				r.sortingOrder = sortingOrder;
			}
		}

		public void SetBounds(Transform left, Transform right)
		{
			leftPoint = left;
			rightPoint = right;
		}

		public void SetSpeed(float newSpeed)
		{
			speed = newSpeed;
		}

		public void StartMoving()
		{
			isMoving = true;
			base.gameObject.SetActive(true);
			if (aimLineRenderer != null)
			{
				aimLineRenderer.enabled = true;
			}
		}

		public void StopMoving()
		{
			isMoving = false;
			if (aimLineRenderer != null)
			{
				aimLineRenderer.enabled = false;
			}
		}

		public void Hide()
		{
			if (aimLineRenderer != null)
			{
				aimLineRenderer.enabled = false;
			}
			base.gameObject.SetActive(false);
		}

		private void Update()
		{
			if (pulseEffect)
			{
				float scale = 1f + Mathf.Sin(Time.time * pulseSpeed) * pulseScaleAmount;
				base.transform.localScale = baseScale * scale;
			}
			if (!isMoving || leftPoint == null || rightPoint == null)
			{
				return;
			}
			t += (float)direction * speed * Time.deltaTime;
			if (t >= 1f)
			{
				t = 1f;
				direction = -1;
			}
			if (t <= 0f)
			{
				t = 0f;
				direction = 1;
			}
			float smoothT = Mathf.SmoothStep(0f, 1f, t);
			base.transform.position = Vector3.Lerp(leftPoint.position, rightPoint.position, smoothT);
			if (!(aimLineRenderer != null) || !isMoving)
			{
				return;
			}
			if (ballTransform != null)
			{
				aimLineRenderer.enabled = true;
				Vector3 startPos = new Vector3(ballTransform.position.x, lineGroundY, ballTransform.position.z + 0.15f);
				Vector3 endPos = new Vector3(base.transform.position.x, lineGroundY, base.transform.position.z);
				Vector3 delta = endPos - startPos;
				float distance = delta.magnitude;
				aimLineRenderer.transform.position = startPos;
				if (distance > 0.001f)
				{
					Vector3 sideways = Vector3.Cross(Vector3.up, delta.normalized);
					aimLineRenderer.transform.rotation = Quaternion.LookRotation(Vector3.up, sideways);
				}
				aimLineRenderer.size = new Vector2(Mathf.Max(distance, 0.01f), lineWidth);
			}
			else
			{
				GameObject ballObj = GameObject.FindWithTag("Ball");
				if (ballObj != null)
				{
					ballTransform = ballObj.transform;
				}
			}
		}

		public Vector3 GetCurrentPosition()
		{
			return base.transform.position;
		}

		public float GetNormalizedT()
		{
			return t;
		}

		private void OnDrawGizmosSelected()
		{
			if (leftPoint != null && rightPoint != null)
			{
				Gizmos.color = Color.red;
				Gizmos.DrawLine(leftPoint.position, rightPoint.position);
				Gizmos.color = new Color(1f, 0.2f, 0.2f, 0.9f);
				Gizmos.DrawWireSphere(leftPoint.position, 0.22f);
				Gizmos.DrawWireSphere(rightPoint.position, 0.22f);
			}
		}
	}
}
