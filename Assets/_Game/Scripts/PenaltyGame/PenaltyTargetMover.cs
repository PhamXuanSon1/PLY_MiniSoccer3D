using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyTargetMover : MonoBehaviour
    {
        [Header("Movement Bounds (Đường chạy ngang màu Đỏ)")]
        [SerializeField] private Transform leftPoint;
        [SerializeField] private Transform rightPoint;
        [SerializeField] private float speed = 2f;

        private bool isMoving = false;
        private float t = 0.5f;
        private int direction = 1;

        [Header("Dashed Aim Line (Sprite thay cho LineRenderer)")]
        [Tooltip("SpriteRenderer vẽ đường nét đứt (tự tạo lúc Awake nếu để trống, KHÔNG parent vào Crosshair để không bị ảnh hưởng bởi hiệu ứng Pulse)")]
        [SerializeField] private SpriteRenderer aimLineRenderer;
        [SerializeField] private Transform ballTransform;
        [Tooltip("Độ rộng của vạch nét đứt")]
        [SerializeField] private float lineWidth = 0.18f;
        [Tooltip("Mật độ nét đứt: số chu kỳ gạch/khoảng-trống trên mỗi đơn vị khoảng cách. CÀNG THẤP -> gạch càng thưa/dài ra")]
        [SerializeField] private float dashDensity = 0.5f;
        [Tooltip("Tỷ lệ phần đặc (vạch) trong 1 chu kỳ, còn lại là khoảng trống. CÀNG THẤP -> vạch càng ngắn, khoảng trống càng nhiều (thưa hơn)")]
        [Range(0.05f, 0.9f)]
        [SerializeField] private float dashRatio = 0.35f;
        [Tooltip("Màu vàng tươi của nét đứt")]
        [SerializeField] private Color dashColor = new Color(1f, 0.88f, 0.05f, 1f);
        [Tooltip("Độ cao của line trên mặt cỏ để không bị chìm")]
        [SerializeField] private float lineGroundY = 0.04f;

        [Header("Visual Effects")]
        [SerializeField] private bool pulseEffect = true;
        [SerializeField] private float pulseSpeed = 6f;
        [SerializeField] private float pulseScaleAmount = 0.12f;

        [Header("Rendering Order (Always On Top)")]
        [SerializeField] private int sortingOrder = 50;
        [SerializeField] private string sortingLayerName = "Default";

        private Vector3 baseScale;
        private Texture2D dashedTexture;
        private Sprite dashedSprite;

        private void Awake()
        {
            baseScale = transform.localScale;
            if (baseScale == Vector3.zero) baseScale = Vector3.one;

            // Tìm bóng nếu chưa gán
            if (ballTransform == null)
            {
                var ballObj = GameObject.FindWithTag("Ball");
                if (ballObj != null) ballTransform = ballObj.transform;
            }

            // Cấu hình đường nét đứt bằng Sprite (Tiled), KHÔNG dùng LineRenderer
            SetupAimLineSprite();

            // Áp dụng Sorting Order cho MeshRenderer và tất cả Renderer con của Crosshair
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
                // Tạo 1 GameObject riêng, NGANG HÀNG (sibling) với Crosshair chứ không phải con của nó,
                // để không bị scale theo hiệu ứng Pulse của Crosshair.
                GameObject lineObj = new GameObject("AimLineSprite");
                lineObj.transform.SetParent(transform.parent, false);
                aimLineRenderer = lineObj.AddComponent<SpriteRenderer>();
            }

            if (dashedSprite == null)
            {
                dashedSprite = CreateDashedSprite();
            }

            aimLineRenderer.sprite = dashedSprite;
            aimLineRenderer.drawMode = SpriteDrawMode.Tiled;
            aimLineRenderer.size = new Vector2(0.01f, lineWidth);
            aimLineRenderer.color = Color.white; // màu đã bake sẵn trong texture
            aimLineRenderer.sortingLayerName = sortingLayerName;
            aimLineRenderer.sortingOrder = sortingOrder;
            aimLineRenderer.enabled = false;
        }

        /// <summary>
        /// Tạo 1 Sprite nét đứt duy nhất (pivot bên trái) để SpriteRenderer.Tiled dãn dài ra
        /// từ điểm bắt đầu, thay cho việc dùng LineRenderer sinh nhiều "box" hình học.
        /// </summary>
        private Sprite CreateDashedSprite()
        {
            int texWidth = 64;
            int texHeight = 16;

            if (dashedTexture == null)
            {
                dashedTexture = new Texture2D(texWidth, texHeight, TextureFormat.RGBA32, false);
                dashedTexture.wrapMode = TextureWrapMode.Clamp;
                dashedTexture.filterMode = FilterMode.Point; // Nét đứt vuông vức, sắc nét

                Color emptyColor = new Color(0f, 0f, 0f, 0f);
                Color[] pixels = new Color[texWidth * texHeight];

                for (int y = 0; y < texHeight; y++)
                {
                    for (int x = 0; x < texWidth; x++)
                    {
                        bool isDash = (x < texWidth * dashRatio);
                        pixels[y * texWidth + x] = isDash ? dashColor : emptyColor;
                    }
                }

                dashedTexture.SetPixels(pixels);
                dashedTexture.Apply();
            }

            // pixelsPerUnit quyết định độ dài 1 chu kỳ (gạch + khoảng trống) theo world unit:
            // 1 chu kỳ dài = texWidth / pixelsPerUnit = 1 / dashDensity
            float pixelsPerUnit = texWidth * Mathf.Max(dashDensity, 0.001f);

            // Pivot (0, 0.5): mép trái nằm đúng vị trí transform, Tiled sẽ dãn tiếp sang phải (local +X)
            return Sprite.Create(
                dashedTexture,
                new Rect(0, 0, texWidth, texHeight),
                new Vector2(0f, 0.5f),
                pixelsPerUnit,
                0,
                SpriteMeshType.FullRect);
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

        public void SetSpeed(float newSpeed) => speed = newSpeed;

        public void StartMoving()
        {
            isMoving = true;
            gameObject.SetActive(true);
            if (aimLineRenderer != null) aimLineRenderer.enabled = true;
        }

        public void StopMoving()
        {
            isMoving = false;
            if (aimLineRenderer != null) aimLineRenderer.enabled = false;
        }

        public void Hide()
        {
            if (aimLineRenderer != null) aimLineRenderer.enabled = false;
            gameObject.SetActive(false);
        }

        private void Update()
        {
            if (pulseEffect)
            {
                float scale = 1f + Mathf.Sin(Time.time * pulseSpeed) * pulseScaleAmount;
                transform.localScale = baseScale * scale;
            }

            if (!isMoving || leftPoint == null || rightPoint == null) return;

            t += direction * speed * Time.deltaTime;

            if (t >= 1f) { t = 1f; direction = -1; }
            if (t <= 0f) { t = 0f; direction = 1; }

            // DI CHUYỂN HỒNG TÂM THEO ĐƯỜNG NGANG (ĐƯỜNG ĐỎ)
            float smoothT = Mathf.SmoothStep(0f, 1f, t);
            transform.position = Vector3.Lerp(leftPoint.position, rightPoint.position, smoothT);

            // Cập nhật đường nét đứt màu vàng từ bóng đến vị trí ngắm trên mặt cỏ
            if (aimLineRenderer != null && isMoving)
            {
                if (ballTransform != null)
                {
                    aimLineRenderer.enabled = true;

                    // Start: Ngay vị trí quả bóng (nằm trên mặt cỏ lineGroundY)
                    Vector3 startPos = new Vector3(ballTransform.position.x, lineGroundY, ballTransform.position.z + 0.15f);
                    // End: Chiếu vị trí TargetCrosshair xuống mặt cỏ lineGroundY
                    Vector3 endPos = new Vector3(transform.position.x, lineGroundY, transform.position.z);

                    Vector3 delta = endPos - startPos;
                    float distance = delta.magnitude;

                    aimLineRenderer.transform.position = startPos;
                    if (distance > 0.001f)
                    {
                        // Chốt local Z (mặt phẳng Sprite) hướng thẳng lên trời -> Sprite nằm phẳng trên mặt cỏ.
                        // "upwards" truyền vào là trục ngang vuông góc với hướng đi, để LookRotation tự suy ra
                        // local X (trục size.x/Tiled) == đúng hướng delta (bóng -> crosshair).
                        Vector3 sideways = Vector3.Cross(Vector3.up, delta.normalized);
                        aimLineRenderer.transform.rotation = Quaternion.LookRotation(Vector3.up, sideways);
                    }

                    // Kéo dài Sprite (Tiled) đúng bằng khoảng cách, Unity tự lặp lại texture nét đứt theo dashDensity
                    aimLineRenderer.size = new Vector2(Mathf.Max(distance, 0.01f), lineWidth);
                }
                else
                {
                    var ballObj = GameObject.FindWithTag("Ball");
                    if (ballObj != null) ballTransform = ballObj.transform;
                }
            }
        }

        public Vector3 GetCurrentPosition() => transform.position;

        /// <summary>
        /// Trả về tỷ lệ t (0 = leftPoint, 1 = rightPoint) của crosshair trên đường đỏ.
        /// </summary>
        public float GetNormalizedT() => t;

        private void OnDrawGizmosSelected()
        {
            if (leftPoint != null && rightPoint != null)
            {
                // Vẽ đường chạy ngang màu ĐỎ trong Scene View
                Gizmos.color = Color.red;
                Gizmos.DrawLine(leftPoint.position, rightPoint.position);

                Gizmos.color = new Color(1f, 0.2f, 0.2f, 0.9f);
                Gizmos.DrawWireSphere(leftPoint.position, 0.22f);
                Gizmos.DrawWireSphere(rightPoint.position, 0.22f);
            }
        }
    }
}
