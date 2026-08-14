var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointSpring' )
  var i583 = data
  i582.spring = i583[0]
  i582.damper = i583[1]
  i582.targetPosition = i583[2]
  return i582
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointMotor' )
  var i585 = data
  i584.m_TargetVelocity = i585[0]
  i584.m_Force = i585[1]
  i584.m_FreeSpin = i585[2]
  return i584
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointLimits' )
  var i587 = data
  i586.m_Min = i587[0]
  i586.m_Max = i587[1]
  i586.m_Bounciness = i587[2]
  i586.m_BounceMinVelocity = i587[3]
  i586.m_ContactDistance = i587[4]
  i586.minBounce = i587[5]
  i586.maxBounce = i587[6]
  return i586
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointDrive' )
  var i589 = data
  i588.m_PositionSpring = i589[0]
  i588.m_PositionDamper = i589[1]
  i588.m_MaximumForce = i589[2]
  i588.m_UseAcceleration = i589[3]
  return i588
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i591 = data
  i590.m_Spring = i591[0]
  i590.m_Damper = i591[1]
  return i590
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i593 = data
  i592.m_Limit = i593[0]
  i592.m_Bounciness = i593[1]
  i592.m_ContactDistance = i593[2]
  return i592
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i595 = data
  i594.m_ExtremumSlip = i595[0]
  i594.m_ExtremumValue = i595[1]
  i594.m_AsymptoteSlip = i595[2]
  i594.m_AsymptoteValue = i595[3]
  i594.m_Stiffness = i595[4]
  return i594
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i597 = data
  i596.m_LowerAngle = i597[0]
  i596.m_UpperAngle = i597[1]
  return i596
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i599 = data
  i598.m_MotorSpeed = i599[0]
  i598.m_MaximumMotorTorque = i599[1]
  return i598
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i601 = data
  i600.m_DampingRatio = i601[0]
  i600.m_Frequency = i601[1]
  i600.m_Angle = i601[2]
  return i600
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i603 = data
  i602.m_LowerTranslation = i603[0]
  i602.m_UpperTranslation = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i605 = data
  i604.pivot = new pc.Vec2( i605[0], i605[1] )
  i604.anchorMin = new pc.Vec2( i605[2], i605[3] )
  i604.anchorMax = new pc.Vec2( i605[4], i605[5] )
  i604.sizeDelta = new pc.Vec2( i605[6], i605[7] )
  i604.anchoredPosition3D = new pc.Vec3( i605[8], i605[9], i605[10] )
  i604.rotation = new pc.Quat(i605[11], i605[12], i605[13], i605[14])
  i604.scale = new pc.Vec3( i605[15], i605[16], i605[17] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i607 = data
  i606.planeDistance = i607[0]
  i606.referencePixelsPerUnit = i607[1]
  i606.isFallbackOverlay = !!i607[2]
  i606.renderMode = i607[3]
  i606.renderOrder = i607[4]
  i606.sortingLayerName = i607[5]
  i606.sortingOrder = i607[6]
  i606.scaleFactor = i607[7]
  request.r(i607[8], i607[9], 0, i606, 'worldCamera')
  i606.overrideSorting = !!i607[10]
  i606.pixelPerfect = !!i607[11]
  i606.targetDisplay = i607[12]
  i606.overridePixelPerfect = !!i607[13]
  i606.enabled = !!i607[14]
  return i606
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i609 = data
  i608.m_UiScaleMode = i609[0]
  i608.m_ReferencePixelsPerUnit = i609[1]
  i608.m_ScaleFactor = i609[2]
  i608.m_ReferenceResolution = new pc.Vec2( i609[3], i609[4] )
  i608.m_ScreenMatchMode = i609[5]
  i608.m_MatchWidthOrHeight = i609[6]
  i608.m_PhysicalUnit = i609[7]
  i608.m_FallbackScreenDPI = i609[8]
  i608.m_DefaultSpriteDPI = i609[9]
  i608.m_DynamicPixelsPerUnit = i609[10]
  i608.m_PresetInfoIsWorld = !!i609[11]
  return i608
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i611 = data
  i610.m_IgnoreReversedGraphics = !!i611[0]
  i610.m_BlockingObjects = i611[1]
  i610.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i611[2] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i613 = data
  i612.cullTransparentMesh = !!i613[0]
  return i612
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Image' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_Sprite')
  i614.m_Type = i615[2]
  i614.m_PreserveAspect = !!i615[3]
  i614.m_FillCenter = !!i615[4]
  i614.m_FillMethod = i615[5]
  i614.m_FillAmount = i615[6]
  i614.m_FillClockwise = !!i615[7]
  i614.m_FillOrigin = i615[8]
  i614.m_UseSpriteMesh = !!i615[9]
  i614.m_PixelsPerUnitMultiplier = i615[10]
  request.r(i615[11], i615[12], 0, i614, 'm_Material')
  i614.m_Maskable = !!i615[13]
  i614.m_Color = new pc.Color(i615[14], i615[15], i615[16], i615[17])
  i614.m_RaycastTarget = !!i615[18]
  i614.m_RaycastPadding = new pc.Vec4( i615[19], i615[20], i615[21], i615[22] )
  return i614
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i617 = data
  i616.m_Spacing = i617[0]
  i616.m_ChildForceExpandWidth = !!i617[1]
  i616.m_ChildForceExpandHeight = !!i617[2]
  i616.m_ChildControlWidth = !!i617[3]
  i616.m_ChildControlHeight = !!i617[4]
  i616.m_ChildScaleWidth = !!i617[5]
  i616.m_ChildScaleHeight = !!i617[6]
  i616.m_ReverseArrangement = !!i617[7]
  i616.m_Padding = UnityEngine.RectOffset.FromPaddings(i617[8], i617[9], i617[10], i617[11])
  i616.m_ChildAlignment = i617[12]
  return i616
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i618 = root || request.c( 'UICheckBox' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'iconImg')
  request.r(i619[2], i619[3], 0, i618, 'startingSprite')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Slider' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'm_FillRect')
  request.r(i623[2], i623[3], 0, i622, 'm_HandleRect')
  i622.m_Direction = i623[4]
  i622.m_MinValue = i623[5]
  i622.m_MaxValue = i623[6]
  i622.m_WholeNumbers = !!i623[7]
  i622.m_Value = i623[8]
  i622.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i623[9], i622.m_OnValueChanged)
  i622.m_Navigation = request.d('UnityEngine.UI.Navigation', i623[10], i622.m_Navigation)
  i622.m_Transition = i623[11]
  i622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i623[12], i622.m_Colors)
  i622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i623[13], i622.m_SpriteState)
  i622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i623[14], i622.m_AnimationTriggers)
  i622.m_Interactable = !!i623[15]
  request.r(i623[16], i623[17], 0, i622, 'm_TargetGraphic')
  return i622
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i627 = data
  var i629 = i627[0]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('UnityEngine.Events.PersistentCall', i629[i + 0]));
  }
  i626.m_Calls = i628
  return i626
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Target')
  i632.m_TargetAssemblyTypeName = i633[2]
  i632.m_MethodName = i633[3]
  i632.m_Mode = i633[4]
  i632.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i633[5], i632.m_Arguments)
  i632.m_CallState = i633[6]
  return i632
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i635 = data
  i634.m_Mode = i635[0]
  i634.m_WrapAround = !!i635[1]
  request.r(i635[2], i635[3], 0, i634, 'm_SelectOnUp')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectOnDown')
  request.r(i635[6], i635[7], 0, i634, 'm_SelectOnLeft')
  request.r(i635[8], i635[9], 0, i634, 'm_SelectOnRight')
  return i634
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i637 = data
  i636.m_NormalColor = new pc.Color(i637[0], i637[1], i637[2], i637[3])
  i636.m_HighlightedColor = new pc.Color(i637[4], i637[5], i637[6], i637[7])
  i636.m_PressedColor = new pc.Color(i637[8], i637[9], i637[10], i637[11])
  i636.m_SelectedColor = new pc.Color(i637[12], i637[13], i637[14], i637[15])
  i636.m_DisabledColor = new pc.Color(i637[16], i637[17], i637[18], i637[19])
  i636.m_ColorMultiplier = i637[20]
  i636.m_FadeDuration = i637[21]
  return i636
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_HighlightedSprite')
  request.r(i639[2], i639[3], 0, i638, 'm_PressedSprite')
  request.r(i639[4], i639[5], 0, i638, 'm_SelectedSprite')
  request.r(i639[6], i639[7], 0, i638, 'm_DisabledSprite')
  return i638
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i641 = data
  i640.m_NormalTrigger = i641[0]
  i640.m_HighlightedTrigger = i641[1]
  i640.m_PressedTrigger = i641[2]
  i640.m_SelectedTrigger = i641[3]
  i640.m_DisabledTrigger = i641[4]
  return i640
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i642 = root || request.c( 'UIProgressBar' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'fillImage')
  request.r(i643[2], i643[3], 0, i642, 'fillBackground')
  return i642
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i644 = root || request.c( 'UITutorial' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'tutorialUIHolder')
  return i644
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i646 = root || request.c( 'UIGuidingMove' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'target')
  i646.startPosition = new pc.Vec2( i647[2], i647[3] )
  i646.endPosition = new pc.Vec2( i647[4], i647[5] )
  i646.duration = i647[6]
  i646.ease = i647[7]
  i646.resetToStartOnComplete = !!i647[8]
  i646.loop = !!i647[9]
  i646.loopCount = i647[10]
  i646.loopType = i647[11]
  return i646
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i648 = root || request.c( 'UIPulse' )
  var i649 = data
  i648.targetScale = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.duration = i649[3]
  i648.ease = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i651 = data
  i650.name = i651[0]
  i650.width = i651[1]
  i650.height = i651[2]
  i650.mipmapCount = i651[3]
  i650.anisoLevel = i651[4]
  i650.filterMode = i651[5]
  i650.hdr = !!i651[6]
  i650.format = i651[7]
  i650.wrapMode = i651[8]
  i650.alphaIsTransparency = !!i651[9]
  i650.alphaSource = i651[10]
  i650.graphicsFormat = i651[11]
  i650.sRGBTexture = !!i651[12]
  i650.desiredColorSpace = i651[13]
  i650.wrapU = i651[14]
  i650.wrapV = i651[15]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i653 = data
  i652.position = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.scale = new pc.Vec3( i653[3], i653[4], i653[5] )
  i652.rotation = new pc.Quat(i653[6], i653[7], i653[8], i653[9])
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i655 = data
  i654.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i655[0], i654.main)
  i654.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i655[1], i654.colorBySpeed)
  i654.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i655[2], i654.colorOverLifetime)
  i654.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i655[3], i654.emission)
  i654.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i655[4], i654.rotationBySpeed)
  i654.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i655[5], i654.rotationOverLifetime)
  i654.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i655[6], i654.shape)
  i654.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i655[7], i654.sizeBySpeed)
  i654.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i655[8], i654.sizeOverLifetime)
  i654.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i655[9], i654.textureSheetAnimation)
  i654.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i655[10], i654.velocityOverLifetime)
  i654.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i655[11], i654.noise)
  i654.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i655[12], i654.inheritVelocity)
  i654.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i655[13], i654.forceOverLifetime)
  i654.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i655[14], i654.limitVelocityOverLifetime)
  i654.useAutoRandomSeed = !!i655[15]
  i654.randomSeed = i655[16]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemMain()
  var i657 = data
  i656.duration = i657[0]
  i656.loop = !!i657[1]
  i656.prewarm = !!i657[2]
  i656.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.startDelay)
  i656.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.startLifetime)
  i656.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[5], i656.startSpeed)
  i656.startSize3D = !!i657[6]
  i656.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[7], i656.startSizeX)
  i656.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[8], i656.startSizeY)
  i656.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[9], i656.startSizeZ)
  i656.startRotation3D = !!i657[10]
  i656.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[11], i656.startRotationX)
  i656.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[12], i656.startRotationY)
  i656.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[13], i656.startRotationZ)
  i656.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i657[14], i656.startColor)
  i656.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[15], i656.gravityModifier)
  i656.simulationSpace = i657[16]
  request.r(i657[17], i657[18], 0, i656, 'customSimulationSpace')
  i656.simulationSpeed = i657[19]
  i656.useUnscaledTime = !!i657[20]
  i656.scalingMode = i657[21]
  i656.playOnAwake = !!i657[22]
  i656.maxParticles = i657[23]
  i656.emitterVelocityMode = i657[24]
  i656.stopAction = i657[25]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i658 = root || new pc.MinMaxCurve()
  var i659 = data
  i658.mode = i659[0]
  i658.curveMin = new pc.AnimationCurve( { keys_flow: i659[1] } )
  i658.curveMax = new pc.AnimationCurve( { keys_flow: i659[2] } )
  i658.curveMultiplier = i659[3]
  i658.constantMin = i659[4]
  i658.constantMax = i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxGradient()
  var i661 = data
  i660.mode = i661[0]
  i660.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i661[1], i660.gradientMin)
  i660.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i661[2], i660.gradientMax)
  i660.colorMin = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.colorMax = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i663 = data
  i662.mode = i663[0]
  var i665 = i663[1]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i665[i + 0]) );
  }
  i662.colorKeys = i664
  var i667 = i663[2]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i667[i + 0]) );
  }
  i662.alphaKeys = i666
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i671 = data
  i670.color = new pc.Color(i671[0], i671[1], i671[2], i671[3])
  i670.time = i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i675 = data
  i674.alpha = i675[0]
  i674.time = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemColorBySpeed()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i677[1], i676.color)
  i676.range = new pc.Vec2( i677[2], i677[3] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemColorOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i679[1], i678.color)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemEmitter()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.rateOverTime)
  i680.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.rateOverDistance)
  var i683 = i681[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i683[i + 0]) );
  }
  i680.bursts = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemBurst()
  var i687 = data
  i686.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[0], i686.count)
  i686.cycleCount = i687[1]
  i686.minCount = i687[2]
  i686.maxCount = i687[3]
  i686.repeatInterval = i687[4]
  i686.time = i687[5]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemRotationBySpeed()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.separateAxes = !!i689[4]
  i688.range = new pc.Vec2( i689[5], i689[6] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemShape()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.shapeType = i693[1]
  i692.randomDirectionAmount = i693[2]
  i692.sphericalDirectionAmount = i693[3]
  i692.randomPositionAmount = i693[4]
  i692.alignToDirection = !!i693[5]
  i692.radius = i693[6]
  i692.radiusMode = i693[7]
  i692.radiusSpread = i693[8]
  i692.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[9], i692.radiusSpeed)
  i692.radiusThickness = i693[10]
  i692.angle = i693[11]
  i692.length = i693[12]
  i692.boxThickness = new pc.Vec3( i693[13], i693[14], i693[15] )
  i692.meshShapeType = i693[16]
  request.r(i693[17], i693[18], 0, i692, 'mesh')
  request.r(i693[19], i693[20], 0, i692, 'meshRenderer')
  request.r(i693[21], i693[22], 0, i692, 'skinnedMeshRenderer')
  i692.useMeshMaterialIndex = !!i693[23]
  i692.meshMaterialIndex = i693[24]
  i692.useMeshColors = !!i693[25]
  i692.normalOffset = i693[26]
  i692.arc = i693[27]
  i692.arcMode = i693[28]
  i692.arcSpread = i693[29]
  i692.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[30], i692.arcSpeed)
  i692.donutRadius = i693[31]
  i692.position = new pc.Vec3( i693[32], i693[33], i693[34] )
  i692.rotation = new pc.Vec3( i693[35], i693[36], i693[37] )
  i692.scale = new pc.Vec3( i693[38], i693[39], i693[40] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemSizeBySpeed()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  i694.range = new pc.Vec2( i695[5], i695[6] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.mode = i699[1]
  i698.animation = i699[2]
  i698.numTilesX = i699[3]
  i698.numTilesY = i699[4]
  i698.useRandomRow = !!i699[5]
  i698.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[6], i698.frameOverTime)
  i698.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[7], i698.startFrame)
  i698.cycleCount = i699[8]
  i698.rowIndex = i699[9]
  i698.flipU = i699[10]
  i698.flipV = i699[11]
  i698.spriteCount = i699[12]
  var i701 = i699[13]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sprites = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.x)
  i704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.y)
  i704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.z)
  i704.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.radial)
  i704.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[5], i704.speedModifier)
  i704.space = i705[6]
  i704.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[7], i704.orbitalX)
  i704.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[8], i704.orbitalY)
  i704.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.orbitalZ)
  i704.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[10], i704.orbitalOffsetX)
  i704.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.orbitalOffsetY)
  i704.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.orbitalOffsetZ)
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemNoise()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.separateAxes = !!i707[1]
  i706.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.strengthX)
  i706.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.strengthY)
  i706.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.strengthZ)
  i706.frequency = i707[5]
  i706.damping = !!i707[6]
  i706.octaveCount = i707[7]
  i706.octaveMultiplier = i707[8]
  i706.octaveScale = i707[9]
  i706.quality = i707[10]
  i706.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.scrollSpeed)
  i706.scrollSpeedMultiplier = i707[12]
  i706.remapEnabled = !!i707[13]
  i706.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[14], i706.remapX)
  i706.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[15], i706.remapY)
  i706.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[16], i706.remapZ)
  i706.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[17], i706.positionAmount)
  i706.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[18], i706.rotationAmount)
  i706.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[19], i706.sizeAmount)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemInheritVelocity()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.mode = i709[1]
  i708.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.curve)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemForceOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.z)
  i710.space = i711[4]
  i710.randomized = !!i711[5]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.limit)
  i712.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.limitX)
  i712.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.limitY)
  i712.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[4], i712.limitZ)
  i712.dampen = i713[5]
  i712.separateAxes = !!i713[6]
  i712.space = i713[7]
  i712.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.drag)
  i712.multiplyDragByParticleSize = !!i713[9]
  i712.multiplyDragByParticleVelocity = !!i713[10]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'mesh')
  i714.meshCount = i715[2]
  i714.activeVertexStreamsCount = i715[3]
  i714.alignment = i715[4]
  i714.renderMode = i715[5]
  i714.sortMode = i715[6]
  i714.lengthScale = i715[7]
  i714.velocityScale = i715[8]
  i714.cameraVelocityScale = i715[9]
  i714.normalDirection = i715[10]
  i714.sortingFudge = i715[11]
  i714.minParticleSize = i715[12]
  i714.maxParticleSize = i715[13]
  i714.pivot = new pc.Vec3( i715[14], i715[15], i715[16] )
  request.r(i715[17], i715[18], 0, i714, 'trailMaterial')
  i714.applyActiveColorSpace = !!i715[19]
  i714.enabled = !!i715[20]
  request.r(i715[21], i715[22], 0, i714, 'sharedMaterial')
  var i717 = i715[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.sharedMaterials = i716
  i714.receiveShadows = !!i715[24]
  i714.shadowCastingMode = i715[25]
  i714.sortingLayerID = i715[26]
  i714.sortingOrder = i715[27]
  i714.lightmapIndex = i715[28]
  i714.lightmapSceneIndex = i715[29]
  i714.lightmapScaleOffset = new pc.Vec4( i715[30], i715[31], i715[32], i715[33] )
  i714.lightProbeUsage = i715[34]
  i714.reflectionProbeUsage = i715[35]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i720 = root || new pc.UnityMaterial()
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'shader')
  i720.renderQueue = i721[3]
  i720.enableInstancing = !!i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i723[i + 0]) );
  }
  i720.floatParameters = i722
  var i725 = i721[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i725[i + 0]) );
  }
  i720.colorParameters = i724
  var i727 = i721[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i727[i + 0]) );
  }
  i720.vectorParameters = i726
  var i729 = i721[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i729[i + 0]) );
  }
  i720.textureParameters = i728
  var i731 = i721[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i731[i + 0]) );
  }
  i720.materialFlags = i730
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Color(i739[1], i739[2], i739[3], i739[4])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Vec4( i743[1], i743[2], i743[3], i743[4] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'value')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i751 = data
  i750.name = i751[0]
  i750.enabled = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i753 = data
  i752.name = i753[0]
  i752.halfPrecision = !!i753[1]
  i752.useSimplification = !!i753[2]
  i752.useUInt32IndexFormat = !!i753[3]
  i752.vertexCount = i753[4]
  i752.aabb = i753[5]
  var i755 = i753[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( !!i755[i + 0] );
  }
  i752.streams = i754
  i752.vertices = i753[7]
  var i757 = i753[8]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i757[i + 0]) );
  }
  i752.subMeshes = i756
  var i759 = i753[9]
  var i758 = []
  for(var i = 0; i < i759.length; i += 16) {
    i758.push( new pc.Mat4().setData(i759[i + 0], i759[i + 1], i759[i + 2], i759[i + 3],  i759[i + 4], i759[i + 5], i759[i + 6], i759[i + 7],  i759[i + 8], i759[i + 9], i759[i + 10], i759[i + 11],  i759[i + 12], i759[i + 13], i759[i + 14], i759[i + 15]) );
  }
  i752.bindposes = i758
  var i761 = i753[10]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i761[i + 0]) );
  }
  i752.blendShapes = i760
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i767 = data
  i766.triangles = i767[0]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i773 = data
  i772.name = i773[0]
  var i775 = i773[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i775[i + 0]) );
  }
  i772.frames = i774
  return i772
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i776 = root || request.c( 'ChoiceBoardHolder' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.choiceBoards = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i783 = data
  i782.center = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.size = new pc.Vec3( i783[3], i783[4], i783[5] )
  i782.enabled = !!i783[6]
  i782.isTrigger = !!i783[7]
  request.r(i783[8], i783[9], 0, i782, 'material')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  request.r(i785[4], i785[5], 0, i784, 'sprite')
  i784.flipX = !!i785[6]
  i784.flipY = !!i785[7]
  i784.drawMode = i785[8]
  i784.size = new pc.Vec2( i785[9], i785[10] )
  i784.tileMode = i785[11]
  i784.adaptiveModeThreshold = i785[12]
  i784.maskInteraction = i785[13]
  i784.spriteSortPoint = i785[14]
  i784.enabled = !!i785[15]
  request.r(i785[16], i785[17], 0, i784, 'sharedMaterial')
  var i787 = i785[18]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[19]
  i784.shadowCastingMode = i785[20]
  i784.sortingLayerID = i785[21]
  i784.sortingOrder = i785[22]
  i784.lightmapIndex = i785[23]
  i784.lightmapSceneIndex = i785[24]
  i784.lightmapScaleOffset = new pc.Vec4( i785[25], i785[26], i785[27], i785[28] )
  i784.lightProbeUsage = i785[29]
  i784.reflectionProbeUsage = i785[30]
  return i784
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i788 = root || request.c( 'ChoiceBoard' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'spriteRenderer')
  request.r(i789[2], i789[3], 0, i788, 'borderRenderer')
  request.r(i789[4], i789[5], 0, i788, 'increaseBorderSprite')
  request.r(i789[6], i789[7], 0, i788, 'decreaseBorderSprite')
  i788.choiceBoardType = i789[8]
  return i788
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Texture')
  i790.m_UVRect = UnityEngine.Rect.MinMaxRect(i791[2], i791[3], i791[4], i791[5])
  request.r(i791[6], i791[7], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[8]
  i790.m_Color = new pc.Color(i791[9], i791[10], i791[11], i791[12])
  i790.m_RaycastTarget = !!i791[13]
  i790.m_RaycastPadding = new pc.Vec4( i791[14], i791[15], i791[16], i791[17] )
  return i790
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i792 = root || request.c( 'ImageScroller' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'rawImage')
  i792.moveVector = new pc.Vec2( i793[2], i793[3] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i795 = data
  i794.name = i795[0]
  i794.atlasId = i795[1]
  i794.mipmapCount = i795[2]
  i794.hdr = !!i795[3]
  i794.size = i795[4]
  i794.anisoLevel = i795[5]
  i794.filterMode = i795[6]
  var i797 = i795[7]
  var i796 = []
  for(var i = 0; i < i797.length; i += 4) {
    i796.push( UnityEngine.Rect.MinMaxRect(i797[i + 0], i797[i + 1], i797[i + 2], i797[i + 3]) );
  }
  i794.rects = i796
  i794.wrapU = i795[8]
  i794.wrapV = i795[9]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i801 = data
  i800.name = i801[0]
  i800.index = i801[1]
  i800.startup = !!i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i803 = data
  i802.type = i803[0]
  i802.color = new pc.Color(i803[1], i803[2], i803[3], i803[4])
  i802.cullingMask = i803[5]
  i802.intensity = i803[6]
  i802.range = i803[7]
  i802.spotAngle = i803[8]
  i802.shadows = i803[9]
  i802.shadowNormalBias = i803[10]
  i802.shadowBias = i803[11]
  i802.shadowStrength = i803[12]
  i802.shadowResolution = i803[13]
  i802.lightmapBakeType = i803[14]
  i802.renderMode = i803[15]
  request.r(i803[16], i803[17], 0, i802, 'cookie')
  i802.cookieSize = i803[18]
  i802.shadowNearPlane = i803[19]
  i802.enabled = !!i803[20]
  return i802
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i804 = root || request.c( 'UICheckBoxHolder' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.uICheckBoxes = i806
  return i804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Button' )
  var i811 = data
  i810.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i811[0], i810.m_OnClick)
  i810.m_Navigation = request.d('UnityEngine.UI.Navigation', i811[1], i810.m_Navigation)
  i810.m_Transition = i811[2]
  i810.m_Colors = request.d('UnityEngine.UI.ColorBlock', i811[3], i810.m_Colors)
  i810.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i811[4], i810.m_SpriteState)
  i810.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i811[5], i810.m_AnimationTriggers)
  i810.m_Interactable = !!i811[6]
  request.r(i811[7], i811[8], 0, i810, 'm_TargetGraphic')
  return i810
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i813 = data
  i812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i813[0], i812.m_PersistentCalls)
  return i812
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_ObjectArgument')
  i814.m_ObjectArgumentAssemblyTypeName = i815[2]
  i814.m_IntArgument = i815[3]
  i814.m_FloatArgument = i815[4]
  i814.m_StringArgument = i815[5]
  i814.m_BoolArgument = !!i815[6]
  return i814
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_FirstSelected')
  i816.m_sendNavigationEvents = !!i817[2]
  i816.m_DragThreshold = i817[3]
  return i816
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i819 = data
  i818.m_HorizontalAxis = i819[0]
  i818.m_VerticalAxis = i819[1]
  i818.m_SubmitButton = i819[2]
  i818.m_CancelButton = i819[3]
  i818.m_InputActionsPerSecond = i819[4]
  i818.m_RepeatDelay = i819[5]
  i818.m_ForceModuleActive = !!i819[6]
  i818.m_SendPointerHoverToParent = !!i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'sharedMesh')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'additionalVertexStreams')
  i822.enabled = !!i823[2]
  request.r(i823[3], i823[4], 0, i822, 'sharedMaterial')
  var i825 = i823[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[6]
  i822.shadowCastingMode = i823[7]
  i822.sortingLayerID = i823[8]
  i822.sortingOrder = i823[9]
  i822.lightmapIndex = i823[10]
  i822.lightmapSceneIndex = i823[11]
  i822.lightmapScaleOffset = new pc.Vec4( i823[12], i823[13], i823[14], i823[15] )
  i822.lightProbeUsage = i823[16]
  i822.reflectionProbeUsage = i823[17]
  return i822
}

Deserializers["GameManager"] = function (request, data, root) {
  var i826 = root || request.c( 'GameManager' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'Player')
  i826.maxLevel = i827[2]
  i826.winLevel = i827[3]
  i826.totalMoveTime = i827[4]
  i826.currentPlayerLevel = i827[5]
  return i826
}

Deserializers["InputManager"] = function (request, data, root) {
  var i828 = root || request.c( 'InputManager' )
  var i829 = data
  i828.minimumSwipeDistance = i829[0]
  return i828
}

Deserializers["UIManager"] = function (request, data, root) {
  var i830 = root || request.c( 'UIManager' )
  var i831 = data
  return i830
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i832 = root || request.c( 'Ply_SoundManager' )
  var i833 = data
  i832.audioClips = request.d('FxAudio', i833[0], i832.audioClips)
  request.r(i833[1], i833[2], 0, i832, 'sound')
  i832.enableSound = !!i833[3]
  i832.bgmVolume = i833[4]
  return i832
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i834 = root || request.c( 'FxAudio' )
  var i835 = data
  i834.Clock = request.d('SoundData', i835[0], i834.Clock)
  i834.PlayerWin = request.d('SoundData', i835[1], i834.PlayerWin)
  i834.PlayerLoose = request.d('SoundData', i835[2], i834.PlayerLoose)
  i834.RightChoice = request.d('SoundData', i835[3], i834.RightChoice)
  i834.WrongChoice = request.d('SoundData', i835[4], i834.WrongChoice)
  i834.MaxLevel = request.d('SoundData', i835[5], i834.MaxLevel)
  i834.FightingCloud = request.d('SoundData', i835[6], i834.FightingCloud)
  return i834
}

Deserializers["SoundData"] = function (request, data, root) {
  var i836 = root || request.c( 'SoundData' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'clip')
  i836.volume = i837[2]
  return i836
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i838 = root || request.c( 'ProgressTrackingManager' )
  var i839 = data
  i838.maxScore = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'choiceBoardPlacer')
  i838.currentScore = i839[3]
  i838.currentPercent = i839[4]
  return i838
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i840 = root || request.c( 'PlayerController' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'endPos')
  i840.switchTrackTime = i841[2]
  request.r(i841[3], i841[4], 0, i840, 'trackRightTransform')
  request.r(i841[5], i841[6], 0, i840, 'trackLeftTransform')
  i840.startRight = !!i841[7]
  request.r(i841[8], i841[9], 0, i840, 'playerTransform')
  request.r(i841[10], i841[11], 0, i840, 'playerVisual')
  request.r(i841[12], i841[13], 0, i840, 'winPar')
  i840.currentLevel = i841[14]
  i840.dragSmoothSpeed = i841[15]
  i840.moveCurve = new pc.AnimationCurve( { keys_flow: i841[16] } )
  return i840
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i842 = root || request.c( 'PlayerVisual' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'playerSpriteRenderer')
  request.r(i843[2], i843[3], 0, i842, 'fakeShadowRenderer')
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.levelSprite = i844
  i842.levelScaleMultipliers = i843[5]
  i842.maxPowerParScaleMultiplier = i843[6]
  i842.bounceYMultiplier = i843[7]
  i842.bounceDuration = i843[8]
  i842.scaleTransitionDuration = i843[9]
  request.r(i843[10], i843[11], 0, i842, 'visualAnimator')
  i842.level4TriggerName = i843[12]
  i842.level4SpriteDelay = i843[13]
  request.r(i843[14], i843[15], 0, i842, 'maxPowerPar')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i847 = data
  i846.mass = i847[0]
  i846.drag = i847[1]
  i846.angularDrag = i847[2]
  i846.useGravity = !!i847[3]
  i846.isKinematic = !!i847[4]
  i846.constraints = i847[5]
  i846.maxAngularVelocity = i847[6]
  i846.collisionDetectionMode = i847[7]
  i846.interpolation = i847[8]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'animatorController')
  request.r(i849[2], i849[3], 0, i848, 'avatar')
  i848.updateMode = i849[4]
  i848.hasTransformHierarchy = !!i849[5]
  i848.applyRootMotion = !!i849[6]
  var i851 = i849[7]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.humanBones = i850
  i848.enabled = !!i849[8]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i855 = data
  i854.aspect = i855[0]
  i854.orthographic = !!i855[1]
  i854.orthographicSize = i855[2]
  i854.backgroundColor = new pc.Color(i855[3], i855[4], i855[5], i855[6])
  i854.nearClipPlane = i855[7]
  i854.farClipPlane = i855[8]
  i854.fieldOfView = i855[9]
  i854.depth = i855[10]
  i854.clearFlags = i855[11]
  i854.cullingMask = i855[12]
  i854.rect = i855[13]
  request.r(i855[14], i855[15], 0, i854, 'targetTexture')
  i854.usePhysicalProperties = !!i855[16]
  i854.focalLength = i855[17]
  i854.sensorSize = new pc.Vec2( i855[18], i855[19] )
  i854.lensShift = new pc.Vec2( i855[20], i855[21] )
  i854.gateFit = i855[22]
  i854.commandBufferCount = i855[23]
  i854.cameraType = i855[24]
  i854.enabled = !!i855[25]
  return i854
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i856 = root || request.c( 'MaterialUVScroller' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'targetMaterial')
  i856.scrollSpeed = new pc.Vec2( i857[2], i857[3] )
  return i856
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i858 = root || request.c( 'ChoiceBoardPlacer' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'choiceBoardHolderprefab')
  request.r(i859[2], i859[3], 0, i858, 'startPos')
  request.r(i859[4], i859[5], 0, i858, 'endPos')
  request.r(i859[6], i859[7], 0, i858, 'choiceBoardPairData')
  i858.spawnCount = i859[8]
  i858.spawnGenericByNumber = !!i859[9]
  i858.shufflePairsOrder = !!i859[10]
  i858.shuffleLeftRight = !!i859[11]
  i858.spawnOnStart = !!i859[12]
  return i858
}

Deserializers["BossController"] = function (request, data, root) {
  var i860 = root || request.c( 'BossController' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'bossSpriteRenderer')
  request.r(i861[2], i861[3], 0, i860, 'characterVisual')
  request.r(i861[4], i861[5], 0, i860, 'fightingCloud')
  request.r(i861[6], i861[7], 0, i860, 'resultObject')
  request.r(i861[8], i861[9], 0, i860, 'resultSpriteRenderer')
  request.r(i861[10], i861[11], 0, i860, 'winSprite')
  request.r(i861[12], i861[13], 0, i860, 'lossSprite')
  request.r(i861[14], i861[15], 0, i860, 'extraWinObject')
  request.r(i861[16], i861[17], 0, i860, 'winPanel')
  request.r(i861[18], i861[19], 0, i860, 'losePanel')
  var i863 = i861[20]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.extraObjectsToHide = i862
  i860.fightingCloudFx = i861[21]
  i860.winPanelFx = i861[22]
  i860.losePanelFx = i861[23]
  i860.delayAfterLastBoard = i861[24]
  i860.fightDuration = i861[25]
  i860.showResultDuration = i861[26]
  request.r(i861[27], i861[28], 0, i860, 'currentPlayer')
  i860.currentPlayerLevel = i861[29]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i867 = data
  i866.ambientIntensity = i867[0]
  i866.reflectionIntensity = i867[1]
  i866.ambientMode = i867[2]
  i866.ambientLight = new pc.Color(i867[3], i867[4], i867[5], i867[6])
  i866.ambientSkyColor = new pc.Color(i867[7], i867[8], i867[9], i867[10])
  i866.ambientGroundColor = new pc.Color(i867[11], i867[12], i867[13], i867[14])
  i866.ambientEquatorColor = new pc.Color(i867[15], i867[16], i867[17], i867[18])
  i866.fogColor = new pc.Color(i867[19], i867[20], i867[21], i867[22])
  i866.fogEndDistance = i867[23]
  i866.fogStartDistance = i867[24]
  i866.fogDensity = i867[25]
  i866.fog = !!i867[26]
  request.r(i867[27], i867[28], 0, i866, 'skybox')
  i866.fogMode = i867[29]
  var i869 = i867[30]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i869[i + 0]) );
  }
  i866.lightmaps = i868
  i866.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i867[31], i866.lightProbes)
  i866.lightmapsMode = i867[32]
  i866.mixedBakeMode = i867[33]
  i866.environmentLightingMode = i867[34]
  i866.ambientProbe = new pc.SphericalHarmonicsL2(i867[35])
  i866.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i867[36])
  i866.useReferenceAmbientProbe = !!i867[37]
  request.r(i867[38], i867[39], 0, i866, 'customReflection')
  request.r(i867[40], i867[41], 0, i866, 'defaultReflection')
  i866.defaultReflectionMode = i867[42]
  i866.defaultReflectionResolution = i867[43]
  i866.sunLightObjectId = i867[44]
  i866.pixelLightCount = i867[45]
  i866.defaultReflectionHDR = !!i867[46]
  i866.hasLightDataAsset = !!i867[47]
  i866.hasManualGenerate = !!i867[48]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'lightmapColor')
  request.r(i873[2], i873[3], 0, i872, 'lightmapDirection')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i874 = root || new UnityEngine.LightProbes()
  var i875 = data
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i885[i + 0]));
  }
  i882.ShaderCompilationErrors = i884
  i882.name = i883[1]
  i882.guid = i883[2]
  var i887 = i883[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.shaderDefinedKeywords = i886
  var i889 = i883[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i889[i + 0]) );
  }
  i882.passes = i888
  var i891 = i883[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i891[i + 0]) );
  }
  i882.usePasses = i890
  var i893 = i883[6]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i893[i + 0]) );
  }
  i882.defaultParameterValues = i892
  request.r(i883[7], i883[8], 0, i882, 'unityFallbackShader')
  i882.readDepth = !!i883[9]
  i882.hasDepthOnlyPass = !!i883[10]
  i882.isCreatedByShaderGraph = !!i883[11]
  i882.disableBatching = !!i883[12]
  i882.compiled = !!i883[13]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i897 = data
  i896.shaderName = i897[0]
  i896.errorMessage = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i902 = root || new pc.UnityShaderPass()
  var i903 = data
  i902.id = i903[0]
  i902.subShaderIndex = i903[1]
  i902.name = i903[2]
  i902.passType = i903[3]
  i902.grabPassTextureName = i903[4]
  i902.usePass = !!i903[5]
  i902.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[6], i902.zTest)
  i902.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[7], i902.zWrite)
  i902.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[8], i902.culling)
  i902.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i903[9], i902.blending)
  i902.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i903[10], i902.alphaBlending)
  i902.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[11], i902.colorWriteMask)
  i902.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[12], i902.offsetUnits)
  i902.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[13], i902.offsetFactor)
  i902.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[14], i902.stencilRef)
  i902.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[15], i902.stencilReadMask)
  i902.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[16], i902.stencilWriteMask)
  i902.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[17], i902.stencilOp)
  i902.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[18], i902.stencilOpFront)
  i902.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i903[19], i902.stencilOpBack)
  var i905 = i903[20]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i905[i + 0]) );
  }
  i902.tags = i904
  var i907 = i903[21]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i902.passDefinedKeywords = i906
  var i909 = i903[22]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i909[i + 0]) );
  }
  i902.passDefinedKeywordGroups = i908
  var i911 = i903[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i911[i + 0]) );
  }
  i902.variants = i910
  var i913 = i903[24]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i913[i + 0]) );
  }
  i902.excludedVariants = i912
  i902.hasDepthReader = !!i903[25]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i915 = data
  i914.val = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i917 = data
  i916.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[0], i916.src)
  i916.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[1], i916.dst)
  i916.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i917[2], i916.op)
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i919 = data
  i918.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[0], i918.pass)
  i918.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[1], i918.fail)
  i918.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[2], i918.zFail)
  i918.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[3], i918.comp)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i923 = data
  i922.name = i923[0]
  i922.value = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i926.keywords = i928
  i926.hasDiscard = !!i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i933 = data
  i932.passId = i933[0]
  i932.subShaderIndex = i933[1]
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i932.keywords = i934
  i932.vertexProgram = i933[3]
  i932.fragmentProgram = i933[4]
  i932.exportedForWebGl2 = !!i933[5]
  i932.readDepth = !!i933[6]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'shader')
  i938.pass = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i943 = data
  i942.name = i943[0]
  i942.type = i943[1]
  i942.value = new pc.Vec4( i943[2], i943[3], i943[4], i943[5] )
  i942.textureValue = i943[6]
  i942.shaderPropertyFlag = i943[7]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i945 = data
  i944.name = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'texture')
  i944.aabb = i945[3]
  i944.vertices = i945[4]
  i944.triangles = i945[5]
  i944.textureRect = UnityEngine.Rect.MinMaxRect(i945[6], i945[7], i945[8], i945[9])
  i944.packedRect = UnityEngine.Rect.MinMaxRect(i945[10], i945[11], i945[12], i945[13])
  i944.border = new pc.Vec4( i945[14], i945[15], i945[16], i945[17] )
  i944.transparency = i945[18]
  i944.bounds = i945[19]
  i944.pixelsPerUnit = i945[20]
  i944.textureWidth = i945[21]
  i944.textureHeight = i945[22]
  i944.nativeSize = new pc.Vec2( i945[23], i945[24] )
  i944.pivot = new pc.Vec2( i945[25], i945[26] )
  i944.textureRectOffset = new pc.Vec2( i945[27], i945[28] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i947 = data
  i946.name = i947[0]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i949 = data
  i948.name = i949[0]
  i948.wrapMode = i949[1]
  i948.isLooping = !!i949[2]
  i948.length = i949[3]
  var i951 = i949[4]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i951[i + 0]) );
  }
  i948.curves = i950
  var i953 = i949[5]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i953[i + 0]) );
  }
  i948.events = i952
  i948.halfPrecision = !!i949[6]
  i948._frameRate = i949[7]
  i948.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i949[8], i948.localBounds)
  i948.hasMuscleCurves = !!i949[9]
  var i955 = i949[10]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i948.clipMuscleConstant = i954
  i948.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i949[11], i948.clipBindingConstant)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i959 = data
  i958.path = i959[0]
  i958.hash = i959[1]
  i958.componentType = i959[2]
  i958.property = i959[3]
  i958.keys = i959[4]
  var i961 = i959[5]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i961[i + 0]) );
  }
  i958.objectReferenceKeys = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i965 = data
  i964.time = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'value')
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i969 = data
  i968.functionName = i969[0]
  i968.floatParameter = i969[1]
  i968.intParameter = i969[2]
  i968.stringParameter = i969[3]
  request.r(i969[4], i969[5], 0, i968, 'objectReferenceParameter')
  i968.time = i969[6]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i971 = data
  i970.center = new pc.Vec3( i971[0], i971[1], i971[2] )
  i970.extends = new pc.Vec3( i971[3], i971[4], i971[5] )
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i974.genericBindings = i976
  var i979 = i975[1]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i974.pptrCurveMapping = i978
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i981 = data
  i980.name = i981[0]
  var i983 = i981[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i983[i + 0]) );
  }
  i980.layers = i982
  var i985 = i981[2]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i985[i + 0]) );
  }
  i980.parameters = i984
  i980.animationClips = i981[3]
  i980.avatarUnsupported = i981[4]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i989 = data
  i988.name = i989[0]
  i988.defaultWeight = i989[1]
  i988.blendingMode = i989[2]
  i988.avatarMask = i989[3]
  i988.syncedLayerIndex = i989[4]
  i988.syncedLayerAffectsTiming = !!i989[5]
  i988.syncedLayers = i989[6]
  i988.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i989[7], i988.stateMachine)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i991 = data
  i990.id = i991[0]
  i990.name = i991[1]
  i990.path = i991[2]
  var i993 = i991[3]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i993[i + 0]) );
  }
  i990.states = i992
  var i995 = i991[4]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i995[i + 0]) );
  }
  i990.machines = i994
  var i997 = i991[5]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i997[i + 0]) );
  }
  i990.entryStateTransitions = i996
  var i999 = i991[6]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i999[i + 0]) );
  }
  i990.exitStateTransitions = i998
  var i1001 = i991[7]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1001[i + 0]) );
  }
  i990.anyStateTransitions = i1000
  i990.defaultStateId = i991[8]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1005 = data
  i1004.id = i1005[0]
  i1004.name = i1005[1]
  i1004.cycleOffset = i1005[2]
  i1004.cycleOffsetParameter = i1005[3]
  i1004.cycleOffsetParameterActive = !!i1005[4]
  i1004.mirror = !!i1005[5]
  i1004.mirrorParameter = i1005[6]
  i1004.mirrorParameterActive = !!i1005[7]
  i1004.motionId = i1005[8]
  i1004.nameHash = i1005[9]
  i1004.fullPathHash = i1005[10]
  i1004.speed = i1005[11]
  i1004.speedParameter = i1005[12]
  i1004.speedParameterActive = !!i1005[13]
  i1004.tag = i1005[14]
  i1004.tagHash = i1005[15]
  i1004.writeDefaultValues = !!i1005[16]
  var i1007 = i1005[17]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.behaviours = i1006
  var i1009 = i1005[18]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1009[i + 0]) );
  }
  i1004.transitions = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1015 = data
  i1014.fullPath = i1015[0]
  i1014.canTransitionToSelf = !!i1015[1]
  i1014.duration = i1015[2]
  i1014.exitTime = i1015[3]
  i1014.hasExitTime = !!i1015[4]
  i1014.hasFixedDuration = !!i1015[5]
  i1014.interruptionSource = i1015[6]
  i1014.offset = i1015[7]
  i1014.orderedInterruption = !!i1015[8]
  i1014.destinationStateId = i1015[9]
  i1014.isExit = !!i1015[10]
  i1014.mute = !!i1015[11]
  i1014.solo = !!i1015[12]
  var i1017 = i1015[13]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1017[i + 0]) );
  }
  i1014.conditions = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1023 = data
  i1022.destinationStateId = i1023[0]
  i1022.isExit = !!i1023[1]
  i1022.mute = !!i1023[2]
  i1022.solo = !!i1023[3]
  var i1025 = i1023[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1025[i + 0]) );
  }
  i1022.conditions = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1029 = data
  i1028.mode = i1029[0]
  i1028.parameter = i1029[1]
  i1028.threshold = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1033 = data
  i1032.defaultBool = !!i1033[0]
  i1032.defaultFloat = i1033[1]
  i1032.defaultInt = i1033[2]
  i1032.name = i1033[3]
  i1032.nameHash = i1033[4]
  i1032.type = i1033[5]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.bytes64 = i1035[1]
  i1034.data = i1035[2]
  return i1034
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i1036 = root || request.c( 'ChoiceBoardPairData' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('ChoicePairData', i1039[i + 0]) );
  }
  i1036.ChoicePairDatas = i1038
  return i1036
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i1042 = root || request.c( 'ChoicePairData' )
  var i1043 = data
  i1042.choiceData1 = request.d('ChoiceData', i1043[0], i1042.choiceData1)
  i1042.choiceData2 = request.d('ChoiceData', i1043[1], i1042.choiceData2)
  return i1042
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i1044 = root || request.c( 'ChoiceData' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'VisualSprite')
  request.r(i1045[2], i1045[3], 0, i1044, 'BorderSprite')
  i1044.ChoiceType = i1045[4]
  return i1044
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1047 = data
  i1046.useSafeMode = !!i1047[0]
  i1046.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1047[1], i1046.safeModeOptions)
  i1046.timeScale = i1047[2]
  i1046.unscaledTimeScale = i1047[3]
  i1046.useSmoothDeltaTime = !!i1047[4]
  i1046.maxSmoothUnscaledTime = i1047[5]
  i1046.rewindCallbackMode = i1047[6]
  i1046.showUnityEditorReport = !!i1047[7]
  i1046.logBehaviour = i1047[8]
  i1046.drawGizmos = !!i1047[9]
  i1046.defaultRecyclable = !!i1047[10]
  i1046.defaultAutoPlay = i1047[11]
  i1046.defaultUpdateType = i1047[12]
  i1046.defaultTimeScaleIndependent = !!i1047[13]
  i1046.defaultEaseType = i1047[14]
  i1046.defaultEaseOvershootOrAmplitude = i1047[15]
  i1046.defaultEasePeriod = i1047[16]
  i1046.defaultAutoKill = !!i1047[17]
  i1046.defaultLoopType = i1047[18]
  i1046.debugMode = !!i1047[19]
  i1046.debugStoreTargetId = !!i1047[20]
  i1046.showPreviewPanel = !!i1047[21]
  i1046.storeSettingsLocation = i1047[22]
  i1046.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1047[23], i1046.modules)
  i1046.createASMDEF = !!i1047[24]
  i1046.showPlayingTweens = !!i1047[25]
  i1046.showPausedTweens = !!i1047[26]
  return i1046
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1048 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1049 = data
  i1048.logBehaviour = i1049[0]
  i1048.nestedTweenFailureBehaviour = i1049[1]
  return i1048
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1050 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1051 = data
  i1050.showPanel = !!i1051[0]
  i1050.audioEnabled = !!i1051[1]
  i1050.physicsEnabled = !!i1051[2]
  i1050.physics2DEnabled = !!i1051[3]
  i1050.spriteEnabled = !!i1051[4]
  i1050.uiEnabled = !!i1051[5]
  i1050.uiToolkitEnabled = !!i1051[6]
  i1050.textMeshProEnabled = !!i1051[7]
  i1050.tk2DEnabled = !!i1051[8]
  i1050.deAudioEnabled = !!i1051[9]
  i1050.deUnityExtendedEnabled = !!i1051[10]
  i1050.epoOutlineEnabled = !!i1051[11]
  return i1050
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_Settings' )
  var i1053 = data
  i1052.assetVersion = i1053[0]
  i1052.m_TextWrappingMode = i1053[1]
  i1052.m_enableKerning = !!i1053[2]
  var i1055 = i1053[3]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(i1055[i + 0]);
  }
  i1052.m_ActiveFontFeatures = i1054
  i1052.m_enableExtraPadding = !!i1053[4]
  i1052.m_enableTintAllSprites = !!i1053[5]
  i1052.m_enableParseEscapeCharacters = !!i1053[6]
  i1052.m_EnableRaycastTarget = !!i1053[7]
  i1052.m_GetFontFeaturesAtRuntime = !!i1053[8]
  i1052.m_missingGlyphCharacter = i1053[9]
  i1052.m_ClearDynamicDataOnBuild = !!i1053[10]
  i1052.m_warningsDisabled = !!i1053[11]
  request.r(i1053[12], i1053[13], 0, i1052, 'm_defaultFontAsset')
  i1052.m_defaultFontAssetPath = i1053[14]
  i1052.m_defaultFontSize = i1053[15]
  i1052.m_defaultAutoSizeMinRatio = i1053[16]
  i1052.m_defaultAutoSizeMaxRatio = i1053[17]
  i1052.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1053[18], i1053[19] )
  i1052.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1053[20], i1053[21] )
  i1052.m_autoSizeTextContainer = !!i1053[22]
  i1052.m_IsTextObjectScaleStatic = !!i1053[23]
  var i1057 = i1053[24]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1052.m_fallbackFontAssets = i1056
  i1052.m_matchMaterialPreset = !!i1053[25]
  i1052.m_HideSubTextObjects = !!i1053[26]
  request.r(i1053[27], i1053[28], 0, i1052, 'm_defaultSpriteAsset')
  i1052.m_defaultSpriteAssetPath = i1053[29]
  i1052.m_enableEmojiSupport = !!i1053[30]
  i1052.m_MissingCharacterSpriteUnicode = i1053[31]
  var i1059 = i1053[32]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 1, i1058, '')
  }
  i1052.m_EmojiFallbackTextAssets = i1058
  i1052.m_defaultColorGradientPresetsPath = i1053[33]
  request.r(i1053[34], i1053[35], 0, i1052, 'm_defaultStyleSheet')
  i1052.m_StyleSheetsResourcePath = i1053[36]
  request.r(i1053[37], i1053[38], 0, i1052, 'm_leadingCharacters')
  request.r(i1053[39], i1053[40], 0, i1052, 'm_followingCharacters')
  i1052.m_UseModernHangulLineBreakingRules = !!i1053[41]
  return i1052
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'spriteSheet')
  var i1069 = i1067[2]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.TMP_Sprite', i1069[i + 0]));
  }
  i1066.spriteInfoList = i1068
  var i1071 = i1067[3]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1066.fallbackSpriteAssets = i1070
  var i1073 = i1067[4]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_SpriteCharacter', i1073[i + 0]));
  }
  i1066.m_SpriteCharacterTable = i1072
  var i1075 = i1067[5]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('TMPro.TMP_SpriteGlyph', i1075[i + 0]));
  }
  i1066.m_GlyphTable = i1074
  i1066.m_Version = i1067[6]
  i1066.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1067[7], i1066.m_FaceInfo)
  request.r(i1067[8], i1067[9], 0, i1066, 'm_Material')
  return i1066
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.hashCode = i1079[1]
  i1078.unicode = i1079[2]
  i1078.pivot = new pc.Vec2( i1079[3], i1079[4] )
  request.r(i1079[5], i1079[6], 0, i1078, 'sprite')
  i1078.id = i1079[7]
  i1078.x = i1079[8]
  i1078.y = i1079[9]
  i1078.width = i1079[10]
  i1078.height = i1079[11]
  i1078.xOffset = i1079[12]
  i1078.yOffset = i1079[13]
  i1078.xAdvance = i1079[14]
  i1078.scale = i1079[15]
  return i1078
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1085 = data
  i1084.m_Name = i1085[0]
  i1084.m_ElementType = i1085[1]
  i1084.m_Unicode = i1085[2]
  i1084.m_GlyphIndex = i1085[3]
  i1084.m_Scale = i1085[4]
  return i1084
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'sprite')
  i1088.m_Index = i1089[2]
  i1088.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1089[3], i1088.m_Metrics)
  i1088.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1089[4], i1088.m_GlyphRect)
  i1088.m_Scale = i1089[5]
  i1088.m_AtlasIndex = i1089[6]
  i1088.m_ClassDefinitionType = i1089[7]
  return i1088
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1091 = data
  i1090.m_Width = i1091[0]
  i1090.m_Height = i1091[1]
  i1090.m_HorizontalBearingX = i1091[2]
  i1090.m_HorizontalBearingY = i1091[3]
  i1090.m_HorizontalAdvance = i1091[4]
  return i1090
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1093 = data
  i1092.m_X = i1093[0]
  i1092.m_Y = i1093[1]
  i1092.m_Width = i1093[2]
  i1092.m_Height = i1093[3]
  return i1092
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1095 = data
  i1094.m_FaceIndex = i1095[0]
  i1094.m_FamilyName = i1095[1]
  i1094.m_StyleName = i1095[2]
  i1094.m_PointSize = i1095[3]
  i1094.m_Scale = i1095[4]
  i1094.m_UnitsPerEM = i1095[5]
  i1094.m_LineHeight = i1095[6]
  i1094.m_AscentLine = i1095[7]
  i1094.m_CapLine = i1095[8]
  i1094.m_MeanLine = i1095[9]
  i1094.m_Baseline = i1095[10]
  i1094.m_DescentLine = i1095[11]
  i1094.m_SuperscriptOffset = i1095[12]
  i1094.m_SuperscriptSize = i1095[13]
  i1094.m_SubscriptOffset = i1095[14]
  i1094.m_SubscriptSize = i1095[15]
  i1094.m_UnderlineOffset = i1095[16]
  i1094.m_UnderlineThickness = i1095[17]
  i1094.m_StrikethroughOffset = i1095[18]
  i1094.m_StrikethroughThickness = i1095[19]
  i1094.m_TabWidth = i1095[20]
  return i1094
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('TMPro.TMP_Style', i1099[i + 0]));
  }
  i1096.m_StyleList = i1098
  return i1096
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_Style' )
  var i1103 = data
  i1102.m_Name = i1103[0]
  i1102.m_HashCode = i1103[1]
  i1102.m_OpeningDefinition = i1103[2]
  i1102.m_ClosingDefinition = i1103[3]
  i1102.m_OpeningTagArray = i1103[4]
  i1102.m_ClosingTagArray = i1103[5]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1105 = data
  var i1107 = i1105[0]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1107[i + 0]) );
  }
  i1104.files = i1106
  i1104.componentToPrefabIds = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1111 = data
  i1110.path = i1111[0]
  request.r(i1111[1], i1111[2], 0, i1110, 'unityObject')
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1115[i + 0]) );
  }
  i1112.scriptsExecutionOrder = i1114
  var i1117 = i1113[1]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1117[i + 0]) );
  }
  i1112.sortingLayers = i1116
  var i1119 = i1113[2]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1119[i + 0]) );
  }
  i1112.cullingLayers = i1118
  i1112.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1113[3], i1112.timeSettings)
  i1112.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1113[4], i1112.physicsSettings)
  i1112.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1113[5], i1112.physics2DSettings)
  i1112.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1113[6], i1112.qualitySettings)
  i1112.enableRealtimeShadows = !!i1113[7]
  i1112.enableAutoInstancing = !!i1113[8]
  i1112.enableStaticBatching = !!i1113[9]
  i1112.enableDynamicBatching = !!i1113[10]
  i1112.lightmapEncodingQuality = i1113[11]
  i1112.desiredColorSpace = i1113[12]
  var i1121 = i1113[13]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1112.allTags = i1120
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.value = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1129 = data
  i1128.id = i1129[0]
  i1128.name = i1129[1]
  i1128.value = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1133 = data
  i1132.id = i1133[0]
  i1132.name = i1133[1]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1135 = data
  i1134.fixedDeltaTime = i1135[0]
  i1134.maximumDeltaTime = i1135[1]
  i1134.timeScale = i1135[2]
  i1134.maximumParticleTimestep = i1135[3]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1137 = data
  i1136.gravity = new pc.Vec3( i1137[0], i1137[1], i1137[2] )
  i1136.defaultSolverIterations = i1137[3]
  i1136.bounceThreshold = i1137[4]
  i1136.autoSyncTransforms = !!i1137[5]
  i1136.autoSimulation = !!i1137[6]
  var i1139 = i1137[7]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1139[i + 0]) );
  }
  i1136.collisionMatrix = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1143 = data
  i1142.enabled = !!i1143[0]
  i1142.layerId = i1143[1]
  i1142.otherLayerId = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'material')
  i1144.gravity = new pc.Vec2( i1145[2], i1145[3] )
  i1144.positionIterations = i1145[4]
  i1144.velocityIterations = i1145[5]
  i1144.velocityThreshold = i1145[6]
  i1144.maxLinearCorrection = i1145[7]
  i1144.maxAngularCorrection = i1145[8]
  i1144.maxTranslationSpeed = i1145[9]
  i1144.maxRotationSpeed = i1145[10]
  i1144.baumgarteScale = i1145[11]
  i1144.baumgarteTOIScale = i1145[12]
  i1144.timeToSleep = i1145[13]
  i1144.linearSleepTolerance = i1145[14]
  i1144.angularSleepTolerance = i1145[15]
  i1144.defaultContactOffset = i1145[16]
  i1144.autoSimulation = !!i1145[17]
  i1144.queriesHitTriggers = !!i1145[18]
  i1144.queriesStartInColliders = !!i1145[19]
  i1144.callbacksOnDisable = !!i1145[20]
  i1144.reuseCollisionCallbacks = !!i1145[21]
  i1144.autoSyncTransforms = !!i1145[22]
  var i1147 = i1145[23]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1147[i + 0]) );
  }
  i1144.collisionMatrix = i1146
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1151 = data
  i1150.enabled = !!i1151[0]
  i1150.layerId = i1151[1]
  i1150.otherLayerId = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1155[i + 0]) );
  }
  i1152.qualityLevels = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1152.names = i1156
  i1152.shadows = i1153[2]
  i1152.anisotropicFiltering = i1153[3]
  i1152.antiAliasing = i1153[4]
  i1152.lodBias = i1153[5]
  i1152.shadowCascades = i1153[6]
  i1152.shadowDistance = i1153[7]
  i1152.shadowmaskMode = i1153[8]
  i1152.shadowProjection = i1153[9]
  i1152.shadowResolution = i1153[10]
  i1152.softParticles = !!i1153[11]
  i1152.softVegetation = !!i1153[12]
  i1152.activeColorSpace = i1153[13]
  i1152.desiredColorSpace = i1153[14]
  i1152.masterTextureLimit = i1153[15]
  i1152.maxQueuedFrames = i1153[16]
  i1152.particleRaycastBudget = i1153[17]
  i1152.pixelLightCount = i1153[18]
  i1152.realtimeReflectionProbes = !!i1153[19]
  i1152.shadowCascade2Split = i1153[20]
  i1152.shadowCascade4Split = new pc.Vec3( i1153[21], i1153[22], i1153[23] )
  i1152.streamingMipmapsActive = !!i1153[24]
  i1152.vSyncCount = i1153[25]
  i1152.asyncUploadBufferSize = i1153[26]
  i1152.asyncUploadTimeSlice = i1153[27]
  i1152.billboardsFaceCameraPosition = !!i1153[28]
  i1152.shadowNearPlaneOffset = i1153[29]
  i1152.streamingMipmapsMemoryBudget = i1153[30]
  i1152.maximumLODLevel = i1153[31]
  i1152.streamingMipmapsAddAllCameras = !!i1153[32]
  i1152.streamingMipmapsMaxLevelReduction = i1153[33]
  i1152.streamingMipmapsRenderersPerFrame = i1153[34]
  i1152.resolutionScalingFixedDPIFactor = i1153[35]
  i1152.streamingMipmapsMaxFileIORequests = i1153[36]
  i1152.currentQualityLevel = i1153[37]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1163 = data
  i1162.weight = i1163[0]
  i1162.vertices = i1163[1]
  i1162.normals = i1163[2]
  i1162.tangents = i1163[3]
  return i1162
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[49],"71":[47],"72":[47],"73":[47],"74":[47],"75":[47],"76":[47],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[49],"92":[37],"93":[94],"95":[94],"1":[0],"96":[34],"97":[1],"98":[0],"99":[37,0],"100":[0,5],"101":[0],"102":[5,0],"103":[37],"104":[5,0],"105":[0],"106":[107],"108":[107],"109":[107],"110":[0],"111":[0],"4":[1],"6":[5,0],"112":[0],"3":[1],"113":[0],"114":[0],"8":[0],"115":[0],"116":[0],"117":[0],"118":[0],"119":[0],"120":[0],"28":[5,0],"121":[0],"122":[0],"123":[0],"11":[0],"124":[5,0],"125":[0],"126":[34],"127":[34],"35":[34],"128":[34],"129":[49],"130":[49]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Mesh","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.Light","UICheckBoxHolder","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","ProgressTrackingManager","ChoiceBoardPlacer","PlayerVisual","UnityEngine.Animator","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "15.9";

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

Deserializers.buildID = "a5604e63-3be5-406f-91ef-e54f2bd2882b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

