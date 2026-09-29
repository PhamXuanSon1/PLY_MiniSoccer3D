using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Animations;
using UnityEditor.SceneManagement;
using UnityEngine;

/// <summary>
/// Tools > PLY > Build Max Level Glow Animation
/// Tạo các layer glow dưới Visuals, bake MaxLevelGlowTimeline thành AnimationClip mượt (60fps, nội suy tuyến tính),
/// thêm State vào Animator Controller và gán mọi tham chiếu vào PlayerVisual.
/// </summary>
public static class MaxLevelGlowAnimBuilder
{
    private const string SpriteFolder = "Assets/_Game/Sprite/Ply23/";
    private const string ClipPath = "Assets/_Game/Anim/MaxLevelGlow.anim";
    private const string FallbackControllerPath = "Assets/_Game/Anim/MaxLevelGlow.controller";

    [MenuItem("Tools/PLY/Build Max Level Glow Animation")]
    public static void Build()
    {
        PlayerVisual playerVisual = Object.FindFirstObjectByType<PlayerVisual>(FindObjectsInactive.Include);
        if (playerVisual == null)
        {
            EditorUtility.DisplayDialog("Max Level Glow", "Không tìm thấy PlayerVisual trong scene đang mở.", "OK");
            return;
        }

        SerializedObject so = new SerializedObject(playerVisual);
        SpriteRenderer player = so.FindProperty("playerSpriteRenderer").objectReferenceValue as SpriteRenderer;
        if (player == null)
        {
            EditorUtility.DisplayDialog("Max Level Glow", "PlayerVisual chưa gán Player Sprite Renderer.", "OK");
            return;
        }

        // 1. Sprite FX (tự nạp từ Ply23 nếu chưa gán)
        Sprite silhouette = GetSprite(so, "glowSilhouetteSprite", "fullWhite.png");
        Sprite halo = GetSprite(so, "glowHaloSprite", "fullWhiteGlow.png");
        Sprite blur = GetSprite(so, "blurBurstSprite", "fx_blurBurst.png");
        Sprite blurColor = GetSprite(so, "blurColorSprite", "fx_blurColor.png");
        Sprite blurChroma = GetSprite(so, "blurChromaSprite", "fx_blurChroma.png");
        Sprite chromaEdge = GetSprite(so, "chromaEdgeSprite", "fx_chromaEdge.png");

        // 2. Layer con dưới Visuals
        SpriteRenderer rim = GetOrCreateLayer(player, MaxLevelGlowTimeline.RimLayer, halo, -1);
        SpriteRenderer white = GetOrCreateLayer(player, MaxLevelGlowTimeline.WhiteLayer, silhouette, 1);
        SpriteRenderer haloFront = GetOrCreateLayer(player, MaxLevelGlowTimeline.HaloLayer, halo, 2);
        SpriteRenderer burst = GetOrCreateLayer(player, MaxLevelGlowTimeline.BurstLayer, blur, 3);

        // 3. AnimationClip frame by frame
        AnimationClip clip = AssetDatabase.LoadAssetAtPath<AnimationClip>(ClipPath);
        if (clip == null)
        {
            clip = new AnimationClip();
            AssetDatabase.CreateAsset(clip, ClipPath);
        }
        BakeClip(clip, blur, blurColor, blurChroma, chromaEdge);

        // 4. Animator + State
        Animator animator = player.GetComponent<Animator>();
        if (animator == null) animator = Undo.AddComponent<Animator>(player.gameObject);

        AnimatorController controller = animator.runtimeAnimatorController as AnimatorController;
        if (controller == null)
        {
            controller = AnimatorController.CreateAnimatorControllerAtPath(FallbackControllerPath);
            animator.runtimeAnimatorController = controller;
        }

        string stateName = so.FindProperty("maxGlowStateName").stringValue;
        if (string.IsNullOrEmpty(stateName)) stateName = "MaxLevelGlow";
        AddOrUpdateState(controller, stateName, clip);

        // 5. Gán tham chiếu vào PlayerVisual
        so.FindProperty("visualAnimator").objectReferenceValue = animator;
        so.FindProperty("maxGlowClip").objectReferenceValue = clip;
        so.FindProperty("maxGlowStateName").stringValue = stateName;
        so.FindProperty("rimGlowBack").objectReferenceValue = rim;
        so.FindProperty("whiteFront").objectReferenceValue = white;
        so.FindProperty("glowFront").objectReferenceValue = haloFront;
        so.FindProperty("burstLayer").objectReferenceValue = burst;
        so.ApplyModifiedProperties();

        EditorUtility.SetDirty(clip);
        EditorUtility.SetDirty(controller);
        AssetDatabase.SaveAssets();
        EditorSceneManager.MarkSceneDirty(playerVisual.gameObject.scene);

        Selection.activeObject = clip;
        Debug.Log($"[MaxLevelGlow] Đã tạo {ClipPath} ({clip.length:0.00}s, {MaxLevelGlowTimeline.ClipFps}fps) và State '{stateName}'. Nhớ Save Scene.");
    }

    private static Sprite GetSprite(SerializedObject so, string field, string fileName)
    {
        SerializedProperty prop = so.FindProperty(field);
        Sprite sprite = prop.objectReferenceValue as Sprite;
        if (sprite == null)
        {
            sprite = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteFolder + fileName);
            prop.objectReferenceValue = sprite;
            if (sprite == null) Debug.LogWarning($"[MaxLevelGlow] Không tìm thấy sprite {SpriteFolder + fileName}");
        }
        return sprite;
    }

    private static SpriteRenderer GetOrCreateLayer(SpriteRenderer player, string layerName, Sprite sprite, int orderOffset)
    {
        Transform child = player.transform.Find(layerName);
        if (child == null)
        {
            GameObject go = new GameObject(layerName);
            Undo.RegisterCreatedObjectUndo(go, "Create " + layerName);
            go.transform.SetParent(player.transform, false);
            child = go.transform;
        }

        child.gameObject.layer = player.gameObject.layer;
        child.localPosition = Vector3.zero;
        child.localRotation = Quaternion.identity;
        child.localScale = Vector3.one;

        SpriteRenderer sr = child.GetComponent<SpriteRenderer>();
        if (sr == null) sr = Undo.AddComponent<SpriteRenderer>(child.gameObject);

        Undo.RecordObject(sr, "Setup " + layerName);
        sr.sprite = sprite;
        sr.sharedMaterial = player.sharedMaterial;
        sr.sortingLayerID = player.sortingLayerID;
        sr.sortingOrder = player.sortingOrder + orderOffset;
        sr.color = new Color(1f, 1f, 1f, 0f);
        sr.enabled = false;
        return sr;
    }

    private static void BakeClip(AnimationClip clip, Sprite blur, Sprite blurColor, Sprite blurChroma, Sprite chromaEdge)
    {
        clip.ClearCurves();
        clip.frameRate = MaxLevelGlowTimeline.ClipFps;

        int frameCount = Mathf.CeilToInt(MaxLevelGlowTimeline.Duration * MaxLevelGlowTimeline.ClipFps);

        var curves = new Dictionary<string, AnimationCurve>();
        AnimationCurve Curve(string key)
        {
            if (!curves.TryGetValue(key, out AnimationCurve c)) curves[key] = c = new AnimationCurve();
            return c;
        }

        var spriteKeys = new List<ObjectReferenceKeyframe>();
        Sprite lastSprite = null;

        for (int f = 0; f <= frameCount; f++)
        {
            float t = (float)f / MaxLevelGlowTimeline.ClipFps;
            MaxLevelGlowTimeline.State s = MaxLevelGlowTimeline.Evaluate(t);

            Sprite burstSprite = GetBurstSprite(s.burst, blur, blurColor, blurChroma, chromaEdge);
            float burstA = burstSprite != null ? s.burstAlpha : 0f;

            // Nhân vật: tint màu, mờ dần khi khung FX hiện lên thay thế
            Curve("|r").AddKey(t, s.tint.r);
            Curve("|g").AddKey(t, s.tint.g);
            Curve("|b").AddKey(t, s.tint.b);
            Curve("|a").AddKey(t, 1f - burstA);

            Curve(MaxLevelGlowTimeline.RimLayer + "|a").AddKey(t, s.rim);
            Curve(MaxLevelGlowTimeline.WhiteLayer + "|a").AddKey(t, s.white * (1f - burstA));
            Curve(MaxLevelGlowTimeline.HaloLayer + "|a").AddKey(t, s.halo * (1f - burstA));
            Curve(MaxLevelGlowTimeline.BurstLayer + "|a").AddKey(t, burstA);
            Curve(MaxLevelGlowTimeline.BurstLayer + "|scale").AddKey(t, s.burstScale);

            if (burstSprite != null && burstSprite != lastSprite)
            {
                spriteKeys.Add(new ObjectReferenceKeyframe { time = t, value = burstSprite });
                lastSprite = burstSprite;
            }
        }

        foreach (KeyValuePair<string, AnimationCurve> pair in curves)
        {
            AnimationCurve curve = pair.Value;
            // Mỗi frame một key, nội suy tuyến tính giữa các frame cho mượt
            for (int i = 0; i < curve.length; i++)
            {
                AnimationUtility.SetKeyLeftTangentMode(curve, i, AnimationUtility.TangentMode.Linear);
                AnimationUtility.SetKeyRightTangentMode(curve, i, AnimationUtility.TangentMode.Linear);
            }

            string[] parts = pair.Key.Split('|');
            string path = parts[0];
            string channel = parts[1];

            if (channel == "scale")
            {
                foreach (string axis in new[] { "x", "y", "z" })
                {
                    AnimationUtility.SetEditorCurve(clip,
                        EditorCurveBinding.FloatCurve(path, typeof(Transform), "m_LocalScale." + axis), curve);
                }
            }
            else
            {
                AnimationUtility.SetEditorCurve(clip,
                    EditorCurveBinding.FloatCurve(path, typeof(SpriteRenderer), "m_Color." + channel), curve);
            }
        }

        if (spriteKeys.Count > 0)
        {
            AnimationUtility.SetObjectReferenceCurve(clip,
                EditorCurveBinding.PPtrCurve(MaxLevelGlowTimeline.BurstLayer, typeof(SpriteRenderer), "m_Sprite"),
                spriteKeys.ToArray());
        }

        AnimationClipSettings settings = AnimationUtility.GetAnimationClipSettings(clip);
        settings.loopTime = false;
        AnimationUtility.SetAnimationClipSettings(clip, settings);
    }

    private static Sprite GetBurstSprite(MaxLevelGlowTimeline.BurstFx fx, Sprite blur, Sprite blurColor, Sprite blurChroma, Sprite chromaEdge)
    {
        switch (fx)
        {
            case MaxLevelGlowTimeline.BurstFx.Blur: return blur;
            case MaxLevelGlowTimeline.BurstFx.BlurColor: return blurColor != null ? blurColor : blur;
            case MaxLevelGlowTimeline.BurstFx.BlurChroma: return blurChroma != null ? blurChroma : blur;
            case MaxLevelGlowTimeline.BurstFx.ChromaEdge: return chromaEdge;
        }
        return null;
    }

    private static void AddOrUpdateState(AnimatorController controller, string stateName, AnimationClip clip)
    {
        AnimatorStateMachine sm = controller.layers[0].stateMachine;
        AnimatorState state = null;
        foreach (ChildAnimatorState child in sm.states)
        {
            if (child.state.name == stateName)
            {
                state = child.state;
                break;
            }
        }

        if (state == null) state = sm.AddState(stateName);

        state.motion = clip;
        // Không ghi giá trị mặc định để Animator không reset màu/scale ngoài những gì clip điều khiển
        state.writeDefaultValues = false;
    }
}
