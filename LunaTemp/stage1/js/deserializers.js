var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointSpring' )
  var i1459 = data
  i1458.spring = i1459[0]
  i1458.damper = i1459[1]
  i1458.targetPosition = i1459[2]
  return i1458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.JointMotor' )
  var i1461 = data
  i1460.m_TargetVelocity = i1461[0]
  i1460.m_Force = i1461[1]
  i1460.m_FreeSpin = i1461[2]
  return i1460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.JointLimits' )
  var i1463 = data
  i1462.m_Min = i1463[0]
  i1462.m_Max = i1463[1]
  i1462.m_Bounciness = i1463[2]
  i1462.m_BounceMinVelocity = i1463[3]
  i1462.m_ContactDistance = i1463[4]
  i1462.minBounce = i1463[5]
  i1462.maxBounce = i1463[6]
  return i1462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.JointDrive' )
  var i1465 = data
  i1464.m_PositionSpring = i1465[0]
  i1464.m_PositionDamper = i1465[1]
  i1464.m_MaximumForce = i1465[2]
  i1464.m_UseAcceleration = i1465[3]
  return i1464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1467 = data
  i1466.m_Spring = i1467[0]
  i1466.m_Damper = i1467[1]
  return i1466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1469 = data
  i1468.m_Limit = i1469[0]
  i1468.m_Bounciness = i1469[1]
  i1468.m_ContactDistance = i1469[2]
  return i1468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1471 = data
  i1470.m_ExtremumSlip = i1471[0]
  i1470.m_ExtremumValue = i1471[1]
  i1470.m_AsymptoteSlip = i1471[2]
  i1470.m_AsymptoteValue = i1471[3]
  i1470.m_Stiffness = i1471[4]
  return i1470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1473 = data
  i1472.m_LowerAngle = i1473[0]
  i1472.m_UpperAngle = i1473[1]
  return i1472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1475 = data
  i1474.m_MotorSpeed = i1475[0]
  i1474.m_MaximumMotorTorque = i1475[1]
  return i1474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1477 = data
  i1476.m_DampingRatio = i1477[0]
  i1476.m_Frequency = i1477[1]
  i1476.m_Angle = i1477[2]
  return i1476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1479 = data
  i1478.m_LowerTranslation = i1479[0]
  i1478.m_UpperTranslation = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.width = i1481[1]
  i1480.height = i1481[2]
  i1480.mipmapCount = i1481[3]
  i1480.anisoLevel = i1481[4]
  i1480.filterMode = i1481[5]
  i1480.hdr = !!i1481[6]
  i1480.format = i1481[7]
  i1480.wrapMode = i1481[8]
  i1480.alphaIsTransparency = !!i1481[9]
  i1480.alphaSource = i1481[10]
  i1480.graphicsFormat = i1481[11]
  i1480.sRGBTexture = !!i1481[12]
  i1480.desiredColorSpace = i1481[13]
  i1480.wrapU = i1481[14]
  i1480.wrapV = i1481[15]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.halfPrecision = !!i1483[1]
  i1482.useSimplification = !!i1483[2]
  i1482.useUInt32IndexFormat = !!i1483[3]
  i1482.vertexCount = i1483[4]
  i1482.aabb = i1483[5]
  var i1485 = i1483[6]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( !!i1485[i + 0] );
  }
  i1482.streams = i1484
  i1482.vertices = i1483[7]
  var i1487 = i1483[8]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1487[i + 0]) );
  }
  i1482.subMeshes = i1486
  var i1489 = i1483[9]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 16) {
    i1488.push( new pc.Mat4().setData(i1489[i + 0], i1489[i + 1], i1489[i + 2], i1489[i + 3],  i1489[i + 4], i1489[i + 5], i1489[i + 6], i1489[i + 7],  i1489[i + 8], i1489[i + 9], i1489[i + 10], i1489[i + 11],  i1489[i + 12], i1489[i + 13], i1489[i + 14], i1489[i + 15]) );
  }
  i1482.bindposes = i1488
  var i1491 = i1483[10]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1491[i + 0]) );
  }
  i1482.blendShapes = i1490
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1497 = data
  i1496.triangles = i1497[0]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1503 = data
  i1502.name = i1503[0]
  var i1505 = i1503[1]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1505[i + 0]) );
  }
  i1502.frames = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1506 = root || new pc.UnityMaterial()
  var i1507 = data
  i1506.name = i1507[0]
  request.r(i1507[1], i1507[2], 0, i1506, 'shader')
  i1506.renderQueue = i1507[3]
  i1506.enableInstancing = !!i1507[4]
  var i1509 = i1507[5]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1509[i + 0]) );
  }
  i1506.floatParameters = i1508
  var i1511 = i1507[6]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1511[i + 0]) );
  }
  i1506.colorParameters = i1510
  var i1513 = i1507[7]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1513[i + 0]) );
  }
  i1506.vectorParameters = i1512
  var i1515 = i1507[8]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1515[i + 0]) );
  }
  i1506.textureParameters = i1514
  var i1517 = i1507[9]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1517[i + 0]) );
  }
  i1506.materialFlags = i1516
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1521 = data
  i1520.name = i1521[0]
  i1520.value = i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.value = new pc.Color(i1525[1], i1525[2], i1525[3], i1525[4])
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = new pc.Vec4( i1529[1], i1529[2], i1529[3], i1529[4] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1533 = data
  i1532.name = i1533[0]
  request.r(i1533[1], i1533[2], 0, i1532, 'value')
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.enabled = !!i1537[1]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1539 = data
  i1538.position = new pc.Vec3( i1539[0], i1539[1], i1539[2] )
  i1538.scale = new pc.Vec3( i1539[3], i1539[4], i1539[5] )
  i1538.rotation = new pc.Quat(i1539[6], i1539[7], i1539[8], i1539[9])
  return i1538
}

Deserializers["ChoiceBoardHolder"] = function (request, data, root) {
  var i1540 = root || request.c( 'ChoiceBoardHolder' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.choiceBoards = i1542
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1547 = data
  i1546.center = new pc.Vec3( i1547[0], i1547[1], i1547[2] )
  i1546.size = new pc.Vec3( i1547[3], i1547[4], i1547[5] )
  i1546.enabled = !!i1547[6]
  i1546.isTrigger = !!i1547[7]
  request.r(i1547[8], i1547[9], 0, i1546, 'material')
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1549 = data
  i1548.color = new pc.Color(i1549[0], i1549[1], i1549[2], i1549[3])
  request.r(i1549[4], i1549[5], 0, i1548, 'sprite')
  i1548.flipX = !!i1549[6]
  i1548.flipY = !!i1549[7]
  i1548.drawMode = i1549[8]
  i1548.size = new pc.Vec2( i1549[9], i1549[10] )
  i1548.tileMode = i1549[11]
  i1548.adaptiveModeThreshold = i1549[12]
  i1548.maskInteraction = i1549[13]
  i1548.spriteSortPoint = i1549[14]
  i1548.enabled = !!i1549[15]
  request.r(i1549[16], i1549[17], 0, i1548, 'sharedMaterial')
  var i1551 = i1549[18]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 2, i1550, '')
  }
  i1548.sharedMaterials = i1550
  i1548.receiveShadows = !!i1549[19]
  i1548.shadowCastingMode = i1549[20]
  i1548.sortingLayerID = i1549[21]
  i1548.sortingOrder = i1549[22]
  i1548.lightmapIndex = i1549[23]
  i1548.lightmapSceneIndex = i1549[24]
  i1548.lightmapScaleOffset = new pc.Vec4( i1549[25], i1549[26], i1549[27], i1549[28] )
  i1548.lightProbeUsage = i1549[29]
  i1548.reflectionProbeUsage = i1549[30]
  return i1548
}

Deserializers["ChoiceBoard"] = function (request, data, root) {
  var i1554 = root || request.c( 'ChoiceBoard' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'spriteRenderer')
  request.r(i1555[2], i1555[3], 0, i1554, 'borderRenderer')
  i1554.choiceBoardType = i1555[4]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.tagId = i1557[1]
  i1556.enabled = !!i1557[2]
  i1556.isStatic = !!i1557[3]
  i1556.layer = i1557[4]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.atlasId = i1559[1]
  i1558.mipmapCount = i1559[2]
  i1558.hdr = !!i1559[3]
  i1558.size = i1559[4]
  i1558.anisoLevel = i1559[5]
  i1558.filterMode = i1559[6]
  var i1561 = i1559[7]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 4) {
    i1560.push( UnityEngine.Rect.MinMaxRect(i1561[i + 0], i1561[i + 1], i1561[i + 2], i1561[i + 3]) );
  }
  i1558.rects = i1560
  i1558.wrapU = i1559[8]
  i1558.wrapV = i1559[9]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.index = i1565[1]
  i1564.startup = !!i1565[2]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1567 = data
  i1566.type = i1567[0]
  i1566.color = new pc.Color(i1567[1], i1567[2], i1567[3], i1567[4])
  i1566.cullingMask = i1567[5]
  i1566.intensity = i1567[6]
  i1566.range = i1567[7]
  i1566.spotAngle = i1567[8]
  i1566.shadows = i1567[9]
  i1566.shadowNormalBias = i1567[10]
  i1566.shadowBias = i1567[11]
  i1566.shadowStrength = i1567[12]
  i1566.shadowResolution = i1567[13]
  i1566.lightmapBakeType = i1567[14]
  i1566.renderMode = i1567[15]
  request.r(i1567[16], i1567[17], 0, i1566, 'cookie')
  i1566.cookieSize = i1567[18]
  i1566.shadowNearPlane = i1567[19]
  i1566.occlusionMaskChannel = i1567[20]
  i1566.enabled = !!i1567[21]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1569 = data
  i1568.pivot = new pc.Vec2( i1569[0], i1569[1] )
  i1568.anchorMin = new pc.Vec2( i1569[2], i1569[3] )
  i1568.anchorMax = new pc.Vec2( i1569[4], i1569[5] )
  i1568.sizeDelta = new pc.Vec2( i1569[6], i1569[7] )
  i1568.anchoredPosition3D = new pc.Vec3( i1569[8], i1569[9], i1569[10] )
  i1568.rotation = new pc.Quat(i1569[11], i1569[12], i1569[13], i1569[14])
  i1568.scale = new pc.Vec3( i1569[15], i1569[16], i1569[17] )
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1571 = data
  i1570.planeDistance = i1571[0]
  i1570.referencePixelsPerUnit = i1571[1]
  i1570.isFallbackOverlay = !!i1571[2]
  i1570.renderMode = i1571[3]
  i1570.renderOrder = i1571[4]
  i1570.sortingLayerName = i1571[5]
  i1570.sortingOrder = i1571[6]
  i1570.scaleFactor = i1571[7]
  request.r(i1571[8], i1571[9], 0, i1570, 'worldCamera')
  i1570.overrideSorting = !!i1571[10]
  i1570.pixelPerfect = !!i1571[11]
  i1570.targetDisplay = i1571[12]
  i1570.overridePixelPerfect = !!i1571[13]
  i1570.enabled = !!i1571[14]
  return i1570
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1573 = data
  i1572.m_UiScaleMode = i1573[0]
  i1572.m_ReferencePixelsPerUnit = i1573[1]
  i1572.m_ScaleFactor = i1573[2]
  i1572.m_ReferenceResolution = new pc.Vec2( i1573[3], i1573[4] )
  i1572.m_ScreenMatchMode = i1573[5]
  i1572.m_MatchWidthOrHeight = i1573[6]
  i1572.m_PhysicalUnit = i1573[7]
  i1572.m_FallbackScreenDPI = i1573[8]
  i1572.m_DefaultSpriteDPI = i1573[9]
  i1572.m_DynamicPixelsPerUnit = i1573[10]
  i1572.m_PresetInfoIsWorld = !!i1573[11]
  return i1572
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1575 = data
  i1574.m_IgnoreReversedGraphics = !!i1575[0]
  i1574.m_BlockingObjects = i1575[1]
  i1574.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1575[2] )
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1577 = data
  i1576.cullTransparentMesh = !!i1577[0]
  return i1576
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.Image' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'm_Sprite')
  i1578.m_Type = i1579[2]
  i1578.m_PreserveAspect = !!i1579[3]
  i1578.m_FillCenter = !!i1579[4]
  i1578.m_FillMethod = i1579[5]
  i1578.m_FillAmount = i1579[6]
  i1578.m_FillClockwise = !!i1579[7]
  i1578.m_FillOrigin = i1579[8]
  i1578.m_UseSpriteMesh = !!i1579[9]
  i1578.m_PixelsPerUnitMultiplier = i1579[10]
  request.r(i1579[11], i1579[12], 0, i1578, 'm_Material')
  i1578.m_Maskable = !!i1579[13]
  i1578.m_Color = new pc.Color(i1579[14], i1579[15], i1579[16], i1579[17])
  i1578.m_RaycastTarget = !!i1579[18]
  i1578.m_RaycastPadding = new pc.Vec4( i1579[19], i1579[20], i1579[21], i1579[22] )
  return i1578
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1581 = data
  i1580.m_Spacing = i1581[0]
  i1580.m_ChildForceExpandWidth = !!i1581[1]
  i1580.m_ChildForceExpandHeight = !!i1581[2]
  i1580.m_ChildControlWidth = !!i1581[3]
  i1580.m_ChildControlHeight = !!i1581[4]
  i1580.m_ChildScaleWidth = !!i1581[5]
  i1580.m_ChildScaleHeight = !!i1581[6]
  i1580.m_ReverseArrangement = !!i1581[7]
  i1580.m_Padding = UnityEngine.RectOffset.FromPaddings(i1581[8], i1581[9], i1581[10], i1581[11])
  i1580.m_ChildAlignment = i1581[12]
  return i1580
}

Deserializers["UICheckBoxHolder"] = function (request, data, root) {
  var i1582 = root || request.c( 'UICheckBoxHolder' )
  var i1583 = data
  var i1585 = i1583[0]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 2) {
  request.r(i1585[i + 0], i1585[i + 1], 2, i1584, '')
  }
  i1582.uICheckBoxes = i1584
  return i1582
}

Deserializers["UICheckBox"] = function (request, data, root) {
  var i1588 = root || request.c( 'UICheckBox' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'iconImg')
  request.r(i1589[2], i1589[3], 0, i1588, 'startingSprite')
  return i1588
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'm_FillRect')
  request.r(i1591[2], i1591[3], 0, i1590, 'm_HandleRect')
  i1590.m_Direction = i1591[4]
  i1590.m_MinValue = i1591[5]
  i1590.m_MaxValue = i1591[6]
  i1590.m_WholeNumbers = !!i1591[7]
  i1590.m_Value = i1591[8]
  i1590.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1591[9], i1590.m_OnValueChanged)
  i1590.m_Navigation = request.d('UnityEngine.UI.Navigation', i1591[10], i1590.m_Navigation)
  i1590.m_Transition = i1591[11]
  i1590.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1591[12], i1590.m_Colors)
  i1590.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1591[13], i1590.m_SpriteState)
  i1590.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1591[14], i1590.m_AnimationTriggers)
  i1590.m_Interactable = !!i1591[15]
  request.r(i1591[16], i1591[17], 0, i1590, 'm_TargetGraphic')
  return i1590
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1593 = data
  i1592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1593[0], i1592.m_PersistentCalls)
  return i1592
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1595 = data
  var i1597 = i1595[0]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(request.d('UnityEngine.Events.PersistentCall', i1597[i + 0]));
  }
  i1594.m_Calls = i1596
  return i1594
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'm_Target')
  i1600.m_TargetAssemblyTypeName = i1601[2]
  i1600.m_MethodName = i1601[3]
  i1600.m_Mode = i1601[4]
  i1600.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1601[5], i1600.m_Arguments)
  i1600.m_CallState = i1601[6]
  return i1600
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1603 = data
  i1602.m_Mode = i1603[0]
  i1602.m_WrapAround = !!i1603[1]
  request.r(i1603[2], i1603[3], 0, i1602, 'm_SelectOnUp')
  request.r(i1603[4], i1603[5], 0, i1602, 'm_SelectOnDown')
  request.r(i1603[6], i1603[7], 0, i1602, 'm_SelectOnLeft')
  request.r(i1603[8], i1603[9], 0, i1602, 'm_SelectOnRight')
  return i1602
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1605 = data
  i1604.m_NormalColor = new pc.Color(i1605[0], i1605[1], i1605[2], i1605[3])
  i1604.m_HighlightedColor = new pc.Color(i1605[4], i1605[5], i1605[6], i1605[7])
  i1604.m_PressedColor = new pc.Color(i1605[8], i1605[9], i1605[10], i1605[11])
  i1604.m_SelectedColor = new pc.Color(i1605[12], i1605[13], i1605[14], i1605[15])
  i1604.m_DisabledColor = new pc.Color(i1605[16], i1605[17], i1605[18], i1605[19])
  i1604.m_ColorMultiplier = i1605[20]
  i1604.m_FadeDuration = i1605[21]
  return i1604
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'm_HighlightedSprite')
  request.r(i1607[2], i1607[3], 0, i1606, 'm_PressedSprite')
  request.r(i1607[4], i1607[5], 0, i1606, 'm_SelectedSprite')
  request.r(i1607[6], i1607[7], 0, i1606, 'm_DisabledSprite')
  return i1606
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1609 = data
  i1608.m_NormalTrigger = i1609[0]
  i1608.m_HighlightedTrigger = i1609[1]
  i1608.m_PressedTrigger = i1609[2]
  i1608.m_SelectedTrigger = i1609[3]
  i1608.m_DisabledTrigger = i1609[4]
  return i1608
}

Deserializers["UIProgressBar"] = function (request, data, root) {
  var i1610 = root || request.c( 'UIProgressBar' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'fillImage')
  request.r(i1611[2], i1611[3], 0, i1610, 'fillBackground')
  return i1610
}

Deserializers["UITutorial"] = function (request, data, root) {
  var i1612 = root || request.c( 'UITutorial' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'tutorialUIHolder')
  return i1612
}

Deserializers["UIGuidingMove"] = function (request, data, root) {
  var i1614 = root || request.c( 'UIGuidingMove' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'target')
  i1614.startPosition = new pc.Vec2( i1615[2], i1615[3] )
  i1614.endPosition = new pc.Vec2( i1615[4], i1615[5] )
  i1614.duration = i1615[6]
  i1614.ease = i1615[7]
  i1614.resetToStartOnComplete = !!i1615[8]
  i1614.loop = !!i1615[9]
  i1614.loopCount = i1615[10]
  i1614.loopType = i1615[11]
  return i1614
}

Deserializers["UIPulse"] = function (request, data, root) {
  var i1616 = root || request.c( 'UIPulse' )
  var i1617 = data
  i1616.targetScale = new pc.Vec3( i1617[0], i1617[1], i1617[2] )
  i1616.duration = i1617[3]
  i1616.ease = i1617[4]
  return i1616
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_Texture')
  i1618.m_UVRect = UnityEngine.Rect.MinMaxRect(i1619[2], i1619[3], i1619[4], i1619[5])
  request.r(i1619[6], i1619[7], 0, i1618, 'm_Material')
  i1618.m_Maskable = !!i1619[8]
  i1618.m_Color = new pc.Color(i1619[9], i1619[10], i1619[11], i1619[12])
  i1618.m_RaycastTarget = !!i1619[13]
  i1618.m_RaycastPadding = new pc.Vec4( i1619[14], i1619[15], i1619[16], i1619[17] )
  return i1618
}

Deserializers["ImageScroller"] = function (request, data, root) {
  var i1620 = root || request.c( 'ImageScroller' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'rawImage')
  i1620.moveVector = new pc.Vec2( i1621[2], i1621[3] )
  return i1620
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'm_FirstSelected')
  i1622.m_sendNavigationEvents = !!i1623[2]
  i1622.m_DragThreshold = i1623[3]
  return i1622
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1625 = data
  i1624.m_HorizontalAxis = i1625[0]
  i1624.m_VerticalAxis = i1625[1]
  i1624.m_SubmitButton = i1625[2]
  i1624.m_CancelButton = i1625[3]
  i1624.m_InputActionsPerSecond = i1625[4]
  i1624.m_RepeatDelay = i1625[5]
  i1624.m_ForceModuleActive = !!i1625[6]
  i1624.m_SendPointerHoverToParent = !!i1625[7]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'sharedMesh')
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'additionalVertexStreams')
  i1628.enabled = !!i1629[2]
  request.r(i1629[3], i1629[4], 0, i1628, 'sharedMaterial')
  var i1631 = i1629[5]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 2, i1630, '')
  }
  i1628.sharedMaterials = i1630
  i1628.receiveShadows = !!i1629[6]
  i1628.shadowCastingMode = i1629[7]
  i1628.sortingLayerID = i1629[8]
  i1628.sortingOrder = i1629[9]
  i1628.lightmapIndex = i1629[10]
  i1628.lightmapSceneIndex = i1629[11]
  i1628.lightmapScaleOffset = new pc.Vec4( i1629[12], i1629[13], i1629[14], i1629[15] )
  i1628.lightProbeUsage = i1629[16]
  i1628.reflectionProbeUsage = i1629[17]
  return i1628
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1632 = root || request.c( 'GameManager' )
  var i1633 = data
  i1632.maxLevel = i1633[0]
  i1632.winLevel = i1633[1]
  i1632.totalMoveTime = i1633[2]
  i1632.currentPlayerLevel = i1633[3]
  return i1632
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1634 = root || request.c( 'InputManager' )
  var i1635 = data
  i1634.minimumSwipeDistance = i1635[0]
  return i1634
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1636 = root || request.c( 'UIManager' )
  var i1637 = data
  return i1636
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1638 = root || request.c( 'Ply_SoundManager' )
  var i1639 = data
  i1638.audioClips = request.d('FxAudio', i1639[0], i1638.audioClips)
  request.r(i1639[1], i1639[2], 0, i1638, 'sound')
  i1638.enableSound = !!i1639[3]
  i1638.bgmVolume = i1639[4]
  return i1638
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i1640 = root || request.c( 'FxAudio' )
  var i1641 = data
  i1640.Clock = request.d('SoundData', i1641[0], i1640.Clock)
  i1640.PlayerWin = request.d('SoundData', i1641[1], i1640.PlayerWin)
  i1640.PlayerLoose = request.d('SoundData', i1641[2], i1640.PlayerLoose)
  i1640.RightChoice = request.d('SoundData', i1641[3], i1640.RightChoice)
  i1640.WrongChoice = request.d('SoundData', i1641[4], i1640.WrongChoice)
  i1640.MaxLevel = request.d('SoundData', i1641[5], i1640.MaxLevel)
  i1640.FightingCloud = request.d('SoundData', i1641[6], i1640.FightingCloud)
  return i1640
}

Deserializers["SoundData"] = function (request, data, root) {
  var i1642 = root || request.c( 'SoundData' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'clip')
  i1642.volume = i1643[2]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'clip')
  request.r(i1645[2], i1645[3], 0, i1644, 'outputAudioMixerGroup')
  i1644.playOnAwake = !!i1645[4]
  i1644.loop = !!i1645[5]
  i1644.time = i1645[6]
  i1644.volume = i1645[7]
  i1644.pitch = i1645[8]
  i1644.enabled = !!i1645[9]
  return i1644
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1646 = root || request.c( 'PlayerController' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'endPos')
  i1646.switchTrackTime = i1647[2]
  request.r(i1647[3], i1647[4], 0, i1646, 'trackRightTransform')
  request.r(i1647[5], i1647[6], 0, i1646, 'trackLeftTransform')
  i1646.startRight = !!i1647[7]
  request.r(i1647[8], i1647[9], 0, i1646, 'playerTransform')
  request.r(i1647[10], i1647[11], 0, i1646, 'playerVisual')
  request.r(i1647[12], i1647[13], 0, i1646, 'winPar')
  i1646.currentLevel = i1647[14]
  i1646.dragSmoothSpeed = i1647[15]
  i1646.moveCurve = new pc.AnimationCurve( { keys_flow: i1647[16] } )
  return i1646
}

Deserializers["PlayerVisual"] = function (request, data, root) {
  var i1648 = root || request.c( 'PlayerVisual' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'playerSpriteRenderer')
  request.r(i1649[2], i1649[3], 0, i1648, 'fakeShadowRenderer')
  var i1651 = i1649[4]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 2) {
  request.r(i1651[i + 0], i1651[i + 1], 2, i1650, '')
  }
  i1648.levelSprite = i1650
  request.r(i1649[5], i1649[6], 0, i1648, 'maxPowerPar')
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1655 = data
  i1654.mass = i1655[0]
  i1654.drag = i1655[1]
  i1654.angularDrag = i1655[2]
  i1654.useGravity = !!i1655[3]
  i1654.isKinematic = !!i1655[4]
  i1654.constraints = i1655[5]
  i1654.maxAngularVelocity = i1655[6]
  i1654.collisionDetectionMode = i1655[7]
  i1654.interpolation = i1655[8]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1657 = data
  i1656.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1657[0], i1656.main)
  i1656.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1657[1], i1656.colorBySpeed)
  i1656.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1657[2], i1656.colorOverLifetime)
  i1656.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1657[3], i1656.emission)
  i1656.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1657[4], i1656.rotationBySpeed)
  i1656.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1657[5], i1656.rotationOverLifetime)
  i1656.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1657[6], i1656.shape)
  i1656.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1657[7], i1656.sizeBySpeed)
  i1656.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1657[8], i1656.sizeOverLifetime)
  i1656.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1657[9], i1656.textureSheetAnimation)
  i1656.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1657[10], i1656.velocityOverLifetime)
  i1656.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1657[11], i1656.noise)
  i1656.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1657[12], i1656.inheritVelocity)
  i1656.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1657[13], i1656.forceOverLifetime)
  i1656.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1657[14], i1656.limitVelocityOverLifetime)
  i1656.useAutoRandomSeed = !!i1657[15]
  i1656.randomSeed = i1657[16]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1658 = root || new pc.ParticleSystemMain()
  var i1659 = data
  i1658.duration = i1659[0]
  i1658.loop = !!i1659[1]
  i1658.prewarm = !!i1659[2]
  i1658.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[3], i1658.startDelay)
  i1658.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[4], i1658.startLifetime)
  i1658.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[5], i1658.startSpeed)
  i1658.startSize3D = !!i1659[6]
  i1658.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[7], i1658.startSizeX)
  i1658.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[8], i1658.startSizeY)
  i1658.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[9], i1658.startSizeZ)
  i1658.startRotation3D = !!i1659[10]
  i1658.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[11], i1658.startRotationX)
  i1658.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[12], i1658.startRotationY)
  i1658.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[13], i1658.startRotationZ)
  i1658.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1659[14], i1658.startColor)
  i1658.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1659[15], i1658.gravityModifier)
  i1658.simulationSpace = i1659[16]
  request.r(i1659[17], i1659[18], 0, i1658, 'customSimulationSpace')
  i1658.simulationSpeed = i1659[19]
  i1658.useUnscaledTime = !!i1659[20]
  i1658.scalingMode = i1659[21]
  i1658.playOnAwake = !!i1659[22]
  i1658.maxParticles = i1659[23]
  i1658.emitterVelocityMode = i1659[24]
  i1658.stopAction = i1659[25]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1660 = root || new pc.MinMaxCurve()
  var i1661 = data
  i1660.mode = i1661[0]
  i1660.curveMin = new pc.AnimationCurve( { keys_flow: i1661[1] } )
  i1660.curveMax = new pc.AnimationCurve( { keys_flow: i1661[2] } )
  i1660.curveMultiplier = i1661[3]
  i1660.constantMin = i1661[4]
  i1660.constantMax = i1661[5]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1662 = root || new pc.MinMaxGradient()
  var i1663 = data
  i1662.mode = i1663[0]
  i1662.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1663[1], i1662.gradientMin)
  i1662.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1663[2], i1662.gradientMax)
  i1662.colorMin = new pc.Color(i1663[3], i1663[4], i1663[5], i1663[6])
  i1662.colorMax = new pc.Color(i1663[7], i1663[8], i1663[9], i1663[10])
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1665 = data
  i1664.mode = i1665[0]
  var i1667 = i1665[1]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1667[i + 0]) );
  }
  i1664.colorKeys = i1666
  var i1669 = i1665[2]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1669[i + 0]) );
  }
  i1664.alphaKeys = i1668
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1673 = data
  i1672.color = new pc.Color(i1673[0], i1673[1], i1673[2], i1673[3])
  i1672.time = i1673[4]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1677 = data
  i1676.alpha = i1677[0]
  i1676.time = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1678 = root || new pc.ParticleSystemColorBySpeed()
  var i1679 = data
  i1678.enabled = !!i1679[0]
  i1678.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1679[1], i1678.color)
  i1678.range = new pc.Vec2( i1679[2], i1679[3] )
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1680 = root || new pc.ParticleSystemColorOverLifetime()
  var i1681 = data
  i1680.enabled = !!i1681[0]
  i1680.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1681[1], i1680.color)
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1682 = root || new pc.ParticleSystemEmitter()
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[1], i1682.rateOverTime)
  i1682.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[2], i1682.rateOverDistance)
  var i1685 = i1683[3]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1685[i + 0]) );
  }
  i1682.bursts = i1684
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1688 = root || new pc.ParticleSystemBurst()
  var i1689 = data
  i1688.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[0], i1688.count)
  i1688.cycleCount = i1689[1]
  i1688.minCount = i1689[2]
  i1688.maxCount = i1689[3]
  i1688.repeatInterval = i1689[4]
  i1688.time = i1689[5]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1690 = root || new pc.ParticleSystemRotationBySpeed()
  var i1691 = data
  i1690.enabled = !!i1691[0]
  i1690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[1], i1690.x)
  i1690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[2], i1690.y)
  i1690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[3], i1690.z)
  i1690.separateAxes = !!i1691[4]
  i1690.range = new pc.Vec2( i1691[5], i1691[6] )
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1692 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1693 = data
  i1692.enabled = !!i1693[0]
  i1692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1693[1], i1692.x)
  i1692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1693[2], i1692.y)
  i1692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1693[3], i1692.z)
  i1692.separateAxes = !!i1693[4]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1694 = root || new pc.ParticleSystemShape()
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.shapeType = i1695[1]
  i1694.randomDirectionAmount = i1695[2]
  i1694.sphericalDirectionAmount = i1695[3]
  i1694.randomPositionAmount = i1695[4]
  i1694.alignToDirection = !!i1695[5]
  i1694.radius = i1695[6]
  i1694.radiusMode = i1695[7]
  i1694.radiusSpread = i1695[8]
  i1694.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1695[9], i1694.radiusSpeed)
  i1694.radiusThickness = i1695[10]
  i1694.angle = i1695[11]
  i1694.length = i1695[12]
  i1694.boxThickness = new pc.Vec3( i1695[13], i1695[14], i1695[15] )
  i1694.meshShapeType = i1695[16]
  request.r(i1695[17], i1695[18], 0, i1694, 'mesh')
  request.r(i1695[19], i1695[20], 0, i1694, 'meshRenderer')
  request.r(i1695[21], i1695[22], 0, i1694, 'skinnedMeshRenderer')
  i1694.useMeshMaterialIndex = !!i1695[23]
  i1694.meshMaterialIndex = i1695[24]
  i1694.useMeshColors = !!i1695[25]
  i1694.normalOffset = i1695[26]
  i1694.arc = i1695[27]
  i1694.arcMode = i1695[28]
  i1694.arcSpread = i1695[29]
  i1694.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1695[30], i1694.arcSpeed)
  i1694.donutRadius = i1695[31]
  i1694.position = new pc.Vec3( i1695[32], i1695[33], i1695[34] )
  i1694.rotation = new pc.Vec3( i1695[35], i1695[36], i1695[37] )
  i1694.scale = new pc.Vec3( i1695[38], i1695[39], i1695[40] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1696 = root || new pc.ParticleSystemSizeBySpeed()
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[1], i1696.x)
  i1696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[2], i1696.y)
  i1696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[3], i1696.z)
  i1696.separateAxes = !!i1697[4]
  i1696.range = new pc.Vec2( i1697[5], i1697[6] )
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1698 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[1], i1698.x)
  i1698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[2], i1698.y)
  i1698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[3], i1698.z)
  i1698.separateAxes = !!i1699[4]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1700 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1701 = data
  i1700.enabled = !!i1701[0]
  i1700.mode = i1701[1]
  i1700.animation = i1701[2]
  i1700.numTilesX = i1701[3]
  i1700.numTilesY = i1701[4]
  i1700.useRandomRow = !!i1701[5]
  i1700.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[6], i1700.frameOverTime)
  i1700.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[7], i1700.startFrame)
  i1700.cycleCount = i1701[8]
  i1700.rowIndex = i1701[9]
  i1700.flipU = i1701[10]
  i1700.flipV = i1701[11]
  i1700.spriteCount = i1701[12]
  var i1703 = i1701[13]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 2, i1702, '')
  }
  i1700.sprites = i1702
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[1], i1704.x)
  i1704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[2], i1704.y)
  i1704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[3], i1704.z)
  i1704.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[4], i1704.radial)
  i1704.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[5], i1704.speedModifier)
  i1704.space = i1705[6]
  i1704.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[7], i1704.orbitalX)
  i1704.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[8], i1704.orbitalY)
  i1704.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[9], i1704.orbitalZ)
  i1704.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[10], i1704.orbitalOffsetX)
  i1704.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[11], i1704.orbitalOffsetY)
  i1704.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[12], i1704.orbitalOffsetZ)
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemNoise()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.separateAxes = !!i1707[1]
  i1706.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[2], i1706.strengthX)
  i1706.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[3], i1706.strengthY)
  i1706.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[4], i1706.strengthZ)
  i1706.frequency = i1707[5]
  i1706.damping = !!i1707[6]
  i1706.octaveCount = i1707[7]
  i1706.octaveMultiplier = i1707[8]
  i1706.octaveScale = i1707[9]
  i1706.quality = i1707[10]
  i1706.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[11], i1706.scrollSpeed)
  i1706.scrollSpeedMultiplier = i1707[12]
  i1706.remapEnabled = !!i1707[13]
  i1706.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[14], i1706.remapX)
  i1706.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[15], i1706.remapY)
  i1706.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[16], i1706.remapZ)
  i1706.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[17], i1706.positionAmount)
  i1706.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[18], i1706.rotationAmount)
  i1706.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[19], i1706.sizeAmount)
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1708 = root || new pc.ParticleSystemInheritVelocity()
  var i1709 = data
  i1708.enabled = !!i1709[0]
  i1708.mode = i1709[1]
  i1708.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[2], i1708.curve)
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1710 = root || new pc.ParticleSystemForceOverLifetime()
  var i1711 = data
  i1710.enabled = !!i1711[0]
  i1710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[1], i1710.x)
  i1710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[2], i1710.y)
  i1710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[3], i1710.z)
  i1710.space = i1711[4]
  i1710.randomized = !!i1711[5]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1712 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1713 = data
  i1712.enabled = !!i1713[0]
  i1712.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[1], i1712.limit)
  i1712.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[2], i1712.limitX)
  i1712.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[3], i1712.limitY)
  i1712.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[4], i1712.limitZ)
  i1712.dampen = i1713[5]
  i1712.separateAxes = !!i1713[6]
  i1712.space = i1713[7]
  i1712.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[8], i1712.drag)
  i1712.multiplyDragByParticleSize = !!i1713[9]
  i1712.multiplyDragByParticleVelocity = !!i1713[10]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'mesh')
  i1714.meshCount = i1715[2]
  i1714.activeVertexStreamsCount = i1715[3]
  i1714.alignment = i1715[4]
  i1714.renderMode = i1715[5]
  i1714.sortMode = i1715[6]
  i1714.lengthScale = i1715[7]
  i1714.velocityScale = i1715[8]
  i1714.cameraVelocityScale = i1715[9]
  i1714.normalDirection = i1715[10]
  i1714.sortingFudge = i1715[11]
  i1714.minParticleSize = i1715[12]
  i1714.maxParticleSize = i1715[13]
  i1714.pivot = new pc.Vec3( i1715[14], i1715[15], i1715[16] )
  request.r(i1715[17], i1715[18], 0, i1714, 'trailMaterial')
  i1714.applyActiveColorSpace = !!i1715[19]
  i1714.enabled = !!i1715[20]
  request.r(i1715[21], i1715[22], 0, i1714, 'sharedMaterial')
  var i1717 = i1715[23]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 2) {
  request.r(i1717[i + 0], i1717[i + 1], 2, i1716, '')
  }
  i1714.sharedMaterials = i1716
  i1714.receiveShadows = !!i1715[24]
  i1714.shadowCastingMode = i1715[25]
  i1714.sortingLayerID = i1715[26]
  i1714.sortingOrder = i1715[27]
  i1714.lightmapIndex = i1715[28]
  i1714.lightmapSceneIndex = i1715[29]
  i1714.lightmapScaleOffset = new pc.Vec4( i1715[30], i1715[31], i1715[32], i1715[33] )
  i1714.lightProbeUsage = i1715[34]
  i1714.reflectionProbeUsage = i1715[35]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1719 = data
  i1718.aspect = i1719[0]
  i1718.orthographic = !!i1719[1]
  i1718.orthographicSize = i1719[2]
  i1718.backgroundColor = new pc.Color(i1719[3], i1719[4], i1719[5], i1719[6])
  i1718.nearClipPlane = i1719[7]
  i1718.farClipPlane = i1719[8]
  i1718.fieldOfView = i1719[9]
  i1718.depth = i1719[10]
  i1718.clearFlags = i1719[11]
  i1718.cullingMask = i1719[12]
  i1718.rect = i1719[13]
  request.r(i1719[14], i1719[15], 0, i1718, 'targetTexture')
  i1718.usePhysicalProperties = !!i1719[16]
  i1718.focalLength = i1719[17]
  i1718.sensorSize = new pc.Vec2( i1719[18], i1719[19] )
  i1718.lensShift = new pc.Vec2( i1719[20], i1719[21] )
  i1718.gateFit = i1719[22]
  i1718.commandBufferCount = i1719[23]
  i1718.cameraType = i1719[24]
  i1718.enabled = !!i1719[25]
  return i1718
}

Deserializers["MaterialUVScroller"] = function (request, data, root) {
  var i1720 = root || request.c( 'MaterialUVScroller' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'targetMaterial')
  i1720.scrollSpeed = new pc.Vec2( i1721[2], i1721[3] )
  return i1720
}

Deserializers["ChoiceBoardPlacer"] = function (request, data, root) {
  var i1722 = root || request.c( 'ChoiceBoardPlacer' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'choiceBoardHolderprefab')
  request.r(i1723[2], i1723[3], 0, i1722, 'startPos')
  request.r(i1723[4], i1723[5], 0, i1722, 'endPos')
  request.r(i1723[6], i1723[7], 0, i1722, 'choiceBoardPairData')
  i1722.spawnCount = i1723[8]
  i1722.spawnGenericByNumber = !!i1723[9]
  i1722.shufflePairsOrder = !!i1723[10]
  i1722.shuffleLeftRight = !!i1723[11]
  i1722.spawnOnStart = !!i1723[12]
  return i1722
}

Deserializers["BossController"] = function (request, data, root) {
  var i1724 = root || request.c( 'BossController' )
  var i1725 = data
  request.r(i1725[0], i1725[1], 0, i1724, 'bossSpriteRenderer')
  request.r(i1725[2], i1725[3], 0, i1724, 'characterVisual')
  request.r(i1725[4], i1725[5], 0, i1724, 'fightingCloud')
  request.r(i1725[6], i1725[7], 0, i1724, 'resultObject')
  request.r(i1725[8], i1725[9], 0, i1724, 'resultSpriteRenderer')
  request.r(i1725[10], i1725[11], 0, i1724, 'winSprite')
  request.r(i1725[12], i1725[13], 0, i1724, 'lossSprite')
  request.r(i1725[14], i1725[15], 0, i1724, 'extraWinObject')
  request.r(i1725[16], i1725[17], 0, i1724, 'winPanel')
  request.r(i1725[18], i1725[19], 0, i1724, 'losePanel')
  var i1727 = i1725[20]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 2, i1726, '')
  }
  i1724.extraObjectsToHide = i1726
  i1724.fightingCloudFx = i1725[21]
  i1724.winPanelFx = i1725[22]
  i1724.losePanelFx = i1725[23]
  i1724.delayAfterLastBoard = i1725[24]
  i1724.fightDuration = i1725[25]
  i1724.showResultDuration = i1725[26]
  i1724.currentPlayerLevel = i1725[27]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1731 = data
  i1730.ambientIntensity = i1731[0]
  i1730.reflectionIntensity = i1731[1]
  i1730.ambientMode = i1731[2]
  i1730.ambientLight = new pc.Color(i1731[3], i1731[4], i1731[5], i1731[6])
  i1730.ambientSkyColor = new pc.Color(i1731[7], i1731[8], i1731[9], i1731[10])
  i1730.ambientGroundColor = new pc.Color(i1731[11], i1731[12], i1731[13], i1731[14])
  i1730.ambientEquatorColor = new pc.Color(i1731[15], i1731[16], i1731[17], i1731[18])
  i1730.fogColor = new pc.Color(i1731[19], i1731[20], i1731[21], i1731[22])
  i1730.fogEndDistance = i1731[23]
  i1730.fogStartDistance = i1731[24]
  i1730.fogDensity = i1731[25]
  i1730.fog = !!i1731[26]
  request.r(i1731[27], i1731[28], 0, i1730, 'skybox')
  i1730.fogMode = i1731[29]
  var i1733 = i1731[30]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1733[i + 0]) );
  }
  i1730.lightmaps = i1732
  i1730.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1731[31], i1730.lightProbes)
  i1730.lightmapsMode = i1731[32]
  i1730.mixedBakeMode = i1731[33]
  i1730.environmentLightingMode = i1731[34]
  i1730.ambientProbe = new pc.SphericalHarmonicsL2(i1731[35])
  i1730.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1731[36])
  i1730.useReferenceAmbientProbe = !!i1731[37]
  request.r(i1731[38], i1731[39], 0, i1730, 'customReflection')
  request.r(i1731[40], i1731[41], 0, i1730, 'defaultReflection')
  i1730.defaultReflectionMode = i1731[42]
  i1730.defaultReflectionResolution = i1731[43]
  i1730.sunLightObjectId = i1731[44]
  i1730.pixelLightCount = i1731[45]
  i1730.defaultReflectionHDR = !!i1731[46]
  i1730.hasLightDataAsset = !!i1731[47]
  i1730.hasManualGenerate = !!i1731[48]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'lightmapColor')
  request.r(i1737[2], i1737[3], 0, i1736, 'lightmapDirection')
  request.r(i1737[4], i1737[5], 0, i1736, 'shadowMask')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1738 = root || new UnityEngine.LightProbes()
  var i1739 = data
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1747 = data
  var i1749 = i1747[0]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1749[i + 0]));
  }
  i1746.ShaderCompilationErrors = i1748
  i1746.name = i1747[1]
  i1746.guid = i1747[2]
  var i1751 = i1747[3]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( i1751[i + 0] );
  }
  i1746.shaderDefinedKeywords = i1750
  var i1753 = i1747[4]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1753[i + 0]) );
  }
  i1746.passes = i1752
  var i1755 = i1747[5]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1755[i + 0]) );
  }
  i1746.usePasses = i1754
  var i1757 = i1747[6]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1757[i + 0]) );
  }
  i1746.defaultParameterValues = i1756
  request.r(i1747[7], i1747[8], 0, i1746, 'unityFallbackShader')
  i1746.readDepth = !!i1747[9]
  i1746.hasDepthOnlyPass = !!i1747[10]
  i1746.isCreatedByShaderGraph = !!i1747[11]
  i1746.disableBatching = !!i1747[12]
  i1746.compiled = !!i1747[13]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1761 = data
  i1760.shaderName = i1761[0]
  i1760.errorMessage = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1766 = root || new pc.UnityShaderPass()
  var i1767 = data
  i1766.id = i1767[0]
  i1766.subShaderIndex = i1767[1]
  i1766.name = i1767[2]
  i1766.passType = i1767[3]
  i1766.grabPassTextureName = i1767[4]
  i1766.usePass = !!i1767[5]
  i1766.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[6], i1766.zTest)
  i1766.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[7], i1766.zWrite)
  i1766.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[8], i1766.culling)
  i1766.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1767[9], i1766.blending)
  i1766.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1767[10], i1766.alphaBlending)
  i1766.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[11], i1766.colorWriteMask)
  i1766.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[12], i1766.offsetUnits)
  i1766.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[13], i1766.offsetFactor)
  i1766.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[14], i1766.stencilRef)
  i1766.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[15], i1766.stencilReadMask)
  i1766.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1767[16], i1766.stencilWriteMask)
  i1766.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1767[17], i1766.stencilOp)
  i1766.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1767[18], i1766.stencilOpFront)
  i1766.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1767[19], i1766.stencilOpBack)
  var i1769 = i1767[20]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1769[i + 0]) );
  }
  i1766.tags = i1768
  var i1771 = i1767[21]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( i1771[i + 0] );
  }
  i1766.passDefinedKeywords = i1770
  var i1773 = i1767[22]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1773[i + 0]) );
  }
  i1766.passDefinedKeywordGroups = i1772
  var i1775 = i1767[23]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1775[i + 0]) );
  }
  i1766.variants = i1774
  var i1777 = i1767[24]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1777[i + 0]) );
  }
  i1766.excludedVariants = i1776
  i1766.hasDepthReader = !!i1767[25]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1779 = data
  i1778.val = i1779[0]
  i1778.name = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1781 = data
  i1780.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[0], i1780.src)
  i1780.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[1], i1780.dst)
  i1780.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[2], i1780.op)
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1783 = data
  i1782.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[0], i1782.pass)
  i1782.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[1], i1782.fail)
  i1782.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[2], i1782.zFail)
  i1782.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[3], i1782.comp)
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1787 = data
  i1786.name = i1787[0]
  i1786.value = i1787[1]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1791 = data
  var i1793 = i1791[0]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1790.keywords = i1792
  i1790.hasDiscard = !!i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1797 = data
  i1796.passId = i1797[0]
  i1796.subShaderIndex = i1797[1]
  var i1799 = i1797[2]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( i1799[i + 0] );
  }
  i1796.keywords = i1798
  i1796.vertexProgram = i1797[3]
  i1796.fragmentProgram = i1797[4]
  i1796.exportedForWebGl2 = !!i1797[5]
  i1796.readDepth = !!i1797[6]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'shader')
  i1802.pass = i1803[2]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.type = i1807[1]
  i1806.value = new pc.Vec4( i1807[2], i1807[3], i1807[4], i1807[5] )
  i1806.textureValue = i1807[6]
  i1806.shaderPropertyFlag = i1807[7]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1809 = data
  i1808.name = i1809[0]
  request.r(i1809[1], i1809[2], 0, i1808, 'texture')
  i1808.aabb = i1809[3]
  i1808.vertices = i1809[4]
  i1808.triangles = i1809[5]
  i1808.textureRect = UnityEngine.Rect.MinMaxRect(i1809[6], i1809[7], i1809[8], i1809[9])
  i1808.packedRect = UnityEngine.Rect.MinMaxRect(i1809[10], i1809[11], i1809[12], i1809[13])
  i1808.border = new pc.Vec4( i1809[14], i1809[15], i1809[16], i1809[17] )
  i1808.transparency = i1809[18]
  i1808.bounds = i1809[19]
  i1808.pixelsPerUnit = i1809[20]
  i1808.textureWidth = i1809[21]
  i1808.textureHeight = i1809[22]
  i1808.nativeSize = new pc.Vec2( i1809[23], i1809[24] )
  i1808.pivot = new pc.Vec2( i1809[25], i1809[26] )
  i1808.textureRectOffset = new pc.Vec2( i1809[27], i1809[28] )
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1811 = data
  i1810.name = i1811[0]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.bytes64 = i1813[1]
  i1812.data = i1813[2]
  return i1812
}

Deserializers["ChoiceBoardPairData"] = function (request, data, root) {
  var i1814 = root || request.c( 'ChoiceBoardPairData' )
  var i1815 = data
  var i1817 = i1815[0]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('ChoicePairData', i1817[i + 0]) );
  }
  i1814.ChoicePairDatas = i1816
  return i1814
}

Deserializers["ChoicePairData"] = function (request, data, root) {
  var i1820 = root || request.c( 'ChoicePairData' )
  var i1821 = data
  i1820.choiceData1 = request.d('ChoiceData', i1821[0], i1820.choiceData1)
  i1820.choiceData2 = request.d('ChoiceData', i1821[1], i1820.choiceData2)
  return i1820
}

Deserializers["ChoiceData"] = function (request, data, root) {
  var i1822 = root || request.c( 'ChoiceData' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'VisualSprite')
  i1822.ChoiceType = i1823[2]
  return i1822
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1824 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1825 = data
  i1824.useSafeMode = !!i1825[0]
  i1824.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1825[1], i1824.safeModeOptions)
  i1824.timeScale = i1825[2]
  i1824.unscaledTimeScale = i1825[3]
  i1824.useSmoothDeltaTime = !!i1825[4]
  i1824.maxSmoothUnscaledTime = i1825[5]
  i1824.rewindCallbackMode = i1825[6]
  i1824.showUnityEditorReport = !!i1825[7]
  i1824.logBehaviour = i1825[8]
  i1824.drawGizmos = !!i1825[9]
  i1824.defaultRecyclable = !!i1825[10]
  i1824.defaultAutoPlay = i1825[11]
  i1824.defaultUpdateType = i1825[12]
  i1824.defaultTimeScaleIndependent = !!i1825[13]
  i1824.defaultEaseType = i1825[14]
  i1824.defaultEaseOvershootOrAmplitude = i1825[15]
  i1824.defaultEasePeriod = i1825[16]
  i1824.defaultAutoKill = !!i1825[17]
  i1824.defaultLoopType = i1825[18]
  i1824.debugMode = !!i1825[19]
  i1824.debugStoreTargetId = !!i1825[20]
  i1824.showPreviewPanel = !!i1825[21]
  i1824.storeSettingsLocation = i1825[22]
  i1824.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1825[23], i1824.modules)
  i1824.createASMDEF = !!i1825[24]
  i1824.showPlayingTweens = !!i1825[25]
  i1824.showPausedTweens = !!i1825[26]
  return i1824
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1827 = data
  i1826.logBehaviour = i1827[0]
  i1826.nestedTweenFailureBehaviour = i1827[1]
  return i1826
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1829 = data
  i1828.showPanel = !!i1829[0]
  i1828.audioEnabled = !!i1829[1]
  i1828.physicsEnabled = !!i1829[2]
  i1828.physics2DEnabled = !!i1829[3]
  i1828.spriteEnabled = !!i1829[4]
  i1828.uiEnabled = !!i1829[5]
  i1828.uiToolkitEnabled = !!i1829[6]
  i1828.textMeshProEnabled = !!i1829[7]
  i1828.tk2DEnabled = !!i1829[8]
  i1828.deAudioEnabled = !!i1829[9]
  i1828.deUnityExtendedEnabled = !!i1829[10]
  i1828.epoOutlineEnabled = !!i1829[11]
  return i1828
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_Settings' )
  var i1831 = data
  i1830.assetVersion = i1831[0]
  i1830.m_TextWrappingMode = i1831[1]
  i1830.m_enableKerning = !!i1831[2]
  var i1833 = i1831[3]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(i1833[i + 0]);
  }
  i1830.m_ActiveFontFeatures = i1832
  i1830.m_enableExtraPadding = !!i1831[4]
  i1830.m_enableTintAllSprites = !!i1831[5]
  i1830.m_enableParseEscapeCharacters = !!i1831[6]
  i1830.m_EnableRaycastTarget = !!i1831[7]
  i1830.m_GetFontFeaturesAtRuntime = !!i1831[8]
  i1830.m_missingGlyphCharacter = i1831[9]
  i1830.m_ClearDynamicDataOnBuild = !!i1831[10]
  i1830.m_warningsDisabled = !!i1831[11]
  request.r(i1831[12], i1831[13], 0, i1830, 'm_defaultFontAsset')
  i1830.m_defaultFontAssetPath = i1831[14]
  i1830.m_defaultFontSize = i1831[15]
  i1830.m_defaultAutoSizeMinRatio = i1831[16]
  i1830.m_defaultAutoSizeMaxRatio = i1831[17]
  i1830.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1831[18], i1831[19] )
  i1830.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1831[20], i1831[21] )
  i1830.m_autoSizeTextContainer = !!i1831[22]
  i1830.m_IsTextObjectScaleStatic = !!i1831[23]
  var i1835 = i1831[24]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1835.length; i += 2) {
  request.r(i1835[i + 0], i1835[i + 1], 1, i1834, '')
  }
  i1830.m_fallbackFontAssets = i1834
  i1830.m_matchMaterialPreset = !!i1831[25]
  i1830.m_HideSubTextObjects = !!i1831[26]
  request.r(i1831[27], i1831[28], 0, i1830, 'm_defaultSpriteAsset')
  i1830.m_defaultSpriteAssetPath = i1831[29]
  i1830.m_enableEmojiSupport = !!i1831[30]
  i1830.m_MissingCharacterSpriteUnicode = i1831[31]
  var i1837 = i1831[32]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1837.length; i += 2) {
  request.r(i1837[i + 0], i1837[i + 1], 1, i1836, '')
  }
  i1830.m_EmojiFallbackTextAssets = i1836
  i1830.m_defaultColorGradientPresetsPath = i1831[33]
  request.r(i1831[34], i1831[35], 0, i1830, 'm_defaultStyleSheet')
  i1830.m_StyleSheetsResourcePath = i1831[36]
  request.r(i1831[37], i1831[38], 0, i1830, 'm_leadingCharacters')
  request.r(i1831[39], i1831[40], 0, i1830, 'm_followingCharacters')
  i1830.m_UseModernHangulLineBreakingRules = !!i1831[41]
  return i1830
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'spriteSheet')
  var i1847 = i1845[2]
  var i1846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.add(request.d('TMPro.TMP_Sprite', i1847[i + 0]));
  }
  i1844.spriteInfoList = i1846
  var i1849 = i1845[3]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 1, i1848, '')
  }
  i1844.fallbackSpriteAssets = i1848
  var i1851 = i1845[4]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.add(request.d('TMPro.TMP_SpriteCharacter', i1851[i + 0]));
  }
  i1844.m_SpriteCharacterTable = i1850
  var i1853 = i1845[5]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.add(request.d('TMPro.TMP_SpriteGlyph', i1853[i + 0]));
  }
  i1844.m_GlyphTable = i1852
  i1844.m_Version = i1845[6]
  i1844.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1845[7], i1844.m_FaceInfo)
  request.r(i1845[8], i1845[9], 0, i1844, 'm_Material')
  return i1844
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1856 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.hashCode = i1857[1]
  i1856.unicode = i1857[2]
  i1856.pivot = new pc.Vec2( i1857[3], i1857[4] )
  request.r(i1857[5], i1857[6], 0, i1856, 'sprite')
  i1856.id = i1857[7]
  i1856.x = i1857[8]
  i1856.y = i1857[9]
  i1856.width = i1857[10]
  i1856.height = i1857[11]
  i1856.xOffset = i1857[12]
  i1856.yOffset = i1857[13]
  i1856.xAdvance = i1857[14]
  i1856.scale = i1857[15]
  return i1856
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1863 = data
  i1862.m_Name = i1863[0]
  i1862.m_ElementType = i1863[1]
  i1862.m_Unicode = i1863[2]
  i1862.m_GlyphIndex = i1863[3]
  i1862.m_Scale = i1863[4]
  return i1862
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1866 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'sprite')
  i1866.m_Index = i1867[2]
  i1866.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1867[3], i1866.m_Metrics)
  i1866.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1867[4], i1866.m_GlyphRect)
  i1866.m_Scale = i1867[5]
  i1866.m_AtlasIndex = i1867[6]
  i1866.m_ClassDefinitionType = i1867[7]
  return i1866
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1869 = data
  i1868.m_Width = i1869[0]
  i1868.m_Height = i1869[1]
  i1868.m_HorizontalBearingX = i1869[2]
  i1868.m_HorizontalBearingY = i1869[3]
  i1868.m_HorizontalAdvance = i1869[4]
  return i1868
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1871 = data
  i1870.m_X = i1871[0]
  i1870.m_Y = i1871[1]
  i1870.m_Width = i1871[2]
  i1870.m_Height = i1871[3]
  return i1870
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1873 = data
  i1872.m_FaceIndex = i1873[0]
  i1872.m_FamilyName = i1873[1]
  i1872.m_StyleName = i1873[2]
  i1872.m_PointSize = i1873[3]
  i1872.m_Scale = i1873[4]
  i1872.m_UnitsPerEM = i1873[5]
  i1872.m_LineHeight = i1873[6]
  i1872.m_AscentLine = i1873[7]
  i1872.m_CapLine = i1873[8]
  i1872.m_MeanLine = i1873[9]
  i1872.m_Baseline = i1873[10]
  i1872.m_DescentLine = i1873[11]
  i1872.m_SuperscriptOffset = i1873[12]
  i1872.m_SuperscriptSize = i1873[13]
  i1872.m_SubscriptOffset = i1873[14]
  i1872.m_SubscriptSize = i1873[15]
  i1872.m_UnderlineOffset = i1873[16]
  i1872.m_UnderlineThickness = i1873[17]
  i1872.m_StrikethroughOffset = i1873[18]
  i1872.m_StrikethroughThickness = i1873[19]
  i1872.m_TabWidth = i1873[20]
  return i1872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('TMPro.TMP_Style', i1877[i + 0]));
  }
  i1874.m_StyleList = i1876
  return i1874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1880 = root || request.c( 'TMPro.TMP_Style' )
  var i1881 = data
  i1880.m_Name = i1881[0]
  i1880.m_HashCode = i1881[1]
  i1880.m_OpeningDefinition = i1881[2]
  i1880.m_ClosingDefinition = i1881[3]
  i1880.m_OpeningTagArray = i1881[4]
  i1880.m_ClosingTagArray = i1881[5]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1885[i + 0]) );
  }
  i1882.files = i1884
  i1882.componentToPrefabIds = i1883[1]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1889 = data
  i1888.path = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'unityObject')
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1893[i + 0]) );
  }
  i1890.scriptsExecutionOrder = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1895[i + 0]) );
  }
  i1890.sortingLayers = i1894
  var i1897 = i1891[2]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1897[i + 0]) );
  }
  i1890.cullingLayers = i1896
  i1890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1891[3], i1890.timeSettings)
  i1890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1891[4], i1890.physicsSettings)
  i1890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1891[5], i1890.physics2DSettings)
  i1890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1891[6], i1890.qualitySettings)
  i1890.enableRealtimeShadows = !!i1891[7]
  i1890.enableAutoInstancing = !!i1891[8]
  i1890.enableStaticBatching = !!i1891[9]
  i1890.enableDynamicBatching = !!i1891[10]
  i1890.lightmapEncodingQuality = i1891[11]
  i1890.desiredColorSpace = i1891[12]
  var i1899 = i1891[13]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( i1899[i + 0] );
  }
  i1890.allTags = i1898
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.value = i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1907 = data
  i1906.id = i1907[0]
  i1906.name = i1907[1]
  i1906.value = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1911 = data
  i1910.id = i1911[0]
  i1910.name = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1913 = data
  i1912.fixedDeltaTime = i1913[0]
  i1912.maximumDeltaTime = i1913[1]
  i1912.timeScale = i1913[2]
  i1912.maximumParticleTimestep = i1913[3]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1915 = data
  i1914.gravity = new pc.Vec3( i1915[0], i1915[1], i1915[2] )
  i1914.defaultSolverIterations = i1915[3]
  i1914.bounceThreshold = i1915[4]
  i1914.autoSyncTransforms = !!i1915[5]
  i1914.autoSimulation = !!i1915[6]
  var i1917 = i1915[7]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1917[i + 0]) );
  }
  i1914.collisionMatrix = i1916
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1921 = data
  i1920.enabled = !!i1921[0]
  i1920.layerId = i1921[1]
  i1920.otherLayerId = i1921[2]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'material')
  i1922.gravity = new pc.Vec2( i1923[2], i1923[3] )
  i1922.positionIterations = i1923[4]
  i1922.velocityIterations = i1923[5]
  i1922.velocityThreshold = i1923[6]
  i1922.maxLinearCorrection = i1923[7]
  i1922.maxAngularCorrection = i1923[8]
  i1922.maxTranslationSpeed = i1923[9]
  i1922.maxRotationSpeed = i1923[10]
  i1922.baumgarteScale = i1923[11]
  i1922.baumgarteTOIScale = i1923[12]
  i1922.timeToSleep = i1923[13]
  i1922.linearSleepTolerance = i1923[14]
  i1922.angularSleepTolerance = i1923[15]
  i1922.defaultContactOffset = i1923[16]
  i1922.autoSimulation = !!i1923[17]
  i1922.queriesHitTriggers = !!i1923[18]
  i1922.queriesStartInColliders = !!i1923[19]
  i1922.callbacksOnDisable = !!i1923[20]
  i1922.reuseCollisionCallbacks = !!i1923[21]
  i1922.autoSyncTransforms = !!i1923[22]
  var i1925 = i1923[23]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1925[i + 0]) );
  }
  i1922.collisionMatrix = i1924
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.layerId = i1929[1]
  i1928.otherLayerId = i1929[2]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1931 = data
  var i1933 = i1931[0]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1933[i + 0]) );
  }
  i1930.qualityLevels = i1932
  var i1935 = i1931[1]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( i1935[i + 0] );
  }
  i1930.names = i1934
  i1930.shadows = i1931[2]
  i1930.anisotropicFiltering = i1931[3]
  i1930.antiAliasing = i1931[4]
  i1930.lodBias = i1931[5]
  i1930.shadowCascades = i1931[6]
  i1930.shadowDistance = i1931[7]
  i1930.shadowmaskMode = i1931[8]
  i1930.shadowProjection = i1931[9]
  i1930.shadowResolution = i1931[10]
  i1930.softParticles = !!i1931[11]
  i1930.softVegetation = !!i1931[12]
  i1930.activeColorSpace = i1931[13]
  i1930.desiredColorSpace = i1931[14]
  i1930.masterTextureLimit = i1931[15]
  i1930.maxQueuedFrames = i1931[16]
  i1930.particleRaycastBudget = i1931[17]
  i1930.pixelLightCount = i1931[18]
  i1930.realtimeReflectionProbes = !!i1931[19]
  i1930.shadowCascade2Split = i1931[20]
  i1930.shadowCascade4Split = new pc.Vec3( i1931[21], i1931[22], i1931[23] )
  i1930.streamingMipmapsActive = !!i1931[24]
  i1930.vSyncCount = i1931[25]
  i1930.asyncUploadBufferSize = i1931[26]
  i1930.asyncUploadTimeSlice = i1931[27]
  i1930.billboardsFaceCameraPosition = !!i1931[28]
  i1930.shadowNearPlaneOffset = i1931[29]
  i1930.streamingMipmapsMemoryBudget = i1931[30]
  i1930.maximumLODLevel = i1931[31]
  i1930.streamingMipmapsAddAllCameras = !!i1931[32]
  i1930.streamingMipmapsMaxLevelReduction = i1931[33]
  i1930.streamingMipmapsRenderersPerFrame = i1931[34]
  i1930.resolutionScalingFixedDPIFactor = i1931[35]
  i1930.streamingMipmapsMaxFileIORequests = i1931[36]
  i1930.currentQualityLevel = i1931[37]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1941 = data
  i1940.weight = i1941[0]
  i1940.vertices = i1941[1]
  i1940.normals = i1941[2]
  i1940.tangents = i1941[3]
  return i1940
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_ObjectArgument')
  i1942.m_ObjectArgumentAssemblyTypeName = i1943[2]
  i1942.m_IntArgument = i1943[3]
  i1942.m_FloatArgument = i1943[4]
  i1942.m_StringArgument = i1943[5]
  i1942.m_BoolArgument = !!i1943[6]
  return i1942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[45],"68":[43],"69":[43],"70":[43],"71":[43],"72":[43],"73":[43],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[45],"89":[33],"90":[91],"92":[91],"12":[11],"93":[29],"94":[12],"95":[11],"96":[33,11],"97":[11,16],"98":[11],"99":[16,11],"100":[33],"101":[16,11],"102":[11],"103":[104],"105":[104],"106":[104],"107":[11],"108":[11],"15":[12],"17":[16,11],"109":[11],"14":[12],"110":[11],"111":[11],"18":[11],"112":[11],"113":[11],"114":[11],"115":[11],"116":[11],"117":[11],"27":[16,11],"118":[11],"119":[11],"120":[11],"21":[11],"121":[16,11],"122":[11],"123":[29],"124":[29],"30":[29],"125":[29],"126":[45],"127":[45]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","ChoiceBoardHolder","ChoiceBoard","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.HorizontalLayoutGroup","UICheckBoxHolder","UICheckBox","UnityEngine.UI.Slider","UIProgressBar","UITutorial","UnityEngine.GameObject","UIGuidingMove","UIPulse","UnityEngine.UI.RawImage","ImageScroller","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","GameManager","InputManager","UIManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayerController","UnityEngine.ParticleSystem","PlayerVisual","UnityEngine.Rigidbody","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","MaterialUVScroller","ChoiceBoardPlacer","ChoiceBoardPairData","BossController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_MiniSoccer3D";

Deserializers.lunaInitializationTime = "07/29/2026 09:38:00";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "879e9061-c34b-4405-a264-ee27913e8f91";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

