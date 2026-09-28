var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSpring' )
  var i1795 = data
  i1794.spring = i1795[0]
  i1794.damper = i1795[1]
  i1794.targetPosition = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointMotor' )
  var i1797 = data
  i1796.m_TargetVelocity = i1797[0]
  i1796.m_Force = i1797[1]
  i1796.m_FreeSpin = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointLimits' )
  var i1799 = data
  i1798.m_Min = i1799[0]
  i1798.m_Max = i1799[1]
  i1798.m_Bounciness = i1799[2]
  i1798.m_BounceMinVelocity = i1799[3]
  i1798.m_ContactDistance = i1799[4]
  i1798.minBounce = i1799[5]
  i1798.maxBounce = i1799[6]
  return i1798
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointDrive' )
  var i1801 = data
  i1800.m_PositionSpring = i1801[0]
  i1800.m_PositionDamper = i1801[1]
  i1800.m_MaximumForce = i1801[2]
  i1800.m_UseAcceleration = i1801[3]
  return i1800
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1803 = data
  i1802.m_Spring = i1803[0]
  i1802.m_Damper = i1803[1]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1805 = data
  i1804.m_Limit = i1805[0]
  i1804.m_Bounciness = i1805[1]
  i1804.m_ContactDistance = i1805[2]
  return i1804
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1807 = data
  i1806.m_ExtremumSlip = i1807[0]
  i1806.m_ExtremumValue = i1807[1]
  i1806.m_AsymptoteSlip = i1807[2]
  i1806.m_AsymptoteValue = i1807[3]
  i1806.m_Stiffness = i1807[4]
  return i1806
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1809 = data
  i1808.m_LowerAngle = i1809[0]
  i1808.m_UpperAngle = i1809[1]
  return i1808
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1811 = data
  i1810.m_MotorSpeed = i1811[0]
  i1810.m_MaximumMotorTorque = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1813 = data
  i1812.m_DampingRatio = i1813[0]
  i1812.m_Frequency = i1813[1]
  i1812.m_Angle = i1813[2]
  return i1812
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1815 = data
  i1814.m_LowerTranslation = i1815[0]
  i1814.m_UpperTranslation = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.halfPrecision = !!i1817[1]
  i1816.useSimplification = !!i1817[2]
  i1816.useUInt32IndexFormat = !!i1817[3]
  i1816.vertexCount = i1817[4]
  i1816.aabb = i1817[5]
  var i1819 = i1817[6]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( !!i1819[i + 0] );
  }
  i1816.streams = i1818
  i1816.vertices = i1817[7]
  var i1821 = i1817[8]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1821[i + 0]) );
  }
  i1816.subMeshes = i1820
  var i1823 = i1817[9]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 16) {
    i1822.push( new pc.Mat4().setData(i1823[i + 0], i1823[i + 1], i1823[i + 2], i1823[i + 3],  i1823[i + 4], i1823[i + 5], i1823[i + 6], i1823[i + 7],  i1823[i + 8], i1823[i + 9], i1823[i + 10], i1823[i + 11],  i1823[i + 12], i1823[i + 13], i1823[i + 14], i1823[i + 15]) );
  }
  i1816.bindposes = i1822
  var i1825 = i1817[10]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1825[i + 0]) );
  }
  i1816.blendShapes = i1824
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1831 = data
  i1830.triangles = i1831[0]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1837 = data
  i1836.name = i1837[0]
  var i1839 = i1837[1]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1839[i + 0]) );
  }
  i1836.frames = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1840 = root || new pc.UnityMaterial()
  var i1841 = data
  i1840.name = i1841[0]
  request.r(i1841[1], i1841[2], 0, i1840, 'shader')
  i1840.renderQueue = i1841[3]
  i1840.enableInstancing = !!i1841[4]
  var i1843 = i1841[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1843[i + 0]) );
  }
  i1840.floatParameters = i1842
  var i1845 = i1841[6]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1845[i + 0]) );
  }
  i1840.colorParameters = i1844
  var i1847 = i1841[7]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1847[i + 0]) );
  }
  i1840.vectorParameters = i1846
  var i1849 = i1841[8]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1849[i + 0]) );
  }
  i1840.textureParameters = i1848
  var i1851 = i1841[9]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1851[i + 0]) );
  }
  i1840.materialFlags = i1850
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.value = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.value = new pc.Color(i1859[1], i1859[2], i1859[3], i1859[4])
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = new pc.Vec4( i1863[1], i1863[2], i1863[3], i1863[4] )
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1867 = data
  i1866.name = i1867[0]
  request.r(i1867[1], i1867[2], 0, i1866, 'value')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.enabled = !!i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.width = i1873[1]
  i1872.height = i1873[2]
  i1872.mipmapCount = i1873[3]
  i1872.anisoLevel = i1873[4]
  i1872.filterMode = i1873[5]
  i1872.hdr = !!i1873[6]
  i1872.format = i1873[7]
  i1872.wrapMode = i1873[8]
  i1872.alphaIsTransparency = !!i1873[9]
  i1872.alphaSource = i1873[10]
  i1872.graphicsFormat = i1873[11]
  i1872.sRGBTexture = !!i1873[12]
  i1872.desiredColorSpace = i1873[13]
  i1872.wrapU = i1873[14]
  i1872.wrapV = i1873[15]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1875 = data
  i1874.position = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.scale = new pc.Vec3( i1875[3], i1875[4], i1875[5] )
  i1874.rotation = new pc.Quat(i1875[6], i1875[7], i1875[8], i1875[9])
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1877 = data
  i1876.center = new pc.Vec3( i1877[0], i1877[1], i1877[2] )
  i1876.size = new pc.Vec3( i1877[3], i1877[4], i1877[5] )
  i1876.enabled = !!i1877[6]
  i1876.isTrigger = !!i1877[7]
  request.r(i1877[8], i1877[9], 0, i1876, 'material')
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1879 = data
  i1878.color = new pc.Color(i1879[0], i1879[1], i1879[2], i1879[3])
  request.r(i1879[4], i1879[5], 0, i1878, 'sprite')
  i1878.flipX = !!i1879[6]
  i1878.flipY = !!i1879[7]
  i1878.drawMode = i1879[8]
  i1878.size = new pc.Vec2( i1879[9], i1879[10] )
  i1878.tileMode = i1879[11]
  i1878.adaptiveModeThreshold = i1879[12]
  i1878.maskInteraction = i1879[13]
  i1878.spriteSortPoint = i1879[14]
  i1878.enabled = !!i1879[15]
  request.r(i1879[16], i1879[17], 0, i1878, 'sharedMaterial')
  var i1881 = i1879[18]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 2, i1880, '')
  }
  i1878.sharedMaterials = i1880
  i1878.receiveShadows = !!i1879[19]
  i1878.shadowCastingMode = i1879[20]
  i1878.sortingLayerID = i1879[21]
  i1878.sortingOrder = i1879[22]
  i1878.lightmapIndex = i1879[23]
  i1878.lightmapSceneIndex = i1879[24]
  i1878.lightmapScaleOffset = new pc.Vec4( i1879[25], i1879[26], i1879[27], i1879[28] )
  i1878.lightProbeUsage = i1879[29]
  i1878.reflectionProbeUsage = i1879[30]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.tagId = i1885[1]
  i1884.enabled = !!i1885[2]
  i1884.isStatic = !!i1885[3]
  i1884.layer = i1885[4]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1889 = data
  i1888.weight = i1889[0]
  i1888.vertices = i1889[1]
  i1888.normals = i1889[2]
  i1888.tangents = i1889[3]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1891 = data
  i1890.pivot = new pc.Vec2( i1891[0], i1891[1] )
  i1890.anchorMin = new pc.Vec2( i1891[2], i1891[3] )
  i1890.anchorMax = new pc.Vec2( i1891[4], i1891[5] )
  i1890.sizeDelta = new pc.Vec2( i1891[6], i1891[7] )
  i1890.anchoredPosition3D = new pc.Vec3( i1891[8], i1891[9], i1891[10] )
  i1890.rotation = new pc.Quat(i1891[11], i1891[12], i1891[13], i1891[14])
  i1890.scale = new pc.Vec3( i1891[15], i1891[16], i1891[17] )
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1893 = data
  i1892.planeDistance = i1893[0]
  i1892.referencePixelsPerUnit = i1893[1]
  i1892.isFallbackOverlay = !!i1893[2]
  i1892.renderMode = i1893[3]
  i1892.renderOrder = i1893[4]
  i1892.sortingLayerName = i1893[5]
  i1892.sortingOrder = i1893[6]
  i1892.scaleFactor = i1893[7]
  request.r(i1893[8], i1893[9], 0, i1892, 'worldCamera')
  i1892.overrideSorting = !!i1893[10]
  i1892.pixelPerfect = !!i1893[11]
  i1892.targetDisplay = i1893[12]
  i1892.overridePixelPerfect = !!i1893[13]
  i1892.enabled = !!i1893[14]
  return i1892
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1895 = data
  i1894.m_UiScaleMode = i1895[0]
  i1894.m_ReferencePixelsPerUnit = i1895[1]
  i1894.m_ScaleFactor = i1895[2]
  i1894.m_ReferenceResolution = new pc.Vec2( i1895[3], i1895[4] )
  i1894.m_ScreenMatchMode = i1895[5]
  i1894.m_MatchWidthOrHeight = i1895[6]
  i1894.m_PhysicalUnit = i1895[7]
  i1894.m_FallbackScreenDPI = i1895[8]
  i1894.m_DefaultSpriteDPI = i1895[9]
  i1894.m_DynamicPixelsPerUnit = i1895[10]
  i1894.m_PresetInfoIsWorld = !!i1895[11]
  return i1894
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1897 = data
  i1896.m_IgnoreReversedGraphics = !!i1897[0]
  i1896.m_BlockingObjects = i1897[1]
  i1896.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1897[2] )
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1899 = data
  i1898.cullTransparentMesh = !!i1899[0]
  return i1898
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.UI.Image' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'm_Sprite')
  i1900.m_Type = i1901[2]
  i1900.m_PreserveAspect = !!i1901[3]
  i1900.m_FillCenter = !!i1901[4]
  i1900.m_FillMethod = i1901[5]
  i1900.m_FillAmount = i1901[6]
  i1900.m_FillClockwise = !!i1901[7]
  i1900.m_FillOrigin = i1901[8]
  i1900.m_UseSpriteMesh = !!i1901[9]
  i1900.m_PixelsPerUnitMultiplier = i1901[10]
  request.r(i1901[11], i1901[12], 0, i1900, 'm_Material')
  i1900.m_Maskable = !!i1901[13]
  i1900.m_Color = new pc.Color(i1901[14], i1901[15], i1901[16], i1901[17])
  i1900.m_RaycastTarget = !!i1901[18]
  i1900.m_RaycastPadding = new pc.Vec4( i1901[19], i1901[20], i1901[21], i1901[22] )
  return i1900
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'm_Texture')
  i1902.m_UVRect = UnityEngine.Rect.MinMaxRect(i1903[2], i1903[3], i1903[4], i1903[5])
  request.r(i1903[6], i1903[7], 0, i1902, 'm_Material')
  i1902.m_Maskable = !!i1903[8]
  i1902.m_Color = new pc.Color(i1903[9], i1903[10], i1903[11], i1903[12])
  i1902.m_RaycastTarget = !!i1903[13]
  i1902.m_RaycastPadding = new pc.Vec4( i1903[14], i1903[15], i1903[16], i1903[17] )
  return i1902
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i1904 = root || request.c( 'ImageScroller' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'rawImage')
  i1904.moveVector = new pc.Vec2( i1905[2], i1905[3] )
  return i1904
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i1906 = root || request.c( 'UIGuidingMove' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'target')
  i1906.startPosition = new pc.Vec2( i1907[2], i1907[3] )
  i1906.endPosition = new pc.Vec2( i1907[4], i1907[5] )
  i1906.duration = i1907[6]
  i1906.ease = i1907[7]
  i1906.resetToStartOnComplete = !!i1907[8]
  i1906.loop = !!i1907[9]
  i1906.loopCount = i1907[10]
  i1906.loopType = i1907[11]
  return i1906
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i1908 = root || request.c( 'UIPulse' )
  var i1909 = data
  i1908.targetScale = new pc.Vec3( i1909[0], i1909[1], i1909[2] )
  i1908.duration = i1909[3]
  i1908.ease = i1909[4]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1911 = data
  i1910.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1911[0], i1910.main)
  i1910.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1911[1], i1910.colorBySpeed)
  i1910.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1911[2], i1910.colorOverLifetime)
  i1910.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1911[3], i1910.emission)
  i1910.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1911[4], i1910.rotationBySpeed)
  i1910.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1911[5], i1910.rotationOverLifetime)
  i1910.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1911[6], i1910.shape)
  i1910.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1911[7], i1910.sizeBySpeed)
  i1910.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1911[8], i1910.sizeOverLifetime)
  i1910.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1911[9], i1910.textureSheetAnimation)
  i1910.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1911[10], i1910.velocityOverLifetime)
  i1910.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1911[11], i1910.noise)
  i1910.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1911[12], i1910.inheritVelocity)
  i1910.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1911[13], i1910.forceOverLifetime)
  i1910.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1911[14], i1910.limitVelocityOverLifetime)
  i1910.useAutoRandomSeed = !!i1911[15]
  i1910.randomSeed = i1911[16]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1912 = root || new pc.ParticleSystemMain()
  var i1913 = data
  i1912.duration = i1913[0]
  i1912.loop = !!i1913[1]
  i1912.prewarm = !!i1913[2]
  i1912.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[3], i1912.startDelay)
  i1912.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[4], i1912.startLifetime)
  i1912.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[5], i1912.startSpeed)
  i1912.startSize3D = !!i1913[6]
  i1912.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[7], i1912.startSizeX)
  i1912.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[8], i1912.startSizeY)
  i1912.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[9], i1912.startSizeZ)
  i1912.startRotation3D = !!i1913[10]
  i1912.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[11], i1912.startRotationX)
  i1912.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[12], i1912.startRotationY)
  i1912.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[13], i1912.startRotationZ)
  i1912.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1913[14], i1912.startColor)
  i1912.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1913[15], i1912.gravityModifier)
  i1912.simulationSpace = i1913[16]
  request.r(i1913[17], i1913[18], 0, i1912, 'customSimulationSpace')
  i1912.simulationSpeed = i1913[19]
  i1912.useUnscaledTime = !!i1913[20]
  i1912.scalingMode = i1913[21]
  i1912.playOnAwake = !!i1913[22]
  i1912.maxParticles = i1913[23]
  i1912.emitterVelocityMode = i1913[24]
  i1912.stopAction = i1913[25]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1914 = root || new pc.MinMaxCurve()
  var i1915 = data
  i1914.mode = i1915[0]
  i1914.curveMin = new pc.AnimationCurve( { keys_flow: i1915[1] } )
  i1914.curveMax = new pc.AnimationCurve( { keys_flow: i1915[2] } )
  i1914.curveMultiplier = i1915[3]
  i1914.constantMin = i1915[4]
  i1914.constantMax = i1915[5]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1916 = root || new pc.MinMaxGradient()
  var i1917 = data
  i1916.mode = i1917[0]
  i1916.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1917[1], i1916.gradientMin)
  i1916.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1917[2], i1916.gradientMax)
  i1916.colorMin = new pc.Color(i1917[3], i1917[4], i1917[5], i1917[6])
  i1916.colorMax = new pc.Color(i1917[7], i1917[8], i1917[9], i1917[10])
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1919 = data
  i1918.mode = i1919[0]
  var i1921 = i1919[1]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1921[i + 0]) );
  }
  i1918.colorKeys = i1920
  var i1923 = i1919[2]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1923[i + 0]) );
  }
  i1918.alphaKeys = i1922
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemColorBySpeed()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1925[1], i1924.color)
  i1924.range = new pc.Vec2( i1925[2], i1925[3] )
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1929 = data
  i1928.color = new pc.Color(i1929[0], i1929[1], i1929[2], i1929[3])
  i1928.time = i1929[4]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1933 = data
  i1932.alpha = i1933[0]
  i1932.time = i1933[1]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemColorOverLifetime()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1935[1], i1934.color)
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemEmitter()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[1], i1936.rateOverTime)
  i1936.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[2], i1936.rateOverDistance)
  var i1939 = i1937[3]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1939[i + 0]) );
  }
  i1936.bursts = i1938
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemBurst()
  var i1943 = data
  i1942.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[0], i1942.count)
  i1942.cycleCount = i1943[1]
  i1942.minCount = i1943[2]
  i1942.maxCount = i1943[3]
  i1942.repeatInterval = i1943[4]
  i1942.time = i1943[5]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemRotationBySpeed()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[2], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.z)
  i1944.separateAxes = !!i1945[4]
  i1944.range = new pc.Vec2( i1945[5], i1945[6] )
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[1], i1946.x)
  i1946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[2], i1946.y)
  i1946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[3], i1946.z)
  i1946.separateAxes = !!i1947[4]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemShape()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.shapeType = i1949[1]
  i1948.randomDirectionAmount = i1949[2]
  i1948.sphericalDirectionAmount = i1949[3]
  i1948.randomPositionAmount = i1949[4]
  i1948.alignToDirection = !!i1949[5]
  i1948.radius = i1949[6]
  i1948.radiusMode = i1949[7]
  i1948.radiusSpread = i1949[8]
  i1948.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[9], i1948.radiusSpeed)
  i1948.radiusThickness = i1949[10]
  i1948.angle = i1949[11]
  i1948.length = i1949[12]
  i1948.boxThickness = new pc.Vec3( i1949[13], i1949[14], i1949[15] )
  i1948.meshShapeType = i1949[16]
  request.r(i1949[17], i1949[18], 0, i1948, 'mesh')
  request.r(i1949[19], i1949[20], 0, i1948, 'meshRenderer')
  request.r(i1949[21], i1949[22], 0, i1948, 'skinnedMeshRenderer')
  i1948.useMeshMaterialIndex = !!i1949[23]
  i1948.meshMaterialIndex = i1949[24]
  i1948.useMeshColors = !!i1949[25]
  i1948.normalOffset = i1949[26]
  i1948.arc = i1949[27]
  i1948.arcMode = i1949[28]
  i1948.arcSpread = i1949[29]
  i1948.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[30], i1948.arcSpeed)
  i1948.donutRadius = i1949[31]
  i1948.position = new pc.Vec3( i1949[32], i1949[33], i1949[34] )
  i1948.rotation = new pc.Vec3( i1949[35], i1949[36], i1949[37] )
  i1948.scale = new pc.Vec3( i1949[38], i1949[39], i1949[40] )
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemSizeBySpeed()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.x)
  i1950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.y)
  i1950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.z)
  i1950.separateAxes = !!i1951[4]
  i1950.range = new pc.Vec2( i1951[5], i1951[6] )
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[1], i1952.x)
  i1952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.y)
  i1952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[3], i1952.z)
  i1952.separateAxes = !!i1953[4]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.mode = i1955[1]
  i1954.animation = i1955[2]
  i1954.numTilesX = i1955[3]
  i1954.numTilesY = i1955[4]
  i1954.useRandomRow = !!i1955[5]
  i1954.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[6], i1954.frameOverTime)
  i1954.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[7], i1954.startFrame)
  i1954.cycleCount = i1955[8]
  i1954.rowIndex = i1955[9]
  i1954.flipU = i1955[10]
  i1954.flipV = i1955[11]
  i1954.spriteCount = i1955[12]
  var i1957 = i1955[13]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 2) {
  request.r(i1957[i + 0], i1957[i + 1], 2, i1956, '')
  }
  i1954.sprites = i1956
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1960 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1961 = data
  i1960.enabled = !!i1961[0]
  i1960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[1], i1960.x)
  i1960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[2], i1960.y)
  i1960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[3], i1960.z)
  i1960.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[4], i1960.radial)
  i1960.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[5], i1960.speedModifier)
  i1960.space = i1961[6]
  i1960.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[7], i1960.orbitalX)
  i1960.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[8], i1960.orbitalY)
  i1960.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[9], i1960.orbitalZ)
  i1960.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[10], i1960.orbitalOffsetX)
  i1960.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[11], i1960.orbitalOffsetY)
  i1960.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[12], i1960.orbitalOffsetZ)
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1962 = root || new pc.ParticleSystemNoise()
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.separateAxes = !!i1963[1]
  i1962.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[2], i1962.strengthX)
  i1962.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[3], i1962.strengthY)
  i1962.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[4], i1962.strengthZ)
  i1962.frequency = i1963[5]
  i1962.damping = !!i1963[6]
  i1962.octaveCount = i1963[7]
  i1962.octaveMultiplier = i1963[8]
  i1962.octaveScale = i1963[9]
  i1962.quality = i1963[10]
  i1962.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[11], i1962.scrollSpeed)
  i1962.scrollSpeedMultiplier = i1963[12]
  i1962.remapEnabled = !!i1963[13]
  i1962.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[14], i1962.remapX)
  i1962.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[15], i1962.remapY)
  i1962.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[16], i1962.remapZ)
  i1962.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[17], i1962.positionAmount)
  i1962.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[18], i1962.rotationAmount)
  i1962.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[19], i1962.sizeAmount)
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1964 = root || new pc.ParticleSystemInheritVelocity()
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.mode = i1965[1]
  i1964.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[2], i1964.curve)
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1966 = root || new pc.ParticleSystemForceOverLifetime()
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[1], i1966.x)
  i1966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[2], i1966.y)
  i1966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[3], i1966.z)
  i1966.space = i1967[4]
  i1966.randomized = !!i1967[5]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1968 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1969 = data
  i1968.enabled = !!i1969[0]
  i1968.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[1], i1968.limit)
  i1968.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[2], i1968.limitX)
  i1968.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[3], i1968.limitY)
  i1968.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[4], i1968.limitZ)
  i1968.dampen = i1969[5]
  i1968.separateAxes = !!i1969[6]
  i1968.space = i1969[7]
  i1968.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[8], i1968.drag)
  i1968.multiplyDragByParticleSize = !!i1969[9]
  i1968.multiplyDragByParticleVelocity = !!i1969[10]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'mesh')
  i1970.meshCount = i1971[2]
  i1970.activeVertexStreamsCount = i1971[3]
  i1970.alignment = i1971[4]
  i1970.renderMode = i1971[5]
  i1970.sortMode = i1971[6]
  i1970.lengthScale = i1971[7]
  i1970.velocityScale = i1971[8]
  i1970.cameraVelocityScale = i1971[9]
  i1970.normalDirection = i1971[10]
  i1970.sortingFudge = i1971[11]
  i1970.minParticleSize = i1971[12]
  i1970.maxParticleSize = i1971[13]
  i1970.pivot = new pc.Vec3( i1971[14], i1971[15], i1971[16] )
  request.r(i1971[17], i1971[18], 0, i1970, 'trailMaterial')
  i1970.applyActiveColorSpace = !!i1971[19]
  i1970.enabled = !!i1971[20]
  request.r(i1971[21], i1971[22], 0, i1970, 'sharedMaterial')
  var i1973 = i1971[23]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 2, i1972, '')
  }
  i1970.sharedMaterials = i1972
  i1970.receiveShadows = !!i1971[24]
  i1970.shadowCastingMode = i1971[25]
  i1970.sortingLayerID = i1971[26]
  i1970.sortingOrder = i1971[27]
  i1970.lightmapIndex = i1971[28]
  i1970.lightmapSceneIndex = i1971[29]
  i1970.lightmapScaleOffset = new pc.Vec4( i1971[30], i1971[31], i1971[32], i1971[33] )
  i1970.lightProbeUsage = i1971[34]
  i1970.reflectionProbeUsage = i1971[35]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.atlasId = i1975[1]
  i1974.mipmapCount = i1975[2]
  i1974.hdr = !!i1975[3]
  i1974.size = i1975[4]
  i1974.anisoLevel = i1975[5]
  i1974.filterMode = i1975[6]
  var i1977 = i1975[7]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 4) {
    i1976.push( UnityEngine.Rect.MinMaxRect(i1977[i + 0], i1977[i + 1], i1977[i + 2], i1977[i + 3]) );
  }
  i1974.rects = i1976
  i1974.wrapU = i1975[8]
  i1974.wrapV = i1975[9]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.index = i1981[1]
  i1980.startup = !!i1981[2]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1983 = data
  i1982.aspect = i1983[0]
  i1982.orthographic = !!i1983[1]
  i1982.orthographicSize = i1983[2]
  i1982.backgroundColor = new pc.Color(i1983[3], i1983[4], i1983[5], i1983[6])
  i1982.nearClipPlane = i1983[7]
  i1982.farClipPlane = i1983[8]
  i1982.fieldOfView = i1983[9]
  i1982.depth = i1983[10]
  i1982.clearFlags = i1983[11]
  i1982.cullingMask = i1983[12]
  i1982.rect = i1983[13]
  request.r(i1983[14], i1983[15], 0, i1982, 'targetTexture')
  i1982.usePhysicalProperties = !!i1983[16]
  i1982.focalLength = i1983[17]
  i1982.sensorSize = new pc.Vec2( i1983[18], i1983[19] )
  i1982.lensShift = new pc.Vec2( i1983[20], i1983[21] )
  i1982.gateFit = i1983[22]
  i1982.commandBufferCount = i1983[23]
  i1982.cameraType = i1983[24]
  i1982.enabled = !!i1983[25]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'sharedMesh')
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'additionalVertexStreams')
  i1986.enabled = !!i1987[2]
  request.r(i1987[3], i1987[4], 0, i1986, 'sharedMaterial')
  var i1989 = i1987[5]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1986.sharedMaterials = i1988
  i1986.receiveShadows = !!i1987[6]
  i1986.shadowCastingMode = i1987[7]
  i1986.sortingLayerID = i1987[8]
  i1986.sortingOrder = i1987[9]
  i1986.lightmapIndex = i1987[10]
  i1986.lightmapSceneIndex = i1987[11]
  i1986.lightmapScaleOffset = new pc.Vec4( i1987[12], i1987[13], i1987[14], i1987[15] )
  i1986.lightProbeUsage = i1987[16]
  i1986.reflectionProbeUsage = i1987[17]
  return i1986
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i1990 = root || request.c( 'MaterialUVScroller' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'targetMaterial')
  i1990.scrollSpeed = new pc.Vec2( i1991[2], i1991[3] )
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1993 = data
  i1992.type = i1993[0]
  i1992.color = new pc.Color(i1993[1], i1993[2], i1993[3], i1993[4])
  i1992.cullingMask = i1993[5]
  i1992.intensity = i1993[6]
  i1992.range = i1993[7]
  i1992.spotAngle = i1993[8]
  i1992.shadows = i1993[9]
  i1992.shadowNormalBias = i1993[10]
  i1992.shadowBias = i1993[11]
  i1992.shadowStrength = i1993[12]
  i1992.shadowResolution = i1993[13]
  i1992.lightmapBakeType = i1993[14]
  i1992.renderMode = i1993[15]
  request.r(i1993[16], i1993[17], 0, i1992, 'cookie')
  i1992.cookieSize = i1993[18]
  i1992.shadowNearPlane = i1993[19]
  i1992.enabled = !!i1993[20]
  return i1992
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'm_FirstSelected')
  i1994.m_sendNavigationEvents = !!i1995[2]
  i1994.m_DragThreshold = i1995[3]
  return i1994
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1997 = data
  i1996.m_HorizontalAxis = i1997[0]
  i1996.m_VerticalAxis = i1997[1]
  i1996.m_SubmitButton = i1997[2]
  i1996.m_CancelButton = i1997[3]
  i1996.m_InputActionsPerSecond = i1997[4]
  i1996.m_RepeatDelay = i1997[5]
  i1996.m_ForceModuleActive = !!i1997[6]
  i1996.m_SendPointerHoverToParent = !!i1997[7]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'animatorController')
  request.r(i1999[2], i1999[3], 0, i1998, 'avatar')
  i1998.updateMode = i1999[4]
  i1998.hasTransformHierarchy = !!i1999[5]
  i1998.applyRootMotion = !!i1999[6]
  var i2001 = i1999[7]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.humanBones = i2000
  i1998.enabled = !!i1999[8]
  return i1998
}

Deserializers["RonaldoPenalty.PenaltyPlayerAnimator"] = function (request, data, root) {
  var i2004 = root || request.c( 'RonaldoPenalty.PenaltyPlayerAnimator' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'animator')
  i2004.kickDuration = i2005[2]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'sharedMesh')
  var i2009 = i2007[2]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 2) {
  request.r(i2009[i + 0], i2009[i + 1], 2, i2008, '')
  }
  i2006.bones = i2008
  i2006.updateWhenOffscreen = !!i2007[3]
  i2006.localBounds = i2007[4]
  request.r(i2007[5], i2007[6], 0, i2006, 'rootBone')
  var i2011 = i2007[7]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2011[i + 0]) );
  }
  i2006.blendShapesWeights = i2010
  i2006.enabled = !!i2007[8]
  request.r(i2007[9], i2007[10], 0, i2006, 'sharedMaterial')
  var i2013 = i2007[11]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i2006.sharedMaterials = i2012
  i2006.receiveShadows = !!i2007[12]
  i2006.shadowCastingMode = i2007[13]
  i2006.sortingLayerID = i2007[14]
  i2006.sortingOrder = i2007[15]
  i2006.lightmapIndex = i2007[16]
  i2006.lightmapSceneIndex = i2007[17]
  i2006.lightmapScaleOffset = new pc.Vec4( i2007[18], i2007[19], i2007[20], i2007[21] )
  i2006.lightProbeUsage = i2007[22]
  i2006.reflectionProbeUsage = i2007[23]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2017 = data
  i2016.weight = i2017[0]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2019 = data
  i2018.center = new pc.Vec3( i2019[0], i2019[1], i2019[2] )
  i2018.radius = i2019[3]
  i2018.enabled = !!i2019[4]
  i2018.isTrigger = !!i2019[5]
  request.r(i2019[6], i2019[7], 0, i2018, 'material')
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2021 = data
  i2020.mass = i2021[0]
  i2020.drag = i2021[1]
  i2020.angularDrag = i2021[2]
  i2020.useGravity = !!i2021[3]
  i2020.isKinematic = !!i2021[4]
  i2020.constraints = i2021[5]
  i2020.maxAngularVelocity = i2021[6]
  i2020.collisionDetectionMode = i2021[7]
  i2020.interpolation = i2021[8]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 3) {
    i2024.push( new pc.Vec3( i2025[i + 0], i2025[i + 1], i2025[i + 2] ) );
  }
  i2022.positions = i2024
  i2022.positionCount = i2023[1]
  i2022.time = i2023[2]
  i2022.startWidth = i2023[3]
  i2022.endWidth = i2023[4]
  i2022.widthMultiplier = i2023[5]
  i2022.autodestruct = !!i2023[6]
  i2022.emitting = !!i2023[7]
  i2022.numCornerVertices = i2023[8]
  i2022.numCapVertices = i2023[9]
  i2022.minVertexDistance = i2023[10]
  i2022.colorGradient = i2023[11] ? new pc.ColorGradient(i2023[11][0], i2023[11][1], i2023[11][2]) : null
  i2022.startColor = new pc.Color(i2023[12], i2023[13], i2023[14], i2023[15])
  i2022.endColor = new pc.Color(i2023[16], i2023[17], i2023[18], i2023[19])
  i2022.generateLightingData = !!i2023[20]
  i2022.textureMode = i2023[21]
  i2022.alignment = i2023[22]
  i2022.widthCurve = new pc.AnimationCurve( { keys_flow: i2023[23] } )
  i2022.enabled = !!i2023[24]
  request.r(i2023[25], i2023[26], 0, i2022, 'sharedMaterial')
  var i2027 = i2023[27]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 2) {
  request.r(i2027[i + 0], i2027[i + 1], 2, i2026, '')
  }
  i2022.sharedMaterials = i2026
  i2022.receiveShadows = !!i2023[28]
  i2022.shadowCastingMode = i2023[29]
  i2022.sortingLayerID = i2023[30]
  i2022.sortingOrder = i2023[31]
  i2022.lightmapIndex = i2023[32]
  i2022.lightmapSceneIndex = i2023[33]
  i2022.lightmapScaleOffset = new pc.Vec4( i2023[34], i2023[35], i2023[36], i2023[37] )
  i2022.lightProbeUsage = i2023[38]
  i2022.reflectionProbeUsage = i2023[39]
  return i2022
}

Deserializers["RonaldoPenalty.PenaltyBallController"] = function (request, data, root) {
  var i2030 = root || request.c( 'RonaldoPenalty.PenaltyBallController' )
  var i2031 = data
  i2030.blockBounceSpeed = i2031[0]
  i2030.blockBounceUpward = i2031[1]
  i2030.goalFallSpeed = i2031[2]
  i2030.goalFallDownward = i2031[3]
  i2030.goalDropDamping = i2031[4]
  request.r(i2031[5], i2031[6], 0, i2030, 'leftTop')
  request.r(i2031[7], i2031[8], 0, i2030, 'bottomCenter')
  request.r(i2031[9], i2031[10], 0, i2030, 'rightTop')
  i2030.leftTopY = i2031[11]
  i2030.bottomCenterY = i2031[12]
  i2030.rightTopY = i2031[13]
  i2030.halfWidth = i2031[14]
  i2030.goalZ = i2031[15]
  i2030.flightTime = i2031[16]
  request.r(i2031[17], i2031[18], 0, i2030, 'trailRenderer')
  i2030.goalTag = i2031[19]
  return i2030
}

Deserializers["RonaldoPenalty.PenaltyGoalkeeperAI"] = function (request, data, root) {
  var i2032 = root || request.c( 'RonaldoPenalty.PenaltyGoalkeeperAI' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'leftPost')
  request.r(i2033[2], i2033[3], 0, i2032, 'rightPost')
  i2032.baseSpeed = i2033[4]
  i2032.changeSpeedByRound = !!i2033[5]
  return i2032
}

Deserializers["RonaldoPenalty.PenaltyDefenderAI"] = function (request, data, root) {
  var i2034 = root || request.c( 'RonaldoPenalty.PenaltyDefenderAI' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'leftLimit')
  request.r(i2035[2], i2035[3], 0, i2034, 'rightLimit')
  i2034.speed = i2035[4]
  i2034.startActive = !!i2035[5]
  return i2034
}

Deserializers["RonaldoPenalty.PenaltyTargetMover"] = function (request, data, root) {
  var i2036 = root || request.c( 'RonaldoPenalty.PenaltyTargetMover' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'leftPoint')
  request.r(i2037[2], i2037[3], 0, i2036, 'rightPoint')
  i2036.speed = i2037[4]
  request.r(i2037[5], i2037[6], 0, i2036, 'aimLineRenderer')
  request.r(i2037[7], i2037[8], 0, i2036, 'ballTransform')
  i2036.lineWidth = i2037[9]
  i2036.dashDensity = i2037[10]
  i2036.dashRatio = i2037[11]
  i2036.dashColor = new pc.Color(i2037[12], i2037[13], i2037[14], i2037[15])
  i2036.lineGroundY = i2037[16]
  i2036.pulseEffect = !!i2037[17]
  i2036.pulseSpeed = i2037[18]
  i2036.pulseScaleAmount = i2037[19]
  i2036.sortingOrder = i2037[20]
  i2036.sortingLayerName = i2037[21]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2039 = data
  i2038.textureMode = i2039[0]
  i2038.alignment = i2039[1]
  i2038.widthCurve = new pc.AnimationCurve( { keys_flow: i2039[2] } )
  i2038.colorGradient = i2039[3] ? new pc.ColorGradient(i2039[3][0], i2039[3][1], i2039[3][2]) : null
  var i2041 = i2039[4]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 3) {
    i2040.push( new pc.Vec3( i2041[i + 0], i2041[i + 1], i2041[i + 2] ) );
  }
  i2038.positions = i2040
  i2038.positionCount = i2039[5]
  i2038.widthMultiplier = i2039[6]
  i2038.startWidth = i2039[7]
  i2038.endWidth = i2039[8]
  i2038.numCornerVertices = i2039[9]
  i2038.numCapVertices = i2039[10]
  i2038.useWorldSpace = !!i2039[11]
  i2038.loop = !!i2039[12]
  i2038.startColor = new pc.Color(i2039[13], i2039[14], i2039[15], i2039[16])
  i2038.endColor = new pc.Color(i2039[17], i2039[18], i2039[19], i2039[20])
  i2038.generateLightingData = !!i2039[21]
  i2038.enabled = !!i2039[22]
  request.r(i2039[23], i2039[24], 0, i2038, 'sharedMaterial')
  var i2043 = i2039[25]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2038.sharedMaterials = i2042
  i2038.receiveShadows = !!i2039[26]
  i2038.shadowCastingMode = i2039[27]
  i2038.sortingLayerID = i2039[28]
  i2038.sortingOrder = i2039[29]
  i2038.lightmapIndex = i2039[30]
  i2038.lightmapSceneIndex = i2039[31]
  i2038.lightmapScaleOffset = new pc.Vec4( i2039[32], i2039[33], i2039[34], i2039[35] )
  i2038.lightProbeUsage = i2039[36]
  i2038.reflectionProbeUsage = i2039[37]
  return i2038
}

Deserializers["RonaldoPenalty.PenaltyGameManager"] = function (request, data, root) {
  var i2044 = root || request.c( 'RonaldoPenalty.PenaltyGameManager' )
  var i2045 = data
  i2044.kickImpactDelay = i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'ball')
  request.r(i2045[3], i2045[4], 0, i2044, 'targetMover')
  request.r(i2045[5], i2045[6], 0, i2044, 'goalkeeper')
  request.r(i2045[7], i2045[8], 0, i2044, 'ronaldoAnimator')
  request.r(i2045[9], i2045[10], 0, i2044, 'uiManager')
  request.r(i2045[11], i2045[12], 0, i2044, 'defenderRound2')
  request.r(i2045[13], i2045[14], 0, i2044, 'defenderRound3')
  i2044.targetSpeeds = i2045[15]
  i2044.delayBetweenRounds = i2045[16]
  i2044.promptEveryRound = !!i2045[17]
  return i2044
}

Deserializers["RonaldoPenalty.PenaltyUIManager"] = function (request, data, root) {
  var i2046 = root || request.c( 'RonaldoPenalty.PenaltyUIManager' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2046.roundIndicators = i2048
  request.r(i2047[1], i2047[2], 0, i2046, 'iconEmpty')
  request.r(i2047[3], i2047[4], 0, i2046, 'iconCheck')
  request.r(i2047[5], i2047[6], 0, i2046, 'iconCross')
  request.r(i2047[7], i2047[8], 0, i2046, 'winEndcardPanel')
  request.r(i2047[9], i2047[10], 0, i2046, 'losePanel')
  request.r(i2047[11], i2047[12], 0, i2046, 'promptText')
  var i2051 = i2047[13]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 2, i2050, '')
  }
  i2046.objectsToShowOnWin = i2050
  i2046.winDelay = i2047[14]
  var i2053 = i2047[15]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 2, i2052, '')
  }
  i2046.objectsToHideOnWin = i2052
  var i2055 = i2047[16]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 2, i2054, '')
  }
  i2046.objectsToHideOnLose = i2054
  var i2057 = i2047[17]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 2, i2056, '')
  }
  i2046.extraObjectsToHide = i2056
  return i2046
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2062 = root || request.c( 'Ply_SoundManager' )
  var i2063 = data
  i2062.audioClips = request.d('FxAudio', i2063[0], i2062.audioClips)
  request.r(i2063[1], i2063[2], 0, i2062, 'sound')
  i2062.enableSound = !!i2063[3]
  i2062.bgmVolume = i2063[4]
  return i2062
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2064 = root || request.c( 'FxAudio' )
  var i2065 = data
  i2064.Clock = request.d('SoundData', i2065[0], i2064.Clock)
  i2064.PlayerWin = request.d('SoundData', i2065[1], i2064.PlayerWin)
  i2064.PlayerLoose = request.d('SoundData', i2065[2], i2064.PlayerLoose)
  i2064.RightChoice = request.d('SoundData', i2065[3], i2064.RightChoice)
  i2064.WrongChoice = request.d('SoundData', i2065[4], i2064.WrongChoice)
  i2064.MaxLevel = request.d('SoundData', i2065[5], i2064.MaxLevel)
  i2064.FightingCloud = request.d('SoundData', i2065[6], i2064.FightingCloud)
  i2064.Confetti = request.d('SoundData', i2065[7], i2064.Confetti)
  return i2064
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2066 = root || request.c( 'SoundData' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'clip')
  i2066.volume = i2067[2]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'clip')
  request.r(i2069[2], i2069[3], 0, i2068, 'outputAudioMixerGroup')
  i2068.playOnAwake = !!i2069[4]
  i2068.loop = !!i2069[5]
  i2068.time = i2069[6]
  i2068.volume = i2069[7]
  i2068.pitch = i2069[8]
  i2068.enabled = !!i2069[9]
  return i2068
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.UI.Button' )
  var i2071 = data
  i2070.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2071[0], i2070.m_OnClick)
  i2070.m_Navigation = request.d('UnityEngine.UI.Navigation', i2071[1], i2070.m_Navigation)
  i2070.m_Transition = i2071[2]
  i2070.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2071[3], i2070.m_Colors)
  i2070.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2071[4], i2070.m_SpriteState)
  i2070.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2071[5], i2070.m_AnimationTriggers)
  i2070.m_Interactable = !!i2071[6]
  request.r(i2071[7], i2071[8], 0, i2070, 'm_TargetGraphic')
  return i2070
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2073 = data
  i2072.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2073[0], i2072.m_PersistentCalls)
  return i2072
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('UnityEngine.Events.PersistentCall', i2077[i + 0]));
  }
  i2074.m_Calls = i2076
  return i2074
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'm_Target')
  i2080.m_TargetAssemblyTypeName = i2081[2]
  i2080.m_MethodName = i2081[3]
  i2080.m_Mode = i2081[4]
  i2080.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2081[5], i2080.m_Arguments)
  i2080.m_CallState = i2081[6]
  return i2080
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'm_ObjectArgument')
  i2082.m_ObjectArgumentAssemblyTypeName = i2083[2]
  i2082.m_IntArgument = i2083[3]
  i2082.m_FloatArgument = i2083[4]
  i2082.m_StringArgument = i2083[5]
  i2082.m_BoolArgument = !!i2083[6]
  return i2082
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2085 = data
  i2084.m_Mode = i2085[0]
  i2084.m_WrapAround = !!i2085[1]
  request.r(i2085[2], i2085[3], 0, i2084, 'm_SelectOnUp')
  request.r(i2085[4], i2085[5], 0, i2084, 'm_SelectOnDown')
  request.r(i2085[6], i2085[7], 0, i2084, 'm_SelectOnLeft')
  request.r(i2085[8], i2085[9], 0, i2084, 'm_SelectOnRight')
  return i2084
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2087 = data
  i2086.m_NormalColor = new pc.Color(i2087[0], i2087[1], i2087[2], i2087[3])
  i2086.m_HighlightedColor = new pc.Color(i2087[4], i2087[5], i2087[6], i2087[7])
  i2086.m_PressedColor = new pc.Color(i2087[8], i2087[9], i2087[10], i2087[11])
  i2086.m_SelectedColor = new pc.Color(i2087[12], i2087[13], i2087[14], i2087[15])
  i2086.m_DisabledColor = new pc.Color(i2087[16], i2087[17], i2087[18], i2087[19])
  i2086.m_ColorMultiplier = i2087[20]
  i2086.m_FadeDuration = i2087[21]
  return i2086
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'm_HighlightedSprite')
  request.r(i2089[2], i2089[3], 0, i2088, 'm_PressedSprite')
  request.r(i2089[4], i2089[5], 0, i2088, 'm_SelectedSprite')
  request.r(i2089[6], i2089[7], 0, i2088, 'm_DisabledSprite')
  return i2088
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2091 = data
  i2090.m_NormalTrigger = i2091[0]
  i2090.m_HighlightedTrigger = i2091[1]
  i2090.m_PressedTrigger = i2091[2]
  i2090.m_SelectedTrigger = i2091[3]
  i2090.m_DisabledTrigger = i2091[4]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2093 = data
  i2092.ambientIntensity = i2093[0]
  i2092.reflectionIntensity = i2093[1]
  i2092.ambientMode = i2093[2]
  i2092.ambientLight = new pc.Color(i2093[3], i2093[4], i2093[5], i2093[6])
  i2092.ambientSkyColor = new pc.Color(i2093[7], i2093[8], i2093[9], i2093[10])
  i2092.ambientGroundColor = new pc.Color(i2093[11], i2093[12], i2093[13], i2093[14])
  i2092.ambientEquatorColor = new pc.Color(i2093[15], i2093[16], i2093[17], i2093[18])
  i2092.fogColor = new pc.Color(i2093[19], i2093[20], i2093[21], i2093[22])
  i2092.fogEndDistance = i2093[23]
  i2092.fogStartDistance = i2093[24]
  i2092.fogDensity = i2093[25]
  i2092.fog = !!i2093[26]
  request.r(i2093[27], i2093[28], 0, i2092, 'skybox')
  i2092.fogMode = i2093[29]
  var i2095 = i2093[30]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2095[i + 0]) );
  }
  i2092.lightmaps = i2094
  i2092.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2093[31], i2092.lightProbes)
  i2092.lightmapsMode = i2093[32]
  i2092.mixedBakeMode = i2093[33]
  i2092.environmentLightingMode = i2093[34]
  i2092.ambientProbe = new pc.SphericalHarmonicsL2(i2093[35])
  i2092.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2093[36])
  i2092.useReferenceAmbientProbe = !!i2093[37]
  request.r(i2093[38], i2093[39], 0, i2092, 'customReflection')
  request.r(i2093[40], i2093[41], 0, i2092, 'defaultReflection')
  i2092.defaultReflectionMode = i2093[42]
  i2092.defaultReflectionResolution = i2093[43]
  i2092.sunLightObjectId = i2093[44]
  i2092.pixelLightCount = i2093[45]
  i2092.defaultReflectionHDR = !!i2093[46]
  i2092.hasLightDataAsset = !!i2093[47]
  i2092.hasManualGenerate = !!i2093[48]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'lightmapColor')
  request.r(i2099[2], i2099[3], 0, i2098, 'lightmapDirection')
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2100 = root || new UnityEngine.LightProbes()
  var i2101 = data
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.bounciness = i2107[1]
  i2106.dynamicFriction = i2107[2]
  i2106.staticFriction = i2107[3]
  i2106.frictionCombine = i2107[4]
  i2106.bounceCombine = i2107[5]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2109 = data
  var i2111 = i2109[0]
  var i2110 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2111[i + 0]));
  }
  i2108.ShaderCompilationErrors = i2110
  i2108.name = i2109[1]
  i2108.guid = i2109[2]
  var i2113 = i2109[3]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( i2113[i + 0] );
  }
  i2108.shaderDefinedKeywords = i2112
  var i2115 = i2109[4]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2115[i + 0]) );
  }
  i2108.passes = i2114
  var i2117 = i2109[5]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2117[i + 0]) );
  }
  i2108.usePasses = i2116
  var i2119 = i2109[6]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2119[i + 0]) );
  }
  i2108.defaultParameterValues = i2118
  request.r(i2109[7], i2109[8], 0, i2108, 'unityFallbackShader')
  i2108.readDepth = !!i2109[9]
  i2108.hasDepthOnlyPass = !!i2109[10]
  i2108.isCreatedByShaderGraph = !!i2109[11]
  i2108.disableBatching = !!i2109[12]
  i2108.compiled = !!i2109[13]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2123 = data
  i2122.shaderName = i2123[0]
  i2122.errorMessage = i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2128 = root || new pc.UnityShaderPass()
  var i2129 = data
  i2128.id = i2129[0]
  i2128.subShaderIndex = i2129[1]
  i2128.name = i2129[2]
  i2128.passType = i2129[3]
  i2128.grabPassTextureName = i2129[4]
  i2128.usePass = !!i2129[5]
  i2128.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[6], i2128.zTest)
  i2128.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[7], i2128.zWrite)
  i2128.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[8], i2128.culling)
  i2128.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2129[9], i2128.blending)
  i2128.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2129[10], i2128.alphaBlending)
  i2128.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[11], i2128.colorWriteMask)
  i2128.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[12], i2128.offsetUnits)
  i2128.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[13], i2128.offsetFactor)
  i2128.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[14], i2128.stencilRef)
  i2128.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[15], i2128.stencilReadMask)
  i2128.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2129[16], i2128.stencilWriteMask)
  i2128.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2129[17], i2128.stencilOp)
  i2128.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2129[18], i2128.stencilOpFront)
  i2128.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2129[19], i2128.stencilOpBack)
  var i2131 = i2129[20]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2131[i + 0]) );
  }
  i2128.tags = i2130
  var i2133 = i2129[21]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( i2133[i + 0] );
  }
  i2128.passDefinedKeywords = i2132
  var i2135 = i2129[22]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2135[i + 0]) );
  }
  i2128.passDefinedKeywordGroups = i2134
  var i2137 = i2129[23]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2137[i + 0]) );
  }
  i2128.variants = i2136
  var i2139 = i2129[24]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2139[i + 0]) );
  }
  i2128.excludedVariants = i2138
  i2128.hasDepthReader = !!i2129[25]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2141 = data
  i2140.val = i2141[0]
  i2140.name = i2141[1]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2143 = data
  i2142.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[0], i2142.src)
  i2142.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[1], i2142.dst)
  i2142.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[2], i2142.op)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2145 = data
  i2144.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2145[0], i2144.pass)
  i2144.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2145[1], i2144.fail)
  i2144.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2145[2], i2144.zFail)
  i2144.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2145[3], i2144.comp)
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.value = i2149[1]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2153 = data
  var i2155 = i2153[0]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( i2155[i + 0] );
  }
  i2152.keywords = i2154
  i2152.hasDiscard = !!i2153[1]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2159 = data
  i2158.passId = i2159[0]
  i2158.subShaderIndex = i2159[1]
  var i2161 = i2159[2]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( i2161[i + 0] );
  }
  i2158.keywords = i2160
  i2158.vertexProgram = i2159[3]
  i2158.fragmentProgram = i2159[4]
  i2158.exportedForWebGl2 = !!i2159[5]
  i2158.readDepth = !!i2159[6]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'shader')
  i2164.pass = i2165[2]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.type = i2169[1]
  i2168.value = new pc.Vec4( i2169[2], i2169[3], i2169[4], i2169[5] )
  i2168.textureValue = i2169[6]
  i2168.shaderPropertyFlag = i2169[7]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2171 = data
  i2170.name = i2171[0]
  request.r(i2171[1], i2171[2], 0, i2170, 'texture')
  i2170.aabb = i2171[3]
  i2170.vertices = i2171[4]
  i2170.triangles = i2171[5]
  i2170.textureRect = UnityEngine.Rect.MinMaxRect(i2171[6], i2171[7], i2171[8], i2171[9])
  i2170.packedRect = UnityEngine.Rect.MinMaxRect(i2171[10], i2171[11], i2171[12], i2171[13])
  i2170.border = new pc.Vec4( i2171[14], i2171[15], i2171[16], i2171[17] )
  i2170.transparency = i2171[18]
  i2170.bounds = i2171[19]
  i2170.pixelsPerUnit = i2171[20]
  i2170.textureWidth = i2171[21]
  i2170.textureHeight = i2171[22]
  i2170.nativeSize = new pc.Vec2( i2171[23], i2171[24] )
  i2170.pivot = new pc.Vec2( i2171[25], i2171[26] )
  i2170.textureRectOffset = new pc.Vec2( i2171[27], i2171[28] )
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2173 = data
  i2172.name = i2173[0]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2175 = data
  i2174.name = i2175[0]
  i2174.wrapMode = i2175[1]
  i2174.isLooping = !!i2175[2]
  i2174.length = i2175[3]
  var i2177 = i2175[4]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2177[i + 0]) );
  }
  i2174.curves = i2176
  var i2179 = i2175[5]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2179[i + 0]) );
  }
  i2174.events = i2178
  i2174.halfPrecision = !!i2175[6]
  i2174._frameRate = i2175[7]
  i2174.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2175[8], i2174.localBounds)
  i2174.hasMuscleCurves = !!i2175[9]
  var i2181 = i2175[10]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( i2181[i + 0] );
  }
  i2174.clipMuscleConstant = i2180
  i2174.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2175[11], i2174.clipBindingConstant)
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2185 = data
  i2184.path = i2185[0]
  i2184.hash = i2185[1]
  i2184.componentType = i2185[2]
  i2184.property = i2185[3]
  i2184.keys = i2185[4]
  var i2187 = i2185[5]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2187[i + 0]) );
  }
  i2184.objectReferenceKeys = i2186
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2191 = data
  i2190.time = i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'value')
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2195 = data
  i2194.functionName = i2195[0]
  i2194.floatParameter = i2195[1]
  i2194.intParameter = i2195[2]
  i2194.stringParameter = i2195[3]
  request.r(i2195[4], i2195[5], 0, i2194, 'objectReferenceParameter')
  i2194.time = i2195[6]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2197 = data
  i2196.center = new pc.Vec3( i2197[0], i2197[1], i2197[2] )
  i2196.extends = new pc.Vec3( i2197[3], i2197[4], i2197[5] )
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2200.genericBindings = i2202
  var i2205 = i2201[1]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( i2205[i + 0] );
  }
  i2200.pptrCurveMapping = i2204
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2207 = data
  i2206.name = i2207[0]
  var i2209 = i2207[1]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2209[i + 0]) );
  }
  i2206.layers = i2208
  var i2211 = i2207[2]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2211[i + 0]) );
  }
  i2206.parameters = i2210
  i2206.animationClips = i2207[3]
  i2206.avatarUnsupported = i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.defaultWeight = i2215[1]
  i2214.blendingMode = i2215[2]
  i2214.avatarMask = i2215[3]
  i2214.syncedLayerIndex = i2215[4]
  i2214.syncedLayerAffectsTiming = !!i2215[5]
  i2214.syncedLayers = i2215[6]
  i2214.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2215[7], i2214.stateMachine)
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2217 = data
  i2216.id = i2217[0]
  i2216.name = i2217[1]
  i2216.path = i2217[2]
  var i2219 = i2217[3]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2219[i + 0]) );
  }
  i2216.states = i2218
  var i2221 = i2217[4]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2221[i + 0]) );
  }
  i2216.machines = i2220
  var i2223 = i2217[5]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2223[i + 0]) );
  }
  i2216.entryStateTransitions = i2222
  var i2225 = i2217[6]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2225[i + 0]) );
  }
  i2216.exitStateTransitions = i2224
  var i2227 = i2217[7]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2227[i + 0]) );
  }
  i2216.anyStateTransitions = i2226
  i2216.defaultStateId = i2217[8]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2231 = data
  i2230.id = i2231[0]
  i2230.name = i2231[1]
  i2230.cycleOffset = i2231[2]
  i2230.cycleOffsetParameter = i2231[3]
  i2230.cycleOffsetParameterActive = !!i2231[4]
  i2230.mirror = !!i2231[5]
  i2230.mirrorParameter = i2231[6]
  i2230.mirrorParameterActive = !!i2231[7]
  i2230.motionId = i2231[8]
  i2230.nameHash = i2231[9]
  i2230.fullPathHash = i2231[10]
  i2230.speed = i2231[11]
  i2230.speedParameter = i2231[12]
  i2230.speedParameterActive = !!i2231[13]
  i2230.tag = i2231[14]
  i2230.tagHash = i2231[15]
  i2230.writeDefaultValues = !!i2231[16]
  var i2233 = i2231[17]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.behaviours = i2232
  var i2235 = i2231[18]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2235[i + 0]) );
  }
  i2230.transitions = i2234
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2241 = data
  i2240.fullPath = i2241[0]
  i2240.canTransitionToSelf = !!i2241[1]
  i2240.duration = i2241[2]
  i2240.exitTime = i2241[3]
  i2240.hasExitTime = !!i2241[4]
  i2240.hasFixedDuration = !!i2241[5]
  i2240.interruptionSource = i2241[6]
  i2240.offset = i2241[7]
  i2240.orderedInterruption = !!i2241[8]
  i2240.destinationStateId = i2241[9]
  i2240.isExit = !!i2241[10]
  i2240.mute = !!i2241[11]
  i2240.solo = !!i2241[12]
  var i2243 = i2241[13]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2243[i + 0]) );
  }
  i2240.conditions = i2242
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2249 = data
  i2248.destinationStateId = i2249[0]
  i2248.isExit = !!i2249[1]
  i2248.mute = !!i2249[2]
  i2248.solo = !!i2249[3]
  var i2251 = i2249[4]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2251[i + 0]) );
  }
  i2248.conditions = i2250
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2255 = data
  i2254.mode = i2255[0]
  i2254.parameter = i2255[1]
  i2254.threshold = i2255[2]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2259 = data
  i2258.defaultBool = !!i2259[0]
  i2258.defaultFloat = i2259[1]
  i2258.defaultInt = i2259[2]
  i2258.name = i2259[3]
  i2258.nameHash = i2259[4]
  i2258.type = i2259[5]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.bytes64 = i2261[1]
  i2260.data = i2261[2]
  return i2260
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2262 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2263 = data
  i2262.useSafeMode = !!i2263[0]
  i2262.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2263[1], i2262.safeModeOptions)
  i2262.timeScale = i2263[2]
  i2262.unscaledTimeScale = i2263[3]
  i2262.useSmoothDeltaTime = !!i2263[4]
  i2262.maxSmoothUnscaledTime = i2263[5]
  i2262.rewindCallbackMode = i2263[6]
  i2262.showUnityEditorReport = !!i2263[7]
  i2262.logBehaviour = i2263[8]
  i2262.drawGizmos = !!i2263[9]
  i2262.defaultRecyclable = !!i2263[10]
  i2262.defaultAutoPlay = i2263[11]
  i2262.defaultUpdateType = i2263[12]
  i2262.defaultTimeScaleIndependent = !!i2263[13]
  i2262.defaultEaseType = i2263[14]
  i2262.defaultEaseOvershootOrAmplitude = i2263[15]
  i2262.defaultEasePeriod = i2263[16]
  i2262.defaultAutoKill = !!i2263[17]
  i2262.defaultLoopType = i2263[18]
  i2262.debugMode = !!i2263[19]
  i2262.debugStoreTargetId = !!i2263[20]
  i2262.showPreviewPanel = !!i2263[21]
  i2262.storeSettingsLocation = i2263[22]
  i2262.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2263[23], i2262.modules)
  i2262.createASMDEF = !!i2263[24]
  i2262.showPlayingTweens = !!i2263[25]
  i2262.showPausedTweens = !!i2263[26]
  return i2262
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2264 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2265 = data
  i2264.logBehaviour = i2265[0]
  i2264.nestedTweenFailureBehaviour = i2265[1]
  return i2264
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2266 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2267 = data
  i2266.showPanel = !!i2267[0]
  i2266.audioEnabled = !!i2267[1]
  i2266.physicsEnabled = !!i2267[2]
  i2266.physics2DEnabled = !!i2267[3]
  i2266.spriteEnabled = !!i2267[4]
  i2266.uiEnabled = !!i2267[5]
  i2266.uiToolkitEnabled = !!i2267[6]
  i2266.textMeshProEnabled = !!i2267[7]
  i2266.tk2DEnabled = !!i2267[8]
  i2266.deAudioEnabled = !!i2267[9]
  i2266.deUnityExtendedEnabled = !!i2267[10]
  i2266.epoOutlineEnabled = !!i2267[11]
  return i2266
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2268 = root || request.c( 'TMPro.TMP_Settings' )
  var i2269 = data
  i2268.assetVersion = i2269[0]
  i2268.m_TextWrappingMode = i2269[1]
  i2268.m_enableKerning = !!i2269[2]
  var i2271 = i2269[3]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(i2271[i + 0]);
  }
  i2268.m_ActiveFontFeatures = i2270
  i2268.m_enableExtraPadding = !!i2269[4]
  i2268.m_enableTintAllSprites = !!i2269[5]
  i2268.m_enableParseEscapeCharacters = !!i2269[6]
  i2268.m_EnableRaycastTarget = !!i2269[7]
  i2268.m_GetFontFeaturesAtRuntime = !!i2269[8]
  i2268.m_missingGlyphCharacter = i2269[9]
  i2268.m_ClearDynamicDataOnBuild = !!i2269[10]
  i2268.m_warningsDisabled = !!i2269[11]
  request.r(i2269[12], i2269[13], 0, i2268, 'm_defaultFontAsset')
  i2268.m_defaultFontAssetPath = i2269[14]
  i2268.m_defaultFontSize = i2269[15]
  i2268.m_defaultAutoSizeMinRatio = i2269[16]
  i2268.m_defaultAutoSizeMaxRatio = i2269[17]
  i2268.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2269[18], i2269[19] )
  i2268.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2269[20], i2269[21] )
  i2268.m_autoSizeTextContainer = !!i2269[22]
  i2268.m_IsTextObjectScaleStatic = !!i2269[23]
  var i2273 = i2269[24]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 1, i2272, '')
  }
  i2268.m_fallbackFontAssets = i2272
  i2268.m_matchMaterialPreset = !!i2269[25]
  i2268.m_HideSubTextObjects = !!i2269[26]
  request.r(i2269[27], i2269[28], 0, i2268, 'm_defaultSpriteAsset')
  i2268.m_defaultSpriteAssetPath = i2269[29]
  i2268.m_enableEmojiSupport = !!i2269[30]
  i2268.m_MissingCharacterSpriteUnicode = i2269[31]
  var i2275 = i2269[32]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 1, i2274, '')
  }
  i2268.m_EmojiFallbackTextAssets = i2274
  i2268.m_defaultColorGradientPresetsPath = i2269[33]
  request.r(i2269[34], i2269[35], 0, i2268, 'm_defaultStyleSheet')
  i2268.m_StyleSheetsResourcePath = i2269[36]
  request.r(i2269[37], i2269[38], 0, i2268, 'm_leadingCharacters')
  request.r(i2269[39], i2269[40], 0, i2268, 'm_followingCharacters')
  i2268.m_UseModernHangulLineBreakingRules = !!i2269[41]
  return i2268
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'spriteSheet')
  var i2285 = i2283[2]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.add(request.d('TMPro.TMP_Sprite', i2285[i + 0]));
  }
  i2282.spriteInfoList = i2284
  var i2287 = i2283[3]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 1, i2286, '')
  }
  i2282.fallbackSpriteAssets = i2286
  var i2289 = i2283[4]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('TMPro.TMP_SpriteCharacter', i2289[i + 0]));
  }
  i2282.m_SpriteCharacterTable = i2288
  var i2291 = i2283[5]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('TMPro.TMP_SpriteGlyph', i2291[i + 0]));
  }
  i2282.m_GlyphTable = i2290
  i2282.m_Version = i2283[6]
  i2282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2283[7], i2282.m_FaceInfo)
  request.r(i2283[8], i2283[9], 0, i2282, 'm_Material')
  return i2282
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.hashCode = i2295[1]
  i2294.unicode = i2295[2]
  i2294.pivot = new pc.Vec2( i2295[3], i2295[4] )
  request.r(i2295[5], i2295[6], 0, i2294, 'sprite')
  i2294.id = i2295[7]
  i2294.x = i2295[8]
  i2294.y = i2295[9]
  i2294.width = i2295[10]
  i2294.height = i2295[11]
  i2294.xOffset = i2295[12]
  i2294.yOffset = i2295[13]
  i2294.xAdvance = i2295[14]
  i2294.scale = i2295[15]
  return i2294
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2300 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2301 = data
  i2300.m_Name = i2301[0]
  i2300.m_ElementType = i2301[1]
  i2300.m_Unicode = i2301[2]
  i2300.m_GlyphIndex = i2301[3]
  i2300.m_Scale = i2301[4]
  return i2300
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'sprite')
  i2304.m_Index = i2305[2]
  i2304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2305[3], i2304.m_Metrics)
  i2304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2305[4], i2304.m_GlyphRect)
  i2304.m_Scale = i2305[5]
  i2304.m_AtlasIndex = i2305[6]
  i2304.m_ClassDefinitionType = i2305[7]
  return i2304
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2307 = data
  i2306.m_Width = i2307[0]
  i2306.m_Height = i2307[1]
  i2306.m_HorizontalBearingX = i2307[2]
  i2306.m_HorizontalBearingY = i2307[3]
  i2306.m_HorizontalAdvance = i2307[4]
  return i2306
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2309 = data
  i2308.m_X = i2309[0]
  i2308.m_Y = i2309[1]
  i2308.m_Width = i2309[2]
  i2308.m_Height = i2309[3]
  return i2308
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2311 = data
  i2310.m_FaceIndex = i2311[0]
  i2310.m_FamilyName = i2311[1]
  i2310.m_StyleName = i2311[2]
  i2310.m_PointSize = i2311[3]
  i2310.m_Scale = i2311[4]
  i2310.m_UnitsPerEM = i2311[5]
  i2310.m_LineHeight = i2311[6]
  i2310.m_AscentLine = i2311[7]
  i2310.m_CapLine = i2311[8]
  i2310.m_MeanLine = i2311[9]
  i2310.m_Baseline = i2311[10]
  i2310.m_DescentLine = i2311[11]
  i2310.m_SuperscriptOffset = i2311[12]
  i2310.m_SuperscriptSize = i2311[13]
  i2310.m_SubscriptOffset = i2311[14]
  i2310.m_SubscriptSize = i2311[15]
  i2310.m_UnderlineOffset = i2311[16]
  i2310.m_UnderlineThickness = i2311[17]
  i2310.m_StrikethroughOffset = i2311[18]
  i2310.m_StrikethroughThickness = i2311[19]
  i2310.m_TabWidth = i2311[20]
  return i2310
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2313 = data
  var i2315 = i2313[0]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('TMPro.TMP_Style', i2315[i + 0]));
  }
  i2312.m_StyleList = i2314
  return i2312
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2318 = root || request.c( 'TMPro.TMP_Style' )
  var i2319 = data
  i2318.m_Name = i2319[0]
  i2318.m_HashCode = i2319[1]
  i2318.m_OpeningDefinition = i2319[2]
  i2318.m_ClosingDefinition = i2319[3]
  i2318.m_OpeningTagArray = i2319[4]
  i2318.m_ClosingTagArray = i2319[5]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2323[i + 0]) );
  }
  i2320.files = i2322
  i2320.componentToPrefabIds = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2327 = data
  i2326.path = i2327[0]
  request.r(i2327[1], i2327[2], 0, i2326, 'unityObject')
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2329 = data
  var i2331 = i2329[0]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2331[i + 0]) );
  }
  i2328.scriptsExecutionOrder = i2330
  var i2333 = i2329[1]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2333[i + 0]) );
  }
  i2328.sortingLayers = i2332
  var i2335 = i2329[2]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2335[i + 0]) );
  }
  i2328.cullingLayers = i2334
  i2328.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2329[3], i2328.timeSettings)
  i2328.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2329[4], i2328.physicsSettings)
  i2328.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2329[5], i2328.physics2DSettings)
  i2328.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2329[6], i2328.qualitySettings)
  i2328.enableRealtimeShadows = !!i2329[7]
  i2328.enableAutoInstancing = !!i2329[8]
  i2328.enableStaticBatching = !!i2329[9]
  i2328.enableDynamicBatching = !!i2329[10]
  i2328.lightmapEncodingQuality = i2329[11]
  i2328.desiredColorSpace = i2329[12]
  var i2337 = i2329[13]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( i2337[i + 0] );
  }
  i2328.allTags = i2336
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.value = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2345 = data
  i2344.id = i2345[0]
  i2344.name = i2345[1]
  i2344.value = i2345[2]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2349 = data
  i2348.id = i2349[0]
  i2348.name = i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2351 = data
  i2350.fixedDeltaTime = i2351[0]
  i2350.maximumDeltaTime = i2351[1]
  i2350.timeScale = i2351[2]
  i2350.maximumParticleTimestep = i2351[3]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2353 = data
  i2352.gravity = new pc.Vec3( i2353[0], i2353[1], i2353[2] )
  i2352.defaultSolverIterations = i2353[3]
  i2352.bounceThreshold = i2353[4]
  i2352.autoSyncTransforms = !!i2353[5]
  i2352.autoSimulation = !!i2353[6]
  var i2355 = i2353[7]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2355[i + 0]) );
  }
  i2352.collisionMatrix = i2354
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2359 = data
  i2358.enabled = !!i2359[0]
  i2358.layerId = i2359[1]
  i2358.otherLayerId = i2359[2]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'material')
  i2360.gravity = new pc.Vec2( i2361[2], i2361[3] )
  i2360.positionIterations = i2361[4]
  i2360.velocityIterations = i2361[5]
  i2360.velocityThreshold = i2361[6]
  i2360.maxLinearCorrection = i2361[7]
  i2360.maxAngularCorrection = i2361[8]
  i2360.maxTranslationSpeed = i2361[9]
  i2360.maxRotationSpeed = i2361[10]
  i2360.baumgarteScale = i2361[11]
  i2360.baumgarteTOIScale = i2361[12]
  i2360.timeToSleep = i2361[13]
  i2360.linearSleepTolerance = i2361[14]
  i2360.angularSleepTolerance = i2361[15]
  i2360.defaultContactOffset = i2361[16]
  i2360.autoSimulation = !!i2361[17]
  i2360.queriesHitTriggers = !!i2361[18]
  i2360.queriesStartInColliders = !!i2361[19]
  i2360.callbacksOnDisable = !!i2361[20]
  i2360.reuseCollisionCallbacks = !!i2361[21]
  i2360.autoSyncTransforms = !!i2361[22]
  var i2363 = i2361[23]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2363[i + 0]) );
  }
  i2360.collisionMatrix = i2362
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.layerId = i2367[1]
  i2366.otherLayerId = i2367[2]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2371[i + 0]) );
  }
  i2368.qualityLevels = i2370
  var i2373 = i2369[1]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( i2373[i + 0] );
  }
  i2368.names = i2372
  i2368.shadows = i2369[2]
  i2368.anisotropicFiltering = i2369[3]
  i2368.antiAliasing = i2369[4]
  i2368.lodBias = i2369[5]
  i2368.shadowCascades = i2369[6]
  i2368.shadowDistance = i2369[7]
  i2368.shadowmaskMode = i2369[8]
  i2368.shadowProjection = i2369[9]
  i2368.shadowResolution = i2369[10]
  i2368.softParticles = !!i2369[11]
  i2368.softVegetation = !!i2369[12]
  i2368.activeColorSpace = i2369[13]
  i2368.desiredColorSpace = i2369[14]
  i2368.masterTextureLimit = i2369[15]
  i2368.maxQueuedFrames = i2369[16]
  i2368.particleRaycastBudget = i2369[17]
  i2368.pixelLightCount = i2369[18]
  i2368.realtimeReflectionProbes = !!i2369[19]
  i2368.shadowCascade2Split = i2369[20]
  i2368.shadowCascade4Split = new pc.Vec3( i2369[21], i2369[22], i2369[23] )
  i2368.streamingMipmapsActive = !!i2369[24]
  i2368.vSyncCount = i2369[25]
  i2368.asyncUploadBufferSize = i2369[26]
  i2368.asyncUploadTimeSlice = i2369[27]
  i2368.billboardsFaceCameraPosition = !!i2369[28]
  i2368.shadowNearPlaneOffset = i2369[29]
  i2368.streamingMipmapsMemoryBudget = i2369[30]
  i2368.maximumLODLevel = i2369[31]
  i2368.streamingMipmapsAddAllCameras = !!i2369[32]
  i2368.streamingMipmapsMaxLevelReduction = i2369[33]
  i2368.streamingMipmapsRenderersPerFrame = i2369[34]
  i2368.resolutionScalingFixedDPIFactor = i2369[35]
  i2368.streamingMipmapsMaxFileIORequests = i2369[36]
  i2368.currentQualityLevel = i2369[37]
  return i2368
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[34],"65":[9],"66":[36],"67":[36],"68":[36],"69":[36],"70":[36],"71":[36],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[9],"87":[25],"88":[89],"90":[89],"8":[7],"91":[28],"92":[8],"93":[7],"94":[25,7],"95":[7,13],"96":[7],"97":[13,7],"98":[25],"99":[13,7],"100":[7],"101":[102],"103":[102],"104":[102],"105":[7],"106":[7],"12":[8],"14":[13,7],"107":[7],"11":[8],"108":[7],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"15":[13,7],"117":[7],"118":[7],"119":[7],"120":[7],"121":[13,7],"122":[7],"123":[28],"124":[28],"29":[28],"125":[28],"126":[9],"127":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","ImageScroller","UIGuidingMove","UIPulse","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.AudioListener","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","MaterialUVScroller","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicsMaterial","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","RonaldoPenalty.PenaltyPlayerAnimator","UnityEngine.SkinnedMeshRenderer","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","RonaldoPenalty.PenaltyBallController","RonaldoPenalty.PenaltyGoalkeeperAI","RonaldoPenalty.PenaltyDefenderAI","RonaldoPenalty.PenaltyTargetMover","UnityEngine.LineRenderer","RonaldoPenalty.PenaltyGameManager","RonaldoPenalty.PenaltyUIManager","UnityEngine.GameObject","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "25.7";

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

Deserializers.buildID = "eaa8d7f6-5804-45f2-95cf-aade9c8524b9";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

