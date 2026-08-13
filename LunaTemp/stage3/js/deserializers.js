var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4748 = root || request.c( 'UnityEngine.JointSpring' )
  var i4749 = data
  i4748.spring = i4749[0]
  i4748.damper = i4749[1]
  i4748.targetPosition = i4749[2]
  return i4748
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4750 = root || request.c( 'UnityEngine.JointMotor' )
  var i4751 = data
  i4750.m_TargetVelocity = i4751[0]
  i4750.m_Force = i4751[1]
  i4750.m_FreeSpin = i4751[2]
  return i4750
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4752 = root || request.c( 'UnityEngine.JointLimits' )
  var i4753 = data
  i4752.m_Min = i4753[0]
  i4752.m_Max = i4753[1]
  i4752.m_Bounciness = i4753[2]
  i4752.m_BounceMinVelocity = i4753[3]
  i4752.m_ContactDistance = i4753[4]
  i4752.minBounce = i4753[5]
  i4752.maxBounce = i4753[6]
  return i4752
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4754 = root || request.c( 'UnityEngine.JointDrive' )
  var i4755 = data
  i4754.m_PositionSpring = i4755[0]
  i4754.m_PositionDamper = i4755[1]
  i4754.m_MaximumForce = i4755[2]
  i4754.m_UseAcceleration = i4755[3]
  return i4754
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4756 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4757 = data
  i4756.m_Spring = i4757[0]
  i4756.m_Damper = i4757[1]
  return i4756
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4759 = data
  i4758.m_Limit = i4759[0]
  i4758.m_Bounciness = i4759[1]
  i4758.m_ContactDistance = i4759[2]
  return i4758
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4760 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4761 = data
  i4760.m_ExtremumSlip = i4761[0]
  i4760.m_ExtremumValue = i4761[1]
  i4760.m_AsymptoteSlip = i4761[2]
  i4760.m_AsymptoteValue = i4761[3]
  i4760.m_Stiffness = i4761[4]
  return i4760
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4762 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4763 = data
  i4762.m_LowerAngle = i4763[0]
  i4762.m_UpperAngle = i4763[1]
  return i4762
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4764 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4765 = data
  i4764.m_MotorSpeed = i4765[0]
  i4764.m_MaximumMotorTorque = i4765[1]
  return i4764
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4766 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4767 = data
  i4766.m_DampingRatio = i4767[0]
  i4766.m_Frequency = i4767[1]
  i4766.m_Angle = i4767[2]
  return i4766
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4768 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4769 = data
  i4768.m_LowerTranslation = i4769[0]
  i4768.m_UpperTranslation = i4769[1]
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4771 = data
  i4770.pivot = new pc.Vec2( i4771[0], i4771[1] )
  i4770.anchorMin = new pc.Vec2( i4771[2], i4771[3] )
  i4770.anchorMax = new pc.Vec2( i4771[4], i4771[5] )
  i4770.sizeDelta = new pc.Vec2( i4771[6], i4771[7] )
  i4770.anchoredPosition3D = new pc.Vec3( i4771[8], i4771[9], i4771[10] )
  i4770.rotation = new pc.Quat(i4771[11], i4771[12], i4771[13], i4771[14])
  i4770.scale = new pc.Vec3( i4771[15], i4771[16], i4771[17] )
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4773 = data
  i4772.planeDistance = i4773[0]
  i4772.referencePixelsPerUnit = i4773[1]
  i4772.isFallbackOverlay = !!i4773[2]
  i4772.renderMode = i4773[3]
  i4772.renderOrder = i4773[4]
  i4772.sortingLayerName = i4773[5]
  i4772.sortingOrder = i4773[6]
  i4772.scaleFactor = i4773[7]
  request.r(i4773[8], i4773[9], 0, i4772, 'worldCamera')
  i4772.overrideSorting = !!i4773[10]
  i4772.pixelPerfect = !!i4773[11]
  i4772.targetDisplay = i4773[12]
  i4772.overridePixelPerfect = !!i4773[13]
  i4772.enabled = !!i4773[14]
  return i4772
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4774 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4775 = data
  i4774.m_UiScaleMode = i4775[0]
  i4774.m_ReferencePixelsPerUnit = i4775[1]
  i4774.m_ScaleFactor = i4775[2]
  i4774.m_ReferenceResolution = new pc.Vec2( i4775[3], i4775[4] )
  i4774.m_ScreenMatchMode = i4775[5]
  i4774.m_MatchWidthOrHeight = i4775[6]
  i4774.m_PhysicalUnit = i4775[7]
  i4774.m_FallbackScreenDPI = i4775[8]
  i4774.m_DefaultSpriteDPI = i4775[9]
  i4774.m_DynamicPixelsPerUnit = i4775[10]
  i4774.m_PresetInfoIsWorld = !!i4775[11]
  return i4774
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4776 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4777 = data
  i4776.m_IgnoreReversedGraphics = !!i4777[0]
  i4776.m_BlockingObjects = i4777[1]
  i4776.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4777[2] )
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4779 = data
  i4778.cullTransparentMesh = !!i4779[0]
  return i4778
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4780 = root || request.c( 'UnityEngine.UI.Image' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'm_Sprite')
  i4780.m_Type = i4781[2]
  i4780.m_PreserveAspect = !!i4781[3]
  i4780.m_FillCenter = !!i4781[4]
  i4780.m_FillMethod = i4781[5]
  i4780.m_FillAmount = i4781[6]
  i4780.m_FillClockwise = !!i4781[7]
  i4780.m_FillOrigin = i4781[8]
  i4780.m_UseSpriteMesh = !!i4781[9]
  i4780.m_PixelsPerUnitMultiplier = i4781[10]
  request.r(i4781[11], i4781[12], 0, i4780, 'm_Material')
  i4780.m_Maskable = !!i4781[13]
  i4780.m_Color = new pc.Color(i4781[14], i4781[15], i4781[16], i4781[17])
  i4780.m_RaycastTarget = !!i4781[18]
  i4780.m_RaycastPadding = new pc.Vec4( i4781[19], i4781[20], i4781[21], i4781[22] )
  return i4780
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4782 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4783 = data
  i4782.m_Spacing = i4783[0]
  i4782.m_ChildForceExpandWidth = !!i4783[1]
  i4782.m_ChildForceExpandHeight = !!i4783[2]
  i4782.m_ChildControlWidth = !!i4783[3]
  i4782.m_ChildControlHeight = !!i4783[4]
  i4782.m_ChildScaleWidth = !!i4783[5]
  i4782.m_ChildScaleHeight = !!i4783[6]
  i4782.m_ReverseArrangement = !!i4783[7]
  i4782.m_Padding = UnityEngine.RectOffset.FromPaddings(i4783[8], i4783[9], i4783[10], i4783[11])
  i4782.m_ChildAlignment = i4783[12]
  return i4782
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i4784 = root || request.c( 'UICheckBox' )
  var i4785 = data
  request.r(i4785[0], i4785[1], 0, i4784, 'iconImg')
  request.r(i4785[2], i4785[3], 0, i4784, 'startingSprite')
  return i4784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4787 = data
  i4786.name = i4787[0]
  i4786.tagId = i4787[1]
  i4786.enabled = !!i4787[2]
  i4786.isStatic = !!i4787[3]
  i4786.layer = i4787[4]
  return i4786
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i4788 = root || request.c( 'UnityEngine.UI.Slider' )
  var i4789 = data
  request.r(i4789[0], i4789[1], 0, i4788, 'm_FillRect')
  request.r(i4789[2], i4789[3], 0, i4788, 'm_HandleRect')
  i4788.m_Direction = i4789[4]
  i4788.m_MinValue = i4789[5]
  i4788.m_MaxValue = i4789[6]
  i4788.m_WholeNumbers = !!i4789[7]
  i4788.m_Value = i4789[8]
  i4788.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i4789[9], i4788.m_OnValueChanged)
  i4788.m_Navigation = request.d('UnityEngine.UI.Navigation', i4789[10], i4788.m_Navigation)
  i4788.m_Transition = i4789[11]
  i4788.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4789[12], i4788.m_Colors)
  i4788.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4789[13], i4788.m_SpriteState)
  i4788.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4789[14], i4788.m_AnimationTriggers)
  i4788.m_Interactable = !!i4789[15]
  request.r(i4789[16], i4789[17], 0, i4788, 'm_TargetGraphic')
  return i4788
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i4790 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i4791 = data
  i4790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4791[0], i4790.m_PersistentCalls)
  return i4790
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4792 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4793 = data
  var i4795 = i4793[0]
  var i4794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4795.length; i += 1) {
    i4794.add(request.d('UnityEngine.Events.PersistentCall', i4795[i + 0]));
  }
  i4792.m_Calls = i4794
  return i4792
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4798 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4799 = data
  request.r(i4799[0], i4799[1], 0, i4798, 'm_Target')
  i4798.m_TargetAssemblyTypeName = i4799[2]
  i4798.m_MethodName = i4799[3]
  i4798.m_Mode = i4799[4]
  i4798.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4799[5], i4798.m_Arguments)
  i4798.m_CallState = i4799[6]
  return i4798
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4800 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4801 = data
  i4800.m_Mode = i4801[0]
  i4800.m_WrapAround = !!i4801[1]
  request.r(i4801[2], i4801[3], 0, i4800, 'm_SelectOnUp')
  request.r(i4801[4], i4801[5], 0, i4800, 'm_SelectOnDown')
  request.r(i4801[6], i4801[7], 0, i4800, 'm_SelectOnLeft')
  request.r(i4801[8], i4801[9], 0, i4800, 'm_SelectOnRight')
  return i4800
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4802 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4803 = data
  i4802.m_NormalColor = new pc.Color(i4803[0], i4803[1], i4803[2], i4803[3])
  i4802.m_HighlightedColor = new pc.Color(i4803[4], i4803[5], i4803[6], i4803[7])
  i4802.m_PressedColor = new pc.Color(i4803[8], i4803[9], i4803[10], i4803[11])
  i4802.m_SelectedColor = new pc.Color(i4803[12], i4803[13], i4803[14], i4803[15])
  i4802.m_DisabledColor = new pc.Color(i4803[16], i4803[17], i4803[18], i4803[19])
  i4802.m_ColorMultiplier = i4803[20]
  i4802.m_FadeDuration = i4803[21]
  return i4802
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4804 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4805 = data
  request.r(i4805[0], i4805[1], 0, i4804, 'm_HighlightedSprite')
  request.r(i4805[2], i4805[3], 0, i4804, 'm_PressedSprite')
  request.r(i4805[4], i4805[5], 0, i4804, 'm_SelectedSprite')
  request.r(i4805[6], i4805[7], 0, i4804, 'm_DisabledSprite')
  return i4804
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4806 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4807 = data
  i4806.m_NormalTrigger = i4807[0]
  i4806.m_HighlightedTrigger = i4807[1]
  i4806.m_PressedTrigger = i4807[2]
  i4806.m_SelectedTrigger = i4807[3]
  i4806.m_DisabledTrigger = i4807[4]
  return i4806
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i4808 = root || request.c( 'UIProgressBar' )
  var i4809 = data
  request.r(i4809[0], i4809[1], 0, i4808, 'fillImage')
  request.r(i4809[2], i4809[3], 0, i4808, 'fillBackground')
  return i4808
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i4810 = root || request.c( 'UITutorial' )
  var i4811 = data
  request.r(i4811[0], i4811[1], 0, i4810, 'tutorialUIHolder')
  return i4810
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i4812 = root || request.c( 'UIGuidingMove' )
  var i4813 = data
  request.r(i4813[0], i4813[1], 0, i4812, 'target')
  i4812.startPosition = new pc.Vec2( i4813[2], i4813[3] )
  i4812.endPosition = new pc.Vec2( i4813[4], i4813[5] )
  i4812.duration = i4813[6]
  i4812.ease = i4813[7]
  i4812.resetToStartOnComplete = !!i4813[8]
  i4812.loop = !!i4813[9]
  i4812.loopCount = i4813[10]
  i4812.loopType = i4813[11]
  return i4812
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i4814 = root || request.c( 'UIPulse' )
  var i4815 = data
  i4814.targetScale = new pc.Vec3( i4815[0], i4815[1], i4815[2] )
  i4814.duration = i4815[3]
  i4814.ease = i4815[4]
  return i4814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4817 = data
  i4816.name = i4817[0]
  i4816.width = i4817[1]
  i4816.height = i4817[2]
  i4816.mipmapCount = i4817[3]
  i4816.anisoLevel = i4817[4]
  i4816.filterMode = i4817[5]
  i4816.hdr = !!i4817[6]
  i4816.format = i4817[7]
  i4816.wrapMode = i4817[8]
  i4816.alphaIsTransparency = !!i4817[9]
  i4816.alphaSource = i4817[10]
  i4816.graphicsFormat = i4817[11]
  i4816.sRGBTexture = !!i4817[12]
  i4816.desiredColorSpace = i4817[13]
  i4816.wrapU = i4817[14]
  i4816.wrapV = i4817[15]
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4819 = data
  i4818.name = i4819[0]
  i4818.halfPrecision = !!i4819[1]
  i4818.useSimplification = !!i4819[2]
  i4818.useUInt32IndexFormat = !!i4819[3]
  i4818.vertexCount = i4819[4]
  i4818.aabb = i4819[5]
  var i4821 = i4819[6]
  var i4820 = []
  for(var i = 0; i < i4821.length; i += 1) {
    i4820.push( !!i4821[i + 0] );
  }
  i4818.streams = i4820
  i4818.vertices = i4819[7]
  var i4823 = i4819[8]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 1) {
    i4822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4823[i + 0]) );
  }
  i4818.subMeshes = i4822
  var i4825 = i4819[9]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 16) {
    i4824.push( new pc.Mat4().setData(i4825[i + 0], i4825[i + 1], i4825[i + 2], i4825[i + 3],  i4825[i + 4], i4825[i + 5], i4825[i + 6], i4825[i + 7],  i4825[i + 8], i4825[i + 9], i4825[i + 10], i4825[i + 11],  i4825[i + 12], i4825[i + 13], i4825[i + 14], i4825[i + 15]) );
  }
  i4818.bindposes = i4824
  var i4827 = i4819[10]
  var i4826 = []
  for(var i = 0; i < i4827.length; i += 1) {
    i4826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4827[i + 0]) );
  }
  i4818.blendShapes = i4826
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4833 = data
  i4832.triangles = i4833[0]
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4839 = data
  i4838.name = i4839[0]
  var i4841 = i4839[1]
  var i4840 = []
  for(var i = 0; i < i4841.length; i += 1) {
    i4840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4841[i + 0]) );
  }
  i4838.frames = i4840
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4842 = root || new pc.UnityMaterial()
  var i4843 = data
  i4842.name = i4843[0]
  request.r(i4843[1], i4843[2], 0, i4842, 'shader')
  i4842.renderQueue = i4843[3]
  i4842.enableInstancing = !!i4843[4]
  var i4845 = i4843[5]
  var i4844 = []
  for(var i = 0; i < i4845.length; i += 1) {
    i4844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4845[i + 0]) );
  }
  i4842.floatParameters = i4844
  var i4847 = i4843[6]
  var i4846 = []
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4847[i + 0]) );
  }
  i4842.colorParameters = i4846
  var i4849 = i4843[7]
  var i4848 = []
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4849[i + 0]) );
  }
  i4842.vectorParameters = i4848
  var i4851 = i4843[8]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 1) {
    i4850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4851[i + 0]) );
  }
  i4842.textureParameters = i4850
  var i4853 = i4843[9]
  var i4852 = []
  for(var i = 0; i < i4853.length; i += 1) {
    i4852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4853[i + 0]) );
  }
  i4842.materialFlags = i4852
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4857 = data
  i4856.name = i4857[0]
  i4856.value = i4857[1]
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4861 = data
  i4860.name = i4861[0]
  i4860.value = new pc.Color(i4861[1], i4861[2], i4861[3], i4861[4])
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4865 = data
  i4864.name = i4865[0]
  i4864.value = new pc.Vec4( i4865[1], i4865[2], i4865[3], i4865[4] )
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4869 = data
  i4868.name = i4869[0]
  request.r(i4869[1], i4869[2], 0, i4868, 'value')
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4873 = data
  i4872.name = i4873[0]
  i4872.enabled = !!i4873[1]
  return i4872
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4874 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'm_Texture')
  i4874.m_UVRect = UnityEngine.Rect.MinMaxRect(i4875[2], i4875[3], i4875[4], i4875[5])
  request.r(i4875[6], i4875[7], 0, i4874, 'm_Material')
  i4874.m_Maskable = !!i4875[8]
  i4874.m_Color = new pc.Color(i4875[9], i4875[10], i4875[11], i4875[12])
  i4874.m_RaycastTarget = !!i4875[13]
  i4874.m_RaycastPadding = new pc.Vec4( i4875[14], i4875[15], i4875[16], i4875[17] )
  return i4874
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i4876 = root || request.c( 'ImageScroller' )
  var i4877 = data
  request.r(i4877[0], i4877[1], 0, i4876, 'rawImage')
  i4876.moveVector = new pc.Vec2( i4877[2], i4877[3] )
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4879 = data
  i4878.position = new pc.Vec3( i4879[0], i4879[1], i4879[2] )
  i4878.scale = new pc.Vec3( i4879[3], i4879[4], i4879[5] )
  i4878.rotation = new pc.Quat(i4879[6], i4879[7], i4879[8], i4879[9])
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4881 = data
  request.r(i4881[0], i4881[1], 0, i4880, 'sharedMesh')
  var i4883 = i4881[2]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 2) {
  request.r(i4883[i + 0], i4883[i + 1], 2, i4882, '')
  }
  i4880.bones = i4882
  i4880.updateWhenOffscreen = !!i4881[3]
  i4880.localBounds = i4881[4]
  request.r(i4881[5], i4881[6], 0, i4880, 'rootBone')
  var i4885 = i4881[7]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4885[i + 0]) );
  }
  i4880.blendShapesWeights = i4884
  i4880.enabled = !!i4881[8]
  request.r(i4881[9], i4881[10], 0, i4880, 'sharedMaterial')
  var i4887 = i4881[11]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 2) {
  request.r(i4887[i + 0], i4887[i + 1], 2, i4886, '')
  }
  i4880.sharedMaterials = i4886
  i4880.receiveShadows = !!i4881[12]
  i4880.shadowCastingMode = i4881[13]
  i4880.sortingLayerID = i4881[14]
  i4880.sortingOrder = i4881[15]
  i4880.lightmapIndex = i4881[16]
  i4880.lightmapSceneIndex = i4881[17]
  i4880.lightmapScaleOffset = new pc.Vec4( i4881[18], i4881[19], i4881[20], i4881[21] )
  i4880.lightProbeUsage = i4881[22]
  i4880.reflectionProbeUsage = i4881[23]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4893 = data
  i4892.weight = i4893[0]
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4897 = data
  request.r(i4897[0], i4897[1], 0, i4896, 'animatorController')
  request.r(i4897[2], i4897[3], 0, i4896, 'avatar')
  i4896.updateMode = i4897[4]
  i4896.hasTransformHierarchy = !!i4897[5]
  i4896.applyRootMotion = !!i4897[6]
  var i4899 = i4897[7]
  var i4898 = []
  for(var i = 0; i < i4899.length; i += 2) {
  request.r(i4899[i + 0], i4899[i + 1], 2, i4898, '')
  }
  i4896.humanBones = i4898
  i4896.enabled = !!i4897[8]
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4901 = data
  i4900.name = i4901[0]
  i4900.atlasId = i4901[1]
  i4900.mipmapCount = i4901[2]
  i4900.hdr = !!i4901[3]
  i4900.size = i4901[4]
  i4900.anisoLevel = i4901[5]
  i4900.filterMode = i4901[6]
  var i4903 = i4901[7]
  var i4902 = []
  for(var i = 0; i < i4903.length; i += 4) {
    i4902.push( UnityEngine.Rect.MinMaxRect(i4903[i + 0], i4903[i + 1], i4903[i + 2], i4903[i + 3]) );
  }
  i4900.rects = i4902
  i4900.wrapU = i4901[8]
  i4900.wrapV = i4901[9]
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4907 = data
  i4906.name = i4907[0]
  i4906.index = i4907[1]
  i4906.startup = !!i4907[2]
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4909 = data
  i4908.type = i4909[0]
  i4908.color = new pc.Color(i4909[1], i4909[2], i4909[3], i4909[4])
  i4908.cullingMask = i4909[5]
  i4908.intensity = i4909[6]
  i4908.range = i4909[7]
  i4908.spotAngle = i4909[8]
  i4908.shadows = i4909[9]
  i4908.shadowNormalBias = i4909[10]
  i4908.shadowBias = i4909[11]
  i4908.shadowStrength = i4909[12]
  i4908.shadowResolution = i4909[13]
  i4908.lightmapBakeType = i4909[14]
  i4908.renderMode = i4909[15]
  request.r(i4909[16], i4909[17], 0, i4908, 'cookie')
  i4908.cookieSize = i4909[18]
  i4908.shadowNearPlane = i4909[19]
  i4908.enabled = !!i4909[20]
  return i4908
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i4910 = root || request.c( 'UICheckBoxHolder' )
  var i4911 = data
  var i4913 = i4911[0]
  var i4912 = []
  for(var i = 0; i < i4913.length; i += 2) {
  request.r(i4913[i + 0], i4913[i + 1], 2, i4912, '')
  }
  i4910.uICheckBoxes = i4912
  return i4910
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4916 = root || request.c( 'UnityEngine.UI.Button' )
  var i4917 = data
  i4916.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4917[0], i4916.m_OnClick)
  i4916.m_Navigation = request.d('UnityEngine.UI.Navigation', i4917[1], i4916.m_Navigation)
  i4916.m_Transition = i4917[2]
  i4916.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4917[3], i4916.m_Colors)
  i4916.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4917[4], i4916.m_SpriteState)
  i4916.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4917[5], i4916.m_AnimationTriggers)
  i4916.m_Interactable = !!i4917[6]
  request.r(i4917[7], i4917[8], 0, i4916, 'm_TargetGraphic')
  return i4916
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4918 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4919 = data
  i4918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4919[0], i4918.m_PersistentCalls)
  return i4918
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4920 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4921 = data
  request.r(i4921[0], i4921[1], 0, i4920, 'm_ObjectArgument')
  i4920.m_ObjectArgumentAssemblyTypeName = i4921[2]
  i4920.m_IntArgument = i4921[3]
  i4920.m_FloatArgument = i4921[4]
  i4920.m_StringArgument = i4921[5]
  i4920.m_BoolArgument = !!i4921[6]
  return i4920
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4922 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4923 = data
  request.r(i4923[0], i4923[1], 0, i4922, 'm_FirstSelected')
  i4922.m_sendNavigationEvents = !!i4923[2]
  i4922.m_DragThreshold = i4923[3]
  return i4922
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4924 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4925 = data
  i4924.m_HorizontalAxis = i4925[0]
  i4924.m_VerticalAxis = i4925[1]
  i4924.m_SubmitButton = i4925[2]
  i4924.m_CancelButton = i4925[3]
  i4924.m_InputActionsPerSecond = i4925[4]
  i4924.m_RepeatDelay = i4925[5]
  i4924.m_ForceModuleActive = !!i4925[6]
  i4924.m_SendPointerHoverToParent = !!i4925[7]
  return i4924
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4926 = root || request.c( 'GameManager' )
  var i4927 = data
  request.r(i4927[0], i4927[1], 0, i4926, 'Player')
  i4926.maxLevel = i4927[2]
  i4926.winLevel = i4927[3]
  i4926.totalMoveTime = i4927[4]
  i4926.currentPlayerLevel = i4927[5]
  return i4926
}

Deserializers["InputManager"] = function (request, data, root) {
  var i4928 = root || request.c( 'InputManager' )
  var i4929 = data
  i4928.minimumSwipeDistance = i4929[0]
  return i4928
}

Deserializers["UIManager"] = function (request, data, root) {
  var i4930 = root || request.c( 'UIManager' )
  var i4931 = data
  return i4930
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4932 = root || request.c( 'Ply_SoundManager' )
  var i4933 = data
  i4932.audioClips = request.d('FxAudio', i4933[0], i4932.audioClips)
  request.r(i4933[1], i4933[2], 0, i4932, 'sound')
  i4932.enableSound = !!i4933[3]
  i4932.bgmVolume = i4933[4]
  return i4932
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4934 = root || request.c( 'FxAudio' )
  var i4935 = data
  i4934.Clock = request.d('SoundData', i4935[0], i4934.Clock)
  i4934.PlayerWin = request.d('SoundData', i4935[1], i4934.PlayerWin)
  i4934.PlayerLoose = request.d('SoundData', i4935[2], i4934.PlayerLoose)
  i4934.RightChoice = request.d('SoundData', i4935[3], i4934.RightChoice)
  i4934.WrongChoice = request.d('SoundData', i4935[4], i4934.WrongChoice)
  i4934.MaxLevel = request.d('SoundData', i4935[5], i4934.MaxLevel)
  i4934.FightingCloud = request.d('SoundData', i4935[6], i4934.FightingCloud)
  return i4934
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4936 = root || request.c( 'SoundData' )
  var i4937 = data
  request.r(i4937[0], i4937[1], 0, i4936, 'clip')
  i4936.volume = i4937[2]
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4939 = data
  request.r(i4939[0], i4939[1], 0, i4938, 'clip')
  request.r(i4939[2], i4939[3], 0, i4938, 'outputAudioMixerGroup')
  i4938.playOnAwake = !!i4939[4]
  i4938.loop = !!i4939[5]
  i4938.time = i4939[6]
  i4938.volume = i4939[7]
  i4938.pitch = i4939[8]
  i4938.enabled = !!i4939[9]
  return i4938
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i4940 = root || request.c( 'ProgressTrackingManager' )
  var i4941 = data
  i4940.maxScore = i4941[0]
  request.r(i4941[1], i4941[2], 0, i4940, 'choiceBoardPlacer')
  i4940.currentScore = i4941[3]
  i4940.currentPercent = i4941[4]
  return i4940
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i4942 = root || request.c( 'PlayerController' )
  var i4943 = data
  request.r(i4943[0], i4943[1], 0, i4942, 'endPos')
  i4942.switchTrackTime = i4943[2]
  request.r(i4943[3], i4943[4], 0, i4942, 'trackRightTransform')
  request.r(i4943[5], i4943[6], 0, i4942, 'trackLeftTransform')
  i4942.startRight = !!i4943[7]
  request.r(i4943[8], i4943[9], 0, i4942, 'playerTransform')
  request.r(i4943[10], i4943[11], 0, i4942, 'playerVisual')
  request.r(i4943[12], i4943[13], 0, i4942, 'winPar')
  i4942.currentLevel = i4943[14]
  i4942.dragSmoothSpeed = i4943[15]
  i4942.moveCurve = new pc.AnimationCurve( { keys_flow: i4943[16] } )
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4945 = data
  i4944.aspect = i4945[0]
  i4944.orthographic = !!i4945[1]
  i4944.orthographicSize = i4945[2]
  i4944.backgroundColor = new pc.Color(i4945[3], i4945[4], i4945[5], i4945[6])
  i4944.nearClipPlane = i4945[7]
  i4944.farClipPlane = i4945[8]
  i4944.fieldOfView = i4945[9]
  i4944.depth = i4945[10]
  i4944.clearFlags = i4945[11]
  i4944.cullingMask = i4945[12]
  i4944.rect = i4945[13]
  request.r(i4945[14], i4945[15], 0, i4944, 'targetTexture')
  i4944.usePhysicalProperties = !!i4945[16]
  i4944.focalLength = i4945[17]
  i4944.sensorSize = new pc.Vec2( i4945[18], i4945[19] )
  i4944.lensShift = new pc.Vec2( i4945[20], i4945[21] )
  i4944.gateFit = i4945[22]
  i4944.commandBufferCount = i4945[23]
  i4944.cameraType = i4945[24]
  i4944.enabled = !!i4945[25]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4947 = data
  request.r(i4947[0], i4947[1], 0, i4946, 'sharedMesh')
  return i4946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4949 = data
  request.r(i4949[0], i4949[1], 0, i4948, 'additionalVertexStreams')
  i4948.enabled = !!i4949[2]
  request.r(i4949[3], i4949[4], 0, i4948, 'sharedMaterial')
  var i4951 = i4949[5]
  var i4950 = []
  for(var i = 0; i < i4951.length; i += 2) {
  request.r(i4951[i + 0], i4951[i + 1], 2, i4950, '')
  }
  i4948.sharedMaterials = i4950
  i4948.receiveShadows = !!i4949[6]
  i4948.shadowCastingMode = i4949[7]
  i4948.sortingLayerID = i4949[8]
  i4948.sortingOrder = i4949[9]
  i4948.lightmapIndex = i4949[10]
  i4948.lightmapSceneIndex = i4949[11]
  i4948.lightmapScaleOffset = new pc.Vec4( i4949[12], i4949[13], i4949[14], i4949[15] )
  i4948.lightProbeUsage = i4949[16]
  i4948.reflectionProbeUsage = i4949[17]
  return i4948
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i4952 = root || request.c( 'MaterialUVScroller' )
  var i4953 = data
  request.r(i4953[0], i4953[1], 0, i4952, 'targetMaterial')
  i4952.scrollSpeed = new pc.Vec2( i4953[2], i4953[3] )
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4955 = data
  i4954.color = new pc.Color(i4955[0], i4955[1], i4955[2], i4955[3])
  request.r(i4955[4], i4955[5], 0, i4954, 'sprite')
  i4954.flipX = !!i4955[6]
  i4954.flipY = !!i4955[7]
  i4954.drawMode = i4955[8]
  i4954.size = new pc.Vec2( i4955[9], i4955[10] )
  i4954.tileMode = i4955[11]
  i4954.adaptiveModeThreshold = i4955[12]
  i4954.maskInteraction = i4955[13]
  i4954.spriteSortPoint = i4955[14]
  i4954.enabled = !!i4955[15]
  request.r(i4955[16], i4955[17], 0, i4954, 'sharedMaterial')
  var i4957 = i4955[18]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 2) {
  request.r(i4957[i + 0], i4957[i + 1], 2, i4956, '')
  }
  i4954.sharedMaterials = i4956
  i4954.receiveShadows = !!i4955[19]
  i4954.shadowCastingMode = i4955[20]
  i4954.sortingLayerID = i4955[21]
  i4954.sortingOrder = i4955[22]
  i4954.lightmapIndex = i4955[23]
  i4954.lightmapSceneIndex = i4955[24]
  i4954.lightmapScaleOffset = new pc.Vec4( i4955[25], i4955[26], i4955[27], i4955[28] )
  i4954.lightProbeUsage = i4955[29]
  i4954.reflectionProbeUsage = i4955[30]
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4959 = data
  i4958.center = new pc.Vec3( i4959[0], i4959[1], i4959[2] )
  i4958.size = new pc.Vec3( i4959[3], i4959[4], i4959[5] )
  i4958.enabled = !!i4959[6]
  i4958.isTrigger = !!i4959[7]
  request.r(i4959[8], i4959[9], 0, i4958, 'material')
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4961 = data
  i4960.ambientIntensity = i4961[0]
  i4960.reflectionIntensity = i4961[1]
  i4960.ambientMode = i4961[2]
  i4960.ambientLight = new pc.Color(i4961[3], i4961[4], i4961[5], i4961[6])
  i4960.ambientSkyColor = new pc.Color(i4961[7], i4961[8], i4961[9], i4961[10])
  i4960.ambientGroundColor = new pc.Color(i4961[11], i4961[12], i4961[13], i4961[14])
  i4960.ambientEquatorColor = new pc.Color(i4961[15], i4961[16], i4961[17], i4961[18])
  i4960.fogColor = new pc.Color(i4961[19], i4961[20], i4961[21], i4961[22])
  i4960.fogEndDistance = i4961[23]
  i4960.fogStartDistance = i4961[24]
  i4960.fogDensity = i4961[25]
  i4960.fog = !!i4961[26]
  request.r(i4961[27], i4961[28], 0, i4960, 'skybox')
  i4960.fogMode = i4961[29]
  var i4963 = i4961[30]
  var i4962 = []
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4963[i + 0]) );
  }
  i4960.lightmaps = i4962
  i4960.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4961[31], i4960.lightProbes)
  i4960.lightmapsMode = i4961[32]
  i4960.mixedBakeMode = i4961[33]
  i4960.environmentLightingMode = i4961[34]
  i4960.ambientProbe = new pc.SphericalHarmonicsL2(i4961[35])
  i4960.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4961[36])
  i4960.useReferenceAmbientProbe = !!i4961[37]
  request.r(i4961[38], i4961[39], 0, i4960, 'customReflection')
  request.r(i4961[40], i4961[41], 0, i4960, 'defaultReflection')
  i4960.defaultReflectionMode = i4961[42]
  i4960.defaultReflectionResolution = i4961[43]
  i4960.sunLightObjectId = i4961[44]
  i4960.pixelLightCount = i4961[45]
  i4960.defaultReflectionHDR = !!i4961[46]
  i4960.hasLightDataAsset = !!i4961[47]
  i4960.hasManualGenerate = !!i4961[48]
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4967 = data
  request.r(i4967[0], i4967[1], 0, i4966, 'lightmapColor')
  request.r(i4967[2], i4967[3], 0, i4966, 'lightmapDirection')
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4968 = root || new UnityEngine.LightProbes()
  var i4969 = data
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4977 = data
  var i4979 = i4977[0]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4979[i + 0]));
  }
  i4976.ShaderCompilationErrors = i4978
  i4976.name = i4977[1]
  i4976.guid = i4977[2]
  var i4981 = i4977[3]
  var i4980 = []
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.push( i4981[i + 0] );
  }
  i4976.shaderDefinedKeywords = i4980
  var i4983 = i4977[4]
  var i4982 = []
  for(var i = 0; i < i4983.length; i += 1) {
    i4982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4983[i + 0]) );
  }
  i4976.passes = i4982
  var i4985 = i4977[5]
  var i4984 = []
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4985[i + 0]) );
  }
  i4976.usePasses = i4984
  var i4987 = i4977[6]
  var i4986 = []
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4987[i + 0]) );
  }
  i4976.defaultParameterValues = i4986
  request.r(i4977[7], i4977[8], 0, i4976, 'unityFallbackShader')
  i4976.readDepth = !!i4977[9]
  i4976.hasDepthOnlyPass = !!i4977[10]
  i4976.isCreatedByShaderGraph = !!i4977[11]
  i4976.disableBatching = !!i4977[12]
  i4976.compiled = !!i4977[13]
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4991 = data
  i4990.shaderName = i4991[0]
  i4990.errorMessage = i4991[1]
  return i4990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4996 = root || new pc.UnityShaderPass()
  var i4997 = data
  i4996.id = i4997[0]
  i4996.subShaderIndex = i4997[1]
  i4996.name = i4997[2]
  i4996.passType = i4997[3]
  i4996.grabPassTextureName = i4997[4]
  i4996.usePass = !!i4997[5]
  i4996.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[6], i4996.zTest)
  i4996.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[7], i4996.zWrite)
  i4996.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[8], i4996.culling)
  i4996.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4997[9], i4996.blending)
  i4996.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4997[10], i4996.alphaBlending)
  i4996.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[11], i4996.colorWriteMask)
  i4996.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[12], i4996.offsetUnits)
  i4996.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[13], i4996.offsetFactor)
  i4996.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[14], i4996.stencilRef)
  i4996.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[15], i4996.stencilReadMask)
  i4996.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4997[16], i4996.stencilWriteMask)
  i4996.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4997[17], i4996.stencilOp)
  i4996.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4997[18], i4996.stencilOpFront)
  i4996.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4997[19], i4996.stencilOpBack)
  var i4999 = i4997[20]
  var i4998 = []
  for(var i = 0; i < i4999.length; i += 1) {
    i4998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4999[i + 0]) );
  }
  i4996.tags = i4998
  var i5001 = i4997[21]
  var i5000 = []
  for(var i = 0; i < i5001.length; i += 1) {
    i5000.push( i5001[i + 0] );
  }
  i4996.passDefinedKeywords = i5000
  var i5003 = i4997[22]
  var i5002 = []
  for(var i = 0; i < i5003.length; i += 1) {
    i5002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5003[i + 0]) );
  }
  i4996.passDefinedKeywordGroups = i5002
  var i5005 = i4997[23]
  var i5004 = []
  for(var i = 0; i < i5005.length; i += 1) {
    i5004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5005[i + 0]) );
  }
  i4996.variants = i5004
  var i5007 = i4997[24]
  var i5006 = []
  for(var i = 0; i < i5007.length; i += 1) {
    i5006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5007[i + 0]) );
  }
  i4996.excludedVariants = i5006
  i4996.hasDepthReader = !!i4997[25]
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5009 = data
  i5008.val = i5009[0]
  i5008.name = i5009[1]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5011 = data
  i5010.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5011[0], i5010.src)
  i5010.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5011[1], i5010.dst)
  i5010.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5011[2], i5010.op)
  return i5010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5013 = data
  i5012.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5013[0], i5012.pass)
  i5012.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5013[1], i5012.fail)
  i5012.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5013[2], i5012.zFail)
  i5012.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5013[3], i5012.comp)
  return i5012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5017 = data
  i5016.name = i5017[0]
  i5016.value = i5017[1]
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5021 = data
  var i5023 = i5021[0]
  var i5022 = []
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.push( i5023[i + 0] );
  }
  i5020.keywords = i5022
  i5020.hasDiscard = !!i5021[1]
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5027 = data
  i5026.passId = i5027[0]
  i5026.subShaderIndex = i5027[1]
  var i5029 = i5027[2]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.push( i5029[i + 0] );
  }
  i5026.keywords = i5028
  i5026.vertexProgram = i5027[3]
  i5026.fragmentProgram = i5027[4]
  i5026.exportedForWebGl2 = !!i5027[5]
  i5026.readDepth = !!i5027[6]
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5033 = data
  request.r(i5033[0], i5033[1], 0, i5032, 'shader')
  i5032.pass = i5033[2]
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5037 = data
  i5036.name = i5037[0]
  i5036.type = i5037[1]
  i5036.value = new pc.Vec4( i5037[2], i5037[3], i5037[4], i5037[5] )
  i5036.textureValue = i5037[6]
  i5036.shaderPropertyFlag = i5037[7]
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5039 = data
  i5038.name = i5039[0]
  request.r(i5039[1], i5039[2], 0, i5038, 'texture')
  i5038.aabb = i5039[3]
  i5038.vertices = i5039[4]
  i5038.triangles = i5039[5]
  i5038.textureRect = UnityEngine.Rect.MinMaxRect(i5039[6], i5039[7], i5039[8], i5039[9])
  i5038.packedRect = UnityEngine.Rect.MinMaxRect(i5039[10], i5039[11], i5039[12], i5039[13])
  i5038.border = new pc.Vec4( i5039[14], i5039[15], i5039[16], i5039[17] )
  i5038.transparency = i5039[18]
  i5038.bounds = i5039[19]
  i5038.pixelsPerUnit = i5039[20]
  i5038.textureWidth = i5039[21]
  i5038.textureHeight = i5039[22]
  i5038.nativeSize = new pc.Vec2( i5039[23], i5039[24] )
  i5038.pivot = new pc.Vec2( i5039[25], i5039[26] )
  i5038.textureRectOffset = new pc.Vec2( i5039[27], i5039[28] )
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5041 = data
  i5040.name = i5041[0]
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5043 = data
  i5042.name = i5043[0]
  i5042.wrapMode = i5043[1]
  i5042.isLooping = !!i5043[2]
  i5042.length = i5043[3]
  var i5045 = i5043[4]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5045[i + 0]) );
  }
  i5042.curves = i5044
  var i5047 = i5043[5]
  var i5046 = []
  for(var i = 0; i < i5047.length; i += 1) {
    i5046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5047[i + 0]) );
  }
  i5042.events = i5046
  i5042.halfPrecision = !!i5043[6]
  i5042._frameRate = i5043[7]
  i5042.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5043[8], i5042.localBounds)
  i5042.hasMuscleCurves = !!i5043[9]
  var i5049 = i5043[10]
  var i5048 = []
  for(var i = 0; i < i5049.length; i += 1) {
    i5048.push( i5049[i + 0] );
  }
  i5042.clipMuscleConstant = i5048
  i5042.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5043[11], i5042.clipBindingConstant)
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5053 = data
  i5052.path = i5053[0]
  i5052.hash = i5053[1]
  i5052.componentType = i5053[2]
  i5052.property = i5053[3]
  i5052.keys = i5053[4]
  var i5055 = i5053[5]
  var i5054 = []
  for(var i = 0; i < i5055.length; i += 1) {
    i5054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5055[i + 0]) );
  }
  i5052.objectReferenceKeys = i5054
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5059 = data
  i5058.time = i5059[0]
  request.r(i5059[1], i5059[2], 0, i5058, 'value')
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5063 = data
  i5062.functionName = i5063[0]
  i5062.floatParameter = i5063[1]
  i5062.intParameter = i5063[2]
  i5062.stringParameter = i5063[3]
  request.r(i5063[4], i5063[5], 0, i5062, 'objectReferenceParameter')
  i5062.time = i5063[6]
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5065 = data
  i5064.center = new pc.Vec3( i5065[0], i5065[1], i5065[2] )
  i5064.extends = new pc.Vec3( i5065[3], i5065[4], i5065[5] )
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5069 = data
  var i5071 = i5069[0]
  var i5070 = []
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.push( i5071[i + 0] );
  }
  i5068.genericBindings = i5070
  var i5073 = i5069[1]
  var i5072 = []
  for(var i = 0; i < i5073.length; i += 1) {
    i5072.push( i5073[i + 0] );
  }
  i5068.pptrCurveMapping = i5072
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5075 = data
  i5074.name = i5075[0]
  var i5077 = i5075[1]
  var i5076 = []
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5077[i + 0]) );
  }
  i5074.layers = i5076
  var i5079 = i5075[2]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5079[i + 0]) );
  }
  i5074.parameters = i5078
  i5074.animationClips = i5075[3]
  i5074.avatarUnsupported = i5075[4]
  return i5074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5083 = data
  i5082.name = i5083[0]
  i5082.defaultWeight = i5083[1]
  i5082.blendingMode = i5083[2]
  i5082.avatarMask = i5083[3]
  i5082.syncedLayerIndex = i5083[4]
  i5082.syncedLayerAffectsTiming = !!i5083[5]
  i5082.syncedLayers = i5083[6]
  i5082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5083[7], i5082.stateMachine)
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5085 = data
  i5084.id = i5085[0]
  i5084.name = i5085[1]
  i5084.path = i5085[2]
  var i5087 = i5085[3]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5087[i + 0]) );
  }
  i5084.states = i5086
  var i5089 = i5085[4]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5089[i + 0]) );
  }
  i5084.machines = i5088
  var i5091 = i5085[5]
  var i5090 = []
  for(var i = 0; i < i5091.length; i += 1) {
    i5090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5091[i + 0]) );
  }
  i5084.entryStateTransitions = i5090
  var i5093 = i5085[6]
  var i5092 = []
  for(var i = 0; i < i5093.length; i += 1) {
    i5092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5093[i + 0]) );
  }
  i5084.exitStateTransitions = i5092
  var i5095 = i5085[7]
  var i5094 = []
  for(var i = 0; i < i5095.length; i += 1) {
    i5094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5095[i + 0]) );
  }
  i5084.anyStateTransitions = i5094
  i5084.defaultStateId = i5085[8]
  return i5084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5099 = data
  i5098.id = i5099[0]
  i5098.name = i5099[1]
  i5098.cycleOffset = i5099[2]
  i5098.cycleOffsetParameter = i5099[3]
  i5098.cycleOffsetParameterActive = !!i5099[4]
  i5098.mirror = !!i5099[5]
  i5098.mirrorParameter = i5099[6]
  i5098.mirrorParameterActive = !!i5099[7]
  i5098.motionId = i5099[8]
  i5098.nameHash = i5099[9]
  i5098.fullPathHash = i5099[10]
  i5098.speed = i5099[11]
  i5098.speedParameter = i5099[12]
  i5098.speedParameterActive = !!i5099[13]
  i5098.tag = i5099[14]
  i5098.tagHash = i5099[15]
  i5098.writeDefaultValues = !!i5099[16]
  var i5101 = i5099[17]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 2) {
  request.r(i5101[i + 0], i5101[i + 1], 2, i5100, '')
  }
  i5098.behaviours = i5100
  var i5103 = i5099[18]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5103[i + 0]) );
  }
  i5098.transitions = i5102
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5109 = data
  i5108.fullPath = i5109[0]
  i5108.canTransitionToSelf = !!i5109[1]
  i5108.duration = i5109[2]
  i5108.exitTime = i5109[3]
  i5108.hasExitTime = !!i5109[4]
  i5108.hasFixedDuration = !!i5109[5]
  i5108.interruptionSource = i5109[6]
  i5108.offset = i5109[7]
  i5108.orderedInterruption = !!i5109[8]
  i5108.destinationStateId = i5109[9]
  i5108.isExit = !!i5109[10]
  i5108.mute = !!i5109[11]
  i5108.solo = !!i5109[12]
  var i5111 = i5109[13]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5111[i + 0]) );
  }
  i5108.conditions = i5110
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5117 = data
  i5116.destinationStateId = i5117[0]
  i5116.isExit = !!i5117[1]
  i5116.mute = !!i5117[2]
  i5116.solo = !!i5117[3]
  var i5119 = i5117[4]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5119[i + 0]) );
  }
  i5116.conditions = i5118
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5123 = data
  i5122.defaultBool = !!i5123[0]
  i5122.defaultFloat = i5123[1]
  i5122.defaultInt = i5123[2]
  i5122.name = i5123[3]
  i5122.nameHash = i5123[4]
  i5122.type = i5123[5]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5125 = data
  i5124.name = i5125[0]
  i5124.bytes64 = i5125[1]
  i5124.data = i5125[2]
  return i5124
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5126 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5127 = data
  i5126.useSafeMode = !!i5127[0]
  i5126.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5127[1], i5126.safeModeOptions)
  i5126.timeScale = i5127[2]
  i5126.unscaledTimeScale = i5127[3]
  i5126.useSmoothDeltaTime = !!i5127[4]
  i5126.maxSmoothUnscaledTime = i5127[5]
  i5126.rewindCallbackMode = i5127[6]
  i5126.showUnityEditorReport = !!i5127[7]
  i5126.logBehaviour = i5127[8]
  i5126.drawGizmos = !!i5127[9]
  i5126.defaultRecyclable = !!i5127[10]
  i5126.defaultAutoPlay = i5127[11]
  i5126.defaultUpdateType = i5127[12]
  i5126.defaultTimeScaleIndependent = !!i5127[13]
  i5126.defaultEaseType = i5127[14]
  i5126.defaultEaseOvershootOrAmplitude = i5127[15]
  i5126.defaultEasePeriod = i5127[16]
  i5126.defaultAutoKill = !!i5127[17]
  i5126.defaultLoopType = i5127[18]
  i5126.debugMode = !!i5127[19]
  i5126.debugStoreTargetId = !!i5127[20]
  i5126.showPreviewPanel = !!i5127[21]
  i5126.storeSettingsLocation = i5127[22]
  i5126.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5127[23], i5126.modules)
  i5126.createASMDEF = !!i5127[24]
  i5126.showPlayingTweens = !!i5127[25]
  i5126.showPausedTweens = !!i5127[26]
  return i5126
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5128 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5129 = data
  i5128.logBehaviour = i5129[0]
  i5128.nestedTweenFailureBehaviour = i5129[1]
  return i5128
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5130 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5131 = data
  i5130.showPanel = !!i5131[0]
  i5130.audioEnabled = !!i5131[1]
  i5130.physicsEnabled = !!i5131[2]
  i5130.physics2DEnabled = !!i5131[3]
  i5130.spriteEnabled = !!i5131[4]
  i5130.uiEnabled = !!i5131[5]
  i5130.uiToolkitEnabled = !!i5131[6]
  i5130.textMeshProEnabled = !!i5131[7]
  i5130.tk2DEnabled = !!i5131[8]
  i5130.deAudioEnabled = !!i5131[9]
  i5130.deUnityExtendedEnabled = !!i5131[10]
  i5130.epoOutlineEnabled = !!i5131[11]
  return i5130
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5132 = root || request.c( 'TMPro.TMP_Settings' )
  var i5133 = data
  i5132.assetVersion = i5133[0]
  i5132.m_TextWrappingMode = i5133[1]
  i5132.m_enableKerning = !!i5133[2]
  var i5135 = i5133[3]
  var i5134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.add(i5135[i + 0]);
  }
  i5132.m_ActiveFontFeatures = i5134
  i5132.m_enableExtraPadding = !!i5133[4]
  i5132.m_enableTintAllSprites = !!i5133[5]
  i5132.m_enableParseEscapeCharacters = !!i5133[6]
  i5132.m_EnableRaycastTarget = !!i5133[7]
  i5132.m_GetFontFeaturesAtRuntime = !!i5133[8]
  i5132.m_missingGlyphCharacter = i5133[9]
  i5132.m_ClearDynamicDataOnBuild = !!i5133[10]
  i5132.m_warningsDisabled = !!i5133[11]
  request.r(i5133[12], i5133[13], 0, i5132, 'm_defaultFontAsset')
  i5132.m_defaultFontAssetPath = i5133[14]
  i5132.m_defaultFontSize = i5133[15]
  i5132.m_defaultAutoSizeMinRatio = i5133[16]
  i5132.m_defaultAutoSizeMaxRatio = i5133[17]
  i5132.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5133[18], i5133[19] )
  i5132.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5133[20], i5133[21] )
  i5132.m_autoSizeTextContainer = !!i5133[22]
  i5132.m_IsTextObjectScaleStatic = !!i5133[23]
  var i5137 = i5133[24]
  var i5136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5137.length; i += 2) {
  request.r(i5137[i + 0], i5137[i + 1], 1, i5136, '')
  }
  i5132.m_fallbackFontAssets = i5136
  i5132.m_matchMaterialPreset = !!i5133[25]
  i5132.m_HideSubTextObjects = !!i5133[26]
  request.r(i5133[27], i5133[28], 0, i5132, 'm_defaultSpriteAsset')
  i5132.m_defaultSpriteAssetPath = i5133[29]
  i5132.m_enableEmojiSupport = !!i5133[30]
  i5132.m_MissingCharacterSpriteUnicode = i5133[31]
  var i5139 = i5133[32]
  var i5138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5139.length; i += 2) {
  request.r(i5139[i + 0], i5139[i + 1], 1, i5138, '')
  }
  i5132.m_EmojiFallbackTextAssets = i5138
  i5132.m_defaultColorGradientPresetsPath = i5133[33]
  request.r(i5133[34], i5133[35], 0, i5132, 'm_defaultStyleSheet')
  i5132.m_StyleSheetsResourcePath = i5133[36]
  request.r(i5133[37], i5133[38], 0, i5132, 'm_leadingCharacters')
  request.r(i5133[39], i5133[40], 0, i5132, 'm_followingCharacters')
  i5132.m_UseModernHangulLineBreakingRules = !!i5133[41]
  return i5132
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5146 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5147 = data
  request.r(i5147[0], i5147[1], 0, i5146, 'spriteSheet')
  var i5149 = i5147[2]
  var i5148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.add(request.d('TMPro.TMP_Sprite', i5149[i + 0]));
  }
  i5146.spriteInfoList = i5148
  var i5151 = i5147[3]
  var i5150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5151.length; i += 2) {
  request.r(i5151[i + 0], i5151[i + 1], 1, i5150, '')
  }
  i5146.fallbackSpriteAssets = i5150
  var i5153 = i5147[4]
  var i5152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.add(request.d('TMPro.TMP_SpriteCharacter', i5153[i + 0]));
  }
  i5146.m_SpriteCharacterTable = i5152
  var i5155 = i5147[5]
  var i5154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.add(request.d('TMPro.TMP_SpriteGlyph', i5155[i + 0]));
  }
  i5146.m_GlyphTable = i5154
  i5146.m_Version = i5147[6]
  i5146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5147[7], i5146.m_FaceInfo)
  request.r(i5147[8], i5147[9], 0, i5146, 'm_Material')
  return i5146
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5158 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5159 = data
  i5158.name = i5159[0]
  i5158.hashCode = i5159[1]
  i5158.unicode = i5159[2]
  i5158.pivot = new pc.Vec2( i5159[3], i5159[4] )
  request.r(i5159[5], i5159[6], 0, i5158, 'sprite')
  i5158.id = i5159[7]
  i5158.x = i5159[8]
  i5158.y = i5159[9]
  i5158.width = i5159[10]
  i5158.height = i5159[11]
  i5158.xOffset = i5159[12]
  i5158.yOffset = i5159[13]
  i5158.xAdvance = i5159[14]
  i5158.scale = i5159[15]
  return i5158
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5164 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5165 = data
  i5164.m_Name = i5165[0]
  i5164.m_ElementType = i5165[1]
  i5164.m_Unicode = i5165[2]
  i5164.m_GlyphIndex = i5165[3]
  i5164.m_Scale = i5165[4]
  return i5164
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5168 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5169 = data
  request.r(i5169[0], i5169[1], 0, i5168, 'sprite')
  i5168.m_Index = i5169[2]
  i5168.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5169[3], i5168.m_Metrics)
  i5168.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5169[4], i5168.m_GlyphRect)
  i5168.m_Scale = i5169[5]
  i5168.m_AtlasIndex = i5169[6]
  i5168.m_ClassDefinitionType = i5169[7]
  return i5168
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5170 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5171 = data
  i5170.m_Width = i5171[0]
  i5170.m_Height = i5171[1]
  i5170.m_HorizontalBearingX = i5171[2]
  i5170.m_HorizontalBearingY = i5171[3]
  i5170.m_HorizontalAdvance = i5171[4]
  return i5170
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5172 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5173 = data
  i5172.m_X = i5173[0]
  i5172.m_Y = i5173[1]
  i5172.m_Width = i5173[2]
  i5172.m_Height = i5173[3]
  return i5172
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5174 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5175 = data
  i5174.m_FaceIndex = i5175[0]
  i5174.m_FamilyName = i5175[1]
  i5174.m_StyleName = i5175[2]
  i5174.m_PointSize = i5175[3]
  i5174.m_Scale = i5175[4]
  i5174.m_UnitsPerEM = i5175[5]
  i5174.m_LineHeight = i5175[6]
  i5174.m_AscentLine = i5175[7]
  i5174.m_CapLine = i5175[8]
  i5174.m_MeanLine = i5175[9]
  i5174.m_Baseline = i5175[10]
  i5174.m_DescentLine = i5175[11]
  i5174.m_SuperscriptOffset = i5175[12]
  i5174.m_SuperscriptSize = i5175[13]
  i5174.m_SubscriptOffset = i5175[14]
  i5174.m_SubscriptSize = i5175[15]
  i5174.m_UnderlineOffset = i5175[16]
  i5174.m_UnderlineThickness = i5175[17]
  i5174.m_StrikethroughOffset = i5175[18]
  i5174.m_StrikethroughThickness = i5175[19]
  i5174.m_TabWidth = i5175[20]
  return i5174
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5176 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5177 = data
  var i5179 = i5177[0]
  var i5178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5179.length; i += 1) {
    i5178.add(request.d('TMPro.TMP_Style', i5179[i + 0]));
  }
  i5176.m_StyleList = i5178
  return i5176
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5182 = root || request.c( 'TMPro.TMP_Style' )
  var i5183 = data
  i5182.m_Name = i5183[0]
  i5182.m_HashCode = i5183[1]
  i5182.m_OpeningDefinition = i5183[2]
  i5182.m_ClosingDefinition = i5183[3]
  i5182.m_OpeningTagArray = i5183[4]
  i5182.m_ClosingTagArray = i5183[5]
  return i5182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5185 = data
  var i5187 = i5185[0]
  var i5186 = []
  for(var i = 0; i < i5187.length; i += 1) {
    i5186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5187[i + 0]) );
  }
  i5184.files = i5186
  i5184.componentToPrefabIds = i5185[1]
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5191 = data
  i5190.path = i5191[0]
  request.r(i5191[1], i5191[2], 0, i5190, 'unityObject')
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5193 = data
  var i5195 = i5193[0]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5195[i + 0]) );
  }
  i5192.scriptsExecutionOrder = i5194
  var i5197 = i5193[1]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 1) {
    i5196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5197[i + 0]) );
  }
  i5192.sortingLayers = i5196
  var i5199 = i5193[2]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5199[i + 0]) );
  }
  i5192.cullingLayers = i5198
  i5192.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5193[3], i5192.timeSettings)
  i5192.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5193[4], i5192.physicsSettings)
  i5192.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5193[5], i5192.physics2DSettings)
  i5192.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5193[6], i5192.qualitySettings)
  i5192.enableRealtimeShadows = !!i5193[7]
  i5192.enableAutoInstancing = !!i5193[8]
  i5192.enableStaticBatching = !!i5193[9]
  i5192.enableDynamicBatching = !!i5193[10]
  i5192.lightmapEncodingQuality = i5193[11]
  i5192.desiredColorSpace = i5193[12]
  var i5201 = i5193[13]
  var i5200 = []
  for(var i = 0; i < i5201.length; i += 1) {
    i5200.push( i5201[i + 0] );
  }
  i5192.allTags = i5200
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5205 = data
  i5204.name = i5205[0]
  i5204.value = i5205[1]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5209 = data
  i5208.id = i5209[0]
  i5208.name = i5209[1]
  i5208.value = i5209[2]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5213 = data
  i5212.id = i5213[0]
  i5212.name = i5213[1]
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5215 = data
  i5214.fixedDeltaTime = i5215[0]
  i5214.maximumDeltaTime = i5215[1]
  i5214.timeScale = i5215[2]
  i5214.maximumParticleTimestep = i5215[3]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5217 = data
  i5216.gravity = new pc.Vec3( i5217[0], i5217[1], i5217[2] )
  i5216.defaultSolverIterations = i5217[3]
  i5216.bounceThreshold = i5217[4]
  i5216.autoSyncTransforms = !!i5217[5]
  i5216.autoSimulation = !!i5217[6]
  var i5219 = i5217[7]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5219[i + 0]) );
  }
  i5216.collisionMatrix = i5218
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5223 = data
  i5222.enabled = !!i5223[0]
  i5222.layerId = i5223[1]
  i5222.otherLayerId = i5223[2]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5225 = data
  request.r(i5225[0], i5225[1], 0, i5224, 'material')
  i5224.gravity = new pc.Vec2( i5225[2], i5225[3] )
  i5224.positionIterations = i5225[4]
  i5224.velocityIterations = i5225[5]
  i5224.velocityThreshold = i5225[6]
  i5224.maxLinearCorrection = i5225[7]
  i5224.maxAngularCorrection = i5225[8]
  i5224.maxTranslationSpeed = i5225[9]
  i5224.maxRotationSpeed = i5225[10]
  i5224.baumgarteScale = i5225[11]
  i5224.baumgarteTOIScale = i5225[12]
  i5224.timeToSleep = i5225[13]
  i5224.linearSleepTolerance = i5225[14]
  i5224.angularSleepTolerance = i5225[15]
  i5224.defaultContactOffset = i5225[16]
  i5224.autoSimulation = !!i5225[17]
  i5224.queriesHitTriggers = !!i5225[18]
  i5224.queriesStartInColliders = !!i5225[19]
  i5224.callbacksOnDisable = !!i5225[20]
  i5224.reuseCollisionCallbacks = !!i5225[21]
  i5224.autoSyncTransforms = !!i5225[22]
  var i5227 = i5225[23]
  var i5226 = []
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5227[i + 0]) );
  }
  i5224.collisionMatrix = i5226
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5231 = data
  i5230.enabled = !!i5231[0]
  i5230.layerId = i5231[1]
  i5230.otherLayerId = i5231[2]
  return i5230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5233 = data
  var i5235 = i5233[0]
  var i5234 = []
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5235[i + 0]) );
  }
  i5232.qualityLevels = i5234
  var i5237 = i5233[1]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.push( i5237[i + 0] );
  }
  i5232.names = i5236
  i5232.shadows = i5233[2]
  i5232.anisotropicFiltering = i5233[3]
  i5232.antiAliasing = i5233[4]
  i5232.lodBias = i5233[5]
  i5232.shadowCascades = i5233[6]
  i5232.shadowDistance = i5233[7]
  i5232.shadowmaskMode = i5233[8]
  i5232.shadowProjection = i5233[9]
  i5232.shadowResolution = i5233[10]
  i5232.softParticles = !!i5233[11]
  i5232.softVegetation = !!i5233[12]
  i5232.activeColorSpace = i5233[13]
  i5232.desiredColorSpace = i5233[14]
  i5232.masterTextureLimit = i5233[15]
  i5232.maxQueuedFrames = i5233[16]
  i5232.particleRaycastBudget = i5233[17]
  i5232.pixelLightCount = i5233[18]
  i5232.realtimeReflectionProbes = !!i5233[19]
  i5232.shadowCascade2Split = i5233[20]
  i5232.shadowCascade4Split = new pc.Vec3( i5233[21], i5233[22], i5233[23] )
  i5232.streamingMipmapsActive = !!i5233[24]
  i5232.vSyncCount = i5233[25]
  i5232.asyncUploadBufferSize = i5233[26]
  i5232.asyncUploadTimeSlice = i5233[27]
  i5232.billboardsFaceCameraPosition = !!i5233[28]
  i5232.shadowNearPlaneOffset = i5233[29]
  i5232.streamingMipmapsMemoryBudget = i5233[30]
  i5232.maximumLODLevel = i5233[31]
  i5232.streamingMipmapsAddAllCameras = !!i5233[32]
  i5232.streamingMipmapsMaxLevelReduction = i5233[33]
  i5232.streamingMipmapsRenderersPerFrame = i5233[34]
  i5232.resolutionScalingFixedDPIFactor = i5233[35]
  i5232.streamingMipmapsMaxFileIORequests = i5233[36]
  i5232.currentQualityLevel = i5233[37]
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5243 = data
  i5242.weight = i5243[0]
  i5242.vertices = i5243[1]
  i5242.normals = i5243[2]
  i5242.tangents = i5243[3]
  return i5242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5247 = data
  i5246.mode = i5247[0]
  i5246.parameter = i5247[1]
  i5246.threshold = i5247[2]
  return i5246
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[22],"62":[40],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[40],"85":[43],"86":[87],"88":[87],"1":[0],"89":[31],"90":[1],"91":[0],"92":[43,0],"93":[0,5],"94":[0],"95":[5,0],"96":[43],"97":[5,0],"98":[0],"99":[100],"101":[100],"102":[100],"103":[0],"104":[0],"4":[1],"6":[5,0],"105":[0],"3":[1],"106":[0],"107":[0],"8":[0],"108":[0],"109":[0],"110":[0],"111":[0],"112":[0],"113":[0],"19":[5,0],"114":[0],"115":[0],"116":[0],"11":[0],"117":[5,0],"118":[0],"119":[31],"120":[31],"32":[31],"121":[31],"122":[40],"123":[40]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Light","UICheckBoxHolder","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "15.0";

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

Deserializers.buildID = "12e8d00d-72fb-4f96-986e-3080bedebd5c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

