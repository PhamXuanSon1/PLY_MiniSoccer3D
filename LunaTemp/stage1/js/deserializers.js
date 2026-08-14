var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSpring' )
  var i493 = data
  i492.spring = i493[0]
  i492.damper = i493[1]
  i492.targetPosition = i493[2]
  return i492
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor' )
  var i495 = data
  i494.m_TargetVelocity = i495[0]
  i494.m_Force = i495[1]
  i494.m_FreeSpin = i495[2]
  return i494
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointLimits' )
  var i497 = data
  i496.m_Min = i497[0]
  i496.m_Max = i497[1]
  i496.m_Bounciness = i497[2]
  i496.m_BounceMinVelocity = i497[3]
  i496.m_ContactDistance = i497[4]
  i496.minBounce = i497[5]
  i496.maxBounce = i497[6]
  return i496
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointDrive' )
  var i499 = data
  i498.m_PositionSpring = i499[0]
  i498.m_PositionDamper = i499[1]
  i498.m_MaximumForce = i499[2]
  i498.m_UseAcceleration = i499[3]
  return i498
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i501 = data
  i500.m_Spring = i501[0]
  i500.m_Damper = i501[1]
  return i500
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i503 = data
  i502.m_Limit = i503[0]
  i502.m_Bounciness = i503[1]
  i502.m_ContactDistance = i503[2]
  return i502
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i505 = data
  i504.m_ExtremumSlip = i505[0]
  i504.m_ExtremumValue = i505[1]
  i504.m_AsymptoteSlip = i505[2]
  i504.m_AsymptoteValue = i505[3]
  i504.m_Stiffness = i505[4]
  return i504
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i507 = data
  i506.m_LowerAngle = i507[0]
  i506.m_UpperAngle = i507[1]
  return i506
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i509 = data
  i508.m_MotorSpeed = i509[0]
  i508.m_MaximumMotorTorque = i509[1]
  return i508
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i511 = data
  i510.m_DampingRatio = i511[0]
  i510.m_Frequency = i511[1]
  i510.m_Angle = i511[2]
  return i510
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i513 = data
  i512.m_LowerTranslation = i513[0]
  i512.m_UpperTranslation = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i515 = data
  i514.name = i515[0]
  i514.width = i515[1]
  i514.height = i515[2]
  i514.mipmapCount = i515[3]
  i514.anisoLevel = i515[4]
  i514.filterMode = i515[5]
  i514.hdr = !!i515[6]
  i514.format = i515[7]
  i514.wrapMode = i515[8]
  i514.alphaIsTransparency = !!i515[9]
  i514.alphaSource = i515[10]
  i514.graphicsFormat = i515[11]
  i514.sRGBTexture = !!i515[12]
  i514.desiredColorSpace = i515[13]
  i514.wrapU = i515[14]
  i514.wrapV = i515[15]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i517 = data
  i516.name = i517[0]
  i516.halfPrecision = !!i517[1]
  i516.useSimplification = !!i517[2]
  i516.useUInt32IndexFormat = !!i517[3]
  i516.vertexCount = i517[4]
  i516.aabb = i517[5]
  var i519 = i517[6]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( !!i519[i + 0] );
  }
  i516.streams = i518
  i516.vertices = i517[7]
  var i521 = i517[8]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i521[i + 0]) );
  }
  i516.subMeshes = i520
  var i523 = i517[9]
  var i522 = []
  for(var i = 0; i < i523.length; i += 16) {
    i522.push( new pc.Mat4().setData(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3],  i523[i + 4], i523[i + 5], i523[i + 6], i523[i + 7],  i523[i + 8], i523[i + 9], i523[i + 10], i523[i + 11],  i523[i + 12], i523[i + 13], i523[i + 14], i523[i + 15]) );
  }
  i516.bindposes = i522
  var i525 = i517[10]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i525[i + 0]) );
  }
  i516.blendShapes = i524
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i531 = data
  i530.triangles = i531[0]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i537 = data
  i536.name = i537[0]
  var i539 = i537[1]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i539[i + 0]) );
  }
  i536.frames = i538
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i540 = root || new pc.UnityMaterial()
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'shader')
  i540.renderQueue = i541[3]
  i540.enableInstancing = !!i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i543[i + 0]) );
  }
  i540.floatParameters = i542
  var i545 = i541[6]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i545[i + 0]) );
  }
  i540.colorParameters = i544
  var i547 = i541[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i547[i + 0]) );
  }
  i540.vectorParameters = i546
  var i549 = i541[8]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i549[i + 0]) );
  }
  i540.textureParameters = i548
  var i551 = i541[9]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i551[i + 0]) );
  }
  i540.materialFlags = i550
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Color(i559[1], i559[2], i559[3], i559[4])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Vec4( i563[1], i563[2], i563[3], i563[4] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'value')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i571 = data
  i570.name = i571[0]
  i570.enabled = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i573 = data
  i572.pivot = new pc.Vec2( i573[0], i573[1] )
  i572.anchorMin = new pc.Vec2( i573[2], i573[3] )
  i572.anchorMax = new pc.Vec2( i573[4], i573[5] )
  i572.sizeDelta = new pc.Vec2( i573[6], i573[7] )
  i572.anchoredPosition3D = new pc.Vec3( i573[8], i573[9], i573[10] )
  i572.rotation = new pc.Quat(i573[11], i573[12], i573[13], i573[14])
  i572.scale = new pc.Vec3( i573[15], i573[16], i573[17] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i575 = data
  i574.planeDistance = i575[0]
  i574.referencePixelsPerUnit = i575[1]
  i574.isFallbackOverlay = !!i575[2]
  i574.renderMode = i575[3]
  i574.renderOrder = i575[4]
  i574.sortingLayerName = i575[5]
  i574.sortingOrder = i575[6]
  i574.scaleFactor = i575[7]
  request.r(i575[8], i575[9], 0, i574, 'worldCamera')
  i574.overrideSorting = !!i575[10]
  i574.pixelPerfect = !!i575[11]
  i574.targetDisplay = i575[12]
  i574.overridePixelPerfect = !!i575[13]
  i574.enabled = !!i575[14]
  return i574
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i577 = data
  i576.m_UiScaleMode = i577[0]
  i576.m_ReferencePixelsPerUnit = i577[1]
  i576.m_ScaleFactor = i577[2]
  i576.m_ReferenceResolution = new pc.Vec2( i577[3], i577[4] )
  i576.m_ScreenMatchMode = i577[5]
  i576.m_MatchWidthOrHeight = i577[6]
  i576.m_PhysicalUnit = i577[7]
  i576.m_FallbackScreenDPI = i577[8]
  i576.m_DefaultSpriteDPI = i577[9]
  i576.m_DynamicPixelsPerUnit = i577[10]
  i576.m_PresetInfoIsWorld = !!i577[11]
  return i576
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i579 = data
  i578.m_IgnoreReversedGraphics = !!i579[0]
  i578.m_BlockingObjects = i579[1]
  i578.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i579[2] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i581 = data
  i580.cullTransparentMesh = !!i581[0]
  return i580
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Image' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Sprite')
  i582.m_Type = i583[2]
  i582.m_PreserveAspect = !!i583[3]
  i582.m_FillCenter = !!i583[4]
  i582.m_FillMethod = i583[5]
  i582.m_FillAmount = i583[6]
  i582.m_FillClockwise = !!i583[7]
  i582.m_FillOrigin = i583[8]
  i582.m_UseSpriteMesh = !!i583[9]
  i582.m_PixelsPerUnitMultiplier = i583[10]
  request.r(i583[11], i583[12], 0, i582, 'm_Material')
  i582.m_Maskable = !!i583[13]
  i582.m_Color = new pc.Color(i583[14], i583[15], i583[16], i583[17])
  i582.m_RaycastTarget = !!i583[18]
  i582.m_RaycastPadding = new pc.Vec4( i583[19], i583[20], i583[21], i583[22] )
  return i582
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_Texture')
  i584.m_UVRect = UnityEngine.Rect.MinMaxRect(i585[2], i585[3], i585[4], i585[5])
  request.r(i585[6], i585[7], 0, i584, 'm_Material')
  i584.m_Maskable = !!i585[8]
  i584.m_Color = new pc.Color(i585[9], i585[10], i585[11], i585[12])
  i584.m_RaycastTarget = !!i585[13]
  i584.m_RaycastPadding = new pc.Vec4( i585[14], i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i586 = root || request.c( 'ImageScroller' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'rawImage')
  i586.moveVector = new pc.Vec2( i587[2], i587[3] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i589 = data
  i588.name = i589[0]
  i588.tagId = i589[1]
  i588.enabled = !!i589[2]
  i588.isStatic = !!i589[3]
  i588.layer = i589[4]
  return i588
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i590 = root || request.c( 'UIGuidingMove' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'target')
  i590.startPosition = new pc.Vec2( i591[2], i591[3] )
  i590.endPosition = new pc.Vec2( i591[4], i591[5] )
  i590.duration = i591[6]
  i590.ease = i591[7]
  i590.resetToStartOnComplete = !!i591[8]
  i590.loop = !!i591[9]
  i590.loopCount = i591[10]
  i590.loopType = i591[11]
  return i590
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i592 = root || request.c( 'UIPulse' )
  var i593 = data
  i592.targetScale = new pc.Vec3( i593[0], i593[1], i593[2] )
  i592.duration = i593[3]
  i592.ease = i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i595 = data
  i594.position = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.scale = new pc.Vec3( i595[3], i595[4], i595[5] )
  i594.rotation = new pc.Quat(i595[6], i595[7], i595[8], i595[9])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'sharedMesh')
  var i599 = i597[2]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.bones = i598
  i596.updateWhenOffscreen = !!i597[3]
  i596.localBounds = i597[4]
  request.r(i597[5], i597[6], 0, i596, 'rootBone')
  var i601 = i597[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i601[i + 0]) );
  }
  i596.blendShapesWeights = i600
  i596.enabled = !!i597[8]
  request.r(i597[9], i597[10], 0, i596, 'sharedMaterial')
  var i603 = i597[11]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i596.sharedMaterials = i602
  i596.receiveShadows = !!i597[12]
  i596.shadowCastingMode = i597[13]
  i596.sortingLayerID = i597[14]
  i596.sortingOrder = i597[15]
  i596.lightmapIndex = i597[16]
  i596.lightmapSceneIndex = i597[17]
  i596.lightmapScaleOffset = new pc.Vec4( i597[18], i597[19], i597[20], i597[21] )
  i596.lightProbeUsage = i597[22]
  i596.reflectionProbeUsage = i597[23]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i609 = data
  i608.weight = i609[0]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'animatorController')
  request.r(i613[2], i613[3], 0, i612, 'avatar')
  i612.updateMode = i613[4]
  i612.hasTransformHierarchy = !!i613[5]
  i612.applyRootMotion = !!i613[6]
  var i615 = i613[7]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.humanBones = i614
  i612.enabled = !!i613[8]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i617 = data
  i616.name = i617[0]
  i616.atlasId = i617[1]
  i616.mipmapCount = i617[2]
  i616.hdr = !!i617[3]
  i616.size = i617[4]
  i616.anisoLevel = i617[5]
  i616.filterMode = i617[6]
  var i619 = i617[7]
  var i618 = []
  for(var i = 0; i < i619.length; i += 4) {
    i618.push( UnityEngine.Rect.MinMaxRect(i619[i + 0], i619[i + 1], i619[i + 2], i619[i + 3]) );
  }
  i616.rects = i618
  i616.wrapU = i617[8]
  i616.wrapV = i617[9]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i623 = data
  i622.name = i623[0]
  i622.index = i623[1]
  i622.startup = !!i623[2]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i625 = data
  i624.type = i625[0]
  i624.color = new pc.Color(i625[1], i625[2], i625[3], i625[4])
  i624.cullingMask = i625[5]
  i624.intensity = i625[6]
  i624.range = i625[7]
  i624.spotAngle = i625[8]
  i624.shadows = i625[9]
  i624.shadowNormalBias = i625[10]
  i624.shadowBias = i625[11]
  i624.shadowStrength = i625[12]
  i624.shadowResolution = i625[13]
  i624.lightmapBakeType = i625[14]
  i624.renderMode = i625[15]
  request.r(i625[16], i625[17], 0, i624, 'cookie')
  i624.cookieSize = i625[18]
  i624.shadowNearPlane = i625[19]
  i624.enabled = !!i625[20]
  return i624
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i627 = data
  i626.m_Spacing = i627[0]
  i626.m_ChildForceExpandWidth = !!i627[1]
  i626.m_ChildForceExpandHeight = !!i627[2]
  i626.m_ChildControlWidth = !!i627[3]
  i626.m_ChildControlHeight = !!i627[4]
  i626.m_ChildScaleWidth = !!i627[5]
  i626.m_ChildScaleHeight = !!i627[6]
  i626.m_ReverseArrangement = !!i627[7]
  i626.m_Padding = UnityEngine.RectOffset.FromPaddings(i627[8], i627[9], i627[10], i627[11])
  i626.m_ChildAlignment = i627[12]
  return i626
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i628 = root || request.c( 'UICheckBoxHolder' )
  var i629 = data
  var i631 = i629[0]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.uICheckBoxes = i630
  return i628
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i634 = root || request.c( 'UICheckBox' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'iconImg')
  request.r(i635[2], i635[3], 0, i634, 'startingSprite')
  return i634
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button' )
  var i637 = data
  i636.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i637[0], i636.m_OnClick)
  i636.m_Navigation = request.d('UnityEngine.UI.Navigation', i637[1], i636.m_Navigation)
  i636.m_Transition = i637[2]
  i636.m_Colors = request.d('UnityEngine.UI.ColorBlock', i637[3], i636.m_Colors)
  i636.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i637[4], i636.m_SpriteState)
  i636.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i637[5], i636.m_AnimationTriggers)
  i636.m_Interactable = !!i637[6]
  request.r(i637[7], i637[8], 0, i636, 'm_TargetGraphic')
  return i636
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i639 = data
  i638.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i639[0], i638.m_PersistentCalls)
  return i638
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i641 = data
  var i643 = i641[0]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(request.d('UnityEngine.Events.PersistentCall', i643[i + 0]));
  }
  i640.m_Calls = i642
  return i640
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_Target')
  i646.m_TargetAssemblyTypeName = i647[2]
  i646.m_MethodName = i647[3]
  i646.m_Mode = i647[4]
  i646.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i647[5], i646.m_Arguments)
  i646.m_CallState = i647[6]
  return i646
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'm_ObjectArgument')
  i648.m_ObjectArgumentAssemblyTypeName = i649[2]
  i648.m_IntArgument = i649[3]
  i648.m_FloatArgument = i649[4]
  i648.m_StringArgument = i649[5]
  i648.m_BoolArgument = !!i649[6]
  return i648
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i651 = data
  i650.m_Mode = i651[0]
  i650.m_WrapAround = !!i651[1]
  request.r(i651[2], i651[3], 0, i650, 'm_SelectOnUp')
  request.r(i651[4], i651[5], 0, i650, 'm_SelectOnDown')
  request.r(i651[6], i651[7], 0, i650, 'm_SelectOnLeft')
  request.r(i651[8], i651[9], 0, i650, 'm_SelectOnRight')
  return i650
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i653 = data
  i652.m_NormalColor = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.m_HighlightedColor = new pc.Color(i653[4], i653[5], i653[6], i653[7])
  i652.m_PressedColor = new pc.Color(i653[8], i653[9], i653[10], i653[11])
  i652.m_SelectedColor = new pc.Color(i653[12], i653[13], i653[14], i653[15])
  i652.m_DisabledColor = new pc.Color(i653[16], i653[17], i653[18], i653[19])
  i652.m_ColorMultiplier = i653[20]
  i652.m_FadeDuration = i653[21]
  return i652
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_HighlightedSprite')
  request.r(i655[2], i655[3], 0, i654, 'm_PressedSprite')
  request.r(i655[4], i655[5], 0, i654, 'm_SelectedSprite')
  request.r(i655[6], i655[7], 0, i654, 'm_DisabledSprite')
  return i654
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i657 = data
  i656.m_NormalTrigger = i657[0]
  i656.m_HighlightedTrigger = i657[1]
  i656.m_PressedTrigger = i657[2]
  i656.m_SelectedTrigger = i657[3]
  i656.m_DisabledTrigger = i657[4]
  return i656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_FirstSelected')
  i658.m_sendNavigationEvents = !!i659[2]
  i658.m_DragThreshold = i659[3]
  return i658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i661 = data
  i660.m_HorizontalAxis = i661[0]
  i660.m_VerticalAxis = i661[1]
  i660.m_SubmitButton = i661[2]
  i660.m_CancelButton = i661[3]
  i660.m_InputActionsPerSecond = i661[4]
  i660.m_RepeatDelay = i661[5]
  i660.m_ForceModuleActive = !!i661[6]
  i660.m_SendPointerHoverToParent = !!i661[7]
  return i660
}

Deserializers["GameManager"] = function (request, data, root) {
  var i662 = root || request.c( 'GameManager' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'Player')
  i662.maxLevel = i663[2]
  i662.winLevel = i663[3]
  i662.totalMoveTime = i663[4]
  i662.currentPlayerLevel = i663[5]
  return i662
}

Deserializers["InputManager"] = function (request, data, root) {
  var i664 = root || request.c( 'InputManager' )
  var i665 = data
  i664.minimumSwipeDistance = i665[0]
  return i664
}

Deserializers["UIManager"] = function (request, data, root) {
  var i666 = root || request.c( 'UIManager' )
  var i667 = data
  return i666
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i668 = root || request.c( 'Ply_SoundManager' )
  var i669 = data
  i668.audioClips = request.d('FxAudio', i669[0], i668.audioClips)
  request.r(i669[1], i669[2], 0, i668, 'sound')
  i668.enableSound = !!i669[3]
  i668.bgmVolume = i669[4]
  return i668
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i670 = root || request.c( 'FxAudio' )
  var i671 = data
  i670.Clock = request.d('SoundData', i671[0], i670.Clock)
  i670.PlayerWin = request.d('SoundData', i671[1], i670.PlayerWin)
  i670.PlayerLoose = request.d('SoundData', i671[2], i670.PlayerLoose)
  i670.RightChoice = request.d('SoundData', i671[3], i670.RightChoice)
  i670.WrongChoice = request.d('SoundData', i671[4], i670.WrongChoice)
  i670.MaxLevel = request.d('SoundData', i671[5], i670.MaxLevel)
  i670.FightingCloud = request.d('SoundData', i671[6], i670.FightingCloud)
  return i670
}

Deserializers["SoundData"] = function (request, data, root) {
  var i672 = root || request.c( 'SoundData' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'clip')
  i672.volume = i673[2]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'clip')
  request.r(i675[2], i675[3], 0, i674, 'outputAudioMixerGroup')
  i674.playOnAwake = !!i675[4]
  i674.loop = !!i675[5]
  i674.time = i675[6]
  i674.volume = i675[7]
  i674.pitch = i675[8]
  i674.enabled = !!i675[9]
  return i674
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i676 = root || request.c( 'ProgressTrackingManager' )
  var i677 = data
  i676.maxScore = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'choiceBoardPlacer')
  i676.currentScore = i677[3]
  i676.currentPercent = i677[4]
  return i676
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i678 = root || request.c( 'PlayerController' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'endPos')
  i678.switchTrackTime = i679[2]
  request.r(i679[3], i679[4], 0, i678, 'trackRightTransform')
  request.r(i679[5], i679[6], 0, i678, 'trackLeftTransform')
  i678.startRight = !!i679[7]
  request.r(i679[8], i679[9], 0, i678, 'playerTransform')
  request.r(i679[10], i679[11], 0, i678, 'playerVisual')
  request.r(i679[12], i679[13], 0, i678, 'winPar')
  i678.currentLevel = i679[14]
  i678.dragSmoothSpeed = i679[15]
  i678.moveCurve = new pc.AnimationCurve( { keys_flow: i679[16] } )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i681 = data
  i680.aspect = i681[0]
  i680.orthographic = !!i681[1]
  i680.orthographicSize = i681[2]
  i680.backgroundColor = new pc.Color(i681[3], i681[4], i681[5], i681[6])
  i680.nearClipPlane = i681[7]
  i680.farClipPlane = i681[8]
  i680.fieldOfView = i681[9]
  i680.depth = i681[10]
  i680.clearFlags = i681[11]
  i680.cullingMask = i681[12]
  i680.rect = i681[13]
  request.r(i681[14], i681[15], 0, i680, 'targetTexture')
  i680.usePhysicalProperties = !!i681[16]
  i680.focalLength = i681[17]
  i680.sensorSize = new pc.Vec2( i681[18], i681[19] )
  i680.lensShift = new pc.Vec2( i681[20], i681[21] )
  i680.gateFit = i681[22]
  i680.commandBufferCount = i681[23]
  i680.cameraType = i681[24]
  i680.enabled = !!i681[25]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'sharedMesh')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'additionalVertexStreams')
  i684.enabled = !!i685[2]
  request.r(i685[3], i685[4], 0, i684, 'sharedMaterial')
  var i687 = i685[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sharedMaterials = i686
  i684.receiveShadows = !!i685[6]
  i684.shadowCastingMode = i685[7]
  i684.sortingLayerID = i685[8]
  i684.sortingOrder = i685[9]
  i684.lightmapIndex = i685[10]
  i684.lightmapSceneIndex = i685[11]
  i684.lightmapScaleOffset = new pc.Vec4( i685[12], i685[13], i685[14], i685[15] )
  i684.lightProbeUsage = i685[16]
  i684.reflectionProbeUsage = i685[17]
  return i684
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i688 = root || request.c( 'MaterialUVScroller' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'targetMaterial')
  i688.scrollSpeed = new pc.Vec2( i689[2], i689[3] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i691 = data
  i690.center = new pc.Vec3( i691[0], i691[1], i691[2] )
  i690.size = new pc.Vec3( i691[3], i691[4], i691[5] )
  i690.enabled = !!i691[6]
  i690.isTrigger = !!i691[7]
  request.r(i691[8], i691[9], 0, i690, 'material')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i693 = data
  i692.color = new pc.Color(i693[0], i693[1], i693[2], i693[3])
  request.r(i693[4], i693[5], 0, i692, 'sprite')
  i692.flipX = !!i693[6]
  i692.flipY = !!i693[7]
  i692.drawMode = i693[8]
  i692.size = new pc.Vec2( i693[9], i693[10] )
  i692.tileMode = i693[11]
  i692.adaptiveModeThreshold = i693[12]
  i692.maskInteraction = i693[13]
  i692.spriteSortPoint = i693[14]
  i692.enabled = !!i693[15]
  request.r(i693[16], i693[17], 0, i692, 'sharedMaterial')
  var i695 = i693[18]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[19]
  i692.shadowCastingMode = i693[20]
  i692.sortingLayerID = i693[21]
  i692.sortingOrder = i693[22]
  i692.lightmapIndex = i693[23]
  i692.lightmapSceneIndex = i693[24]
  i692.lightmapScaleOffset = new pc.Vec4( i693[25], i693[26], i693[27], i693[28] )
  i692.lightProbeUsage = i693[29]
  i692.reflectionProbeUsage = i693[30]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i697 = data
  i696.ambientIntensity = i697[0]
  i696.reflectionIntensity = i697[1]
  i696.ambientMode = i697[2]
  i696.ambientLight = new pc.Color(i697[3], i697[4], i697[5], i697[6])
  i696.ambientSkyColor = new pc.Color(i697[7], i697[8], i697[9], i697[10])
  i696.ambientGroundColor = new pc.Color(i697[11], i697[12], i697[13], i697[14])
  i696.ambientEquatorColor = new pc.Color(i697[15], i697[16], i697[17], i697[18])
  i696.fogColor = new pc.Color(i697[19], i697[20], i697[21], i697[22])
  i696.fogEndDistance = i697[23]
  i696.fogStartDistance = i697[24]
  i696.fogDensity = i697[25]
  i696.fog = !!i697[26]
  request.r(i697[27], i697[28], 0, i696, 'skybox')
  i696.fogMode = i697[29]
  var i699 = i697[30]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i699[i + 0]) );
  }
  i696.lightmaps = i698
  i696.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i697[31], i696.lightProbes)
  i696.lightmapsMode = i697[32]
  i696.mixedBakeMode = i697[33]
  i696.environmentLightingMode = i697[34]
  i696.ambientProbe = new pc.SphericalHarmonicsL2(i697[35])
  i696.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i697[36])
  i696.useReferenceAmbientProbe = !!i697[37]
  request.r(i697[38], i697[39], 0, i696, 'customReflection')
  request.r(i697[40], i697[41], 0, i696, 'defaultReflection')
  i696.defaultReflectionMode = i697[42]
  i696.defaultReflectionResolution = i697[43]
  i696.sunLightObjectId = i697[44]
  i696.pixelLightCount = i697[45]
  i696.defaultReflectionHDR = !!i697[46]
  i696.hasLightDataAsset = !!i697[47]
  i696.hasManualGenerate = !!i697[48]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'lightmapColor')
  request.r(i703[2], i703[3], 0, i702, 'lightmapDirection')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i704 = root || new UnityEngine.LightProbes()
  var i705 = data
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i713 = data
  var i715 = i713[0]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i715[i + 0]));
  }
  i712.ShaderCompilationErrors = i714
  i712.name = i713[1]
  i712.guid = i713[2]
  var i717 = i713[3]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.shaderDefinedKeywords = i716
  var i719 = i713[4]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i719[i + 0]) );
  }
  i712.passes = i718
  var i721 = i713[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i721[i + 0]) );
  }
  i712.usePasses = i720
  var i723 = i713[6]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i723[i + 0]) );
  }
  i712.defaultParameterValues = i722
  request.r(i713[7], i713[8], 0, i712, 'unityFallbackShader')
  i712.readDepth = !!i713[9]
  i712.hasDepthOnlyPass = !!i713[10]
  i712.isCreatedByShaderGraph = !!i713[11]
  i712.disableBatching = !!i713[12]
  i712.compiled = !!i713[13]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i727 = data
  i726.shaderName = i727[0]
  i726.errorMessage = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i732 = root || new pc.UnityShaderPass()
  var i733 = data
  i732.id = i733[0]
  i732.subShaderIndex = i733[1]
  i732.name = i733[2]
  i732.passType = i733[3]
  i732.grabPassTextureName = i733[4]
  i732.usePass = !!i733[5]
  i732.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[6], i732.zTest)
  i732.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[7], i732.zWrite)
  i732.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[8], i732.culling)
  i732.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[9], i732.blending)
  i732.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[10], i732.alphaBlending)
  i732.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[11], i732.colorWriteMask)
  i732.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[12], i732.offsetUnits)
  i732.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[13], i732.offsetFactor)
  i732.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[14], i732.stencilRef)
  i732.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[15], i732.stencilReadMask)
  i732.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[16], i732.stencilWriteMask)
  i732.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[17], i732.stencilOp)
  i732.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[18], i732.stencilOpFront)
  i732.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[19], i732.stencilOpBack)
  var i735 = i733[20]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i735[i + 0]) );
  }
  i732.tags = i734
  var i737 = i733[21]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.passDefinedKeywords = i736
  var i739 = i733[22]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i739[i + 0]) );
  }
  i732.passDefinedKeywordGroups = i738
  var i741 = i733[23]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i741[i + 0]) );
  }
  i732.variants = i740
  var i743 = i733[24]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i732.excludedVariants = i742
  i732.hasDepthReader = !!i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i745 = data
  i744.val = i745[0]
  i744.name = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i747 = data
  i746.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[0], i746.src)
  i746.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[1], i746.dst)
  i746.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[2], i746.op)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i749 = data
  i748.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.pass)
  i748.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.fail)
  i748.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.zFail)
  i748.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[3], i748.comp)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.hasDiscard = !!i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i763 = data
  i762.passId = i763[0]
  i762.subShaderIndex = i763[1]
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.keywords = i764
  i762.vertexProgram = i763[3]
  i762.fragmentProgram = i763[4]
  i762.exportedForWebGl2 = !!i763[5]
  i762.readDepth = !!i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'shader')
  i768.pass = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i773 = data
  i772.name = i773[0]
  i772.type = i773[1]
  i772.value = new pc.Vec4( i773[2], i773[3], i773[4], i773[5] )
  i772.textureValue = i773[6]
  i772.shaderPropertyFlag = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'texture')
  i774.aabb = i775[3]
  i774.vertices = i775[4]
  i774.triangles = i775[5]
  i774.textureRect = UnityEngine.Rect.MinMaxRect(i775[6], i775[7], i775[8], i775[9])
  i774.packedRect = UnityEngine.Rect.MinMaxRect(i775[10], i775[11], i775[12], i775[13])
  i774.border = new pc.Vec4( i775[14], i775[15], i775[16], i775[17] )
  i774.transparency = i775[18]
  i774.bounds = i775[19]
  i774.pixelsPerUnit = i775[20]
  i774.textureWidth = i775[21]
  i774.textureHeight = i775[22]
  i774.nativeSize = new pc.Vec2( i775[23], i775[24] )
  i774.pivot = new pc.Vec2( i775[25], i775[26] )
  i774.textureRectOffset = new pc.Vec2( i775[27], i775[28] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i777 = data
  i776.name = i777[0]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i779 = data
  i778.name = i779[0]
  i778.wrapMode = i779[1]
  i778.isLooping = !!i779[2]
  i778.length = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i781[i + 0]) );
  }
  i778.curves = i780
  var i783 = i779[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i783[i + 0]) );
  }
  i778.events = i782
  i778.halfPrecision = !!i779[6]
  i778._frameRate = i779[7]
  i778.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i779[8], i778.localBounds)
  i778.hasMuscleCurves = !!i779[9]
  var i785 = i779[10]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i778.clipMuscleConstant = i784
  i778.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i779[11], i778.clipBindingConstant)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i789 = data
  i788.path = i789[0]
  i788.hash = i789[1]
  i788.componentType = i789[2]
  i788.property = i789[3]
  i788.keys = i789[4]
  var i791 = i789[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i791[i + 0]) );
  }
  i788.objectReferenceKeys = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i795 = data
  i794.time = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i799 = data
  i798.functionName = i799[0]
  i798.floatParameter = i799[1]
  i798.intParameter = i799[2]
  i798.stringParameter = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'objectReferenceParameter')
  i798.time = i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i801 = data
  i800.center = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.extends = new pc.Vec3( i801[3], i801[4], i801[5] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.genericBindings = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.pptrCurveMapping = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i811 = data
  i810.name = i811[0]
  var i813 = i811[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i813[i + 0]) );
  }
  i810.layers = i812
  var i815 = i811[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i815[i + 0]) );
  }
  i810.parameters = i814
  i810.animationClips = i811[3]
  i810.avatarUnsupported = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i819 = data
  i818.name = i819[0]
  i818.defaultWeight = i819[1]
  i818.blendingMode = i819[2]
  i818.avatarMask = i819[3]
  i818.syncedLayerIndex = i819[4]
  i818.syncedLayerAffectsTiming = !!i819[5]
  i818.syncedLayers = i819[6]
  i818.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i819[7], i818.stateMachine)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  i820.path = i821[2]
  var i823 = i821[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i823[i + 0]) );
  }
  i820.states = i822
  var i825 = i821[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i825[i + 0]) );
  }
  i820.machines = i824
  var i827 = i821[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i827[i + 0]) );
  }
  i820.entryStateTransitions = i826
  var i829 = i821[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i829[i + 0]) );
  }
  i820.exitStateTransitions = i828
  var i831 = i821[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i831[i + 0]) );
  }
  i820.anyStateTransitions = i830
  i820.defaultStateId = i821[8]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i835 = data
  i834.id = i835[0]
  i834.name = i835[1]
  i834.cycleOffset = i835[2]
  i834.cycleOffsetParameter = i835[3]
  i834.cycleOffsetParameterActive = !!i835[4]
  i834.mirror = !!i835[5]
  i834.mirrorParameter = i835[6]
  i834.mirrorParameterActive = !!i835[7]
  i834.motionId = i835[8]
  i834.nameHash = i835[9]
  i834.fullPathHash = i835[10]
  i834.speed = i835[11]
  i834.speedParameter = i835[12]
  i834.speedParameterActive = !!i835[13]
  i834.tag = i835[14]
  i834.tagHash = i835[15]
  i834.writeDefaultValues = !!i835[16]
  var i837 = i835[17]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.behaviours = i836
  var i839 = i835[18]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i834.transitions = i838
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i845 = data
  i844.fullPath = i845[0]
  i844.canTransitionToSelf = !!i845[1]
  i844.duration = i845[2]
  i844.exitTime = i845[3]
  i844.hasExitTime = !!i845[4]
  i844.hasFixedDuration = !!i845[5]
  i844.interruptionSource = i845[6]
  i844.offset = i845[7]
  i844.orderedInterruption = !!i845[8]
  i844.destinationStateId = i845[9]
  i844.isExit = !!i845[10]
  i844.mute = !!i845[11]
  i844.solo = !!i845[12]
  var i847 = i845[13]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i847[i + 0]) );
  }
  i844.conditions = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i853 = data
  i852.destinationStateId = i853[0]
  i852.isExit = !!i853[1]
  i852.mute = !!i853[2]
  i852.solo = !!i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i859 = data
  i858.defaultBool = !!i859[0]
  i858.defaultFloat = i859[1]
  i858.defaultInt = i859[2]
  i858.name = i859[3]
  i858.nameHash = i859[4]
  i858.type = i859[5]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i861 = data
  i860.name = i861[0]
  i860.bytes64 = i861[1]
  i860.data = i861[2]
  return i860
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i863 = data
  i862.useSafeMode = !!i863[0]
  i862.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i863[1], i862.safeModeOptions)
  i862.timeScale = i863[2]
  i862.unscaledTimeScale = i863[3]
  i862.useSmoothDeltaTime = !!i863[4]
  i862.maxSmoothUnscaledTime = i863[5]
  i862.rewindCallbackMode = i863[6]
  i862.showUnityEditorReport = !!i863[7]
  i862.logBehaviour = i863[8]
  i862.drawGizmos = !!i863[9]
  i862.defaultRecyclable = !!i863[10]
  i862.defaultAutoPlay = i863[11]
  i862.defaultUpdateType = i863[12]
  i862.defaultTimeScaleIndependent = !!i863[13]
  i862.defaultEaseType = i863[14]
  i862.defaultEaseOvershootOrAmplitude = i863[15]
  i862.defaultEasePeriod = i863[16]
  i862.defaultAutoKill = !!i863[17]
  i862.defaultLoopType = i863[18]
  i862.debugMode = !!i863[19]
  i862.debugStoreTargetId = !!i863[20]
  i862.showPreviewPanel = !!i863[21]
  i862.storeSettingsLocation = i863[22]
  i862.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i863[23], i862.modules)
  i862.createASMDEF = !!i863[24]
  i862.showPlayingTweens = !!i863[25]
  i862.showPausedTweens = !!i863[26]
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i865 = data
  i864.logBehaviour = i865[0]
  i864.nestedTweenFailureBehaviour = i865[1]
  return i864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i867 = data
  i866.showPanel = !!i867[0]
  i866.audioEnabled = !!i867[1]
  i866.physicsEnabled = !!i867[2]
  i866.physics2DEnabled = !!i867[3]
  i866.spriteEnabled = !!i867[4]
  i866.uiEnabled = !!i867[5]
  i866.uiToolkitEnabled = !!i867[6]
  i866.textMeshProEnabled = !!i867[7]
  i866.tk2DEnabled = !!i867[8]
  i866.deAudioEnabled = !!i867[9]
  i866.deUnityExtendedEnabled = !!i867[10]
  i866.epoOutlineEnabled = !!i867[11]
  return i866
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_Settings' )
  var i869 = data
  i868.assetVersion = i869[0]
  i868.m_TextWrappingMode = i869[1]
  i868.m_enableKerning = !!i869[2]
  var i871 = i869[3]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(i871[i + 0]);
  }
  i868.m_ActiveFontFeatures = i870
  i868.m_enableExtraPadding = !!i869[4]
  i868.m_enableTintAllSprites = !!i869[5]
  i868.m_enableParseEscapeCharacters = !!i869[6]
  i868.m_EnableRaycastTarget = !!i869[7]
  i868.m_GetFontFeaturesAtRuntime = !!i869[8]
  i868.m_missingGlyphCharacter = i869[9]
  i868.m_ClearDynamicDataOnBuild = !!i869[10]
  i868.m_warningsDisabled = !!i869[11]
  request.r(i869[12], i869[13], 0, i868, 'm_defaultFontAsset')
  i868.m_defaultFontAssetPath = i869[14]
  i868.m_defaultFontSize = i869[15]
  i868.m_defaultAutoSizeMinRatio = i869[16]
  i868.m_defaultAutoSizeMaxRatio = i869[17]
  i868.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i869[18], i869[19] )
  i868.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i869[20], i869[21] )
  i868.m_autoSizeTextContainer = !!i869[22]
  i868.m_IsTextObjectScaleStatic = !!i869[23]
  var i873 = i869[24]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i868.m_fallbackFontAssets = i872
  i868.m_matchMaterialPreset = !!i869[25]
  i868.m_HideSubTextObjects = !!i869[26]
  request.r(i869[27], i869[28], 0, i868, 'm_defaultSpriteAsset')
  i868.m_defaultSpriteAssetPath = i869[29]
  i868.m_enableEmojiSupport = !!i869[30]
  i868.m_MissingCharacterSpriteUnicode = i869[31]
  var i875 = i869[32]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i868.m_EmojiFallbackTextAssets = i874
  i868.m_defaultColorGradientPresetsPath = i869[33]
  request.r(i869[34], i869[35], 0, i868, 'm_defaultStyleSheet')
  i868.m_StyleSheetsResourcePath = i869[36]
  request.r(i869[37], i869[38], 0, i868, 'm_leadingCharacters')
  request.r(i869[39], i869[40], 0, i868, 'm_followingCharacters')
  i868.m_UseModernHangulLineBreakingRules = !!i869[41]
  return i868
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'spriteSheet')
  var i885 = i883[2]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_Sprite', i885[i + 0]));
  }
  i882.spriteInfoList = i884
  var i887 = i883[3]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i882.fallbackSpriteAssets = i886
  var i889 = i883[4]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_SpriteCharacter', i889[i + 0]));
  }
  i882.m_SpriteCharacterTable = i888
  var i891 = i883[5]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.TMP_SpriteGlyph', i891[i + 0]));
  }
  i882.m_GlyphTable = i890
  i882.m_Version = i883[6]
  i882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i883[7], i882.m_FaceInfo)
  request.r(i883[8], i883[9], 0, i882, 'm_Material')
  return i882
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_Sprite' )
  var i895 = data
  i894.name = i895[0]
  i894.hashCode = i895[1]
  i894.unicode = i895[2]
  i894.pivot = new pc.Vec2( i895[3], i895[4] )
  request.r(i895[5], i895[6], 0, i894, 'sprite')
  i894.id = i895[7]
  i894.x = i895[8]
  i894.y = i895[9]
  i894.width = i895[10]
  i894.height = i895[11]
  i894.xOffset = i895[12]
  i894.yOffset = i895[13]
  i894.xAdvance = i895[14]
  i894.scale = i895[15]
  return i894
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i901 = data
  i900.m_Name = i901[0]
  i900.m_ElementType = i901[1]
  i900.m_Unicode = i901[2]
  i900.m_GlyphIndex = i901[3]
  i900.m_Scale = i901[4]
  return i900
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'sprite')
  i904.m_Index = i905[2]
  i904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i905[3], i904.m_Metrics)
  i904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i905[4], i904.m_GlyphRect)
  i904.m_Scale = i905[5]
  i904.m_AtlasIndex = i905[6]
  i904.m_ClassDefinitionType = i905[7]
  return i904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i907 = data
  i906.m_Width = i907[0]
  i906.m_Height = i907[1]
  i906.m_HorizontalBearingX = i907[2]
  i906.m_HorizontalBearingY = i907[3]
  i906.m_HorizontalAdvance = i907[4]
  return i906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i909 = data
  i908.m_X = i909[0]
  i908.m_Y = i909[1]
  i908.m_Width = i909[2]
  i908.m_Height = i909[3]
  return i908
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i911 = data
  i910.m_FaceIndex = i911[0]
  i910.m_FamilyName = i911[1]
  i910.m_StyleName = i911[2]
  i910.m_PointSize = i911[3]
  i910.m_Scale = i911[4]
  i910.m_UnitsPerEM = i911[5]
  i910.m_LineHeight = i911[6]
  i910.m_AscentLine = i911[7]
  i910.m_CapLine = i911[8]
  i910.m_MeanLine = i911[9]
  i910.m_Baseline = i911[10]
  i910.m_DescentLine = i911[11]
  i910.m_SuperscriptOffset = i911[12]
  i910.m_SuperscriptSize = i911[13]
  i910.m_SubscriptOffset = i911[14]
  i910.m_SubscriptSize = i911[15]
  i910.m_UnderlineOffset = i911[16]
  i910.m_UnderlineThickness = i911[17]
  i910.m_StrikethroughOffset = i911[18]
  i910.m_StrikethroughThickness = i911[19]
  i910.m_TabWidth = i911[20]
  return i910
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.TMP_Style', i915[i + 0]));
  }
  i912.m_StyleList = i914
  return i912
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_Style' )
  var i919 = data
  i918.m_Name = i919[0]
  i918.m_HashCode = i919[1]
  i918.m_OpeningDefinition = i919[2]
  i918.m_ClosingDefinition = i919[3]
  i918.m_OpeningTagArray = i919[4]
  i918.m_ClosingTagArray = i919[5]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i923[i + 0]) );
  }
  i920.files = i922
  i920.componentToPrefabIds = i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i927 = data
  i926.path = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'unityObject')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i931[i + 0]) );
  }
  i928.scriptsExecutionOrder = i930
  var i933 = i929[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i933[i + 0]) );
  }
  i928.sortingLayers = i932
  var i935 = i929[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i935[i + 0]) );
  }
  i928.cullingLayers = i934
  i928.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i929[3], i928.timeSettings)
  i928.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i929[4], i928.physicsSettings)
  i928.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i929[5], i928.physics2DSettings)
  i928.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i929[6], i928.qualitySettings)
  i928.enableRealtimeShadows = !!i929[7]
  i928.enableAutoInstancing = !!i929[8]
  i928.enableStaticBatching = !!i929[9]
  i928.enableDynamicBatching = !!i929[10]
  i928.lightmapEncodingQuality = i929[11]
  i928.desiredColorSpace = i929[12]
  var i937 = i929[13]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i928.allTags = i936
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i941 = data
  i940.name = i941[0]
  i940.value = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  i944.value = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i949 = data
  i948.id = i949[0]
  i948.name = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i951 = data
  i950.fixedDeltaTime = i951[0]
  i950.maximumDeltaTime = i951[1]
  i950.timeScale = i951[2]
  i950.maximumParticleTimestep = i951[3]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i953 = data
  i952.gravity = new pc.Vec3( i953[0], i953[1], i953[2] )
  i952.defaultSolverIterations = i953[3]
  i952.bounceThreshold = i953[4]
  i952.autoSyncTransforms = !!i953[5]
  i952.autoSimulation = !!i953[6]
  var i955 = i953[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i955[i + 0]) );
  }
  i952.collisionMatrix = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i959 = data
  i958.enabled = !!i959[0]
  i958.layerId = i959[1]
  i958.otherLayerId = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'material')
  i960.gravity = new pc.Vec2( i961[2], i961[3] )
  i960.positionIterations = i961[4]
  i960.velocityIterations = i961[5]
  i960.velocityThreshold = i961[6]
  i960.maxLinearCorrection = i961[7]
  i960.maxAngularCorrection = i961[8]
  i960.maxTranslationSpeed = i961[9]
  i960.maxRotationSpeed = i961[10]
  i960.baumgarteScale = i961[11]
  i960.baumgarteTOIScale = i961[12]
  i960.timeToSleep = i961[13]
  i960.linearSleepTolerance = i961[14]
  i960.angularSleepTolerance = i961[15]
  i960.defaultContactOffset = i961[16]
  i960.autoSimulation = !!i961[17]
  i960.queriesHitTriggers = !!i961[18]
  i960.queriesStartInColliders = !!i961[19]
  i960.callbacksOnDisable = !!i961[20]
  i960.reuseCollisionCallbacks = !!i961[21]
  i960.autoSyncTransforms = !!i961[22]
  var i963 = i961[23]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i963[i + 0]) );
  }
  i960.collisionMatrix = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i967 = data
  i966.enabled = !!i967[0]
  i966.layerId = i967[1]
  i966.otherLayerId = i967[2]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i971[i + 0]) );
  }
  i968.qualityLevels = i970
  var i973 = i969[1]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i968.names = i972
  i968.shadows = i969[2]
  i968.anisotropicFiltering = i969[3]
  i968.antiAliasing = i969[4]
  i968.lodBias = i969[5]
  i968.shadowCascades = i969[6]
  i968.shadowDistance = i969[7]
  i968.shadowmaskMode = i969[8]
  i968.shadowProjection = i969[9]
  i968.shadowResolution = i969[10]
  i968.softParticles = !!i969[11]
  i968.softVegetation = !!i969[12]
  i968.activeColorSpace = i969[13]
  i968.desiredColorSpace = i969[14]
  i968.masterTextureLimit = i969[15]
  i968.maxQueuedFrames = i969[16]
  i968.particleRaycastBudget = i969[17]
  i968.pixelLightCount = i969[18]
  i968.realtimeReflectionProbes = !!i969[19]
  i968.shadowCascade2Split = i969[20]
  i968.shadowCascade4Split = new pc.Vec3( i969[21], i969[22], i969[23] )
  i968.streamingMipmapsActive = !!i969[24]
  i968.vSyncCount = i969[25]
  i968.asyncUploadBufferSize = i969[26]
  i968.asyncUploadTimeSlice = i969[27]
  i968.billboardsFaceCameraPosition = !!i969[28]
  i968.shadowNearPlaneOffset = i969[29]
  i968.streamingMipmapsMemoryBudget = i969[30]
  i968.maximumLODLevel = i969[31]
  i968.streamingMipmapsAddAllCameras = !!i969[32]
  i968.streamingMipmapsMaxLevelReduction = i969[33]
  i968.streamingMipmapsRenderersPerFrame = i969[34]
  i968.resolutionScalingFixedDPIFactor = i969[35]
  i968.streamingMipmapsMaxFileIORequests = i969[36]
  i968.currentQualityLevel = i969[37]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i979 = data
  i978.weight = i979[0]
  i978.vertices = i979[1]
  i978.normals = i979[2]
  i978.tangents = i979[3]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i983 = data
  i982.mode = i983[0]
  i982.parameter = i983[1]
  i982.threshold = i983[2]
  return i982
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[16],"58":[36],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[36],"81":[39],"82":[83],"84":[83],"3":[2],"85":[27],"86":[3],"87":[2],"88":[39,2],"89":[2,7],"90":[2],"91":[7,2],"92":[39],"93":[7,2],"94":[2],"95":[96],"97":[96],"98":[96],"99":[2],"100":[2],"6":[3],"8":[7,2],"101":[2],"5":[3],"102":[2],"103":[2],"22":[2],"104":[2],"105":[2],"106":[2],"107":[2],"108":[2],"109":[2],"9":[7,2],"110":[2],"111":[2],"112":[2],"113":[2],"114":[7,2],"115":[2],"116":[27],"117":[27],"28":[27],"118":[27],"119":[36],"120":[36]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UnityEngine.Sprite","UIGuidingMove","UIPulse","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Light","UnityEngine.UI.HorizontalLayoutGroup","UICheckBoxHolder","UICheckBox","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "15.8";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_V13_Fix";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1734";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5156";

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

Deserializers.buildID = "839edba3-0928-4682-80a4-0cd25b2b9b43";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

