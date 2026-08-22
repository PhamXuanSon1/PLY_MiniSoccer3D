var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i11266 = root || request.c( 'UnityEngine.JointSpring' )
  var i11267 = data
  i11266.spring = i11267[0]
  i11266.damper = i11267[1]
  i11266.targetPosition = i11267[2]
  return i11266
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i11268 = root || request.c( 'UnityEngine.JointMotor' )
  var i11269 = data
  i11268.m_TargetVelocity = i11269[0]
  i11268.m_Force = i11269[1]
  i11268.m_FreeSpin = i11269[2]
  return i11268
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i11270 = root || request.c( 'UnityEngine.JointLimits' )
  var i11271 = data
  i11270.m_Min = i11271[0]
  i11270.m_Max = i11271[1]
  i11270.m_Bounciness = i11271[2]
  i11270.m_BounceMinVelocity = i11271[3]
  i11270.m_ContactDistance = i11271[4]
  i11270.minBounce = i11271[5]
  i11270.maxBounce = i11271[6]
  return i11270
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i11272 = root || request.c( 'UnityEngine.JointDrive' )
  var i11273 = data
  i11272.m_PositionSpring = i11273[0]
  i11272.m_PositionDamper = i11273[1]
  i11272.m_MaximumForce = i11273[2]
  i11272.m_UseAcceleration = i11273[3]
  return i11272
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i11274 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i11275 = data
  i11274.m_Spring = i11275[0]
  i11274.m_Damper = i11275[1]
  return i11274
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i11276 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i11277 = data
  i11276.m_Limit = i11277[0]
  i11276.m_Bounciness = i11277[1]
  i11276.m_ContactDistance = i11277[2]
  return i11276
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i11278 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i11279 = data
  i11278.m_ExtremumSlip = i11279[0]
  i11278.m_ExtremumValue = i11279[1]
  i11278.m_AsymptoteSlip = i11279[2]
  i11278.m_AsymptoteValue = i11279[3]
  i11278.m_Stiffness = i11279[4]
  return i11278
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i11280 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i11281 = data
  i11280.m_LowerAngle = i11281[0]
  i11280.m_UpperAngle = i11281[1]
  return i11280
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i11282 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i11283 = data
  i11282.m_MotorSpeed = i11283[0]
  i11282.m_MaximumMotorTorque = i11283[1]
  return i11282
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i11284 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i11285 = data
  i11284.m_DampingRatio = i11285[0]
  i11284.m_Frequency = i11285[1]
  i11284.m_Angle = i11285[2]
  return i11284
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i11286 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i11287 = data
  i11286.m_LowerTranslation = i11287[0]
  i11286.m_UpperTranslation = i11287[1]
  return i11286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i11288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i11289 = data
  i11288.name = i11289[0]
  i11288.halfPrecision = !!i11289[1]
  i11288.useSimplification = !!i11289[2]
  i11288.useUInt32IndexFormat = !!i11289[3]
  i11288.vertexCount = i11289[4]
  i11288.aabb = i11289[5]
  var i11291 = i11289[6]
  var i11290 = []
  for(var i = 0; i < i11291.length; i += 1) {
    i11290.push( !!i11291[i + 0] );
  }
  i11288.streams = i11290
  i11288.vertices = i11289[7]
  var i11293 = i11289[8]
  var i11292 = []
  for(var i = 0; i < i11293.length; i += 1) {
    i11292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i11293[i + 0]) );
  }
  i11288.subMeshes = i11292
  var i11295 = i11289[9]
  var i11294 = []
  for(var i = 0; i < i11295.length; i += 16) {
    i11294.push( new pc.Mat4().setData(i11295[i + 0], i11295[i + 1], i11295[i + 2], i11295[i + 3],  i11295[i + 4], i11295[i + 5], i11295[i + 6], i11295[i + 7],  i11295[i + 8], i11295[i + 9], i11295[i + 10], i11295[i + 11],  i11295[i + 12], i11295[i + 13], i11295[i + 14], i11295[i + 15]) );
  }
  i11288.bindposes = i11294
  var i11297 = i11289[10]
  var i11296 = []
  for(var i = 0; i < i11297.length; i += 1) {
    i11296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i11297[i + 0]) );
  }
  i11288.blendShapes = i11296
  return i11288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i11302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i11303 = data
  i11302.triangles = i11303[0]
  return i11302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i11308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i11309 = data
  i11308.name = i11309[0]
  var i11311 = i11309[1]
  var i11310 = []
  for(var i = 0; i < i11311.length; i += 1) {
    i11310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i11311[i + 0]) );
  }
  i11308.frames = i11310
  return i11308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i11312 = root || new pc.UnityMaterial()
  var i11313 = data
  i11312.name = i11313[0]
  request.r(i11313[1], i11313[2], 0, i11312, 'shader')
  i11312.renderQueue = i11313[3]
  i11312.enableInstancing = !!i11313[4]
  var i11315 = i11313[5]
  var i11314 = []
  for(var i = 0; i < i11315.length; i += 1) {
    i11314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i11315[i + 0]) );
  }
  i11312.floatParameters = i11314
  var i11317 = i11313[6]
  var i11316 = []
  for(var i = 0; i < i11317.length; i += 1) {
    i11316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i11317[i + 0]) );
  }
  i11312.colorParameters = i11316
  var i11319 = i11313[7]
  var i11318 = []
  for(var i = 0; i < i11319.length; i += 1) {
    i11318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i11319[i + 0]) );
  }
  i11312.vectorParameters = i11318
  var i11321 = i11313[8]
  var i11320 = []
  for(var i = 0; i < i11321.length; i += 1) {
    i11320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i11321[i + 0]) );
  }
  i11312.textureParameters = i11320
  var i11323 = i11313[9]
  var i11322 = []
  for(var i = 0; i < i11323.length; i += 1) {
    i11322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i11323[i + 0]) );
  }
  i11312.materialFlags = i11322
  return i11312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i11326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i11327 = data
  i11326.name = i11327[0]
  i11326.value = i11327[1]
  return i11326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i11330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i11331 = data
  i11330.name = i11331[0]
  i11330.value = new pc.Color(i11331[1], i11331[2], i11331[3], i11331[4])
  return i11330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i11334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i11335 = data
  i11334.name = i11335[0]
  i11334.value = new pc.Vec4( i11335[1], i11335[2], i11335[3], i11335[4] )
  return i11334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i11338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i11339 = data
  i11338.name = i11339[0]
  request.r(i11339[1], i11339[2], 0, i11338, 'value')
  return i11338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i11342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i11343 = data
  i11342.name = i11343[0]
  i11342.enabled = !!i11343[1]
  return i11342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i11344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i11345 = data
  i11344.name = i11345[0]
  i11344.width = i11345[1]
  i11344.height = i11345[2]
  i11344.mipmapCount = i11345[3]
  i11344.anisoLevel = i11345[4]
  i11344.filterMode = i11345[5]
  i11344.hdr = !!i11345[6]
  i11344.format = i11345[7]
  i11344.wrapMode = i11345[8]
  i11344.alphaIsTransparency = !!i11345[9]
  i11344.alphaSource = i11345[10]
  i11344.graphicsFormat = i11345[11]
  i11344.sRGBTexture = !!i11345[12]
  i11344.desiredColorSpace = i11345[13]
  i11344.wrapU = i11345[14]
  i11344.wrapV = i11345[15]
  return i11344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i11346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i11347 = data
  i11346.position = new pc.Vec3( i11347[0], i11347[1], i11347[2] )
  i11346.scale = new pc.Vec3( i11347[3], i11347[4], i11347[5] )
  i11346.rotation = new pc.Quat(i11347[6], i11347[7], i11347[8], i11347[9])
  return i11346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i11348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i11349 = data
  i11348.center = new pc.Vec3( i11349[0], i11349[1], i11349[2] )
  i11348.size = new pc.Vec3( i11349[3], i11349[4], i11349[5] )
  i11348.enabled = !!i11349[6]
  i11348.isTrigger = !!i11349[7]
  request.r(i11349[8], i11349[9], 0, i11348, 'material')
  return i11348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i11350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i11351 = data
  i11350.color = new pc.Color(i11351[0], i11351[1], i11351[2], i11351[3])
  request.r(i11351[4], i11351[5], 0, i11350, 'sprite')
  i11350.flipX = !!i11351[6]
  i11350.flipY = !!i11351[7]
  i11350.drawMode = i11351[8]
  i11350.size = new pc.Vec2( i11351[9], i11351[10] )
  i11350.tileMode = i11351[11]
  i11350.adaptiveModeThreshold = i11351[12]
  i11350.maskInteraction = i11351[13]
  i11350.spriteSortPoint = i11351[14]
  i11350.enabled = !!i11351[15]
  request.r(i11351[16], i11351[17], 0, i11350, 'sharedMaterial')
  var i11353 = i11351[18]
  var i11352 = []
  for(var i = 0; i < i11353.length; i += 2) {
  request.r(i11353[i + 0], i11353[i + 1], 2, i11352, '')
  }
  i11350.sharedMaterials = i11352
  i11350.receiveShadows = !!i11351[19]
  i11350.shadowCastingMode = i11351[20]
  i11350.sortingLayerID = i11351[21]
  i11350.sortingOrder = i11351[22]
  i11350.lightmapIndex = i11351[23]
  i11350.lightmapSceneIndex = i11351[24]
  i11350.lightmapScaleOffset = new pc.Vec4( i11351[25], i11351[26], i11351[27], i11351[28] )
  i11350.lightProbeUsage = i11351[29]
  i11350.reflectionProbeUsage = i11351[30]
  return i11350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i11356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i11357 = data
  i11356.name = i11357[0]
  i11356.tagId = i11357[1]
  i11356.enabled = !!i11357[2]
  i11356.isStatic = !!i11357[3]
  i11356.layer = i11357[4]
  return i11356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11361 = data
  i11360.weight = i11361[0]
  i11360.vertices = i11361[1]
  i11360.normals = i11361[2]
  i11360.tangents = i11361[3]
  return i11360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i11362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i11363 = data
  i11362.pivot = new pc.Vec2( i11363[0], i11363[1] )
  i11362.anchorMin = new pc.Vec2( i11363[2], i11363[3] )
  i11362.anchorMax = new pc.Vec2( i11363[4], i11363[5] )
  i11362.sizeDelta = new pc.Vec2( i11363[6], i11363[7] )
  i11362.anchoredPosition3D = new pc.Vec3( i11363[8], i11363[9], i11363[10] )
  i11362.rotation = new pc.Quat(i11363[11], i11363[12], i11363[13], i11363[14])
  i11362.scale = new pc.Vec3( i11363[15], i11363[16], i11363[17] )
  return i11362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i11364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i11365 = data
  i11364.planeDistance = i11365[0]
  i11364.referencePixelsPerUnit = i11365[1]
  i11364.isFallbackOverlay = !!i11365[2]
  i11364.renderMode = i11365[3]
  i11364.renderOrder = i11365[4]
  i11364.sortingLayerName = i11365[5]
  i11364.sortingOrder = i11365[6]
  i11364.scaleFactor = i11365[7]
  request.r(i11365[8], i11365[9], 0, i11364, 'worldCamera')
  i11364.overrideSorting = !!i11365[10]
  i11364.pixelPerfect = !!i11365[11]
  i11364.targetDisplay = i11365[12]
  i11364.overridePixelPerfect = !!i11365[13]
  i11364.enabled = !!i11365[14]
  return i11364
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i11366 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i11367 = data
  i11366.m_UiScaleMode = i11367[0]
  i11366.m_ReferencePixelsPerUnit = i11367[1]
  i11366.m_ScaleFactor = i11367[2]
  i11366.m_ReferenceResolution = new pc.Vec2( i11367[3], i11367[4] )
  i11366.m_ScreenMatchMode = i11367[5]
  i11366.m_MatchWidthOrHeight = i11367[6]
  i11366.m_PhysicalUnit = i11367[7]
  i11366.m_FallbackScreenDPI = i11367[8]
  i11366.m_DefaultSpriteDPI = i11367[9]
  i11366.m_DynamicPixelsPerUnit = i11367[10]
  i11366.m_PresetInfoIsWorld = !!i11367[11]
  return i11366
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i11368 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i11369 = data
  i11368.m_IgnoreReversedGraphics = !!i11369[0]
  i11368.m_BlockingObjects = i11369[1]
  i11368.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i11369[2] )
  return i11368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i11370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i11371 = data
  i11370.cullTransparentMesh = !!i11371[0]
  return i11370
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i11372 = root || request.c( 'UnityEngine.UI.Image' )
  var i11373 = data
  request.r(i11373[0], i11373[1], 0, i11372, 'm_Sprite')
  i11372.m_Type = i11373[2]
  i11372.m_PreserveAspect = !!i11373[3]
  i11372.m_FillCenter = !!i11373[4]
  i11372.m_FillMethod = i11373[5]
  i11372.m_FillAmount = i11373[6]
  i11372.m_FillClockwise = !!i11373[7]
  i11372.m_FillOrigin = i11373[8]
  i11372.m_UseSpriteMesh = !!i11373[9]
  i11372.m_PixelsPerUnitMultiplier = i11373[10]
  request.r(i11373[11], i11373[12], 0, i11372, 'm_Material')
  i11372.m_Maskable = !!i11373[13]
  i11372.m_Color = new pc.Color(i11373[14], i11373[15], i11373[16], i11373[17])
  i11372.m_RaycastTarget = !!i11373[18]
  i11372.m_RaycastPadding = new pc.Vec4( i11373[19], i11373[20], i11373[21], i11373[22] )
  return i11372
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i11374 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i11375 = data
  request.r(i11375[0], i11375[1], 0, i11374, 'm_Texture')
  i11374.m_UVRect = UnityEngine.Rect.MinMaxRect(i11375[2], i11375[3], i11375[4], i11375[5])
  request.r(i11375[6], i11375[7], 0, i11374, 'm_Material')
  i11374.m_Maskable = !!i11375[8]
  i11374.m_Color = new pc.Color(i11375[9], i11375[10], i11375[11], i11375[12])
  i11374.m_RaycastTarget = !!i11375[13]
  i11374.m_RaycastPadding = new pc.Vec4( i11375[14], i11375[15], i11375[16], i11375[17] )
  return i11374
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i11376 = root || request.c( 'ImageScroller' )
  var i11377 = data
  request.r(i11377[0], i11377[1], 0, i11376, 'rawImage')
  i11376.moveVector = new pc.Vec2( i11377[2], i11377[3] )
  return i11376
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i11378 = root || request.c( 'UIGuidingMove' )
  var i11379 = data
  request.r(i11379[0], i11379[1], 0, i11378, 'target')
  i11378.startPosition = new pc.Vec2( i11379[2], i11379[3] )
  i11378.endPosition = new pc.Vec2( i11379[4], i11379[5] )
  i11378.duration = i11379[6]
  i11378.ease = i11379[7]
  i11378.resetToStartOnComplete = !!i11379[8]
  i11378.loop = !!i11379[9]
  i11378.loopCount = i11379[10]
  i11378.loopType = i11379[11]
  return i11378
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i11380 = root || request.c( 'UIPulse' )
  var i11381 = data
  i11380.targetScale = new pc.Vec3( i11381[0], i11381[1], i11381[2] )
  i11380.duration = i11381[3]
  i11380.ease = i11381[4]
  return i11380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i11382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i11383 = data
  i11382.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i11383[0], i11382.main)
  i11382.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i11383[1], i11382.colorBySpeed)
  i11382.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i11383[2], i11382.colorOverLifetime)
  i11382.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i11383[3], i11382.emission)
  i11382.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i11383[4], i11382.rotationBySpeed)
  i11382.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i11383[5], i11382.rotationOverLifetime)
  i11382.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i11383[6], i11382.shape)
  i11382.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i11383[7], i11382.sizeBySpeed)
  i11382.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i11383[8], i11382.sizeOverLifetime)
  i11382.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i11383[9], i11382.textureSheetAnimation)
  i11382.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i11383[10], i11382.velocityOverLifetime)
  i11382.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i11383[11], i11382.noise)
  i11382.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i11383[12], i11382.inheritVelocity)
  i11382.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i11383[13], i11382.forceOverLifetime)
  i11382.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i11383[14], i11382.limitVelocityOverLifetime)
  i11382.useAutoRandomSeed = !!i11383[15]
  i11382.randomSeed = i11383[16]
  return i11382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i11384 = root || new pc.ParticleSystemMain()
  var i11385 = data
  i11384.duration = i11385[0]
  i11384.loop = !!i11385[1]
  i11384.prewarm = !!i11385[2]
  i11384.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[3], i11384.startDelay)
  i11384.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[4], i11384.startLifetime)
  i11384.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[5], i11384.startSpeed)
  i11384.startSize3D = !!i11385[6]
  i11384.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[7], i11384.startSizeX)
  i11384.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[8], i11384.startSizeY)
  i11384.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[9], i11384.startSizeZ)
  i11384.startRotation3D = !!i11385[10]
  i11384.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[11], i11384.startRotationX)
  i11384.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[12], i11384.startRotationY)
  i11384.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[13], i11384.startRotationZ)
  i11384.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11385[14], i11384.startColor)
  i11384.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11385[15], i11384.gravityModifier)
  i11384.simulationSpace = i11385[16]
  request.r(i11385[17], i11385[18], 0, i11384, 'customSimulationSpace')
  i11384.simulationSpeed = i11385[19]
  i11384.useUnscaledTime = !!i11385[20]
  i11384.scalingMode = i11385[21]
  i11384.playOnAwake = !!i11385[22]
  i11384.maxParticles = i11385[23]
  i11384.emitterVelocityMode = i11385[24]
  i11384.stopAction = i11385[25]
  return i11384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i11386 = root || new pc.MinMaxCurve()
  var i11387 = data
  i11386.mode = i11387[0]
  i11386.curveMin = new pc.AnimationCurve( { keys_flow: i11387[1] } )
  i11386.curveMax = new pc.AnimationCurve( { keys_flow: i11387[2] } )
  i11386.curveMultiplier = i11387[3]
  i11386.constantMin = i11387[4]
  i11386.constantMax = i11387[5]
  return i11386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i11388 = root || new pc.MinMaxGradient()
  var i11389 = data
  i11388.mode = i11389[0]
  i11388.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11389[1], i11388.gradientMin)
  i11388.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11389[2], i11388.gradientMax)
  i11388.colorMin = new pc.Color(i11389[3], i11389[4], i11389[5], i11389[6])
  i11388.colorMax = new pc.Color(i11389[7], i11389[8], i11389[9], i11389[10])
  return i11388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i11390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i11391 = data
  i11390.mode = i11391[0]
  var i11393 = i11391[1]
  var i11392 = []
  for(var i = 0; i < i11393.length; i += 1) {
    i11392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i11393[i + 0]) );
  }
  i11390.colorKeys = i11392
  var i11395 = i11391[2]
  var i11394 = []
  for(var i = 0; i < i11395.length; i += 1) {
    i11394.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i11395[i + 0]) );
  }
  i11390.alphaKeys = i11394
  return i11390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i11396 = root || new pc.ParticleSystemColorBySpeed()
  var i11397 = data
  i11396.enabled = !!i11397[0]
  i11396.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11397[1], i11396.color)
  i11396.range = new pc.Vec2( i11397[2], i11397[3] )
  return i11396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i11400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i11401 = data
  i11400.color = new pc.Color(i11401[0], i11401[1], i11401[2], i11401[3])
  i11400.time = i11401[4]
  return i11400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i11404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i11405 = data
  i11404.alpha = i11405[0]
  i11404.time = i11405[1]
  return i11404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i11406 = root || new pc.ParticleSystemColorOverLifetime()
  var i11407 = data
  i11406.enabled = !!i11407[0]
  i11406.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11407[1], i11406.color)
  return i11406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i11408 = root || new pc.ParticleSystemEmitter()
  var i11409 = data
  i11408.enabled = !!i11409[0]
  i11408.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11409[1], i11408.rateOverTime)
  i11408.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11409[2], i11408.rateOverDistance)
  var i11411 = i11409[3]
  var i11410 = []
  for(var i = 0; i < i11411.length; i += 1) {
    i11410.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i11411[i + 0]) );
  }
  i11408.bursts = i11410
  return i11408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i11414 = root || new pc.ParticleSystemBurst()
  var i11415 = data
  i11414.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[0], i11414.count)
  i11414.cycleCount = i11415[1]
  i11414.minCount = i11415[2]
  i11414.maxCount = i11415[3]
  i11414.repeatInterval = i11415[4]
  i11414.time = i11415[5]
  return i11414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i11416 = root || new pc.ParticleSystemRotationBySpeed()
  var i11417 = data
  i11416.enabled = !!i11417[0]
  i11416.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[1], i11416.x)
  i11416.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[2], i11416.y)
  i11416.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[3], i11416.z)
  i11416.separateAxes = !!i11417[4]
  i11416.range = new pc.Vec2( i11417[5], i11417[6] )
  return i11416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i11418 = root || new pc.ParticleSystemRotationOverLifetime()
  var i11419 = data
  i11418.enabled = !!i11419[0]
  i11418.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11419[1], i11418.x)
  i11418.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11419[2], i11418.y)
  i11418.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11419[3], i11418.z)
  i11418.separateAxes = !!i11419[4]
  return i11418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i11420 = root || new pc.ParticleSystemShape()
  var i11421 = data
  i11420.enabled = !!i11421[0]
  i11420.shapeType = i11421[1]
  i11420.randomDirectionAmount = i11421[2]
  i11420.sphericalDirectionAmount = i11421[3]
  i11420.randomPositionAmount = i11421[4]
  i11420.alignToDirection = !!i11421[5]
  i11420.radius = i11421[6]
  i11420.radiusMode = i11421[7]
  i11420.radiusSpread = i11421[8]
  i11420.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11421[9], i11420.radiusSpeed)
  i11420.radiusThickness = i11421[10]
  i11420.angle = i11421[11]
  i11420.length = i11421[12]
  i11420.boxThickness = new pc.Vec3( i11421[13], i11421[14], i11421[15] )
  i11420.meshShapeType = i11421[16]
  request.r(i11421[17], i11421[18], 0, i11420, 'mesh')
  request.r(i11421[19], i11421[20], 0, i11420, 'meshRenderer')
  request.r(i11421[21], i11421[22], 0, i11420, 'skinnedMeshRenderer')
  i11420.useMeshMaterialIndex = !!i11421[23]
  i11420.meshMaterialIndex = i11421[24]
  i11420.useMeshColors = !!i11421[25]
  i11420.normalOffset = i11421[26]
  i11420.arc = i11421[27]
  i11420.arcMode = i11421[28]
  i11420.arcSpread = i11421[29]
  i11420.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11421[30], i11420.arcSpeed)
  i11420.donutRadius = i11421[31]
  i11420.position = new pc.Vec3( i11421[32], i11421[33], i11421[34] )
  i11420.rotation = new pc.Vec3( i11421[35], i11421[36], i11421[37] )
  i11420.scale = new pc.Vec3( i11421[38], i11421[39], i11421[40] )
  return i11420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i11422 = root || new pc.ParticleSystemSizeBySpeed()
  var i11423 = data
  i11422.enabled = !!i11423[0]
  i11422.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[1], i11422.x)
  i11422.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[2], i11422.y)
  i11422.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[3], i11422.z)
  i11422.separateAxes = !!i11423[4]
  i11422.range = new pc.Vec2( i11423[5], i11423[6] )
  return i11422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i11424 = root || new pc.ParticleSystemSizeOverLifetime()
  var i11425 = data
  i11424.enabled = !!i11425[0]
  i11424.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11425[1], i11424.x)
  i11424.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11425[2], i11424.y)
  i11424.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11425[3], i11424.z)
  i11424.separateAxes = !!i11425[4]
  return i11424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i11426 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i11427 = data
  i11426.enabled = !!i11427[0]
  i11426.mode = i11427[1]
  i11426.animation = i11427[2]
  i11426.numTilesX = i11427[3]
  i11426.numTilesY = i11427[4]
  i11426.useRandomRow = !!i11427[5]
  i11426.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11427[6], i11426.frameOverTime)
  i11426.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11427[7], i11426.startFrame)
  i11426.cycleCount = i11427[8]
  i11426.rowIndex = i11427[9]
  i11426.flipU = i11427[10]
  i11426.flipV = i11427[11]
  i11426.spriteCount = i11427[12]
  var i11429 = i11427[13]
  var i11428 = []
  for(var i = 0; i < i11429.length; i += 2) {
  request.r(i11429[i + 0], i11429[i + 1], 2, i11428, '')
  }
  i11426.sprites = i11428
  return i11426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i11432 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i11433 = data
  i11432.enabled = !!i11433[0]
  i11432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[1], i11432.x)
  i11432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[2], i11432.y)
  i11432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[3], i11432.z)
  i11432.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[4], i11432.radial)
  i11432.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[5], i11432.speedModifier)
  i11432.space = i11433[6]
  i11432.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[7], i11432.orbitalX)
  i11432.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[8], i11432.orbitalY)
  i11432.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[9], i11432.orbitalZ)
  i11432.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[10], i11432.orbitalOffsetX)
  i11432.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[11], i11432.orbitalOffsetY)
  i11432.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11433[12], i11432.orbitalOffsetZ)
  return i11432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i11434 = root || new pc.ParticleSystemNoise()
  var i11435 = data
  i11434.enabled = !!i11435[0]
  i11434.separateAxes = !!i11435[1]
  i11434.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[2], i11434.strengthX)
  i11434.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[3], i11434.strengthY)
  i11434.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[4], i11434.strengthZ)
  i11434.frequency = i11435[5]
  i11434.damping = !!i11435[6]
  i11434.octaveCount = i11435[7]
  i11434.octaveMultiplier = i11435[8]
  i11434.octaveScale = i11435[9]
  i11434.quality = i11435[10]
  i11434.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[11], i11434.scrollSpeed)
  i11434.scrollSpeedMultiplier = i11435[12]
  i11434.remapEnabled = !!i11435[13]
  i11434.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[14], i11434.remapX)
  i11434.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[15], i11434.remapY)
  i11434.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[16], i11434.remapZ)
  i11434.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[17], i11434.positionAmount)
  i11434.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[18], i11434.rotationAmount)
  i11434.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11435[19], i11434.sizeAmount)
  return i11434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i11436 = root || new pc.ParticleSystemInheritVelocity()
  var i11437 = data
  i11436.enabled = !!i11437[0]
  i11436.mode = i11437[1]
  i11436.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11437[2], i11436.curve)
  return i11436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i11438 = root || new pc.ParticleSystemForceOverLifetime()
  var i11439 = data
  i11438.enabled = !!i11439[0]
  i11438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11439[1], i11438.x)
  i11438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11439[2], i11438.y)
  i11438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11439[3], i11438.z)
  i11438.space = i11439[4]
  i11438.randomized = !!i11439[5]
  return i11438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i11440 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i11441 = data
  i11440.enabled = !!i11441[0]
  i11440.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[1], i11440.limit)
  i11440.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[2], i11440.limitX)
  i11440.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[3], i11440.limitY)
  i11440.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[4], i11440.limitZ)
  i11440.dampen = i11441[5]
  i11440.separateAxes = !!i11441[6]
  i11440.space = i11441[7]
  i11440.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11441[8], i11440.drag)
  i11440.multiplyDragByParticleSize = !!i11441[9]
  i11440.multiplyDragByParticleVelocity = !!i11441[10]
  return i11440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i11442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i11443 = data
  request.r(i11443[0], i11443[1], 0, i11442, 'mesh')
  i11442.meshCount = i11443[2]
  i11442.activeVertexStreamsCount = i11443[3]
  i11442.alignment = i11443[4]
  i11442.renderMode = i11443[5]
  i11442.sortMode = i11443[6]
  i11442.lengthScale = i11443[7]
  i11442.velocityScale = i11443[8]
  i11442.cameraVelocityScale = i11443[9]
  i11442.normalDirection = i11443[10]
  i11442.sortingFudge = i11443[11]
  i11442.minParticleSize = i11443[12]
  i11442.maxParticleSize = i11443[13]
  i11442.pivot = new pc.Vec3( i11443[14], i11443[15], i11443[16] )
  request.r(i11443[17], i11443[18], 0, i11442, 'trailMaterial')
  i11442.applyActiveColorSpace = !!i11443[19]
  i11442.enabled = !!i11443[20]
  request.r(i11443[21], i11443[22], 0, i11442, 'sharedMaterial')
  var i11445 = i11443[23]
  var i11444 = []
  for(var i = 0; i < i11445.length; i += 2) {
  request.r(i11445[i + 0], i11445[i + 1], 2, i11444, '')
  }
  i11442.sharedMaterials = i11444
  i11442.receiveShadows = !!i11443[24]
  i11442.shadowCastingMode = i11443[25]
  i11442.sortingLayerID = i11443[26]
  i11442.sortingOrder = i11443[27]
  i11442.lightmapIndex = i11443[28]
  i11442.lightmapSceneIndex = i11443[29]
  i11442.lightmapScaleOffset = new pc.Vec4( i11443[30], i11443[31], i11443[32], i11443[33] )
  i11442.lightProbeUsage = i11443[34]
  i11442.reflectionProbeUsage = i11443[35]
  return i11442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i11446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i11447 = data
  i11446.name = i11447[0]
  i11446.atlasId = i11447[1]
  i11446.mipmapCount = i11447[2]
  i11446.hdr = !!i11447[3]
  i11446.size = i11447[4]
  i11446.anisoLevel = i11447[5]
  i11446.filterMode = i11447[6]
  var i11449 = i11447[7]
  var i11448 = []
  for(var i = 0; i < i11449.length; i += 4) {
    i11448.push( UnityEngine.Rect.MinMaxRect(i11449[i + 0], i11449[i + 1], i11449[i + 2], i11449[i + 3]) );
  }
  i11446.rects = i11448
  i11446.wrapU = i11447[8]
  i11446.wrapV = i11447[9]
  return i11446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i11452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i11453 = data
  i11452.name = i11453[0]
  i11452.index = i11453[1]
  i11452.startup = !!i11453[2]
  return i11452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i11454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i11455 = data
  i11454.aspect = i11455[0]
  i11454.orthographic = !!i11455[1]
  i11454.orthographicSize = i11455[2]
  i11454.backgroundColor = new pc.Color(i11455[3], i11455[4], i11455[5], i11455[6])
  i11454.nearClipPlane = i11455[7]
  i11454.farClipPlane = i11455[8]
  i11454.fieldOfView = i11455[9]
  i11454.depth = i11455[10]
  i11454.clearFlags = i11455[11]
  i11454.cullingMask = i11455[12]
  i11454.rect = i11455[13]
  request.r(i11455[14], i11455[15], 0, i11454, 'targetTexture')
  i11454.usePhysicalProperties = !!i11455[16]
  i11454.focalLength = i11455[17]
  i11454.sensorSize = new pc.Vec2( i11455[18], i11455[19] )
  i11454.lensShift = new pc.Vec2( i11455[20], i11455[21] )
  i11454.gateFit = i11455[22]
  i11454.commandBufferCount = i11455[23]
  i11454.cameraType = i11455[24]
  i11454.enabled = !!i11455[25]
  return i11454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i11456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i11457 = data
  request.r(i11457[0], i11457[1], 0, i11456, 'sharedMesh')
  return i11456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i11458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i11459 = data
  request.r(i11459[0], i11459[1], 0, i11458, 'additionalVertexStreams')
  i11458.enabled = !!i11459[2]
  request.r(i11459[3], i11459[4], 0, i11458, 'sharedMaterial')
  var i11461 = i11459[5]
  var i11460 = []
  for(var i = 0; i < i11461.length; i += 2) {
  request.r(i11461[i + 0], i11461[i + 1], 2, i11460, '')
  }
  i11458.sharedMaterials = i11460
  i11458.receiveShadows = !!i11459[6]
  i11458.shadowCastingMode = i11459[7]
  i11458.sortingLayerID = i11459[8]
  i11458.sortingOrder = i11459[9]
  i11458.lightmapIndex = i11459[10]
  i11458.lightmapSceneIndex = i11459[11]
  i11458.lightmapScaleOffset = new pc.Vec4( i11459[12], i11459[13], i11459[14], i11459[15] )
  i11458.lightProbeUsage = i11459[16]
  i11458.reflectionProbeUsage = i11459[17]
  return i11458
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i11462 = root || request.c( 'MaterialUVScroller' )
  var i11463 = data
  request.r(i11463[0], i11463[1], 0, i11462, 'targetMaterial')
  i11462.scrollSpeed = new pc.Vec2( i11463[2], i11463[3] )
  return i11462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i11464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i11465 = data
  i11464.type = i11465[0]
  i11464.color = new pc.Color(i11465[1], i11465[2], i11465[3], i11465[4])
  i11464.cullingMask = i11465[5]
  i11464.intensity = i11465[6]
  i11464.range = i11465[7]
  i11464.spotAngle = i11465[8]
  i11464.shadows = i11465[9]
  i11464.shadowNormalBias = i11465[10]
  i11464.shadowBias = i11465[11]
  i11464.shadowStrength = i11465[12]
  i11464.shadowResolution = i11465[13]
  i11464.lightmapBakeType = i11465[14]
  i11464.renderMode = i11465[15]
  request.r(i11465[16], i11465[17], 0, i11464, 'cookie')
  i11464.cookieSize = i11465[18]
  i11464.shadowNearPlane = i11465[19]
  i11464.enabled = !!i11465[20]
  return i11464
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i11466 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i11467 = data
  request.r(i11467[0], i11467[1], 0, i11466, 'm_FirstSelected')
  i11466.m_sendNavigationEvents = !!i11467[2]
  i11466.m_DragThreshold = i11467[3]
  return i11466
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i11468 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i11469 = data
  i11468.m_HorizontalAxis = i11469[0]
  i11468.m_VerticalAxis = i11469[1]
  i11468.m_SubmitButton = i11469[2]
  i11468.m_CancelButton = i11469[3]
  i11468.m_InputActionsPerSecond = i11469[4]
  i11468.m_RepeatDelay = i11469[5]
  i11468.m_ForceModuleActive = !!i11469[6]
  i11468.m_SendPointerHoverToParent = !!i11469[7]
  return i11468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i11470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i11471 = data
  request.r(i11471[0], i11471[1], 0, i11470, 'animatorController')
  request.r(i11471[2], i11471[3], 0, i11470, 'avatar')
  i11470.updateMode = i11471[4]
  i11470.hasTransformHierarchy = !!i11471[5]
  i11470.applyRootMotion = !!i11471[6]
  var i11473 = i11471[7]
  var i11472 = []
  for(var i = 0; i < i11473.length; i += 2) {
  request.r(i11473[i + 0], i11473[i + 1], 2, i11472, '')
  }
  i11470.humanBones = i11472
  i11470.enabled = !!i11471[8]
  return i11470
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i11476 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i11477 = data
  request.r(i11477[0], i11477[1], 0, i11476, 'animator')
  i11476.kickDuration = i11477[2]
  return i11476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i11478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i11479 = data
  request.r(i11479[0], i11479[1], 0, i11478, 'sharedMesh')
  var i11481 = i11479[2]
  var i11480 = []
  for(var i = 0; i < i11481.length; i += 2) {
  request.r(i11481[i + 0], i11481[i + 1], 2, i11480, '')
  }
  i11478.bones = i11480
  i11478.updateWhenOffscreen = !!i11479[3]
  i11478.localBounds = i11479[4]
  request.r(i11479[5], i11479[6], 0, i11478, 'rootBone')
  var i11483 = i11479[7]
  var i11482 = []
  for(var i = 0; i < i11483.length; i += 1) {
    i11482.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i11483[i + 0]) );
  }
  i11478.blendShapesWeights = i11482
  i11478.enabled = !!i11479[8]
  request.r(i11479[9], i11479[10], 0, i11478, 'sharedMaterial')
  var i11485 = i11479[11]
  var i11484 = []
  for(var i = 0; i < i11485.length; i += 2) {
  request.r(i11485[i + 0], i11485[i + 1], 2, i11484, '')
  }
  i11478.sharedMaterials = i11484
  i11478.receiveShadows = !!i11479[12]
  i11478.shadowCastingMode = i11479[13]
  i11478.sortingLayerID = i11479[14]
  i11478.sortingOrder = i11479[15]
  i11478.lightmapIndex = i11479[16]
  i11478.lightmapSceneIndex = i11479[17]
  i11478.lightmapScaleOffset = new pc.Vec4( i11479[18], i11479[19], i11479[20], i11479[21] )
  i11478.lightProbeUsage = i11479[22]
  i11478.reflectionProbeUsage = i11479[23]
  return i11478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i11488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i11489 = data
  i11488.weight = i11489[0]
  return i11488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i11490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i11491 = data
  i11490.center = new pc.Vec3( i11491[0], i11491[1], i11491[2] )
  i11490.radius = i11491[3]
  i11490.enabled = !!i11491[4]
  i11490.isTrigger = !!i11491[5]
  request.r(i11491[6], i11491[7], 0, i11490, 'material')
  return i11490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i11492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i11493 = data
  i11492.mass = i11493[0]
  i11492.drag = i11493[1]
  i11492.angularDrag = i11493[2]
  i11492.useGravity = !!i11493[3]
  i11492.isKinematic = !!i11493[4]
  i11492.constraints = i11493[5]
  i11492.maxAngularVelocity = i11493[6]
  i11492.collisionDetectionMode = i11493[7]
  i11492.interpolation = i11493[8]
  return i11492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i11494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i11495 = data
  var i11497 = i11495[0]
  var i11496 = []
  for(var i = 0; i < i11497.length; i += 3) {
    i11496.push( new pc.Vec3( i11497[i + 0], i11497[i + 1], i11497[i + 2] ) );
  }
  i11494.positions = i11496
  i11494.positionCount = i11495[1]
  i11494.time = i11495[2]
  i11494.startWidth = i11495[3]
  i11494.endWidth = i11495[4]
  i11494.widthMultiplier = i11495[5]
  i11494.autodestruct = !!i11495[6]
  i11494.emitting = !!i11495[7]
  i11494.numCornerVertices = i11495[8]
  i11494.numCapVertices = i11495[9]
  i11494.minVertexDistance = i11495[10]
  i11494.colorGradient = i11495[11] ? new pc.ColorGradient(i11495[11][0], i11495[11][1], i11495[11][2]) : null
  i11494.startColor = new pc.Color(i11495[12], i11495[13], i11495[14], i11495[15])
  i11494.endColor = new pc.Color(i11495[16], i11495[17], i11495[18], i11495[19])
  i11494.generateLightingData = !!i11495[20]
  i11494.textureMode = i11495[21]
  i11494.alignment = i11495[22]
  i11494.widthCurve = new pc.AnimationCurve( { keys_flow: i11495[23] } )
  i11494.enabled = !!i11495[24]
  request.r(i11495[25], i11495[26], 0, i11494, 'sharedMaterial')
  var i11499 = i11495[27]
  var i11498 = []
  for(var i = 0; i < i11499.length; i += 2) {
  request.r(i11499[i + 0], i11499[i + 1], 2, i11498, '')
  }
  i11494.sharedMaterials = i11498
  i11494.receiveShadows = !!i11495[28]
  i11494.shadowCastingMode = i11495[29]
  i11494.sortingLayerID = i11495[30]
  i11494.sortingOrder = i11495[31]
  i11494.lightmapIndex = i11495[32]
  i11494.lightmapSceneIndex = i11495[33]
  i11494.lightmapScaleOffset = new pc.Vec4( i11495[34], i11495[35], i11495[36], i11495[37] )
  i11494.lightProbeUsage = i11495[38]
  i11494.reflectionProbeUsage = i11495[39]
  return i11494
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i11502 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i11503 = data
  i11502.blockBounceSpeed = i11503[0]
  i11502.blockBounceUpward = i11503[1]
  i11502.goalFallSpeed = i11503[2]
  i11502.goalFallDownward = i11503[3]
  i11502.goalDropDamping = i11503[4]
  request.r(i11503[5], i11503[6], 0, i11502, 'leftTop')
  request.r(i11503[7], i11503[8], 0, i11502, 'bottomCenter')
  request.r(i11503[9], i11503[10], 0, i11502, 'rightTop')
  i11502.leftTopY = i11503[11]
  i11502.bottomCenterY = i11503[12]
  i11502.rightTopY = i11503[13]
  i11502.halfWidth = i11503[14]
  i11502.goalZ = i11503[15]
  i11502.flightTime = i11503[16]
  request.r(i11503[17], i11503[18], 0, i11502, 'trailRenderer')
  i11502.goalTag = i11503[19]
  return i11502
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i11504 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i11505 = data
  request.r(i11505[0], i11505[1], 0, i11504, 'leftPost')
  request.r(i11505[2], i11505[3], 0, i11504, 'rightPost')
  i11504.baseSpeed = i11505[4]
  i11504.changeSpeedByRound = !!i11505[5]
  return i11504
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i11506 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i11507 = data
  request.r(i11507[0], i11507[1], 0, i11506, 'leftLimit')
  request.r(i11507[2], i11507[3], 0, i11506, 'rightLimit')
  i11506.speed = i11507[4]
  i11506.startActive = !!i11507[5]
  return i11506
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i11508 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i11509 = data
  request.r(i11509[0], i11509[1], 0, i11508, 'leftPoint')
  request.r(i11509[2], i11509[3], 0, i11508, 'rightPoint')
  i11508.speed = i11509[4]
  request.r(i11509[5], i11509[6], 0, i11508, 'aimLineRenderer')
  request.r(i11509[7], i11509[8], 0, i11508, 'ballTransform')
  i11508.lineWidth = i11509[9]
  i11508.dashDensity = i11509[10]
  i11508.dashRatio = i11509[11]
  i11508.dashColor = new pc.Color(i11509[12], i11509[13], i11509[14], i11509[15])
  i11508.lineGroundY = i11509[16]
  i11508.pulseEffect = !!i11509[17]
  i11508.pulseSpeed = i11509[18]
  i11508.pulseScaleAmount = i11509[19]
  i11508.sortingOrder = i11509[20]
  i11508.sortingLayerName = i11509[21]
  return i11508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i11510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i11511 = data
  i11510.textureMode = i11511[0]
  i11510.alignment = i11511[1]
  i11510.widthCurve = new pc.AnimationCurve( { keys_flow: i11511[2] } )
  i11510.colorGradient = i11511[3] ? new pc.ColorGradient(i11511[3][0], i11511[3][1], i11511[3][2]) : null
  var i11513 = i11511[4]
  var i11512 = []
  for(var i = 0; i < i11513.length; i += 3) {
    i11512.push( new pc.Vec3( i11513[i + 0], i11513[i + 1], i11513[i + 2] ) );
  }
  i11510.positions = i11512
  i11510.positionCount = i11511[5]
  i11510.widthMultiplier = i11511[6]
  i11510.startWidth = i11511[7]
  i11510.endWidth = i11511[8]
  i11510.numCornerVertices = i11511[9]
  i11510.numCapVertices = i11511[10]
  i11510.useWorldSpace = !!i11511[11]
  i11510.loop = !!i11511[12]
  i11510.startColor = new pc.Color(i11511[13], i11511[14], i11511[15], i11511[16])
  i11510.endColor = new pc.Color(i11511[17], i11511[18], i11511[19], i11511[20])
  i11510.generateLightingData = !!i11511[21]
  i11510.enabled = !!i11511[22]
  request.r(i11511[23], i11511[24], 0, i11510, 'sharedMaterial')
  var i11515 = i11511[25]
  var i11514 = []
  for(var i = 0; i < i11515.length; i += 2) {
  request.r(i11515[i + 0], i11515[i + 1], 2, i11514, '')
  }
  i11510.sharedMaterials = i11514
  i11510.receiveShadows = !!i11511[26]
  i11510.shadowCastingMode = i11511[27]
  i11510.sortingLayerID = i11511[28]
  i11510.sortingOrder = i11511[29]
  i11510.lightmapIndex = i11511[30]
  i11510.lightmapSceneIndex = i11511[31]
  i11510.lightmapScaleOffset = new pc.Vec4( i11511[32], i11511[33], i11511[34], i11511[35] )
  i11510.lightProbeUsage = i11511[36]
  i11510.reflectionProbeUsage = i11511[37]
  return i11510
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i11516 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i11517 = data
  i11516.kickImpactDelay = i11517[0]
  request.r(i11517[1], i11517[2], 0, i11516, 'ball')
  request.r(i11517[3], i11517[4], 0, i11516, 'targetMover')
  request.r(i11517[5], i11517[6], 0, i11516, 'goalkeeper')
  request.r(i11517[7], i11517[8], 0, i11516, 'ronaldoAnimator')
  request.r(i11517[9], i11517[10], 0, i11516, 'uiManager')
  request.r(i11517[11], i11517[12], 0, i11516, 'defenderRound2')
  request.r(i11517[13], i11517[14], 0, i11516, 'defenderRound3')
  i11516.targetSpeeds = i11517[15]
  i11516.delayBetweenRounds = i11517[16]
  i11516.promptEveryRound = !!i11517[17]
  return i11516
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i11518 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i11519 = data
  var i11521 = i11519[0]
  var i11520 = []
  for(var i = 0; i < i11521.length; i += 2) {
  request.r(i11521[i + 0], i11521[i + 1], 2, i11520, '')
  }
  i11518.roundIndicators = i11520
  request.r(i11519[1], i11519[2], 0, i11518, 'iconEmpty')
  request.r(i11519[3], i11519[4], 0, i11518, 'iconCheck')
  request.r(i11519[5], i11519[6], 0, i11518, 'iconCross')
  request.r(i11519[7], i11519[8], 0, i11518, 'winEndcardPanel')
  request.r(i11519[9], i11519[10], 0, i11518, 'losePanel')
  request.r(i11519[11], i11519[12], 0, i11518, 'promptText')
  var i11523 = i11519[13]
  var i11522 = []
  for(var i = 0; i < i11523.length; i += 2) {
  request.r(i11523[i + 0], i11523[i + 1], 2, i11522, '')
  }
  i11518.objectsToShowOnWin = i11522
  i11518.winDelay = i11519[14]
  var i11525 = i11519[15]
  var i11524 = []
  for(var i = 0; i < i11525.length; i += 2) {
  request.r(i11525[i + 0], i11525[i + 1], 2, i11524, '')
  }
  i11518.objectsToHideOnWin = i11524
  var i11527 = i11519[16]
  var i11526 = []
  for(var i = 0; i < i11527.length; i += 2) {
  request.r(i11527[i + 0], i11527[i + 1], 2, i11526, '')
  }
  i11518.objectsToHideOnLose = i11526
  var i11529 = i11519[17]
  var i11528 = []
  for(var i = 0; i < i11529.length; i += 2) {
  request.r(i11529[i + 0], i11529[i + 1], 2, i11528, '')
  }
  i11518.extraObjectsToHide = i11528
  return i11518
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i11534 = root || request.c( 'Ply_SoundManager' )
  var i11535 = data
  i11534.audioClips = request.d('FxAudio', i11535[0], i11534.audioClips)
  request.r(i11535[1], i11535[2], 0, i11534, 'sound')
  i11534.enableSound = !!i11535[3]
  i11534.bgmVolume = i11535[4]
  return i11534
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i11536 = root || request.c( 'FxAudio' )
  var i11537 = data
  i11536.Clock = request.d('SoundData', i11537[0], i11536.Clock)
  i11536.PlayerWin = request.d('SoundData', i11537[1], i11536.PlayerWin)
  i11536.PlayerLoose = request.d('SoundData', i11537[2], i11536.PlayerLoose)
  i11536.RightChoice = request.d('SoundData', i11537[3], i11536.RightChoice)
  i11536.WrongChoice = request.d('SoundData', i11537[4], i11536.WrongChoice)
  i11536.MaxLevel = request.d('SoundData', i11537[5], i11536.MaxLevel)
  i11536.FightingCloud = request.d('SoundData', i11537[6], i11536.FightingCloud)
  i11536.Confetti = request.d('SoundData', i11537[7], i11536.Confetti)
  return i11536
}

Deserializers["SoundData"] = function (request, data, root) {
  var i11538 = root || request.c( 'SoundData' )
  var i11539 = data
  request.r(i11539[0], i11539[1], 0, i11538, 'clip')
  i11538.volume = i11539[2]
  return i11538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i11540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i11541 = data
  request.r(i11541[0], i11541[1], 0, i11540, 'clip')
  request.r(i11541[2], i11541[3], 0, i11540, 'outputAudioMixerGroup')
  i11540.playOnAwake = !!i11541[4]
  i11540.loop = !!i11541[5]
  i11540.time = i11541[6]
  i11540.volume = i11541[7]
  i11540.pitch = i11541[8]
  i11540.enabled = !!i11541[9]
  return i11540
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i11542 = root || request.c( 'UnityEngine.UI.Button' )
  var i11543 = data
  i11542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i11543[0], i11542.m_OnClick)
  i11542.m_Navigation = request.d('UnityEngine.UI.Navigation', i11543[1], i11542.m_Navigation)
  i11542.m_Transition = i11543[2]
  i11542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11543[3], i11542.m_Colors)
  i11542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11543[4], i11542.m_SpriteState)
  i11542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11543[5], i11542.m_AnimationTriggers)
  i11542.m_Interactable = !!i11543[6]
  request.r(i11543[7], i11543[8], 0, i11542, 'm_TargetGraphic')
  return i11542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i11544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i11545 = data
  i11544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11545[0], i11544.m_PersistentCalls)
  return i11544
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i11546 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i11547 = data
  var i11549 = i11547[0]
  var i11548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i11549.length; i += 1) {
    i11548.add(request.d('UnityEngine.Events.PersistentCall', i11549[i + 0]));
  }
  i11546.m_Calls = i11548
  return i11546
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i11552 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i11553 = data
  request.r(i11553[0], i11553[1], 0, i11552, 'm_Target')
  i11552.m_TargetAssemblyTypeName = i11553[2]
  i11552.m_MethodName = i11553[3]
  i11552.m_Mode = i11553[4]
  i11552.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i11553[5], i11552.m_Arguments)
  i11552.m_CallState = i11553[6]
  return i11552
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i11554 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i11555 = data
  request.r(i11555[0], i11555[1], 0, i11554, 'm_ObjectArgument')
  i11554.m_ObjectArgumentAssemblyTypeName = i11555[2]
  i11554.m_IntArgument = i11555[3]
  i11554.m_FloatArgument = i11555[4]
  i11554.m_StringArgument = i11555[5]
  i11554.m_BoolArgument = !!i11555[6]
  return i11554
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i11556 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i11557 = data
  i11556.m_Mode = i11557[0]
  i11556.m_WrapAround = !!i11557[1]
  request.r(i11557[2], i11557[3], 0, i11556, 'm_SelectOnUp')
  request.r(i11557[4], i11557[5], 0, i11556, 'm_SelectOnDown')
  request.r(i11557[6], i11557[7], 0, i11556, 'm_SelectOnLeft')
  request.r(i11557[8], i11557[9], 0, i11556, 'm_SelectOnRight')
  return i11556
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i11558 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i11559 = data
  i11558.m_NormalColor = new pc.Color(i11559[0], i11559[1], i11559[2], i11559[3])
  i11558.m_HighlightedColor = new pc.Color(i11559[4], i11559[5], i11559[6], i11559[7])
  i11558.m_PressedColor = new pc.Color(i11559[8], i11559[9], i11559[10], i11559[11])
  i11558.m_SelectedColor = new pc.Color(i11559[12], i11559[13], i11559[14], i11559[15])
  i11558.m_DisabledColor = new pc.Color(i11559[16], i11559[17], i11559[18], i11559[19])
  i11558.m_ColorMultiplier = i11559[20]
  i11558.m_FadeDuration = i11559[21]
  return i11558
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i11560 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i11561 = data
  request.r(i11561[0], i11561[1], 0, i11560, 'm_HighlightedSprite')
  request.r(i11561[2], i11561[3], 0, i11560, 'm_PressedSprite')
  request.r(i11561[4], i11561[5], 0, i11560, 'm_SelectedSprite')
  request.r(i11561[6], i11561[7], 0, i11560, 'm_DisabledSprite')
  return i11560
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i11562 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i11563 = data
  i11562.m_NormalTrigger = i11563[0]
  i11562.m_HighlightedTrigger = i11563[1]
  i11562.m_PressedTrigger = i11563[2]
  i11562.m_SelectedTrigger = i11563[3]
  i11562.m_DisabledTrigger = i11563[4]
  return i11562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i11564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i11565 = data
  i11564.ambientIntensity = i11565[0]
  i11564.reflectionIntensity = i11565[1]
  i11564.ambientMode = i11565[2]
  i11564.ambientLight = new pc.Color(i11565[3], i11565[4], i11565[5], i11565[6])
  i11564.ambientSkyColor = new pc.Color(i11565[7], i11565[8], i11565[9], i11565[10])
  i11564.ambientGroundColor = new pc.Color(i11565[11], i11565[12], i11565[13], i11565[14])
  i11564.ambientEquatorColor = new pc.Color(i11565[15], i11565[16], i11565[17], i11565[18])
  i11564.fogColor = new pc.Color(i11565[19], i11565[20], i11565[21], i11565[22])
  i11564.fogEndDistance = i11565[23]
  i11564.fogStartDistance = i11565[24]
  i11564.fogDensity = i11565[25]
  i11564.fog = !!i11565[26]
  request.r(i11565[27], i11565[28], 0, i11564, 'skybox')
  i11564.fogMode = i11565[29]
  var i11567 = i11565[30]
  var i11566 = []
  for(var i = 0; i < i11567.length; i += 1) {
    i11566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i11567[i + 0]) );
  }
  i11564.lightmaps = i11566
  i11564.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i11565[31], i11564.lightProbes)
  i11564.lightmapsMode = i11565[32]
  i11564.mixedBakeMode = i11565[33]
  i11564.environmentLightingMode = i11565[34]
  i11564.ambientProbe = new pc.SphericalHarmonicsL2(i11565[35])
  i11564.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i11565[36])
  i11564.useReferenceAmbientProbe = !!i11565[37]
  request.r(i11565[38], i11565[39], 0, i11564, 'customReflection')
  request.r(i11565[40], i11565[41], 0, i11564, 'defaultReflection')
  i11564.defaultReflectionMode = i11565[42]
  i11564.defaultReflectionResolution = i11565[43]
  i11564.sunLightObjectId = i11565[44]
  i11564.pixelLightCount = i11565[45]
  i11564.defaultReflectionHDR = !!i11565[46]
  i11564.hasLightDataAsset = !!i11565[47]
  i11564.hasManualGenerate = !!i11565[48]
  return i11564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i11570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i11571 = data
  request.r(i11571[0], i11571[1], 0, i11570, 'lightmapColor')
  request.r(i11571[2], i11571[3], 0, i11570, 'lightmapDirection')
  return i11570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i11572 = root || new UnityEngine.LightProbes()
  var i11573 = data
  return i11572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i11578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i11579 = data
  i11578.name = i11579[0]
  i11578.bounciness = i11579[1]
  i11578.dynamicFriction = i11579[2]
  i11578.staticFriction = i11579[3]
  i11578.frictionCombine = i11579[4]
  i11578.bounceCombine = i11579[5]
  return i11578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i11580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i11581 = data
  var i11583 = i11581[0]
  var i11582 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i11583.length; i += 1) {
    i11582.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i11583[i + 0]));
  }
  i11580.ShaderCompilationErrors = i11582
  i11580.name = i11581[1]
  i11580.guid = i11581[2]
  var i11585 = i11581[3]
  var i11584 = []
  for(var i = 0; i < i11585.length; i += 1) {
    i11584.push( i11585[i + 0] );
  }
  i11580.shaderDefinedKeywords = i11584
  var i11587 = i11581[4]
  var i11586 = []
  for(var i = 0; i < i11587.length; i += 1) {
    i11586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i11587[i + 0]) );
  }
  i11580.passes = i11586
  var i11589 = i11581[5]
  var i11588 = []
  for(var i = 0; i < i11589.length; i += 1) {
    i11588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i11589[i + 0]) );
  }
  i11580.usePasses = i11588
  var i11591 = i11581[6]
  var i11590 = []
  for(var i = 0; i < i11591.length; i += 1) {
    i11590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i11591[i + 0]) );
  }
  i11580.defaultParameterValues = i11590
  request.r(i11581[7], i11581[8], 0, i11580, 'unityFallbackShader')
  i11580.readDepth = !!i11581[9]
  i11580.hasDepthOnlyPass = !!i11581[10]
  i11580.isCreatedByShaderGraph = !!i11581[11]
  i11580.disableBatching = !!i11581[12]
  i11580.compiled = !!i11581[13]
  return i11580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i11594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i11595 = data
  i11594.shaderName = i11595[0]
  i11594.errorMessage = i11595[1]
  return i11594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i11600 = root || new pc.UnityShaderPass()
  var i11601 = data
  i11600.id = i11601[0]
  i11600.subShaderIndex = i11601[1]
  i11600.name = i11601[2]
  i11600.passType = i11601[3]
  i11600.grabPassTextureName = i11601[4]
  i11600.usePass = !!i11601[5]
  i11600.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[6], i11600.zTest)
  i11600.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[7], i11600.zWrite)
  i11600.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[8], i11600.culling)
  i11600.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11601[9], i11600.blending)
  i11600.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11601[10], i11600.alphaBlending)
  i11600.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[11], i11600.colorWriteMask)
  i11600.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[12], i11600.offsetUnits)
  i11600.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[13], i11600.offsetFactor)
  i11600.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[14], i11600.stencilRef)
  i11600.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[15], i11600.stencilReadMask)
  i11600.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11601[16], i11600.stencilWriteMask)
  i11600.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11601[17], i11600.stencilOp)
  i11600.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11601[18], i11600.stencilOpFront)
  i11600.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11601[19], i11600.stencilOpBack)
  var i11603 = i11601[20]
  var i11602 = []
  for(var i = 0; i < i11603.length; i += 1) {
    i11602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i11603[i + 0]) );
  }
  i11600.tags = i11602
  var i11605 = i11601[21]
  var i11604 = []
  for(var i = 0; i < i11605.length; i += 1) {
    i11604.push( i11605[i + 0] );
  }
  i11600.passDefinedKeywords = i11604
  var i11607 = i11601[22]
  var i11606 = []
  for(var i = 0; i < i11607.length; i += 1) {
    i11606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i11607[i + 0]) );
  }
  i11600.passDefinedKeywordGroups = i11606
  var i11609 = i11601[23]
  var i11608 = []
  for(var i = 0; i < i11609.length; i += 1) {
    i11608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11609[i + 0]) );
  }
  i11600.variants = i11608
  var i11611 = i11601[24]
  var i11610 = []
  for(var i = 0; i < i11611.length; i += 1) {
    i11610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11611[i + 0]) );
  }
  i11600.excludedVariants = i11610
  i11600.hasDepthReader = !!i11601[25]
  return i11600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i11612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i11613 = data
  i11612.val = i11613[0]
  i11612.name = i11613[1]
  return i11612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i11614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i11615 = data
  i11614.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11615[0], i11614.src)
  i11614.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11615[1], i11614.dst)
  i11614.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11615[2], i11614.op)
  return i11614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i11616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i11617 = data
  i11616.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11617[0], i11616.pass)
  i11616.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11617[1], i11616.fail)
  i11616.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11617[2], i11616.zFail)
  i11616.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11617[3], i11616.comp)
  return i11616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i11620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i11621 = data
  i11620.name = i11621[0]
  i11620.value = i11621[1]
  return i11620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i11624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i11625 = data
  var i11627 = i11625[0]
  var i11626 = []
  for(var i = 0; i < i11627.length; i += 1) {
    i11626.push( i11627[i + 0] );
  }
  i11624.keywords = i11626
  i11624.hasDiscard = !!i11625[1]
  return i11624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i11630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i11631 = data
  i11630.passId = i11631[0]
  i11630.subShaderIndex = i11631[1]
  var i11633 = i11631[2]
  var i11632 = []
  for(var i = 0; i < i11633.length; i += 1) {
    i11632.push( i11633[i + 0] );
  }
  i11630.keywords = i11632
  i11630.vertexProgram = i11631[3]
  i11630.fragmentProgram = i11631[4]
  i11630.exportedForWebGl2 = !!i11631[5]
  i11630.readDepth = !!i11631[6]
  return i11630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i11636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i11637 = data
  request.r(i11637[0], i11637[1], 0, i11636, 'shader')
  i11636.pass = i11637[2]
  return i11636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i11640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i11641 = data
  i11640.name = i11641[0]
  i11640.type = i11641[1]
  i11640.value = new pc.Vec4( i11641[2], i11641[3], i11641[4], i11641[5] )
  i11640.textureValue = i11641[6]
  i11640.shaderPropertyFlag = i11641[7]
  return i11640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i11642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i11643 = data
  i11642.name = i11643[0]
  request.r(i11643[1], i11643[2], 0, i11642, 'texture')
  i11642.aabb = i11643[3]
  i11642.vertices = i11643[4]
  i11642.triangles = i11643[5]
  i11642.textureRect = UnityEngine.Rect.MinMaxRect(i11643[6], i11643[7], i11643[8], i11643[9])
  i11642.packedRect = UnityEngine.Rect.MinMaxRect(i11643[10], i11643[11], i11643[12], i11643[13])
  i11642.border = new pc.Vec4( i11643[14], i11643[15], i11643[16], i11643[17] )
  i11642.transparency = i11643[18]
  i11642.bounds = i11643[19]
  i11642.pixelsPerUnit = i11643[20]
  i11642.textureWidth = i11643[21]
  i11642.textureHeight = i11643[22]
  i11642.nativeSize = new pc.Vec2( i11643[23], i11643[24] )
  i11642.pivot = new pc.Vec2( i11643[25], i11643[26] )
  i11642.textureRectOffset = new pc.Vec2( i11643[27], i11643[28] )
  return i11642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i11644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i11645 = data
  i11644.name = i11645[0]
  return i11644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i11646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i11647 = data
  i11646.name = i11647[0]
  i11646.wrapMode = i11647[1]
  i11646.isLooping = !!i11647[2]
  i11646.length = i11647[3]
  var i11649 = i11647[4]
  var i11648 = []
  for(var i = 0; i < i11649.length; i += 1) {
    i11648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i11649[i + 0]) );
  }
  i11646.curves = i11648
  var i11651 = i11647[5]
  var i11650 = []
  for(var i = 0; i < i11651.length; i += 1) {
    i11650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i11651[i + 0]) );
  }
  i11646.events = i11650
  i11646.halfPrecision = !!i11647[6]
  i11646._frameRate = i11647[7]
  i11646.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i11647[8], i11646.localBounds)
  i11646.hasMuscleCurves = !!i11647[9]
  var i11653 = i11647[10]
  var i11652 = []
  for(var i = 0; i < i11653.length; i += 1) {
    i11652.push( i11653[i + 0] );
  }
  i11646.clipMuscleConstant = i11652
  i11646.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i11647[11], i11646.clipBindingConstant)
  return i11646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i11656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i11657 = data
  i11656.path = i11657[0]
  i11656.hash = i11657[1]
  i11656.componentType = i11657[2]
  i11656.property = i11657[3]
  i11656.keys = i11657[4]
  var i11659 = i11657[5]
  var i11658 = []
  for(var i = 0; i < i11659.length; i += 1) {
    i11658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i11659[i + 0]) );
  }
  i11656.objectReferenceKeys = i11658
  return i11656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i11662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i11663 = data
  i11662.time = i11663[0]
  request.r(i11663[1], i11663[2], 0, i11662, 'value')
  return i11662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i11666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i11667 = data
  i11666.functionName = i11667[0]
  i11666.floatParameter = i11667[1]
  i11666.intParameter = i11667[2]
  i11666.stringParameter = i11667[3]
  request.r(i11667[4], i11667[5], 0, i11666, 'objectReferenceParameter')
  i11666.time = i11667[6]
  return i11666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i11668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i11669 = data
  i11668.center = new pc.Vec3( i11669[0], i11669[1], i11669[2] )
  i11668.extends = new pc.Vec3( i11669[3], i11669[4], i11669[5] )
  return i11668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i11672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i11673 = data
  var i11675 = i11673[0]
  var i11674 = []
  for(var i = 0; i < i11675.length; i += 1) {
    i11674.push( i11675[i + 0] );
  }
  i11672.genericBindings = i11674
  var i11677 = i11673[1]
  var i11676 = []
  for(var i = 0; i < i11677.length; i += 1) {
    i11676.push( i11677[i + 0] );
  }
  i11672.pptrCurveMapping = i11676
  return i11672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i11678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i11679 = data
  i11678.name = i11679[0]
  var i11681 = i11679[1]
  var i11680 = []
  for(var i = 0; i < i11681.length; i += 1) {
    i11680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i11681[i + 0]) );
  }
  i11678.layers = i11680
  var i11683 = i11679[2]
  var i11682 = []
  for(var i = 0; i < i11683.length; i += 1) {
    i11682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i11683[i + 0]) );
  }
  i11678.parameters = i11682
  i11678.animationClips = i11679[3]
  i11678.avatarUnsupported = i11679[4]
  return i11678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i11686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i11687 = data
  i11686.name = i11687[0]
  i11686.defaultWeight = i11687[1]
  i11686.blendingMode = i11687[2]
  i11686.avatarMask = i11687[3]
  i11686.syncedLayerIndex = i11687[4]
  i11686.syncedLayerAffectsTiming = !!i11687[5]
  i11686.syncedLayers = i11687[6]
  i11686.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11687[7], i11686.stateMachine)
  return i11686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i11688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i11689 = data
  i11688.id = i11689[0]
  i11688.name = i11689[1]
  i11688.path = i11689[2]
  var i11691 = i11689[3]
  var i11690 = []
  for(var i = 0; i < i11691.length; i += 1) {
    i11690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i11691[i + 0]) );
  }
  i11688.states = i11690
  var i11693 = i11689[4]
  var i11692 = []
  for(var i = 0; i < i11693.length; i += 1) {
    i11692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11693[i + 0]) );
  }
  i11688.machines = i11692
  var i11695 = i11689[5]
  var i11694 = []
  for(var i = 0; i < i11695.length; i += 1) {
    i11694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11695[i + 0]) );
  }
  i11688.entryStateTransitions = i11694
  var i11697 = i11689[6]
  var i11696 = []
  for(var i = 0; i < i11697.length; i += 1) {
    i11696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11697[i + 0]) );
  }
  i11688.exitStateTransitions = i11696
  var i11699 = i11689[7]
  var i11698 = []
  for(var i = 0; i < i11699.length; i += 1) {
    i11698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11699[i + 0]) );
  }
  i11688.anyStateTransitions = i11698
  i11688.defaultStateId = i11689[8]
  return i11688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i11702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i11703 = data
  i11702.id = i11703[0]
  i11702.name = i11703[1]
  i11702.cycleOffset = i11703[2]
  i11702.cycleOffsetParameter = i11703[3]
  i11702.cycleOffsetParameterActive = !!i11703[4]
  i11702.mirror = !!i11703[5]
  i11702.mirrorParameter = i11703[6]
  i11702.mirrorParameterActive = !!i11703[7]
  i11702.motionId = i11703[8]
  i11702.nameHash = i11703[9]
  i11702.fullPathHash = i11703[10]
  i11702.speed = i11703[11]
  i11702.speedParameter = i11703[12]
  i11702.speedParameterActive = !!i11703[13]
  i11702.tag = i11703[14]
  i11702.tagHash = i11703[15]
  i11702.writeDefaultValues = !!i11703[16]
  var i11705 = i11703[17]
  var i11704 = []
  for(var i = 0; i < i11705.length; i += 2) {
  request.r(i11705[i + 0], i11705[i + 1], 2, i11704, '')
  }
  i11702.behaviours = i11704
  var i11707 = i11703[18]
  var i11706 = []
  for(var i = 0; i < i11707.length; i += 1) {
    i11706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11707[i + 0]) );
  }
  i11702.transitions = i11706
  return i11702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i11712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i11713 = data
  i11712.fullPath = i11713[0]
  i11712.canTransitionToSelf = !!i11713[1]
  i11712.duration = i11713[2]
  i11712.exitTime = i11713[3]
  i11712.hasExitTime = !!i11713[4]
  i11712.hasFixedDuration = !!i11713[5]
  i11712.interruptionSource = i11713[6]
  i11712.offset = i11713[7]
  i11712.orderedInterruption = !!i11713[8]
  i11712.destinationStateId = i11713[9]
  i11712.isExit = !!i11713[10]
  i11712.mute = !!i11713[11]
  i11712.solo = !!i11713[12]
  var i11715 = i11713[13]
  var i11714 = []
  for(var i = 0; i < i11715.length; i += 1) {
    i11714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11715[i + 0]) );
  }
  i11712.conditions = i11714
  return i11712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i11720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i11721 = data
  i11720.destinationStateId = i11721[0]
  i11720.isExit = !!i11721[1]
  i11720.mute = !!i11721[2]
  i11720.solo = !!i11721[3]
  var i11723 = i11721[4]
  var i11722 = []
  for(var i = 0; i < i11723.length; i += 1) {
    i11722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11723[i + 0]) );
  }
  i11720.conditions = i11722
  return i11720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i11726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i11727 = data
  i11726.mode = i11727[0]
  i11726.parameter = i11727[1]
  i11726.threshold = i11727[2]
  return i11726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i11730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i11731 = data
  i11730.defaultBool = !!i11731[0]
  i11730.defaultFloat = i11731[1]
  i11730.defaultInt = i11731[2]
  i11730.name = i11731[3]
  i11730.nameHash = i11731[4]
  i11730.type = i11731[5]
  return i11730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i11732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i11733 = data
  i11732.name = i11733[0]
  i11732.bytes64 = i11733[1]
  i11732.data = i11733[2]
  return i11732
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11734 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11735 = data
  i11734.useSafeMode = !!i11735[0]
  i11734.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11735[1], i11734.safeModeOptions)
  i11734.timeScale = i11735[2]
  i11734.unscaledTimeScale = i11735[3]
  i11734.useSmoothDeltaTime = !!i11735[4]
  i11734.maxSmoothUnscaledTime = i11735[5]
  i11734.rewindCallbackMode = i11735[6]
  i11734.showUnityEditorReport = !!i11735[7]
  i11734.logBehaviour = i11735[8]
  i11734.drawGizmos = !!i11735[9]
  i11734.defaultRecyclable = !!i11735[10]
  i11734.defaultAutoPlay = i11735[11]
  i11734.defaultUpdateType = i11735[12]
  i11734.defaultTimeScaleIndependent = !!i11735[13]
  i11734.defaultEaseType = i11735[14]
  i11734.defaultEaseOvershootOrAmplitude = i11735[15]
  i11734.defaultEasePeriod = i11735[16]
  i11734.defaultAutoKill = !!i11735[17]
  i11734.defaultLoopType = i11735[18]
  i11734.debugMode = !!i11735[19]
  i11734.debugStoreTargetId = !!i11735[20]
  i11734.showPreviewPanel = !!i11735[21]
  i11734.storeSettingsLocation = i11735[22]
  i11734.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11735[23], i11734.modules)
  i11734.createASMDEF = !!i11735[24]
  i11734.showPlayingTweens = !!i11735[25]
  i11734.showPausedTweens = !!i11735[26]
  return i11734
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11736 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11737 = data
  i11736.logBehaviour = i11737[0]
  i11736.nestedTweenFailureBehaviour = i11737[1]
  return i11736
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11738 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11739 = data
  i11738.showPanel = !!i11739[0]
  i11738.audioEnabled = !!i11739[1]
  i11738.physicsEnabled = !!i11739[2]
  i11738.physics2DEnabled = !!i11739[3]
  i11738.spriteEnabled = !!i11739[4]
  i11738.uiEnabled = !!i11739[5]
  i11738.uiToolkitEnabled = !!i11739[6]
  i11738.textMeshProEnabled = !!i11739[7]
  i11738.tk2DEnabled = !!i11739[8]
  i11738.deAudioEnabled = !!i11739[9]
  i11738.deUnityExtendedEnabled = !!i11739[10]
  i11738.epoOutlineEnabled = !!i11739[11]
  return i11738
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i11740 = root || request.c( 'TMPro.TMP_Settings' )
  var i11741 = data
  i11740.assetVersion = i11741[0]
  i11740.m_TextWrappingMode = i11741[1]
  i11740.m_enableKerning = !!i11741[2]
  var i11743 = i11741[3]
  var i11742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i11743.length; i += 1) {
    i11742.add(i11743[i + 0]);
  }
  i11740.m_ActiveFontFeatures = i11742
  i11740.m_enableExtraPadding = !!i11741[4]
  i11740.m_enableTintAllSprites = !!i11741[5]
  i11740.m_enableParseEscapeCharacters = !!i11741[6]
  i11740.m_EnableRaycastTarget = !!i11741[7]
  i11740.m_GetFontFeaturesAtRuntime = !!i11741[8]
  i11740.m_missingGlyphCharacter = i11741[9]
  i11740.m_ClearDynamicDataOnBuild = !!i11741[10]
  i11740.m_warningsDisabled = !!i11741[11]
  request.r(i11741[12], i11741[13], 0, i11740, 'm_defaultFontAsset')
  i11740.m_defaultFontAssetPath = i11741[14]
  i11740.m_defaultFontSize = i11741[15]
  i11740.m_defaultAutoSizeMinRatio = i11741[16]
  i11740.m_defaultAutoSizeMaxRatio = i11741[17]
  i11740.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i11741[18], i11741[19] )
  i11740.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i11741[20], i11741[21] )
  i11740.m_autoSizeTextContainer = !!i11741[22]
  i11740.m_IsTextObjectScaleStatic = !!i11741[23]
  var i11745 = i11741[24]
  var i11744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11745.length; i += 2) {
  request.r(i11745[i + 0], i11745[i + 1], 1, i11744, '')
  }
  i11740.m_fallbackFontAssets = i11744
  i11740.m_matchMaterialPreset = !!i11741[25]
  i11740.m_HideSubTextObjects = !!i11741[26]
  request.r(i11741[27], i11741[28], 0, i11740, 'm_defaultSpriteAsset')
  i11740.m_defaultSpriteAssetPath = i11741[29]
  i11740.m_enableEmojiSupport = !!i11741[30]
  i11740.m_MissingCharacterSpriteUnicode = i11741[31]
  var i11747 = i11741[32]
  var i11746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i11747.length; i += 2) {
  request.r(i11747[i + 0], i11747[i + 1], 1, i11746, '')
  }
  i11740.m_EmojiFallbackTextAssets = i11746
  i11740.m_defaultColorGradientPresetsPath = i11741[33]
  request.r(i11741[34], i11741[35], 0, i11740, 'm_defaultStyleSheet')
  i11740.m_StyleSheetsResourcePath = i11741[36]
  request.r(i11741[37], i11741[38], 0, i11740, 'm_leadingCharacters')
  request.r(i11741[39], i11741[40], 0, i11740, 'm_followingCharacters')
  i11740.m_UseModernHangulLineBreakingRules = !!i11741[41]
  return i11740
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i11754 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i11755 = data
  request.r(i11755[0], i11755[1], 0, i11754, 'spriteSheet')
  var i11757 = i11755[2]
  var i11756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i11757.length; i += 1) {
    i11756.add(request.d('TMPro.TMP_Sprite', i11757[i + 0]));
  }
  i11754.spriteInfoList = i11756
  var i11759 = i11755[3]
  var i11758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i11759.length; i += 2) {
  request.r(i11759[i + 0], i11759[i + 1], 1, i11758, '')
  }
  i11754.fallbackSpriteAssets = i11758
  var i11761 = i11755[4]
  var i11760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i11761.length; i += 1) {
    i11760.add(request.d('TMPro.TMP_SpriteCharacter', i11761[i + 0]));
  }
  i11754.m_SpriteCharacterTable = i11760
  var i11763 = i11755[5]
  var i11762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i11763.length; i += 1) {
    i11762.add(request.d('TMPro.TMP_SpriteGlyph', i11763[i + 0]));
  }
  i11754.m_GlyphTable = i11762
  i11754.m_Version = i11755[6]
  i11754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11755[7], i11754.m_FaceInfo)
  request.r(i11755[8], i11755[9], 0, i11754, 'm_Material')
  return i11754
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i11766 = root || request.c( 'TMPro.TMP_Sprite' )
  var i11767 = data
  i11766.name = i11767[0]
  i11766.hashCode = i11767[1]
  i11766.unicode = i11767[2]
  i11766.pivot = new pc.Vec2( i11767[3], i11767[4] )
  request.r(i11767[5], i11767[6], 0, i11766, 'sprite')
  i11766.id = i11767[7]
  i11766.x = i11767[8]
  i11766.y = i11767[9]
  i11766.width = i11767[10]
  i11766.height = i11767[11]
  i11766.xOffset = i11767[12]
  i11766.yOffset = i11767[13]
  i11766.xAdvance = i11767[14]
  i11766.scale = i11767[15]
  return i11766
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i11772 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i11773 = data
  i11772.m_Name = i11773[0]
  i11772.m_ElementType = i11773[1]
  i11772.m_Unicode = i11773[2]
  i11772.m_GlyphIndex = i11773[3]
  i11772.m_Scale = i11773[4]
  return i11772
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i11776 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i11777 = data
  request.r(i11777[0], i11777[1], 0, i11776, 'sprite')
  i11776.m_Index = i11777[2]
  i11776.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11777[3], i11776.m_Metrics)
  i11776.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11777[4], i11776.m_GlyphRect)
  i11776.m_Scale = i11777[5]
  i11776.m_AtlasIndex = i11777[6]
  i11776.m_ClassDefinitionType = i11777[7]
  return i11776
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i11778 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i11779 = data
  i11778.m_Width = i11779[0]
  i11778.m_Height = i11779[1]
  i11778.m_HorizontalBearingX = i11779[2]
  i11778.m_HorizontalBearingY = i11779[3]
  i11778.m_HorizontalAdvance = i11779[4]
  return i11778
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i11780 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i11781 = data
  i11780.m_X = i11781[0]
  i11780.m_Y = i11781[1]
  i11780.m_Width = i11781[2]
  i11780.m_Height = i11781[3]
  return i11780
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i11782 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i11783 = data
  i11782.m_FaceIndex = i11783[0]
  i11782.m_FamilyName = i11783[1]
  i11782.m_StyleName = i11783[2]
  i11782.m_PointSize = i11783[3]
  i11782.m_Scale = i11783[4]
  i11782.m_UnitsPerEM = i11783[5]
  i11782.m_LineHeight = i11783[6]
  i11782.m_AscentLine = i11783[7]
  i11782.m_CapLine = i11783[8]
  i11782.m_MeanLine = i11783[9]
  i11782.m_Baseline = i11783[10]
  i11782.m_DescentLine = i11783[11]
  i11782.m_SuperscriptOffset = i11783[12]
  i11782.m_SuperscriptSize = i11783[13]
  i11782.m_SubscriptOffset = i11783[14]
  i11782.m_SubscriptSize = i11783[15]
  i11782.m_UnderlineOffset = i11783[16]
  i11782.m_UnderlineThickness = i11783[17]
  i11782.m_StrikethroughOffset = i11783[18]
  i11782.m_StrikethroughThickness = i11783[19]
  i11782.m_TabWidth = i11783[20]
  return i11782
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i11784 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i11785 = data
  var i11787 = i11785[0]
  var i11786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i11787.length; i += 1) {
    i11786.add(request.d('TMPro.TMP_Style', i11787[i + 0]));
  }
  i11784.m_StyleList = i11786
  return i11784
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i11790 = root || request.c( 'TMPro.TMP_Style' )
  var i11791 = data
  i11790.m_Name = i11791[0]
  i11790.m_HashCode = i11791[1]
  i11790.m_OpeningDefinition = i11791[2]
  i11790.m_ClosingDefinition = i11791[3]
  i11790.m_OpeningTagArray = i11791[4]
  i11790.m_ClosingTagArray = i11791[5]
  return i11790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11793 = data
  var i11795 = i11793[0]
  var i11794 = []
  for(var i = 0; i < i11795.length; i += 1) {
    i11794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11795[i + 0]) );
  }
  i11792.files = i11794
  i11792.componentToPrefabIds = i11793[1]
  return i11792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11799 = data
  i11798.path = i11799[0]
  request.r(i11799[1], i11799[2], 0, i11798, 'unityObject')
  return i11798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11801 = data
  var i11803 = i11801[0]
  var i11802 = []
  for(var i = 0; i < i11803.length; i += 1) {
    i11802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11803[i + 0]) );
  }
  i11800.scriptsExecutionOrder = i11802
  var i11805 = i11801[1]
  var i11804 = []
  for(var i = 0; i < i11805.length; i += 1) {
    i11804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11805[i + 0]) );
  }
  i11800.sortingLayers = i11804
  var i11807 = i11801[2]
  var i11806 = []
  for(var i = 0; i < i11807.length; i += 1) {
    i11806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11807[i + 0]) );
  }
  i11800.cullingLayers = i11806
  i11800.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11801[3], i11800.timeSettings)
  i11800.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11801[4], i11800.physicsSettings)
  i11800.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11801[5], i11800.physics2DSettings)
  i11800.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11801[6], i11800.qualitySettings)
  i11800.enableRealtimeShadows = !!i11801[7]
  i11800.enableAutoInstancing = !!i11801[8]
  i11800.enableStaticBatching = !!i11801[9]
  i11800.enableDynamicBatching = !!i11801[10]
  i11800.lightmapEncodingQuality = i11801[11]
  i11800.desiredColorSpace = i11801[12]
  var i11809 = i11801[13]
  var i11808 = []
  for(var i = 0; i < i11809.length; i += 1) {
    i11808.push( i11809[i + 0] );
  }
  i11800.allTags = i11808
  return i11800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11813 = data
  i11812.name = i11813[0]
  i11812.value = i11813[1]
  return i11812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11817 = data
  i11816.id = i11817[0]
  i11816.name = i11817[1]
  i11816.value = i11817[2]
  return i11816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11821 = data
  i11820.id = i11821[0]
  i11820.name = i11821[1]
  return i11820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11823 = data
  i11822.fixedDeltaTime = i11823[0]
  i11822.maximumDeltaTime = i11823[1]
  i11822.timeScale = i11823[2]
  i11822.maximumParticleTimestep = i11823[3]
  return i11822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11825 = data
  i11824.gravity = new pc.Vec3( i11825[0], i11825[1], i11825[2] )
  i11824.defaultSolverIterations = i11825[3]
  i11824.bounceThreshold = i11825[4]
  i11824.autoSyncTransforms = !!i11825[5]
  i11824.autoSimulation = !!i11825[6]
  var i11827 = i11825[7]
  var i11826 = []
  for(var i = 0; i < i11827.length; i += 1) {
    i11826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11827[i + 0]) );
  }
  i11824.collisionMatrix = i11826
  return i11824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11831 = data
  i11830.enabled = !!i11831[0]
  i11830.layerId = i11831[1]
  i11830.otherLayerId = i11831[2]
  return i11830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11833 = data
  request.r(i11833[0], i11833[1], 0, i11832, 'material')
  i11832.gravity = new pc.Vec2( i11833[2], i11833[3] )
  i11832.positionIterations = i11833[4]
  i11832.velocityIterations = i11833[5]
  i11832.velocityThreshold = i11833[6]
  i11832.maxLinearCorrection = i11833[7]
  i11832.maxAngularCorrection = i11833[8]
  i11832.maxTranslationSpeed = i11833[9]
  i11832.maxRotationSpeed = i11833[10]
  i11832.baumgarteScale = i11833[11]
  i11832.baumgarteTOIScale = i11833[12]
  i11832.timeToSleep = i11833[13]
  i11832.linearSleepTolerance = i11833[14]
  i11832.angularSleepTolerance = i11833[15]
  i11832.defaultContactOffset = i11833[16]
  i11832.autoSimulation = !!i11833[17]
  i11832.queriesHitTriggers = !!i11833[18]
  i11832.queriesStartInColliders = !!i11833[19]
  i11832.callbacksOnDisable = !!i11833[20]
  i11832.reuseCollisionCallbacks = !!i11833[21]
  i11832.autoSyncTransforms = !!i11833[22]
  var i11835 = i11833[23]
  var i11834 = []
  for(var i = 0; i < i11835.length; i += 1) {
    i11834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11835[i + 0]) );
  }
  i11832.collisionMatrix = i11834
  return i11832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11839 = data
  i11838.enabled = !!i11839[0]
  i11838.layerId = i11839[1]
  i11838.otherLayerId = i11839[2]
  return i11838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11841 = data
  var i11843 = i11841[0]
  var i11842 = []
  for(var i = 0; i < i11843.length; i += 1) {
    i11842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11843[i + 0]) );
  }
  i11840.qualityLevels = i11842
  var i11845 = i11841[1]
  var i11844 = []
  for(var i = 0; i < i11845.length; i += 1) {
    i11844.push( i11845[i + 0] );
  }
  i11840.names = i11844
  i11840.shadows = i11841[2]
  i11840.anisotropicFiltering = i11841[3]
  i11840.antiAliasing = i11841[4]
  i11840.lodBias = i11841[5]
  i11840.shadowCascades = i11841[6]
  i11840.shadowDistance = i11841[7]
  i11840.shadowmaskMode = i11841[8]
  i11840.shadowProjection = i11841[9]
  i11840.shadowResolution = i11841[10]
  i11840.softParticles = !!i11841[11]
  i11840.softVegetation = !!i11841[12]
  i11840.activeColorSpace = i11841[13]
  i11840.desiredColorSpace = i11841[14]
  i11840.masterTextureLimit = i11841[15]
  i11840.maxQueuedFrames = i11841[16]
  i11840.particleRaycastBudget = i11841[17]
  i11840.pixelLightCount = i11841[18]
  i11840.realtimeReflectionProbes = !!i11841[19]
  i11840.shadowCascade2Split = i11841[20]
  i11840.shadowCascade4Split = new pc.Vec3( i11841[21], i11841[22], i11841[23] )
  i11840.streamingMipmapsActive = !!i11841[24]
  i11840.vSyncCount = i11841[25]
  i11840.asyncUploadBufferSize = i11841[26]
  i11840.asyncUploadTimeSlice = i11841[27]
  i11840.billboardsFaceCameraPosition = !!i11841[28]
  i11840.shadowNearPlaneOffset = i11841[29]
  i11840.streamingMipmapsMemoryBudget = i11841[30]
  i11840.maximumLODLevel = i11841[31]
  i11840.streamingMipmapsAddAllCameras = !!i11841[32]
  i11840.streamingMipmapsMaxLevelReduction = i11841[33]
  i11840.streamingMipmapsRenderersPerFrame = i11841[34]
  i11840.resolutionScalingFixedDPIFactor = i11841[35]
  i11840.streamingMipmapsMaxFileIORequests = i11841[36]
  i11840.currentQualityLevel = i11841[37]
  return i11840
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[34],"65":[9],"66":[36],"67":[36],"68":[36],"69":[36],"70":[36],"71":[36],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[9],"87":[25],"88":[89],"90":[89],"8":[7],"91":[28],"92":[8],"93":[7],"94":[25,7],"95":[7,13],"96":[7],"97":[13,7],"98":[25],"99":[13,7],"100":[7],"101":[102],"103":[102],"104":[102],"105":[7],"106":[7],"12":[8],"14":[13,7],"107":[7],"11":[8],"108":[7],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"15":[13,7],"117":[7],"118":[7],"119":[7],"120":[7],"121":[13,7],"122":[7],"123":[28],"124":[28],"29":[28],"125":[28],"126":[9],"127":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SkinnedMeshRenderer","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "24.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4906";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

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

Deserializers.buildID = "ee28c9a9-7b51-4237-9906-9b6bc9d74602";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

