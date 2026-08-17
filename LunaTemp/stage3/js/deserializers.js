var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.JointSpring' )
  var i5239 = data
  i5238.spring = i5239[0]
  i5238.damper = i5239[1]
  i5238.targetPosition = i5239[2]
  return i5238
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5240 = root || request.c( 'UnityEngine.JointMotor' )
  var i5241 = data
  i5240.m_TargetVelocity = i5241[0]
  i5240.m_Force = i5241[1]
  i5240.m_FreeSpin = i5241[2]
  return i5240
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5242 = root || request.c( 'UnityEngine.JointLimits' )
  var i5243 = data
  i5242.m_Min = i5243[0]
  i5242.m_Max = i5243[1]
  i5242.m_Bounciness = i5243[2]
  i5242.m_BounceMinVelocity = i5243[3]
  i5242.m_ContactDistance = i5243[4]
  i5242.minBounce = i5243[5]
  i5242.maxBounce = i5243[6]
  return i5242
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5244 = root || request.c( 'UnityEngine.JointDrive' )
  var i5245 = data
  i5244.m_PositionSpring = i5245[0]
  i5244.m_PositionDamper = i5245[1]
  i5244.m_MaximumForce = i5245[2]
  i5244.m_UseAcceleration = i5245[3]
  return i5244
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5246 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5247 = data
  i5246.m_Spring = i5247[0]
  i5246.m_Damper = i5247[1]
  return i5246
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5248 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5249 = data
  i5248.m_Limit = i5249[0]
  i5248.m_Bounciness = i5249[1]
  i5248.m_ContactDistance = i5249[2]
  return i5248
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5250 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5251 = data
  i5250.m_ExtremumSlip = i5251[0]
  i5250.m_ExtremumValue = i5251[1]
  i5250.m_AsymptoteSlip = i5251[2]
  i5250.m_AsymptoteValue = i5251[3]
  i5250.m_Stiffness = i5251[4]
  return i5250
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5252 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5253 = data
  i5252.m_LowerAngle = i5253[0]
  i5252.m_UpperAngle = i5253[1]
  return i5252
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5254 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5255 = data
  i5254.m_MotorSpeed = i5255[0]
  i5254.m_MaximumMotorTorque = i5255[1]
  return i5254
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5257 = data
  i5256.m_DampingRatio = i5257[0]
  i5256.m_Frequency = i5257[1]
  i5256.m_Angle = i5257[2]
  return i5256
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5258 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5259 = data
  i5258.m_LowerTranslation = i5259[0]
  i5258.m_UpperTranslation = i5259[1]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5261 = data
  i5260.name = i5261[0]
  i5260.halfPrecision = !!i5261[1]
  i5260.useSimplification = !!i5261[2]
  i5260.useUInt32IndexFormat = !!i5261[3]
  i5260.vertexCount = i5261[4]
  i5260.aabb = i5261[5]
  var i5263 = i5261[6]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( !!i5263[i + 0] );
  }
  i5260.streams = i5262
  i5260.vertices = i5261[7]
  var i5265 = i5261[8]
  var i5264 = []
  for(var i = 0; i < i5265.length; i += 1) {
    i5264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5265[i + 0]) );
  }
  i5260.subMeshes = i5264
  var i5267 = i5261[9]
  var i5266 = []
  for(var i = 0; i < i5267.length; i += 16) {
    i5266.push( new pc.Mat4().setData(i5267[i + 0], i5267[i + 1], i5267[i + 2], i5267[i + 3],  i5267[i + 4], i5267[i + 5], i5267[i + 6], i5267[i + 7],  i5267[i + 8], i5267[i + 9], i5267[i + 10], i5267[i + 11],  i5267[i + 12], i5267[i + 13], i5267[i + 14], i5267[i + 15]) );
  }
  i5260.bindposes = i5266
  var i5269 = i5261[10]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5269[i + 0]) );
  }
  i5260.blendShapes = i5268
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5275 = data
  i5274.triangles = i5275[0]
  return i5274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5281 = data
  i5280.name = i5281[0]
  var i5283 = i5281[1]
  var i5282 = []
  for(var i = 0; i < i5283.length; i += 1) {
    i5282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5283[i + 0]) );
  }
  i5280.frames = i5282
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5284 = root || new pc.UnityMaterial()
  var i5285 = data
  i5284.name = i5285[0]
  request.r(i5285[1], i5285[2], 0, i5284, 'shader')
  i5284.renderQueue = i5285[3]
  i5284.enableInstancing = !!i5285[4]
  var i5287 = i5285[5]
  var i5286 = []
  for(var i = 0; i < i5287.length; i += 1) {
    i5286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5287[i + 0]) );
  }
  i5284.floatParameters = i5286
  var i5289 = i5285[6]
  var i5288 = []
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5289[i + 0]) );
  }
  i5284.colorParameters = i5288
  var i5291 = i5285[7]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5291[i + 0]) );
  }
  i5284.vectorParameters = i5290
  var i5293 = i5285[8]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5293[i + 0]) );
  }
  i5284.textureParameters = i5292
  var i5295 = i5285[9]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 1) {
    i5294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5295[i + 0]) );
  }
  i5284.materialFlags = i5294
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5299 = data
  i5298.name = i5299[0]
  i5298.value = i5299[1]
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5303 = data
  i5302.name = i5303[0]
  i5302.value = new pc.Color(i5303[1], i5303[2], i5303[3], i5303[4])
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5307 = data
  i5306.name = i5307[0]
  i5306.value = new pc.Vec4( i5307[1], i5307[2], i5307[3], i5307[4] )
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5311 = data
  i5310.name = i5311[0]
  request.r(i5311[1], i5311[2], 0, i5310, 'value')
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5315 = data
  i5314.name = i5315[0]
  i5314.enabled = !!i5315[1]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5317 = data
  i5316.name = i5317[0]
  i5316.width = i5317[1]
  i5316.height = i5317[2]
  i5316.mipmapCount = i5317[3]
  i5316.anisoLevel = i5317[4]
  i5316.filterMode = i5317[5]
  i5316.hdr = !!i5317[6]
  i5316.format = i5317[7]
  i5316.wrapMode = i5317[8]
  i5316.alphaIsTransparency = !!i5317[9]
  i5316.alphaSource = i5317[10]
  i5316.graphicsFormat = i5317[11]
  i5316.sRGBTexture = !!i5317[12]
  i5316.desiredColorSpace = i5317[13]
  i5316.wrapU = i5317[14]
  i5316.wrapV = i5317[15]
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5319 = data
  i5318.position = new pc.Vec3( i5319[0], i5319[1], i5319[2] )
  i5318.scale = new pc.Vec3( i5319[3], i5319[4], i5319[5] )
  i5318.rotation = new pc.Quat(i5319[6], i5319[7], i5319[8], i5319[9])
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5321 = data
  i5320.center = new pc.Vec3( i5321[0], i5321[1], i5321[2] )
  i5320.size = new pc.Vec3( i5321[3], i5321[4], i5321[5] )
  i5320.enabled = !!i5321[6]
  i5320.isTrigger = !!i5321[7]
  request.r(i5321[8], i5321[9], 0, i5320, 'material')
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5323 = data
  i5322.color = new pc.Color(i5323[0], i5323[1], i5323[2], i5323[3])
  request.r(i5323[4], i5323[5], 0, i5322, 'sprite')
  i5322.flipX = !!i5323[6]
  i5322.flipY = !!i5323[7]
  i5322.drawMode = i5323[8]
  i5322.size = new pc.Vec2( i5323[9], i5323[10] )
  i5322.tileMode = i5323[11]
  i5322.adaptiveModeThreshold = i5323[12]
  i5322.maskInteraction = i5323[13]
  i5322.spriteSortPoint = i5323[14]
  i5322.enabled = !!i5323[15]
  request.r(i5323[16], i5323[17], 0, i5322, 'sharedMaterial')
  var i5325 = i5323[18]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 2) {
  request.r(i5325[i + 0], i5325[i + 1], 2, i5324, '')
  }
  i5322.sharedMaterials = i5324
  i5322.receiveShadows = !!i5323[19]
  i5322.shadowCastingMode = i5323[20]
  i5322.sortingLayerID = i5323[21]
  i5322.sortingOrder = i5323[22]
  i5322.lightmapIndex = i5323[23]
  i5322.lightmapSceneIndex = i5323[24]
  i5322.lightmapScaleOffset = new pc.Vec4( i5323[25], i5323[26], i5323[27], i5323[28] )
  i5322.lightProbeUsage = i5323[29]
  i5322.reflectionProbeUsage = i5323[30]
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5329 = data
  i5328.name = i5329[0]
  i5328.tagId = i5329[1]
  i5328.enabled = !!i5329[2]
  i5328.isStatic = !!i5329[3]
  i5328.layer = i5329[4]
  return i5328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5331 = data
  request.r(i5331[0], i5331[1], 0, i5330, 'sharedMesh')
  var i5333 = i5331[2]
  var i5332 = []
  for(var i = 0; i < i5333.length; i += 2) {
  request.r(i5333[i + 0], i5333[i + 1], 2, i5332, '')
  }
  i5330.bones = i5332
  i5330.updateWhenOffscreen = !!i5331[3]
  i5330.localBounds = i5331[4]
  request.r(i5331[5], i5331[6], 0, i5330, 'rootBone')
  var i5335 = i5331[7]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5335[i + 0]) );
  }
  i5330.blendShapesWeights = i5334
  i5330.enabled = !!i5331[8]
  request.r(i5331[9], i5331[10], 0, i5330, 'sharedMaterial')
  var i5337 = i5331[11]
  var i5336 = []
  for(var i = 0; i < i5337.length; i += 2) {
  request.r(i5337[i + 0], i5337[i + 1], 2, i5336, '')
  }
  i5330.sharedMaterials = i5336
  i5330.receiveShadows = !!i5331[12]
  i5330.shadowCastingMode = i5331[13]
  i5330.sortingLayerID = i5331[14]
  i5330.sortingOrder = i5331[15]
  i5330.lightmapIndex = i5331[16]
  i5330.lightmapSceneIndex = i5331[17]
  i5330.lightmapScaleOffset = new pc.Vec4( i5331[18], i5331[19], i5331[20], i5331[21] )
  i5330.lightProbeUsage = i5331[22]
  i5330.reflectionProbeUsage = i5331[23]
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5343 = data
  i5342.weight = i5343[0]
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5345 = data
  i5344.pivot = new pc.Vec2( i5345[0], i5345[1] )
  i5344.anchorMin = new pc.Vec2( i5345[2], i5345[3] )
  i5344.anchorMax = new pc.Vec2( i5345[4], i5345[5] )
  i5344.sizeDelta = new pc.Vec2( i5345[6], i5345[7] )
  i5344.anchoredPosition3D = new pc.Vec3( i5345[8], i5345[9], i5345[10] )
  i5344.rotation = new pc.Quat(i5345[11], i5345[12], i5345[13], i5345[14])
  i5344.scale = new pc.Vec3( i5345[15], i5345[16], i5345[17] )
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5347 = data
  i5346.planeDistance = i5347[0]
  i5346.referencePixelsPerUnit = i5347[1]
  i5346.isFallbackOverlay = !!i5347[2]
  i5346.renderMode = i5347[3]
  i5346.renderOrder = i5347[4]
  i5346.sortingLayerName = i5347[5]
  i5346.sortingOrder = i5347[6]
  i5346.scaleFactor = i5347[7]
  request.r(i5347[8], i5347[9], 0, i5346, 'worldCamera')
  i5346.overrideSorting = !!i5347[10]
  i5346.pixelPerfect = !!i5347[11]
  i5346.targetDisplay = i5347[12]
  i5346.overridePixelPerfect = !!i5347[13]
  i5346.enabled = !!i5347[14]
  return i5346
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5348 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5349 = data
  i5348.m_UiScaleMode = i5349[0]
  i5348.m_ReferencePixelsPerUnit = i5349[1]
  i5348.m_ScaleFactor = i5349[2]
  i5348.m_ReferenceResolution = new pc.Vec2( i5349[3], i5349[4] )
  i5348.m_ScreenMatchMode = i5349[5]
  i5348.m_MatchWidthOrHeight = i5349[6]
  i5348.m_PhysicalUnit = i5349[7]
  i5348.m_FallbackScreenDPI = i5349[8]
  i5348.m_DefaultSpriteDPI = i5349[9]
  i5348.m_DynamicPixelsPerUnit = i5349[10]
  i5348.m_PresetInfoIsWorld = !!i5349[11]
  return i5348
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5350 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5351 = data
  i5350.m_IgnoreReversedGraphics = !!i5351[0]
  i5350.m_BlockingObjects = i5351[1]
  i5350.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5351[2] )
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5353 = data
  i5352.cullTransparentMesh = !!i5353[0]
  return i5352
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5354 = root || request.c( 'UnityEngine.UI.Image' )
  var i5355 = data
  request.r(i5355[0], i5355[1], 0, i5354, 'm_Sprite')
  i5354.m_Type = i5355[2]
  i5354.m_PreserveAspect = !!i5355[3]
  i5354.m_FillCenter = !!i5355[4]
  i5354.m_FillMethod = i5355[5]
  i5354.m_FillAmount = i5355[6]
  i5354.m_FillClockwise = !!i5355[7]
  i5354.m_FillOrigin = i5355[8]
  i5354.m_UseSpriteMesh = !!i5355[9]
  i5354.m_PixelsPerUnitMultiplier = i5355[10]
  request.r(i5355[11], i5355[12], 0, i5354, 'm_Material')
  i5354.m_Maskable = !!i5355[13]
  i5354.m_Color = new pc.Color(i5355[14], i5355[15], i5355[16], i5355[17])
  i5354.m_RaycastTarget = !!i5355[18]
  i5354.m_RaycastPadding = new pc.Vec4( i5355[19], i5355[20], i5355[21], i5355[22] )
  return i5354
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i5356 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i5357 = data
  request.r(i5357[0], i5357[1], 0, i5356, 'm_Texture')
  i5356.m_UVRect = UnityEngine.Rect.MinMaxRect(i5357[2], i5357[3], i5357[4], i5357[5])
  request.r(i5357[6], i5357[7], 0, i5356, 'm_Material')
  i5356.m_Maskable = !!i5357[8]
  i5356.m_Color = new pc.Color(i5357[9], i5357[10], i5357[11], i5357[12])
  i5356.m_RaycastTarget = !!i5357[13]
  i5356.m_RaycastPadding = new pc.Vec4( i5357[14], i5357[15], i5357[16], i5357[17] )
  return i5356
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i5358 = root || request.c( 'ImageScroller' )
  var i5359 = data
  request.r(i5359[0], i5359[1], 0, i5358, 'rawImage')
  i5358.moveVector = new pc.Vec2( i5359[2], i5359[3] )
  return i5358
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i5360 = root || request.c( 'UIGuidingMove' )
  var i5361 = data
  request.r(i5361[0], i5361[1], 0, i5360, 'target')
  i5360.startPosition = new pc.Vec2( i5361[2], i5361[3] )
  i5360.endPosition = new pc.Vec2( i5361[4], i5361[5] )
  i5360.duration = i5361[6]
  i5360.ease = i5361[7]
  i5360.resetToStartOnComplete = !!i5361[8]
  i5360.loop = !!i5361[9]
  i5360.loopCount = i5361[10]
  i5360.loopType = i5361[11]
  return i5360
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i5362 = root || request.c( 'UIPulse' )
  var i5363 = data
  i5362.targetScale = new pc.Vec3( i5363[0], i5363[1], i5363[2] )
  i5362.duration = i5363[3]
  i5362.ease = i5363[4]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5365 = data
  i5364.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5365[0], i5364.main)
  i5364.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5365[1], i5364.colorBySpeed)
  i5364.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5365[2], i5364.colorOverLifetime)
  i5364.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5365[3], i5364.emission)
  i5364.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5365[4], i5364.rotationBySpeed)
  i5364.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5365[5], i5364.rotationOverLifetime)
  i5364.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5365[6], i5364.shape)
  i5364.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5365[7], i5364.sizeBySpeed)
  i5364.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5365[8], i5364.sizeOverLifetime)
  i5364.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5365[9], i5364.textureSheetAnimation)
  i5364.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5365[10], i5364.velocityOverLifetime)
  i5364.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5365[11], i5364.noise)
  i5364.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5365[12], i5364.inheritVelocity)
  i5364.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5365[13], i5364.forceOverLifetime)
  i5364.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5365[14], i5364.limitVelocityOverLifetime)
  i5364.useAutoRandomSeed = !!i5365[15]
  i5364.randomSeed = i5365[16]
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5366 = root || new pc.ParticleSystemMain()
  var i5367 = data
  i5366.duration = i5367[0]
  i5366.loop = !!i5367[1]
  i5366.prewarm = !!i5367[2]
  i5366.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[3], i5366.startDelay)
  i5366.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[4], i5366.startLifetime)
  i5366.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[5], i5366.startSpeed)
  i5366.startSize3D = !!i5367[6]
  i5366.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[7], i5366.startSizeX)
  i5366.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[8], i5366.startSizeY)
  i5366.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[9], i5366.startSizeZ)
  i5366.startRotation3D = !!i5367[10]
  i5366.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[11], i5366.startRotationX)
  i5366.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[12], i5366.startRotationY)
  i5366.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[13], i5366.startRotationZ)
  i5366.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5367[14], i5366.startColor)
  i5366.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[15], i5366.gravityModifier)
  i5366.simulationSpace = i5367[16]
  request.r(i5367[17], i5367[18], 0, i5366, 'customSimulationSpace')
  i5366.simulationSpeed = i5367[19]
  i5366.useUnscaledTime = !!i5367[20]
  i5366.scalingMode = i5367[21]
  i5366.playOnAwake = !!i5367[22]
  i5366.maxParticles = i5367[23]
  i5366.emitterVelocityMode = i5367[24]
  i5366.stopAction = i5367[25]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5368 = root || new pc.MinMaxCurve()
  var i5369 = data
  i5368.mode = i5369[0]
  i5368.curveMin = new pc.AnimationCurve( { keys_flow: i5369[1] } )
  i5368.curveMax = new pc.AnimationCurve( { keys_flow: i5369[2] } )
  i5368.curveMultiplier = i5369[3]
  i5368.constantMin = i5369[4]
  i5368.constantMax = i5369[5]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5370 = root || new pc.MinMaxGradient()
  var i5371 = data
  i5370.mode = i5371[0]
  i5370.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5371[1], i5370.gradientMin)
  i5370.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5371[2], i5370.gradientMax)
  i5370.colorMin = new pc.Color(i5371[3], i5371[4], i5371[5], i5371[6])
  i5370.colorMax = new pc.Color(i5371[7], i5371[8], i5371[9], i5371[10])
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5373 = data
  i5372.mode = i5373[0]
  var i5375 = i5373[1]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5375[i + 0]) );
  }
  i5372.colorKeys = i5374
  var i5377 = i5373[2]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 1) {
    i5376.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5377[i + 0]) );
  }
  i5372.alphaKeys = i5376
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5378 = root || new pc.ParticleSystemColorBySpeed()
  var i5379 = data
  i5378.enabled = !!i5379[0]
  i5378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5379[1], i5378.color)
  i5378.range = new pc.Vec2( i5379[2], i5379[3] )
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5383 = data
  i5382.color = new pc.Color(i5383[0], i5383[1], i5383[2], i5383[3])
  i5382.time = i5383[4]
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5387 = data
  i5386.alpha = i5387[0]
  i5386.time = i5387[1]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5388 = root || new pc.ParticleSystemColorOverLifetime()
  var i5389 = data
  i5388.enabled = !!i5389[0]
  i5388.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5389[1], i5388.color)
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5390 = root || new pc.ParticleSystemEmitter()
  var i5391 = data
  i5390.enabled = !!i5391[0]
  i5390.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5391[1], i5390.rateOverTime)
  i5390.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5391[2], i5390.rateOverDistance)
  var i5393 = i5391[3]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5393[i + 0]) );
  }
  i5390.bursts = i5392
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5396 = root || new pc.ParticleSystemBurst()
  var i5397 = data
  i5396.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5397[0], i5396.count)
  i5396.cycleCount = i5397[1]
  i5396.minCount = i5397[2]
  i5396.maxCount = i5397[3]
  i5396.repeatInterval = i5397[4]
  i5396.time = i5397[5]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5398 = root || new pc.ParticleSystemRotationBySpeed()
  var i5399 = data
  i5398.enabled = !!i5399[0]
  i5398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[1], i5398.x)
  i5398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[2], i5398.y)
  i5398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[3], i5398.z)
  i5398.separateAxes = !!i5399[4]
  i5398.range = new pc.Vec2( i5399[5], i5399[6] )
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5400 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5401 = data
  i5400.enabled = !!i5401[0]
  i5400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[1], i5400.x)
  i5400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[2], i5400.y)
  i5400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[3], i5400.z)
  i5400.separateAxes = !!i5401[4]
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5402 = root || new pc.ParticleSystemShape()
  var i5403 = data
  i5402.enabled = !!i5403[0]
  i5402.shapeType = i5403[1]
  i5402.randomDirectionAmount = i5403[2]
  i5402.sphericalDirectionAmount = i5403[3]
  i5402.randomPositionAmount = i5403[4]
  i5402.alignToDirection = !!i5403[5]
  i5402.radius = i5403[6]
  i5402.radiusMode = i5403[7]
  i5402.radiusSpread = i5403[8]
  i5402.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5403[9], i5402.radiusSpeed)
  i5402.radiusThickness = i5403[10]
  i5402.angle = i5403[11]
  i5402.length = i5403[12]
  i5402.boxThickness = new pc.Vec3( i5403[13], i5403[14], i5403[15] )
  i5402.meshShapeType = i5403[16]
  request.r(i5403[17], i5403[18], 0, i5402, 'mesh')
  request.r(i5403[19], i5403[20], 0, i5402, 'meshRenderer')
  request.r(i5403[21], i5403[22], 0, i5402, 'skinnedMeshRenderer')
  i5402.useMeshMaterialIndex = !!i5403[23]
  i5402.meshMaterialIndex = i5403[24]
  i5402.useMeshColors = !!i5403[25]
  i5402.normalOffset = i5403[26]
  i5402.arc = i5403[27]
  i5402.arcMode = i5403[28]
  i5402.arcSpread = i5403[29]
  i5402.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5403[30], i5402.arcSpeed)
  i5402.donutRadius = i5403[31]
  i5402.position = new pc.Vec3( i5403[32], i5403[33], i5403[34] )
  i5402.rotation = new pc.Vec3( i5403[35], i5403[36], i5403[37] )
  i5402.scale = new pc.Vec3( i5403[38], i5403[39], i5403[40] )
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5404 = root || new pc.ParticleSystemSizeBySpeed()
  var i5405 = data
  i5404.enabled = !!i5405[0]
  i5404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[1], i5404.x)
  i5404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[2], i5404.y)
  i5404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[3], i5404.z)
  i5404.separateAxes = !!i5405[4]
  i5404.range = new pc.Vec2( i5405[5], i5405[6] )
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5406 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5407 = data
  i5406.enabled = !!i5407[0]
  i5406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[1], i5406.x)
  i5406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[2], i5406.y)
  i5406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[3], i5406.z)
  i5406.separateAxes = !!i5407[4]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5408 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5409 = data
  i5408.enabled = !!i5409[0]
  i5408.mode = i5409[1]
  i5408.animation = i5409[2]
  i5408.numTilesX = i5409[3]
  i5408.numTilesY = i5409[4]
  i5408.useRandomRow = !!i5409[5]
  i5408.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5409[6], i5408.frameOverTime)
  i5408.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5409[7], i5408.startFrame)
  i5408.cycleCount = i5409[8]
  i5408.rowIndex = i5409[9]
  i5408.flipU = i5409[10]
  i5408.flipV = i5409[11]
  i5408.spriteCount = i5409[12]
  var i5411 = i5409[13]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 2) {
  request.r(i5411[i + 0], i5411[i + 1], 2, i5410, '')
  }
  i5408.sprites = i5410
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5414 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5415 = data
  i5414.enabled = !!i5415[0]
  i5414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[1], i5414.x)
  i5414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[2], i5414.y)
  i5414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[3], i5414.z)
  i5414.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[4], i5414.radial)
  i5414.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[5], i5414.speedModifier)
  i5414.space = i5415[6]
  i5414.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[7], i5414.orbitalX)
  i5414.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[8], i5414.orbitalY)
  i5414.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[9], i5414.orbitalZ)
  i5414.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[10], i5414.orbitalOffsetX)
  i5414.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[11], i5414.orbitalOffsetY)
  i5414.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[12], i5414.orbitalOffsetZ)
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5416 = root || new pc.ParticleSystemNoise()
  var i5417 = data
  i5416.enabled = !!i5417[0]
  i5416.separateAxes = !!i5417[1]
  i5416.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[2], i5416.strengthX)
  i5416.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[3], i5416.strengthY)
  i5416.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[4], i5416.strengthZ)
  i5416.frequency = i5417[5]
  i5416.damping = !!i5417[6]
  i5416.octaveCount = i5417[7]
  i5416.octaveMultiplier = i5417[8]
  i5416.octaveScale = i5417[9]
  i5416.quality = i5417[10]
  i5416.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[11], i5416.scrollSpeed)
  i5416.scrollSpeedMultiplier = i5417[12]
  i5416.remapEnabled = !!i5417[13]
  i5416.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[14], i5416.remapX)
  i5416.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[15], i5416.remapY)
  i5416.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[16], i5416.remapZ)
  i5416.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[17], i5416.positionAmount)
  i5416.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[18], i5416.rotationAmount)
  i5416.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[19], i5416.sizeAmount)
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5418 = root || new pc.ParticleSystemInheritVelocity()
  var i5419 = data
  i5418.enabled = !!i5419[0]
  i5418.mode = i5419[1]
  i5418.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5419[2], i5418.curve)
  return i5418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5420 = root || new pc.ParticleSystemForceOverLifetime()
  var i5421 = data
  i5420.enabled = !!i5421[0]
  i5420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[1], i5420.x)
  i5420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[2], i5420.y)
  i5420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[3], i5420.z)
  i5420.space = i5421[4]
  i5420.randomized = !!i5421[5]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5422 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5423 = data
  i5422.enabled = !!i5423[0]
  i5422.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[1], i5422.limit)
  i5422.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[2], i5422.limitX)
  i5422.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[3], i5422.limitY)
  i5422.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[4], i5422.limitZ)
  i5422.dampen = i5423[5]
  i5422.separateAxes = !!i5423[6]
  i5422.space = i5423[7]
  i5422.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[8], i5422.drag)
  i5422.multiplyDragByParticleSize = !!i5423[9]
  i5422.multiplyDragByParticleVelocity = !!i5423[10]
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5425 = data
  request.r(i5425[0], i5425[1], 0, i5424, 'mesh')
  i5424.meshCount = i5425[2]
  i5424.activeVertexStreamsCount = i5425[3]
  i5424.alignment = i5425[4]
  i5424.renderMode = i5425[5]
  i5424.sortMode = i5425[6]
  i5424.lengthScale = i5425[7]
  i5424.velocityScale = i5425[8]
  i5424.cameraVelocityScale = i5425[9]
  i5424.normalDirection = i5425[10]
  i5424.sortingFudge = i5425[11]
  i5424.minParticleSize = i5425[12]
  i5424.maxParticleSize = i5425[13]
  i5424.pivot = new pc.Vec3( i5425[14], i5425[15], i5425[16] )
  request.r(i5425[17], i5425[18], 0, i5424, 'trailMaterial')
  i5424.applyActiveColorSpace = !!i5425[19]
  i5424.enabled = !!i5425[20]
  request.r(i5425[21], i5425[22], 0, i5424, 'sharedMaterial')
  var i5427 = i5425[23]
  var i5426 = []
  for(var i = 0; i < i5427.length; i += 2) {
  request.r(i5427[i + 0], i5427[i + 1], 2, i5426, '')
  }
  i5424.sharedMaterials = i5426
  i5424.receiveShadows = !!i5425[24]
  i5424.shadowCastingMode = i5425[25]
  i5424.sortingLayerID = i5425[26]
  i5424.sortingOrder = i5425[27]
  i5424.lightmapIndex = i5425[28]
  i5424.lightmapSceneIndex = i5425[29]
  i5424.lightmapScaleOffset = new pc.Vec4( i5425[30], i5425[31], i5425[32], i5425[33] )
  i5424.lightProbeUsage = i5425[34]
  i5424.reflectionProbeUsage = i5425[35]
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5429 = data
  i5428.name = i5429[0]
  i5428.atlasId = i5429[1]
  i5428.mipmapCount = i5429[2]
  i5428.hdr = !!i5429[3]
  i5428.size = i5429[4]
  i5428.anisoLevel = i5429[5]
  i5428.filterMode = i5429[6]
  var i5431 = i5429[7]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 4) {
    i5430.push( UnityEngine.Rect.MinMaxRect(i5431[i + 0], i5431[i + 1], i5431[i + 2], i5431[i + 3]) );
  }
  i5428.rects = i5430
  i5428.wrapU = i5429[8]
  i5428.wrapV = i5429[9]
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5435 = data
  i5434.name = i5435[0]
  i5434.index = i5435[1]
  i5434.startup = !!i5435[2]
  return i5434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5437 = data
  i5436.aspect = i5437[0]
  i5436.orthographic = !!i5437[1]
  i5436.orthographicSize = i5437[2]
  i5436.backgroundColor = new pc.Color(i5437[3], i5437[4], i5437[5], i5437[6])
  i5436.nearClipPlane = i5437[7]
  i5436.farClipPlane = i5437[8]
  i5436.fieldOfView = i5437[9]
  i5436.depth = i5437[10]
  i5436.clearFlags = i5437[11]
  i5436.cullingMask = i5437[12]
  i5436.rect = i5437[13]
  request.r(i5437[14], i5437[15], 0, i5436, 'targetTexture')
  i5436.usePhysicalProperties = !!i5437[16]
  i5436.focalLength = i5437[17]
  i5436.sensorSize = new pc.Vec2( i5437[18], i5437[19] )
  i5436.lensShift = new pc.Vec2( i5437[20], i5437[21] )
  i5436.gateFit = i5437[22]
  i5436.commandBufferCount = i5437[23]
  i5436.cameraType = i5437[24]
  i5436.enabled = !!i5437[25]
  return i5436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5439 = data
  request.r(i5439[0], i5439[1], 0, i5438, 'sharedMesh')
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5441 = data
  request.r(i5441[0], i5441[1], 0, i5440, 'additionalVertexStreams')
  i5440.enabled = !!i5441[2]
  request.r(i5441[3], i5441[4], 0, i5440, 'sharedMaterial')
  var i5443 = i5441[5]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 2) {
  request.r(i5443[i + 0], i5443[i + 1], 2, i5442, '')
  }
  i5440.sharedMaterials = i5442
  i5440.receiveShadows = !!i5441[6]
  i5440.shadowCastingMode = i5441[7]
  i5440.sortingLayerID = i5441[8]
  i5440.sortingOrder = i5441[9]
  i5440.lightmapIndex = i5441[10]
  i5440.lightmapSceneIndex = i5441[11]
  i5440.lightmapScaleOffset = new pc.Vec4( i5441[12], i5441[13], i5441[14], i5441[15] )
  i5440.lightProbeUsage = i5441[16]
  i5440.reflectionProbeUsage = i5441[17]
  return i5440
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i5444 = root || request.c( 'MaterialUVScroller' )
  var i5445 = data
  request.r(i5445[0], i5445[1], 0, i5444, 'targetMaterial')
  i5444.scrollSpeed = new pc.Vec2( i5445[2], i5445[3] )
  return i5444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5447 = data
  i5446.type = i5447[0]
  i5446.color = new pc.Color(i5447[1], i5447[2], i5447[3], i5447[4])
  i5446.cullingMask = i5447[5]
  i5446.intensity = i5447[6]
  i5446.range = i5447[7]
  i5446.spotAngle = i5447[8]
  i5446.shadows = i5447[9]
  i5446.shadowNormalBias = i5447[10]
  i5446.shadowBias = i5447[11]
  i5446.shadowStrength = i5447[12]
  i5446.shadowResolution = i5447[13]
  i5446.lightmapBakeType = i5447[14]
  i5446.renderMode = i5447[15]
  request.r(i5447[16], i5447[17], 0, i5446, 'cookie')
  i5446.cookieSize = i5447[18]
  i5446.shadowNearPlane = i5447[19]
  i5446.enabled = !!i5447[20]
  return i5446
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5448 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5449 = data
  request.r(i5449[0], i5449[1], 0, i5448, 'm_FirstSelected')
  i5448.m_sendNavigationEvents = !!i5449[2]
  i5448.m_DragThreshold = i5449[3]
  return i5448
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5450 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5451 = data
  i5450.m_HorizontalAxis = i5451[0]
  i5450.m_VerticalAxis = i5451[1]
  i5450.m_SubmitButton = i5451[2]
  i5450.m_CancelButton = i5451[3]
  i5450.m_InputActionsPerSecond = i5451[4]
  i5450.m_RepeatDelay = i5451[5]
  i5450.m_ForceModuleActive = !!i5451[6]
  i5450.m_SendPointerHoverToParent = !!i5451[7]
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5453 = data
  request.r(i5453[0], i5453[1], 0, i5452, 'animatorController')
  request.r(i5453[2], i5453[3], 0, i5452, 'avatar')
  i5452.updateMode = i5453[4]
  i5452.hasTransformHierarchy = !!i5453[5]
  i5452.applyRootMotion = !!i5453[6]
  var i5455 = i5453[7]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 2) {
  request.r(i5455[i + 0], i5455[i + 1], 2, i5454, '')
  }
  i5452.humanBones = i5454
  i5452.enabled = !!i5453[8]
  return i5452
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i5456 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i5457 = data
  request.r(i5457[0], i5457[1], 0, i5456, 'animator')
  i5456.kickDuration = i5457[2]
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5459 = data
  i5458.center = new pc.Vec3( i5459[0], i5459[1], i5459[2] )
  i5458.radius = i5459[3]
  i5458.enabled = !!i5459[4]
  i5458.isTrigger = !!i5459[5]
  request.r(i5459[6], i5459[7], 0, i5458, 'material')
  return i5458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5461 = data
  i5460.mass = i5461[0]
  i5460.drag = i5461[1]
  i5460.angularDrag = i5461[2]
  i5460.useGravity = !!i5461[3]
  i5460.isKinematic = !!i5461[4]
  i5460.constraints = i5461[5]
  i5460.maxAngularVelocity = i5461[6]
  i5460.collisionDetectionMode = i5461[7]
  i5460.interpolation = i5461[8]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i5462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i5463 = data
  var i5465 = i5463[0]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 3) {
    i5464.push( new pc.Vec3( i5465[i + 0], i5465[i + 1], i5465[i + 2] ) );
  }
  i5462.positions = i5464
  i5462.positionCount = i5463[1]
  i5462.time = i5463[2]
  i5462.startWidth = i5463[3]
  i5462.endWidth = i5463[4]
  i5462.widthMultiplier = i5463[5]
  i5462.autodestruct = !!i5463[6]
  i5462.emitting = !!i5463[7]
  i5462.numCornerVertices = i5463[8]
  i5462.numCapVertices = i5463[9]
  i5462.minVertexDistance = i5463[10]
  i5462.colorGradient = i5463[11] ? new pc.ColorGradient(i5463[11][0], i5463[11][1], i5463[11][2]) : null
  i5462.startColor = new pc.Color(i5463[12], i5463[13], i5463[14], i5463[15])
  i5462.endColor = new pc.Color(i5463[16], i5463[17], i5463[18], i5463[19])
  i5462.generateLightingData = !!i5463[20]
  i5462.textureMode = i5463[21]
  i5462.alignment = i5463[22]
  i5462.widthCurve = new pc.AnimationCurve( { keys_flow: i5463[23] } )
  i5462.enabled = !!i5463[24]
  request.r(i5463[25], i5463[26], 0, i5462, 'sharedMaterial')
  var i5467 = i5463[27]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 2) {
  request.r(i5467[i + 0], i5467[i + 1], 2, i5466, '')
  }
  i5462.sharedMaterials = i5466
  i5462.receiveShadows = !!i5463[28]
  i5462.shadowCastingMode = i5463[29]
  i5462.sortingLayerID = i5463[30]
  i5462.sortingOrder = i5463[31]
  i5462.lightmapIndex = i5463[32]
  i5462.lightmapSceneIndex = i5463[33]
  i5462.lightmapScaleOffset = new pc.Vec4( i5463[34], i5463[35], i5463[36], i5463[37] )
  i5462.lightProbeUsage = i5463[38]
  i5462.reflectionProbeUsage = i5463[39]
  return i5462
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i5470 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i5471 = data
  i5470.blockBounceSpeed = i5471[0]
  i5470.blockBounceUpward = i5471[1]
  i5470.goalFallSpeed = i5471[2]
  i5470.goalFallDownward = i5471[3]
  i5470.goalDropDamping = i5471[4]
  request.r(i5471[5], i5471[6], 0, i5470, 'leftTop')
  request.r(i5471[7], i5471[8], 0, i5470, 'bottomCenter')
  request.r(i5471[9], i5471[10], 0, i5470, 'rightTop')
  i5470.leftTopY = i5471[11]
  i5470.bottomCenterY = i5471[12]
  i5470.rightTopY = i5471[13]
  i5470.halfWidth = i5471[14]
  i5470.goalZ = i5471[15]
  i5470.flightTime = i5471[16]
  request.r(i5471[17], i5471[18], 0, i5470, 'trailRenderer')
  i5470.goalTag = i5471[19]
  return i5470
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i5472 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i5473 = data
  request.r(i5473[0], i5473[1], 0, i5472, 'leftPost')
  request.r(i5473[2], i5473[3], 0, i5472, 'rightPost')
  i5472.baseSpeed = i5473[4]
  i5472.changeSpeedByRound = !!i5473[5]
  return i5472
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i5474 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i5475 = data
  request.r(i5475[0], i5475[1], 0, i5474, 'leftLimit')
  request.r(i5475[2], i5475[3], 0, i5474, 'rightLimit')
  i5474.speed = i5475[4]
  i5474.startActive = !!i5475[5]
  return i5474
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i5476 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i5477 = data
  request.r(i5477[0], i5477[1], 0, i5476, 'leftPoint')
  request.r(i5477[2], i5477[3], 0, i5476, 'rightPoint')
  i5476.speed = i5477[4]
  request.r(i5477[5], i5477[6], 0, i5476, 'aimLineRenderer')
  request.r(i5477[7], i5477[8], 0, i5476, 'ballTransform')
  i5476.lineWidth = i5477[9]
  i5476.dashDensity = i5477[10]
  i5476.dashRatio = i5477[11]
  i5476.dashColor = new pc.Color(i5477[12], i5477[13], i5477[14], i5477[15])
  i5476.lineGroundY = i5477[16]
  i5476.pulseEffect = !!i5477[17]
  i5476.pulseSpeed = i5477[18]
  i5476.pulseScaleAmount = i5477[19]
  i5476.sortingOrder = i5477[20]
  i5476.sortingLayerName = i5477[21]
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5479 = data
  i5478.textureMode = i5479[0]
  i5478.alignment = i5479[1]
  i5478.widthCurve = new pc.AnimationCurve( { keys_flow: i5479[2] } )
  i5478.colorGradient = i5479[3] ? new pc.ColorGradient(i5479[3][0], i5479[3][1], i5479[3][2]) : null
  var i5481 = i5479[4]
  var i5480 = []
  for(var i = 0; i < i5481.length; i += 3) {
    i5480.push( new pc.Vec3( i5481[i + 0], i5481[i + 1], i5481[i + 2] ) );
  }
  i5478.positions = i5480
  i5478.positionCount = i5479[5]
  i5478.widthMultiplier = i5479[6]
  i5478.startWidth = i5479[7]
  i5478.endWidth = i5479[8]
  i5478.numCornerVertices = i5479[9]
  i5478.numCapVertices = i5479[10]
  i5478.useWorldSpace = !!i5479[11]
  i5478.loop = !!i5479[12]
  i5478.startColor = new pc.Color(i5479[13], i5479[14], i5479[15], i5479[16])
  i5478.endColor = new pc.Color(i5479[17], i5479[18], i5479[19], i5479[20])
  i5478.generateLightingData = !!i5479[21]
  i5478.enabled = !!i5479[22]
  request.r(i5479[23], i5479[24], 0, i5478, 'sharedMaterial')
  var i5483 = i5479[25]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 2) {
  request.r(i5483[i + 0], i5483[i + 1], 2, i5482, '')
  }
  i5478.sharedMaterials = i5482
  i5478.receiveShadows = !!i5479[26]
  i5478.shadowCastingMode = i5479[27]
  i5478.sortingLayerID = i5479[28]
  i5478.sortingOrder = i5479[29]
  i5478.lightmapIndex = i5479[30]
  i5478.lightmapSceneIndex = i5479[31]
  i5478.lightmapScaleOffset = new pc.Vec4( i5479[32], i5479[33], i5479[34], i5479[35] )
  i5478.lightProbeUsage = i5479[36]
  i5478.reflectionProbeUsage = i5479[37]
  return i5478
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i5484 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i5485 = data
  i5484.kickImpactDelay = i5485[0]
  request.r(i5485[1], i5485[2], 0, i5484, 'ball')
  request.r(i5485[3], i5485[4], 0, i5484, 'targetMover')
  request.r(i5485[5], i5485[6], 0, i5484, 'goalkeeper')
  request.r(i5485[7], i5485[8], 0, i5484, 'ronaldoAnimator')
  request.r(i5485[9], i5485[10], 0, i5484, 'uiManager')
  request.r(i5485[11], i5485[12], 0, i5484, 'defenderRound2')
  request.r(i5485[13], i5485[14], 0, i5484, 'defenderRound3')
  i5484.targetSpeeds = i5485[15]
  i5484.delayBetweenRounds = i5485[16]
  i5484.promptEveryRound = !!i5485[17]
  return i5484
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i5486 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i5487 = data
  var i5489 = i5487[0]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 2) {
  request.r(i5489[i + 0], i5489[i + 1], 2, i5488, '')
  }
  i5486.roundIndicators = i5488
  request.r(i5487[1], i5487[2], 0, i5486, 'iconEmpty')
  request.r(i5487[3], i5487[4], 0, i5486, 'iconCheck')
  request.r(i5487[5], i5487[6], 0, i5486, 'iconCross')
  request.r(i5487[7], i5487[8], 0, i5486, 'winEndcardPanel')
  request.r(i5487[9], i5487[10], 0, i5486, 'losePanel')
  request.r(i5487[11], i5487[12], 0, i5486, 'promptText')
  var i5491 = i5487[13]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 2) {
  request.r(i5491[i + 0], i5491[i + 1], 2, i5490, '')
  }
  i5486.objectsToShowOnWin = i5490
  i5486.winDelay = i5487[14]
  var i5493 = i5487[15]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 2) {
  request.r(i5493[i + 0], i5493[i + 1], 2, i5492, '')
  }
  i5486.objectsToHideOnWin = i5492
  var i5495 = i5487[16]
  var i5494 = []
  for(var i = 0; i < i5495.length; i += 2) {
  request.r(i5495[i + 0], i5495[i + 1], 2, i5494, '')
  }
  i5486.objectsToHideOnLose = i5494
  var i5497 = i5487[17]
  var i5496 = []
  for(var i = 0; i < i5497.length; i += 2) {
  request.r(i5497[i + 0], i5497[i + 1], 2, i5496, '')
  }
  i5486.extraObjectsToHide = i5496
  return i5486
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5502 = root || request.c( 'Ply_SoundManager' )
  var i5503 = data
  i5502.audioClips = request.d('FxAudio', i5503[0], i5502.audioClips)
  request.r(i5503[1], i5503[2], 0, i5502, 'sound')
  i5502.enableSound = !!i5503[3]
  i5502.bgmVolume = i5503[4]
  return i5502
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i5504 = root || request.c( 'FxAudio' )
  var i5505 = data
  i5504.Clock = request.d('SoundData', i5505[0], i5504.Clock)
  i5504.PlayerWin = request.d('SoundData', i5505[1], i5504.PlayerWin)
  i5504.PlayerLoose = request.d('SoundData', i5505[2], i5504.PlayerLoose)
  i5504.RightChoice = request.d('SoundData', i5505[3], i5504.RightChoice)
  i5504.WrongChoice = request.d('SoundData', i5505[4], i5504.WrongChoice)
  i5504.MaxLevel = request.d('SoundData', i5505[5], i5504.MaxLevel)
  i5504.FightingCloud = request.d('SoundData', i5505[6], i5504.FightingCloud)
  i5504.Confetti = request.d('SoundData', i5505[7], i5504.Confetti)
  return i5504
}

Deserializers["SoundData"] = function (request, data, root) {
  var i5506 = root || request.c( 'SoundData' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, 'clip')
  i5506.volume = i5507[2]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5509 = data
  request.r(i5509[0], i5509[1], 0, i5508, 'clip')
  request.r(i5509[2], i5509[3], 0, i5508, 'outputAudioMixerGroup')
  i5508.playOnAwake = !!i5509[4]
  i5508.loop = !!i5509[5]
  i5508.time = i5509[6]
  i5508.volume = i5509[7]
  i5508.pitch = i5509[8]
  i5508.enabled = !!i5509[9]
  return i5508
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5510 = root || request.c( 'UnityEngine.UI.Button' )
  var i5511 = data
  i5510.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5511[0], i5510.m_OnClick)
  i5510.m_Navigation = request.d('UnityEngine.UI.Navigation', i5511[1], i5510.m_Navigation)
  i5510.m_Transition = i5511[2]
  i5510.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5511[3], i5510.m_Colors)
  i5510.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5511[4], i5510.m_SpriteState)
  i5510.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5511[5], i5510.m_AnimationTriggers)
  i5510.m_Interactable = !!i5511[6]
  request.r(i5511[7], i5511[8], 0, i5510, 'm_TargetGraphic')
  return i5510
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5512 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5513 = data
  i5512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5513[0], i5512.m_PersistentCalls)
  return i5512
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5515 = data
  var i5517 = i5515[0]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.add(request.d('UnityEngine.Events.PersistentCall', i5517[i + 0]));
  }
  i5514.m_Calls = i5516
  return i5514
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5520 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5521 = data
  request.r(i5521[0], i5521[1], 0, i5520, 'm_Target')
  i5520.m_TargetAssemblyTypeName = i5521[2]
  i5520.m_MethodName = i5521[3]
  i5520.m_Mode = i5521[4]
  i5520.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5521[5], i5520.m_Arguments)
  i5520.m_CallState = i5521[6]
  return i5520
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5522 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'm_ObjectArgument')
  i5522.m_ObjectArgumentAssemblyTypeName = i5523[2]
  i5522.m_IntArgument = i5523[3]
  i5522.m_FloatArgument = i5523[4]
  i5522.m_StringArgument = i5523[5]
  i5522.m_BoolArgument = !!i5523[6]
  return i5522
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5524 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5525 = data
  i5524.m_Mode = i5525[0]
  i5524.m_WrapAround = !!i5525[1]
  request.r(i5525[2], i5525[3], 0, i5524, 'm_SelectOnUp')
  request.r(i5525[4], i5525[5], 0, i5524, 'm_SelectOnDown')
  request.r(i5525[6], i5525[7], 0, i5524, 'm_SelectOnLeft')
  request.r(i5525[8], i5525[9], 0, i5524, 'm_SelectOnRight')
  return i5524
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5526 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5527 = data
  i5526.m_NormalColor = new pc.Color(i5527[0], i5527[1], i5527[2], i5527[3])
  i5526.m_HighlightedColor = new pc.Color(i5527[4], i5527[5], i5527[6], i5527[7])
  i5526.m_PressedColor = new pc.Color(i5527[8], i5527[9], i5527[10], i5527[11])
  i5526.m_SelectedColor = new pc.Color(i5527[12], i5527[13], i5527[14], i5527[15])
  i5526.m_DisabledColor = new pc.Color(i5527[16], i5527[17], i5527[18], i5527[19])
  i5526.m_ColorMultiplier = i5527[20]
  i5526.m_FadeDuration = i5527[21]
  return i5526
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5528 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5529 = data
  request.r(i5529[0], i5529[1], 0, i5528, 'm_HighlightedSprite')
  request.r(i5529[2], i5529[3], 0, i5528, 'm_PressedSprite')
  request.r(i5529[4], i5529[5], 0, i5528, 'm_SelectedSprite')
  request.r(i5529[6], i5529[7], 0, i5528, 'm_DisabledSprite')
  return i5528
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5530 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5531 = data
  i5530.m_NormalTrigger = i5531[0]
  i5530.m_HighlightedTrigger = i5531[1]
  i5530.m_PressedTrigger = i5531[2]
  i5530.m_SelectedTrigger = i5531[3]
  i5530.m_DisabledTrigger = i5531[4]
  return i5530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5533 = data
  i5532.ambientIntensity = i5533[0]
  i5532.reflectionIntensity = i5533[1]
  i5532.ambientMode = i5533[2]
  i5532.ambientLight = new pc.Color(i5533[3], i5533[4], i5533[5], i5533[6])
  i5532.ambientSkyColor = new pc.Color(i5533[7], i5533[8], i5533[9], i5533[10])
  i5532.ambientGroundColor = new pc.Color(i5533[11], i5533[12], i5533[13], i5533[14])
  i5532.ambientEquatorColor = new pc.Color(i5533[15], i5533[16], i5533[17], i5533[18])
  i5532.fogColor = new pc.Color(i5533[19], i5533[20], i5533[21], i5533[22])
  i5532.fogEndDistance = i5533[23]
  i5532.fogStartDistance = i5533[24]
  i5532.fogDensity = i5533[25]
  i5532.fog = !!i5533[26]
  request.r(i5533[27], i5533[28], 0, i5532, 'skybox')
  i5532.fogMode = i5533[29]
  var i5535 = i5533[30]
  var i5534 = []
  for(var i = 0; i < i5535.length; i += 1) {
    i5534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5535[i + 0]) );
  }
  i5532.lightmaps = i5534
  i5532.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5533[31], i5532.lightProbes)
  i5532.lightmapsMode = i5533[32]
  i5532.mixedBakeMode = i5533[33]
  i5532.environmentLightingMode = i5533[34]
  i5532.ambientProbe = new pc.SphericalHarmonicsL2(i5533[35])
  i5532.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5533[36])
  i5532.useReferenceAmbientProbe = !!i5533[37]
  request.r(i5533[38], i5533[39], 0, i5532, 'customReflection')
  request.r(i5533[40], i5533[41], 0, i5532, 'defaultReflection')
  i5532.defaultReflectionMode = i5533[42]
  i5532.defaultReflectionResolution = i5533[43]
  i5532.sunLightObjectId = i5533[44]
  i5532.pixelLightCount = i5533[45]
  i5532.defaultReflectionHDR = !!i5533[46]
  i5532.hasLightDataAsset = !!i5533[47]
  i5532.hasManualGenerate = !!i5533[48]
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5539 = data
  request.r(i5539[0], i5539[1], 0, i5538, 'lightmapColor')
  request.r(i5539[2], i5539[3], 0, i5538, 'lightmapDirection')
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5540 = root || new UnityEngine.LightProbes()
  var i5541 = data
  return i5540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i5547 = data
  i5546.name = i5547[0]
  i5546.bounciness = i5547[1]
  i5546.dynamicFriction = i5547[2]
  i5546.staticFriction = i5547[3]
  i5546.frictionCombine = i5547[4]
  i5546.bounceCombine = i5547[5]
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5549 = data
  var i5551 = i5549[0]
  var i5550 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5551.length; i += 1) {
    i5550.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5551[i + 0]));
  }
  i5548.ShaderCompilationErrors = i5550
  i5548.name = i5549[1]
  i5548.guid = i5549[2]
  var i5553 = i5549[3]
  var i5552 = []
  for(var i = 0; i < i5553.length; i += 1) {
    i5552.push( i5553[i + 0] );
  }
  i5548.shaderDefinedKeywords = i5552
  var i5555 = i5549[4]
  var i5554 = []
  for(var i = 0; i < i5555.length; i += 1) {
    i5554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5555[i + 0]) );
  }
  i5548.passes = i5554
  var i5557 = i5549[5]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5557[i + 0]) );
  }
  i5548.usePasses = i5556
  var i5559 = i5549[6]
  var i5558 = []
  for(var i = 0; i < i5559.length; i += 1) {
    i5558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5559[i + 0]) );
  }
  i5548.defaultParameterValues = i5558
  request.r(i5549[7], i5549[8], 0, i5548, 'unityFallbackShader')
  i5548.readDepth = !!i5549[9]
  i5548.hasDepthOnlyPass = !!i5549[10]
  i5548.isCreatedByShaderGraph = !!i5549[11]
  i5548.disableBatching = !!i5549[12]
  i5548.compiled = !!i5549[13]
  return i5548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5563 = data
  i5562.shaderName = i5563[0]
  i5562.errorMessage = i5563[1]
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5568 = root || new pc.UnityShaderPass()
  var i5569 = data
  i5568.id = i5569[0]
  i5568.subShaderIndex = i5569[1]
  i5568.name = i5569[2]
  i5568.passType = i5569[3]
  i5568.grabPassTextureName = i5569[4]
  i5568.usePass = !!i5569[5]
  i5568.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[6], i5568.zTest)
  i5568.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[7], i5568.zWrite)
  i5568.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[8], i5568.culling)
  i5568.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5569[9], i5568.blending)
  i5568.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5569[10], i5568.alphaBlending)
  i5568.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[11], i5568.colorWriteMask)
  i5568.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[12], i5568.offsetUnits)
  i5568.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[13], i5568.offsetFactor)
  i5568.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[14], i5568.stencilRef)
  i5568.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[15], i5568.stencilReadMask)
  i5568.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5569[16], i5568.stencilWriteMask)
  i5568.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5569[17], i5568.stencilOp)
  i5568.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5569[18], i5568.stencilOpFront)
  i5568.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5569[19], i5568.stencilOpBack)
  var i5571 = i5569[20]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5571[i + 0]) );
  }
  i5568.tags = i5570
  var i5573 = i5569[21]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 1) {
    i5572.push( i5573[i + 0] );
  }
  i5568.passDefinedKeywords = i5572
  var i5575 = i5569[22]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 1) {
    i5574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5575[i + 0]) );
  }
  i5568.passDefinedKeywordGroups = i5574
  var i5577 = i5569[23]
  var i5576 = []
  for(var i = 0; i < i5577.length; i += 1) {
    i5576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5577[i + 0]) );
  }
  i5568.variants = i5576
  var i5579 = i5569[24]
  var i5578 = []
  for(var i = 0; i < i5579.length; i += 1) {
    i5578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5579[i + 0]) );
  }
  i5568.excludedVariants = i5578
  i5568.hasDepthReader = !!i5569[25]
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5581 = data
  i5580.val = i5581[0]
  i5580.name = i5581[1]
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5583 = data
  i5582.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5583[0], i5582.src)
  i5582.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5583[1], i5582.dst)
  i5582.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5583[2], i5582.op)
  return i5582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5585 = data
  i5584.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5585[0], i5584.pass)
  i5584.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5585[1], i5584.fail)
  i5584.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5585[2], i5584.zFail)
  i5584.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5585[3], i5584.comp)
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5589 = data
  i5588.name = i5589[0]
  i5588.value = i5589[1]
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5593 = data
  var i5595 = i5593[0]
  var i5594 = []
  for(var i = 0; i < i5595.length; i += 1) {
    i5594.push( i5595[i + 0] );
  }
  i5592.keywords = i5594
  i5592.hasDiscard = !!i5593[1]
  return i5592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5599 = data
  i5598.passId = i5599[0]
  i5598.subShaderIndex = i5599[1]
  var i5601 = i5599[2]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.push( i5601[i + 0] );
  }
  i5598.keywords = i5600
  i5598.vertexProgram = i5599[3]
  i5598.fragmentProgram = i5599[4]
  i5598.exportedForWebGl2 = !!i5599[5]
  i5598.readDepth = !!i5599[6]
  return i5598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5605 = data
  request.r(i5605[0], i5605[1], 0, i5604, 'shader')
  i5604.pass = i5605[2]
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5609 = data
  i5608.name = i5609[0]
  i5608.type = i5609[1]
  i5608.value = new pc.Vec4( i5609[2], i5609[3], i5609[4], i5609[5] )
  i5608.textureValue = i5609[6]
  i5608.shaderPropertyFlag = i5609[7]
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5611 = data
  i5610.name = i5611[0]
  request.r(i5611[1], i5611[2], 0, i5610, 'texture')
  i5610.aabb = i5611[3]
  i5610.vertices = i5611[4]
  i5610.triangles = i5611[5]
  i5610.textureRect = UnityEngine.Rect.MinMaxRect(i5611[6], i5611[7], i5611[8], i5611[9])
  i5610.packedRect = UnityEngine.Rect.MinMaxRect(i5611[10], i5611[11], i5611[12], i5611[13])
  i5610.border = new pc.Vec4( i5611[14], i5611[15], i5611[16], i5611[17] )
  i5610.transparency = i5611[18]
  i5610.bounds = i5611[19]
  i5610.pixelsPerUnit = i5611[20]
  i5610.textureWidth = i5611[21]
  i5610.textureHeight = i5611[22]
  i5610.nativeSize = new pc.Vec2( i5611[23], i5611[24] )
  i5610.pivot = new pc.Vec2( i5611[25], i5611[26] )
  i5610.textureRectOffset = new pc.Vec2( i5611[27], i5611[28] )
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5613 = data
  i5612.name = i5613[0]
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5615 = data
  i5614.name = i5615[0]
  i5614.wrapMode = i5615[1]
  i5614.isLooping = !!i5615[2]
  i5614.length = i5615[3]
  var i5617 = i5615[4]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5617[i + 0]) );
  }
  i5614.curves = i5616
  var i5619 = i5615[5]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5619[i + 0]) );
  }
  i5614.events = i5618
  i5614.halfPrecision = !!i5615[6]
  i5614._frameRate = i5615[7]
  i5614.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5615[8], i5614.localBounds)
  i5614.hasMuscleCurves = !!i5615[9]
  var i5621 = i5615[10]
  var i5620 = []
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.push( i5621[i + 0] );
  }
  i5614.clipMuscleConstant = i5620
  i5614.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5615[11], i5614.clipBindingConstant)
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5625 = data
  i5624.path = i5625[0]
  i5624.hash = i5625[1]
  i5624.componentType = i5625[2]
  i5624.property = i5625[3]
  i5624.keys = i5625[4]
  var i5627 = i5625[5]
  var i5626 = []
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5627[i + 0]) );
  }
  i5624.objectReferenceKeys = i5626
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5631 = data
  i5630.time = i5631[0]
  request.r(i5631[1], i5631[2], 0, i5630, 'value')
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5635 = data
  i5634.functionName = i5635[0]
  i5634.floatParameter = i5635[1]
  i5634.intParameter = i5635[2]
  i5634.stringParameter = i5635[3]
  request.r(i5635[4], i5635[5], 0, i5634, 'objectReferenceParameter')
  i5634.time = i5635[6]
  return i5634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5637 = data
  i5636.center = new pc.Vec3( i5637[0], i5637[1], i5637[2] )
  i5636.extends = new pc.Vec3( i5637[3], i5637[4], i5637[5] )
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5641 = data
  var i5643 = i5641[0]
  var i5642 = []
  for(var i = 0; i < i5643.length; i += 1) {
    i5642.push( i5643[i + 0] );
  }
  i5640.genericBindings = i5642
  var i5645 = i5641[1]
  var i5644 = []
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.push( i5645[i + 0] );
  }
  i5640.pptrCurveMapping = i5644
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5647 = data
  i5646.name = i5647[0]
  var i5649 = i5647[1]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5649[i + 0]) );
  }
  i5646.layers = i5648
  var i5651 = i5647[2]
  var i5650 = []
  for(var i = 0; i < i5651.length; i += 1) {
    i5650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5651[i + 0]) );
  }
  i5646.parameters = i5650
  i5646.animationClips = i5647[3]
  i5646.avatarUnsupported = i5647[4]
  return i5646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5655 = data
  i5654.name = i5655[0]
  i5654.defaultWeight = i5655[1]
  i5654.blendingMode = i5655[2]
  i5654.avatarMask = i5655[3]
  i5654.syncedLayerIndex = i5655[4]
  i5654.syncedLayerAffectsTiming = !!i5655[5]
  i5654.syncedLayers = i5655[6]
  i5654.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5655[7], i5654.stateMachine)
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5657 = data
  i5656.id = i5657[0]
  i5656.name = i5657[1]
  i5656.path = i5657[2]
  var i5659 = i5657[3]
  var i5658 = []
  for(var i = 0; i < i5659.length; i += 1) {
    i5658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5659[i + 0]) );
  }
  i5656.states = i5658
  var i5661 = i5657[4]
  var i5660 = []
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5661[i + 0]) );
  }
  i5656.machines = i5660
  var i5663 = i5657[5]
  var i5662 = []
  for(var i = 0; i < i5663.length; i += 1) {
    i5662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5663[i + 0]) );
  }
  i5656.entryStateTransitions = i5662
  var i5665 = i5657[6]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5665[i + 0]) );
  }
  i5656.exitStateTransitions = i5664
  var i5667 = i5657[7]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5667[i + 0]) );
  }
  i5656.anyStateTransitions = i5666
  i5656.defaultStateId = i5657[8]
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5671 = data
  i5670.id = i5671[0]
  i5670.name = i5671[1]
  i5670.cycleOffset = i5671[2]
  i5670.cycleOffsetParameter = i5671[3]
  i5670.cycleOffsetParameterActive = !!i5671[4]
  i5670.mirror = !!i5671[5]
  i5670.mirrorParameter = i5671[6]
  i5670.mirrorParameterActive = !!i5671[7]
  i5670.motionId = i5671[8]
  i5670.nameHash = i5671[9]
  i5670.fullPathHash = i5671[10]
  i5670.speed = i5671[11]
  i5670.speedParameter = i5671[12]
  i5670.speedParameterActive = !!i5671[13]
  i5670.tag = i5671[14]
  i5670.tagHash = i5671[15]
  i5670.writeDefaultValues = !!i5671[16]
  var i5673 = i5671[17]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 2) {
  request.r(i5673[i + 0], i5673[i + 1], 2, i5672, '')
  }
  i5670.behaviours = i5672
  var i5675 = i5671[18]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 1) {
    i5674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5675[i + 0]) );
  }
  i5670.transitions = i5674
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5681 = data
  i5680.fullPath = i5681[0]
  i5680.canTransitionToSelf = !!i5681[1]
  i5680.duration = i5681[2]
  i5680.exitTime = i5681[3]
  i5680.hasExitTime = !!i5681[4]
  i5680.hasFixedDuration = !!i5681[5]
  i5680.interruptionSource = i5681[6]
  i5680.offset = i5681[7]
  i5680.orderedInterruption = !!i5681[8]
  i5680.destinationStateId = i5681[9]
  i5680.isExit = !!i5681[10]
  i5680.mute = !!i5681[11]
  i5680.solo = !!i5681[12]
  var i5683 = i5681[13]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5683[i + 0]) );
  }
  i5680.conditions = i5682
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5689 = data
  i5688.destinationStateId = i5689[0]
  i5688.isExit = !!i5689[1]
  i5688.mute = !!i5689[2]
  i5688.solo = !!i5689[3]
  var i5691 = i5689[4]
  var i5690 = []
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5691[i + 0]) );
  }
  i5688.conditions = i5690
  return i5688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5695 = data
  i5694.mode = i5695[0]
  i5694.parameter = i5695[1]
  i5694.threshold = i5695[2]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5699 = data
  i5698.defaultBool = !!i5699[0]
  i5698.defaultFloat = i5699[1]
  i5698.defaultInt = i5699[2]
  i5698.name = i5699[3]
  i5698.nameHash = i5699[4]
  i5698.type = i5699[5]
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5701 = data
  i5700.name = i5701[0]
  i5700.bytes64 = i5701[1]
  i5700.data = i5701[2]
  return i5700
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5702 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5703 = data
  i5702.useSafeMode = !!i5703[0]
  i5702.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5703[1], i5702.safeModeOptions)
  i5702.timeScale = i5703[2]
  i5702.unscaledTimeScale = i5703[3]
  i5702.useSmoothDeltaTime = !!i5703[4]
  i5702.maxSmoothUnscaledTime = i5703[5]
  i5702.rewindCallbackMode = i5703[6]
  i5702.showUnityEditorReport = !!i5703[7]
  i5702.logBehaviour = i5703[8]
  i5702.drawGizmos = !!i5703[9]
  i5702.defaultRecyclable = !!i5703[10]
  i5702.defaultAutoPlay = i5703[11]
  i5702.defaultUpdateType = i5703[12]
  i5702.defaultTimeScaleIndependent = !!i5703[13]
  i5702.defaultEaseType = i5703[14]
  i5702.defaultEaseOvershootOrAmplitude = i5703[15]
  i5702.defaultEasePeriod = i5703[16]
  i5702.defaultAutoKill = !!i5703[17]
  i5702.defaultLoopType = i5703[18]
  i5702.debugMode = !!i5703[19]
  i5702.debugStoreTargetId = !!i5703[20]
  i5702.showPreviewPanel = !!i5703[21]
  i5702.storeSettingsLocation = i5703[22]
  i5702.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5703[23], i5702.modules)
  i5702.createASMDEF = !!i5703[24]
  i5702.showPlayingTweens = !!i5703[25]
  i5702.showPausedTweens = !!i5703[26]
  return i5702
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5704 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5705 = data
  i5704.logBehaviour = i5705[0]
  i5704.nestedTweenFailureBehaviour = i5705[1]
  return i5704
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5706 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5707 = data
  i5706.showPanel = !!i5707[0]
  i5706.audioEnabled = !!i5707[1]
  i5706.physicsEnabled = !!i5707[2]
  i5706.physics2DEnabled = !!i5707[3]
  i5706.spriteEnabled = !!i5707[4]
  i5706.uiEnabled = !!i5707[5]
  i5706.uiToolkitEnabled = !!i5707[6]
  i5706.textMeshProEnabled = !!i5707[7]
  i5706.tk2DEnabled = !!i5707[8]
  i5706.deAudioEnabled = !!i5707[9]
  i5706.deUnityExtendedEnabled = !!i5707[10]
  i5706.epoOutlineEnabled = !!i5707[11]
  return i5706
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5708 = root || request.c( 'TMPro.TMP_Settings' )
  var i5709 = data
  i5708.assetVersion = i5709[0]
  i5708.m_TextWrappingMode = i5709[1]
  i5708.m_enableKerning = !!i5709[2]
  var i5711 = i5709[3]
  var i5710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.add(i5711[i + 0]);
  }
  i5708.m_ActiveFontFeatures = i5710
  i5708.m_enableExtraPadding = !!i5709[4]
  i5708.m_enableTintAllSprites = !!i5709[5]
  i5708.m_enableParseEscapeCharacters = !!i5709[6]
  i5708.m_EnableRaycastTarget = !!i5709[7]
  i5708.m_GetFontFeaturesAtRuntime = !!i5709[8]
  i5708.m_missingGlyphCharacter = i5709[9]
  i5708.m_ClearDynamicDataOnBuild = !!i5709[10]
  i5708.m_warningsDisabled = !!i5709[11]
  request.r(i5709[12], i5709[13], 0, i5708, 'm_defaultFontAsset')
  i5708.m_defaultFontAssetPath = i5709[14]
  i5708.m_defaultFontSize = i5709[15]
  i5708.m_defaultAutoSizeMinRatio = i5709[16]
  i5708.m_defaultAutoSizeMaxRatio = i5709[17]
  i5708.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5709[18], i5709[19] )
  i5708.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5709[20], i5709[21] )
  i5708.m_autoSizeTextContainer = !!i5709[22]
  i5708.m_IsTextObjectScaleStatic = !!i5709[23]
  var i5713 = i5709[24]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5713.length; i += 2) {
  request.r(i5713[i + 0], i5713[i + 1], 1, i5712, '')
  }
  i5708.m_fallbackFontAssets = i5712
  i5708.m_matchMaterialPreset = !!i5709[25]
  i5708.m_HideSubTextObjects = !!i5709[26]
  request.r(i5709[27], i5709[28], 0, i5708, 'm_defaultSpriteAsset')
  i5708.m_defaultSpriteAssetPath = i5709[29]
  i5708.m_enableEmojiSupport = !!i5709[30]
  i5708.m_MissingCharacterSpriteUnicode = i5709[31]
  var i5715 = i5709[32]
  var i5714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5715.length; i += 2) {
  request.r(i5715[i + 0], i5715[i + 1], 1, i5714, '')
  }
  i5708.m_EmojiFallbackTextAssets = i5714
  i5708.m_defaultColorGradientPresetsPath = i5709[33]
  request.r(i5709[34], i5709[35], 0, i5708, 'm_defaultStyleSheet')
  i5708.m_StyleSheetsResourcePath = i5709[36]
  request.r(i5709[37], i5709[38], 0, i5708, 'm_leadingCharacters')
  request.r(i5709[39], i5709[40], 0, i5708, 'm_followingCharacters')
  i5708.m_UseModernHangulLineBreakingRules = !!i5709[41]
  return i5708
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5722 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5723 = data
  request.r(i5723[0], i5723[1], 0, i5722, 'spriteSheet')
  var i5725 = i5723[2]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.add(request.d('TMPro.TMP_Sprite', i5725[i + 0]));
  }
  i5722.spriteInfoList = i5724
  var i5727 = i5723[3]
  var i5726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5727.length; i += 2) {
  request.r(i5727[i + 0], i5727[i + 1], 1, i5726, '')
  }
  i5722.fallbackSpriteAssets = i5726
  var i5729 = i5723[4]
  var i5728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5729.length; i += 1) {
    i5728.add(request.d('TMPro.TMP_SpriteCharacter', i5729[i + 0]));
  }
  i5722.m_SpriteCharacterTable = i5728
  var i5731 = i5723[5]
  var i5730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5731.length; i += 1) {
    i5730.add(request.d('TMPro.TMP_SpriteGlyph', i5731[i + 0]));
  }
  i5722.m_GlyphTable = i5730
  i5722.m_Version = i5723[6]
  i5722.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5723[7], i5722.m_FaceInfo)
  request.r(i5723[8], i5723[9], 0, i5722, 'm_Material')
  return i5722
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5734 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5735 = data
  i5734.name = i5735[0]
  i5734.hashCode = i5735[1]
  i5734.unicode = i5735[2]
  i5734.pivot = new pc.Vec2( i5735[3], i5735[4] )
  request.r(i5735[5], i5735[6], 0, i5734, 'sprite')
  i5734.id = i5735[7]
  i5734.x = i5735[8]
  i5734.y = i5735[9]
  i5734.width = i5735[10]
  i5734.height = i5735[11]
  i5734.xOffset = i5735[12]
  i5734.yOffset = i5735[13]
  i5734.xAdvance = i5735[14]
  i5734.scale = i5735[15]
  return i5734
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5740 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5741 = data
  i5740.m_Name = i5741[0]
  i5740.m_ElementType = i5741[1]
  i5740.m_Unicode = i5741[2]
  i5740.m_GlyphIndex = i5741[3]
  i5740.m_Scale = i5741[4]
  return i5740
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5744 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5745 = data
  request.r(i5745[0], i5745[1], 0, i5744, 'sprite')
  i5744.m_Index = i5745[2]
  i5744.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5745[3], i5744.m_Metrics)
  i5744.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5745[4], i5744.m_GlyphRect)
  i5744.m_Scale = i5745[5]
  i5744.m_AtlasIndex = i5745[6]
  i5744.m_ClassDefinitionType = i5745[7]
  return i5744
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5746 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5747 = data
  i5746.m_Width = i5747[0]
  i5746.m_Height = i5747[1]
  i5746.m_HorizontalBearingX = i5747[2]
  i5746.m_HorizontalBearingY = i5747[3]
  i5746.m_HorizontalAdvance = i5747[4]
  return i5746
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5748 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5749 = data
  i5748.m_X = i5749[0]
  i5748.m_Y = i5749[1]
  i5748.m_Width = i5749[2]
  i5748.m_Height = i5749[3]
  return i5748
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5750 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5751 = data
  i5750.m_FaceIndex = i5751[0]
  i5750.m_FamilyName = i5751[1]
  i5750.m_StyleName = i5751[2]
  i5750.m_PointSize = i5751[3]
  i5750.m_Scale = i5751[4]
  i5750.m_UnitsPerEM = i5751[5]
  i5750.m_LineHeight = i5751[6]
  i5750.m_AscentLine = i5751[7]
  i5750.m_CapLine = i5751[8]
  i5750.m_MeanLine = i5751[9]
  i5750.m_Baseline = i5751[10]
  i5750.m_DescentLine = i5751[11]
  i5750.m_SuperscriptOffset = i5751[12]
  i5750.m_SuperscriptSize = i5751[13]
  i5750.m_SubscriptOffset = i5751[14]
  i5750.m_SubscriptSize = i5751[15]
  i5750.m_UnderlineOffset = i5751[16]
  i5750.m_UnderlineThickness = i5751[17]
  i5750.m_StrikethroughOffset = i5751[18]
  i5750.m_StrikethroughThickness = i5751[19]
  i5750.m_TabWidth = i5751[20]
  return i5750
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5752 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5753 = data
  var i5755 = i5753[0]
  var i5754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5755.length; i += 1) {
    i5754.add(request.d('TMPro.TMP_Style', i5755[i + 0]));
  }
  i5752.m_StyleList = i5754
  return i5752
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5758 = root || request.c( 'TMPro.TMP_Style' )
  var i5759 = data
  i5758.m_Name = i5759[0]
  i5758.m_HashCode = i5759[1]
  i5758.m_OpeningDefinition = i5759[2]
  i5758.m_ClosingDefinition = i5759[3]
  i5758.m_OpeningTagArray = i5759[4]
  i5758.m_ClosingTagArray = i5759[5]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5761 = data
  var i5763 = i5761[0]
  var i5762 = []
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5763[i + 0]) );
  }
  i5760.files = i5762
  i5760.componentToPrefabIds = i5761[1]
  return i5760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5767 = data
  i5766.path = i5767[0]
  request.r(i5767[1], i5767[2], 0, i5766, 'unityObject')
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5769 = data
  var i5771 = i5769[0]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 1) {
    i5770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5771[i + 0]) );
  }
  i5768.scriptsExecutionOrder = i5770
  var i5773 = i5769[1]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 1) {
    i5772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5773[i + 0]) );
  }
  i5768.sortingLayers = i5772
  var i5775 = i5769[2]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5775[i + 0]) );
  }
  i5768.cullingLayers = i5774
  i5768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5769[3], i5768.timeSettings)
  i5768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5769[4], i5768.physicsSettings)
  i5768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5769[5], i5768.physics2DSettings)
  i5768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5769[6], i5768.qualitySettings)
  i5768.enableRealtimeShadows = !!i5769[7]
  i5768.enableAutoInstancing = !!i5769[8]
  i5768.enableStaticBatching = !!i5769[9]
  i5768.enableDynamicBatching = !!i5769[10]
  i5768.lightmapEncodingQuality = i5769[11]
  i5768.desiredColorSpace = i5769[12]
  var i5777 = i5769[13]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.push( i5777[i + 0] );
  }
  i5768.allTags = i5776
  return i5768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5781 = data
  i5780.name = i5781[0]
  i5780.value = i5781[1]
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5785 = data
  i5784.id = i5785[0]
  i5784.name = i5785[1]
  i5784.value = i5785[2]
  return i5784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5789 = data
  i5788.id = i5789[0]
  i5788.name = i5789[1]
  return i5788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5791 = data
  i5790.fixedDeltaTime = i5791[0]
  i5790.maximumDeltaTime = i5791[1]
  i5790.timeScale = i5791[2]
  i5790.maximumParticleTimestep = i5791[3]
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5793 = data
  i5792.gravity = new pc.Vec3( i5793[0], i5793[1], i5793[2] )
  i5792.defaultSolverIterations = i5793[3]
  i5792.bounceThreshold = i5793[4]
  i5792.autoSyncTransforms = !!i5793[5]
  i5792.autoSimulation = !!i5793[6]
  var i5795 = i5793[7]
  var i5794 = []
  for(var i = 0; i < i5795.length; i += 1) {
    i5794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5795[i + 0]) );
  }
  i5792.collisionMatrix = i5794
  return i5792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5799 = data
  i5798.enabled = !!i5799[0]
  i5798.layerId = i5799[1]
  i5798.otherLayerId = i5799[2]
  return i5798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5801 = data
  request.r(i5801[0], i5801[1], 0, i5800, 'material')
  i5800.gravity = new pc.Vec2( i5801[2], i5801[3] )
  i5800.positionIterations = i5801[4]
  i5800.velocityIterations = i5801[5]
  i5800.velocityThreshold = i5801[6]
  i5800.maxLinearCorrection = i5801[7]
  i5800.maxAngularCorrection = i5801[8]
  i5800.maxTranslationSpeed = i5801[9]
  i5800.maxRotationSpeed = i5801[10]
  i5800.baumgarteScale = i5801[11]
  i5800.baumgarteTOIScale = i5801[12]
  i5800.timeToSleep = i5801[13]
  i5800.linearSleepTolerance = i5801[14]
  i5800.angularSleepTolerance = i5801[15]
  i5800.defaultContactOffset = i5801[16]
  i5800.autoSimulation = !!i5801[17]
  i5800.queriesHitTriggers = !!i5801[18]
  i5800.queriesStartInColliders = !!i5801[19]
  i5800.callbacksOnDisable = !!i5801[20]
  i5800.reuseCollisionCallbacks = !!i5801[21]
  i5800.autoSyncTransforms = !!i5801[22]
  var i5803 = i5801[23]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 1) {
    i5802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5803[i + 0]) );
  }
  i5800.collisionMatrix = i5802
  return i5800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5807 = data
  i5806.enabled = !!i5807[0]
  i5806.layerId = i5807[1]
  i5806.otherLayerId = i5807[2]
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5809 = data
  var i5811 = i5809[0]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 1) {
    i5810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5811[i + 0]) );
  }
  i5808.qualityLevels = i5810
  var i5813 = i5809[1]
  var i5812 = []
  for(var i = 0; i < i5813.length; i += 1) {
    i5812.push( i5813[i + 0] );
  }
  i5808.names = i5812
  i5808.shadows = i5809[2]
  i5808.anisotropicFiltering = i5809[3]
  i5808.antiAliasing = i5809[4]
  i5808.lodBias = i5809[5]
  i5808.shadowCascades = i5809[6]
  i5808.shadowDistance = i5809[7]
  i5808.shadowmaskMode = i5809[8]
  i5808.shadowProjection = i5809[9]
  i5808.shadowResolution = i5809[10]
  i5808.softParticles = !!i5809[11]
  i5808.softVegetation = !!i5809[12]
  i5808.activeColorSpace = i5809[13]
  i5808.desiredColorSpace = i5809[14]
  i5808.masterTextureLimit = i5809[15]
  i5808.maxQueuedFrames = i5809[16]
  i5808.particleRaycastBudget = i5809[17]
  i5808.pixelLightCount = i5809[18]
  i5808.realtimeReflectionProbes = !!i5809[19]
  i5808.shadowCascade2Split = i5809[20]
  i5808.shadowCascade4Split = new pc.Vec3( i5809[21], i5809[22], i5809[23] )
  i5808.streamingMipmapsActive = !!i5809[24]
  i5808.vSyncCount = i5809[25]
  i5808.asyncUploadBufferSize = i5809[26]
  i5808.asyncUploadTimeSlice = i5809[27]
  i5808.billboardsFaceCameraPosition = !!i5809[28]
  i5808.shadowNearPlaneOffset = i5809[29]
  i5808.streamingMipmapsMemoryBudget = i5809[30]
  i5808.maximumLODLevel = i5809[31]
  i5808.streamingMipmapsAddAllCameras = !!i5809[32]
  i5808.streamingMipmapsMaxLevelReduction = i5809[33]
  i5808.streamingMipmapsRenderersPerFrame = i5809[34]
  i5808.resolutionScalingFixedDPIFactor = i5809[35]
  i5808.streamingMipmapsMaxFileIORequests = i5809[36]
  i5808.currentQualityLevel = i5809[37]
  return i5808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5819 = data
  i5818.weight = i5819[0]
  i5818.vertices = i5819[1]
  i5818.normals = i5819[2]
  i5818.tangents = i5819[3]
  return i5818
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[7],"65":[11],"66":[36],"67":[36],"68":[36],"69":[36],"70":[36],"71":[36],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[11],"87":[26],"88":[89],"90":[89],"10":[9],"91":[29],"92":[10],"93":[9],"94":[26,9],"95":[9,15],"96":[9],"97":[15,9],"98":[26],"99":[15,9],"100":[9],"101":[102],"103":[102],"104":[102],"105":[9],"106":[9],"14":[10],"16":[15,9],"107":[9],"13":[10],"108":[9],"109":[9],"110":[9],"111":[9],"112":[9],"113":[9],"114":[9],"115":[9],"116":[9],"17":[15,9],"117":[9],"118":[9],"119":[9],"120":[9],"121":[15,9],"122":[9],"123":[29],"124":[29],"30":[29],"125":[29],"126":[11],"127":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "19.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_V20";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1708";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5210";

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

Deserializers.buildID = "1586ad18-a4fc-41e2-b726-c38c3b50feb4";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

