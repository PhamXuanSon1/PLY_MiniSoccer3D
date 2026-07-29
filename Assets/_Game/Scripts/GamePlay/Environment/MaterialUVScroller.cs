using UnityEngine;

public class MaterialUVScroller : MonoBehaviour
{
    [SerializeField] private Material targetMaterial;
    [SerializeField] private Vector2 scrollSpeed = new Vector2(0.01f, 0.01f);

    private Vector2 offset;

    private void Awake()
    {
        if (targetMaterial == null)
        {
            Renderer renderer = GetComponent<Renderer>();
            if (renderer != null)
            {
                targetMaterial = renderer.material;
            }
        }
    }

    private void Update()
    {
        if (targetMaterial != null)
        {
            offset += scrollSpeed * Time.deltaTime;
            targetMaterial.mainTextureOffset = offset;
        }
    }
}
