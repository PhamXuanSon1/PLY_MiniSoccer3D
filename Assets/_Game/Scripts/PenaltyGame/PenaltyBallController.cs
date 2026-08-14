using System;
using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyBallController : MonoBehaviour
    {
        [Header("Goal References")]
        [SerializeField] private Transform goalCenter;
        [SerializeField] private float goalHalfWidth = 3.5f;

        [Header("Flight Settings")]
        [SerializeField] private float flightTime = 0.7f;
        [SerializeField] private TrailRenderer trailRenderer;

        [Header("Height Curve")]
        [Tooltip("Độ cao bóng khi sút thẳng vào giữa")]
        [SerializeField] private float minHeightCenter = 0.12f;
        [Tooltip("Độ cao bóng tối đa khi sút sát 2 cột dọc")]
        [SerializeField] private float maxHeightEdge = 2.2f;

        private Vector3 initialPosition;
        private Quaternion initialRotation;
        private bool isFlying = false;

        public event Action OnGoal;
        public event Action OnBlocked;

        private void Awake()
        {
            initialPosition = transform.position;
            initialRotation = transform.rotation;
        }

        public void SetGoalCenter(Transform center, float halfWidth = 3.5f)
        {
            goalCenter = center;
            goalHalfWidth = halfWidth;
        }

        public void ResetBall()
        {
            StopAllCoroutines();
            isFlying = false;
            transform.position = initialPosition;
            transform.rotation = initialRotation;
            if (trailRenderer != null)
            {
                trailRenderer.Clear();
                trailRenderer.enabled = false;
            }
        }

        public void Shoot(Vector3 targetPos)
        {
            if (isFlying) return;
            isFlying = true;

            if (trailRenderer != null)
            {
                trailRenderer.Clear();
                trailRenderer.enabled = true;
            }

            Vector3 centerPos = goalCenter != null ? goalCenter.position : new Vector3(0, 0, targetPos.z);
            
            // Tính độ lệch tâm từ 0 (giữa) -> 1 (sát cột)
            float offsetX = Mathf.Abs(targetPos.x - centerPos.x) / goalHalfWidth;
            float normalizedOffset = Mathf.Clamp01(offsetX);

            // Bóng vào giữa -> sệt (tầm thấp). Càng lệch 2 bên -> càng bổng cao lên
            float dynamicMaxHeight = Mathf.Lerp(minHeightCenter, maxHeightEdge, Mathf.Pow(normalizedOffset, 1.5f));

            // Điều chỉnh độ cao đích đến (Target Y)
            Vector3 finalTarget = targetPos;
            if (normalizedOffset < 0.35f)
            {
                // Sút giữa: đích đến ở tầm sát mặt đất (Y = 0.18m)
                finalTarget.y = 0.18f;
            }
            else
            {
                // Sút lệch: đích đến bổng lên góc cao
                finalTarget.y = Mathf.Lerp(0.3f, 2.1f, Mathf.Pow(normalizedOffset, 1.3f));
            }

            StartCoroutine(FlyTrajectory(finalTarget, dynamicMaxHeight, normalizedOffset));
        }

        private IEnumerator FlyTrajectory(Vector3 target, float maxHeight, float normalizedOffset)
        {
            Vector3 start = transform.position;
            float elapsed = 0f;
            bool isLowShot = normalizedOffset < 0.45f;

            // Xoay bóng tốc độ cao
            float spinSpeed = isLowShot ? 850f : 650f;

            while (elapsed < flightTime)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / flightTime);

                Vector3 currentPos = Vector3.Lerp(start, target, t);

                if (isLowShot)
                {
                    // SÚT SỆT CÓ 1 NHỊP NẢY TRÊN ĐƯỜNG BAY
                    // Phase 1 (0 -> 0.65): Bay sệt chạm đất
                    // Phase 2 (0.65 -> 1.0): Nảy nhẹ lên rồi lăn vào lưới
                    if (t < 0.65f)
                    {
                        float subT = t / 0.65f;
                        currentPos.y = Mathf.Lerp(start.y, 0.15f, subT) + (maxHeight * 3.2f * subT * (1f - subT));
                    }
                    else
                    {
                        float subT = (t - 0.65f) / 0.35f;
                        float bounceH = 0.28f;
                        currentPos.y = 0.15f + (bounceH * 4f * subT * (1f - subT));
                    }
                }
                else
                {
                    // SÚT BỔNG ĐƯỜNG CẦU VỒNG (Parabol mượt mà lên góc cao)
                    currentPos.y = Mathf.Lerp(start.y, target.y, t) + (maxHeight * 4f * t * (1f - t));
                }

                transform.position = currentPos;
                transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);

                yield return null;
            }

            transform.position = target;
            isFlying = false;
            OnGoal?.Invoke();

            // Bóng rơi xuống mặt sân tự nhiên bên trong khung thành
            yield return StartCoroutine(DropInsideNet(target));
        }

        private IEnumerator DropInsideNet(Vector3 netEntryPos)
        {
            Vector3 pos = netEntryPos;
            float targetZ = pos.z + 0.65f; // Trôi nhẹ sâu vào trong lưới
            float velocityY = -0.5f; // Bắt đầu rơi
            float velocityZ = 2.0f;
            float gravity = 14f;
            float groundY = 0.15f;

            // Nếu bóng bay vào tầm cao -> rơi xuống đất
            while (pos.y > groundY || velocityY > 0)
            {
                velocityY -= gravity * Time.deltaTime;
                pos.y += velocityY * Time.deltaTime;

                if (pos.z < targetZ)
                {
                    pos.z += velocityZ * Time.deltaTime;
                    velocityZ = Mathf.MoveTowards(velocityZ, 0f, 4f * Time.deltaTime);
                }

                transform.Rotate(Vector3.right, 250f * Time.deltaTime, Space.World);

                if (pos.y <= groundY)
                {
                    pos.y = groundY;
                    transform.position = pos;

                    // Nảy nhẹ trên mặt cỏ trong lưới
                    if (Mathf.Abs(velocityY) > 2.2f)
                    {
                        velocityY = -velocityY * 0.28f;
                    }
                    else
                    {
                        break;
                    }
                }

                transform.position = pos;
                yield return null;
            }

            pos.y = groundY;
            transform.position = pos;
        }

        private void OnTriggerEnter(Collider other)
        {
            HandleBlockCollision(other.gameObject);
        }

        private void OnCollisionEnter(Collision collision)
        {
            HandleBlockCollision(collision.gameObject);
        }

        private void HandleBlockCollision(GameObject targetObj)
        {
            if (!isFlying) return;

            bool isBlocker = targetObj.CompareTag("Goalkeeper") ||
                             targetObj.CompareTag("Defender") ||
                             targetObj.GetComponentInParent<PenaltyGoalkeeperAI>() != null ||
                             targetObj.GetComponentInParent<PenaltyDefenderAI>() != null ||
                             targetObj.name.ToLower().Contains("goalkeeper") ||
                             targetObj.name.ToLower().Contains("defender") ||
                             targetObj.name.ToLower().Contains("gk") ||
                             targetObj.name.ToLower().Contains("hv");

            if (isBlocker)
            {
                StopAllCoroutines();
                isFlying = false;

                // Tính hướng lệch ngang dựa trên điểm va chạm
                Vector3 hitDir = (transform.position - targetObj.transform.position).normalized;

                StartCoroutine(BounceBack(hitDir));
                OnBlocked?.Invoke();
            }
        }

        private IEnumerator BounceBack(Vector3 hitNormal)
        {
            // Vận tốc văng dội ngược lại tức thì về phía camera
            Vector3 velocity = new Vector3(
                Mathf.Clamp(hitNormal.x * 4.0f, -4f, 4f),
                4.8f,   // Độ bổng nảy lên
                -11.5f  // Văng ngược mạnh về phía trước (-Z)
            );

            float duration = 1.2f;
            float elapsed = 0f;
            float gravity = 16f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;

                // Trọng lực kéo bóng rơi xuống
                velocity.y -= gravity * Time.deltaTime;
                transform.position += velocity * Time.deltaTime;

                // Xoay bóng ngược cực nhanh
                transform.Rotate(Vector3.right, -800f * Time.deltaTime, Space.World);

                // Chạm mặt cỏ thì nảy nhẹ và lăn
                if (transform.position.y <= 0.15f)
                {
                    Vector3 pos = transform.position;
                    pos.y = 0.15f;
                    transform.position = pos;

                    if (velocity.y < 0)
                    {
                        velocity.y = -velocity.y * 0.35f; // Nảy nhẹ trên mặt cỏ
                        velocity.z *= 0.65f; // Giảm tốc lăn
                    }
                }

                yield return null;
            }
        }
    }
}
