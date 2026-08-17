using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
	public class PenaltyPlayerAnimator : MonoBehaviour
	{
		[Header("Animator Reference")]
		[SerializeField]
		private Animator animator;

		[Header("Kick Settings")]
		[Tooltip("Thời gian animation sút bóng (sẽ tự động phát hiện nếu để <= 0)")]
		[SerializeField]
		private float kickDuration = 1f;

		private readonly int hashIdle = Animator.StringToHash("Idle");

		private readonly int hashKick = Animator.StringToHash("Kick");

		private readonly int hashCelebrate = Animator.StringToHash("Celebrate");

		private readonly int hashDisappointed = Animator.StringToHash("Disappointed");

		private Coroutine returnToIdleCoroutine;

		private void Awake()
		{
			if (animator == null)
			{
				animator = GetComponent<Animator>();
			}
		}

		private void Start()
		{
			PlayIdle();
		}

		public void PlayIdle()
		{
			if (returnToIdleCoroutine != null)
			{
				StopCoroutine(returnToIdleCoroutine);
				returnToIdleCoroutine = null;
			}
			if (animator != null && animator.runtimeAnimatorController != null)
			{
				animator.ResetTrigger(hashKick);
				animator.SetTrigger(hashIdle);
			}
		}

		public void PlayKick()
		{
			if (returnToIdleCoroutine != null)
			{
				StopCoroutine(returnToIdleCoroutine);
			}
			if (animator != null && animator.runtimeAnimatorController != null)
			{
				animator.ResetTrigger(hashIdle);
				animator.SetTrigger(hashKick);
				returnToIdleCoroutine = StartCoroutine(ReturnToIdleRoutine());
			}
		}

		private IEnumerator ReturnToIdleRoutine()
		{
			yield return null;
			float waitTime = kickDuration;
			if (animator != null)
			{
				AnimatorStateInfo stateInfo = animator.GetCurrentAnimatorStateInfo(0);
				if (stateInfo.length > 0.2f)
				{
					waitTime = stateInfo.length;
				}
			}
			yield return new WaitForSeconds(waitTime);
			PlayIdle();
			returnToIdleCoroutine = null;
		}

		public void PlayCelebrate()
		{
			if (animator != null && animator.runtimeAnimatorController != null)
			{
				animator.SetTrigger(hashCelebrate);
			}
		}

		public void PlayDisappointed()
		{
			if (animator != null && animator.runtimeAnimatorController != null)
			{
				animator.SetTrigger(hashDisappointed);
			}
		}
	}
}
