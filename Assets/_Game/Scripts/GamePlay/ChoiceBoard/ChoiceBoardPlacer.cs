using UnityEngine;

public class ChoiceBoardPlacer : MonoBehaviour
{
    [Header("Spawn References")]
    [Tooltip("Prefab ChoiceBoardHolder sẽ được khởi tạo")]
    [SerializeField] private ChoiceBoardHolder choiceBoardHolderprefab;

    [Tooltip("ScriptableObject chứa dữ liệu các cặp lựa chọn")]
    [SerializeField] private ChoiceBoardPairData choiceBoardPairData;

    [Header("Spawn Settings")]
    [Tooltip("Số lượng hàng bảng lựa chọn cần sinh ra khi dùng chế độ Generic")]
    [SerializeField] private int spawnCount = 5;

    [Tooltip("Nếu true: Sinh tự động theo số lượng spawnCount. Nếu false: Sinh theo dữ liệu trong ChoiceBoardPairData")]
    [SerializeField] private bool spawnGenericByNumber = true;

    [Tooltip("Khoảng cách vị trí giữa các hàng bảng lựa chọn")]
    [SerializeField] private Vector3 offset = new Vector3(0f, 0f, 10f);

    [Header("Auto Spawn")]
    [Tooltip("Tự động sinh các bảng lựa chọn khi Start()")]
    [SerializeField] private bool spawnOnStart = true;

    private void Start()
    {
        if (spawnOnStart)
        {
            Spawn();
        }
    }

    [ContextMenu("Spawn")]
    public void Spawn()
    {
        if (choiceBoardHolderprefab == null)
        {
            Debug.LogWarning($"{nameof(ChoiceBoardPlacer)}: No prefab assigned.", this);
            return;
        }

        Vector3 currentPosition = transform.position;

        if (spawnGenericByNumber)
        {
            for (int i = 0; i < spawnCount; i++)
            {
                Instantiate(choiceBoardHolderprefab, currentPosition, transform.rotation, transform);
                currentPosition += offset;
            }
        }
        else if (choiceBoardPairData != null && choiceBoardPairData.ChoicePairDatas != null)
        {
            spawnCount = choiceBoardPairData.ChoicePairDatas.Length;
            for (int i = 0; i < spawnCount; i++)
            {
                ChoiceBoardHolder choiceBoardHolder = Instantiate(choiceBoardHolderprefab, currentPosition, transform.rotation, transform);

                if (Random.value > 0.5f)
                {
                    choiceBoardHolder.ApplyBoardData(0, choiceBoardPairData.ChoicePairDatas[i].choiceData1);
                    choiceBoardHolder.ApplyBoardData(1, choiceBoardPairData.ChoicePairDatas[i].choiceData2);
                }
                else
                {
                    choiceBoardHolder.ApplyBoardData(1, choiceBoardPairData.ChoicePairDatas[i].choiceData1);
                    choiceBoardHolder.ApplyBoardData(0, choiceBoardPairData.ChoicePairDatas[i].choiceData2);
                }

                currentPosition += offset;
            }
        }
    }
}
