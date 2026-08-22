var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i12430 = root || request.c( 'UnityEngine.JointSpring' )
  var i12431 = data
  i12430.spring = i12431[0]
  i12430.damper = i12431[1]
  i12430.targetPosition = i12431[2]
  return i12430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i12432 = root || request.c( 'UnityEngine.JointMotor' )
  var i12433 = data
  i12432.m_TargetVelocity = i12433[0]
  i12432.m_Force = i12433[1]
  i12432.m_FreeSpin = i12433[2]
  return i12432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i12434 = root || request.c( 'UnityEngine.JointLimits' )
  var i12435 = data
  i12434.m_Min = i12435[0]
  i12434.m_Max = i12435[1]
  i12434.m_Bounciness = i12435[2]
  i12434.m_BounceMinVelocity = i12435[3]
  i12434.m_ContactDistance = i12435[4]
  i12434.minBounce = i12435[5]
  i12434.maxBounce = i12435[6]
  return i12434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i12436 = root || request.c( 'UnityEngine.JointDrive' )
  var i12437 = data
  i12436.m_PositionSpring = i12437[0]
  i12436.m_PositionDamper = i12437[1]
  i12436.m_MaximumForce = i12437[2]
  i12436.m_UseAcceleration = i12437[3]
  return i12436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i12438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i12439 = data
  i12438.m_Spring = i12439[0]
  i12438.m_Damper = i12439[1]
  return i12438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i12440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i12441 = data
  i12440.m_Limit = i12441[0]
  i12440.m_Bounciness = i12441[1]
  i12440.m_ContactDistance = i12441[2]
  return i12440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i12442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i12443 = data
  i12442.m_ExtremumSlip = i12443[0]
  i12442.m_ExtremumValue = i12443[1]
  i12442.m_AsymptoteSlip = i12443[2]
  i12442.m_AsymptoteValue = i12443[3]
  i12442.m_Stiffness = i12443[4]
  return i12442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i12444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i12445 = data
  i12444.m_LowerAngle = i12445[0]
  i12444.m_UpperAngle = i12445[1]
  return i12444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i12446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i12447 = data
  i12446.m_MotorSpeed = i12447[0]
  i12446.m_MaximumMotorTorque = i12447[1]
  return i12446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i12448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i12449 = data
  i12448.m_DampingRatio = i12449[0]
  i12448.m_Frequency = i12449[1]
  i12448.m_Angle = i12449[2]
  return i12448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i12450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i12451 = data
  i12450.m_LowerTranslation = i12451[0]
  i12450.m_UpperTranslation = i12451[1]
  return i12450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i12452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i12453 = data
  i12452.name = i12453[0]
  i12452.halfPrecision = !!i12453[1]
  i12452.useSimplification = !!i12453[2]
  i12452.useUInt32IndexFormat = !!i12453[3]
  i12452.vertexCount = i12453[4]
  i12452.aabb = i12453[5]
  var i12455 = i12453[6]
  var i12454 = []
  for(var i = 0; i < i12455.length; i += 1) {
    i12454.push( !!i12455[i + 0] );
  }
  i12452.streams = i12454
  i12452.vertices = i12453[7]
  var i12457 = i12453[8]
  var i12456 = []
  for(var i = 0; i < i12457.length; i += 1) {
    i12456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i12457[i + 0]) );
  }
  i12452.subMeshes = i12456
  var i12459 = i12453[9]
  var i12458 = []
  for(var i = 0; i < i12459.length; i += 16) {
    i12458.push( new pc.Mat4().setData(i12459[i + 0], i12459[i + 1], i12459[i + 2], i12459[i + 3],  i12459[i + 4], i12459[i + 5], i12459[i + 6], i12459[i + 7],  i12459[i + 8], i12459[i + 9], i12459[i + 10], i12459[i + 11],  i12459[i + 12], i12459[i + 13], i12459[i + 14], i12459[i + 15]) );
  }
  i12452.bindposes = i12458
  var i12461 = i12453[10]
  var i12460 = []
  for(var i = 0; i < i12461.length; i += 1) {
    i12460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i12461[i + 0]) );
  }
  i12452.blendShapes = i12460
  return i12452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i12466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i12467 = data
  i12466.triangles = i12467[0]
  return i12466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i12472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i12473 = data
  i12472.name = i12473[0]
  var i12475 = i12473[1]
  var i12474 = []
  for(var i = 0; i < i12475.length; i += 1) {
    i12474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i12475[i + 0]) );
  }
  i12472.frames = i12474
  return i12472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i12476 = root || new pc.UnityMaterial()
  var i12477 = data
  i12476.name = i12477[0]
  request.r(i12477[1], i12477[2], 0, i12476, 'shader')
  i12476.renderQueue = i12477[3]
  i12476.enableInstancing = !!i12477[4]
  var i12479 = i12477[5]
  var i12478 = []
  for(var i = 0; i < i12479.length; i += 1) {
    i12478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i12479[i + 0]) );
  }
  i12476.floatParameters = i12478
  var i12481 = i12477[6]
  var i12480 = []
  for(var i = 0; i < i12481.length; i += 1) {
    i12480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i12481[i + 0]) );
  }
  i12476.colorParameters = i12480
  var i12483 = i12477[7]
  var i12482 = []
  for(var i = 0; i < i12483.length; i += 1) {
    i12482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i12483[i + 0]) );
  }
  i12476.vectorParameters = i12482
  var i12485 = i12477[8]
  var i12484 = []
  for(var i = 0; i < i12485.length; i += 1) {
    i12484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i12485[i + 0]) );
  }
  i12476.textureParameters = i12484
  var i12487 = i12477[9]
  var i12486 = []
  for(var i = 0; i < i12487.length; i += 1) {
    i12486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i12487[i + 0]) );
  }
  i12476.materialFlags = i12486
  return i12476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i12490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i12491 = data
  i12490.name = i12491[0]
  i12490.value = i12491[1]
  return i12490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i12494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i12495 = data
  i12494.name = i12495[0]
  i12494.value = new pc.Color(i12495[1], i12495[2], i12495[3], i12495[4])
  return i12494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i12498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i12499 = data
  i12498.name = i12499[0]
  i12498.value = new pc.Vec4( i12499[1], i12499[2], i12499[3], i12499[4] )
  return i12498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i12502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i12503 = data
  i12502.name = i12503[0]
  request.r(i12503[1], i12503[2], 0, i12502, 'value')
  return i12502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i12506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i12507 = data
  i12506.name = i12507[0]
  i12506.enabled = !!i12507[1]
  return i12506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i12508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i12509 = data
  i12508.name = i12509[0]
  i12508.width = i12509[1]
  i12508.height = i12509[2]
  i12508.mipmapCount = i12509[3]
  i12508.anisoLevel = i12509[4]
  i12508.filterMode = i12509[5]
  i12508.hdr = !!i12509[6]
  i12508.format = i12509[7]
  i12508.wrapMode = i12509[8]
  i12508.alphaIsTransparency = !!i12509[9]
  i12508.alphaSource = i12509[10]
  i12508.graphicsFormat = i12509[11]
  i12508.sRGBTexture = !!i12509[12]
  i12508.desiredColorSpace = i12509[13]
  i12508.wrapU = i12509[14]
  i12508.wrapV = i12509[15]
  return i12508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i12510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i12511 = data
  i12510.position = new pc.Vec3( i12511[0], i12511[1], i12511[2] )
  i12510.scale = new pc.Vec3( i12511[3], i12511[4], i12511[5] )
  i12510.rotation = new pc.Quat(i12511[6], i12511[7], i12511[8], i12511[9])
  return i12510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i12512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i12513 = data
  i12512.center = new pc.Vec3( i12513[0], i12513[1], i12513[2] )
  i12512.size = new pc.Vec3( i12513[3], i12513[4], i12513[5] )
  i12512.enabled = !!i12513[6]
  i12512.isTrigger = !!i12513[7]
  request.r(i12513[8], i12513[9], 0, i12512, 'material')
  return i12512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i12514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i12515 = data
  i12514.color = new pc.Color(i12515[0], i12515[1], i12515[2], i12515[3])
  request.r(i12515[4], i12515[5], 0, i12514, 'sprite')
  i12514.flipX = !!i12515[6]
  i12514.flipY = !!i12515[7]
  i12514.drawMode = i12515[8]
  i12514.size = new pc.Vec2( i12515[9], i12515[10] )
  i12514.tileMode = i12515[11]
  i12514.adaptiveModeThreshold = i12515[12]
  i12514.maskInteraction = i12515[13]
  i12514.spriteSortPoint = i12515[14]
  i12514.enabled = !!i12515[15]
  request.r(i12515[16], i12515[17], 0, i12514, 'sharedMaterial')
  var i12517 = i12515[18]
  var i12516 = []
  for(var i = 0; i < i12517.length; i += 2) {
  request.r(i12517[i + 0], i12517[i + 1], 2, i12516, '')
  }
  i12514.sharedMaterials = i12516
  i12514.receiveShadows = !!i12515[19]
  i12514.shadowCastingMode = i12515[20]
  i12514.sortingLayerID = i12515[21]
  i12514.sortingOrder = i12515[22]
  i12514.lightmapIndex = i12515[23]
  i12514.lightmapSceneIndex = i12515[24]
  i12514.lightmapScaleOffset = new pc.Vec4( i12515[25], i12515[26], i12515[27], i12515[28] )
  i12514.lightProbeUsage = i12515[29]
  i12514.reflectionProbeUsage = i12515[30]
  return i12514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i12520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i12521 = data
  i12520.name = i12521[0]
  i12520.tagId = i12521[1]
  i12520.enabled = !!i12521[2]
  i12520.isStatic = !!i12521[3]
  i12520.layer = i12521[4]
  return i12520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i12524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i12525 = data
  i12524.weight = i12525[0]
  i12524.vertices = i12525[1]
  i12524.normals = i12525[2]
  i12524.tangents = i12525[3]
  return i12524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i12526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i12527 = data
  i12526.pivot = new pc.Vec2( i12527[0], i12527[1] )
  i12526.anchorMin = new pc.Vec2( i12527[2], i12527[3] )
  i12526.anchorMax = new pc.Vec2( i12527[4], i12527[5] )
  i12526.sizeDelta = new pc.Vec2( i12527[6], i12527[7] )
  i12526.anchoredPosition3D = new pc.Vec3( i12527[8], i12527[9], i12527[10] )
  i12526.rotation = new pc.Quat(i12527[11], i12527[12], i12527[13], i12527[14])
  i12526.scale = new pc.Vec3( i12527[15], i12527[16], i12527[17] )
  return i12526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i12528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i12529 = data
  i12528.planeDistance = i12529[0]
  i12528.referencePixelsPerUnit = i12529[1]
  i12528.isFallbackOverlay = !!i12529[2]
  i12528.renderMode = i12529[3]
  i12528.renderOrder = i12529[4]
  i12528.sortingLayerName = i12529[5]
  i12528.sortingOrder = i12529[6]
  i12528.scaleFactor = i12529[7]
  request.r(i12529[8], i12529[9], 0, i12528, 'worldCamera')
  i12528.overrideSorting = !!i12529[10]
  i12528.pixelPerfect = !!i12529[11]
  i12528.targetDisplay = i12529[12]
  i12528.overridePixelPerfect = !!i12529[13]
  i12528.enabled = !!i12529[14]
  return i12528
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i12530 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i12531 = data
  i12530.m_UiScaleMode = i12531[0]
  i12530.m_ReferencePixelsPerUnit = i12531[1]
  i12530.m_ScaleFactor = i12531[2]
  i12530.m_ReferenceResolution = new pc.Vec2( i12531[3], i12531[4] )
  i12530.m_ScreenMatchMode = i12531[5]
  i12530.m_MatchWidthOrHeight = i12531[6]
  i12530.m_PhysicalUnit = i12531[7]
  i12530.m_FallbackScreenDPI = i12531[8]
  i12530.m_DefaultSpriteDPI = i12531[9]
  i12530.m_DynamicPixelsPerUnit = i12531[10]
  i12530.m_PresetInfoIsWorld = !!i12531[11]
  return i12530
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i12532 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i12533 = data
  i12532.m_IgnoreReversedGraphics = !!i12533[0]
  i12532.m_BlockingObjects = i12533[1]
  i12532.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i12533[2] )
  return i12532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i12534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i12535 = data
  i12534.cullTransparentMesh = !!i12535[0]
  return i12534
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i12536 = root || request.c( 'UnityEngine.UI.Image' )
  var i12537 = data
  request.r(i12537[0], i12537[1], 0, i12536, 'm_Sprite')
  i12536.m_Type = i12537[2]
  i12536.m_PreserveAspect = !!i12537[3]
  i12536.m_FillCenter = !!i12537[4]
  i12536.m_FillMethod = i12537[5]
  i12536.m_FillAmount = i12537[6]
  i12536.m_FillClockwise = !!i12537[7]
  i12536.m_FillOrigin = i12537[8]
  i12536.m_UseSpriteMesh = !!i12537[9]
  i12536.m_PixelsPerUnitMultiplier = i12537[10]
  request.r(i12537[11], i12537[12], 0, i12536, 'm_Material')
  i12536.m_Maskable = !!i12537[13]
  i12536.m_Color = new pc.Color(i12537[14], i12537[15], i12537[16], i12537[17])
  i12536.m_RaycastTarget = !!i12537[18]
  i12536.m_RaycastPadding = new pc.Vec4( i12537[19], i12537[20], i12537[21], i12537[22] )
  return i12536
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i12538 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i12539 = data
  request.r(i12539[0], i12539[1], 0, i12538, 'm_Texture')
  i12538.m_UVRect = UnityEngine.Rect.MinMaxRect(i12539[2], i12539[3], i12539[4], i12539[5])
  request.r(i12539[6], i12539[7], 0, i12538, 'm_Material')
  i12538.m_Maskable = !!i12539[8]
  i12538.m_Color = new pc.Color(i12539[9], i12539[10], i12539[11], i12539[12])
  i12538.m_RaycastTarget = !!i12539[13]
  i12538.m_RaycastPadding = new pc.Vec4( i12539[14], i12539[15], i12539[16], i12539[17] )
  return i12538
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i12540 = root || request.c( 'ImageScroller' )
  var i12541 = data
  request.r(i12541[0], i12541[1], 0, i12540, 'rawImage')
  i12540.moveVector = new pc.Vec2( i12541[2], i12541[3] )
  return i12540
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i12542 = root || request.c( 'UIGuidingMove' )
  var i12543 = data
  request.r(i12543[0], i12543[1], 0, i12542, 'target')
  i12542.startPosition = new pc.Vec2( i12543[2], i12543[3] )
  i12542.endPosition = new pc.Vec2( i12543[4], i12543[5] )
  i12542.duration = i12543[6]
  i12542.ease = i12543[7]
  i12542.resetToStartOnComplete = !!i12543[8]
  i12542.loop = !!i12543[9]
  i12542.loopCount = i12543[10]
  i12542.loopType = i12543[11]
  return i12542
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i12544 = root || request.c( 'UIPulse' )
  var i12545 = data
  i12544.targetScale = new pc.Vec3( i12545[0], i12545[1], i12545[2] )
  i12544.duration = i12545[3]
  i12544.ease = i12545[4]
  return i12544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i12546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i12547 = data
  i12546.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i12547[0], i12546.main)
  i12546.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i12547[1], i12546.colorBySpeed)
  i12546.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i12547[2], i12546.colorOverLifetime)
  i12546.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i12547[3], i12546.emission)
  i12546.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i12547[4], i12546.rotationBySpeed)
  i12546.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i12547[5], i12546.rotationOverLifetime)
  i12546.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i12547[6], i12546.shape)
  i12546.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i12547[7], i12546.sizeBySpeed)
  i12546.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i12547[8], i12546.sizeOverLifetime)
  i12546.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i12547[9], i12546.textureSheetAnimation)
  i12546.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i12547[10], i12546.velocityOverLifetime)
  i12546.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i12547[11], i12546.noise)
  i12546.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i12547[12], i12546.inheritVelocity)
  i12546.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i12547[13], i12546.forceOverLifetime)
  i12546.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i12547[14], i12546.limitVelocityOverLifetime)
  i12546.useAutoRandomSeed = !!i12547[15]
  i12546.randomSeed = i12547[16]
  return i12546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i12548 = root || new pc.ParticleSystemMain()
  var i12549 = data
  i12548.duration = i12549[0]
  i12548.loop = !!i12549[1]
  i12548.prewarm = !!i12549[2]
  i12548.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[3], i12548.startDelay)
  i12548.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[4], i12548.startLifetime)
  i12548.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[5], i12548.startSpeed)
  i12548.startSize3D = !!i12549[6]
  i12548.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[7], i12548.startSizeX)
  i12548.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[8], i12548.startSizeY)
  i12548.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[9], i12548.startSizeZ)
  i12548.startRotation3D = !!i12549[10]
  i12548.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[11], i12548.startRotationX)
  i12548.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[12], i12548.startRotationY)
  i12548.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[13], i12548.startRotationZ)
  i12548.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12549[14], i12548.startColor)
  i12548.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12549[15], i12548.gravityModifier)
  i12548.simulationSpace = i12549[16]
  request.r(i12549[17], i12549[18], 0, i12548, 'customSimulationSpace')
  i12548.simulationSpeed = i12549[19]
  i12548.useUnscaledTime = !!i12549[20]
  i12548.scalingMode = i12549[21]
  i12548.playOnAwake = !!i12549[22]
  i12548.maxParticles = i12549[23]
  i12548.emitterVelocityMode = i12549[24]
  i12548.stopAction = i12549[25]
  return i12548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i12550 = root || new pc.MinMaxCurve()
  var i12551 = data
  i12550.mode = i12551[0]
  i12550.curveMin = new pc.AnimationCurve( { keys_flow: i12551[1] } )
  i12550.curveMax = new pc.AnimationCurve( { keys_flow: i12551[2] } )
  i12550.curveMultiplier = i12551[3]
  i12550.constantMin = i12551[4]
  i12550.constantMax = i12551[5]
  return i12550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i12552 = root || new pc.MinMaxGradient()
  var i12553 = data
  i12552.mode = i12553[0]
  i12552.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12553[1], i12552.gradientMin)
  i12552.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12553[2], i12552.gradientMax)
  i12552.colorMin = new pc.Color(i12553[3], i12553[4], i12553[5], i12553[6])
  i12552.colorMax = new pc.Color(i12553[7], i12553[8], i12553[9], i12553[10])
  return i12552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i12554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i12555 = data
  i12554.mode = i12555[0]
  var i12557 = i12555[1]
  var i12556 = []
  for(var i = 0; i < i12557.length; i += 1) {
    i12556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i12557[i + 0]) );
  }
  i12554.colorKeys = i12556
  var i12559 = i12555[2]
  var i12558 = []
  for(var i = 0; i < i12559.length; i += 1) {
    i12558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i12559[i + 0]) );
  }
  i12554.alphaKeys = i12558
  return i12554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i12560 = root || new pc.ParticleSystemColorBySpeed()
  var i12561 = data
  i12560.enabled = !!i12561[0]
  i12560.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12561[1], i12560.color)
  i12560.range = new pc.Vec2( i12561[2], i12561[3] )
  return i12560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i12564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i12565 = data
  i12564.color = new pc.Color(i12565[0], i12565[1], i12565[2], i12565[3])
  i12564.time = i12565[4]
  return i12564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i12568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i12569 = data
  i12568.alpha = i12569[0]
  i12568.time = i12569[1]
  return i12568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i12570 = root || new pc.ParticleSystemColorOverLifetime()
  var i12571 = data
  i12570.enabled = !!i12571[0]
  i12570.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12571[1], i12570.color)
  return i12570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i12572 = root || new pc.ParticleSystemEmitter()
  var i12573 = data
  i12572.enabled = !!i12573[0]
  i12572.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12573[1], i12572.rateOverTime)
  i12572.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12573[2], i12572.rateOverDistance)
  var i12575 = i12573[3]
  var i12574 = []
  for(var i = 0; i < i12575.length; i += 1) {
    i12574.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i12575[i + 0]) );
  }
  i12572.bursts = i12574
  return i12572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i12578 = root || new pc.ParticleSystemBurst()
  var i12579 = data
  i12578.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12579[0], i12578.count)
  i12578.cycleCount = i12579[1]
  i12578.minCount = i12579[2]
  i12578.maxCount = i12579[3]
  i12578.repeatInterval = i12579[4]
  i12578.time = i12579[5]
  return i12578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i12580 = root || new pc.ParticleSystemRotationBySpeed()
  var i12581 = data
  i12580.enabled = !!i12581[0]
  i12580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12581[1], i12580.x)
  i12580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12581[2], i12580.y)
  i12580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12581[3], i12580.z)
  i12580.separateAxes = !!i12581[4]
  i12580.range = new pc.Vec2( i12581[5], i12581[6] )
  return i12580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i12582 = root || new pc.ParticleSystemRotationOverLifetime()
  var i12583 = data
  i12582.enabled = !!i12583[0]
  i12582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12583[1], i12582.x)
  i12582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12583[2], i12582.y)
  i12582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12583[3], i12582.z)
  i12582.separateAxes = !!i12583[4]
  return i12582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i12584 = root || new pc.ParticleSystemShape()
  var i12585 = data
  i12584.enabled = !!i12585[0]
  i12584.shapeType = i12585[1]
  i12584.randomDirectionAmount = i12585[2]
  i12584.sphericalDirectionAmount = i12585[3]
  i12584.randomPositionAmount = i12585[4]
  i12584.alignToDirection = !!i12585[5]
  i12584.radius = i12585[6]
  i12584.radiusMode = i12585[7]
  i12584.radiusSpread = i12585[8]
  i12584.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12585[9], i12584.radiusSpeed)
  i12584.radiusThickness = i12585[10]
  i12584.angle = i12585[11]
  i12584.length = i12585[12]
  i12584.boxThickness = new pc.Vec3( i12585[13], i12585[14], i12585[15] )
  i12584.meshShapeType = i12585[16]
  request.r(i12585[17], i12585[18], 0, i12584, 'mesh')
  request.r(i12585[19], i12585[20], 0, i12584, 'meshRenderer')
  request.r(i12585[21], i12585[22], 0, i12584, 'skinnedMeshRenderer')
  i12584.useMeshMaterialIndex = !!i12585[23]
  i12584.meshMaterialIndex = i12585[24]
  i12584.useMeshColors = !!i12585[25]
  i12584.normalOffset = i12585[26]
  i12584.arc = i12585[27]
  i12584.arcMode = i12585[28]
  i12584.arcSpread = i12585[29]
  i12584.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12585[30], i12584.arcSpeed)
  i12584.donutRadius = i12585[31]
  i12584.position = new pc.Vec3( i12585[32], i12585[33], i12585[34] )
  i12584.rotation = new pc.Vec3( i12585[35], i12585[36], i12585[37] )
  i12584.scale = new pc.Vec3( i12585[38], i12585[39], i12585[40] )
  return i12584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i12586 = root || new pc.ParticleSystemSizeBySpeed()
  var i12587 = data
  i12586.enabled = !!i12587[0]
  i12586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[1], i12586.x)
  i12586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[2], i12586.y)
  i12586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[3], i12586.z)
  i12586.separateAxes = !!i12587[4]
  i12586.range = new pc.Vec2( i12587[5], i12587[6] )
  return i12586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i12588 = root || new pc.ParticleSystemSizeOverLifetime()
  var i12589 = data
  i12588.enabled = !!i12589[0]
  i12588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12589[1], i12588.x)
  i12588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12589[2], i12588.y)
  i12588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12589[3], i12588.z)
  i12588.separateAxes = !!i12589[4]
  return i12588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i12590 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i12591 = data
  i12590.enabled = !!i12591[0]
  i12590.mode = i12591[1]
  i12590.animation = i12591[2]
  i12590.numTilesX = i12591[3]
  i12590.numTilesY = i12591[4]
  i12590.useRandomRow = !!i12591[5]
  i12590.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12591[6], i12590.frameOverTime)
  i12590.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12591[7], i12590.startFrame)
  i12590.cycleCount = i12591[8]
  i12590.rowIndex = i12591[9]
  i12590.flipU = i12591[10]
  i12590.flipV = i12591[11]
  i12590.spriteCount = i12591[12]
  var i12593 = i12591[13]
  var i12592 = []
  for(var i = 0; i < i12593.length; i += 2) {
  request.r(i12593[i + 0], i12593[i + 1], 2, i12592, '')
  }
  i12590.sprites = i12592
  return i12590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i12596 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i12597 = data
  i12596.enabled = !!i12597[0]
  i12596.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[1], i12596.x)
  i12596.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[2], i12596.y)
  i12596.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[3], i12596.z)
  i12596.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[4], i12596.radial)
  i12596.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[5], i12596.speedModifier)
  i12596.space = i12597[6]
  i12596.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[7], i12596.orbitalX)
  i12596.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[8], i12596.orbitalY)
  i12596.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[9], i12596.orbitalZ)
  i12596.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[10], i12596.orbitalOffsetX)
  i12596.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[11], i12596.orbitalOffsetY)
  i12596.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12597[12], i12596.orbitalOffsetZ)
  return i12596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i12598 = root || new pc.ParticleSystemNoise()
  var i12599 = data
  i12598.enabled = !!i12599[0]
  i12598.separateAxes = !!i12599[1]
  i12598.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[2], i12598.strengthX)
  i12598.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[3], i12598.strengthY)
  i12598.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[4], i12598.strengthZ)
  i12598.frequency = i12599[5]
  i12598.damping = !!i12599[6]
  i12598.octaveCount = i12599[7]
  i12598.octaveMultiplier = i12599[8]
  i12598.octaveScale = i12599[9]
  i12598.quality = i12599[10]
  i12598.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[11], i12598.scrollSpeed)
  i12598.scrollSpeedMultiplier = i12599[12]
  i12598.remapEnabled = !!i12599[13]
  i12598.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[14], i12598.remapX)
  i12598.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[15], i12598.remapY)
  i12598.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[16], i12598.remapZ)
  i12598.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[17], i12598.positionAmount)
  i12598.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[18], i12598.rotationAmount)
  i12598.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12599[19], i12598.sizeAmount)
  return i12598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i12600 = root || new pc.ParticleSystemInheritVelocity()
  var i12601 = data
  i12600.enabled = !!i12601[0]
  i12600.mode = i12601[1]
  i12600.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12601[2], i12600.curve)
  return i12600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i12602 = root || new pc.ParticleSystemForceOverLifetime()
  var i12603 = data
  i12602.enabled = !!i12603[0]
  i12602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12603[1], i12602.x)
  i12602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12603[2], i12602.y)
  i12602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12603[3], i12602.z)
  i12602.space = i12603[4]
  i12602.randomized = !!i12603[5]
  return i12602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i12604 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i12605 = data
  i12604.enabled = !!i12605[0]
  i12604.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12605[1], i12604.limit)
  i12604.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12605[2], i12604.limitX)
  i12604.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12605[3], i12604.limitY)
  i12604.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12605[4], i12604.limitZ)
  i12604.dampen = i12605[5]
  i12604.separateAxes = !!i12605[6]
  i12604.space = i12605[7]
  i12604.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12605[8], i12604.drag)
  i12604.multiplyDragByParticleSize = !!i12605[9]
  i12604.multiplyDragByParticleVelocity = !!i12605[10]
  return i12604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i12606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i12607 = data
  request.r(i12607[0], i12607[1], 0, i12606, 'mesh')
  i12606.meshCount = i12607[2]
  i12606.activeVertexStreamsCount = i12607[3]
  i12606.alignment = i12607[4]
  i12606.renderMode = i12607[5]
  i12606.sortMode = i12607[6]
  i12606.lengthScale = i12607[7]
  i12606.velocityScale = i12607[8]
  i12606.cameraVelocityScale = i12607[9]
  i12606.normalDirection = i12607[10]
  i12606.sortingFudge = i12607[11]
  i12606.minParticleSize = i12607[12]
  i12606.maxParticleSize = i12607[13]
  i12606.pivot = new pc.Vec3( i12607[14], i12607[15], i12607[16] )
  request.r(i12607[17], i12607[18], 0, i12606, 'trailMaterial')
  i12606.applyActiveColorSpace = !!i12607[19]
  i12606.enabled = !!i12607[20]
  request.r(i12607[21], i12607[22], 0, i12606, 'sharedMaterial')
  var i12609 = i12607[23]
  var i12608 = []
  for(var i = 0; i < i12609.length; i += 2) {
  request.r(i12609[i + 0], i12609[i + 1], 2, i12608, '')
  }
  i12606.sharedMaterials = i12608
  i12606.receiveShadows = !!i12607[24]
  i12606.shadowCastingMode = i12607[25]
  i12606.sortingLayerID = i12607[26]
  i12606.sortingOrder = i12607[27]
  i12606.lightmapIndex = i12607[28]
  i12606.lightmapSceneIndex = i12607[29]
  i12606.lightmapScaleOffset = new pc.Vec4( i12607[30], i12607[31], i12607[32], i12607[33] )
  i12606.lightProbeUsage = i12607[34]
  i12606.reflectionProbeUsage = i12607[35]
  return i12606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i12610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i12611 = data
  i12610.name = i12611[0]
  i12610.atlasId = i12611[1]
  i12610.mipmapCount = i12611[2]
  i12610.hdr = !!i12611[3]
  i12610.size = i12611[4]
  i12610.anisoLevel = i12611[5]
  i12610.filterMode = i12611[6]
  var i12613 = i12611[7]
  var i12612 = []
  for(var i = 0; i < i12613.length; i += 4) {
    i12612.push( UnityEngine.Rect.MinMaxRect(i12613[i + 0], i12613[i + 1], i12613[i + 2], i12613[i + 3]) );
  }
  i12610.rects = i12612
  i12610.wrapU = i12611[8]
  i12610.wrapV = i12611[9]
  return i12610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i12616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i12617 = data
  i12616.name = i12617[0]
  i12616.index = i12617[1]
  i12616.startup = !!i12617[2]
  return i12616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i12618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i12619 = data
  i12618.aspect = i12619[0]
  i12618.orthographic = !!i12619[1]
  i12618.orthographicSize = i12619[2]
  i12618.backgroundColor = new pc.Color(i12619[3], i12619[4], i12619[5], i12619[6])
  i12618.nearClipPlane = i12619[7]
  i12618.farClipPlane = i12619[8]
  i12618.fieldOfView = i12619[9]
  i12618.depth = i12619[10]
  i12618.clearFlags = i12619[11]
  i12618.cullingMask = i12619[12]
  i12618.rect = i12619[13]
  request.r(i12619[14], i12619[15], 0, i12618, 'targetTexture')
  i12618.usePhysicalProperties = !!i12619[16]
  i12618.focalLength = i12619[17]
  i12618.sensorSize = new pc.Vec2( i12619[18], i12619[19] )
  i12618.lensShift = new pc.Vec2( i12619[20], i12619[21] )
  i12618.gateFit = i12619[22]
  i12618.commandBufferCount = i12619[23]
  i12618.cameraType = i12619[24]
  i12618.enabled = !!i12619[25]
  return i12618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i12620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i12621 = data
  request.r(i12621[0], i12621[1], 0, i12620, 'sharedMesh')
  return i12620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i12622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i12623 = data
  request.r(i12623[0], i12623[1], 0, i12622, 'additionalVertexStreams')
  i12622.enabled = !!i12623[2]
  request.r(i12623[3], i12623[4], 0, i12622, 'sharedMaterial')
  var i12625 = i12623[5]
  var i12624 = []
  for(var i = 0; i < i12625.length; i += 2) {
  request.r(i12625[i + 0], i12625[i + 1], 2, i12624, '')
  }
  i12622.sharedMaterials = i12624
  i12622.receiveShadows = !!i12623[6]
  i12622.shadowCastingMode = i12623[7]
  i12622.sortingLayerID = i12623[8]
  i12622.sortingOrder = i12623[9]
  i12622.lightmapIndex = i12623[10]
  i12622.lightmapSceneIndex = i12623[11]
  i12622.lightmapScaleOffset = new pc.Vec4( i12623[12], i12623[13], i12623[14], i12623[15] )
  i12622.lightProbeUsage = i12623[16]
  i12622.reflectionProbeUsage = i12623[17]
  return i12622
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i12626 = root || request.c( 'MaterialUVScroller' )
  var i12627 = data
  request.r(i12627[0], i12627[1], 0, i12626, 'targetMaterial')
  i12626.scrollSpeed = new pc.Vec2( i12627[2], i12627[3] )
  return i12626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i12628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i12629 = data
  i12628.type = i12629[0]
  i12628.color = new pc.Color(i12629[1], i12629[2], i12629[3], i12629[4])
  i12628.cullingMask = i12629[5]
  i12628.intensity = i12629[6]
  i12628.range = i12629[7]
  i12628.spotAngle = i12629[8]
  i12628.shadows = i12629[9]
  i12628.shadowNormalBias = i12629[10]
  i12628.shadowBias = i12629[11]
  i12628.shadowStrength = i12629[12]
  i12628.shadowResolution = i12629[13]
  i12628.lightmapBakeType = i12629[14]
  i12628.renderMode = i12629[15]
  request.r(i12629[16], i12629[17], 0, i12628, 'cookie')
  i12628.cookieSize = i12629[18]
  i12628.shadowNearPlane = i12629[19]
  i12628.enabled = !!i12629[20]
  return i12628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i12630 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i12631 = data
  request.r(i12631[0], i12631[1], 0, i12630, 'm_FirstSelected')
  i12630.m_sendNavigationEvents = !!i12631[2]
  i12630.m_DragThreshold = i12631[3]
  return i12630
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i12632 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i12633 = data
  i12632.m_HorizontalAxis = i12633[0]
  i12632.m_VerticalAxis = i12633[1]
  i12632.m_SubmitButton = i12633[2]
  i12632.m_CancelButton = i12633[3]
  i12632.m_InputActionsPerSecond = i12633[4]
  i12632.m_RepeatDelay = i12633[5]
  i12632.m_ForceModuleActive = !!i12633[6]
  i12632.m_SendPointerHoverToParent = !!i12633[7]
  return i12632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i12634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i12635 = data
  request.r(i12635[0], i12635[1], 0, i12634, 'animatorController')
  request.r(i12635[2], i12635[3], 0, i12634, 'avatar')
  i12634.updateMode = i12635[4]
  i12634.hasTransformHierarchy = !!i12635[5]
  i12634.applyRootMotion = !!i12635[6]
  var i12637 = i12635[7]
  var i12636 = []
  for(var i = 0; i < i12637.length; i += 2) {
  request.r(i12637[i + 0], i12637[i + 1], 2, i12636, '')
  }
  i12634.humanBones = i12636
  i12634.enabled = !!i12635[8]
  return i12634
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i12640 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i12641 = data
  request.r(i12641[0], i12641[1], 0, i12640, 'animator')
  i12640.kickDuration = i12641[2]
  return i12640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i12642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i12643 = data
  request.r(i12643[0], i12643[1], 0, i12642, 'sharedMesh')
  var i12645 = i12643[2]
  var i12644 = []
  for(var i = 0; i < i12645.length; i += 2) {
  request.r(i12645[i + 0], i12645[i + 1], 2, i12644, '')
  }
  i12642.bones = i12644
  i12642.updateWhenOffscreen = !!i12643[3]
  i12642.localBounds = i12643[4]
  request.r(i12643[5], i12643[6], 0, i12642, 'rootBone')
  var i12647 = i12643[7]
  var i12646 = []
  for(var i = 0; i < i12647.length; i += 1) {
    i12646.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i12647[i + 0]) );
  }
  i12642.blendShapesWeights = i12646
  i12642.enabled = !!i12643[8]
  request.r(i12643[9], i12643[10], 0, i12642, 'sharedMaterial')
  var i12649 = i12643[11]
  var i12648 = []
  for(var i = 0; i < i12649.length; i += 2) {
  request.r(i12649[i + 0], i12649[i + 1], 2, i12648, '')
  }
  i12642.sharedMaterials = i12648
  i12642.receiveShadows = !!i12643[12]
  i12642.shadowCastingMode = i12643[13]
  i12642.sortingLayerID = i12643[14]
  i12642.sortingOrder = i12643[15]
  i12642.lightmapIndex = i12643[16]
  i12642.lightmapSceneIndex = i12643[17]
  i12642.lightmapScaleOffset = new pc.Vec4( i12643[18], i12643[19], i12643[20], i12643[21] )
  i12642.lightProbeUsage = i12643[22]
  i12642.reflectionProbeUsage = i12643[23]
  return i12642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i12652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i12653 = data
  i12652.weight = i12653[0]
  return i12652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i12654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i12655 = data
  i12654.center = new pc.Vec3( i12655[0], i12655[1], i12655[2] )
  i12654.radius = i12655[3]
  i12654.enabled = !!i12655[4]
  i12654.isTrigger = !!i12655[5]
  request.r(i12655[6], i12655[7], 0, i12654, 'material')
  return i12654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i12656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i12657 = data
  i12656.mass = i12657[0]
  i12656.drag = i12657[1]
  i12656.angularDrag = i12657[2]
  i12656.useGravity = !!i12657[3]
  i12656.isKinematic = !!i12657[4]
  i12656.constraints = i12657[5]
  i12656.maxAngularVelocity = i12657[6]
  i12656.collisionDetectionMode = i12657[7]
  i12656.interpolation = i12657[8]
  return i12656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i12658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i12659 = data
  var i12661 = i12659[0]
  var i12660 = []
  for(var i = 0; i < i12661.length; i += 3) {
    i12660.push( new pc.Vec3( i12661[i + 0], i12661[i + 1], i12661[i + 2] ) );
  }
  i12658.positions = i12660
  i12658.positionCount = i12659[1]
  i12658.time = i12659[2]
  i12658.startWidth = i12659[3]
  i12658.endWidth = i12659[4]
  i12658.widthMultiplier = i12659[5]
  i12658.autodestruct = !!i12659[6]
  i12658.emitting = !!i12659[7]
  i12658.numCornerVertices = i12659[8]
  i12658.numCapVertices = i12659[9]
  i12658.minVertexDistance = i12659[10]
  i12658.colorGradient = i12659[11] ? new pc.ColorGradient(i12659[11][0], i12659[11][1], i12659[11][2]) : null
  i12658.startColor = new pc.Color(i12659[12], i12659[13], i12659[14], i12659[15])
  i12658.endColor = new pc.Color(i12659[16], i12659[17], i12659[18], i12659[19])
  i12658.generateLightingData = !!i12659[20]
  i12658.textureMode = i12659[21]
  i12658.alignment = i12659[22]
  i12658.widthCurve = new pc.AnimationCurve( { keys_flow: i12659[23] } )
  i12658.enabled = !!i12659[24]
  request.r(i12659[25], i12659[26], 0, i12658, 'sharedMaterial')
  var i12663 = i12659[27]
  var i12662 = []
  for(var i = 0; i < i12663.length; i += 2) {
  request.r(i12663[i + 0], i12663[i + 1], 2, i12662, '')
  }
  i12658.sharedMaterials = i12662
  i12658.receiveShadows = !!i12659[28]
  i12658.shadowCastingMode = i12659[29]
  i12658.sortingLayerID = i12659[30]
  i12658.sortingOrder = i12659[31]
  i12658.lightmapIndex = i12659[32]
  i12658.lightmapSceneIndex = i12659[33]
  i12658.lightmapScaleOffset = new pc.Vec4( i12659[34], i12659[35], i12659[36], i12659[37] )
  i12658.lightProbeUsage = i12659[38]
  i12658.reflectionProbeUsage = i12659[39]
  return i12658
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i12666 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i12667 = data
  i12666.blockBounceSpeed = i12667[0]
  i12666.blockBounceUpward = i12667[1]
  i12666.goalFallSpeed = i12667[2]
  i12666.goalFallDownward = i12667[3]
  i12666.goalDropDamping = i12667[4]
  request.r(i12667[5], i12667[6], 0, i12666, 'leftTop')
  request.r(i12667[7], i12667[8], 0, i12666, 'bottomCenter')
  request.r(i12667[9], i12667[10], 0, i12666, 'rightTop')
  i12666.leftTopY = i12667[11]
  i12666.bottomCenterY = i12667[12]
  i12666.rightTopY = i12667[13]
  i12666.halfWidth = i12667[14]
  i12666.goalZ = i12667[15]
  i12666.flightTime = i12667[16]
  request.r(i12667[17], i12667[18], 0, i12666, 'trailRenderer')
  i12666.goalTag = i12667[19]
  return i12666
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i12668 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i12669 = data
  request.r(i12669[0], i12669[1], 0, i12668, 'leftPost')
  request.r(i12669[2], i12669[3], 0, i12668, 'rightPost')
  i12668.baseSpeed = i12669[4]
  i12668.changeSpeedByRound = !!i12669[5]
  return i12668
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i12670 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i12671 = data
  request.r(i12671[0], i12671[1], 0, i12670, 'leftLimit')
  request.r(i12671[2], i12671[3], 0, i12670, 'rightLimit')
  i12670.speed = i12671[4]
  i12670.startActive = !!i12671[5]
  return i12670
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i12672 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i12673 = data
  request.r(i12673[0], i12673[1], 0, i12672, 'leftPoint')
  request.r(i12673[2], i12673[3], 0, i12672, 'rightPoint')
  i12672.speed = i12673[4]
  request.r(i12673[5], i12673[6], 0, i12672, 'aimLineRenderer')
  request.r(i12673[7], i12673[8], 0, i12672, 'ballTransform')
  i12672.lineWidth = i12673[9]
  i12672.dashDensity = i12673[10]
  i12672.dashRatio = i12673[11]
  i12672.dashColor = new pc.Color(i12673[12], i12673[13], i12673[14], i12673[15])
  i12672.lineGroundY = i12673[16]
  i12672.pulseEffect = !!i12673[17]
  i12672.pulseSpeed = i12673[18]
  i12672.pulseScaleAmount = i12673[19]
  i12672.sortingOrder = i12673[20]
  i12672.sortingLayerName = i12673[21]
  return i12672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i12674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i12675 = data
  i12674.textureMode = i12675[0]
  i12674.alignment = i12675[1]
  i12674.widthCurve = new pc.AnimationCurve( { keys_flow: i12675[2] } )
  i12674.colorGradient = i12675[3] ? new pc.ColorGradient(i12675[3][0], i12675[3][1], i12675[3][2]) : null
  var i12677 = i12675[4]
  var i12676 = []
  for(var i = 0; i < i12677.length; i += 3) {
    i12676.push( new pc.Vec3( i12677[i + 0], i12677[i + 1], i12677[i + 2] ) );
  }
  i12674.positions = i12676
  i12674.positionCount = i12675[5]
  i12674.widthMultiplier = i12675[6]
  i12674.startWidth = i12675[7]
  i12674.endWidth = i12675[8]
  i12674.numCornerVertices = i12675[9]
  i12674.numCapVertices = i12675[10]
  i12674.useWorldSpace = !!i12675[11]
  i12674.loop = !!i12675[12]
  i12674.startColor = new pc.Color(i12675[13], i12675[14], i12675[15], i12675[16])
  i12674.endColor = new pc.Color(i12675[17], i12675[18], i12675[19], i12675[20])
  i12674.generateLightingData = !!i12675[21]
  i12674.enabled = !!i12675[22]
  request.r(i12675[23], i12675[24], 0, i12674, 'sharedMaterial')
  var i12679 = i12675[25]
  var i12678 = []
  for(var i = 0; i < i12679.length; i += 2) {
  request.r(i12679[i + 0], i12679[i + 1], 2, i12678, '')
  }
  i12674.sharedMaterials = i12678
  i12674.receiveShadows = !!i12675[26]
  i12674.shadowCastingMode = i12675[27]
  i12674.sortingLayerID = i12675[28]
  i12674.sortingOrder = i12675[29]
  i12674.lightmapIndex = i12675[30]
  i12674.lightmapSceneIndex = i12675[31]
  i12674.lightmapScaleOffset = new pc.Vec4( i12675[32], i12675[33], i12675[34], i12675[35] )
  i12674.lightProbeUsage = i12675[36]
  i12674.reflectionProbeUsage = i12675[37]
  return i12674
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i12680 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i12681 = data
  i12680.kickImpactDelay = i12681[0]
  request.r(i12681[1], i12681[2], 0, i12680, 'ball')
  request.r(i12681[3], i12681[4], 0, i12680, 'targetMover')
  request.r(i12681[5], i12681[6], 0, i12680, 'goalkeeper')
  request.r(i12681[7], i12681[8], 0, i12680, 'ronaldoAnimator')
  request.r(i12681[9], i12681[10], 0, i12680, 'uiManager')
  request.r(i12681[11], i12681[12], 0, i12680, 'defenderRound2')
  request.r(i12681[13], i12681[14], 0, i12680, 'defenderRound3')
  i12680.targetSpeeds = i12681[15]
  i12680.delayBetweenRounds = i12681[16]
  i12680.promptEveryRound = !!i12681[17]
  return i12680
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i12682 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i12683 = data
  var i12685 = i12683[0]
  var i12684 = []
  for(var i = 0; i < i12685.length; i += 2) {
  request.r(i12685[i + 0], i12685[i + 1], 2, i12684, '')
  }
  i12682.roundIndicators = i12684
  request.r(i12683[1], i12683[2], 0, i12682, 'iconEmpty')
  request.r(i12683[3], i12683[4], 0, i12682, 'iconCheck')
  request.r(i12683[5], i12683[6], 0, i12682, 'iconCross')
  request.r(i12683[7], i12683[8], 0, i12682, 'winEndcardPanel')
  request.r(i12683[9], i12683[10], 0, i12682, 'losePanel')
  request.r(i12683[11], i12683[12], 0, i12682, 'promptText')
  var i12687 = i12683[13]
  var i12686 = []
  for(var i = 0; i < i12687.length; i += 2) {
  request.r(i12687[i + 0], i12687[i + 1], 2, i12686, '')
  }
  i12682.objectsToShowOnWin = i12686
  i12682.winDelay = i12683[14]
  var i12689 = i12683[15]
  var i12688 = []
  for(var i = 0; i < i12689.length; i += 2) {
  request.r(i12689[i + 0], i12689[i + 1], 2, i12688, '')
  }
  i12682.objectsToHideOnWin = i12688
  var i12691 = i12683[16]
  var i12690 = []
  for(var i = 0; i < i12691.length; i += 2) {
  request.r(i12691[i + 0], i12691[i + 1], 2, i12690, '')
  }
  i12682.objectsToHideOnLose = i12690
  var i12693 = i12683[17]
  var i12692 = []
  for(var i = 0; i < i12693.length; i += 2) {
  request.r(i12693[i + 0], i12693[i + 1], 2, i12692, '')
  }
  i12682.extraObjectsToHide = i12692
  return i12682
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i12698 = root || request.c( 'Ply_SoundManager' )
  var i12699 = data
  i12698.audioClips = request.d('FxAudio', i12699[0], i12698.audioClips)
  request.r(i12699[1], i12699[2], 0, i12698, 'sound')
  i12698.enableSound = !!i12699[3]
  i12698.bgmVolume = i12699[4]
  return i12698
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i12700 = root || request.c( 'FxAudio' )
  var i12701 = data
  i12700.Clock = request.d('SoundData', i12701[0], i12700.Clock)
  i12700.PlayerWin = request.d('SoundData', i12701[1], i12700.PlayerWin)
  i12700.PlayerLoose = request.d('SoundData', i12701[2], i12700.PlayerLoose)
  i12700.RightChoice = request.d('SoundData', i12701[3], i12700.RightChoice)
  i12700.WrongChoice = request.d('SoundData', i12701[4], i12700.WrongChoice)
  i12700.MaxLevel = request.d('SoundData', i12701[5], i12700.MaxLevel)
  i12700.FightingCloud = request.d('SoundData', i12701[6], i12700.FightingCloud)
  i12700.Confetti = request.d('SoundData', i12701[7], i12700.Confetti)
  return i12700
}

Deserializers["SoundData"] = function (request, data, root) {
  var i12702 = root || request.c( 'SoundData' )
  var i12703 = data
  request.r(i12703[0], i12703[1], 0, i12702, 'clip')
  i12702.volume = i12703[2]
  return i12702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i12704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i12705 = data
  request.r(i12705[0], i12705[1], 0, i12704, 'clip')
  request.r(i12705[2], i12705[3], 0, i12704, 'outputAudioMixerGroup')
  i12704.playOnAwake = !!i12705[4]
  i12704.loop = !!i12705[5]
  i12704.time = i12705[6]
  i12704.volume = i12705[7]
  i12704.pitch = i12705[8]
  i12704.enabled = !!i12705[9]
  return i12704
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i12706 = root || request.c( 'UnityEngine.UI.Button' )
  var i12707 = data
  i12706.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i12707[0], i12706.m_OnClick)
  i12706.m_Navigation = request.d('UnityEngine.UI.Navigation', i12707[1], i12706.m_Navigation)
  i12706.m_Transition = i12707[2]
  i12706.m_Colors = request.d('UnityEngine.UI.ColorBlock', i12707[3], i12706.m_Colors)
  i12706.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i12707[4], i12706.m_SpriteState)
  i12706.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i12707[5], i12706.m_AnimationTriggers)
  i12706.m_Interactable = !!i12707[6]
  request.r(i12707[7], i12707[8], 0, i12706, 'm_TargetGraphic')
  return i12706
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i12708 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i12709 = data
  i12708.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i12709[0], i12708.m_PersistentCalls)
  return i12708
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i12710 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i12711 = data
  var i12713 = i12711[0]
  var i12712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i12713.length; i += 1) {
    i12712.add(request.d('UnityEngine.Events.PersistentCall', i12713[i + 0]));
  }
  i12710.m_Calls = i12712
  return i12710
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i12716 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i12717 = data
  request.r(i12717[0], i12717[1], 0, i12716, 'm_Target')
  i12716.m_TargetAssemblyTypeName = i12717[2]
  i12716.m_MethodName = i12717[3]
  i12716.m_Mode = i12717[4]
  i12716.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i12717[5], i12716.m_Arguments)
  i12716.m_CallState = i12717[6]
  return i12716
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i12718 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i12719 = data
  request.r(i12719[0], i12719[1], 0, i12718, 'm_ObjectArgument')
  i12718.m_ObjectArgumentAssemblyTypeName = i12719[2]
  i12718.m_IntArgument = i12719[3]
  i12718.m_FloatArgument = i12719[4]
  i12718.m_StringArgument = i12719[5]
  i12718.m_BoolArgument = !!i12719[6]
  return i12718
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i12720 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i12721 = data
  i12720.m_Mode = i12721[0]
  i12720.m_WrapAround = !!i12721[1]
  request.r(i12721[2], i12721[3], 0, i12720, 'm_SelectOnUp')
  request.r(i12721[4], i12721[5], 0, i12720, 'm_SelectOnDown')
  request.r(i12721[6], i12721[7], 0, i12720, 'm_SelectOnLeft')
  request.r(i12721[8], i12721[9], 0, i12720, 'm_SelectOnRight')
  return i12720
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i12722 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i12723 = data
  i12722.m_NormalColor = new pc.Color(i12723[0], i12723[1], i12723[2], i12723[3])
  i12722.m_HighlightedColor = new pc.Color(i12723[4], i12723[5], i12723[6], i12723[7])
  i12722.m_PressedColor = new pc.Color(i12723[8], i12723[9], i12723[10], i12723[11])
  i12722.m_SelectedColor = new pc.Color(i12723[12], i12723[13], i12723[14], i12723[15])
  i12722.m_DisabledColor = new pc.Color(i12723[16], i12723[17], i12723[18], i12723[19])
  i12722.m_ColorMultiplier = i12723[20]
  i12722.m_FadeDuration = i12723[21]
  return i12722
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i12724 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i12725 = data
  request.r(i12725[0], i12725[1], 0, i12724, 'm_HighlightedSprite')
  request.r(i12725[2], i12725[3], 0, i12724, 'm_PressedSprite')
  request.r(i12725[4], i12725[5], 0, i12724, 'm_SelectedSprite')
  request.r(i12725[6], i12725[7], 0, i12724, 'm_DisabledSprite')
  return i12724
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i12726 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i12727 = data
  i12726.m_NormalTrigger = i12727[0]
  i12726.m_HighlightedTrigger = i12727[1]
  i12726.m_PressedTrigger = i12727[2]
  i12726.m_SelectedTrigger = i12727[3]
  i12726.m_DisabledTrigger = i12727[4]
  return i12726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i12728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i12729 = data
  i12728.ambientIntensity = i12729[0]
  i12728.reflectionIntensity = i12729[1]
  i12728.ambientMode = i12729[2]
  i12728.ambientLight = new pc.Color(i12729[3], i12729[4], i12729[5], i12729[6])
  i12728.ambientSkyColor = new pc.Color(i12729[7], i12729[8], i12729[9], i12729[10])
  i12728.ambientGroundColor = new pc.Color(i12729[11], i12729[12], i12729[13], i12729[14])
  i12728.ambientEquatorColor = new pc.Color(i12729[15], i12729[16], i12729[17], i12729[18])
  i12728.fogColor = new pc.Color(i12729[19], i12729[20], i12729[21], i12729[22])
  i12728.fogEndDistance = i12729[23]
  i12728.fogStartDistance = i12729[24]
  i12728.fogDensity = i12729[25]
  i12728.fog = !!i12729[26]
  request.r(i12729[27], i12729[28], 0, i12728, 'skybox')
  i12728.fogMode = i12729[29]
  var i12731 = i12729[30]
  var i12730 = []
  for(var i = 0; i < i12731.length; i += 1) {
    i12730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i12731[i + 0]) );
  }
  i12728.lightmaps = i12730
  i12728.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i12729[31], i12728.lightProbes)
  i12728.lightmapsMode = i12729[32]
  i12728.mixedBakeMode = i12729[33]
  i12728.environmentLightingMode = i12729[34]
  i12728.ambientProbe = new pc.SphericalHarmonicsL2(i12729[35])
  i12728.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i12729[36])
  i12728.useReferenceAmbientProbe = !!i12729[37]
  request.r(i12729[38], i12729[39], 0, i12728, 'customReflection')
  request.r(i12729[40], i12729[41], 0, i12728, 'defaultReflection')
  i12728.defaultReflectionMode = i12729[42]
  i12728.defaultReflectionResolution = i12729[43]
  i12728.sunLightObjectId = i12729[44]
  i12728.pixelLightCount = i12729[45]
  i12728.defaultReflectionHDR = !!i12729[46]
  i12728.hasLightDataAsset = !!i12729[47]
  i12728.hasManualGenerate = !!i12729[48]
  return i12728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i12734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i12735 = data
  request.r(i12735[0], i12735[1], 0, i12734, 'lightmapColor')
  request.r(i12735[2], i12735[3], 0, i12734, 'lightmapDirection')
  return i12734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i12736 = root || new UnityEngine.LightProbes()
  var i12737 = data
  return i12736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i12742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i12743 = data
  i12742.name = i12743[0]
  i12742.bounciness = i12743[1]
  i12742.dynamicFriction = i12743[2]
  i12742.staticFriction = i12743[3]
  i12742.frictionCombine = i12743[4]
  i12742.bounceCombine = i12743[5]
  return i12742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i12744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i12745 = data
  var i12747 = i12745[0]
  var i12746 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i12747.length; i += 1) {
    i12746.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i12747[i + 0]));
  }
  i12744.ShaderCompilationErrors = i12746
  i12744.name = i12745[1]
  i12744.guid = i12745[2]
  var i12749 = i12745[3]
  var i12748 = []
  for(var i = 0; i < i12749.length; i += 1) {
    i12748.push( i12749[i + 0] );
  }
  i12744.shaderDefinedKeywords = i12748
  var i12751 = i12745[4]
  var i12750 = []
  for(var i = 0; i < i12751.length; i += 1) {
    i12750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i12751[i + 0]) );
  }
  i12744.passes = i12750
  var i12753 = i12745[5]
  var i12752 = []
  for(var i = 0; i < i12753.length; i += 1) {
    i12752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i12753[i + 0]) );
  }
  i12744.usePasses = i12752
  var i12755 = i12745[6]
  var i12754 = []
  for(var i = 0; i < i12755.length; i += 1) {
    i12754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i12755[i + 0]) );
  }
  i12744.defaultParameterValues = i12754
  request.r(i12745[7], i12745[8], 0, i12744, 'unityFallbackShader')
  i12744.readDepth = !!i12745[9]
  i12744.hasDepthOnlyPass = !!i12745[10]
  i12744.isCreatedByShaderGraph = !!i12745[11]
  i12744.disableBatching = !!i12745[12]
  i12744.compiled = !!i12745[13]
  return i12744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i12758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i12759 = data
  i12758.shaderName = i12759[0]
  i12758.errorMessage = i12759[1]
  return i12758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i12764 = root || new pc.UnityShaderPass()
  var i12765 = data
  i12764.id = i12765[0]
  i12764.subShaderIndex = i12765[1]
  i12764.name = i12765[2]
  i12764.passType = i12765[3]
  i12764.grabPassTextureName = i12765[4]
  i12764.usePass = !!i12765[5]
  i12764.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[6], i12764.zTest)
  i12764.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[7], i12764.zWrite)
  i12764.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[8], i12764.culling)
  i12764.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12765[9], i12764.blending)
  i12764.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12765[10], i12764.alphaBlending)
  i12764.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[11], i12764.colorWriteMask)
  i12764.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[12], i12764.offsetUnits)
  i12764.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[13], i12764.offsetFactor)
  i12764.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[14], i12764.stencilRef)
  i12764.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[15], i12764.stencilReadMask)
  i12764.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12765[16], i12764.stencilWriteMask)
  i12764.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12765[17], i12764.stencilOp)
  i12764.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12765[18], i12764.stencilOpFront)
  i12764.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12765[19], i12764.stencilOpBack)
  var i12767 = i12765[20]
  var i12766 = []
  for(var i = 0; i < i12767.length; i += 1) {
    i12766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i12767[i + 0]) );
  }
  i12764.tags = i12766
  var i12769 = i12765[21]
  var i12768 = []
  for(var i = 0; i < i12769.length; i += 1) {
    i12768.push( i12769[i + 0] );
  }
  i12764.passDefinedKeywords = i12768
  var i12771 = i12765[22]
  var i12770 = []
  for(var i = 0; i < i12771.length; i += 1) {
    i12770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i12771[i + 0]) );
  }
  i12764.passDefinedKeywordGroups = i12770
  var i12773 = i12765[23]
  var i12772 = []
  for(var i = 0; i < i12773.length; i += 1) {
    i12772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12773[i + 0]) );
  }
  i12764.variants = i12772
  var i12775 = i12765[24]
  var i12774 = []
  for(var i = 0; i < i12775.length; i += 1) {
    i12774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12775[i + 0]) );
  }
  i12764.excludedVariants = i12774
  i12764.hasDepthReader = !!i12765[25]
  return i12764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i12776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i12777 = data
  i12776.val = i12777[0]
  i12776.name = i12777[1]
  return i12776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i12778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i12779 = data
  i12778.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12779[0], i12778.src)
  i12778.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12779[1], i12778.dst)
  i12778.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12779[2], i12778.op)
  return i12778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i12780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i12781 = data
  i12780.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12781[0], i12780.pass)
  i12780.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12781[1], i12780.fail)
  i12780.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12781[2], i12780.zFail)
  i12780.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12781[3], i12780.comp)
  return i12780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i12784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i12785 = data
  i12784.name = i12785[0]
  i12784.value = i12785[1]
  return i12784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i12788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i12789 = data
  var i12791 = i12789[0]
  var i12790 = []
  for(var i = 0; i < i12791.length; i += 1) {
    i12790.push( i12791[i + 0] );
  }
  i12788.keywords = i12790
  i12788.hasDiscard = !!i12789[1]
  return i12788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i12794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i12795 = data
  i12794.passId = i12795[0]
  i12794.subShaderIndex = i12795[1]
  var i12797 = i12795[2]
  var i12796 = []
  for(var i = 0; i < i12797.length; i += 1) {
    i12796.push( i12797[i + 0] );
  }
  i12794.keywords = i12796
  i12794.vertexProgram = i12795[3]
  i12794.fragmentProgram = i12795[4]
  i12794.exportedForWebGl2 = !!i12795[5]
  i12794.readDepth = !!i12795[6]
  return i12794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i12800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i12801 = data
  request.r(i12801[0], i12801[1], 0, i12800, 'shader')
  i12800.pass = i12801[2]
  return i12800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i12804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i12805 = data
  i12804.name = i12805[0]
  i12804.type = i12805[1]
  i12804.value = new pc.Vec4( i12805[2], i12805[3], i12805[4], i12805[5] )
  i12804.textureValue = i12805[6]
  i12804.shaderPropertyFlag = i12805[7]
  return i12804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i12806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i12807 = data
  i12806.name = i12807[0]
  request.r(i12807[1], i12807[2], 0, i12806, 'texture')
  i12806.aabb = i12807[3]
  i12806.vertices = i12807[4]
  i12806.triangles = i12807[5]
  i12806.textureRect = UnityEngine.Rect.MinMaxRect(i12807[6], i12807[7], i12807[8], i12807[9])
  i12806.packedRect = UnityEngine.Rect.MinMaxRect(i12807[10], i12807[11], i12807[12], i12807[13])
  i12806.border = new pc.Vec4( i12807[14], i12807[15], i12807[16], i12807[17] )
  i12806.transparency = i12807[18]
  i12806.bounds = i12807[19]
  i12806.pixelsPerUnit = i12807[20]
  i12806.textureWidth = i12807[21]
  i12806.textureHeight = i12807[22]
  i12806.nativeSize = new pc.Vec2( i12807[23], i12807[24] )
  i12806.pivot = new pc.Vec2( i12807[25], i12807[26] )
  i12806.textureRectOffset = new pc.Vec2( i12807[27], i12807[28] )
  return i12806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i12808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i12809 = data
  i12808.name = i12809[0]
  return i12808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i12810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i12811 = data
  i12810.name = i12811[0]
  i12810.wrapMode = i12811[1]
  i12810.isLooping = !!i12811[2]
  i12810.length = i12811[3]
  var i12813 = i12811[4]
  var i12812 = []
  for(var i = 0; i < i12813.length; i += 1) {
    i12812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i12813[i + 0]) );
  }
  i12810.curves = i12812
  var i12815 = i12811[5]
  var i12814 = []
  for(var i = 0; i < i12815.length; i += 1) {
    i12814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i12815[i + 0]) );
  }
  i12810.events = i12814
  i12810.halfPrecision = !!i12811[6]
  i12810._frameRate = i12811[7]
  i12810.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i12811[8], i12810.localBounds)
  i12810.hasMuscleCurves = !!i12811[9]
  var i12817 = i12811[10]
  var i12816 = []
  for(var i = 0; i < i12817.length; i += 1) {
    i12816.push( i12817[i + 0] );
  }
  i12810.clipMuscleConstant = i12816
  i12810.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i12811[11], i12810.clipBindingConstant)
  return i12810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i12820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i12821 = data
  i12820.path = i12821[0]
  i12820.hash = i12821[1]
  i12820.componentType = i12821[2]
  i12820.property = i12821[3]
  i12820.keys = i12821[4]
  var i12823 = i12821[5]
  var i12822 = []
  for(var i = 0; i < i12823.length; i += 1) {
    i12822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i12823[i + 0]) );
  }
  i12820.objectReferenceKeys = i12822
  return i12820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i12826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i12827 = data
  i12826.time = i12827[0]
  request.r(i12827[1], i12827[2], 0, i12826, 'value')
  return i12826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i12830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i12831 = data
  i12830.functionName = i12831[0]
  i12830.floatParameter = i12831[1]
  i12830.intParameter = i12831[2]
  i12830.stringParameter = i12831[3]
  request.r(i12831[4], i12831[5], 0, i12830, 'objectReferenceParameter')
  i12830.time = i12831[6]
  return i12830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i12832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i12833 = data
  i12832.center = new pc.Vec3( i12833[0], i12833[1], i12833[2] )
  i12832.extends = new pc.Vec3( i12833[3], i12833[4], i12833[5] )
  return i12832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i12836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i12837 = data
  var i12839 = i12837[0]
  var i12838 = []
  for(var i = 0; i < i12839.length; i += 1) {
    i12838.push( i12839[i + 0] );
  }
  i12836.genericBindings = i12838
  var i12841 = i12837[1]
  var i12840 = []
  for(var i = 0; i < i12841.length; i += 1) {
    i12840.push( i12841[i + 0] );
  }
  i12836.pptrCurveMapping = i12840
  return i12836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i12842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i12843 = data
  i12842.name = i12843[0]
  var i12845 = i12843[1]
  var i12844 = []
  for(var i = 0; i < i12845.length; i += 1) {
    i12844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i12845[i + 0]) );
  }
  i12842.layers = i12844
  var i12847 = i12843[2]
  var i12846 = []
  for(var i = 0; i < i12847.length; i += 1) {
    i12846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i12847[i + 0]) );
  }
  i12842.parameters = i12846
  i12842.animationClips = i12843[3]
  i12842.avatarUnsupported = i12843[4]
  return i12842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i12850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i12851 = data
  i12850.name = i12851[0]
  i12850.defaultWeight = i12851[1]
  i12850.blendingMode = i12851[2]
  i12850.avatarMask = i12851[3]
  i12850.syncedLayerIndex = i12851[4]
  i12850.syncedLayerAffectsTiming = !!i12851[5]
  i12850.syncedLayers = i12851[6]
  i12850.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i12851[7], i12850.stateMachine)
  return i12850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i12852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i12853 = data
  i12852.id = i12853[0]
  i12852.name = i12853[1]
  i12852.path = i12853[2]
  var i12855 = i12853[3]
  var i12854 = []
  for(var i = 0; i < i12855.length; i += 1) {
    i12854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i12855[i + 0]) );
  }
  i12852.states = i12854
  var i12857 = i12853[4]
  var i12856 = []
  for(var i = 0; i < i12857.length; i += 1) {
    i12856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i12857[i + 0]) );
  }
  i12852.machines = i12856
  var i12859 = i12853[5]
  var i12858 = []
  for(var i = 0; i < i12859.length; i += 1) {
    i12858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i12859[i + 0]) );
  }
  i12852.entryStateTransitions = i12858
  var i12861 = i12853[6]
  var i12860 = []
  for(var i = 0; i < i12861.length; i += 1) {
    i12860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i12861[i + 0]) );
  }
  i12852.exitStateTransitions = i12860
  var i12863 = i12853[7]
  var i12862 = []
  for(var i = 0; i < i12863.length; i += 1) {
    i12862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i12863[i + 0]) );
  }
  i12852.anyStateTransitions = i12862
  i12852.defaultStateId = i12853[8]
  return i12852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i12866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i12867 = data
  i12866.id = i12867[0]
  i12866.name = i12867[1]
  i12866.cycleOffset = i12867[2]
  i12866.cycleOffsetParameter = i12867[3]
  i12866.cycleOffsetParameterActive = !!i12867[4]
  i12866.mirror = !!i12867[5]
  i12866.mirrorParameter = i12867[6]
  i12866.mirrorParameterActive = !!i12867[7]
  i12866.motionId = i12867[8]
  i12866.nameHash = i12867[9]
  i12866.fullPathHash = i12867[10]
  i12866.speed = i12867[11]
  i12866.speedParameter = i12867[12]
  i12866.speedParameterActive = !!i12867[13]
  i12866.tag = i12867[14]
  i12866.tagHash = i12867[15]
  i12866.writeDefaultValues = !!i12867[16]
  var i12869 = i12867[17]
  var i12868 = []
  for(var i = 0; i < i12869.length; i += 2) {
  request.r(i12869[i + 0], i12869[i + 1], 2, i12868, '')
  }
  i12866.behaviours = i12868
  var i12871 = i12867[18]
  var i12870 = []
  for(var i = 0; i < i12871.length; i += 1) {
    i12870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i12871[i + 0]) );
  }
  i12866.transitions = i12870
  return i12866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i12876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i12877 = data
  i12876.fullPath = i12877[0]
  i12876.canTransitionToSelf = !!i12877[1]
  i12876.duration = i12877[2]
  i12876.exitTime = i12877[3]
  i12876.hasExitTime = !!i12877[4]
  i12876.hasFixedDuration = !!i12877[5]
  i12876.interruptionSource = i12877[6]
  i12876.offset = i12877[7]
  i12876.orderedInterruption = !!i12877[8]
  i12876.destinationStateId = i12877[9]
  i12876.isExit = !!i12877[10]
  i12876.mute = !!i12877[11]
  i12876.solo = !!i12877[12]
  var i12879 = i12877[13]
  var i12878 = []
  for(var i = 0; i < i12879.length; i += 1) {
    i12878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i12879[i + 0]) );
  }
  i12876.conditions = i12878
  return i12876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i12884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i12885 = data
  i12884.destinationStateId = i12885[0]
  i12884.isExit = !!i12885[1]
  i12884.mute = !!i12885[2]
  i12884.solo = !!i12885[3]
  var i12887 = i12885[4]
  var i12886 = []
  for(var i = 0; i < i12887.length; i += 1) {
    i12886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i12887[i + 0]) );
  }
  i12884.conditions = i12886
  return i12884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i12890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i12891 = data
  i12890.mode = i12891[0]
  i12890.parameter = i12891[1]
  i12890.threshold = i12891[2]
  return i12890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i12894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i12895 = data
  i12894.defaultBool = !!i12895[0]
  i12894.defaultFloat = i12895[1]
  i12894.defaultInt = i12895[2]
  i12894.name = i12895[3]
  i12894.nameHash = i12895[4]
  i12894.type = i12895[5]
  return i12894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i12896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i12897 = data
  i12896.name = i12897[0]
  i12896.bytes64 = i12897[1]
  i12896.data = i12897[2]
  return i12896
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i12898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i12899 = data
  i12898.useSafeMode = !!i12899[0]
  i12898.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i12899[1], i12898.safeModeOptions)
  i12898.timeScale = i12899[2]
  i12898.unscaledTimeScale = i12899[3]
  i12898.useSmoothDeltaTime = !!i12899[4]
  i12898.maxSmoothUnscaledTime = i12899[5]
  i12898.rewindCallbackMode = i12899[6]
  i12898.showUnityEditorReport = !!i12899[7]
  i12898.logBehaviour = i12899[8]
  i12898.drawGizmos = !!i12899[9]
  i12898.defaultRecyclable = !!i12899[10]
  i12898.defaultAutoPlay = i12899[11]
  i12898.defaultUpdateType = i12899[12]
  i12898.defaultTimeScaleIndependent = !!i12899[13]
  i12898.defaultEaseType = i12899[14]
  i12898.defaultEaseOvershootOrAmplitude = i12899[15]
  i12898.defaultEasePeriod = i12899[16]
  i12898.defaultAutoKill = !!i12899[17]
  i12898.defaultLoopType = i12899[18]
  i12898.debugMode = !!i12899[19]
  i12898.debugStoreTargetId = !!i12899[20]
  i12898.showPreviewPanel = !!i12899[21]
  i12898.storeSettingsLocation = i12899[22]
  i12898.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i12899[23], i12898.modules)
  i12898.createASMDEF = !!i12899[24]
  i12898.showPlayingTweens = !!i12899[25]
  i12898.showPausedTweens = !!i12899[26]
  return i12898
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i12900 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i12901 = data
  i12900.logBehaviour = i12901[0]
  i12900.nestedTweenFailureBehaviour = i12901[1]
  return i12900
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i12902 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i12903 = data
  i12902.showPanel = !!i12903[0]
  i12902.audioEnabled = !!i12903[1]
  i12902.physicsEnabled = !!i12903[2]
  i12902.physics2DEnabled = !!i12903[3]
  i12902.spriteEnabled = !!i12903[4]
  i12902.uiEnabled = !!i12903[5]
  i12902.uiToolkitEnabled = !!i12903[6]
  i12902.textMeshProEnabled = !!i12903[7]
  i12902.tk2DEnabled = !!i12903[8]
  i12902.deAudioEnabled = !!i12903[9]
  i12902.deUnityExtendedEnabled = !!i12903[10]
  i12902.epoOutlineEnabled = !!i12903[11]
  return i12902
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i12904 = root || request.c( 'TMPro.TMP_Settings' )
  var i12905 = data
  i12904.assetVersion = i12905[0]
  i12904.m_TextWrappingMode = i12905[1]
  i12904.m_enableKerning = !!i12905[2]
  var i12907 = i12905[3]
  var i12906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i12907.length; i += 1) {
    i12906.add(i12907[i + 0]);
  }
  i12904.m_ActiveFontFeatures = i12906
  i12904.m_enableExtraPadding = !!i12905[4]
  i12904.m_enableTintAllSprites = !!i12905[5]
  i12904.m_enableParseEscapeCharacters = !!i12905[6]
  i12904.m_EnableRaycastTarget = !!i12905[7]
  i12904.m_GetFontFeaturesAtRuntime = !!i12905[8]
  i12904.m_missingGlyphCharacter = i12905[9]
  i12904.m_ClearDynamicDataOnBuild = !!i12905[10]
  i12904.m_warningsDisabled = !!i12905[11]
  request.r(i12905[12], i12905[13], 0, i12904, 'm_defaultFontAsset')
  i12904.m_defaultFontAssetPath = i12905[14]
  i12904.m_defaultFontSize = i12905[15]
  i12904.m_defaultAutoSizeMinRatio = i12905[16]
  i12904.m_defaultAutoSizeMaxRatio = i12905[17]
  i12904.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i12905[18], i12905[19] )
  i12904.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i12905[20], i12905[21] )
  i12904.m_autoSizeTextContainer = !!i12905[22]
  i12904.m_IsTextObjectScaleStatic = !!i12905[23]
  var i12909 = i12905[24]
  var i12908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i12909.length; i += 2) {
  request.r(i12909[i + 0], i12909[i + 1], 1, i12908, '')
  }
  i12904.m_fallbackFontAssets = i12908
  i12904.m_matchMaterialPreset = !!i12905[25]
  i12904.m_HideSubTextObjects = !!i12905[26]
  request.r(i12905[27], i12905[28], 0, i12904, 'm_defaultSpriteAsset')
  i12904.m_defaultSpriteAssetPath = i12905[29]
  i12904.m_enableEmojiSupport = !!i12905[30]
  i12904.m_MissingCharacterSpriteUnicode = i12905[31]
  var i12911 = i12905[32]
  var i12910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i12911.length; i += 2) {
  request.r(i12911[i + 0], i12911[i + 1], 1, i12910, '')
  }
  i12904.m_EmojiFallbackTextAssets = i12910
  i12904.m_defaultColorGradientPresetsPath = i12905[33]
  request.r(i12905[34], i12905[35], 0, i12904, 'm_defaultStyleSheet')
  i12904.m_StyleSheetsResourcePath = i12905[36]
  request.r(i12905[37], i12905[38], 0, i12904, 'm_leadingCharacters')
  request.r(i12905[39], i12905[40], 0, i12904, 'm_followingCharacters')
  i12904.m_UseModernHangulLineBreakingRules = !!i12905[41]
  return i12904
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i12918 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i12919 = data
  request.r(i12919[0], i12919[1], 0, i12918, 'spriteSheet')
  var i12921 = i12919[2]
  var i12920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i12921.length; i += 1) {
    i12920.add(request.d('TMPro.TMP_Sprite', i12921[i + 0]));
  }
  i12918.spriteInfoList = i12920
  var i12923 = i12919[3]
  var i12922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i12923.length; i += 2) {
  request.r(i12923[i + 0], i12923[i + 1], 1, i12922, '')
  }
  i12918.fallbackSpriteAssets = i12922
  var i12925 = i12919[4]
  var i12924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i12925.length; i += 1) {
    i12924.add(request.d('TMPro.TMP_SpriteCharacter', i12925[i + 0]));
  }
  i12918.m_SpriteCharacterTable = i12924
  var i12927 = i12919[5]
  var i12926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i12927.length; i += 1) {
    i12926.add(request.d('TMPro.TMP_SpriteGlyph', i12927[i + 0]));
  }
  i12918.m_GlyphTable = i12926
  i12918.m_Version = i12919[6]
  i12918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i12919[7], i12918.m_FaceInfo)
  request.r(i12919[8], i12919[9], 0, i12918, 'm_Material')
  return i12918
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i12930 = root || request.c( 'TMPro.TMP_Sprite' )
  var i12931 = data
  i12930.name = i12931[0]
  i12930.hashCode = i12931[1]
  i12930.unicode = i12931[2]
  i12930.pivot = new pc.Vec2( i12931[3], i12931[4] )
  request.r(i12931[5], i12931[6], 0, i12930, 'sprite')
  i12930.id = i12931[7]
  i12930.x = i12931[8]
  i12930.y = i12931[9]
  i12930.width = i12931[10]
  i12930.height = i12931[11]
  i12930.xOffset = i12931[12]
  i12930.yOffset = i12931[13]
  i12930.xAdvance = i12931[14]
  i12930.scale = i12931[15]
  return i12930
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i12936 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i12937 = data
  i12936.m_Name = i12937[0]
  i12936.m_ElementType = i12937[1]
  i12936.m_Unicode = i12937[2]
  i12936.m_GlyphIndex = i12937[3]
  i12936.m_Scale = i12937[4]
  return i12936
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i12940 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i12941 = data
  request.r(i12941[0], i12941[1], 0, i12940, 'sprite')
  i12940.m_Index = i12941[2]
  i12940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i12941[3], i12940.m_Metrics)
  i12940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i12941[4], i12940.m_GlyphRect)
  i12940.m_Scale = i12941[5]
  i12940.m_AtlasIndex = i12941[6]
  i12940.m_ClassDefinitionType = i12941[7]
  return i12940
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i12942 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i12943 = data
  i12942.m_Width = i12943[0]
  i12942.m_Height = i12943[1]
  i12942.m_HorizontalBearingX = i12943[2]
  i12942.m_HorizontalBearingY = i12943[3]
  i12942.m_HorizontalAdvance = i12943[4]
  return i12942
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i12944 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i12945 = data
  i12944.m_X = i12945[0]
  i12944.m_Y = i12945[1]
  i12944.m_Width = i12945[2]
  i12944.m_Height = i12945[3]
  return i12944
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i12946 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i12947 = data
  i12946.m_FaceIndex = i12947[0]
  i12946.m_FamilyName = i12947[1]
  i12946.m_StyleName = i12947[2]
  i12946.m_PointSize = i12947[3]
  i12946.m_Scale = i12947[4]
  i12946.m_UnitsPerEM = i12947[5]
  i12946.m_LineHeight = i12947[6]
  i12946.m_AscentLine = i12947[7]
  i12946.m_CapLine = i12947[8]
  i12946.m_MeanLine = i12947[9]
  i12946.m_Baseline = i12947[10]
  i12946.m_DescentLine = i12947[11]
  i12946.m_SuperscriptOffset = i12947[12]
  i12946.m_SuperscriptSize = i12947[13]
  i12946.m_SubscriptOffset = i12947[14]
  i12946.m_SubscriptSize = i12947[15]
  i12946.m_UnderlineOffset = i12947[16]
  i12946.m_UnderlineThickness = i12947[17]
  i12946.m_StrikethroughOffset = i12947[18]
  i12946.m_StrikethroughThickness = i12947[19]
  i12946.m_TabWidth = i12947[20]
  return i12946
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i12948 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i12949 = data
  var i12951 = i12949[0]
  var i12950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i12951.length; i += 1) {
    i12950.add(request.d('TMPro.TMP_Style', i12951[i + 0]));
  }
  i12948.m_StyleList = i12950
  return i12948
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i12954 = root || request.c( 'TMPro.TMP_Style' )
  var i12955 = data
  i12954.m_Name = i12955[0]
  i12954.m_HashCode = i12955[1]
  i12954.m_OpeningDefinition = i12955[2]
  i12954.m_ClosingDefinition = i12955[3]
  i12954.m_OpeningTagArray = i12955[4]
  i12954.m_ClosingTagArray = i12955[5]
  return i12954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i12956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i12957 = data
  var i12959 = i12957[0]
  var i12958 = []
  for(var i = 0; i < i12959.length; i += 1) {
    i12958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i12959[i + 0]) );
  }
  i12956.files = i12958
  i12956.componentToPrefabIds = i12957[1]
  return i12956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i12962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i12963 = data
  i12962.path = i12963[0]
  request.r(i12963[1], i12963[2], 0, i12962, 'unityObject')
  return i12962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i12964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i12965 = data
  var i12967 = i12965[0]
  var i12966 = []
  for(var i = 0; i < i12967.length; i += 1) {
    i12966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i12967[i + 0]) );
  }
  i12964.scriptsExecutionOrder = i12966
  var i12969 = i12965[1]
  var i12968 = []
  for(var i = 0; i < i12969.length; i += 1) {
    i12968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i12969[i + 0]) );
  }
  i12964.sortingLayers = i12968
  var i12971 = i12965[2]
  var i12970 = []
  for(var i = 0; i < i12971.length; i += 1) {
    i12970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i12971[i + 0]) );
  }
  i12964.cullingLayers = i12970
  i12964.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i12965[3], i12964.timeSettings)
  i12964.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i12965[4], i12964.physicsSettings)
  i12964.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i12965[5], i12964.physics2DSettings)
  i12964.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i12965[6], i12964.qualitySettings)
  i12964.enableRealtimeShadows = !!i12965[7]
  i12964.enableAutoInstancing = !!i12965[8]
  i12964.enableStaticBatching = !!i12965[9]
  i12964.enableDynamicBatching = !!i12965[10]
  i12964.lightmapEncodingQuality = i12965[11]
  i12964.desiredColorSpace = i12965[12]
  var i12973 = i12965[13]
  var i12972 = []
  for(var i = 0; i < i12973.length; i += 1) {
    i12972.push( i12973[i + 0] );
  }
  i12964.allTags = i12972
  return i12964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i12976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i12977 = data
  i12976.name = i12977[0]
  i12976.value = i12977[1]
  return i12976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i12980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i12981 = data
  i12980.id = i12981[0]
  i12980.name = i12981[1]
  i12980.value = i12981[2]
  return i12980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i12984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i12985 = data
  i12984.id = i12985[0]
  i12984.name = i12985[1]
  return i12984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i12986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i12987 = data
  i12986.fixedDeltaTime = i12987[0]
  i12986.maximumDeltaTime = i12987[1]
  i12986.timeScale = i12987[2]
  i12986.maximumParticleTimestep = i12987[3]
  return i12986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i12988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i12989 = data
  i12988.gravity = new pc.Vec3( i12989[0], i12989[1], i12989[2] )
  i12988.defaultSolverIterations = i12989[3]
  i12988.bounceThreshold = i12989[4]
  i12988.autoSyncTransforms = !!i12989[5]
  i12988.autoSimulation = !!i12989[6]
  var i12991 = i12989[7]
  var i12990 = []
  for(var i = 0; i < i12991.length; i += 1) {
    i12990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i12991[i + 0]) );
  }
  i12988.collisionMatrix = i12990
  return i12988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i12994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i12995 = data
  i12994.enabled = !!i12995[0]
  i12994.layerId = i12995[1]
  i12994.otherLayerId = i12995[2]
  return i12994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i12996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i12997 = data
  request.r(i12997[0], i12997[1], 0, i12996, 'material')
  i12996.gravity = new pc.Vec2( i12997[2], i12997[3] )
  i12996.positionIterations = i12997[4]
  i12996.velocityIterations = i12997[5]
  i12996.velocityThreshold = i12997[6]
  i12996.maxLinearCorrection = i12997[7]
  i12996.maxAngularCorrection = i12997[8]
  i12996.maxTranslationSpeed = i12997[9]
  i12996.maxRotationSpeed = i12997[10]
  i12996.baumgarteScale = i12997[11]
  i12996.baumgarteTOIScale = i12997[12]
  i12996.timeToSleep = i12997[13]
  i12996.linearSleepTolerance = i12997[14]
  i12996.angularSleepTolerance = i12997[15]
  i12996.defaultContactOffset = i12997[16]
  i12996.autoSimulation = !!i12997[17]
  i12996.queriesHitTriggers = !!i12997[18]
  i12996.queriesStartInColliders = !!i12997[19]
  i12996.callbacksOnDisable = !!i12997[20]
  i12996.reuseCollisionCallbacks = !!i12997[21]
  i12996.autoSyncTransforms = !!i12997[22]
  var i12999 = i12997[23]
  var i12998 = []
  for(var i = 0; i < i12999.length; i += 1) {
    i12998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i12999[i + 0]) );
  }
  i12996.collisionMatrix = i12998
  return i12996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i13002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i13003 = data
  i13002.enabled = !!i13003[0]
  i13002.layerId = i13003[1]
  i13002.otherLayerId = i13003[2]
  return i13002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i13004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i13005 = data
  var i13007 = i13005[0]
  var i13006 = []
  for(var i = 0; i < i13007.length; i += 1) {
    i13006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i13007[i + 0]) );
  }
  i13004.qualityLevels = i13006
  var i13009 = i13005[1]
  var i13008 = []
  for(var i = 0; i < i13009.length; i += 1) {
    i13008.push( i13009[i + 0] );
  }
  i13004.names = i13008
  i13004.shadows = i13005[2]
  i13004.anisotropicFiltering = i13005[3]
  i13004.antiAliasing = i13005[4]
  i13004.lodBias = i13005[5]
  i13004.shadowCascades = i13005[6]
  i13004.shadowDistance = i13005[7]
  i13004.shadowmaskMode = i13005[8]
  i13004.shadowProjection = i13005[9]
  i13004.shadowResolution = i13005[10]
  i13004.softParticles = !!i13005[11]
  i13004.softVegetation = !!i13005[12]
  i13004.activeColorSpace = i13005[13]
  i13004.desiredColorSpace = i13005[14]
  i13004.masterTextureLimit = i13005[15]
  i13004.maxQueuedFrames = i13005[16]
  i13004.particleRaycastBudget = i13005[17]
  i13004.pixelLightCount = i13005[18]
  i13004.realtimeReflectionProbes = !!i13005[19]
  i13004.shadowCascade2Split = i13005[20]
  i13004.shadowCascade4Split = new pc.Vec3( i13005[21], i13005[22], i13005[23] )
  i13004.streamingMipmapsActive = !!i13005[24]
  i13004.vSyncCount = i13005[25]
  i13004.asyncUploadBufferSize = i13005[26]
  i13004.asyncUploadTimeSlice = i13005[27]
  i13004.billboardsFaceCameraPosition = !!i13005[28]
  i13004.shadowNearPlaneOffset = i13005[29]
  i13004.streamingMipmapsMemoryBudget = i13005[30]
  i13004.maximumLODLevel = i13005[31]
  i13004.streamingMipmapsAddAllCameras = !!i13005[32]
  i13004.streamingMipmapsMaxLevelReduction = i13005[33]
  i13004.streamingMipmapsRenderersPerFrame = i13005[34]
  i13004.resolutionScalingFixedDPIFactor = i13005[35]
  i13004.streamingMipmapsMaxFileIORequests = i13005[36]
  i13004.currentQualityLevel = i13005[37]
  return i13004
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

Deserializers.buildID = "54e753b1-8841-4de3-b543-a7363febe479";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

