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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i661 = data
  i660.name = i661[0]
  i660.width = i661[1]
  i660.height = i661[2]
  i660.mipmapCount = i661[3]
  i660.anisoLevel = i661[4]
  i660.filterMode = i661[5]
  i660.hdr = !!i661[6]
  i660.format = i661[7]
  i660.wrapMode = i661[8]
  i660.alphaIsTransparency = !!i661[9]
  i660.alphaSource = i661[10]
  i660.graphicsFormat = i661[11]
  i660.sRGBTexture = !!i661[12]
  i660.desiredColorSpace = i661[13]
  i660.wrapU = i661[14]
  i660.wrapV = i661[15]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i663 = data
  i662.position = new pc.Vec3( i663[0], i663[1], i663[2] )
  i662.scale = new pc.Vec3( i663[3], i663[4], i663[5] )
  i662.rotation = new pc.Quat(i663[6], i663[7], i663[8], i663[9])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i665 = data
  i664.center = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.size = new pc.Vec3( i665[3], i665[4], i665[5] )
  i664.enabled = !!i665[6]
  i664.isTrigger = !!i665[7]
  request.r(i665[8], i665[9], 0, i664, 'material')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i667 = data
  i666.color = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  request.r(i667[4], i667[5], 0, i666, 'sprite')
  i666.flipX = !!i667[6]
  i666.flipY = !!i667[7]
  i666.drawMode = i667[8]
  i666.size = new pc.Vec2( i667[9], i667[10] )
  i666.tileMode = i667[11]
  i666.adaptiveModeThreshold = i667[12]
  i666.maskInteraction = i667[13]
  i666.spriteSortPoint = i667[14]
  i666.enabled = !!i667[15]
  request.r(i667[16], i667[17], 0, i666, 'sharedMaterial')
  var i669 = i667[18]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[19]
  i666.shadowCastingMode = i667[20]
  i666.sortingLayerID = i667[21]
  i666.sortingOrder = i667[22]
  i666.lightmapIndex = i667[23]
  i666.lightmapSceneIndex = i667[24]
  i666.lightmapScaleOffset = new pc.Vec4( i667[25], i667[26], i667[27], i667[28] )
  i666.lightProbeUsage = i667[29]
  i666.reflectionProbeUsage = i667[30]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i673 = data
  i672.name = i673[0]
  i672.tagId = i673[1]
  i672.enabled = !!i673[2]
  i672.isStatic = !!i673[3]
  i672.layer = i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'sharedMesh')
  var i677 = i675[2]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.bones = i676
  i674.updateWhenOffscreen = !!i675[3]
  i674.localBounds = i675[4]
  request.r(i675[5], i675[6], 0, i674, 'rootBone')
  var i679 = i675[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i679[i + 0]) );
  }
  i674.blendShapesWeights = i678
  i674.enabled = !!i675[8]
  request.r(i675[9], i675[10], 0, i674, 'sharedMaterial')
  var i681 = i675[11]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i674.sharedMaterials = i680
  i674.receiveShadows = !!i675[12]
  i674.shadowCastingMode = i675[13]
  i674.sortingLayerID = i675[14]
  i674.sortingOrder = i675[15]
  i674.lightmapIndex = i675[16]
  i674.lightmapSceneIndex = i675[17]
  i674.lightmapScaleOffset = new pc.Vec4( i675[18], i675[19], i675[20], i675[21] )
  i674.lightProbeUsage = i675[22]
  i674.reflectionProbeUsage = i675[23]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i687 = data
  i686.weight = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i689 = data
  i688.pivot = new pc.Vec2( i689[0], i689[1] )
  i688.anchorMin = new pc.Vec2( i689[2], i689[3] )
  i688.anchorMax = new pc.Vec2( i689[4], i689[5] )
  i688.sizeDelta = new pc.Vec2( i689[6], i689[7] )
  i688.anchoredPosition3D = new pc.Vec3( i689[8], i689[9], i689[10] )
  i688.rotation = new pc.Quat(i689[11], i689[12], i689[13], i689[14])
  i688.scale = new pc.Vec3( i689[15], i689[16], i689[17] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i691 = data
  i690.planeDistance = i691[0]
  i690.referencePixelsPerUnit = i691[1]
  i690.isFallbackOverlay = !!i691[2]
  i690.renderMode = i691[3]
  i690.renderOrder = i691[4]
  i690.sortingLayerName = i691[5]
  i690.sortingOrder = i691[6]
  i690.scaleFactor = i691[7]
  request.r(i691[8], i691[9], 0, i690, 'worldCamera')
  i690.overrideSorting = !!i691[10]
  i690.pixelPerfect = !!i691[11]
  i690.targetDisplay = i691[12]
  i690.overridePixelPerfect = !!i691[13]
  i690.enabled = !!i691[14]
  return i690
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i693 = data
  i692.m_UiScaleMode = i693[0]
  i692.m_ReferencePixelsPerUnit = i693[1]
  i692.m_ScaleFactor = i693[2]
  i692.m_ReferenceResolution = new pc.Vec2( i693[3], i693[4] )
  i692.m_ScreenMatchMode = i693[5]
  i692.m_MatchWidthOrHeight = i693[6]
  i692.m_PhysicalUnit = i693[7]
  i692.m_FallbackScreenDPI = i693[8]
  i692.m_DefaultSpriteDPI = i693[9]
  i692.m_DynamicPixelsPerUnit = i693[10]
  i692.m_PresetInfoIsWorld = !!i693[11]
  return i692
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i695 = data
  i694.m_IgnoreReversedGraphics = !!i695[0]
  i694.m_BlockingObjects = i695[1]
  i694.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i695[2] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i697 = data
  i696.cullTransparentMesh = !!i697[0]
  return i696
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.Image' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Sprite')
  i698.m_Type = i699[2]
  i698.m_PreserveAspect = !!i699[3]
  i698.m_FillCenter = !!i699[4]
  i698.m_FillMethod = i699[5]
  i698.m_FillAmount = i699[6]
  i698.m_FillClockwise = !!i699[7]
  i698.m_FillOrigin = i699[8]
  i698.m_UseSpriteMesh = !!i699[9]
  i698.m_PixelsPerUnitMultiplier = i699[10]
  request.r(i699[11], i699[12], 0, i698, 'm_Material')
  i698.m_Maskable = !!i699[13]
  i698.m_Color = new pc.Color(i699[14], i699[15], i699[16], i699[17])
  i698.m_RaycastTarget = !!i699[18]
  i698.m_RaycastPadding = new pc.Vec4( i699[19], i699[20], i699[21], i699[22] )
  return i698
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Texture')
  i700.m_UVRect = UnityEngine.Rect.MinMaxRect(i701[2], i701[3], i701[4], i701[5])
  request.r(i701[6], i701[7], 0, i700, 'm_Material')
  i700.m_Maskable = !!i701[8]
  i700.m_Color = new pc.Color(i701[9], i701[10], i701[11], i701[12])
  i700.m_RaycastTarget = !!i701[13]
  i700.m_RaycastPadding = new pc.Vec4( i701[14], i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i702 = root || request.c( 'ImageScroller' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'rawImage')
  i702.moveVector = new pc.Vec2( i703[2], i703[3] )
  return i702
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i704 = root || request.c( 'UIGuidingMove' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'target')
  i704.startPosition = new pc.Vec2( i705[2], i705[3] )
  i704.endPosition = new pc.Vec2( i705[4], i705[5] )
  i704.duration = i705[6]
  i704.ease = i705[7]
  i704.resetToStartOnComplete = !!i705[8]
  i704.loop = !!i705[9]
  i704.loopCount = i705[10]
  i704.loopType = i705[11]
  return i704
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i706 = root || request.c( 'UIPulse' )
  var i707 = data
  i706.targetScale = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.duration = i707[3]
  i706.ease = i707[4]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i709 = data
  i708.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i709[0], i708.main)
  i708.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i709[1], i708.colorBySpeed)
  i708.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i709[2], i708.colorOverLifetime)
  i708.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i709[3], i708.emission)
  i708.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i709[4], i708.rotationBySpeed)
  i708.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i709[5], i708.rotationOverLifetime)
  i708.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i709[6], i708.shape)
  i708.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i709[7], i708.sizeBySpeed)
  i708.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i709[8], i708.sizeOverLifetime)
  i708.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i709[9], i708.textureSheetAnimation)
  i708.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i709[10], i708.velocityOverLifetime)
  i708.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i709[11], i708.noise)
  i708.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i709[12], i708.inheritVelocity)
  i708.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i709[13], i708.forceOverLifetime)
  i708.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i709[14], i708.limitVelocityOverLifetime)
  i708.useAutoRandomSeed = !!i709[15]
  i708.randomSeed = i709[16]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemMain()
  var i711 = data
  i710.duration = i711[0]
  i710.loop = !!i711[1]
  i710.prewarm = !!i711[2]
  i710.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.startDelay)
  i710.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.startLifetime)
  i710.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[5], i710.startSpeed)
  i710.startSize3D = !!i711[6]
  i710.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[7], i710.startSizeX)
  i710.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[8], i710.startSizeY)
  i710.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[9], i710.startSizeZ)
  i710.startRotation3D = !!i711[10]
  i710.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[11], i710.startRotationX)
  i710.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[12], i710.startRotationY)
  i710.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[13], i710.startRotationZ)
  i710.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i711[14], i710.startColor)
  i710.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[15], i710.gravityModifier)
  i710.simulationSpace = i711[16]
  request.r(i711[17], i711[18], 0, i710, 'customSimulationSpace')
  i710.simulationSpeed = i711[19]
  i710.useUnscaledTime = !!i711[20]
  i710.scalingMode = i711[21]
  i710.playOnAwake = !!i711[22]
  i710.maxParticles = i711[23]
  i710.emitterVelocityMode = i711[24]
  i710.stopAction = i711[25]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i712 = root || new pc.MinMaxCurve()
  var i713 = data
  i712.mode = i713[0]
  i712.curveMin = new pc.AnimationCurve( { keys_flow: i713[1] } )
  i712.curveMax = new pc.AnimationCurve( { keys_flow: i713[2] } )
  i712.curveMultiplier = i713[3]
  i712.constantMin = i713[4]
  i712.constantMax = i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i714 = root || new pc.MinMaxGradient()
  var i715 = data
  i714.mode = i715[0]
  i714.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i715[1], i714.gradientMin)
  i714.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i715[2], i714.gradientMax)
  i714.colorMin = new pc.Color(i715[3], i715[4], i715[5], i715[6])
  i714.colorMax = new pc.Color(i715[7], i715[8], i715[9], i715[10])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i717 = data
  i716.mode = i717[0]
  var i719 = i717[1]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i719[i + 0]) );
  }
  i716.colorKeys = i718
  var i721 = i717[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i721[i + 0]) );
  }
  i716.alphaKeys = i720
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemColorBySpeed()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i723[1], i722.color)
  i722.range = new pc.Vec2( i723[2], i723[3] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i727 = data
  i726.color = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.time = i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i731 = data
  i730.alpha = i731[0]
  i730.time = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemColorOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i733[1], i732.color)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemEmitter()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.rateOverTime)
  i734.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.rateOverDistance)
  var i737 = i735[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i737[i + 0]) );
  }
  i734.bursts = i736
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemBurst()
  var i741 = data
  i740.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[0], i740.count)
  i740.cycleCount = i741[1]
  i740.minCount = i741[2]
  i740.maxCount = i741[3]
  i740.repeatInterval = i741[4]
  i740.time = i741[5]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemRotationBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.separateAxes = !!i743[4]
  i742.range = new pc.Vec2( i743[5], i743[6] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemRotationOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemShape()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.shapeType = i747[1]
  i746.randomDirectionAmount = i747[2]
  i746.sphericalDirectionAmount = i747[3]
  i746.randomPositionAmount = i747[4]
  i746.alignToDirection = !!i747[5]
  i746.radius = i747[6]
  i746.radiusMode = i747[7]
  i746.radiusSpread = i747[8]
  i746.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[9], i746.radiusSpeed)
  i746.radiusThickness = i747[10]
  i746.angle = i747[11]
  i746.length = i747[12]
  i746.boxThickness = new pc.Vec3( i747[13], i747[14], i747[15] )
  i746.meshShapeType = i747[16]
  request.r(i747[17], i747[18], 0, i746, 'mesh')
  request.r(i747[19], i747[20], 0, i746, 'meshRenderer')
  request.r(i747[21], i747[22], 0, i746, 'skinnedMeshRenderer')
  i746.useMeshMaterialIndex = !!i747[23]
  i746.meshMaterialIndex = i747[24]
  i746.useMeshColors = !!i747[25]
  i746.normalOffset = i747[26]
  i746.arc = i747[27]
  i746.arcMode = i747[28]
  i746.arcSpread = i747[29]
  i746.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[30], i746.arcSpeed)
  i746.donutRadius = i747[31]
  i746.position = new pc.Vec3( i747[32], i747[33], i747[34] )
  i746.rotation = new pc.Vec3( i747[35], i747[36], i747[37] )
  i746.scale = new pc.Vec3( i747[38], i747[39], i747[40] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemSizeBySpeed()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  i748.range = new pc.Vec2( i749[5], i749[6] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemSizeOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.mode = i753[1]
  i752.animation = i753[2]
  i752.numTilesX = i753[3]
  i752.numTilesY = i753[4]
  i752.useRandomRow = !!i753[5]
  i752.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[6], i752.frameOverTime)
  i752.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.startFrame)
  i752.cycleCount = i753[8]
  i752.rowIndex = i753[9]
  i752.flipU = i753[10]
  i752.flipV = i753[11]
  i752.spriteCount = i753[12]
  var i755 = i753[13]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sprites = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.radial)
  i758.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.speedModifier)
  i758.space = i759[6]
  i758.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.orbitalX)
  i758.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.orbitalY)
  i758.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.orbitalZ)
  i758.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[10], i758.orbitalOffsetX)
  i758.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.orbitalOffsetY)
  i758.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.orbitalOffsetZ)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemNoise()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.separateAxes = !!i761[1]
  i760.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.strengthX)
  i760.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.strengthY)
  i760.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.strengthZ)
  i760.frequency = i761[5]
  i760.damping = !!i761[6]
  i760.octaveCount = i761[7]
  i760.octaveMultiplier = i761[8]
  i760.octaveScale = i761[9]
  i760.quality = i761[10]
  i760.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.scrollSpeed)
  i760.scrollSpeedMultiplier = i761[12]
  i760.remapEnabled = !!i761[13]
  i760.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[14], i760.remapX)
  i760.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[15], i760.remapY)
  i760.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[16], i760.remapZ)
  i760.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[17], i760.positionAmount)
  i760.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[18], i760.rotationAmount)
  i760.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[19], i760.sizeAmount)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemInheritVelocity()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.mode = i763[1]
  i762.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.curve)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemForceOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.space = i765[4]
  i764.randomized = !!i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.limit)
  i766.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.limitX)
  i766.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.limitY)
  i766.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.limitZ)
  i766.dampen = i767[5]
  i766.separateAxes = !!i767[6]
  i766.space = i767[7]
  i766.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.drag)
  i766.multiplyDragByParticleSize = !!i767[9]
  i766.multiplyDragByParticleVelocity = !!i767[10]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'mesh')
  i768.meshCount = i769[2]
  i768.activeVertexStreamsCount = i769[3]
  i768.alignment = i769[4]
  i768.renderMode = i769[5]
  i768.sortMode = i769[6]
  i768.lengthScale = i769[7]
  i768.velocityScale = i769[8]
  i768.cameraVelocityScale = i769[9]
  i768.normalDirection = i769[10]
  i768.sortingFudge = i769[11]
  i768.minParticleSize = i769[12]
  i768.maxParticleSize = i769[13]
  i768.pivot = new pc.Vec3( i769[14], i769[15], i769[16] )
  request.r(i769[17], i769[18], 0, i768, 'trailMaterial')
  i768.applyActiveColorSpace = !!i769[19]
  i768.enabled = !!i769[20]
  request.r(i769[21], i769[22], 0, i768, 'sharedMaterial')
  var i771 = i769[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.sharedMaterials = i770
  i768.receiveShadows = !!i769[24]
  i768.shadowCastingMode = i769[25]
  i768.sortingLayerID = i769[26]
  i768.sortingOrder = i769[27]
  i768.lightmapIndex = i769[28]
  i768.lightmapSceneIndex = i769[29]
  i768.lightmapScaleOffset = new pc.Vec4( i769[30], i769[31], i769[32], i769[33] )
  i768.lightProbeUsage = i769[34]
  i768.reflectionProbeUsage = i769[35]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i773 = data
  i772.name = i773[0]
  i772.atlasId = i773[1]
  i772.mipmapCount = i773[2]
  i772.hdr = !!i773[3]
  i772.size = i773[4]
  i772.anisoLevel = i773[5]
  i772.filterMode = i773[6]
  var i775 = i773[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 4) {
    i774.push( UnityEngine.Rect.MinMaxRect(i775[i + 0], i775[i + 1], i775[i + 2], i775[i + 3]) );
  }
  i772.rects = i774
  i772.wrapU = i773[8]
  i772.wrapV = i773[9]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i779 = data
  i778.name = i779[0]
  i778.index = i779[1]
  i778.startup = !!i779[2]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i781 = data
  i780.aspect = i781[0]
  i780.orthographic = !!i781[1]
  i780.orthographicSize = i781[2]
  i780.backgroundColor = new pc.Color(i781[3], i781[4], i781[5], i781[6])
  i780.nearClipPlane = i781[7]
  i780.farClipPlane = i781[8]
  i780.fieldOfView = i781[9]
  i780.depth = i781[10]
  i780.clearFlags = i781[11]
  i780.cullingMask = i781[12]
  i780.rect = i781[13]
  request.r(i781[14], i781[15], 0, i780, 'targetTexture')
  i780.usePhysicalProperties = !!i781[16]
  i780.focalLength = i781[17]
  i780.sensorSize = new pc.Vec2( i781[18], i781[19] )
  i780.lensShift = new pc.Vec2( i781[20], i781[21] )
  i780.gateFit = i781[22]
  i780.commandBufferCount = i781[23]
  i780.cameraType = i781[24]
  i780.enabled = !!i781[25]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'sharedMesh')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'additionalVertexStreams')
  i784.enabled = !!i785[2]
  request.r(i785[3], i785[4], 0, i784, 'sharedMaterial')
  var i787 = i785[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[6]
  i784.shadowCastingMode = i785[7]
  i784.sortingLayerID = i785[8]
  i784.sortingOrder = i785[9]
  i784.lightmapIndex = i785[10]
  i784.lightmapSceneIndex = i785[11]
  i784.lightmapScaleOffset = new pc.Vec4( i785[12], i785[13], i785[14], i785[15] )
  i784.lightProbeUsage = i785[16]
  i784.reflectionProbeUsage = i785[17]
  return i784
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i788 = root || request.c( 'MaterialUVScroller' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'targetMaterial')
  i788.scrollSpeed = new pc.Vec2( i789[2], i789[3] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i791 = data
  i790.type = i791[0]
  i790.color = new pc.Color(i791[1], i791[2], i791[3], i791[4])
  i790.cullingMask = i791[5]
  i790.intensity = i791[6]
  i790.range = i791[7]
  i790.spotAngle = i791[8]
  i790.shadows = i791[9]
  i790.shadowNormalBias = i791[10]
  i790.shadowBias = i791[11]
  i790.shadowStrength = i791[12]
  i790.shadowResolution = i791[13]
  i790.lightmapBakeType = i791[14]
  i790.renderMode = i791[15]
  request.r(i791[16], i791[17], 0, i790, 'cookie')
  i790.cookieSize = i791[18]
  i790.shadowNearPlane = i791[19]
  i790.enabled = !!i791[20]
  return i790
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_FirstSelected')
  i792.m_sendNavigationEvents = !!i793[2]
  i792.m_DragThreshold = i793[3]
  return i792
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i795 = data
  i794.m_HorizontalAxis = i795[0]
  i794.m_VerticalAxis = i795[1]
  i794.m_SubmitButton = i795[2]
  i794.m_CancelButton = i795[3]
  i794.m_InputActionsPerSecond = i795[4]
  i794.m_RepeatDelay = i795[5]
  i794.m_ForceModuleActive = !!i795[6]
  i794.m_SendPointerHoverToParent = !!i795[7]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'animatorController')
  request.r(i797[2], i797[3], 0, i796, 'avatar')
  i796.updateMode = i797[4]
  i796.hasTransformHierarchy = !!i797[5]
  i796.applyRootMotion = !!i797[6]
  var i799 = i797[7]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.humanBones = i798
  i796.enabled = !!i797[8]
  return i796
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i800 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'animator')
  i800.kickDuration = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i803 = data
  i802.center = new pc.Vec3( i803[0], i803[1], i803[2] )
  i802.radius = i803[3]
  i802.enabled = !!i803[4]
  i802.isTrigger = !!i803[5]
  request.r(i803[6], i803[7], 0, i802, 'material')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i805 = data
  i804.mass = i805[0]
  i804.drag = i805[1]
  i804.angularDrag = i805[2]
  i804.useGravity = !!i805[3]
  i804.isKinematic = !!i805[4]
  i804.constraints = i805[5]
  i804.maxAngularVelocity = i805[6]
  i804.collisionDetectionMode = i805[7]
  i804.interpolation = i805[8]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 3) {
    i808.push( new pc.Vec3( i809[i + 0], i809[i + 1], i809[i + 2] ) );
  }
  i806.positions = i808
  i806.positionCount = i807[1]
  i806.time = i807[2]
  i806.startWidth = i807[3]
  i806.endWidth = i807[4]
  i806.widthMultiplier = i807[5]
  i806.autodestruct = !!i807[6]
  i806.emitting = !!i807[7]
  i806.numCornerVertices = i807[8]
  i806.numCapVertices = i807[9]
  i806.minVertexDistance = i807[10]
  i806.colorGradient = i807[11] ? new pc.ColorGradient(i807[11][0], i807[11][1], i807[11][2]) : null
  i806.startColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.endColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.generateLightingData = !!i807[20]
  i806.textureMode = i807[21]
  i806.alignment = i807[22]
  i806.widthCurve = new pc.AnimationCurve( { keys_flow: i807[23] } )
  i806.enabled = !!i807[24]
  request.r(i807[25], i807[26], 0, i806, 'sharedMaterial')
  var i811 = i807[27]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i806.sharedMaterials = i810
  i806.receiveShadows = !!i807[28]
  i806.shadowCastingMode = i807[29]
  i806.sortingLayerID = i807[30]
  i806.sortingOrder = i807[31]
  i806.lightmapIndex = i807[32]
  i806.lightmapSceneIndex = i807[33]
  i806.lightmapScaleOffset = new pc.Vec4( i807[34], i807[35], i807[36], i807[37] )
  i806.lightProbeUsage = i807[38]
  i806.reflectionProbeUsage = i807[39]
  return i806
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i814 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i815 = data
  i814.blockBounceSpeed = i815[0]
  i814.blockBounceUpward = i815[1]
  i814.goalFallSpeed = i815[2]
  i814.goalFallDownward = i815[3]
  i814.goalDropDamping = i815[4]
  request.r(i815[5], i815[6], 0, i814, 'leftTop')
  request.r(i815[7], i815[8], 0, i814, 'bottomCenter')
  request.r(i815[9], i815[10], 0, i814, 'rightTop')
  i814.leftTopY = i815[11]
  i814.bottomCenterY = i815[12]
  i814.rightTopY = i815[13]
  i814.halfWidth = i815[14]
  i814.goalZ = i815[15]
  i814.flightTime = i815[16]
  request.r(i815[17], i815[18], 0, i814, 'trailRenderer')
  i814.goalTag = i815[19]
  return i814
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i816 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'leftPost')
  request.r(i817[2], i817[3], 0, i816, 'rightPost')
  i816.baseSpeed = i817[4]
  i816.changeSpeedByRound = !!i817[5]
  return i816
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i818 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'leftLimit')
  request.r(i819[2], i819[3], 0, i818, 'rightLimit')
  i818.speed = i819[4]
  i818.startActive = !!i819[5]
  return i818
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i820 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'leftPoint')
  request.r(i821[2], i821[3], 0, i820, 'rightPoint')
  i820.speed = i821[4]
  request.r(i821[5], i821[6], 0, i820, 'aimLineRenderer')
  request.r(i821[7], i821[8], 0, i820, 'ballTransform')
  i820.lineWidth = i821[9]
  i820.dashDensity = i821[10]
  i820.dashRatio = i821[11]
  i820.dashColor = new pc.Color(i821[12], i821[13], i821[14], i821[15])
  i820.lineGroundY = i821[16]
  i820.pulseEffect = !!i821[17]
  i820.pulseSpeed = i821[18]
  i820.pulseScaleAmount = i821[19]
  i820.sortingOrder = i821[20]
  i820.sortingLayerName = i821[21]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i823 = data
  i822.textureMode = i823[0]
  i822.alignment = i823[1]
  i822.widthCurve = new pc.AnimationCurve( { keys_flow: i823[2] } )
  i822.colorGradient = i823[3] ? new pc.ColorGradient(i823[3][0], i823[3][1], i823[3][2]) : null
  var i825 = i823[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 3) {
    i824.push( new pc.Vec3( i825[i + 0], i825[i + 1], i825[i + 2] ) );
  }
  i822.positions = i824
  i822.positionCount = i823[5]
  i822.widthMultiplier = i823[6]
  i822.startWidth = i823[7]
  i822.endWidth = i823[8]
  i822.numCornerVertices = i823[9]
  i822.numCapVertices = i823[10]
  i822.useWorldSpace = !!i823[11]
  i822.loop = !!i823[12]
  i822.startColor = new pc.Color(i823[13], i823[14], i823[15], i823[16])
  i822.endColor = new pc.Color(i823[17], i823[18], i823[19], i823[20])
  i822.generateLightingData = !!i823[21]
  i822.enabled = !!i823[22]
  request.r(i823[23], i823[24], 0, i822, 'sharedMaterial')
  var i827 = i823[25]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i822.sharedMaterials = i826
  i822.receiveShadows = !!i823[26]
  i822.shadowCastingMode = i823[27]
  i822.sortingLayerID = i823[28]
  i822.sortingOrder = i823[29]
  i822.lightmapIndex = i823[30]
  i822.lightmapSceneIndex = i823[31]
  i822.lightmapScaleOffset = new pc.Vec4( i823[32], i823[33], i823[34], i823[35] )
  i822.lightProbeUsage = i823[36]
  i822.reflectionProbeUsage = i823[37]
  return i822
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i828 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i829 = data
  i828.kickImpactDelay = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'ball')
  request.r(i829[3], i829[4], 0, i828, 'targetMover')
  request.r(i829[5], i829[6], 0, i828, 'goalkeeper')
  request.r(i829[7], i829[8], 0, i828, 'ronaldoAnimator')
  request.r(i829[9], i829[10], 0, i828, 'uiManager')
  request.r(i829[11], i829[12], 0, i828, 'defenderRound2')
  request.r(i829[13], i829[14], 0, i828, 'defenderRound3')
  i828.targetSpeeds = i829[15]
  i828.delayBetweenRounds = i829[16]
  i828.promptEveryRound = !!i829[17]
  return i828
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i830 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i831 = data
  var i833 = i831[0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.roundIndicators = i832
  request.r(i831[1], i831[2], 0, i830, 'iconEmpty')
  request.r(i831[3], i831[4], 0, i830, 'iconCheck')
  request.r(i831[5], i831[6], 0, i830, 'iconCross')
  request.r(i831[7], i831[8], 0, i830, 'winEndcardPanel')
  request.r(i831[9], i831[10], 0, i830, 'losePanel')
  request.r(i831[11], i831[12], 0, i830, 'promptText')
  var i835 = i831[13]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i830.objectsToShowOnWin = i834
  i830.winDelay = i831[14]
  var i837 = i831[15]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i830.objectsToHideOnWin = i836
  var i839 = i831[16]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i830.objectsToHideOnLose = i838
  var i841 = i831[17]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i830.extraObjectsToHide = i840
  return i830
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i846 = root || request.c( 'Ply_SoundManager' )
  var i847 = data
  i846.audioClips = request.d('FxAudio', i847[0], i846.audioClips)
  request.r(i847[1], i847[2], 0, i846, 'sound')
  i846.enableSound = !!i847[3]
  i846.bgmVolume = i847[4]
  return i846
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i848 = root || request.c( 'FxAudio' )
  var i849 = data
  i848.Clock = request.d('SoundData', i849[0], i848.Clock)
  i848.PlayerWin = request.d('SoundData', i849[1], i848.PlayerWin)
  i848.PlayerLoose = request.d('SoundData', i849[2], i848.PlayerLoose)
  i848.RightChoice = request.d('SoundData', i849[3], i848.RightChoice)
  i848.WrongChoice = request.d('SoundData', i849[4], i848.WrongChoice)
  i848.MaxLevel = request.d('SoundData', i849[5], i848.MaxLevel)
  i848.FightingCloud = request.d('SoundData', i849[6], i848.FightingCloud)
  i848.Confetti = request.d('SoundData', i849[7], i848.Confetti)
  return i848
}

Deserializers["SoundData"] = function (request, data, root) {
  var i850 = root || request.c( 'SoundData' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'clip')
  i850.volume = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'clip')
  request.r(i853[2], i853[3], 0, i852, 'outputAudioMixerGroup')
  i852.playOnAwake = !!i853[4]
  i852.loop = !!i853[5]
  i852.time = i853[6]
  i852.volume = i853[7]
  i852.pitch = i853[8]
  i852.enabled = !!i853[9]
  return i852
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button' )
  var i855 = data
  i854.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i855[0], i854.m_OnClick)
  i854.m_Navigation = request.d('UnityEngine.UI.Navigation', i855[1], i854.m_Navigation)
  i854.m_Transition = i855[2]
  i854.m_Colors = request.d('UnityEngine.UI.ColorBlock', i855[3], i854.m_Colors)
  i854.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i855[4], i854.m_SpriteState)
  i854.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i855[5], i854.m_AnimationTriggers)
  i854.m_Interactable = !!i855[6]
  request.r(i855[7], i855[8], 0, i854, 'm_TargetGraphic')
  return i854
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i857 = data
  i856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i857[0], i856.m_PersistentCalls)
  return i856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('UnityEngine.Events.PersistentCall', i861[i + 0]));
  }
  i858.m_Calls = i860
  return i858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Target')
  i864.m_TargetAssemblyTypeName = i865[2]
  i864.m_MethodName = i865[3]
  i864.m_Mode = i865[4]
  i864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i865[5], i864.m_Arguments)
  i864.m_CallState = i865[6]
  return i864
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_ObjectArgument')
  i866.m_ObjectArgumentAssemblyTypeName = i867[2]
  i866.m_IntArgument = i867[3]
  i866.m_FloatArgument = i867[4]
  i866.m_StringArgument = i867[5]
  i866.m_BoolArgument = !!i867[6]
  return i866
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i869 = data
  i868.m_Mode = i869[0]
  i868.m_WrapAround = !!i869[1]
  request.r(i869[2], i869[3], 0, i868, 'm_SelectOnUp')
  request.r(i869[4], i869[5], 0, i868, 'm_SelectOnDown')
  request.r(i869[6], i869[7], 0, i868, 'm_SelectOnLeft')
  request.r(i869[8], i869[9], 0, i868, 'm_SelectOnRight')
  return i868
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i871 = data
  i870.m_NormalColor = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.m_HighlightedColor = new pc.Color(i871[4], i871[5], i871[6], i871[7])
  i870.m_PressedColor = new pc.Color(i871[8], i871[9], i871[10], i871[11])
  i870.m_SelectedColor = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  i870.m_DisabledColor = new pc.Color(i871[16], i871[17], i871[18], i871[19])
  i870.m_ColorMultiplier = i871[20]
  i870.m_FadeDuration = i871[21]
  return i870
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_HighlightedSprite')
  request.r(i873[2], i873[3], 0, i872, 'm_PressedSprite')
  request.r(i873[4], i873[5], 0, i872, 'm_SelectedSprite')
  request.r(i873[6], i873[7], 0, i872, 'm_DisabledSprite')
  return i872
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i875 = data
  i874.m_NormalTrigger = i875[0]
  i874.m_HighlightedTrigger = i875[1]
  i874.m_PressedTrigger = i875[2]
  i874.m_SelectedTrigger = i875[3]
  i874.m_DisabledTrigger = i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i877 = data
  i876.ambientIntensity = i877[0]
  i876.reflectionIntensity = i877[1]
  i876.ambientMode = i877[2]
  i876.ambientLight = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.ambientSkyColor = new pc.Color(i877[7], i877[8], i877[9], i877[10])
  i876.ambientGroundColor = new pc.Color(i877[11], i877[12], i877[13], i877[14])
  i876.ambientEquatorColor = new pc.Color(i877[15], i877[16], i877[17], i877[18])
  i876.fogColor = new pc.Color(i877[19], i877[20], i877[21], i877[22])
  i876.fogEndDistance = i877[23]
  i876.fogStartDistance = i877[24]
  i876.fogDensity = i877[25]
  i876.fog = !!i877[26]
  request.r(i877[27], i877[28], 0, i876, 'skybox')
  i876.fogMode = i877[29]
  var i879 = i877[30]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i879[i + 0]) );
  }
  i876.lightmaps = i878
  i876.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i877[31], i876.lightProbes)
  i876.lightmapsMode = i877[32]
  i876.mixedBakeMode = i877[33]
  i876.environmentLightingMode = i877[34]
  i876.ambientProbe = new pc.SphericalHarmonicsL2(i877[35])
  i876.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i877[36])
  i876.useReferenceAmbientProbe = !!i877[37]
  request.r(i877[38], i877[39], 0, i876, 'customReflection')
  request.r(i877[40], i877[41], 0, i876, 'defaultReflection')
  i876.defaultReflectionMode = i877[42]
  i876.defaultReflectionResolution = i877[43]
  i876.sunLightObjectId = i877[44]
  i876.pixelLightCount = i877[45]
  i876.defaultReflectionHDR = !!i877[46]
  i876.hasLightDataAsset = !!i877[47]
  i876.hasManualGenerate = !!i877[48]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'lightmapColor')
  request.r(i883[2], i883[3], 0, i882, 'lightmapDirection')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i884 = root || new UnityEngine.LightProbes()
  var i885 = data
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i891 = data
  i890.name = i891[0]
  i890.bounciness = i891[1]
  i890.dynamicFriction = i891[2]
  i890.staticFriction = i891[3]
  i890.frictionCombine = i891[4]
  i890.bounceCombine = i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i895[i + 0]));
  }
  i892.ShaderCompilationErrors = i894
  i892.name = i893[1]
  i892.guid = i893[2]
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.shaderDefinedKeywords = i896
  var i899 = i893[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i892.passes = i898
  var i901 = i893[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i901[i + 0]) );
  }
  i892.usePasses = i900
  var i903 = i893[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i903[i + 0]) );
  }
  i892.defaultParameterValues = i902
  request.r(i893[7], i893[8], 0, i892, 'unityFallbackShader')
  i892.readDepth = !!i893[9]
  i892.hasDepthOnlyPass = !!i893[10]
  i892.isCreatedByShaderGraph = !!i893[11]
  i892.disableBatching = !!i893[12]
  i892.compiled = !!i893[13]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i907 = data
  i906.shaderName = i907[0]
  i906.errorMessage = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i912 = root || new pc.UnityShaderPass()
  var i913 = data
  i912.id = i913[0]
  i912.subShaderIndex = i913[1]
  i912.name = i913[2]
  i912.passType = i913[3]
  i912.grabPassTextureName = i913[4]
  i912.usePass = !!i913[5]
  i912.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[6], i912.zTest)
  i912.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[7], i912.zWrite)
  i912.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[8], i912.culling)
  i912.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[9], i912.blending)
  i912.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[10], i912.alphaBlending)
  i912.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[11], i912.colorWriteMask)
  i912.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[12], i912.offsetUnits)
  i912.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[13], i912.offsetFactor)
  i912.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[14], i912.stencilRef)
  i912.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[15], i912.stencilReadMask)
  i912.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[16], i912.stencilWriteMask)
  i912.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[17], i912.stencilOp)
  i912.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[18], i912.stencilOpFront)
  i912.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[19], i912.stencilOpBack)
  var i915 = i913[20]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i915[i + 0]) );
  }
  i912.tags = i914
  var i917 = i913[21]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.passDefinedKeywords = i916
  var i919 = i913[22]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i919[i + 0]) );
  }
  i912.passDefinedKeywordGroups = i918
  var i921 = i913[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i921[i + 0]) );
  }
  i912.variants = i920
  var i923 = i913[24]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i923[i + 0]) );
  }
  i912.excludedVariants = i922
  i912.hasDepthReader = !!i913[25]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i925 = data
  i924.val = i925[0]
  i924.name = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i927 = data
  i926.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[0], i926.src)
  i926.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[1], i926.dst)
  i926.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[2], i926.op)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i929 = data
  i928.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[0], i928.pass)
  i928.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[1], i928.fail)
  i928.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[2], i928.zFail)
  i928.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[3], i928.comp)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i933 = data
  i932.name = i933[0]
  i932.value = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.keywords = i938
  i936.hasDiscard = !!i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i943 = data
  i942.passId = i943[0]
  i942.subShaderIndex = i943[1]
  var i945 = i943[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.vertexProgram = i943[3]
  i942.fragmentProgram = i943[4]
  i942.exportedForWebGl2 = !!i943[5]
  i942.readDepth = !!i943[6]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'shader')
  i948.pass = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i953 = data
  i952.name = i953[0]
  i952.type = i953[1]
  i952.value = new pc.Vec4( i953[2], i953[3], i953[4], i953[5] )
  i952.textureValue = i953[6]
  i952.shaderPropertyFlag = i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i955 = data
  i954.name = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'texture')
  i954.aabb = i955[3]
  i954.vertices = i955[4]
  i954.triangles = i955[5]
  i954.textureRect = UnityEngine.Rect.MinMaxRect(i955[6], i955[7], i955[8], i955[9])
  i954.packedRect = UnityEngine.Rect.MinMaxRect(i955[10], i955[11], i955[12], i955[13])
  i954.border = new pc.Vec4( i955[14], i955[15], i955[16], i955[17] )
  i954.transparency = i955[18]
  i954.bounds = i955[19]
  i954.pixelsPerUnit = i955[20]
  i954.textureWidth = i955[21]
  i954.textureHeight = i955[22]
  i954.nativeSize = new pc.Vec2( i955[23], i955[24] )
  i954.pivot = new pc.Vec2( i955[25], i955[26] )
  i954.textureRectOffset = new pc.Vec2( i955[27], i955[28] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i957 = data
  i956.name = i957[0]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i959 = data
  i958.name = i959[0]
  i958.wrapMode = i959[1]
  i958.isLooping = !!i959[2]
  i958.length = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i961[i + 0]) );
  }
  i958.curves = i960
  var i963 = i959[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i963[i + 0]) );
  }
  i958.events = i962
  i958.halfPrecision = !!i959[6]
  i958._frameRate = i959[7]
  i958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i959[8], i958.localBounds)
  i958.hasMuscleCurves = !!i959[9]
  var i965 = i959[10]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i958.clipMuscleConstant = i964
  i958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i959[11], i958.clipBindingConstant)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i969 = data
  i968.path = i969[0]
  i968.hash = i969[1]
  i968.componentType = i969[2]
  i968.property = i969[3]
  i968.keys = i969[4]
  var i971 = i969[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i971[i + 0]) );
  }
  i968.objectReferenceKeys = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i975 = data
  i974.time = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'value')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i979 = data
  i978.functionName = i979[0]
  i978.floatParameter = i979[1]
  i978.intParameter = i979[2]
  i978.stringParameter = i979[3]
  request.r(i979[4], i979[5], 0, i978, 'objectReferenceParameter')
  i978.time = i979[6]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i981 = data
  i980.center = new pc.Vec3( i981[0], i981[1], i981[2] )
  i980.extends = new pc.Vec3( i981[3], i981[4], i981[5] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.genericBindings = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.pptrCurveMapping = i988
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i991 = data
  i990.name = i991[0]
  var i993 = i991[1]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i993[i + 0]) );
  }
  i990.layers = i992
  var i995 = i991[2]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i995[i + 0]) );
  }
  i990.parameters = i994
  i990.animationClips = i991[3]
  i990.avatarUnsupported = i991[4]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i999 = data
  i998.name = i999[0]
  i998.defaultWeight = i999[1]
  i998.blendingMode = i999[2]
  i998.avatarMask = i999[3]
  i998.syncedLayerIndex = i999[4]
  i998.syncedLayerAffectsTiming = !!i999[5]
  i998.syncedLayers = i999[6]
  i998.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i999[7], i998.stateMachine)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  i1000.path = i1001[2]
  var i1003 = i1001[3]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1003[i + 0]) );
  }
  i1000.states = i1002
  var i1005 = i1001[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1005[i + 0]) );
  }
  i1000.machines = i1004
  var i1007 = i1001[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1007[i + 0]) );
  }
  i1000.entryStateTransitions = i1006
  var i1009 = i1001[6]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1009[i + 0]) );
  }
  i1000.exitStateTransitions = i1008
  var i1011 = i1001[7]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1011[i + 0]) );
  }
  i1000.anyStateTransitions = i1010
  i1000.defaultStateId = i1001[8]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  i1014.cycleOffset = i1015[2]
  i1014.cycleOffsetParameter = i1015[3]
  i1014.cycleOffsetParameterActive = !!i1015[4]
  i1014.mirror = !!i1015[5]
  i1014.mirrorParameter = i1015[6]
  i1014.mirrorParameterActive = !!i1015[7]
  i1014.motionId = i1015[8]
  i1014.nameHash = i1015[9]
  i1014.fullPathHash = i1015[10]
  i1014.speed = i1015[11]
  i1014.speedParameter = i1015[12]
  i1014.speedParameterActive = !!i1015[13]
  i1014.tag = i1015[14]
  i1014.tagHash = i1015[15]
  i1014.writeDefaultValues = !!i1015[16]
  var i1017 = i1015[17]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.behaviours = i1016
  var i1019 = i1015[18]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1019[i + 0]) );
  }
  i1014.transitions = i1018
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1025 = data
  i1024.fullPath = i1025[0]
  i1024.canTransitionToSelf = !!i1025[1]
  i1024.duration = i1025[2]
  i1024.exitTime = i1025[3]
  i1024.hasExitTime = !!i1025[4]
  i1024.hasFixedDuration = !!i1025[5]
  i1024.interruptionSource = i1025[6]
  i1024.offset = i1025[7]
  i1024.orderedInterruption = !!i1025[8]
  i1024.destinationStateId = i1025[9]
  i1024.isExit = !!i1025[10]
  i1024.mute = !!i1025[11]
  i1024.solo = !!i1025[12]
  var i1027 = i1025[13]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1027[i + 0]) );
  }
  i1024.conditions = i1026
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1033 = data
  i1032.destinationStateId = i1033[0]
  i1032.isExit = !!i1033[1]
  i1032.mute = !!i1033[2]
  i1032.solo = !!i1033[3]
  var i1035 = i1033[4]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1035[i + 0]) );
  }
  i1032.conditions = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1039 = data
  i1038.mode = i1039[0]
  i1038.parameter = i1039[1]
  i1038.threshold = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1043 = data
  i1042.defaultBool = !!i1043[0]
  i1042.defaultFloat = i1043[1]
  i1042.defaultInt = i1043[2]
  i1042.name = i1043[3]
  i1042.nameHash = i1043[4]
  i1042.type = i1043[5]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.bytes64 = i1045[1]
  i1044.data = i1045[2]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[7],"65":[11],"66":[36],"67":[36],"68":[36],"69":[36],"70":[36],"71":[36],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[11],"87":[26],"88":[89],"90":[89],"10":[9],"91":[29],"92":[10],"93":[9],"94":[26,9],"95":[9,15],"96":[9],"97":[15,9],"98":[26],"99":[15,9],"100":[9],"101":[102],"103":[102],"104":[102],"105":[9],"106":[9],"14":[10],"16":[15,9],"107":[9],"13":[10],"108":[9],"109":[9],"110":[9],"111":[9],"112":[9],"113":[9],"114":[9],"115":[9],"116":[9],"17":[15,9],"117":[9],"118":[9],"119":[9],"120":[9],"121":[15,9],"122":[9],"123":[29],"124":[29],"30":[29],"125":[29],"126":[11],"127":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "19.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5210";

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

Deserializers.buildID = "abd80144-ecf4-4eab-b232-9150f3a16b7d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

