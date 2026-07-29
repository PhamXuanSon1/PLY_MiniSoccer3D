using UnityEngine;

public class ChoiceBoardPlacer : MonoBehaviour
{
	[Header("Spawn References")]
	[Tooltip("Prefab ChoiceBoardHolder sẽ được khởi tạo")]
	[SerializeField]
	private ChoiceBoardHolder choiceBoardHolderprefab;

	[Tooltip("Transform vị trí bắt đầu (nếu để trống sẽ lấy vị trí transform này)")]
	[SerializeField]
	private Transform startPos;

	[Tooltip("Transform điểm đích để tự động tính khoảng cách")]
	[SerializeField]
	private Transform endPos;

	[Tooltip("ScriptableObject chứa dữ liệu các cặp lựa chọn")]
	[SerializeField]
	private ChoiceBoardPairData choiceBoardPairData;

	[Header("Spawn Settings")]
	[Tooltip("Số lượng hàng bảng lựa chọn cần sinh ra (N lượt chia đều từ Bắt đầu đến EndPos)")]
	[SerializeField]
	private int spawnCount = 5;

	[Tooltip("Nếu true: Sinh tự động theo số lượng spawnCount. Nếu false: Sinh theo dữ liệu trong ChoiceBoardPairData")]
	[SerializeField]
	private bool spawnGenericByNumber = true;

	[Header("Shuffle Settings")]
	[Tooltip("Tự động tráo đổi ngẫu nhiên thứ tự danh sách các cặp cổng")]
	[SerializeField]
	private bool shufflePairsOrder = false;

	[Tooltip("Tự động tráo đổi ngẫu nhiên vị trí Trái/Phải trong từng cặp cổng")]
	[SerializeField]
	private bool shuffleLeftRight = true;

	[Header("Auto Spawn")]
	[Tooltip("Tự động sinh các bảng lựa chọn khi Start()")]
	[SerializeField]
	private bool spawnOnStart = true;

	private void Start()
	{
		if (spawnOnStart)
		{
			Spawn();
		}
	}

	[ContextMenu("Clear Existing")]
	public void ClearExisting()
	{
		for (int i = base.transform.childCount - 1; i >= 0; i--)
		{
			Transform child = base.transform.GetChild(i);
			if (Application.isPlaying)
			{
				Object.Destroy(child.gameObject);
			}
			else
			{
				Object.DestroyImmediate(child.gameObject);
			}
		}
	}

	[ContextMenu("Spawn")]
	public void Spawn()
	{
		if (choiceBoardHolderprefab == null)
		{
			Debug.LogWarning("ChoiceBoardPlacer: No prefab assigned.", this);
			return;
		}
		ClearExisting();
		float startZ = ((startPos != null) ? startPos.position.z : base.transform.position.z);
		float endZ = ((endPos != null) ? endPos.position.z : (startZ + 100f));
		float totalDistance = endZ - startZ;
		ChoicePairData[] pairDataList = null;
		if (choiceBoardPairData != null && choiceBoardPairData.ChoicePairDatas != null && choiceBoardPairData.ChoicePairDatas.Length != 0)
		{
			pairDataList = (ChoicePairData[])choiceBoardPairData.ChoicePairDatas.Clone();
			if (shufflePairsOrder)
			{
				ShuffleArray(pairDataList);
			}
		}
		int count = (spawnGenericByNumber ? spawnCount : ((pairDataList != null) ? pairDataList.Length : spawnCount));
		if (count <= 0)
		{
			return;
		}
		float stepZ = totalDistance / (float)(count + 1);
		for (int i = 0; i < count; i++)
		{
			float targetZ = startZ + stepZ * (float)(i + 1);
			Vector3 currentPosition = new Vector3(base.transform.position.x, base.transform.position.y, targetZ);
			ChoiceBoardHolder choiceBoardHolder = Object.Instantiate(choiceBoardHolderprefab, currentPosition, base.transform.rotation, base.transform);
			if (choiceBoardHolder != null)
			{
				choiceBoardHolder.IsLastBoard = i == count - 1;
			}
			if (pairDataList != null && pairDataList.Length != 0)
			{
				int dataIndex = i % pairDataList.Length;
				ChoicePairData pair = pairDataList[dataIndex];
				if (!shuffleLeftRight || !(Random.value > 0.5f))
				{
					choiceBoardHolder.ApplyBoardData(0, pair.choiceData1);
					choiceBoardHolder.ApplyBoardData(1, pair.choiceData2);
				}
				else
				{
					choiceBoardHolder.ApplyBoardData(1, pair.choiceData1);
					choiceBoardHolder.ApplyBoardData(0, pair.choiceData2);
				}
			}
		}
	}

	private void ShuffleArray<T>(T[] array)
	{
		for (int i = array.Length - 1; i > 0; i--)
		{
			int randomIndex = Random.Range(0, i + 1);
			T temp = array[i];
			array[i] = array[randomIndex];
			array[randomIndex] = temp;
		}
	}
}
