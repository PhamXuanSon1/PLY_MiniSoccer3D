#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

public class MissingScriptCleaner : EditorWindow
{
    [MenuItem("GameObject/Remove Missing Scripts", false, 0)]
    public static void RemoveMissingScriptsFromContext()
    {
        if (Selection.activeGameObject == null)
        {
            Debug.LogWarning("[MissingScriptCleaner] Vui lòng chọn một GameObject cha trong Hierarchy!");
            return;
        }

        CleanGameObjectAndChildren(Selection.activeGameObject);
    }

    [MenuItem("Tools/Remove Missing Scripts In Selected")]
    public static void RemoveMissingScriptsFromSelected()
    {
        GameObject[] selectedObjects = Selection.gameObjects;
        if (selectedObjects == null || selectedObjects.Length == 0)
        {
            Debug.LogWarning("[MissingScriptCleaner] Vui lòng chọn ít nhất một GameObject trong Hierarchy!");
            return;
        }

        int totalRemoved = 0;
        foreach (GameObject go in selectedObjects)
        {
            totalRemoved += CleanGameObjectAndChildren(go);
        }

        Debug.Log($"<color=green>[MissingScriptCleaner]</color> Đã hoàn tất! Tổng cộng đã xóa <b>{totalRemoved}</b> script bị mất (Missing Script).");
    }

    [MenuItem("Tools/Missing Script Cleaner Window")]
    public static void ShowWindow()
    {
        GetWindow<MissingScriptCleaner>("Missing Script Cleaner");
    }

    private GameObject targetObject;

    private void OnGUI()
    {
        GUILayout.Label("Công cụ xóa Missing Script trong Unity Editor", EditorStyles.boldLabel);
        EditorGUILayout.Space();

        targetObject = (GameObject)EditorGUILayout.ObjectField("GameObject Cha:", targetObject != null ? targetObject : Selection.activeGameObject, typeof(GameObject), true);

        EditorGUILayout.Space();

        if (GUILayout.Button("Xóa Missing Script trong GameObject đã chọn & con", GUILayout.Height(35)))
        {
            if (targetObject != null)
            {
                CleanGameObjectAndChildren(targetObject);
            }
            else
            {
                EditorUtility.DisplayDialog("Thông báo", "Vui lòng chọn hoặc kéo một GameObject vào ô trên!", "OK");
            }
        }

        EditorGUILayout.Space();

        if (GUILayout.Button("Xóa Missing Script toàn bộ Scene hiện tại", GUILayout.Height(30)))
        {
            if (EditorUtility.DisplayDialog("Xác nhận", "Bạn có chắc chắn muốn quét và xóa toàn bộ Missing Script trong Scene hiện tại không?", "Có", "Hủy"))
            {
                CleanEntireScene();
            }
        }
    }

    public static int CleanGameObjectAndChildren(GameObject rootGo)
    {
        if (rootGo == null) return 0;

        Undo.RegisterFullObjectHierarchyUndo(rootGo, "Remove Missing Scripts");

        Transform[] allTransforms = rootGo.GetComponentsInChildren<Transform>(true);
        int totalRemoved = 0;

        foreach (Transform t in allTransforms)
        {
            int count = GameObjectUtility.RemoveMonoBehavioursWithMissingScript(t.gameObject);
            if (count > 0)
            {
                totalRemoved += count;
                Debug.Log($"<color=yellow>[MissingScriptCleaner]</color> Đã xóa {count} missing script tại GameObject: <b>{t.name}</b>", t.gameObject);
            }
        }

        if (totalRemoved > 0)
        {
            EditorSceneManager.MarkSceneDirty(rootGo.scene);
            EditorUtility.SetDirty(rootGo);
            Debug.Log($"<color=green>[MissingScriptCleaner]</color> Đã xóa tổng cộng <b>{totalRemoved}</b> missing script từ <b>{rootGo.name}</b> và các đối tượng con.", rootGo);
        }
        else
        {
            Debug.Log($"<color=cyan>[MissingScriptCleaner]</color> Không tìm thấy missing script nào trong <b>{rootGo.name}</b> và các đối tượng con.", rootGo);
        }

        return totalRemoved;
    }

    public static void CleanEntireScene()
    {
        GameObject[] rootObjects = UnityEngine.SceneManagement.SceneManager.GetActiveScene().GetRootGameObjects();
        int totalRemoved = 0;

        foreach (GameObject root in rootObjects)
        {
            totalRemoved += CleanGameObjectAndChildren(root);
        }

        Debug.Log($"<color=green>[MissingScriptCleaner]</color> Đã hoàn tất quét toàn bộ Scene! Tổng cộng đã xóa <b>{totalRemoved}</b> missing script.");
    }
}
#endif
