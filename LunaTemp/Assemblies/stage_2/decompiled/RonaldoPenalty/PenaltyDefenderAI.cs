using UnityEngine;

namespace RonaldoPenalty
{
	public class PenaltyDefenderAI : MonoBehaviour
	{
		[Header("Movement Bounds")]
		[SerializeField]
		private Transform leftLimit;

		[SerializeField]
		private Transform rightLimit;

		[SerializeField]
		private float speed = 2.2f;

		[Header("Initial State")]
		[SerializeField]
		private bool startActive = false;

		private float t = 0.5f;

		private int direction = 1;

		private bool isMoving = false;

		private Vector3 initialPosition;

		private void Awake()
		{
			initialPosition = base.transform.position;
			if (startActive)
			{
				Activate();
			}
			else
			{
				isMoving = false;
			}
		}

		public void SetBounds(Transform left, Transform right)
		{
			leftLimit = left;
			rightLimit = right;
			CalculateCurrentT();
		}

		public void SetSpeed(float newSpeed)
		{
			speed = newSpeed;
		}

		public void Activate()
		{
			base.gameObject.SetActive(true);
			isMoving = true;
			direction = 1;
			CalculateCurrentT();
		}

		public void Deactivate()
		{
			isMoving = false;
			base.gameObject.SetActive(false);
			if (initialPosition != Vector3.zero)
			{
				base.transform.position = initialPosition;
			}
		}

		public void ResetPosition()
		{
			if (initialPosition != Vector3.zero)
			{
				base.transform.position = initialPosition;
			}
			CalculateCurrentT();
			direction = 1;
		}

		private void CalculateCurrentT()
		{
			if (leftLimit != null && rightLimit != null)
			{
				Vector3 segment = rightLimit.position - leftLimit.position;
				float sqrMag = segment.sqrMagnitude;
				if (sqrMag > 0.0001f)
				{
					Vector3 offset = base.transform.position - leftLimit.position;
					t = Mathf.Clamp01(Vector3.Dot(offset, segment) / sqrMag);
				}
				else
				{
					t = 0.5f;
				}
			}
			else
			{
				t = 0.5f;
			}
		}

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
			if (isMoving && !(leftLimit == null) && !(rightLimit == null))
			{
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
				base.transform.position = Vector3.Lerp(leftLimit.position, rightLimit.position, smoothT);
			}
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
