#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;
using RonaldoPenalty;

public class PenaltyHierarchyGenerator : EditorWindow
{
    [Header("3D Assets (Optional - Leave blank for placeholders)")]
    public GameObject ronaldoPrefab;
    public GameObject ballPrefab;
    public GameObject goalkeeperPrefab;
    [Header("Defenders Theo Từng Lượt Sút (Lần 1 Không Có)")]
    public GameObject defenderRound2Prefab;
    public GameObject defenderRound3Prefab;
    public GameObject goalPrefab;

    [Header("UI Sprites & Crosshair (Optional)")]
    public Sprite crosshairSprite;
    public Sprite iconEmpty;
    public Sprite iconCheck;
    public Sprite iconCross;

    private Vector2 scrollPos;

    [MenuItem("Tools/⚽ Ronaldo Penalty/Scene Setup Window", false, 10)]
    public static void ShowWindow()
    {
        var window = GetWindow<PenaltyHierarchyGenerator>("Penalty Setup");
        window.minSize = new Vector2(380, 560);
        window.Show();
    }

    [MenuItem("Tools/⚽ Ronaldo Penalty/Quick Generate Scene (Default)", false, 20)]
    public static void QuickGenerate()
    {
        GenerateHierarchy(null, null, null, null, null, null, null, null, null, null);
    }

    [MenuItem("Tools/⚽ Ronaldo Penalty/🎯 SỬA RIÊNG HỒNG TÂM (TargetCrosshair Only)", false, 25)]
    public static void FixTargetCrosshairOnly()
    {
        CreateOrFixTargetOnly(null);
    }

    private void OnGUI()
    {
        scrollPos = EditorGUILayout.BeginScrollView(scrollPos);

        EditorGUILayout.Space(10);
        GUIStyle titleStyle = new GUIStyle(EditorStyles.boldLabel)
        {
            fontSize = 15,
            alignment = TextAnchor.MiddleCenter
        };
        EditorGUILayout.LabelField("⚽ Ronaldo Penalty Scene Generator", titleStyle);
        EditorGUILayout.HelpBox("Tool này sẽ tự động tạo toàn bộ Hierarchy, gắn Script, Collider, Tag và tự động nối tất cả tham chiếu Inspector (Auto-wire)!", MessageType.Info);

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("3D Characters & Goal:", EditorStyles.boldLabel);
        ronaldoPrefab = (GameObject)EditorGUILayout.ObjectField("Ronaldo Prefab", ronaldoPrefab, typeof(GameObject), false);
        ballPrefab = (GameObject)EditorGUILayout.ObjectField("Ball Prefab", ballPrefab, typeof(GameObject), false);
        goalkeeperPrefab = (GameObject)EditorGUILayout.ObjectField("Goalkeeper Prefab", goalkeeperPrefab, typeof(GameObject), false);
        goalPrefab = (GameObject)EditorGUILayout.ObjectField("Goal Prefab", goalPrefab, typeof(GameObject), false);

        EditorGUILayout.Space(6);
        EditorGUILayout.LabelField("Hậu Vệ Đứng Chắn (Lần 1: Không có):", EditorStyles.boldLabel);
        defenderRound2Prefab = (GameObject)EditorGUILayout.ObjectField("Defender Lần 2 (VD: Messi)", defenderRound2Prefab, typeof(GameObject), false);
        defenderRound3Prefab = (GameObject)EditorGUILayout.ObjectField("Defender Lần 3 (Cầu thủ khác)", defenderRound3Prefab, typeof(GameObject), false);

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Visual Sprites (Tùy chọn):", EditorStyles.boldLabel);
        crosshairSprite = (Sprite)EditorGUILayout.ObjectField("Hồng tâm (Crosshair Sprite)", crosshairSprite, typeof(Sprite), false);
        iconEmpty = (Sprite)EditorGUILayout.ObjectField("Icon Empty (⬜)", iconEmpty, typeof(Sprite), false);
        iconCheck = (Sprite)EditorGUILayout.ObjectField("Icon Check (✅)", iconCheck, typeof(Sprite), false);
        iconCross = (Sprite)EditorGUILayout.ObjectField("Icon Cross (❌)", iconCross, typeof(Sprite), false);

        EditorGUILayout.Space(20);
        GUI.backgroundColor = new Color(0.2f, 0.85f, 0.4f);
        if (GUILayout.Button("🚀 TẠO TOÀN BỘ HIERARCHY & AUTO-WIRE", GUILayout.Height(45)))
        {
            GenerateHierarchy(ronaldoPrefab, ballPrefab, goalkeeperPrefab, defenderRound2Prefab, defenderRound3Prefab, goalPrefab, crosshairSprite, iconEmpty, iconCheck, iconCross);
        }

        EditorGUILayout.Space(8);
        GUI.backgroundColor = new Color(0.95f, 0.65f, 0.15f);
        if (GUILayout.Button("🎯 SỬA / TẠO RIÊNG HỒNG TÂM (TargetCrosshair Only)", GUILayout.Height(36)))
        {
            CreateOrFixTargetOnly(crosshairSprite);
        }

        EditorGUILayout.Space(8);
        GUI.backgroundColor = new Color(0.9f, 0.3f, 0.3f);
        if (GUILayout.Button("🧹 Xóa Hierarchy Penalty Hiện Tại", GUILayout.Height(30)))
        {
            ClearHierarchy();
        }

        EditorGUILayout.EndScrollView();
    }

    public static void ClearHierarchy()
    {
        string[] rootNames = { "--- ENVIRONMENT ---", "--- CHARACTERS & BALL ---", "--- AIMING ---", "--- MANAGERS ---", "--- UI CANVAS ---" };
        foreach (var name in rootNames)
        {
            var obj = GameObject.Find(name);
            if (obj != null)
            {
                Undo.DestroyObjectImmediate(obj);
            }
        }
        Debug.Log("✅ Đã xóa Hierarchy Penalty!");
    }

    public static void GenerateHierarchy(
        GameObject ronaldoSrc,
        GameObject ballSrc,
        GameObject gkSrc,
        GameObject def2Src,
        GameObject def3Src,
        GameObject goalSrc,
        Sprite crosshairSp,
        Sprite emptySp,
        Sprite checkSp,
        Sprite crossSp)
    {
        EnsureTagsExist("Goalkeeper", "Defender", "Ball", "GoalLine");

        // 1. ENVIRONMENT
        GameObject envRoot = new GameObject("--- ENVIRONMENT ---");
        Undo.RegisterCreatedObjectUndo(envRoot, "Create Environment");

        // Pitch
        GameObject pitch = GameObject.CreatePrimitive(PrimitiveType.Plane);
        pitch.name = "Pitch";
        pitch.transform.parent = envRoot.transform;
        pitch.transform.position = new Vector3(0, 0, 4f);
        pitch.transform.localScale = new Vector3(1.6f, 1f, 2.2f);
        SetObjectColor(pitch, new Color(0.18f, 0.55f, 0.24f), false); // Green grass

        // Goal
        GameObject goalRoot;
        if (goalSrc != null)
        {
            goalRoot = (GameObject)PrefabUtility.InstantiatePrefab(goalSrc, envRoot.transform);
            goalRoot.name = "Goal";
        }
        else
        {
            goalRoot = CreateGoalPrimitive(envRoot.transform);
        }
        goalRoot.transform.position = new Vector3(0, 0, 10f);

        // Goal Markers
        GameObject goalCenter = new GameObject("GoalCenter");
        goalCenter.transform.parent = goalRoot.transform;
        goalCenter.transform.localPosition = new Vector3(0, 1.3f, 0);

        GameObject leftPost = new GameObject("LeftPost_Marker");
        leftPost.transform.parent = goalRoot.transform;
        leftPost.transform.localPosition = new Vector3(-3.2f, 1.3f, -1.0f); // In front of goal

        GameObject rightPost = new GameObject("RightPost_Marker");
        rightPost.transform.parent = goalRoot.transform;
        rightPost.transform.localPosition = new Vector3(3.2f, 1.3f, -1.0f); // In front of goal

        // 2. CHARACTERS & BALL
        GameObject charRoot = new GameObject("--- CHARACTERS & BALL ---");
        Undo.RegisterCreatedObjectUndo(charRoot, "Create Characters");

        // Ronaldo
        GameObject ronaldoObj;
        if (ronaldoSrc != null)
        {
            ronaldoObj = (GameObject)PrefabUtility.InstantiatePrefab(ronaldoSrc, charRoot.transform);
            ronaldoObj.name = "Ronaldo";
        }
        else
        {
            ronaldoObj = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            ronaldoObj.name = "Ronaldo";
            ronaldoObj.transform.parent = charRoot.transform;
            SetObjectColor(ronaldoObj, new Color(0.9f, 0.2f, 0.2f), false);
        }
        ronaldoObj.transform.position = new Vector3(0, 1f, -3.2f);
        ronaldoObj.transform.rotation = Quaternion.Euler(0, 0, 0);
        var ronaldoAnim = ronaldoObj.GetComponent<PenaltyPlayerAnimator>();
        if (ronaldoAnim == null) ronaldoAnim = ronaldoObj.AddComponent<PenaltyPlayerAnimator>();

        // Ball
        GameObject ballObj;
        if (ballSrc != null)
        {
            ballObj = (GameObject)PrefabUtility.InstantiatePrefab(ballSrc, charRoot.transform);
            ballObj.name = "Ball";
        }
        else
        {
            ballObj = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            ballObj.name = "Ball";
            ballObj.transform.parent = charRoot.transform;
            ballObj.transform.localScale = Vector3.one * 0.45f;
            SetObjectColor(ballObj, Color.white, false);
        }
        ballObj.transform.position = new Vector3(0, 0.23f, -2.2f);
        ballObj.tag = "Ball";

        var sphereCol = ballObj.GetComponent<SphereCollider>();
        if (sphereCol == null) sphereCol = ballObj.AddComponent<SphereCollider>();
        sphereCol.isTrigger = true;

        var ballRb = ballObj.GetComponent<Rigidbody>();
        if (ballRb == null) ballRb = ballObj.AddComponent<Rigidbody>();
        ballRb.isKinematic = true;

        var trail = ballObj.GetComponent<TrailRenderer>();
        if (trail == null)
        {
            trail = ballObj.AddComponent<TrailRenderer>();
            trail.time = 0.22f;
            trail.startWidth = 0.35f;
            trail.endWidth = 0.05f;
            trail.material = CreateSafeMaterial(new Color(1f, 0.9f, 0.2f, 0.8f), true);
            trail.startColor = new Color(1f, 0.9f, 0.2f, 0.8f);
            trail.endColor = new Color(1f, 0.3f, 0.1f, 0f);
            trail.enabled = false;
        }

        var ballCtrl = ballObj.GetComponent<PenaltyBallController>();
        if (ballCtrl == null) ballCtrl = ballObj.AddComponent<PenaltyBallController>();
        ballCtrl.SetGoalCenter(goalCenter.transform, 3.5f);

        // Goalkeeper
        GameObject gkObj;
        if (gkSrc != null)
        {
            gkObj = (GameObject)PrefabUtility.InstantiatePrefab(gkSrc, charRoot.transform);
            gkObj.name = "Goalkeeper";
        }
        else
        {
            gkObj = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            gkObj.name = "Goalkeeper";
            gkObj.transform.parent = charRoot.transform;
            gkObj.transform.localScale = new Vector3(1.1f, 1.1f, 1.1f);
            SetObjectColor(gkObj, new Color(1f, 0.8f, 0.1f), false); // Yellow GK
        }
        gkObj.transform.position = new Vector3(0, 1.1f, 9.4f);
        gkObj.tag = "Goalkeeper";

        var gkCol = gkObj.GetComponent<CapsuleCollider>();
        if (gkCol == null) gkCol = gkObj.AddComponent<CapsuleCollider>();
        gkCol.isTrigger = true;

        var gkRb = gkObj.GetComponent<Rigidbody>();
        if (gkRb == null) gkRb = gkObj.AddComponent<Rigidbody>();
        gkRb.isKinematic = true;

        var gkAI = gkObj.GetComponent<PenaltyGoalkeeperAI>();
        if (gkAI == null) gkAI = gkObj.AddComponent<PenaltyGoalkeeperAI>();
        gkAI.SetBounds(leftPost.transform, rightPost.transform);

        // Defender Markers (Giới hạn di chuyển của Defender)
        GameObject defLeft = new GameObject("DefenderLeft_Marker");
        defLeft.transform.parent = charRoot.transform;
        defLeft.transform.position = new Vector3(-2.2f, 1.0f, 4.5f);

        GameObject defRight = new GameObject("DefenderRight_Marker");
        defRight.transform.parent = charRoot.transform;
        defRight.transform.position = new Vector3(2.2f, 1.0f, 4.5f);

        // Defender Round 2 (Lần sút 2: VD Messi)
        GameObject def2Obj;
        if (def2Src != null)
        {
            def2Obj = (GameObject)PrefabUtility.InstantiatePrefab(def2Src, charRoot.transform);
            def2Obj.name = "Defender_Round2";
        }
        else
        {
            def2Obj = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            def2Obj.name = "Defender_Round2";
            def2Obj.transform.parent = charRoot.transform;
            SetObjectColor(def2Obj, new Color(0.2f, 0.4f, 0.9f), false); // Blue Defender
        }
        def2Obj.transform.position = new Vector3(0, 1.0f, 4.5f);
        def2Obj.tag = "Defender";
        var def2Col = def2Obj.GetComponent<Collider>() ?? def2Obj.AddComponent<BoxCollider>();
        def2Col.isTrigger = true;
        var def2Rb = def2Obj.GetComponent<Rigidbody>() ?? def2Obj.AddComponent<Rigidbody>();
        def2Rb.isKinematic = true;
        var def2AI = def2Obj.GetComponent<PenaltyDefenderAI>() ?? def2Obj.AddComponent<PenaltyDefenderAI>();
        def2AI.SetBounds(defLeft.transform, defRight.transform);
        def2Obj.SetActive(false); // Inactive ban đầu

        // Defender Round 3 (Lần sút 3: Cầu thủ chắn tiếp theo)
        GameObject def3Obj;
        if (def3Src != null)
        {
            def3Obj = (GameObject)PrefabUtility.InstantiatePrefab(def3Src, charRoot.transform);
            def3Obj.name = "Defender_Round3";
        }
        else
        {
            def3Obj = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            def3Obj.name = "Defender_Round3";
            def3Obj.transform.parent = charRoot.transform;
            SetObjectColor(def3Obj, new Color(0.9f, 0.4f, 0.1f), false); // Orange Defender
        }
        def3Obj.transform.position = new Vector3(0, 1.0f, 4.5f);
        def3Obj.tag = "Defender";
        var def3Col = def3Obj.GetComponent<Collider>() ?? def3Obj.AddComponent<BoxCollider>();
        def3Col.isTrigger = true;
        var def3Rb = def3Obj.GetComponent<Rigidbody>() ?? def3Obj.AddComponent<Rigidbody>();
        def3Rb.isKinematic = true;
        var def3AI = def3Obj.GetComponent<PenaltyDefenderAI>() ?? def3Obj.AddComponent<PenaltyDefenderAI>();
        def3AI.SetBounds(defLeft.transform, defRight.transform);
        def3Obj.SetActive(false); // Inactive ban đầu

        // 3. AIMING TARGET (HỒNG TÂM NGẮM BẮN)
        GameObject aimRoot = new GameObject("--- AIMING ---");
        Undo.RegisterCreatedObjectUndo(aimRoot, "Create Aiming");

        GameObject targetObj = new GameObject("TargetCrosshair");
        targetObj.transform.parent = aimRoot.transform;
        targetObj.transform.position = new Vector3(0, 1.3f, 9.0f); // Phía trước khung thành và GK

        if (crosshairSp != null)
        {
            var sr = targetObj.AddComponent<SpriteRenderer>();
            sr.sprite = crosshairSp;
            sr.sortingOrder = 10;
            targetObj.transform.localScale = Vector3.one * 1.2f;
        }
        else
        {
            // Tạo hồng tâm tròn phát sáng nổi bật
            GameObject outerRing = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            outerRing.name = "OuterRing";
            outerRing.transform.parent = targetObj.transform;
            outerRing.transform.localPosition = Vector3.zero;
            outerRing.transform.localScale = new Vector3(0.9f, 0.9f, 0.1f);
            var colOut = outerRing.GetComponent<Collider>();
            if (colOut) DestroyImmediate(colOut);
            SetObjectColor(outerRing, new Color(1f, 0.15f, 0.15f, 1f), true); // Red Neon

            GameObject innerDot = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            innerDot.name = "InnerDot";
            innerDot.transform.parent = targetObj.transform;
            innerDot.transform.localPosition = new Vector3(0, 0, -0.05f);
            innerDot.transform.localScale = new Vector3(0.35f, 0.35f, 0.15f);
            var colIn = innerDot.GetComponent<Collider>();
            if (colIn) DestroyImmediate(colIn);
            SetObjectColor(innerDot, Color.white, true); // White center
        }

        var targetMover = targetObj.AddComponent<PenaltyTargetMover>();
        targetMover.SetBounds(leftPost.transform, rightPost.transform);
        targetMover.SetBallTransform(ballObj.transform);
        targetMover.SetupAimLine();

        // 4. MANAGERS & CAMERA
        GameObject mgrRoot = new GameObject("--- MANAGERS ---");
        Undo.RegisterCreatedObjectUndo(mgrRoot, "Create Managers");

        Camera mainCam = Camera.main;
        if (mainCam == null)
        {
            GameObject camObj = new GameObject("Main Camera");
            camObj.tag = "MainCamera";
            mainCam = camObj.AddComponent<Camera>();
            camObj.AddComponent<AudioListener>();
        }
        mainCam.transform.position = new Vector3(0, 2.2f, -6f);
        mainCam.transform.rotation = Quaternion.Euler(12f, 0, 0);
        var gameManager = mgrRoot.AddComponent<PenaltyGameManager>();

        if (Object.FindObjectOfType<EventSystem>() == null)
        {
            GameObject es = new GameObject("EventSystem");
            es.AddComponent<EventSystem>();
            es.AddComponent<StandaloneInputModule>();
        }

        // 5. UI CANVAS
        GameObject canvasRoot = CreateUICanvas(emptySp, checkSp, crossSp, out PenaltyUIManager uiMgr);

        // AUTO-WIRE GAME MANAGER
        gameManager.SetupDependencies(
            ballCtrl,
            targetMover,
            gkAI,
            def2AI,
            def3AI,
            ronaldoAnim,
            uiMgr
        );

        Selection.activeGameObject = gameManager.gameObject;
        Debug.Log("🎉 ĐÃ TẠO XONG TOÀN BỘ HIERARCHY RONALDO PENALTY & AUTO-WIRED THÀNH CÔNG!");
    }

    private static GameObject CreateGoalPrimitive(Transform parent)
    {
        GameObject root = new GameObject("Goal_Frame");
        root.transform.parent = parent;

        Material postMat = CreateSafeMaterial(Color.white, false);

        // Left post
        GameObject lp = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        lp.name = "LeftPost_Mesh";
        lp.transform.parent = root.transform;
        lp.transform.localPosition = new Vector3(-3.5f, 1.25f, 0);
        lp.transform.localScale = new Vector3(0.18f, 1.25f, 0.18f);
        lp.GetComponent<Renderer>().sharedMaterial = postMat;

        // Right post
        GameObject rp = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        rp.name = "RightPost_Mesh";
        rp.transform.parent = root.transform;
        rp.transform.localPosition = new Vector3(3.5f, 1.25f, 0);
        rp.transform.localScale = new Vector3(0.18f, 1.25f, 0.18f);
        rp.GetComponent<Renderer>().sharedMaterial = postMat;

        // Crossbar
        GameObject cb = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        cb.name = "Crossbar_Mesh";
        cb.transform.parent = root.transform;
        cb.transform.localPosition = new Vector3(0, 2.5f, 0);
        cb.transform.localRotation = Quaternion.Euler(0, 0, 90f);
        cb.transform.localScale = new Vector3(0.18f, 3.5f, 0.18f);
        cb.GetComponent<Renderer>().sharedMaterial = postMat;

        return root;
    }

    private static GameObject CreateUICanvas(
        Sprite emptySp,
        Sprite checkSp,
        Sprite crossSp,
        out PenaltyUIManager uiManager)
    {
        GameObject canvasObj = new GameObject("--- UI CANVAS ---");
        Canvas canvas = canvasObj.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;

        CanvasScaler scaler = canvasObj.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080, 1920);
        scaler.matchWidthOrHeight = 0f; // Match width

        canvasObj.AddComponent<GraphicRaycaster>();

        // 1. Score Panel (Top)
        GameObject scorePanel = new GameObject("ScorePanel");
        scorePanel.transform.SetParent(canvasObj.transform, false);
        RectTransform rtScore = scorePanel.AddComponent<RectTransform>();
        rtScore.anchorMin = new Vector2(0.5f, 1f);
        rtScore.anchorMax = new Vector2(0.5f, 1f);
        rtScore.pivot = new Vector2(0.5f, 1f);
        rtScore.anchoredPosition = new Vector3(0, -100, 0);
        rtScore.sizeDelta = new Vector2(450, 120);

        HorizontalLayoutGroup hlg = scorePanel.AddComponent<HorizontalLayoutGroup>();
        hlg.spacing = 30;
        hlg.childAlignment = TextAnchor.MiddleCenter;
        hlg.childControlWidth = false;
        hlg.childControlHeight = false;

        Image[] indicators = new Image[3];
        for (int i = 0; i < 3; i++)
        {
            GameObject dot = new GameObject($"Round_{i + 1}_Indicator");
            dot.transform.SetParent(scorePanel.transform, false);
            RectTransform dotRt = dot.AddComponent<RectTransform>();
            dotRt.sizeDelta = new Vector2(90, 90);

            Image img = dot.AddComponent<Image>();
            img.color = Color.white;
            if (emptySp != null) img.sprite = emptySp;
            indicators[i] = img;
        }

        // 2. Prompt Text
        GameObject promptObj = new GameObject("PromptText");
        promptObj.transform.SetParent(canvasObj.transform, false);
        RectTransform rtPrompt = promptObj.AddComponent<RectTransform>();
        rtPrompt.anchorMin = new Vector2(0.5f, 0.22f);
        rtPrompt.anchorMax = new Vector2(0.5f, 0.22f);
        rtPrompt.pivot = new Vector2(0.5f, 0.5f);
        rtPrompt.sizeDelta = new Vector2(600, 100);

        Text txtPrompt = promptObj.AddComponent<Text>();
        txtPrompt.text = "TAP TO KICK";
        txtPrompt.fontSize = 55;
        txtPrompt.alignment = TextAnchor.MiddleCenter;
        txtPrompt.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        txtPrompt.color = Color.yellow;
        promptObj.AddComponent<Outline>().effectColor = Color.black;

        // 3. Lose Panel
        GameObject losePanel = CreateLosePanel(canvasObj.transform);
        losePanel.SetActive(false);

        // PenaltyUIManager
        uiManager = canvasObj.AddComponent<PenaltyUIManager>();
        uiManager.SetupReferences(indicators, losePanel, promptObj);

        return canvasObj;
    }

    private static GameObject CreateLosePanel(Transform parent)
    {
        GameObject panel = new GameObject("LosePanel");
        panel.transform.SetParent(parent, false);
        RectTransform rt = panel.AddComponent<RectTransform>();
        rt.anchorMin = Vector2.zero;
        rt.anchorMax = Vector2.one;
        rt.sizeDelta = Vector2.zero;

        Image bg = panel.AddComponent<Image>();
        bg.color = new Color(0.6f, 0.05f, 0.05f, 0.75f);

        GameObject txtObj = new GameObject("LoseText");
        txtObj.transform.SetParent(panel.transform, false);
        RectTransform txtRt = txtObj.AddComponent<RectTransform>();
        txtRt.anchoredPosition = new Vector2(0, 100);
        txtRt.sizeDelta = new Vector2(800, 250);
        Text t = txtObj.AddComponent<Text>();
        t.text = "😭 GAME OVER 😭\nimpossible...";
        t.fontSize = 65;
        t.alignment = TextAnchor.MiddleCenter;
        t.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        t.color = Color.white;

        return panel;
    }

    private static void SetObjectColor(GameObject obj, Color color, bool isUnlit = true)
    {
        var rend = obj.GetComponent<Renderer>();
        if (rend != null)
        {
            rend.sharedMaterial = CreateSafeMaterial(color, isUnlit);
        }
    }

    private static Material CreateSafeMaterial(Color color, bool isUnlit = true)
    {
        Shader shader = null;
        if (isUnlit)
        {
            shader = Shader.Find("Universal Render Pipeline/Unlit");
            if (shader == null) shader = Shader.Find("Sprites/Default");
            if (shader == null) shader = Shader.Find("Unlit/Color");
        }
        else
        {
            shader = Shader.Find("Universal Render Pipeline/Lit");
            if (shader == null) shader = Shader.Find("Standard");
        }

        if (shader == null) shader = Shader.Find("Sprites/Default");
        if (shader == null) shader = Shader.Find("Diffuse");

        Material mat = new Material(shader);
        mat.color = color;
        if (mat.HasProperty("_BaseColor"))
        {
            mat.SetColor("_BaseColor", color);
        }
        return mat;
    }

    private static void EnsureTagsExist(params string[] tags)
    {
        SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset")[0]);
        SerializedProperty tagsProp = tagManager.FindProperty("tags");

        List<string> existingTags = new List<string>();
        for (int i = 0; i < tagsProp.arraySize; i++)
        {
            existingTags.Add(tagsProp.GetArrayElementAtIndex(i).stringValue);
        }

        bool modified = false;
        foreach (var tag in tags)
        {
            if (!existingTags.Contains(tag))
            {
                tagsProp.InsertArrayElementAtIndex(tagsProp.arraySize);
                tagsProp.GetArrayElementAtIndex(tagsProp.arraySize - 1).stringValue = tag;
                modified = true;
            }
        }

        if (modified)
        {
            tagManager.ApplyModifiedProperties();
            Debug.Log("🏷️ Đã tự động tạo các Unity Tags cần thiết: " + string.Join(", ", tags));
        }
    }

    public static void CreateOrFixTargetOnly(Sprite crosshairSp)
    {
        // 1. Tìm hoặc tạo Aiming Root
        GameObject aimRoot = GameObject.Find("--- AIMING ---");
        if (aimRoot == null)
        {
            aimRoot = new GameObject("--- AIMING ---");
            Undo.RegisterCreatedObjectUndo(aimRoot, "Create Aiming Root");
        }

        // 2. Tìm hoặc tạo Left/Right Marker
        GameObject leftMarker = GameObject.Find("LeftPost_Marker");
        GameObject rightMarker = GameObject.Find("RightPost_Marker");

        if (leftMarker == null || rightMarker == null)
        {
            GameObject goal = GameObject.Find("Goal") ?? GameObject.Find("Goal_Frame") ?? GameObject.Find("--- ENVIRONMENT ---");
            Transform parentT = goal != null ? goal.transform : null;

            if (leftMarker == null)
            {
                leftMarker = new GameObject("LeftPost_Marker");
                if (parentT) leftMarker.transform.parent = parentT;
                leftMarker.transform.position = new Vector3(-3.2f, 1.3f, 9.0f);
            }

            if (rightMarker == null)
            {
                rightMarker = new GameObject("RightPost_Marker");
                if (parentT) rightMarker.transform.parent = parentT;
                rightMarker.transform.position = new Vector3(3.2f, 1.3f, 9.0f);
            }
        }
        else
        {
            // Cập nhật độ cao Y và Z
            leftMarker.transform.position = new Vector3(leftMarker.transform.position.x, 1.3f, 9.0f);
            rightMarker.transform.position = new Vector3(rightMarker.transform.position.x, 1.3f, 9.0f);
        }

        // 3. Tìm hoặc tạo TargetCrosshair
        GameObject targetObj = GameObject.Find("TargetCrosshair");
        if (targetObj == null)
        {
            targetObj = new GameObject("TargetCrosshair");
            targetObj.transform.parent = aimRoot.transform;
            Undo.RegisterCreatedObjectUndo(targetObj, "Create TargetCrosshair");
        }

        targetObj.transform.position = new Vector3(0, 1.3f, 9.0f);
        targetObj.transform.localScale = Vector3.one * 1.2f;

        // Xóa visual cũ nếu có
        for (int i = targetObj.transform.childCount - 1; i >= 0; i--)
        {
            DestroyImmediate(targetObj.transform.GetChild(i).gameObject);
        }

        var oldSr = targetObj.GetComponent<SpriteRenderer>();
        if (oldSr) DestroyImmediate(oldSr);

        var oldRend = targetObj.GetComponent<Renderer>();
        if (oldRend) DestroyImmediate(oldRend);

        var oldCol = targetObj.GetComponent<Collider>();
        if (oldCol) DestroyImmediate(oldCol);

        // Tạo visual mới
        if (crosshairSp != null)
        {
            var sr = targetObj.AddComponent<SpriteRenderer>();
            sr.sprite = crosshairSp;
            sr.sortingOrder = 10;
        }
        else
        {
            GameObject outerRing = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            outerRing.name = "OuterRing";
            outerRing.transform.parent = targetObj.transform;
            outerRing.transform.localPosition = Vector3.zero;
            outerRing.transform.localScale = new Vector3(0.9f, 0.9f, 0.1f);
            var colOut = outerRing.GetComponent<Collider>();
            if (colOut) DestroyImmediate(colOut);
            SetObjectColor(outerRing, new Color(1f, 0.15f, 0.15f, 1f), true);

            GameObject innerDot = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            innerDot.name = "InnerDot";
            innerDot.transform.parent = targetObj.transform;
            innerDot.transform.localPosition = new Vector3(0, 0, -0.05f);
            innerDot.transform.localScale = new Vector3(0.35f, 0.35f, 0.15f);
            var colIn = innerDot.GetComponent<Collider>();
            if (colIn) DestroyImmediate(colIn);
            SetObjectColor(innerDot, Color.white, true);
        }

        // Script PenaltyTargetMover
        var mover = targetObj.GetComponent<PenaltyTargetMover>();
        if (mover == null) mover = targetObj.AddComponent<PenaltyTargetMover>();
        mover.SetBounds(leftMarker.transform, rightMarker.transform);
        mover.SetSpeed(2.2f);

        var ballObj = GameObject.FindWithTag("Ball");
        if (ballObj != null) mover.SetBallTransform(ballObj.transform);
        mover.SetupAimLine();
        mover.StartMoving();

        // Nối vào PenaltyGameManager nếu có trong Scene
        var gm = Object.FindObjectOfType<PenaltyGameManager>();
        if (gm != null)
        {
            SerializedObject so = new SerializedObject(gm);
            SerializedProperty prop = so.FindProperty("targetMover");
            if (prop != null)
            {
                prop.objectReferenceValue = mover;
                so.ApplyModifiedProperties();
            }
        }

        Selection.activeGameObject = targetObj;
        Debug.Log("🎯 ĐÃ SỬA / TẠO XONG HỒNG TÂM (TargetCrosshair) THÀNH CÔNG!");
    }
}
#endif
