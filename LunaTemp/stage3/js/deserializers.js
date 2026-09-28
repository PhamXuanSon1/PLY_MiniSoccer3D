var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.JointSpring' )
  var i1753 = data
  i1752.spring = i1753[0]
  i1752.damper = i1753[1]
  i1752.targetPosition = i1753[2]
  return i1752
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.JointMotor' )
  var i1755 = data
  i1754.m_TargetVelocity = i1755[0]
  i1754.m_Force = i1755[1]
  i1754.m_FreeSpin = i1755[2]
  return i1754
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.JointLimits' )
  var i1757 = data
  i1756.m_Min = i1757[0]
  i1756.m_Max = i1757[1]
  i1756.m_Bounciness = i1757[2]
  i1756.m_BounceMinVelocity = i1757[3]
  i1756.m_ContactDistance = i1757[4]
  i1756.minBounce = i1757[5]
  i1756.maxBounce = i1757[6]
  return i1756
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.JointDrive' )
  var i1759 = data
  i1758.m_PositionSpring = i1759[0]
  i1758.m_PositionDamper = i1759[1]
  i1758.m_MaximumForce = i1759[2]
  i1758.m_UseAcceleration = i1759[3]
  return i1758
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1761 = data
  i1760.m_Spring = i1761[0]
  i1760.m_Damper = i1761[1]
  return i1760
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1763 = data
  i1762.m_Limit = i1763[0]
  i1762.m_Bounciness = i1763[1]
  i1762.m_ContactDistance = i1763[2]
  return i1762
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1765 = data
  i1764.m_ExtremumSlip = i1765[0]
  i1764.m_ExtremumValue = i1765[1]
  i1764.m_AsymptoteSlip = i1765[2]
  i1764.m_AsymptoteValue = i1765[3]
  i1764.m_Stiffness = i1765[4]
  return i1764
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1767 = data
  i1766.m_LowerAngle = i1767[0]
  i1766.m_UpperAngle = i1767[1]
  return i1766
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1769 = data
  i1768.m_MotorSpeed = i1769[0]
  i1768.m_MaximumMotorTorque = i1769[1]
  return i1768
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1771 = data
  i1770.m_DampingRatio = i1771[0]
  i1770.m_Frequency = i1771[1]
  i1770.m_Angle = i1771[2]
  return i1770
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1773 = data
  i1772.m_LowerTranslation = i1773[0]
  i1772.m_UpperTranslation = i1773[1]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1775 = data
  i1774.pivot = new pc.Vec2( i1775[0], i1775[1] )
  i1774.anchorMin = new pc.Vec2( i1775[2], i1775[3] )
  i1774.anchorMax = new pc.Vec2( i1775[4], i1775[5] )
  i1774.sizeDelta = new pc.Vec2( i1775[6], i1775[7] )
  i1774.anchoredPosition3D = new pc.Vec3( i1775[8], i1775[9], i1775[10] )
  i1774.rotation = new pc.Quat(i1775[11], i1775[12], i1775[13], i1775[14])
  i1774.scale = new pc.Vec3( i1775[15], i1775[16], i1775[17] )
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1777 = data
  i1776.planeDistance = i1777[0]
  i1776.referencePixelsPerUnit = i1777[1]
  i1776.isFallbackOverlay = !!i1777[2]
  i1776.renderMode = i1777[3]
  i1776.renderOrder = i1777[4]
  i1776.sortingLayerName = i1777[5]
  i1776.sortingOrder = i1777[6]
  i1776.scaleFactor = i1777[7]
  request.r(i1777[8], i1777[9], 0, i1776, 'worldCamera')
  i1776.overrideSorting = !!i1777[10]
  i1776.pixelPerfect = !!i1777[11]
  i1776.targetDisplay = i1777[12]
  i1776.overridePixelPerfect = !!i1777[13]
  i1776.enabled = !!i1777[14]
  return i1776
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1779 = data
  i1778.m_UiScaleMode = i1779[0]
  i1778.m_ReferencePixelsPerUnit = i1779[1]
  i1778.m_ScaleFactor = i1779[2]
  i1778.m_ReferenceResolution = new pc.Vec2( i1779[3], i1779[4] )
  i1778.m_ScreenMatchMode = i1779[5]
  i1778.m_MatchWidthOrHeight = i1779[6]
  i1778.m_PhysicalUnit = i1779[7]
  i1778.m_FallbackScreenDPI = i1779[8]
  i1778.m_DefaultSpriteDPI = i1779[9]
  i1778.m_DynamicPixelsPerUnit = i1779[10]
  i1778.m_PresetInfoIsWorld = !!i1779[11]
  return i1778
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1781 = data
  i1780.m_IgnoreReversedGraphics = !!i1781[0]
  i1780.m_BlockingObjects = i1781[1]
  i1780.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1781[2] )
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1783 = data
  i1782.cullTransparentMesh = !!i1783[0]
  return i1782
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.Image' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'm_Sprite')
  i1784.m_Type = i1785[2]
  i1784.m_PreserveAspect = !!i1785[3]
  i1784.m_FillCenter = !!i1785[4]
  i1784.m_FillMethod = i1785[5]
  i1784.m_FillAmount = i1785[6]
  i1784.m_FillClockwise = !!i1785[7]
  i1784.m_FillOrigin = i1785[8]
  i1784.m_UseSpriteMesh = !!i1785[9]
  i1784.m_PixelsPerUnitMultiplier = i1785[10]
  request.r(i1785[11], i1785[12], 0, i1784, 'm_Material')
  i1784.m_Maskable = !!i1785[13]
  i1784.m_Color = new pc.Color(i1785[14], i1785[15], i1785[16], i1785[17])
  i1784.m_RaycastTarget = !!i1785[18]
  i1784.m_RaycastPadding = new pc.Vec4( i1785[19], i1785[20], i1785[21], i1785[22] )
  return i1784
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1787 = data
  i1786.m_Spacing = i1787[0]
  i1786.m_ChildForceExpandWidth = !!i1787[1]
  i1786.m_ChildForceExpandHeight = !!i1787[2]
  i1786.m_ChildControlWidth = !!i1787[3]
  i1786.m_ChildControlHeight = !!i1787[4]
  i1786.m_ChildScaleWidth = !!i1787[5]
  i1786.m_ChildScaleHeight = !!i1787[6]
  i1786.m_ReverseArrangement = !!i1787[7]
  i1786.m_Padding = UnityEngine.RectOffset.FromPaddings(i1787[8], i1787[9], i1787[10], i1787[11])
  i1786.m_ChildAlignment = i1787[12]
  return i1786
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i1788 = root || request.c( 'UICheckBox' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'iconImg')
  request.r(i1789[2], i1789[3], 0, i1788, 'startingSprite')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1791 = data
  i1790.name = i1791[0]
  i1790.tagId = i1791[1]
  i1790.enabled = !!i1791[2]
  i1790.isStatic = !!i1791[3]
  i1790.layer = i1791[4]
  return i1790
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'm_FillRect')
  request.r(i1793[2], i1793[3], 0, i1792, 'm_HandleRect')
  i1792.m_Direction = i1793[4]
  i1792.m_MinValue = i1793[5]
  i1792.m_MaxValue = i1793[6]
  i1792.m_WholeNumbers = !!i1793[7]
  i1792.m_Value = i1793[8]
  i1792.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1793[9], i1792.m_OnValueChanged)
  i1792.m_Navigation = request.d('UnityEngine.UI.Navigation', i1793[10], i1792.m_Navigation)
  i1792.m_Transition = i1793[11]
  i1792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1793[12], i1792.m_Colors)
  i1792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1793[13], i1792.m_SpriteState)
  i1792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1793[14], i1792.m_AnimationTriggers)
  i1792.m_Interactable = !!i1793[15]
  request.r(i1793[16], i1793[17], 0, i1792, 'm_TargetGraphic')
  return i1792
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1795 = data
  i1794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1795[0], i1794.m_PersistentCalls)
  return i1794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.add(request.d('UnityEngine.Events.PersistentCall', i1799[i + 0]));
  }
  i1796.m_Calls = i1798
  return i1796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_Target')
  i1802.m_TargetAssemblyTypeName = i1803[2]
  i1802.m_MethodName = i1803[3]
  i1802.m_Mode = i1803[4]
  i1802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1803[5], i1802.m_Arguments)
  i1802.m_CallState = i1803[6]
  return i1802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1805 = data
  i1804.m_Mode = i1805[0]
  i1804.m_WrapAround = !!i1805[1]
  request.r(i1805[2], i1805[3], 0, i1804, 'm_SelectOnUp')
  request.r(i1805[4], i1805[5], 0, i1804, 'm_SelectOnDown')
  request.r(i1805[6], i1805[7], 0, i1804, 'm_SelectOnLeft')
  request.r(i1805[8], i1805[9], 0, i1804, 'm_SelectOnRight')
  return i1804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1807 = data
  i1806.m_NormalColor = new pc.Color(i1807[0], i1807[1], i1807[2], i1807[3])
  i1806.m_HighlightedColor = new pc.Color(i1807[4], i1807[5], i1807[6], i1807[7])
  i1806.m_PressedColor = new pc.Color(i1807[8], i1807[9], i1807[10], i1807[11])
  i1806.m_SelectedColor = new pc.Color(i1807[12], i1807[13], i1807[14], i1807[15])
  i1806.m_DisabledColor = new pc.Color(i1807[16], i1807[17], i1807[18], i1807[19])
  i1806.m_ColorMultiplier = i1807[20]
  i1806.m_FadeDuration = i1807[21]
  return i1806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'm_HighlightedSprite')
  request.r(i1809[2], i1809[3], 0, i1808, 'm_PressedSprite')
  request.r(i1809[4], i1809[5], 0, i1808, 'm_SelectedSprite')
  request.r(i1809[6], i1809[7], 0, i1808, 'm_DisabledSprite')
  return i1808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1811 = data
  i1810.m_NormalTrigger = i1811[0]
  i1810.m_HighlightedTrigger = i1811[1]
  i1810.m_PressedTrigger = i1811[2]
  i1810.m_SelectedTrigger = i1811[3]
  i1810.m_DisabledTrigger = i1811[4]
  return i1810
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i1812 = root || request.c( 'UIProgressBar' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'fillImage')
  request.r(i1813[2], i1813[3], 0, i1812, 'fillBackground')
  return i1812
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i1814 = root || request.c( 'UITutorial' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'tutorialUIHolder')
  return i1814
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i1816 = root || request.c( 'UIGuidingMove' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'target')
  i1816.startPosition = new pc.Vec2( i1817[2], i1817[3] )
  i1816.endPosition = new pc.Vec2( i1817[4], i1817[5] )
  i1816.duration = i1817[6]
  i1816.ease = i1817[7]
  i1816.resetToStartOnComplete = !!i1817[8]
  i1816.loop = !!i1817[9]
  i1816.loopCount = i1817[10]
  i1816.loopType = i1817[11]
  return i1816
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i1818 = root || request.c( 'UIPulse' )
  var i1819 = data
  i1818.targetScale = new pc.Vec3( i1819[0], i1819[1], i1819[2] )
  i1818.duration = i1819[3]
  i1818.ease = i1819[4]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.width = i1821[1]
  i1820.height = i1821[2]
  i1820.mipmapCount = i1821[3]
  i1820.anisoLevel = i1821[4]
  i1820.filterMode = i1821[5]
  i1820.hdr = !!i1821[6]
  i1820.format = i1821[7]
  i1820.wrapMode = i1821[8]
  i1820.alphaIsTransparency = !!i1821[9]
  i1820.alphaSource = i1821[10]
  i1820.graphicsFormat = i1821[11]
  i1820.sRGBTexture = !!i1821[12]
  i1820.desiredColorSpace = i1821[13]
  i1820.wrapU = i1821[14]
  i1820.wrapV = i1821[15]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1823 = data
  i1822.position = new pc.Vec3( i1823[0], i1823[1], i1823[2] )
  i1822.scale = new pc.Vec3( i1823[3], i1823[4], i1823[5] )
  i1822.rotation = new pc.Quat(i1823[6], i1823[7], i1823[8], i1823[9])
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1825 = data
  i1824.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1825[0], i1824.main)
  i1824.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1825[1], i1824.colorBySpeed)
  i1824.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1825[2], i1824.colorOverLifetime)
  i1824.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1825[3], i1824.emission)
  i1824.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1825[4], i1824.rotationBySpeed)
  i1824.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1825[5], i1824.rotationOverLifetime)
  i1824.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1825[6], i1824.shape)
  i1824.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1825[7], i1824.sizeBySpeed)
  i1824.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1825[8], i1824.sizeOverLifetime)
  i1824.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1825[9], i1824.textureSheetAnimation)
  i1824.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1825[10], i1824.velocityOverLifetime)
  i1824.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1825[11], i1824.noise)
  i1824.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1825[12], i1824.inheritVelocity)
  i1824.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1825[13], i1824.forceOverLifetime)
  i1824.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1825[14], i1824.limitVelocityOverLifetime)
  i1824.useAutoRandomSeed = !!i1825[15]
  i1824.randomSeed = i1825[16]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1826 = root || new pc.ParticleSystemMain()
  var i1827 = data
  i1826.duration = i1827[0]
  i1826.loop = !!i1827[1]
  i1826.prewarm = !!i1827[2]
  i1826.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[3], i1826.startDelay)
  i1826.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[4], i1826.startLifetime)
  i1826.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[5], i1826.startSpeed)
  i1826.startSize3D = !!i1827[6]
  i1826.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[7], i1826.startSizeX)
  i1826.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[8], i1826.startSizeY)
  i1826.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[9], i1826.startSizeZ)
  i1826.startRotation3D = !!i1827[10]
  i1826.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[11], i1826.startRotationX)
  i1826.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[12], i1826.startRotationY)
  i1826.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[13], i1826.startRotationZ)
  i1826.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1827[14], i1826.startColor)
  i1826.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[15], i1826.gravityModifier)
  i1826.simulationSpace = i1827[16]
  request.r(i1827[17], i1827[18], 0, i1826, 'customSimulationSpace')
  i1826.simulationSpeed = i1827[19]
  i1826.useUnscaledTime = !!i1827[20]
  i1826.scalingMode = i1827[21]
  i1826.playOnAwake = !!i1827[22]
  i1826.maxParticles = i1827[23]
  i1826.emitterVelocityMode = i1827[24]
  i1826.stopAction = i1827[25]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1828 = root || new pc.MinMaxCurve()
  var i1829 = data
  i1828.mode = i1829[0]
  i1828.curveMin = new pc.AnimationCurve( { keys_flow: i1829[1] } )
  i1828.curveMax = new pc.AnimationCurve( { keys_flow: i1829[2] } )
  i1828.curveMultiplier = i1829[3]
  i1828.constantMin = i1829[4]
  i1828.constantMax = i1829[5]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1830 = root || new pc.MinMaxGradient()
  var i1831 = data
  i1830.mode = i1831[0]
  i1830.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1831[1], i1830.gradientMin)
  i1830.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1831[2], i1830.gradientMax)
  i1830.colorMin = new pc.Color(i1831[3], i1831[4], i1831[5], i1831[6])
  i1830.colorMax = new pc.Color(i1831[7], i1831[8], i1831[9], i1831[10])
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1833 = data
  i1832.mode = i1833[0]
  var i1835 = i1833[1]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1835[i + 0]) );
  }
  i1832.colorKeys = i1834
  var i1837 = i1833[2]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1837[i + 0]) );
  }
  i1832.alphaKeys = i1836
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1841 = data
  i1840.color = new pc.Color(i1841[0], i1841[1], i1841[2], i1841[3])
  i1840.time = i1841[4]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1845 = data
  i1844.alpha = i1845[0]
  i1844.time = i1845[1]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1846 = root || new pc.ParticleSystemColorBySpeed()
  var i1847 = data
  i1846.enabled = !!i1847[0]
  i1846.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1847[1], i1846.color)
  i1846.range = new pc.Vec2( i1847[2], i1847[3] )
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1848 = root || new pc.ParticleSystemColorOverLifetime()
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1849[1], i1848.color)
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1850 = root || new pc.ParticleSystemEmitter()
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[1], i1850.rateOverTime)
  i1850.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[2], i1850.rateOverDistance)
  var i1853 = i1851[3]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1853[i + 0]) );
  }
  i1850.bursts = i1852
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1856 = root || new pc.ParticleSystemBurst()
  var i1857 = data
  i1856.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[0], i1856.count)
  i1856.cycleCount = i1857[1]
  i1856.minCount = i1857[2]
  i1856.maxCount = i1857[3]
  i1856.repeatInterval = i1857[4]
  i1856.time = i1857[5]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1858 = root || new pc.ParticleSystemRotationBySpeed()
  var i1859 = data
  i1858.enabled = !!i1859[0]
  i1858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[1], i1858.x)
  i1858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[2], i1858.y)
  i1858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1859[3], i1858.z)
  i1858.separateAxes = !!i1859[4]
  i1858.range = new pc.Vec2( i1859[5], i1859[6] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1860 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1861 = data
  i1860.enabled = !!i1861[0]
  i1860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1861[1], i1860.x)
  i1860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1861[2], i1860.y)
  i1860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1861[3], i1860.z)
  i1860.separateAxes = !!i1861[4]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1862 = root || new pc.ParticleSystemShape()
  var i1863 = data
  i1862.enabled = !!i1863[0]
  i1862.shapeType = i1863[1]
  i1862.randomDirectionAmount = i1863[2]
  i1862.sphericalDirectionAmount = i1863[3]
  i1862.randomPositionAmount = i1863[4]
  i1862.alignToDirection = !!i1863[5]
  i1862.radius = i1863[6]
  i1862.radiusMode = i1863[7]
  i1862.radiusSpread = i1863[8]
  i1862.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1863[9], i1862.radiusSpeed)
  i1862.radiusThickness = i1863[10]
  i1862.angle = i1863[11]
  i1862.length = i1863[12]
  i1862.boxThickness = new pc.Vec3( i1863[13], i1863[14], i1863[15] )
  i1862.meshShapeType = i1863[16]
  request.r(i1863[17], i1863[18], 0, i1862, 'mesh')
  request.r(i1863[19], i1863[20], 0, i1862, 'meshRenderer')
  request.r(i1863[21], i1863[22], 0, i1862, 'skinnedMeshRenderer')
  i1862.useMeshMaterialIndex = !!i1863[23]
  i1862.meshMaterialIndex = i1863[24]
  i1862.useMeshColors = !!i1863[25]
  i1862.normalOffset = i1863[26]
  i1862.arc = i1863[27]
  i1862.arcMode = i1863[28]
  i1862.arcSpread = i1863[29]
  i1862.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1863[30], i1862.arcSpeed)
  i1862.donutRadius = i1863[31]
  i1862.position = new pc.Vec3( i1863[32], i1863[33], i1863[34] )
  i1862.rotation = new pc.Vec3( i1863[35], i1863[36], i1863[37] )
  i1862.scale = new pc.Vec3( i1863[38], i1863[39], i1863[40] )
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1864 = root || new pc.ParticleSystemSizeBySpeed()
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[1], i1864.x)
  i1864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[2], i1864.y)
  i1864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1865[3], i1864.z)
  i1864.separateAxes = !!i1865[4]
  i1864.range = new pc.Vec2( i1865[5], i1865[6] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1866 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1867 = data
  i1866.enabled = !!i1867[0]
  i1866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[1], i1866.x)
  i1866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[2], i1866.y)
  i1866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[3], i1866.z)
  i1866.separateAxes = !!i1867[4]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1868 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1869 = data
  i1868.enabled = !!i1869[0]
  i1868.mode = i1869[1]
  i1868.animation = i1869[2]
  i1868.numTilesX = i1869[3]
  i1868.numTilesY = i1869[4]
  i1868.useRandomRow = !!i1869[5]
  i1868.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1869[6], i1868.frameOverTime)
  i1868.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1869[7], i1868.startFrame)
  i1868.cycleCount = i1869[8]
  i1868.rowIndex = i1869[9]
  i1868.flipU = i1869[10]
  i1868.flipV = i1869[11]
  i1868.spriteCount = i1869[12]
  var i1871 = i1869[13]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1868.sprites = i1870
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1874 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1875 = data
  i1874.enabled = !!i1875[0]
  i1874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[1], i1874.x)
  i1874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[2], i1874.y)
  i1874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[3], i1874.z)
  i1874.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[4], i1874.radial)
  i1874.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[5], i1874.speedModifier)
  i1874.space = i1875[6]
  i1874.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[7], i1874.orbitalX)
  i1874.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[8], i1874.orbitalY)
  i1874.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[9], i1874.orbitalZ)
  i1874.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[10], i1874.orbitalOffsetX)
  i1874.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[11], i1874.orbitalOffsetY)
  i1874.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[12], i1874.orbitalOffsetZ)
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1876 = root || new pc.ParticleSystemNoise()
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.separateAxes = !!i1877[1]
  i1876.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[2], i1876.strengthX)
  i1876.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[3], i1876.strengthY)
  i1876.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[4], i1876.strengthZ)
  i1876.frequency = i1877[5]
  i1876.damping = !!i1877[6]
  i1876.octaveCount = i1877[7]
  i1876.octaveMultiplier = i1877[8]
  i1876.octaveScale = i1877[9]
  i1876.quality = i1877[10]
  i1876.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[11], i1876.scrollSpeed)
  i1876.scrollSpeedMultiplier = i1877[12]
  i1876.remapEnabled = !!i1877[13]
  i1876.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[14], i1876.remapX)
  i1876.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[15], i1876.remapY)
  i1876.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[16], i1876.remapZ)
  i1876.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[17], i1876.positionAmount)
  i1876.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[18], i1876.rotationAmount)
  i1876.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[19], i1876.sizeAmount)
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1878 = root || new pc.ParticleSystemInheritVelocity()
  var i1879 = data
  i1878.enabled = !!i1879[0]
  i1878.mode = i1879[1]
  i1878.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[2], i1878.curve)
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1880 = root || new pc.ParticleSystemForceOverLifetime()
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[1], i1880.x)
  i1880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[2], i1880.y)
  i1880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[3], i1880.z)
  i1880.space = i1881[4]
  i1880.randomized = !!i1881[5]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1882 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1883 = data
  i1882.enabled = !!i1883[0]
  i1882.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[1], i1882.limit)
  i1882.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[2], i1882.limitX)
  i1882.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[3], i1882.limitY)
  i1882.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[4], i1882.limitZ)
  i1882.dampen = i1883[5]
  i1882.separateAxes = !!i1883[6]
  i1882.space = i1883[7]
  i1882.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[8], i1882.drag)
  i1882.multiplyDragByParticleSize = !!i1883[9]
  i1882.multiplyDragByParticleVelocity = !!i1883[10]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'mesh')
  i1884.meshCount = i1885[2]
  i1884.activeVertexStreamsCount = i1885[3]
  i1884.alignment = i1885[4]
  i1884.renderMode = i1885[5]
  i1884.sortMode = i1885[6]
  i1884.lengthScale = i1885[7]
  i1884.velocityScale = i1885[8]
  i1884.cameraVelocityScale = i1885[9]
  i1884.normalDirection = i1885[10]
  i1884.sortingFudge = i1885[11]
  i1884.minParticleSize = i1885[12]
  i1884.maxParticleSize = i1885[13]
  i1884.pivot = new pc.Vec3( i1885[14], i1885[15], i1885[16] )
  request.r(i1885[17], i1885[18], 0, i1884, 'trailMaterial')
  i1884.applyActiveColorSpace = !!i1885[19]
  i1884.enabled = !!i1885[20]
  request.r(i1885[21], i1885[22], 0, i1884, 'sharedMaterial')
  var i1887 = i1885[23]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.sharedMaterials = i1886
  i1884.receiveShadows = !!i1885[24]
  i1884.shadowCastingMode = i1885[25]
  i1884.sortingLayerID = i1885[26]
  i1884.sortingOrder = i1885[27]
  i1884.lightmapIndex = i1885[28]
  i1884.lightmapSceneIndex = i1885[29]
  i1884.lightmapScaleOffset = new pc.Vec4( i1885[30], i1885[31], i1885[32], i1885[33] )
  i1884.lightProbeUsage = i1885[34]
  i1884.reflectionProbeUsage = i1885[35]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1890 = root || new pc.UnityMaterial()
  var i1891 = data
  i1890.name = i1891[0]
  request.r(i1891[1], i1891[2], 0, i1890, 'shader')
  i1890.renderQueue = i1891[3]
  i1890.enableInstancing = !!i1891[4]
  var i1893 = i1891[5]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1893[i + 0]) );
  }
  i1890.floatParameters = i1892
  var i1895 = i1891[6]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1895[i + 0]) );
  }
  i1890.colorParameters = i1894
  var i1897 = i1891[7]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1897[i + 0]) );
  }
  i1890.vectorParameters = i1896
  var i1899 = i1891[8]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1899[i + 0]) );
  }
  i1890.textureParameters = i1898
  var i1901 = i1891[9]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1901[i + 0]) );
  }
  i1890.materialFlags = i1900
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.value = i1905[1]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1909 = data
  i1908.name = i1909[0]
  i1908.value = new pc.Color(i1909[1], i1909[2], i1909[3], i1909[4])
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1913 = data
  i1912.name = i1913[0]
  i1912.value = new pc.Vec4( i1913[1], i1913[2], i1913[3], i1913[4] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1917 = data
  i1916.name = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'value')
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.enabled = !!i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.halfPrecision = !!i1923[1]
  i1922.useSimplification = !!i1923[2]
  i1922.useUInt32IndexFormat = !!i1923[3]
  i1922.vertexCount = i1923[4]
  i1922.aabb = i1923[5]
  var i1925 = i1923[6]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( !!i1925[i + 0] );
  }
  i1922.streams = i1924
  i1922.vertices = i1923[7]
  var i1927 = i1923[8]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1927[i + 0]) );
  }
  i1922.subMeshes = i1926
  var i1929 = i1923[9]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 16) {
    i1928.push( new pc.Mat4().setData(i1929[i + 0], i1929[i + 1], i1929[i + 2], i1929[i + 3],  i1929[i + 4], i1929[i + 5], i1929[i + 6], i1929[i + 7],  i1929[i + 8], i1929[i + 9], i1929[i + 10], i1929[i + 11],  i1929[i + 12], i1929[i + 13], i1929[i + 14], i1929[i + 15]) );
  }
  i1922.bindposes = i1928
  var i1931 = i1923[10]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1931[i + 0]) );
  }
  i1922.blendShapes = i1930
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1937 = data
  i1936.triangles = i1937[0]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1943 = data
  i1942.name = i1943[0]
  var i1945 = i1943[1]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1945[i + 0]) );
  }
  i1942.frames = i1944
  return i1942
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i1946 = root || request.c( 'ChoiceBoardHolder' )
  var i1947 = data
  var i1949 = i1947[0]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 2, i1948, '')
  }
  i1946.choiceBoards = i1948
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1953 = data
  i1952.center = new pc.Vec3( i1953[0], i1953[1], i1953[2] )
  i1952.size = new pc.Vec3( i1953[3], i1953[4], i1953[5] )
  i1952.enabled = !!i1953[6]
  i1952.isTrigger = !!i1953[7]
  request.r(i1953[8], i1953[9], 0, i1952, 'material')
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1955 = data
  i1954.color = new pc.Color(i1955[0], i1955[1], i1955[2], i1955[3])
  request.r(i1955[4], i1955[5], 0, i1954, 'sprite')
  i1954.flipX = !!i1955[6]
  i1954.flipY = !!i1955[7]
  i1954.drawMode = i1955[8]
  i1954.size = new pc.Vec2( i1955[9], i1955[10] )
  i1954.tileMode = i1955[11]
  i1954.adaptiveModeThreshold = i1955[12]
  i1954.maskInteraction = i1955[13]
  i1954.spriteSortPoint = i1955[14]
  i1954.enabled = !!i1955[15]
  request.r(i1955[16], i1955[17], 0, i1954, 'sharedMaterial')
  var i1957 = i1955[18]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 2) {
  request.r(i1957[i + 0], i1957[i + 1], 2, i1956, '')
  }
  i1954.sharedMaterials = i1956
  i1954.receiveShadows = !!i1955[19]
  i1954.shadowCastingMode = i1955[20]
  i1954.sortingLayerID = i1955[21]
  i1954.sortingOrder = i1955[22]
  i1954.lightmapIndex = i1955[23]
  i1954.lightmapSceneIndex = i1955[24]
  i1954.lightmapScaleOffset = new pc.Vec4( i1955[25], i1955[26], i1955[27], i1955[28] )
  i1954.lightProbeUsage = i1955[29]
  i1954.reflectionProbeUsage = i1955[30]
  return i1954
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i1958 = root || request.c( 'ChoiceBoard' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'spriteRenderer')
  request.r(i1959[2], i1959[3], 0, i1958, 'borderRenderer')
  request.r(i1959[4], i1959[5], 0, i1958, 'increaseBorderSprite')
  request.r(i1959[6], i1959[7], 0, i1958, 'decreaseBorderSprite')
  i1958.choiceBoardType = i1959[8]
  return i1958
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'm_Texture')
  i1960.m_UVRect = UnityEngine.Rect.MinMaxRect(i1961[2], i1961[3], i1961[4], i1961[5])
  request.r(i1961[6], i1961[7], 0, i1960, 'm_Material')
  i1960.m_Maskable = !!i1961[8]
  i1960.m_Color = new pc.Color(i1961[9], i1961[10], i1961[11], i1961[12])
  i1960.m_RaycastTarget = !!i1961[13]
  i1960.m_RaycastPadding = new pc.Vec4( i1961[14], i1961[15], i1961[16], i1961[17] )
  return i1960
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i1962 = root || request.c( 'ImageScroller' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'rawImage')
  i1962.moveVector = new pc.Vec2( i1963[2], i1963[3] )
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.atlasId = i1965[1]
  i1964.mipmapCount = i1965[2]
  i1964.hdr = !!i1965[3]
  i1964.size = i1965[4]
  i1964.anisoLevel = i1965[5]
  i1964.filterMode = i1965[6]
  var i1967 = i1965[7]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 4) {
    i1966.push( UnityEngine.Rect.MinMaxRect(i1967[i + 0], i1967[i + 1], i1967[i + 2], i1967[i + 3]) );
  }
  i1964.rects = i1966
  i1964.wrapU = i1965[8]
  i1964.wrapV = i1965[9]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.index = i1971[1]
  i1970.startup = !!i1971[2]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1973 = data
  i1972.type = i1973[0]
  i1972.color = new pc.Color(i1973[1], i1973[2], i1973[3], i1973[4])
  i1972.cullingMask = i1973[5]
  i1972.intensity = i1973[6]
  i1972.range = i1973[7]
  i1972.spotAngle = i1973[8]
  i1972.shadows = i1973[9]
  i1972.shadowNormalBias = i1973[10]
  i1972.shadowBias = i1973[11]
  i1972.shadowStrength = i1973[12]
  i1972.shadowResolution = i1973[13]
  i1972.lightmapBakeType = i1973[14]
  i1972.renderMode = i1973[15]
  request.r(i1973[16], i1973[17], 0, i1972, 'cookie')
  i1972.cookieSize = i1973[18]
  i1972.shadowNearPlane = i1973[19]
  i1972.enabled = !!i1973[20]
  return i1972
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i1974 = root || request.c( 'UICheckBoxHolder' )
  var i1975 = data
  var i1977 = i1975[0]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 2) {
  request.r(i1977[i + 0], i1977[i + 1], 2, i1976, '')
  }
  i1974.uICheckBoxes = i1976
  return i1974
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Button' )
  var i1981 = data
  i1980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1981[0], i1980.m_OnClick)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[1], i1980.m_Navigation)
  i1980.m_Transition = i1981[2]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[3], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[4], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[5], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[6]
  request.r(i1981[7], i1981[8], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'm_ObjectArgument')
  i1984.m_ObjectArgumentAssemblyTypeName = i1985[2]
  i1984.m_IntArgument = i1985[3]
  i1984.m_FloatArgument = i1985[4]
  i1984.m_StringArgument = i1985[5]
  i1984.m_BoolArgument = !!i1985[6]
  return i1984
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'm_FirstSelected')
  i1986.m_sendNavigationEvents = !!i1987[2]
  i1986.m_DragThreshold = i1987[3]
  return i1986
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1989 = data
  i1988.m_HorizontalAxis = i1989[0]
  i1988.m_VerticalAxis = i1989[1]
  i1988.m_SubmitButton = i1989[2]
  i1988.m_CancelButton = i1989[3]
  i1988.m_InputActionsPerSecond = i1989[4]
  i1988.m_RepeatDelay = i1989[5]
  i1988.m_ForceModuleActive = !!i1989[6]
  i1988.m_SendPointerHoverToParent = !!i1989[7]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'sharedMesh')
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'additionalVertexStreams')
  i1992.enabled = !!i1993[2]
  request.r(i1993[3], i1993[4], 0, i1992, 'sharedMaterial')
  var i1995 = i1993[5]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 2, i1994, '')
  }
  i1992.sharedMaterials = i1994
  i1992.receiveShadows = !!i1993[6]
  i1992.shadowCastingMode = i1993[7]
  i1992.sortingLayerID = i1993[8]
  i1992.sortingOrder = i1993[9]
  i1992.lightmapIndex = i1993[10]
  i1992.lightmapSceneIndex = i1993[11]
  i1992.lightmapScaleOffset = new pc.Vec4( i1993[12], i1993[13], i1993[14], i1993[15] )
  i1992.lightProbeUsage = i1993[16]
  i1992.reflectionProbeUsage = i1993[17]
  return i1992
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1996 = root || request.c( 'GameManager' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'Player')
  i1996.maxLevel = i1997[2]
  i1996.winLevel = i1997[3]
  i1996.totalMoveTime = i1997[4]
  i1996.currentPlayerLevel = i1997[5]
  return i1996
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1998 = root || request.c( 'InputManager' )
  var i1999 = data
  i1998.minimumSwipeDistance = i1999[0]
  return i1998
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2000 = root || request.c( 'UIManager' )
  var i2001 = data
  return i2000
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2002 = root || request.c( 'Ply_SoundManager' )
  var i2003 = data
  i2002.audioClips = request.d('FxAudio', i2003[0], i2002.audioClips)
  request.r(i2003[1], i2003[2], 0, i2002, 'sound')
  i2002.enableSound = !!i2003[3]
  i2002.bgmVolume = i2003[4]
  return i2002
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2004 = root || request.c( 'FxAudio' )
  var i2005 = data
  i2004.Clock = request.d('SoundData', i2005[0], i2004.Clock)
  i2004.PlayerWin = request.d('SoundData', i2005[1], i2004.PlayerWin)
  i2004.PlayerLoose = request.d('SoundData', i2005[2], i2004.PlayerLoose)
  i2004.RightChoice = request.d('SoundData', i2005[3], i2004.RightChoice)
  i2004.WrongChoice = request.d('SoundData', i2005[4], i2004.WrongChoice)
  i2004.MaxLevel = request.d('SoundData', i2005[5], i2004.MaxLevel)
  i2004.FightingCloud = request.d('SoundData', i2005[6], i2004.FightingCloud)
  return i2004
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2006 = root || request.c( 'SoundData' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'clip')
  i2006.volume = i2007[2]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'clip')
  request.r(i2009[2], i2009[3], 0, i2008, 'outputAudioMixerGroup')
  i2008.playOnAwake = !!i2009[4]
  i2008.loop = !!i2009[5]
  i2008.time = i2009[6]
  i2008.volume = i2009[7]
  i2008.pitch = i2009[8]
  i2008.enabled = !!i2009[9]
  return i2008
}

Deserializers["ProgressTrackingManager"] = function (request, data, root) {
  var i2010 = root || request.c( 'ProgressTrackingManager' )
  var i2011 = data
  i2010.maxScore = i2011[0]
  request.r(i2011[1], i2011[2], 0, i2010, 'choiceBoardPlacer')
  i2010.currentScore = i2011[3]
  i2010.currentPercent = i2011[4]
  return i2010
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2012 = root || request.c( 'PlayerController' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'endPos')
  i2012.switchTrackTime = i2013[2]
  request.r(i2013[3], i2013[4], 0, i2012, 'trackRightTransform')
  request.r(i2013[5], i2013[6], 0, i2012, 'trackLeftTransform')
  i2012.startRight = !!i2013[7]
  request.r(i2013[8], i2013[9], 0, i2012, 'playerTransform')
  request.r(i2013[10], i2013[11], 0, i2012, 'playerVisual')
  request.r(i2013[12], i2013[13], 0, i2012, 'winPar')
  i2012.currentLevel = i2013[14]
  i2012.dragSmoothSpeed = i2013[15]
  i2012.moveCurve = new pc.AnimationCurve( { keys_flow: i2013[16] } )
  return i2012
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i2014 = root || request.c( 'PlayerVisual' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'playerSpriteRenderer')
  request.r(i2015[2], i2015[3], 0, i2014, 'fakeShadowRenderer')
  var i2017 = i2015[4]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 2) {
  request.r(i2017[i + 0], i2017[i + 1], 2, i2016, '')
  }
  i2014.levelSprite = i2016
  i2014.levelScaleMultipliers = i2015[5]
  i2014.maxPowerParScaleMultiplier = i2015[6]
  i2014.bounceYMultiplier = i2015[7]
  i2014.bounceDuration = i2015[8]
  i2014.scaleTransitionDuration = i2015[9]
  request.r(i2015[10], i2015[11], 0, i2014, 'visualAnimator')
  i2014.level4TriggerName = i2015[12]
  i2014.level4SpriteDelay = i2015[13]
  request.r(i2015[14], i2015[15], 0, i2014, 'maxPowerPar')
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2019 = data
  i2018.mass = i2019[0]
  i2018.drag = i2019[1]
  i2018.angularDrag = i2019[2]
  i2018.useGravity = !!i2019[3]
  i2018.isKinematic = !!i2019[4]
  i2018.constraints = i2019[5]
  i2018.maxAngularVelocity = i2019[6]
  i2018.collisionDetectionMode = i2019[7]
  i2018.interpolation = i2019[8]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'animatorController')
  request.r(i2021[2], i2021[3], 0, i2020, 'avatar')
  i2020.updateMode = i2021[4]
  i2020.hasTransformHierarchy = !!i2021[5]
  i2020.applyRootMotion = !!i2021[6]
  var i2023 = i2021[7]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 2, i2022, '')
  }
  i2020.humanBones = i2022
  i2020.enabled = !!i2021[8]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2027 = data
  i2026.aspect = i2027[0]
  i2026.orthographic = !!i2027[1]
  i2026.orthographicSize = i2027[2]
  i2026.backgroundColor = new pc.Color(i2027[3], i2027[4], i2027[5], i2027[6])
  i2026.nearClipPlane = i2027[7]
  i2026.farClipPlane = i2027[8]
  i2026.fieldOfView = i2027[9]
  i2026.depth = i2027[10]
  i2026.clearFlags = i2027[11]
  i2026.cullingMask = i2027[12]
  i2026.rect = i2027[13]
  request.r(i2027[14], i2027[15], 0, i2026, 'targetTexture')
  i2026.usePhysicalProperties = !!i2027[16]
  i2026.focalLength = i2027[17]
  i2026.sensorSize = new pc.Vec2( i2027[18], i2027[19] )
  i2026.lensShift = new pc.Vec2( i2027[20], i2027[21] )
  i2026.gateFit = i2027[22]
  i2026.commandBufferCount = i2027[23]
  i2026.cameraType = i2027[24]
  i2026.enabled = !!i2027[25]
  return i2026
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i2028 = root || request.c( 'MaterialUVScroller' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'targetMaterial')
  i2028.scrollSpeed = new pc.Vec2( i2029[2], i2029[3] )
  return i2028
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i2030 = root || request.c( 'ChoiceBoardPlacer' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'choiceBoardHolderprefab')
  request.r(i2031[2], i2031[3], 0, i2030, 'startPos')
  request.r(i2031[4], i2031[5], 0, i2030, 'endPos')
  request.r(i2031[6], i2031[7], 0, i2030, 'choiceBoardPairData')
  i2030.spawnCount = i2031[8]
  i2030.spawnGenericByNumber = !!i2031[9]
  i2030.shufflePairsOrder = !!i2031[10]
  i2030.shuffleLeftRight = !!i2031[11]
  i2030.spawnOnStart = !!i2031[12]
  return i2030
}

Deserializers["BossController"] = function (request, data, root) {
  var i2032 = root || request.c( 'BossController' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'bossSpriteRenderer')
  request.r(i2033[2], i2033[3], 0, i2032, 'characterVisual')
  request.r(i2033[4], i2033[5], 0, i2032, 'fightingCloud')
  request.r(i2033[6], i2033[7], 0, i2032, 'resultObject')
  request.r(i2033[8], i2033[9], 0, i2032, 'resultSpriteRenderer')
  request.r(i2033[10], i2033[11], 0, i2032, 'winSprite')
  request.r(i2033[12], i2033[13], 0, i2032, 'lossSprite')
  request.r(i2033[14], i2033[15], 0, i2032, 'extraWinObject')
  request.r(i2033[16], i2033[17], 0, i2032, 'winPanel')
  request.r(i2033[18], i2033[19], 0, i2032, 'losePanel')
  var i2035 = i2033[20]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.extraObjectsToHide = i2034
  i2032.fightingCloudFx = i2033[21]
  i2032.winPanelFx = i2033[22]
  i2032.losePanelFx = i2033[23]
  i2032.delayAfterLastBoard = i2033[24]
  i2032.delayAfterLastBoardOnLoss = i2033[25]
  i2032.fightDuration = i2033[26]
  i2032.showResultDuration = i2033[27]
  request.r(i2033[28], i2033[29], 0, i2032, 'currentPlayer')
  i2032.currentPlayerLevel = i2033[30]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2039 = data
  i2038.ambientIntensity = i2039[0]
  i2038.reflectionIntensity = i2039[1]
  i2038.ambientMode = i2039[2]
  i2038.ambientLight = new pc.Color(i2039[3], i2039[4], i2039[5], i2039[6])
  i2038.ambientSkyColor = new pc.Color(i2039[7], i2039[8], i2039[9], i2039[10])
  i2038.ambientGroundColor = new pc.Color(i2039[11], i2039[12], i2039[13], i2039[14])
  i2038.ambientEquatorColor = new pc.Color(i2039[15], i2039[16], i2039[17], i2039[18])
  i2038.fogColor = new pc.Color(i2039[19], i2039[20], i2039[21], i2039[22])
  i2038.fogEndDistance = i2039[23]
  i2038.fogStartDistance = i2039[24]
  i2038.fogDensity = i2039[25]
  i2038.fog = !!i2039[26]
  request.r(i2039[27], i2039[28], 0, i2038, 'skybox')
  i2038.fogMode = i2039[29]
  var i2041 = i2039[30]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2041[i + 0]) );
  }
  i2038.lightmaps = i2040
  i2038.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2039[31], i2038.lightProbes)
  i2038.lightmapsMode = i2039[32]
  i2038.mixedBakeMode = i2039[33]
  i2038.environmentLightingMode = i2039[34]
  i2038.ambientProbe = new pc.SphericalHarmonicsL2(i2039[35])
  i2038.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2039[36])
  i2038.useReferenceAmbientProbe = !!i2039[37]
  request.r(i2039[38], i2039[39], 0, i2038, 'customReflection')
  request.r(i2039[40], i2039[41], 0, i2038, 'defaultReflection')
  i2038.defaultReflectionMode = i2039[42]
  i2038.defaultReflectionResolution = i2039[43]
  i2038.sunLightObjectId = i2039[44]
  i2038.pixelLightCount = i2039[45]
  i2038.defaultReflectionHDR = !!i2039[46]
  i2038.hasLightDataAsset = !!i2039[47]
  i2038.hasManualGenerate = !!i2039[48]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'lightmapColor')
  request.r(i2045[2], i2045[3], 0, i2044, 'lightmapDirection')
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2046 = root || new UnityEngine.LightProbes()
  var i2047 = data
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2055 = data
  var i2057 = i2055[0]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2057[i + 0]));
  }
  i2054.ShaderCompilationErrors = i2056
  i2054.name = i2055[1]
  i2054.guid = i2055[2]
  var i2059 = i2055[3]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2054.shaderDefinedKeywords = i2058
  var i2061 = i2055[4]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2061[i + 0]) );
  }
  i2054.passes = i2060
  var i2063 = i2055[5]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2063[i + 0]) );
  }
  i2054.usePasses = i2062
  var i2065 = i2055[6]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2065[i + 0]) );
  }
  i2054.defaultParameterValues = i2064
  request.r(i2055[7], i2055[8], 0, i2054, 'unityFallbackShader')
  i2054.readDepth = !!i2055[9]
  i2054.hasDepthOnlyPass = !!i2055[10]
  i2054.isCreatedByShaderGraph = !!i2055[11]
  i2054.disableBatching = !!i2055[12]
  i2054.compiled = !!i2055[13]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2069 = data
  i2068.shaderName = i2069[0]
  i2068.errorMessage = i2069[1]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2074 = root || new pc.UnityShaderPass()
  var i2075 = data
  i2074.id = i2075[0]
  i2074.subShaderIndex = i2075[1]
  i2074.name = i2075[2]
  i2074.passType = i2075[3]
  i2074.grabPassTextureName = i2075[4]
  i2074.usePass = !!i2075[5]
  i2074.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[6], i2074.zTest)
  i2074.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[7], i2074.zWrite)
  i2074.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[8], i2074.culling)
  i2074.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2075[9], i2074.blending)
  i2074.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2075[10], i2074.alphaBlending)
  i2074.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[11], i2074.colorWriteMask)
  i2074.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[12], i2074.offsetUnits)
  i2074.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[13], i2074.offsetFactor)
  i2074.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[14], i2074.stencilRef)
  i2074.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[15], i2074.stencilReadMask)
  i2074.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[16], i2074.stencilWriteMask)
  i2074.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[17], i2074.stencilOp)
  i2074.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[18], i2074.stencilOpFront)
  i2074.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[19], i2074.stencilOpBack)
  var i2077 = i2075[20]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2077[i + 0]) );
  }
  i2074.tags = i2076
  var i2079 = i2075[21]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2074.passDefinedKeywords = i2078
  var i2081 = i2075[22]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2081[i + 0]) );
  }
  i2074.passDefinedKeywordGroups = i2080
  var i2083 = i2075[23]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2083[i + 0]) );
  }
  i2074.variants = i2082
  var i2085 = i2075[24]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2085[i + 0]) );
  }
  i2074.excludedVariants = i2084
  i2074.hasDepthReader = !!i2075[25]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2087 = data
  i2086.val = i2087[0]
  i2086.name = i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2089 = data
  i2088.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[0], i2088.src)
  i2088.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[1], i2088.dst)
  i2088.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[2], i2088.op)
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2091 = data
  i2090.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[0], i2090.pass)
  i2090.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[1], i2090.fail)
  i2090.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[2], i2090.zFail)
  i2090.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[3], i2090.comp)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2095 = data
  i2094.name = i2095[0]
  i2094.value = i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2098.keywords = i2100
  i2098.hasDiscard = !!i2099[1]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2105 = data
  i2104.passId = i2105[0]
  i2104.subShaderIndex = i2105[1]
  var i2107 = i2105[2]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2104.keywords = i2106
  i2104.vertexProgram = i2105[3]
  i2104.fragmentProgram = i2105[4]
  i2104.exportedForWebGl2 = !!i2105[5]
  i2104.readDepth = !!i2105[6]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'shader')
  i2110.pass = i2111[2]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.type = i2115[1]
  i2114.value = new pc.Vec4( i2115[2], i2115[3], i2115[4], i2115[5] )
  i2114.textureValue = i2115[6]
  i2114.shaderPropertyFlag = i2115[7]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2117 = data
  i2116.name = i2117[0]
  request.r(i2117[1], i2117[2], 0, i2116, 'texture')
  i2116.aabb = i2117[3]
  i2116.vertices = i2117[4]
  i2116.triangles = i2117[5]
  i2116.textureRect = UnityEngine.Rect.MinMaxRect(i2117[6], i2117[7], i2117[8], i2117[9])
  i2116.packedRect = UnityEngine.Rect.MinMaxRect(i2117[10], i2117[11], i2117[12], i2117[13])
  i2116.border = new pc.Vec4( i2117[14], i2117[15], i2117[16], i2117[17] )
  i2116.transparency = i2117[18]
  i2116.bounds = i2117[19]
  i2116.pixelsPerUnit = i2117[20]
  i2116.textureWidth = i2117[21]
  i2116.textureHeight = i2117[22]
  i2116.nativeSize = new pc.Vec2( i2117[23], i2117[24] )
  i2116.pivot = new pc.Vec2( i2117[25], i2117[26] )
  i2116.textureRectOffset = new pc.Vec2( i2117[27], i2117[28] )
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2119 = data
  i2118.name = i2119[0]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.wrapMode = i2121[1]
  i2120.isLooping = !!i2121[2]
  i2120.length = i2121[3]
  var i2123 = i2121[4]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2123[i + 0]) );
  }
  i2120.curves = i2122
  var i2125 = i2121[5]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2125[i + 0]) );
  }
  i2120.events = i2124
  i2120.halfPrecision = !!i2121[6]
  i2120._frameRate = i2121[7]
  i2120.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2121[8], i2120.localBounds)
  i2120.hasMuscleCurves = !!i2121[9]
  var i2127 = i2121[10]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( i2127[i + 0] );
  }
  i2120.clipMuscleConstant = i2126
  i2120.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2121[11], i2120.clipBindingConstant)
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2131 = data
  i2130.path = i2131[0]
  i2130.hash = i2131[1]
  i2130.componentType = i2131[2]
  i2130.property = i2131[3]
  i2130.keys = i2131[4]
  var i2133 = i2131[5]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2133[i + 0]) );
  }
  i2130.objectReferenceKeys = i2132
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2137 = data
  i2136.time = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'value')
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2141 = data
  i2140.functionName = i2141[0]
  i2140.floatParameter = i2141[1]
  i2140.intParameter = i2141[2]
  i2140.stringParameter = i2141[3]
  request.r(i2141[4], i2141[5], 0, i2140, 'objectReferenceParameter')
  i2140.time = i2141[6]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2143 = data
  i2142.center = new pc.Vec3( i2143[0], i2143[1], i2143[2] )
  i2142.extends = new pc.Vec3( i2143[3], i2143[4], i2143[5] )
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2147 = data
  var i2149 = i2147[0]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2146.genericBindings = i2148
  var i2151 = i2147[1]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( i2151[i + 0] );
  }
  i2146.pptrCurveMapping = i2150
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2153 = data
  i2152.name = i2153[0]
  var i2155 = i2153[1]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2155[i + 0]) );
  }
  i2152.layers = i2154
  var i2157 = i2153[2]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2157[i + 0]) );
  }
  i2152.parameters = i2156
  i2152.animationClips = i2153[3]
  i2152.avatarUnsupported = i2153[4]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.defaultWeight = i2161[1]
  i2160.blendingMode = i2161[2]
  i2160.avatarMask = i2161[3]
  i2160.syncedLayerIndex = i2161[4]
  i2160.syncedLayerAffectsTiming = !!i2161[5]
  i2160.syncedLayers = i2161[6]
  i2160.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2161[7], i2160.stateMachine)
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2163 = data
  i2162.id = i2163[0]
  i2162.name = i2163[1]
  i2162.path = i2163[2]
  var i2165 = i2163[3]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2165[i + 0]) );
  }
  i2162.states = i2164
  var i2167 = i2163[4]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2167[i + 0]) );
  }
  i2162.machines = i2166
  var i2169 = i2163[5]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2169[i + 0]) );
  }
  i2162.entryStateTransitions = i2168
  var i2171 = i2163[6]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2171[i + 0]) );
  }
  i2162.exitStateTransitions = i2170
  var i2173 = i2163[7]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2173[i + 0]) );
  }
  i2162.anyStateTransitions = i2172
  i2162.defaultStateId = i2163[8]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2177 = data
  i2176.id = i2177[0]
  i2176.name = i2177[1]
  i2176.cycleOffset = i2177[2]
  i2176.cycleOffsetParameter = i2177[3]
  i2176.cycleOffsetParameterActive = !!i2177[4]
  i2176.mirror = !!i2177[5]
  i2176.mirrorParameter = i2177[6]
  i2176.mirrorParameterActive = !!i2177[7]
  i2176.motionId = i2177[8]
  i2176.nameHash = i2177[9]
  i2176.fullPathHash = i2177[10]
  i2176.speed = i2177[11]
  i2176.speedParameter = i2177[12]
  i2176.speedParameterActive = !!i2177[13]
  i2176.tag = i2177[14]
  i2176.tagHash = i2177[15]
  i2176.writeDefaultValues = !!i2177[16]
  var i2179 = i2177[17]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2176.behaviours = i2178
  var i2181 = i2177[18]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2181[i + 0]) );
  }
  i2176.transitions = i2180
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2187 = data
  i2186.fullPath = i2187[0]
  i2186.canTransitionToSelf = !!i2187[1]
  i2186.duration = i2187[2]
  i2186.exitTime = i2187[3]
  i2186.hasExitTime = !!i2187[4]
  i2186.hasFixedDuration = !!i2187[5]
  i2186.interruptionSource = i2187[6]
  i2186.offset = i2187[7]
  i2186.orderedInterruption = !!i2187[8]
  i2186.destinationStateId = i2187[9]
  i2186.isExit = !!i2187[10]
  i2186.mute = !!i2187[11]
  i2186.solo = !!i2187[12]
  var i2189 = i2187[13]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2189[i + 0]) );
  }
  i2186.conditions = i2188
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2195 = data
  i2194.destinationStateId = i2195[0]
  i2194.isExit = !!i2195[1]
  i2194.mute = !!i2195[2]
  i2194.solo = !!i2195[3]
  var i2197 = i2195[4]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2197[i + 0]) );
  }
  i2194.conditions = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2201 = data
  i2200.mode = i2201[0]
  i2200.parameter = i2201[1]
  i2200.threshold = i2201[2]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2205 = data
  i2204.defaultBool = !!i2205[0]
  i2204.defaultFloat = i2205[1]
  i2204.defaultInt = i2205[2]
  i2204.name = i2205[3]
  i2204.nameHash = i2205[4]
  i2204.type = i2205[5]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.bytes64 = i2207[1]
  i2206.data = i2207[2]
  return i2206
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i2208 = root || request.c( 'ChoiceBoardPairData' )
  var i2209 = data
  var i2211 = i2209[0]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('ChoicePairData', i2211[i + 0]) );
  }
  i2208.ChoicePairDatas = i2210
  return i2208
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i2214 = root || request.c( 'ChoicePairData' )
  var i2215 = data
  i2214.choiceData1 = request.d('ChoiceData', i2215[0], i2214.choiceData1)
  i2214.choiceData2 = request.d('ChoiceData', i2215[1], i2214.choiceData2)
  return i2214
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i2216 = root || request.c( 'ChoiceData' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'VisualSprite')
  request.r(i2217[2], i2217[3], 0, i2216, 'BorderSprite')
  i2216.ChoiceType = i2217[4]
  return i2216
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2219 = data
  i2218.useSafeMode = !!i2219[0]
  i2218.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2219[1], i2218.safeModeOptions)
  i2218.timeScale = i2219[2]
  i2218.unscaledTimeScale = i2219[3]
  i2218.useSmoothDeltaTime = !!i2219[4]
  i2218.maxSmoothUnscaledTime = i2219[5]
  i2218.rewindCallbackMode = i2219[6]
  i2218.showUnityEditorReport = !!i2219[7]
  i2218.logBehaviour = i2219[8]
  i2218.drawGizmos = !!i2219[9]
  i2218.defaultRecyclable = !!i2219[10]
  i2218.defaultAutoPlay = i2219[11]
  i2218.defaultUpdateType = i2219[12]
  i2218.defaultTimeScaleIndependent = !!i2219[13]
  i2218.defaultEaseType = i2219[14]
  i2218.defaultEaseOvershootOrAmplitude = i2219[15]
  i2218.defaultEasePeriod = i2219[16]
  i2218.defaultAutoKill = !!i2219[17]
  i2218.defaultLoopType = i2219[18]
  i2218.debugMode = !!i2219[19]
  i2218.debugStoreTargetId = !!i2219[20]
  i2218.showPreviewPanel = !!i2219[21]
  i2218.storeSettingsLocation = i2219[22]
  i2218.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2219[23], i2218.modules)
  i2218.createASMDEF = !!i2219[24]
  i2218.showPlayingTweens = !!i2219[25]
  i2218.showPausedTweens = !!i2219[26]
  return i2218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2221 = data
  i2220.logBehaviour = i2221[0]
  i2220.nestedTweenFailureBehaviour = i2221[1]
  return i2220
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2223 = data
  i2222.showPanel = !!i2223[0]
  i2222.audioEnabled = !!i2223[1]
  i2222.physicsEnabled = !!i2223[2]
  i2222.physics2DEnabled = !!i2223[3]
  i2222.spriteEnabled = !!i2223[4]
  i2222.uiEnabled = !!i2223[5]
  i2222.uiToolkitEnabled = !!i2223[6]
  i2222.textMeshProEnabled = !!i2223[7]
  i2222.tk2DEnabled = !!i2223[8]
  i2222.deAudioEnabled = !!i2223[9]
  i2222.deUnityExtendedEnabled = !!i2223[10]
  i2222.epoOutlineEnabled = !!i2223[11]
  return i2222
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2224 = root || request.c( 'TMPro.TMP_Settings' )
  var i2225 = data
  i2224.assetVersion = i2225[0]
  i2224.m_TextWrappingMode = i2225[1]
  i2224.m_enableKerning = !!i2225[2]
  var i2227 = i2225[3]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.add(i2227[i + 0]);
  }
  i2224.m_ActiveFontFeatures = i2226
  i2224.m_enableExtraPadding = !!i2225[4]
  i2224.m_enableTintAllSprites = !!i2225[5]
  i2224.m_enableParseEscapeCharacters = !!i2225[6]
  i2224.m_EnableRaycastTarget = !!i2225[7]
  i2224.m_GetFontFeaturesAtRuntime = !!i2225[8]
  i2224.m_missingGlyphCharacter = i2225[9]
  i2224.m_ClearDynamicDataOnBuild = !!i2225[10]
  i2224.m_warningsDisabled = !!i2225[11]
  request.r(i2225[12], i2225[13], 0, i2224, 'm_defaultFontAsset')
  i2224.m_defaultFontAssetPath = i2225[14]
  i2224.m_defaultFontSize = i2225[15]
  i2224.m_defaultAutoSizeMinRatio = i2225[16]
  i2224.m_defaultAutoSizeMaxRatio = i2225[17]
  i2224.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2225[18], i2225[19] )
  i2224.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2225[20], i2225[21] )
  i2224.m_autoSizeTextContainer = !!i2225[22]
  i2224.m_IsTextObjectScaleStatic = !!i2225[23]
  var i2229 = i2225[24]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 1, i2228, '')
  }
  i2224.m_fallbackFontAssets = i2228
  i2224.m_matchMaterialPreset = !!i2225[25]
  i2224.m_HideSubTextObjects = !!i2225[26]
  request.r(i2225[27], i2225[28], 0, i2224, 'm_defaultSpriteAsset')
  i2224.m_defaultSpriteAssetPath = i2225[29]
  i2224.m_enableEmojiSupport = !!i2225[30]
  i2224.m_MissingCharacterSpriteUnicode = i2225[31]
  var i2231 = i2225[32]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 1, i2230, '')
  }
  i2224.m_EmojiFallbackTextAssets = i2230
  i2224.m_defaultColorGradientPresetsPath = i2225[33]
  request.r(i2225[34], i2225[35], 0, i2224, 'm_defaultStyleSheet')
  i2224.m_StyleSheetsResourcePath = i2225[36]
  request.r(i2225[37], i2225[38], 0, i2224, 'm_leadingCharacters')
  request.r(i2225[39], i2225[40], 0, i2224, 'm_followingCharacters')
  i2224.m_UseModernHangulLineBreakingRules = !!i2225[41]
  return i2224
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2238 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'spriteSheet')
  var i2241 = i2239[2]
  var i2240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.add(request.d('TMPro.TMP_Sprite', i2241[i + 0]));
  }
  i2238.spriteInfoList = i2240
  var i2243 = i2239[3]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 1, i2242, '')
  }
  i2238.fallbackSpriteAssets = i2242
  var i2245 = i2239[4]
  var i2244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.add(request.d('TMPro.TMP_SpriteCharacter', i2245[i + 0]));
  }
  i2238.m_SpriteCharacterTable = i2244
  var i2247 = i2239[5]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.add(request.d('TMPro.TMP_SpriteGlyph', i2247[i + 0]));
  }
  i2238.m_GlyphTable = i2246
  i2238.m_Version = i2239[6]
  i2238.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2239[7], i2238.m_FaceInfo)
  request.r(i2239[8], i2239[9], 0, i2238, 'm_Material')
  return i2238
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2250 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.hashCode = i2251[1]
  i2250.unicode = i2251[2]
  i2250.pivot = new pc.Vec2( i2251[3], i2251[4] )
  request.r(i2251[5], i2251[6], 0, i2250, 'sprite')
  i2250.id = i2251[7]
  i2250.x = i2251[8]
  i2250.y = i2251[9]
  i2250.width = i2251[10]
  i2250.height = i2251[11]
  i2250.xOffset = i2251[12]
  i2250.yOffset = i2251[13]
  i2250.xAdvance = i2251[14]
  i2250.scale = i2251[15]
  return i2250
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2256 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2257 = data
  i2256.m_Name = i2257[0]
  i2256.m_ElementType = i2257[1]
  i2256.m_Unicode = i2257[2]
  i2256.m_GlyphIndex = i2257[3]
  i2256.m_Scale = i2257[4]
  return i2256
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2260 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'sprite')
  i2260.m_Index = i2261[2]
  i2260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2261[3], i2260.m_Metrics)
  i2260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2261[4], i2260.m_GlyphRect)
  i2260.m_Scale = i2261[5]
  i2260.m_AtlasIndex = i2261[6]
  i2260.m_ClassDefinitionType = i2261[7]
  return i2260
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2263 = data
  i2262.m_Width = i2263[0]
  i2262.m_Height = i2263[1]
  i2262.m_HorizontalBearingX = i2263[2]
  i2262.m_HorizontalBearingY = i2263[3]
  i2262.m_HorizontalAdvance = i2263[4]
  return i2262
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2265 = data
  i2264.m_X = i2265[0]
  i2264.m_Y = i2265[1]
  i2264.m_Width = i2265[2]
  i2264.m_Height = i2265[3]
  return i2264
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2267 = data
  i2266.m_FaceIndex = i2267[0]
  i2266.m_FamilyName = i2267[1]
  i2266.m_StyleName = i2267[2]
  i2266.m_PointSize = i2267[3]
  i2266.m_Scale = i2267[4]
  i2266.m_UnitsPerEM = i2267[5]
  i2266.m_LineHeight = i2267[6]
  i2266.m_AscentLine = i2267[7]
  i2266.m_CapLine = i2267[8]
  i2266.m_MeanLine = i2267[9]
  i2266.m_Baseline = i2267[10]
  i2266.m_DescentLine = i2267[11]
  i2266.m_SuperscriptOffset = i2267[12]
  i2266.m_SuperscriptSize = i2267[13]
  i2266.m_SubscriptOffset = i2267[14]
  i2266.m_SubscriptSize = i2267[15]
  i2266.m_UnderlineOffset = i2267[16]
  i2266.m_UnderlineThickness = i2267[17]
  i2266.m_StrikethroughOffset = i2267[18]
  i2266.m_StrikethroughThickness = i2267[19]
  i2266.m_TabWidth = i2267[20]
  return i2266
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2268 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2269 = data
  var i2271 = i2269[0]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(request.d('TMPro.TMP_Style', i2271[i + 0]));
  }
  i2268.m_StyleList = i2270
  return i2268
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2274 = root || request.c( 'TMPro.TMP_Style' )
  var i2275 = data
  i2274.m_Name = i2275[0]
  i2274.m_HashCode = i2275[1]
  i2274.m_OpeningDefinition = i2275[2]
  i2274.m_ClosingDefinition = i2275[3]
  i2274.m_OpeningTagArray = i2275[4]
  i2274.m_ClosingTagArray = i2275[5]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2279[i + 0]) );
  }
  i2276.files = i2278
  i2276.componentToPrefabIds = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2283 = data
  i2282.path = i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'unityObject')
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2285 = data
  var i2287 = i2285[0]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2287[i + 0]) );
  }
  i2284.scriptsExecutionOrder = i2286
  var i2289 = i2285[1]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2289[i + 0]) );
  }
  i2284.sortingLayers = i2288
  var i2291 = i2285[2]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2291[i + 0]) );
  }
  i2284.cullingLayers = i2290
  i2284.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2285[3], i2284.timeSettings)
  i2284.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2285[4], i2284.physicsSettings)
  i2284.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2285[5], i2284.physics2DSettings)
  i2284.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2285[6], i2284.qualitySettings)
  i2284.enableRealtimeShadows = !!i2285[7]
  i2284.enableAutoInstancing = !!i2285[8]
  i2284.enableStaticBatching = !!i2285[9]
  i2284.enableDynamicBatching = !!i2285[10]
  i2284.lightmapEncodingQuality = i2285[11]
  i2284.desiredColorSpace = i2285[12]
  var i2293 = i2285[13]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( i2293[i + 0] );
  }
  i2284.allTags = i2292
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2297 = data
  i2296.name = i2297[0]
  i2296.value = i2297[1]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2301 = data
  i2300.id = i2301[0]
  i2300.name = i2301[1]
  i2300.value = i2301[2]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2305 = data
  i2304.id = i2305[0]
  i2304.name = i2305[1]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2307 = data
  i2306.fixedDeltaTime = i2307[0]
  i2306.maximumDeltaTime = i2307[1]
  i2306.timeScale = i2307[2]
  i2306.maximumParticleTimestep = i2307[3]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2309 = data
  i2308.gravity = new pc.Vec3( i2309[0], i2309[1], i2309[2] )
  i2308.defaultSolverIterations = i2309[3]
  i2308.bounceThreshold = i2309[4]
  i2308.autoSyncTransforms = !!i2309[5]
  i2308.autoSimulation = !!i2309[6]
  var i2311 = i2309[7]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2311[i + 0]) );
  }
  i2308.collisionMatrix = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.layerId = i2315[1]
  i2314.otherLayerId = i2315[2]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'material')
  i2316.gravity = new pc.Vec2( i2317[2], i2317[3] )
  i2316.positionIterations = i2317[4]
  i2316.velocityIterations = i2317[5]
  i2316.velocityThreshold = i2317[6]
  i2316.maxLinearCorrection = i2317[7]
  i2316.maxAngularCorrection = i2317[8]
  i2316.maxTranslationSpeed = i2317[9]
  i2316.maxRotationSpeed = i2317[10]
  i2316.baumgarteScale = i2317[11]
  i2316.baumgarteTOIScale = i2317[12]
  i2316.timeToSleep = i2317[13]
  i2316.linearSleepTolerance = i2317[14]
  i2316.angularSleepTolerance = i2317[15]
  i2316.defaultContactOffset = i2317[16]
  i2316.autoSimulation = !!i2317[17]
  i2316.queriesHitTriggers = !!i2317[18]
  i2316.queriesStartInColliders = !!i2317[19]
  i2316.callbacksOnDisable = !!i2317[20]
  i2316.reuseCollisionCallbacks = !!i2317[21]
  i2316.autoSyncTransforms = !!i2317[22]
  var i2319 = i2317[23]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2319[i + 0]) );
  }
  i2316.collisionMatrix = i2318
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.layerId = i2323[1]
  i2322.otherLayerId = i2323[2]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2325 = data
  var i2327 = i2325[0]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2327[i + 0]) );
  }
  i2324.qualityLevels = i2326
  var i2329 = i2325[1]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( i2329[i + 0] );
  }
  i2324.names = i2328
  i2324.shadows = i2325[2]
  i2324.anisotropicFiltering = i2325[3]
  i2324.antiAliasing = i2325[4]
  i2324.lodBias = i2325[5]
  i2324.shadowCascades = i2325[6]
  i2324.shadowDistance = i2325[7]
  i2324.shadowmaskMode = i2325[8]
  i2324.shadowProjection = i2325[9]
  i2324.shadowResolution = i2325[10]
  i2324.softParticles = !!i2325[11]
  i2324.softVegetation = !!i2325[12]
  i2324.activeColorSpace = i2325[13]
  i2324.desiredColorSpace = i2325[14]
  i2324.masterTextureLimit = i2325[15]
  i2324.maxQueuedFrames = i2325[16]
  i2324.particleRaycastBudget = i2325[17]
  i2324.pixelLightCount = i2325[18]
  i2324.realtimeReflectionProbes = !!i2325[19]
  i2324.shadowCascade2Split = i2325[20]
  i2324.shadowCascade4Split = new pc.Vec3( i2325[21], i2325[22], i2325[23] )
  i2324.streamingMipmapsActive = !!i2325[24]
  i2324.vSyncCount = i2325[25]
  i2324.asyncUploadBufferSize = i2325[26]
  i2324.asyncUploadTimeSlice = i2325[27]
  i2324.billboardsFaceCameraPosition = !!i2325[28]
  i2324.shadowNearPlaneOffset = i2325[29]
  i2324.streamingMipmapsMemoryBudget = i2325[30]
  i2324.maximumLODLevel = i2325[31]
  i2324.streamingMipmapsAddAllCameras = !!i2325[32]
  i2324.streamingMipmapsMaxLevelReduction = i2325[33]
  i2324.streamingMipmapsRenderersPerFrame = i2325[34]
  i2324.resolutionScalingFixedDPIFactor = i2325[35]
  i2324.streamingMipmapsMaxFileIORequests = i2325[36]
  i2324.currentQualityLevel = i2325[37]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2335 = data
  i2334.weight = i2335[0]
  i2334.vertices = i2335[1]
  i2334.normals = i2335[2]
  i2334.tangents = i2335[3]
  return i2334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[50],"72":[48],"73":[48],"74":[48],"75":[48],"76":[48],"77":[48],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[50],"93":[37],"94":[95],"96":[95],"1":[0],"97":[34],"98":[1],"99":[0],"100":[37,0],"101":[0,5],"102":[0],"103":[5,0],"104":[37],"105":[5,0],"106":[0],"107":[108],"109":[108],"110":[108],"111":[0],"112":[0],"4":[1],"6":[5,0],"113":[0],"3":[1],"114":[0],"115":[0],"8":[0],"116":[0],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"28":[5,0],"122":[0],"123":[0],"124":[0],"11":[0],"125":[5,0],"126":[0],"127":[34],"128":[34],"35":[34],"129":[34],"130":[50],"131":[50]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Mesh","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.Light","UICheckBoxHolder","UnityEngine.UI.Button","GameManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","PlayerController","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","ProgressTrackingManager","ChoiceBoardPlacer","PlayerVisual","UnityEngine.Animator","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "60.9";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_V13_Fix";

Deserializers.lunaAppID = "33920";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5106";

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

Deserializers.buildID = "446358a7-1b6d-4a6d-8fd3-0ee25b22b546";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

