using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyDefenderAI : MonoBehaviour
    {
        [Header("Movement Bounds")]
        [SerializeField] private Transform leftLimit;
        [SerializeField] private Transform rightLimit;
        [SerializeField] private float speed = 2.2f;

        [Header("Initial State")]
        [SerializeField] private bool startActive = false;

        private float t = 0.5f;
        private int direction = -1;
        private bool isMoving = false;
        private Vector3 initialPosition;

        private void Awake()
        {
            initialPosition = transform.position;
            if (!startActive)
            {
                isMoving = false;
            }
        }

        public void SetBounds(Transform left, Transform right)
        {
            leftLimit = left;
            rightLimit = right;
        }

        public void SetSpeed(float newSpeed) => speed = newSpeed;

        public void Activate()
        {
            gameObject.SetActive(true);
            isMoving = true;
            t = 0.5f;
            direction = -1;
            if (leftLimit != null && rightLimit != null)
            {
                transform.position = Vector3.Lerp(leftLimit.position, rightLimit.position, 0.5f);
            }
        }

        public void Deactivate()
        {
            isMoving = false;
            gameObject.SetActive(false);
        }

        // Hỗ trợ cấu hình round cũ
        public void SetupRound(int round)
        {
            if (round <= 1)
            {
                Deactivate();
            }
            else
            {
                Activate();
            }
        }

        private void Update()
        {
            if (!isMoving || leftLimit == null || rightLimit == null) return;

            t += direction * speed * Time.deltaTime;
            if (t >= 1f) { t = 1f; direction = -1; }
            if (t <= 0f) { t = 0f; direction = 1; }

            float smoothT = Mathf.SmoothStep(0f, 1f, t);
            transform.position = Vector3.Lerp(leftLimit.position, rightLimit.position, smoothT);
        }

        private void OnDrawGizmosSelected()
        {
            if (leftLimit != null && rightLimit != null)
            {
                Gizmos.color = Color.cyan;
                Gizmos.DrawLine(leftLimit.position, rightLimit.position);
                Gizmos.DrawWireSphere(leftLimit.position, 0.25f);
                Gizmos.DrawWireSphere(rightLimit.position, 0.25f);
            }
        }
    }
}
