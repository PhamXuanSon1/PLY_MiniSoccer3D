using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyGoalkeeperAI : MonoBehaviour
    {
        [Header("Movement Bounds")]
        [SerializeField] private Transform leftPost;
        [SerializeField] private Transform rightPost;

        [Header("Speed Settings")]
        [SerializeField] private float baseSpeed = 1.8f;
        [SerializeField] private bool changeSpeedByRound = false;

        private float currentSpeed;
        private float t = 0.5f;
        private int direction = 1;
        private bool isPatrolling = true;
        private Vector3 startPos;

        private void Awake()
        {
            startPos = transform.position;
            currentSpeed = baseSpeed;
        }

        public void SetBounds(Transform left, Transform right)
        {
            leftPost = left;
            rightPost = right;
        }

        public void SetupRound(int round)
        {
            if (changeSpeedByRound)
            {
                currentSpeed = baseSpeed + (round - 1) * 0.5f;
            }
            else
            {
                currentSpeed = baseSpeed;
            }

            transform.position = startPos;
            t = 0.5f;
            isPatrolling = true;
        }

        public void StopPatrol() => isPatrolling = false;

        private void Update()
        {
            if (!isPatrolling || leftPost == null || rightPost == null) return;

            t += direction * currentSpeed * Time.deltaTime;
            if (t >= 1f) { t = 1f; direction = -1; }
            if (t <= 0f) { t = 0f; direction = 1; }

            float smoothT = Mathf.SmoothStep(0f, 1f, t);
            transform.position = Vector3.Lerp(leftPost.position, rightPost.position, smoothT);
        }

        private void OnDrawGizmosSelected()
        {
            if (leftPost != null && rightPost != null)
            {
                Gizmos.color = Color.yellow;
                Gizmos.DrawLine(leftPost.position, rightPost.position);
                Gizmos.DrawWireSphere(leftPost.position, 0.3f);
                Gizmos.DrawWireSphere(rightPost.position, 0.3f);
            }
        }
    }
}
