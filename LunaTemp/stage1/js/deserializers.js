var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.JointSpring' )
  var i1747 = data
  i1746.spring = i1747[0]
  i1746.damper = i1747[1]
  i1746.targetPosition = i1747[2]
  return i1746
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.JointMotor' )
  var i1749 = data
  i1748.m_TargetVelocity = i1749[0]
  i1748.m_Force = i1749[1]
  i1748.m_FreeSpin = i1749[2]
  return i1748
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.JointLimits' )
  var i1751 = data
  i1750.m_Min = i1751[0]
  i1750.m_Max = i1751[1]
  i1750.m_Bounciness = i1751[2]
  i1750.m_BounceMinVelocity = i1751[3]
  i1750.m_ContactDistance = i1751[4]
  i1750.minBounce = i1751[5]
  i1750.maxBounce = i1751[6]
  return i1750
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.JointDrive' )
  var i1753 = data
  i1752.m_PositionSpring = i1753[0]
  i1752.m_PositionDamper = i1753[1]
  i1752.m_MaximumForce = i1753[2]
  i1752.m_UseAcceleration = i1753[3]
  return i1752
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1755 = data
  i1754.m_Spring = i1755[0]
  i1754.m_Damper = i1755[1]
  return i1754
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1757 = data
  i1756.m_Limit = i1757[0]
  i1756.m_Bounciness = i1757[1]
  i1756.m_ContactDistance = i1757[2]
  return i1756
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1759 = data
  i1758.m_ExtremumSlip = i1759[0]
  i1758.m_ExtremumValue = i1759[1]
  i1758.m_AsymptoteSlip = i1759[2]
  i1758.m_AsymptoteValue = i1759[3]
  i1758.m_Stiffness = i1759[4]
  return i1758
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1761 = data
  i1760.m_LowerAngle = i1761[0]
  i1760.m_UpperAngle = i1761[1]
  return i1760
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1763 = data
  i1762.m_MotorSpeed = i1763[0]
  i1762.m_MaximumMotorTorque = i1763[1]
  return i1762
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1765 = data
  i1764.m_DampingRatio = i1765[0]
  i1764.m_Frequency = i1765[1]
  i1764.m_Angle = i1765[2]
  return i1764
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1767 = data
  i1766.m_LowerTranslation = i1767[0]
  i1766.m_UpperTranslation = i1767[1]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.halfPrecision = !!i1769[1]
  i1768.useSimplification = !!i1769[2]
  i1768.useUInt32IndexFormat = !!i1769[3]
  i1768.vertexCount = i1769[4]
  i1768.aabb = i1769[5]
  var i1771 = i1769[6]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( !!i1771[i + 0] );
  }
  i1768.streams = i1770
  i1768.vertices = i1769[7]
  var i1773 = i1769[8]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1773[i + 0]) );
  }
  i1768.subMeshes = i1772
  var i1775 = i1769[9]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 16) {
    i1774.push( new pc.Mat4().setData(i1775[i + 0], i1775[i + 1], i1775[i + 2], i1775[i + 3],  i1775[i + 4], i1775[i + 5], i1775[i + 6], i1775[i + 7],  i1775[i + 8], i1775[i + 9], i1775[i + 10], i1775[i + 11],  i1775[i + 12], i1775[i + 13], i1775[i + 14], i1775[i + 15]) );
  }
  i1768.bindposes = i1774
  var i1777 = i1769[10]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1777[i + 0]) );
  }
  i1768.blendShapes = i1776
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1783 = data
  i1782.triangles = i1783[0]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1789 = data
  i1788.name = i1789[0]
  var i1791 = i1789[1]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1791[i + 0]) );
  }
  i1788.frames = i1790
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1792 = root || new pc.UnityMaterial()
  var i1793 = data
  i1792.name = i1793[0]
  request.r(i1793[1], i1793[2], 0, i1792, 'shader')
  i1792.renderQueue = i1793[3]
  i1792.enableInstancing = !!i1793[4]
  var i1795 = i1793[5]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1795[i + 0]) );
  }
  i1792.floatParameters = i1794
  var i1797 = i1793[6]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1797[i + 0]) );
  }
  i1792.colorParameters = i1796
  var i1799 = i1793[7]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1799[i + 0]) );
  }
  i1792.vectorParameters = i1798
  var i1801 = i1793[8]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1801[i + 0]) );
  }
  i1792.textureParameters = i1800
  var i1803 = i1793[9]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1803[i + 0]) );
  }
  i1792.materialFlags = i1802
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.value = i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.value = new pc.Color(i1811[1], i1811[2], i1811[3], i1811[4])
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1815 = data
  i1814.name = i1815[0]
  i1814.value = new pc.Vec4( i1815[1], i1815[2], i1815[3], i1815[4] )
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1819 = data
  i1818.name = i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'value')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.enabled = !!i1823[1]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.width = i1825[1]
  i1824.height = i1825[2]
  i1824.mipmapCount = i1825[3]
  i1824.anisoLevel = i1825[4]
  i1824.filterMode = i1825[5]
  i1824.hdr = !!i1825[6]
  i1824.format = i1825[7]
  i1824.wrapMode = i1825[8]
  i1824.alphaIsTransparency = !!i1825[9]
  i1824.alphaSource = i1825[10]
  i1824.graphicsFormat = i1825[11]
  i1824.sRGBTexture = !!i1825[12]
  i1824.desiredColorSpace = i1825[13]
  i1824.wrapU = i1825[14]
  i1824.wrapV = i1825[15]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1827 = data
  i1826.position = new pc.Vec3( i1827[0], i1827[1], i1827[2] )
  i1826.scale = new pc.Vec3( i1827[3], i1827[4], i1827[5] )
  i1826.rotation = new pc.Quat(i1827[6], i1827[7], i1827[8], i1827[9])
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1829 = data
  i1828.center = new pc.Vec3( i1829[0], i1829[1], i1829[2] )
  i1828.size = new pc.Vec3( i1829[3], i1829[4], i1829[5] )
  i1828.enabled = !!i1829[6]
  i1828.isTrigger = !!i1829[7]
  request.r(i1829[8], i1829[9], 0, i1828, 'material')
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1831 = data
  i1830.color = new pc.Color(i1831[0], i1831[1], i1831[2], i1831[3])
  request.r(i1831[4], i1831[5], 0, i1830, 'sprite')
  i1830.flipX = !!i1831[6]
  i1830.flipY = !!i1831[7]
  i1830.drawMode = i1831[8]
  i1830.size = new pc.Vec2( i1831[9], i1831[10] )
  i1830.tileMode = i1831[11]
  i1830.adaptiveModeThreshold = i1831[12]
  i1830.maskInteraction = i1831[13]
  i1830.spriteSortPoint = i1831[14]
  i1830.enabled = !!i1831[15]
  request.r(i1831[16], i1831[17], 0, i1830, 'sharedMaterial')
  var i1833 = i1831[18]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 2) {
  request.r(i1833[i + 0], i1833[i + 1], 2, i1832, '')
  }
  i1830.sharedMaterials = i1832
  i1830.receiveShadows = !!i1831[19]
  i1830.shadowCastingMode = i1831[20]
  i1830.sortingLayerID = i1831[21]
  i1830.sortingOrder = i1831[22]
  i1830.lightmapIndex = i1831[23]
  i1830.lightmapSceneIndex = i1831[24]
  i1830.lightmapScaleOffset = new pc.Vec4( i1831[25], i1831[26], i1831[27], i1831[28] )
  i1830.lightProbeUsage = i1831[29]
  i1830.reflectionProbeUsage = i1831[30]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.tagId = i1837[1]
  i1836.enabled = !!i1837[2]
  i1836.isStatic = !!i1837[3]
  i1836.layer = i1837[4]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'sharedMesh')
  var i1841 = i1839[2]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 2, i1840, '')
  }
  i1838.bones = i1840
  i1838.updateWhenOffscreen = !!i1839[3]
  i1838.localBounds = i1839[4]
  request.r(i1839[5], i1839[6], 0, i1838, 'rootBone')
  var i1843 = i1839[7]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1843[i + 0]) );
  }
  i1838.blendShapesWeights = i1842
  i1838.enabled = !!i1839[8]
  request.r(i1839[9], i1839[10], 0, i1838, 'sharedMaterial')
  var i1845 = i1839[11]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 2, i1844, '')
  }
  i1838.sharedMaterials = i1844
  i1838.receiveShadows = !!i1839[12]
  i1838.shadowCastingMode = i1839[13]
  i1838.sortingLayerID = i1839[14]
  i1838.sortingOrder = i1839[15]
  i1838.lightmapIndex = i1839[16]
  i1838.lightmapSceneIndex = i1839[17]
  i1838.lightmapScaleOffset = new pc.Vec4( i1839[18], i1839[19], i1839[20], i1839[21] )
  i1838.lightProbeUsage = i1839[22]
  i1838.reflectionProbeUsage = i1839[23]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1851 = data
  i1850.weight = i1851[0]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1853 = data
  i1852.pivot = new pc.Vec2( i1853[0], i1853[1] )
  i1852.anchorMin = new pc.Vec2( i1853[2], i1853[3] )
  i1852.anchorMax = new pc.Vec2( i1853[4], i1853[5] )
  i1852.sizeDelta = new pc.Vec2( i1853[6], i1853[7] )
  i1852.anchoredPosition3D = new pc.Vec3( i1853[8], i1853[9], i1853[10] )
  i1852.rotation = new pc.Quat(i1853[11], i1853[12], i1853[13], i1853[14])
  i1852.scale = new pc.Vec3( i1853[15], i1853[16], i1853[17] )
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1855 = data
  i1854.planeDistance = i1855[0]
  i1854.referencePixelsPerUnit = i1855[1]
  i1854.isFallbackOverlay = !!i1855[2]
  i1854.renderMode = i1855[3]
  i1854.renderOrder = i1855[4]
  i1854.sortingLayerName = i1855[5]
  i1854.sortingOrder = i1855[6]
  i1854.scaleFactor = i1855[7]
  request.r(i1855[8], i1855[9], 0, i1854, 'worldCamera')
  i1854.overrideSorting = !!i1855[10]
  i1854.pixelPerfect = !!i1855[11]
  i1854.targetDisplay = i1855[12]
  i1854.overridePixelPerfect = !!i1855[13]
  i1854.enabled = !!i1855[14]
  return i1854
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1857 = data
  i1856.m_UiScaleMode = i1857[0]
  i1856.m_ReferencePixelsPerUnit = i1857[1]
  i1856.m_ScaleFactor = i1857[2]
  i1856.m_ReferenceResolution = new pc.Vec2( i1857[3], i1857[4] )
  i1856.m_ScreenMatchMode = i1857[5]
  i1856.m_MatchWidthOrHeight = i1857[6]
  i1856.m_PhysicalUnit = i1857[7]
  i1856.m_FallbackScreenDPI = i1857[8]
  i1856.m_DefaultSpriteDPI = i1857[9]
  i1856.m_DynamicPixelsPerUnit = i1857[10]
  i1856.m_PresetInfoIsWorld = !!i1857[11]
  return i1856
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1859 = data
  i1858.m_IgnoreReversedGraphics = !!i1859[0]
  i1858.m_BlockingObjects = i1859[1]
  i1858.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1859[2] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1861 = data
  i1860.cullTransparentMesh = !!i1861[0]
  return i1860
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.Image' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'm_Sprite')
  i1862.m_Type = i1863[2]
  i1862.m_PreserveAspect = !!i1863[3]
  i1862.m_FillCenter = !!i1863[4]
  i1862.m_FillMethod = i1863[5]
  i1862.m_FillAmount = i1863[6]
  i1862.m_FillClockwise = !!i1863[7]
  i1862.m_FillOrigin = i1863[8]
  i1862.m_UseSpriteMesh = !!i1863[9]
  i1862.m_PixelsPerUnitMultiplier = i1863[10]
  request.r(i1863[11], i1863[12], 0, i1862, 'm_Material')
  i1862.m_Maskable = !!i1863[13]
  i1862.m_Color = new pc.Color(i1863[14], i1863[15], i1863[16], i1863[17])
  i1862.m_RaycastTarget = !!i1863[18]
  i1862.m_RaycastPadding = new pc.Vec4( i1863[19], i1863[20], i1863[21], i1863[22] )
  return i1862
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'm_Texture')
  i1864.m_UVRect = UnityEngine.Rect.MinMaxRect(i1865[2], i1865[3], i1865[4], i1865[5])
  request.r(i1865[6], i1865[7], 0, i1864, 'm_Material')
  i1864.m_Maskable = !!i1865[8]
  i1864.m_Color = new pc.Color(i1865[9], i1865[10], i1865[11], i1865[12])
  i1864.m_RaycastTarget = !!i1865[13]
  i1864.m_RaycastPadding = new pc.Vec4( i1865[14], i1865[15], i1865[16], i1865[17] )
  return i1864
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i1866 = root || request.c( 'ImageScroller' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'rawImage')
  i1866.moveVector = new pc.Vec2( i1867[2], i1867[3] )
  return i1866
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i1868 = root || request.c( 'UIGuidingMove' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'target')
  i1868.startPosition = new pc.Vec2( i1869[2], i1869[3] )
  i1868.endPosition = new pc.Vec2( i1869[4], i1869[5] )
  i1868.duration = i1869[6]
  i1868.ease = i1869[7]
  i1868.resetToStartOnComplete = !!i1869[8]
  i1868.loop = !!i1869[9]
  i1868.loopCount = i1869[10]
  i1868.loopType = i1869[11]
  return i1868
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i1870 = root || request.c( 'UIPulse' )
  var i1871 = data
  i1870.targetScale = new pc.Vec3( i1871[0], i1871[1], i1871[2] )
  i1870.duration = i1871[3]
  i1870.ease = i1871[4]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1873 = data
  i1872.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1873[0], i1872.main)
  i1872.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1873[1], i1872.colorBySpeed)
  i1872.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1873[2], i1872.colorOverLifetime)
  i1872.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1873[3], i1872.emission)
  i1872.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1873[4], i1872.rotationBySpeed)
  i1872.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1873[5], i1872.rotationOverLifetime)
  i1872.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1873[6], i1872.shape)
  i1872.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1873[7], i1872.sizeBySpeed)
  i1872.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1873[8], i1872.sizeOverLifetime)
  i1872.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1873[9], i1872.textureSheetAnimation)
  i1872.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1873[10], i1872.velocityOverLifetime)
  i1872.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1873[11], i1872.noise)
  i1872.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1873[12], i1872.inheritVelocity)
  i1872.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1873[13], i1872.forceOverLifetime)
  i1872.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1873[14], i1872.limitVelocityOverLifetime)
  i1872.useAutoRandomSeed = !!i1873[15]
  i1872.randomSeed = i1873[16]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1874 = root || new pc.ParticleSystemMain()
  var i1875 = data
  i1874.duration = i1875[0]
  i1874.loop = !!i1875[1]
  i1874.prewarm = !!i1875[2]
  i1874.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[3], i1874.startDelay)
  i1874.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[4], i1874.startLifetime)
  i1874.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[5], i1874.startSpeed)
  i1874.startSize3D = !!i1875[6]
  i1874.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[7], i1874.startSizeX)
  i1874.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[8], i1874.startSizeY)
  i1874.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[9], i1874.startSizeZ)
  i1874.startRotation3D = !!i1875[10]
  i1874.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[11], i1874.startRotationX)
  i1874.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[12], i1874.startRotationY)
  i1874.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[13], i1874.startRotationZ)
  i1874.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1875[14], i1874.startColor)
  i1874.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[15], i1874.gravityModifier)
  i1874.simulationSpace = i1875[16]
  request.r(i1875[17], i1875[18], 0, i1874, 'customSimulationSpace')
  i1874.simulationSpeed = i1875[19]
  i1874.useUnscaledTime = !!i1875[20]
  i1874.scalingMode = i1875[21]
  i1874.playOnAwake = !!i1875[22]
  i1874.maxParticles = i1875[23]
  i1874.emitterVelocityMode = i1875[24]
  i1874.stopAction = i1875[25]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1876 = root || new pc.MinMaxCurve()
  var i1877 = data
  i1876.mode = i1877[0]
  i1876.curveMin = new pc.AnimationCurve( { keys_flow: i1877[1] } )
  i1876.curveMax = new pc.AnimationCurve( { keys_flow: i1877[2] } )
  i1876.curveMultiplier = i1877[3]
  i1876.constantMin = i1877[4]
  i1876.constantMax = i1877[5]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1878 = root || new pc.MinMaxGradient()
  var i1879 = data
  i1878.mode = i1879[0]
  i1878.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1879[1], i1878.gradientMin)
  i1878.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1879[2], i1878.gradientMax)
  i1878.colorMin = new pc.Color(i1879[3], i1879[4], i1879[5], i1879[6])
  i1878.colorMax = new pc.Color(i1879[7], i1879[8], i1879[9], i1879[10])
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1881 = data
  i1880.mode = i1881[0]
  var i1883 = i1881[1]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1883[i + 0]) );
  }
  i1880.colorKeys = i1882
  var i1885 = i1881[2]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1885[i + 0]) );
  }
  i1880.alphaKeys = i1884
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1886 = root || new pc.ParticleSystemColorBySpeed()
  var i1887 = data
  i1886.enabled = !!i1887[0]
  i1886.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1887[1], i1886.color)
  i1886.range = new pc.Vec2( i1887[2], i1887[3] )
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1891 = data
  i1890.color = new pc.Color(i1891[0], i1891[1], i1891[2], i1891[3])
  i1890.time = i1891[4]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1895 = data
  i1894.alpha = i1895[0]
  i1894.time = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1896 = root || new pc.ParticleSystemColorOverLifetime()
  var i1897 = data
  i1896.enabled = !!i1897[0]
  i1896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1897[1], i1896.color)
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1898 = root || new pc.ParticleSystemEmitter()
  var i1899 = data
  i1898.enabled = !!i1899[0]
  i1898.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[1], i1898.rateOverTime)
  i1898.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[2], i1898.rateOverDistance)
  var i1901 = i1899[3]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1901[i + 0]) );
  }
  i1898.bursts = i1900
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1904 = root || new pc.ParticleSystemBurst()
  var i1905 = data
  i1904.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[0], i1904.count)
  i1904.cycleCount = i1905[1]
  i1904.minCount = i1905[2]
  i1904.maxCount = i1905[3]
  i1904.repeatInterval = i1905[4]
  i1904.time = i1905[5]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1906 = root || new pc.ParticleSystemRotationBySpeed()
  var i1907 = data
  i1906.enabled = !!i1907[0]
  i1906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[1], i1906.x)
  i1906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[2], i1906.y)
  i1906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[3], i1906.z)
  i1906.separateAxes = !!i1907[4]
  i1906.range = new pc.Vec2( i1907[5], i1907[6] )
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1908 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1909 = data
  i1908.enabled = !!i1909[0]
  i1908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[1], i1908.x)
  i1908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[2], i1908.y)
  i1908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[3], i1908.z)
  i1908.separateAxes = !!i1909[4]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1910 = root || new pc.ParticleSystemShape()
  var i1911 = data
  i1910.enabled = !!i1911[0]
  i1910.shapeType = i1911[1]
  i1910.randomDirectionAmount = i1911[2]
  i1910.sphericalDirectionAmount = i1911[3]
  i1910.randomPositionAmount = i1911[4]
  i1910.alignToDirection = !!i1911[5]
  i1910.radius = i1911[6]
  i1910.radiusMode = i1911[7]
  i1910.radiusSpread = i1911[8]
  i1910.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[9], i1910.radiusSpeed)
  i1910.radiusThickness = i1911[10]
  i1910.angle = i1911[11]
  i1910.length = i1911[12]
  i1910.boxThickness = new pc.Vec3( i1911[13], i1911[14], i1911[15] )
  i1910.meshShapeType = i1911[16]
  request.r(i1911[17], i1911[18], 0, i1910, 'mesh')
  request.r(i1911[19], i1911[20], 0, i1910, 'meshRenderer')
  request.r(i1911[21], i1911[22], 0, i1910, 'skinnedMeshRenderer')
  i1910.useMeshMaterialIndex = !!i1911[23]
  i1910.meshMaterialIndex = i1911[24]
  i1910.useMeshColors = !!i1911[25]
  i1910.normalOffset = i1911[26]
  i1910.arc = i1911[27]
  i1910.arcMode = i1911[28]
  i1910.arcSpread = i1911[29]
  i1910.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[30], i1910.arcSpeed)
  i1910.donutRadius = i1911[31]
  i1910.position = new pc.Vec3( i1911[32], i1911[33], i1911[34] )
  i1910.rotation = new pc.Vec3( i1911[35], i1911[36], i1911[37] )
  i1910.scale = new pc.Vec3( i1911[38], i1911[39], i1911[40] )
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1912 = root || new pc.ParticleSystemSizeBySpeed()
  var i1913 = data
  i1912.enabled = !!i1913[0]
  i1912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[1], i1912.x)
  i1912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[2], i1912.y)
  i1912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[3], i1912.z)
  i1912.separateAxes = !!i1913[4]
  i1912.range = new pc.Vec2( i1913[5], i1913[6] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1914 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1915 = data
  i1914.enabled = !!i1915[0]
  i1914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1915[1], i1914.x)
  i1914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1915[2], i1914.y)
  i1914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1915[3], i1914.z)
  i1914.separateAxes = !!i1915[4]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1916 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1917 = data
  i1916.enabled = !!i1917[0]
  i1916.mode = i1917[1]
  i1916.animation = i1917[2]
  i1916.numTilesX = i1917[3]
  i1916.numTilesY = i1917[4]
  i1916.useRandomRow = !!i1917[5]
  i1916.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1917[6], i1916.frameOverTime)
  i1916.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1917[7], i1916.startFrame)
  i1916.cycleCount = i1917[8]
  i1916.rowIndex = i1917[9]
  i1916.flipU = i1917[10]
  i1916.flipV = i1917[11]
  i1916.spriteCount = i1917[12]
  var i1919 = i1917[13]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 2, i1918, '')
  }
  i1916.sprites = i1918
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[1], i1922.x)
  i1922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[2], i1922.y)
  i1922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[3], i1922.z)
  i1922.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[4], i1922.radial)
  i1922.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[5], i1922.speedModifier)
  i1922.space = i1923[6]
  i1922.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[7], i1922.orbitalX)
  i1922.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[8], i1922.orbitalY)
  i1922.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[9], i1922.orbitalZ)
  i1922.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[10], i1922.orbitalOffsetX)
  i1922.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[11], i1922.orbitalOffsetY)
  i1922.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1923[12], i1922.orbitalOffsetZ)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemNoise()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.separateAxes = !!i1925[1]
  i1924.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[2], i1924.strengthX)
  i1924.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[3], i1924.strengthY)
  i1924.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[4], i1924.strengthZ)
  i1924.frequency = i1925[5]
  i1924.damping = !!i1925[6]
  i1924.octaveCount = i1925[7]
  i1924.octaveMultiplier = i1925[8]
  i1924.octaveScale = i1925[9]
  i1924.quality = i1925[10]
  i1924.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[11], i1924.scrollSpeed)
  i1924.scrollSpeedMultiplier = i1925[12]
  i1924.remapEnabled = !!i1925[13]
  i1924.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[14], i1924.remapX)
  i1924.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[15], i1924.remapY)
  i1924.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[16], i1924.remapZ)
  i1924.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[17], i1924.positionAmount)
  i1924.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[18], i1924.rotationAmount)
  i1924.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[19], i1924.sizeAmount)
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1926 = root || new pc.ParticleSystemInheritVelocity()
  var i1927 = data
  i1926.enabled = !!i1927[0]
  i1926.mode = i1927[1]
  i1926.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[2], i1926.curve)
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1928 = root || new pc.ParticleSystemForceOverLifetime()
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[1], i1928.x)
  i1928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[2], i1928.y)
  i1928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[3], i1928.z)
  i1928.space = i1929[4]
  i1928.randomized = !!i1929[5]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1930 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1931 = data
  i1930.enabled = !!i1931[0]
  i1930.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[1], i1930.limit)
  i1930.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[2], i1930.limitX)
  i1930.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[3], i1930.limitY)
  i1930.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[4], i1930.limitZ)
  i1930.dampen = i1931[5]
  i1930.separateAxes = !!i1931[6]
  i1930.space = i1931[7]
  i1930.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[8], i1930.drag)
  i1930.multiplyDragByParticleSize = !!i1931[9]
  i1930.multiplyDragByParticleVelocity = !!i1931[10]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'mesh')
  i1932.meshCount = i1933[2]
  i1932.activeVertexStreamsCount = i1933[3]
  i1932.alignment = i1933[4]
  i1932.renderMode = i1933[5]
  i1932.sortMode = i1933[6]
  i1932.lengthScale = i1933[7]
  i1932.velocityScale = i1933[8]
  i1932.cameraVelocityScale = i1933[9]
  i1932.normalDirection = i1933[10]
  i1932.sortingFudge = i1933[11]
  i1932.minParticleSize = i1933[12]
  i1932.maxParticleSize = i1933[13]
  i1932.pivot = new pc.Vec3( i1933[14], i1933[15], i1933[16] )
  request.r(i1933[17], i1933[18], 0, i1932, 'trailMaterial')
  i1932.applyActiveColorSpace = !!i1933[19]
  i1932.enabled = !!i1933[20]
  request.r(i1933[21], i1933[22], 0, i1932, 'sharedMaterial')
  var i1935 = i1933[23]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 2) {
  request.r(i1935[i + 0], i1935[i + 1], 2, i1934, '')
  }
  i1932.sharedMaterials = i1934
  i1932.receiveShadows = !!i1933[24]
  i1932.shadowCastingMode = i1933[25]
  i1932.sortingLayerID = i1933[26]
  i1932.sortingOrder = i1933[27]
  i1932.lightmapIndex = i1933[28]
  i1932.lightmapSceneIndex = i1933[29]
  i1932.lightmapScaleOffset = new pc.Vec4( i1933[30], i1933[31], i1933[32], i1933[33] )
  i1932.lightProbeUsage = i1933[34]
  i1932.reflectionProbeUsage = i1933[35]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.atlasId = i1937[1]
  i1936.mipmapCount = i1937[2]
  i1936.hdr = !!i1937[3]
  i1936.size = i1937[4]
  i1936.anisoLevel = i1937[5]
  i1936.filterMode = i1937[6]
  var i1939 = i1937[7]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 4) {
    i1938.push( UnityEngine.Rect.MinMaxRect(i1939[i + 0], i1939[i + 1], i1939[i + 2], i1939[i + 3]) );
  }
  i1936.rects = i1938
  i1936.wrapU = i1937[8]
  i1936.wrapV = i1937[9]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1943 = data
  i1942.name = i1943[0]
  i1942.index = i1943[1]
  i1942.startup = !!i1943[2]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1945 = data
  i1944.aspect = i1945[0]
  i1944.orthographic = !!i1945[1]
  i1944.orthographicSize = i1945[2]
  i1944.backgroundColor = new pc.Color(i1945[3], i1945[4], i1945[5], i1945[6])
  i1944.nearClipPlane = i1945[7]
  i1944.farClipPlane = i1945[8]
  i1944.fieldOfView = i1945[9]
  i1944.depth = i1945[10]
  i1944.clearFlags = i1945[11]
  i1944.cullingMask = i1945[12]
  i1944.rect = i1945[13]
  request.r(i1945[14], i1945[15], 0, i1944, 'targetTexture')
  i1944.usePhysicalProperties = !!i1945[16]
  i1944.focalLength = i1945[17]
  i1944.sensorSize = new pc.Vec2( i1945[18], i1945[19] )
  i1944.lensShift = new pc.Vec2( i1945[20], i1945[21] )
  i1944.gateFit = i1945[22]
  i1944.commandBufferCount = i1945[23]
  i1944.cameraType = i1945[24]
  i1944.enabled = !!i1945[25]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'sharedMesh')
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'additionalVertexStreams')
  i1948.enabled = !!i1949[2]
  request.r(i1949[3], i1949[4], 0, i1948, 'sharedMaterial')
  var i1951 = i1949[5]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 2) {
  request.r(i1951[i + 0], i1951[i + 1], 2, i1950, '')
  }
  i1948.sharedMaterials = i1950
  i1948.receiveShadows = !!i1949[6]
  i1948.shadowCastingMode = i1949[7]
  i1948.sortingLayerID = i1949[8]
  i1948.sortingOrder = i1949[9]
  i1948.lightmapIndex = i1949[10]
  i1948.lightmapSceneIndex = i1949[11]
  i1948.lightmapScaleOffset = new pc.Vec4( i1949[12], i1949[13], i1949[14], i1949[15] )
  i1948.lightProbeUsage = i1949[16]
  i1948.reflectionProbeUsage = i1949[17]
  return i1948
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i1952 = root || request.c( 'MaterialUVScroller' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'targetMaterial')
  i1952.scrollSpeed = new pc.Vec2( i1953[2], i1953[3] )
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1955 = data
  i1954.type = i1955[0]
  i1954.color = new pc.Color(i1955[1], i1955[2], i1955[3], i1955[4])
  i1954.cullingMask = i1955[5]
  i1954.intensity = i1955[6]
  i1954.range = i1955[7]
  i1954.spotAngle = i1955[8]
  i1954.shadows = i1955[9]
  i1954.shadowNormalBias = i1955[10]
  i1954.shadowBias = i1955[11]
  i1954.shadowStrength = i1955[12]
  i1954.shadowResolution = i1955[13]
  i1954.lightmapBakeType = i1955[14]
  i1954.renderMode = i1955[15]
  request.r(i1955[16], i1955[17], 0, i1954, 'cookie')
  i1954.cookieSize = i1955[18]
  i1954.shadowNearPlane = i1955[19]
  i1954.enabled = !!i1955[20]
  return i1954
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_FirstSelected')
  i1956.m_sendNavigationEvents = !!i1957[2]
  i1956.m_DragThreshold = i1957[3]
  return i1956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1959 = data
  i1958.m_HorizontalAxis = i1959[0]
  i1958.m_VerticalAxis = i1959[1]
  i1958.m_SubmitButton = i1959[2]
  i1958.m_CancelButton = i1959[3]
  i1958.m_InputActionsPerSecond = i1959[4]
  i1958.m_RepeatDelay = i1959[5]
  i1958.m_ForceModuleActive = !!i1959[6]
  i1958.m_SendPointerHoverToParent = !!i1959[7]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'animatorController')
  request.r(i1961[2], i1961[3], 0, i1960, 'avatar')
  i1960.updateMode = i1961[4]
  i1960.hasTransformHierarchy = !!i1961[5]
  i1960.applyRootMotion = !!i1961[6]
  var i1963 = i1961[7]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 2) {
  request.r(i1963[i + 0], i1963[i + 1], 2, i1962, '')
  }
  i1960.humanBones = i1962
  i1960.enabled = !!i1961[8]
  return i1960
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i1964 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'animator')
  i1964.kickDuration = i1965[2]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1967 = data
  i1966.center = new pc.Vec3( i1967[0], i1967[1], i1967[2] )
  i1966.radius = i1967[3]
  i1966.enabled = !!i1967[4]
  i1966.isTrigger = !!i1967[5]
  request.r(i1967[6], i1967[7], 0, i1966, 'material')
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1969 = data
  i1968.mass = i1969[0]
  i1968.drag = i1969[1]
  i1968.angularDrag = i1969[2]
  i1968.useGravity = !!i1969[3]
  i1968.isKinematic = !!i1969[4]
  i1968.constraints = i1969[5]
  i1968.maxAngularVelocity = i1969[6]
  i1968.collisionDetectionMode = i1969[7]
  i1968.interpolation = i1969[8]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1971 = data
  var i1973 = i1971[0]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 3) {
    i1972.push( new pc.Vec3( i1973[i + 0], i1973[i + 1], i1973[i + 2] ) );
  }
  i1970.positions = i1972
  i1970.positionCount = i1971[1]
  i1970.time = i1971[2]
  i1970.startWidth = i1971[3]
  i1970.endWidth = i1971[4]
  i1970.widthMultiplier = i1971[5]
  i1970.autodestruct = !!i1971[6]
  i1970.emitting = !!i1971[7]
  i1970.numCornerVertices = i1971[8]
  i1970.numCapVertices = i1971[9]
  i1970.minVertexDistance = i1971[10]
  i1970.colorGradient = i1971[11] ? new pc.ColorGradient(i1971[11][0], i1971[11][1], i1971[11][2]) : null
  i1970.startColor = new pc.Color(i1971[12], i1971[13], i1971[14], i1971[15])
  i1970.endColor = new pc.Color(i1971[16], i1971[17], i1971[18], i1971[19])
  i1970.generateLightingData = !!i1971[20]
  i1970.textureMode = i1971[21]
  i1970.alignment = i1971[22]
  i1970.widthCurve = new pc.AnimationCurve( { keys_flow: i1971[23] } )
  i1970.enabled = !!i1971[24]
  request.r(i1971[25], i1971[26], 0, i1970, 'sharedMaterial')
  var i1975 = i1971[27]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 2) {
  request.r(i1975[i + 0], i1975[i + 1], 2, i1974, '')
  }
  i1970.sharedMaterials = i1974
  i1970.receiveShadows = !!i1971[28]
  i1970.shadowCastingMode = i1971[29]
  i1970.sortingLayerID = i1971[30]
  i1970.sortingOrder = i1971[31]
  i1970.lightmapIndex = i1971[32]
  i1970.lightmapSceneIndex = i1971[33]
  i1970.lightmapScaleOffset = new pc.Vec4( i1971[34], i1971[35], i1971[36], i1971[37] )
  i1970.lightProbeUsage = i1971[38]
  i1970.reflectionProbeUsage = i1971[39]
  return i1970
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i1978 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i1979 = data
  i1978.blockBounceSpeed = i1979[0]
  i1978.blockBounceUpward = i1979[1]
  i1978.goalFallSpeed = i1979[2]
  i1978.goalFallDownward = i1979[3]
  i1978.goalDropDamping = i1979[4]
  request.r(i1979[5], i1979[6], 0, i1978, 'leftTop')
  request.r(i1979[7], i1979[8], 0, i1978, 'bottomCenter')
  request.r(i1979[9], i1979[10], 0, i1978, 'rightTop')
  i1978.leftTopY = i1979[11]
  i1978.bottomCenterY = i1979[12]
  i1978.rightTopY = i1979[13]
  i1978.halfWidth = i1979[14]
  i1978.goalZ = i1979[15]
  i1978.flightTime = i1979[16]
  request.r(i1979[17], i1979[18], 0, i1978, 'trailRenderer')
  i1978.goalTag = i1979[19]
  return i1978
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i1980 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'leftPost')
  request.r(i1981[2], i1981[3], 0, i1980, 'rightPost')
  i1980.baseSpeed = i1981[4]
  i1980.changeSpeedByRound = !!i1981[5]
  return i1980
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i1982 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'leftLimit')
  request.r(i1983[2], i1983[3], 0, i1982, 'rightLimit')
  i1982.speed = i1983[4]
  i1982.startActive = !!i1983[5]
  return i1982
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i1984 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'leftPoint')
  request.r(i1985[2], i1985[3], 0, i1984, 'rightPoint')
  i1984.speed = i1985[4]
  request.r(i1985[5], i1985[6], 0, i1984, 'aimLineRenderer')
  request.r(i1985[7], i1985[8], 0, i1984, 'ballTransform')
  i1984.lineWidth = i1985[9]
  i1984.dashDensity = i1985[10]
  i1984.dashRatio = i1985[11]
  i1984.dashColor = new pc.Color(i1985[12], i1985[13], i1985[14], i1985[15])
  i1984.lineGroundY = i1985[16]
  i1984.pulseEffect = !!i1985[17]
  i1984.pulseSpeed = i1985[18]
  i1984.pulseScaleAmount = i1985[19]
  i1984.sortingOrder = i1985[20]
  i1984.sortingLayerName = i1985[21]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1987 = data
  i1986.textureMode = i1987[0]
  i1986.alignment = i1987[1]
  i1986.widthCurve = new pc.AnimationCurve( { keys_flow: i1987[2] } )
  i1986.colorGradient = i1987[3] ? new pc.ColorGradient(i1987[3][0], i1987[3][1], i1987[3][2]) : null
  var i1989 = i1987[4]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 3) {
    i1988.push( new pc.Vec3( i1989[i + 0], i1989[i + 1], i1989[i + 2] ) );
  }
  i1986.positions = i1988
  i1986.positionCount = i1987[5]
  i1986.widthMultiplier = i1987[6]
  i1986.startWidth = i1987[7]
  i1986.endWidth = i1987[8]
  i1986.numCornerVertices = i1987[9]
  i1986.numCapVertices = i1987[10]
  i1986.useWorldSpace = !!i1987[11]
  i1986.loop = !!i1987[12]
  i1986.startColor = new pc.Color(i1987[13], i1987[14], i1987[15], i1987[16])
  i1986.endColor = new pc.Color(i1987[17], i1987[18], i1987[19], i1987[20])
  i1986.generateLightingData = !!i1987[21]
  i1986.enabled = !!i1987[22]
  request.r(i1987[23], i1987[24], 0, i1986, 'sharedMaterial')
  var i1991 = i1987[25]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 2, i1990, '')
  }
  i1986.sharedMaterials = i1990
  i1986.receiveShadows = !!i1987[26]
  i1986.shadowCastingMode = i1987[27]
  i1986.sortingLayerID = i1987[28]
  i1986.sortingOrder = i1987[29]
  i1986.lightmapIndex = i1987[30]
  i1986.lightmapSceneIndex = i1987[31]
  i1986.lightmapScaleOffset = new pc.Vec4( i1987[32], i1987[33], i1987[34], i1987[35] )
  i1986.lightProbeUsage = i1987[36]
  i1986.reflectionProbeUsage = i1987[37]
  return i1986
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i1992 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i1993 = data
  i1992.kickImpactDelay = i1993[0]
  request.r(i1993[1], i1993[2], 0, i1992, 'ball')
  request.r(i1993[3], i1993[4], 0, i1992, 'targetMover')
  request.r(i1993[5], i1993[6], 0, i1992, 'goalkeeper')
  request.r(i1993[7], i1993[8], 0, i1992, 'ronaldoAnimator')
  request.r(i1993[9], i1993[10], 0, i1992, 'uiManager')
  request.r(i1993[11], i1993[12], 0, i1992, 'defenderRound2')
  request.r(i1993[13], i1993[14], 0, i1992, 'defenderRound3')
  i1992.targetSpeeds = i1993[15]
  i1992.delayBetweenRounds = i1993[16]
  i1992.promptEveryRound = !!i1993[17]
  return i1992
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i1994 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i1995 = data
  var i1997 = i1995[0]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1994.roundIndicators = i1996
  request.r(i1995[1], i1995[2], 0, i1994, 'iconEmpty')
  request.r(i1995[3], i1995[4], 0, i1994, 'iconCheck')
  request.r(i1995[5], i1995[6], 0, i1994, 'iconCross')
  request.r(i1995[7], i1995[8], 0, i1994, 'winEndcardPanel')
  request.r(i1995[9], i1995[10], 0, i1994, 'losePanel')
  request.r(i1995[11], i1995[12], 0, i1994, 'promptText')
  var i1999 = i1995[13]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 2, i1998, '')
  }
  i1994.objectsToShowOnWin = i1998
  i1994.winDelay = i1995[14]
  var i2001 = i1995[15]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1994.objectsToHideOnWin = i2000
  var i2003 = i1995[16]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 2, i2002, '')
  }
  i1994.objectsToHideOnLose = i2002
  var i2005 = i1995[17]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 2, i2004, '')
  }
  i1994.extraObjectsToHide = i2004
  return i1994
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2010 = root || request.c( 'Ply_SoundManager' )
  var i2011 = data
  i2010.audioClips = request.d('FxAudio', i2011[0], i2010.audioClips)
  request.r(i2011[1], i2011[2], 0, i2010, 'sound')
  i2010.enableSound = !!i2011[3]
  i2010.bgmVolume = i2011[4]
  return i2010
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2012 = root || request.c( 'FxAudio' )
  var i2013 = data
  i2012.Clock = request.d('SoundData', i2013[0], i2012.Clock)
  i2012.PlayerWin = request.d('SoundData', i2013[1], i2012.PlayerWin)
  i2012.PlayerLoose = request.d('SoundData', i2013[2], i2012.PlayerLoose)
  i2012.RightChoice = request.d('SoundData', i2013[3], i2012.RightChoice)
  i2012.WrongChoice = request.d('SoundData', i2013[4], i2012.WrongChoice)
  i2012.MaxLevel = request.d('SoundData', i2013[5], i2012.MaxLevel)
  i2012.FightingCloud = request.d('SoundData', i2013[6], i2012.FightingCloud)
  i2012.Confetti = request.d('SoundData', i2013[7], i2012.Confetti)
  return i2012
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2014 = root || request.c( 'SoundData' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'clip')
  i2014.volume = i2015[2]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'clip')
  request.r(i2017[2], i2017[3], 0, i2016, 'outputAudioMixerGroup')
  i2016.playOnAwake = !!i2017[4]
  i2016.loop = !!i2017[5]
  i2016.time = i2017[6]
  i2016.volume = i2017[7]
  i2016.pitch = i2017[8]
  i2016.enabled = !!i2017[9]
  return i2016
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Button' )
  var i2019 = data
  i2018.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2019[0], i2018.m_OnClick)
  i2018.m_Navigation = request.d('UnityEngine.UI.Navigation', i2019[1], i2018.m_Navigation)
  i2018.m_Transition = i2019[2]
  i2018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2019[3], i2018.m_Colors)
  i2018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2019[4], i2018.m_SpriteState)
  i2018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2019[5], i2018.m_AnimationTriggers)
  i2018.m_Interactable = !!i2019[6]
  request.r(i2019[7], i2019[8], 0, i2018, 'm_TargetGraphic')
  return i2018
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2021 = data
  i2020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2021[0], i2020.m_PersistentCalls)
  return i2020
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('UnityEngine.Events.PersistentCall', i2025[i + 0]));
  }
  i2022.m_Calls = i2024
  return i2022
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'm_Target')
  i2028.m_TargetAssemblyTypeName = i2029[2]
  i2028.m_MethodName = i2029[3]
  i2028.m_Mode = i2029[4]
  i2028.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2029[5], i2028.m_Arguments)
  i2028.m_CallState = i2029[6]
  return i2028
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'm_ObjectArgument')
  i2030.m_ObjectArgumentAssemblyTypeName = i2031[2]
  i2030.m_IntArgument = i2031[3]
  i2030.m_FloatArgument = i2031[4]
  i2030.m_StringArgument = i2031[5]
  i2030.m_BoolArgument = !!i2031[6]
  return i2030
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2033 = data
  i2032.m_Mode = i2033[0]
  i2032.m_WrapAround = !!i2033[1]
  request.r(i2033[2], i2033[3], 0, i2032, 'm_SelectOnUp')
  request.r(i2033[4], i2033[5], 0, i2032, 'm_SelectOnDown')
  request.r(i2033[6], i2033[7], 0, i2032, 'm_SelectOnLeft')
  request.r(i2033[8], i2033[9], 0, i2032, 'm_SelectOnRight')
  return i2032
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2035 = data
  i2034.m_NormalColor = new pc.Color(i2035[0], i2035[1], i2035[2], i2035[3])
  i2034.m_HighlightedColor = new pc.Color(i2035[4], i2035[5], i2035[6], i2035[7])
  i2034.m_PressedColor = new pc.Color(i2035[8], i2035[9], i2035[10], i2035[11])
  i2034.m_SelectedColor = new pc.Color(i2035[12], i2035[13], i2035[14], i2035[15])
  i2034.m_DisabledColor = new pc.Color(i2035[16], i2035[17], i2035[18], i2035[19])
  i2034.m_ColorMultiplier = i2035[20]
  i2034.m_FadeDuration = i2035[21]
  return i2034
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'm_HighlightedSprite')
  request.r(i2037[2], i2037[3], 0, i2036, 'm_PressedSprite')
  request.r(i2037[4], i2037[5], 0, i2036, 'm_SelectedSprite')
  request.r(i2037[6], i2037[7], 0, i2036, 'm_DisabledSprite')
  return i2036
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2039 = data
  i2038.m_NormalTrigger = i2039[0]
  i2038.m_HighlightedTrigger = i2039[1]
  i2038.m_PressedTrigger = i2039[2]
  i2038.m_SelectedTrigger = i2039[3]
  i2038.m_DisabledTrigger = i2039[4]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2041 = data
  i2040.ambientIntensity = i2041[0]
  i2040.reflectionIntensity = i2041[1]
  i2040.ambientMode = i2041[2]
  i2040.ambientLight = new pc.Color(i2041[3], i2041[4], i2041[5], i2041[6])
  i2040.ambientSkyColor = new pc.Color(i2041[7], i2041[8], i2041[9], i2041[10])
  i2040.ambientGroundColor = new pc.Color(i2041[11], i2041[12], i2041[13], i2041[14])
  i2040.ambientEquatorColor = new pc.Color(i2041[15], i2041[16], i2041[17], i2041[18])
  i2040.fogColor = new pc.Color(i2041[19], i2041[20], i2041[21], i2041[22])
  i2040.fogEndDistance = i2041[23]
  i2040.fogStartDistance = i2041[24]
  i2040.fogDensity = i2041[25]
  i2040.fog = !!i2041[26]
  request.r(i2041[27], i2041[28], 0, i2040, 'skybox')
  i2040.fogMode = i2041[29]
  var i2043 = i2041[30]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2043[i + 0]) );
  }
  i2040.lightmaps = i2042
  i2040.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2041[31], i2040.lightProbes)
  i2040.lightmapsMode = i2041[32]
  i2040.mixedBakeMode = i2041[33]
  i2040.environmentLightingMode = i2041[34]
  i2040.ambientProbe = new pc.SphericalHarmonicsL2(i2041[35])
  i2040.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2041[36])
  i2040.useReferenceAmbientProbe = !!i2041[37]
  request.r(i2041[38], i2041[39], 0, i2040, 'customReflection')
  request.r(i2041[40], i2041[41], 0, i2040, 'defaultReflection')
  i2040.defaultReflectionMode = i2041[42]
  i2040.defaultReflectionResolution = i2041[43]
  i2040.sunLightObjectId = i2041[44]
  i2040.pixelLightCount = i2041[45]
  i2040.defaultReflectionHDR = !!i2041[46]
  i2040.hasLightDataAsset = !!i2041[47]
  i2040.hasManualGenerate = !!i2041[48]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'lightmapColor')
  request.r(i2047[2], i2047[3], 0, i2046, 'lightmapDirection')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2048 = root || new UnityEngine.LightProbes()
  var i2049 = data
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.bounciness = i2055[1]
  i2054.dynamicFriction = i2055[2]
  i2054.staticFriction = i2055[3]
  i2054.frictionCombine = i2055[4]
  i2054.bounceCombine = i2055[5]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2057 = data
  var i2059 = i2057[0]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2059[i + 0]));
  }
  i2056.ShaderCompilationErrors = i2058
  i2056.name = i2057[1]
  i2056.guid = i2057[2]
  var i2061 = i2057[3]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2056.shaderDefinedKeywords = i2060
  var i2063 = i2057[4]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2063[i + 0]) );
  }
  i2056.passes = i2062
  var i2065 = i2057[5]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2065[i + 0]) );
  }
  i2056.usePasses = i2064
  var i2067 = i2057[6]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2067[i + 0]) );
  }
  i2056.defaultParameterValues = i2066
  request.r(i2057[7], i2057[8], 0, i2056, 'unityFallbackShader')
  i2056.readDepth = !!i2057[9]
  i2056.hasDepthOnlyPass = !!i2057[10]
  i2056.isCreatedByShaderGraph = !!i2057[11]
  i2056.disableBatching = !!i2057[12]
  i2056.compiled = !!i2057[13]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2071 = data
  i2070.shaderName = i2071[0]
  i2070.errorMessage = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2076 = root || new pc.UnityShaderPass()
  var i2077 = data
  i2076.id = i2077[0]
  i2076.subShaderIndex = i2077[1]
  i2076.name = i2077[2]
  i2076.passType = i2077[3]
  i2076.grabPassTextureName = i2077[4]
  i2076.usePass = !!i2077[5]
  i2076.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[6], i2076.zTest)
  i2076.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[7], i2076.zWrite)
  i2076.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[8], i2076.culling)
  i2076.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2077[9], i2076.blending)
  i2076.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2077[10], i2076.alphaBlending)
  i2076.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[11], i2076.colorWriteMask)
  i2076.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[12], i2076.offsetUnits)
  i2076.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[13], i2076.offsetFactor)
  i2076.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[14], i2076.stencilRef)
  i2076.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[15], i2076.stencilReadMask)
  i2076.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[16], i2076.stencilWriteMask)
  i2076.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2077[17], i2076.stencilOp)
  i2076.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2077[18], i2076.stencilOpFront)
  i2076.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2077[19], i2076.stencilOpBack)
  var i2079 = i2077[20]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2079[i + 0]) );
  }
  i2076.tags = i2078
  var i2081 = i2077[21]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( i2081[i + 0] );
  }
  i2076.passDefinedKeywords = i2080
  var i2083 = i2077[22]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2083[i + 0]) );
  }
  i2076.passDefinedKeywordGroups = i2082
  var i2085 = i2077[23]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2085[i + 0]) );
  }
  i2076.variants = i2084
  var i2087 = i2077[24]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2087[i + 0]) );
  }
  i2076.excludedVariants = i2086
  i2076.hasDepthReader = !!i2077[25]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2089 = data
  i2088.val = i2089[0]
  i2088.name = i2089[1]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2091 = data
  i2090.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[0], i2090.src)
  i2090.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[1], i2090.dst)
  i2090.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[2], i2090.op)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2093 = data
  i2092.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2093[0], i2092.pass)
  i2092.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2093[1], i2092.fail)
  i2092.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2093[2], i2092.zFail)
  i2092.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2093[3], i2092.comp)
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.value = i2097[1]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2100.keywords = i2102
  i2100.hasDiscard = !!i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2107 = data
  i2106.passId = i2107[0]
  i2106.subShaderIndex = i2107[1]
  var i2109 = i2107[2]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( i2109[i + 0] );
  }
  i2106.keywords = i2108
  i2106.vertexProgram = i2107[3]
  i2106.fragmentProgram = i2107[4]
  i2106.exportedForWebGl2 = !!i2107[5]
  i2106.readDepth = !!i2107[6]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'shader')
  i2112.pass = i2113[2]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2117 = data
  i2116.name = i2117[0]
  i2116.type = i2117[1]
  i2116.value = new pc.Vec4( i2117[2], i2117[3], i2117[4], i2117[5] )
  i2116.textureValue = i2117[6]
  i2116.shaderPropertyFlag = i2117[7]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, 'texture')
  i2118.aabb = i2119[3]
  i2118.vertices = i2119[4]
  i2118.triangles = i2119[5]
  i2118.textureRect = UnityEngine.Rect.MinMaxRect(i2119[6], i2119[7], i2119[8], i2119[9])
  i2118.packedRect = UnityEngine.Rect.MinMaxRect(i2119[10], i2119[11], i2119[12], i2119[13])
  i2118.border = new pc.Vec4( i2119[14], i2119[15], i2119[16], i2119[17] )
  i2118.transparency = i2119[18]
  i2118.bounds = i2119[19]
  i2118.pixelsPerUnit = i2119[20]
  i2118.textureWidth = i2119[21]
  i2118.textureHeight = i2119[22]
  i2118.nativeSize = new pc.Vec2( i2119[23], i2119[24] )
  i2118.pivot = new pc.Vec2( i2119[25], i2119[26] )
  i2118.textureRectOffset = new pc.Vec2( i2119[27], i2119[28] )
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2121 = data
  i2120.name = i2121[0]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.wrapMode = i2123[1]
  i2122.isLooping = !!i2123[2]
  i2122.length = i2123[3]
  var i2125 = i2123[4]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2125[i + 0]) );
  }
  i2122.curves = i2124
  var i2127 = i2123[5]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2127[i + 0]) );
  }
  i2122.events = i2126
  i2122.halfPrecision = !!i2123[6]
  i2122._frameRate = i2123[7]
  i2122.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2123[8], i2122.localBounds)
  i2122.hasMuscleCurves = !!i2123[9]
  var i2129 = i2123[10]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( i2129[i + 0] );
  }
  i2122.clipMuscleConstant = i2128
  i2122.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2123[11], i2122.clipBindingConstant)
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2133 = data
  i2132.path = i2133[0]
  i2132.hash = i2133[1]
  i2132.componentType = i2133[2]
  i2132.property = i2133[3]
  i2132.keys = i2133[4]
  var i2135 = i2133[5]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2135[i + 0]) );
  }
  i2132.objectReferenceKeys = i2134
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2139 = data
  i2138.time = i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'value')
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2143 = data
  i2142.functionName = i2143[0]
  i2142.floatParameter = i2143[1]
  i2142.intParameter = i2143[2]
  i2142.stringParameter = i2143[3]
  request.r(i2143[4], i2143[5], 0, i2142, 'objectReferenceParameter')
  i2142.time = i2143[6]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2145 = data
  i2144.center = new pc.Vec3( i2145[0], i2145[1], i2145[2] )
  i2144.extends = new pc.Vec3( i2145[3], i2145[4], i2145[5] )
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2149 = data
  var i2151 = i2149[0]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( i2151[i + 0] );
  }
  i2148.genericBindings = i2150
  var i2153 = i2149[1]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2148.pptrCurveMapping = i2152
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2155 = data
  i2154.name = i2155[0]
  var i2157 = i2155[1]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2157[i + 0]) );
  }
  i2154.layers = i2156
  var i2159 = i2155[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2159[i + 0]) );
  }
  i2154.parameters = i2158
  i2154.animationClips = i2155[3]
  i2154.avatarUnsupported = i2155[4]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.defaultWeight = i2163[1]
  i2162.blendingMode = i2163[2]
  i2162.avatarMask = i2163[3]
  i2162.syncedLayerIndex = i2163[4]
  i2162.syncedLayerAffectsTiming = !!i2163[5]
  i2162.syncedLayers = i2163[6]
  i2162.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2163[7], i2162.stateMachine)
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2165 = data
  i2164.id = i2165[0]
  i2164.name = i2165[1]
  i2164.path = i2165[2]
  var i2167 = i2165[3]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2167[i + 0]) );
  }
  i2164.states = i2166
  var i2169 = i2165[4]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2169[i + 0]) );
  }
  i2164.machines = i2168
  var i2171 = i2165[5]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2171[i + 0]) );
  }
  i2164.entryStateTransitions = i2170
  var i2173 = i2165[6]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2173[i + 0]) );
  }
  i2164.exitStateTransitions = i2172
  var i2175 = i2165[7]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2175[i + 0]) );
  }
  i2164.anyStateTransitions = i2174
  i2164.defaultStateId = i2165[8]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2179 = data
  i2178.id = i2179[0]
  i2178.name = i2179[1]
  i2178.cycleOffset = i2179[2]
  i2178.cycleOffsetParameter = i2179[3]
  i2178.cycleOffsetParameterActive = !!i2179[4]
  i2178.mirror = !!i2179[5]
  i2178.mirrorParameter = i2179[6]
  i2178.mirrorParameterActive = !!i2179[7]
  i2178.motionId = i2179[8]
  i2178.nameHash = i2179[9]
  i2178.fullPathHash = i2179[10]
  i2178.speed = i2179[11]
  i2178.speedParameter = i2179[12]
  i2178.speedParameterActive = !!i2179[13]
  i2178.tag = i2179[14]
  i2178.tagHash = i2179[15]
  i2178.writeDefaultValues = !!i2179[16]
  var i2181 = i2179[17]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2178.behaviours = i2180
  var i2183 = i2179[18]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2183[i + 0]) );
  }
  i2178.transitions = i2182
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2189 = data
  i2188.fullPath = i2189[0]
  i2188.canTransitionToSelf = !!i2189[1]
  i2188.duration = i2189[2]
  i2188.exitTime = i2189[3]
  i2188.hasExitTime = !!i2189[4]
  i2188.hasFixedDuration = !!i2189[5]
  i2188.interruptionSource = i2189[6]
  i2188.offset = i2189[7]
  i2188.orderedInterruption = !!i2189[8]
  i2188.destinationStateId = i2189[9]
  i2188.isExit = !!i2189[10]
  i2188.mute = !!i2189[11]
  i2188.solo = !!i2189[12]
  var i2191 = i2189[13]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2191[i + 0]) );
  }
  i2188.conditions = i2190
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2197 = data
  i2196.destinationStateId = i2197[0]
  i2196.isExit = !!i2197[1]
  i2196.mute = !!i2197[2]
  i2196.solo = !!i2197[3]
  var i2199 = i2197[4]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2199[i + 0]) );
  }
  i2196.conditions = i2198
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2203 = data
  i2202.mode = i2203[0]
  i2202.parameter = i2203[1]
  i2202.threshold = i2203[2]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2207 = data
  i2206.defaultBool = !!i2207[0]
  i2206.defaultFloat = i2207[1]
  i2206.defaultInt = i2207[2]
  i2206.name = i2207[3]
  i2206.nameHash = i2207[4]
  i2206.type = i2207[5]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.bytes64 = i2209[1]
  i2208.data = i2209[2]
  return i2208
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2211 = data
  i2210.useSafeMode = !!i2211[0]
  i2210.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2211[1], i2210.safeModeOptions)
  i2210.timeScale = i2211[2]
  i2210.unscaledTimeScale = i2211[3]
  i2210.useSmoothDeltaTime = !!i2211[4]
  i2210.maxSmoothUnscaledTime = i2211[5]
  i2210.rewindCallbackMode = i2211[6]
  i2210.showUnityEditorReport = !!i2211[7]
  i2210.logBehaviour = i2211[8]
  i2210.drawGizmos = !!i2211[9]
  i2210.defaultRecyclable = !!i2211[10]
  i2210.defaultAutoPlay = i2211[11]
  i2210.defaultUpdateType = i2211[12]
  i2210.defaultTimeScaleIndependent = !!i2211[13]
  i2210.defaultEaseType = i2211[14]
  i2210.defaultEaseOvershootOrAmplitude = i2211[15]
  i2210.defaultEasePeriod = i2211[16]
  i2210.defaultAutoKill = !!i2211[17]
  i2210.defaultLoopType = i2211[18]
  i2210.debugMode = !!i2211[19]
  i2210.debugStoreTargetId = !!i2211[20]
  i2210.showPreviewPanel = !!i2211[21]
  i2210.storeSettingsLocation = i2211[22]
  i2210.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2211[23], i2210.modules)
  i2210.createASMDEF = !!i2211[24]
  i2210.showPlayingTweens = !!i2211[25]
  i2210.showPausedTweens = !!i2211[26]
  return i2210
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2212 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2213 = data
  i2212.logBehaviour = i2213[0]
  i2212.nestedTweenFailureBehaviour = i2213[1]
  return i2212
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2214 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2215 = data
  i2214.showPanel = !!i2215[0]
  i2214.audioEnabled = !!i2215[1]
  i2214.physicsEnabled = !!i2215[2]
  i2214.physics2DEnabled = !!i2215[3]
  i2214.spriteEnabled = !!i2215[4]
  i2214.uiEnabled = !!i2215[5]
  i2214.uiToolkitEnabled = !!i2215[6]
  i2214.textMeshProEnabled = !!i2215[7]
  i2214.tk2DEnabled = !!i2215[8]
  i2214.deAudioEnabled = !!i2215[9]
  i2214.deUnityExtendedEnabled = !!i2215[10]
  i2214.epoOutlineEnabled = !!i2215[11]
  return i2214
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2216 = root || request.c( 'TMPro.TMP_Settings' )
  var i2217 = data
  i2216.assetVersion = i2217[0]
  i2216.m_TextWrappingMode = i2217[1]
  i2216.m_enableKerning = !!i2217[2]
  var i2219 = i2217[3]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(i2219[i + 0]);
  }
  i2216.m_ActiveFontFeatures = i2218
  i2216.m_enableExtraPadding = !!i2217[4]
  i2216.m_enableTintAllSprites = !!i2217[5]
  i2216.m_enableParseEscapeCharacters = !!i2217[6]
  i2216.m_EnableRaycastTarget = !!i2217[7]
  i2216.m_GetFontFeaturesAtRuntime = !!i2217[8]
  i2216.m_missingGlyphCharacter = i2217[9]
  i2216.m_ClearDynamicDataOnBuild = !!i2217[10]
  i2216.m_warningsDisabled = !!i2217[11]
  request.r(i2217[12], i2217[13], 0, i2216, 'm_defaultFontAsset')
  i2216.m_defaultFontAssetPath = i2217[14]
  i2216.m_defaultFontSize = i2217[15]
  i2216.m_defaultAutoSizeMinRatio = i2217[16]
  i2216.m_defaultAutoSizeMaxRatio = i2217[17]
  i2216.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2217[18], i2217[19] )
  i2216.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2217[20], i2217[21] )
  i2216.m_autoSizeTextContainer = !!i2217[22]
  i2216.m_IsTextObjectScaleStatic = !!i2217[23]
  var i2221 = i2217[24]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 1, i2220, '')
  }
  i2216.m_fallbackFontAssets = i2220
  i2216.m_matchMaterialPreset = !!i2217[25]
  i2216.m_HideSubTextObjects = !!i2217[26]
  request.r(i2217[27], i2217[28], 0, i2216, 'm_defaultSpriteAsset')
  i2216.m_defaultSpriteAssetPath = i2217[29]
  i2216.m_enableEmojiSupport = !!i2217[30]
  i2216.m_MissingCharacterSpriteUnicode = i2217[31]
  var i2223 = i2217[32]
  var i2222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 1, i2222, '')
  }
  i2216.m_EmojiFallbackTextAssets = i2222
  i2216.m_defaultColorGradientPresetsPath = i2217[33]
  request.r(i2217[34], i2217[35], 0, i2216, 'm_defaultStyleSheet')
  i2216.m_StyleSheetsResourcePath = i2217[36]
  request.r(i2217[37], i2217[38], 0, i2216, 'm_leadingCharacters')
  request.r(i2217[39], i2217[40], 0, i2216, 'm_followingCharacters')
  i2216.m_UseModernHangulLineBreakingRules = !!i2217[41]
  return i2216
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2230 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'spriteSheet')
  var i2233 = i2231[2]
  var i2232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.add(request.d('TMPro.TMP_Sprite', i2233[i + 0]));
  }
  i2230.spriteInfoList = i2232
  var i2235 = i2231[3]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 1, i2234, '')
  }
  i2230.fallbackSpriteAssets = i2234
  var i2237 = i2231[4]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('TMPro.TMP_SpriteCharacter', i2237[i + 0]));
  }
  i2230.m_SpriteCharacterTable = i2236
  var i2239 = i2231[5]
  var i2238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.add(request.d('TMPro.TMP_SpriteGlyph', i2239[i + 0]));
  }
  i2230.m_GlyphTable = i2238
  i2230.m_Version = i2231[6]
  i2230.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2231[7], i2230.m_FaceInfo)
  request.r(i2231[8], i2231[9], 0, i2230, 'm_Material')
  return i2230
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2242 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.hashCode = i2243[1]
  i2242.unicode = i2243[2]
  i2242.pivot = new pc.Vec2( i2243[3], i2243[4] )
  request.r(i2243[5], i2243[6], 0, i2242, 'sprite')
  i2242.id = i2243[7]
  i2242.x = i2243[8]
  i2242.y = i2243[9]
  i2242.width = i2243[10]
  i2242.height = i2243[11]
  i2242.xOffset = i2243[12]
  i2242.yOffset = i2243[13]
  i2242.xAdvance = i2243[14]
  i2242.scale = i2243[15]
  return i2242
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2248 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2249 = data
  i2248.m_Name = i2249[0]
  i2248.m_ElementType = i2249[1]
  i2248.m_Unicode = i2249[2]
  i2248.m_GlyphIndex = i2249[3]
  i2248.m_Scale = i2249[4]
  return i2248
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2252 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'sprite')
  i2252.m_Index = i2253[2]
  i2252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2253[3], i2252.m_Metrics)
  i2252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2253[4], i2252.m_GlyphRect)
  i2252.m_Scale = i2253[5]
  i2252.m_AtlasIndex = i2253[6]
  i2252.m_ClassDefinitionType = i2253[7]
  return i2252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2255 = data
  i2254.m_Width = i2255[0]
  i2254.m_Height = i2255[1]
  i2254.m_HorizontalBearingX = i2255[2]
  i2254.m_HorizontalBearingY = i2255[3]
  i2254.m_HorizontalAdvance = i2255[4]
  return i2254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2257 = data
  i2256.m_X = i2257[0]
  i2256.m_Y = i2257[1]
  i2256.m_Width = i2257[2]
  i2256.m_Height = i2257[3]
  return i2256
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2259 = data
  i2258.m_FaceIndex = i2259[0]
  i2258.m_FamilyName = i2259[1]
  i2258.m_StyleName = i2259[2]
  i2258.m_PointSize = i2259[3]
  i2258.m_Scale = i2259[4]
  i2258.m_UnitsPerEM = i2259[5]
  i2258.m_LineHeight = i2259[6]
  i2258.m_AscentLine = i2259[7]
  i2258.m_CapLine = i2259[8]
  i2258.m_MeanLine = i2259[9]
  i2258.m_Baseline = i2259[10]
  i2258.m_DescentLine = i2259[11]
  i2258.m_SuperscriptOffset = i2259[12]
  i2258.m_SuperscriptSize = i2259[13]
  i2258.m_SubscriptOffset = i2259[14]
  i2258.m_SubscriptSize = i2259[15]
  i2258.m_UnderlineOffset = i2259[16]
  i2258.m_UnderlineThickness = i2259[17]
  i2258.m_StrikethroughOffset = i2259[18]
  i2258.m_StrikethroughThickness = i2259[19]
  i2258.m_TabWidth = i2259[20]
  return i2258
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2260 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2261 = data
  var i2263 = i2261[0]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(request.d('TMPro.TMP_Style', i2263[i + 0]));
  }
  i2260.m_StyleList = i2262
  return i2260
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2266 = root || request.c( 'TMPro.TMP_Style' )
  var i2267 = data
  i2266.m_Name = i2267[0]
  i2266.m_HashCode = i2267[1]
  i2266.m_OpeningDefinition = i2267[2]
  i2266.m_ClosingDefinition = i2267[3]
  i2266.m_OpeningTagArray = i2267[4]
  i2266.m_ClosingTagArray = i2267[5]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2269 = data
  var i2271 = i2269[0]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2271[i + 0]) );
  }
  i2268.files = i2270
  i2268.componentToPrefabIds = i2269[1]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2275 = data
  i2274.path = i2275[0]
  request.r(i2275[1], i2275[2], 0, i2274, 'unityObject')
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2279[i + 0]) );
  }
  i2276.scriptsExecutionOrder = i2278
  var i2281 = i2277[1]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2281[i + 0]) );
  }
  i2276.sortingLayers = i2280
  var i2283 = i2277[2]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2283[i + 0]) );
  }
  i2276.cullingLayers = i2282
  i2276.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2277[3], i2276.timeSettings)
  i2276.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2277[4], i2276.physicsSettings)
  i2276.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2277[5], i2276.physics2DSettings)
  i2276.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2277[6], i2276.qualitySettings)
  i2276.enableRealtimeShadows = !!i2277[7]
  i2276.enableAutoInstancing = !!i2277[8]
  i2276.enableStaticBatching = !!i2277[9]
  i2276.enableDynamicBatching = !!i2277[10]
  i2276.lightmapEncodingQuality = i2277[11]
  i2276.desiredColorSpace = i2277[12]
  var i2285 = i2277[13]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( i2285[i + 0] );
  }
  i2276.allTags = i2284
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.value = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2293 = data
  i2292.id = i2293[0]
  i2292.name = i2293[1]
  i2292.value = i2293[2]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2297 = data
  i2296.id = i2297[0]
  i2296.name = i2297[1]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2299 = data
  i2298.fixedDeltaTime = i2299[0]
  i2298.maximumDeltaTime = i2299[1]
  i2298.timeScale = i2299[2]
  i2298.maximumParticleTimestep = i2299[3]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2301 = data
  i2300.gravity = new pc.Vec3( i2301[0], i2301[1], i2301[2] )
  i2300.defaultSolverIterations = i2301[3]
  i2300.bounceThreshold = i2301[4]
  i2300.autoSyncTransforms = !!i2301[5]
  i2300.autoSimulation = !!i2301[6]
  var i2303 = i2301[7]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2303[i + 0]) );
  }
  i2300.collisionMatrix = i2302
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.layerId = i2307[1]
  i2306.otherLayerId = i2307[2]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'material')
  i2308.gravity = new pc.Vec2( i2309[2], i2309[3] )
  i2308.positionIterations = i2309[4]
  i2308.velocityIterations = i2309[5]
  i2308.velocityThreshold = i2309[6]
  i2308.maxLinearCorrection = i2309[7]
  i2308.maxAngularCorrection = i2309[8]
  i2308.maxTranslationSpeed = i2309[9]
  i2308.maxRotationSpeed = i2309[10]
  i2308.baumgarteScale = i2309[11]
  i2308.baumgarteTOIScale = i2309[12]
  i2308.timeToSleep = i2309[13]
  i2308.linearSleepTolerance = i2309[14]
  i2308.angularSleepTolerance = i2309[15]
  i2308.defaultContactOffset = i2309[16]
  i2308.autoSimulation = !!i2309[17]
  i2308.queriesHitTriggers = !!i2309[18]
  i2308.queriesStartInColliders = !!i2309[19]
  i2308.callbacksOnDisable = !!i2309[20]
  i2308.reuseCollisionCallbacks = !!i2309[21]
  i2308.autoSyncTransforms = !!i2309[22]
  var i2311 = i2309[23]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2311[i + 0]) );
  }
  i2308.collisionMatrix = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.layerId = i2315[1]
  i2314.otherLayerId = i2315[2]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2319[i + 0]) );
  }
  i2316.qualityLevels = i2318
  var i2321 = i2317[1]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( i2321[i + 0] );
  }
  i2316.names = i2320
  i2316.shadows = i2317[2]
  i2316.anisotropicFiltering = i2317[3]
  i2316.antiAliasing = i2317[4]
  i2316.lodBias = i2317[5]
  i2316.shadowCascades = i2317[6]
  i2316.shadowDistance = i2317[7]
  i2316.shadowmaskMode = i2317[8]
  i2316.shadowProjection = i2317[9]
  i2316.shadowResolution = i2317[10]
  i2316.softParticles = !!i2317[11]
  i2316.softVegetation = !!i2317[12]
  i2316.activeColorSpace = i2317[13]
  i2316.desiredColorSpace = i2317[14]
  i2316.masterTextureLimit = i2317[15]
  i2316.maxQueuedFrames = i2317[16]
  i2316.particleRaycastBudget = i2317[17]
  i2316.pixelLightCount = i2317[18]
  i2316.realtimeReflectionProbes = !!i2317[19]
  i2316.shadowCascade2Split = i2317[20]
  i2316.shadowCascade4Split = new pc.Vec3( i2317[21], i2317[22], i2317[23] )
  i2316.streamingMipmapsActive = !!i2317[24]
  i2316.vSyncCount = i2317[25]
  i2316.asyncUploadBufferSize = i2317[26]
  i2316.asyncUploadTimeSlice = i2317[27]
  i2316.billboardsFaceCameraPosition = !!i2317[28]
  i2316.shadowNearPlaneOffset = i2317[29]
  i2316.streamingMipmapsMemoryBudget = i2317[30]
  i2316.maximumLODLevel = i2317[31]
  i2316.streamingMipmapsAddAllCameras = !!i2317[32]
  i2316.streamingMipmapsMaxLevelReduction = i2317[33]
  i2316.streamingMipmapsRenderersPerFrame = i2317[34]
  i2316.resolutionScalingFixedDPIFactor = i2317[35]
  i2316.streamingMipmapsMaxFileIORequests = i2317[36]
  i2316.currentQualityLevel = i2317[37]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2327 = data
  i2326.weight = i2327[0]
  i2326.vertices = i2327[1]
  i2326.normals = i2327[2]
  i2326.tangents = i2327[3]
  return i2326
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

Deserializers.buildID = "39ecc79c-cb88-4595-aecb-73eb4844d7d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

