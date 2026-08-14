using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyTargetMover : MonoBehaviour
    {
        [Header("Movement Bounds")]
        [SerializeField] private Transform leftPoint;
        [SerializeField] private Transform rightPoint;
        [SerializeField] private float speed = 2f;

        private bool isMoving = false;
        private float t = 0.5f;
        private int direction = 1;

        [Header("Dashed Aim Line (Đường nét đứt màu vàng)")]
        [SerializeField] private LineRenderer aimLine;
        [SerializeField] private Transform ballTransform;
        [Tooltip("Độ rộng của vạch nét đứt")]
        [SerializeField] private float lineWidth = 0.18f;
        [Tooltip("Mật độ nét đứt (càng cao gạch càng nhiều và ngắn)")]
        [SerializeField] private float dashDensity = 1.6f;
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

            // Cấu hình LineRenderer nét đứt
            SetupAimLine();

            // Áp dụng Sorting Order cho MeshRenderer và tất cả Renderer con
            ApplySortingOrder();
        }

        public void SetBallTransform(Transform ball)
        {
            ballTransform = ball;
        }

        public void SetupAimLine()
        {
            if (aimLine == null)
            {
                aimLine = GetComponent<LineRenderer>();
                if (aimLine == null)
                {
                    aimLine = gameObject.AddComponent<LineRenderer>();
                }
            }

            if (aimLine != null)
            {
                aimLine.startWidth = lineWidth;
                aimLine.endWidth = lineWidth;
                aimLine.positionCount = 2;
                aimLine.useWorldSpace = true;
                aimLine.textureMode = LineTextureMode.Tile;
                aimLine.alignment = LineAlignment.View;
                aimLine.sortingLayerName = sortingLayerName;
                aimLine.sortingOrder = sortingOrder;
                aimLine.startColor = Color.white;
                aimLine.endColor = Color.white;

                // Tạo Texture nét đứt trong code
                if (dashedTexture == null)
                {
                    dashedTexture = CreateDashedTexture();
                }

                Shader shader = Shader.Find("Universal Render Pipeline/Unlit");
                if (shader == null) shader = Shader.Find("Sprites/Default");
                if (shader == null) shader = Shader.Find("Unlit/Transparent");

                Material mat = new Material(shader);
                mat.mainTexture = dashedTexture;

                // Cấu hình URP transparent properties nếu có
                if (mat.HasProperty("_Surface")) mat.SetFloat("_Surface", 1); // Transparent
                if (mat.HasProperty("_Blend")) mat.SetFloat("_Blend", 0); // Alpha blend
                if (mat.HasProperty("_BaseColor")) mat.SetColor("_BaseColor", Color.white);
                if (mat.HasProperty("_Color")) mat.SetColor("_Color", Color.white);

                aimLine.material = mat;
            }
        }

        private Texture2D CreateDashedTexture()
        {
            int width = 64;
            int height = 16;
            Texture2D tex = new Texture2D(width, height, TextureFormat.RGBA32, false);
            tex.wrapMode = TextureWrapMode.Repeat;
            tex.filterMode = FilterMode.Point; // Nét đứt vuông vức, sắc nét

            Color emptyColor = new Color(0f, 0f, 0f, 0f);
            Color[] pixels = new Color[width * height];

            for (int y = 0; y < height; y++)
            {
                for (int x = 0; x < width; x++)
                {
                    // 55% là vạch vàng, 45% là khoảng trống
                    bool isDash = (x < width * 0.55f);
                    pixels[y * width + x] = isDash ? dashColor : emptyColor;
                }
            }

            tex.SetPixels(pixels);
            tex.Apply();
            return tex;
        }

        public void ApplySortingOrder()
        {
            Renderer[] renderers = GetComponentsInChildren<Renderer>(true);
            foreach (var r in renderers)
            {
                if (r != null)
                {
                    r.sortingLayerName = sortingLayerName;
                    r.sortingOrder = sortingOrder;
                }
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
            if (aimLine != null) aimLine.enabled = true;
        }

        public void StopMoving()
        {
            isMoving = false;
            if (aimLine != null) aimLine.enabled = false;
        }

        public void Hide()
        {
            if (aimLine != null) aimLine.enabled = false;
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

            float smoothT = Mathf.SmoothStep(0f, 1f, t);
            transform.position = Vector3.Lerp(leftPoint.position, rightPoint.position, smoothT);

            // Cập nhật đường nét đứt màu vàng từ bóng đến vị trí ngắm trên mặt cỏ
            if (aimLine != null && isMoving)
            {
                if (ballTransform != null)
                {
                    aimLine.enabled = true;

                    // Start: Ngay vị trí quả bóng (nằm trên mặt cỏ lineGroundY)
                    Vector3 startPos = new Vector3(ballTransform.position.x, lineGroundY, ballTransform.position.z + 0.15f);
                    // End: Chiếu vị trí TargetCrosshair xuống mặt cỏ lineGroundY
                    Vector3 endPos = new Vector3(transform.position.x, lineGroundY, transform.position.z);

                    aimLine.SetPosition(0, startPos);
                    aimLine.SetPosition(1, endPos);

                    // Tự động điều chỉnh số lượng gạch nét đứt theo độ dài đường nối
                    float distance = Vector3.Distance(startPos, endPos);
                    if (aimLine.material != null)
                    {
                        aimLine.material.mainTextureScale = new Vector2(distance * dashDensity, 1f);
                    }
                }
                else
                {
                    var ballObj = GameObject.FindWithTag("Ball");
                    if (ballObj != null) ballTransform = ballObj.transform;
                }
            }
        }

        public Vector3 GetCurrentPosition() => transform.position;
    }
}
