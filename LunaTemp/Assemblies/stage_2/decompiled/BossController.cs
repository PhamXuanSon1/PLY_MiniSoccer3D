using System;
using DG.Tweening;
using UnityEngine;

public class BossController : MonoBehaviour
{
	[Header("Visual References")]
	[Tooltip("SpriteRenderer hiển thị hình ảnh của Boss")]
	[SerializeField]
	private SpriteRenderer bossSpriteRenderer;

	[Tooltip("GameObject hiển thị hình ảnh của Cầu thủ (Character Visual)")]
	[SerializeField]
	private GameObject characterVisual;

	[Header("Fight Effect")]
	[Tooltip("GameObject / ParticleSystem hiệu ứng mây đối kháng (FightingCloud)")]
	[SerializeField]
	private GameObject fightingCloud;

	[Header("Result Showcase")]
	[Tooltip("GameObject hiển thị kết quả sau khi đấu với Boss")]
	[SerializeField]
	private GameObject resultObject;

	[Tooltip("SpriteRenderer trên Result Object dùng để gán Sprite kết quả")]
	[SerializeField]
	private SpriteRenderer resultSpriteRenderer;

	[Tooltip("Sprite hiển thị khi Cầu thủ Chiến thắng Boss")]
	[SerializeField]
	private Sprite winSprite;

	[Tooltip("Sprite hiển thị khi Cầu thủ Thất bại trước Boss")]
	[SerializeField]
	private Sprite lossSprite;

	[Tooltip("GameObject phụ hiện lên cùng lúc với Win Sprite (Chỉ bật khi Thắng)")]
	[SerializeField]
	private GameObject extraWinObject;

	[Header("UI Result Panels")]
	[Tooltip("UI Panel hiển thị màn hình Chiến Thắng (Win Panel)")]
	[SerializeField]
	private GameObject winPanel;

	[Tooltip("UI Panel hiển thị màn hình Thất Bại (Lose Panel)")]
	[SerializeField]
	private GameObject losePanel;

	[Tooltip("Danh sách các GameObject phụ cần tự động tắt khi UI Result xuất hiện (ví dụ resultObject, extraWinObject...)")]
	[SerializeField]
	private GameObject[] extraObjectsToHide;

	[Header("Audio Settings (Ply_SoundManager)")]
	[Tooltip("Loại âm thanh phát khi hiệu ứng FightingCloud xuất hiện")]
	[SerializeField]
	private FxType fightingCloudFx = FxType.FightingCloud;

	[Tooltip("Loại âm thanh phát khi màn hình Win Panel xuất hiện")]
	[SerializeField]
	private FxType winPanelFx = FxType.PlayerWin;

	[Tooltip("Loại âm thanh phát khi màn hình Lose Panel xuất hiện")]
	[SerializeField]
	private FxType losePanelFx = FxType.PlayerLoose;

	[Header("Timing Settings")]
	[Tooltip("Thời gian chờ (giây) sau khi đi qua cổng cuối trước khi kích hoạt đấu Boss (Điền >= 0 để đếm ngược sau cổng cuối, điền -1 để nhân vật đi tới End mới kích hoạt)")]
	[SerializeField]
	private float delayAfterLastBoard = 1.5f;

	[Tooltip("Thời gian (giây) hiển thị hiệu ứng mây đối kháng FightingCloud")]
	[SerializeField]
	private float fightDuration = 3f;

	[Tooltip("Thời gian (giây) hiển thị Result Object trước khi bật màn hình Win/Loss UI")]
	[SerializeField]
	private float showResultDuration = 2f;

	[Header("Player Reference")]
	[Tooltip("Tham chiếu tới PlayerController trong Scene")]
	[SerializeField]
	private PlayerController currentPlayer;

	[Header("Runtime Status")]
	[Tooltip("Cấp độ hiện tại của Cầu thủ (Tự động cập nhật để tiện theo dõi)")]
	[SerializeField]
	private int currentPlayerLevel = 1;

	private Sequence bossSeq;

	private bool isSequenceStarted;

	private bool canClickToStore;

	private void Start()
	{
		canClickToStore = false;
		if (fightingCloud != null)
		{
			fightingCloud.SetActive(false);
		}
		if (resultObject != null)
		{
			resultObject.SetActive(false);
		}
		if (extraWinObject != null)
		{
			extraWinObject.SetActive(false);
		}
		if (winPanel != null)
		{
			winPanel.SetActive(false);
		}
		if (losePanel != null)
		{
			losePanel.SetActive(false);
		}
		ChoiceBoardHolder.OnLastBoardPassed = (Action<PlayerController>)Delegate.Combine(ChoiceBoardHolder.OnLastBoardPassed, new Action<PlayerController>(OnLastBoardPassed));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Combine(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
	}

	private void Update()
	{
		if (currentPlayer != null)
		{
			currentPlayerLevel = currentPlayer.CurrentLevel;
		}
		if (canClickToStore && (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)))
		{
			canClickToStore = false;
			GameManager.GotoStore();
		}
	}

	private void OnDestroy()
	{
		ChoiceBoardHolder.OnLastBoardPassed = (Action<PlayerController>)Delegate.Remove(ChoiceBoardHolder.OnLastBoardPassed, new Action<PlayerController>(OnLastBoardPassed));
		GameManager.OnGameEnded = (Action<bool>)Delegate.Remove(GameManager.OnGameEnded, new Action<bool>(OnGameEnded));
		bossSeq?.Kill();
	}

	private void OnLastBoardPassed(PlayerController player)
	{
		if (!isSequenceStarted && !(delayAfterLastBoard < 0f))
		{
			if (player != null)
			{
				currentPlayer = player;
			}
			bool isWin = GameManager.CheckWinCondition((!(currentPlayer != null)) ? 1 : currentPlayer.CurrentLevel);
			StartBossSequence(isWin);
		}
	}

	private void OnGameEnded(bool isWin)
	{
		if (!isSequenceStarted)
		{
			StartBossSequence(isWin);
		}
	}

	public void StartBossSequence(bool isWin)
	{
		if (isSequenceStarted)
		{
			return;
		}
		isSequenceStarted = true;
		bossSeq?.Kill();
		bossSeq = DOTween.Sequence();
		bossSeq.SetUpdate(true);
		if (delayAfterLastBoard > 0f)
		{
			bossSeq.AppendInterval(delayAfterLastBoard);
		}
		bossSeq.AppendCallback(delegate
		{
			if (currentPlayer != null)
			{
				currentPlayer.StopMoving();
			}
			if (bossSpriteRenderer != null)
			{
				bossSpriteRenderer.gameObject.SetActive(false);
			}
			if (characterVisual != null)
			{
				characterVisual.SetActive(false);
			}
			if (fightingCloud != null)
			{
				fightingCloud.SetActive(true);
				ParticleSystem component = fightingCloud.GetComponent<ParticleSystem>();
				if (component != null)
				{
					component.Play();
				}
			}
			Ply_SoundManager.Instance?.PlayFx(fightingCloudFx);
		});
		bossSeq.AppendInterval(fightDuration);
		bossSeq.AppendCallback(delegate
		{
			if (fightingCloud != null)
			{
				fightingCloud.SetActive(false);
			}
			if (resultObject != null)
			{
				resultObject.SetActive(true);
			}
			if (resultSpriteRenderer != null)
			{
				resultSpriteRenderer.sprite = (isWin ? winSprite : lossSprite);
			}
			if (isWin && extraWinObject != null)
			{
				extraWinObject.SetActive(true);
			}
			Ply_SoundManager.Instance?.PlayFx(isWin ? winPanelFx : losePanelFx);
		});
		bossSeq.AppendInterval(showResultDuration);
		bossSeq.AppendCallback(delegate
		{
			Ply_SoundManager.Instance?.StopBGM();
			if (extraObjectsToHide != null)
			{
				GameObject[] array = extraObjectsToHide;
				foreach (GameObject gameObject in array)
				{
					if (gameObject != null)
					{
						gameObject.SetActive(false);
					}
				}
			}
			if (isWin)
			{
				if (winPanel != null)
				{
					winPanel.SetActive(true);
				}
			}
			else if (losePanel != null)
			{
				losePanel.SetActive(true);
			}
			DOVirtual.DelayedCall(0.2f, delegate
			{
				canClickToStore = true;
			});
		});
	}
}
