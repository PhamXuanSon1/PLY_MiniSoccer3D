using UnityEngine;

public class PlayerVisual : MonoBehaviour
{
    [Header("Renderers")]
    [Tooltip("SpriteRenderer chính hiển thị hình ảnh cầu thủ")]
    [SerializeField] private SpriteRenderer playerSpriteRenderer;

    [Tooltip("SpriteRenderer hiển thị bóng giả dưới chân cầu thủ")]
    [SerializeField] private SpriteRenderer fakeShadowRenderer;

    [Header("Level Visual Data")]
    [Tooltip("Mảng chứa hình ảnh cầu thủ tương ứng từng cấp độ (Level 1, 2, 3...)")]
    [SerializeField] private Sprite[] levelSprite;

    [Header("Effects")]
    [Tooltip("Particle System phát hiệu ứng khi nhân vật đạt sức mạnh tối đa")]
    [SerializeField] private ParticleSystem maxPowerPar;

    private void Start()
    {
        if (maxPowerPar != null)
        {
            maxPowerPar.gameObject.SetActive(false);
        }

        if (levelSprite == null || levelSprite.Length <= 0)
        {
            Debug.LogWarning("Sprites for player level are empty");
        }
    }

    public void AssingPlayerVisual(Sprite newVisual)
    {
        if (playerSpriteRenderer != null)
        {
            playerSpriteRenderer.sprite = newVisual;
        }
    }

    public void UpdateVisualBylevel(int currentLevel)
    {
        if (levelSprite == null || levelSprite.Length == 0) return;

        int level = Mathf.Clamp(currentLevel - 1, 0, levelSprite.Length - 1);
        AssingPlayerVisual(levelSprite[level]);

        if (maxPowerPar != null)
        {
            maxPowerPar.gameObject.SetActive(level == 3 || level == levelSprite.Length - 1);
        }
    }

    public void ClearPlayerVisual()
    {
        AssingPlayerVisual(null);
    }

    public void SetVisualEnable(bool enableState)
    {
        if (playerSpriteRenderer != null) playerSpriteRenderer.enabled = enableState;
        if (fakeShadowRenderer != null) fakeShadowRenderer.enabled = enableState;
        if (maxPowerPar != null) maxPowerPar.gameObject.SetActive(enableState);
    }
}
