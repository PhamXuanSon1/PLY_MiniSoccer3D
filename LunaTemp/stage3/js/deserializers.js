var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6424 = root || request.c( 'UnityEngine.JointSpring' )
  var i6425 = data
  i6424.spring = i6425[0]
  i6424.damper = i6425[1]
  i6424.targetPosition = i6425[2]
  return i6424
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6426 = root || request.c( 'UnityEngine.JointMotor' )
  var i6427 = data
  i6426.m_TargetVelocity = i6427[0]
  i6426.m_Force = i6427[1]
  i6426.m_FreeSpin = i6427[2]
  return i6426
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6428 = root || request.c( 'UnityEngine.JointLimits' )
  var i6429 = data
  i6428.m_Min = i6429[0]
  i6428.m_Max = i6429[1]
  i6428.m_Bounciness = i6429[2]
  i6428.m_BounceMinVelocity = i6429[3]
  i6428.m_ContactDistance = i6429[4]
  i6428.minBounce = i6429[5]
  i6428.maxBounce = i6429[6]
  return i6428
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6430 = root || request.c( 'UnityEngine.JointDrive' )
  var i6431 = data
  i6430.m_PositionSpring = i6431[0]
  i6430.m_PositionDamper = i6431[1]
  i6430.m_MaximumForce = i6431[2]
  i6430.m_UseAcceleration = i6431[3]
  return i6430
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6432 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6433 = data
  i6432.m_Spring = i6433[0]
  i6432.m_Damper = i6433[1]
  return i6432
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6434 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6435 = data
  i6434.m_Limit = i6435[0]
  i6434.m_Bounciness = i6435[1]
  i6434.m_ContactDistance = i6435[2]
  return i6434
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6436 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6437 = data
  i6436.m_ExtremumSlip = i6437[0]
  i6436.m_ExtremumValue = i6437[1]
  i6436.m_AsymptoteSlip = i6437[2]
  i6436.m_AsymptoteValue = i6437[3]
  i6436.m_Stiffness = i6437[4]
  return i6436
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6438 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6439 = data
  i6438.m_LowerAngle = i6439[0]
  i6438.m_UpperAngle = i6439[1]
  return i6438
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6440 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6441 = data
  i6440.m_MotorSpeed = i6441[0]
  i6440.m_MaximumMotorTorque = i6441[1]
  return i6440
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6442 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6443 = data
  i6442.m_DampingRatio = i6443[0]
  i6442.m_Frequency = i6443[1]
  i6442.m_Angle = i6443[2]
  return i6442
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6444 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6445 = data
  i6444.m_LowerTranslation = i6445[0]
  i6444.m_UpperTranslation = i6445[1]
  return i6444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6447 = data
  i6446.pivot = new pc.Vec2( i6447[0], i6447[1] )
  i6446.anchorMin = new pc.Vec2( i6447[2], i6447[3] )
  i6446.anchorMax = new pc.Vec2( i6447[4], i6447[5] )
  i6446.sizeDelta = new pc.Vec2( i6447[6], i6447[7] )
  i6446.anchoredPosition3D = new pc.Vec3( i6447[8], i6447[9], i6447[10] )
  i6446.rotation = new pc.Quat(i6447[11], i6447[12], i6447[13], i6447[14])
  i6446.scale = new pc.Vec3( i6447[15], i6447[16], i6447[17] )
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6449 = data
  i6448.planeDistance = i6449[0]
  i6448.referencePixelsPerUnit = i6449[1]
  i6448.isFallbackOverlay = !!i6449[2]
  i6448.renderMode = i6449[3]
  i6448.renderOrder = i6449[4]
  i6448.sortingLayerName = i6449[5]
  i6448.sortingOrder = i6449[6]
  i6448.scaleFactor = i6449[7]
  request.r(i6449[8], i6449[9], 0, i6448, 'worldCamera')
  i6448.overrideSorting = !!i6449[10]
  i6448.pixelPerfect = !!i6449[11]
  i6448.targetDisplay = i6449[12]
  i6448.overridePixelPerfect = !!i6449[13]
  i6448.enabled = !!i6449[14]
  return i6448
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6450 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6451 = data
  i6450.m_UiScaleMode = i6451[0]
  i6450.m_ReferencePixelsPerUnit = i6451[1]
  i6450.m_ScaleFactor = i6451[2]
  i6450.m_ReferenceResolution = new pc.Vec2( i6451[3], i6451[4] )
  i6450.m_ScreenMatchMode = i6451[5]
  i6450.m_MatchWidthOrHeight = i6451[6]
  i6450.m_PhysicalUnit = i6451[7]
  i6450.m_FallbackScreenDPI = i6451[8]
  i6450.m_DefaultSpriteDPI = i6451[9]
  i6450.m_DynamicPixelsPerUnit = i6451[10]
  i6450.m_PresetInfoIsWorld = !!i6451[11]
  return i6450
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6453 = data
  i6452.m_IgnoreReversedGraphics = !!i6453[0]
  i6452.m_BlockingObjects = i6453[1]
  i6452.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6453[2] )
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6455 = data
  i6454.cullTransparentMesh = !!i6455[0]
  return i6454
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.UI.Image' )
  var i6457 = data
  request.r(i6457[0], i6457[1], 0, i6456, 'm_Sprite')
  i6456.m_Type = i6457[2]
  i6456.m_PreserveAspect = !!i6457[3]
  i6456.m_FillCenter = !!i6457[4]
  i6456.m_FillMethod = i6457[5]
  i6456.m_FillAmount = i6457[6]
  i6456.m_FillClockwise = !!i6457[7]
  i6456.m_FillOrigin = i6457[8]
  i6456.m_UseSpriteMesh = !!i6457[9]
  i6456.m_PixelsPerUnitMultiplier = i6457[10]
  request.r(i6457[11], i6457[12], 0, i6456, 'm_Material')
  i6456.m_Maskable = !!i6457[13]
  i6456.m_Color = new pc.Color(i6457[14], i6457[15], i6457[16], i6457[17])
  i6456.m_RaycastTarget = !!i6457[18]
  i6456.m_RaycastPadding = new pc.Vec4( i6457[19], i6457[20], i6457[21], i6457[22] )
  return i6456
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6459 = data
  i6458.m_Spacing = i6459[0]
  i6458.m_ChildForceExpandWidth = !!i6459[1]
  i6458.m_ChildForceExpandHeight = !!i6459[2]
  i6458.m_ChildControlWidth = !!i6459[3]
  i6458.m_ChildControlHeight = !!i6459[4]
  i6458.m_ChildScaleWidth = !!i6459[5]
  i6458.m_ChildScaleHeight = !!i6459[6]
  i6458.m_ReverseArrangement = !!i6459[7]
  i6458.m_Padding = UnityEngine.RectOffset.FromPaddings(i6459[8], i6459[9], i6459[10], i6459[11])
  i6458.m_ChildAlignment = i6459[12]
  return i6458
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i6460 = root || request.c( 'UICheckBox' )
  var i6461 = data
  request.r(i6461[0], i6461[1], 0, i6460, 'iconImg')
  request.r(i6461[2], i6461[3], 0, i6460, 'startingSprite')
  return i6460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6463 = data
  i6462.name = i6463[0]
  i6462.tagId = i6463[1]
  i6462.enabled = !!i6463[2]
  i6462.isStatic = !!i6463[3]
  i6462.layer = i6463[4]
  return i6462
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6464 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6465 = data
  request.r(i6465[0], i6465[1], 0, i6464, 'm_FillRect')
  request.r(i6465[2], i6465[3], 0, i6464, 'm_HandleRect')
  i6464.m_Direction = i6465[4]
  i6464.m_MinValue = i6465[5]
  i6464.m_MaxValue = i6465[6]
  i6464.m_WholeNumbers = !!i6465[7]
  i6464.m_Value = i6465[8]
  i6464.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6465[9], i6464.m_OnValueChanged)
  i6464.m_Navigation = request.d('UnityEngine.UI.Navigation', i6465[10], i6464.m_Navigation)
  i6464.m_Transition = i6465[11]
  i6464.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6465[12], i6464.m_Colors)
  i6464.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6465[13], i6464.m_SpriteState)
  i6464.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6465[14], i6464.m_AnimationTriggers)
  i6464.m_Interactable = !!i6465[15]
  request.r(i6465[16], i6465[17], 0, i6464, 'm_TargetGraphic')
  return i6464
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6466 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6467 = data
  i6466.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6467[0], i6466.m_PersistentCalls)
  return i6466
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6469 = data
  var i6471 = i6469[0]
  var i6470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.add(request.d('UnityEngine.Events.PersistentCall', i6471[i + 0]));
  }
  i6468.m_Calls = i6470
  return i6468
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6474 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6475 = data
  request.r(i6475[0], i6475[1], 0, i6474, 'm_Target')
  i6474.m_TargetAssemblyTypeName = i6475[2]
  i6474.m_MethodName = i6475[3]
  i6474.m_Mode = i6475[4]
  i6474.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6475[5], i6474.m_Arguments)
  i6474.m_CallState = i6475[6]
  return i6474
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6476 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6477 = data
  i6476.m_Mode = i6477[0]
  i6476.m_WrapAround = !!i6477[1]
  request.r(i6477[2], i6477[3], 0, i6476, 'm_SelectOnUp')
  request.r(i6477[4], i6477[5], 0, i6476, 'm_SelectOnDown')
  request.r(i6477[6], i6477[7], 0, i6476, 'm_SelectOnLeft')
  request.r(i6477[8], i6477[9], 0, i6476, 'm_SelectOnRight')
  return i6476
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6478 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6479 = data
  i6478.m_NormalColor = new pc.Color(i6479[0], i6479[1], i6479[2], i6479[3])
  i6478.m_HighlightedColor = new pc.Color(i6479[4], i6479[5], i6479[6], i6479[7])
  i6478.m_PressedColor = new pc.Color(i6479[8], i6479[9], i6479[10], i6479[11])
  i6478.m_SelectedColor = new pc.Color(i6479[12], i6479[13], i6479[14], i6479[15])
  i6478.m_DisabledColor = new pc.Color(i6479[16], i6479[17], i6479[18], i6479[19])
  i6478.m_ColorMultiplier = i6479[20]
  i6478.m_FadeDuration = i6479[21]
  return i6478
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6480 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6481 = data
  request.r(i6481[0], i6481[1], 0, i6480, 'm_HighlightedSprite')
  request.r(i6481[2], i6481[3], 0, i6480, 'm_PressedSprite')
  request.r(i6481[4], i6481[5], 0, i6480, 'm_SelectedSprite')
  request.r(i6481[6], i6481[7], 0, i6480, 'm_DisabledSprite')
  return i6480
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6482 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6483 = data
  i6482.m_NormalTrigger = i6483[0]
  i6482.m_HighlightedTrigger = i6483[1]
  i6482.m_PressedTrigger = i6483[2]
  i6482.m_SelectedTrigger = i6483[3]
  i6482.m_DisabledTrigger = i6483[4]
  return i6482
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i6484 = root || request.c( 'UIProgressBar' )
  var i6485 = data
  request.r(i6485[0], i6485[1], 0, i6484, 'fillImage')
  request.r(i6485[2], i6485[3], 0, i6484, 'fillBackground')
  return i6484
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i6486 = root || request.c( 'UITutorial' )
  var i6487 = data
  request.r(i6487[0], i6487[1], 0, i6486, 'tutorialUIHolder')
  return i6486
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i6488 = root || request.c( 'UIGuidingMove' )
  var i6489 = data
  request.r(i6489[0], i6489[1], 0, i6488, 'target')
  i6488.startPosition = new pc.Vec2( i6489[2], i6489[3] )
  i6488.endPosition = new pc.Vec2( i6489[4], i6489[5] )
  i6488.duration = i6489[6]
  i6488.ease = i6489[7]
  i6488.resetToStartOnComplete = !!i6489[8]
  i6488.loop = !!i6489[9]
  i6488.loopCount = i6489[10]
  i6488.loopType = i6489[11]
  return i6488
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i6490 = root || request.c( 'UIPulse' )
  var i6491 = data
  i6490.targetScale = new pc.Vec3( i6491[0], i6491[1], i6491[2] )
  i6490.duration = i6491[3]
  i6490.ease = i6491[4]
  return i6490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6493 = data
  i6492.name = i6493[0]
  i6492.width = i6493[1]
  i6492.height = i6493[2]
  i6492.mipmapCount = i6493[3]
  i6492.anisoLevel = i6493[4]
  i6492.filterMode = i6493[5]
  i6492.hdr = !!i6493[6]
  i6492.format = i6493[7]
  i6492.wrapMode = i6493[8]
  i6492.alphaIsTransparency = !!i6493[9]
  i6492.alphaSource = i6493[10]
  i6492.graphicsFormat = i6493[11]
  i6492.sRGBTexture = !!i6493[12]
  i6492.desiredColorSpace = i6493[13]
  i6492.wrapU = i6493[14]
  i6492.wrapV = i6493[15]
  return i6492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6495 = data
  i6494.position = new pc.Vec3( i6495[0], i6495[1], i6495[2] )
  i6494.scale = new pc.Vec3( i6495[3], i6495[4], i6495[5] )
  i6494.rotation = new pc.Quat(i6495[6], i6495[7], i6495[8], i6495[9])
  return i6494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6497 = data
  i6496.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6497[0], i6496.main)
  i6496.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6497[1], i6496.colorBySpeed)
  i6496.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6497[2], i6496.colorOverLifetime)
  i6496.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6497[3], i6496.emission)
  i6496.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6497[4], i6496.rotationBySpeed)
  i6496.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6497[5], i6496.rotationOverLifetime)
  i6496.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6497[6], i6496.shape)
  i6496.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6497[7], i6496.sizeBySpeed)
  i6496.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6497[8], i6496.sizeOverLifetime)
  i6496.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6497[9], i6496.textureSheetAnimation)
  i6496.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6497[10], i6496.velocityOverLifetime)
  i6496.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6497[11], i6496.noise)
  i6496.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6497[12], i6496.inheritVelocity)
  i6496.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6497[13], i6496.forceOverLifetime)
  i6496.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6497[14], i6496.limitVelocityOverLifetime)
  i6496.useAutoRandomSeed = !!i6497[15]
  i6496.randomSeed = i6497[16]
  return i6496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6498 = root || new pc.ParticleSystemMain()
  var i6499 = data
  i6498.duration = i6499[0]
  i6498.loop = !!i6499[1]
  i6498.prewarm = !!i6499[2]
  i6498.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[3], i6498.startDelay)
  i6498.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[4], i6498.startLifetime)
  i6498.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[5], i6498.startSpeed)
  i6498.startSize3D = !!i6499[6]
  i6498.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[7], i6498.startSizeX)
  i6498.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[8], i6498.startSizeY)
  i6498.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[9], i6498.startSizeZ)
  i6498.startRotation3D = !!i6499[10]
  i6498.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[11], i6498.startRotationX)
  i6498.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[12], i6498.startRotationY)
  i6498.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[13], i6498.startRotationZ)
  i6498.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6499[14], i6498.startColor)
  i6498.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[15], i6498.gravityModifier)
  i6498.simulationSpace = i6499[16]
  request.r(i6499[17], i6499[18], 0, i6498, 'customSimulationSpace')
  i6498.simulationSpeed = i6499[19]
  i6498.useUnscaledTime = !!i6499[20]
  i6498.scalingMode = i6499[21]
  i6498.playOnAwake = !!i6499[22]
  i6498.maxParticles = i6499[23]
  i6498.emitterVelocityMode = i6499[24]
  i6498.stopAction = i6499[25]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6500 = root || new pc.MinMaxCurve()
  var i6501 = data
  i6500.mode = i6501[0]
  i6500.curveMin = new pc.AnimationCurve( { keys_flow: i6501[1] } )
  i6500.curveMax = new pc.AnimationCurve( { keys_flow: i6501[2] } )
  i6500.curveMultiplier = i6501[3]
  i6500.constantMin = i6501[4]
  i6500.constantMax = i6501[5]
  return i6500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6502 = root || new pc.MinMaxGradient()
  var i6503 = data
  i6502.mode = i6503[0]
  i6502.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6503[1], i6502.gradientMin)
  i6502.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6503[2], i6502.gradientMax)
  i6502.colorMin = new pc.Color(i6503[3], i6503[4], i6503[5], i6503[6])
  i6502.colorMax = new pc.Color(i6503[7], i6503[8], i6503[9], i6503[10])
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6505 = data
  i6504.mode = i6505[0]
  var i6507 = i6505[1]
  var i6506 = []
  for(var i = 0; i < i6507.length; i += 1) {
    i6506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6507[i + 0]) );
  }
  i6504.colorKeys = i6506
  var i6509 = i6505[2]
  var i6508 = []
  for(var i = 0; i < i6509.length; i += 1) {
    i6508.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6509[i + 0]) );
  }
  i6504.alphaKeys = i6508
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6513 = data
  i6512.color = new pc.Color(i6513[0], i6513[1], i6513[2], i6513[3])
  i6512.time = i6513[4]
  return i6512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6517 = data
  i6516.alpha = i6517[0]
  i6516.time = i6517[1]
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6518 = root || new pc.ParticleSystemColorBySpeed()
  var i6519 = data
  i6518.enabled = !!i6519[0]
  i6518.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6519[1], i6518.color)
  i6518.range = new pc.Vec2( i6519[2], i6519[3] )
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6520 = root || new pc.ParticleSystemColorOverLifetime()
  var i6521 = data
  i6520.enabled = !!i6521[0]
  i6520.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6521[1], i6520.color)
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6522 = root || new pc.ParticleSystemEmitter()
  var i6523 = data
  i6522.enabled = !!i6523[0]
  i6522.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[1], i6522.rateOverTime)
  i6522.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[2], i6522.rateOverDistance)
  var i6525 = i6523[3]
  var i6524 = []
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6525[i + 0]) );
  }
  i6522.bursts = i6524
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6528 = root || new pc.ParticleSystemBurst()
  var i6529 = data
  i6528.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6529[0], i6528.count)
  i6528.cycleCount = i6529[1]
  i6528.minCount = i6529[2]
  i6528.maxCount = i6529[3]
  i6528.repeatInterval = i6529[4]
  i6528.time = i6529[5]
  return i6528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6530 = root || new pc.ParticleSystemRotationBySpeed()
  var i6531 = data
  i6530.enabled = !!i6531[0]
  i6530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6531[1], i6530.x)
  i6530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6531[2], i6530.y)
  i6530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6531[3], i6530.z)
  i6530.separateAxes = !!i6531[4]
  i6530.range = new pc.Vec2( i6531[5], i6531[6] )
  return i6530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6532 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6533 = data
  i6532.enabled = !!i6533[0]
  i6532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[1], i6532.x)
  i6532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[2], i6532.y)
  i6532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[3], i6532.z)
  i6532.separateAxes = !!i6533[4]
  return i6532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6534 = root || new pc.ParticleSystemShape()
  var i6535 = data
  i6534.enabled = !!i6535[0]
  i6534.shapeType = i6535[1]
  i6534.randomDirectionAmount = i6535[2]
  i6534.sphericalDirectionAmount = i6535[3]
  i6534.randomPositionAmount = i6535[4]
  i6534.alignToDirection = !!i6535[5]
  i6534.radius = i6535[6]
  i6534.radiusMode = i6535[7]
  i6534.radiusSpread = i6535[8]
  i6534.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[9], i6534.radiusSpeed)
  i6534.radiusThickness = i6535[10]
  i6534.angle = i6535[11]
  i6534.length = i6535[12]
  i6534.boxThickness = new pc.Vec3( i6535[13], i6535[14], i6535[15] )
  i6534.meshShapeType = i6535[16]
  request.r(i6535[17], i6535[18], 0, i6534, 'mesh')
  request.r(i6535[19], i6535[20], 0, i6534, 'meshRenderer')
  request.r(i6535[21], i6535[22], 0, i6534, 'skinnedMeshRenderer')
  i6534.useMeshMaterialIndex = !!i6535[23]
  i6534.meshMaterialIndex = i6535[24]
  i6534.useMeshColors = !!i6535[25]
  i6534.normalOffset = i6535[26]
  i6534.arc = i6535[27]
  i6534.arcMode = i6535[28]
  i6534.arcSpread = i6535[29]
  i6534.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[30], i6534.arcSpeed)
  i6534.donutRadius = i6535[31]
  i6534.position = new pc.Vec3( i6535[32], i6535[33], i6535[34] )
  i6534.rotation = new pc.Vec3( i6535[35], i6535[36], i6535[37] )
  i6534.scale = new pc.Vec3( i6535[38], i6535[39], i6535[40] )
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6536 = root || new pc.ParticleSystemSizeBySpeed()
  var i6537 = data
  i6536.enabled = !!i6537[0]
  i6536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6537[1], i6536.x)
  i6536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6537[2], i6536.y)
  i6536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6537[3], i6536.z)
  i6536.separateAxes = !!i6537[4]
  i6536.range = new pc.Vec2( i6537[5], i6537[6] )
  return i6536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6538 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6539 = data
  i6538.enabled = !!i6539[0]
  i6538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[1], i6538.x)
  i6538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[2], i6538.y)
  i6538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[3], i6538.z)
  i6538.separateAxes = !!i6539[4]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6540 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6541 = data
  i6540.enabled = !!i6541[0]
  i6540.mode = i6541[1]
  i6540.animation = i6541[2]
  i6540.numTilesX = i6541[3]
  i6540.numTilesY = i6541[4]
  i6540.useRandomRow = !!i6541[5]
  i6540.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[6], i6540.frameOverTime)
  i6540.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[7], i6540.startFrame)
  i6540.cycleCount = i6541[8]
  i6540.rowIndex = i6541[9]
  i6540.flipU = i6541[10]
  i6540.flipV = i6541[11]
  i6540.spriteCount = i6541[12]
  var i6543 = i6541[13]
  var i6542 = []
  for(var i = 0; i < i6543.length; i += 2) {
  request.r(i6543[i + 0], i6543[i + 1], 2, i6542, '')
  }
  i6540.sprites = i6542
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6546 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6547 = data
  i6546.enabled = !!i6547[0]
  i6546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[1], i6546.x)
  i6546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[2], i6546.y)
  i6546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[3], i6546.z)
  i6546.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[4], i6546.radial)
  i6546.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[5], i6546.speedModifier)
  i6546.space = i6547[6]
  i6546.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[7], i6546.orbitalX)
  i6546.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[8], i6546.orbitalY)
  i6546.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[9], i6546.orbitalZ)
  i6546.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[10], i6546.orbitalOffsetX)
  i6546.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[11], i6546.orbitalOffsetY)
  i6546.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[12], i6546.orbitalOffsetZ)
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6548 = root || new pc.ParticleSystemNoise()
  var i6549 = data
  i6548.enabled = !!i6549[0]
  i6548.separateAxes = !!i6549[1]
  i6548.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[2], i6548.strengthX)
  i6548.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[3], i6548.strengthY)
  i6548.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[4], i6548.strengthZ)
  i6548.frequency = i6549[5]
  i6548.damping = !!i6549[6]
  i6548.octaveCount = i6549[7]
  i6548.octaveMultiplier = i6549[8]
  i6548.octaveScale = i6549[9]
  i6548.quality = i6549[10]
  i6548.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[11], i6548.scrollSpeed)
  i6548.scrollSpeedMultiplier = i6549[12]
  i6548.remapEnabled = !!i6549[13]
  i6548.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[14], i6548.remapX)
  i6548.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[15], i6548.remapY)
  i6548.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[16], i6548.remapZ)
  i6548.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[17], i6548.positionAmount)
  i6548.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[18], i6548.rotationAmount)
  i6548.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6549[19], i6548.sizeAmount)
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6550 = root || new pc.ParticleSystemInheritVelocity()
  var i6551 = data
  i6550.enabled = !!i6551[0]
  i6550.mode = i6551[1]
  i6550.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6551[2], i6550.curve)
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6552 = root || new pc.ParticleSystemForceOverLifetime()
  var i6553 = data
  i6552.enabled = !!i6553[0]
  i6552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6553[1], i6552.x)
  i6552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6553[2], i6552.y)
  i6552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6553[3], i6552.z)
  i6552.space = i6553[4]
  i6552.randomized = !!i6553[5]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6554 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6555 = data
  i6554.enabled = !!i6555[0]
  i6554.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[1], i6554.limit)
  i6554.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[2], i6554.limitX)
  i6554.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[3], i6554.limitY)
  i6554.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[4], i6554.limitZ)
  i6554.dampen = i6555[5]
  i6554.separateAxes = !!i6555[6]
  i6554.space = i6555[7]
  i6554.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[8], i6554.drag)
  i6554.multiplyDragByParticleSize = !!i6555[9]
  i6554.multiplyDragByParticleVelocity = !!i6555[10]
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6557 = data
  request.r(i6557[0], i6557[1], 0, i6556, 'mesh')
  i6556.meshCount = i6557[2]
  i6556.activeVertexStreamsCount = i6557[3]
  i6556.alignment = i6557[4]
  i6556.renderMode = i6557[5]
  i6556.sortMode = i6557[6]
  i6556.lengthScale = i6557[7]
  i6556.velocityScale = i6557[8]
  i6556.cameraVelocityScale = i6557[9]
  i6556.normalDirection = i6557[10]
  i6556.sortingFudge = i6557[11]
  i6556.minParticleSize = i6557[12]
  i6556.maxParticleSize = i6557[13]
  i6556.pivot = new pc.Vec3( i6557[14], i6557[15], i6557[16] )
  request.r(i6557[17], i6557[18], 0, i6556, 'trailMaterial')
  i6556.applyActiveColorSpace = !!i6557[19]
  i6556.enabled = !!i6557[20]
  request.r(i6557[21], i6557[22], 0, i6556, 'sharedMaterial')
  var i6559 = i6557[23]
  var i6558 = []
  for(var i = 0; i < i6559.length; i += 2) {
  request.r(i6559[i + 0], i6559[i + 1], 2, i6558, '')
  }
  i6556.sharedMaterials = i6558
  i6556.receiveShadows = !!i6557[24]
  i6556.shadowCastingMode = i6557[25]
  i6556.sortingLayerID = i6557[26]
  i6556.sortingOrder = i6557[27]
  i6556.lightmapIndex = i6557[28]
  i6556.lightmapSceneIndex = i6557[29]
  i6556.lightmapScaleOffset = new pc.Vec4( i6557[30], i6557[31], i6557[32], i6557[33] )
  i6556.lightProbeUsage = i6557[34]
  i6556.reflectionProbeUsage = i6557[35]
  return i6556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6562 = root || new pc.UnityMaterial()
  var i6563 = data
  i6562.name = i6563[0]
  request.r(i6563[1], i6563[2], 0, i6562, 'shader')
  i6562.renderQueue = i6563[3]
  i6562.enableInstancing = !!i6563[4]
  var i6565 = i6563[5]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6565[i + 0]) );
  }
  i6562.floatParameters = i6564
  var i6567 = i6563[6]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 1) {
    i6566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6567[i + 0]) );
  }
  i6562.colorParameters = i6566
  var i6569 = i6563[7]
  var i6568 = []
  for(var i = 0; i < i6569.length; i += 1) {
    i6568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6569[i + 0]) );
  }
  i6562.vectorParameters = i6568
  var i6571 = i6563[8]
  var i6570 = []
  for(var i = 0; i < i6571.length; i += 1) {
    i6570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6571[i + 0]) );
  }
  i6562.textureParameters = i6570
  var i6573 = i6563[9]
  var i6572 = []
  for(var i = 0; i < i6573.length; i += 1) {
    i6572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6573[i + 0]) );
  }
  i6562.materialFlags = i6572
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6577 = data
  i6576.name = i6577[0]
  i6576.value = i6577[1]
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6581 = data
  i6580.name = i6581[0]
  i6580.value = new pc.Color(i6581[1], i6581[2], i6581[3], i6581[4])
  return i6580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6585 = data
  i6584.name = i6585[0]
  i6584.value = new pc.Vec4( i6585[1], i6585[2], i6585[3], i6585[4] )
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6589 = data
  i6588.name = i6589[0]
  request.r(i6589[1], i6589[2], 0, i6588, 'value')
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6593 = data
  i6592.name = i6593[0]
  i6592.enabled = !!i6593[1]
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6595 = data
  i6594.name = i6595[0]
  i6594.halfPrecision = !!i6595[1]
  i6594.useSimplification = !!i6595[2]
  i6594.useUInt32IndexFormat = !!i6595[3]
  i6594.vertexCount = i6595[4]
  i6594.aabb = i6595[5]
  var i6597 = i6595[6]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 1) {
    i6596.push( !!i6597[i + 0] );
  }
  i6594.streams = i6596
  i6594.vertices = i6595[7]
  var i6599 = i6595[8]
  var i6598 = []
  for(var i = 0; i < i6599.length; i += 1) {
    i6598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6599[i + 0]) );
  }
  i6594.subMeshes = i6598
  var i6601 = i6595[9]
  var i6600 = []
  for(var i = 0; i < i6601.length; i += 16) {
    i6600.push( new pc.Mat4().setData(i6601[i + 0], i6601[i + 1], i6601[i + 2], i6601[i + 3],  i6601[i + 4], i6601[i + 5], i6601[i + 6], i6601[i + 7],  i6601[i + 8], i6601[i + 9], i6601[i + 10], i6601[i + 11],  i6601[i + 12], i6601[i + 13], i6601[i + 14], i6601[i + 15]) );
  }
  i6594.bindposes = i6600
  var i6603 = i6595[10]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6603[i + 0]) );
  }
  i6594.blendShapes = i6602
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6609 = data
  i6608.triangles = i6609[0]
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6615 = data
  i6614.name = i6615[0]
  var i6617 = i6615[1]
  var i6616 = []
  for(var i = 0; i < i6617.length; i += 1) {
    i6616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6617[i + 0]) );
  }
  i6614.frames = i6616
  return i6614
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i6618 = root || request.c( 'ChoiceBoardHolder' )
  var i6619 = data
  var i6621 = i6619[0]
  var i6620 = []
  for(var i = 0; i < i6621.length; i += 2) {
  request.r(i6621[i + 0], i6621[i + 1], 2, i6620, '')
  }
  i6618.choiceBoards = i6620
  return i6618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6625 = data
  i6624.center = new pc.Vec3( i6625[0], i6625[1], i6625[2] )
  i6624.size = new pc.Vec3( i6625[3], i6625[4], i6625[5] )
  i6624.enabled = !!i6625[6]
  i6624.isTrigger = !!i6625[7]
  request.r(i6625[8], i6625[9], 0, i6624, 'material')
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6627 = data
  i6626.color = new pc.Color(i6627[0], i6627[1], i6627[2], i6627[3])
  request.r(i6627[4], i6627[5], 0, i6626, 'sprite')
  i6626.flipX = !!i6627[6]
  i6626.flipY = !!i6627[7]
  i6626.drawMode = i6627[8]
  i6626.size = new pc.Vec2( i6627[9], i6627[10] )
  i6626.tileMode = i6627[11]
  i6626.adaptiveModeThreshold = i6627[12]
  i6626.maskInteraction = i6627[13]
  i6626.spriteSortPoint = i6627[14]
  i6626.enabled = !!i6627[15]
  request.r(i6627[16], i6627[17], 0, i6626, 'sharedMaterial')
  var i6629 = i6627[18]
  var i6628 = []
  for(var i = 0; i < i6629.length; i += 2) {
  request.r(i6629[i + 0], i6629[i + 1], 2, i6628, '')
  }
  i6626.sharedMaterials = i6628
  i6626.receiveShadows = !!i6627[19]
  i6626.shadowCastingMode = i6627[20]
  i6626.sortingLayerID = i6627[21]
  i6626.sortingOrder = i6627[22]
  i6626.lightmapIndex = i6627[23]
  i6626.lightmapSceneIndex = i6627[24]
  i6626.lightmapScaleOffset = new pc.Vec4( i6627[25], i6627[26], i6627[27], i6627[28] )
  i6626.lightProbeUsage = i6627[29]
  i6626.reflectionProbeUsage = i6627[30]
  return i6626
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i6630 = root || request.c( 'ChoiceBoard' )
  var i6631 = data
  request.r(i6631[0], i6631[1], 0, i6630, 'spriteRenderer')
  request.r(i6631[2], i6631[3], 0, i6630, 'borderRenderer')
  request.r(i6631[4], i6631[5], 0, i6630, 'increaseBorderSprite')
  request.r(i6631[6], i6631[7], 0, i6630, 'decreaseBorderSprite')
  i6630.choiceBoardType = i6631[8]
  return i6630
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i6632 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i6633 = data
  request.r(i6633[0], i6633[1], 0, i6632, 'm_Texture')
  i6632.m_UVRect = UnityEngine.Rect.MinMaxRect(i6633[2], i6633[3], i6633[4], i6633[5])
  request.r(i6633[6], i6633[7], 0, i6632, 'm_Material')
  i6632.m_Maskable = !!i6633[8]
  i6632.m_Color = new pc.Color(i6633[9], i6633[10], i6633[11], i6633[12])
  i6632.m_RaycastTarget = !!i6633[13]
  i6632.m_RaycastPadding = new pc.Vec4( i6633[14], i6633[15], i6633[16], i6633[17] )
  return i6632
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i6634 = root || request.c( 'ImageScroller' )
  var i6635 = data
  request.r(i6635[0], i6635[1], 0, i6634, 'rawImage')
  i6634.moveVector = new pc.Vec2( i6635[2], i6635[3] )
  return i6634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6637 = data
  i6636.name = i6637[0]
  i6636.atlasId = i6637[1]
  i6636.mipmapCount = i6637[2]
  i6636.hdr = !!i6637[3]
  i6636.size = i6637[4]
  i6636.anisoLevel = i6637[5]
  i6636.filterMode = i6637[6]
  var i6639 = i6637[7]
  var i6638 = []
  for(var i = 0; i < i6639.length; i += 4) {
    i6638.push( UnityEngine.Rect.MinMaxRect(i6639[i + 0], i6639[i + 1], i6639[i + 2], i6639[i + 3]) );
  }
  i6636.rects = i6638
  i6636.wrapU = i6637[8]
  i6636.wrapV = i6637[9]
  return i6636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6643 = data
  i6642.name = i6643[0]
  i6642.index = i6643[1]
  i6642.startup = !!i6643[2]
  return i6642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6645 = data
  i6644.type = i6645[0]
  i6644.color = new pc.Color(i6645[1], i6645[2], i6645[3], i6645[4])
  i6644.cullingMask = i6645[5]
  i6644.intensity = i6645[6]
  i6644.range = i6645[7]
  i6644.spotAngle = i6645[8]
  i6644.shadows = i6645[9]
  i6644.shadowNormalBias = i6645[10]
  i6644.shadowBias = i6645[11]
  i6644.shadowStrength = i6645[12]
  i6644.shadowResolution = i6645[13]
  i6644.lightmapBakeType = i6645[14]
  i6644.renderMode = i6645[15]
  request.r(i6645[16], i6645[17], 0, i6644, 'cookie')
  i6644.cookieSize = i6645[18]
  i6644.shadowNearPlane = i6645[19]
  i6644.enabled = !!i6645[20]
  return i6644
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i6646 = root || request.c( 'UICheckBoxHolder' )
  var i6647 = data
  var i6649 = i6647[0]
  var i6648 = []
  for(var i = 0; i < i6649.length; i += 2) {
  request.r(i6649[i + 0], i6649[i + 1], 2, i6648, '')
  }
  i6646.uICheckBoxes = i6648
  return i6646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6652 = root || request.c( 'UnityEngine.UI.Button' )
  var i6653 = data
  i6652.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6653[0], i6652.m_OnClick)
  i6652.m_Navigation = request.d('UnityEngine.UI.Navigation', i6653[1], i6652.m_Navigation)
  i6652.m_Transition = i6653[2]
  i6652.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6653[3], i6652.m_Colors)
  i6652.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6653[4], i6652.m_SpriteState)
  i6652.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6653[5], i6652.m_AnimationTriggers)
  i6652.m_Interactable = !!i6653[6]
  request.r(i6653[7], i6653[8], 0, i6652, 'm_TargetGraphic')
  return i6652
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6654 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6655 = data
  i6654.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6655[0], i6654.m_PersistentCalls)
  return i6654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6657 = data
  request.r(i6657[0], i6657[1], 0, i6656, 'm_ObjectArgument')
  i6656.m_ObjectArgumentAssemblyTypeName = i6657[2]
  i6656.m_IntArgument = i6657[3]
  i6656.m_FloatArgument = i6657[4]
  i6656.m_StringArgument = i6657[5]
  i6656.m_BoolArgument = !!i6657[6]
  return i6656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6659 = data
  request.r(i6659[0], i6659[1], 0, i6658, 'm_FirstSelected')
  i6658.m_sendNavigationEvents = !!i6659[2]
  i6658.m_DragThreshold = i6659[3]
  return i6658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6661 = data
  i6660.m_HorizontalAxis = i6661[0]
  i6660.m_VerticalAxis = i6661[1]
  i6660.m_SubmitButton = i6661[2]
  i6660.m_CancelButton = i6661[3]
  i6660.m_InputActionsPerSecond = i6661[4]
  i6660.m_RepeatDelay = i6661[5]
  i6660.m_ForceModuleActive = !!i6661[6]
  i6660.m_SendPointerHoverToParent = !!i6661[7]
  return i6660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6663 = data
  request.r(i6663[0], i6663[1], 0, i6662, 'sharedMesh')
  return i6662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6665 = data
  request.r(i6665[0], i6665[1], 0, i6664, 'additionalVertexStreams')
  i6664.enabled = !!i6665[2]
  request.r(i6665[3], i6665[4], 0, i6664, 'sharedMaterial')
  var i6667 = i6665[5]
  var i6666 = []
  for(var i = 0; i < i6667.length; i += 2) {
  request.r(i6667[i + 0], i6667[i + 1], 2, i6666, '')
  }
  i6664.sharedMaterials = i6666
  i6664.receiveShadows = !!i6665[6]
  i6664.shadowCastingMode = i6665[7]
  i6664.sortingLayerID = i6665[8]
  i6664.sortingOrder = i6665[9]
  i6664.lightmapIndex = i6665[10]
  i6664.lightmapSceneIndex = i6665[11]
  i6664.lightmapScaleOffset = new pc.Vec4( i6665[12], i6665[13], i6665[14], i6665[15] )
  i6664.lightProbeUsage = i6665[16]
  i6664.reflectionProbeUsage = i6665[17]
  return i6664
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6668 = root || request.c( 'GameManager' )
  var i6669 = data
  request.r(i6669[0], i6669[1], 0, i6668, 'Player')
  i6668.maxLevel = i6669[2]
  i6668.winLevel = i6669[3]
  i6668.totalMoveTime = i6669[4]
  i6668.currentPlayerLevel = i6669[5]
  return i6668
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6670 = root || request.c( 'InputManager' )
  var i6671 = data
  i6670.minimumSwipeDistance = i6671[0]
  return i6670
}

Deserializers["UIManager"] = function (request, data, root) {
  var i6672 = root || request.c( 'UIManager' )
  var i6673 = data
  return i6672
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6674 = root || request.c( 'Ply_SoundManager' )
  var i6675 = data
  i6674.audioClips = request.d('FxAudio', i6675[0], i6674.audioClips)
  request.r(i6675[1], i6675[2], 0, i6674, 'sound')
  i6674.enableSound = !!i6675[3]
  i6674.bgmVolume = i6675[4]
  return i6674
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i6676 = root || request.c( 'FxAudio' )
  var i6677 = data
  i6676.Clock = request.d('SoundData', i6677[0], i6676.Clock)
  i6676.PlayerWin = request.d('SoundData', i6677[1], i6676.PlayerWin)
  i6676.PlayerLoose = request.d('SoundData', i6677[2], i6676.PlayerLoose)
  i6676.RightChoice = request.d('SoundData', i6677[3], i6676.RightChoice)
  i6676.WrongChoice = request.d('SoundData', i6677[4], i6676.WrongChoice)
  i6676.MaxLevel = request.d('SoundData', i6677[5], i6676.MaxLevel)
  i6676.FightingCloud = request.d('SoundData', i6677[6], i6676.FightingCloud)
  return i6676
}

Deserializers["SoundData"] = function (request, data, root) {
  var i6678 = root || request.c( 'SoundData' )
  var i6679 = data
  request.r(i6679[0], i6679[1], 0, i6678, 'clip')
  i6678.volume = i6679[2]
  return i6678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6681 = data
  request.r(i6681[0], i6681[1], 0, i6680, 'clip')
  request.r(i6681[2], i6681[3], 0, i6680, 'outputAudioMixerGroup')
  i6680.playOnAwake = !!i6681[4]
  i6680.loop = !!i6681[5]
  i6680.time = i6681[6]
  i6680.volume = i6681[7]
  i6680.pitch = i6681[8]
  i6680.enabled = !!i6681[9]
  return i6680
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i6682 = root || request.c( 'ProgressTrackingManager' )
  var i6683 = data
  i6682.maxScore = i6683[0]
  request.r(i6683[1], i6683[2], 0, i6682, 'choiceBoardPlacer')
  i6682.currentScore = i6683[3]
  i6682.currentPercent = i6683[4]
  return i6682
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i6684 = root || request.c( 'PlayerController' )
  var i6685 = data
  request.r(i6685[0], i6685[1], 0, i6684, 'endPos')
  i6684.switchTrackTime = i6685[2]
  request.r(i6685[3], i6685[4], 0, i6684, 'trackRightTransform')
  request.r(i6685[5], i6685[6], 0, i6684, 'trackLeftTransform')
  i6684.startRight = !!i6685[7]
  request.r(i6685[8], i6685[9], 0, i6684, 'playerTransform')
  request.r(i6685[10], i6685[11], 0, i6684, 'playerVisual')
  request.r(i6685[12], i6685[13], 0, i6684, 'winPar')
  i6684.currentLevel = i6685[14]
  i6684.dragSmoothSpeed = i6685[15]
  i6684.moveCurve = new pc.AnimationCurve( { keys_flow: i6685[16] } )
  return i6684
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i6686 = root || request.c( 'PlayerVisual' )
  var i6687 = data
  request.r(i6687[0], i6687[1], 0, i6686, 'playerSpriteRenderer')
  request.r(i6687[2], i6687[3], 0, i6686, 'fakeShadowRenderer')
  var i6689 = i6687[4]
  var i6688 = []
  for(var i = 0; i < i6689.length; i += 2) {
  request.r(i6689[i + 0], i6689[i + 1], 2, i6688, '')
  }
  i6686.levelSprite = i6688
  i6686.levelScaleMultipliers = i6687[5]
  i6686.maxPowerParScaleMultiplier = i6687[6]
  i6686.bounceYMultiplier = i6687[7]
  i6686.bounceDuration = i6687[8]
  i6686.scaleTransitionDuration = i6687[9]
  request.r(i6687[10], i6687[11], 0, i6686, 'visualAnimator')
  i6686.level4TriggerName = i6687[12]
  i6686.level4SpriteDelay = i6687[13]
  request.r(i6687[14], i6687[15], 0, i6686, 'maxPowerPar')
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i6690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i6691 = data
  i6690.mass = i6691[0]
  i6690.drag = i6691[1]
  i6690.angularDrag = i6691[2]
  i6690.useGravity = !!i6691[3]
  i6690.isKinematic = !!i6691[4]
  i6690.constraints = i6691[5]
  i6690.maxAngularVelocity = i6691[6]
  i6690.collisionDetectionMode = i6691[7]
  i6690.interpolation = i6691[8]
  return i6690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6693 = data
  request.r(i6693[0], i6693[1], 0, i6692, 'animatorController')
  request.r(i6693[2], i6693[3], 0, i6692, 'avatar')
  i6692.updateMode = i6693[4]
  i6692.hasTransformHierarchy = !!i6693[5]
  i6692.applyRootMotion = !!i6693[6]
  var i6695 = i6693[7]
  var i6694 = []
  for(var i = 0; i < i6695.length; i += 2) {
  request.r(i6695[i + 0], i6695[i + 1], 2, i6694, '')
  }
  i6692.humanBones = i6694
  i6692.enabled = !!i6693[8]
  return i6692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6699 = data
  i6698.aspect = i6699[0]
  i6698.orthographic = !!i6699[1]
  i6698.orthographicSize = i6699[2]
  i6698.backgroundColor = new pc.Color(i6699[3], i6699[4], i6699[5], i6699[6])
  i6698.nearClipPlane = i6699[7]
  i6698.farClipPlane = i6699[8]
  i6698.fieldOfView = i6699[9]
  i6698.depth = i6699[10]
  i6698.clearFlags = i6699[11]
  i6698.cullingMask = i6699[12]
  i6698.rect = i6699[13]
  request.r(i6699[14], i6699[15], 0, i6698, 'targetTexture')
  i6698.usePhysicalProperties = !!i6699[16]
  i6698.focalLength = i6699[17]
  i6698.sensorSize = new pc.Vec2( i6699[18], i6699[19] )
  i6698.lensShift = new pc.Vec2( i6699[20], i6699[21] )
  i6698.gateFit = i6699[22]
  i6698.commandBufferCount = i6699[23]
  i6698.cameraType = i6699[24]
  i6698.enabled = !!i6699[25]
  return i6698
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i6700 = root || request.c( 'MaterialUVScroller' )
  var i6701 = data
  request.r(i6701[0], i6701[1], 0, i6700, 'targetMaterial')
  i6700.scrollSpeed = new pc.Vec2( i6701[2], i6701[3] )
  return i6700
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i6702 = root || request.c( 'ChoiceBoardPlacer' )
  var i6703 = data
  request.r(i6703[0], i6703[1], 0, i6702, 'choiceBoardHolderprefab')
  request.r(i6703[2], i6703[3], 0, i6702, 'startPos')
  request.r(i6703[4], i6703[5], 0, i6702, 'endPos')
  request.r(i6703[6], i6703[7], 0, i6702, 'choiceBoardPairData')
  i6702.spawnCount = i6703[8]
  i6702.spawnGenericByNumber = !!i6703[9]
  i6702.shufflePairsOrder = !!i6703[10]
  i6702.shuffleLeftRight = !!i6703[11]
  i6702.spawnOnStart = !!i6703[12]
  return i6702
}

Deserializers["BossController"] = function (request, data, root) {
  var i6704 = root || request.c( 'BossController' )
  var i6705 = data
  request.r(i6705[0], i6705[1], 0, i6704, 'bossSpriteRenderer')
  request.r(i6705[2], i6705[3], 0, i6704, 'characterVisual')
  request.r(i6705[4], i6705[5], 0, i6704, 'fightingCloud')
  request.r(i6705[6], i6705[7], 0, i6704, 'resultObject')
  request.r(i6705[8], i6705[9], 0, i6704, 'resultSpriteRenderer')
  request.r(i6705[10], i6705[11], 0, i6704, 'winSprite')
  request.r(i6705[12], i6705[13], 0, i6704, 'lossSprite')
  request.r(i6705[14], i6705[15], 0, i6704, 'extraWinObject')
  request.r(i6705[16], i6705[17], 0, i6704, 'winPanel')
  request.r(i6705[18], i6705[19], 0, i6704, 'losePanel')
  var i6707 = i6705[20]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 2) {
  request.r(i6707[i + 0], i6707[i + 1], 2, i6706, '')
  }
  i6704.extraObjectsToHide = i6706
  i6704.fightingCloudFx = i6705[21]
  i6704.winPanelFx = i6705[22]
  i6704.losePanelFx = i6705[23]
  i6704.delayAfterLastBoard = i6705[24]
  i6704.fightDuration = i6705[25]
  i6704.showResultDuration = i6705[26]
  request.r(i6705[27], i6705[28], 0, i6704, 'currentPlayer')
  i6704.currentPlayerLevel = i6705[29]
  return i6704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6711 = data
  i6710.ambientIntensity = i6711[0]
  i6710.reflectionIntensity = i6711[1]
  i6710.ambientMode = i6711[2]
  i6710.ambientLight = new pc.Color(i6711[3], i6711[4], i6711[5], i6711[6])
  i6710.ambientSkyColor = new pc.Color(i6711[7], i6711[8], i6711[9], i6711[10])
  i6710.ambientGroundColor = new pc.Color(i6711[11], i6711[12], i6711[13], i6711[14])
  i6710.ambientEquatorColor = new pc.Color(i6711[15], i6711[16], i6711[17], i6711[18])
  i6710.fogColor = new pc.Color(i6711[19], i6711[20], i6711[21], i6711[22])
  i6710.fogEndDistance = i6711[23]
  i6710.fogStartDistance = i6711[24]
  i6710.fogDensity = i6711[25]
  i6710.fog = !!i6711[26]
  request.r(i6711[27], i6711[28], 0, i6710, 'skybox')
  i6710.fogMode = i6711[29]
  var i6713 = i6711[30]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6713[i + 0]) );
  }
  i6710.lightmaps = i6712
  i6710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6711[31], i6710.lightProbes)
  i6710.lightmapsMode = i6711[32]
  i6710.mixedBakeMode = i6711[33]
  i6710.environmentLightingMode = i6711[34]
  i6710.ambientProbe = new pc.SphericalHarmonicsL2(i6711[35])
  i6710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6711[36])
  i6710.useReferenceAmbientProbe = !!i6711[37]
  request.r(i6711[38], i6711[39], 0, i6710, 'customReflection')
  request.r(i6711[40], i6711[41], 0, i6710, 'defaultReflection')
  i6710.defaultReflectionMode = i6711[42]
  i6710.defaultReflectionResolution = i6711[43]
  i6710.sunLightObjectId = i6711[44]
  i6710.pixelLightCount = i6711[45]
  i6710.defaultReflectionHDR = !!i6711[46]
  i6710.hasLightDataAsset = !!i6711[47]
  i6710.hasManualGenerate = !!i6711[48]
  return i6710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6717 = data
  request.r(i6717[0], i6717[1], 0, i6716, 'lightmapColor')
  request.r(i6717[2], i6717[3], 0, i6716, 'lightmapDirection')
  return i6716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6718 = root || new UnityEngine.LightProbes()
  var i6719 = data
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6727 = data
  var i6729 = i6727[0]
  var i6728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6729.length; i += 1) {
    i6728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6729[i + 0]));
  }
  i6726.ShaderCompilationErrors = i6728
  i6726.name = i6727[1]
  i6726.guid = i6727[2]
  var i6731 = i6727[3]
  var i6730 = []
  for(var i = 0; i < i6731.length; i += 1) {
    i6730.push( i6731[i + 0] );
  }
  i6726.shaderDefinedKeywords = i6730
  var i6733 = i6727[4]
  var i6732 = []
  for(var i = 0; i < i6733.length; i += 1) {
    i6732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6733[i + 0]) );
  }
  i6726.passes = i6732
  var i6735 = i6727[5]
  var i6734 = []
  for(var i = 0; i < i6735.length; i += 1) {
    i6734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6735[i + 0]) );
  }
  i6726.usePasses = i6734
  var i6737 = i6727[6]
  var i6736 = []
  for(var i = 0; i < i6737.length; i += 1) {
    i6736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6737[i + 0]) );
  }
  i6726.defaultParameterValues = i6736
  request.r(i6727[7], i6727[8], 0, i6726, 'unityFallbackShader')
  i6726.readDepth = !!i6727[9]
  i6726.hasDepthOnlyPass = !!i6727[10]
  i6726.isCreatedByShaderGraph = !!i6727[11]
  i6726.disableBatching = !!i6727[12]
  i6726.compiled = !!i6727[13]
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6741 = data
  i6740.shaderName = i6741[0]
  i6740.errorMessage = i6741[1]
  return i6740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6746 = root || new pc.UnityShaderPass()
  var i6747 = data
  i6746.id = i6747[0]
  i6746.subShaderIndex = i6747[1]
  i6746.name = i6747[2]
  i6746.passType = i6747[3]
  i6746.grabPassTextureName = i6747[4]
  i6746.usePass = !!i6747[5]
  i6746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[6], i6746.zTest)
  i6746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[7], i6746.zWrite)
  i6746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[8], i6746.culling)
  i6746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6747[9], i6746.blending)
  i6746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6747[10], i6746.alphaBlending)
  i6746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[11], i6746.colorWriteMask)
  i6746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[12], i6746.offsetUnits)
  i6746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[13], i6746.offsetFactor)
  i6746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[14], i6746.stencilRef)
  i6746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[15], i6746.stencilReadMask)
  i6746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6747[16], i6746.stencilWriteMask)
  i6746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6747[17], i6746.stencilOp)
  i6746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6747[18], i6746.stencilOpFront)
  i6746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6747[19], i6746.stencilOpBack)
  var i6749 = i6747[20]
  var i6748 = []
  for(var i = 0; i < i6749.length; i += 1) {
    i6748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6749[i + 0]) );
  }
  i6746.tags = i6748
  var i6751 = i6747[21]
  var i6750 = []
  for(var i = 0; i < i6751.length; i += 1) {
    i6750.push( i6751[i + 0] );
  }
  i6746.passDefinedKeywords = i6750
  var i6753 = i6747[22]
  var i6752 = []
  for(var i = 0; i < i6753.length; i += 1) {
    i6752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6753[i + 0]) );
  }
  i6746.passDefinedKeywordGroups = i6752
  var i6755 = i6747[23]
  var i6754 = []
  for(var i = 0; i < i6755.length; i += 1) {
    i6754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6755[i + 0]) );
  }
  i6746.variants = i6754
  var i6757 = i6747[24]
  var i6756 = []
  for(var i = 0; i < i6757.length; i += 1) {
    i6756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6757[i + 0]) );
  }
  i6746.excludedVariants = i6756
  i6746.hasDepthReader = !!i6747[25]
  return i6746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6759 = data
  i6758.val = i6759[0]
  i6758.name = i6759[1]
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6761 = data
  i6760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6761[0], i6760.src)
  i6760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6761[1], i6760.dst)
  i6760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6761[2], i6760.op)
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6763 = data
  i6762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6763[0], i6762.pass)
  i6762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6763[1], i6762.fail)
  i6762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6763[2], i6762.zFail)
  i6762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6763[3], i6762.comp)
  return i6762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6767 = data
  i6766.name = i6767[0]
  i6766.value = i6767[1]
  return i6766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6771 = data
  var i6773 = i6771[0]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
    i6772.push( i6773[i + 0] );
  }
  i6770.keywords = i6772
  i6770.hasDiscard = !!i6771[1]
  return i6770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6777 = data
  i6776.passId = i6777[0]
  i6776.subShaderIndex = i6777[1]
  var i6779 = i6777[2]
  var i6778 = []
  for(var i = 0; i < i6779.length; i += 1) {
    i6778.push( i6779[i + 0] );
  }
  i6776.keywords = i6778
  i6776.vertexProgram = i6777[3]
  i6776.fragmentProgram = i6777[4]
  i6776.exportedForWebGl2 = !!i6777[5]
  i6776.readDepth = !!i6777[6]
  return i6776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6783 = data
  request.r(i6783[0], i6783[1], 0, i6782, 'shader')
  i6782.pass = i6783[2]
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6787 = data
  i6786.name = i6787[0]
  i6786.type = i6787[1]
  i6786.value = new pc.Vec4( i6787[2], i6787[3], i6787[4], i6787[5] )
  i6786.textureValue = i6787[6]
  i6786.shaderPropertyFlag = i6787[7]
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6789 = data
  i6788.name = i6789[0]
  request.r(i6789[1], i6789[2], 0, i6788, 'texture')
  i6788.aabb = i6789[3]
  i6788.vertices = i6789[4]
  i6788.triangles = i6789[5]
  i6788.textureRect = UnityEngine.Rect.MinMaxRect(i6789[6], i6789[7], i6789[8], i6789[9])
  i6788.packedRect = UnityEngine.Rect.MinMaxRect(i6789[10], i6789[11], i6789[12], i6789[13])
  i6788.border = new pc.Vec4( i6789[14], i6789[15], i6789[16], i6789[17] )
  i6788.transparency = i6789[18]
  i6788.bounds = i6789[19]
  i6788.pixelsPerUnit = i6789[20]
  i6788.textureWidth = i6789[21]
  i6788.textureHeight = i6789[22]
  i6788.nativeSize = new pc.Vec2( i6789[23], i6789[24] )
  i6788.pivot = new pc.Vec2( i6789[25], i6789[26] )
  i6788.textureRectOffset = new pc.Vec2( i6789[27], i6789[28] )
  return i6788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6791 = data
  i6790.name = i6791[0]
  return i6790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6793 = data
  i6792.name = i6793[0]
  i6792.wrapMode = i6793[1]
  i6792.isLooping = !!i6793[2]
  i6792.length = i6793[3]
  var i6795 = i6793[4]
  var i6794 = []
  for(var i = 0; i < i6795.length; i += 1) {
    i6794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6795[i + 0]) );
  }
  i6792.curves = i6794
  var i6797 = i6793[5]
  var i6796 = []
  for(var i = 0; i < i6797.length; i += 1) {
    i6796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6797[i + 0]) );
  }
  i6792.events = i6796
  i6792.halfPrecision = !!i6793[6]
  i6792._frameRate = i6793[7]
  i6792.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6793[8], i6792.localBounds)
  i6792.hasMuscleCurves = !!i6793[9]
  var i6799 = i6793[10]
  var i6798 = []
  for(var i = 0; i < i6799.length; i += 1) {
    i6798.push( i6799[i + 0] );
  }
  i6792.clipMuscleConstant = i6798
  i6792.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6793[11], i6792.clipBindingConstant)
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6803 = data
  i6802.path = i6803[0]
  i6802.hash = i6803[1]
  i6802.componentType = i6803[2]
  i6802.property = i6803[3]
  i6802.keys = i6803[4]
  var i6805 = i6803[5]
  var i6804 = []
  for(var i = 0; i < i6805.length; i += 1) {
    i6804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6805[i + 0]) );
  }
  i6802.objectReferenceKeys = i6804
  return i6802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6809 = data
  i6808.time = i6809[0]
  request.r(i6809[1], i6809[2], 0, i6808, 'value')
  return i6808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6813 = data
  i6812.functionName = i6813[0]
  i6812.floatParameter = i6813[1]
  i6812.intParameter = i6813[2]
  i6812.stringParameter = i6813[3]
  request.r(i6813[4], i6813[5], 0, i6812, 'objectReferenceParameter')
  i6812.time = i6813[6]
  return i6812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6815 = data
  i6814.center = new pc.Vec3( i6815[0], i6815[1], i6815[2] )
  i6814.extends = new pc.Vec3( i6815[3], i6815[4], i6815[5] )
  return i6814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6819 = data
  var i6821 = i6819[0]
  var i6820 = []
  for(var i = 0; i < i6821.length; i += 1) {
    i6820.push( i6821[i + 0] );
  }
  i6818.genericBindings = i6820
  var i6823 = i6819[1]
  var i6822 = []
  for(var i = 0; i < i6823.length; i += 1) {
    i6822.push( i6823[i + 0] );
  }
  i6818.pptrCurveMapping = i6822
  return i6818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6825 = data
  i6824.name = i6825[0]
  var i6827 = i6825[1]
  var i6826 = []
  for(var i = 0; i < i6827.length; i += 1) {
    i6826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6827[i + 0]) );
  }
  i6824.layers = i6826
  var i6829 = i6825[2]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 1) {
    i6828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6829[i + 0]) );
  }
  i6824.parameters = i6828
  i6824.animationClips = i6825[3]
  i6824.avatarUnsupported = i6825[4]
  return i6824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6833 = data
  i6832.name = i6833[0]
  i6832.defaultWeight = i6833[1]
  i6832.blendingMode = i6833[2]
  i6832.avatarMask = i6833[3]
  i6832.syncedLayerIndex = i6833[4]
  i6832.syncedLayerAffectsTiming = !!i6833[5]
  i6832.syncedLayers = i6833[6]
  i6832.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6833[7], i6832.stateMachine)
  return i6832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6835 = data
  i6834.id = i6835[0]
  i6834.name = i6835[1]
  i6834.path = i6835[2]
  var i6837 = i6835[3]
  var i6836 = []
  for(var i = 0; i < i6837.length; i += 1) {
    i6836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6837[i + 0]) );
  }
  i6834.states = i6836
  var i6839 = i6835[4]
  var i6838 = []
  for(var i = 0; i < i6839.length; i += 1) {
    i6838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6839[i + 0]) );
  }
  i6834.machines = i6838
  var i6841 = i6835[5]
  var i6840 = []
  for(var i = 0; i < i6841.length; i += 1) {
    i6840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6841[i + 0]) );
  }
  i6834.entryStateTransitions = i6840
  var i6843 = i6835[6]
  var i6842 = []
  for(var i = 0; i < i6843.length; i += 1) {
    i6842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6843[i + 0]) );
  }
  i6834.exitStateTransitions = i6842
  var i6845 = i6835[7]
  var i6844 = []
  for(var i = 0; i < i6845.length; i += 1) {
    i6844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6845[i + 0]) );
  }
  i6834.anyStateTransitions = i6844
  i6834.defaultStateId = i6835[8]
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6849 = data
  i6848.id = i6849[0]
  i6848.name = i6849[1]
  i6848.cycleOffset = i6849[2]
  i6848.cycleOffsetParameter = i6849[3]
  i6848.cycleOffsetParameterActive = !!i6849[4]
  i6848.mirror = !!i6849[5]
  i6848.mirrorParameter = i6849[6]
  i6848.mirrorParameterActive = !!i6849[7]
  i6848.motionId = i6849[8]
  i6848.nameHash = i6849[9]
  i6848.fullPathHash = i6849[10]
  i6848.speed = i6849[11]
  i6848.speedParameter = i6849[12]
  i6848.speedParameterActive = !!i6849[13]
  i6848.tag = i6849[14]
  i6848.tagHash = i6849[15]
  i6848.writeDefaultValues = !!i6849[16]
  var i6851 = i6849[17]
  var i6850 = []
  for(var i = 0; i < i6851.length; i += 2) {
  request.r(i6851[i + 0], i6851[i + 1], 2, i6850, '')
  }
  i6848.behaviours = i6850
  var i6853 = i6849[18]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6853[i + 0]) );
  }
  i6848.transitions = i6852
  return i6848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6859 = data
  i6858.fullPath = i6859[0]
  i6858.canTransitionToSelf = !!i6859[1]
  i6858.duration = i6859[2]
  i6858.exitTime = i6859[3]
  i6858.hasExitTime = !!i6859[4]
  i6858.hasFixedDuration = !!i6859[5]
  i6858.interruptionSource = i6859[6]
  i6858.offset = i6859[7]
  i6858.orderedInterruption = !!i6859[8]
  i6858.destinationStateId = i6859[9]
  i6858.isExit = !!i6859[10]
  i6858.mute = !!i6859[11]
  i6858.solo = !!i6859[12]
  var i6861 = i6859[13]
  var i6860 = []
  for(var i = 0; i < i6861.length; i += 1) {
    i6860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6861[i + 0]) );
  }
  i6858.conditions = i6860
  return i6858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6867 = data
  i6866.destinationStateId = i6867[0]
  i6866.isExit = !!i6867[1]
  i6866.mute = !!i6867[2]
  i6866.solo = !!i6867[3]
  var i6869 = i6867[4]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6869[i + 0]) );
  }
  i6866.conditions = i6868
  return i6866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6873 = data
  i6872.mode = i6873[0]
  i6872.parameter = i6873[1]
  i6872.threshold = i6873[2]
  return i6872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6877 = data
  i6876.defaultBool = !!i6877[0]
  i6876.defaultFloat = i6877[1]
  i6876.defaultInt = i6877[2]
  i6876.name = i6877[3]
  i6876.nameHash = i6877[4]
  i6876.type = i6877[5]
  return i6876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6879 = data
  i6878.name = i6879[0]
  i6878.bytes64 = i6879[1]
  i6878.data = i6879[2]
  return i6878
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i6880 = root || request.c( 'ChoiceBoardPairData' )
  var i6881 = data
  var i6883 = i6881[0]
  var i6882 = []
  for(var i = 0; i < i6883.length; i += 1) {
    i6882.push( request.d('ChoicePairData', i6883[i + 0]) );
  }
  i6880.ChoicePairDatas = i6882
  return i6880
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i6886 = root || request.c( 'ChoicePairData' )
  var i6887 = data
  i6886.choiceData1 = request.d('ChoiceData', i6887[0], i6886.choiceData1)
  i6886.choiceData2 = request.d('ChoiceData', i6887[1], i6886.choiceData2)
  return i6886
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i6888 = root || request.c( 'ChoiceData' )
  var i6889 = data
  request.r(i6889[0], i6889[1], 0, i6888, 'VisualSprite')
  request.r(i6889[2], i6889[3], 0, i6888, 'BorderSprite')
  i6888.ChoiceType = i6889[4]
  return i6888
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6890 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6891 = data
  i6890.useSafeMode = !!i6891[0]
  i6890.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6891[1], i6890.safeModeOptions)
  i6890.timeScale = i6891[2]
  i6890.unscaledTimeScale = i6891[3]
  i6890.useSmoothDeltaTime = !!i6891[4]
  i6890.maxSmoothUnscaledTime = i6891[5]
  i6890.rewindCallbackMode = i6891[6]
  i6890.showUnityEditorReport = !!i6891[7]
  i6890.logBehaviour = i6891[8]
  i6890.drawGizmos = !!i6891[9]
  i6890.defaultRecyclable = !!i6891[10]
  i6890.defaultAutoPlay = i6891[11]
  i6890.defaultUpdateType = i6891[12]
  i6890.defaultTimeScaleIndependent = !!i6891[13]
  i6890.defaultEaseType = i6891[14]
  i6890.defaultEaseOvershootOrAmplitude = i6891[15]
  i6890.defaultEasePeriod = i6891[16]
  i6890.defaultAutoKill = !!i6891[17]
  i6890.defaultLoopType = i6891[18]
  i6890.debugMode = !!i6891[19]
  i6890.debugStoreTargetId = !!i6891[20]
  i6890.showPreviewPanel = !!i6891[21]
  i6890.storeSettingsLocation = i6891[22]
  i6890.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6891[23], i6890.modules)
  i6890.createASMDEF = !!i6891[24]
  i6890.showPlayingTweens = !!i6891[25]
  i6890.showPausedTweens = !!i6891[26]
  return i6890
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6892 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6893 = data
  i6892.logBehaviour = i6893[0]
  i6892.nestedTweenFailureBehaviour = i6893[1]
  return i6892
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6895 = data
  i6894.showPanel = !!i6895[0]
  i6894.audioEnabled = !!i6895[1]
  i6894.physicsEnabled = !!i6895[2]
  i6894.physics2DEnabled = !!i6895[3]
  i6894.spriteEnabled = !!i6895[4]
  i6894.uiEnabled = !!i6895[5]
  i6894.uiToolkitEnabled = !!i6895[6]
  i6894.textMeshProEnabled = !!i6895[7]
  i6894.tk2DEnabled = !!i6895[8]
  i6894.deAudioEnabled = !!i6895[9]
  i6894.deUnityExtendedEnabled = !!i6895[10]
  i6894.epoOutlineEnabled = !!i6895[11]
  return i6894
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6896 = root || request.c( 'TMPro.TMP_Settings' )
  var i6897 = data
  i6896.assetVersion = i6897[0]
  i6896.m_TextWrappingMode = i6897[1]
  i6896.m_enableKerning = !!i6897[2]
  var i6899 = i6897[3]
  var i6898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.add(i6899[i + 0]);
  }
  i6896.m_ActiveFontFeatures = i6898
  i6896.m_enableExtraPadding = !!i6897[4]
  i6896.m_enableTintAllSprites = !!i6897[5]
  i6896.m_enableParseEscapeCharacters = !!i6897[6]
  i6896.m_EnableRaycastTarget = !!i6897[7]
  i6896.m_GetFontFeaturesAtRuntime = !!i6897[8]
  i6896.m_missingGlyphCharacter = i6897[9]
  i6896.m_ClearDynamicDataOnBuild = !!i6897[10]
  i6896.m_warningsDisabled = !!i6897[11]
  request.r(i6897[12], i6897[13], 0, i6896, 'm_defaultFontAsset')
  i6896.m_defaultFontAssetPath = i6897[14]
  i6896.m_defaultFontSize = i6897[15]
  i6896.m_defaultAutoSizeMinRatio = i6897[16]
  i6896.m_defaultAutoSizeMaxRatio = i6897[17]
  i6896.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6897[18], i6897[19] )
  i6896.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6897[20], i6897[21] )
  i6896.m_autoSizeTextContainer = !!i6897[22]
  i6896.m_IsTextObjectScaleStatic = !!i6897[23]
  var i6901 = i6897[24]
  var i6900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6901.length; i += 2) {
  request.r(i6901[i + 0], i6901[i + 1], 1, i6900, '')
  }
  i6896.m_fallbackFontAssets = i6900
  i6896.m_matchMaterialPreset = !!i6897[25]
  i6896.m_HideSubTextObjects = !!i6897[26]
  request.r(i6897[27], i6897[28], 0, i6896, 'm_defaultSpriteAsset')
  i6896.m_defaultSpriteAssetPath = i6897[29]
  i6896.m_enableEmojiSupport = !!i6897[30]
  i6896.m_MissingCharacterSpriteUnicode = i6897[31]
  var i6903 = i6897[32]
  var i6902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6903.length; i += 2) {
  request.r(i6903[i + 0], i6903[i + 1], 1, i6902, '')
  }
  i6896.m_EmojiFallbackTextAssets = i6902
  i6896.m_defaultColorGradientPresetsPath = i6897[33]
  request.r(i6897[34], i6897[35], 0, i6896, 'm_defaultStyleSheet')
  i6896.m_StyleSheetsResourcePath = i6897[36]
  request.r(i6897[37], i6897[38], 0, i6896, 'm_leadingCharacters')
  request.r(i6897[39], i6897[40], 0, i6896, 'm_followingCharacters')
  i6896.m_UseModernHangulLineBreakingRules = !!i6897[41]
  return i6896
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6911 = data
  request.r(i6911[0], i6911[1], 0, i6910, 'spriteSheet')
  var i6913 = i6911[2]
  var i6912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6913.length; i += 1) {
    i6912.add(request.d('TMPro.TMP_Sprite', i6913[i + 0]));
  }
  i6910.spriteInfoList = i6912
  var i6915 = i6911[3]
  var i6914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6915.length; i += 2) {
  request.r(i6915[i + 0], i6915[i + 1], 1, i6914, '')
  }
  i6910.fallbackSpriteAssets = i6914
  var i6917 = i6911[4]
  var i6916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6917.length; i += 1) {
    i6916.add(request.d('TMPro.TMP_SpriteCharacter', i6917[i + 0]));
  }
  i6910.m_SpriteCharacterTable = i6916
  var i6919 = i6911[5]
  var i6918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6919.length; i += 1) {
    i6918.add(request.d('TMPro.TMP_SpriteGlyph', i6919[i + 0]));
  }
  i6910.m_GlyphTable = i6918
  i6910.m_Version = i6911[6]
  i6910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6911[7], i6910.m_FaceInfo)
  request.r(i6911[8], i6911[9], 0, i6910, 'm_Material')
  return i6910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6923 = data
  i6922.name = i6923[0]
  i6922.hashCode = i6923[1]
  i6922.unicode = i6923[2]
  i6922.pivot = new pc.Vec2( i6923[3], i6923[4] )
  request.r(i6923[5], i6923[6], 0, i6922, 'sprite')
  i6922.id = i6923[7]
  i6922.x = i6923[8]
  i6922.y = i6923[9]
  i6922.width = i6923[10]
  i6922.height = i6923[11]
  i6922.xOffset = i6923[12]
  i6922.yOffset = i6923[13]
  i6922.xAdvance = i6923[14]
  i6922.scale = i6923[15]
  return i6922
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6928 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6929 = data
  i6928.m_Name = i6929[0]
  i6928.m_ElementType = i6929[1]
  i6928.m_Unicode = i6929[2]
  i6928.m_GlyphIndex = i6929[3]
  i6928.m_Scale = i6929[4]
  return i6928
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6932 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6933 = data
  request.r(i6933[0], i6933[1], 0, i6932, 'sprite')
  i6932.m_Index = i6933[2]
  i6932.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6933[3], i6932.m_Metrics)
  i6932.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6933[4], i6932.m_GlyphRect)
  i6932.m_Scale = i6933[5]
  i6932.m_AtlasIndex = i6933[6]
  i6932.m_ClassDefinitionType = i6933[7]
  return i6932
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6934 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6935 = data
  i6934.m_Width = i6935[0]
  i6934.m_Height = i6935[1]
  i6934.m_HorizontalBearingX = i6935[2]
  i6934.m_HorizontalBearingY = i6935[3]
  i6934.m_HorizontalAdvance = i6935[4]
  return i6934
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6936 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6937 = data
  i6936.m_X = i6937[0]
  i6936.m_Y = i6937[1]
  i6936.m_Width = i6937[2]
  i6936.m_Height = i6937[3]
  return i6936
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6938 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6939 = data
  i6938.m_FaceIndex = i6939[0]
  i6938.m_FamilyName = i6939[1]
  i6938.m_StyleName = i6939[2]
  i6938.m_PointSize = i6939[3]
  i6938.m_Scale = i6939[4]
  i6938.m_UnitsPerEM = i6939[5]
  i6938.m_LineHeight = i6939[6]
  i6938.m_AscentLine = i6939[7]
  i6938.m_CapLine = i6939[8]
  i6938.m_MeanLine = i6939[9]
  i6938.m_Baseline = i6939[10]
  i6938.m_DescentLine = i6939[11]
  i6938.m_SuperscriptOffset = i6939[12]
  i6938.m_SuperscriptSize = i6939[13]
  i6938.m_SubscriptOffset = i6939[14]
  i6938.m_SubscriptSize = i6939[15]
  i6938.m_UnderlineOffset = i6939[16]
  i6938.m_UnderlineThickness = i6939[17]
  i6938.m_StrikethroughOffset = i6939[18]
  i6938.m_StrikethroughThickness = i6939[19]
  i6938.m_TabWidth = i6939[20]
  return i6938
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6940 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6941 = data
  var i6943 = i6941[0]
  var i6942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6943.length; i += 1) {
    i6942.add(request.d('TMPro.TMP_Style', i6943[i + 0]));
  }
  i6940.m_StyleList = i6942
  return i6940
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6946 = root || request.c( 'TMPro.TMP_Style' )
  var i6947 = data
  i6946.m_Name = i6947[0]
  i6946.m_HashCode = i6947[1]
  i6946.m_OpeningDefinition = i6947[2]
  i6946.m_ClosingDefinition = i6947[3]
  i6946.m_OpeningTagArray = i6947[4]
  i6946.m_ClosingTagArray = i6947[5]
  return i6946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6949 = data
  var i6951 = i6949[0]
  var i6950 = []
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6951[i + 0]) );
  }
  i6948.files = i6950
  i6948.componentToPrefabIds = i6949[1]
  return i6948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6955 = data
  i6954.path = i6955[0]
  request.r(i6955[1], i6955[2], 0, i6954, 'unityObject')
  return i6954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6957 = data
  var i6959 = i6957[0]
  var i6958 = []
  for(var i = 0; i < i6959.length; i += 1) {
    i6958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6959[i + 0]) );
  }
  i6956.scriptsExecutionOrder = i6958
  var i6961 = i6957[1]
  var i6960 = []
  for(var i = 0; i < i6961.length; i += 1) {
    i6960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6961[i + 0]) );
  }
  i6956.sortingLayers = i6960
  var i6963 = i6957[2]
  var i6962 = []
  for(var i = 0; i < i6963.length; i += 1) {
    i6962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6963[i + 0]) );
  }
  i6956.cullingLayers = i6962
  i6956.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6957[3], i6956.timeSettings)
  i6956.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6957[4], i6956.physicsSettings)
  i6956.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6957[5], i6956.physics2DSettings)
  i6956.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6957[6], i6956.qualitySettings)
  i6956.enableRealtimeShadows = !!i6957[7]
  i6956.enableAutoInstancing = !!i6957[8]
  i6956.enableStaticBatching = !!i6957[9]
  i6956.enableDynamicBatching = !!i6957[10]
  i6956.lightmapEncodingQuality = i6957[11]
  i6956.desiredColorSpace = i6957[12]
  var i6965 = i6957[13]
  var i6964 = []
  for(var i = 0; i < i6965.length; i += 1) {
    i6964.push( i6965[i + 0] );
  }
  i6956.allTags = i6964
  return i6956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6969 = data
  i6968.name = i6969[0]
  i6968.value = i6969[1]
  return i6968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6973 = data
  i6972.id = i6973[0]
  i6972.name = i6973[1]
  i6972.value = i6973[2]
  return i6972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6977 = data
  i6976.id = i6977[0]
  i6976.name = i6977[1]
  return i6976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6979 = data
  i6978.fixedDeltaTime = i6979[0]
  i6978.maximumDeltaTime = i6979[1]
  i6978.timeScale = i6979[2]
  i6978.maximumParticleTimestep = i6979[3]
  return i6978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6981 = data
  i6980.gravity = new pc.Vec3( i6981[0], i6981[1], i6981[2] )
  i6980.defaultSolverIterations = i6981[3]
  i6980.bounceThreshold = i6981[4]
  i6980.autoSyncTransforms = !!i6981[5]
  i6980.autoSimulation = !!i6981[6]
  var i6983 = i6981[7]
  var i6982 = []
  for(var i = 0; i < i6983.length; i += 1) {
    i6982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6983[i + 0]) );
  }
  i6980.collisionMatrix = i6982
  return i6980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6987 = data
  i6986.enabled = !!i6987[0]
  i6986.layerId = i6987[1]
  i6986.otherLayerId = i6987[2]
  return i6986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6989 = data
  request.r(i6989[0], i6989[1], 0, i6988, 'material')
  i6988.gravity = new pc.Vec2( i6989[2], i6989[3] )
  i6988.positionIterations = i6989[4]
  i6988.velocityIterations = i6989[5]
  i6988.velocityThreshold = i6989[6]
  i6988.maxLinearCorrection = i6989[7]
  i6988.maxAngularCorrection = i6989[8]
  i6988.maxTranslationSpeed = i6989[9]
  i6988.maxRotationSpeed = i6989[10]
  i6988.baumgarteScale = i6989[11]
  i6988.baumgarteTOIScale = i6989[12]
  i6988.timeToSleep = i6989[13]
  i6988.linearSleepTolerance = i6989[14]
  i6988.angularSleepTolerance = i6989[15]
  i6988.defaultContactOffset = i6989[16]
  i6988.autoSimulation = !!i6989[17]
  i6988.queriesHitTriggers = !!i6989[18]
  i6988.queriesStartInColliders = !!i6989[19]
  i6988.callbacksOnDisable = !!i6989[20]
  i6988.reuseCollisionCallbacks = !!i6989[21]
  i6988.autoSyncTransforms = !!i6989[22]
  var i6991 = i6989[23]
  var i6990 = []
  for(var i = 0; i < i6991.length; i += 1) {
    i6990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6991[i + 0]) );
  }
  i6988.collisionMatrix = i6990
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6995 = data
  i6994.enabled = !!i6995[0]
  i6994.layerId = i6995[1]
  i6994.otherLayerId = i6995[2]
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6997 = data
  var i6999 = i6997[0]
  var i6998 = []
  for(var i = 0; i < i6999.length; i += 1) {
    i6998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6999[i + 0]) );
  }
  i6996.qualityLevels = i6998
  var i7001 = i6997[1]
  var i7000 = []
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.push( i7001[i + 0] );
  }
  i6996.names = i7000
  i6996.shadows = i6997[2]
  i6996.anisotropicFiltering = i6997[3]
  i6996.antiAliasing = i6997[4]
  i6996.lodBias = i6997[5]
  i6996.shadowCascades = i6997[6]
  i6996.shadowDistance = i6997[7]
  i6996.shadowmaskMode = i6997[8]
  i6996.shadowProjection = i6997[9]
  i6996.shadowResolution = i6997[10]
  i6996.softParticles = !!i6997[11]
  i6996.softVegetation = !!i6997[12]
  i6996.activeColorSpace = i6997[13]
  i6996.desiredColorSpace = i6997[14]
  i6996.masterTextureLimit = i6997[15]
  i6996.maxQueuedFrames = i6997[16]
  i6996.particleRaycastBudget = i6997[17]
  i6996.pixelLightCount = i6997[18]
  i6996.realtimeReflectionProbes = !!i6997[19]
  i6996.shadowCascade2Split = i6997[20]
  i6996.shadowCascade4Split = new pc.Vec3( i6997[21], i6997[22], i6997[23] )
  i6996.streamingMipmapsActive = !!i6997[24]
  i6996.vSyncCount = i6997[25]
  i6996.asyncUploadBufferSize = i6997[26]
  i6996.asyncUploadTimeSlice = i6997[27]
  i6996.billboardsFaceCameraPosition = !!i6997[28]
  i6996.shadowNearPlaneOffset = i6997[29]
  i6996.streamingMipmapsMemoryBudget = i6997[30]
  i6996.maximumLODLevel = i6997[31]
  i6996.streamingMipmapsAddAllCameras = !!i6997[32]
  i6996.streamingMipmapsMaxLevelReduction = i6997[33]
  i6996.streamingMipmapsRenderersPerFrame = i6997[34]
  i6996.resolutionScalingFixedDPIFactor = i6997[35]
  i6996.streamingMipmapsMaxFileIORequests = i6997[36]
  i6996.currentQualityLevel = i6997[37]
  return i6996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7007 = data
  i7006.weight = i7007[0]
  i7006.vertices = i7007[1]
  i7006.normals = i7007[2]
  i7006.tangents = i7007[3]
  return i7006
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

Deserializers.buildID = "ead7fdd6-13b5-4ae0-8389-903516ad1184";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

