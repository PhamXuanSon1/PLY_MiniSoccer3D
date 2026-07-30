var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointSpring' )
  var i487 = data
  i486.spring = i487[0]
  i486.damper = i487[1]
  i486.targetPosition = i487[2]
  return i486
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor' )
  var i489 = data
  i488.m_TargetVelocity = i489[0]
  i488.m_Force = i489[1]
  i488.m_FreeSpin = i489[2]
  return i488
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointLimits' )
  var i491 = data
  i490.m_Min = i491[0]
  i490.m_Max = i491[1]
  i490.m_Bounciness = i491[2]
  i490.m_BounceMinVelocity = i491[3]
  i490.m_ContactDistance = i491[4]
  i490.minBounce = i491[5]
  i490.maxBounce = i491[6]
  return i490
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointDrive' )
  var i493 = data
  i492.m_PositionSpring = i493[0]
  i492.m_PositionDamper = i493[1]
  i492.m_MaximumForce = i493[2]
  i492.m_UseAcceleration = i493[3]
  return i492
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i495 = data
  i494.m_Spring = i495[0]
  i494.m_Damper = i495[1]
  return i494
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i497 = data
  i496.m_Limit = i497[0]
  i496.m_Bounciness = i497[1]
  i496.m_ContactDistance = i497[2]
  return i496
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i499 = data
  i498.m_ExtremumSlip = i499[0]
  i498.m_ExtremumValue = i499[1]
  i498.m_AsymptoteSlip = i499[2]
  i498.m_AsymptoteValue = i499[3]
  i498.m_Stiffness = i499[4]
  return i498
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i501 = data
  i500.m_LowerAngle = i501[0]
  i500.m_UpperAngle = i501[1]
  return i500
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i503 = data
  i502.m_MotorSpeed = i503[0]
  i502.m_MaximumMotorTorque = i503[1]
  return i502
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i505 = data
  i504.m_DampingRatio = i505[0]
  i504.m_Frequency = i505[1]
  i504.m_Angle = i505[2]
  return i504
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i507 = data
  i506.m_LowerTranslation = i507[0]
  i506.m_UpperTranslation = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i509 = data
  i508.name = i509[0]
  i508.width = i509[1]
  i508.height = i509[2]
  i508.mipmapCount = i509[3]
  i508.anisoLevel = i509[4]
  i508.filterMode = i509[5]
  i508.hdr = !!i509[6]
  i508.format = i509[7]
  i508.wrapMode = i509[8]
  i508.alphaIsTransparency = !!i509[9]
  i508.alphaSource = i509[10]
  i508.graphicsFormat = i509[11]
  i508.sRGBTexture = !!i509[12]
  i508.desiredColorSpace = i509[13]
  i508.wrapU = i509[14]
  i508.wrapV = i509[15]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i511 = data
  i510.name = i511[0]
  i510.halfPrecision = !!i511[1]
  i510.useSimplification = !!i511[2]
  i510.useUInt32IndexFormat = !!i511[3]
  i510.vertexCount = i511[4]
  i510.aabb = i511[5]
  var i513 = i511[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( !!i513[i + 0] );
  }
  i510.streams = i512
  i510.vertices = i511[7]
  var i515 = i511[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i515[i + 0]) );
  }
  i510.subMeshes = i514
  var i517 = i511[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 16) {
    i516.push( new pc.Mat4().setData(i517[i + 0], i517[i + 1], i517[i + 2], i517[i + 3],  i517[i + 4], i517[i + 5], i517[i + 6], i517[i + 7],  i517[i + 8], i517[i + 9], i517[i + 10], i517[i + 11],  i517[i + 12], i517[i + 13], i517[i + 14], i517[i + 15]) );
  }
  i510.bindposes = i516
  var i519 = i511[10]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i519[i + 0]) );
  }
  i510.blendShapes = i518
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i525 = data
  i524.triangles = i525[0]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i531 = data
  i530.name = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i533[i + 0]) );
  }
  i530.frames = i532
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i534 = root || new pc.UnityMaterial()
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'shader')
  i534.renderQueue = i535[3]
  i534.enableInstancing = !!i535[4]
  var i537 = i535[5]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i537[i + 0]) );
  }
  i534.floatParameters = i536
  var i539 = i535[6]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i539[i + 0]) );
  }
  i534.colorParameters = i538
  var i541 = i535[7]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i541[i + 0]) );
  }
  i534.vectorParameters = i540
  var i543 = i535[8]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i543[i + 0]) );
  }
  i534.textureParameters = i542
  var i545 = i535[9]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i545[i + 0]) );
  }
  i534.materialFlags = i544
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = new pc.Color(i553[1], i553[2], i553[3], i553[4])
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = new pc.Vec4( i557[1], i557[2], i557[3], i557[4] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i561 = data
  i560.name = i561[0]
  request.r(i561[1], i561[2], 0, i560, 'value')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i565 = data
  i564.name = i565[0]
  i564.enabled = !!i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i567 = data
  i566.position = new pc.Vec3( i567[0], i567[1], i567[2] )
  i566.scale = new pc.Vec3( i567[3], i567[4], i567[5] )
  i566.rotation = new pc.Quat(i567[6], i567[7], i567[8], i567[9])
  return i566
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i568 = root || request.c( 'ChoiceBoardHolder' )
  var i569 = data
  var i571 = i569[0]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.choiceBoards = i570
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i575 = data
  i574.center = new pc.Vec3( i575[0], i575[1], i575[2] )
  i574.size = new pc.Vec3( i575[3], i575[4], i575[5] )
  i574.enabled = !!i575[6]
  i574.isTrigger = !!i575[7]
  request.r(i575[8], i575[9], 0, i574, 'material')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i577 = data
  i576.color = new pc.Color(i577[0], i577[1], i577[2], i577[3])
  request.r(i577[4], i577[5], 0, i576, 'sprite')
  i576.flipX = !!i577[6]
  i576.flipY = !!i577[7]
  i576.drawMode = i577[8]
  i576.size = new pc.Vec2( i577[9], i577[10] )
  i576.tileMode = i577[11]
  i576.adaptiveModeThreshold = i577[12]
  i576.maskInteraction = i577[13]
  i576.spriteSortPoint = i577[14]
  i576.enabled = !!i577[15]
  request.r(i577[16], i577[17], 0, i576, 'sharedMaterial')
  var i579 = i577[18]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.sharedMaterials = i578
  i576.receiveShadows = !!i577[19]
  i576.shadowCastingMode = i577[20]
  i576.sortingLayerID = i577[21]
  i576.sortingOrder = i577[22]
  i576.lightmapIndex = i577[23]
  i576.lightmapSceneIndex = i577[24]
  i576.lightmapScaleOffset = new pc.Vec4( i577[25], i577[26], i577[27], i577[28] )
  i576.lightProbeUsage = i577[29]
  i576.reflectionProbeUsage = i577[30]
  return i576
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i582 = root || request.c( 'ChoiceBoard' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'spriteRenderer')
  request.r(i583[2], i583[3], 0, i582, 'borderRenderer')
  i582.choiceBoardType = i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i585 = data
  i584.name = i585[0]
  i584.tagId = i585[1]
  i584.enabled = !!i585[2]
  i584.isStatic = !!i585[3]
  i584.layer = i585[4]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i587 = data
  i586.name = i587[0]
  i586.atlasId = i587[1]
  i586.mipmapCount = i587[2]
  i586.hdr = !!i587[3]
  i586.size = i587[4]
  i586.anisoLevel = i587[5]
  i586.filterMode = i587[6]
  var i589 = i587[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 4) {
    i588.push( UnityEngine.Rect.MinMaxRect(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3]) );
  }
  i586.rects = i588
  i586.wrapU = i587[8]
  i586.wrapV = i587[9]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i593 = data
  i592.name = i593[0]
  i592.index = i593[1]
  i592.startup = !!i593[2]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i595 = data
  i594.type = i595[0]
  i594.color = new pc.Color(i595[1], i595[2], i595[3], i595[4])
  i594.cullingMask = i595[5]
  i594.intensity = i595[6]
  i594.range = i595[7]
  i594.spotAngle = i595[8]
  i594.shadows = i595[9]
  i594.shadowNormalBias = i595[10]
  i594.shadowBias = i595[11]
  i594.shadowStrength = i595[12]
  i594.shadowResolution = i595[13]
  i594.lightmapBakeType = i595[14]
  i594.renderMode = i595[15]
  request.r(i595[16], i595[17], 0, i594, 'cookie')
  i594.cookieSize = i595[18]
  i594.shadowNearPlane = i595[19]
  i594.occlusionMaskChannel = i595[20]
  i594.enabled = !!i595[21]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i597 = data
  i596.pivot = new pc.Vec2( i597[0], i597[1] )
  i596.anchorMin = new pc.Vec2( i597[2], i597[3] )
  i596.anchorMax = new pc.Vec2( i597[4], i597[5] )
  i596.sizeDelta = new pc.Vec2( i597[6], i597[7] )
  i596.anchoredPosition3D = new pc.Vec3( i597[8], i597[9], i597[10] )
  i596.rotation = new pc.Quat(i597[11], i597[12], i597[13], i597[14])
  i596.scale = new pc.Vec3( i597[15], i597[16], i597[17] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i599 = data
  i598.planeDistance = i599[0]
  i598.referencePixelsPerUnit = i599[1]
  i598.isFallbackOverlay = !!i599[2]
  i598.renderMode = i599[3]
  i598.renderOrder = i599[4]
  i598.sortingLayerName = i599[5]
  i598.sortingOrder = i599[6]
  i598.scaleFactor = i599[7]
  request.r(i599[8], i599[9], 0, i598, 'worldCamera')
  i598.overrideSorting = !!i599[10]
  i598.pixelPerfect = !!i599[11]
  i598.targetDisplay = i599[12]
  i598.overridePixelPerfect = !!i599[13]
  i598.enabled = !!i599[14]
  return i598
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i601 = data
  i600.m_UiScaleMode = i601[0]
  i600.m_ReferencePixelsPerUnit = i601[1]
  i600.m_ScaleFactor = i601[2]
  i600.m_ReferenceResolution = new pc.Vec2( i601[3], i601[4] )
  i600.m_ScreenMatchMode = i601[5]
  i600.m_MatchWidthOrHeight = i601[6]
  i600.m_PhysicalUnit = i601[7]
  i600.m_FallbackScreenDPI = i601[8]
  i600.m_DefaultSpriteDPI = i601[9]
  i600.m_DynamicPixelsPerUnit = i601[10]
  i600.m_PresetInfoIsWorld = !!i601[11]
  return i600
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i603 = data
  i602.m_IgnoreReversedGraphics = !!i603[0]
  i602.m_BlockingObjects = i603[1]
  i602.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i603[2] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i605 = data
  i604.cullTransparentMesh = !!i605[0]
  return i604
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Image' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_Sprite')
  i606.m_Type = i607[2]
  i606.m_PreserveAspect = !!i607[3]
  i606.m_FillCenter = !!i607[4]
  i606.m_FillMethod = i607[5]
  i606.m_FillAmount = i607[6]
  i606.m_FillClockwise = !!i607[7]
  i606.m_FillOrigin = i607[8]
  i606.m_UseSpriteMesh = !!i607[9]
  i606.m_PixelsPerUnitMultiplier = i607[10]
  request.r(i607[11], i607[12], 0, i606, 'm_Material')
  i606.m_Maskable = !!i607[13]
  i606.m_Color = new pc.Color(i607[14], i607[15], i607[16], i607[17])
  i606.m_RaycastTarget = !!i607[18]
  i606.m_RaycastPadding = new pc.Vec4( i607[19], i607[20], i607[21], i607[22] )
  return i606
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i609 = data
  i608.m_Spacing = i609[0]
  i608.m_ChildForceExpandWidth = !!i609[1]
  i608.m_ChildForceExpandHeight = !!i609[2]
  i608.m_ChildControlWidth = !!i609[3]
  i608.m_ChildControlHeight = !!i609[4]
  i608.m_ChildScaleWidth = !!i609[5]
  i608.m_ChildScaleHeight = !!i609[6]
  i608.m_ReverseArrangement = !!i609[7]
  i608.m_Padding = UnityEngine.RectOffset.FromPaddings(i609[8], i609[9], i609[10], i609[11])
  i608.m_ChildAlignment = i609[12]
  return i608
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i610 = root || request.c( 'UICheckBoxHolder' )
  var i611 = data
  var i613 = i611[0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.uICheckBoxes = i612
  return i610
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i616 = root || request.c( 'UICheckBox' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'iconImg')
  request.r(i617[2], i617[3], 0, i616, 'startingSprite')
  return i616
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Slider' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_FillRect')
  request.r(i619[2], i619[3], 0, i618, 'm_HandleRect')
  i618.m_Direction = i619[4]
  i618.m_MinValue = i619[5]
  i618.m_MaxValue = i619[6]
  i618.m_WholeNumbers = !!i619[7]
  i618.m_Value = i619[8]
  i618.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i619[9], i618.m_OnValueChanged)
  i618.m_Navigation = request.d('UnityEngine.UI.Navigation', i619[10], i618.m_Navigation)
  i618.m_Transition = i619[11]
  i618.m_Colors = request.d('UnityEngine.UI.ColorBlock', i619[12], i618.m_Colors)
  i618.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i619[13], i618.m_SpriteState)
  i618.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i619[14], i618.m_AnimationTriggers)
  i618.m_Interactable = !!i619[15]
  request.r(i619[16], i619[17], 0, i618, 'm_TargetGraphic')
  return i618
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i621 = data
  i620.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i621[0], i620.m_PersistentCalls)
  return i620
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i623 = data
  var i625 = i623[0]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('UnityEngine.Events.PersistentCall', i625[i + 0]));
  }
  i622.m_Calls = i624
  return i622
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Target')
  i628.m_TargetAssemblyTypeName = i629[2]
  i628.m_MethodName = i629[3]
  i628.m_Mode = i629[4]
  i628.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i629[5], i628.m_Arguments)
  i628.m_CallState = i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i631 = data
  i630.m_Mode = i631[0]
  i630.m_WrapAround = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_SelectOnUp')
  request.r(i631[4], i631[5], 0, i630, 'm_SelectOnDown')
  request.r(i631[6], i631[7], 0, i630, 'm_SelectOnLeft')
  request.r(i631[8], i631[9], 0, i630, 'm_SelectOnRight')
  return i630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i633 = data
  i632.m_NormalColor = new pc.Color(i633[0], i633[1], i633[2], i633[3])
  i632.m_HighlightedColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.m_PressedColor = new pc.Color(i633[8], i633[9], i633[10], i633[11])
  i632.m_SelectedColor = new pc.Color(i633[12], i633[13], i633[14], i633[15])
  i632.m_DisabledColor = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  i632.m_ColorMultiplier = i633[20]
  i632.m_FadeDuration = i633[21]
  return i632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_HighlightedSprite')
  request.r(i635[2], i635[3], 0, i634, 'm_PressedSprite')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectedSprite')
  request.r(i635[6], i635[7], 0, i634, 'm_DisabledSprite')
  return i634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i637 = data
  i636.m_NormalTrigger = i637[0]
  i636.m_HighlightedTrigger = i637[1]
  i636.m_PressedTrigger = i637[2]
  i636.m_SelectedTrigger = i637[3]
  i636.m_DisabledTrigger = i637[4]
  return i636
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i638 = root || request.c( 'UIProgressBar' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'fillImage')
  request.r(i639[2], i639[3], 0, i638, 'fillBackground')
  return i638
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i640 = root || request.c( 'UITutorial' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'tutorialUIHolder')
  return i640
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i642 = root || request.c( 'UIGuidingMove' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'target')
  i642.startPosition = new pc.Vec2( i643[2], i643[3] )
  i642.endPosition = new pc.Vec2( i643[4], i643[5] )
  i642.duration = i643[6]
  i642.ease = i643[7]
  i642.resetToStartOnComplete = !!i643[8]
  i642.loop = !!i643[9]
  i642.loopCount = i643[10]
  i642.loopType = i643[11]
  return i642
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i644 = root || request.c( 'UIPulse' )
  var i645 = data
  i644.targetScale = new pc.Vec3( i645[0], i645[1], i645[2] )
  i644.duration = i645[3]
  i644.ease = i645[4]
  return i644
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_Texture')
  i646.m_UVRect = UnityEngine.Rect.MinMaxRect(i647[2], i647[3], i647[4], i647[5])
  request.r(i647[6], i647[7], 0, i646, 'm_Material')
  i646.m_Maskable = !!i647[8]
  i646.m_Color = new pc.Color(i647[9], i647[10], i647[11], i647[12])
  i646.m_RaycastTarget = !!i647[13]
  i646.m_RaycastPadding = new pc.Vec4( i647[14], i647[15], i647[16], i647[17] )
  return i646
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i648 = root || request.c( 'ImageScroller' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'rawImage')
  i648.moveVector = new pc.Vec2( i649[2], i649[3] )
  return i648
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_FirstSelected')
  i650.m_sendNavigationEvents = !!i651[2]
  i650.m_DragThreshold = i651[3]
  return i650
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i653 = data
  i652.m_HorizontalAxis = i653[0]
  i652.m_VerticalAxis = i653[1]
  i652.m_SubmitButton = i653[2]
  i652.m_CancelButton = i653[3]
  i652.m_InputActionsPerSecond = i653[4]
  i652.m_RepeatDelay = i653[5]
  i652.m_ForceModuleActive = !!i653[6]
  i652.m_SendPointerHoverToParent = !!i653[7]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'sharedMesh')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'additionalVertexStreams')
  i656.enabled = !!i657[2]
  request.r(i657[3], i657[4], 0, i656, 'sharedMaterial')
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.sharedMaterials = i658
  i656.receiveShadows = !!i657[6]
  i656.shadowCastingMode = i657[7]
  i656.sortingLayerID = i657[8]
  i656.sortingOrder = i657[9]
  i656.lightmapIndex = i657[10]
  i656.lightmapSceneIndex = i657[11]
  i656.lightmapScaleOffset = new pc.Vec4( i657[12], i657[13], i657[14], i657[15] )
  i656.lightProbeUsage = i657[16]
  i656.reflectionProbeUsage = i657[17]
  return i656
}

Deserializers["GameManager"] = function (request, data, root) {
  var i660 = root || request.c( 'GameManager' )
  var i661 = data
  i660.maxLevel = i661[0]
  i660.winLevel = i661[1]
  i660.totalMoveTime = i661[2]
  i660.currentPlayerLevel = i661[3]
  return i660
}

Deserializers["InputManager"] = function (request, data, root) {
  var i662 = root || request.c( 'InputManager' )
  var i663 = data
  i662.minimumSwipeDistance = i663[0]
  return i662
}

Deserializers["UIManager"] = function (request, data, root) {
  var i664 = root || request.c( 'UIManager' )
  var i665 = data
  return i664
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i666 = root || request.c( 'Ply_SoundManager' )
  var i667 = data
  i666.audioClips = request.d('FxAudio', i667[0], i666.audioClips)
  request.r(i667[1], i667[2], 0, i666, 'sound')
  i666.enableSound = !!i667[3]
  i666.bgmVolume = i667[4]
  return i666
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i668 = root || request.c( 'FxAudio' )
  var i669 = data
  i668.Clock = request.d('SoundData', i669[0], i668.Clock)
  i668.PlayerWin = request.d('SoundData', i669[1], i668.PlayerWin)
  i668.PlayerLoose = request.d('SoundData', i669[2], i668.PlayerLoose)
  i668.RightChoice = request.d('SoundData', i669[3], i668.RightChoice)
  i668.WrongChoice = request.d('SoundData', i669[4], i668.WrongChoice)
  i668.MaxLevel = request.d('SoundData', i669[5], i668.MaxLevel)
  i668.FightingCloud = request.d('SoundData', i669[6], i668.FightingCloud)
  return i668
}

Deserializers["SoundData"] = function (request, data, root) {
  var i670 = root || request.c( 'SoundData' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'clip')
  i670.volume = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'clip')
  request.r(i673[2], i673[3], 0, i672, 'outputAudioMixerGroup')
  i672.playOnAwake = !!i673[4]
  i672.loop = !!i673[5]
  i672.time = i673[6]
  i672.volume = i673[7]
  i672.pitch = i673[8]
  i672.enabled = !!i673[9]
  return i672
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i674 = root || request.c( 'PlayerController' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'endPos')
  i674.switchTrackTime = i675[2]
  request.r(i675[3], i675[4], 0, i674, 'trackRightTransform')
  request.r(i675[5], i675[6], 0, i674, 'trackLeftTransform')
  i674.startRight = !!i675[7]
  request.r(i675[8], i675[9], 0, i674, 'playerTransform')
  request.r(i675[10], i675[11], 0, i674, 'playerVisual')
  request.r(i675[12], i675[13], 0, i674, 'winPar')
  i674.currentLevel = i675[14]
  i674.dragSmoothSpeed = i675[15]
  i674.moveCurve = new pc.AnimationCurve( { keys_flow: i675[16] } )
  return i674
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i676 = root || request.c( 'PlayerVisual' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'playerSpriteRenderer')
  request.r(i677[2], i677[3], 0, i676, 'fakeShadowRenderer')
  var i679 = i677[4]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.levelSprite = i678
  request.r(i677[5], i677[6], 0, i676, 'maxPowerPar')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i683 = data
  i682.mass = i683[0]
  i682.drag = i683[1]
  i682.angularDrag = i683[2]
  i682.useGravity = !!i683[3]
  i682.isKinematic = !!i683[4]
  i682.constraints = i683[5]
  i682.maxAngularVelocity = i683[6]
  i682.collisionDetectionMode = i683[7]
  i682.interpolation = i683[8]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i685 = data
  i684.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i685[0], i684.main)
  i684.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i685[1], i684.colorBySpeed)
  i684.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i685[2], i684.colorOverLifetime)
  i684.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i685[3], i684.emission)
  i684.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i685[4], i684.rotationBySpeed)
  i684.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i685[5], i684.rotationOverLifetime)
  i684.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i685[6], i684.shape)
  i684.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i685[7], i684.sizeBySpeed)
  i684.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i685[8], i684.sizeOverLifetime)
  i684.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i685[9], i684.textureSheetAnimation)
  i684.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i685[10], i684.velocityOverLifetime)
  i684.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i685[11], i684.noise)
  i684.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i685[12], i684.inheritVelocity)
  i684.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i685[13], i684.forceOverLifetime)
  i684.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i685[14], i684.limitVelocityOverLifetime)
  i684.useAutoRandomSeed = !!i685[15]
  i684.randomSeed = i685[16]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemMain()
  var i687 = data
  i686.duration = i687[0]
  i686.loop = !!i687[1]
  i686.prewarm = !!i687[2]
  i686.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.startDelay)
  i686.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.startLifetime)
  i686.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.startSpeed)
  i686.startSize3D = !!i687[6]
  i686.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.startSizeX)
  i686.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.startSizeY)
  i686.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.startSizeZ)
  i686.startRotation3D = !!i687[10]
  i686.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.startRotationX)
  i686.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.startRotationY)
  i686.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[13], i686.startRotationZ)
  i686.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i687[14], i686.startColor)
  i686.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.gravityModifier)
  i686.simulationSpace = i687[16]
  request.r(i687[17], i687[18], 0, i686, 'customSimulationSpace')
  i686.simulationSpeed = i687[19]
  i686.useUnscaledTime = !!i687[20]
  i686.scalingMode = i687[21]
  i686.playOnAwake = !!i687[22]
  i686.maxParticles = i687[23]
  i686.emitterVelocityMode = i687[24]
  i686.stopAction = i687[25]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i688 = root || new pc.MinMaxCurve()
  var i689 = data
  i688.mode = i689[0]
  i688.curveMin = new pc.AnimationCurve( { keys_flow: i689[1] } )
  i688.curveMax = new pc.AnimationCurve( { keys_flow: i689[2] } )
  i688.curveMultiplier = i689[3]
  i688.constantMin = i689[4]
  i688.constantMax = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i690 = root || new pc.MinMaxGradient()
  var i691 = data
  i690.mode = i691[0]
  i690.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[1], i690.gradientMin)
  i690.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[2], i690.gradientMax)
  i690.colorMin = new pc.Color(i691[3], i691[4], i691[5], i691[6])
  i690.colorMax = new pc.Color(i691[7], i691[8], i691[9], i691[10])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i693 = data
  i692.mode = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i695[i + 0]) );
  }
  i692.colorKeys = i694
  var i697 = i693[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i697[i + 0]) );
  }
  i692.alphaKeys = i696
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i701 = data
  i700.color = new pc.Color(i701[0], i701[1], i701[2], i701[3])
  i700.time = i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i705 = data
  i704.alpha = i705[0]
  i704.time = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemColorBySpeed()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i707[1], i706.color)
  i706.range = new pc.Vec2( i707[2], i707[3] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemColorOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i709[1], i708.color)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemEmitter()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.rateOverTime)
  i710.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.rateOverDistance)
  var i713 = i711[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i713[i + 0]) );
  }
  i710.bursts = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemBurst()
  var i717 = data
  i716.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[0], i716.count)
  i716.cycleCount = i717[1]
  i716.minCount = i717[2]
  i716.maxCount = i717[3]
  i716.repeatInterval = i717[4]
  i716.time = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemRotationBySpeed()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[1], i718.x)
  i718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.y)
  i718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.z)
  i718.separateAxes = !!i719[4]
  i718.range = new pc.Vec2( i719[5], i719[6] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemRotationOverLifetime()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[1], i720.x)
  i720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.y)
  i720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.z)
  i720.separateAxes = !!i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemShape()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.shapeType = i723[1]
  i722.randomDirectionAmount = i723[2]
  i722.sphericalDirectionAmount = i723[3]
  i722.randomPositionAmount = i723[4]
  i722.alignToDirection = !!i723[5]
  i722.radius = i723[6]
  i722.radiusMode = i723[7]
  i722.radiusSpread = i723[8]
  i722.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[9], i722.radiusSpeed)
  i722.radiusThickness = i723[10]
  i722.angle = i723[11]
  i722.length = i723[12]
  i722.boxThickness = new pc.Vec3( i723[13], i723[14], i723[15] )
  i722.meshShapeType = i723[16]
  request.r(i723[17], i723[18], 0, i722, 'mesh')
  request.r(i723[19], i723[20], 0, i722, 'meshRenderer')
  request.r(i723[21], i723[22], 0, i722, 'skinnedMeshRenderer')
  i722.useMeshMaterialIndex = !!i723[23]
  i722.meshMaterialIndex = i723[24]
  i722.useMeshColors = !!i723[25]
  i722.normalOffset = i723[26]
  i722.arc = i723[27]
  i722.arcMode = i723[28]
  i722.arcSpread = i723[29]
  i722.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[30], i722.arcSpeed)
  i722.donutRadius = i723[31]
  i722.position = new pc.Vec3( i723[32], i723[33], i723[34] )
  i722.rotation = new pc.Vec3( i723[35], i723[36], i723[37] )
  i722.scale = new pc.Vec3( i723[38], i723[39], i723[40] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemSizeBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.separateAxes = !!i725[4]
  i724.range = new pc.Vec2( i725[5], i725[6] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemSizeOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.x)
  i726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.y)
  i726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.z)
  i726.separateAxes = !!i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.mode = i729[1]
  i728.animation = i729[2]
  i728.numTilesX = i729[3]
  i728.numTilesY = i729[4]
  i728.useRandomRow = !!i729[5]
  i728.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[6], i728.frameOverTime)
  i728.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[7], i728.startFrame)
  i728.cycleCount = i729[8]
  i728.rowIndex = i729[9]
  i728.flipU = i729[10]
  i728.flipV = i729[11]
  i728.spriteCount = i729[12]
  var i731 = i729[13]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sprites = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.x)
  i732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.y)
  i732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.z)
  i732.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[4], i732.radial)
  i732.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[5], i732.speedModifier)
  i732.space = i733[6]
  i732.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[7], i732.orbitalX)
  i732.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[8], i732.orbitalY)
  i732.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[9], i732.orbitalZ)
  i732.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[10], i732.orbitalOffsetX)
  i732.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[11], i732.orbitalOffsetY)
  i732.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[12], i732.orbitalOffsetZ)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemNoise()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.separateAxes = !!i735[1]
  i734.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.strengthX)
  i734.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.strengthY)
  i734.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.strengthZ)
  i734.frequency = i735[5]
  i734.damping = !!i735[6]
  i734.octaveCount = i735[7]
  i734.octaveMultiplier = i735[8]
  i734.octaveScale = i735[9]
  i734.quality = i735[10]
  i734.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.scrollSpeed)
  i734.scrollSpeedMultiplier = i735[12]
  i734.remapEnabled = !!i735[13]
  i734.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[14], i734.remapX)
  i734.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[15], i734.remapY)
  i734.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[16], i734.remapZ)
  i734.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[17], i734.positionAmount)
  i734.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[18], i734.rotationAmount)
  i734.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[19], i734.sizeAmount)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemInheritVelocity()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.mode = i737[1]
  i736.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.curve)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemForceOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.space = i739[4]
  i738.randomized = !!i739[5]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.limit)
  i740.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.limitX)
  i740.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.limitY)
  i740.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.limitZ)
  i740.dampen = i741[5]
  i740.separateAxes = !!i741[6]
  i740.space = i741[7]
  i740.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.drag)
  i740.multiplyDragByParticleSize = !!i741[9]
  i740.multiplyDragByParticleVelocity = !!i741[10]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'mesh')
  i742.meshCount = i743[2]
  i742.activeVertexStreamsCount = i743[3]
  i742.alignment = i743[4]
  i742.renderMode = i743[5]
  i742.sortMode = i743[6]
  i742.lengthScale = i743[7]
  i742.velocityScale = i743[8]
  i742.cameraVelocityScale = i743[9]
  i742.normalDirection = i743[10]
  i742.sortingFudge = i743[11]
  i742.minParticleSize = i743[12]
  i742.maxParticleSize = i743[13]
  i742.pivot = new pc.Vec3( i743[14], i743[15], i743[16] )
  request.r(i743[17], i743[18], 0, i742, 'trailMaterial')
  i742.applyActiveColorSpace = !!i743[19]
  i742.enabled = !!i743[20]
  request.r(i743[21], i743[22], 0, i742, 'sharedMaterial')
  var i745 = i743[23]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.sharedMaterials = i744
  i742.receiveShadows = !!i743[24]
  i742.shadowCastingMode = i743[25]
  i742.sortingLayerID = i743[26]
  i742.sortingOrder = i743[27]
  i742.lightmapIndex = i743[28]
  i742.lightmapSceneIndex = i743[29]
  i742.lightmapScaleOffset = new pc.Vec4( i743[30], i743[31], i743[32], i743[33] )
  i742.lightProbeUsage = i743[34]
  i742.reflectionProbeUsage = i743[35]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i747 = data
  i746.aspect = i747[0]
  i746.orthographic = !!i747[1]
  i746.orthographicSize = i747[2]
  i746.backgroundColor = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.nearClipPlane = i747[7]
  i746.farClipPlane = i747[8]
  i746.fieldOfView = i747[9]
  i746.depth = i747[10]
  i746.clearFlags = i747[11]
  i746.cullingMask = i747[12]
  i746.rect = i747[13]
  request.r(i747[14], i747[15], 0, i746, 'targetTexture')
  i746.usePhysicalProperties = !!i747[16]
  i746.focalLength = i747[17]
  i746.sensorSize = new pc.Vec2( i747[18], i747[19] )
  i746.lensShift = new pc.Vec2( i747[20], i747[21] )
  i746.gateFit = i747[22]
  i746.commandBufferCount = i747[23]
  i746.cameraType = i747[24]
  i746.enabled = !!i747[25]
  return i746
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i748 = root || request.c( 'MaterialUVScroller' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'targetMaterial')
  i748.scrollSpeed = new pc.Vec2( i749[2], i749[3] )
  return i748
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i750 = root || request.c( 'ChoiceBoardPlacer' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'choiceBoardHolderprefab')
  request.r(i751[2], i751[3], 0, i750, 'startPos')
  request.r(i751[4], i751[5], 0, i750, 'endPos')
  request.r(i751[6], i751[7], 0, i750, 'choiceBoardPairData')
  i750.spawnCount = i751[8]
  i750.spawnGenericByNumber = !!i751[9]
  i750.shufflePairsOrder = !!i751[10]
  i750.shuffleLeftRight = !!i751[11]
  i750.spawnOnStart = !!i751[12]
  return i750
}

Deserializers["BossController"] = function (request, data, root) {
  var i752 = root || request.c( 'BossController' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'bossSpriteRenderer')
  request.r(i753[2], i753[3], 0, i752, 'characterVisual')
  request.r(i753[4], i753[5], 0, i752, 'fightingCloud')
  request.r(i753[6], i753[7], 0, i752, 'resultObject')
  request.r(i753[8], i753[9], 0, i752, 'resultSpriteRenderer')
  request.r(i753[10], i753[11], 0, i752, 'winSprite')
  request.r(i753[12], i753[13], 0, i752, 'lossSprite')
  request.r(i753[14], i753[15], 0, i752, 'extraWinObject')
  request.r(i753[16], i753[17], 0, i752, 'winPanel')
  request.r(i753[18], i753[19], 0, i752, 'losePanel')
  var i755 = i753[20]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.extraObjectsToHide = i754
  i752.fightingCloudFx = i753[21]
  i752.winPanelFx = i753[22]
  i752.losePanelFx = i753[23]
  i752.delayAfterLastBoard = i753[24]
  i752.fightDuration = i753[25]
  i752.showResultDuration = i753[26]
  i752.currentPlayerLevel = i753[27]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i759 = data
  i758.ambientIntensity = i759[0]
  i758.reflectionIntensity = i759[1]
  i758.ambientMode = i759[2]
  i758.ambientLight = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.ambientSkyColor = new pc.Color(i759[7], i759[8], i759[9], i759[10])
  i758.ambientGroundColor = new pc.Color(i759[11], i759[12], i759[13], i759[14])
  i758.ambientEquatorColor = new pc.Color(i759[15], i759[16], i759[17], i759[18])
  i758.fogColor = new pc.Color(i759[19], i759[20], i759[21], i759[22])
  i758.fogEndDistance = i759[23]
  i758.fogStartDistance = i759[24]
  i758.fogDensity = i759[25]
  i758.fog = !!i759[26]
  request.r(i759[27], i759[28], 0, i758, 'skybox')
  i758.fogMode = i759[29]
  var i761 = i759[30]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i761[i + 0]) );
  }
  i758.lightmaps = i760
  i758.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i759[31], i758.lightProbes)
  i758.lightmapsMode = i759[32]
  i758.mixedBakeMode = i759[33]
  i758.environmentLightingMode = i759[34]
  i758.ambientProbe = new pc.SphericalHarmonicsL2(i759[35])
  i758.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i759[36])
  i758.useReferenceAmbientProbe = !!i759[37]
  request.r(i759[38], i759[39], 0, i758, 'customReflection')
  request.r(i759[40], i759[41], 0, i758, 'defaultReflection')
  i758.defaultReflectionMode = i759[42]
  i758.defaultReflectionResolution = i759[43]
  i758.sunLightObjectId = i759[44]
  i758.pixelLightCount = i759[45]
  i758.defaultReflectionHDR = !!i759[46]
  i758.hasLightDataAsset = !!i759[47]
  i758.hasManualGenerate = !!i759[48]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'lightmapColor')
  request.r(i765[2], i765[3], 0, i764, 'lightmapDirection')
  request.r(i765[4], i765[5], 0, i764, 'shadowMask')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i766 = root || new UnityEngine.LightProbes()
  var i767 = data
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i777[i + 0]));
  }
  i774.ShaderCompilationErrors = i776
  i774.name = i775[1]
  i774.guid = i775[2]
  var i779 = i775[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.shaderDefinedKeywords = i778
  var i781 = i775[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i781[i + 0]) );
  }
  i774.passes = i780
  var i783 = i775[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i783[i + 0]) );
  }
  i774.usePasses = i782
  var i785 = i775[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i785[i + 0]) );
  }
  i774.defaultParameterValues = i784
  request.r(i775[7], i775[8], 0, i774, 'unityFallbackShader')
  i774.readDepth = !!i775[9]
  i774.hasDepthOnlyPass = !!i775[10]
  i774.isCreatedByShaderGraph = !!i775[11]
  i774.disableBatching = !!i775[12]
  i774.compiled = !!i775[13]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i789 = data
  i788.shaderName = i789[0]
  i788.errorMessage = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i794 = root || new pc.UnityShaderPass()
  var i795 = data
  i794.id = i795[0]
  i794.subShaderIndex = i795[1]
  i794.name = i795[2]
  i794.passType = i795[3]
  i794.grabPassTextureName = i795[4]
  i794.usePass = !!i795[5]
  i794.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[6], i794.zTest)
  i794.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[7], i794.zWrite)
  i794.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[8], i794.culling)
  i794.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[9], i794.blending)
  i794.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[10], i794.alphaBlending)
  i794.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[11], i794.colorWriteMask)
  i794.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[12], i794.offsetUnits)
  i794.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[13], i794.offsetFactor)
  i794.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[14], i794.stencilRef)
  i794.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[15], i794.stencilReadMask)
  i794.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[16], i794.stencilWriteMask)
  i794.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[17], i794.stencilOp)
  i794.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[18], i794.stencilOpFront)
  i794.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[19], i794.stencilOpBack)
  var i797 = i795[20]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i797[i + 0]) );
  }
  i794.tags = i796
  var i799 = i795[21]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i794.passDefinedKeywords = i798
  var i801 = i795[22]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i801[i + 0]) );
  }
  i794.passDefinedKeywordGroups = i800
  var i803 = i795[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i803[i + 0]) );
  }
  i794.variants = i802
  var i805 = i795[24]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i794.excludedVariants = i804
  i794.hasDepthReader = !!i795[25]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i807 = data
  i806.val = i807[0]
  i806.name = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i809 = data
  i808.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[0], i808.src)
  i808.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[1], i808.dst)
  i808.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[2], i808.op)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i811 = data
  i810.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.pass)
  i810.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.fail)
  i810.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.zFail)
  i810.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[3], i810.comp)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i815 = data
  i814.name = i815[0]
  i814.value = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i818.keywords = i820
  i818.hasDiscard = !!i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i825 = data
  i824.passId = i825[0]
  i824.subShaderIndex = i825[1]
  var i827 = i825[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.keywords = i826
  i824.vertexProgram = i825[3]
  i824.fragmentProgram = i825[4]
  i824.exportedForWebGl2 = !!i825[5]
  i824.readDepth = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'shader')
  i830.pass = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i835 = data
  i834.name = i835[0]
  i834.type = i835[1]
  i834.value = new pc.Vec4( i835[2], i835[3], i835[4], i835[5] )
  i834.textureValue = i835[6]
  i834.shaderPropertyFlag = i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'texture')
  i836.aabb = i837[3]
  i836.vertices = i837[4]
  i836.triangles = i837[5]
  i836.textureRect = UnityEngine.Rect.MinMaxRect(i837[6], i837[7], i837[8], i837[9])
  i836.packedRect = UnityEngine.Rect.MinMaxRect(i837[10], i837[11], i837[12], i837[13])
  i836.border = new pc.Vec4( i837[14], i837[15], i837[16], i837[17] )
  i836.transparency = i837[18]
  i836.bounds = i837[19]
  i836.pixelsPerUnit = i837[20]
  i836.textureWidth = i837[21]
  i836.textureHeight = i837[22]
  i836.nativeSize = new pc.Vec2( i837[23], i837[24] )
  i836.pivot = new pc.Vec2( i837[25], i837[26] )
  i836.textureRectOffset = new pc.Vec2( i837[27], i837[28] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i839 = data
  i838.name = i839[0]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i841 = data
  i840.name = i841[0]
  i840.bytes64 = i841[1]
  i840.data = i841[2]
  return i840
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i842 = root || request.c( 'ChoiceBoardPairData' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('ChoicePairData', i845[i + 0]) );
  }
  i842.ChoicePairDatas = i844
  return i842
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i848 = root || request.c( 'ChoicePairData' )
  var i849 = data
  i848.choiceData1 = request.d('ChoiceData', i849[0], i848.choiceData1)
  i848.choiceData2 = request.d('ChoiceData', i849[1], i848.choiceData2)
  return i848
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i850 = root || request.c( 'ChoiceData' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'VisualSprite')
  i850.ChoiceType = i851[2]
  return i850
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i853 = data
  i852.useSafeMode = !!i853[0]
  i852.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i853[1], i852.safeModeOptions)
  i852.timeScale = i853[2]
  i852.unscaledTimeScale = i853[3]
  i852.useSmoothDeltaTime = !!i853[4]
  i852.maxSmoothUnscaledTime = i853[5]
  i852.rewindCallbackMode = i853[6]
  i852.showUnityEditorReport = !!i853[7]
  i852.logBehaviour = i853[8]
  i852.drawGizmos = !!i853[9]
  i852.defaultRecyclable = !!i853[10]
  i852.defaultAutoPlay = i853[11]
  i852.defaultUpdateType = i853[12]
  i852.defaultTimeScaleIndependent = !!i853[13]
  i852.defaultEaseType = i853[14]
  i852.defaultEaseOvershootOrAmplitude = i853[15]
  i852.defaultEasePeriod = i853[16]
  i852.defaultAutoKill = !!i853[17]
  i852.defaultLoopType = i853[18]
  i852.debugMode = !!i853[19]
  i852.debugStoreTargetId = !!i853[20]
  i852.showPreviewPanel = !!i853[21]
  i852.storeSettingsLocation = i853[22]
  i852.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i853[23], i852.modules)
  i852.createASMDEF = !!i853[24]
  i852.showPlayingTweens = !!i853[25]
  i852.showPausedTweens = !!i853[26]
  return i852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i855 = data
  i854.logBehaviour = i855[0]
  i854.nestedTweenFailureBehaviour = i855[1]
  return i854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i857 = data
  i856.showPanel = !!i857[0]
  i856.audioEnabled = !!i857[1]
  i856.physicsEnabled = !!i857[2]
  i856.physics2DEnabled = !!i857[3]
  i856.spriteEnabled = !!i857[4]
  i856.uiEnabled = !!i857[5]
  i856.uiToolkitEnabled = !!i857[6]
  i856.textMeshProEnabled = !!i857[7]
  i856.tk2DEnabled = !!i857[8]
  i856.deAudioEnabled = !!i857[9]
  i856.deUnityExtendedEnabled = !!i857[10]
  i856.epoOutlineEnabled = !!i857[11]
  return i856
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_Settings' )
  var i859 = data
  i858.assetVersion = i859[0]
  i858.m_TextWrappingMode = i859[1]
  i858.m_enableKerning = !!i859[2]
  var i861 = i859[3]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(i861[i + 0]);
  }
  i858.m_ActiveFontFeatures = i860
  i858.m_enableExtraPadding = !!i859[4]
  i858.m_enableTintAllSprites = !!i859[5]
  i858.m_enableParseEscapeCharacters = !!i859[6]
  i858.m_EnableRaycastTarget = !!i859[7]
  i858.m_GetFontFeaturesAtRuntime = !!i859[8]
  i858.m_missingGlyphCharacter = i859[9]
  i858.m_ClearDynamicDataOnBuild = !!i859[10]
  i858.m_warningsDisabled = !!i859[11]
  request.r(i859[12], i859[13], 0, i858, 'm_defaultFontAsset')
  i858.m_defaultFontAssetPath = i859[14]
  i858.m_defaultFontSize = i859[15]
  i858.m_defaultAutoSizeMinRatio = i859[16]
  i858.m_defaultAutoSizeMaxRatio = i859[17]
  i858.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i859[18], i859[19] )
  i858.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i859[20], i859[21] )
  i858.m_autoSizeTextContainer = !!i859[22]
  i858.m_IsTextObjectScaleStatic = !!i859[23]
  var i863 = i859[24]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 1, i862, '')
  }
  i858.m_fallbackFontAssets = i862
  i858.m_matchMaterialPreset = !!i859[25]
  i858.m_HideSubTextObjects = !!i859[26]
  request.r(i859[27], i859[28], 0, i858, 'm_defaultSpriteAsset')
  i858.m_defaultSpriteAssetPath = i859[29]
  i858.m_enableEmojiSupport = !!i859[30]
  i858.m_MissingCharacterSpriteUnicode = i859[31]
  var i865 = i859[32]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i858.m_EmojiFallbackTextAssets = i864
  i858.m_defaultColorGradientPresetsPath = i859[33]
  request.r(i859[34], i859[35], 0, i858, 'm_defaultStyleSheet')
  i858.m_StyleSheetsResourcePath = i859[36]
  request.r(i859[37], i859[38], 0, i858, 'm_leadingCharacters')
  request.r(i859[39], i859[40], 0, i858, 'm_followingCharacters')
  i858.m_UseModernHangulLineBreakingRules = !!i859[41]
  return i858
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'spriteSheet')
  var i875 = i873[2]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_Sprite', i875[i + 0]));
  }
  i872.spriteInfoList = i874
  var i877 = i873[3]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i872.fallbackSpriteAssets = i876
  var i879 = i873[4]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_SpriteCharacter', i879[i + 0]));
  }
  i872.m_SpriteCharacterTable = i878
  var i881 = i873[5]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_SpriteGlyph', i881[i + 0]));
  }
  i872.m_GlyphTable = i880
  i872.m_Version = i873[6]
  i872.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i873[7], i872.m_FaceInfo)
  request.r(i873[8], i873[9], 0, i872, 'm_Material')
  return i872
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Sprite' )
  var i885 = data
  i884.name = i885[0]
  i884.hashCode = i885[1]
  i884.unicode = i885[2]
  i884.pivot = new pc.Vec2( i885[3], i885[4] )
  request.r(i885[5], i885[6], 0, i884, 'sprite')
  i884.id = i885[7]
  i884.x = i885[8]
  i884.y = i885[9]
  i884.width = i885[10]
  i884.height = i885[11]
  i884.xOffset = i885[12]
  i884.yOffset = i885[13]
  i884.xAdvance = i885[14]
  i884.scale = i885[15]
  return i884
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i891 = data
  i890.m_Name = i891[0]
  i890.m_ElementType = i891[1]
  i890.m_Unicode = i891[2]
  i890.m_GlyphIndex = i891[3]
  i890.m_Scale = i891[4]
  return i890
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'sprite')
  i894.m_Index = i895[2]
  i894.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i895[3], i894.m_Metrics)
  i894.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i895[4], i894.m_GlyphRect)
  i894.m_Scale = i895[5]
  i894.m_AtlasIndex = i895[6]
  i894.m_ClassDefinitionType = i895[7]
  return i894
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i897 = data
  i896.m_Width = i897[0]
  i896.m_Height = i897[1]
  i896.m_HorizontalBearingX = i897[2]
  i896.m_HorizontalBearingY = i897[3]
  i896.m_HorizontalAdvance = i897[4]
  return i896
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i899 = data
  i898.m_X = i899[0]
  i898.m_Y = i899[1]
  i898.m_Width = i899[2]
  i898.m_Height = i899[3]
  return i898
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i901 = data
  i900.m_FaceIndex = i901[0]
  i900.m_FamilyName = i901[1]
  i900.m_StyleName = i901[2]
  i900.m_PointSize = i901[3]
  i900.m_Scale = i901[4]
  i900.m_UnitsPerEM = i901[5]
  i900.m_LineHeight = i901[6]
  i900.m_AscentLine = i901[7]
  i900.m_CapLine = i901[8]
  i900.m_MeanLine = i901[9]
  i900.m_Baseline = i901[10]
  i900.m_DescentLine = i901[11]
  i900.m_SuperscriptOffset = i901[12]
  i900.m_SuperscriptSize = i901[13]
  i900.m_SubscriptOffset = i901[14]
  i900.m_SubscriptSize = i901[15]
  i900.m_UnderlineOffset = i901[16]
  i900.m_UnderlineThickness = i901[17]
  i900.m_StrikethroughOffset = i901[18]
  i900.m_StrikethroughThickness = i901[19]
  i900.m_TabWidth = i901[20]
  return i900
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_Style', i905[i + 0]));
  }
  i902.m_StyleList = i904
  return i902
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_Style' )
  var i909 = data
  i908.m_Name = i909[0]
  i908.m_HashCode = i909[1]
  i908.m_OpeningDefinition = i909[2]
  i908.m_ClosingDefinition = i909[3]
  i908.m_OpeningTagArray = i909[4]
  i908.m_ClosingTagArray = i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i913[i + 0]) );
  }
  i910.files = i912
  i910.componentToPrefabIds = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i917 = data
  i916.path = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'unityObject')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i921[i + 0]) );
  }
  i918.scriptsExecutionOrder = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i923[i + 0]) );
  }
  i918.sortingLayers = i922
  var i925 = i919[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i925[i + 0]) );
  }
  i918.cullingLayers = i924
  i918.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i919[3], i918.timeSettings)
  i918.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i919[4], i918.physicsSettings)
  i918.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i919[5], i918.physics2DSettings)
  i918.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[6], i918.qualitySettings)
  i918.enableRealtimeShadows = !!i919[7]
  i918.enableAutoInstancing = !!i919[8]
  i918.enableStaticBatching = !!i919[9]
  i918.enableDynamicBatching = !!i919[10]
  i918.lightmapEncodingQuality = i919[11]
  i918.desiredColorSpace = i919[12]
  var i927 = i919[13]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i918.allTags = i926
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i931 = data
  i930.name = i931[0]
  i930.value = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.value = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i941 = data
  i940.fixedDeltaTime = i941[0]
  i940.maximumDeltaTime = i941[1]
  i940.timeScale = i941[2]
  i940.maximumParticleTimestep = i941[3]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i943 = data
  i942.gravity = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.defaultSolverIterations = i943[3]
  i942.bounceThreshold = i943[4]
  i942.autoSyncTransforms = !!i943[5]
  i942.autoSimulation = !!i943[6]
  var i945 = i943[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i945[i + 0]) );
  }
  i942.collisionMatrix = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i949 = data
  i948.enabled = !!i949[0]
  i948.layerId = i949[1]
  i948.otherLayerId = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'material')
  i950.gravity = new pc.Vec2( i951[2], i951[3] )
  i950.positionIterations = i951[4]
  i950.velocityIterations = i951[5]
  i950.velocityThreshold = i951[6]
  i950.maxLinearCorrection = i951[7]
  i950.maxAngularCorrection = i951[8]
  i950.maxTranslationSpeed = i951[9]
  i950.maxRotationSpeed = i951[10]
  i950.baumgarteScale = i951[11]
  i950.baumgarteTOIScale = i951[12]
  i950.timeToSleep = i951[13]
  i950.linearSleepTolerance = i951[14]
  i950.angularSleepTolerance = i951[15]
  i950.defaultContactOffset = i951[16]
  i950.autoSimulation = !!i951[17]
  i950.queriesHitTriggers = !!i951[18]
  i950.queriesStartInColliders = !!i951[19]
  i950.callbacksOnDisable = !!i951[20]
  i950.reuseCollisionCallbacks = !!i951[21]
  i950.autoSyncTransforms = !!i951[22]
  var i953 = i951[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i961[i + 0]) );
  }
  i958.qualityLevels = i960
  var i963 = i959[1]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i958.names = i962
  i958.shadows = i959[2]
  i958.anisotropicFiltering = i959[3]
  i958.antiAliasing = i959[4]
  i958.lodBias = i959[5]
  i958.shadowCascades = i959[6]
  i958.shadowDistance = i959[7]
  i958.shadowmaskMode = i959[8]
  i958.shadowProjection = i959[9]
  i958.shadowResolution = i959[10]
  i958.softParticles = !!i959[11]
  i958.softVegetation = !!i959[12]
  i958.activeColorSpace = i959[13]
  i958.desiredColorSpace = i959[14]
  i958.masterTextureLimit = i959[15]
  i958.maxQueuedFrames = i959[16]
  i958.particleRaycastBudget = i959[17]
  i958.pixelLightCount = i959[18]
  i958.realtimeReflectionProbes = !!i959[19]
  i958.shadowCascade2Split = i959[20]
  i958.shadowCascade4Split = new pc.Vec3( i959[21], i959[22], i959[23] )
  i958.streamingMipmapsActive = !!i959[24]
  i958.vSyncCount = i959[25]
  i958.asyncUploadBufferSize = i959[26]
  i958.asyncUploadTimeSlice = i959[27]
  i958.billboardsFaceCameraPosition = !!i959[28]
  i958.shadowNearPlaneOffset = i959[29]
  i958.streamingMipmapsMemoryBudget = i959[30]
  i958.maximumLODLevel = i959[31]
  i958.streamingMipmapsAddAllCameras = !!i959[32]
  i958.streamingMipmapsMaxLevelReduction = i959[33]
  i958.streamingMipmapsRenderersPerFrame = i959[34]
  i958.resolutionScalingFixedDPIFactor = i959[35]
  i958.streamingMipmapsMaxFileIORequests = i959[36]
  i958.currentQualityLevel = i959[37]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i969 = data
  i968.weight = i969[0]
  i968.vertices = i969[1]
  i968.normals = i969[2]
  i968.tangents = i969[3]
  return i968
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_ObjectArgument')
  i970.m_ObjectArgumentAssemblyTypeName = i971[2]
  i970.m_IntArgument = i971[3]
  i970.m_FloatArgument = i971[4]
  i970.m_StringArgument = i971[5]
  i970.m_BoolArgument = !!i971[6]
  return i970
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1821";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4382";

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

Deserializers.buildID = "a3f1bc43-ce9c-4fac-8afa-b097ac8d97a2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

