var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2920 = root || request.c( 'UnityEngine.JointSpring' )
  var i2921 = data
  i2920.spring = i2921[0]
  i2920.damper = i2921[1]
  i2920.targetPosition = i2921[2]
  return i2920
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2922 = root || request.c( 'UnityEngine.JointMotor' )
  var i2923 = data
  i2922.m_TargetVelocity = i2923[0]
  i2922.m_Force = i2923[1]
  i2922.m_FreeSpin = i2923[2]
  return i2922
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.JointLimits' )
  var i2925 = data
  i2924.m_Min = i2925[0]
  i2924.m_Max = i2925[1]
  i2924.m_Bounciness = i2925[2]
  i2924.m_BounceMinVelocity = i2925[3]
  i2924.m_ContactDistance = i2925[4]
  i2924.minBounce = i2925[5]
  i2924.maxBounce = i2925[6]
  return i2924
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.JointDrive' )
  var i2927 = data
  i2926.m_PositionSpring = i2927[0]
  i2926.m_PositionDamper = i2927[1]
  i2926.m_MaximumForce = i2927[2]
  i2926.m_UseAcceleration = i2927[3]
  return i2926
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2929 = data
  i2928.m_Spring = i2929[0]
  i2928.m_Damper = i2929[1]
  return i2928
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2930 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2931 = data
  i2930.m_Limit = i2931[0]
  i2930.m_Bounciness = i2931[1]
  i2930.m_ContactDistance = i2931[2]
  return i2930
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2933 = data
  i2932.m_ExtremumSlip = i2933[0]
  i2932.m_ExtremumValue = i2933[1]
  i2932.m_AsymptoteSlip = i2933[2]
  i2932.m_AsymptoteValue = i2933[3]
  i2932.m_Stiffness = i2933[4]
  return i2932
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2934 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2935 = data
  i2934.m_LowerAngle = i2935[0]
  i2934.m_UpperAngle = i2935[1]
  return i2934
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2936 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2937 = data
  i2936.m_MotorSpeed = i2937[0]
  i2936.m_MaximumMotorTorque = i2937[1]
  return i2936
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2938 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2939 = data
  i2938.m_DampingRatio = i2939[0]
  i2938.m_Frequency = i2939[1]
  i2938.m_Angle = i2939[2]
  return i2938
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2941 = data
  i2940.m_LowerTranslation = i2941[0]
  i2940.m_UpperTranslation = i2941[1]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2943 = data
  i2942.pivot = new pc.Vec2( i2943[0], i2943[1] )
  i2942.anchorMin = new pc.Vec2( i2943[2], i2943[3] )
  i2942.anchorMax = new pc.Vec2( i2943[4], i2943[5] )
  i2942.sizeDelta = new pc.Vec2( i2943[6], i2943[7] )
  i2942.anchoredPosition3D = new pc.Vec3( i2943[8], i2943[9], i2943[10] )
  i2942.rotation = new pc.Quat(i2943[11], i2943[12], i2943[13], i2943[14])
  i2942.scale = new pc.Vec3( i2943[15], i2943[16], i2943[17] )
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2945 = data
  i2944.planeDistance = i2945[0]
  i2944.referencePixelsPerUnit = i2945[1]
  i2944.isFallbackOverlay = !!i2945[2]
  i2944.renderMode = i2945[3]
  i2944.renderOrder = i2945[4]
  i2944.sortingLayerName = i2945[5]
  i2944.sortingOrder = i2945[6]
  i2944.scaleFactor = i2945[7]
  request.r(i2945[8], i2945[9], 0, i2944, 'worldCamera')
  i2944.overrideSorting = !!i2945[10]
  i2944.pixelPerfect = !!i2945[11]
  i2944.targetDisplay = i2945[12]
  i2944.overridePixelPerfect = !!i2945[13]
  i2944.enabled = !!i2945[14]
  return i2944
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2947 = data
  i2946.m_UiScaleMode = i2947[0]
  i2946.m_ReferencePixelsPerUnit = i2947[1]
  i2946.m_ScaleFactor = i2947[2]
  i2946.m_ReferenceResolution = new pc.Vec2( i2947[3], i2947[4] )
  i2946.m_ScreenMatchMode = i2947[5]
  i2946.m_MatchWidthOrHeight = i2947[6]
  i2946.m_PhysicalUnit = i2947[7]
  i2946.m_FallbackScreenDPI = i2947[8]
  i2946.m_DefaultSpriteDPI = i2947[9]
  i2946.m_DynamicPixelsPerUnit = i2947[10]
  i2946.m_PresetInfoIsWorld = !!i2947[11]
  return i2946
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2948 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2949 = data
  i2948.m_IgnoreReversedGraphics = !!i2949[0]
  i2948.m_BlockingObjects = i2949[1]
  i2948.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2949[2] )
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2951 = data
  i2950.cullTransparentMesh = !!i2951[0]
  return i2950
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2952 = root || request.c( 'UnityEngine.UI.Image' )
  var i2953 = data
  request.r(i2953[0], i2953[1], 0, i2952, 'm_Sprite')
  i2952.m_Type = i2953[2]
  i2952.m_PreserveAspect = !!i2953[3]
  i2952.m_FillCenter = !!i2953[4]
  i2952.m_FillMethod = i2953[5]
  i2952.m_FillAmount = i2953[6]
  i2952.m_FillClockwise = !!i2953[7]
  i2952.m_FillOrigin = i2953[8]
  i2952.m_UseSpriteMesh = !!i2953[9]
  i2952.m_PixelsPerUnitMultiplier = i2953[10]
  request.r(i2953[11], i2953[12], 0, i2952, 'm_Material')
  i2952.m_Maskable = !!i2953[13]
  i2952.m_Color = new pc.Color(i2953[14], i2953[15], i2953[16], i2953[17])
  i2952.m_RaycastTarget = !!i2953[18]
  i2952.m_RaycastPadding = new pc.Vec4( i2953[19], i2953[20], i2953[21], i2953[22] )
  return i2952
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2954 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2955 = data
  i2954.m_Spacing = i2955[0]
  i2954.m_ChildForceExpandWidth = !!i2955[1]
  i2954.m_ChildForceExpandHeight = !!i2955[2]
  i2954.m_ChildControlWidth = !!i2955[3]
  i2954.m_ChildControlHeight = !!i2955[4]
  i2954.m_ChildScaleWidth = !!i2955[5]
  i2954.m_ChildScaleHeight = !!i2955[6]
  i2954.m_ReverseArrangement = !!i2955[7]
  i2954.m_Padding = UnityEngine.RectOffset.FromPaddings(i2955[8], i2955[9], i2955[10], i2955[11])
  i2954.m_ChildAlignment = i2955[12]
  return i2954
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i2956 = root || request.c( 'UICheckBox' )
  var i2957 = data
  request.r(i2957[0], i2957[1], 0, i2956, 'iconImg')
  request.r(i2957[2], i2957[3], 0, i2956, 'startingSprite')
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2959 = data
  i2958.name = i2959[0]
  i2958.tagId = i2959[1]
  i2958.enabled = !!i2959[2]
  i2958.isStatic = !!i2959[3]
  i2958.layer = i2959[4]
  return i2958
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2961 = data
  request.r(i2961[0], i2961[1], 0, i2960, 'm_FillRect')
  request.r(i2961[2], i2961[3], 0, i2960, 'm_HandleRect')
  i2960.m_Direction = i2961[4]
  i2960.m_MinValue = i2961[5]
  i2960.m_MaxValue = i2961[6]
  i2960.m_WholeNumbers = !!i2961[7]
  i2960.m_Value = i2961[8]
  i2960.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2961[9], i2960.m_OnValueChanged)
  i2960.m_Navigation = request.d('UnityEngine.UI.Navigation', i2961[10], i2960.m_Navigation)
  i2960.m_Transition = i2961[11]
  i2960.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2961[12], i2960.m_Colors)
  i2960.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2961[13], i2960.m_SpriteState)
  i2960.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2961[14], i2960.m_AnimationTriggers)
  i2960.m_Interactable = !!i2961[15]
  request.r(i2961[16], i2961[17], 0, i2960, 'm_TargetGraphic')
  return i2960
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2963 = data
  i2962.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2963[0], i2962.m_PersistentCalls)
  return i2962
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2965 = data
  var i2967 = i2965[0]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.add(request.d('UnityEngine.Events.PersistentCall', i2967[i + 0]));
  }
  i2964.m_Calls = i2966
  return i2964
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2971 = data
  request.r(i2971[0], i2971[1], 0, i2970, 'm_Target')
  i2970.m_TargetAssemblyTypeName = i2971[2]
  i2970.m_MethodName = i2971[3]
  i2970.m_Mode = i2971[4]
  i2970.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2971[5], i2970.m_Arguments)
  i2970.m_CallState = i2971[6]
  return i2970
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2973 = data
  i2972.m_Mode = i2973[0]
  i2972.m_WrapAround = !!i2973[1]
  request.r(i2973[2], i2973[3], 0, i2972, 'm_SelectOnUp')
  request.r(i2973[4], i2973[5], 0, i2972, 'm_SelectOnDown')
  request.r(i2973[6], i2973[7], 0, i2972, 'm_SelectOnLeft')
  request.r(i2973[8], i2973[9], 0, i2972, 'm_SelectOnRight')
  return i2972
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2975 = data
  i2974.m_NormalColor = new pc.Color(i2975[0], i2975[1], i2975[2], i2975[3])
  i2974.m_HighlightedColor = new pc.Color(i2975[4], i2975[5], i2975[6], i2975[7])
  i2974.m_PressedColor = new pc.Color(i2975[8], i2975[9], i2975[10], i2975[11])
  i2974.m_SelectedColor = new pc.Color(i2975[12], i2975[13], i2975[14], i2975[15])
  i2974.m_DisabledColor = new pc.Color(i2975[16], i2975[17], i2975[18], i2975[19])
  i2974.m_ColorMultiplier = i2975[20]
  i2974.m_FadeDuration = i2975[21]
  return i2974
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2977 = data
  request.r(i2977[0], i2977[1], 0, i2976, 'm_HighlightedSprite')
  request.r(i2977[2], i2977[3], 0, i2976, 'm_PressedSprite')
  request.r(i2977[4], i2977[5], 0, i2976, 'm_SelectedSprite')
  request.r(i2977[6], i2977[7], 0, i2976, 'm_DisabledSprite')
  return i2976
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2978 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2979 = data
  i2978.m_NormalTrigger = i2979[0]
  i2978.m_HighlightedTrigger = i2979[1]
  i2978.m_PressedTrigger = i2979[2]
  i2978.m_SelectedTrigger = i2979[3]
  i2978.m_DisabledTrigger = i2979[4]
  return i2978
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i2980 = root || request.c( 'UIProgressBar' )
  var i2981 = data
  request.r(i2981[0], i2981[1], 0, i2980, 'fillImage')
  request.r(i2981[2], i2981[3], 0, i2980, 'fillBackground')
  return i2980
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i2982 = root || request.c( 'UITutorial' )
  var i2983 = data
  request.r(i2983[0], i2983[1], 0, i2982, 'tutorialUIHolder')
  return i2982
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i2984 = root || request.c( 'UIGuidingMove' )
  var i2985 = data
  request.r(i2985[0], i2985[1], 0, i2984, 'target')
  i2984.startPosition = new pc.Vec2( i2985[2], i2985[3] )
  i2984.endPosition = new pc.Vec2( i2985[4], i2985[5] )
  i2984.duration = i2985[6]
  i2984.ease = i2985[7]
  i2984.resetToStartOnComplete = !!i2985[8]
  i2984.loop = !!i2985[9]
  i2984.loopCount = i2985[10]
  i2984.loopType = i2985[11]
  return i2984
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i2986 = root || request.c( 'UIPulse' )
  var i2987 = data
  i2986.targetScale = new pc.Vec3( i2987[0], i2987[1], i2987[2] )
  i2986.duration = i2987[3]
  i2986.ease = i2987[4]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2989 = data
  i2988.name = i2989[0]
  i2988.width = i2989[1]
  i2988.height = i2989[2]
  i2988.mipmapCount = i2989[3]
  i2988.anisoLevel = i2989[4]
  i2988.filterMode = i2989[5]
  i2988.hdr = !!i2989[6]
  i2988.format = i2989[7]
  i2988.wrapMode = i2989[8]
  i2988.alphaIsTransparency = !!i2989[9]
  i2988.alphaSource = i2989[10]
  i2988.graphicsFormat = i2989[11]
  i2988.sRGBTexture = !!i2989[12]
  i2988.desiredColorSpace = i2989[13]
  i2988.wrapU = i2989[14]
  i2988.wrapV = i2989[15]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2991 = data
  i2990.position = new pc.Vec3( i2991[0], i2991[1], i2991[2] )
  i2990.scale = new pc.Vec3( i2991[3], i2991[4], i2991[5] )
  i2990.rotation = new pc.Quat(i2991[6], i2991[7], i2991[8], i2991[9])
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2993 = data
  i2992.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2993[0], i2992.main)
  i2992.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2993[1], i2992.colorBySpeed)
  i2992.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2993[2], i2992.colorOverLifetime)
  i2992.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2993[3], i2992.emission)
  i2992.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2993[4], i2992.rotationBySpeed)
  i2992.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2993[5], i2992.rotationOverLifetime)
  i2992.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2993[6], i2992.shape)
  i2992.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2993[7], i2992.sizeBySpeed)
  i2992.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2993[8], i2992.sizeOverLifetime)
  i2992.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2993[9], i2992.textureSheetAnimation)
  i2992.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2993[10], i2992.velocityOverLifetime)
  i2992.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2993[11], i2992.noise)
  i2992.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2993[12], i2992.inheritVelocity)
  i2992.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2993[13], i2992.forceOverLifetime)
  i2992.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2993[14], i2992.limitVelocityOverLifetime)
  i2992.useAutoRandomSeed = !!i2993[15]
  i2992.randomSeed = i2993[16]
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2994 = root || new pc.ParticleSystemMain()
  var i2995 = data
  i2994.duration = i2995[0]
  i2994.loop = !!i2995[1]
  i2994.prewarm = !!i2995[2]
  i2994.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[3], i2994.startDelay)
  i2994.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[4], i2994.startLifetime)
  i2994.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[5], i2994.startSpeed)
  i2994.startSize3D = !!i2995[6]
  i2994.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[7], i2994.startSizeX)
  i2994.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[8], i2994.startSizeY)
  i2994.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[9], i2994.startSizeZ)
  i2994.startRotation3D = !!i2995[10]
  i2994.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[11], i2994.startRotationX)
  i2994.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[12], i2994.startRotationY)
  i2994.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[13], i2994.startRotationZ)
  i2994.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2995[14], i2994.startColor)
  i2994.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2995[15], i2994.gravityModifier)
  i2994.simulationSpace = i2995[16]
  request.r(i2995[17], i2995[18], 0, i2994, 'customSimulationSpace')
  i2994.simulationSpeed = i2995[19]
  i2994.useUnscaledTime = !!i2995[20]
  i2994.scalingMode = i2995[21]
  i2994.playOnAwake = !!i2995[22]
  i2994.maxParticles = i2995[23]
  i2994.emitterVelocityMode = i2995[24]
  i2994.stopAction = i2995[25]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2996 = root || new pc.MinMaxCurve()
  var i2997 = data
  i2996.mode = i2997[0]
  i2996.curveMin = new pc.AnimationCurve( { keys_flow: i2997[1] } )
  i2996.curveMax = new pc.AnimationCurve( { keys_flow: i2997[2] } )
  i2996.curveMultiplier = i2997[3]
  i2996.constantMin = i2997[4]
  i2996.constantMax = i2997[5]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2998 = root || new pc.MinMaxGradient()
  var i2999 = data
  i2998.mode = i2999[0]
  i2998.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2999[1], i2998.gradientMin)
  i2998.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2999[2], i2998.gradientMax)
  i2998.colorMin = new pc.Color(i2999[3], i2999[4], i2999[5], i2999[6])
  i2998.colorMax = new pc.Color(i2999[7], i2999[8], i2999[9], i2999[10])
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3001 = data
  i3000.mode = i3001[0]
  var i3003 = i3001[1]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3003[i + 0]) );
  }
  i3000.colorKeys = i3002
  var i3005 = i3001[2]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3005[i + 0]) );
  }
  i3000.alphaKeys = i3004
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3009 = data
  i3008.color = new pc.Color(i3009[0], i3009[1], i3009[2], i3009[3])
  i3008.time = i3009[4]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3013 = data
  i3012.alpha = i3013[0]
  i3012.time = i3013[1]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3014 = root || new pc.ParticleSystemColorBySpeed()
  var i3015 = data
  i3014.enabled = !!i3015[0]
  i3014.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3015[1], i3014.color)
  i3014.range = new pc.Vec2( i3015[2], i3015[3] )
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3016 = root || new pc.ParticleSystemColorOverLifetime()
  var i3017 = data
  i3016.enabled = !!i3017[0]
  i3016.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3017[1], i3016.color)
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3018 = root || new pc.ParticleSystemEmitter()
  var i3019 = data
  i3018.enabled = !!i3019[0]
  i3018.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3019[1], i3018.rateOverTime)
  i3018.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3019[2], i3018.rateOverDistance)
  var i3021 = i3019[3]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3021[i + 0]) );
  }
  i3018.bursts = i3020
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3024 = root || new pc.ParticleSystemBurst()
  var i3025 = data
  i3024.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3025[0], i3024.count)
  i3024.cycleCount = i3025[1]
  i3024.minCount = i3025[2]
  i3024.maxCount = i3025[3]
  i3024.repeatInterval = i3025[4]
  i3024.time = i3025[5]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3026 = root || new pc.ParticleSystemRotationBySpeed()
  var i3027 = data
  i3026.enabled = !!i3027[0]
  i3026.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3027[1], i3026.x)
  i3026.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3027[2], i3026.y)
  i3026.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3027[3], i3026.z)
  i3026.separateAxes = !!i3027[4]
  i3026.range = new pc.Vec2( i3027[5], i3027[6] )
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3028 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3029 = data
  i3028.enabled = !!i3029[0]
  i3028.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3029[1], i3028.x)
  i3028.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3029[2], i3028.y)
  i3028.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3029[3], i3028.z)
  i3028.separateAxes = !!i3029[4]
  return i3028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3030 = root || new pc.ParticleSystemShape()
  var i3031 = data
  i3030.enabled = !!i3031[0]
  i3030.shapeType = i3031[1]
  i3030.randomDirectionAmount = i3031[2]
  i3030.sphericalDirectionAmount = i3031[3]
  i3030.randomPositionAmount = i3031[4]
  i3030.alignToDirection = !!i3031[5]
  i3030.radius = i3031[6]
  i3030.radiusMode = i3031[7]
  i3030.radiusSpread = i3031[8]
  i3030.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[9], i3030.radiusSpeed)
  i3030.radiusThickness = i3031[10]
  i3030.angle = i3031[11]
  i3030.length = i3031[12]
  i3030.boxThickness = new pc.Vec3( i3031[13], i3031[14], i3031[15] )
  i3030.meshShapeType = i3031[16]
  request.r(i3031[17], i3031[18], 0, i3030, 'mesh')
  request.r(i3031[19], i3031[20], 0, i3030, 'meshRenderer')
  request.r(i3031[21], i3031[22], 0, i3030, 'skinnedMeshRenderer')
  i3030.useMeshMaterialIndex = !!i3031[23]
  i3030.meshMaterialIndex = i3031[24]
  i3030.useMeshColors = !!i3031[25]
  i3030.normalOffset = i3031[26]
  i3030.arc = i3031[27]
  i3030.arcMode = i3031[28]
  i3030.arcSpread = i3031[29]
  i3030.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[30], i3030.arcSpeed)
  i3030.donutRadius = i3031[31]
  i3030.position = new pc.Vec3( i3031[32], i3031[33], i3031[34] )
  i3030.rotation = new pc.Vec3( i3031[35], i3031[36], i3031[37] )
  i3030.scale = new pc.Vec3( i3031[38], i3031[39], i3031[40] )
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3032 = root || new pc.ParticleSystemSizeBySpeed()
  var i3033 = data
  i3032.enabled = !!i3033[0]
  i3032.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[1], i3032.x)
  i3032.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[2], i3032.y)
  i3032.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[3], i3032.z)
  i3032.separateAxes = !!i3033[4]
  i3032.range = new pc.Vec2( i3033[5], i3033[6] )
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3034 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3035 = data
  i3034.enabled = !!i3035[0]
  i3034.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3035[1], i3034.x)
  i3034.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3035[2], i3034.y)
  i3034.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3035[3], i3034.z)
  i3034.separateAxes = !!i3035[4]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3036 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3037 = data
  i3036.enabled = !!i3037[0]
  i3036.mode = i3037[1]
  i3036.animation = i3037[2]
  i3036.numTilesX = i3037[3]
  i3036.numTilesY = i3037[4]
  i3036.useRandomRow = !!i3037[5]
  i3036.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3037[6], i3036.frameOverTime)
  i3036.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3037[7], i3036.startFrame)
  i3036.cycleCount = i3037[8]
  i3036.rowIndex = i3037[9]
  i3036.flipU = i3037[10]
  i3036.flipV = i3037[11]
  i3036.spriteCount = i3037[12]
  var i3039 = i3037[13]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 2) {
  request.r(i3039[i + 0], i3039[i + 1], 2, i3038, '')
  }
  i3036.sprites = i3038
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3042 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3043 = data
  i3042.enabled = !!i3043[0]
  i3042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[1], i3042.x)
  i3042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[2], i3042.y)
  i3042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[3], i3042.z)
  i3042.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[4], i3042.radial)
  i3042.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[5], i3042.speedModifier)
  i3042.space = i3043[6]
  i3042.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[7], i3042.orbitalX)
  i3042.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[8], i3042.orbitalY)
  i3042.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[9], i3042.orbitalZ)
  i3042.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[10], i3042.orbitalOffsetX)
  i3042.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[11], i3042.orbitalOffsetY)
  i3042.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3043[12], i3042.orbitalOffsetZ)
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3044 = root || new pc.ParticleSystemNoise()
  var i3045 = data
  i3044.enabled = !!i3045[0]
  i3044.separateAxes = !!i3045[1]
  i3044.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[2], i3044.strengthX)
  i3044.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[3], i3044.strengthY)
  i3044.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[4], i3044.strengthZ)
  i3044.frequency = i3045[5]
  i3044.damping = !!i3045[6]
  i3044.octaveCount = i3045[7]
  i3044.octaveMultiplier = i3045[8]
  i3044.octaveScale = i3045[9]
  i3044.quality = i3045[10]
  i3044.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[11], i3044.scrollSpeed)
  i3044.scrollSpeedMultiplier = i3045[12]
  i3044.remapEnabled = !!i3045[13]
  i3044.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[14], i3044.remapX)
  i3044.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[15], i3044.remapY)
  i3044.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[16], i3044.remapZ)
  i3044.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[17], i3044.positionAmount)
  i3044.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[18], i3044.rotationAmount)
  i3044.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[19], i3044.sizeAmount)
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3046 = root || new pc.ParticleSystemInheritVelocity()
  var i3047 = data
  i3046.enabled = !!i3047[0]
  i3046.mode = i3047[1]
  i3046.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3047[2], i3046.curve)
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3048 = root || new pc.ParticleSystemForceOverLifetime()
  var i3049 = data
  i3048.enabled = !!i3049[0]
  i3048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3049[1], i3048.x)
  i3048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3049[2], i3048.y)
  i3048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3049[3], i3048.z)
  i3048.space = i3049[4]
  i3048.randomized = !!i3049[5]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3050 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3051 = data
  i3050.enabled = !!i3051[0]
  i3050.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[1], i3050.limit)
  i3050.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[2], i3050.limitX)
  i3050.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[3], i3050.limitY)
  i3050.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[4], i3050.limitZ)
  i3050.dampen = i3051[5]
  i3050.separateAxes = !!i3051[6]
  i3050.space = i3051[7]
  i3050.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[8], i3050.drag)
  i3050.multiplyDragByParticleSize = !!i3051[9]
  i3050.multiplyDragByParticleVelocity = !!i3051[10]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3053 = data
  request.r(i3053[0], i3053[1], 0, i3052, 'mesh')
  i3052.meshCount = i3053[2]
  i3052.activeVertexStreamsCount = i3053[3]
  i3052.alignment = i3053[4]
  i3052.renderMode = i3053[5]
  i3052.sortMode = i3053[6]
  i3052.lengthScale = i3053[7]
  i3052.velocityScale = i3053[8]
  i3052.cameraVelocityScale = i3053[9]
  i3052.normalDirection = i3053[10]
  i3052.sortingFudge = i3053[11]
  i3052.minParticleSize = i3053[12]
  i3052.maxParticleSize = i3053[13]
  i3052.pivot = new pc.Vec3( i3053[14], i3053[15], i3053[16] )
  request.r(i3053[17], i3053[18], 0, i3052, 'trailMaterial')
  i3052.applyActiveColorSpace = !!i3053[19]
  i3052.enabled = !!i3053[20]
  request.r(i3053[21], i3053[22], 0, i3052, 'sharedMaterial')
  var i3055 = i3053[23]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 2, i3054, '')
  }
  i3052.sharedMaterials = i3054
  i3052.receiveShadows = !!i3053[24]
  i3052.shadowCastingMode = i3053[25]
  i3052.sortingLayerID = i3053[26]
  i3052.sortingOrder = i3053[27]
  i3052.lightmapIndex = i3053[28]
  i3052.lightmapSceneIndex = i3053[29]
  i3052.lightmapScaleOffset = new pc.Vec4( i3053[30], i3053[31], i3053[32], i3053[33] )
  i3052.lightProbeUsage = i3053[34]
  i3052.reflectionProbeUsage = i3053[35]
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3058 = root || new pc.UnityMaterial()
  var i3059 = data
  i3058.name = i3059[0]
  request.r(i3059[1], i3059[2], 0, i3058, 'shader')
  i3058.renderQueue = i3059[3]
  i3058.enableInstancing = !!i3059[4]
  var i3061 = i3059[5]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3061[i + 0]) );
  }
  i3058.floatParameters = i3060
  var i3063 = i3059[6]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3063[i + 0]) );
  }
  i3058.colorParameters = i3062
  var i3065 = i3059[7]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 1) {
    i3064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3065[i + 0]) );
  }
  i3058.vectorParameters = i3064
  var i3067 = i3059[8]
  var i3066 = []
  for(var i = 0; i < i3067.length; i += 1) {
    i3066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3067[i + 0]) );
  }
  i3058.textureParameters = i3066
  var i3069 = i3059[9]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3069[i + 0]) );
  }
  i3058.materialFlags = i3068
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3073 = data
  i3072.name = i3073[0]
  i3072.value = i3073[1]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3077 = data
  i3076.name = i3077[0]
  i3076.value = new pc.Color(i3077[1], i3077[2], i3077[3], i3077[4])
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3081 = data
  i3080.name = i3081[0]
  i3080.value = new pc.Vec4( i3081[1], i3081[2], i3081[3], i3081[4] )
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3085 = data
  i3084.name = i3085[0]
  request.r(i3085[1], i3085[2], 0, i3084, 'value')
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3089 = data
  i3088.name = i3089[0]
  i3088.enabled = !!i3089[1]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3091 = data
  i3090.name = i3091[0]
  i3090.halfPrecision = !!i3091[1]
  i3090.useSimplification = !!i3091[2]
  i3090.useUInt32IndexFormat = !!i3091[3]
  i3090.vertexCount = i3091[4]
  i3090.aabb = i3091[5]
  var i3093 = i3091[6]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.push( !!i3093[i + 0] );
  }
  i3090.streams = i3092
  i3090.vertices = i3091[7]
  var i3095 = i3091[8]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3095[i + 0]) );
  }
  i3090.subMeshes = i3094
  var i3097 = i3091[9]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 16) {
    i3096.push( new pc.Mat4().setData(i3097[i + 0], i3097[i + 1], i3097[i + 2], i3097[i + 3],  i3097[i + 4], i3097[i + 5], i3097[i + 6], i3097[i + 7],  i3097[i + 8], i3097[i + 9], i3097[i + 10], i3097[i + 11],  i3097[i + 12], i3097[i + 13], i3097[i + 14], i3097[i + 15]) );
  }
  i3090.bindposes = i3096
  var i3099 = i3091[10]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3099[i + 0]) );
  }
  i3090.blendShapes = i3098
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3105 = data
  i3104.triangles = i3105[0]
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3111 = data
  i3110.name = i3111[0]
  var i3113 = i3111[1]
  var i3112 = []
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3113[i + 0]) );
  }
  i3110.frames = i3112
  return i3110
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i3114 = root || request.c( 'ChoiceBoardHolder' )
  var i3115 = data
  var i3117 = i3115[0]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 2) {
  request.r(i3117[i + 0], i3117[i + 1], 2, i3116, '')
  }
  i3114.choiceBoards = i3116
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3121 = data
  i3120.center = new pc.Vec3( i3121[0], i3121[1], i3121[2] )
  i3120.size = new pc.Vec3( i3121[3], i3121[4], i3121[5] )
  i3120.enabled = !!i3121[6]
  i3120.isTrigger = !!i3121[7]
  request.r(i3121[8], i3121[9], 0, i3120, 'material')
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3123 = data
  i3122.color = new pc.Color(i3123[0], i3123[1], i3123[2], i3123[3])
  request.r(i3123[4], i3123[5], 0, i3122, 'sprite')
  i3122.flipX = !!i3123[6]
  i3122.flipY = !!i3123[7]
  i3122.drawMode = i3123[8]
  i3122.size = new pc.Vec2( i3123[9], i3123[10] )
  i3122.tileMode = i3123[11]
  i3122.adaptiveModeThreshold = i3123[12]
  i3122.maskInteraction = i3123[13]
  i3122.spriteSortPoint = i3123[14]
  i3122.enabled = !!i3123[15]
  request.r(i3123[16], i3123[17], 0, i3122, 'sharedMaterial')
  var i3125 = i3123[18]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 2) {
  request.r(i3125[i + 0], i3125[i + 1], 2, i3124, '')
  }
  i3122.sharedMaterials = i3124
  i3122.receiveShadows = !!i3123[19]
  i3122.shadowCastingMode = i3123[20]
  i3122.sortingLayerID = i3123[21]
  i3122.sortingOrder = i3123[22]
  i3122.lightmapIndex = i3123[23]
  i3122.lightmapSceneIndex = i3123[24]
  i3122.lightmapScaleOffset = new pc.Vec4( i3123[25], i3123[26], i3123[27], i3123[28] )
  i3122.lightProbeUsage = i3123[29]
  i3122.reflectionProbeUsage = i3123[30]
  return i3122
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i3126 = root || request.c( 'ChoiceBoard' )
  var i3127 = data
  request.r(i3127[0], i3127[1], 0, i3126, 'spriteRenderer')
  request.r(i3127[2], i3127[3], 0, i3126, 'borderRenderer')
  request.r(i3127[4], i3127[5], 0, i3126, 'increaseBorderSprite')
  request.r(i3127[6], i3127[7], 0, i3126, 'decreaseBorderSprite')
  i3126.choiceBoardType = i3127[8]
  return i3126
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3129 = data
  request.r(i3129[0], i3129[1], 0, i3128, 'm_Texture')
  i3128.m_UVRect = UnityEngine.Rect.MinMaxRect(i3129[2], i3129[3], i3129[4], i3129[5])
  request.r(i3129[6], i3129[7], 0, i3128, 'm_Material')
  i3128.m_Maskable = !!i3129[8]
  i3128.m_Color = new pc.Color(i3129[9], i3129[10], i3129[11], i3129[12])
  i3128.m_RaycastTarget = !!i3129[13]
  i3128.m_RaycastPadding = new pc.Vec4( i3129[14], i3129[15], i3129[16], i3129[17] )
  return i3128
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i3130 = root || request.c( 'ImageScroller' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'rawImage')
  i3130.moveVector = new pc.Vec2( i3131[2], i3131[3] )
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3133 = data
  i3132.name = i3133[0]
  i3132.atlasId = i3133[1]
  i3132.mipmapCount = i3133[2]
  i3132.hdr = !!i3133[3]
  i3132.size = i3133[4]
  i3132.anisoLevel = i3133[5]
  i3132.filterMode = i3133[6]
  var i3135 = i3133[7]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 4) {
    i3134.push( UnityEngine.Rect.MinMaxRect(i3135[i + 0], i3135[i + 1], i3135[i + 2], i3135[i + 3]) );
  }
  i3132.rects = i3134
  i3132.wrapU = i3133[8]
  i3132.wrapV = i3133[9]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3139 = data
  i3138.name = i3139[0]
  i3138.index = i3139[1]
  i3138.startup = !!i3139[2]
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3141 = data
  i3140.type = i3141[0]
  i3140.color = new pc.Color(i3141[1], i3141[2], i3141[3], i3141[4])
  i3140.cullingMask = i3141[5]
  i3140.intensity = i3141[6]
  i3140.range = i3141[7]
  i3140.spotAngle = i3141[8]
  i3140.shadows = i3141[9]
  i3140.shadowNormalBias = i3141[10]
  i3140.shadowBias = i3141[11]
  i3140.shadowStrength = i3141[12]
  i3140.shadowResolution = i3141[13]
  i3140.lightmapBakeType = i3141[14]
  i3140.renderMode = i3141[15]
  request.r(i3141[16], i3141[17], 0, i3140, 'cookie')
  i3140.cookieSize = i3141[18]
  i3140.shadowNearPlane = i3141[19]
  i3140.enabled = !!i3141[20]
  return i3140
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i3142 = root || request.c( 'UICheckBoxHolder' )
  var i3143 = data
  var i3145 = i3143[0]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 2) {
  request.r(i3145[i + 0], i3145[i + 1], 2, i3144, '')
  }
  i3142.uICheckBoxes = i3144
  return i3142
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3148 = root || request.c( 'UnityEngine.UI.Button' )
  var i3149 = data
  i3148.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3149[0], i3148.m_OnClick)
  i3148.m_Navigation = request.d('UnityEngine.UI.Navigation', i3149[1], i3148.m_Navigation)
  i3148.m_Transition = i3149[2]
  i3148.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3149[3], i3148.m_Colors)
  i3148.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3149[4], i3148.m_SpriteState)
  i3148.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3149[5], i3148.m_AnimationTriggers)
  i3148.m_Interactable = !!i3149[6]
  request.r(i3149[7], i3149[8], 0, i3148, 'm_TargetGraphic')
  return i3148
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3150 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3151 = data
  i3150.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3151[0], i3150.m_PersistentCalls)
  return i3150
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3152 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3153 = data
  request.r(i3153[0], i3153[1], 0, i3152, 'm_ObjectArgument')
  i3152.m_ObjectArgumentAssemblyTypeName = i3153[2]
  i3152.m_IntArgument = i3153[3]
  i3152.m_FloatArgument = i3153[4]
  i3152.m_StringArgument = i3153[5]
  i3152.m_BoolArgument = !!i3153[6]
  return i3152
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3154 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3155 = data
  request.r(i3155[0], i3155[1], 0, i3154, 'm_FirstSelected')
  i3154.m_sendNavigationEvents = !!i3155[2]
  i3154.m_DragThreshold = i3155[3]
  return i3154
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3156 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3157 = data
  i3156.m_HorizontalAxis = i3157[0]
  i3156.m_VerticalAxis = i3157[1]
  i3156.m_SubmitButton = i3157[2]
  i3156.m_CancelButton = i3157[3]
  i3156.m_InputActionsPerSecond = i3157[4]
  i3156.m_RepeatDelay = i3157[5]
  i3156.m_ForceModuleActive = !!i3157[6]
  i3156.m_SendPointerHoverToParent = !!i3157[7]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'sharedMesh')
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3161 = data
  request.r(i3161[0], i3161[1], 0, i3160, 'additionalVertexStreams')
  i3160.enabled = !!i3161[2]
  request.r(i3161[3], i3161[4], 0, i3160, 'sharedMaterial')
  var i3163 = i3161[5]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 2) {
  request.r(i3163[i + 0], i3163[i + 1], 2, i3162, '')
  }
  i3160.sharedMaterials = i3162
  i3160.receiveShadows = !!i3161[6]
  i3160.shadowCastingMode = i3161[7]
  i3160.sortingLayerID = i3161[8]
  i3160.sortingOrder = i3161[9]
  i3160.lightmapIndex = i3161[10]
  i3160.lightmapSceneIndex = i3161[11]
  i3160.lightmapScaleOffset = new pc.Vec4( i3161[12], i3161[13], i3161[14], i3161[15] )
  i3160.lightProbeUsage = i3161[16]
  i3160.reflectionProbeUsage = i3161[17]
  return i3160
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3164 = root || request.c( 'GameManager' )
  var i3165 = data
  request.r(i3165[0], i3165[1], 0, i3164, 'Player')
  i3164.maxLevel = i3165[2]
  i3164.winLevel = i3165[3]
  i3164.totalMoveTime = i3165[4]
  i3164.currentPlayerLevel = i3165[5]
  return i3164
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3166 = root || request.c( 'InputManager' )
  var i3167 = data
  i3166.minimumSwipeDistance = i3167[0]
  return i3166
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3168 = root || request.c( 'UIManager' )
  var i3169 = data
  return i3168
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3170 = root || request.c( 'Ply_SoundManager' )
  var i3171 = data
  i3170.audioClips = request.d('FxAudio', i3171[0], i3170.audioClips)
  request.r(i3171[1], i3171[2], 0, i3170, 'sound')
  i3170.enableSound = !!i3171[3]
  i3170.bgmVolume = i3171[4]
  return i3170
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3172 = root || request.c( 'FxAudio' )
  var i3173 = data
  i3172.Clock = request.d('SoundData', i3173[0], i3172.Clock)
  i3172.PlayerWin = request.d('SoundData', i3173[1], i3172.PlayerWin)
  i3172.PlayerLoose = request.d('SoundData', i3173[2], i3172.PlayerLoose)
  i3172.RightChoice = request.d('SoundData', i3173[3], i3172.RightChoice)
  i3172.WrongChoice = request.d('SoundData', i3173[4], i3172.WrongChoice)
  i3172.MaxLevel = request.d('SoundData', i3173[5], i3172.MaxLevel)
  i3172.FightingCloud = request.d('SoundData', i3173[6], i3172.FightingCloud)
  return i3172
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3174 = root || request.c( 'SoundData' )
  var i3175 = data
  request.r(i3175[0], i3175[1], 0, i3174, 'clip')
  i3174.volume = i3175[2]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3177 = data
  request.r(i3177[0], i3177[1], 0, i3176, 'clip')
  request.r(i3177[2], i3177[3], 0, i3176, 'outputAudioMixerGroup')
  i3176.playOnAwake = !!i3177[4]
  i3176.loop = !!i3177[5]
  i3176.time = i3177[6]
  i3176.volume = i3177[7]
  i3176.pitch = i3177[8]
  i3176.enabled = !!i3177[9]
  return i3176
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i3178 = root || request.c( 'ProgressTrackingManager' )
  var i3179 = data
  i3178.maxScore = i3179[0]
  request.r(i3179[1], i3179[2], 0, i3178, 'choiceBoardPlacer')
  i3178.currentScore = i3179[3]
  i3178.currentPercent = i3179[4]
  return i3178
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i3180 = root || request.c( 'PlayerController' )
  var i3181 = data
  request.r(i3181[0], i3181[1], 0, i3180, 'endPos')
  i3180.switchTrackTime = i3181[2]
  request.r(i3181[3], i3181[4], 0, i3180, 'trackRightTransform')
  request.r(i3181[5], i3181[6], 0, i3180, 'trackLeftTransform')
  i3180.startRight = !!i3181[7]
  request.r(i3181[8], i3181[9], 0, i3180, 'playerTransform')
  request.r(i3181[10], i3181[11], 0, i3180, 'playerVisual')
  request.r(i3181[12], i3181[13], 0, i3180, 'winPar')
  i3180.currentLevel = i3181[14]
  i3180.dragSmoothSpeed = i3181[15]
  i3180.moveCurve = new pc.AnimationCurve( { keys_flow: i3181[16] } )
  return i3180
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i3182 = root || request.c( 'PlayerVisual' )
  var i3183 = data
  request.r(i3183[0], i3183[1], 0, i3182, 'playerSpriteRenderer')
  request.r(i3183[2], i3183[3], 0, i3182, 'fakeShadowRenderer')
  var i3185 = i3183[4]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 2) {
  request.r(i3185[i + 0], i3185[i + 1], 2, i3184, '')
  }
  i3182.levelSprite = i3184
  i3182.levelScaleMultipliers = i3183[5]
  i3182.maxPowerParScaleMultiplier = i3183[6]
  i3182.bounceYMultiplier = i3183[7]
  i3182.bounceDuration = i3183[8]
  i3182.scaleTransitionDuration = i3183[9]
  request.r(i3183[10], i3183[11], 0, i3182, 'visualAnimator')
  i3182.level4TriggerName = i3183[12]
  i3182.level4SpriteDelay = i3183[13]
  request.r(i3183[14], i3183[15], 0, i3182, 'maxPowerPar')
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3187 = data
  i3186.mass = i3187[0]
  i3186.drag = i3187[1]
  i3186.angularDrag = i3187[2]
  i3186.useGravity = !!i3187[3]
  i3186.isKinematic = !!i3187[4]
  i3186.constraints = i3187[5]
  i3186.maxAngularVelocity = i3187[6]
  i3186.collisionDetectionMode = i3187[7]
  i3186.interpolation = i3187[8]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'animatorController')
  request.r(i3189[2], i3189[3], 0, i3188, 'avatar')
  i3188.updateMode = i3189[4]
  i3188.hasTransformHierarchy = !!i3189[5]
  i3188.applyRootMotion = !!i3189[6]
  var i3191 = i3189[7]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 2) {
  request.r(i3191[i + 0], i3191[i + 1], 2, i3190, '')
  }
  i3188.humanBones = i3190
  i3188.enabled = !!i3189[8]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3195 = data
  i3194.aspect = i3195[0]
  i3194.orthographic = !!i3195[1]
  i3194.orthographicSize = i3195[2]
  i3194.backgroundColor = new pc.Color(i3195[3], i3195[4], i3195[5], i3195[6])
  i3194.nearClipPlane = i3195[7]
  i3194.farClipPlane = i3195[8]
  i3194.fieldOfView = i3195[9]
  i3194.depth = i3195[10]
  i3194.clearFlags = i3195[11]
  i3194.cullingMask = i3195[12]
  i3194.rect = i3195[13]
  request.r(i3195[14], i3195[15], 0, i3194, 'targetTexture')
  i3194.usePhysicalProperties = !!i3195[16]
  i3194.focalLength = i3195[17]
  i3194.sensorSize = new pc.Vec2( i3195[18], i3195[19] )
  i3194.lensShift = new pc.Vec2( i3195[20], i3195[21] )
  i3194.gateFit = i3195[22]
  i3194.commandBufferCount = i3195[23]
  i3194.cameraType = i3195[24]
  i3194.enabled = !!i3195[25]
  return i3194
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i3196 = root || request.c( 'MaterialUVScroller' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'targetMaterial')
  i3196.scrollSpeed = new pc.Vec2( i3197[2], i3197[3] )
  return i3196
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i3198 = root || request.c( 'ChoiceBoardPlacer' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'choiceBoardHolderprefab')
  request.r(i3199[2], i3199[3], 0, i3198, 'startPos')
  request.r(i3199[4], i3199[5], 0, i3198, 'endPos')
  request.r(i3199[6], i3199[7], 0, i3198, 'choiceBoardPairData')
  i3198.spawnCount = i3199[8]
  i3198.spawnGenericByNumber = !!i3199[9]
  i3198.shufflePairsOrder = !!i3199[10]
  i3198.shuffleLeftRight = !!i3199[11]
  i3198.spawnOnStart = !!i3199[12]
  return i3198
}

Deserializers["BossController"] = function (request, data, root) {
  var i3200 = root || request.c( 'BossController' )
  var i3201 = data
  request.r(i3201[0], i3201[1], 0, i3200, 'bossSpriteRenderer')
  request.r(i3201[2], i3201[3], 0, i3200, 'characterVisual')
  request.r(i3201[4], i3201[5], 0, i3200, 'fightingCloud')
  request.r(i3201[6], i3201[7], 0, i3200, 'resultObject')
  request.r(i3201[8], i3201[9], 0, i3200, 'resultSpriteRenderer')
  request.r(i3201[10], i3201[11], 0, i3200, 'winSprite')
  request.r(i3201[12], i3201[13], 0, i3200, 'lossSprite')
  request.r(i3201[14], i3201[15], 0, i3200, 'extraWinObject')
  request.r(i3201[16], i3201[17], 0, i3200, 'winPanel')
  request.r(i3201[18], i3201[19], 0, i3200, 'losePanel')
  var i3203 = i3201[20]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 2) {
  request.r(i3203[i + 0], i3203[i + 1], 2, i3202, '')
  }
  i3200.extraObjectsToHide = i3202
  i3200.fightingCloudFx = i3201[21]
  i3200.winPanelFx = i3201[22]
  i3200.losePanelFx = i3201[23]
  i3200.delayAfterLastBoard = i3201[24]
  i3200.fightDuration = i3201[25]
  i3200.showResultDuration = i3201[26]
  request.r(i3201[27], i3201[28], 0, i3200, 'currentPlayer')
  i3200.currentPlayerLevel = i3201[29]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3207 = data
  i3206.ambientIntensity = i3207[0]
  i3206.reflectionIntensity = i3207[1]
  i3206.ambientMode = i3207[2]
  i3206.ambientLight = new pc.Color(i3207[3], i3207[4], i3207[5], i3207[6])
  i3206.ambientSkyColor = new pc.Color(i3207[7], i3207[8], i3207[9], i3207[10])
  i3206.ambientGroundColor = new pc.Color(i3207[11], i3207[12], i3207[13], i3207[14])
  i3206.ambientEquatorColor = new pc.Color(i3207[15], i3207[16], i3207[17], i3207[18])
  i3206.fogColor = new pc.Color(i3207[19], i3207[20], i3207[21], i3207[22])
  i3206.fogEndDistance = i3207[23]
  i3206.fogStartDistance = i3207[24]
  i3206.fogDensity = i3207[25]
  i3206.fog = !!i3207[26]
  request.r(i3207[27], i3207[28], 0, i3206, 'skybox')
  i3206.fogMode = i3207[29]
  var i3209 = i3207[30]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3209[i + 0]) );
  }
  i3206.lightmaps = i3208
  i3206.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3207[31], i3206.lightProbes)
  i3206.lightmapsMode = i3207[32]
  i3206.mixedBakeMode = i3207[33]
  i3206.environmentLightingMode = i3207[34]
  i3206.ambientProbe = new pc.SphericalHarmonicsL2(i3207[35])
  i3206.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3207[36])
  i3206.useReferenceAmbientProbe = !!i3207[37]
  request.r(i3207[38], i3207[39], 0, i3206, 'customReflection')
  request.r(i3207[40], i3207[41], 0, i3206, 'defaultReflection')
  i3206.defaultReflectionMode = i3207[42]
  i3206.defaultReflectionResolution = i3207[43]
  i3206.sunLightObjectId = i3207[44]
  i3206.pixelLightCount = i3207[45]
  i3206.defaultReflectionHDR = !!i3207[46]
  i3206.hasLightDataAsset = !!i3207[47]
  i3206.hasManualGenerate = !!i3207[48]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3213 = data
  request.r(i3213[0], i3213[1], 0, i3212, 'lightmapColor')
  request.r(i3213[2], i3213[3], 0, i3212, 'lightmapDirection')
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3214 = root || new UnityEngine.LightProbes()
  var i3215 = data
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3223 = data
  var i3225 = i3223[0]
  var i3224 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3225[i + 0]));
  }
  i3222.ShaderCompilationErrors = i3224
  i3222.name = i3223[1]
  i3222.guid = i3223[2]
  var i3227 = i3223[3]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( i3227[i + 0] );
  }
  i3222.shaderDefinedKeywords = i3226
  var i3229 = i3223[4]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3229[i + 0]) );
  }
  i3222.passes = i3228
  var i3231 = i3223[5]
  var i3230 = []
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3231[i + 0]) );
  }
  i3222.usePasses = i3230
  var i3233 = i3223[6]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3233[i + 0]) );
  }
  i3222.defaultParameterValues = i3232
  request.r(i3223[7], i3223[8], 0, i3222, 'unityFallbackShader')
  i3222.readDepth = !!i3223[9]
  i3222.hasDepthOnlyPass = !!i3223[10]
  i3222.isCreatedByShaderGraph = !!i3223[11]
  i3222.disableBatching = !!i3223[12]
  i3222.compiled = !!i3223[13]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3237 = data
  i3236.shaderName = i3237[0]
  i3236.errorMessage = i3237[1]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3242 = root || new pc.UnityShaderPass()
  var i3243 = data
  i3242.id = i3243[0]
  i3242.subShaderIndex = i3243[1]
  i3242.name = i3243[2]
  i3242.passType = i3243[3]
  i3242.grabPassTextureName = i3243[4]
  i3242.usePass = !!i3243[5]
  i3242.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[6], i3242.zTest)
  i3242.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[7], i3242.zWrite)
  i3242.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[8], i3242.culling)
  i3242.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3243[9], i3242.blending)
  i3242.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3243[10], i3242.alphaBlending)
  i3242.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[11], i3242.colorWriteMask)
  i3242.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[12], i3242.offsetUnits)
  i3242.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[13], i3242.offsetFactor)
  i3242.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[14], i3242.stencilRef)
  i3242.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[15], i3242.stencilReadMask)
  i3242.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3243[16], i3242.stencilWriteMask)
  i3242.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3243[17], i3242.stencilOp)
  i3242.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3243[18], i3242.stencilOpFront)
  i3242.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3243[19], i3242.stencilOpBack)
  var i3245 = i3243[20]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3245[i + 0]) );
  }
  i3242.tags = i3244
  var i3247 = i3243[21]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( i3247[i + 0] );
  }
  i3242.passDefinedKeywords = i3246
  var i3249 = i3243[22]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3249[i + 0]) );
  }
  i3242.passDefinedKeywordGroups = i3248
  var i3251 = i3243[23]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3251[i + 0]) );
  }
  i3242.variants = i3250
  var i3253 = i3243[24]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3253[i + 0]) );
  }
  i3242.excludedVariants = i3252
  i3242.hasDepthReader = !!i3243[25]
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3255 = data
  i3254.val = i3255[0]
  i3254.name = i3255[1]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3257 = data
  i3256.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3257[0], i3256.src)
  i3256.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3257[1], i3256.dst)
  i3256.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3257[2], i3256.op)
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3259 = data
  i3258.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3259[0], i3258.pass)
  i3258.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3259[1], i3258.fail)
  i3258.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3259[2], i3258.zFail)
  i3258.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3259[3], i3258.comp)
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.value = i3263[1]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3267 = data
  var i3269 = i3267[0]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( i3269[i + 0] );
  }
  i3266.keywords = i3268
  i3266.hasDiscard = !!i3267[1]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3273 = data
  i3272.passId = i3273[0]
  i3272.subShaderIndex = i3273[1]
  var i3275 = i3273[2]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( i3275[i + 0] );
  }
  i3272.keywords = i3274
  i3272.vertexProgram = i3273[3]
  i3272.fragmentProgram = i3273[4]
  i3272.exportedForWebGl2 = !!i3273[5]
  i3272.readDepth = !!i3273[6]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3279 = data
  request.r(i3279[0], i3279[1], 0, i3278, 'shader')
  i3278.pass = i3279[2]
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3283 = data
  i3282.name = i3283[0]
  i3282.type = i3283[1]
  i3282.value = new pc.Vec4( i3283[2], i3283[3], i3283[4], i3283[5] )
  i3282.textureValue = i3283[6]
  i3282.shaderPropertyFlag = i3283[7]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3285 = data
  i3284.name = i3285[0]
  request.r(i3285[1], i3285[2], 0, i3284, 'texture')
  i3284.aabb = i3285[3]
  i3284.vertices = i3285[4]
  i3284.triangles = i3285[5]
  i3284.textureRect = UnityEngine.Rect.MinMaxRect(i3285[6], i3285[7], i3285[8], i3285[9])
  i3284.packedRect = UnityEngine.Rect.MinMaxRect(i3285[10], i3285[11], i3285[12], i3285[13])
  i3284.border = new pc.Vec4( i3285[14], i3285[15], i3285[16], i3285[17] )
  i3284.transparency = i3285[18]
  i3284.bounds = i3285[19]
  i3284.pixelsPerUnit = i3285[20]
  i3284.textureWidth = i3285[21]
  i3284.textureHeight = i3285[22]
  i3284.nativeSize = new pc.Vec2( i3285[23], i3285[24] )
  i3284.pivot = new pc.Vec2( i3285[25], i3285[26] )
  i3284.textureRectOffset = new pc.Vec2( i3285[27], i3285[28] )
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3287 = data
  i3286.name = i3287[0]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3289 = data
  i3288.name = i3289[0]
  i3288.wrapMode = i3289[1]
  i3288.isLooping = !!i3289[2]
  i3288.length = i3289[3]
  var i3291 = i3289[4]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3291[i + 0]) );
  }
  i3288.curves = i3290
  var i3293 = i3289[5]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3293[i + 0]) );
  }
  i3288.events = i3292
  i3288.halfPrecision = !!i3289[6]
  i3288._frameRate = i3289[7]
  i3288.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3289[8], i3288.localBounds)
  i3288.hasMuscleCurves = !!i3289[9]
  var i3295 = i3289[10]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( i3295[i + 0] );
  }
  i3288.clipMuscleConstant = i3294
  i3288.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3289[11], i3288.clipBindingConstant)
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3299 = data
  i3298.path = i3299[0]
  i3298.hash = i3299[1]
  i3298.componentType = i3299[2]
  i3298.property = i3299[3]
  i3298.keys = i3299[4]
  var i3301 = i3299[5]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3301[i + 0]) );
  }
  i3298.objectReferenceKeys = i3300
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3305 = data
  i3304.time = i3305[0]
  request.r(i3305[1], i3305[2], 0, i3304, 'value')
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3309 = data
  i3308.functionName = i3309[0]
  i3308.floatParameter = i3309[1]
  i3308.intParameter = i3309[2]
  i3308.stringParameter = i3309[3]
  request.r(i3309[4], i3309[5], 0, i3308, 'objectReferenceParameter')
  i3308.time = i3309[6]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3311 = data
  i3310.center = new pc.Vec3( i3311[0], i3311[1], i3311[2] )
  i3310.extends = new pc.Vec3( i3311[3], i3311[4], i3311[5] )
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3315 = data
  var i3317 = i3315[0]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( i3317[i + 0] );
  }
  i3314.genericBindings = i3316
  var i3319 = i3315[1]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( i3319[i + 0] );
  }
  i3314.pptrCurveMapping = i3318
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3321 = data
  i3320.name = i3321[0]
  var i3323 = i3321[1]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3323[i + 0]) );
  }
  i3320.layers = i3322
  var i3325 = i3321[2]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3325[i + 0]) );
  }
  i3320.parameters = i3324
  i3320.animationClips = i3321[3]
  i3320.avatarUnsupported = i3321[4]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3329 = data
  i3328.name = i3329[0]
  i3328.defaultWeight = i3329[1]
  i3328.blendingMode = i3329[2]
  i3328.avatarMask = i3329[3]
  i3328.syncedLayerIndex = i3329[4]
  i3328.syncedLayerAffectsTiming = !!i3329[5]
  i3328.syncedLayers = i3329[6]
  i3328.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3329[7], i3328.stateMachine)
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3331 = data
  i3330.id = i3331[0]
  i3330.name = i3331[1]
  i3330.path = i3331[2]
  var i3333 = i3331[3]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3333[i + 0]) );
  }
  i3330.states = i3332
  var i3335 = i3331[4]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3335[i + 0]) );
  }
  i3330.machines = i3334
  var i3337 = i3331[5]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3337[i + 0]) );
  }
  i3330.entryStateTransitions = i3336
  var i3339 = i3331[6]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3339[i + 0]) );
  }
  i3330.exitStateTransitions = i3338
  var i3341 = i3331[7]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3341[i + 0]) );
  }
  i3330.anyStateTransitions = i3340
  i3330.defaultStateId = i3331[8]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3345 = data
  i3344.id = i3345[0]
  i3344.name = i3345[1]
  i3344.cycleOffset = i3345[2]
  i3344.cycleOffsetParameter = i3345[3]
  i3344.cycleOffsetParameterActive = !!i3345[4]
  i3344.mirror = !!i3345[5]
  i3344.mirrorParameter = i3345[6]
  i3344.mirrorParameterActive = !!i3345[7]
  i3344.motionId = i3345[8]
  i3344.nameHash = i3345[9]
  i3344.fullPathHash = i3345[10]
  i3344.speed = i3345[11]
  i3344.speedParameter = i3345[12]
  i3344.speedParameterActive = !!i3345[13]
  i3344.tag = i3345[14]
  i3344.tagHash = i3345[15]
  i3344.writeDefaultValues = !!i3345[16]
  var i3347 = i3345[17]
  var i3346 = []
  for(var i = 0; i < i3347.length; i += 2) {
  request.r(i3347[i + 0], i3347[i + 1], 2, i3346, '')
  }
  i3344.behaviours = i3346
  var i3349 = i3345[18]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3349[i + 0]) );
  }
  i3344.transitions = i3348
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3355 = data
  i3354.fullPath = i3355[0]
  i3354.canTransitionToSelf = !!i3355[1]
  i3354.duration = i3355[2]
  i3354.exitTime = i3355[3]
  i3354.hasExitTime = !!i3355[4]
  i3354.hasFixedDuration = !!i3355[5]
  i3354.interruptionSource = i3355[6]
  i3354.offset = i3355[7]
  i3354.orderedInterruption = !!i3355[8]
  i3354.destinationStateId = i3355[9]
  i3354.isExit = !!i3355[10]
  i3354.mute = !!i3355[11]
  i3354.solo = !!i3355[12]
  var i3357 = i3355[13]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3357[i + 0]) );
  }
  i3354.conditions = i3356
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3363 = data
  i3362.destinationStateId = i3363[0]
  i3362.isExit = !!i3363[1]
  i3362.mute = !!i3363[2]
  i3362.solo = !!i3363[3]
  var i3365 = i3363[4]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 1) {
    i3364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3365[i + 0]) );
  }
  i3362.conditions = i3364
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3369 = data
  i3368.mode = i3369[0]
  i3368.parameter = i3369[1]
  i3368.threshold = i3369[2]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3373 = data
  i3372.defaultBool = !!i3373[0]
  i3372.defaultFloat = i3373[1]
  i3372.defaultInt = i3373[2]
  i3372.name = i3373[3]
  i3372.nameHash = i3373[4]
  i3372.type = i3373[5]
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3375 = data
  i3374.name = i3375[0]
  i3374.bytes64 = i3375[1]
  i3374.data = i3375[2]
  return i3374
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i3376 = root || request.c( 'ChoiceBoardPairData' )
  var i3377 = data
  var i3379 = i3377[0]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('ChoicePairData', i3379[i + 0]) );
  }
  i3376.ChoicePairDatas = i3378
  return i3376
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i3382 = root || request.c( 'ChoicePairData' )
  var i3383 = data
  i3382.choiceData1 = request.d('ChoiceData', i3383[0], i3382.choiceData1)
  i3382.choiceData2 = request.d('ChoiceData', i3383[1], i3382.choiceData2)
  return i3382
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i3384 = root || request.c( 'ChoiceData' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'VisualSprite')
  request.r(i3385[2], i3385[3], 0, i3384, 'BorderSprite')
  i3384.ChoiceType = i3385[4]
  return i3384
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3386 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3387 = data
  i3386.useSafeMode = !!i3387[0]
  i3386.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3387[1], i3386.safeModeOptions)
  i3386.timeScale = i3387[2]
  i3386.unscaledTimeScale = i3387[3]
  i3386.useSmoothDeltaTime = !!i3387[4]
  i3386.maxSmoothUnscaledTime = i3387[5]
  i3386.rewindCallbackMode = i3387[6]
  i3386.showUnityEditorReport = !!i3387[7]
  i3386.logBehaviour = i3387[8]
  i3386.drawGizmos = !!i3387[9]
  i3386.defaultRecyclable = !!i3387[10]
  i3386.defaultAutoPlay = i3387[11]
  i3386.defaultUpdateType = i3387[12]
  i3386.defaultTimeScaleIndependent = !!i3387[13]
  i3386.defaultEaseType = i3387[14]
  i3386.defaultEaseOvershootOrAmplitude = i3387[15]
  i3386.defaultEasePeriod = i3387[16]
  i3386.defaultAutoKill = !!i3387[17]
  i3386.defaultLoopType = i3387[18]
  i3386.debugMode = !!i3387[19]
  i3386.debugStoreTargetId = !!i3387[20]
  i3386.showPreviewPanel = !!i3387[21]
  i3386.storeSettingsLocation = i3387[22]
  i3386.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3387[23], i3386.modules)
  i3386.createASMDEF = !!i3387[24]
  i3386.showPlayingTweens = !!i3387[25]
  i3386.showPausedTweens = !!i3387[26]
  return i3386
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3388 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3389 = data
  i3388.logBehaviour = i3389[0]
  i3388.nestedTweenFailureBehaviour = i3389[1]
  return i3388
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3390 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3391 = data
  i3390.showPanel = !!i3391[0]
  i3390.audioEnabled = !!i3391[1]
  i3390.physicsEnabled = !!i3391[2]
  i3390.physics2DEnabled = !!i3391[3]
  i3390.spriteEnabled = !!i3391[4]
  i3390.uiEnabled = !!i3391[5]
  i3390.uiToolkitEnabled = !!i3391[6]
  i3390.textMeshProEnabled = !!i3391[7]
  i3390.tk2DEnabled = !!i3391[8]
  i3390.deAudioEnabled = !!i3391[9]
  i3390.deUnityExtendedEnabled = !!i3391[10]
  i3390.epoOutlineEnabled = !!i3391[11]
  return i3390
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3392 = root || request.c( 'TMPro.TMP_Settings' )
  var i3393 = data
  i3392.assetVersion = i3393[0]
  i3392.m_TextWrappingMode = i3393[1]
  i3392.m_enableKerning = !!i3393[2]
  var i3395 = i3393[3]
  var i3394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.add(i3395[i + 0]);
  }
  i3392.m_ActiveFontFeatures = i3394
  i3392.m_enableExtraPadding = !!i3393[4]
  i3392.m_enableTintAllSprites = !!i3393[5]
  i3392.m_enableParseEscapeCharacters = !!i3393[6]
  i3392.m_EnableRaycastTarget = !!i3393[7]
  i3392.m_GetFontFeaturesAtRuntime = !!i3393[8]
  i3392.m_missingGlyphCharacter = i3393[9]
  i3392.m_ClearDynamicDataOnBuild = !!i3393[10]
  i3392.m_warningsDisabled = !!i3393[11]
  request.r(i3393[12], i3393[13], 0, i3392, 'm_defaultFontAsset')
  i3392.m_defaultFontAssetPath = i3393[14]
  i3392.m_defaultFontSize = i3393[15]
  i3392.m_defaultAutoSizeMinRatio = i3393[16]
  i3392.m_defaultAutoSizeMaxRatio = i3393[17]
  i3392.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3393[18], i3393[19] )
  i3392.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3393[20], i3393[21] )
  i3392.m_autoSizeTextContainer = !!i3393[22]
  i3392.m_IsTextObjectScaleStatic = !!i3393[23]
  var i3397 = i3393[24]
  var i3396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 1, i3396, '')
  }
  i3392.m_fallbackFontAssets = i3396
  i3392.m_matchMaterialPreset = !!i3393[25]
  i3392.m_HideSubTextObjects = !!i3393[26]
  request.r(i3393[27], i3393[28], 0, i3392, 'm_defaultSpriteAsset')
  i3392.m_defaultSpriteAssetPath = i3393[29]
  i3392.m_enableEmojiSupport = !!i3393[30]
  i3392.m_MissingCharacterSpriteUnicode = i3393[31]
  var i3399 = i3393[32]
  var i3398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3399.length; i += 2) {
  request.r(i3399[i + 0], i3399[i + 1], 1, i3398, '')
  }
  i3392.m_EmojiFallbackTextAssets = i3398
  i3392.m_defaultColorGradientPresetsPath = i3393[33]
  request.r(i3393[34], i3393[35], 0, i3392, 'm_defaultStyleSheet')
  i3392.m_StyleSheetsResourcePath = i3393[36]
  request.r(i3393[37], i3393[38], 0, i3392, 'm_leadingCharacters')
  request.r(i3393[39], i3393[40], 0, i3392, 'm_followingCharacters')
  i3392.m_UseModernHangulLineBreakingRules = !!i3393[41]
  return i3392
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3406 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'spriteSheet')
  var i3409 = i3407[2]
  var i3408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.add(request.d('TMPro.TMP_Sprite', i3409[i + 0]));
  }
  i3406.spriteInfoList = i3408
  var i3411 = i3407[3]
  var i3410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3411.length; i += 2) {
  request.r(i3411[i + 0], i3411[i + 1], 1, i3410, '')
  }
  i3406.fallbackSpriteAssets = i3410
  var i3413 = i3407[4]
  var i3412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.add(request.d('TMPro.TMP_SpriteCharacter', i3413[i + 0]));
  }
  i3406.m_SpriteCharacterTable = i3412
  var i3415 = i3407[5]
  var i3414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.add(request.d('TMPro.TMP_SpriteGlyph', i3415[i + 0]));
  }
  i3406.m_GlyphTable = i3414
  i3406.m_Version = i3407[6]
  i3406.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3407[7], i3406.m_FaceInfo)
  request.r(i3407[8], i3407[9], 0, i3406, 'm_Material')
  return i3406
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3418 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3419 = data
  i3418.name = i3419[0]
  i3418.hashCode = i3419[1]
  i3418.unicode = i3419[2]
  i3418.pivot = new pc.Vec2( i3419[3], i3419[4] )
  request.r(i3419[5], i3419[6], 0, i3418, 'sprite')
  i3418.id = i3419[7]
  i3418.x = i3419[8]
  i3418.y = i3419[9]
  i3418.width = i3419[10]
  i3418.height = i3419[11]
  i3418.xOffset = i3419[12]
  i3418.yOffset = i3419[13]
  i3418.xAdvance = i3419[14]
  i3418.scale = i3419[15]
  return i3418
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3424 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3425 = data
  i3424.m_Name = i3425[0]
  i3424.m_ElementType = i3425[1]
  i3424.m_Unicode = i3425[2]
  i3424.m_GlyphIndex = i3425[3]
  i3424.m_Scale = i3425[4]
  return i3424
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3428 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3429 = data
  request.r(i3429[0], i3429[1], 0, i3428, 'sprite')
  i3428.m_Index = i3429[2]
  i3428.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3429[3], i3428.m_Metrics)
  i3428.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3429[4], i3428.m_GlyphRect)
  i3428.m_Scale = i3429[5]
  i3428.m_AtlasIndex = i3429[6]
  i3428.m_ClassDefinitionType = i3429[7]
  return i3428
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3431 = data
  i3430.m_Width = i3431[0]
  i3430.m_Height = i3431[1]
  i3430.m_HorizontalBearingX = i3431[2]
  i3430.m_HorizontalBearingY = i3431[3]
  i3430.m_HorizontalAdvance = i3431[4]
  return i3430
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3432 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3433 = data
  i3432.m_X = i3433[0]
  i3432.m_Y = i3433[1]
  i3432.m_Width = i3433[2]
  i3432.m_Height = i3433[3]
  return i3432
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3434 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3435 = data
  i3434.m_FaceIndex = i3435[0]
  i3434.m_FamilyName = i3435[1]
  i3434.m_StyleName = i3435[2]
  i3434.m_PointSize = i3435[3]
  i3434.m_Scale = i3435[4]
  i3434.m_UnitsPerEM = i3435[5]
  i3434.m_LineHeight = i3435[6]
  i3434.m_AscentLine = i3435[7]
  i3434.m_CapLine = i3435[8]
  i3434.m_MeanLine = i3435[9]
  i3434.m_Baseline = i3435[10]
  i3434.m_DescentLine = i3435[11]
  i3434.m_SuperscriptOffset = i3435[12]
  i3434.m_SuperscriptSize = i3435[13]
  i3434.m_SubscriptOffset = i3435[14]
  i3434.m_SubscriptSize = i3435[15]
  i3434.m_UnderlineOffset = i3435[16]
  i3434.m_UnderlineThickness = i3435[17]
  i3434.m_StrikethroughOffset = i3435[18]
  i3434.m_StrikethroughThickness = i3435[19]
  i3434.m_TabWidth = i3435[20]
  return i3434
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3436 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3437 = data
  var i3439 = i3437[0]
  var i3438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.add(request.d('TMPro.TMP_Style', i3439[i + 0]));
  }
  i3436.m_StyleList = i3438
  return i3436
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3442 = root || request.c( 'TMPro.TMP_Style' )
  var i3443 = data
  i3442.m_Name = i3443[0]
  i3442.m_HashCode = i3443[1]
  i3442.m_OpeningDefinition = i3443[2]
  i3442.m_ClosingDefinition = i3443[3]
  i3442.m_OpeningTagArray = i3443[4]
  i3442.m_ClosingTagArray = i3443[5]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3445 = data
  var i3447 = i3445[0]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3447[i + 0]) );
  }
  i3444.files = i3446
  i3444.componentToPrefabIds = i3445[1]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3451 = data
  i3450.path = i3451[0]
  request.r(i3451[1], i3451[2], 0, i3450, 'unityObject')
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3453 = data
  var i3455 = i3453[0]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3455[i + 0]) );
  }
  i3452.scriptsExecutionOrder = i3454
  var i3457 = i3453[1]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3457[i + 0]) );
  }
  i3452.sortingLayers = i3456
  var i3459 = i3453[2]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3459[i + 0]) );
  }
  i3452.cullingLayers = i3458
  i3452.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3453[3], i3452.timeSettings)
  i3452.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3453[4], i3452.physicsSettings)
  i3452.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3453[5], i3452.physics2DSettings)
  i3452.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3453[6], i3452.qualitySettings)
  i3452.enableRealtimeShadows = !!i3453[7]
  i3452.enableAutoInstancing = !!i3453[8]
  i3452.enableStaticBatching = !!i3453[9]
  i3452.enableDynamicBatching = !!i3453[10]
  i3452.lightmapEncodingQuality = i3453[11]
  i3452.desiredColorSpace = i3453[12]
  var i3461 = i3453[13]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( i3461[i + 0] );
  }
  i3452.allTags = i3460
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3465 = data
  i3464.name = i3465[0]
  i3464.value = i3465[1]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3469 = data
  i3468.id = i3469[0]
  i3468.name = i3469[1]
  i3468.value = i3469[2]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3473 = data
  i3472.id = i3473[0]
  i3472.name = i3473[1]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3475 = data
  i3474.fixedDeltaTime = i3475[0]
  i3474.maximumDeltaTime = i3475[1]
  i3474.timeScale = i3475[2]
  i3474.maximumParticleTimestep = i3475[3]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3477 = data
  i3476.gravity = new pc.Vec3( i3477[0], i3477[1], i3477[2] )
  i3476.defaultSolverIterations = i3477[3]
  i3476.bounceThreshold = i3477[4]
  i3476.autoSyncTransforms = !!i3477[5]
  i3476.autoSimulation = !!i3477[6]
  var i3479 = i3477[7]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3479[i + 0]) );
  }
  i3476.collisionMatrix = i3478
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3483 = data
  i3482.enabled = !!i3483[0]
  i3482.layerId = i3483[1]
  i3482.otherLayerId = i3483[2]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'material')
  i3484.gravity = new pc.Vec2( i3485[2], i3485[3] )
  i3484.positionIterations = i3485[4]
  i3484.velocityIterations = i3485[5]
  i3484.velocityThreshold = i3485[6]
  i3484.maxLinearCorrection = i3485[7]
  i3484.maxAngularCorrection = i3485[8]
  i3484.maxTranslationSpeed = i3485[9]
  i3484.maxRotationSpeed = i3485[10]
  i3484.baumgarteScale = i3485[11]
  i3484.baumgarteTOIScale = i3485[12]
  i3484.timeToSleep = i3485[13]
  i3484.linearSleepTolerance = i3485[14]
  i3484.angularSleepTolerance = i3485[15]
  i3484.defaultContactOffset = i3485[16]
  i3484.autoSimulation = !!i3485[17]
  i3484.queriesHitTriggers = !!i3485[18]
  i3484.queriesStartInColliders = !!i3485[19]
  i3484.callbacksOnDisable = !!i3485[20]
  i3484.reuseCollisionCallbacks = !!i3485[21]
  i3484.autoSyncTransforms = !!i3485[22]
  var i3487 = i3485[23]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3487[i + 0]) );
  }
  i3484.collisionMatrix = i3486
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3491 = data
  i3490.enabled = !!i3491[0]
  i3490.layerId = i3491[1]
  i3490.otherLayerId = i3491[2]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3493 = data
  var i3495 = i3493[0]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3495[i + 0]) );
  }
  i3492.qualityLevels = i3494
  var i3497 = i3493[1]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( i3497[i + 0] );
  }
  i3492.names = i3496
  i3492.shadows = i3493[2]
  i3492.anisotropicFiltering = i3493[3]
  i3492.antiAliasing = i3493[4]
  i3492.lodBias = i3493[5]
  i3492.shadowCascades = i3493[6]
  i3492.shadowDistance = i3493[7]
  i3492.shadowmaskMode = i3493[8]
  i3492.shadowProjection = i3493[9]
  i3492.shadowResolution = i3493[10]
  i3492.softParticles = !!i3493[11]
  i3492.softVegetation = !!i3493[12]
  i3492.activeColorSpace = i3493[13]
  i3492.desiredColorSpace = i3493[14]
  i3492.masterTextureLimit = i3493[15]
  i3492.maxQueuedFrames = i3493[16]
  i3492.particleRaycastBudget = i3493[17]
  i3492.pixelLightCount = i3493[18]
  i3492.realtimeReflectionProbes = !!i3493[19]
  i3492.shadowCascade2Split = i3493[20]
  i3492.shadowCascade4Split = new pc.Vec3( i3493[21], i3493[22], i3493[23] )
  i3492.streamingMipmapsActive = !!i3493[24]
  i3492.vSyncCount = i3493[25]
  i3492.asyncUploadBufferSize = i3493[26]
  i3492.asyncUploadTimeSlice = i3493[27]
  i3492.billboardsFaceCameraPosition = !!i3493[28]
  i3492.shadowNearPlaneOffset = i3493[29]
  i3492.streamingMipmapsMemoryBudget = i3493[30]
  i3492.maximumLODLevel = i3493[31]
  i3492.streamingMipmapsAddAllCameras = !!i3493[32]
  i3492.streamingMipmapsMaxLevelReduction = i3493[33]
  i3492.streamingMipmapsRenderersPerFrame = i3493[34]
  i3492.resolutionScalingFixedDPIFactor = i3493[35]
  i3492.streamingMipmapsMaxFileIORequests = i3493[36]
  i3492.currentQualityLevel = i3493[37]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3503 = data
  i3502.weight = i3503[0]
  i3502.vertices = i3503[1]
  i3502.normals = i3503[2]
  i3502.tangents = i3503[3]
  return i3502
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[50],"72":[48],"73":[48],"74":[48],"75":[48],"76":[48],"77":[48],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[50],"93":[37],"94":[95],"96":[95],"1":[0],"97":[34],"98":[1],"99":[0],"100":[37,0],"101":[0,5],"102":[0],"103":[5,0],"104":[37],"105":[5,0],"106":[0],"107":[108],"109":[108],"110":[108],"111":[0],"112":[0],"4":[1],"6":[5,0],"113":[0],"3":[1],"114":[0],"115":[0],"8":[0],"116":[0],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"28":[5,0],"122":[0],"123":[0],"124":[0],"11":[0],"125":[5,0],"126":[0],"127":[34],"128":[34],"35":[34],"129":[34],"130":[50],"131":[50]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Mesh","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.Light","UICheckBoxHolder","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","ChoiceBoardPlacer","PlayerVisual","UnityEngine.Animator","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_V13";

Deserializers.lunaAppID = "40548";

Deserializers.projectId = "605a7f485ee7a504abb4a2ddde992494";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1741";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5147";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLY-MiniSoccer3D";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "334285b6-348d-4cc2-9437-1161606c1c78";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

