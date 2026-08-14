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

            // Nảy nhẹ lần cuối nếu là bóng sệt khi vào lưới
            if (isLowShot)
            {
                yield return StartCoroutine(FinalNetBounce(target));
            }

            isFlying = false;
            OnGoal?.Invoke();
        }

        private IEnumerator FinalNetBounce(Vector3 landPos)
        {
            float bounceTime = 0.18f;
            float elapsed = 0f;
            Vector3 bounceTarget = landPos + Vector3.forward * 0.5f;

            while (elapsed < bounceTime)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / bounceTime;
                Vector3 pos = Vector3.Lerp(landPos, bounceTarget, t);
                pos.y = landPos.y + (0.18f * 4f * t * (1f - t));
                transform.position = pos;
                yield return null;
            }
        }

        private void OnTriggerEnter(Collider other)
        {
            if (!isFlying) return;

            if (other.CompareTag("Goalkeeper") || other.CompareTag("Defender"))
            {
                StopAllCoroutines();
                isFlying = false;

                // Tính hướng bóng bật ngược lại
                Vector3 reflectDir = (transform.position - other.transform.position).normalized;
                reflectDir.y = 0.38f; // Bổng ngược lên
                reflectDir.z = -Mathf.Abs(reflectDir.z); // Luôn dội ngược về sau

                StartCoroutine(BounceBack(reflectDir));
                OnBlocked?.Invoke();
            }
        }

        private IEnumerator BounceBack(Vector3 direction)
        {
            float duration = 0.85f;
            float speed = 7.5f;
            float elapsed = 0f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / duration;

                float decel = 1f - t;
                transform.position += direction * speed * decel * Time.deltaTime;

                // Trọng lực kéo bóng rơi xuống
                direction.y -= 9.8f * Time.deltaTime;
                transform.Rotate(Vector3.right, -650f * Time.deltaTime, Space.World);

                yield return null;
            }
        }
    }
}
