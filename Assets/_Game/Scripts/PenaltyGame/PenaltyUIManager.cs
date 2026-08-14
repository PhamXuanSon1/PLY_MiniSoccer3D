using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace RonaldoPenalty
{
    public class PenaltyUIManager : MonoBehaviour
    {
        [Header("Score Indicators")]
        [SerializeField] private Image[] roundIndicators;
        [SerializeField] private Sprite iconEmpty;
        [SerializeField] private Sprite iconCheck;
        [SerializeField] private Sprite iconCross;

        [Header("Panels & Prompts")]
        [SerializeField] private GameObject losePanel;
        [SerializeField] private GameObject promptText;

        public void SetupReferences(Image[] indicators, GameObject lose, GameObject prompt)
        {
            roundIndicators = indicators;
            losePanel = lose;
            promptText = prompt;
        }

        public void ResetUI()
        {
            if (roundIndicators != null)
            {
                foreach (var img in roundIndicators)
                {
                    if (img != null)
                    {
                        if (iconEmpty != null)
                            img.sprite = iconEmpty;
                        img.color = Color.white;
                    }
                }
            }

            if (losePanel != null) losePanel.SetActive(false);
            SetPromptVisible(false);
        }

        public void SetPromptVisible(bool visible)
        {
            if (promptText != null) promptText.SetActive(visible);
        }

        public void UpdateRoundResult(int roundIndex, bool isGoal)
        {
            if (roundIndicators != null && roundIndex >= 0 && roundIndex < roundIndicators.Length)
            {
                var img = roundIndicators[roundIndex];
                if (img != null)
                {
                    if (isGoal)
                    {
                        if (iconCheck != null) img.sprite = iconCheck;
                        else img.color = new Color(0.2f, 0.9f, 0.2f); // Green fallback
                    }
                    else
                    {
                        if (iconCross != null) img.sprite = iconCross;
                        else img.color = new Color(0.9f, 0.2f, 0.2f); // Red fallback
                    }
                }
            }
        }

        public void ShowLoseScreen(float autoResetDelay, Action onComplete)
        {
            SetPromptVisible(false);
            if (losePanel != null) losePanel.SetActive(true);
            StartCoroutine(LoseRoutine(autoResetDelay, onComplete));
        }

        private IEnumerator LoseRoutine(float delay, Action onComplete)
        {
            yield return new WaitForSeconds(delay);
            if (losePanel != null) losePanel.SetActive(false);
            onComplete?.Invoke();
        }
    }
}
