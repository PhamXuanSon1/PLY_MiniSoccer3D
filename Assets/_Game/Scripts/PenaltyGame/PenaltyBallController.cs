using System;
using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyBallController : MonoBehaviour
    {
        [Header("V-Shape 3D Target Setup (Đường chữ V xanh lá trong khung thành)")]
        [Tooltip("Transform điểm góc cao bên trái của chữ V (LeftTop)")]
        [SerializeField] private Transform leftTop;
        [Tooltip("Transform điểm thấp nhất ở giữa của chữ V (BottomCenter)")]
        [SerializeField] private Transform bottomCenter;
        [Tooltip("Transform điểm góc cao bên phải của chữ V (RightTop)")]
        [SerializeField] private Transform rightTop;

        [Header("Tọa độ Chữ V Mặc Định (Nếu không gán Transform)")]
        [Tooltip("Độ cao điểm góc cao bên trái")]
        [SerializeField] private float leftTopY = 2.25f;
        [Tooltip("Độ cao điểm thấp nhất ở chính giữa (sát đất)")]
        [SerializeField] private float bottomCenterY = 0.18f;
        [Tooltip("Độ cao điểm góc cao bên phải")]
        [SerializeField] private float rightTopY = 2.25f;
        [Tooltip("Khoảng cách từ tâm gôn sang 2 bên cột dọc")]
        [SerializeField] private float halfWidth = 3.2f;
        [Tooltip("Vị trí trục Z của khung thành")]
        [SerializeField] private float goalZ = 10.0f;

        [Header("Flight Settings")]
        [SerializeField] private float flightTime = 0.65f;
        [SerializeField] private TrailRenderer trailRenderer;

        [Header("Goal Collider Tag")]
        [SerializeField] private string goalTag = "Goal";

        private Vector3 initialPosition;
        private Quaternion initialRotation;
        private bool isFlying = false;
        private bool hasResolved = false;
        private bool isGoalScored = false;
        private bool currentIsInsideGoal = true;
        private Vector3 currentShotTarget;

        [Header("Block Bounce (Va chạm Goalkeeper/Defender)")]
        [Tooltip("Tốc độ bắn ra (m/s) khi bị chặn. Kết hợp với Physic Material (Bounciness) trên Collider của bóng để tạo lực nảy thật qua Unity Physics.")]
        public float blockBounceSpeed = 65f;
        [Tooltip("Độ cao (trục Y, DƯƠNG = hất lên) ép cứng vào hướng phản xạ trước khi giao cho Physics, để cú nảy luôn hất lên chứ không sượt ngang")]
        public float blockBounceUpward = 0.45f;

        [Header("Goal Drop (Rơi vào lưới lúc ghi bàn)")]
        [Tooltip("Tốc độ rơi ban đầu (m/s) khi ghi bàn, giao cho Physics để rơi/nảy tự nhiên")]
        public float goalFallSpeed = 8f;
        [Tooltip("Độ chúc (trục Y, ÂM = chúc xuống) ép vào hướng rơi trước khi giao Physics, để rơi nhanh xuống lưới thay vì trôi ngang")]
        public float goalFallDownward = -1.2f;
        [Tooltip("Linear Damping lúc rơi trong lưới - để THẤP mới còn thấy nảy theo Bounciness, để cao quá sẽ mất hẳn độ nảy, rơi thẳng đứng luôn")]
        public float goalDropDamping = 0.25f;

        private Rigidbody rb;
        private Vector3 currentShotDirection;

        public event Action OnGoal;
        public event Action OnBlocked;

        private void Awake()
        {
            initialPosition = transform.position;
            initialRotation = transform.rotation;
            rb = GetComponent<Rigidbody>();

            if (bottomCenter == null && initialPosition.y > 0)
            {
                bottomCenterY = initialPosition.y;
            }

            // FIX: goalZ (Inspector) trước đây bị để mặc định = 10, không khớp với world Z thật của
            // bottomCenter (VD: 37). Vì goalZ chỉ dùng để check "bóng đã qua vạch vôi chưa" khi va chạm
            // Goalkeeper/Defender/Net, giá trị sai khiến điều kiện đó đúng gần như ngay từ đầu quỹ đạo
            // -> mọi cú chạm thủ môn đều bị tính GOAL thay vì bị cản. Luôn đồng bộ goalZ theo bottomCenter thật.
            if (bottomCenter != null)
            {
                goalZ = bottomCenter.position.z;
            }

            // DEBUG: In ra toạ độ WORLD thực tế của 3 marker chữ V lúc runtime,
            // để kiểm tra marker có bị lệch do cha (parent) bị xoay/scale hay không.
            Vector3 lWorld = leftTop != null ? leftTop.position : new Vector3(-halfWidth, leftTopY, goalZ);
            Vector3 cWorld = bottomCenter != null ? bottomCenter.position : new Vector3(0, bottomCenterY, goalZ);
            Vector3 rWorld = rightTop != null ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ);
            Debug.Log($"<color=cyan>[BALL DEBUG][Awake]</color> LeftTop(world)={lWorld} | BottomCenter(world)={cWorld} | RightTop(world)={rWorld} | goalZ(field)={goalZ}");
        }

        public void SetVShapeMarkers(Transform left, Transform center, Transform right)
        {
            leftTop = left;
            bottomCenter = center;
            rightTop = right;
        }

        public void SetGoalCenter(Transform center, float width = 3.2f)
        {
            halfWidth = width;
            if (center != null)
            {
                bottomCenter = center;
                goalZ = center.position.z;
            }
        }

        public void ResetBall()
        {
            StopAllCoroutines();
            isFlying = false;
            hasResolved = false;
            isGoalScored = false;
            currentIsInsideGoal = true;
            transform.position = initialPosition;
            transform.rotation = initialRotation;

            // Xoá sạch vận tốc thật còn sót lại từ cú nảy Physics trước đó (hoặc trọng lực âm thầm
            // tích luỹ trong lúc bay kịch bản) để không ảnh hưởng tới cú sút tiếp theo.
            if (rb != null)
            {
                rb.linearVelocity = Vector3.zero;
                rb.angularVelocity = Vector3.zero;
                rb.linearDamping = 0f; // trả lại damping gốc, tránh dính giá trị goalDropDamping từ lượt trước
            }

            if (trailRenderer != null)
            {
                trailRenderer.Clear();
                trailRenderer.enabled = false;
            }
            Debug.Log("<color=cyan>[BALL]</color> Reset Ball về vị trí xuất phát: " + initialPosition);
        }

        public void Shoot(Vector3 crosshairPos)
        {
            if (isFlying) return;
            isFlying = true;
            hasResolved = false;
            isGoalScored = false;

            if (trailRenderer != null)
            {
                trailRenderer.Clear();
                trailRenderer.enabled = true;
            }

            // TÍNH TOÁN ĐÍCH ĐẾN VÀ ĐỘ CAO THEO ĐÚNG TỌA ĐỘ X CỦA TARGETCROSSHAIR
            Vector3 vShapeTarget = CalculateVShapeTargetByX(crosshairPos.x, out float normalizedOffset, out currentIsInsideGoal);
            currentShotTarget = vShapeTarget;
            currentShotDirection = (vShapeTarget - transform.position).normalized;
            float arcApex = Mathf.Lerp(0.06f, 1.15f, normalizedOffset * normalizedOffset);

            Debug.Log($"<color=yellow>[BALL SHOOT]</color> CrosshairX={crosshairPos.x:F2} | V-Shape Target={vShapeTarget} | isInsideGoal={currentIsInsideGoal} | arcApex={arcApex:F2}");

            StartCoroutine(FlyTrajectory(vShapeTarget, arcApex, normalizedOffset, currentIsInsideGoal));
        }

        /// <summary>
        /// Tính đích đến trên khung thành theo tọa độ X thực tế của TargetCrosshair:
        /// - X < LeftTop.x: Ra ngoài gôn bên trái (Miss)
        /// - X > RightTop.x: Ra ngoài gôn bên phải (Miss)
        /// - LeftTop.x <= X <= RightTop.x: Vào khung thành theo đúng độ cao chữ V tại tọa độ X đó.
        /// </summary>
        public Vector3 CalculateVShapeTargetByX(float crosshairX, out float normalizedOffset, out bool isInsideGoal)
        {
            Vector3 lPos = leftTop != null ? leftTop.position : new Vector3(-halfWidth, leftTopY, goalZ);
            Vector3 cPos = bottomCenter != null ? bottomCenter.position : new Vector3(0, bottomCenterY, goalZ);
            Vector3 rPos = rightTop != null ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ);

            float minX = Mathf.Min(lPos.x, rPos.x); // Cột trái
            float maxX = Mathf.Max(lPos.x, rPos.x); // Cột phải
            float midX = cPos.x;                    // Tâm gôn

            float lY = leftTop != null ? leftTop.position.y : leftTopY;
            float cY = bottomCenter != null ? bottomCenter.position.y : bottomCenterY;
            float rY = rightTop != null ? rightTop.position.y : rightTopY;
            float gZ = bottomCenter != null ? bottomCenter.position.z : goalZ;

            Vector3 goalTarget;

            if (crosshairX < minX)
            {
                // RA NGOÀI BÊN TRÁI
                isInsideGoal = false;
                normalizedOffset = 1.0f;
                float outDist = minX - crosshairX;
                goalTarget = new Vector3(crosshairX, Mathf.Max(lY, 1.8f) + (outDist * 0.35f), gZ + 3.5f);
                Debug.Log($"<color=red>[V-SHAPE]</color> CrosshairX={crosshairX:F2} < Cột trái({minX:F2}) -> SÚT RA NGOÀI TRÁI! Target={goalTarget}");
            }
            else if (crosshairX > maxX)
            {
                // RA NGOÀI BÊN PHẢI
                isInsideGoal = false;
                normalizedOffset = 1.0f;
                float outDist = crosshairX - maxX;
                goalTarget = new Vector3(crosshairX, Mathf.Max(rY, 1.8f) + (outDist * 0.35f), gZ + 3.5f);
                Debug.Log($"<color=red>[V-SHAPE]</color> CrosshairX={crosshairX:F2} > Cột phải({maxX:F2}) -> SÚT RA NGOÀI PHẢI! Target={goalTarget}");
            }
            else
            {
                // NẰM TRONG KHUNG THÀNH -> TÍNH ĐỘ CAO Y TƯƠNG ỨNG TRÊN CHỮ V
                isInsideGoal = true;

                if (crosshairX <= midX)
                {
                    // Nửa bên trái: Nối từ LeftTop (lY) xuống BottomCenter (cY)
                    float range = midX - minX;
                    float t = (range > 0.001f) ? Mathf.Clamp01((crosshairX - minX) / range) : 0.5f;
                    float targetY = Mathf.Lerp(lY, cY, t);
                    goalTarget = new Vector3(crosshairX, targetY, gZ);
                    normalizedOffset = 1f - t; // 1 ở góc trái, 0 ở giữa
                    Debug.Log($"<color=green>[V-SHAPE]</color> CrosshairX={crosshairX:F2} -> NỬA TRÁI GÔN (t={t:F2}, Y={targetY:F2}), Target={goalTarget}");
                }
                else
                {
                    // Nửa bên phải: Nối từ BottomCenter (cY) lên RightTop (rY)
                    float range = maxX - midX;
                    float t = (range > 0.001f) ? Mathf.Clamp01((crosshairX - midX) / range) : 0.5f;
                    float targetY = Mathf.Lerp(cY, rY, t);
                    goalTarget = new Vector3(crosshairX, targetY, gZ);
                    normalizedOffset = t; // 0 ở giữa, 1 ở góc phải
                    Debug.Log($"<color=green>[V-SHAPE]</color> CrosshairX={crosshairX:F2} -> NỬA PHẢI GÔN (t={t:F2}, Y={targetY:F2}), Target={goalTarget}");
                }
            }

            return goalTarget;
        }

        private IEnumerator FlyTrajectory(Vector3 target, float arcApex, float normalizedOffset, bool isInsideGoal)
        {
            Vector3 start = transform.position;
            float elapsed = 0f;
            float spinSpeed = (isInsideGoal && normalizedOffset < 0.45f) ? 850f : 650f;

            while (elapsed < flightTime && !hasResolved)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / flightTime);

                Vector3 currentPos = Vector3.Lerp(start, target, t);
                currentPos.y = Mathf.Lerp(start.y, target.y, t) + (arcApex * 4f * t * (1f - t));

                transform.position = currentPos;
                transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);

                yield return null;
            }

            if (!hasResolved)
            {
                if (isInsideGoal)
                {
                    // KHÔNG tự tính GOAL theo timer nữa - phải va chạm THẬT với collider Goal/Net
                    // (xử lý trong HandleCollision) thì mới được tính bàn. Bóng tiếp tục bay thẳng
                    // theo hướng cũ để có cơ hội chạm lưới thật.
                    Debug.Log("<color=yellow>[BALL]</color> Đã bay hết quỹ đạo tới target nhưng CHƯA va chạm Goal/Net -> tiếp tục bay chờ va chạm thật...");
                    yield return StartCoroutine(FlyIntoGoalUntilHit(target, start, spinSpeed));
                }
                else
                {
                    hasResolved = true;
                    isFlying = false;

                    // SÚT RA NGOÀI: Bóng bay tiếp theo hướng cũ thêm 3 giây rồi mới tính MISS
                    Debug.Log("<color=red>[BALL MISS]</color> Bóng bay ra ngoài sân! Tiếp tục bay 3s...");
                    yield return StartCoroutine(FlyOutOfBounds(target, start, spinSpeed));
                    Debug.Log("<color=red>[BALL MISS]</color> Hết 3s -> Tính MISS và chuyển hiệp!");
                    OnBlocked?.Invoke();
                }
            }
        }

        /// <summary>
        /// Bóng đã bay hết flightTime tới đúng target chữ V nhưng chưa va chạm collider Goal/Net nào.
        /// Tiếp tục bay thẳng thêm 1 đoạn an toàn để chờ va chạm THẬT (qua HandleCollision) xác nhận GOAL.
        /// Nếu hết thời gian chờ mà vẫn không chạm gì -> báo lỗi thiết lập collider và tính MISS (không tự bịa goal).
        /// </summary>
        private IEnumerator FlyIntoGoalUntilHit(Vector3 target, Vector3 start, float spinSpeed)
        {
            Vector3 flyDir = (target - start).normalized;
            float speed = Vector3.Distance(start, target) / Mathf.Max(flightTime, 0.01f);
            float elapsed = 0f;
            float maxWaitTime = 1.5f;

            while (elapsed < maxWaitTime && !hasResolved)
            {
                elapsed += Time.deltaTime;
                transform.position += flyDir * speed * Time.deltaTime;
                transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);
                yield return null;
            }

            if (!hasResolved)
            {
                hasResolved = true;
                isFlying = false;
                Debug.LogWarning($"<color=red>[BALL] KHÔNG tìm thấy va chạm với collider Goal/Net sau {maxWaitTime:F1}s chờ thêm!</color> Kiểm tra lại Collider lưới/khung thành có che đúng vùng chữ V không. Tạm tính MISS để không bịa goal giả.");
                OnBlocked?.Invoke();
            }
        }

        private IEnumerator FlyOutOfBounds(Vector3 target, Vector3 start, float spinSpeed)
        {
            // Hướng bay tiếp = hướng từ start -> target
            Vector3 flyDir = (target - start).normalized;
            float speed = Vector3.Distance(start, target) / flightTime;
            float elapsed = 0f;
            float continueTime = 3f;

            while (elapsed < continueTime)
            {
                elapsed += Time.deltaTime;

                // Bay tiếp theo hướng cũ
                transform.position += flyDir * speed * Time.deltaTime;

                // Xoay bóng
                transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);

                yield return null;
            }
        }

        private void OnTriggerEnter(Collider other)
        {
            HandleCollision(other.gameObject, "OnTriggerEnter");
        }

        private void OnCollisionEnter(Collision collision)
        {
            HandleCollision(collision.gameObject, "OnCollisionEnter");
        }

        private void HandleCollision(GameObject hitObj, string collisionType)
        {
            // Bỏ qua bóng, Ronaldo, mặt sân, marker đường ngắm
            string objName = hitObj.name.ToLower();
            if (objName.Contains("ronaldo") || objName.Contains("player") || objName.Contains("crosshair") || objName.Contains("marker") || objName.Contains("sân") || objName.Contains("pitch") || objName.Contains("grass"))
            {
                return;
            }

            Debug.Log($"<color=orange>[BALL COLLISION - {collisionType}]</color> Chạm vào: <b>{hitObj.name}</b> (Tag: {hitObj.tag}) tại Pos={hitObj.transform.position} | Ball Pos={transform.position}");

            if (isGoalScored)
            {
                Debug.Log($"<color=grey>[BALL IGNORE]</color> Đã ghi bàn rồi, bỏ qua va chạm với {hitObj.name}");
                return;
            }

            if (!isFlying || hasResolved) return;

            // 0. CHẠM LƯỚI / KHUNG THÀNH -> LUÔN tính GOAL ngay khi va chạm thật, BẤT KỂ lúc nhắm có bị
            // coi là "sút ra ngoài" hay không (currentIsInsideGoal). Xét TRƯỚC blocker/out-of-bounds theo
            // đúng yêu cầu: "cứ chạm vào collider của goal là auto vào".
            // Loại trừ objName chứa "goalkeeper" để không bị dính nhầm do "Goalkeeper".Contains("goal").
            bool isKeeperNamed = objName.Contains("goalkeeper") || hitObj.CompareTag("Goalkeeper");
            bool isGoalObj = !isKeeperNamed &&
                             (hitObj.CompareTag(goalTag) ||
                              objName.Contains("goal") ||
                              objName.Contains("net"));

            if (isGoalObj)
            {
                Vector3 beforeNetSnap = transform.position;
                Debug.Log($"<color=green>[BALL GOAL]</color> Chạm vào {hitObj.name} -> GOAL! (currentIsInsideGoal={currentIsInsideGoal})");
                isGoalScored = true;
                hasResolved = true;
                isFlying = false;
                StopAllCoroutines();

                if (currentIsInsideGoal)
                {
                    // Cú sút hợp lệ trong khung thành -> chốt cứng về đúng điểm đích chữ V
                    // (tránh dư độ cao vòng cung do chạm lưới sớm giữa quỹ đạo)
                    transform.position = currentShotTarget;
                }
                // Nếu currentIsInsideGoal=false (lúc nhắm bị coi là ra ngoài) nhưng vẫn chạm thật collider Goal
                // -> giữ nguyên vị trí va chạm thật, KHÔNG ép về currentShotTarget (vốn là điểm quỹ đạo "ra ngoài", không hợp lệ để chốt vào đây).

                Debug.Log($"<color=cyan>[BALL DEBUG][SNAP-NetHit]</color> BeforeSnap={beforeNetSnap} -> AfterSnap={transform.position} (currentShotTarget={currentShotTarget})");
                OnGoal?.Invoke();
                ApplyGoalPhysics();
                return;
            }

            // Nếu sút ra ngoài và không chạm Goal collider ở trên -> bỏ qua các va chạm còn lại (blocker...)
            if (!currentIsInsideGoal)
            {
                Debug.Log($"<color=grey>[BALL OUT OF BOUNDS]</color> Cú sút ra ngoài, bỏ qua va chạm với {hitObj.name}");
                return;
            }

            // 1. CHẠM GOALKEEPER / DEFENDER
            bool isBlocker = hitObj.CompareTag("Goalkeeper") ||
                             hitObj.CompareTag("Defender") ||
                             hitObj.GetComponentInParent<PenaltyGoalkeeperAI>() != null ||
                             hitObj.GetComponentInParent<PenaltyDefenderAI>() != null ||
                             objName.Contains("goalkeeper") ||
                             objName.Contains("defender") ||
                             objName.Contains("gk");

            if (isBlocker)
            {
                // Nếu bóng đã vào sâu trong khung thành (Z >= goalZ - 0.4f) -> Vẫn tính GOAL
                if (transform.position.z >= goalZ - 0.4f)
                {
                    Vector3 beforeSnap = transform.position;
                    Debug.Log($"<color=green>[BALL GOAL]</color> Bóng đã qua vạch vôi (Z={transform.position.z:F2}) trước khi chạm Blocker {hitObj.name} -> GOAL!");
                    isGoalScored = true;
                    hasResolved = true;
                    isFlying = false;
                    StopAllCoroutines();

                    // Chốt cứng về đúng điểm đích chữ V (tránh dư độ cao vòng cung do va chạm sớm giữa quỹ đạo)
                    transform.position = currentShotTarget;
                    Debug.Log($"<color=cyan>[BALL DEBUG][SNAP-BlockerButGoal]</color> BeforeSnap={beforeSnap} -> AfterSnap={transform.position} (currentShotTarget={currentShotTarget}) | DeltaY={transform.position.y - beforeSnap.y:F4}");
                    OnGoal?.Invoke();
                    ApplyGoalPhysics();
                    return;
                }

                // Cản phá thật sự -> Giao cho Unity Physics + Physic Material (Bounciness) tự tính nảy,
                // thay vì tự lerp transform.position như trước.
                Debug.Log($"<color=red>[BALL BLOCKED]</color> Bị chặn bởi {hitObj.name}! Bắn Rigidbody nảy ngược lại!");
                hasResolved = true;
                isFlying = false;
                StopAllCoroutines();

                Vector3 reflectDir = (transform.position - hitObj.transform.position).normalized;
                reflectDir.y = blockBounceUpward;
                reflectDir.z = -Mathf.Abs(reflectDir.z);
                reflectDir.Normalize();

                if (rb != null)
                {
                    // Xoá vận tốc "ẩn" do trọng lực âm thầm tích luỹ trong lúc bay kịch bản
                    // (suốt FlyTrajectory ta ghi đè transform.position mỗi frame nên không thấy,
                    // nhưng Rigidbody vẫn tích luỹ velocity phía dưới) -> tránh cộng dồn sai vào cú nảy.
                    rb.linearVelocity = Vector3.zero;
                    rb.angularVelocity = Vector3.zero;
                    rb.linearVelocity = reflectDir * blockBounceSpeed;
                    Debug.Log($"<color=cyan>[BALL DEBUG][PHYSICS BOUNCE]</color> reflectDir={reflectDir} | velocity={rb.linearVelocity} | isKinematic={rb.isKinematic} | mass={rb.mass}");
                    StartCoroutine(LogVelocityFramesForDebug());
                }
                else
                {
                    Debug.LogError("<color=red>[BALL DEBUG] rb (Rigidbody) đang NULL -> không set được velocity nảy!</color> Kiểm tra lại Ball GameObject có đúng component Rigidbody không.");
                }

                OnBlocked?.Invoke();
                return;
            }
        }

        /// <summary>
        /// DEBUG: In ra velocity + vị trí của Rigidbody trong 10 frame liên tiếp sau cú nảy chặn bóng,
        /// để xác định velocity có thực sự được áp dụng và duy trì hay bị gì đó ghì/reset lại ngay.
        /// </summary>
        private IEnumerator LogVelocityFramesForDebug()
        {
            for (int i = 0; i < 10; i++)
            {
                yield return null;
                if (rb == null) yield break;
                Debug.Log($"<color=magenta>[BALL DEBUG][BOUNCE FRAME {i}]</color> velocity={rb.linearVelocity} | pos={transform.position} | isKinematic={rb.isKinematic}");
            }
        }

        /// <summary>
        /// Giao bóng cho Unity Physics thật (Rigidbody + Gravity + Physic Material) khi đã xác nhận GOAL,
        /// thay vì tự lerp transform.position như DropInsideNet() cũ.
        /// </summary>
        private void ApplyGoalPhysics()
        {
            if (rb == null) return;

            // Xoá vận tốc "ẩn" tích luỹ trong lúc bay kịch bản (xem giải thích ở nhánh Block Bounce)
            rb.linearVelocity = Vector3.zero;
            rb.angularVelocity = Vector3.zero;

            // Ép hướng CHÚC XUỐNG (goalFallDownward âm) để rơi nhanh vào lưới, KHÁC với nhánh Block Bounce
            // (nhánh đó ép hướng lên vì cần bắn ra/nảy ngược, còn goal thì cần rơi nhanh xuống).
            Vector3 dir = currentShotDirection;
            dir.y = goalFallDownward;
            dir.Normalize();
            rb.linearVelocity = dir * goalFallSpeed;

            // Damping thấp để Physic Material (Bounciness) còn có cơ hội tạo vài cú nảy thật trước khi lắng.
            rb.linearDamping = goalDropDamping;

            Debug.Log($"<color=cyan>[BALL DEBUG][GOAL PHYSICS]</color> direction={currentShotDirection} | velocity={rb.linearVelocity} | damping={rb.linearDamping}");
        }

        private void OnDrawGizmosSelected()
        {
            Vector3 lPos = leftTop != null ? leftTop.position : new Vector3(-halfWidth, leftTopY, goalZ);
            Vector3 cPos = bottomCenter != null ? bottomCenter.position : new Vector3(0, bottomCenterY, goalZ);
            Vector3 rPos = rightTop != null ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ);

            Gizmos.color = new Color(0.2f, 0.95f, 0.35f, 0.95f);
            Gizmos.DrawLine(lPos, cPos);
            Gizmos.DrawLine(cPos, rPos);

            Gizmos.DrawWireSphere(lPos, 0.2f);
            Gizmos.DrawWireSphere(cPos, 0.2f);
            Gizmos.DrawWireSphere(rPos, 0.2f);
        }
    }
}
