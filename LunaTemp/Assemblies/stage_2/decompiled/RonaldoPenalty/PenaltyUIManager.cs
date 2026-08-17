using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace RonaldoPenalty
{
	public class PenaltyUIManager : MonoBehaviour
	{
		[Header("Score Indicators")]
		[SerializeField]
		private Image[] roundIndicators;

		[SerializeField]
		private Sprite iconEmpty;

		[SerializeField]
		private Sprite iconCheck;

		[SerializeField]
		private Sprite iconCross;

		[Header("Panels & Prompts")]
		[SerializeField]
		private GameObject winEndcardPanel;

		[SerializeField]
		private GameObject losePanel;

		[SerializeField]
		private GameObject promptText;

		[Header("Hide On Result")]
		[Tooltip("Danh sách các GameObject chỉ ẩn khi WIN (VD: ScorePanel, Gameplay UI...)")]
		[SerializeField]
		private GameObject[] objectsToHideOnWin;

		[Tooltip("Danh sách các GameObject chỉ ẩn khi LOSE (VD: ScorePanel, Target...)")]
		[SerializeField]
		private GameObject[] objectsToHideOnLose;

		[Tooltip("Danh sách các GameObject cần ẩn cho CẢ HAI (Win & Lose) - Hoặc để trống nếu đã chia riêng ở trên")]
		[SerializeField]
		private GameObject[] extraObjectsToHide;

		private Action onEndcardClick;

		private Color[] initialIndicatorColors;

		private bool isWinEndcardActive = false;

		public static PenaltyUIManager Instance { get; private set; }

		public Sprite IconEmpty => iconEmpty;

		public Sprite IconCheck => iconCheck;

		public Sprite IconCross => iconCross;

		public bool HasValidSprites => iconCheck != null && iconCross != null;

		private void Awake()
		{
			if (Instance == null || HasValidSprites)
			{
				Instance = this;
			}
			AutoFindReferences();
		}

		private void Start()
		{
			AutoFindReferences();
			ResetUI();
		}

		public void AutoFindReferences()
		{
			PenaltyUIManager[] allUIMgrs = UnityEngine.Object.FindObjectsOfType<PenaltyUIManager>();
			PenaltyUIManager[] array = allUIMgrs;
			foreach (PenaltyUIManager mgr in array)
			{
				if (mgr != null && mgr != this)
				{
					if (iconEmpty == null && mgr.iconEmpty != null)
					{
						iconEmpty = mgr.iconEmpty;
					}
					if (iconCheck == null && mgr.iconCheck != null)
					{
						iconCheck = mgr.iconCheck;
					}
					if (iconCross == null && mgr.iconCross != null)
					{
						iconCross = mgr.iconCross;
					}
					if (winEndcardPanel == null && mgr.winEndcardPanel != null)
					{
						winEndcardPanel = mgr.winEndcardPanel;
					}
					if (losePanel == null && mgr.losePanel != null)
					{
						losePanel = mgr.losePanel;
					}
					if (promptText == null && mgr.promptText != null)
					{
						promptText = mgr.promptText;
					}
					if ((objectsToHideOnWin == null || objectsToHideOnWin.Length == 0) && mgr.objectsToHideOnWin != null && mgr.objectsToHideOnWin.Length != 0)
					{
						objectsToHideOnWin = mgr.objectsToHideOnWin;
					}
					if ((objectsToHideOnLose == null || objectsToHideOnLose.Length == 0) && mgr.objectsToHideOnLose != null && mgr.objectsToHideOnLose.Length != 0)
					{
						objectsToHideOnLose = mgr.objectsToHideOnLose;
					}
					if ((extraObjectsToHide == null || extraObjectsToHide.Length == 0) && mgr.extraObjectsToHide != null && mgr.extraObjectsToHide.Length != 0)
					{
						extraObjectsToHide = mgr.extraObjectsToHide;
					}
					if ((roundIndicators == null || roundIndicators.Length == 0) && mgr.roundIndicators != null && mgr.roundIndicators.Length != 0)
					{
						roundIndicators = mgr.roundIndicators;
					}
				}
			}
			if (iconCheck == null || iconCross == null || iconEmpty == null)
			{
				Sprite[] allSprites = Resources.FindObjectsOfTypeAll<Sprite>();
				Sprite[] array2 = allSprites;
				foreach (Sprite s in array2)
				{
					if (!(s == null))
					{
						if (iconCheck == null && (s.name == "Win" || s.name == "True-false_0" || s.name == "icon_check" || s.name == "BoxTick"))
						{
							iconCheck = s;
						}
						if (iconCross == null && (s.name == "Loss" || s.name == "lose" || s.name == "True-false_1" || s.name == "icon_cross" || s.name == "YOU LOSE"))
						{
							iconCross = s;
						}
						if (iconEmpty == null && (s.name == "WhiteBorder" || s.name == "icon_empty" || s.name == "red_border"))
						{
							iconEmpty = s;
						}
					}
				}
			}
			if (roundIndicators == null || roundIndicators.Length == 0 || roundIndicators[0] == null)
			{
				List<Image> found = new List<Image>();
				for (int i = 1; i <= 3; i++)
				{
					GameObject obj = GameObject.Find($"Round_{i}_Indicator");
					if (obj != null)
					{
						Image img = obj.GetComponent<Image>();
						if (img != null)
						{
							found.Add(img);
						}
					}
				}
				if (found.Count > 0)
				{
					roundIndicators = found.ToArray();
				}
			}
			if (promptText == null)
			{
				promptText = GameObject.Find("Tap to play") ?? GameObject.Find("Tap TO play") ?? GameObject.Find("Tap To play") ?? GameObject.Find("Tap To Play") ?? GameObject.Find("PromptText");
			}
			if (losePanel == null)
			{
				losePanel = GameObject.Find("LosePanel");
			}
			if (winEndcardPanel == null)
			{
				winEndcardPanel = GameObject.Find("WinEndcardPanel") ?? GameObject.Find("Endcard");
			}
		}

		private void CacheInitialColors()
		{
			if (roundIndicators == null || (initialIndicatorColors != null && initialIndicatorColors.Length == roundIndicators.Length))
			{
				return;
			}
			initialIndicatorColors = new Color[roundIndicators.Length];
			for (int i = 0; i < roundIndicators.Length; i++)
			{
				if (roundIndicators[i] != null)
				{
					initialIndicatorColors[i] = roundIndicators[i].color;
				}
			}
		}

		public void SetupReferences(Image[] indicators, GameObject lose, GameObject prompt, GameObject winEndcard = null, Sprite empty = null, Sprite check = null, Sprite cross = null)
		{
			roundIndicators = indicators;
			losePanel = lose;
			promptText = prompt;
			winEndcardPanel = winEndcard;
			if (empty != null)
			{
				iconEmpty = empty;
			}
			if (check != null)
			{
				iconCheck = check;
			}
			if (cross != null)
			{
				iconCross = cross;
			}
			CacheInitialColors();
		}

		public void ResetUI()
		{
			isWinEndcardActive = false;
			AutoFindReferences();
			CacheInitialColors();
			SetObjectsActive(objectsToHideOnWin, true);
			SetObjectsActive(objectsToHideOnLose, true);
			SetObjectsActive(extraObjectsToHide, true);
			if (roundIndicators != null)
			{
				for (int i = 0; i < roundIndicators.Length; i++)
				{
					Image img = roundIndicators[i];
					if (img != null)
					{
						if (iconEmpty != null)
						{
							img.sprite = iconEmpty;
						}
						if (initialIndicatorColors != null && i < initialIndicatorColors.Length)
						{
							img.color = initialIndicatorColors[i];
						}
					}
				}
			}
			if (losePanel != null)
			{
				losePanel.SetActive(false);
			}
			if (winEndcardPanel != null)
			{
				winEndcardPanel.SetActive(false);
			}
			SetPromptVisible(true);
		}

		public void SetPromptVisible(bool visible)
		{
			if (promptText != null)
			{
				promptText.SetActive(visible);
			}
		}

		public void UpdateRoundResult(int roundIndex, bool isGoal)
		{
			AutoFindReferences();
			CacheInitialColors();
			if (roundIndicators == null || roundIndex < 0 || roundIndex >= roundIndicators.Length)
			{
				return;
			}
			Image img = roundIndicators[roundIndex];
			if (img != null)
			{
				Sprite targetSprite = (isGoal ? iconCheck : iconCross);
				if (targetSprite != null)
				{
					img.sprite = targetSprite;
					img.color = Color.white;
					Debug.Log(string.Format("<color=green>[UI SUCCESS]</color> Round {0} ({1}) -> {2} Sprite='{3}'", roundIndex + 1, img.gameObject.name, isGoal ? "CHECK (WIN)" : "CROSS (LOSS)", targetSprite.name));
				}
				else
				{
					Debug.LogWarning("<color=red>[UI ERROR]</color> Sprite " + (isGoal ? "iconCheck" : "iconCross") + " is null! Vui lòng gán Sprite Win/Loss vào PenaltyUIManager.");
				}
			}
		}

		public void ShowWinEndcard(Action onClickStore)
		{
			SetPromptVisible(false);
			if (losePanel != null)
			{
				losePanel.SetActive(false);
			}
			SetObjectsActive(objectsToHideOnWin, false);
			SetObjectsActive(extraObjectsToHide, false);
			onEndcardClick = onClickStore ?? new Action(GameManager.GotoStore);
			isWinEndcardActive = true;
			if (winEndcardPanel != null)
			{
				winEndcardPanel.SetActive(true);
			}
			Ply_SoundManager.Instance?.PlayFx(FxType.PlayerWin);
		}

		public void ShowLoseScreen(float autoResetDelay, Action onComplete)
		{
			isWinEndcardActive = false;
			SetPromptVisible(false);
			if (winEndcardPanel != null)
			{
				winEndcardPanel.SetActive(false);
			}
			SetObjectsActive(objectsToHideOnLose, false);
			SetObjectsActive(extraObjectsToHide, false);
			if (losePanel != null)
			{
				losePanel.SetActive(true);
			}
			Ply_SoundManager.Instance?.PlayFx(FxType.PlayerLoose);
			StartCoroutine(LoseRoutine(autoResetDelay, onComplete));
		}

		private void SetObjectsActive(GameObject[] list, bool active)
		{
			if (list == null)
			{
				return;
			}
			for (int i = 0; i < list.Length; i++)
			{
				if (list[i] != null)
				{
					list[i].SetActive(active);
				}
			}
		}

		private IEnumerator LoseRoutine(float delay, Action onComplete)
		{
			yield return new WaitForSeconds(delay);
			if (losePanel != null)
			{
				losePanel.SetActive(false);
			}
			onComplete?.Invoke();
		}

		public void GotoStore()
		{
			GameManager.GotoStore();
		}

		public void GoToStore()
		{
			GameManager.GotoStore();
		}

		public void OnClick_GotoStore()
		{
			GameManager.GotoStore();
		}
	}
}
