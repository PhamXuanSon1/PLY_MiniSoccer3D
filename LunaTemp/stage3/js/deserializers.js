var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointSpring' )
  var i581 = data
  i580.spring = i581[0]
  i580.damper = i581[1]
  i580.targetPosition = i581[2]
  return i580
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointMotor' )
  var i583 = data
  i582.m_TargetVelocity = i583[0]
  i582.m_Force = i583[1]
  i582.m_FreeSpin = i583[2]
  return i582
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointLimits' )
  var i585 = data
  i584.m_Min = i585[0]
  i584.m_Max = i585[1]
  i584.m_Bounciness = i585[2]
  i584.m_BounceMinVelocity = i585[3]
  i584.m_ContactDistance = i585[4]
  i584.minBounce = i585[5]
  i584.maxBounce = i585[6]
  return i584
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointDrive' )
  var i587 = data
  i586.m_PositionSpring = i587[0]
  i586.m_PositionDamper = i587[1]
  i586.m_MaximumForce = i587[2]
  i586.m_UseAcceleration = i587[3]
  return i586
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i589 = data
  i588.m_Spring = i589[0]
  i588.m_Damper = i589[1]
  return i588
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i591 = data
  i590.m_Limit = i591[0]
  i590.m_Bounciness = i591[1]
  i590.m_ContactDistance = i591[2]
  return i590
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i593 = data
  i592.m_ExtremumSlip = i593[0]
  i592.m_ExtremumValue = i593[1]
  i592.m_AsymptoteSlip = i593[2]
  i592.m_AsymptoteValue = i593[3]
  i592.m_Stiffness = i593[4]
  return i592
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i595 = data
  i594.m_LowerAngle = i595[0]
  i594.m_UpperAngle = i595[1]
  return i594
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i597 = data
  i596.m_MotorSpeed = i597[0]
  i596.m_MaximumMotorTorque = i597[1]
  return i596
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i599 = data
  i598.m_DampingRatio = i599[0]
  i598.m_Frequency = i599[1]
  i598.m_Angle = i599[2]
  return i598
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i601 = data
  i600.m_LowerTranslation = i601[0]
  i600.m_UpperTranslation = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i603 = data
  i602.name = i603[0]
  i602.width = i603[1]
  i602.height = i603[2]
  i602.mipmapCount = i603[3]
  i602.anisoLevel = i603[4]
  i602.filterMode = i603[5]
  i602.hdr = !!i603[6]
  i602.format = i603[7]
  i602.wrapMode = i603[8]
  i602.alphaIsTransparency = !!i603[9]
  i602.alphaSource = i603[10]
  i602.graphicsFormat = i603[11]
  i602.sRGBTexture = !!i603[12]
  i602.desiredColorSpace = i603[13]
  i602.wrapU = i603[14]
  i602.wrapV = i603[15]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i605 = data
  i604.name = i605[0]
  i604.halfPrecision = !!i605[1]
  i604.useSimplification = !!i605[2]
  i604.useUInt32IndexFormat = !!i605[3]
  i604.vertexCount = i605[4]
  i604.aabb = i605[5]
  var i607 = i605[6]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( !!i607[i + 0] );
  }
  i604.streams = i606
  i604.vertices = i605[7]
  var i609 = i605[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i609[i + 0]) );
  }
  i604.subMeshes = i608
  var i611 = i605[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 16) {
    i610.push( new pc.Mat4().setData(i611[i + 0], i611[i + 1], i611[i + 2], i611[i + 3],  i611[i + 4], i611[i + 5], i611[i + 6], i611[i + 7],  i611[i + 8], i611[i + 9], i611[i + 10], i611[i + 11],  i611[i + 12], i611[i + 13], i611[i + 14], i611[i + 15]) );
  }
  i604.bindposes = i610
  var i613 = i605[10]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i613[i + 0]) );
  }
  i604.blendShapes = i612
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i619 = data
  i618.triangles = i619[0]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i625 = data
  i624.name = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i627[i + 0]) );
  }
  i624.frames = i626
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i628 = root || new pc.UnityMaterial()
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'shader')
  i628.renderQueue = i629[3]
  i628.enableInstancing = !!i629[4]
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i631[i + 0]) );
  }
  i628.floatParameters = i630
  var i633 = i629[6]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i633[i + 0]) );
  }
  i628.colorParameters = i632
  var i635 = i629[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i635[i + 0]) );
  }
  i628.vectorParameters = i634
  var i637 = i629[8]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i637[i + 0]) );
  }
  i628.textureParameters = i636
  var i639 = i629[9]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i639[i + 0]) );
  }
  i628.materialFlags = i638
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Color(i647[1], i647[2], i647[3], i647[4])
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Vec4( i651[1], i651[2], i651[3], i651[4] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i655 = data
  i654.name = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'value')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i659 = data
  i658.name = i659[0]
  i658.enabled = !!i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i661 = data
  i660.position = new pc.Vec3( i661[0], i661[1], i661[2] )
  i660.scale = new pc.Vec3( i661[3], i661[4], i661[5] )
  i660.rotation = new pc.Quat(i661[6], i661[7], i661[8], i661[9])
  return i660
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i662 = root || request.c( 'ChoiceBoardHolder' )
  var i663 = data
  var i665 = i663[0]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.choiceBoards = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i669 = data
  i668.center = new pc.Vec3( i669[0], i669[1], i669[2] )
  i668.size = new pc.Vec3( i669[3], i669[4], i669[5] )
  i668.enabled = !!i669[6]
  i668.isTrigger = !!i669[7]
  request.r(i669[8], i669[9], 0, i668, 'material')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i671 = data
  i670.color = new pc.Color(i671[0], i671[1], i671[2], i671[3])
  request.r(i671[4], i671[5], 0, i670, 'sprite')
  i670.flipX = !!i671[6]
  i670.flipY = !!i671[7]
  i670.drawMode = i671[8]
  i670.size = new pc.Vec2( i671[9], i671[10] )
  i670.tileMode = i671[11]
  i670.adaptiveModeThreshold = i671[12]
  i670.maskInteraction = i671[13]
  i670.spriteSortPoint = i671[14]
  i670.enabled = !!i671[15]
  request.r(i671[16], i671[17], 0, i670, 'sharedMaterial')
  var i673 = i671[18]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sharedMaterials = i672
  i670.receiveShadows = !!i671[19]
  i670.shadowCastingMode = i671[20]
  i670.sortingLayerID = i671[21]
  i670.sortingOrder = i671[22]
  i670.lightmapIndex = i671[23]
  i670.lightmapSceneIndex = i671[24]
  i670.lightmapScaleOffset = new pc.Vec4( i671[25], i671[26], i671[27], i671[28] )
  i670.lightProbeUsage = i671[29]
  i670.reflectionProbeUsage = i671[30]
  return i670
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i676 = root || request.c( 'ChoiceBoard' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'spriteRenderer')
  request.r(i677[2], i677[3], 0, i676, 'borderRenderer')
  request.r(i677[4], i677[5], 0, i676, 'increaseBorderSprite')
  request.r(i677[6], i677[7], 0, i676, 'decreaseBorderSprite')
  i676.choiceBoardType = i677[8]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i679 = data
  i678.name = i679[0]
  i678.tagId = i679[1]
  i678.enabled = !!i679[2]
  i678.isStatic = !!i679[3]
  i678.layer = i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i681 = data
  i680.name = i681[0]
  i680.atlasId = i681[1]
  i680.mipmapCount = i681[2]
  i680.hdr = !!i681[3]
  i680.size = i681[4]
  i680.anisoLevel = i681[5]
  i680.filterMode = i681[6]
  var i683 = i681[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 4) {
    i682.push( UnityEngine.Rect.MinMaxRect(i683[i + 0], i683[i + 1], i683[i + 2], i683[i + 3]) );
  }
  i680.rects = i682
  i680.wrapU = i681[8]
  i680.wrapV = i681[9]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i687 = data
  i686.name = i687[0]
  i686.index = i687[1]
  i686.startup = !!i687[2]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i689 = data
  i688.type = i689[0]
  i688.color = new pc.Color(i689[1], i689[2], i689[3], i689[4])
  i688.cullingMask = i689[5]
  i688.intensity = i689[6]
  i688.range = i689[7]
  i688.spotAngle = i689[8]
  i688.shadows = i689[9]
  i688.shadowNormalBias = i689[10]
  i688.shadowBias = i689[11]
  i688.shadowStrength = i689[12]
  i688.shadowResolution = i689[13]
  i688.lightmapBakeType = i689[14]
  i688.renderMode = i689[15]
  request.r(i689[16], i689[17], 0, i688, 'cookie')
  i688.cookieSize = i689[18]
  i688.shadowNearPlane = i689[19]
  i688.occlusionMaskChannel = i689[20]
  i688.enabled = !!i689[21]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i691 = data
  i690.pivot = new pc.Vec2( i691[0], i691[1] )
  i690.anchorMin = new pc.Vec2( i691[2], i691[3] )
  i690.anchorMax = new pc.Vec2( i691[4], i691[5] )
  i690.sizeDelta = new pc.Vec2( i691[6], i691[7] )
  i690.anchoredPosition3D = new pc.Vec3( i691[8], i691[9], i691[10] )
  i690.rotation = new pc.Quat(i691[11], i691[12], i691[13], i691[14])
  i690.scale = new pc.Vec3( i691[15], i691[16], i691[17] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i693 = data
  i692.planeDistance = i693[0]
  i692.referencePixelsPerUnit = i693[1]
  i692.isFallbackOverlay = !!i693[2]
  i692.renderMode = i693[3]
  i692.renderOrder = i693[4]
  i692.sortingLayerName = i693[5]
  i692.sortingOrder = i693[6]
  i692.scaleFactor = i693[7]
  request.r(i693[8], i693[9], 0, i692, 'worldCamera')
  i692.overrideSorting = !!i693[10]
  i692.pixelPerfect = !!i693[11]
  i692.targetDisplay = i693[12]
  i692.overridePixelPerfect = !!i693[13]
  i692.enabled = !!i693[14]
  return i692
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i695 = data
  i694.m_UiScaleMode = i695[0]
  i694.m_ReferencePixelsPerUnit = i695[1]
  i694.m_ScaleFactor = i695[2]
  i694.m_ReferenceResolution = new pc.Vec2( i695[3], i695[4] )
  i694.m_ScreenMatchMode = i695[5]
  i694.m_MatchWidthOrHeight = i695[6]
  i694.m_PhysicalUnit = i695[7]
  i694.m_FallbackScreenDPI = i695[8]
  i694.m_DefaultSpriteDPI = i695[9]
  i694.m_DynamicPixelsPerUnit = i695[10]
  i694.m_PresetInfoIsWorld = !!i695[11]
  return i694
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i697 = data
  i696.m_IgnoreReversedGraphics = !!i697[0]
  i696.m_BlockingObjects = i697[1]
  i696.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i697[2] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i699 = data
  i698.cullTransparentMesh = !!i699[0]
  return i698
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Image' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Sprite')
  i700.m_Type = i701[2]
  i700.m_PreserveAspect = !!i701[3]
  i700.m_FillCenter = !!i701[4]
  i700.m_FillMethod = i701[5]
  i700.m_FillAmount = i701[6]
  i700.m_FillClockwise = !!i701[7]
  i700.m_FillOrigin = i701[8]
  i700.m_UseSpriteMesh = !!i701[9]
  i700.m_PixelsPerUnitMultiplier = i701[10]
  request.r(i701[11], i701[12], 0, i700, 'm_Material')
  i700.m_Maskable = !!i701[13]
  i700.m_Color = new pc.Color(i701[14], i701[15], i701[16], i701[17])
  i700.m_RaycastTarget = !!i701[18]
  i700.m_RaycastPadding = new pc.Vec4( i701[19], i701[20], i701[21], i701[22] )
  return i700
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i703 = data
  i702.m_Spacing = i703[0]
  i702.m_ChildForceExpandWidth = !!i703[1]
  i702.m_ChildForceExpandHeight = !!i703[2]
  i702.m_ChildControlWidth = !!i703[3]
  i702.m_ChildControlHeight = !!i703[4]
  i702.m_ChildScaleWidth = !!i703[5]
  i702.m_ChildScaleHeight = !!i703[6]
  i702.m_ReverseArrangement = !!i703[7]
  i702.m_Padding = UnityEngine.RectOffset.FromPaddings(i703[8], i703[9], i703[10], i703[11])
  i702.m_ChildAlignment = i703[12]
  return i702
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i704 = root || request.c( 'UICheckBoxHolder' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.uICheckBoxes = i706
  return i704
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i710 = root || request.c( 'UICheckBox' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'iconImg')
  request.r(i711[2], i711[3], 0, i710, 'startingSprite')
  return i710
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Slider' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_FillRect')
  request.r(i713[2], i713[3], 0, i712, 'm_HandleRect')
  i712.m_Direction = i713[4]
  i712.m_MinValue = i713[5]
  i712.m_MaxValue = i713[6]
  i712.m_WholeNumbers = !!i713[7]
  i712.m_Value = i713[8]
  i712.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i713[9], i712.m_OnValueChanged)
  i712.m_Navigation = request.d('UnityEngine.UI.Navigation', i713[10], i712.m_Navigation)
  i712.m_Transition = i713[11]
  i712.m_Colors = request.d('UnityEngine.UI.ColorBlock', i713[12], i712.m_Colors)
  i712.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i713[13], i712.m_SpriteState)
  i712.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i713[14], i712.m_AnimationTriggers)
  i712.m_Interactable = !!i713[15]
  request.r(i713[16], i713[17], 0, i712, 'm_TargetGraphic')
  return i712
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i715 = data
  i714.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i715[0], i714.m_PersistentCalls)
  return i714
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('UnityEngine.Events.PersistentCall', i719[i + 0]));
  }
  i716.m_Calls = i718
  return i716
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Target')
  i722.m_TargetAssemblyTypeName = i723[2]
  i722.m_MethodName = i723[3]
  i722.m_Mode = i723[4]
  i722.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i723[5], i722.m_Arguments)
  i722.m_CallState = i723[6]
  return i722
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i725 = data
  i724.m_Mode = i725[0]
  i724.m_WrapAround = !!i725[1]
  request.r(i725[2], i725[3], 0, i724, 'm_SelectOnUp')
  request.r(i725[4], i725[5], 0, i724, 'm_SelectOnDown')
  request.r(i725[6], i725[7], 0, i724, 'm_SelectOnLeft')
  request.r(i725[8], i725[9], 0, i724, 'm_SelectOnRight')
  return i724
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i727 = data
  i726.m_NormalColor = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.m_HighlightedColor = new pc.Color(i727[4], i727[5], i727[6], i727[7])
  i726.m_PressedColor = new pc.Color(i727[8], i727[9], i727[10], i727[11])
  i726.m_SelectedColor = new pc.Color(i727[12], i727[13], i727[14], i727[15])
  i726.m_DisabledColor = new pc.Color(i727[16], i727[17], i727[18], i727[19])
  i726.m_ColorMultiplier = i727[20]
  i726.m_FadeDuration = i727[21]
  return i726
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'm_HighlightedSprite')
  request.r(i729[2], i729[3], 0, i728, 'm_PressedSprite')
  request.r(i729[4], i729[5], 0, i728, 'm_SelectedSprite')
  request.r(i729[6], i729[7], 0, i728, 'm_DisabledSprite')
  return i728
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i731 = data
  i730.m_NormalTrigger = i731[0]
  i730.m_HighlightedTrigger = i731[1]
  i730.m_PressedTrigger = i731[2]
  i730.m_SelectedTrigger = i731[3]
  i730.m_DisabledTrigger = i731[4]
  return i730
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i732 = root || request.c( 'UIProgressBar' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'fillImage')
  request.r(i733[2], i733[3], 0, i732, 'fillBackground')
  return i732
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i734 = root || request.c( 'UITutorial' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'tutorialUIHolder')
  return i734
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i736 = root || request.c( 'UIGuidingMove' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'target')
  i736.startPosition = new pc.Vec2( i737[2], i737[3] )
  i736.endPosition = new pc.Vec2( i737[4], i737[5] )
  i736.duration = i737[6]
  i736.ease = i737[7]
  i736.resetToStartOnComplete = !!i737[8]
  i736.loop = !!i737[9]
  i736.loopCount = i737[10]
  i736.loopType = i737[11]
  return i736
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i738 = root || request.c( 'UIPulse' )
  var i739 = data
  i738.targetScale = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.duration = i739[3]
  i738.ease = i739[4]
  return i738
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Texture')
  i740.m_UVRect = UnityEngine.Rect.MinMaxRect(i741[2], i741[3], i741[4], i741[5])
  request.r(i741[6], i741[7], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[8]
  i740.m_Color = new pc.Color(i741[9], i741[10], i741[11], i741[12])
  i740.m_RaycastTarget = !!i741[13]
  i740.m_RaycastPadding = new pc.Vec4( i741[14], i741[15], i741[16], i741[17] )
  return i740
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i742 = root || request.c( 'ImageScroller' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'rawImage')
  i742.moveVector = new pc.Vec2( i743[2], i743[3] )
  return i742
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_FirstSelected')
  i744.m_sendNavigationEvents = !!i745[2]
  i744.m_DragThreshold = i745[3]
  return i744
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i747 = data
  i746.m_HorizontalAxis = i747[0]
  i746.m_VerticalAxis = i747[1]
  i746.m_SubmitButton = i747[2]
  i746.m_CancelButton = i747[3]
  i746.m_InputActionsPerSecond = i747[4]
  i746.m_RepeatDelay = i747[5]
  i746.m_ForceModuleActive = !!i747[6]
  i746.m_SendPointerHoverToParent = !!i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'sharedMesh')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'additionalVertexStreams')
  i750.enabled = !!i751[2]
  request.r(i751[3], i751[4], 0, i750, 'sharedMaterial')
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.sharedMaterials = i752
  i750.receiveShadows = !!i751[6]
  i750.shadowCastingMode = i751[7]
  i750.sortingLayerID = i751[8]
  i750.sortingOrder = i751[9]
  i750.lightmapIndex = i751[10]
  i750.lightmapSceneIndex = i751[11]
  i750.lightmapScaleOffset = new pc.Vec4( i751[12], i751[13], i751[14], i751[15] )
  i750.lightProbeUsage = i751[16]
  i750.reflectionProbeUsage = i751[17]
  return i750
}

Deserializers["GameManager"] = function (request, data, root) {
  var i754 = root || request.c( 'GameManager' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'Player')
  i754.maxLevel = i755[2]
  i754.winLevel = i755[3]
  i754.totalMoveTime = i755[4]
  i754.currentPlayerLevel = i755[5]
  return i754
}

Deserializers["InputManager"] = function (request, data, root) {
  var i756 = root || request.c( 'InputManager' )
  var i757 = data
  i756.minimumSwipeDistance = i757[0]
  return i756
}

Deserializers["UIManager"] = function (request, data, root) {
  var i758 = root || request.c( 'UIManager' )
  var i759 = data
  return i758
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i760 = root || request.c( 'Ply_SoundManager' )
  var i761 = data
  i760.audioClips = request.d('FxAudio', i761[0], i760.audioClips)
  request.r(i761[1], i761[2], 0, i760, 'sound')
  i760.enableSound = !!i761[3]
  i760.bgmVolume = i761[4]
  return i760
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i762 = root || request.c( 'FxAudio' )
  var i763 = data
  i762.Clock = request.d('SoundData', i763[0], i762.Clock)
  i762.PlayerWin = request.d('SoundData', i763[1], i762.PlayerWin)
  i762.PlayerLoose = request.d('SoundData', i763[2], i762.PlayerLoose)
  i762.RightChoice = request.d('SoundData', i763[3], i762.RightChoice)
  i762.WrongChoice = request.d('SoundData', i763[4], i762.WrongChoice)
  i762.MaxLevel = request.d('SoundData', i763[5], i762.MaxLevel)
  i762.FightingCloud = request.d('SoundData', i763[6], i762.FightingCloud)
  return i762
}

Deserializers["SoundData"] = function (request, data, root) {
  var i764 = root || request.c( 'SoundData' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'clip')
  i764.volume = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'clip')
  request.r(i767[2], i767[3], 0, i766, 'outputAudioMixerGroup')
  i766.playOnAwake = !!i767[4]
  i766.loop = !!i767[5]
  i766.time = i767[6]
  i766.volume = i767[7]
  i766.pitch = i767[8]
  i766.enabled = !!i767[9]
  return i766
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i768 = root || request.c( 'ProgressTrackingManager' )
  var i769 = data
  i768.maxScore = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'choiceBoardPlacer')
  i768.currentScore = i769[3]
  i768.currentPercent = i769[4]
  return i768
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i770 = root || request.c( 'PlayerController' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'endPos')
  i770.switchTrackTime = i771[2]
  request.r(i771[3], i771[4], 0, i770, 'trackRightTransform')
  request.r(i771[5], i771[6], 0, i770, 'trackLeftTransform')
  i770.startRight = !!i771[7]
  request.r(i771[8], i771[9], 0, i770, 'playerTransform')
  request.r(i771[10], i771[11], 0, i770, 'playerVisual')
  request.r(i771[12], i771[13], 0, i770, 'winPar')
  i770.currentLevel = i771[14]
  i770.dragSmoothSpeed = i771[15]
  i770.moveCurve = new pc.AnimationCurve( { keys_flow: i771[16] } )
  return i770
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i772 = root || request.c( 'PlayerVisual' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'playerSpriteRenderer')
  request.r(i773[2], i773[3], 0, i772, 'fakeShadowRenderer')
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.levelSprite = i774
  i772.maxLevelScaleMultiplier = i773[5]
  request.r(i773[6], i773[7], 0, i772, 'maxPowerPar')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i779 = data
  i778.mass = i779[0]
  i778.drag = i779[1]
  i778.angularDrag = i779[2]
  i778.useGravity = !!i779[3]
  i778.isKinematic = !!i779[4]
  i778.constraints = i779[5]
  i778.maxAngularVelocity = i779[6]
  i778.collisionDetectionMode = i779[7]
  i778.interpolation = i779[8]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'animatorController')
  request.r(i781[2], i781[3], 0, i780, 'avatar')
  i780.updateMode = i781[4]
  i780.hasTransformHierarchy = !!i781[5]
  i780.applyRootMotion = !!i781[6]
  var i783 = i781[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.humanBones = i782
  i780.enabled = !!i781[8]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i787 = data
  i786.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i787[0], i786.main)
  i786.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i787[1], i786.colorBySpeed)
  i786.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i787[2], i786.colorOverLifetime)
  i786.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i787[3], i786.emission)
  i786.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i787[4], i786.rotationBySpeed)
  i786.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i787[5], i786.rotationOverLifetime)
  i786.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i787[6], i786.shape)
  i786.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i787[7], i786.sizeBySpeed)
  i786.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i787[8], i786.sizeOverLifetime)
  i786.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i787[9], i786.textureSheetAnimation)
  i786.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i787[10], i786.velocityOverLifetime)
  i786.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i787[11], i786.noise)
  i786.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i787[12], i786.inheritVelocity)
  i786.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i787[13], i786.forceOverLifetime)
  i786.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i787[14], i786.limitVelocityOverLifetime)
  i786.useAutoRandomSeed = !!i787[15]
  i786.randomSeed = i787[16]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemMain()
  var i789 = data
  i788.duration = i789[0]
  i788.loop = !!i789[1]
  i788.prewarm = !!i789[2]
  i788.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.startDelay)
  i788.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.startLifetime)
  i788.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.startSpeed)
  i788.startSize3D = !!i789[6]
  i788.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.startSizeX)
  i788.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.startSizeY)
  i788.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.startSizeZ)
  i788.startRotation3D = !!i789[10]
  i788.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.startRotationX)
  i788.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.startRotationY)
  i788.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[13], i788.startRotationZ)
  i788.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[14], i788.startColor)
  i788.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[15], i788.gravityModifier)
  i788.simulationSpace = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'customSimulationSpace')
  i788.simulationSpeed = i789[19]
  i788.useUnscaledTime = !!i789[20]
  i788.scalingMode = i789[21]
  i788.playOnAwake = !!i789[22]
  i788.maxParticles = i789[23]
  i788.emitterVelocityMode = i789[24]
  i788.stopAction = i789[25]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i790 = root || new pc.MinMaxCurve()
  var i791 = data
  i790.mode = i791[0]
  i790.curveMin = new pc.AnimationCurve( { keys_flow: i791[1] } )
  i790.curveMax = new pc.AnimationCurve( { keys_flow: i791[2] } )
  i790.curveMultiplier = i791[3]
  i790.constantMin = i791[4]
  i790.constantMax = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i792 = root || new pc.MinMaxGradient()
  var i793 = data
  i792.mode = i793[0]
  i792.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[1], i792.gradientMin)
  i792.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[2], i792.gradientMax)
  i792.colorMin = new pc.Color(i793[3], i793[4], i793[5], i793[6])
  i792.colorMax = new pc.Color(i793[7], i793[8], i793[9], i793[10])
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i795 = data
  i794.mode = i795[0]
  var i797 = i795[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i797[i + 0]) );
  }
  i794.colorKeys = i796
  var i799 = i795[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i799[i + 0]) );
  }
  i794.alphaKeys = i798
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i803 = data
  i802.color = new pc.Color(i803[0], i803[1], i803[2], i803[3])
  i802.time = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i807 = data
  i806.alpha = i807[0]
  i806.time = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemColorBySpeed()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i809[1], i808.color)
  i808.range = new pc.Vec2( i809[2], i809[3] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemColorOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i811[1], i810.color)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemEmitter()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.rateOverTime)
  i812.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.rateOverDistance)
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i815[i + 0]) );
  }
  i812.bursts = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemBurst()
  var i819 = data
  i818.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[0], i818.count)
  i818.cycleCount = i819[1]
  i818.minCount = i819[2]
  i818.maxCount = i819[3]
  i818.repeatInterval = i819[4]
  i818.time = i819[5]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemRotationBySpeed()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  i820.range = new pc.Vec2( i821[5], i821[6] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemRotationOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemShape()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.shapeType = i825[1]
  i824.randomDirectionAmount = i825[2]
  i824.sphericalDirectionAmount = i825[3]
  i824.randomPositionAmount = i825[4]
  i824.alignToDirection = !!i825[5]
  i824.radius = i825[6]
  i824.radiusMode = i825[7]
  i824.radiusSpread = i825[8]
  i824.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[9], i824.radiusSpeed)
  i824.radiusThickness = i825[10]
  i824.angle = i825[11]
  i824.length = i825[12]
  i824.boxThickness = new pc.Vec3( i825[13], i825[14], i825[15] )
  i824.meshShapeType = i825[16]
  request.r(i825[17], i825[18], 0, i824, 'mesh')
  request.r(i825[19], i825[20], 0, i824, 'meshRenderer')
  request.r(i825[21], i825[22], 0, i824, 'skinnedMeshRenderer')
  i824.useMeshMaterialIndex = !!i825[23]
  i824.meshMaterialIndex = i825[24]
  i824.useMeshColors = !!i825[25]
  i824.normalOffset = i825[26]
  i824.arc = i825[27]
  i824.arcMode = i825[28]
  i824.arcSpread = i825[29]
  i824.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[30], i824.arcSpeed)
  i824.donutRadius = i825[31]
  i824.position = new pc.Vec3( i825[32], i825[33], i825[34] )
  i824.rotation = new pc.Vec3( i825[35], i825[36], i825[37] )
  i824.scale = new pc.Vec3( i825[38], i825[39], i825[40] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemSizeBySpeed()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  i826.range = new pc.Vec2( i827[5], i827[6] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemSizeOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.animation = i831[2]
  i830.numTilesX = i831[3]
  i830.numTilesY = i831[4]
  i830.useRandomRow = !!i831[5]
  i830.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[6], i830.frameOverTime)
  i830.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[7], i830.startFrame)
  i830.cycleCount = i831[8]
  i830.rowIndex = i831[9]
  i830.flipU = i831[10]
  i830.flipV = i831[11]
  i830.spriteCount = i831[12]
  var i833 = i831[13]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sprites = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.radial)
  i834.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[5], i834.speedModifier)
  i834.space = i835[6]
  i834.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.orbitalX)
  i834.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.orbitalY)
  i834.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[9], i834.orbitalZ)
  i834.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[10], i834.orbitalOffsetX)
  i834.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[11], i834.orbitalOffsetY)
  i834.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[12], i834.orbitalOffsetZ)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemNoise()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.separateAxes = !!i837[1]
  i836.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.strengthX)
  i836.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.strengthY)
  i836.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.strengthZ)
  i836.frequency = i837[5]
  i836.damping = !!i837[6]
  i836.octaveCount = i837[7]
  i836.octaveMultiplier = i837[8]
  i836.octaveScale = i837[9]
  i836.quality = i837[10]
  i836.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.scrollSpeed)
  i836.scrollSpeedMultiplier = i837[12]
  i836.remapEnabled = !!i837[13]
  i836.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[14], i836.remapX)
  i836.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[15], i836.remapY)
  i836.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[16], i836.remapZ)
  i836.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[17], i836.positionAmount)
  i836.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[18], i836.rotationAmount)
  i836.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[19], i836.sizeAmount)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemInheritVelocity()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.mode = i839[1]
  i838.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.curve)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemForceOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.space = i841[4]
  i840.randomized = !!i841[5]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.limit)
  i842.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.limitX)
  i842.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.limitY)
  i842.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.limitZ)
  i842.dampen = i843[5]
  i842.separateAxes = !!i843[6]
  i842.space = i843[7]
  i842.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[8], i842.drag)
  i842.multiplyDragByParticleSize = !!i843[9]
  i842.multiplyDragByParticleVelocity = !!i843[10]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'mesh')
  i844.meshCount = i845[2]
  i844.activeVertexStreamsCount = i845[3]
  i844.alignment = i845[4]
  i844.renderMode = i845[5]
  i844.sortMode = i845[6]
  i844.lengthScale = i845[7]
  i844.velocityScale = i845[8]
  i844.cameraVelocityScale = i845[9]
  i844.normalDirection = i845[10]
  i844.sortingFudge = i845[11]
  i844.minParticleSize = i845[12]
  i844.maxParticleSize = i845[13]
  i844.pivot = new pc.Vec3( i845[14], i845[15], i845[16] )
  request.r(i845[17], i845[18], 0, i844, 'trailMaterial')
  i844.applyActiveColorSpace = !!i845[19]
  i844.enabled = !!i845[20]
  request.r(i845[21], i845[22], 0, i844, 'sharedMaterial')
  var i847 = i845[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[24]
  i844.shadowCastingMode = i845[25]
  i844.sortingLayerID = i845[26]
  i844.sortingOrder = i845[27]
  i844.lightmapIndex = i845[28]
  i844.lightmapSceneIndex = i845[29]
  i844.lightmapScaleOffset = new pc.Vec4( i845[30], i845[31], i845[32], i845[33] )
  i844.lightProbeUsage = i845[34]
  i844.reflectionProbeUsage = i845[35]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i849 = data
  i848.aspect = i849[0]
  i848.orthographic = !!i849[1]
  i848.orthographicSize = i849[2]
  i848.backgroundColor = new pc.Color(i849[3], i849[4], i849[5], i849[6])
  i848.nearClipPlane = i849[7]
  i848.farClipPlane = i849[8]
  i848.fieldOfView = i849[9]
  i848.depth = i849[10]
  i848.clearFlags = i849[11]
  i848.cullingMask = i849[12]
  i848.rect = i849[13]
  request.r(i849[14], i849[15], 0, i848, 'targetTexture')
  i848.usePhysicalProperties = !!i849[16]
  i848.focalLength = i849[17]
  i848.sensorSize = new pc.Vec2( i849[18], i849[19] )
  i848.lensShift = new pc.Vec2( i849[20], i849[21] )
  i848.gateFit = i849[22]
  i848.commandBufferCount = i849[23]
  i848.cameraType = i849[24]
  i848.enabled = !!i849[25]
  return i848
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i850 = root || request.c( 'MaterialUVScroller' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'targetMaterial')
  i850.scrollSpeed = new pc.Vec2( i851[2], i851[3] )
  return i850
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i852 = root || request.c( 'ChoiceBoardPlacer' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'choiceBoardHolderprefab')
  request.r(i853[2], i853[3], 0, i852, 'startPos')
  request.r(i853[4], i853[5], 0, i852, 'endPos')
  request.r(i853[6], i853[7], 0, i852, 'choiceBoardPairData')
  i852.spawnCount = i853[8]
  i852.spawnGenericByNumber = !!i853[9]
  i852.shufflePairsOrder = !!i853[10]
  i852.shuffleLeftRight = !!i853[11]
  i852.spawnOnStart = !!i853[12]
  return i852
}

Deserializers["BossController"] = function (request, data, root) {
  var i854 = root || request.c( 'BossController' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'bossSpriteRenderer')
  request.r(i855[2], i855[3], 0, i854, 'characterVisual')
  request.r(i855[4], i855[5], 0, i854, 'fightingCloud')
  request.r(i855[6], i855[7], 0, i854, 'resultObject')
  request.r(i855[8], i855[9], 0, i854, 'resultSpriteRenderer')
  request.r(i855[10], i855[11], 0, i854, 'winSprite')
  request.r(i855[12], i855[13], 0, i854, 'lossSprite')
  request.r(i855[14], i855[15], 0, i854, 'extraWinObject')
  request.r(i855[16], i855[17], 0, i854, 'winPanel')
  request.r(i855[18], i855[19], 0, i854, 'losePanel')
  var i857 = i855[20]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.extraObjectsToHide = i856
  i854.fightingCloudFx = i855[21]
  i854.winPanelFx = i855[22]
  i854.losePanelFx = i855[23]
  i854.delayAfterLastBoard = i855[24]
  i854.fightDuration = i855[25]
  i854.showResultDuration = i855[26]
  request.r(i855[27], i855[28], 0, i854, 'currentPlayer')
  i854.currentPlayerLevel = i855[29]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i861 = data
  i860.ambientIntensity = i861[0]
  i860.reflectionIntensity = i861[1]
  i860.ambientMode = i861[2]
  i860.ambientLight = new pc.Color(i861[3], i861[4], i861[5], i861[6])
  i860.ambientSkyColor = new pc.Color(i861[7], i861[8], i861[9], i861[10])
  i860.ambientGroundColor = new pc.Color(i861[11], i861[12], i861[13], i861[14])
  i860.ambientEquatorColor = new pc.Color(i861[15], i861[16], i861[17], i861[18])
  i860.fogColor = new pc.Color(i861[19], i861[20], i861[21], i861[22])
  i860.fogEndDistance = i861[23]
  i860.fogStartDistance = i861[24]
  i860.fogDensity = i861[25]
  i860.fog = !!i861[26]
  request.r(i861[27], i861[28], 0, i860, 'skybox')
  i860.fogMode = i861[29]
  var i863 = i861[30]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i863[i + 0]) );
  }
  i860.lightmaps = i862
  i860.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i861[31], i860.lightProbes)
  i860.lightmapsMode = i861[32]
  i860.mixedBakeMode = i861[33]
  i860.environmentLightingMode = i861[34]
  i860.ambientProbe = new pc.SphericalHarmonicsL2(i861[35])
  i860.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i861[36])
  i860.useReferenceAmbientProbe = !!i861[37]
  request.r(i861[38], i861[39], 0, i860, 'customReflection')
  request.r(i861[40], i861[41], 0, i860, 'defaultReflection')
  i860.defaultReflectionMode = i861[42]
  i860.defaultReflectionResolution = i861[43]
  i860.sunLightObjectId = i861[44]
  i860.pixelLightCount = i861[45]
  i860.defaultReflectionHDR = !!i861[46]
  i860.hasLightDataAsset = !!i861[47]
  i860.hasManualGenerate = !!i861[48]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'lightmapColor')
  request.r(i867[2], i867[3], 0, i866, 'lightmapDirection')
  request.r(i867[4], i867[5], 0, i866, 'shadowMask')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i868 = root || new UnityEngine.LightProbes()
  var i869 = data
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i877 = data
  var i879 = i877[0]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i879[i + 0]));
  }
  i876.ShaderCompilationErrors = i878
  i876.name = i877[1]
  i876.guid = i877[2]
  var i881 = i877[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i876.shaderDefinedKeywords = i880
  var i883 = i877[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i883[i + 0]) );
  }
  i876.passes = i882
  var i885 = i877[5]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i885[i + 0]) );
  }
  i876.usePasses = i884
  var i887 = i877[6]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i887[i + 0]) );
  }
  i876.defaultParameterValues = i886
  request.r(i877[7], i877[8], 0, i876, 'unityFallbackShader')
  i876.readDepth = !!i877[9]
  i876.hasDepthOnlyPass = !!i877[10]
  i876.isCreatedByShaderGraph = !!i877[11]
  i876.disableBatching = !!i877[12]
  i876.compiled = !!i877[13]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i891 = data
  i890.shaderName = i891[0]
  i890.errorMessage = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i896 = root || new pc.UnityShaderPass()
  var i897 = data
  i896.id = i897[0]
  i896.subShaderIndex = i897[1]
  i896.name = i897[2]
  i896.passType = i897[3]
  i896.grabPassTextureName = i897[4]
  i896.usePass = !!i897[5]
  i896.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[6], i896.zTest)
  i896.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[7], i896.zWrite)
  i896.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[8], i896.culling)
  i896.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i897[9], i896.blending)
  i896.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i897[10], i896.alphaBlending)
  i896.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[11], i896.colorWriteMask)
  i896.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[12], i896.offsetUnits)
  i896.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[13], i896.offsetFactor)
  i896.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[14], i896.stencilRef)
  i896.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[15], i896.stencilReadMask)
  i896.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[16], i896.stencilWriteMask)
  i896.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i897[17], i896.stencilOp)
  i896.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i897[18], i896.stencilOpFront)
  i896.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i897[19], i896.stencilOpBack)
  var i899 = i897[20]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i899[i + 0]) );
  }
  i896.tags = i898
  var i901 = i897[21]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.passDefinedKeywords = i900
  var i903 = i897[22]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i903[i + 0]) );
  }
  i896.passDefinedKeywordGroups = i902
  var i905 = i897[23]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i905[i + 0]) );
  }
  i896.variants = i904
  var i907 = i897[24]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i907[i + 0]) );
  }
  i896.excludedVariants = i906
  i896.hasDepthReader = !!i897[25]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i909 = data
  i908.val = i909[0]
  i908.name = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i911 = data
  i910.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[0], i910.src)
  i910.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[1], i910.dst)
  i910.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[2], i910.op)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i913 = data
  i912.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[0], i912.pass)
  i912.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[1], i912.fail)
  i912.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[2], i912.zFail)
  i912.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[3], i912.comp)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i917 = data
  i916.name = i917[0]
  i916.value = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.keywords = i922
  i920.hasDiscard = !!i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i927 = data
  i926.passId = i927[0]
  i926.subShaderIndex = i927[1]
  var i929 = i927[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i926.keywords = i928
  i926.vertexProgram = i927[3]
  i926.fragmentProgram = i927[4]
  i926.exportedForWebGl2 = !!i927[5]
  i926.readDepth = !!i927[6]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'shader')
  i932.pass = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i937 = data
  i936.name = i937[0]
  i936.type = i937[1]
  i936.value = new pc.Vec4( i937[2], i937[3], i937[4], i937[5] )
  i936.textureValue = i937[6]
  i936.shaderPropertyFlag = i937[7]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i939 = data
  i938.name = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'texture')
  i938.aabb = i939[3]
  i938.vertices = i939[4]
  i938.triangles = i939[5]
  i938.textureRect = UnityEngine.Rect.MinMaxRect(i939[6], i939[7], i939[8], i939[9])
  i938.packedRect = UnityEngine.Rect.MinMaxRect(i939[10], i939[11], i939[12], i939[13])
  i938.border = new pc.Vec4( i939[14], i939[15], i939[16], i939[17] )
  i938.transparency = i939[18]
  i938.bounds = i939[19]
  i938.pixelsPerUnit = i939[20]
  i938.textureWidth = i939[21]
  i938.textureHeight = i939[22]
  i938.nativeSize = new pc.Vec2( i939[23], i939[24] )
  i938.pivot = new pc.Vec2( i939[25], i939[26] )
  i938.textureRectOffset = new pc.Vec2( i939[27], i939[28] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i941 = data
  i940.name = i941[0]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i943 = data
  i942.name = i943[0]
  i942.wrapMode = i943[1]
  i942.isLooping = !!i943[2]
  i942.length = i943[3]
  var i945 = i943[4]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i945[i + 0]) );
  }
  i942.curves = i944
  var i947 = i943[5]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i947[i + 0]) );
  }
  i942.events = i946
  i942.halfPrecision = !!i943[6]
  i942._frameRate = i943[7]
  i942.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i943[8], i942.localBounds)
  i942.hasMuscleCurves = !!i943[9]
  var i949 = i943[10]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i942.clipMuscleConstant = i948
  i942.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i943[11], i942.clipBindingConstant)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i953 = data
  i952.path = i953[0]
  i952.hash = i953[1]
  i952.componentType = i953[2]
  i952.property = i953[3]
  i952.keys = i953[4]
  var i955 = i953[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i955[i + 0]) );
  }
  i952.objectReferenceKeys = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i959 = data
  i958.functionName = i959[0]
  i958.floatParameter = i959[1]
  i958.intParameter = i959[2]
  i958.stringParameter = i959[3]
  request.r(i959[4], i959[5], 0, i958, 'objectReferenceParameter')
  i958.time = i959[6]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i961 = data
  i960.center = new pc.Vec3( i961[0], i961[1], i961[2] )
  i960.extends = new pc.Vec3( i961[3], i961[4], i961[5] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i964.genericBindings = i966
  var i969 = i965[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.pptrCurveMapping = i968
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i971 = data
  i970.name = i971[0]
  var i973 = i971[1]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i973[i + 0]) );
  }
  i970.layers = i972
  var i975 = i971[2]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i975[i + 0]) );
  }
  i970.parameters = i974
  i970.animationClips = i971[3]
  i970.avatarUnsupported = i971[4]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i979 = data
  i978.name = i979[0]
  i978.defaultWeight = i979[1]
  i978.blendingMode = i979[2]
  i978.avatarMask = i979[3]
  i978.syncedLayerIndex = i979[4]
  i978.syncedLayerAffectsTiming = !!i979[5]
  i978.syncedLayers = i979[6]
  i978.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i979[7], i978.stateMachine)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i981 = data
  i980.id = i981[0]
  i980.name = i981[1]
  i980.path = i981[2]
  var i983 = i981[3]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i983[i + 0]) );
  }
  i980.states = i982
  var i985 = i981[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i985[i + 0]) );
  }
  i980.machines = i984
  var i987 = i981[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i987[i + 0]) );
  }
  i980.entryStateTransitions = i986
  var i989 = i981[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i989[i + 0]) );
  }
  i980.exitStateTransitions = i988
  var i991 = i981[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i991[i + 0]) );
  }
  i980.anyStateTransitions = i990
  i980.defaultStateId = i981[8]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i995 = data
  i994.id = i995[0]
  i994.name = i995[1]
  i994.cycleOffset = i995[2]
  i994.cycleOffsetParameter = i995[3]
  i994.cycleOffsetParameterActive = !!i995[4]
  i994.mirror = !!i995[5]
  i994.mirrorParameter = i995[6]
  i994.mirrorParameterActive = !!i995[7]
  i994.motionId = i995[8]
  i994.nameHash = i995[9]
  i994.fullPathHash = i995[10]
  i994.speed = i995[11]
  i994.speedParameter = i995[12]
  i994.speedParameterActive = !!i995[13]
  i994.tag = i995[14]
  i994.tagHash = i995[15]
  i994.writeDefaultValues = !!i995[16]
  var i997 = i995[17]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.behaviours = i996
  var i999 = i995[18]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i999[i + 0]) );
  }
  i994.transitions = i998
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1005 = data
  i1004.fullPath = i1005[0]
  i1004.canTransitionToSelf = !!i1005[1]
  i1004.duration = i1005[2]
  i1004.exitTime = i1005[3]
  i1004.hasExitTime = !!i1005[4]
  i1004.hasFixedDuration = !!i1005[5]
  i1004.interruptionSource = i1005[6]
  i1004.offset = i1005[7]
  i1004.orderedInterruption = !!i1005[8]
  i1004.destinationStateId = i1005[9]
  i1004.isExit = !!i1005[10]
  i1004.mute = !!i1005[11]
  i1004.solo = !!i1005[12]
  var i1007 = i1005[13]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1007[i + 0]) );
  }
  i1004.conditions = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1013 = data
  i1012.destinationStateId = i1013[0]
  i1012.isExit = !!i1013[1]
  i1012.mute = !!i1013[2]
  i1012.solo = !!i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1015[i + 0]) );
  }
  i1012.conditions = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1019 = data
  i1018.defaultBool = !!i1019[0]
  i1018.defaultFloat = i1019[1]
  i1018.defaultInt = i1019[2]
  i1018.name = i1019[3]
  i1018.nameHash = i1019[4]
  i1018.type = i1019[5]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.bytes64 = i1021[1]
  i1020.data = i1021[2]
  return i1020
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i1022 = root || request.c( 'ChoiceBoardPairData' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('ChoicePairData', i1025[i + 0]) );
  }
  i1022.ChoicePairDatas = i1024
  return i1022
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i1028 = root || request.c( 'ChoicePairData' )
  var i1029 = data
  i1028.choiceData1 = request.d('ChoiceData', i1029[0], i1028.choiceData1)
  i1028.choiceData2 = request.d('ChoiceData', i1029[1], i1028.choiceData2)
  return i1028
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i1030 = root || request.c( 'ChoiceData' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'VisualSprite')
  request.r(i1031[2], i1031[3], 0, i1030, 'BorderSprite')
  i1030.ChoiceType = i1031[4]
  return i1030
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1033 = data
  i1032.useSafeMode = !!i1033[0]
  i1032.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1033[1], i1032.safeModeOptions)
  i1032.timeScale = i1033[2]
  i1032.unscaledTimeScale = i1033[3]
  i1032.useSmoothDeltaTime = !!i1033[4]
  i1032.maxSmoothUnscaledTime = i1033[5]
  i1032.rewindCallbackMode = i1033[6]
  i1032.showUnityEditorReport = !!i1033[7]
  i1032.logBehaviour = i1033[8]
  i1032.drawGizmos = !!i1033[9]
  i1032.defaultRecyclable = !!i1033[10]
  i1032.defaultAutoPlay = i1033[11]
  i1032.defaultUpdateType = i1033[12]
  i1032.defaultTimeScaleIndependent = !!i1033[13]
  i1032.defaultEaseType = i1033[14]
  i1032.defaultEaseOvershootOrAmplitude = i1033[15]
  i1032.defaultEasePeriod = i1033[16]
  i1032.defaultAutoKill = !!i1033[17]
  i1032.defaultLoopType = i1033[18]
  i1032.debugMode = !!i1033[19]
  i1032.debugStoreTargetId = !!i1033[20]
  i1032.showPreviewPanel = !!i1033[21]
  i1032.storeSettingsLocation = i1033[22]
  i1032.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1033[23], i1032.modules)
  i1032.createASMDEF = !!i1033[24]
  i1032.showPlayingTweens = !!i1033[25]
  i1032.showPausedTweens = !!i1033[26]
  return i1032
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1035 = data
  i1034.logBehaviour = i1035[0]
  i1034.nestedTweenFailureBehaviour = i1035[1]
  return i1034
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1037 = data
  i1036.showPanel = !!i1037[0]
  i1036.audioEnabled = !!i1037[1]
  i1036.physicsEnabled = !!i1037[2]
  i1036.physics2DEnabled = !!i1037[3]
  i1036.spriteEnabled = !!i1037[4]
  i1036.uiEnabled = !!i1037[5]
  i1036.uiToolkitEnabled = !!i1037[6]
  i1036.textMeshProEnabled = !!i1037[7]
  i1036.tk2DEnabled = !!i1037[8]
  i1036.deAudioEnabled = !!i1037[9]
  i1036.deUnityExtendedEnabled = !!i1037[10]
  i1036.epoOutlineEnabled = !!i1037[11]
  return i1036
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Settings' )
  var i1039 = data
  i1038.assetVersion = i1039[0]
  i1038.m_TextWrappingMode = i1039[1]
  i1038.m_enableKerning = !!i1039[2]
  var i1041 = i1039[3]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(i1041[i + 0]);
  }
  i1038.m_ActiveFontFeatures = i1040
  i1038.m_enableExtraPadding = !!i1039[4]
  i1038.m_enableTintAllSprites = !!i1039[5]
  i1038.m_enableParseEscapeCharacters = !!i1039[6]
  i1038.m_EnableRaycastTarget = !!i1039[7]
  i1038.m_GetFontFeaturesAtRuntime = !!i1039[8]
  i1038.m_missingGlyphCharacter = i1039[9]
  i1038.m_ClearDynamicDataOnBuild = !!i1039[10]
  i1038.m_warningsDisabled = !!i1039[11]
  request.r(i1039[12], i1039[13], 0, i1038, 'm_defaultFontAsset')
  i1038.m_defaultFontAssetPath = i1039[14]
  i1038.m_defaultFontSize = i1039[15]
  i1038.m_defaultAutoSizeMinRatio = i1039[16]
  i1038.m_defaultAutoSizeMaxRatio = i1039[17]
  i1038.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1039[18], i1039[19] )
  i1038.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1039[20], i1039[21] )
  i1038.m_autoSizeTextContainer = !!i1039[22]
  i1038.m_IsTextObjectScaleStatic = !!i1039[23]
  var i1043 = i1039[24]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1038.m_fallbackFontAssets = i1042
  i1038.m_matchMaterialPreset = !!i1039[25]
  i1038.m_HideSubTextObjects = !!i1039[26]
  request.r(i1039[27], i1039[28], 0, i1038, 'm_defaultSpriteAsset')
  i1038.m_defaultSpriteAssetPath = i1039[29]
  i1038.m_enableEmojiSupport = !!i1039[30]
  i1038.m_MissingCharacterSpriteUnicode = i1039[31]
  var i1045 = i1039[32]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1038.m_EmojiFallbackTextAssets = i1044
  i1038.m_defaultColorGradientPresetsPath = i1039[33]
  request.r(i1039[34], i1039[35], 0, i1038, 'm_defaultStyleSheet')
  i1038.m_StyleSheetsResourcePath = i1039[36]
  request.r(i1039[37], i1039[38], 0, i1038, 'm_leadingCharacters')
  request.r(i1039[39], i1039[40], 0, i1038, 'm_followingCharacters')
  i1038.m_UseModernHangulLineBreakingRules = !!i1039[41]
  return i1038
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'spriteSheet')
  var i1055 = i1053[2]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.TMP_Sprite', i1055[i + 0]));
  }
  i1052.spriteInfoList = i1054
  var i1057 = i1053[3]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1052.fallbackSpriteAssets = i1056
  var i1059 = i1053[4]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('TMPro.TMP_SpriteCharacter', i1059[i + 0]));
  }
  i1052.m_SpriteCharacterTable = i1058
  var i1061 = i1053[5]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.TMP_SpriteGlyph', i1061[i + 0]));
  }
  i1052.m_GlyphTable = i1060
  i1052.m_Version = i1053[6]
  i1052.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1053[7], i1052.m_FaceInfo)
  request.r(i1053[8], i1053[9], 0, i1052, 'm_Material')
  return i1052
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.hashCode = i1065[1]
  i1064.unicode = i1065[2]
  i1064.pivot = new pc.Vec2( i1065[3], i1065[4] )
  request.r(i1065[5], i1065[6], 0, i1064, 'sprite')
  i1064.id = i1065[7]
  i1064.x = i1065[8]
  i1064.y = i1065[9]
  i1064.width = i1065[10]
  i1064.height = i1065[11]
  i1064.xOffset = i1065[12]
  i1064.yOffset = i1065[13]
  i1064.xAdvance = i1065[14]
  i1064.scale = i1065[15]
  return i1064
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1071 = data
  i1070.m_Name = i1071[0]
  i1070.m_ElementType = i1071[1]
  i1070.m_Unicode = i1071[2]
  i1070.m_GlyphIndex = i1071[3]
  i1070.m_Scale = i1071[4]
  return i1070
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'sprite')
  i1074.m_Index = i1075[2]
  i1074.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1075[3], i1074.m_Metrics)
  i1074.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1075[4], i1074.m_GlyphRect)
  i1074.m_Scale = i1075[5]
  i1074.m_AtlasIndex = i1075[6]
  i1074.m_ClassDefinitionType = i1075[7]
  return i1074
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1077 = data
  i1076.m_Width = i1077[0]
  i1076.m_Height = i1077[1]
  i1076.m_HorizontalBearingX = i1077[2]
  i1076.m_HorizontalBearingY = i1077[3]
  i1076.m_HorizontalAdvance = i1077[4]
  return i1076
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1079 = data
  i1078.m_X = i1079[0]
  i1078.m_Y = i1079[1]
  i1078.m_Width = i1079[2]
  i1078.m_Height = i1079[3]
  return i1078
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1081 = data
  i1080.m_FaceIndex = i1081[0]
  i1080.m_FamilyName = i1081[1]
  i1080.m_StyleName = i1081[2]
  i1080.m_PointSize = i1081[3]
  i1080.m_Scale = i1081[4]
  i1080.m_UnitsPerEM = i1081[5]
  i1080.m_LineHeight = i1081[6]
  i1080.m_AscentLine = i1081[7]
  i1080.m_CapLine = i1081[8]
  i1080.m_MeanLine = i1081[9]
  i1080.m_Baseline = i1081[10]
  i1080.m_DescentLine = i1081[11]
  i1080.m_SuperscriptOffset = i1081[12]
  i1080.m_SuperscriptSize = i1081[13]
  i1080.m_SubscriptOffset = i1081[14]
  i1080.m_SubscriptSize = i1081[15]
  i1080.m_UnderlineOffset = i1081[16]
  i1080.m_UnderlineThickness = i1081[17]
  i1080.m_StrikethroughOffset = i1081[18]
  i1080.m_StrikethroughThickness = i1081[19]
  i1080.m_TabWidth = i1081[20]
  return i1080
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('TMPro.TMP_Style', i1085[i + 0]));
  }
  i1082.m_StyleList = i1084
  return i1082
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_Style' )
  var i1089 = data
  i1088.m_Name = i1089[0]
  i1088.m_HashCode = i1089[1]
  i1088.m_OpeningDefinition = i1089[2]
  i1088.m_ClosingDefinition = i1089[3]
  i1088.m_OpeningTagArray = i1089[4]
  i1088.m_ClosingTagArray = i1089[5]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1093[i + 0]) );
  }
  i1090.files = i1092
  i1090.componentToPrefabIds = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1097 = data
  i1096.path = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'unityObject')
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1101[i + 0]) );
  }
  i1098.scriptsExecutionOrder = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1103[i + 0]) );
  }
  i1098.sortingLayers = i1102
  var i1105 = i1099[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1105[i + 0]) );
  }
  i1098.cullingLayers = i1104
  i1098.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1099[3], i1098.timeSettings)
  i1098.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1099[4], i1098.physicsSettings)
  i1098.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1099[5], i1098.physics2DSettings)
  i1098.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1099[6], i1098.qualitySettings)
  i1098.enableRealtimeShadows = !!i1099[7]
  i1098.enableAutoInstancing = !!i1099[8]
  i1098.enableStaticBatching = !!i1099[9]
  i1098.enableDynamicBatching = !!i1099[10]
  i1098.lightmapEncodingQuality = i1099[11]
  i1098.desiredColorSpace = i1099[12]
  var i1107 = i1099[13]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1098.allTags = i1106
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.value = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  i1114.value = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1119 = data
  i1118.id = i1119[0]
  i1118.name = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1121 = data
  i1120.fixedDeltaTime = i1121[0]
  i1120.maximumDeltaTime = i1121[1]
  i1120.timeScale = i1121[2]
  i1120.maximumParticleTimestep = i1121[3]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1123 = data
  i1122.gravity = new pc.Vec3( i1123[0], i1123[1], i1123[2] )
  i1122.defaultSolverIterations = i1123[3]
  i1122.bounceThreshold = i1123[4]
  i1122.autoSyncTransforms = !!i1123[5]
  i1122.autoSimulation = !!i1123[6]
  var i1125 = i1123[7]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1125[i + 0]) );
  }
  i1122.collisionMatrix = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1129 = data
  i1128.enabled = !!i1129[0]
  i1128.layerId = i1129[1]
  i1128.otherLayerId = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'material')
  i1130.gravity = new pc.Vec2( i1131[2], i1131[3] )
  i1130.positionIterations = i1131[4]
  i1130.velocityIterations = i1131[5]
  i1130.velocityThreshold = i1131[6]
  i1130.maxLinearCorrection = i1131[7]
  i1130.maxAngularCorrection = i1131[8]
  i1130.maxTranslationSpeed = i1131[9]
  i1130.maxRotationSpeed = i1131[10]
  i1130.baumgarteScale = i1131[11]
  i1130.baumgarteTOIScale = i1131[12]
  i1130.timeToSleep = i1131[13]
  i1130.linearSleepTolerance = i1131[14]
  i1130.angularSleepTolerance = i1131[15]
  i1130.defaultContactOffset = i1131[16]
  i1130.autoSimulation = !!i1131[17]
  i1130.queriesHitTriggers = !!i1131[18]
  i1130.queriesStartInColliders = !!i1131[19]
  i1130.callbacksOnDisable = !!i1131[20]
  i1130.reuseCollisionCallbacks = !!i1131[21]
  i1130.autoSyncTransforms = !!i1131[22]
  var i1133 = i1131[23]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1133[i + 0]) );
  }
  i1130.collisionMatrix = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1137 = data
  i1136.enabled = !!i1137[0]
  i1136.layerId = i1137[1]
  i1136.otherLayerId = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1141[i + 0]) );
  }
  i1138.qualityLevels = i1140
  var i1143 = i1139[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1138.names = i1142
  i1138.shadows = i1139[2]
  i1138.anisotropicFiltering = i1139[3]
  i1138.antiAliasing = i1139[4]
  i1138.lodBias = i1139[5]
  i1138.shadowCascades = i1139[6]
  i1138.shadowDistance = i1139[7]
  i1138.shadowmaskMode = i1139[8]
  i1138.shadowProjection = i1139[9]
  i1138.shadowResolution = i1139[10]
  i1138.softParticles = !!i1139[11]
  i1138.softVegetation = !!i1139[12]
  i1138.activeColorSpace = i1139[13]
  i1138.desiredColorSpace = i1139[14]
  i1138.masterTextureLimit = i1139[15]
  i1138.maxQueuedFrames = i1139[16]
  i1138.particleRaycastBudget = i1139[17]
  i1138.pixelLightCount = i1139[18]
  i1138.realtimeReflectionProbes = !!i1139[19]
  i1138.shadowCascade2Split = i1139[20]
  i1138.shadowCascade4Split = new pc.Vec3( i1139[21], i1139[22], i1139[23] )
  i1138.streamingMipmapsActive = !!i1139[24]
  i1138.vSyncCount = i1139[25]
  i1138.asyncUploadBufferSize = i1139[26]
  i1138.asyncUploadTimeSlice = i1139[27]
  i1138.billboardsFaceCameraPosition = !!i1139[28]
  i1138.shadowNearPlaneOffset = i1139[29]
  i1138.streamingMipmapsMemoryBudget = i1139[30]
  i1138.maximumLODLevel = i1139[31]
  i1138.streamingMipmapsAddAllCameras = !!i1139[32]
  i1138.streamingMipmapsMaxLevelReduction = i1139[33]
  i1138.streamingMipmapsRenderersPerFrame = i1139[34]
  i1138.resolutionScalingFixedDPIFactor = i1139[35]
  i1138.streamingMipmapsMaxFileIORequests = i1139[36]
  i1138.currentQualityLevel = i1139[37]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1149 = data
  i1148.weight = i1149[0]
  i1148.vertices = i1149[1]
  i1148.normals = i1149[2]
  i1148.tangents = i1149[3]
  return i1148
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'm_ObjectArgument')
  i1150.m_ObjectArgumentAssemblyTypeName = i1151[2]
  i1150.m_IntArgument = i1151[3]
  i1150.m_FloatArgument = i1151[4]
  i1150.m_StringArgument = i1151[5]
  i1150.m_BoolArgument = !!i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1155 = data
  i1154.time = i1155[0]
  request.r(i1155[1], i1155[2], 0, i1154, 'value')
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1159 = data
  i1158.mode = i1159[0]
  i1158.parameter = i1159[1]
  i1158.threshold = i1159[2]
  return i1158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[49],"71":[45],"72":[45],"73":[45],"74":[45],"75":[45],"76":[45],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[49],"92":[33],"93":[94],"95":[94],"12":[11],"96":[29],"97":[12],"98":[11],"99":[33,11],"100":[11,16],"101":[11],"102":[16,11],"103":[33],"104":[16,11],"105":[11],"106":[107],"108":[107],"109":[107],"110":[11],"111":[11],"15":[12],"17":[16,11],"112":[11],"14":[12],"113":[11],"114":[11],"18":[11],"115":[11],"116":[11],"117":[11],"118":[11],"119":[11],"120":[11],"27":[16,11],"121":[11],"122":[11],"123":[11],"21":[11],"124":[16,11],"125":[11],"126":[29],"127":[29],"30":[29],"128":[29],"129":[49],"130":[49]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.HorizontalLayoutGroup","UICheckBoxHolder","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","GameManager","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","ChoiceBoardPlacer","UnityEngine.ParticleSystem","PlayerVisual","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_V13";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1781";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5089";

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

Deserializers.buildID = "12ac1d77-ff2f-4179-86d8-9c091808640c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

