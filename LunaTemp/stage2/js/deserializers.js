var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSpring' )
  var i517 = data
  i516.spring = i517[0]
  i516.damper = i517[1]
  i516.targetPosition = i517[2]
  return i516
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointMotor' )
  var i519 = data
  i518.m_TargetVelocity = i519[0]
  i518.m_Force = i519[1]
  i518.m_FreeSpin = i519[2]
  return i518
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointLimits' )
  var i521 = data
  i520.m_Min = i521[0]
  i520.m_Max = i521[1]
  i520.m_Bounciness = i521[2]
  i520.m_BounceMinVelocity = i521[3]
  i520.m_ContactDistance = i521[4]
  i520.minBounce = i521[5]
  i520.maxBounce = i521[6]
  return i520
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointDrive' )
  var i523 = data
  i522.m_PositionSpring = i523[0]
  i522.m_PositionDamper = i523[1]
  i522.m_MaximumForce = i523[2]
  i522.m_UseAcceleration = i523[3]
  return i522
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i525 = data
  i524.m_Spring = i525[0]
  i524.m_Damper = i525[1]
  return i524
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i527 = data
  i526.m_Limit = i527[0]
  i526.m_Bounciness = i527[1]
  i526.m_ContactDistance = i527[2]
  return i526
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i529 = data
  i528.m_ExtremumSlip = i529[0]
  i528.m_ExtremumValue = i529[1]
  i528.m_AsymptoteSlip = i529[2]
  i528.m_AsymptoteValue = i529[3]
  i528.m_Stiffness = i529[4]
  return i528
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i531 = data
  i530.m_LowerAngle = i531[0]
  i530.m_UpperAngle = i531[1]
  return i530
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i533 = data
  i532.m_MotorSpeed = i533[0]
  i532.m_MaximumMotorTorque = i533[1]
  return i532
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i535 = data
  i534.m_DampingRatio = i535[0]
  i534.m_Frequency = i535[1]
  i534.m_Angle = i535[2]
  return i534
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i537 = data
  i536.m_LowerTranslation = i537[0]
  i536.m_UpperTranslation = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i539 = data
  i538.name = i539[0]
  i538.halfPrecision = !!i539[1]
  i538.useSimplification = !!i539[2]
  i538.useUInt32IndexFormat = !!i539[3]
  i538.vertexCount = i539[4]
  i538.aabb = i539[5]
  var i541 = i539[6]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( !!i541[i + 0] );
  }
  i538.streams = i540
  i538.vertices = i539[7]
  var i543 = i539[8]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i543[i + 0]) );
  }
  i538.subMeshes = i542
  var i545 = i539[9]
  var i544 = []
  for(var i = 0; i < i545.length; i += 16) {
    i544.push( new pc.Mat4().setData(i545[i + 0], i545[i + 1], i545[i + 2], i545[i + 3],  i545[i + 4], i545[i + 5], i545[i + 6], i545[i + 7],  i545[i + 8], i545[i + 9], i545[i + 10], i545[i + 11],  i545[i + 12], i545[i + 13], i545[i + 14], i545[i + 15]) );
  }
  i538.bindposes = i544
  var i547 = i539[10]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i547[i + 0]) );
  }
  i538.blendShapes = i546
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i553 = data
  i552.triangles = i553[0]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i559 = data
  i558.name = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i561[i + 0]) );
  }
  i558.frames = i560
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i562 = root || new pc.UnityMaterial()
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.renderQueue = i563[3]
  i562.enableInstancing = !!i563[4]
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i565[i + 0]) );
  }
  i562.floatParameters = i564
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i567[i + 0]) );
  }
  i562.colorParameters = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i569[i + 0]) );
  }
  i562.vectorParameters = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i571[i + 0]) );
  }
  i562.textureParameters = i570
  var i573 = i563[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i573[i + 0]) );
  }
  i562.materialFlags = i572
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Vec4( i585[1], i585[2], i585[3], i585[4] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'value')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i593 = data
  i592.name = i593[0]
  i592.enabled = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  i594.graphicsFormat = i595[11]
  i594.sRGBTexture = !!i595[12]
  i594.desiredColorSpace = i595[13]
  i594.wrapU = i595[14]
  i594.wrapV = i595[15]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i597 = data
  i596.position = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.scale = new pc.Vec3( i597[3], i597[4], i597[5] )
  i596.rotation = new pc.Quat(i597[6], i597[7], i597[8], i597[9])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i599 = data
  i598.center = new pc.Vec3( i599[0], i599[1], i599[2] )
  i598.size = new pc.Vec3( i599[3], i599[4], i599[5] )
  i598.enabled = !!i599[6]
  i598.isTrigger = !!i599[7]
  request.r(i599[8], i599[9], 0, i598, 'material')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i601 = data
  i600.color = new pc.Color(i601[0], i601[1], i601[2], i601[3])
  request.r(i601[4], i601[5], 0, i600, 'sprite')
  i600.flipX = !!i601[6]
  i600.flipY = !!i601[7]
  i600.drawMode = i601[8]
  i600.size = new pc.Vec2( i601[9], i601[10] )
  i600.tileMode = i601[11]
  i600.adaptiveModeThreshold = i601[12]
  i600.maskInteraction = i601[13]
  i600.spriteSortPoint = i601[14]
  i600.enabled = !!i601[15]
  request.r(i601[16], i601[17], 0, i600, 'sharedMaterial')
  var i603 = i601[18]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.sharedMaterials = i602
  i600.receiveShadows = !!i601[19]
  i600.shadowCastingMode = i601[20]
  i600.sortingLayerID = i601[21]
  i600.sortingOrder = i601[22]
  i600.lightmapIndex = i601[23]
  i600.lightmapSceneIndex = i601[24]
  i600.lightmapScaleOffset = new pc.Vec4( i601[25], i601[26], i601[27], i601[28] )
  i600.lightProbeUsage = i601[29]
  i600.reflectionProbeUsage = i601[30]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i607 = data
  i606.name = i607[0]
  i606.tagId = i607[1]
  i606.enabled = !!i607[2]
  i606.isStatic = !!i607[3]
  i606.layer = i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'sharedMesh')
  var i611 = i609[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.bones = i610
  i608.updateWhenOffscreen = !!i609[3]
  i608.localBounds = i609[4]
  request.r(i609[5], i609[6], 0, i608, 'rootBone')
  var i613 = i609[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i613[i + 0]) );
  }
  i608.blendShapesWeights = i612
  i608.enabled = !!i609[8]
  request.r(i609[9], i609[10], 0, i608, 'sharedMaterial')
  var i615 = i609[11]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i608.sharedMaterials = i614
  i608.receiveShadows = !!i609[12]
  i608.shadowCastingMode = i609[13]
  i608.sortingLayerID = i609[14]
  i608.sortingOrder = i609[15]
  i608.lightmapIndex = i609[16]
  i608.lightmapSceneIndex = i609[17]
  i608.lightmapScaleOffset = new pc.Vec4( i609[18], i609[19], i609[20], i609[21] )
  i608.lightProbeUsage = i609[22]
  i608.reflectionProbeUsage = i609[23]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i621 = data
  i620.weight = i621[0]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i623 = data
  i622.pivot = new pc.Vec2( i623[0], i623[1] )
  i622.anchorMin = new pc.Vec2( i623[2], i623[3] )
  i622.anchorMax = new pc.Vec2( i623[4], i623[5] )
  i622.sizeDelta = new pc.Vec2( i623[6], i623[7] )
  i622.anchoredPosition3D = new pc.Vec3( i623[8], i623[9], i623[10] )
  i622.rotation = new pc.Quat(i623[11], i623[12], i623[13], i623[14])
  i622.scale = new pc.Vec3( i623[15], i623[16], i623[17] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i625 = data
  i624.planeDistance = i625[0]
  i624.referencePixelsPerUnit = i625[1]
  i624.isFallbackOverlay = !!i625[2]
  i624.renderMode = i625[3]
  i624.renderOrder = i625[4]
  i624.sortingLayerName = i625[5]
  i624.sortingOrder = i625[6]
  i624.scaleFactor = i625[7]
  request.r(i625[8], i625[9], 0, i624, 'worldCamera')
  i624.overrideSorting = !!i625[10]
  i624.pixelPerfect = !!i625[11]
  i624.targetDisplay = i625[12]
  i624.overridePixelPerfect = !!i625[13]
  i624.enabled = !!i625[14]
  return i624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i627 = data
  i626.m_UiScaleMode = i627[0]
  i626.m_ReferencePixelsPerUnit = i627[1]
  i626.m_ScaleFactor = i627[2]
  i626.m_ReferenceResolution = new pc.Vec2( i627[3], i627[4] )
  i626.m_ScreenMatchMode = i627[5]
  i626.m_MatchWidthOrHeight = i627[6]
  i626.m_PhysicalUnit = i627[7]
  i626.m_FallbackScreenDPI = i627[8]
  i626.m_DefaultSpriteDPI = i627[9]
  i626.m_DynamicPixelsPerUnit = i627[10]
  i626.m_PresetInfoIsWorld = !!i627[11]
  return i626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i629 = data
  i628.m_IgnoreReversedGraphics = !!i629[0]
  i628.m_BlockingObjects = i629[1]
  i628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i629[2] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Image' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Sprite')
  i632.m_Type = i633[2]
  i632.m_PreserveAspect = !!i633[3]
  i632.m_FillCenter = !!i633[4]
  i632.m_FillMethod = i633[5]
  i632.m_FillAmount = i633[6]
  i632.m_FillClockwise = !!i633[7]
  i632.m_FillOrigin = i633[8]
  i632.m_UseSpriteMesh = !!i633[9]
  i632.m_PixelsPerUnitMultiplier = i633[10]
  request.r(i633[11], i633[12], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[13]
  i632.m_Color = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.m_RaycastTarget = !!i633[18]
  i632.m_RaycastPadding = new pc.Vec4( i633[19], i633[20], i633[21], i633[22] )
  return i632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Texture')
  i634.m_UVRect = UnityEngine.Rect.MinMaxRect(i635[2], i635[3], i635[4], i635[5])
  request.r(i635[6], i635[7], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[8]
  i634.m_Color = new pc.Color(i635[9], i635[10], i635[11], i635[12])
  i634.m_RaycastTarget = !!i635[13]
  i634.m_RaycastPadding = new pc.Vec4( i635[14], i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i636 = root || request.c( 'ImageScroller' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'rawImage')
  i636.moveVector = new pc.Vec2( i637[2], i637[3] )
  return i636
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i638 = root || request.c( 'UIGuidingMove' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'target')
  i638.startPosition = new pc.Vec2( i639[2], i639[3] )
  i638.endPosition = new pc.Vec2( i639[4], i639[5] )
  i638.duration = i639[6]
  i638.ease = i639[7]
  i638.resetToStartOnComplete = !!i639[8]
  i638.loop = !!i639[9]
  i638.loopCount = i639[10]
  i638.loopType = i639[11]
  return i638
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i640 = root || request.c( 'UIPulse' )
  var i641 = data
  i640.targetScale = new pc.Vec3( i641[0], i641[1], i641[2] )
  i640.duration = i641[3]
  i640.ease = i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i643 = data
  i642.name = i643[0]
  i642.atlasId = i643[1]
  i642.mipmapCount = i643[2]
  i642.hdr = !!i643[3]
  i642.size = i643[4]
  i642.anisoLevel = i643[5]
  i642.filterMode = i643[6]
  var i645 = i643[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 4) {
    i644.push( UnityEngine.Rect.MinMaxRect(i645[i + 0], i645[i + 1], i645[i + 2], i645[i + 3]) );
  }
  i642.rects = i644
  i642.wrapU = i643[8]
  i642.wrapV = i643[9]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i649 = data
  i648.name = i649[0]
  i648.index = i649[1]
  i648.startup = !!i649[2]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i651 = data
  i650.aspect = i651[0]
  i650.orthographic = !!i651[1]
  i650.orthographicSize = i651[2]
  i650.backgroundColor = new pc.Color(i651[3], i651[4], i651[5], i651[6])
  i650.nearClipPlane = i651[7]
  i650.farClipPlane = i651[8]
  i650.fieldOfView = i651[9]
  i650.depth = i651[10]
  i650.clearFlags = i651[11]
  i650.cullingMask = i651[12]
  i650.rect = i651[13]
  request.r(i651[14], i651[15], 0, i650, 'targetTexture')
  i650.usePhysicalProperties = !!i651[16]
  i650.focalLength = i651[17]
  i650.sensorSize = new pc.Vec2( i651[18], i651[19] )
  i650.lensShift = new pc.Vec2( i651[20], i651[21] )
  i650.gateFit = i651[22]
  i650.commandBufferCount = i651[23]
  i650.cameraType = i651[24]
  i650.enabled = !!i651[25]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'sharedMesh')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'additionalVertexStreams')
  i654.enabled = !!i655[2]
  request.r(i655[3], i655[4], 0, i654, 'sharedMaterial')
  var i657 = i655[5]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.sharedMaterials = i656
  i654.receiveShadows = !!i655[6]
  i654.shadowCastingMode = i655[7]
  i654.sortingLayerID = i655[8]
  i654.sortingOrder = i655[9]
  i654.lightmapIndex = i655[10]
  i654.lightmapSceneIndex = i655[11]
  i654.lightmapScaleOffset = new pc.Vec4( i655[12], i655[13], i655[14], i655[15] )
  i654.lightProbeUsage = i655[16]
  i654.reflectionProbeUsage = i655[17]
  return i654
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i658 = root || request.c( 'MaterialUVScroller' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'targetMaterial')
  i658.scrollSpeed = new pc.Vec2( i659[2], i659[3] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i661 = data
  i660.type = i661[0]
  i660.color = new pc.Color(i661[1], i661[2], i661[3], i661[4])
  i660.cullingMask = i661[5]
  i660.intensity = i661[6]
  i660.range = i661[7]
  i660.spotAngle = i661[8]
  i660.shadows = i661[9]
  i660.shadowNormalBias = i661[10]
  i660.shadowBias = i661[11]
  i660.shadowStrength = i661[12]
  i660.shadowResolution = i661[13]
  i660.lightmapBakeType = i661[14]
  i660.renderMode = i661[15]
  request.r(i661[16], i661[17], 0, i660, 'cookie')
  i660.cookieSize = i661[18]
  i660.shadowNearPlane = i661[19]
  i660.enabled = !!i661[20]
  return i660
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_FirstSelected')
  i662.m_sendNavigationEvents = !!i663[2]
  i662.m_DragThreshold = i663[3]
  return i662
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i665 = data
  i664.m_HorizontalAxis = i665[0]
  i664.m_VerticalAxis = i665[1]
  i664.m_SubmitButton = i665[2]
  i664.m_CancelButton = i665[3]
  i664.m_InputActionsPerSecond = i665[4]
  i664.m_RepeatDelay = i665[5]
  i664.m_ForceModuleActive = !!i665[6]
  i664.m_SendPointerHoverToParent = !!i665[7]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'animatorController')
  request.r(i667[2], i667[3], 0, i666, 'avatar')
  i666.updateMode = i667[4]
  i666.hasTransformHierarchy = !!i667[5]
  i666.applyRootMotion = !!i667[6]
  var i669 = i667[7]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.humanBones = i668
  i666.enabled = !!i667[8]
  return i666
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i670 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'animator')
  i670.kickDuration = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i673 = data
  i672.center = new pc.Vec3( i673[0], i673[1], i673[2] )
  i672.radius = i673[3]
  i672.enabled = !!i673[4]
  i672.isTrigger = !!i673[5]
  request.r(i673[6], i673[7], 0, i672, 'material')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i675 = data
  i674.mass = i675[0]
  i674.drag = i675[1]
  i674.angularDrag = i675[2]
  i674.useGravity = !!i675[3]
  i674.isKinematic = !!i675[4]
  i674.constraints = i675[5]
  i674.maxAngularVelocity = i675[6]
  i674.collisionDetectionMode = i675[7]
  i674.interpolation = i675[8]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 3) {
    i678.push( new pc.Vec3( i679[i + 0], i679[i + 1], i679[i + 2] ) );
  }
  i676.positions = i678
  i676.positionCount = i677[1]
  i676.time = i677[2]
  i676.startWidth = i677[3]
  i676.endWidth = i677[4]
  i676.widthMultiplier = i677[5]
  i676.autodestruct = !!i677[6]
  i676.emitting = !!i677[7]
  i676.numCornerVertices = i677[8]
  i676.numCapVertices = i677[9]
  i676.minVertexDistance = i677[10]
  i676.colorGradient = i677[11] ? new pc.ColorGradient(i677[11][0], i677[11][1], i677[11][2]) : null
  i676.startColor = new pc.Color(i677[12], i677[13], i677[14], i677[15])
  i676.endColor = new pc.Color(i677[16], i677[17], i677[18], i677[19])
  i676.generateLightingData = !!i677[20]
  i676.textureMode = i677[21]
  i676.alignment = i677[22]
  i676.widthCurve = new pc.AnimationCurve( { keys_flow: i677[23] } )
  i676.enabled = !!i677[24]
  request.r(i677[25], i677[26], 0, i676, 'sharedMaterial')
  var i681 = i677[27]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i676.sharedMaterials = i680
  i676.receiveShadows = !!i677[28]
  i676.shadowCastingMode = i677[29]
  i676.sortingLayerID = i677[30]
  i676.sortingOrder = i677[31]
  i676.lightmapIndex = i677[32]
  i676.lightmapSceneIndex = i677[33]
  i676.lightmapScaleOffset = new pc.Vec4( i677[34], i677[35], i677[36], i677[37] )
  i676.lightProbeUsage = i677[38]
  i676.reflectionProbeUsage = i677[39]
  return i676
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i684 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i685 = data
  i684.blockBounceSpeed = i685[0]
  i684.blockBounceUpward = i685[1]
  i684.goalFallSpeed = i685[2]
  i684.goalFallDownward = i685[3]
  i684.goalDropDamping = i685[4]
  request.r(i685[5], i685[6], 0, i684, 'leftTop')
  request.r(i685[7], i685[8], 0, i684, 'bottomCenter')
  request.r(i685[9], i685[10], 0, i684, 'rightTop')
  i684.leftTopY = i685[11]
  i684.bottomCenterY = i685[12]
  i684.rightTopY = i685[13]
  i684.halfWidth = i685[14]
  i684.goalZ = i685[15]
  i684.flightTime = i685[16]
  request.r(i685[17], i685[18], 0, i684, 'trailRenderer')
  i684.goalTag = i685[19]
  return i684
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i686 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'leftPost')
  request.r(i687[2], i687[3], 0, i686, 'rightPost')
  i686.baseSpeed = i687[4]
  i686.changeSpeedByRound = !!i687[5]
  return i686
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i688 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'leftLimit')
  request.r(i689[2], i689[3], 0, i688, 'rightLimit')
  i688.speed = i689[4]
  i688.startActive = !!i689[5]
  return i688
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i690 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'leftPoint')
  request.r(i691[2], i691[3], 0, i690, 'rightPoint')
  i690.speed = i691[4]
  request.r(i691[5], i691[6], 0, i690, 'aimLineRenderer')
  request.r(i691[7], i691[8], 0, i690, 'ballTransform')
  i690.lineWidth = i691[9]
  i690.dashDensity = i691[10]
  i690.dashRatio = i691[11]
  i690.dashColor = new pc.Color(i691[12], i691[13], i691[14], i691[15])
  i690.lineGroundY = i691[16]
  i690.pulseEffect = !!i691[17]
  i690.pulseSpeed = i691[18]
  i690.pulseScaleAmount = i691[19]
  i690.sortingOrder = i691[20]
  i690.sortingLayerName = i691[21]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i693 = data
  i692.textureMode = i693[0]
  i692.alignment = i693[1]
  i692.widthCurve = new pc.AnimationCurve( { keys_flow: i693[2] } )
  i692.colorGradient = i693[3] ? new pc.ColorGradient(i693[3][0], i693[3][1], i693[3][2]) : null
  var i695 = i693[4]
  var i694 = []
  for(var i = 0; i < i695.length; i += 3) {
    i694.push( new pc.Vec3( i695[i + 0], i695[i + 1], i695[i + 2] ) );
  }
  i692.positions = i694
  i692.positionCount = i693[5]
  i692.widthMultiplier = i693[6]
  i692.startWidth = i693[7]
  i692.endWidth = i693[8]
  i692.numCornerVertices = i693[9]
  i692.numCapVertices = i693[10]
  i692.useWorldSpace = !!i693[11]
  i692.loop = !!i693[12]
  i692.startColor = new pc.Color(i693[13], i693[14], i693[15], i693[16])
  i692.endColor = new pc.Color(i693[17], i693[18], i693[19], i693[20])
  i692.generateLightingData = !!i693[21]
  i692.enabled = !!i693[22]
  request.r(i693[23], i693[24], 0, i692, 'sharedMaterial')
  var i697 = i693[25]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.sharedMaterials = i696
  i692.receiveShadows = !!i693[26]
  i692.shadowCastingMode = i693[27]
  i692.sortingLayerID = i693[28]
  i692.sortingOrder = i693[29]
  i692.lightmapIndex = i693[30]
  i692.lightmapSceneIndex = i693[31]
  i692.lightmapScaleOffset = new pc.Vec4( i693[32], i693[33], i693[34], i693[35] )
  i692.lightProbeUsage = i693[36]
  i692.reflectionProbeUsage = i693[37]
  return i692
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i698 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i699 = data
  i698.kickImpactDelay = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'ball')
  request.r(i699[3], i699[4], 0, i698, 'targetMover')
  request.r(i699[5], i699[6], 0, i698, 'goalkeeper')
  request.r(i699[7], i699[8], 0, i698, 'ronaldoAnimator')
  request.r(i699[9], i699[10], 0, i698, 'uiManager')
  request.r(i699[11], i699[12], 0, i698, 'defenderRound2')
  request.r(i699[13], i699[14], 0, i698, 'defenderRound3')
  i698.targetSpeeds = i699[15]
  i698.delayBetweenRounds = i699[16]
  i698.promptEveryRound = !!i699[17]
  return i698
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i700 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i701 = data
  var i703 = i701[0]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.roundIndicators = i702
  request.r(i701[1], i701[2], 0, i700, 'iconEmpty')
  request.r(i701[3], i701[4], 0, i700, 'iconCheck')
  request.r(i701[5], i701[6], 0, i700, 'iconCross')
  request.r(i701[7], i701[8], 0, i700, 'winEndcardPanel')
  request.r(i701[9], i701[10], 0, i700, 'losePanel')
  request.r(i701[11], i701[12], 0, i700, 'promptText')
  var i705 = i701[13]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i700.objectsToHideOnWin = i704
  var i707 = i701[14]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i700.objectsToHideOnLose = i706
  var i709 = i701[15]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i700.extraObjectsToHide = i708
  return i700
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i714 = root || request.c( 'Ply_SoundManager' )
  var i715 = data
  i714.audioClips = request.d('FxAudio', i715[0], i714.audioClips)
  request.r(i715[1], i715[2], 0, i714, 'sound')
  i714.enableSound = !!i715[3]
  i714.bgmVolume = i715[4]
  return i714
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i716 = root || request.c( 'FxAudio' )
  var i717 = data
  i716.Clock = request.d('SoundData', i717[0], i716.Clock)
  i716.PlayerWin = request.d('SoundData', i717[1], i716.PlayerWin)
  i716.PlayerLoose = request.d('SoundData', i717[2], i716.PlayerLoose)
  i716.RightChoice = request.d('SoundData', i717[3], i716.RightChoice)
  i716.WrongChoice = request.d('SoundData', i717[4], i716.WrongChoice)
  i716.MaxLevel = request.d('SoundData', i717[5], i716.MaxLevel)
  i716.FightingCloud = request.d('SoundData', i717[6], i716.FightingCloud)
  return i716
}

Deserializers["SoundData"] = function (request, data, root) {
  var i718 = root || request.c( 'SoundData' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'clip')
  i718.volume = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'clip')
  request.r(i721[2], i721[3], 0, i720, 'outputAudioMixerGroup')
  i720.playOnAwake = !!i721[4]
  i720.loop = !!i721[5]
  i720.time = i721[6]
  i720.volume = i721[7]
  i720.pitch = i721[8]
  i720.enabled = !!i721[9]
  return i720
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Button' )
  var i723 = data
  i722.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i723[0], i722.m_OnClick)
  i722.m_Navigation = request.d('UnityEngine.UI.Navigation', i723[1], i722.m_Navigation)
  i722.m_Transition = i723[2]
  i722.m_Colors = request.d('UnityEngine.UI.ColorBlock', i723[3], i722.m_Colors)
  i722.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i723[4], i722.m_SpriteState)
  i722.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i723[5], i722.m_AnimationTriggers)
  i722.m_Interactable = !!i723[6]
  request.r(i723[7], i723[8], 0, i722, 'm_TargetGraphic')
  return i722
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i725 = data
  i724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i725[0], i724.m_PersistentCalls)
  return i724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('UnityEngine.Events.PersistentCall', i729[i + 0]));
  }
  i726.m_Calls = i728
  return i726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Target')
  i732.m_TargetAssemblyTypeName = i733[2]
  i732.m_MethodName = i733[3]
  i732.m_Mode = i733[4]
  i732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i733[5], i732.m_Arguments)
  i732.m_CallState = i733[6]
  return i732
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_ObjectArgument')
  i734.m_ObjectArgumentAssemblyTypeName = i735[2]
  i734.m_IntArgument = i735[3]
  i734.m_FloatArgument = i735[4]
  i734.m_StringArgument = i735[5]
  i734.m_BoolArgument = !!i735[6]
  return i734
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i737 = data
  i736.m_Mode = i737[0]
  i736.m_WrapAround = !!i737[1]
  request.r(i737[2], i737[3], 0, i736, 'm_SelectOnUp')
  request.r(i737[4], i737[5], 0, i736, 'm_SelectOnDown')
  request.r(i737[6], i737[7], 0, i736, 'm_SelectOnLeft')
  request.r(i737[8], i737[9], 0, i736, 'm_SelectOnRight')
  return i736
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i739 = data
  i738.m_NormalColor = new pc.Color(i739[0], i739[1], i739[2], i739[3])
  i738.m_HighlightedColor = new pc.Color(i739[4], i739[5], i739[6], i739[7])
  i738.m_PressedColor = new pc.Color(i739[8], i739[9], i739[10], i739[11])
  i738.m_SelectedColor = new pc.Color(i739[12], i739[13], i739[14], i739[15])
  i738.m_DisabledColor = new pc.Color(i739[16], i739[17], i739[18], i739[19])
  i738.m_ColorMultiplier = i739[20]
  i738.m_FadeDuration = i739[21]
  return i738
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_HighlightedSprite')
  request.r(i741[2], i741[3], 0, i740, 'm_PressedSprite')
  request.r(i741[4], i741[5], 0, i740, 'm_SelectedSprite')
  request.r(i741[6], i741[7], 0, i740, 'm_DisabledSprite')
  return i740
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i743 = data
  i742.m_NormalTrigger = i743[0]
  i742.m_HighlightedTrigger = i743[1]
  i742.m_PressedTrigger = i743[2]
  i742.m_SelectedTrigger = i743[3]
  i742.m_DisabledTrigger = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i745 = data
  i744.ambientIntensity = i745[0]
  i744.reflectionIntensity = i745[1]
  i744.ambientMode = i745[2]
  i744.ambientLight = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.ambientSkyColor = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  i744.ambientGroundColor = new pc.Color(i745[11], i745[12], i745[13], i745[14])
  i744.ambientEquatorColor = new pc.Color(i745[15], i745[16], i745[17], i745[18])
  i744.fogColor = new pc.Color(i745[19], i745[20], i745[21], i745[22])
  i744.fogEndDistance = i745[23]
  i744.fogStartDistance = i745[24]
  i744.fogDensity = i745[25]
  i744.fog = !!i745[26]
  request.r(i745[27], i745[28], 0, i744, 'skybox')
  i744.fogMode = i745[29]
  var i747 = i745[30]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i747[i + 0]) );
  }
  i744.lightmaps = i746
  i744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i745[31], i744.lightProbes)
  i744.lightmapsMode = i745[32]
  i744.mixedBakeMode = i745[33]
  i744.environmentLightingMode = i745[34]
  i744.ambientProbe = new pc.SphericalHarmonicsL2(i745[35])
  i744.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i745[36])
  i744.useReferenceAmbientProbe = !!i745[37]
  request.r(i745[38], i745[39], 0, i744, 'customReflection')
  request.r(i745[40], i745[41], 0, i744, 'defaultReflection')
  i744.defaultReflectionMode = i745[42]
  i744.defaultReflectionResolution = i745[43]
  i744.sunLightObjectId = i745[44]
  i744.pixelLightCount = i745[45]
  i744.defaultReflectionHDR = !!i745[46]
  i744.hasLightDataAsset = !!i745[47]
  i744.hasManualGenerate = !!i745[48]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'lightmapColor')
  request.r(i751[2], i751[3], 0, i750, 'lightmapDirection')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i752 = root || new UnityEngine.LightProbes()
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i759 = data
  i758.name = i759[0]
  i758.bounciness = i759[1]
  i758.dynamicFriction = i759[2]
  i758.staticFriction = i759[3]
  i758.frictionCombine = i759[4]
  i758.bounceCombine = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i763[i + 0]));
  }
  i760.ShaderCompilationErrors = i762
  i760.name = i761[1]
  i760.guid = i761[2]
  var i765 = i761[3]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i760.shaderDefinedKeywords = i764
  var i767 = i761[4]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i767[i + 0]) );
  }
  i760.passes = i766
  var i769 = i761[5]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i769[i + 0]) );
  }
  i760.usePasses = i768
  var i771 = i761[6]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i771[i + 0]) );
  }
  i760.defaultParameterValues = i770
  request.r(i761[7], i761[8], 0, i760, 'unityFallbackShader')
  i760.readDepth = !!i761[9]
  i760.hasDepthOnlyPass = !!i761[10]
  i760.isCreatedByShaderGraph = !!i761[11]
  i760.disableBatching = !!i761[12]
  i760.compiled = !!i761[13]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i775 = data
  i774.shaderName = i775[0]
  i774.errorMessage = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i780 = root || new pc.UnityShaderPass()
  var i781 = data
  i780.id = i781[0]
  i780.subShaderIndex = i781[1]
  i780.name = i781[2]
  i780.passType = i781[3]
  i780.grabPassTextureName = i781[4]
  i780.usePass = !!i781[5]
  i780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[6], i780.zTest)
  i780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[7], i780.zWrite)
  i780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[8], i780.culling)
  i780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[9], i780.blending)
  i780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i781[10], i780.alphaBlending)
  i780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[11], i780.colorWriteMask)
  i780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[12], i780.offsetUnits)
  i780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[13], i780.offsetFactor)
  i780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[14], i780.stencilRef)
  i780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[15], i780.stencilReadMask)
  i780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[16], i780.stencilWriteMask)
  i780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[17], i780.stencilOp)
  i780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[18], i780.stencilOpFront)
  i780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i781[19], i780.stencilOpBack)
  var i783 = i781[20]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i783[i + 0]) );
  }
  i780.tags = i782
  var i785 = i781[21]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.passDefinedKeywords = i784
  var i787 = i781[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i787[i + 0]) );
  }
  i780.passDefinedKeywordGroups = i786
  var i789 = i781[23]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i789[i + 0]) );
  }
  i780.variants = i788
  var i791 = i781[24]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i791[i + 0]) );
  }
  i780.excludedVariants = i790
  i780.hasDepthReader = !!i781[25]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i793 = data
  i792.val = i793[0]
  i792.name = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i795 = data
  i794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[0], i794.src)
  i794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[1], i794.dst)
  i794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[2], i794.op)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i797 = data
  i796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[0], i796.pass)
  i796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[1], i796.fail)
  i796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[2], i796.zFail)
  i796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[3], i796.comp)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i801 = data
  i800.name = i801[0]
  i800.value = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.keywords = i806
  i804.hasDiscard = !!i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i811 = data
  i810.passId = i811[0]
  i810.subShaderIndex = i811[1]
  var i813 = i811[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i810.keywords = i812
  i810.vertexProgram = i811[3]
  i810.fragmentProgram = i811[4]
  i810.exportedForWebGl2 = !!i811[5]
  i810.readDepth = !!i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'shader')
  i816.pass = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i821 = data
  i820.name = i821[0]
  i820.type = i821[1]
  i820.value = new pc.Vec4( i821[2], i821[3], i821[4], i821[5] )
  i820.textureValue = i821[6]
  i820.shaderPropertyFlag = i821[7]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i823 = data
  i822.name = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'texture')
  i822.aabb = i823[3]
  i822.vertices = i823[4]
  i822.triangles = i823[5]
  i822.textureRect = UnityEngine.Rect.MinMaxRect(i823[6], i823[7], i823[8], i823[9])
  i822.packedRect = UnityEngine.Rect.MinMaxRect(i823[10], i823[11], i823[12], i823[13])
  i822.border = new pc.Vec4( i823[14], i823[15], i823[16], i823[17] )
  i822.transparency = i823[18]
  i822.bounds = i823[19]
  i822.pixelsPerUnit = i823[20]
  i822.textureWidth = i823[21]
  i822.textureHeight = i823[22]
  i822.nativeSize = new pc.Vec2( i823[23], i823[24] )
  i822.pivot = new pc.Vec2( i823[25], i823[26] )
  i822.textureRectOffset = new pc.Vec2( i823[27], i823[28] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i825 = data
  i824.name = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i827 = data
  i826.name = i827[0]
  i826.wrapMode = i827[1]
  i826.isLooping = !!i827[2]
  i826.length = i827[3]
  var i829 = i827[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i829[i + 0]) );
  }
  i826.curves = i828
  var i831 = i827[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i831[i + 0]) );
  }
  i826.events = i830
  i826.halfPrecision = !!i827[6]
  i826._frameRate = i827[7]
  i826.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i827[8], i826.localBounds)
  i826.hasMuscleCurves = !!i827[9]
  var i833 = i827[10]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i826.clipMuscleConstant = i832
  i826.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i827[11], i826.clipBindingConstant)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i837 = data
  i836.path = i837[0]
  i836.hash = i837[1]
  i836.componentType = i837[2]
  i836.property = i837[3]
  i836.keys = i837[4]
  var i839 = i837[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i839[i + 0]) );
  }
  i836.objectReferenceKeys = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i843 = data
  i842.time = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'value')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i847 = data
  i846.functionName = i847[0]
  i846.floatParameter = i847[1]
  i846.intParameter = i847[2]
  i846.stringParameter = i847[3]
  request.r(i847[4], i847[5], 0, i846, 'objectReferenceParameter')
  i846.time = i847[6]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.extends = new pc.Vec3( i849[3], i849[4], i849[5] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i852.genericBindings = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.pptrCurveMapping = i856
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i861[i + 0]) );
  }
  i858.layers = i860
  var i863 = i859[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i863[i + 0]) );
  }
  i858.parameters = i862
  i858.animationClips = i859[3]
  i858.avatarUnsupported = i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i867 = data
  i866.name = i867[0]
  i866.defaultWeight = i867[1]
  i866.blendingMode = i867[2]
  i866.avatarMask = i867[3]
  i866.syncedLayerIndex = i867[4]
  i866.syncedLayerAffectsTiming = !!i867[5]
  i866.syncedLayers = i867[6]
  i866.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i867[7], i866.stateMachine)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  i868.path = i869[2]
  var i871 = i869[3]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i871[i + 0]) );
  }
  i868.states = i870
  var i873 = i869[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i873[i + 0]) );
  }
  i868.machines = i872
  var i875 = i869[5]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i875[i + 0]) );
  }
  i868.entryStateTransitions = i874
  var i877 = i869[6]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i877[i + 0]) );
  }
  i868.exitStateTransitions = i876
  var i879 = i869[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i879[i + 0]) );
  }
  i868.anyStateTransitions = i878
  i868.defaultStateId = i869[8]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i883 = data
  i882.id = i883[0]
  i882.name = i883[1]
  i882.cycleOffset = i883[2]
  i882.cycleOffsetParameter = i883[3]
  i882.cycleOffsetParameterActive = !!i883[4]
  i882.mirror = !!i883[5]
  i882.mirrorParameter = i883[6]
  i882.mirrorParameterActive = !!i883[7]
  i882.motionId = i883[8]
  i882.nameHash = i883[9]
  i882.fullPathHash = i883[10]
  i882.speed = i883[11]
  i882.speedParameter = i883[12]
  i882.speedParameterActive = !!i883[13]
  i882.tag = i883[14]
  i882.tagHash = i883[15]
  i882.writeDefaultValues = !!i883[16]
  var i885 = i883[17]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.behaviours = i884
  var i887 = i883[18]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i887[i + 0]) );
  }
  i882.transitions = i886
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i893 = data
  i892.fullPath = i893[0]
  i892.canTransitionToSelf = !!i893[1]
  i892.duration = i893[2]
  i892.exitTime = i893[3]
  i892.hasExitTime = !!i893[4]
  i892.hasFixedDuration = !!i893[5]
  i892.interruptionSource = i893[6]
  i892.offset = i893[7]
  i892.orderedInterruption = !!i893[8]
  i892.destinationStateId = i893[9]
  i892.isExit = !!i893[10]
  i892.mute = !!i893[11]
  i892.solo = !!i893[12]
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i895[i + 0]) );
  }
  i892.conditions = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i901 = data
  i900.destinationStateId = i901[0]
  i900.isExit = !!i901[1]
  i900.mute = !!i901[2]
  i900.solo = !!i901[3]
  var i903 = i901[4]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i903[i + 0]) );
  }
  i900.conditions = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i907 = data
  i906.mode = i907[0]
  i906.parameter = i907[1]
  i906.threshold = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i911 = data
  i910.defaultBool = !!i911[0]
  i910.defaultFloat = i911[1]
  i910.defaultInt = i911[2]
  i910.name = i911[3]
  i910.nameHash = i911[4]
  i910.type = i911[5]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i913 = data
  i912.name = i913[0]
  i912.bytes64 = i913[1]
  i912.data = i913[2]
  return i912
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i915 = data
  i914.useSafeMode = !!i915[0]
  i914.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i915[1], i914.safeModeOptions)
  i914.timeScale = i915[2]
  i914.unscaledTimeScale = i915[3]
  i914.useSmoothDeltaTime = !!i915[4]
  i914.maxSmoothUnscaledTime = i915[5]
  i914.rewindCallbackMode = i915[6]
  i914.showUnityEditorReport = !!i915[7]
  i914.logBehaviour = i915[8]
  i914.drawGizmos = !!i915[9]
  i914.defaultRecyclable = !!i915[10]
  i914.defaultAutoPlay = i915[11]
  i914.defaultUpdateType = i915[12]
  i914.defaultTimeScaleIndependent = !!i915[13]
  i914.defaultEaseType = i915[14]
  i914.defaultEaseOvershootOrAmplitude = i915[15]
  i914.defaultEasePeriod = i915[16]
  i914.defaultAutoKill = !!i915[17]
  i914.defaultLoopType = i915[18]
  i914.debugMode = !!i915[19]
  i914.debugStoreTargetId = !!i915[20]
  i914.showPreviewPanel = !!i915[21]
  i914.storeSettingsLocation = i915[22]
  i914.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i915[23], i914.modules)
  i914.createASMDEF = !!i915[24]
  i914.showPlayingTweens = !!i915[25]
  i914.showPausedTweens = !!i915[26]
  return i914
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i916 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i917 = data
  i916.logBehaviour = i917[0]
  i916.nestedTweenFailureBehaviour = i917[1]
  return i916
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i918 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i919 = data
  i918.showPanel = !!i919[0]
  i918.audioEnabled = !!i919[1]
  i918.physicsEnabled = !!i919[2]
  i918.physics2DEnabled = !!i919[3]
  i918.spriteEnabled = !!i919[4]
  i918.uiEnabled = !!i919[5]
  i918.uiToolkitEnabled = !!i919[6]
  i918.textMeshProEnabled = !!i919[7]
  i918.tk2DEnabled = !!i919[8]
  i918.deAudioEnabled = !!i919[9]
  i918.deUnityExtendedEnabled = !!i919[10]
  i918.epoOutlineEnabled = !!i919[11]
  return i918
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_Settings' )
  var i921 = data
  i920.assetVersion = i921[0]
  i920.m_TextWrappingMode = i921[1]
  i920.m_enableKerning = !!i921[2]
  var i923 = i921[3]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(i923[i + 0]);
  }
  i920.m_ActiveFontFeatures = i922
  i920.m_enableExtraPadding = !!i921[4]
  i920.m_enableTintAllSprites = !!i921[5]
  i920.m_enableParseEscapeCharacters = !!i921[6]
  i920.m_EnableRaycastTarget = !!i921[7]
  i920.m_GetFontFeaturesAtRuntime = !!i921[8]
  i920.m_missingGlyphCharacter = i921[9]
  i920.m_ClearDynamicDataOnBuild = !!i921[10]
  i920.m_warningsDisabled = !!i921[11]
  request.r(i921[12], i921[13], 0, i920, 'm_defaultFontAsset')
  i920.m_defaultFontAssetPath = i921[14]
  i920.m_defaultFontSize = i921[15]
  i920.m_defaultAutoSizeMinRatio = i921[16]
  i920.m_defaultAutoSizeMaxRatio = i921[17]
  i920.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i921[18], i921[19] )
  i920.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i921[20], i921[21] )
  i920.m_autoSizeTextContainer = !!i921[22]
  i920.m_IsTextObjectScaleStatic = !!i921[23]
  var i925 = i921[24]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 1, i924, '')
  }
  i920.m_fallbackFontAssets = i924
  i920.m_matchMaterialPreset = !!i921[25]
  i920.m_HideSubTextObjects = !!i921[26]
  request.r(i921[27], i921[28], 0, i920, 'm_defaultSpriteAsset')
  i920.m_defaultSpriteAssetPath = i921[29]
  i920.m_enableEmojiSupport = !!i921[30]
  i920.m_MissingCharacterSpriteUnicode = i921[31]
  var i927 = i921[32]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 1, i926, '')
  }
  i920.m_EmojiFallbackTextAssets = i926
  i920.m_defaultColorGradientPresetsPath = i921[33]
  request.r(i921[34], i921[35], 0, i920, 'm_defaultStyleSheet')
  i920.m_StyleSheetsResourcePath = i921[36]
  request.r(i921[37], i921[38], 0, i920, 'm_leadingCharacters')
  request.r(i921[39], i921[40], 0, i920, 'm_followingCharacters')
  i920.m_UseModernHangulLineBreakingRules = !!i921[41]
  return i920
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'spriteSheet')
  var i937 = i935[2]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.TMP_Sprite', i937[i + 0]));
  }
  i934.spriteInfoList = i936
  var i939 = i935[3]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i934.fallbackSpriteAssets = i938
  var i941 = i935[4]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_SpriteCharacter', i941[i + 0]));
  }
  i934.m_SpriteCharacterTable = i940
  var i943 = i935[5]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.TMP_SpriteGlyph', i943[i + 0]));
  }
  i934.m_GlyphTable = i942
  i934.m_Version = i935[6]
  i934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i935[7], i934.m_FaceInfo)
  request.r(i935[8], i935[9], 0, i934, 'm_Material')
  return i934
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Sprite' )
  var i947 = data
  i946.name = i947[0]
  i946.hashCode = i947[1]
  i946.unicode = i947[2]
  i946.pivot = new pc.Vec2( i947[3], i947[4] )
  request.r(i947[5], i947[6], 0, i946, 'sprite')
  i946.id = i947[7]
  i946.x = i947[8]
  i946.y = i947[9]
  i946.width = i947[10]
  i946.height = i947[11]
  i946.xOffset = i947[12]
  i946.yOffset = i947[13]
  i946.xAdvance = i947[14]
  i946.scale = i947[15]
  return i946
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i953 = data
  i952.m_Name = i953[0]
  i952.m_ElementType = i953[1]
  i952.m_Unicode = i953[2]
  i952.m_GlyphIndex = i953[3]
  i952.m_Scale = i953[4]
  return i952
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'sprite')
  i956.m_Index = i957[2]
  i956.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i957[3], i956.m_Metrics)
  i956.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i957[4], i956.m_GlyphRect)
  i956.m_Scale = i957[5]
  i956.m_AtlasIndex = i957[6]
  i956.m_ClassDefinitionType = i957[7]
  return i956
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i959 = data
  i958.m_Width = i959[0]
  i958.m_Height = i959[1]
  i958.m_HorizontalBearingX = i959[2]
  i958.m_HorizontalBearingY = i959[3]
  i958.m_HorizontalAdvance = i959[4]
  return i958
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i961 = data
  i960.m_X = i961[0]
  i960.m_Y = i961[1]
  i960.m_Width = i961[2]
  i960.m_Height = i961[3]
  return i960
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i963 = data
  i962.m_FaceIndex = i963[0]
  i962.m_FamilyName = i963[1]
  i962.m_StyleName = i963[2]
  i962.m_PointSize = i963[3]
  i962.m_Scale = i963[4]
  i962.m_UnitsPerEM = i963[5]
  i962.m_LineHeight = i963[6]
  i962.m_AscentLine = i963[7]
  i962.m_CapLine = i963[8]
  i962.m_MeanLine = i963[9]
  i962.m_Baseline = i963[10]
  i962.m_DescentLine = i963[11]
  i962.m_SuperscriptOffset = i963[12]
  i962.m_SuperscriptSize = i963[13]
  i962.m_SubscriptOffset = i963[14]
  i962.m_SubscriptSize = i963[15]
  i962.m_UnderlineOffset = i963[16]
  i962.m_UnderlineThickness = i963[17]
  i962.m_StrikethroughOffset = i963[18]
  i962.m_StrikethroughThickness = i963[19]
  i962.m_TabWidth = i963[20]
  return i962
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_Style', i967[i + 0]));
  }
  i964.m_StyleList = i966
  return i964
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Style' )
  var i971 = data
  i970.m_Name = i971[0]
  i970.m_HashCode = i971[1]
  i970.m_OpeningDefinition = i971[2]
  i970.m_ClosingDefinition = i971[3]
  i970.m_OpeningTagArray = i971[4]
  i970.m_ClosingTagArray = i971[5]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i975[i + 0]) );
  }
  i972.files = i974
  i972.componentToPrefabIds = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i979 = data
  i978.path = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'unityObject')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i983[i + 0]) );
  }
  i980.scriptsExecutionOrder = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i985[i + 0]) );
  }
  i980.sortingLayers = i984
  var i987 = i981[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i987[i + 0]) );
  }
  i980.cullingLayers = i986
  i980.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i981[3], i980.timeSettings)
  i980.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i981[4], i980.physicsSettings)
  i980.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i981[5], i980.physics2DSettings)
  i980.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i981[6], i980.qualitySettings)
  i980.enableRealtimeShadows = !!i981[7]
  i980.enableAutoInstancing = !!i981[8]
  i980.enableStaticBatching = !!i981[9]
  i980.enableDynamicBatching = !!i981[10]
  i980.lightmapEncodingQuality = i981[11]
  i980.desiredColorSpace = i981[12]
  var i989 = i981[13]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i980.allTags = i988
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i993 = data
  i992.name = i993[0]
  i992.value = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i997 = data
  i996.id = i997[0]
  i996.name = i997[1]
  i996.value = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1003 = data
  i1002.fixedDeltaTime = i1003[0]
  i1002.maximumDeltaTime = i1003[1]
  i1002.timeScale = i1003[2]
  i1002.maximumParticleTimestep = i1003[3]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1005 = data
  i1004.gravity = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.defaultSolverIterations = i1005[3]
  i1004.bounceThreshold = i1005[4]
  i1004.autoSyncTransforms = !!i1005[5]
  i1004.autoSimulation = !!i1005[6]
  var i1007 = i1005[7]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1007[i + 0]) );
  }
  i1004.collisionMatrix = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.layerId = i1011[1]
  i1010.otherLayerId = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'material')
  i1012.gravity = new pc.Vec2( i1013[2], i1013[3] )
  i1012.positionIterations = i1013[4]
  i1012.velocityIterations = i1013[5]
  i1012.velocityThreshold = i1013[6]
  i1012.maxLinearCorrection = i1013[7]
  i1012.maxAngularCorrection = i1013[8]
  i1012.maxTranslationSpeed = i1013[9]
  i1012.maxRotationSpeed = i1013[10]
  i1012.baumgarteScale = i1013[11]
  i1012.baumgarteTOIScale = i1013[12]
  i1012.timeToSleep = i1013[13]
  i1012.linearSleepTolerance = i1013[14]
  i1012.angularSleepTolerance = i1013[15]
  i1012.defaultContactOffset = i1013[16]
  i1012.autoSimulation = !!i1013[17]
  i1012.queriesHitTriggers = !!i1013[18]
  i1012.queriesStartInColliders = !!i1013[19]
  i1012.callbacksOnDisable = !!i1013[20]
  i1012.reuseCollisionCallbacks = !!i1013[21]
  i1012.autoSyncTransforms = !!i1013[22]
  var i1015 = i1013[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1015[i + 0]) );
  }
  i1012.collisionMatrix = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.layerId = i1019[1]
  i1018.otherLayerId = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1023[i + 0]) );
  }
  i1020.qualityLevels = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.names = i1024
  i1020.shadows = i1021[2]
  i1020.anisotropicFiltering = i1021[3]
  i1020.antiAliasing = i1021[4]
  i1020.lodBias = i1021[5]
  i1020.shadowCascades = i1021[6]
  i1020.shadowDistance = i1021[7]
  i1020.shadowmaskMode = i1021[8]
  i1020.shadowProjection = i1021[9]
  i1020.shadowResolution = i1021[10]
  i1020.softParticles = !!i1021[11]
  i1020.softVegetation = !!i1021[12]
  i1020.activeColorSpace = i1021[13]
  i1020.desiredColorSpace = i1021[14]
  i1020.masterTextureLimit = i1021[15]
  i1020.maxQueuedFrames = i1021[16]
  i1020.particleRaycastBudget = i1021[17]
  i1020.pixelLightCount = i1021[18]
  i1020.realtimeReflectionProbes = !!i1021[19]
  i1020.shadowCascade2Split = i1021[20]
  i1020.shadowCascade4Split = new pc.Vec3( i1021[21], i1021[22], i1021[23] )
  i1020.streamingMipmapsActive = !!i1021[24]
  i1020.vSyncCount = i1021[25]
  i1020.asyncUploadBufferSize = i1021[26]
  i1020.asyncUploadTimeSlice = i1021[27]
  i1020.billboardsFaceCameraPosition = !!i1021[28]
  i1020.shadowNearPlaneOffset = i1021[29]
  i1020.streamingMipmapsMemoryBudget = i1021[30]
  i1020.maximumLODLevel = i1021[31]
  i1020.streamingMipmapsAddAllCameras = !!i1021[32]
  i1020.streamingMipmapsMaxLevelReduction = i1021[33]
  i1020.streamingMipmapsRenderersPerFrame = i1021[34]
  i1020.resolutionScalingFixedDPIFactor = i1021[35]
  i1020.streamingMipmapsMaxFileIORequests = i1021[36]
  i1020.currentQualityLevel = i1021[37]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1031 = data
  i1030.weight = i1031[0]
  i1030.vertices = i1031[1]
  i1030.normals = i1031[2]
  i1030.tangents = i1031[3]
  return i1030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[7],"63":[11],"64":[34],"65":[34],"66":[34],"67":[34],"68":[34],"69":[34],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[11],"85":[24],"86":[87],"88":[87],"10":[9],"89":[27],"90":[10],"91":[9],"92":[24,9],"93":[9,15],"94":[9],"95":[15,9],"96":[24],"97":[15,9],"98":[9],"99":[100],"101":[100],"102":[100],"103":[9],"104":[9],"14":[10],"16":[15,9],"105":[9],"13":[10],"106":[9],"107":[9],"108":[9],"109":[9],"110":[9],"111":[9],"112":[9],"113":[9],"114":[9],"17":[15,9],"115":[9],"116":[9],"117":[9],"118":[9],"119":[15,9],"120":[9],"121":[27],"122":[27],"28":[27],"123":[27],"124":[11],"125":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5211";

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

Deserializers.buildID = "a0a9c51f-8b50-4314-a7fb-bde3dfff08cf";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

