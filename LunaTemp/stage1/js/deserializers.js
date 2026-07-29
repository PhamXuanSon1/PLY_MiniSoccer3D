var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7498 = root || request.c( 'UnityEngine.JointSpring' )
  var i7499 = data
  i7498.spring = i7499[0]
  i7498.damper = i7499[1]
  i7498.targetPosition = i7499[2]
  return i7498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7500 = root || request.c( 'UnityEngine.JointMotor' )
  var i7501 = data
  i7500.m_TargetVelocity = i7501[0]
  i7500.m_Force = i7501[1]
  i7500.m_FreeSpin = i7501[2]
  return i7500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7502 = root || request.c( 'UnityEngine.JointLimits' )
  var i7503 = data
  i7502.m_Min = i7503[0]
  i7502.m_Max = i7503[1]
  i7502.m_Bounciness = i7503[2]
  i7502.m_BounceMinVelocity = i7503[3]
  i7502.m_ContactDistance = i7503[4]
  i7502.minBounce = i7503[5]
  i7502.maxBounce = i7503[6]
  return i7502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7504 = root || request.c( 'UnityEngine.JointDrive' )
  var i7505 = data
  i7504.m_PositionSpring = i7505[0]
  i7504.m_PositionDamper = i7505[1]
  i7504.m_MaximumForce = i7505[2]
  i7504.m_UseAcceleration = i7505[3]
  return i7504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7507 = data
  i7506.m_Spring = i7507[0]
  i7506.m_Damper = i7507[1]
  return i7506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7509 = data
  i7508.m_Limit = i7509[0]
  i7508.m_Bounciness = i7509[1]
  i7508.m_ContactDistance = i7509[2]
  return i7508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7511 = data
  i7510.m_ExtremumSlip = i7511[0]
  i7510.m_ExtremumValue = i7511[1]
  i7510.m_AsymptoteSlip = i7511[2]
  i7510.m_AsymptoteValue = i7511[3]
  i7510.m_Stiffness = i7511[4]
  return i7510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7513 = data
  i7512.m_LowerAngle = i7513[0]
  i7512.m_UpperAngle = i7513[1]
  return i7512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7515 = data
  i7514.m_MotorSpeed = i7515[0]
  i7514.m_MaximumMotorTorque = i7515[1]
  return i7514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7517 = data
  i7516.m_DampingRatio = i7517[0]
  i7516.m_Frequency = i7517[1]
  i7516.m_Angle = i7517[2]
  return i7516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7519 = data
  i7518.m_LowerTranslation = i7519[0]
  i7518.m_UpperTranslation = i7519[1]
  return i7518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7521 = data
  i7520.name = i7521[0]
  i7520.width = i7521[1]
  i7520.height = i7521[2]
  i7520.mipmapCount = i7521[3]
  i7520.anisoLevel = i7521[4]
  i7520.filterMode = i7521[5]
  i7520.hdr = !!i7521[6]
  i7520.format = i7521[7]
  i7520.wrapMode = i7521[8]
  i7520.alphaIsTransparency = !!i7521[9]
  i7520.alphaSource = i7521[10]
  i7520.graphicsFormat = i7521[11]
  i7520.sRGBTexture = !!i7521[12]
  i7520.desiredColorSpace = i7521[13]
  i7520.wrapU = i7521[14]
  i7520.wrapV = i7521[15]
  return i7520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7523 = data
  i7522.name = i7523[0]
  i7522.halfPrecision = !!i7523[1]
  i7522.useSimplification = !!i7523[2]
  i7522.useUInt32IndexFormat = !!i7523[3]
  i7522.vertexCount = i7523[4]
  i7522.aabb = i7523[5]
  var i7525 = i7523[6]
  var i7524 = []
  for(var i = 0; i < i7525.length; i += 1) {
    i7524.push( !!i7525[i + 0] );
  }
  i7522.streams = i7524
  i7522.vertices = i7523[7]
  var i7527 = i7523[8]
  var i7526 = []
  for(var i = 0; i < i7527.length; i += 1) {
    i7526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7527[i + 0]) );
  }
  i7522.subMeshes = i7526
  var i7529 = i7523[9]
  var i7528 = []
  for(var i = 0; i < i7529.length; i += 16) {
    i7528.push( new pc.Mat4().setData(i7529[i + 0], i7529[i + 1], i7529[i + 2], i7529[i + 3],  i7529[i + 4], i7529[i + 5], i7529[i + 6], i7529[i + 7],  i7529[i + 8], i7529[i + 9], i7529[i + 10], i7529[i + 11],  i7529[i + 12], i7529[i + 13], i7529[i + 14], i7529[i + 15]) );
  }
  i7522.bindposes = i7528
  var i7531 = i7523[10]
  var i7530 = []
  for(var i = 0; i < i7531.length; i += 1) {
    i7530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7531[i + 0]) );
  }
  i7522.blendShapes = i7530
  return i7522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7537 = data
  i7536.triangles = i7537[0]
  return i7536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7543 = data
  i7542.name = i7543[0]
  var i7545 = i7543[1]
  var i7544 = []
  for(var i = 0; i < i7545.length; i += 1) {
    i7544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7545[i + 0]) );
  }
  i7542.frames = i7544
  return i7542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7546 = root || new pc.UnityMaterial()
  var i7547 = data
  i7546.name = i7547[0]
  request.r(i7547[1], i7547[2], 0, i7546, 'shader')
  i7546.renderQueue = i7547[3]
  i7546.enableInstancing = !!i7547[4]
  var i7549 = i7547[5]
  var i7548 = []
  for(var i = 0; i < i7549.length; i += 1) {
    i7548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7549[i + 0]) );
  }
  i7546.floatParameters = i7548
  var i7551 = i7547[6]
  var i7550 = []
  for(var i = 0; i < i7551.length; i += 1) {
    i7550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7551[i + 0]) );
  }
  i7546.colorParameters = i7550
  var i7553 = i7547[7]
  var i7552 = []
  for(var i = 0; i < i7553.length; i += 1) {
    i7552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7553[i + 0]) );
  }
  i7546.vectorParameters = i7552
  var i7555 = i7547[8]
  var i7554 = []
  for(var i = 0; i < i7555.length; i += 1) {
    i7554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7555[i + 0]) );
  }
  i7546.textureParameters = i7554
  var i7557 = i7547[9]
  var i7556 = []
  for(var i = 0; i < i7557.length; i += 1) {
    i7556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7557[i + 0]) );
  }
  i7546.materialFlags = i7556
  return i7546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7561 = data
  i7560.name = i7561[0]
  i7560.value = i7561[1]
  return i7560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7565 = data
  i7564.name = i7565[0]
  i7564.value = new pc.Color(i7565[1], i7565[2], i7565[3], i7565[4])
  return i7564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7569 = data
  i7568.name = i7569[0]
  i7568.value = new pc.Vec4( i7569[1], i7569[2], i7569[3], i7569[4] )
  return i7568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7573 = data
  i7572.name = i7573[0]
  request.r(i7573[1], i7573[2], 0, i7572, 'value')
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7577 = data
  i7576.name = i7577[0]
  i7576.enabled = !!i7577[1]
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7579 = data
  i7578.position = new pc.Vec3( i7579[0], i7579[1], i7579[2] )
  i7578.scale = new pc.Vec3( i7579[3], i7579[4], i7579[5] )
  i7578.rotation = new pc.Quat(i7579[6], i7579[7], i7579[8], i7579[9])
  return i7578
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i7580 = root || request.c( 'ChoiceBoardHolder' )
  var i7581 = data
  var i7583 = i7581[0]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 2) {
  request.r(i7583[i + 0], i7583[i + 1], 2, i7582, '')
  }
  i7580.choiceBoards = i7582
  return i7580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7587 = data
  i7586.center = new pc.Vec3( i7587[0], i7587[1], i7587[2] )
  i7586.size = new pc.Vec3( i7587[3], i7587[4], i7587[5] )
  i7586.enabled = !!i7587[6]
  i7586.isTrigger = !!i7587[7]
  request.r(i7587[8], i7587[9], 0, i7586, 'material')
  return i7586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7589 = data
  i7588.color = new pc.Color(i7589[0], i7589[1], i7589[2], i7589[3])
  request.r(i7589[4], i7589[5], 0, i7588, 'sprite')
  i7588.flipX = !!i7589[6]
  i7588.flipY = !!i7589[7]
  i7588.drawMode = i7589[8]
  i7588.size = new pc.Vec2( i7589[9], i7589[10] )
  i7588.tileMode = i7589[11]
  i7588.adaptiveModeThreshold = i7589[12]
  i7588.maskInteraction = i7589[13]
  i7588.spriteSortPoint = i7589[14]
  i7588.enabled = !!i7589[15]
  request.r(i7589[16], i7589[17], 0, i7588, 'sharedMaterial')
  var i7591 = i7589[18]
  var i7590 = []
  for(var i = 0; i < i7591.length; i += 2) {
  request.r(i7591[i + 0], i7591[i + 1], 2, i7590, '')
  }
  i7588.sharedMaterials = i7590
  i7588.receiveShadows = !!i7589[19]
  i7588.shadowCastingMode = i7589[20]
  i7588.sortingLayerID = i7589[21]
  i7588.sortingOrder = i7589[22]
  i7588.lightmapIndex = i7589[23]
  i7588.lightmapSceneIndex = i7589[24]
  i7588.lightmapScaleOffset = new pc.Vec4( i7589[25], i7589[26], i7589[27], i7589[28] )
  i7588.lightProbeUsage = i7589[29]
  i7588.reflectionProbeUsage = i7589[30]
  return i7588
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i7594 = root || request.c( 'ChoiceBoard' )
  var i7595 = data
  request.r(i7595[0], i7595[1], 0, i7594, 'spriteRenderer')
  request.r(i7595[2], i7595[3], 0, i7594, 'borderRenderer')
  i7594.choiceBoardType = i7595[4]
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7597 = data
  i7596.name = i7597[0]
  i7596.tagId = i7597[1]
  i7596.enabled = !!i7597[2]
  i7596.isStatic = !!i7597[3]
  i7596.layer = i7597[4]
  return i7596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7599 = data
  i7598.name = i7599[0]
  i7598.atlasId = i7599[1]
  i7598.mipmapCount = i7599[2]
  i7598.hdr = !!i7599[3]
  i7598.size = i7599[4]
  i7598.anisoLevel = i7599[5]
  i7598.filterMode = i7599[6]
  var i7601 = i7599[7]
  var i7600 = []
  for(var i = 0; i < i7601.length; i += 4) {
    i7600.push( UnityEngine.Rect.MinMaxRect(i7601[i + 0], i7601[i + 1], i7601[i + 2], i7601[i + 3]) );
  }
  i7598.rects = i7600
  i7598.wrapU = i7599[8]
  i7598.wrapV = i7599[9]
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7605 = data
  i7604.name = i7605[0]
  i7604.index = i7605[1]
  i7604.startup = !!i7605[2]
  return i7604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7607 = data
  i7606.type = i7607[0]
  i7606.color = new pc.Color(i7607[1], i7607[2], i7607[3], i7607[4])
  i7606.cullingMask = i7607[5]
  i7606.intensity = i7607[6]
  i7606.range = i7607[7]
  i7606.spotAngle = i7607[8]
  i7606.shadows = i7607[9]
  i7606.shadowNormalBias = i7607[10]
  i7606.shadowBias = i7607[11]
  i7606.shadowStrength = i7607[12]
  i7606.shadowResolution = i7607[13]
  i7606.lightmapBakeType = i7607[14]
  i7606.renderMode = i7607[15]
  request.r(i7607[16], i7607[17], 0, i7606, 'cookie')
  i7606.cookieSize = i7607[18]
  i7606.shadowNearPlane = i7607[19]
  i7606.occlusionMaskChannel = i7607[20]
  i7606.enabled = !!i7607[21]
  return i7606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7609 = data
  i7608.pivot = new pc.Vec2( i7609[0], i7609[1] )
  i7608.anchorMin = new pc.Vec2( i7609[2], i7609[3] )
  i7608.anchorMax = new pc.Vec2( i7609[4], i7609[5] )
  i7608.sizeDelta = new pc.Vec2( i7609[6], i7609[7] )
  i7608.anchoredPosition3D = new pc.Vec3( i7609[8], i7609[9], i7609[10] )
  i7608.rotation = new pc.Quat(i7609[11], i7609[12], i7609[13], i7609[14])
  i7608.scale = new pc.Vec3( i7609[15], i7609[16], i7609[17] )
  return i7608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7611 = data
  i7610.planeDistance = i7611[0]
  i7610.referencePixelsPerUnit = i7611[1]
  i7610.isFallbackOverlay = !!i7611[2]
  i7610.renderMode = i7611[3]
  i7610.renderOrder = i7611[4]
  i7610.sortingLayerName = i7611[5]
  i7610.sortingOrder = i7611[6]
  i7610.scaleFactor = i7611[7]
  request.r(i7611[8], i7611[9], 0, i7610, 'worldCamera')
  i7610.overrideSorting = !!i7611[10]
  i7610.pixelPerfect = !!i7611[11]
  i7610.targetDisplay = i7611[12]
  i7610.overridePixelPerfect = !!i7611[13]
  i7610.enabled = !!i7611[14]
  return i7610
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7612 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7613 = data
  i7612.m_UiScaleMode = i7613[0]
  i7612.m_ReferencePixelsPerUnit = i7613[1]
  i7612.m_ScaleFactor = i7613[2]
  i7612.m_ReferenceResolution = new pc.Vec2( i7613[3], i7613[4] )
  i7612.m_ScreenMatchMode = i7613[5]
  i7612.m_MatchWidthOrHeight = i7613[6]
  i7612.m_PhysicalUnit = i7613[7]
  i7612.m_FallbackScreenDPI = i7613[8]
  i7612.m_DefaultSpriteDPI = i7613[9]
  i7612.m_DynamicPixelsPerUnit = i7613[10]
  i7612.m_PresetInfoIsWorld = !!i7613[11]
  return i7612
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7614 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7615 = data
  i7614.m_IgnoreReversedGraphics = !!i7615[0]
  i7614.m_BlockingObjects = i7615[1]
  i7614.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7615[2] )
  return i7614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7617 = data
  i7616.cullTransparentMesh = !!i7617[0]
  return i7616
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7618 = root || request.c( 'UnityEngine.UI.Image' )
  var i7619 = data
  request.r(i7619[0], i7619[1], 0, i7618, 'm_Sprite')
  i7618.m_Type = i7619[2]
  i7618.m_PreserveAspect = !!i7619[3]
  i7618.m_FillCenter = !!i7619[4]
  i7618.m_FillMethod = i7619[5]
  i7618.m_FillAmount = i7619[6]
  i7618.m_FillClockwise = !!i7619[7]
  i7618.m_FillOrigin = i7619[8]
  i7618.m_UseSpriteMesh = !!i7619[9]
  i7618.m_PixelsPerUnitMultiplier = i7619[10]
  request.r(i7619[11], i7619[12], 0, i7618, 'm_Material')
  i7618.m_Maskable = !!i7619[13]
  i7618.m_Color = new pc.Color(i7619[14], i7619[15], i7619[16], i7619[17])
  i7618.m_RaycastTarget = !!i7619[18]
  i7618.m_RaycastPadding = new pc.Vec4( i7619[19], i7619[20], i7619[21], i7619[22] )
  return i7618
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i7620 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i7621 = data
  i7620.m_Spacing = i7621[0]
  i7620.m_ChildForceExpandWidth = !!i7621[1]
  i7620.m_ChildForceExpandHeight = !!i7621[2]
  i7620.m_ChildControlWidth = !!i7621[3]
  i7620.m_ChildControlHeight = !!i7621[4]
  i7620.m_ChildScaleWidth = !!i7621[5]
  i7620.m_ChildScaleHeight = !!i7621[6]
  i7620.m_ReverseArrangement = !!i7621[7]
  i7620.m_Padding = UnityEngine.RectOffset.FromPaddings(i7621[8], i7621[9], i7621[10], i7621[11])
  i7620.m_ChildAlignment = i7621[12]
  return i7620
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i7622 = root || request.c( 'UICheckBoxHolder' )
  var i7623 = data
  var i7625 = i7623[0]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 2) {
  request.r(i7625[i + 0], i7625[i + 1], 2, i7624, '')
  }
  i7622.uICheckBoxes = i7624
  return i7622
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i7628 = root || request.c( 'UICheckBox' )
  var i7629 = data
  request.r(i7629[0], i7629[1], 0, i7628, 'iconImg')
  request.r(i7629[2], i7629[3], 0, i7628, 'startingSprite')
  return i7628
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i7630 = root || request.c( 'UnityEngine.UI.Slider' )
  var i7631 = data
  request.r(i7631[0], i7631[1], 0, i7630, 'm_FillRect')
  request.r(i7631[2], i7631[3], 0, i7630, 'm_HandleRect')
  i7630.m_Direction = i7631[4]
  i7630.m_MinValue = i7631[5]
  i7630.m_MaxValue = i7631[6]
  i7630.m_WholeNumbers = !!i7631[7]
  i7630.m_Value = i7631[8]
  i7630.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i7631[9], i7630.m_OnValueChanged)
  i7630.m_Navigation = request.d('UnityEngine.UI.Navigation', i7631[10], i7630.m_Navigation)
  i7630.m_Transition = i7631[11]
  i7630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7631[12], i7630.m_Colors)
  i7630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7631[13], i7630.m_SpriteState)
  i7630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7631[14], i7630.m_AnimationTriggers)
  i7630.m_Interactable = !!i7631[15]
  request.r(i7631[16], i7631[17], 0, i7630, 'm_TargetGraphic')
  return i7630
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i7632 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i7633 = data
  i7632.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7633[0], i7632.m_PersistentCalls)
  return i7632
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7634 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7635 = data
  var i7637 = i7635[0]
  var i7636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7637.length; i += 1) {
    i7636.add(request.d('UnityEngine.Events.PersistentCall', i7637[i + 0]));
  }
  i7634.m_Calls = i7636
  return i7634
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7640 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7641 = data
  request.r(i7641[0], i7641[1], 0, i7640, 'm_Target')
  i7640.m_TargetAssemblyTypeName = i7641[2]
  i7640.m_MethodName = i7641[3]
  i7640.m_Mode = i7641[4]
  i7640.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7641[5], i7640.m_Arguments)
  i7640.m_CallState = i7641[6]
  return i7640
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7642 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7643 = data
  i7642.m_Mode = i7643[0]
  i7642.m_WrapAround = !!i7643[1]
  request.r(i7643[2], i7643[3], 0, i7642, 'm_SelectOnUp')
  request.r(i7643[4], i7643[5], 0, i7642, 'm_SelectOnDown')
  request.r(i7643[6], i7643[7], 0, i7642, 'm_SelectOnLeft')
  request.r(i7643[8], i7643[9], 0, i7642, 'm_SelectOnRight')
  return i7642
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7644 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7645 = data
  i7644.m_NormalColor = new pc.Color(i7645[0], i7645[1], i7645[2], i7645[3])
  i7644.m_HighlightedColor = new pc.Color(i7645[4], i7645[5], i7645[6], i7645[7])
  i7644.m_PressedColor = new pc.Color(i7645[8], i7645[9], i7645[10], i7645[11])
  i7644.m_SelectedColor = new pc.Color(i7645[12], i7645[13], i7645[14], i7645[15])
  i7644.m_DisabledColor = new pc.Color(i7645[16], i7645[17], i7645[18], i7645[19])
  i7644.m_ColorMultiplier = i7645[20]
  i7644.m_FadeDuration = i7645[21]
  return i7644
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7646 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7647 = data
  request.r(i7647[0], i7647[1], 0, i7646, 'm_HighlightedSprite')
  request.r(i7647[2], i7647[3], 0, i7646, 'm_PressedSprite')
  request.r(i7647[4], i7647[5], 0, i7646, 'm_SelectedSprite')
  request.r(i7647[6], i7647[7], 0, i7646, 'm_DisabledSprite')
  return i7646
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7648 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7649 = data
  i7648.m_NormalTrigger = i7649[0]
  i7648.m_HighlightedTrigger = i7649[1]
  i7648.m_PressedTrigger = i7649[2]
  i7648.m_SelectedTrigger = i7649[3]
  i7648.m_DisabledTrigger = i7649[4]
  return i7648
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i7650 = root || request.c( 'UIProgressBar' )
  var i7651 = data
  request.r(i7651[0], i7651[1], 0, i7650, 'fillImage')
  request.r(i7651[2], i7651[3], 0, i7650, 'fillBackground')
  return i7650
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i7652 = root || request.c( 'UITutorial' )
  var i7653 = data
  request.r(i7653[0], i7653[1], 0, i7652, 'tutorialUIHolder')
  return i7652
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i7654 = root || request.c( 'UIGuidingMove' )
  var i7655 = data
  request.r(i7655[0], i7655[1], 0, i7654, 'target')
  i7654.startPosition = new pc.Vec2( i7655[2], i7655[3] )
  i7654.endPosition = new pc.Vec2( i7655[4], i7655[5] )
  i7654.duration = i7655[6]
  i7654.ease = i7655[7]
  i7654.resetToStartOnComplete = !!i7655[8]
  i7654.loop = !!i7655[9]
  i7654.loopCount = i7655[10]
  i7654.loopType = i7655[11]
  return i7654
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i7656 = root || request.c( 'UIPulse' )
  var i7657 = data
  i7656.targetScale = new pc.Vec3( i7657[0], i7657[1], i7657[2] )
  i7656.duration = i7657[3]
  i7656.ease = i7657[4]
  return i7656
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i7658 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i7659 = data
  request.r(i7659[0], i7659[1], 0, i7658, 'm_Texture')
  i7658.m_UVRect = UnityEngine.Rect.MinMaxRect(i7659[2], i7659[3], i7659[4], i7659[5])
  request.r(i7659[6], i7659[7], 0, i7658, 'm_Material')
  i7658.m_Maskable = !!i7659[8]
  i7658.m_Color = new pc.Color(i7659[9], i7659[10], i7659[11], i7659[12])
  i7658.m_RaycastTarget = !!i7659[13]
  i7658.m_RaycastPadding = new pc.Vec4( i7659[14], i7659[15], i7659[16], i7659[17] )
  return i7658
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i7660 = root || request.c( 'ImageScroller' )
  var i7661 = data
  request.r(i7661[0], i7661[1], 0, i7660, 'rawImage')
  i7660.moveVector = new pc.Vec2( i7661[2], i7661[3] )
  return i7660
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7662 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7663 = data
  request.r(i7663[0], i7663[1], 0, i7662, 'm_FirstSelected')
  i7662.m_sendNavigationEvents = !!i7663[2]
  i7662.m_DragThreshold = i7663[3]
  return i7662
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7664 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7665 = data
  i7664.m_HorizontalAxis = i7665[0]
  i7664.m_VerticalAxis = i7665[1]
  i7664.m_SubmitButton = i7665[2]
  i7664.m_CancelButton = i7665[3]
  i7664.m_InputActionsPerSecond = i7665[4]
  i7664.m_RepeatDelay = i7665[5]
  i7664.m_ForceModuleActive = !!i7665[6]
  i7664.m_SendPointerHoverToParent = !!i7665[7]
  return i7664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7667 = data
  request.r(i7667[0], i7667[1], 0, i7666, 'sharedMesh')
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7669 = data
  request.r(i7669[0], i7669[1], 0, i7668, 'additionalVertexStreams')
  i7668.enabled = !!i7669[2]
  request.r(i7669[3], i7669[4], 0, i7668, 'sharedMaterial')
  var i7671 = i7669[5]
  var i7670 = []
  for(var i = 0; i < i7671.length; i += 2) {
  request.r(i7671[i + 0], i7671[i + 1], 2, i7670, '')
  }
  i7668.sharedMaterials = i7670
  i7668.receiveShadows = !!i7669[6]
  i7668.shadowCastingMode = i7669[7]
  i7668.sortingLayerID = i7669[8]
  i7668.sortingOrder = i7669[9]
  i7668.lightmapIndex = i7669[10]
  i7668.lightmapSceneIndex = i7669[11]
  i7668.lightmapScaleOffset = new pc.Vec4( i7669[12], i7669[13], i7669[14], i7669[15] )
  i7668.lightProbeUsage = i7669[16]
  i7668.reflectionProbeUsage = i7669[17]
  return i7668
}

Deserializers["GameManager"] = function (request, data, root) {
  var i7672 = root || request.c( 'GameManager' )
  var i7673 = data
  i7672.maxLevel = i7673[0]
  i7672.winLevel = i7673[1]
  i7672.totalMoveTime = i7673[2]
  i7672.currentPlayerLevel = i7673[3]
  return i7672
}

Deserializers["InputManager"] = function (request, data, root) {
  var i7674 = root || request.c( 'InputManager' )
  var i7675 = data
  i7674.minimumSwipeDistance = i7675[0]
  return i7674
}

Deserializers["UIManager"] = function (request, data, root) {
  var i7676 = root || request.c( 'UIManager' )
  var i7677 = data
  return i7676
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i7678 = root || request.c( 'Ply_SoundManager' )
  var i7679 = data
  i7678.audioClips = request.d('FxAudio', i7679[0], i7678.audioClips)
  request.r(i7679[1], i7679[2], 0, i7678, 'sound')
  i7678.enableSound = !!i7679[3]
  i7678.bgmVolume = i7679[4]
  return i7678
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i7680 = root || request.c( 'FxAudio' )
  var i7681 = data
  i7680.Clock = request.d('SoundData', i7681[0], i7680.Clock)
  i7680.PlayerWin = request.d('SoundData', i7681[1], i7680.PlayerWin)
  i7680.PlayerLoose = request.d('SoundData', i7681[2], i7680.PlayerLoose)
  i7680.RightChoice = request.d('SoundData', i7681[3], i7680.RightChoice)
  i7680.WrongChoice = request.d('SoundData', i7681[4], i7680.WrongChoice)
  i7680.MaxLevel = request.d('SoundData', i7681[5], i7680.MaxLevel)
  i7680.FightingCloud = request.d('SoundData', i7681[6], i7680.FightingCloud)
  return i7680
}

Deserializers["SoundData"] = function (request, data, root) {
  var i7682 = root || request.c( 'SoundData' )
  var i7683 = data
  request.r(i7683[0], i7683[1], 0, i7682, 'clip')
  i7682.volume = i7683[2]
  return i7682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7685 = data
  request.r(i7685[0], i7685[1], 0, i7684, 'clip')
  request.r(i7685[2], i7685[3], 0, i7684, 'outputAudioMixerGroup')
  i7684.playOnAwake = !!i7685[4]
  i7684.loop = !!i7685[5]
  i7684.time = i7685[6]
  i7684.volume = i7685[7]
  i7684.pitch = i7685[8]
  i7684.enabled = !!i7685[9]
  return i7684
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i7686 = root || request.c( 'PlayerController' )
  var i7687 = data
  request.r(i7687[0], i7687[1], 0, i7686, 'endPos')
  i7686.switchTrackTime = i7687[2]
  request.r(i7687[3], i7687[4], 0, i7686, 'trackRightTransform')
  request.r(i7687[5], i7687[6], 0, i7686, 'trackLeftTransform')
  i7686.startRight = !!i7687[7]
  request.r(i7687[8], i7687[9], 0, i7686, 'playerTransform')
  request.r(i7687[10], i7687[11], 0, i7686, 'playerVisual')
  request.r(i7687[12], i7687[13], 0, i7686, 'winPar')
  i7686.currentLevel = i7687[14]
  i7686.dragSmoothSpeed = i7687[15]
  i7686.moveCurve = new pc.AnimationCurve( { keys_flow: i7687[16] } )
  return i7686
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i7688 = root || request.c( 'PlayerVisual' )
  var i7689 = data
  request.r(i7689[0], i7689[1], 0, i7688, 'playerSpriteRenderer')
  request.r(i7689[2], i7689[3], 0, i7688, 'fakeShadowRenderer')
  var i7691 = i7689[4]
  var i7690 = []
  for(var i = 0; i < i7691.length; i += 2) {
  request.r(i7691[i + 0], i7691[i + 1], 2, i7690, '')
  }
  i7688.levelSprite = i7690
  request.r(i7689[5], i7689[6], 0, i7688, 'maxPowerPar')
  return i7688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i7695 = data
  i7694.mass = i7695[0]
  i7694.drag = i7695[1]
  i7694.angularDrag = i7695[2]
  i7694.useGravity = !!i7695[3]
  i7694.isKinematic = !!i7695[4]
  i7694.constraints = i7695[5]
  i7694.maxAngularVelocity = i7695[6]
  i7694.collisionDetectionMode = i7695[7]
  i7694.interpolation = i7695[8]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7697 = data
  i7696.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7697[0], i7696.main)
  i7696.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7697[1], i7696.colorBySpeed)
  i7696.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7697[2], i7696.colorOverLifetime)
  i7696.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7697[3], i7696.emission)
  i7696.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7697[4], i7696.rotationBySpeed)
  i7696.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7697[5], i7696.rotationOverLifetime)
  i7696.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7697[6], i7696.shape)
  i7696.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7697[7], i7696.sizeBySpeed)
  i7696.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7697[8], i7696.sizeOverLifetime)
  i7696.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7697[9], i7696.textureSheetAnimation)
  i7696.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7697[10], i7696.velocityOverLifetime)
  i7696.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7697[11], i7696.noise)
  i7696.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7697[12], i7696.inheritVelocity)
  i7696.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7697[13], i7696.forceOverLifetime)
  i7696.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7697[14], i7696.limitVelocityOverLifetime)
  i7696.useAutoRandomSeed = !!i7697[15]
  i7696.randomSeed = i7697[16]
  return i7696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7698 = root || new pc.ParticleSystemMain()
  var i7699 = data
  i7698.duration = i7699[0]
  i7698.loop = !!i7699[1]
  i7698.prewarm = !!i7699[2]
  i7698.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[3], i7698.startDelay)
  i7698.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[4], i7698.startLifetime)
  i7698.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[5], i7698.startSpeed)
  i7698.startSize3D = !!i7699[6]
  i7698.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[7], i7698.startSizeX)
  i7698.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[8], i7698.startSizeY)
  i7698.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[9], i7698.startSizeZ)
  i7698.startRotation3D = !!i7699[10]
  i7698.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[11], i7698.startRotationX)
  i7698.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[12], i7698.startRotationY)
  i7698.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[13], i7698.startRotationZ)
  i7698.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7699[14], i7698.startColor)
  i7698.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[15], i7698.gravityModifier)
  i7698.simulationSpace = i7699[16]
  request.r(i7699[17], i7699[18], 0, i7698, 'customSimulationSpace')
  i7698.simulationSpeed = i7699[19]
  i7698.useUnscaledTime = !!i7699[20]
  i7698.scalingMode = i7699[21]
  i7698.playOnAwake = !!i7699[22]
  i7698.maxParticles = i7699[23]
  i7698.emitterVelocityMode = i7699[24]
  i7698.stopAction = i7699[25]
  return i7698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7700 = root || new pc.MinMaxCurve()
  var i7701 = data
  i7700.mode = i7701[0]
  i7700.curveMin = new pc.AnimationCurve( { keys_flow: i7701[1] } )
  i7700.curveMax = new pc.AnimationCurve( { keys_flow: i7701[2] } )
  i7700.curveMultiplier = i7701[3]
  i7700.constantMin = i7701[4]
  i7700.constantMax = i7701[5]
  return i7700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7702 = root || new pc.MinMaxGradient()
  var i7703 = data
  i7702.mode = i7703[0]
  i7702.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7703[1], i7702.gradientMin)
  i7702.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7703[2], i7702.gradientMax)
  i7702.colorMin = new pc.Color(i7703[3], i7703[4], i7703[5], i7703[6])
  i7702.colorMax = new pc.Color(i7703[7], i7703[8], i7703[9], i7703[10])
  return i7702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7705 = data
  i7704.mode = i7705[0]
  var i7707 = i7705[1]
  var i7706 = []
  for(var i = 0; i < i7707.length; i += 1) {
    i7706.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7707[i + 0]) );
  }
  i7704.colorKeys = i7706
  var i7709 = i7705[2]
  var i7708 = []
  for(var i = 0; i < i7709.length; i += 1) {
    i7708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7709[i + 0]) );
  }
  i7704.alphaKeys = i7708
  return i7704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7713 = data
  i7712.color = new pc.Color(i7713[0], i7713[1], i7713[2], i7713[3])
  i7712.time = i7713[4]
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7717 = data
  i7716.alpha = i7717[0]
  i7716.time = i7717[1]
  return i7716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7718 = root || new pc.ParticleSystemColorBySpeed()
  var i7719 = data
  i7718.enabled = !!i7719[0]
  i7718.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7719[1], i7718.color)
  i7718.range = new pc.Vec2( i7719[2], i7719[3] )
  return i7718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7720 = root || new pc.ParticleSystemColorOverLifetime()
  var i7721 = data
  i7720.enabled = !!i7721[0]
  i7720.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7721[1], i7720.color)
  return i7720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7722 = root || new pc.ParticleSystemEmitter()
  var i7723 = data
  i7722.enabled = !!i7723[0]
  i7722.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[1], i7722.rateOverTime)
  i7722.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[2], i7722.rateOverDistance)
  var i7725 = i7723[3]
  var i7724 = []
  for(var i = 0; i < i7725.length; i += 1) {
    i7724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7725[i + 0]) );
  }
  i7722.bursts = i7724
  return i7722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7728 = root || new pc.ParticleSystemBurst()
  var i7729 = data
  i7728.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7729[0], i7728.count)
  i7728.cycleCount = i7729[1]
  i7728.minCount = i7729[2]
  i7728.maxCount = i7729[3]
  i7728.repeatInterval = i7729[4]
  i7728.time = i7729[5]
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7730 = root || new pc.ParticleSystemRotationBySpeed()
  var i7731 = data
  i7730.enabled = !!i7731[0]
  i7730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[1], i7730.x)
  i7730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[2], i7730.y)
  i7730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[3], i7730.z)
  i7730.separateAxes = !!i7731[4]
  i7730.range = new pc.Vec2( i7731[5], i7731[6] )
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7732 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7733 = data
  i7732.enabled = !!i7733[0]
  i7732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7733[1], i7732.x)
  i7732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7733[2], i7732.y)
  i7732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7733[3], i7732.z)
  i7732.separateAxes = !!i7733[4]
  return i7732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7734 = root || new pc.ParticleSystemShape()
  var i7735 = data
  i7734.enabled = !!i7735[0]
  i7734.shapeType = i7735[1]
  i7734.randomDirectionAmount = i7735[2]
  i7734.sphericalDirectionAmount = i7735[3]
  i7734.randomPositionAmount = i7735[4]
  i7734.alignToDirection = !!i7735[5]
  i7734.radius = i7735[6]
  i7734.radiusMode = i7735[7]
  i7734.radiusSpread = i7735[8]
  i7734.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7735[9], i7734.radiusSpeed)
  i7734.radiusThickness = i7735[10]
  i7734.angle = i7735[11]
  i7734.length = i7735[12]
  i7734.boxThickness = new pc.Vec3( i7735[13], i7735[14], i7735[15] )
  i7734.meshShapeType = i7735[16]
  request.r(i7735[17], i7735[18], 0, i7734, 'mesh')
  request.r(i7735[19], i7735[20], 0, i7734, 'meshRenderer')
  request.r(i7735[21], i7735[22], 0, i7734, 'skinnedMeshRenderer')
  i7734.useMeshMaterialIndex = !!i7735[23]
  i7734.meshMaterialIndex = i7735[24]
  i7734.useMeshColors = !!i7735[25]
  i7734.normalOffset = i7735[26]
  i7734.arc = i7735[27]
  i7734.arcMode = i7735[28]
  i7734.arcSpread = i7735[29]
  i7734.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7735[30], i7734.arcSpeed)
  i7734.donutRadius = i7735[31]
  i7734.position = new pc.Vec3( i7735[32], i7735[33], i7735[34] )
  i7734.rotation = new pc.Vec3( i7735[35], i7735[36], i7735[37] )
  i7734.scale = new pc.Vec3( i7735[38], i7735[39], i7735[40] )
  return i7734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7736 = root || new pc.ParticleSystemSizeBySpeed()
  var i7737 = data
  i7736.enabled = !!i7737[0]
  i7736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7737[1], i7736.x)
  i7736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7737[2], i7736.y)
  i7736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7737[3], i7736.z)
  i7736.separateAxes = !!i7737[4]
  i7736.range = new pc.Vec2( i7737[5], i7737[6] )
  return i7736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7738 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7739 = data
  i7738.enabled = !!i7739[0]
  i7738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7739[1], i7738.x)
  i7738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7739[2], i7738.y)
  i7738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7739[3], i7738.z)
  i7738.separateAxes = !!i7739[4]
  return i7738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7740 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7741 = data
  i7740.enabled = !!i7741[0]
  i7740.mode = i7741[1]
  i7740.animation = i7741[2]
  i7740.numTilesX = i7741[3]
  i7740.numTilesY = i7741[4]
  i7740.useRandomRow = !!i7741[5]
  i7740.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7741[6], i7740.frameOverTime)
  i7740.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7741[7], i7740.startFrame)
  i7740.cycleCount = i7741[8]
  i7740.rowIndex = i7741[9]
  i7740.flipU = i7741[10]
  i7740.flipV = i7741[11]
  i7740.spriteCount = i7741[12]
  var i7743 = i7741[13]
  var i7742 = []
  for(var i = 0; i < i7743.length; i += 2) {
  request.r(i7743[i + 0], i7743[i + 1], 2, i7742, '')
  }
  i7740.sprites = i7742
  return i7740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7744 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7745 = data
  i7744.enabled = !!i7745[0]
  i7744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[1], i7744.x)
  i7744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[2], i7744.y)
  i7744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[3], i7744.z)
  i7744.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[4], i7744.radial)
  i7744.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[5], i7744.speedModifier)
  i7744.space = i7745[6]
  i7744.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[7], i7744.orbitalX)
  i7744.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[8], i7744.orbitalY)
  i7744.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[9], i7744.orbitalZ)
  i7744.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[10], i7744.orbitalOffsetX)
  i7744.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[11], i7744.orbitalOffsetY)
  i7744.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7745[12], i7744.orbitalOffsetZ)
  return i7744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7746 = root || new pc.ParticleSystemNoise()
  var i7747 = data
  i7746.enabled = !!i7747[0]
  i7746.separateAxes = !!i7747[1]
  i7746.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[2], i7746.strengthX)
  i7746.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[3], i7746.strengthY)
  i7746.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[4], i7746.strengthZ)
  i7746.frequency = i7747[5]
  i7746.damping = !!i7747[6]
  i7746.octaveCount = i7747[7]
  i7746.octaveMultiplier = i7747[8]
  i7746.octaveScale = i7747[9]
  i7746.quality = i7747[10]
  i7746.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[11], i7746.scrollSpeed)
  i7746.scrollSpeedMultiplier = i7747[12]
  i7746.remapEnabled = !!i7747[13]
  i7746.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[14], i7746.remapX)
  i7746.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[15], i7746.remapY)
  i7746.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[16], i7746.remapZ)
  i7746.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[17], i7746.positionAmount)
  i7746.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[18], i7746.rotationAmount)
  i7746.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7747[19], i7746.sizeAmount)
  return i7746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7748 = root || new pc.ParticleSystemInheritVelocity()
  var i7749 = data
  i7748.enabled = !!i7749[0]
  i7748.mode = i7749[1]
  i7748.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7749[2], i7748.curve)
  return i7748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7750 = root || new pc.ParticleSystemForceOverLifetime()
  var i7751 = data
  i7750.enabled = !!i7751[0]
  i7750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7751[1], i7750.x)
  i7750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7751[2], i7750.y)
  i7750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7751[3], i7750.z)
  i7750.space = i7751[4]
  i7750.randomized = !!i7751[5]
  return i7750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7752 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7753 = data
  i7752.enabled = !!i7753[0]
  i7752.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7753[1], i7752.limit)
  i7752.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7753[2], i7752.limitX)
  i7752.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7753[3], i7752.limitY)
  i7752.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7753[4], i7752.limitZ)
  i7752.dampen = i7753[5]
  i7752.separateAxes = !!i7753[6]
  i7752.space = i7753[7]
  i7752.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7753[8], i7752.drag)
  i7752.multiplyDragByParticleSize = !!i7753[9]
  i7752.multiplyDragByParticleVelocity = !!i7753[10]
  return i7752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7755 = data
  request.r(i7755[0], i7755[1], 0, i7754, 'mesh')
  i7754.meshCount = i7755[2]
  i7754.activeVertexStreamsCount = i7755[3]
  i7754.alignment = i7755[4]
  i7754.renderMode = i7755[5]
  i7754.sortMode = i7755[6]
  i7754.lengthScale = i7755[7]
  i7754.velocityScale = i7755[8]
  i7754.cameraVelocityScale = i7755[9]
  i7754.normalDirection = i7755[10]
  i7754.sortingFudge = i7755[11]
  i7754.minParticleSize = i7755[12]
  i7754.maxParticleSize = i7755[13]
  i7754.pivot = new pc.Vec3( i7755[14], i7755[15], i7755[16] )
  request.r(i7755[17], i7755[18], 0, i7754, 'trailMaterial')
  i7754.applyActiveColorSpace = !!i7755[19]
  i7754.enabled = !!i7755[20]
  request.r(i7755[21], i7755[22], 0, i7754, 'sharedMaterial')
  var i7757 = i7755[23]
  var i7756 = []
  for(var i = 0; i < i7757.length; i += 2) {
  request.r(i7757[i + 0], i7757[i + 1], 2, i7756, '')
  }
  i7754.sharedMaterials = i7756
  i7754.receiveShadows = !!i7755[24]
  i7754.shadowCastingMode = i7755[25]
  i7754.sortingLayerID = i7755[26]
  i7754.sortingOrder = i7755[27]
  i7754.lightmapIndex = i7755[28]
  i7754.lightmapSceneIndex = i7755[29]
  i7754.lightmapScaleOffset = new pc.Vec4( i7755[30], i7755[31], i7755[32], i7755[33] )
  i7754.lightProbeUsage = i7755[34]
  i7754.reflectionProbeUsage = i7755[35]
  return i7754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7759 = data
  i7758.aspect = i7759[0]
  i7758.orthographic = !!i7759[1]
  i7758.orthographicSize = i7759[2]
  i7758.backgroundColor = new pc.Color(i7759[3], i7759[4], i7759[5], i7759[6])
  i7758.nearClipPlane = i7759[7]
  i7758.farClipPlane = i7759[8]
  i7758.fieldOfView = i7759[9]
  i7758.depth = i7759[10]
  i7758.clearFlags = i7759[11]
  i7758.cullingMask = i7759[12]
  i7758.rect = i7759[13]
  request.r(i7759[14], i7759[15], 0, i7758, 'targetTexture')
  i7758.usePhysicalProperties = !!i7759[16]
  i7758.focalLength = i7759[17]
  i7758.sensorSize = new pc.Vec2( i7759[18], i7759[19] )
  i7758.lensShift = new pc.Vec2( i7759[20], i7759[21] )
  i7758.gateFit = i7759[22]
  i7758.commandBufferCount = i7759[23]
  i7758.cameraType = i7759[24]
  i7758.enabled = !!i7759[25]
  return i7758
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i7760 = root || request.c( 'MaterialUVScroller' )
  var i7761 = data
  request.r(i7761[0], i7761[1], 0, i7760, 'targetMaterial')
  i7760.scrollSpeed = new pc.Vec2( i7761[2], i7761[3] )
  return i7760
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i7762 = root || request.c( 'ChoiceBoardPlacer' )
  var i7763 = data
  request.r(i7763[0], i7763[1], 0, i7762, 'choiceBoardHolderprefab')
  request.r(i7763[2], i7763[3], 0, i7762, 'startPos')
  request.r(i7763[4], i7763[5], 0, i7762, 'endPos')
  request.r(i7763[6], i7763[7], 0, i7762, 'choiceBoardPairData')
  i7762.spawnCount = i7763[8]
  i7762.spawnGenericByNumber = !!i7763[9]
  i7762.shufflePairsOrder = !!i7763[10]
  i7762.shuffleLeftRight = !!i7763[11]
  i7762.spawnOnStart = !!i7763[12]
  return i7762
}

Deserializers["BossController"] = function (request, data, root) {
  var i7764 = root || request.c( 'BossController' )
  var i7765 = data
  request.r(i7765[0], i7765[1], 0, i7764, 'bossSpriteRenderer')
  request.r(i7765[2], i7765[3], 0, i7764, 'characterVisual')
  request.r(i7765[4], i7765[5], 0, i7764, 'fightingCloud')
  request.r(i7765[6], i7765[7], 0, i7764, 'resultObject')
  request.r(i7765[8], i7765[9], 0, i7764, 'resultSpriteRenderer')
  request.r(i7765[10], i7765[11], 0, i7764, 'winSprite')
  request.r(i7765[12], i7765[13], 0, i7764, 'lossSprite')
  request.r(i7765[14], i7765[15], 0, i7764, 'extraWinObject')
  request.r(i7765[16], i7765[17], 0, i7764, 'winPanel')
  request.r(i7765[18], i7765[19], 0, i7764, 'losePanel')
  var i7767 = i7765[20]
  var i7766 = []
  for(var i = 0; i < i7767.length; i += 2) {
  request.r(i7767[i + 0], i7767[i + 1], 2, i7766, '')
  }
  i7764.extraObjectsToHide = i7766
  i7764.fightingCloudFx = i7765[21]
  i7764.winPanelFx = i7765[22]
  i7764.losePanelFx = i7765[23]
  i7764.delayAfterLastBoard = i7765[24]
  i7764.fightDuration = i7765[25]
  i7764.showResultDuration = i7765[26]
  i7764.currentPlayerLevel = i7765[27]
  return i7764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7771 = data
  i7770.ambientIntensity = i7771[0]
  i7770.reflectionIntensity = i7771[1]
  i7770.ambientMode = i7771[2]
  i7770.ambientLight = new pc.Color(i7771[3], i7771[4], i7771[5], i7771[6])
  i7770.ambientSkyColor = new pc.Color(i7771[7], i7771[8], i7771[9], i7771[10])
  i7770.ambientGroundColor = new pc.Color(i7771[11], i7771[12], i7771[13], i7771[14])
  i7770.ambientEquatorColor = new pc.Color(i7771[15], i7771[16], i7771[17], i7771[18])
  i7770.fogColor = new pc.Color(i7771[19], i7771[20], i7771[21], i7771[22])
  i7770.fogEndDistance = i7771[23]
  i7770.fogStartDistance = i7771[24]
  i7770.fogDensity = i7771[25]
  i7770.fog = !!i7771[26]
  request.r(i7771[27], i7771[28], 0, i7770, 'skybox')
  i7770.fogMode = i7771[29]
  var i7773 = i7771[30]
  var i7772 = []
  for(var i = 0; i < i7773.length; i += 1) {
    i7772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7773[i + 0]) );
  }
  i7770.lightmaps = i7772
  i7770.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7771[31], i7770.lightProbes)
  i7770.lightmapsMode = i7771[32]
  i7770.mixedBakeMode = i7771[33]
  i7770.environmentLightingMode = i7771[34]
  i7770.ambientProbe = new pc.SphericalHarmonicsL2(i7771[35])
  i7770.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7771[36])
  i7770.useReferenceAmbientProbe = !!i7771[37]
  request.r(i7771[38], i7771[39], 0, i7770, 'customReflection')
  request.r(i7771[40], i7771[41], 0, i7770, 'defaultReflection')
  i7770.defaultReflectionMode = i7771[42]
  i7770.defaultReflectionResolution = i7771[43]
  i7770.sunLightObjectId = i7771[44]
  i7770.pixelLightCount = i7771[45]
  i7770.defaultReflectionHDR = !!i7771[46]
  i7770.hasLightDataAsset = !!i7771[47]
  i7770.hasManualGenerate = !!i7771[48]
  return i7770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7777 = data
  request.r(i7777[0], i7777[1], 0, i7776, 'lightmapColor')
  request.r(i7777[2], i7777[3], 0, i7776, 'lightmapDirection')
  request.r(i7777[4], i7777[5], 0, i7776, 'shadowMask')
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7778 = root || new UnityEngine.LightProbes()
  var i7779 = data
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7787 = data
  var i7789 = i7787[0]
  var i7788 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7789.length; i += 1) {
    i7788.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7789[i + 0]));
  }
  i7786.ShaderCompilationErrors = i7788
  i7786.name = i7787[1]
  i7786.guid = i7787[2]
  var i7791 = i7787[3]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 1) {
    i7790.push( i7791[i + 0] );
  }
  i7786.shaderDefinedKeywords = i7790
  var i7793 = i7787[4]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 1) {
    i7792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7793[i + 0]) );
  }
  i7786.passes = i7792
  var i7795 = i7787[5]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 1) {
    i7794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7795[i + 0]) );
  }
  i7786.usePasses = i7794
  var i7797 = i7787[6]
  var i7796 = []
  for(var i = 0; i < i7797.length; i += 1) {
    i7796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7797[i + 0]) );
  }
  i7786.defaultParameterValues = i7796
  request.r(i7787[7], i7787[8], 0, i7786, 'unityFallbackShader')
  i7786.readDepth = !!i7787[9]
  i7786.hasDepthOnlyPass = !!i7787[10]
  i7786.isCreatedByShaderGraph = !!i7787[11]
  i7786.disableBatching = !!i7787[12]
  i7786.compiled = !!i7787[13]
  return i7786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7801 = data
  i7800.shaderName = i7801[0]
  i7800.errorMessage = i7801[1]
  return i7800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7806 = root || new pc.UnityShaderPass()
  var i7807 = data
  i7806.id = i7807[0]
  i7806.subShaderIndex = i7807[1]
  i7806.name = i7807[2]
  i7806.passType = i7807[3]
  i7806.grabPassTextureName = i7807[4]
  i7806.usePass = !!i7807[5]
  i7806.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[6], i7806.zTest)
  i7806.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[7], i7806.zWrite)
  i7806.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[8], i7806.culling)
  i7806.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7807[9], i7806.blending)
  i7806.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7807[10], i7806.alphaBlending)
  i7806.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[11], i7806.colorWriteMask)
  i7806.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[12], i7806.offsetUnits)
  i7806.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[13], i7806.offsetFactor)
  i7806.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[14], i7806.stencilRef)
  i7806.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[15], i7806.stencilReadMask)
  i7806.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7807[16], i7806.stencilWriteMask)
  i7806.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7807[17], i7806.stencilOp)
  i7806.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7807[18], i7806.stencilOpFront)
  i7806.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7807[19], i7806.stencilOpBack)
  var i7809 = i7807[20]
  var i7808 = []
  for(var i = 0; i < i7809.length; i += 1) {
    i7808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7809[i + 0]) );
  }
  i7806.tags = i7808
  var i7811 = i7807[21]
  var i7810 = []
  for(var i = 0; i < i7811.length; i += 1) {
    i7810.push( i7811[i + 0] );
  }
  i7806.passDefinedKeywords = i7810
  var i7813 = i7807[22]
  var i7812 = []
  for(var i = 0; i < i7813.length; i += 1) {
    i7812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7813[i + 0]) );
  }
  i7806.passDefinedKeywordGroups = i7812
  var i7815 = i7807[23]
  var i7814 = []
  for(var i = 0; i < i7815.length; i += 1) {
    i7814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7815[i + 0]) );
  }
  i7806.variants = i7814
  var i7817 = i7807[24]
  var i7816 = []
  for(var i = 0; i < i7817.length; i += 1) {
    i7816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7817[i + 0]) );
  }
  i7806.excludedVariants = i7816
  i7806.hasDepthReader = !!i7807[25]
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7819 = data
  i7818.val = i7819[0]
  i7818.name = i7819[1]
  return i7818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7821 = data
  i7820.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7821[0], i7820.src)
  i7820.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7821[1], i7820.dst)
  i7820.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7821[2], i7820.op)
  return i7820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7823 = data
  i7822.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7823[0], i7822.pass)
  i7822.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7823[1], i7822.fail)
  i7822.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7823[2], i7822.zFail)
  i7822.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7823[3], i7822.comp)
  return i7822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7827 = data
  i7826.name = i7827[0]
  i7826.value = i7827[1]
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7831 = data
  var i7833 = i7831[0]
  var i7832 = []
  for(var i = 0; i < i7833.length; i += 1) {
    i7832.push( i7833[i + 0] );
  }
  i7830.keywords = i7832
  i7830.hasDiscard = !!i7831[1]
  return i7830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7837 = data
  i7836.passId = i7837[0]
  i7836.subShaderIndex = i7837[1]
  var i7839 = i7837[2]
  var i7838 = []
  for(var i = 0; i < i7839.length; i += 1) {
    i7838.push( i7839[i + 0] );
  }
  i7836.keywords = i7838
  i7836.vertexProgram = i7837[3]
  i7836.fragmentProgram = i7837[4]
  i7836.exportedForWebGl2 = !!i7837[5]
  i7836.readDepth = !!i7837[6]
  return i7836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7843 = data
  request.r(i7843[0], i7843[1], 0, i7842, 'shader')
  i7842.pass = i7843[2]
  return i7842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7847 = data
  i7846.name = i7847[0]
  i7846.type = i7847[1]
  i7846.value = new pc.Vec4( i7847[2], i7847[3], i7847[4], i7847[5] )
  i7846.textureValue = i7847[6]
  i7846.shaderPropertyFlag = i7847[7]
  return i7846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7849 = data
  i7848.name = i7849[0]
  request.r(i7849[1], i7849[2], 0, i7848, 'texture')
  i7848.aabb = i7849[3]
  i7848.vertices = i7849[4]
  i7848.triangles = i7849[5]
  i7848.textureRect = UnityEngine.Rect.MinMaxRect(i7849[6], i7849[7], i7849[8], i7849[9])
  i7848.packedRect = UnityEngine.Rect.MinMaxRect(i7849[10], i7849[11], i7849[12], i7849[13])
  i7848.border = new pc.Vec4( i7849[14], i7849[15], i7849[16], i7849[17] )
  i7848.transparency = i7849[18]
  i7848.bounds = i7849[19]
  i7848.pixelsPerUnit = i7849[20]
  i7848.textureWidth = i7849[21]
  i7848.textureHeight = i7849[22]
  i7848.nativeSize = new pc.Vec2( i7849[23], i7849[24] )
  i7848.pivot = new pc.Vec2( i7849[25], i7849[26] )
  i7848.textureRectOffset = new pc.Vec2( i7849[27], i7849[28] )
  return i7848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7851 = data
  i7850.name = i7851[0]
  return i7850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7853 = data
  i7852.name = i7853[0]
  i7852.bytes64 = i7853[1]
  i7852.data = i7853[2]
  return i7852
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i7854 = root || request.c( 'ChoiceBoardPairData' )
  var i7855 = data
  var i7857 = i7855[0]
  var i7856 = []
  for(var i = 0; i < i7857.length; i += 1) {
    i7856.push( request.d('ChoicePairData', i7857[i + 0]) );
  }
  i7854.ChoicePairDatas = i7856
  return i7854
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i7860 = root || request.c( 'ChoicePairData' )
  var i7861 = data
  i7860.choiceData1 = request.d('ChoiceData', i7861[0], i7860.choiceData1)
  i7860.choiceData2 = request.d('ChoiceData', i7861[1], i7860.choiceData2)
  return i7860
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i7862 = root || request.c( 'ChoiceData' )
  var i7863 = data
  request.r(i7863[0], i7863[1], 0, i7862, 'VisualSprite')
  i7862.ChoiceType = i7863[2]
  return i7862
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7865 = data
  i7864.useSafeMode = !!i7865[0]
  i7864.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7865[1], i7864.safeModeOptions)
  i7864.timeScale = i7865[2]
  i7864.unscaledTimeScale = i7865[3]
  i7864.useSmoothDeltaTime = !!i7865[4]
  i7864.maxSmoothUnscaledTime = i7865[5]
  i7864.rewindCallbackMode = i7865[6]
  i7864.showUnityEditorReport = !!i7865[7]
  i7864.logBehaviour = i7865[8]
  i7864.drawGizmos = !!i7865[9]
  i7864.defaultRecyclable = !!i7865[10]
  i7864.defaultAutoPlay = i7865[11]
  i7864.defaultUpdateType = i7865[12]
  i7864.defaultTimeScaleIndependent = !!i7865[13]
  i7864.defaultEaseType = i7865[14]
  i7864.defaultEaseOvershootOrAmplitude = i7865[15]
  i7864.defaultEasePeriod = i7865[16]
  i7864.defaultAutoKill = !!i7865[17]
  i7864.defaultLoopType = i7865[18]
  i7864.debugMode = !!i7865[19]
  i7864.debugStoreTargetId = !!i7865[20]
  i7864.showPreviewPanel = !!i7865[21]
  i7864.storeSettingsLocation = i7865[22]
  i7864.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7865[23], i7864.modules)
  i7864.createASMDEF = !!i7865[24]
  i7864.showPlayingTweens = !!i7865[25]
  i7864.showPausedTweens = !!i7865[26]
  return i7864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7867 = data
  i7866.logBehaviour = i7867[0]
  i7866.nestedTweenFailureBehaviour = i7867[1]
  return i7866
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7869 = data
  i7868.showPanel = !!i7869[0]
  i7868.audioEnabled = !!i7869[1]
  i7868.physicsEnabled = !!i7869[2]
  i7868.physics2DEnabled = !!i7869[3]
  i7868.spriteEnabled = !!i7869[4]
  i7868.uiEnabled = !!i7869[5]
  i7868.uiToolkitEnabled = !!i7869[6]
  i7868.textMeshProEnabled = !!i7869[7]
  i7868.tk2DEnabled = !!i7869[8]
  i7868.deAudioEnabled = !!i7869[9]
  i7868.deUnityExtendedEnabled = !!i7869[10]
  i7868.epoOutlineEnabled = !!i7869[11]
  return i7868
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7870 = root || request.c( 'TMPro.TMP_Settings' )
  var i7871 = data
  i7870.assetVersion = i7871[0]
  i7870.m_TextWrappingMode = i7871[1]
  i7870.m_enableKerning = !!i7871[2]
  var i7873 = i7871[3]
  var i7872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7873.length; i += 1) {
    i7872.add(i7873[i + 0]);
  }
  i7870.m_ActiveFontFeatures = i7872
  i7870.m_enableExtraPadding = !!i7871[4]
  i7870.m_enableTintAllSprites = !!i7871[5]
  i7870.m_enableParseEscapeCharacters = !!i7871[6]
  i7870.m_EnableRaycastTarget = !!i7871[7]
  i7870.m_GetFontFeaturesAtRuntime = !!i7871[8]
  i7870.m_missingGlyphCharacter = i7871[9]
  i7870.m_ClearDynamicDataOnBuild = !!i7871[10]
  i7870.m_warningsDisabled = !!i7871[11]
  request.r(i7871[12], i7871[13], 0, i7870, 'm_defaultFontAsset')
  i7870.m_defaultFontAssetPath = i7871[14]
  i7870.m_defaultFontSize = i7871[15]
  i7870.m_defaultAutoSizeMinRatio = i7871[16]
  i7870.m_defaultAutoSizeMaxRatio = i7871[17]
  i7870.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7871[18], i7871[19] )
  i7870.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7871[20], i7871[21] )
  i7870.m_autoSizeTextContainer = !!i7871[22]
  i7870.m_IsTextObjectScaleStatic = !!i7871[23]
  var i7875 = i7871[24]
  var i7874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7875.length; i += 2) {
  request.r(i7875[i + 0], i7875[i + 1], 1, i7874, '')
  }
  i7870.m_fallbackFontAssets = i7874
  i7870.m_matchMaterialPreset = !!i7871[25]
  i7870.m_HideSubTextObjects = !!i7871[26]
  request.r(i7871[27], i7871[28], 0, i7870, 'm_defaultSpriteAsset')
  i7870.m_defaultSpriteAssetPath = i7871[29]
  i7870.m_enableEmojiSupport = !!i7871[30]
  i7870.m_MissingCharacterSpriteUnicode = i7871[31]
  var i7877 = i7871[32]
  var i7876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7877.length; i += 2) {
  request.r(i7877[i + 0], i7877[i + 1], 1, i7876, '')
  }
  i7870.m_EmojiFallbackTextAssets = i7876
  i7870.m_defaultColorGradientPresetsPath = i7871[33]
  request.r(i7871[34], i7871[35], 0, i7870, 'm_defaultStyleSheet')
  i7870.m_StyleSheetsResourcePath = i7871[36]
  request.r(i7871[37], i7871[38], 0, i7870, 'm_leadingCharacters')
  request.r(i7871[39], i7871[40], 0, i7870, 'm_followingCharacters')
  i7870.m_UseModernHangulLineBreakingRules = !!i7871[41]
  return i7870
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7884 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7885 = data
  request.r(i7885[0], i7885[1], 0, i7884, 'spriteSheet')
  var i7887 = i7885[2]
  var i7886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7887.length; i += 1) {
    i7886.add(request.d('TMPro.TMP_Sprite', i7887[i + 0]));
  }
  i7884.spriteInfoList = i7886
  var i7889 = i7885[3]
  var i7888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7889.length; i += 2) {
  request.r(i7889[i + 0], i7889[i + 1], 1, i7888, '')
  }
  i7884.fallbackSpriteAssets = i7888
  var i7891 = i7885[4]
  var i7890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7891.length; i += 1) {
    i7890.add(request.d('TMPro.TMP_SpriteCharacter', i7891[i + 0]));
  }
  i7884.m_SpriteCharacterTable = i7890
  var i7893 = i7885[5]
  var i7892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7893.length; i += 1) {
    i7892.add(request.d('TMPro.TMP_SpriteGlyph', i7893[i + 0]));
  }
  i7884.m_GlyphTable = i7892
  i7884.m_Version = i7885[6]
  i7884.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7885[7], i7884.m_FaceInfo)
  request.r(i7885[8], i7885[9], 0, i7884, 'm_Material')
  return i7884
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7896 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7897 = data
  i7896.name = i7897[0]
  i7896.hashCode = i7897[1]
  i7896.unicode = i7897[2]
  i7896.pivot = new pc.Vec2( i7897[3], i7897[4] )
  request.r(i7897[5], i7897[6], 0, i7896, 'sprite')
  i7896.id = i7897[7]
  i7896.x = i7897[8]
  i7896.y = i7897[9]
  i7896.width = i7897[10]
  i7896.height = i7897[11]
  i7896.xOffset = i7897[12]
  i7896.yOffset = i7897[13]
  i7896.xAdvance = i7897[14]
  i7896.scale = i7897[15]
  return i7896
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7902 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7903 = data
  i7902.m_Name = i7903[0]
  i7902.m_ElementType = i7903[1]
  i7902.m_Unicode = i7903[2]
  i7902.m_GlyphIndex = i7903[3]
  i7902.m_Scale = i7903[4]
  return i7902
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7906 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7907 = data
  request.r(i7907[0], i7907[1], 0, i7906, 'sprite')
  i7906.m_Index = i7907[2]
  i7906.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7907[3], i7906.m_Metrics)
  i7906.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7907[4], i7906.m_GlyphRect)
  i7906.m_Scale = i7907[5]
  i7906.m_AtlasIndex = i7907[6]
  i7906.m_ClassDefinitionType = i7907[7]
  return i7906
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7908 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7909 = data
  i7908.m_Width = i7909[0]
  i7908.m_Height = i7909[1]
  i7908.m_HorizontalBearingX = i7909[2]
  i7908.m_HorizontalBearingY = i7909[3]
  i7908.m_HorizontalAdvance = i7909[4]
  return i7908
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7910 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7911 = data
  i7910.m_X = i7911[0]
  i7910.m_Y = i7911[1]
  i7910.m_Width = i7911[2]
  i7910.m_Height = i7911[3]
  return i7910
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7912 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7913 = data
  i7912.m_FaceIndex = i7913[0]
  i7912.m_FamilyName = i7913[1]
  i7912.m_StyleName = i7913[2]
  i7912.m_PointSize = i7913[3]
  i7912.m_Scale = i7913[4]
  i7912.m_UnitsPerEM = i7913[5]
  i7912.m_LineHeight = i7913[6]
  i7912.m_AscentLine = i7913[7]
  i7912.m_CapLine = i7913[8]
  i7912.m_MeanLine = i7913[9]
  i7912.m_Baseline = i7913[10]
  i7912.m_DescentLine = i7913[11]
  i7912.m_SuperscriptOffset = i7913[12]
  i7912.m_SuperscriptSize = i7913[13]
  i7912.m_SubscriptOffset = i7913[14]
  i7912.m_SubscriptSize = i7913[15]
  i7912.m_UnderlineOffset = i7913[16]
  i7912.m_UnderlineThickness = i7913[17]
  i7912.m_StrikethroughOffset = i7913[18]
  i7912.m_StrikethroughThickness = i7913[19]
  i7912.m_TabWidth = i7913[20]
  return i7912
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7914 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7915 = data
  var i7917 = i7915[0]
  var i7916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7917.length; i += 1) {
    i7916.add(request.d('TMPro.TMP_Style', i7917[i + 0]));
  }
  i7914.m_StyleList = i7916
  return i7914
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7920 = root || request.c( 'TMPro.TMP_Style' )
  var i7921 = data
  i7920.m_Name = i7921[0]
  i7920.m_HashCode = i7921[1]
  i7920.m_OpeningDefinition = i7921[2]
  i7920.m_ClosingDefinition = i7921[3]
  i7920.m_OpeningTagArray = i7921[4]
  i7920.m_ClosingTagArray = i7921[5]
  return i7920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7923 = data
  var i7925 = i7923[0]
  var i7924 = []
  for(var i = 0; i < i7925.length; i += 1) {
    i7924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7925[i + 0]) );
  }
  i7922.files = i7924
  i7922.componentToPrefabIds = i7923[1]
  return i7922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7929 = data
  i7928.path = i7929[0]
  request.r(i7929[1], i7929[2], 0, i7928, 'unityObject')
  return i7928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7931 = data
  var i7933 = i7931[0]
  var i7932 = []
  for(var i = 0; i < i7933.length; i += 1) {
    i7932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7933[i + 0]) );
  }
  i7930.scriptsExecutionOrder = i7932
  var i7935 = i7931[1]
  var i7934 = []
  for(var i = 0; i < i7935.length; i += 1) {
    i7934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7935[i + 0]) );
  }
  i7930.sortingLayers = i7934
  var i7937 = i7931[2]
  var i7936 = []
  for(var i = 0; i < i7937.length; i += 1) {
    i7936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7937[i + 0]) );
  }
  i7930.cullingLayers = i7936
  i7930.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7931[3], i7930.timeSettings)
  i7930.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7931[4], i7930.physicsSettings)
  i7930.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7931[5], i7930.physics2DSettings)
  i7930.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7931[6], i7930.qualitySettings)
  i7930.enableRealtimeShadows = !!i7931[7]
  i7930.enableAutoInstancing = !!i7931[8]
  i7930.enableStaticBatching = !!i7931[9]
  i7930.enableDynamicBatching = !!i7931[10]
  i7930.lightmapEncodingQuality = i7931[11]
  i7930.desiredColorSpace = i7931[12]
  var i7939 = i7931[13]
  var i7938 = []
  for(var i = 0; i < i7939.length; i += 1) {
    i7938.push( i7939[i + 0] );
  }
  i7930.allTags = i7938
  return i7930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7943 = data
  i7942.name = i7943[0]
  i7942.value = i7943[1]
  return i7942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7947 = data
  i7946.id = i7947[0]
  i7946.name = i7947[1]
  i7946.value = i7947[2]
  return i7946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7951 = data
  i7950.id = i7951[0]
  i7950.name = i7951[1]
  return i7950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7953 = data
  i7952.fixedDeltaTime = i7953[0]
  i7952.maximumDeltaTime = i7953[1]
  i7952.timeScale = i7953[2]
  i7952.maximumParticleTimestep = i7953[3]
  return i7952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7955 = data
  i7954.gravity = new pc.Vec3( i7955[0], i7955[1], i7955[2] )
  i7954.defaultSolverIterations = i7955[3]
  i7954.bounceThreshold = i7955[4]
  i7954.autoSyncTransforms = !!i7955[5]
  i7954.autoSimulation = !!i7955[6]
  var i7957 = i7955[7]
  var i7956 = []
  for(var i = 0; i < i7957.length; i += 1) {
    i7956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7957[i + 0]) );
  }
  i7954.collisionMatrix = i7956
  return i7954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7961 = data
  i7960.enabled = !!i7961[0]
  i7960.layerId = i7961[1]
  i7960.otherLayerId = i7961[2]
  return i7960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7963 = data
  request.r(i7963[0], i7963[1], 0, i7962, 'material')
  i7962.gravity = new pc.Vec2( i7963[2], i7963[3] )
  i7962.positionIterations = i7963[4]
  i7962.velocityIterations = i7963[5]
  i7962.velocityThreshold = i7963[6]
  i7962.maxLinearCorrection = i7963[7]
  i7962.maxAngularCorrection = i7963[8]
  i7962.maxTranslationSpeed = i7963[9]
  i7962.maxRotationSpeed = i7963[10]
  i7962.baumgarteScale = i7963[11]
  i7962.baumgarteTOIScale = i7963[12]
  i7962.timeToSleep = i7963[13]
  i7962.linearSleepTolerance = i7963[14]
  i7962.angularSleepTolerance = i7963[15]
  i7962.defaultContactOffset = i7963[16]
  i7962.autoSimulation = !!i7963[17]
  i7962.queriesHitTriggers = !!i7963[18]
  i7962.queriesStartInColliders = !!i7963[19]
  i7962.callbacksOnDisable = !!i7963[20]
  i7962.reuseCollisionCallbacks = !!i7963[21]
  i7962.autoSyncTransforms = !!i7963[22]
  var i7965 = i7963[23]
  var i7964 = []
  for(var i = 0; i < i7965.length; i += 1) {
    i7964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7965[i + 0]) );
  }
  i7962.collisionMatrix = i7964
  return i7962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7969 = data
  i7968.enabled = !!i7969[0]
  i7968.layerId = i7969[1]
  i7968.otherLayerId = i7969[2]
  return i7968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7971 = data
  var i7973 = i7971[0]
  var i7972 = []
  for(var i = 0; i < i7973.length; i += 1) {
    i7972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7973[i + 0]) );
  }
  i7970.qualityLevels = i7972
  var i7975 = i7971[1]
  var i7974 = []
  for(var i = 0; i < i7975.length; i += 1) {
    i7974.push( i7975[i + 0] );
  }
  i7970.names = i7974
  i7970.shadows = i7971[2]
  i7970.anisotropicFiltering = i7971[3]
  i7970.antiAliasing = i7971[4]
  i7970.lodBias = i7971[5]
  i7970.shadowCascades = i7971[6]
  i7970.shadowDistance = i7971[7]
  i7970.shadowmaskMode = i7971[8]
  i7970.shadowProjection = i7971[9]
  i7970.shadowResolution = i7971[10]
  i7970.softParticles = !!i7971[11]
  i7970.softVegetation = !!i7971[12]
  i7970.activeColorSpace = i7971[13]
  i7970.desiredColorSpace = i7971[14]
  i7970.masterTextureLimit = i7971[15]
  i7970.maxQueuedFrames = i7971[16]
  i7970.particleRaycastBudget = i7971[17]
  i7970.pixelLightCount = i7971[18]
  i7970.realtimeReflectionProbes = !!i7971[19]
  i7970.shadowCascade2Split = i7971[20]
  i7970.shadowCascade4Split = new pc.Vec3( i7971[21], i7971[22], i7971[23] )
  i7970.streamingMipmapsActive = !!i7971[24]
  i7970.vSyncCount = i7971[25]
  i7970.asyncUploadBufferSize = i7971[26]
  i7970.asyncUploadTimeSlice = i7971[27]
  i7970.billboardsFaceCameraPosition = !!i7971[28]
  i7970.shadowNearPlaneOffset = i7971[29]
  i7970.streamingMipmapsMemoryBudget = i7971[30]
  i7970.maximumLODLevel = i7971[31]
  i7970.streamingMipmapsAddAllCameras = !!i7971[32]
  i7970.streamingMipmapsMaxLevelReduction = i7971[33]
  i7970.streamingMipmapsRenderersPerFrame = i7971[34]
  i7970.resolutionScalingFixedDPIFactor = i7971[35]
  i7970.streamingMipmapsMaxFileIORequests = i7971[36]
  i7970.currentQualityLevel = i7971[37]
  return i7970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7981 = data
  i7980.weight = i7981[0]
  i7980.vertices = i7981[1]
  i7980.normals = i7981[2]
  i7980.tangents = i7981[3]
  return i7980
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7982 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7983 = data
  request.r(i7983[0], i7983[1], 0, i7982, 'm_ObjectArgument')
  i7982.m_ObjectArgumentAssemblyTypeName = i7983[2]
  i7982.m_IntArgument = i7983[3]
  i7982.m_FloatArgument = i7983[4]
  i7982.m_StringArgument = i7983[5]
  i7982.m_BoolArgument = !!i7983[6]
  return i7982
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[45],"68":[43],"69":[43],"70":[43],"71":[43],"72":[43],"73":[43],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[45],"89":[33],"90":[91],"92":[91],"12":[11],"93":[29],"94":[12],"95":[11],"96":[33,11],"97":[11,16],"98":[11],"99":[16,11],"100":[33],"101":[16,11],"102":[11],"103":[104],"105":[104],"106":[104],"107":[11],"108":[11],"15":[12],"17":[16,11],"109":[11],"14":[12],"110":[11],"111":[11],"18":[11],"112":[11],"113":[11],"114":[11],"115":[11],"116":[11],"117":[11],"27":[16,11],"118":[11],"119":[11],"120":[11],"21":[11],"121":[16,11],"122":[11],"123":[29],"124":[29],"30":[29],"125":[29],"126":[45],"127":[45]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.HorizontalLayoutGroup","UICheckBoxHolder","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","GameManager","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayerController","UnityEngine.ParticleSystem","PlayerVisual","UnityEngine.Rigidbody","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPlacer","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1828";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4384";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

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

Deserializers.buildID = "1ad9527f-3533-4eb1-acac-87e3bee43f0b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

