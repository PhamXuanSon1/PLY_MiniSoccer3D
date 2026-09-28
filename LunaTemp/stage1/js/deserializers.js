var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.JointSpring' )
  var i2959 = data
  i2958.spring = i2959[0]
  i2958.damper = i2959[1]
  i2958.targetPosition = i2959[2]
  return i2958
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.JointMotor' )
  var i2961 = data
  i2960.m_TargetVelocity = i2961[0]
  i2960.m_Force = i2961[1]
  i2960.m_FreeSpin = i2961[2]
  return i2960
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.JointLimits' )
  var i2963 = data
  i2962.m_Min = i2963[0]
  i2962.m_Max = i2963[1]
  i2962.m_Bounciness = i2963[2]
  i2962.m_BounceMinVelocity = i2963[3]
  i2962.m_ContactDistance = i2963[4]
  i2962.minBounce = i2963[5]
  i2962.maxBounce = i2963[6]
  return i2962
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.JointDrive' )
  var i2965 = data
  i2964.m_PositionSpring = i2965[0]
  i2964.m_PositionDamper = i2965[1]
  i2964.m_MaximumForce = i2965[2]
  i2964.m_UseAcceleration = i2965[3]
  return i2964
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2967 = data
  i2966.m_Spring = i2967[0]
  i2966.m_Damper = i2967[1]
  return i2966
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2968 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2969 = data
  i2968.m_Limit = i2969[0]
  i2968.m_Bounciness = i2969[1]
  i2968.m_ContactDistance = i2969[2]
  return i2968
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2971 = data
  i2970.m_ExtremumSlip = i2971[0]
  i2970.m_ExtremumValue = i2971[1]
  i2970.m_AsymptoteSlip = i2971[2]
  i2970.m_AsymptoteValue = i2971[3]
  i2970.m_Stiffness = i2971[4]
  return i2970
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2973 = data
  i2972.m_LowerAngle = i2973[0]
  i2972.m_UpperAngle = i2973[1]
  return i2972
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2975 = data
  i2974.m_MotorSpeed = i2975[0]
  i2974.m_MaximumMotorTorque = i2975[1]
  return i2974
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2977 = data
  i2976.m_DampingRatio = i2977[0]
  i2976.m_Frequency = i2977[1]
  i2976.m_Angle = i2977[2]
  return i2976
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2978 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2979 = data
  i2978.m_LowerTranslation = i2979[0]
  i2978.m_UpperTranslation = i2979[1]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2981 = data
  i2980.name = i2981[0]
  i2980.halfPrecision = !!i2981[1]
  i2980.useSimplification = !!i2981[2]
  i2980.useUInt32IndexFormat = !!i2981[3]
  i2980.vertexCount = i2981[4]
  i2980.aabb = i2981[5]
  var i2983 = i2981[6]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( !!i2983[i + 0] );
  }
  i2980.streams = i2982
  i2980.vertices = i2981[7]
  var i2985 = i2981[8]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2985[i + 0]) );
  }
  i2980.subMeshes = i2984
  var i2987 = i2981[9]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 16) {
    i2986.push( new pc.Mat4().setData(i2987[i + 0], i2987[i + 1], i2987[i + 2], i2987[i + 3],  i2987[i + 4], i2987[i + 5], i2987[i + 6], i2987[i + 7],  i2987[i + 8], i2987[i + 9], i2987[i + 10], i2987[i + 11],  i2987[i + 12], i2987[i + 13], i2987[i + 14], i2987[i + 15]) );
  }
  i2980.bindposes = i2986
  var i2989 = i2981[10]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2989[i + 0]) );
  }
  i2980.blendShapes = i2988
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2995 = data
  i2994.triangles = i2995[0]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3001 = data
  i3000.name = i3001[0]
  var i3003 = i3001[1]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3003[i + 0]) );
  }
  i3000.frames = i3002
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3004 = root || new pc.UnityMaterial()
  var i3005 = data
  i3004.name = i3005[0]
  request.r(i3005[1], i3005[2], 0, i3004, 'shader')
  i3004.renderQueue = i3005[3]
  i3004.enableInstancing = !!i3005[4]
  var i3007 = i3005[5]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3007[i + 0]) );
  }
  i3004.floatParameters = i3006
  var i3009 = i3005[6]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3009[i + 0]) );
  }
  i3004.colorParameters = i3008
  var i3011 = i3005[7]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3011[i + 0]) );
  }
  i3004.vectorParameters = i3010
  var i3013 = i3005[8]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3013[i + 0]) );
  }
  i3004.textureParameters = i3012
  var i3015 = i3005[9]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3015[i + 0]) );
  }
  i3004.materialFlags = i3014
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3019 = data
  i3018.name = i3019[0]
  i3018.value = i3019[1]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3023 = data
  i3022.name = i3023[0]
  i3022.value = new pc.Color(i3023[1], i3023[2], i3023[3], i3023[4])
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3027 = data
  i3026.name = i3027[0]
  i3026.value = new pc.Vec4( i3027[1], i3027[2], i3027[3], i3027[4] )
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3031 = data
  i3030.name = i3031[0]
  request.r(i3031[1], i3031[2], 0, i3030, 'value')
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3035 = data
  i3034.name = i3035[0]
  i3034.enabled = !!i3035[1]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3037 = data
  i3036.name = i3037[0]
  i3036.width = i3037[1]
  i3036.height = i3037[2]
  i3036.mipmapCount = i3037[3]
  i3036.anisoLevel = i3037[4]
  i3036.filterMode = i3037[5]
  i3036.hdr = !!i3037[6]
  i3036.format = i3037[7]
  i3036.wrapMode = i3037[8]
  i3036.alphaIsTransparency = !!i3037[9]
  i3036.alphaSource = i3037[10]
  i3036.graphicsFormat = i3037[11]
  i3036.sRGBTexture = !!i3037[12]
  i3036.desiredColorSpace = i3037[13]
  i3036.wrapU = i3037[14]
  i3036.wrapV = i3037[15]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3039 = data
  i3038.position = new pc.Vec3( i3039[0], i3039[1], i3039[2] )
  i3038.scale = new pc.Vec3( i3039[3], i3039[4], i3039[5] )
  i3038.rotation = new pc.Quat(i3039[6], i3039[7], i3039[8], i3039[9])
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3041 = data
  i3040.center = new pc.Vec3( i3041[0], i3041[1], i3041[2] )
  i3040.size = new pc.Vec3( i3041[3], i3041[4], i3041[5] )
  i3040.enabled = !!i3041[6]
  i3040.isTrigger = !!i3041[7]
  request.r(i3041[8], i3041[9], 0, i3040, 'material')
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3043 = data
  i3042.color = new pc.Color(i3043[0], i3043[1], i3043[2], i3043[3])
  request.r(i3043[4], i3043[5], 0, i3042, 'sprite')
  i3042.flipX = !!i3043[6]
  i3042.flipY = !!i3043[7]
  i3042.drawMode = i3043[8]
  i3042.size = new pc.Vec2( i3043[9], i3043[10] )
  i3042.tileMode = i3043[11]
  i3042.adaptiveModeThreshold = i3043[12]
  i3042.maskInteraction = i3043[13]
  i3042.spriteSortPoint = i3043[14]
  i3042.enabled = !!i3043[15]
  request.r(i3043[16], i3043[17], 0, i3042, 'sharedMaterial')
  var i3045 = i3043[18]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 2) {
  request.r(i3045[i + 0], i3045[i + 1], 2, i3044, '')
  }
  i3042.sharedMaterials = i3044
  i3042.receiveShadows = !!i3043[19]
  i3042.shadowCastingMode = i3043[20]
  i3042.sortingLayerID = i3043[21]
  i3042.sortingOrder = i3043[22]
  i3042.lightmapIndex = i3043[23]
  i3042.lightmapSceneIndex = i3043[24]
  i3042.lightmapScaleOffset = new pc.Vec4( i3043[25], i3043[26], i3043[27], i3043[28] )
  i3042.lightProbeUsage = i3043[29]
  i3042.reflectionProbeUsage = i3043[30]
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3049 = data
  i3048.name = i3049[0]
  i3048.tagId = i3049[1]
  i3048.enabled = !!i3049[2]
  i3048.isStatic = !!i3049[3]
  i3048.layer = i3049[4]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3053 = data
  i3052.weight = i3053[0]
  i3052.vertices = i3053[1]
  i3052.normals = i3053[2]
  i3052.tangents = i3053[3]
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3055 = data
  i3054.pivot = new pc.Vec2( i3055[0], i3055[1] )
  i3054.anchorMin = new pc.Vec2( i3055[2], i3055[3] )
  i3054.anchorMax = new pc.Vec2( i3055[4], i3055[5] )
  i3054.sizeDelta = new pc.Vec2( i3055[6], i3055[7] )
  i3054.anchoredPosition3D = new pc.Vec3( i3055[8], i3055[9], i3055[10] )
  i3054.rotation = new pc.Quat(i3055[11], i3055[12], i3055[13], i3055[14])
  i3054.scale = new pc.Vec3( i3055[15], i3055[16], i3055[17] )
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3057 = data
  i3056.planeDistance = i3057[0]
  i3056.referencePixelsPerUnit = i3057[1]
  i3056.isFallbackOverlay = !!i3057[2]
  i3056.renderMode = i3057[3]
  i3056.renderOrder = i3057[4]
  i3056.sortingLayerName = i3057[5]
  i3056.sortingOrder = i3057[6]
  i3056.scaleFactor = i3057[7]
  request.r(i3057[8], i3057[9], 0, i3056, 'worldCamera')
  i3056.overrideSorting = !!i3057[10]
  i3056.pixelPerfect = !!i3057[11]
  i3056.targetDisplay = i3057[12]
  i3056.overridePixelPerfect = !!i3057[13]
  i3056.enabled = !!i3057[14]
  return i3056
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3059 = data
  i3058.m_UiScaleMode = i3059[0]
  i3058.m_ReferencePixelsPerUnit = i3059[1]
  i3058.m_ScaleFactor = i3059[2]
  i3058.m_ReferenceResolution = new pc.Vec2( i3059[3], i3059[4] )
  i3058.m_ScreenMatchMode = i3059[5]
  i3058.m_MatchWidthOrHeight = i3059[6]
  i3058.m_PhysicalUnit = i3059[7]
  i3058.m_FallbackScreenDPI = i3059[8]
  i3058.m_DefaultSpriteDPI = i3059[9]
  i3058.m_DynamicPixelsPerUnit = i3059[10]
  i3058.m_PresetInfoIsWorld = !!i3059[11]
  return i3058
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3060 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3061 = data
  i3060.m_IgnoreReversedGraphics = !!i3061[0]
  i3060.m_BlockingObjects = i3061[1]
  i3060.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3061[2] )
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3063 = data
  i3062.cullTransparentMesh = !!i3063[0]
  return i3062
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.UI.Image' )
  var i3065 = data
  request.r(i3065[0], i3065[1], 0, i3064, 'm_Sprite')
  i3064.m_Type = i3065[2]
  i3064.m_PreserveAspect = !!i3065[3]
  i3064.m_FillCenter = !!i3065[4]
  i3064.m_FillMethod = i3065[5]
  i3064.m_FillAmount = i3065[6]
  i3064.m_FillClockwise = !!i3065[7]
  i3064.m_FillOrigin = i3065[8]
  i3064.m_UseSpriteMesh = !!i3065[9]
  i3064.m_PixelsPerUnitMultiplier = i3065[10]
  request.r(i3065[11], i3065[12], 0, i3064, 'm_Material')
  i3064.m_Maskable = !!i3065[13]
  i3064.m_Color = new pc.Color(i3065[14], i3065[15], i3065[16], i3065[17])
  i3064.m_RaycastTarget = !!i3065[18]
  i3064.m_RaycastPadding = new pc.Vec4( i3065[19], i3065[20], i3065[21], i3065[22] )
  return i3064
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3066 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3067 = data
  request.r(i3067[0], i3067[1], 0, i3066, 'm_Texture')
  i3066.m_UVRect = UnityEngine.Rect.MinMaxRect(i3067[2], i3067[3], i3067[4], i3067[5])
  request.r(i3067[6], i3067[7], 0, i3066, 'm_Material')
  i3066.m_Maskable = !!i3067[8]
  i3066.m_Color = new pc.Color(i3067[9], i3067[10], i3067[11], i3067[12])
  i3066.m_RaycastTarget = !!i3067[13]
  i3066.m_RaycastPadding = new pc.Vec4( i3067[14], i3067[15], i3067[16], i3067[17] )
  return i3066
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i3068 = root || request.c( 'ImageScroller' )
  var i3069 = data
  request.r(i3069[0], i3069[1], 0, i3068, 'rawImage')
  i3068.moveVector = new pc.Vec2( i3069[2], i3069[3] )
  return i3068
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i3070 = root || request.c( 'UIGuidingMove' )
  var i3071 = data
  request.r(i3071[0], i3071[1], 0, i3070, 'target')
  i3070.startPosition = new pc.Vec2( i3071[2], i3071[3] )
  i3070.endPosition = new pc.Vec2( i3071[4], i3071[5] )
  i3070.duration = i3071[6]
  i3070.ease = i3071[7]
  i3070.resetToStartOnComplete = !!i3071[8]
  i3070.loop = !!i3071[9]
  i3070.loopCount = i3071[10]
  i3070.loopType = i3071[11]
  return i3070
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i3072 = root || request.c( 'UIPulse' )
  var i3073 = data
  i3072.targetScale = new pc.Vec3( i3073[0], i3073[1], i3073[2] )
  i3072.duration = i3073[3]
  i3072.ease = i3073[4]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3075 = data
  i3074.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3075[0], i3074.main)
  i3074.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3075[1], i3074.colorBySpeed)
  i3074.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3075[2], i3074.colorOverLifetime)
  i3074.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3075[3], i3074.emission)
  i3074.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3075[4], i3074.rotationBySpeed)
  i3074.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3075[5], i3074.rotationOverLifetime)
  i3074.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3075[6], i3074.shape)
  i3074.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3075[7], i3074.sizeBySpeed)
  i3074.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3075[8], i3074.sizeOverLifetime)
  i3074.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3075[9], i3074.textureSheetAnimation)
  i3074.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3075[10], i3074.velocityOverLifetime)
  i3074.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3075[11], i3074.noise)
  i3074.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3075[12], i3074.inheritVelocity)
  i3074.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3075[13], i3074.forceOverLifetime)
  i3074.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3075[14], i3074.limitVelocityOverLifetime)
  i3074.useAutoRandomSeed = !!i3075[15]
  i3074.randomSeed = i3075[16]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3076 = root || new pc.ParticleSystemMain()
  var i3077 = data
  i3076.duration = i3077[0]
  i3076.loop = !!i3077[1]
  i3076.prewarm = !!i3077[2]
  i3076.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[3], i3076.startDelay)
  i3076.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[4], i3076.startLifetime)
  i3076.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[5], i3076.startSpeed)
  i3076.startSize3D = !!i3077[6]
  i3076.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[7], i3076.startSizeX)
  i3076.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[8], i3076.startSizeY)
  i3076.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[9], i3076.startSizeZ)
  i3076.startRotation3D = !!i3077[10]
  i3076.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[11], i3076.startRotationX)
  i3076.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[12], i3076.startRotationY)
  i3076.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[13], i3076.startRotationZ)
  i3076.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3077[14], i3076.startColor)
  i3076.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[15], i3076.gravityModifier)
  i3076.simulationSpace = i3077[16]
  request.r(i3077[17], i3077[18], 0, i3076, 'customSimulationSpace')
  i3076.simulationSpeed = i3077[19]
  i3076.useUnscaledTime = !!i3077[20]
  i3076.scalingMode = i3077[21]
  i3076.playOnAwake = !!i3077[22]
  i3076.maxParticles = i3077[23]
  i3076.emitterVelocityMode = i3077[24]
  i3076.stopAction = i3077[25]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3078 = root || new pc.MinMaxCurve()
  var i3079 = data
  i3078.mode = i3079[0]
  i3078.curveMin = new pc.AnimationCurve( { keys_flow: i3079[1] } )
  i3078.curveMax = new pc.AnimationCurve( { keys_flow: i3079[2] } )
  i3078.curveMultiplier = i3079[3]
  i3078.constantMin = i3079[4]
  i3078.constantMax = i3079[5]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3080 = root || new pc.MinMaxGradient()
  var i3081 = data
  i3080.mode = i3081[0]
  i3080.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3081[1], i3080.gradientMin)
  i3080.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3081[2], i3080.gradientMax)
  i3080.colorMin = new pc.Color(i3081[3], i3081[4], i3081[5], i3081[6])
  i3080.colorMax = new pc.Color(i3081[7], i3081[8], i3081[9], i3081[10])
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3083 = data
  i3082.mode = i3083[0]
  var i3085 = i3083[1]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3085[i + 0]) );
  }
  i3082.colorKeys = i3084
  var i3087 = i3083[2]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3087[i + 0]) );
  }
  i3082.alphaKeys = i3086
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3088 = root || new pc.ParticleSystemColorBySpeed()
  var i3089 = data
  i3088.enabled = !!i3089[0]
  i3088.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3089[1], i3088.color)
  i3088.range = new pc.Vec2( i3089[2], i3089[3] )
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3093 = data
  i3092.color = new pc.Color(i3093[0], i3093[1], i3093[2], i3093[3])
  i3092.time = i3093[4]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3097 = data
  i3096.alpha = i3097[0]
  i3096.time = i3097[1]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3098 = root || new pc.ParticleSystemColorOverLifetime()
  var i3099 = data
  i3098.enabled = !!i3099[0]
  i3098.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3099[1], i3098.color)
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3100 = root || new pc.ParticleSystemEmitter()
  var i3101 = data
  i3100.enabled = !!i3101[0]
  i3100.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[1], i3100.rateOverTime)
  i3100.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[2], i3100.rateOverDistance)
  var i3103 = i3101[3]
  var i3102 = []
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3103[i + 0]) );
  }
  i3100.bursts = i3102
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3106 = root || new pc.ParticleSystemBurst()
  var i3107 = data
  i3106.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3107[0], i3106.count)
  i3106.cycleCount = i3107[1]
  i3106.minCount = i3107[2]
  i3106.maxCount = i3107[3]
  i3106.repeatInterval = i3107[4]
  i3106.time = i3107[5]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3108 = root || new pc.ParticleSystemRotationBySpeed()
  var i3109 = data
  i3108.enabled = !!i3109[0]
  i3108.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[1], i3108.x)
  i3108.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[2], i3108.y)
  i3108.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[3], i3108.z)
  i3108.separateAxes = !!i3109[4]
  i3108.range = new pc.Vec2( i3109[5], i3109[6] )
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3110 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3111 = data
  i3110.enabled = !!i3111[0]
  i3110.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[1], i3110.x)
  i3110.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[2], i3110.y)
  i3110.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[3], i3110.z)
  i3110.separateAxes = !!i3111[4]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3112 = root || new pc.ParticleSystemShape()
  var i3113 = data
  i3112.enabled = !!i3113[0]
  i3112.shapeType = i3113[1]
  i3112.randomDirectionAmount = i3113[2]
  i3112.sphericalDirectionAmount = i3113[3]
  i3112.randomPositionAmount = i3113[4]
  i3112.alignToDirection = !!i3113[5]
  i3112.radius = i3113[6]
  i3112.radiusMode = i3113[7]
  i3112.radiusSpread = i3113[8]
  i3112.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3113[9], i3112.radiusSpeed)
  i3112.radiusThickness = i3113[10]
  i3112.angle = i3113[11]
  i3112.length = i3113[12]
  i3112.boxThickness = new pc.Vec3( i3113[13], i3113[14], i3113[15] )
  i3112.meshShapeType = i3113[16]
  request.r(i3113[17], i3113[18], 0, i3112, 'mesh')
  request.r(i3113[19], i3113[20], 0, i3112, 'meshRenderer')
  request.r(i3113[21], i3113[22], 0, i3112, 'skinnedMeshRenderer')
  i3112.useMeshMaterialIndex = !!i3113[23]
  i3112.meshMaterialIndex = i3113[24]
  i3112.useMeshColors = !!i3113[25]
  i3112.normalOffset = i3113[26]
  i3112.arc = i3113[27]
  i3112.arcMode = i3113[28]
  i3112.arcSpread = i3113[29]
  i3112.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3113[30], i3112.arcSpeed)
  i3112.donutRadius = i3113[31]
  i3112.position = new pc.Vec3( i3113[32], i3113[33], i3113[34] )
  i3112.rotation = new pc.Vec3( i3113[35], i3113[36], i3113[37] )
  i3112.scale = new pc.Vec3( i3113[38], i3113[39], i3113[40] )
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3114 = root || new pc.ParticleSystemSizeBySpeed()
  var i3115 = data
  i3114.enabled = !!i3115[0]
  i3114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[1], i3114.x)
  i3114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[2], i3114.y)
  i3114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[3], i3114.z)
  i3114.separateAxes = !!i3115[4]
  i3114.range = new pc.Vec2( i3115[5], i3115[6] )
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3116 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3117 = data
  i3116.enabled = !!i3117[0]
  i3116.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[1], i3116.x)
  i3116.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[2], i3116.y)
  i3116.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[3], i3116.z)
  i3116.separateAxes = !!i3117[4]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3118 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3119 = data
  i3118.enabled = !!i3119[0]
  i3118.mode = i3119[1]
  i3118.animation = i3119[2]
  i3118.numTilesX = i3119[3]
  i3118.numTilesY = i3119[4]
  i3118.useRandomRow = !!i3119[5]
  i3118.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3119[6], i3118.frameOverTime)
  i3118.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3119[7], i3118.startFrame)
  i3118.cycleCount = i3119[8]
  i3118.rowIndex = i3119[9]
  i3118.flipU = i3119[10]
  i3118.flipV = i3119[11]
  i3118.spriteCount = i3119[12]
  var i3121 = i3119[13]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 2) {
  request.r(i3121[i + 0], i3121[i + 1], 2, i3120, '')
  }
  i3118.sprites = i3120
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3124 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3125 = data
  i3124.enabled = !!i3125[0]
  i3124.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[1], i3124.x)
  i3124.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[2], i3124.y)
  i3124.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[3], i3124.z)
  i3124.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[4], i3124.radial)
  i3124.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[5], i3124.speedModifier)
  i3124.space = i3125[6]
  i3124.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[7], i3124.orbitalX)
  i3124.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[8], i3124.orbitalY)
  i3124.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[9], i3124.orbitalZ)
  i3124.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[10], i3124.orbitalOffsetX)
  i3124.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[11], i3124.orbitalOffsetY)
  i3124.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[12], i3124.orbitalOffsetZ)
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3126 = root || new pc.ParticleSystemNoise()
  var i3127 = data
  i3126.enabled = !!i3127[0]
  i3126.separateAxes = !!i3127[1]
  i3126.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[2], i3126.strengthX)
  i3126.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[3], i3126.strengthY)
  i3126.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[4], i3126.strengthZ)
  i3126.frequency = i3127[5]
  i3126.damping = !!i3127[6]
  i3126.octaveCount = i3127[7]
  i3126.octaveMultiplier = i3127[8]
  i3126.octaveScale = i3127[9]
  i3126.quality = i3127[10]
  i3126.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[11], i3126.scrollSpeed)
  i3126.scrollSpeedMultiplier = i3127[12]
  i3126.remapEnabled = !!i3127[13]
  i3126.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[14], i3126.remapX)
  i3126.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[15], i3126.remapY)
  i3126.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[16], i3126.remapZ)
  i3126.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[17], i3126.positionAmount)
  i3126.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[18], i3126.rotationAmount)
  i3126.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[19], i3126.sizeAmount)
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3128 = root || new pc.ParticleSystemInheritVelocity()
  var i3129 = data
  i3128.enabled = !!i3129[0]
  i3128.mode = i3129[1]
  i3128.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[2], i3128.curve)
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3130 = root || new pc.ParticleSystemForceOverLifetime()
  var i3131 = data
  i3130.enabled = !!i3131[0]
  i3130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[1], i3130.x)
  i3130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[2], i3130.y)
  i3130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[3], i3130.z)
  i3130.space = i3131[4]
  i3130.randomized = !!i3131[5]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3132 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3133 = data
  i3132.enabled = !!i3133[0]
  i3132.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[1], i3132.limit)
  i3132.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[2], i3132.limitX)
  i3132.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[3], i3132.limitY)
  i3132.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[4], i3132.limitZ)
  i3132.dampen = i3133[5]
  i3132.separateAxes = !!i3133[6]
  i3132.space = i3133[7]
  i3132.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[8], i3132.drag)
  i3132.multiplyDragByParticleSize = !!i3133[9]
  i3132.multiplyDragByParticleVelocity = !!i3133[10]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3135 = data
  request.r(i3135[0], i3135[1], 0, i3134, 'mesh')
  i3134.meshCount = i3135[2]
  i3134.activeVertexStreamsCount = i3135[3]
  i3134.alignment = i3135[4]
  i3134.renderMode = i3135[5]
  i3134.sortMode = i3135[6]
  i3134.lengthScale = i3135[7]
  i3134.velocityScale = i3135[8]
  i3134.cameraVelocityScale = i3135[9]
  i3134.normalDirection = i3135[10]
  i3134.sortingFudge = i3135[11]
  i3134.minParticleSize = i3135[12]
  i3134.maxParticleSize = i3135[13]
  i3134.pivot = new pc.Vec3( i3135[14], i3135[15], i3135[16] )
  request.r(i3135[17], i3135[18], 0, i3134, 'trailMaterial')
  i3134.applyActiveColorSpace = !!i3135[19]
  i3134.enabled = !!i3135[20]
  request.r(i3135[21], i3135[22], 0, i3134, 'sharedMaterial')
  var i3137 = i3135[23]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 2) {
  request.r(i3137[i + 0], i3137[i + 1], 2, i3136, '')
  }
  i3134.sharedMaterials = i3136
  i3134.receiveShadows = !!i3135[24]
  i3134.shadowCastingMode = i3135[25]
  i3134.sortingLayerID = i3135[26]
  i3134.sortingOrder = i3135[27]
  i3134.lightmapIndex = i3135[28]
  i3134.lightmapSceneIndex = i3135[29]
  i3134.lightmapScaleOffset = new pc.Vec4( i3135[30], i3135[31], i3135[32], i3135[33] )
  i3134.lightProbeUsage = i3135[34]
  i3134.reflectionProbeUsage = i3135[35]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3139 = data
  i3138.name = i3139[0]
  i3138.atlasId = i3139[1]
  i3138.mipmapCount = i3139[2]
  i3138.hdr = !!i3139[3]
  i3138.size = i3139[4]
  i3138.anisoLevel = i3139[5]
  i3138.filterMode = i3139[6]
  var i3141 = i3139[7]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 4) {
    i3140.push( UnityEngine.Rect.MinMaxRect(i3141[i + 0], i3141[i + 1], i3141[i + 2], i3141[i + 3]) );
  }
  i3138.rects = i3140
  i3138.wrapU = i3139[8]
  i3138.wrapV = i3139[9]
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3145 = data
  i3144.name = i3145[0]
  i3144.index = i3145[1]
  i3144.startup = !!i3145[2]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3147 = data
  i3146.aspect = i3147[0]
  i3146.orthographic = !!i3147[1]
  i3146.orthographicSize = i3147[2]
  i3146.backgroundColor = new pc.Color(i3147[3], i3147[4], i3147[5], i3147[6])
  i3146.nearClipPlane = i3147[7]
  i3146.farClipPlane = i3147[8]
  i3146.fieldOfView = i3147[9]
  i3146.depth = i3147[10]
  i3146.clearFlags = i3147[11]
  i3146.cullingMask = i3147[12]
  i3146.rect = i3147[13]
  request.r(i3147[14], i3147[15], 0, i3146, 'targetTexture')
  i3146.usePhysicalProperties = !!i3147[16]
  i3146.focalLength = i3147[17]
  i3146.sensorSize = new pc.Vec2( i3147[18], i3147[19] )
  i3146.lensShift = new pc.Vec2( i3147[20], i3147[21] )
  i3146.gateFit = i3147[22]
  i3146.commandBufferCount = i3147[23]
  i3146.cameraType = i3147[24]
  i3146.enabled = !!i3147[25]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3149 = data
  request.r(i3149[0], i3149[1], 0, i3148, 'sharedMesh')
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3151 = data
  request.r(i3151[0], i3151[1], 0, i3150, 'additionalVertexStreams')
  i3150.enabled = !!i3151[2]
  request.r(i3151[3], i3151[4], 0, i3150, 'sharedMaterial')
  var i3153 = i3151[5]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 2) {
  request.r(i3153[i + 0], i3153[i + 1], 2, i3152, '')
  }
  i3150.sharedMaterials = i3152
  i3150.receiveShadows = !!i3151[6]
  i3150.shadowCastingMode = i3151[7]
  i3150.sortingLayerID = i3151[8]
  i3150.sortingOrder = i3151[9]
  i3150.lightmapIndex = i3151[10]
  i3150.lightmapSceneIndex = i3151[11]
  i3150.lightmapScaleOffset = new pc.Vec4( i3151[12], i3151[13], i3151[14], i3151[15] )
  i3150.lightProbeUsage = i3151[16]
  i3150.reflectionProbeUsage = i3151[17]
  return i3150
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i3154 = root || request.c( 'MaterialUVScroller' )
  var i3155 = data
  request.r(i3155[0], i3155[1], 0, i3154, 'targetMaterial')
  i3154.scrollSpeed = new pc.Vec2( i3155[2], i3155[3] )
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3157 = data
  i3156.type = i3157[0]
  i3156.color = new pc.Color(i3157[1], i3157[2], i3157[3], i3157[4])
  i3156.cullingMask = i3157[5]
  i3156.intensity = i3157[6]
  i3156.range = i3157[7]
  i3156.spotAngle = i3157[8]
  i3156.shadows = i3157[9]
  i3156.shadowNormalBias = i3157[10]
  i3156.shadowBias = i3157[11]
  i3156.shadowStrength = i3157[12]
  i3156.shadowResolution = i3157[13]
  i3156.lightmapBakeType = i3157[14]
  i3156.renderMode = i3157[15]
  request.r(i3157[16], i3157[17], 0, i3156, 'cookie')
  i3156.cookieSize = i3157[18]
  i3156.shadowNearPlane = i3157[19]
  i3156.enabled = !!i3157[20]
  return i3156
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'm_FirstSelected')
  i3158.m_sendNavigationEvents = !!i3159[2]
  i3158.m_DragThreshold = i3159[3]
  return i3158
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3161 = data
  i3160.m_HorizontalAxis = i3161[0]
  i3160.m_VerticalAxis = i3161[1]
  i3160.m_SubmitButton = i3161[2]
  i3160.m_CancelButton = i3161[3]
  i3160.m_InputActionsPerSecond = i3161[4]
  i3160.m_RepeatDelay = i3161[5]
  i3160.m_ForceModuleActive = !!i3161[6]
  i3160.m_SendPointerHoverToParent = !!i3161[7]
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3163 = data
  request.r(i3163[0], i3163[1], 0, i3162, 'animatorController')
  request.r(i3163[2], i3163[3], 0, i3162, 'avatar')
  i3162.updateMode = i3163[4]
  i3162.hasTransformHierarchy = !!i3163[5]
  i3162.applyRootMotion = !!i3163[6]
  var i3165 = i3163[7]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 2) {
  request.r(i3165[i + 0], i3165[i + 1], 2, i3164, '')
  }
  i3162.humanBones = i3164
  i3162.enabled = !!i3163[8]
  return i3162
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i3168 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i3169 = data
  request.r(i3169[0], i3169[1], 0, i3168, 'animator')
  i3168.kickDuration = i3169[2]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3171 = data
  request.r(i3171[0], i3171[1], 0, i3170, 'sharedMesh')
  var i3173 = i3171[2]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 2) {
  request.r(i3173[i + 0], i3173[i + 1], 2, i3172, '')
  }
  i3170.bones = i3172
  i3170.updateWhenOffscreen = !!i3171[3]
  i3170.localBounds = i3171[4]
  request.r(i3171[5], i3171[6], 0, i3170, 'rootBone')
  var i3175 = i3171[7]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3175[i + 0]) );
  }
  i3170.blendShapesWeights = i3174
  i3170.enabled = !!i3171[8]
  request.r(i3171[9], i3171[10], 0, i3170, 'sharedMaterial')
  var i3177 = i3171[11]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 2) {
  request.r(i3177[i + 0], i3177[i + 1], 2, i3176, '')
  }
  i3170.sharedMaterials = i3176
  i3170.receiveShadows = !!i3171[12]
  i3170.shadowCastingMode = i3171[13]
  i3170.sortingLayerID = i3171[14]
  i3170.sortingOrder = i3171[15]
  i3170.lightmapIndex = i3171[16]
  i3170.lightmapSceneIndex = i3171[17]
  i3170.lightmapScaleOffset = new pc.Vec4( i3171[18], i3171[19], i3171[20], i3171[21] )
  i3170.lightProbeUsage = i3171[22]
  i3170.reflectionProbeUsage = i3171[23]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3181 = data
  i3180.weight = i3181[0]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3183 = data
  i3182.center = new pc.Vec3( i3183[0], i3183[1], i3183[2] )
  i3182.radius = i3183[3]
  i3182.enabled = !!i3183[4]
  i3182.isTrigger = !!i3183[5]
  request.r(i3183[6], i3183[7], 0, i3182, 'material')
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3185 = data
  i3184.mass = i3185[0]
  i3184.drag = i3185[1]
  i3184.angularDrag = i3185[2]
  i3184.useGravity = !!i3185[3]
  i3184.isKinematic = !!i3185[4]
  i3184.constraints = i3185[5]
  i3184.maxAngularVelocity = i3185[6]
  i3184.collisionDetectionMode = i3185[7]
  i3184.interpolation = i3185[8]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3187 = data
  var i3189 = i3187[0]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 3) {
    i3188.push( new pc.Vec3( i3189[i + 0], i3189[i + 1], i3189[i + 2] ) );
  }
  i3186.positions = i3188
  i3186.positionCount = i3187[1]
  i3186.time = i3187[2]
  i3186.startWidth = i3187[3]
  i3186.endWidth = i3187[4]
  i3186.widthMultiplier = i3187[5]
  i3186.autodestruct = !!i3187[6]
  i3186.emitting = !!i3187[7]
  i3186.numCornerVertices = i3187[8]
  i3186.numCapVertices = i3187[9]
  i3186.minVertexDistance = i3187[10]
  i3186.colorGradient = i3187[11] ? new pc.ColorGradient(i3187[11][0], i3187[11][1], i3187[11][2]) : null
  i3186.startColor = new pc.Color(i3187[12], i3187[13], i3187[14], i3187[15])
  i3186.endColor = new pc.Color(i3187[16], i3187[17], i3187[18], i3187[19])
  i3186.generateLightingData = !!i3187[20]
  i3186.textureMode = i3187[21]
  i3186.alignment = i3187[22]
  i3186.widthCurve = new pc.AnimationCurve( { keys_flow: i3187[23] } )
  i3186.enabled = !!i3187[24]
  request.r(i3187[25], i3187[26], 0, i3186, 'sharedMaterial')
  var i3191 = i3187[27]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 2) {
  request.r(i3191[i + 0], i3191[i + 1], 2, i3190, '')
  }
  i3186.sharedMaterials = i3190
  i3186.receiveShadows = !!i3187[28]
  i3186.shadowCastingMode = i3187[29]
  i3186.sortingLayerID = i3187[30]
  i3186.sortingOrder = i3187[31]
  i3186.lightmapIndex = i3187[32]
  i3186.lightmapSceneIndex = i3187[33]
  i3186.lightmapScaleOffset = new pc.Vec4( i3187[34], i3187[35], i3187[36], i3187[37] )
  i3186.lightProbeUsage = i3187[38]
  i3186.reflectionProbeUsage = i3187[39]
  return i3186
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i3194 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i3195 = data
  i3194.blockBounceSpeed = i3195[0]
  i3194.blockBounceUpward = i3195[1]
  i3194.goalFallSpeed = i3195[2]
  i3194.goalFallDownward = i3195[3]
  i3194.goalDropDamping = i3195[4]
  request.r(i3195[5], i3195[6], 0, i3194, 'leftTop')
  request.r(i3195[7], i3195[8], 0, i3194, 'bottomCenter')
  request.r(i3195[9], i3195[10], 0, i3194, 'rightTop')
  i3194.leftTopY = i3195[11]
  i3194.bottomCenterY = i3195[12]
  i3194.rightTopY = i3195[13]
  i3194.halfWidth = i3195[14]
  i3194.goalZ = i3195[15]
  i3194.flightTime = i3195[16]
  request.r(i3195[17], i3195[18], 0, i3194, 'trailRenderer')
  i3194.goalTag = i3195[19]
  return i3194
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i3196 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'leftPost')
  request.r(i3197[2], i3197[3], 0, i3196, 'rightPost')
  i3196.baseSpeed = i3197[4]
  i3196.changeSpeedByRound = !!i3197[5]
  return i3196
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i3198 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'leftLimit')
  request.r(i3199[2], i3199[3], 0, i3198, 'rightLimit')
  i3198.speed = i3199[4]
  i3198.startActive = !!i3199[5]
  return i3198
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i3200 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i3201 = data
  request.r(i3201[0], i3201[1], 0, i3200, 'leftPoint')
  request.r(i3201[2], i3201[3], 0, i3200, 'rightPoint')
  i3200.speed = i3201[4]
  request.r(i3201[5], i3201[6], 0, i3200, 'aimLineRenderer')
  request.r(i3201[7], i3201[8], 0, i3200, 'ballTransform')
  i3200.lineWidth = i3201[9]
  i3200.dashDensity = i3201[10]
  i3200.dashRatio = i3201[11]
  i3200.dashColor = new pc.Color(i3201[12], i3201[13], i3201[14], i3201[15])
  i3200.lineGroundY = i3201[16]
  i3200.pulseEffect = !!i3201[17]
  i3200.pulseSpeed = i3201[18]
  i3200.pulseScaleAmount = i3201[19]
  i3200.sortingOrder = i3201[20]
  i3200.sortingLayerName = i3201[21]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3203 = data
  i3202.textureMode = i3203[0]
  i3202.alignment = i3203[1]
  i3202.widthCurve = new pc.AnimationCurve( { keys_flow: i3203[2] } )
  i3202.colorGradient = i3203[3] ? new pc.ColorGradient(i3203[3][0], i3203[3][1], i3203[3][2]) : null
  var i3205 = i3203[4]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 3) {
    i3204.push( new pc.Vec3( i3205[i + 0], i3205[i + 1], i3205[i + 2] ) );
  }
  i3202.positions = i3204
  i3202.positionCount = i3203[5]
  i3202.widthMultiplier = i3203[6]
  i3202.startWidth = i3203[7]
  i3202.endWidth = i3203[8]
  i3202.numCornerVertices = i3203[9]
  i3202.numCapVertices = i3203[10]
  i3202.useWorldSpace = !!i3203[11]
  i3202.loop = !!i3203[12]
  i3202.startColor = new pc.Color(i3203[13], i3203[14], i3203[15], i3203[16])
  i3202.endColor = new pc.Color(i3203[17], i3203[18], i3203[19], i3203[20])
  i3202.generateLightingData = !!i3203[21]
  i3202.enabled = !!i3203[22]
  request.r(i3203[23], i3203[24], 0, i3202, 'sharedMaterial')
  var i3207 = i3203[25]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 2) {
  request.r(i3207[i + 0], i3207[i + 1], 2, i3206, '')
  }
  i3202.sharedMaterials = i3206
  i3202.receiveShadows = !!i3203[26]
  i3202.shadowCastingMode = i3203[27]
  i3202.sortingLayerID = i3203[28]
  i3202.sortingOrder = i3203[29]
  i3202.lightmapIndex = i3203[30]
  i3202.lightmapSceneIndex = i3203[31]
  i3202.lightmapScaleOffset = new pc.Vec4( i3203[32], i3203[33], i3203[34], i3203[35] )
  i3202.lightProbeUsage = i3203[36]
  i3202.reflectionProbeUsage = i3203[37]
  return i3202
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i3208 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i3209 = data
  i3208.kickImpactDelay = i3209[0]
  request.r(i3209[1], i3209[2], 0, i3208, 'ball')
  request.r(i3209[3], i3209[4], 0, i3208, 'targetMover')
  request.r(i3209[5], i3209[6], 0, i3208, 'goalkeeper')
  request.r(i3209[7], i3209[8], 0, i3208, 'ronaldoAnimator')
  request.r(i3209[9], i3209[10], 0, i3208, 'uiManager')
  request.r(i3209[11], i3209[12], 0, i3208, 'defenderRound2')
  request.r(i3209[13], i3209[14], 0, i3208, 'defenderRound3')
  i3208.targetSpeeds = i3209[15]
  i3208.delayBetweenRounds = i3209[16]
  i3208.promptEveryRound = !!i3209[17]
  return i3208
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i3210 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i3211 = data
  var i3213 = i3211[0]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 2) {
  request.r(i3213[i + 0], i3213[i + 1], 2, i3212, '')
  }
  i3210.roundIndicators = i3212
  request.r(i3211[1], i3211[2], 0, i3210, 'iconEmpty')
  request.r(i3211[3], i3211[4], 0, i3210, 'iconCheck')
  request.r(i3211[5], i3211[6], 0, i3210, 'iconCross')
  request.r(i3211[7], i3211[8], 0, i3210, 'winEndcardPanel')
  request.r(i3211[9], i3211[10], 0, i3210, 'losePanel')
  request.r(i3211[11], i3211[12], 0, i3210, 'promptText')
  var i3215 = i3211[13]
  var i3214 = []
  for(var i = 0; i < i3215.length; i += 2) {
  request.r(i3215[i + 0], i3215[i + 1], 2, i3214, '')
  }
  i3210.objectsToShowOnWin = i3214
  i3210.winDelay = i3211[14]
  var i3217 = i3211[15]
  var i3216 = []
  for(var i = 0; i < i3217.length; i += 2) {
  request.r(i3217[i + 0], i3217[i + 1], 2, i3216, '')
  }
  i3210.objectsToHideOnWin = i3216
  var i3219 = i3211[16]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 2) {
  request.r(i3219[i + 0], i3219[i + 1], 2, i3218, '')
  }
  i3210.objectsToHideOnLose = i3218
  var i3221 = i3211[17]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 2) {
  request.r(i3221[i + 0], i3221[i + 1], 2, i3220, '')
  }
  i3210.extraObjectsToHide = i3220
  return i3210
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3226 = root || request.c( 'Ply_SoundManager' )
  var i3227 = data
  i3226.audioClips = request.d('FxAudio', i3227[0], i3226.audioClips)
  request.r(i3227[1], i3227[2], 0, i3226, 'sound')
  i3226.enableSound = !!i3227[3]
  i3226.bgmVolume = i3227[4]
  return i3226
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3228 = root || request.c( 'FxAudio' )
  var i3229 = data
  i3228.Clock = request.d('SoundData', i3229[0], i3228.Clock)
  i3228.PlayerWin = request.d('SoundData', i3229[1], i3228.PlayerWin)
  i3228.PlayerLoose = request.d('SoundData', i3229[2], i3228.PlayerLoose)
  i3228.RightChoice = request.d('SoundData', i3229[3], i3228.RightChoice)
  i3228.WrongChoice = request.d('SoundData', i3229[4], i3228.WrongChoice)
  i3228.MaxLevel = request.d('SoundData', i3229[5], i3228.MaxLevel)
  i3228.FightingCloud = request.d('SoundData', i3229[6], i3228.FightingCloud)
  i3228.Confetti = request.d('SoundData', i3229[7], i3228.Confetti)
  return i3228
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3230 = root || request.c( 'SoundData' )
  var i3231 = data
  request.r(i3231[0], i3231[1], 0, i3230, 'clip')
  i3230.volume = i3231[2]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3233 = data
  request.r(i3233[0], i3233[1], 0, i3232, 'clip')
  request.r(i3233[2], i3233[3], 0, i3232, 'outputAudioMixerGroup')
  i3232.playOnAwake = !!i3233[4]
  i3232.loop = !!i3233[5]
  i3232.time = i3233[6]
  i3232.volume = i3233[7]
  i3232.pitch = i3233[8]
  i3232.enabled = !!i3233[9]
  return i3232
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.UI.Button' )
  var i3235 = data
  i3234.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3235[0], i3234.m_OnClick)
  i3234.m_Navigation = request.d('UnityEngine.UI.Navigation', i3235[1], i3234.m_Navigation)
  i3234.m_Transition = i3235[2]
  i3234.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3235[3], i3234.m_Colors)
  i3234.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3235[4], i3234.m_SpriteState)
  i3234.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3235[5], i3234.m_AnimationTriggers)
  i3234.m_Interactable = !!i3235[6]
  request.r(i3235[7], i3235[8], 0, i3234, 'm_TargetGraphic')
  return i3234
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3237 = data
  i3236.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3237[0], i3236.m_PersistentCalls)
  return i3236
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3239 = data
  var i3241 = i3239[0]
  var i3240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.add(request.d('UnityEngine.Events.PersistentCall', i3241[i + 0]));
  }
  i3238.m_Calls = i3240
  return i3238
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3245 = data
  request.r(i3245[0], i3245[1], 0, i3244, 'm_Target')
  i3244.m_TargetAssemblyTypeName = i3245[2]
  i3244.m_MethodName = i3245[3]
  i3244.m_Mode = i3245[4]
  i3244.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3245[5], i3244.m_Arguments)
  i3244.m_CallState = i3245[6]
  return i3244
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3247 = data
  request.r(i3247[0], i3247[1], 0, i3246, 'm_ObjectArgument')
  i3246.m_ObjectArgumentAssemblyTypeName = i3247[2]
  i3246.m_IntArgument = i3247[3]
  i3246.m_FloatArgument = i3247[4]
  i3246.m_StringArgument = i3247[5]
  i3246.m_BoolArgument = !!i3247[6]
  return i3246
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3249 = data
  i3248.m_Mode = i3249[0]
  i3248.m_WrapAround = !!i3249[1]
  request.r(i3249[2], i3249[3], 0, i3248, 'm_SelectOnUp')
  request.r(i3249[4], i3249[5], 0, i3248, 'm_SelectOnDown')
  request.r(i3249[6], i3249[7], 0, i3248, 'm_SelectOnLeft')
  request.r(i3249[8], i3249[9], 0, i3248, 'm_SelectOnRight')
  return i3248
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3251 = data
  i3250.m_NormalColor = new pc.Color(i3251[0], i3251[1], i3251[2], i3251[3])
  i3250.m_HighlightedColor = new pc.Color(i3251[4], i3251[5], i3251[6], i3251[7])
  i3250.m_PressedColor = new pc.Color(i3251[8], i3251[9], i3251[10], i3251[11])
  i3250.m_SelectedColor = new pc.Color(i3251[12], i3251[13], i3251[14], i3251[15])
  i3250.m_DisabledColor = new pc.Color(i3251[16], i3251[17], i3251[18], i3251[19])
  i3250.m_ColorMultiplier = i3251[20]
  i3250.m_FadeDuration = i3251[21]
  return i3250
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3253 = data
  request.r(i3253[0], i3253[1], 0, i3252, 'm_HighlightedSprite')
  request.r(i3253[2], i3253[3], 0, i3252, 'm_PressedSprite')
  request.r(i3253[4], i3253[5], 0, i3252, 'm_SelectedSprite')
  request.r(i3253[6], i3253[7], 0, i3252, 'm_DisabledSprite')
  return i3252
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3255 = data
  i3254.m_NormalTrigger = i3255[0]
  i3254.m_HighlightedTrigger = i3255[1]
  i3254.m_PressedTrigger = i3255[2]
  i3254.m_SelectedTrigger = i3255[3]
  i3254.m_DisabledTrigger = i3255[4]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3257 = data
  i3256.ambientIntensity = i3257[0]
  i3256.reflectionIntensity = i3257[1]
  i3256.ambientMode = i3257[2]
  i3256.ambientLight = new pc.Color(i3257[3], i3257[4], i3257[5], i3257[6])
  i3256.ambientSkyColor = new pc.Color(i3257[7], i3257[8], i3257[9], i3257[10])
  i3256.ambientGroundColor = new pc.Color(i3257[11], i3257[12], i3257[13], i3257[14])
  i3256.ambientEquatorColor = new pc.Color(i3257[15], i3257[16], i3257[17], i3257[18])
  i3256.fogColor = new pc.Color(i3257[19], i3257[20], i3257[21], i3257[22])
  i3256.fogEndDistance = i3257[23]
  i3256.fogStartDistance = i3257[24]
  i3256.fogDensity = i3257[25]
  i3256.fog = !!i3257[26]
  request.r(i3257[27], i3257[28], 0, i3256, 'skybox')
  i3256.fogMode = i3257[29]
  var i3259 = i3257[30]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3259[i + 0]) );
  }
  i3256.lightmaps = i3258
  i3256.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3257[31], i3256.lightProbes)
  i3256.lightmapsMode = i3257[32]
  i3256.mixedBakeMode = i3257[33]
  i3256.environmentLightingMode = i3257[34]
  i3256.ambientProbe = new pc.SphericalHarmonicsL2(i3257[35])
  i3256.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3257[36])
  i3256.useReferenceAmbientProbe = !!i3257[37]
  request.r(i3257[38], i3257[39], 0, i3256, 'customReflection')
  request.r(i3257[40], i3257[41], 0, i3256, 'defaultReflection')
  i3256.defaultReflectionMode = i3257[42]
  i3256.defaultReflectionResolution = i3257[43]
  i3256.sunLightObjectId = i3257[44]
  i3256.pixelLightCount = i3257[45]
  i3256.defaultReflectionHDR = !!i3257[46]
  i3256.hasLightDataAsset = !!i3257[47]
  i3256.hasManualGenerate = !!i3257[48]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3263 = data
  request.r(i3263[0], i3263[1], 0, i3262, 'lightmapColor')
  request.r(i3263[2], i3263[3], 0, i3262, 'lightmapDirection')
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3264 = root || new UnityEngine.LightProbes()
  var i3265 = data
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i3271 = data
  i3270.name = i3271[0]
  i3270.bounciness = i3271[1]
  i3270.dynamicFriction = i3271[2]
  i3270.staticFriction = i3271[3]
  i3270.frictionCombine = i3271[4]
  i3270.bounceCombine = i3271[5]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3273 = data
  var i3275 = i3273[0]
  var i3274 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3275[i + 0]));
  }
  i3272.ShaderCompilationErrors = i3274
  i3272.name = i3273[1]
  i3272.guid = i3273[2]
  var i3277 = i3273[3]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( i3277[i + 0] );
  }
  i3272.shaderDefinedKeywords = i3276
  var i3279 = i3273[4]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3279[i + 0]) );
  }
  i3272.passes = i3278
  var i3281 = i3273[5]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3281[i + 0]) );
  }
  i3272.usePasses = i3280
  var i3283 = i3273[6]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3283[i + 0]) );
  }
  i3272.defaultParameterValues = i3282
  request.r(i3273[7], i3273[8], 0, i3272, 'unityFallbackShader')
  i3272.readDepth = !!i3273[9]
  i3272.hasDepthOnlyPass = !!i3273[10]
  i3272.isCreatedByShaderGraph = !!i3273[11]
  i3272.disableBatching = !!i3273[12]
  i3272.compiled = !!i3273[13]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3287 = data
  i3286.shaderName = i3287[0]
  i3286.errorMessage = i3287[1]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3292 = root || new pc.UnityShaderPass()
  var i3293 = data
  i3292.id = i3293[0]
  i3292.subShaderIndex = i3293[1]
  i3292.name = i3293[2]
  i3292.passType = i3293[3]
  i3292.grabPassTextureName = i3293[4]
  i3292.usePass = !!i3293[5]
  i3292.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[6], i3292.zTest)
  i3292.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[7], i3292.zWrite)
  i3292.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[8], i3292.culling)
  i3292.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3293[9], i3292.blending)
  i3292.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3293[10], i3292.alphaBlending)
  i3292.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[11], i3292.colorWriteMask)
  i3292.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[12], i3292.offsetUnits)
  i3292.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[13], i3292.offsetFactor)
  i3292.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[14], i3292.stencilRef)
  i3292.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[15], i3292.stencilReadMask)
  i3292.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[16], i3292.stencilWriteMask)
  i3292.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3293[17], i3292.stencilOp)
  i3292.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3293[18], i3292.stencilOpFront)
  i3292.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3293[19], i3292.stencilOpBack)
  var i3295 = i3293[20]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3295[i + 0]) );
  }
  i3292.tags = i3294
  var i3297 = i3293[21]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.push( i3297[i + 0] );
  }
  i3292.passDefinedKeywords = i3296
  var i3299 = i3293[22]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3299[i + 0]) );
  }
  i3292.passDefinedKeywordGroups = i3298
  var i3301 = i3293[23]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3301[i + 0]) );
  }
  i3292.variants = i3300
  var i3303 = i3293[24]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3303[i + 0]) );
  }
  i3292.excludedVariants = i3302
  i3292.hasDepthReader = !!i3293[25]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3305 = data
  i3304.val = i3305[0]
  i3304.name = i3305[1]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3307 = data
  i3306.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3307[0], i3306.src)
  i3306.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3307[1], i3306.dst)
  i3306.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3307[2], i3306.op)
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3309 = data
  i3308.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3309[0], i3308.pass)
  i3308.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3309[1], i3308.fail)
  i3308.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3309[2], i3308.zFail)
  i3308.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3309[3], i3308.comp)
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3313 = data
  i3312.name = i3313[0]
  i3312.value = i3313[1]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3317 = data
  var i3319 = i3317[0]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( i3319[i + 0] );
  }
  i3316.keywords = i3318
  i3316.hasDiscard = !!i3317[1]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3323 = data
  i3322.passId = i3323[0]
  i3322.subShaderIndex = i3323[1]
  var i3325 = i3323[2]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( i3325[i + 0] );
  }
  i3322.keywords = i3324
  i3322.vertexProgram = i3323[3]
  i3322.fragmentProgram = i3323[4]
  i3322.exportedForWebGl2 = !!i3323[5]
  i3322.readDepth = !!i3323[6]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'shader')
  i3328.pass = i3329[2]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3333 = data
  i3332.name = i3333[0]
  i3332.type = i3333[1]
  i3332.value = new pc.Vec4( i3333[2], i3333[3], i3333[4], i3333[5] )
  i3332.textureValue = i3333[6]
  i3332.shaderPropertyFlag = i3333[7]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3335 = data
  i3334.name = i3335[0]
  request.r(i3335[1], i3335[2], 0, i3334, 'texture')
  i3334.aabb = i3335[3]
  i3334.vertices = i3335[4]
  i3334.triangles = i3335[5]
  i3334.textureRect = UnityEngine.Rect.MinMaxRect(i3335[6], i3335[7], i3335[8], i3335[9])
  i3334.packedRect = UnityEngine.Rect.MinMaxRect(i3335[10], i3335[11], i3335[12], i3335[13])
  i3334.border = new pc.Vec4( i3335[14], i3335[15], i3335[16], i3335[17] )
  i3334.transparency = i3335[18]
  i3334.bounds = i3335[19]
  i3334.pixelsPerUnit = i3335[20]
  i3334.textureWidth = i3335[21]
  i3334.textureHeight = i3335[22]
  i3334.nativeSize = new pc.Vec2( i3335[23], i3335[24] )
  i3334.pivot = new pc.Vec2( i3335[25], i3335[26] )
  i3334.textureRectOffset = new pc.Vec2( i3335[27], i3335[28] )
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3337 = data
  i3336.name = i3337[0]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3339 = data
  i3338.name = i3339[0]
  i3338.wrapMode = i3339[1]
  i3338.isLooping = !!i3339[2]
  i3338.length = i3339[3]
  var i3341 = i3339[4]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3341[i + 0]) );
  }
  i3338.curves = i3340
  var i3343 = i3339[5]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3343[i + 0]) );
  }
  i3338.events = i3342
  i3338.halfPrecision = !!i3339[6]
  i3338._frameRate = i3339[7]
  i3338.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3339[8], i3338.localBounds)
  i3338.hasMuscleCurves = !!i3339[9]
  var i3345 = i3339[10]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.push( i3345[i + 0] );
  }
  i3338.clipMuscleConstant = i3344
  i3338.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3339[11], i3338.clipBindingConstant)
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3349 = data
  i3348.path = i3349[0]
  i3348.hash = i3349[1]
  i3348.componentType = i3349[2]
  i3348.property = i3349[3]
  i3348.keys = i3349[4]
  var i3351 = i3349[5]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3351[i + 0]) );
  }
  i3348.objectReferenceKeys = i3350
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3355 = data
  i3354.time = i3355[0]
  request.r(i3355[1], i3355[2], 0, i3354, 'value')
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3359 = data
  i3358.functionName = i3359[0]
  i3358.floatParameter = i3359[1]
  i3358.intParameter = i3359[2]
  i3358.stringParameter = i3359[3]
  request.r(i3359[4], i3359[5], 0, i3358, 'objectReferenceParameter')
  i3358.time = i3359[6]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3361 = data
  i3360.center = new pc.Vec3( i3361[0], i3361[1], i3361[2] )
  i3360.extends = new pc.Vec3( i3361[3], i3361[4], i3361[5] )
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3365 = data
  var i3367 = i3365[0]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( i3367[i + 0] );
  }
  i3364.genericBindings = i3366
  var i3369 = i3365[1]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( i3369[i + 0] );
  }
  i3364.pptrCurveMapping = i3368
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3371 = data
  i3370.name = i3371[0]
  var i3373 = i3371[1]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3373[i + 0]) );
  }
  i3370.layers = i3372
  var i3375 = i3371[2]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3375[i + 0]) );
  }
  i3370.parameters = i3374
  i3370.animationClips = i3371[3]
  i3370.avatarUnsupported = i3371[4]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3379 = data
  i3378.name = i3379[0]
  i3378.defaultWeight = i3379[1]
  i3378.blendingMode = i3379[2]
  i3378.avatarMask = i3379[3]
  i3378.syncedLayerIndex = i3379[4]
  i3378.syncedLayerAffectsTiming = !!i3379[5]
  i3378.syncedLayers = i3379[6]
  i3378.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3379[7], i3378.stateMachine)
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3381 = data
  i3380.id = i3381[0]
  i3380.name = i3381[1]
  i3380.path = i3381[2]
  var i3383 = i3381[3]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 1) {
    i3382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3383[i + 0]) );
  }
  i3380.states = i3382
  var i3385 = i3381[4]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3385[i + 0]) );
  }
  i3380.machines = i3384
  var i3387 = i3381[5]
  var i3386 = []
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3387[i + 0]) );
  }
  i3380.entryStateTransitions = i3386
  var i3389 = i3381[6]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3389[i + 0]) );
  }
  i3380.exitStateTransitions = i3388
  var i3391 = i3381[7]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3391[i + 0]) );
  }
  i3380.anyStateTransitions = i3390
  i3380.defaultStateId = i3381[8]
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3395 = data
  i3394.id = i3395[0]
  i3394.name = i3395[1]
  i3394.cycleOffset = i3395[2]
  i3394.cycleOffsetParameter = i3395[3]
  i3394.cycleOffsetParameterActive = !!i3395[4]
  i3394.mirror = !!i3395[5]
  i3394.mirrorParameter = i3395[6]
  i3394.mirrorParameterActive = !!i3395[7]
  i3394.motionId = i3395[8]
  i3394.nameHash = i3395[9]
  i3394.fullPathHash = i3395[10]
  i3394.speed = i3395[11]
  i3394.speedParameter = i3395[12]
  i3394.speedParameterActive = !!i3395[13]
  i3394.tag = i3395[14]
  i3394.tagHash = i3395[15]
  i3394.writeDefaultValues = !!i3395[16]
  var i3397 = i3395[17]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 2, i3396, '')
  }
  i3394.behaviours = i3396
  var i3399 = i3395[18]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3399[i + 0]) );
  }
  i3394.transitions = i3398
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3405 = data
  i3404.fullPath = i3405[0]
  i3404.canTransitionToSelf = !!i3405[1]
  i3404.duration = i3405[2]
  i3404.exitTime = i3405[3]
  i3404.hasExitTime = !!i3405[4]
  i3404.hasFixedDuration = !!i3405[5]
  i3404.interruptionSource = i3405[6]
  i3404.offset = i3405[7]
  i3404.orderedInterruption = !!i3405[8]
  i3404.destinationStateId = i3405[9]
  i3404.isExit = !!i3405[10]
  i3404.mute = !!i3405[11]
  i3404.solo = !!i3405[12]
  var i3407 = i3405[13]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3407[i + 0]) );
  }
  i3404.conditions = i3406
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3413 = data
  i3412.destinationStateId = i3413[0]
  i3412.isExit = !!i3413[1]
  i3412.mute = !!i3413[2]
  i3412.solo = !!i3413[3]
  var i3415 = i3413[4]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3415[i + 0]) );
  }
  i3412.conditions = i3414
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3419 = data
  i3418.mode = i3419[0]
  i3418.parameter = i3419[1]
  i3418.threshold = i3419[2]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3423 = data
  i3422.defaultBool = !!i3423[0]
  i3422.defaultFloat = i3423[1]
  i3422.defaultInt = i3423[2]
  i3422.name = i3423[3]
  i3422.nameHash = i3423[4]
  i3422.type = i3423[5]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3425 = data
  i3424.name = i3425[0]
  i3424.bytes64 = i3425[1]
  i3424.data = i3425[2]
  return i3424
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3426 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3427 = data
  i3426.useSafeMode = !!i3427[0]
  i3426.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3427[1], i3426.safeModeOptions)
  i3426.timeScale = i3427[2]
  i3426.unscaledTimeScale = i3427[3]
  i3426.useSmoothDeltaTime = !!i3427[4]
  i3426.maxSmoothUnscaledTime = i3427[5]
  i3426.rewindCallbackMode = i3427[6]
  i3426.showUnityEditorReport = !!i3427[7]
  i3426.logBehaviour = i3427[8]
  i3426.drawGizmos = !!i3427[9]
  i3426.defaultRecyclable = !!i3427[10]
  i3426.defaultAutoPlay = i3427[11]
  i3426.defaultUpdateType = i3427[12]
  i3426.defaultTimeScaleIndependent = !!i3427[13]
  i3426.defaultEaseType = i3427[14]
  i3426.defaultEaseOvershootOrAmplitude = i3427[15]
  i3426.defaultEasePeriod = i3427[16]
  i3426.defaultAutoKill = !!i3427[17]
  i3426.defaultLoopType = i3427[18]
  i3426.debugMode = !!i3427[19]
  i3426.debugStoreTargetId = !!i3427[20]
  i3426.showPreviewPanel = !!i3427[21]
  i3426.storeSettingsLocation = i3427[22]
  i3426.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3427[23], i3426.modules)
  i3426.createASMDEF = !!i3427[24]
  i3426.showPlayingTweens = !!i3427[25]
  i3426.showPausedTweens = !!i3427[26]
  return i3426
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3428 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3429 = data
  i3428.logBehaviour = i3429[0]
  i3428.nestedTweenFailureBehaviour = i3429[1]
  return i3428
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3430 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3431 = data
  i3430.showPanel = !!i3431[0]
  i3430.audioEnabled = !!i3431[1]
  i3430.physicsEnabled = !!i3431[2]
  i3430.physics2DEnabled = !!i3431[3]
  i3430.spriteEnabled = !!i3431[4]
  i3430.uiEnabled = !!i3431[5]
  i3430.uiToolkitEnabled = !!i3431[6]
  i3430.textMeshProEnabled = !!i3431[7]
  i3430.tk2DEnabled = !!i3431[8]
  i3430.deAudioEnabled = !!i3431[9]
  i3430.deUnityExtendedEnabled = !!i3431[10]
  i3430.epoOutlineEnabled = !!i3431[11]
  return i3430
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3432 = root || request.c( 'TMPro.TMP_Settings' )
  var i3433 = data
  i3432.assetVersion = i3433[0]
  i3432.m_TextWrappingMode = i3433[1]
  i3432.m_enableKerning = !!i3433[2]
  var i3435 = i3433[3]
  var i3434 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.add(i3435[i + 0]);
  }
  i3432.m_ActiveFontFeatures = i3434
  i3432.m_enableExtraPadding = !!i3433[4]
  i3432.m_enableTintAllSprites = !!i3433[5]
  i3432.m_enableParseEscapeCharacters = !!i3433[6]
  i3432.m_EnableRaycastTarget = !!i3433[7]
  i3432.m_GetFontFeaturesAtRuntime = !!i3433[8]
  i3432.m_missingGlyphCharacter = i3433[9]
  i3432.m_ClearDynamicDataOnBuild = !!i3433[10]
  i3432.m_warningsDisabled = !!i3433[11]
  request.r(i3433[12], i3433[13], 0, i3432, 'm_defaultFontAsset')
  i3432.m_defaultFontAssetPath = i3433[14]
  i3432.m_defaultFontSize = i3433[15]
  i3432.m_defaultAutoSizeMinRatio = i3433[16]
  i3432.m_defaultAutoSizeMaxRatio = i3433[17]
  i3432.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3433[18], i3433[19] )
  i3432.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3433[20], i3433[21] )
  i3432.m_autoSizeTextContainer = !!i3433[22]
  i3432.m_IsTextObjectScaleStatic = !!i3433[23]
  var i3437 = i3433[24]
  var i3436 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 1, i3436, '')
  }
  i3432.m_fallbackFontAssets = i3436
  i3432.m_matchMaterialPreset = !!i3433[25]
  i3432.m_HideSubTextObjects = !!i3433[26]
  request.r(i3433[27], i3433[28], 0, i3432, 'm_defaultSpriteAsset')
  i3432.m_defaultSpriteAssetPath = i3433[29]
  i3432.m_enableEmojiSupport = !!i3433[30]
  i3432.m_MissingCharacterSpriteUnicode = i3433[31]
  var i3439 = i3433[32]
  var i3438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 1, i3438, '')
  }
  i3432.m_EmojiFallbackTextAssets = i3438
  i3432.m_defaultColorGradientPresetsPath = i3433[33]
  request.r(i3433[34], i3433[35], 0, i3432, 'm_defaultStyleSheet')
  i3432.m_StyleSheetsResourcePath = i3433[36]
  request.r(i3433[37], i3433[38], 0, i3432, 'm_leadingCharacters')
  request.r(i3433[39], i3433[40], 0, i3432, 'm_followingCharacters')
  i3432.m_UseModernHangulLineBreakingRules = !!i3433[41]
  return i3432
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3446 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'spriteSheet')
  var i3449 = i3447[2]
  var i3448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3449.length; i += 1) {
    i3448.add(request.d('TMPro.TMP_Sprite', i3449[i + 0]));
  }
  i3446.spriteInfoList = i3448
  var i3451 = i3447[3]
  var i3450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3451.length; i += 2) {
  request.r(i3451[i + 0], i3451[i + 1], 1, i3450, '')
  }
  i3446.fallbackSpriteAssets = i3450
  var i3453 = i3447[4]
  var i3452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.add(request.d('TMPro.TMP_SpriteCharacter', i3453[i + 0]));
  }
  i3446.m_SpriteCharacterTable = i3452
  var i3455 = i3447[5]
  var i3454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.add(request.d('TMPro.TMP_SpriteGlyph', i3455[i + 0]));
  }
  i3446.m_GlyphTable = i3454
  i3446.m_Version = i3447[6]
  i3446.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3447[7], i3446.m_FaceInfo)
  request.r(i3447[8], i3447[9], 0, i3446, 'm_Material')
  return i3446
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3458 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3459 = data
  i3458.name = i3459[0]
  i3458.hashCode = i3459[1]
  i3458.unicode = i3459[2]
  i3458.pivot = new pc.Vec2( i3459[3], i3459[4] )
  request.r(i3459[5], i3459[6], 0, i3458, 'sprite')
  i3458.id = i3459[7]
  i3458.x = i3459[8]
  i3458.y = i3459[9]
  i3458.width = i3459[10]
  i3458.height = i3459[11]
  i3458.xOffset = i3459[12]
  i3458.yOffset = i3459[13]
  i3458.xAdvance = i3459[14]
  i3458.scale = i3459[15]
  return i3458
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3464 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3465 = data
  i3464.m_Name = i3465[0]
  i3464.m_ElementType = i3465[1]
  i3464.m_Unicode = i3465[2]
  i3464.m_GlyphIndex = i3465[3]
  i3464.m_Scale = i3465[4]
  return i3464
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3468 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'sprite')
  i3468.m_Index = i3469[2]
  i3468.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3469[3], i3468.m_Metrics)
  i3468.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3469[4], i3468.m_GlyphRect)
  i3468.m_Scale = i3469[5]
  i3468.m_AtlasIndex = i3469[6]
  i3468.m_ClassDefinitionType = i3469[7]
  return i3468
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3471 = data
  i3470.m_Width = i3471[0]
  i3470.m_Height = i3471[1]
  i3470.m_HorizontalBearingX = i3471[2]
  i3470.m_HorizontalBearingY = i3471[3]
  i3470.m_HorizontalAdvance = i3471[4]
  return i3470
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3472 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3473 = data
  i3472.m_X = i3473[0]
  i3472.m_Y = i3473[1]
  i3472.m_Width = i3473[2]
  i3472.m_Height = i3473[3]
  return i3472
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3475 = data
  i3474.m_FaceIndex = i3475[0]
  i3474.m_FamilyName = i3475[1]
  i3474.m_StyleName = i3475[2]
  i3474.m_PointSize = i3475[3]
  i3474.m_Scale = i3475[4]
  i3474.m_UnitsPerEM = i3475[5]
  i3474.m_LineHeight = i3475[6]
  i3474.m_AscentLine = i3475[7]
  i3474.m_CapLine = i3475[8]
  i3474.m_MeanLine = i3475[9]
  i3474.m_Baseline = i3475[10]
  i3474.m_DescentLine = i3475[11]
  i3474.m_SuperscriptOffset = i3475[12]
  i3474.m_SuperscriptSize = i3475[13]
  i3474.m_SubscriptOffset = i3475[14]
  i3474.m_SubscriptSize = i3475[15]
  i3474.m_UnderlineOffset = i3475[16]
  i3474.m_UnderlineThickness = i3475[17]
  i3474.m_StrikethroughOffset = i3475[18]
  i3474.m_StrikethroughThickness = i3475[19]
  i3474.m_TabWidth = i3475[20]
  return i3474
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3476 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3477 = data
  var i3479 = i3477[0]
  var i3478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.add(request.d('TMPro.TMP_Style', i3479[i + 0]));
  }
  i3476.m_StyleList = i3478
  return i3476
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3482 = root || request.c( 'TMPro.TMP_Style' )
  var i3483 = data
  i3482.m_Name = i3483[0]
  i3482.m_HashCode = i3483[1]
  i3482.m_OpeningDefinition = i3483[2]
  i3482.m_ClosingDefinition = i3483[3]
  i3482.m_OpeningTagArray = i3483[4]
  i3482.m_ClosingTagArray = i3483[5]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3485 = data
  var i3487 = i3485[0]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3487[i + 0]) );
  }
  i3484.files = i3486
  i3484.componentToPrefabIds = i3485[1]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3491 = data
  i3490.path = i3491[0]
  request.r(i3491[1], i3491[2], 0, i3490, 'unityObject')
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3493 = data
  var i3495 = i3493[0]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3495[i + 0]) );
  }
  i3492.scriptsExecutionOrder = i3494
  var i3497 = i3493[1]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3497[i + 0]) );
  }
  i3492.sortingLayers = i3496
  var i3499 = i3493[2]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3499[i + 0]) );
  }
  i3492.cullingLayers = i3498
  i3492.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3493[3], i3492.timeSettings)
  i3492.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3493[4], i3492.physicsSettings)
  i3492.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3493[5], i3492.physics2DSettings)
  i3492.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3493[6], i3492.qualitySettings)
  i3492.enableRealtimeShadows = !!i3493[7]
  i3492.enableAutoInstancing = !!i3493[8]
  i3492.enableStaticBatching = !!i3493[9]
  i3492.enableDynamicBatching = !!i3493[10]
  i3492.lightmapEncodingQuality = i3493[11]
  i3492.desiredColorSpace = i3493[12]
  var i3501 = i3493[13]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( i3501[i + 0] );
  }
  i3492.allTags = i3500
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3505 = data
  i3504.name = i3505[0]
  i3504.value = i3505[1]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3509 = data
  i3508.id = i3509[0]
  i3508.name = i3509[1]
  i3508.value = i3509[2]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3513 = data
  i3512.id = i3513[0]
  i3512.name = i3513[1]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3515 = data
  i3514.fixedDeltaTime = i3515[0]
  i3514.maximumDeltaTime = i3515[1]
  i3514.timeScale = i3515[2]
  i3514.maximumParticleTimestep = i3515[3]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3517 = data
  i3516.gravity = new pc.Vec3( i3517[0], i3517[1], i3517[2] )
  i3516.defaultSolverIterations = i3517[3]
  i3516.bounceThreshold = i3517[4]
  i3516.autoSyncTransforms = !!i3517[5]
  i3516.autoSimulation = !!i3517[6]
  var i3519 = i3517[7]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3519[i + 0]) );
  }
  i3516.collisionMatrix = i3518
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3523 = data
  i3522.enabled = !!i3523[0]
  i3522.layerId = i3523[1]
  i3522.otherLayerId = i3523[2]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3525 = data
  request.r(i3525[0], i3525[1], 0, i3524, 'material')
  i3524.gravity = new pc.Vec2( i3525[2], i3525[3] )
  i3524.positionIterations = i3525[4]
  i3524.velocityIterations = i3525[5]
  i3524.velocityThreshold = i3525[6]
  i3524.maxLinearCorrection = i3525[7]
  i3524.maxAngularCorrection = i3525[8]
  i3524.maxTranslationSpeed = i3525[9]
  i3524.maxRotationSpeed = i3525[10]
  i3524.baumgarteScale = i3525[11]
  i3524.baumgarteTOIScale = i3525[12]
  i3524.timeToSleep = i3525[13]
  i3524.linearSleepTolerance = i3525[14]
  i3524.angularSleepTolerance = i3525[15]
  i3524.defaultContactOffset = i3525[16]
  i3524.autoSimulation = !!i3525[17]
  i3524.queriesHitTriggers = !!i3525[18]
  i3524.queriesStartInColliders = !!i3525[19]
  i3524.callbacksOnDisable = !!i3525[20]
  i3524.reuseCollisionCallbacks = !!i3525[21]
  i3524.autoSyncTransforms = !!i3525[22]
  var i3527 = i3525[23]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3527[i + 0]) );
  }
  i3524.collisionMatrix = i3526
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3531 = data
  i3530.enabled = !!i3531[0]
  i3530.layerId = i3531[1]
  i3530.otherLayerId = i3531[2]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3533 = data
  var i3535 = i3533[0]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3535[i + 0]) );
  }
  i3532.qualityLevels = i3534
  var i3537 = i3533[1]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( i3537[i + 0] );
  }
  i3532.names = i3536
  i3532.shadows = i3533[2]
  i3532.anisotropicFiltering = i3533[3]
  i3532.antiAliasing = i3533[4]
  i3532.lodBias = i3533[5]
  i3532.shadowCascades = i3533[6]
  i3532.shadowDistance = i3533[7]
  i3532.shadowmaskMode = i3533[8]
  i3532.shadowProjection = i3533[9]
  i3532.shadowResolution = i3533[10]
  i3532.softParticles = !!i3533[11]
  i3532.softVegetation = !!i3533[12]
  i3532.activeColorSpace = i3533[13]
  i3532.desiredColorSpace = i3533[14]
  i3532.masterTextureLimit = i3533[15]
  i3532.maxQueuedFrames = i3533[16]
  i3532.particleRaycastBudget = i3533[17]
  i3532.pixelLightCount = i3533[18]
  i3532.realtimeReflectionProbes = !!i3533[19]
  i3532.shadowCascade2Split = i3533[20]
  i3532.shadowCascade4Split = new pc.Vec3( i3533[21], i3533[22], i3533[23] )
  i3532.streamingMipmapsActive = !!i3533[24]
  i3532.vSyncCount = i3533[25]
  i3532.asyncUploadBufferSize = i3533[26]
  i3532.asyncUploadTimeSlice = i3533[27]
  i3532.billboardsFaceCameraPosition = !!i3533[28]
  i3532.shadowNearPlaneOffset = i3533[29]
  i3532.streamingMipmapsMemoryBudget = i3533[30]
  i3532.maximumLODLevel = i3533[31]
  i3532.streamingMipmapsAddAllCameras = !!i3533[32]
  i3532.streamingMipmapsMaxLevelReduction = i3533[33]
  i3532.streamingMipmapsRenderersPerFrame = i3533[34]
  i3532.resolutionScalingFixedDPIFactor = i3533[35]
  i3532.streamingMipmapsMaxFileIORequests = i3533[36]
  i3532.currentQualityLevel = i3533[37]
  return i3532
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[34],"65":[9],"66":[36],"67":[36],"68":[36],"69":[36],"70":[36],"71":[36],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[9],"87":[25],"88":[89],"90":[89],"8":[7],"91":[28],"92":[8],"93":[7],"94":[25,7],"95":[7,13],"96":[7],"97":[13,7],"98":[25],"99":[13,7],"100":[7],"101":[102],"103":[102],"104":[102],"105":[7],"106":[7],"12":[8],"14":[13,7],"107":[7],"11":[8],"108":[7],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"15":[13,7],"117":[7],"118":[7],"119":[7],"120":[7],"121":[13,7],"122":[7],"123":[28],"124":[28],"29":[28],"125":[28],"126":[9],"127":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SkinnedMeshRenderer","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "25.7";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_V21-";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1746";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5151";

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

Deserializers.buildID = "407d09d1-004c-40f9-b355-f20613392540";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

