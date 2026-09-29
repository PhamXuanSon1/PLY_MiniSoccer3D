var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointSpring' )
  var i585 = data
  i584.spring = i585[0]
  i584.damper = i585[1]
  i584.targetPosition = i585[2]
  return i584
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointMotor' )
  var i587 = data
  i586.m_TargetVelocity = i587[0]
  i586.m_Force = i587[1]
  i586.m_FreeSpin = i587[2]
  return i586
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointLimits' )
  var i589 = data
  i588.m_Min = i589[0]
  i588.m_Max = i589[1]
  i588.m_Bounciness = i589[2]
  i588.m_BounceMinVelocity = i589[3]
  i588.m_ContactDistance = i589[4]
  i588.minBounce = i589[5]
  i588.maxBounce = i589[6]
  return i588
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointDrive' )
  var i591 = data
  i590.m_PositionSpring = i591[0]
  i590.m_PositionDamper = i591[1]
  i590.m_MaximumForce = i591[2]
  i590.m_UseAcceleration = i591[3]
  return i590
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i593 = data
  i592.m_Spring = i593[0]
  i592.m_Damper = i593[1]
  return i592
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i595 = data
  i594.m_Limit = i595[0]
  i594.m_Bounciness = i595[1]
  i594.m_ContactDistance = i595[2]
  return i594
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i597 = data
  i596.m_ExtremumSlip = i597[0]
  i596.m_ExtremumValue = i597[1]
  i596.m_AsymptoteSlip = i597[2]
  i596.m_AsymptoteValue = i597[3]
  i596.m_Stiffness = i597[4]
  return i596
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i599 = data
  i598.m_LowerAngle = i599[0]
  i598.m_UpperAngle = i599[1]
  return i598
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i601 = data
  i600.m_MotorSpeed = i601[0]
  i600.m_MaximumMotorTorque = i601[1]
  return i600
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i603 = data
  i602.m_DampingRatio = i603[0]
  i602.m_Frequency = i603[1]
  i602.m_Angle = i603[2]
  return i602
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i605 = data
  i604.m_LowerTranslation = i605[0]
  i604.m_UpperTranslation = i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i607 = data
  i606.pivot = new pc.Vec2( i607[0], i607[1] )
  i606.anchorMin = new pc.Vec2( i607[2], i607[3] )
  i606.anchorMax = new pc.Vec2( i607[4], i607[5] )
  i606.sizeDelta = new pc.Vec2( i607[6], i607[7] )
  i606.anchoredPosition3D = new pc.Vec3( i607[8], i607[9], i607[10] )
  i606.rotation = new pc.Quat(i607[11], i607[12], i607[13], i607[14])
  i606.scale = new pc.Vec3( i607[15], i607[16], i607[17] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i609 = data
  i608.planeDistance = i609[0]
  i608.referencePixelsPerUnit = i609[1]
  i608.isFallbackOverlay = !!i609[2]
  i608.renderMode = i609[3]
  i608.renderOrder = i609[4]
  i608.sortingLayerName = i609[5]
  i608.sortingOrder = i609[6]
  i608.scaleFactor = i609[7]
  request.r(i609[8], i609[9], 0, i608, 'worldCamera')
  i608.overrideSorting = !!i609[10]
  i608.pixelPerfect = !!i609[11]
  i608.targetDisplay = i609[12]
  i608.overridePixelPerfect = !!i609[13]
  i608.enabled = !!i609[14]
  return i608
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i611 = data
  i610.m_UiScaleMode = i611[0]
  i610.m_ReferencePixelsPerUnit = i611[1]
  i610.m_ScaleFactor = i611[2]
  i610.m_ReferenceResolution = new pc.Vec2( i611[3], i611[4] )
  i610.m_ScreenMatchMode = i611[5]
  i610.m_MatchWidthOrHeight = i611[6]
  i610.m_PhysicalUnit = i611[7]
  i610.m_FallbackScreenDPI = i611[8]
  i610.m_DefaultSpriteDPI = i611[9]
  i610.m_DynamicPixelsPerUnit = i611[10]
  i610.m_PresetInfoIsWorld = !!i611[11]
  return i610
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i613 = data
  i612.m_IgnoreReversedGraphics = !!i613[0]
  i612.m_BlockingObjects = i613[1]
  i612.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i613[2] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i615 = data
  i614.cullTransparentMesh = !!i615[0]
  return i614
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Image' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_Sprite')
  i616.m_Type = i617[2]
  i616.m_PreserveAspect = !!i617[3]
  i616.m_FillCenter = !!i617[4]
  i616.m_FillMethod = i617[5]
  i616.m_FillAmount = i617[6]
  i616.m_FillClockwise = !!i617[7]
  i616.m_FillOrigin = i617[8]
  i616.m_UseSpriteMesh = !!i617[9]
  i616.m_PixelsPerUnitMultiplier = i617[10]
  request.r(i617[11], i617[12], 0, i616, 'm_Material')
  i616.m_Maskable = !!i617[13]
  i616.m_Color = new pc.Color(i617[14], i617[15], i617[16], i617[17])
  i616.m_RaycastTarget = !!i617[18]
  i616.m_RaycastPadding = new pc.Vec4( i617[19], i617[20], i617[21], i617[22] )
  return i616
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i619 = data
  i618.m_Spacing = i619[0]
  i618.m_ChildForceExpandWidth = !!i619[1]
  i618.m_ChildForceExpandHeight = !!i619[2]
  i618.m_ChildControlWidth = !!i619[3]
  i618.m_ChildControlHeight = !!i619[4]
  i618.m_ChildScaleWidth = !!i619[5]
  i618.m_ChildScaleHeight = !!i619[6]
  i618.m_ReverseArrangement = !!i619[7]
  i618.m_Padding = UnityEngine.RectOffset.FromPaddings(i619[8], i619[9], i619[10], i619[11])
  i618.m_ChildAlignment = i619[12]
  return i618
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i620 = root || request.c( 'UICheckBox' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'iconImg')
  request.r(i621[2], i621[3], 0, i620, 'startingSprite')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i623 = data
  i622.name = i623[0]
  i622.tagId = i623[1]
  i622.enabled = !!i623[2]
  i622.isStatic = !!i623[3]
  i622.layer = i623[4]
  return i622
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Slider' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_FillRect')
  request.r(i625[2], i625[3], 0, i624, 'm_HandleRect')
  i624.m_Direction = i625[4]
  i624.m_MinValue = i625[5]
  i624.m_MaxValue = i625[6]
  i624.m_WholeNumbers = !!i625[7]
  i624.m_Value = i625[8]
  i624.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i625[9], i624.m_OnValueChanged)
  i624.m_Navigation = request.d('UnityEngine.UI.Navigation', i625[10], i624.m_Navigation)
  i624.m_Transition = i625[11]
  i624.m_Colors = request.d('UnityEngine.UI.ColorBlock', i625[12], i624.m_Colors)
  i624.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i625[13], i624.m_SpriteState)
  i624.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i625[14], i624.m_AnimationTriggers)
  i624.m_Interactable = !!i625[15]
  request.r(i625[16], i625[17], 0, i624, 'm_TargetGraphic')
  return i624
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i627 = data
  i626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i627[0], i626.m_PersistentCalls)
  return i626
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i629 = data
  var i631 = i629[0]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(request.d('UnityEngine.Events.PersistentCall', i631[i + 0]));
  }
  i628.m_Calls = i630
  return i628
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Target')
  i634.m_TargetAssemblyTypeName = i635[2]
  i634.m_MethodName = i635[3]
  i634.m_Mode = i635[4]
  i634.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i635[5], i634.m_Arguments)
  i634.m_CallState = i635[6]
  return i634
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i637 = data
  i636.m_Mode = i637[0]
  i636.m_WrapAround = !!i637[1]
  request.r(i637[2], i637[3], 0, i636, 'm_SelectOnUp')
  request.r(i637[4], i637[5], 0, i636, 'm_SelectOnDown')
  request.r(i637[6], i637[7], 0, i636, 'm_SelectOnLeft')
  request.r(i637[8], i637[9], 0, i636, 'm_SelectOnRight')
  return i636
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i639 = data
  i638.m_NormalColor = new pc.Color(i639[0], i639[1], i639[2], i639[3])
  i638.m_HighlightedColor = new pc.Color(i639[4], i639[5], i639[6], i639[7])
  i638.m_PressedColor = new pc.Color(i639[8], i639[9], i639[10], i639[11])
  i638.m_SelectedColor = new pc.Color(i639[12], i639[13], i639[14], i639[15])
  i638.m_DisabledColor = new pc.Color(i639[16], i639[17], i639[18], i639[19])
  i638.m_ColorMultiplier = i639[20]
  i638.m_FadeDuration = i639[21]
  return i638
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_HighlightedSprite')
  request.r(i641[2], i641[3], 0, i640, 'm_PressedSprite')
  request.r(i641[4], i641[5], 0, i640, 'm_SelectedSprite')
  request.r(i641[6], i641[7], 0, i640, 'm_DisabledSprite')
  return i640
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i643 = data
  i642.m_NormalTrigger = i643[0]
  i642.m_HighlightedTrigger = i643[1]
  i642.m_PressedTrigger = i643[2]
  i642.m_SelectedTrigger = i643[3]
  i642.m_DisabledTrigger = i643[4]
  return i642
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i644 = root || request.c( 'UIProgressBar' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'fillImage')
  request.r(i645[2], i645[3], 0, i644, 'fillBackground')
  return i644
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i646 = root || request.c( 'UITutorial' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'tutorialUIHolder')
  return i646
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i648 = root || request.c( 'UIGuidingMove' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'target')
  i648.startPosition = new pc.Vec2( i649[2], i649[3] )
  i648.endPosition = new pc.Vec2( i649[4], i649[5] )
  i648.duration = i649[6]
  i648.ease = i649[7]
  i648.resetToStartOnComplete = !!i649[8]
  i648.loop = !!i649[9]
  i648.loopCount = i649[10]
  i648.loopType = i649[11]
  return i648
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i650 = root || request.c( 'UIPulse' )
  var i651 = data
  i650.targetScale = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.duration = i651[3]
  i650.ease = i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i653 = data
  i652.name = i653[0]
  i652.width = i653[1]
  i652.height = i653[2]
  i652.mipmapCount = i653[3]
  i652.anisoLevel = i653[4]
  i652.filterMode = i653[5]
  i652.hdr = !!i653[6]
  i652.format = i653[7]
  i652.wrapMode = i653[8]
  i652.alphaIsTransparency = !!i653[9]
  i652.alphaSource = i653[10]
  i652.graphicsFormat = i653[11]
  i652.sRGBTexture = !!i653[12]
  i652.desiredColorSpace = i653[13]
  i652.wrapU = i653[14]
  i652.wrapV = i653[15]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i655 = data
  i654.position = new pc.Vec3( i655[0], i655[1], i655[2] )
  i654.scale = new pc.Vec3( i655[3], i655[4], i655[5] )
  i654.rotation = new pc.Quat(i655[6], i655[7], i655[8], i655[9])
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i657 = data
  i656.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i657[0], i656.main)
  i656.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i657[1], i656.colorBySpeed)
  i656.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i657[2], i656.colorOverLifetime)
  i656.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i657[3], i656.emission)
  i656.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i657[4], i656.rotationBySpeed)
  i656.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i657[5], i656.rotationOverLifetime)
  i656.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i657[6], i656.shape)
  i656.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i657[7], i656.sizeBySpeed)
  i656.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i657[8], i656.sizeOverLifetime)
  i656.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i657[9], i656.textureSheetAnimation)
  i656.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i657[10], i656.velocityOverLifetime)
  i656.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i657[11], i656.noise)
  i656.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i657[12], i656.inheritVelocity)
  i656.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i657[13], i656.forceOverLifetime)
  i656.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i657[14], i656.limitVelocityOverLifetime)
  i656.useAutoRandomSeed = !!i657[15]
  i656.randomSeed = i657[16]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemMain()
  var i659 = data
  i658.duration = i659[0]
  i658.loop = !!i659[1]
  i658.prewarm = !!i659[2]
  i658.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.startDelay)
  i658.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.startLifetime)
  i658.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[5], i658.startSpeed)
  i658.startSize3D = !!i659[6]
  i658.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[7], i658.startSizeX)
  i658.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.startSizeY)
  i658.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[9], i658.startSizeZ)
  i658.startRotation3D = !!i659[10]
  i658.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.startRotationX)
  i658.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[12], i658.startRotationY)
  i658.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[13], i658.startRotationZ)
  i658.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[14], i658.startColor)
  i658.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[15], i658.gravityModifier)
  i658.simulationSpace = i659[16]
  request.r(i659[17], i659[18], 0, i658, 'customSimulationSpace')
  i658.simulationSpeed = i659[19]
  i658.useUnscaledTime = !!i659[20]
  i658.scalingMode = i659[21]
  i658.playOnAwake = !!i659[22]
  i658.maxParticles = i659[23]
  i658.emitterVelocityMode = i659[24]
  i658.stopAction = i659[25]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxCurve()
  var i661 = data
  i660.mode = i661[0]
  i660.curveMin = new pc.AnimationCurve( { keys_flow: i661[1] } )
  i660.curveMax = new pc.AnimationCurve( { keys_flow: i661[2] } )
  i660.curveMultiplier = i661[3]
  i660.constantMin = i661[4]
  i660.constantMax = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxGradient()
  var i663 = data
  i662.mode = i663[0]
  i662.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[1], i662.gradientMin)
  i662.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[2], i662.gradientMax)
  i662.colorMin = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.colorMax = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i665 = data
  i664.mode = i665[0]
  var i667 = i665[1]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i667[i + 0]) );
  }
  i664.colorKeys = i666
  var i669 = i665[2]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i669[i + 0]) );
  }
  i664.alphaKeys = i668
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i673 = data
  i672.color = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.time = i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i677 = data
  i676.alpha = i677[0]
  i676.time = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemColorBySpeed()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i679[1], i678.color)
  i678.range = new pc.Vec2( i679[2], i679[3] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemColorOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i681[1], i680.color)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemEmitter()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.rateOverTime)
  i682.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.rateOverDistance)
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i685[i + 0]) );
  }
  i682.bursts = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemBurst()
  var i689 = data
  i688.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[0], i688.count)
  i688.cycleCount = i689[1]
  i688.minCount = i689[2]
  i688.maxCount = i689[3]
  i688.repeatInterval = i689[4]
  i688.time = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  i690.range = new pc.Vec2( i691[5], i691[6] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemShape()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.shapeType = i695[1]
  i694.randomDirectionAmount = i695[2]
  i694.sphericalDirectionAmount = i695[3]
  i694.randomPositionAmount = i695[4]
  i694.alignToDirection = !!i695[5]
  i694.radius = i695[6]
  i694.radiusMode = i695[7]
  i694.radiusSpread = i695[8]
  i694.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[9], i694.radiusSpeed)
  i694.radiusThickness = i695[10]
  i694.angle = i695[11]
  i694.length = i695[12]
  i694.boxThickness = new pc.Vec3( i695[13], i695[14], i695[15] )
  i694.meshShapeType = i695[16]
  request.r(i695[17], i695[18], 0, i694, 'mesh')
  request.r(i695[19], i695[20], 0, i694, 'meshRenderer')
  request.r(i695[21], i695[22], 0, i694, 'skinnedMeshRenderer')
  i694.useMeshMaterialIndex = !!i695[23]
  i694.meshMaterialIndex = i695[24]
  i694.useMeshColors = !!i695[25]
  i694.normalOffset = i695[26]
  i694.arc = i695[27]
  i694.arcMode = i695[28]
  i694.arcSpread = i695[29]
  i694.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[30], i694.arcSpeed)
  i694.donutRadius = i695[31]
  i694.position = new pc.Vec3( i695[32], i695[33], i695[34] )
  i694.rotation = new pc.Vec3( i695[35], i695[36], i695[37] )
  i694.scale = new pc.Vec3( i695[38], i695[39], i695[40] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeBySpeed()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  i696.range = new pc.Vec2( i697[5], i697[6] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.mode = i701[1]
  i700.animation = i701[2]
  i700.numTilesX = i701[3]
  i700.numTilesY = i701[4]
  i700.useRandomRow = !!i701[5]
  i700.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[6], i700.frameOverTime)
  i700.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[7], i700.startFrame)
  i700.cycleCount = i701[8]
  i700.rowIndex = i701[9]
  i700.flipU = i701[10]
  i700.flipV = i701[11]
  i700.spriteCount = i701[12]
  var i703 = i701[13]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sprites = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.x)
  i706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.y)
  i706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.z)
  i706.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.radial)
  i706.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[5], i706.speedModifier)
  i706.space = i707[6]
  i706.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[7], i706.orbitalX)
  i706.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.orbitalY)
  i706.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.orbitalZ)
  i706.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[10], i706.orbitalOffsetX)
  i706.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.orbitalOffsetY)
  i706.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[12], i706.orbitalOffsetZ)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemNoise()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.separateAxes = !!i709[1]
  i708.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.strengthX)
  i708.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.strengthY)
  i708.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.strengthZ)
  i708.frequency = i709[5]
  i708.damping = !!i709[6]
  i708.octaveCount = i709[7]
  i708.octaveMultiplier = i709[8]
  i708.octaveScale = i709[9]
  i708.quality = i709[10]
  i708.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.scrollSpeed)
  i708.scrollSpeedMultiplier = i709[12]
  i708.remapEnabled = !!i709[13]
  i708.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[14], i708.remapX)
  i708.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[15], i708.remapY)
  i708.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[16], i708.remapZ)
  i708.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[17], i708.positionAmount)
  i708.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[18], i708.rotationAmount)
  i708.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[19], i708.sizeAmount)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemInheritVelocity()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.mode = i711[1]
  i710.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.curve)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemForceOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.x)
  i712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.y)
  i712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.z)
  i712.space = i713[4]
  i712.randomized = !!i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.limit)
  i714.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.limitX)
  i714.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.limitY)
  i714.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.limitZ)
  i714.dampen = i715[5]
  i714.separateAxes = !!i715[6]
  i714.space = i715[7]
  i714.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.drag)
  i714.multiplyDragByParticleSize = !!i715[9]
  i714.multiplyDragByParticleVelocity = !!i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'mesh')
  i716.meshCount = i717[2]
  i716.activeVertexStreamsCount = i717[3]
  i716.alignment = i717[4]
  i716.renderMode = i717[5]
  i716.sortMode = i717[6]
  i716.lengthScale = i717[7]
  i716.velocityScale = i717[8]
  i716.cameraVelocityScale = i717[9]
  i716.normalDirection = i717[10]
  i716.sortingFudge = i717[11]
  i716.minParticleSize = i717[12]
  i716.maxParticleSize = i717[13]
  i716.pivot = new pc.Vec3( i717[14], i717[15], i717[16] )
  request.r(i717[17], i717[18], 0, i716, 'trailMaterial')
  i716.applyActiveColorSpace = !!i717[19]
  i716.enabled = !!i717[20]
  request.r(i717[21], i717[22], 0, i716, 'sharedMaterial')
  var i719 = i717[23]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.sharedMaterials = i718
  i716.receiveShadows = !!i717[24]
  i716.shadowCastingMode = i717[25]
  i716.sortingLayerID = i717[26]
  i716.sortingOrder = i717[27]
  i716.lightmapIndex = i717[28]
  i716.lightmapSceneIndex = i717[29]
  i716.lightmapScaleOffset = new pc.Vec4( i717[30], i717[31], i717[32], i717[33] )
  i716.lightProbeUsage = i717[34]
  i716.reflectionProbeUsage = i717[35]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i722 = root || new pc.UnityMaterial()
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'shader')
  i722.renderQueue = i723[3]
  i722.enableInstancing = !!i723[4]
  var i725 = i723[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i725[i + 0]) );
  }
  i722.floatParameters = i724
  var i727 = i723[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i727[i + 0]) );
  }
  i722.colorParameters = i726
  var i729 = i723[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i729[i + 0]) );
  }
  i722.vectorParameters = i728
  var i731 = i723[8]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i731[i + 0]) );
  }
  i722.textureParameters = i730
  var i733 = i723[9]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i733[i + 0]) );
  }
  i722.materialFlags = i732
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = new pc.Color(i741[1], i741[2], i741[3], i741[4])
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = new pc.Vec4( i745[1], i745[2], i745[3], i745[4] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'value')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i753 = data
  i752.name = i753[0]
  i752.enabled = !!i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i755 = data
  i754.name = i755[0]
  i754.halfPrecision = !!i755[1]
  i754.useSimplification = !!i755[2]
  i754.useUInt32IndexFormat = !!i755[3]
  i754.vertexCount = i755[4]
  i754.aabb = i755[5]
  var i757 = i755[6]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( !!i757[i + 0] );
  }
  i754.streams = i756
  i754.vertices = i755[7]
  var i759 = i755[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i759[i + 0]) );
  }
  i754.subMeshes = i758
  var i761 = i755[9]
  var i760 = []
  for(var i = 0; i < i761.length; i += 16) {
    i760.push( new pc.Mat4().setData(i761[i + 0], i761[i + 1], i761[i + 2], i761[i + 3],  i761[i + 4], i761[i + 5], i761[i + 6], i761[i + 7],  i761[i + 8], i761[i + 9], i761[i + 10], i761[i + 11],  i761[i + 12], i761[i + 13], i761[i + 14], i761[i + 15]) );
  }
  i754.bindposes = i760
  var i763 = i755[10]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i763[i + 0]) );
  }
  i754.blendShapes = i762
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i769 = data
  i768.triangles = i769[0]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i775 = data
  i774.name = i775[0]
  var i777 = i775[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i777[i + 0]) );
  }
  i774.frames = i776
  return i774
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i778 = root || request.c( 'ChoiceBoardHolder' )
  var i779 = data
  var i781 = i779[0]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.choiceBoards = i780
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i785 = data
  i784.center = new pc.Vec3( i785[0], i785[1], i785[2] )
  i784.size = new pc.Vec3( i785[3], i785[4], i785[5] )
  i784.enabled = !!i785[6]
  i784.isTrigger = !!i785[7]
  request.r(i785[8], i785[9], 0, i784, 'material')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i787 = data
  i786.color = new pc.Color(i787[0], i787[1], i787[2], i787[3])
  request.r(i787[4], i787[5], 0, i786, 'sprite')
  i786.flipX = !!i787[6]
  i786.flipY = !!i787[7]
  i786.drawMode = i787[8]
  i786.size = new pc.Vec2( i787[9], i787[10] )
  i786.tileMode = i787[11]
  i786.adaptiveModeThreshold = i787[12]
  i786.maskInteraction = i787[13]
  i786.spriteSortPoint = i787[14]
  i786.enabled = !!i787[15]
  request.r(i787[16], i787[17], 0, i786, 'sharedMaterial')
  var i789 = i787[18]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sharedMaterials = i788
  i786.receiveShadows = !!i787[19]
  i786.shadowCastingMode = i787[20]
  i786.sortingLayerID = i787[21]
  i786.sortingOrder = i787[22]
  i786.lightmapIndex = i787[23]
  i786.lightmapSceneIndex = i787[24]
  i786.lightmapScaleOffset = new pc.Vec4( i787[25], i787[26], i787[27], i787[28] )
  i786.lightProbeUsage = i787[29]
  i786.reflectionProbeUsage = i787[30]
  return i786
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i790 = root || request.c( 'ChoiceBoard' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'spriteRenderer')
  request.r(i791[2], i791[3], 0, i790, 'borderRenderer')
  request.r(i791[4], i791[5], 0, i790, 'increaseBorderSprite')
  request.r(i791[6], i791[7], 0, i790, 'decreaseBorderSprite')
  i790.choiceBoardType = i791[8]
  return i790
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_Texture')
  i792.m_UVRect = UnityEngine.Rect.MinMaxRect(i793[2], i793[3], i793[4], i793[5])
  request.r(i793[6], i793[7], 0, i792, 'm_Material')
  i792.m_Maskable = !!i793[8]
  i792.m_Color = new pc.Color(i793[9], i793[10], i793[11], i793[12])
  i792.m_RaycastTarget = !!i793[13]
  i792.m_RaycastPadding = new pc.Vec4( i793[14], i793[15], i793[16], i793[17] )
  return i792
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i794 = root || request.c( 'ImageScroller' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'rawImage')
  i794.moveVector = new pc.Vec2( i795[2], i795[3] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i797 = data
  i796.name = i797[0]
  i796.atlasId = i797[1]
  i796.mipmapCount = i797[2]
  i796.hdr = !!i797[3]
  i796.size = i797[4]
  i796.anisoLevel = i797[5]
  i796.filterMode = i797[6]
  var i799 = i797[7]
  var i798 = []
  for(var i = 0; i < i799.length; i += 4) {
    i798.push( UnityEngine.Rect.MinMaxRect(i799[i + 0], i799[i + 1], i799[i + 2], i799[i + 3]) );
  }
  i796.rects = i798
  i796.wrapU = i797[8]
  i796.wrapV = i797[9]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i803 = data
  i802.name = i803[0]
  i802.index = i803[1]
  i802.startup = !!i803[2]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i805 = data
  i804.type = i805[0]
  i804.color = new pc.Color(i805[1], i805[2], i805[3], i805[4])
  i804.cullingMask = i805[5]
  i804.intensity = i805[6]
  i804.range = i805[7]
  i804.spotAngle = i805[8]
  i804.shadows = i805[9]
  i804.shadowNormalBias = i805[10]
  i804.shadowBias = i805[11]
  i804.shadowStrength = i805[12]
  i804.shadowResolution = i805[13]
  i804.lightmapBakeType = i805[14]
  i804.renderMode = i805[15]
  request.r(i805[16], i805[17], 0, i804, 'cookie')
  i804.cookieSize = i805[18]
  i804.shadowNearPlane = i805[19]
  i804.enabled = !!i805[20]
  return i804
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i806 = root || request.c( 'UICheckBoxHolder' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.uICheckBoxes = i808
  return i806
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Button' )
  var i813 = data
  i812.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i813[0], i812.m_OnClick)
  i812.m_Navigation = request.d('UnityEngine.UI.Navigation', i813[1], i812.m_Navigation)
  i812.m_Transition = i813[2]
  i812.m_Colors = request.d('UnityEngine.UI.ColorBlock', i813[3], i812.m_Colors)
  i812.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i813[4], i812.m_SpriteState)
  i812.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i813[5], i812.m_AnimationTriggers)
  i812.m_Interactable = !!i813[6]
  request.r(i813[7], i813[8], 0, i812, 'm_TargetGraphic')
  return i812
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i815 = data
  i814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i815[0], i814.m_PersistentCalls)
  return i814
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_ObjectArgument')
  i816.m_ObjectArgumentAssemblyTypeName = i817[2]
  i816.m_IntArgument = i817[3]
  i816.m_FloatArgument = i817[4]
  i816.m_StringArgument = i817[5]
  i816.m_BoolArgument = !!i817[6]
  return i816
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_FirstSelected')
  i818.m_sendNavigationEvents = !!i819[2]
  i818.m_DragThreshold = i819[3]
  return i818
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i821 = data
  i820.m_HorizontalAxis = i821[0]
  i820.m_VerticalAxis = i821[1]
  i820.m_SubmitButton = i821[2]
  i820.m_CancelButton = i821[3]
  i820.m_InputActionsPerSecond = i821[4]
  i820.m_RepeatDelay = i821[5]
  i820.m_ForceModuleActive = !!i821[6]
  i820.m_SendPointerHoverToParent = !!i821[7]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'sharedMesh')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'additionalVertexStreams')
  i824.enabled = !!i825[2]
  request.r(i825[3], i825[4], 0, i824, 'sharedMaterial')
  var i827 = i825[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[6]
  i824.shadowCastingMode = i825[7]
  i824.sortingLayerID = i825[8]
  i824.sortingOrder = i825[9]
  i824.lightmapIndex = i825[10]
  i824.lightmapSceneIndex = i825[11]
  i824.lightmapScaleOffset = new pc.Vec4( i825[12], i825[13], i825[14], i825[15] )
  i824.lightProbeUsage = i825[16]
  i824.reflectionProbeUsage = i825[17]
  return i824
}

Deserializers["GameManager"] = function (request, data, root) {
  var i828 = root || request.c( 'GameManager' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'Player')
  i828.maxLevel = i829[2]
  i828.winLevel = i829[3]
  i828.totalMoveTime = i829[4]
  i828.currentPlayerLevel = i829[5]
  return i828
}

Deserializers["InputManager"] = function (request, data, root) {
  var i830 = root || request.c( 'InputManager' )
  var i831 = data
  i830.minimumSwipeDistance = i831[0]
  return i830
}

Deserializers["UIManager"] = function (request, data, root) {
  var i832 = root || request.c( 'UIManager' )
  var i833 = data
  return i832
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i834 = root || request.c( 'Ply_SoundManager' )
  var i835 = data
  i834.audioClips = request.d('FxAudio', i835[0], i834.audioClips)
  request.r(i835[1], i835[2], 0, i834, 'sound')
  i834.enableSound = !!i835[3]
  i834.bgmVolume = i835[4]
  i834.playBgmOnFirstClick = !!i835[5]
  return i834
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i836 = root || request.c( 'FxAudio' )
  var i837 = data
  i836.Clock = request.d('SoundData', i837[0], i836.Clock)
  i836.PlayerWin = request.d('SoundData', i837[1], i836.PlayerWin)
  i836.PlayerLoose = request.d('SoundData', i837[2], i836.PlayerLoose)
  i836.RightChoice = request.d('SoundData', i837[3], i836.RightChoice)
  i836.WrongChoice = request.d('SoundData', i837[4], i836.WrongChoice)
  i836.MaxLevel = request.d('SoundData', i837[5], i836.MaxLevel)
  i836.FightingCloud = request.d('SoundData', i837[6], i836.FightingCloud)
  return i836
}

Deserializers["SoundData"] = function (request, data, root) {
  var i838 = root || request.c( 'SoundData' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'clip')
  i838.volume = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'clip')
  request.r(i841[2], i841[3], 0, i840, 'outputAudioMixerGroup')
  i840.playOnAwake = !!i841[4]
  i840.loop = !!i841[5]
  i840.time = i841[6]
  i840.volume = i841[7]
  i840.pitch = i841[8]
  i840.enabled = !!i841[9]
  return i840
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i842 = root || request.c( 'ProgressTrackingManager' )
  var i843 = data
  i842.maxScore = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'choiceBoardPlacer')
  i842.currentScore = i843[3]
  i842.currentPercent = i843[4]
  return i842
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i844 = root || request.c( 'PlayerController' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'endPos')
  i844.switchTrackTime = i845[2]
  request.r(i845[3], i845[4], 0, i844, 'trackRightTransform')
  request.r(i845[5], i845[6], 0, i844, 'trackLeftTransform')
  i844.startRight = !!i845[7]
  request.r(i845[8], i845[9], 0, i844, 'playerTransform')
  request.r(i845[10], i845[11], 0, i844, 'playerVisual')
  request.r(i845[12], i845[13], 0, i844, 'winPar')
  i844.currentLevel = i845[14]
  i844.dragSmoothSpeed = i845[15]
  i844.dragScreenRatioForFullTrack = i845[16]
  i844.moveCurve = new pc.AnimationCurve( { keys_flow: i845[17] } )
  return i844
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i846 = root || request.c( 'PlayerVisual' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'playerSpriteRenderer')
  request.r(i847[2], i847[3], 0, i846, 'fakeShadowRenderer')
  var i849 = i847[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.levelSprite = i848
  i846.levelScaleMultipliers = i847[5]
  i846.maxPowerParScaleMultiplier = i847[6]
  i846.bounceYMultiplier = i847[7]
  i846.bounceDuration = i847[8]
  i846.scaleTransitionDuration = i847[9]
  request.r(i847[10], i847[11], 0, i846, 'visualAnimator')
  i846.level4TriggerName = i847[12]
  i846.level4SpriteDelay = i847[13]
  i846.maxBoostScaleMultiplier = i847[14]
  i846.maxBoostDuration = i847[15]
  i846.maxPowerParHideDuration = i847[16]
  request.r(i847[17], i847[18], 0, i846, 'maxGlowClip')
  i846.maxGlowStateName = i847[19]
  i846.glowTimelineSpeed = i847[20]
  i846.rimGlowAlphaAfterBoost = i847[21]
  request.r(i847[22], i847[23], 0, i846, 'rimGlowBack')
  request.r(i847[24], i847[25], 0, i846, 'whiteFront')
  request.r(i847[26], i847[27], 0, i846, 'glowFront')
  request.r(i847[28], i847[29], 0, i846, 'burstLayer')
  request.r(i847[30], i847[31], 0, i846, 'glowSilhouetteSprite')
  request.r(i847[32], i847[33], 0, i846, 'glowHaloSprite')
  request.r(i847[34], i847[35], 0, i846, 'blurBurstSprite')
  request.r(i847[36], i847[37], 0, i846, 'blurColorSprite')
  request.r(i847[38], i847[39], 0, i846, 'blurChromaSprite')
  request.r(i847[40], i847[41], 0, i846, 'chromaEdgeSprite')
  request.r(i847[42], i847[43], 0, i846, 'maxPowerPar')
  i846.showPowerFullParOnBoost = !!i847[44]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i851 = data
  i850.mass = i851[0]
  i850.drag = i851[1]
  i850.angularDrag = i851[2]
  i850.useGravity = !!i851[3]
  i850.isKinematic = !!i851[4]
  i850.constraints = i851[5]
  i850.maxAngularVelocity = i851[6]
  i850.collisionDetectionMode = i851[7]
  i850.interpolation = i851[8]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'animatorController')
  request.r(i853[2], i853[3], 0, i852, 'avatar')
  i852.updateMode = i853[4]
  i852.hasTransformHierarchy = !!i853[5]
  i852.applyRootMotion = !!i853[6]
  var i855 = i853[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.humanBones = i854
  i852.enabled = !!i853[8]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i859 = data
  i858.aspect = i859[0]
  i858.orthographic = !!i859[1]
  i858.orthographicSize = i859[2]
  i858.backgroundColor = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.nearClipPlane = i859[7]
  i858.farClipPlane = i859[8]
  i858.fieldOfView = i859[9]
  i858.depth = i859[10]
  i858.clearFlags = i859[11]
  i858.cullingMask = i859[12]
  i858.rect = i859[13]
  request.r(i859[14], i859[15], 0, i858, 'targetTexture')
  i858.usePhysicalProperties = !!i859[16]
  i858.focalLength = i859[17]
  i858.sensorSize = new pc.Vec2( i859[18], i859[19] )
  i858.lensShift = new pc.Vec2( i859[20], i859[21] )
  i858.gateFit = i859[22]
  i858.commandBufferCount = i859[23]
  i858.cameraType = i859[24]
  i858.enabled = !!i859[25]
  return i858
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i860 = root || request.c( 'MaterialUVScroller' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'targetMaterial')
  i860.scrollSpeed = new pc.Vec2( i861[2], i861[3] )
  return i860
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i862 = root || request.c( 'ChoiceBoardPlacer' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'choiceBoardHolderprefab')
  request.r(i863[2], i863[3], 0, i862, 'startPos')
  request.r(i863[4], i863[5], 0, i862, 'endPos')
  request.r(i863[6], i863[7], 0, i862, 'choiceBoardPairData')
  i862.spawnCount = i863[8]
  i862.spawnGenericByNumber = !!i863[9]
  i862.shufflePairsOrder = !!i863[10]
  i862.shuffleLeftRight = !!i863[11]
  i862.spawnOnStart = !!i863[12]
  return i862
}

Deserializers["BossController"] = function (request, data, root) {
  var i864 = root || request.c( 'BossController' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'bossSpriteRenderer')
  request.r(i865[2], i865[3], 0, i864, 'characterVisual')
  request.r(i865[4], i865[5], 0, i864, 'fightingCloud')
  request.r(i865[6], i865[7], 0, i864, 'resultObject')
  request.r(i865[8], i865[9], 0, i864, 'resultSpriteRenderer')
  request.r(i865[10], i865[11], 0, i864, 'winSprite')
  request.r(i865[12], i865[13], 0, i864, 'lossSprite')
  request.r(i865[14], i865[15], 0, i864, 'extraWinObject')
  request.r(i865[16], i865[17], 0, i864, 'winPanel')
  request.r(i865[18], i865[19], 0, i864, 'losePanel')
  var i867 = i865[20]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.extraObjectsToHide = i866
  i864.fightingCloudFx = i865[21]
  i864.winPanelFx = i865[22]
  i864.losePanelFx = i865[23]
  i864.delayAfterLastBoard = i865[24]
  i864.delayAfterLastBoardOnLoss = i865[25]
  i864.fightDuration = i865[26]
  i864.showResultDuration = i865[27]
  request.r(i865[28], i865[29], 0, i864, 'currentPlayer')
  i864.currentPlayerLevel = i865[30]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i871 = data
  i870.ambientIntensity = i871[0]
  i870.reflectionIntensity = i871[1]
  i870.ambientMode = i871[2]
  i870.ambientLight = new pc.Color(i871[3], i871[4], i871[5], i871[6])
  i870.ambientSkyColor = new pc.Color(i871[7], i871[8], i871[9], i871[10])
  i870.ambientGroundColor = new pc.Color(i871[11], i871[12], i871[13], i871[14])
  i870.ambientEquatorColor = new pc.Color(i871[15], i871[16], i871[17], i871[18])
  i870.fogColor = new pc.Color(i871[19], i871[20], i871[21], i871[22])
  i870.fogEndDistance = i871[23]
  i870.fogStartDistance = i871[24]
  i870.fogDensity = i871[25]
  i870.fog = !!i871[26]
  request.r(i871[27], i871[28], 0, i870, 'skybox')
  i870.fogMode = i871[29]
  var i873 = i871[30]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i873[i + 0]) );
  }
  i870.lightmaps = i872
  i870.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i871[31], i870.lightProbes)
  i870.lightmapsMode = i871[32]
  i870.mixedBakeMode = i871[33]
  i870.environmentLightingMode = i871[34]
  i870.ambientProbe = new pc.SphericalHarmonicsL2(i871[35])
  i870.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i871[36])
  i870.useReferenceAmbientProbe = !!i871[37]
  request.r(i871[38], i871[39], 0, i870, 'customReflection')
  request.r(i871[40], i871[41], 0, i870, 'defaultReflection')
  i870.defaultReflectionMode = i871[42]
  i870.defaultReflectionResolution = i871[43]
  i870.sunLightObjectId = i871[44]
  i870.pixelLightCount = i871[45]
  i870.defaultReflectionHDR = !!i871[46]
  i870.hasLightDataAsset = !!i871[47]
  i870.hasManualGenerate = !!i871[48]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'lightmapColor')
  request.r(i877[2], i877[3], 0, i876, 'lightmapDirection')
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i878 = root || new UnityEngine.LightProbes()
  var i879 = data
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i889[i + 0]));
  }
  i886.ShaderCompilationErrors = i888
  i886.name = i887[1]
  i886.guid = i887[2]
  var i891 = i887[3]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( i891[i + 0] );
  }
  i886.shaderDefinedKeywords = i890
  var i893 = i887[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i893[i + 0]) );
  }
  i886.passes = i892
  var i895 = i887[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i895[i + 0]) );
  }
  i886.usePasses = i894
  var i897 = i887[6]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i897[i + 0]) );
  }
  i886.defaultParameterValues = i896
  request.r(i887[7], i887[8], 0, i886, 'unityFallbackShader')
  i886.readDepth = !!i887[9]
  i886.hasDepthOnlyPass = !!i887[10]
  i886.isCreatedByShaderGraph = !!i887[11]
  i886.disableBatching = !!i887[12]
  i886.compiled = !!i887[13]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i901 = data
  i900.shaderName = i901[0]
  i900.errorMessage = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i906 = root || new pc.UnityShaderPass()
  var i907 = data
  i906.id = i907[0]
  i906.subShaderIndex = i907[1]
  i906.name = i907[2]
  i906.passType = i907[3]
  i906.grabPassTextureName = i907[4]
  i906.usePass = !!i907[5]
  i906.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[6], i906.zTest)
  i906.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[7], i906.zWrite)
  i906.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[8], i906.culling)
  i906.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i907[9], i906.blending)
  i906.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i907[10], i906.alphaBlending)
  i906.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[11], i906.colorWriteMask)
  i906.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[12], i906.offsetUnits)
  i906.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[13], i906.offsetFactor)
  i906.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[14], i906.stencilRef)
  i906.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[15], i906.stencilReadMask)
  i906.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[16], i906.stencilWriteMask)
  i906.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i907[17], i906.stencilOp)
  i906.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i907[18], i906.stencilOpFront)
  i906.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i907[19], i906.stencilOpBack)
  var i909 = i907[20]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i909[i + 0]) );
  }
  i906.tags = i908
  var i911 = i907[21]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i906.passDefinedKeywords = i910
  var i913 = i907[22]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i913[i + 0]) );
  }
  i906.passDefinedKeywordGroups = i912
  var i915 = i907[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i915[i + 0]) );
  }
  i906.variants = i914
  var i917 = i907[24]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i917[i + 0]) );
  }
  i906.excludedVariants = i916
  i906.hasDepthReader = !!i907[25]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i919 = data
  i918.val = i919[0]
  i918.name = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i921 = data
  i920.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[0], i920.src)
  i920.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[1], i920.dst)
  i920.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i921[2], i920.op)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i923 = data
  i922.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[0], i922.pass)
  i922.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[1], i922.fail)
  i922.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[2], i922.zFail)
  i922.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[3], i922.comp)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i927 = data
  i926.name = i927[0]
  i926.value = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i930.keywords = i932
  i930.hasDiscard = !!i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i937 = data
  i936.passId = i937[0]
  i936.subShaderIndex = i937[1]
  var i939 = i937[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.keywords = i938
  i936.vertexProgram = i937[3]
  i936.fragmentProgram = i937[4]
  i936.exportedForWebGl2 = !!i937[5]
  i936.readDepth = !!i937[6]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'shader')
  i942.pass = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i947 = data
  i946.name = i947[0]
  i946.type = i947[1]
  i946.value = new pc.Vec4( i947[2], i947[3], i947[4], i947[5] )
  i946.textureValue = i947[6]
  i946.shaderPropertyFlag = i947[7]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i949 = data
  i948.name = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'texture')
  i948.aabb = i949[3]
  i948.vertices = i949[4]
  i948.triangles = i949[5]
  i948.textureRect = UnityEngine.Rect.MinMaxRect(i949[6], i949[7], i949[8], i949[9])
  i948.packedRect = UnityEngine.Rect.MinMaxRect(i949[10], i949[11], i949[12], i949[13])
  i948.border = new pc.Vec4( i949[14], i949[15], i949[16], i949[17] )
  i948.transparency = i949[18]
  i948.bounds = i949[19]
  i948.pixelsPerUnit = i949[20]
  i948.textureWidth = i949[21]
  i948.textureHeight = i949[22]
  i948.nativeSize = new pc.Vec2( i949[23], i949[24] )
  i948.pivot = new pc.Vec2( i949[25], i949[26] )
  i948.textureRectOffset = new pc.Vec2( i949[27], i949[28] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i951 = data
  i950.name = i951[0]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i953 = data
  i952.name = i953[0]
  i952.wrapMode = i953[1]
  i952.isLooping = !!i953[2]
  i952.length = i953[3]
  var i955 = i953[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i955[i + 0]) );
  }
  i952.curves = i954
  var i957 = i953[5]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i957[i + 0]) );
  }
  i952.events = i956
  i952.halfPrecision = !!i953[6]
  i952._frameRate = i953[7]
  i952.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i953[8], i952.localBounds)
  i952.hasMuscleCurves = !!i953[9]
  var i959 = i953[10]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i952.clipMuscleConstant = i958
  i952.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i953[11], i952.clipBindingConstant)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i963 = data
  i962.path = i963[0]
  i962.hash = i963[1]
  i962.componentType = i963[2]
  i962.property = i963[3]
  i962.keys = i963[4]
  var i965 = i963[5]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i965[i + 0]) );
  }
  i962.objectReferenceKeys = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i969 = data
  i968.time = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'value')
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i973 = data
  i972.functionName = i973[0]
  i972.floatParameter = i973[1]
  i972.intParameter = i973[2]
  i972.stringParameter = i973[3]
  request.r(i973[4], i973[5], 0, i972, 'objectReferenceParameter')
  i972.time = i973[6]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i975 = data
  i974.center = new pc.Vec3( i975[0], i975[1], i975[2] )
  i974.extends = new pc.Vec3( i975[3], i975[4], i975[5] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i978.genericBindings = i980
  var i983 = i979[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i978.pptrCurveMapping = i982
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i985 = data
  i984.name = i985[0]
  var i987 = i985[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i987[i + 0]) );
  }
  i984.layers = i986
  var i989 = i985[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i989[i + 0]) );
  }
  i984.parameters = i988
  i984.animationClips = i985[3]
  i984.avatarUnsupported = i985[4]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i993 = data
  i992.name = i993[0]
  i992.defaultWeight = i993[1]
  i992.blendingMode = i993[2]
  i992.avatarMask = i993[3]
  i992.syncedLayerIndex = i993[4]
  i992.syncedLayerAffectsTiming = !!i993[5]
  i992.syncedLayers = i993[6]
  i992.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i993[7], i992.stateMachine)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i995 = data
  i994.id = i995[0]
  i994.name = i995[1]
  i994.path = i995[2]
  var i997 = i995[3]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i997[i + 0]) );
  }
  i994.states = i996
  var i999 = i995[4]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i999[i + 0]) );
  }
  i994.machines = i998
  var i1001 = i995[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1001[i + 0]) );
  }
  i994.entryStateTransitions = i1000
  var i1003 = i995[6]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1003[i + 0]) );
  }
  i994.exitStateTransitions = i1002
  var i1005 = i995[7]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1005[i + 0]) );
  }
  i994.anyStateTransitions = i1004
  i994.defaultStateId = i995[8]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1009 = data
  i1008.id = i1009[0]
  i1008.name = i1009[1]
  i1008.cycleOffset = i1009[2]
  i1008.cycleOffsetParameter = i1009[3]
  i1008.cycleOffsetParameterActive = !!i1009[4]
  i1008.mirror = !!i1009[5]
  i1008.mirrorParameter = i1009[6]
  i1008.mirrorParameterActive = !!i1009[7]
  i1008.motionId = i1009[8]
  i1008.nameHash = i1009[9]
  i1008.fullPathHash = i1009[10]
  i1008.speed = i1009[11]
  i1008.speedParameter = i1009[12]
  i1008.speedParameterActive = !!i1009[13]
  i1008.tag = i1009[14]
  i1008.tagHash = i1009[15]
  i1008.writeDefaultValues = !!i1009[16]
  var i1011 = i1009[17]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.behaviours = i1010
  var i1013 = i1009[18]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1013[i + 0]) );
  }
  i1008.transitions = i1012
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1019 = data
  i1018.fullPath = i1019[0]
  i1018.canTransitionToSelf = !!i1019[1]
  i1018.duration = i1019[2]
  i1018.exitTime = i1019[3]
  i1018.hasExitTime = !!i1019[4]
  i1018.hasFixedDuration = !!i1019[5]
  i1018.interruptionSource = i1019[6]
  i1018.offset = i1019[7]
  i1018.orderedInterruption = !!i1019[8]
  i1018.destinationStateId = i1019[9]
  i1018.isExit = !!i1019[10]
  i1018.mute = !!i1019[11]
  i1018.solo = !!i1019[12]
  var i1021 = i1019[13]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1021[i + 0]) );
  }
  i1018.conditions = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1027 = data
  i1026.destinationStateId = i1027[0]
  i1026.isExit = !!i1027[1]
  i1026.mute = !!i1027[2]
  i1026.solo = !!i1027[3]
  var i1029 = i1027[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1029[i + 0]) );
  }
  i1026.conditions = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1033 = data
  i1032.mode = i1033[0]
  i1032.parameter = i1033[1]
  i1032.threshold = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1037 = data
  i1036.defaultBool = !!i1037[0]
  i1036.defaultFloat = i1037[1]
  i1036.defaultInt = i1037[2]
  i1036.name = i1037[3]
  i1036.nameHash = i1037[4]
  i1036.type = i1037[5]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.bytes64 = i1039[1]
  i1038.data = i1039[2]
  return i1038
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i1040 = root || request.c( 'ChoiceBoardPairData' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('ChoicePairData', i1043[i + 0]) );
  }
  i1040.ChoicePairDatas = i1042
  return i1040
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i1046 = root || request.c( 'ChoicePairData' )
  var i1047 = data
  i1046.choiceData1 = request.d('ChoiceData', i1047[0], i1046.choiceData1)
  i1046.choiceData2 = request.d('ChoiceData', i1047[1], i1046.choiceData2)
  return i1046
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i1048 = root || request.c( 'ChoiceData' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'VisualSprite')
  request.r(i1049[2], i1049[3], 0, i1048, 'BorderSprite')
  i1048.ChoiceType = i1049[4]
  return i1048
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1051 = data
  i1050.useSafeMode = !!i1051[0]
  i1050.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1051[1], i1050.safeModeOptions)
  i1050.timeScale = i1051[2]
  i1050.unscaledTimeScale = i1051[3]
  i1050.useSmoothDeltaTime = !!i1051[4]
  i1050.maxSmoothUnscaledTime = i1051[5]
  i1050.rewindCallbackMode = i1051[6]
  i1050.showUnityEditorReport = !!i1051[7]
  i1050.logBehaviour = i1051[8]
  i1050.drawGizmos = !!i1051[9]
  i1050.defaultRecyclable = !!i1051[10]
  i1050.defaultAutoPlay = i1051[11]
  i1050.defaultUpdateType = i1051[12]
  i1050.defaultTimeScaleIndependent = !!i1051[13]
  i1050.defaultEaseType = i1051[14]
  i1050.defaultEaseOvershootOrAmplitude = i1051[15]
  i1050.defaultEasePeriod = i1051[16]
  i1050.defaultAutoKill = !!i1051[17]
  i1050.defaultLoopType = i1051[18]
  i1050.debugMode = !!i1051[19]
  i1050.debugStoreTargetId = !!i1051[20]
  i1050.showPreviewPanel = !!i1051[21]
  i1050.storeSettingsLocation = i1051[22]
  i1050.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1051[23], i1050.modules)
  i1050.createASMDEF = !!i1051[24]
  i1050.showPlayingTweens = !!i1051[25]
  i1050.showPausedTweens = !!i1051[26]
  return i1050
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1052 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1053 = data
  i1052.logBehaviour = i1053[0]
  i1052.nestedTweenFailureBehaviour = i1053[1]
  return i1052
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1054 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1055 = data
  i1054.showPanel = !!i1055[0]
  i1054.audioEnabled = !!i1055[1]
  i1054.physicsEnabled = !!i1055[2]
  i1054.physics2DEnabled = !!i1055[3]
  i1054.spriteEnabled = !!i1055[4]
  i1054.uiEnabled = !!i1055[5]
  i1054.uiToolkitEnabled = !!i1055[6]
  i1054.textMeshProEnabled = !!i1055[7]
  i1054.tk2DEnabled = !!i1055[8]
  i1054.deAudioEnabled = !!i1055[9]
  i1054.deUnityExtendedEnabled = !!i1055[10]
  i1054.epoOutlineEnabled = !!i1055[11]
  return i1054
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Settings' )
  var i1057 = data
  i1056.assetVersion = i1057[0]
  i1056.m_TextWrappingMode = i1057[1]
  i1056.m_enableKerning = !!i1057[2]
  var i1059 = i1057[3]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(i1059[i + 0]);
  }
  i1056.m_ActiveFontFeatures = i1058
  i1056.m_enableExtraPadding = !!i1057[4]
  i1056.m_enableTintAllSprites = !!i1057[5]
  i1056.m_enableParseEscapeCharacters = !!i1057[6]
  i1056.m_EnableRaycastTarget = !!i1057[7]
  i1056.m_GetFontFeaturesAtRuntime = !!i1057[8]
  i1056.m_missingGlyphCharacter = i1057[9]
  i1056.m_ClearDynamicDataOnBuild = !!i1057[10]
  i1056.m_warningsDisabled = !!i1057[11]
  request.r(i1057[12], i1057[13], 0, i1056, 'm_defaultFontAsset')
  i1056.m_defaultFontAssetPath = i1057[14]
  i1056.m_defaultFontSize = i1057[15]
  i1056.m_defaultAutoSizeMinRatio = i1057[16]
  i1056.m_defaultAutoSizeMaxRatio = i1057[17]
  i1056.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1057[18], i1057[19] )
  i1056.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1057[20], i1057[21] )
  i1056.m_autoSizeTextContainer = !!i1057[22]
  i1056.m_IsTextObjectScaleStatic = !!i1057[23]
  var i1061 = i1057[24]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1056.m_fallbackFontAssets = i1060
  i1056.m_matchMaterialPreset = !!i1057[25]
  i1056.m_HideSubTextObjects = !!i1057[26]
  request.r(i1057[27], i1057[28], 0, i1056, 'm_defaultSpriteAsset')
  i1056.m_defaultSpriteAssetPath = i1057[29]
  i1056.m_enableEmojiSupport = !!i1057[30]
  i1056.m_MissingCharacterSpriteUnicode = i1057[31]
  var i1063 = i1057[32]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1056.m_EmojiFallbackTextAssets = i1062
  i1056.m_defaultColorGradientPresetsPath = i1057[33]
  request.r(i1057[34], i1057[35], 0, i1056, 'm_defaultStyleSheet')
  i1056.m_StyleSheetsResourcePath = i1057[36]
  request.r(i1057[37], i1057[38], 0, i1056, 'm_leadingCharacters')
  request.r(i1057[39], i1057[40], 0, i1056, 'm_followingCharacters')
  i1056.m_UseModernHangulLineBreakingRules = !!i1057[41]
  return i1056
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'spriteSheet')
  var i1073 = i1071[2]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_Sprite', i1073[i + 0]));
  }
  i1070.spriteInfoList = i1072
  var i1075 = i1071[3]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1070.fallbackSpriteAssets = i1074
  var i1077 = i1071[4]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('TMPro.TMP_SpriteCharacter', i1077[i + 0]));
  }
  i1070.m_SpriteCharacterTable = i1076
  var i1079 = i1071[5]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.TMP_SpriteGlyph', i1079[i + 0]));
  }
  i1070.m_GlyphTable = i1078
  i1070.m_Version = i1071[6]
  i1070.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1071[7], i1070.m_FaceInfo)
  request.r(i1071[8], i1071[9], 0, i1070, 'm_Material')
  return i1070
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.hashCode = i1083[1]
  i1082.unicode = i1083[2]
  i1082.pivot = new pc.Vec2( i1083[3], i1083[4] )
  request.r(i1083[5], i1083[6], 0, i1082, 'sprite')
  i1082.id = i1083[7]
  i1082.x = i1083[8]
  i1082.y = i1083[9]
  i1082.width = i1083[10]
  i1082.height = i1083[11]
  i1082.xOffset = i1083[12]
  i1082.yOffset = i1083[13]
  i1082.xAdvance = i1083[14]
  i1082.scale = i1083[15]
  return i1082
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1089 = data
  i1088.m_Name = i1089[0]
  i1088.m_ElementType = i1089[1]
  i1088.m_Unicode = i1089[2]
  i1088.m_GlyphIndex = i1089[3]
  i1088.m_Scale = i1089[4]
  return i1088
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'sprite')
  i1092.m_Index = i1093[2]
  i1092.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1093[3], i1092.m_Metrics)
  i1092.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1093[4], i1092.m_GlyphRect)
  i1092.m_Scale = i1093[5]
  i1092.m_AtlasIndex = i1093[6]
  i1092.m_ClassDefinitionType = i1093[7]
  return i1092
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1095 = data
  i1094.m_Width = i1095[0]
  i1094.m_Height = i1095[1]
  i1094.m_HorizontalBearingX = i1095[2]
  i1094.m_HorizontalBearingY = i1095[3]
  i1094.m_HorizontalAdvance = i1095[4]
  return i1094
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1097 = data
  i1096.m_X = i1097[0]
  i1096.m_Y = i1097[1]
  i1096.m_Width = i1097[2]
  i1096.m_Height = i1097[3]
  return i1096
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1099 = data
  i1098.m_FaceIndex = i1099[0]
  i1098.m_FamilyName = i1099[1]
  i1098.m_StyleName = i1099[2]
  i1098.m_PointSize = i1099[3]
  i1098.m_Scale = i1099[4]
  i1098.m_UnitsPerEM = i1099[5]
  i1098.m_LineHeight = i1099[6]
  i1098.m_AscentLine = i1099[7]
  i1098.m_CapLine = i1099[8]
  i1098.m_MeanLine = i1099[9]
  i1098.m_Baseline = i1099[10]
  i1098.m_DescentLine = i1099[11]
  i1098.m_SuperscriptOffset = i1099[12]
  i1098.m_SuperscriptSize = i1099[13]
  i1098.m_SubscriptOffset = i1099[14]
  i1098.m_SubscriptSize = i1099[15]
  i1098.m_UnderlineOffset = i1099[16]
  i1098.m_UnderlineThickness = i1099[17]
  i1098.m_StrikethroughOffset = i1099[18]
  i1098.m_StrikethroughThickness = i1099[19]
  i1098.m_TabWidth = i1099[20]
  return i1098
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_Style', i1103[i + 0]));
  }
  i1100.m_StyleList = i1102
  return i1100
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_Style' )
  var i1107 = data
  i1106.m_Name = i1107[0]
  i1106.m_HashCode = i1107[1]
  i1106.m_OpeningDefinition = i1107[2]
  i1106.m_ClosingDefinition = i1107[3]
  i1106.m_OpeningTagArray = i1107[4]
  i1106.m_ClosingTagArray = i1107[5]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1111[i + 0]) );
  }
  i1108.files = i1110
  i1108.componentToPrefabIds = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1115 = data
  i1114.path = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'unityObject')
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1119[i + 0]) );
  }
  i1116.scriptsExecutionOrder = i1118
  var i1121 = i1117[1]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1121[i + 0]) );
  }
  i1116.sortingLayers = i1120
  var i1123 = i1117[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1123[i + 0]) );
  }
  i1116.cullingLayers = i1122
  i1116.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1117[3], i1116.timeSettings)
  i1116.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1117[4], i1116.physicsSettings)
  i1116.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1117[5], i1116.physics2DSettings)
  i1116.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1117[6], i1116.qualitySettings)
  i1116.enableRealtimeShadows = !!i1117[7]
  i1116.enableAutoInstancing = !!i1117[8]
  i1116.enableStaticBatching = !!i1117[9]
  i1116.enableDynamicBatching = !!i1117[10]
  i1116.lightmapEncodingQuality = i1117[11]
  i1116.desiredColorSpace = i1117[12]
  var i1125 = i1117[13]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1116.allTags = i1124
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.value = i1129[1]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1133 = data
  i1132.id = i1133[0]
  i1132.name = i1133[1]
  i1132.value = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.name = i1137[1]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1139 = data
  i1138.fixedDeltaTime = i1139[0]
  i1138.maximumDeltaTime = i1139[1]
  i1138.timeScale = i1139[2]
  i1138.maximumParticleTimestep = i1139[3]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1141 = data
  i1140.gravity = new pc.Vec3( i1141[0], i1141[1], i1141[2] )
  i1140.defaultSolverIterations = i1141[3]
  i1140.bounceThreshold = i1141[4]
  i1140.autoSyncTransforms = !!i1141[5]
  i1140.autoSimulation = !!i1141[6]
  var i1143 = i1141[7]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1143[i + 0]) );
  }
  i1140.collisionMatrix = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1147 = data
  i1146.enabled = !!i1147[0]
  i1146.layerId = i1147[1]
  i1146.otherLayerId = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'material')
  i1148.gravity = new pc.Vec2( i1149[2], i1149[3] )
  i1148.positionIterations = i1149[4]
  i1148.velocityIterations = i1149[5]
  i1148.velocityThreshold = i1149[6]
  i1148.maxLinearCorrection = i1149[7]
  i1148.maxAngularCorrection = i1149[8]
  i1148.maxTranslationSpeed = i1149[9]
  i1148.maxRotationSpeed = i1149[10]
  i1148.baumgarteScale = i1149[11]
  i1148.baumgarteTOIScale = i1149[12]
  i1148.timeToSleep = i1149[13]
  i1148.linearSleepTolerance = i1149[14]
  i1148.angularSleepTolerance = i1149[15]
  i1148.defaultContactOffset = i1149[16]
  i1148.autoSimulation = !!i1149[17]
  i1148.queriesHitTriggers = !!i1149[18]
  i1148.queriesStartInColliders = !!i1149[19]
  i1148.callbacksOnDisable = !!i1149[20]
  i1148.reuseCollisionCallbacks = !!i1149[21]
  i1148.autoSyncTransforms = !!i1149[22]
  var i1151 = i1149[23]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1151[i + 0]) );
  }
  i1148.collisionMatrix = i1150
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1155 = data
  i1154.enabled = !!i1155[0]
  i1154.layerId = i1155[1]
  i1154.otherLayerId = i1155[2]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1159[i + 0]) );
  }
  i1156.qualityLevels = i1158
  var i1161 = i1157[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.names = i1160
  i1156.shadows = i1157[2]
  i1156.anisotropicFiltering = i1157[3]
  i1156.antiAliasing = i1157[4]
  i1156.lodBias = i1157[5]
  i1156.shadowCascades = i1157[6]
  i1156.shadowDistance = i1157[7]
  i1156.shadowmaskMode = i1157[8]
  i1156.shadowProjection = i1157[9]
  i1156.shadowResolution = i1157[10]
  i1156.softParticles = !!i1157[11]
  i1156.softVegetation = !!i1157[12]
  i1156.activeColorSpace = i1157[13]
  i1156.desiredColorSpace = i1157[14]
  i1156.masterTextureLimit = i1157[15]
  i1156.maxQueuedFrames = i1157[16]
  i1156.particleRaycastBudget = i1157[17]
  i1156.pixelLightCount = i1157[18]
  i1156.realtimeReflectionProbes = !!i1157[19]
  i1156.shadowCascade2Split = i1157[20]
  i1156.shadowCascade4Split = new pc.Vec3( i1157[21], i1157[22], i1157[23] )
  i1156.streamingMipmapsActive = !!i1157[24]
  i1156.vSyncCount = i1157[25]
  i1156.asyncUploadBufferSize = i1157[26]
  i1156.asyncUploadTimeSlice = i1157[27]
  i1156.billboardsFaceCameraPosition = !!i1157[28]
  i1156.shadowNearPlaneOffset = i1157[29]
  i1156.streamingMipmapsMemoryBudget = i1157[30]
  i1156.maximumLODLevel = i1157[31]
  i1156.streamingMipmapsAddAllCameras = !!i1157[32]
  i1156.streamingMipmapsMaxLevelReduction = i1157[33]
  i1156.streamingMipmapsRenderersPerFrame = i1157[34]
  i1156.resolutionScalingFixedDPIFactor = i1157[35]
  i1156.streamingMipmapsMaxFileIORequests = i1157[36]
  i1156.currentQualityLevel = i1157[37]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1167 = data
  i1166.weight = i1167[0]
  i1166.vertices = i1167[1]
  i1166.normals = i1167[2]
  i1166.tangents = i1167[3]
  return i1166
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[51],"73":[49],"74":[49],"75":[49],"76":[49],"77":[49],"78":[49],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[51],"94":[37],"95":[96],"97":[96],"1":[0],"98":[34],"99":[1],"100":[0],"101":[37,0],"102":[0,5],"103":[0],"104":[5,0],"105":[37],"106":[5,0],"107":[0],"108":[109],"110":[109],"111":[109],"112":[0],"113":[0],"4":[1],"6":[5,0],"114":[0],"3":[1],"115":[0],"116":[0],"8":[0],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"122":[0],"28":[5,0],"123":[0],"124":[0],"125":[0],"11":[0],"126":[5,0],"127":[0],"128":[34],"129":[34],"35":[34],"130":[34],"131":[51],"132":[51]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Mesh","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.Light","UICheckBoxHolder","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","ChoiceBoardPlacer","PlayerVisual","UnityEngine.Animator","UnityEngine.AnimationClip","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "61.8";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "Ply23_MiniSoccer_RonaldoRun";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1728";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5103";

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

Deserializers.buildID = "f55956f7-b4e9-428b-bc0d-ebd778f01c8b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

