using System;
using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
	public class PenaltyBallController : MonoBehaviour
	{
		[Header("V-Shape 3D Target Setup (Đường chữ V xanh lá trong khung thành)")]
		[Tooltip("Transform điểm góc cao bên trái của chữ V (LeftTop)")]
		[SerializeField]
		private Transform leftTop;

		[Tooltip("Transform điểm thấp nhất ở giữa của chữ V (BottomCenter)")]
		[SerializeField]
		private Transform bottomCenter;

		[Tooltip("Transform điểm góc cao bên phải của chữ V (RightTop)")]
		[SerializeField]
		private Transform rightTop;

		[Header("Tọa độ Chữ V Mặc Định (Nếu không gán Transform)")]
		[Tooltip("Độ cao điểm góc cao bên trái")]
		[SerializeField]
		private float leftTopY = 2.25f;

		[Tooltip("Độ cao điểm thấp nhất ở chính giữa (sát đất)")]
		[SerializeField]
		private float bottomCenterY = 0.18f;

		[Tooltip("Độ cao điểm góc cao bên phải")]
		[SerializeField]
		private float rightTopY = 2.25f;

		[Tooltip("Khoảng cách từ tâm gôn sang 2 bên cột dọc")]
		[SerializeField]
		private float halfWidth = 3.2f;

		[Tooltip("Vị trí trục Z của khung thành")]
		[SerializeField]
		private float goalZ = 10f;

		[Header("Flight Settings")]
		[SerializeField]
		private float flightTime = 0.65f;

		[SerializeField]
		private TrailRenderer trailRenderer;

		[Header("Goal Collider Tag")]
		[SerializeField]
		private string goalTag = "Goal";

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
			initialPosition = base.transform.position;
			initialRotation = base.transform.rotation;
			rb = GetComponent<Rigidbody>();
			if (bottomCenter == null && initialPosition.y > 0f)
			{
				bottomCenterY = initialPosition.y;
			}
			if (bottomCenter != null)
			{
				goalZ = bottomCenter.position.z;
			}
			Vector3 lWorld = ((leftTop != null) ? leftTop.position : new Vector3(0f - halfWidth, leftTopY, goalZ));
			Vector3 cWorld = ((bottomCenter != null) ? bottomCenter.position : new Vector3(0f, bottomCenterY, goalZ));
			Vector3 rWorld = ((rightTop != null) ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ));
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
			base.transform.position = initialPosition;
			base.transform.rotation = initialRotation;
			if (rb != null)
			{
				rb.linearVelocity = Vector3.zero;
				rb.angularVelocity = Vector3.zero;
				rb.linearDamping = 0f;
			}
			if (trailRenderer != null)
			{
				trailRenderer.Clear();
				trailRenderer.enabled = false;
			}
			Vector3 vector = initialPosition;
			Debug.Log("<color=cyan>[BALL]</color> Reset Ball về vị trí xuất phát: " + vector.ToString());
		}

		public void Shoot(Vector3 crosshairPos)
		{
			if (!isFlying)
			{
				isFlying = true;
				hasResolved = false;
				isGoalScored = false;
				if (trailRenderer != null)
				{
					trailRenderer.Clear();
					trailRenderer.enabled = true;
				}
				float normalizedOffset;
				Vector3 vShapeTarget = (currentShotTarget = CalculateVShapeTargetByX(crosshairPos.x, out normalizedOffset, out currentIsInsideGoal));
				currentShotDirection = (vShapeTarget - base.transform.position).normalized;
				float arcApex = Mathf.Lerp(0.06f, 1.15f, normalizedOffset * normalizedOffset);
				Debug.Log($"<color=yellow>[BALL SHOOT]</color> CrosshairX={crosshairPos.x:F2} | V-Shape Target={vShapeTarget} | isInsideGoal={currentIsInsideGoal} | arcApex={arcApex:F2}");
				StartCoroutine(FlyTrajectory(vShapeTarget, arcApex, normalizedOffset, currentIsInsideGoal));
			}
		}

		public Vector3 CalculateVShapeTargetByX(float crosshairX, out float normalizedOffset, out bool isInsideGoal)
		{
			Vector3 lPos = ((leftTop != null) ? leftTop.position : new Vector3(0f - halfWidth, leftTopY, goalZ));
			Vector3 cPos = ((bottomCenter != null) ? bottomCenter.position : new Vector3(0f, bottomCenterY, goalZ));
			Vector3 rPos = ((rightTop != null) ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ));
			float minX = Mathf.Min(lPos.x, rPos.x);
			float maxX = Mathf.Max(lPos.x, rPos.x);
			float midX = cPos.x;
			float lY = ((leftTop != null) ? leftTop.position.y : leftTopY);
			float cY = ((bottomCenter != null) ? bottomCenter.position.y : bottomCenterY);
			float rY = ((rightTop != null) ? rightTop.position.y : rightTopY);
			float gZ = ((bottomCenter != null) ? bottomCenter.position.z : goalZ);
			Vector3 goalTarget;
			if (crosshairX < minX)
			{
				isInsideGoal = false;
				normalizedOffset = 1f;
				float outDist2 = minX - crosshairX;
				goalTarget = new Vector3(crosshairX, Mathf.Max(lY, 1.8f) + outDist2 * 0.35f, gZ + 3.5f);
				Debug.Log($"<color=red>[V-SHAPE]</color> CrosshairX={crosshairX:F2} < Cột trái({minX:F2}) -> SÚT RA NGOÀI TRÁI! Target={goalTarget}");
			}
			else if (crosshairX > maxX)
			{
				isInsideGoal = false;
				normalizedOffset = 1f;
				float outDist = crosshairX - maxX;
				goalTarget = new Vector3(crosshairX, Mathf.Max(rY, 1.8f) + outDist * 0.35f, gZ + 3.5f);
				Debug.Log($"<color=red>[V-SHAPE]</color> CrosshairX={crosshairX:F2} > Cột phải({maxX:F2}) -> SÚT RA NGOÀI PHẢI! Target={goalTarget}");
			}
			else
			{
				isInsideGoal = true;
				if (crosshairX <= midX)
				{
					float range2 = midX - minX;
					float t2 = ((range2 > 0.001f) ? Mathf.Clamp01((crosshairX - minX) / range2) : 0.5f);
					float targetY2 = Mathf.Lerp(lY, cY, t2);
					goalTarget = new Vector3(crosshairX, targetY2, gZ);
					normalizedOffset = 1f - t2;
					Debug.Log($"<color=green>[V-SHAPE]</color> CrosshairX={crosshairX:F2} -> NỬA TRÁI GÔN (t={t2:F2}, Y={targetY2:F2}), Target={goalTarget}");
				}
				else
				{
					float range = maxX - midX;
					float t = ((range > 0.001f) ? Mathf.Clamp01((crosshairX - midX) / range) : 0.5f);
					float targetY = Mathf.Lerp(cY, rY, t);
					goalTarget = new Vector3(crosshairX, targetY, gZ);
					normalizedOffset = t;
					Debug.Log($"<color=green>[V-SHAPE]</color> CrosshairX={crosshairX:F2} -> NỬA PHẢI GÔN (t={t:F2}, Y={targetY:F2}), Target={goalTarget}");
				}
			}
			return goalTarget;
		}

		private IEnumerator FlyTrajectory(Vector3 target, float arcApex, float normalizedOffset, bool isInsideGoal)
		{
			Vector3 start = base.transform.position;
			float elapsed = 0f;
			float spinSpeed = ((isInsideGoal && normalizedOffset < 0.45f) ? 850f : 650f);
			while (elapsed < flightTime && !hasResolved)
			{
				elapsed += Time.deltaTime;
				float t = Mathf.Clamp01(elapsed / flightTime);
				Vector3 currentPos = Vector3.Lerp(start, target, t);
				currentPos.y = Mathf.Lerp(start.y, target.y, t) + arcApex * 4f * t * (1f - t);
				base.transform.position = currentPos;
				base.transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);
				yield return null;
			}
			if (!hasResolved)
			{
				if (isInsideGoal)
				{
					Debug.Log("<color=yellow>[BALL]</color> Đã bay hết quỹ đạo tới target nhưng CHƯA va chạm Goal/Net -> tiếp tục bay chờ va chạm thật...");
					yield return StartCoroutine(FlyIntoGoalUntilHit(target, start, spinSpeed));
					yield break;
				}
				hasResolved = true;
				isFlying = false;
				Debug.Log("<color=red>[BALL MISS]</color> Bóng bay ra ngoài sân! Tiếp tục bay 3s...");
				yield return StartCoroutine(FlyOutOfBounds(target, start, spinSpeed));
				Debug.Log("<color=red>[BALL MISS]</color> Hết 3s -> Tính MISS và chuyển hiệp!");
				this.OnBlocked?.Invoke();
			}
		}

		private IEnumerator FlyIntoGoalUntilHit(Vector3 target, Vector3 start, float spinSpeed)
		{
			Vector3 flyDir = (target - start).normalized;
			float speed = Vector3.Distance(start, target) / Mathf.Max(flightTime, 0.01f);
			float elapsed = 0f;
			float maxWaitTime = 1.5f;
			while (elapsed < maxWaitTime && !hasResolved)
			{
				elapsed += Time.deltaTime;
				base.transform.position += flyDir * speed * Time.deltaTime;
				base.transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);
				yield return null;
			}
			if (!hasResolved)
			{
				hasResolved = true;
				isFlying = false;
				Debug.LogWarning($"<color=red>[BALL] KHÔNG tìm thấy va chạm với collider Goal/Net sau {maxWaitTime:F1}s chờ thêm!</color> Kiểm tra lại Collider lưới/khung thành có che đúng vùng chữ V không. Tạm tính MISS để không bịa goal giả.");
				this.OnBlocked?.Invoke();
			}
		}

		private IEnumerator FlyOutOfBounds(Vector3 target, Vector3 start, float spinSpeed)
		{
			Vector3 flyDir = (target - start).normalized;
			float speed = Vector3.Distance(start, target) / flightTime;
			float elapsed = 0f;
			float continueTime = 3f;
			while (elapsed < continueTime)
			{
				elapsed += Time.deltaTime;
				base.transform.position += flyDir * speed * Time.deltaTime;
				base.transform.Rotate(Vector3.right, spinSpeed * Time.deltaTime, Space.World);
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
			string objName = hitObj.name.ToLower();
			if (objName.Contains("ronaldo") || objName.Contains("player") || objName.Contains("crosshair") || objName.Contains("marker") || objName.Contains("sân") || objName.Contains("pitch") || objName.Contains("grass"))
			{
				return;
			}
			Debug.Log($"<color=orange>[BALL COLLISION - {collisionType}]</color> Chạm vào: <b>{hitObj.name}</b> (Tag: {hitObj.tag}) tại Pos={hitObj.transform.position} | Ball Pos={base.transform.position}");
			if (isGoalScored)
			{
				Debug.Log("<color=grey>[BALL IGNORE]</color> Đã ghi bàn rồi, bỏ qua va chạm với " + hitObj.name);
			}
			else
			{
				if (!isFlying || hasResolved)
				{
					return;
				}
				if (!objName.Contains("goalkeeper") && !hitObj.CompareTag("Goalkeeper") && (hitObj.CompareTag(goalTag) || objName.Contains("goal") || objName.Contains("net")))
				{
					Vector3 beforeNetSnap = base.transform.position;
					Debug.Log($"<color=green>[BALL GOAL]</color> Chạm vào {hitObj.name} -> GOAL! (currentIsInsideGoal={currentIsInsideGoal})");
					isGoalScored = true;
					hasResolved = true;
					isFlying = false;
					StopAllCoroutines();
					if (currentIsInsideGoal)
					{
						base.transform.position = currentShotTarget;
					}
					Debug.Log($"<color=cyan>[BALL DEBUG][SNAP-NetHit]</color> BeforeSnap={beforeNetSnap} -> AfterSnap={base.transform.position} (currentShotTarget={currentShotTarget})");
					this.OnGoal?.Invoke();
					ApplyGoalPhysics();
				}
				else if (!currentIsInsideGoal)
				{
					Debug.Log("<color=grey>[BALL OUT OF BOUNDS]</color> Cú sút ra ngoài, bỏ qua va chạm với " + hitObj.name);
				}
				else
				{
					if (!hitObj.CompareTag("Goalkeeper") && !hitObj.CompareTag("Defender") && !(hitObj.GetComponentInParent<PenaltyGoalkeeperAI>() != null) && !(hitObj.GetComponentInParent<PenaltyDefenderAI>() != null) && !objName.Contains("goalkeeper") && !objName.Contains("defender") && !objName.Contains("gk"))
					{
						return;
					}
					if (base.transform.position.z >= goalZ - 0.4f)
					{
						Vector3 beforeSnap = base.transform.position;
						Debug.Log($"<color=green>[BALL GOAL]</color> Bóng đã qua vạch vôi (Z={base.transform.position.z:F2}) trước khi chạm Blocker {hitObj.name} -> GOAL!");
						isGoalScored = true;
						hasResolved = true;
						isFlying = false;
						StopAllCoroutines();
						base.transform.position = currentShotTarget;
						Debug.Log($"<color=cyan>[BALL DEBUG][SNAP-BlockerButGoal]</color> BeforeSnap={beforeSnap} -> AfterSnap={base.transform.position} (currentShotTarget={currentShotTarget}) | DeltaY={base.transform.position.y - beforeSnap.y:F4}");
						this.OnGoal?.Invoke();
						ApplyGoalPhysics();
						return;
					}
					Debug.Log("<color=red>[BALL BLOCKED]</color> Bị chặn bởi " + hitObj.name + "! Bắn Rigidbody nảy ngược lại!");
					hasResolved = true;
					isFlying = false;
					StopAllCoroutines();
					Vector3 reflectDir = (base.transform.position - hitObj.transform.position).normalized;
					reflectDir.y = blockBounceUpward;
					reflectDir.z = 0f - Mathf.Abs(reflectDir.z);
					reflectDir.Normalize();
					if (rb != null)
					{
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
					this.OnBlocked?.Invoke();
				}
			}
		}

		private IEnumerator LogVelocityFramesForDebug()
		{
			for (int i = 0; i < 10; i++)
			{
				yield return null;
				if (rb == null)
				{
					break;
				}
				Debug.Log($"<color=magenta>[BALL DEBUG][BOUNCE FRAME {i}]</color> velocity={rb.linearVelocity} | pos={base.transform.position} | isKinematic={rb.isKinematic}");
			}
		}

		private void ApplyGoalPhysics()
		{
			if (!(rb == null))
			{
				rb.linearVelocity = Vector3.zero;
				rb.angularVelocity = Vector3.zero;
				Vector3 dir = currentShotDirection;
				dir.y = goalFallDownward;
				dir.Normalize();
				rb.linearVelocity = dir * goalFallSpeed;
				rb.linearDamping = goalDropDamping;
				Debug.Log($"<color=cyan>[BALL DEBUG][GOAL PHYSICS]</color> direction={currentShotDirection} | velocity={rb.linearVelocity} | damping={rb.linearDamping}");
			}
		}

		private void OnDrawGizmosSelected()
		{
			Vector3 lPos = ((leftTop != null) ? leftTop.position : new Vector3(0f - halfWidth, leftTopY, goalZ));
			Vector3 cPos = ((bottomCenter != null) ? bottomCenter.position : new Vector3(0f, bottomCenterY, goalZ));
			Vector3 rPos = ((rightTop != null) ? rightTop.position : new Vector3(halfWidth, rightTopY, goalZ));
			Gizmos.color = new Color(0.2f, 0.95f, 0.35f, 0.95f);
			Gizmos.DrawLine(lPos, cPos);
			Gizmos.DrawLine(cPos, rPos);
			Gizmos.DrawWireSphere(lPos, 0.2f);
			Gizmos.DrawWireSphere(cPos, 0.2f);
			Gizmos.DrawWireSphere(rPos, 0.2f);
		}
	}
}
