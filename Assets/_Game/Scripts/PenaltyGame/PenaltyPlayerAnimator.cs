using System.Collections;
using UnityEngine;

namespace RonaldoPenalty
{
    public class PenaltyPlayerAnimator : MonoBehaviour
    {
        [Header("Animator Reference")]
        [SerializeField] private Animator animator;

        [Header("Kick Settings")]
        [Tooltip("Thời gian animation sút bóng (sẽ tự động phát hiện nếu để <= 0)")]
        [SerializeField] private float kickDuration = 1.0f;

        private readonly int hashIdle = Animator.StringToHash("Idle");
        private readonly int hashKick = Animator.StringToHash("Kick");
        private readonly int hashCelebrate = Animator.StringToHash("Celebrate");
        private readonly int hashDisappointed = Animator.StringToHash("Disappointed");

        private Coroutine returnToIdleCoroutine;

        private void Awake()
        {
            if (animator == null) animator = GetComponentInChildren<Animator>();
        }

        private void Start()
        {
            // Bắt đầu game: Ronaldo ở trạng thái Offensive Idle loop
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

                // Sau khi Kick xong -> Tự động SetTrigger về lại Idle
                returnToIdleCoroutine = StartCoroutine(ReturnToIdleRoutine());
            }
        }

        private IEnumerator ReturnToIdleRoutine()
        {
            // Đợi 1 frame để Animator chuyển sang State Kick
            yield return null;

            float waitTime = kickDuration;

            // Tự động lấy độ dài thực tế của clip sút bóng từ Animator
            if (animator != null)
            {
                var stateInfo = animator.GetCurrentAnimatorStateInfo(0);
                if (stateInfo.length > 0.2f)
                {
                    waitTime = stateInfo.length;
                }
            }

            yield return new WaitForSeconds(waitTime);

            // SetTrigger về lại Offensive Idle
            PlayIdle();
            returnToIdleCoroutine = null;
        }

        public void PlayCelebrate()
        {
            if (animator != null && animator.runtimeAnimatorController != null)
            {
                // Nếu Animator có trigger Celebrate thì kích hoạt, nếu không giữ ở Idle
                animator.SetTrigger(hashCelebrate);
            }
        }

        public void PlayDisappointed()
        {
            if (animator != null && animator.runtimeAnimatorController != null)
            {
                // Nếu Animator có trigger Disappointed thì kích hoạt, nếu không giữ ở Idle
                animator.SetTrigger(hashDisappointed);
            }
        }
    }
}
