if ( TRACE ) { TRACE( JSON.parse( '["AppLovinAnalytics#Track","BossController#init","BossController#Start","BossController#Update","BossController#OnDestroy","BossController#OnLastBoardPassed","BossController#OnGameEnded","BossController#StartBossSequence","ChoiceBoard#ChoiceType#get","ChoiceBoard#VisualRender#get","ChoiceBoard#init","ChoiceBoard#Awake","ChoiceBoard#OnValidate","ChoiceBoard#UpdateBorderVisual","ChoiceBoard#AssignVisualData","ChoiceBoard#SetChoiceBoardType","ChoiceBoard#AssignData","ChoiceBoard#PlayChooseSequence","ChoiceBoardHolder#ApplyBoardData","ChoiceBoardHolder#Awake","ChoiceBoardHolder#PickBoard","ChoiceBoardHolder#GetNearestBoard","ChoiceBoardHolder#OnTriggerEnter","ChoiceBoardPlacer#SpawnedCount#get","ChoiceBoardPlacer#init","ChoiceBoardPlacer#Start","ChoiceBoardPlacer#ClearExisting","ChoiceBoardPlacer#Spawn","ChoiceBoardPlacer#ShuffleArray","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","FxAudio#GetSoundData","GameEndUI#init","GameEndUI#Start","GameEndUI#OnDestroy","GameEndUI#OnGameEnded","GameEndUI#ToStoreButtonClicked","GameManager#IsGamePause#get","GameManager#CheckWinCondition","GameManager#PauseGame","GameManager#UnPauseGame","GameManager#GotoStore","GameManager#MaxLevel#get","GameManager#WinLevel#get","GameManager#TotalMoveTime#get","GameManager#CurrentPlayerLevel#get","GameManager#init","GameManager#Update","GameManager#Awake","GameManager#Start","GameManager#OnClick_GotoStore","GameManager#GoToStore","GameManager#OnGameEnd","GameManager#OnCharacterReachedEnd","ImageScroller#init","ImageScroller#Awake","ImageScroller#Update","InputManager#init","InputManager#Awake","InputManager#Update","InputManager#HandleInput","InputManager#HandleMouseInput","InputManager#HandleTouchInput","InputManager#StartSwipe","InputManager#EndSwipe","InputManager#GetSwipeDirection","MaterialUVScroller#init","MaterialUVScroller#Awake","MaterialUVScroller#Update","PlayerController#totalMoveTime#get","PlayerController#CurrentLevel#get","PlayerController#init","PlayerController#UpgradePlayer","PlayerController#Start","PlayerController#StopMoving","PlayerController#OnGameEnd","PlayerController#OnDestroy","PlayerController#OnGameStarted","PlayerController#StartMoving","PlayerController#OnDrag","PlayerController#OnDragEnd","PlayerController#SwitchTrack","PlayerController#OnSwipe","PlayerVisual#init","PlayerVisual#Awake","PlayerVisual#InitScale","PlayerVisual#GetScaleMultiplierForLevel","PlayerVisual#Start","PlayerVisual#OnDestroy","PlayerVisual#OnGameStart","PlayerVisual#AssingPlayerVisual","PlayerVisual#UpdateVisualBylevel","PlayerVisual#StartBouncing","PlayerVisual#ClearPlayerVisual","PlayerVisual#SetVisualEnable","Ply_Singleton$1#init","Ply_Singleton$1#Awake","Ply_Pool.PoolAmount#getDefaultValue","Ply_Pool.PoolAmount#ctor","Ply_Pool.PoolAmount#getHashCode","Ply_Pool.PoolAmount#equals","Ply_Pool.PoolAmount#$clone","ProgressTrackingManager#init","ProgressTrackingManager#Awake","ProgressTrackingManager#Start","ProgressTrackingManager#OnDestroy","ProgressTrackingManager#AddProgress","ProgressTrackingManager#UpdateGameProgress","ProgressTrackingManager#OnGameEnded","ProgressTrackingManager#GetDynamicMaxScore","RonaldoPenalty.PenaltyBallController#init","RonaldoPenalty.PenaltyBallController#Awake","RonaldoPenalty.PenaltyBallController#SetVShapeMarkers","RonaldoPenalty.PenaltyBallController#SetGoalCenter","RonaldoPenalty.PenaltyBallController#ResetBall","RonaldoPenalty.PenaltyBallController#Shoot","RonaldoPenalty.PenaltyBallController#CalculateVShapeTargetByX","RonaldoPenalty.PenaltyBallController#FlyTrajectory","RonaldoPenalty.PenaltyBallController#FlyIntoGoalUntilHit","RonaldoPenalty.PenaltyBallController#FlyOutOfBounds","RonaldoPenalty.PenaltyBallController#OnTriggerEnter","RonaldoPenalty.PenaltyBallController#OnCollisionEnter","RonaldoPenalty.PenaltyBallController#HandleCollision","RonaldoPenalty.PenaltyBallController#LogVelocityFramesForDebug","RonaldoPenalty.PenaltyBallController#ApplyGoalPhysics","RonaldoPenalty.PenaltyBallController#OnDrawGizmosSelected","RonaldoPenalty.PenaltyDefenderAI#init","RonaldoPenalty.PenaltyDefenderAI#Awake","RonaldoPenalty.PenaltyDefenderAI#SetBounds","RonaldoPenalty.PenaltyDefenderAI#SetSpeed","RonaldoPenalty.PenaltyDefenderAI#Activate","RonaldoPenalty.PenaltyDefenderAI#Deactivate","RonaldoPenalty.PenaltyDefenderAI#ResetPosition","RonaldoPenalty.PenaltyDefenderAI#CalculateCurrentT","RonaldoPenalty.PenaltyDefenderAI#SetupRound","RonaldoPenalty.PenaltyDefenderAI#Update","RonaldoPenalty.PenaltyDefenderAI#OnDrawGizmosSelected","RonaldoPenalty.PenaltyGameManager#init","RonaldoPenalty.PenaltyGameManager#SetupDependencies","RonaldoPenalty.PenaltyGameManager#Awake","RonaldoPenalty.PenaltyGameManager#Start","RonaldoPenalty.PenaltyGameManager#ResolveUIManager","RonaldoPenalty.PenaltyGameManager#InitGameFlow","RonaldoPenalty.PenaltyGameManager#Update","RonaldoPenalty.PenaltyGameManager#StartAiming","RonaldoPenalty.PenaltyGameManager#StartRound","RonaldoPenalty.PenaltyGameManager#ExecuteShot","RonaldoPenalty.PenaltyGameManager#ShootBallAfterDelay","RonaldoPenalty.PenaltyGameManager#TrackRoundProgress","RonaldoPenalty.PenaltyGameManager#HandleGoal","RonaldoPenalty.PenaltyGameManager#HandleMiss","RonaldoPenalty.PenaltyGameManager#NextRoundRoutine","RonaldoPenalty.PenaltyGameManager#EndGameEvaluationRoutine","RonaldoPenalty.PenaltyGameManager#ResetToGameplayInitialState","RonaldoPenalty.PenaltyGameManager#RestartGame","RonaldoPenalty.PenaltyGameManager#GotoStore","RonaldoPenalty.PenaltyGameManager#GoToStore","RonaldoPenalty.PenaltyGoalkeeperAI#init","RonaldoPenalty.PenaltyGoalkeeperAI#Awake","RonaldoPenalty.PenaltyGoalkeeperAI#SetBounds","RonaldoPenalty.PenaltyGoalkeeperAI#SetupRound","RonaldoPenalty.PenaltyGoalkeeperAI#StopPatrol","RonaldoPenalty.PenaltyGoalkeeperAI#Update","RonaldoPenalty.PenaltyGoalkeeperAI#OnDrawGizmosSelected","RonaldoPenalty.PenaltyPlayerAnimator#init","RonaldoPenalty.PenaltyPlayerAnimator#Awake","RonaldoPenalty.PenaltyPlayerAnimator#Start","RonaldoPenalty.PenaltyPlayerAnimator#PlayIdle","RonaldoPenalty.PenaltyPlayerAnimator#PlayKick","RonaldoPenalty.PenaltyPlayerAnimator#ReturnToIdleRoutine","RonaldoPenalty.PenaltyPlayerAnimator#PlayCelebrate","RonaldoPenalty.PenaltyPlayerAnimator#PlayDisappointed","RonaldoPenalty.PenaltyTargetMover#init","RonaldoPenalty.PenaltyTargetMover#Awake","RonaldoPenalty.PenaltyTargetMover#SetBallTransform","RonaldoPenalty.PenaltyTargetMover#SetupAimLineSprite","RonaldoPenalty.PenaltyTargetMover#CreateDashedSprite","RonaldoPenalty.PenaltyTargetMover#ApplySortingOrder","RonaldoPenalty.PenaltyTargetMover#SetBounds","RonaldoPenalty.PenaltyTargetMover#SetSpeed","RonaldoPenalty.PenaltyTargetMover#StartMoving","RonaldoPenalty.PenaltyTargetMover#StopMoving","RonaldoPenalty.PenaltyTargetMover#Hide","RonaldoPenalty.PenaltyTargetMover#Update","RonaldoPenalty.PenaltyTargetMover#GetCurrentPosition","RonaldoPenalty.PenaltyTargetMover#GetNormalizedT","RonaldoPenalty.PenaltyTargetMover#OnDrawGizmosSelected","RonaldoPenalty.PenaltyUIManager#IconEmpty#get","RonaldoPenalty.PenaltyUIManager#IconCheck#get","RonaldoPenalty.PenaltyUIManager#IconCross#get","RonaldoPenalty.PenaltyUIManager#HasValidSprites#get","RonaldoPenalty.PenaltyUIManager#init","RonaldoPenalty.PenaltyUIManager#Awake","RonaldoPenalty.PenaltyUIManager#Start","RonaldoPenalty.PenaltyUIManager#AutoFindReferences","RonaldoPenalty.PenaltyUIManager#CacheInitialColors","RonaldoPenalty.PenaltyUIManager#SetupReferences","RonaldoPenalty.PenaltyUIManager#ResetUI","RonaldoPenalty.PenaltyUIManager#SetPromptVisible","RonaldoPenalty.PenaltyUIManager#UpdateRoundResult","RonaldoPenalty.PenaltyUIManager#ShowWinEndcard","RonaldoPenalty.PenaltyUIManager#ShowLoseScreen","RonaldoPenalty.PenaltyUIManager#SetObjectsActive","RonaldoPenalty.PenaltyUIManager#LoseRoutine","RonaldoPenalty.PenaltyUIManager#Update","RonaldoPenalty.PenaltyUIManager#GotoStore","RonaldoPenalty.PenaltyUIManager#GoToStore","RonaldoPenalty.PenaltyUIManager#OnClick_GotoStore","SoundData#init","UICheckBox#Awake","UICheckBox#ResetIcon","UICheckBox#ChangeIcon","UICheckBoxHolder#Start","UICheckBoxHolder#OnDestroy","UICheckBoxHolder#OnGameEnded","UICheckBoxHolder#OnCharacterChoose","UIGuidingMove#init","UIGuidingMove#Awake","UIGuidingMove#OnEnable","UIGuidingMove#OnDisable","UIGuidingMove#KillTween","UIGuidingMove#ResetSequence","UIGuidingMove#PlaySequence","UIManager#Awake","UIProgressBar#Start","UIProgressBar#OnDestroy","UIProgressBar#OnCharacterStartMove","UIProgressBar#OnGameEnded","UIPulse#init","UIPulse#Awake","UIPulse#OnEnable","UIPulse#OnDisable","UITutorial#Start","UITutorial#OnDestroy","UITutorial#OnGameEnded","UITutorial#OnClicked","UITutorial#OnGameStarted","Yielders#EndOfFrame#get","Yielders#FixedUpdate#get","Yielders#init","Yielders#Get","Ply_Pool#inherits","Ply_Pool#init","Ply_Pool#Awake","Ply_Pool#OnInit","Ply_Pool#Spawn$1","Ply_Pool#Spawn","Ply_Pool#Despawn","Ply_Pool#GetPrefab","Ply_SoundManager#inherits","Ply_SoundManager#Instance#get","Ply_SoundManager#init","Ply_SoundManager#Awake","Ply_SoundManager#EnsureAudioListener","Ply_SoundManager#Start","Ply_SoundManager#Update","Ply_SoundManager#UpdateBGMState","Ply_SoundManager#PlayFx","Ply_SoundManager#PlaySequentialSounds","Ply_SoundManager#PlaySequentialSoundsRoutine","Ply_SoundManager#StopBGM","Ply_SoundManager#Mute","Ply_SoundManager#PlayClip","Ply_SoundManager#PlayLoopFx","Ply_SoundManager#StopLoopFx"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ALEvent start.*/
    Bridge.define("ALEvent", {
        $kind: 6,
        statics: {
            fields: {
                LOADING: 0,
                LOADED: 1,
                DISPLAYED: 2,
                CHALLENGE_STARTED: 3,
                CHALLENGE_FAILED: 4,
                CHALLENGE_RETRY: 5,
                CHALLENGE_PASS_25: 6,
                CHALLENGE_PASS_50: 7,
                CHALLENGE_PASS_75: 8,
                CHALLENGE_SOLVED: 9,
                CTA_CLICKED: 10,
                ENDCARD_SHOWN: 11
            }
        }
    });
    /*ALEvent end.*/

    /*AppLovinAnalytics start.*/
    Bridge.define("AppLovinAnalytics", {
        statics: {
            methods: {
                /*AppLovinAnalytics.Track:static start.*/
                Track: function (evt) {
if ( TRACE ) { TRACE( "AppLovinAnalytics#Track", this ); }

                    UnityEngine.Debug.Log$1("[ALPlayableEvent] " + System.Enum.toString(ALEvent, evt));
                },
                /*AppLovinAnalytics.Track:static end.*/


            }
        }
    });
    /*AppLovinAnalytics end.*/

    /*BossController start.*/
    Bridge.define("BossController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bossSpriteRenderer: null,
            characterVisual: null,
            fightingCloud: null,
            resultObject: null,
            resultSpriteRenderer: null,
            winSprite: null,
            lossSprite: null,
            extraWinObject: null,
            winPanel: null,
            losePanel: null,
            objectsToHideOnWin: null,
            objectsToHideOnLose: null,
            extraObjectsToHide: null,
            fightingCloudFx: 0,
            winPanelFx: 0,
            losePanelFx: 0,
            delayAfterLastBoard: 0,
            fightDuration: 0,
            showResultDuration: 0,
            currentPlayer: null,
            currentPlayerLevel: 0,
            bossSeq: null,
            isSequenceStarted: false,
            canClickToStore: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BossController#init", this ); }

                this.fightingCloudFx = FxType.FightingCloud;
                this.winPanelFx = FxType.PlayerWin;
                this.losePanelFx = FxType.PlayerLoose;
                this.delayAfterLastBoard = 1.5;
                this.fightDuration = 3.0;
                this.showResultDuration = 2.0;
                this.currentPlayerLevel = 1;
            }
        },
        methods: {
            /*BossController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BossController#Start", this ); }

                this.canClickToStore = false;
                if (UnityEngine.GameObject.op_Inequality(this.fightingCloud, null)) {
                    this.fightingCloud.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.resultObject, null)) {
                    this.resultObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.extraWinObject, null)) {
                    this.extraWinObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.winPanel, null)) {
                    this.winPanel.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                    this.losePanel.SetActive(false);
                }
                ChoiceBoardHolder.OnLastBoardPassed = Bridge.fn.combine(ChoiceBoardHolder.OnLastBoardPassed, Bridge.fn.cacheBind(this, this.OnLastBoardPassed));
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*BossController.Start end.*/

            /*BossController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BossController#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentPlayer, null)) {
                    this.currentPlayerLevel = this.currentPlayer.CurrentLevel;
                }
                if (this.canClickToStore && (UnityEngine.Input.GetMouseButtonDown(0) || (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began))) {
                    GameManager.GotoStore();
                }
            },
            /*BossController.Update end.*/

            /*BossController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "BossController#OnDestroy", this ); }

                ChoiceBoardHolder.OnLastBoardPassed = Bridge.fn.remove(ChoiceBoardHolder.OnLastBoardPassed, Bridge.fn.cacheBind(this, this.OnLastBoardPassed));
                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                this.bossSeq != null ? DG.Tweening.TweenExtensions.Kill(this.bossSeq) : null;
            },
            /*BossController.OnDestroy end.*/

            /*BossController.OnLastBoardPassed start.*/
            OnLastBoardPassed: function (player) {
if ( TRACE ) { TRACE( "BossController#OnLastBoardPassed", this ); }

                if (!this.isSequenceStarted && !(this.delayAfterLastBoard < 0.0)) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(player, null)) {
                        this.currentPlayer = player;
                    }
                    var isWin = GameManager.CheckWinCondition((!(UnityEngine.MonoBehaviour.op_Inequality(this.currentPlayer, null))) ? 1 : this.currentPlayer.CurrentLevel);
                    this.StartBossSequence(isWin);
                }
            },
            /*BossController.OnLastBoardPassed end.*/

            /*BossController.OnGameEnded start.*/
            OnGameEnded: function (isWin) {
if ( TRACE ) { TRACE( "BossController#OnGameEnded", this ); }

                if (!this.isSequenceStarted) {
                    this.StartBossSequence(isWin);
                }
            },
            /*BossController.OnGameEnded end.*/

            /*BossController.StartBossSequence start.*/
            StartBossSequence: function (isWin) {
if ( TRACE ) { TRACE( "BossController#StartBossSequence", this ); }

                if (this.isSequenceStarted) {
                    return;
                }
                this.isSequenceStarted = true;
                this.bossSeq != null ? DG.Tweening.TweenExtensions.Kill(this.bossSeq) : null;
                this.bossSeq = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Sequence, this.bossSeq, true);
                if (this.delayAfterLastBoard > 0.0) {
                    DG.Tweening.TweenSettingsExtensions.AppendInterval(this.bossSeq, this.delayAfterLastBoard);
                }
                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.bossSeq, Bridge.fn.bind(this, function () {
                    var $t;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.currentPlayer, null)) {
                        this.currentPlayer.StopMoving();
                    }
                    if (UnityEngine.Component.op_Inequality(this.bossSpriteRenderer, null)) {
                        this.bossSpriteRenderer.gameObject.SetActive(false);
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.characterVisual, null)) {
                        this.characterVisual.SetActive(false);
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.fightingCloud, null)) {
                        this.fightingCloud.SetActive(true);
                        var component = this.fightingCloud.GetComponent(UnityEngine.ParticleSystem);
                        if (UnityEngine.Component.op_Inequality(component, null)) {
                            component.Play();
                        }
                    }
                    UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(this.fightingCloudFx) : null;
                }));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.bossSeq, this.fightDuration);
                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.bossSeq, Bridge.fn.bind(this, function () {
                    var $t;
                    if (UnityEngine.GameObject.op_Inequality(this.fightingCloud, null)) {
                        this.fightingCloud.SetActive(false);
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.resultObject, null)) {
                        this.resultObject.SetActive(true);
                    }
                    if (UnityEngine.Component.op_Inequality(this.resultSpriteRenderer, null)) {
                        this.resultSpriteRenderer.sprite = (isWin ? this.winSprite : this.lossSprite);
                    }
                    if (isWin && UnityEngine.GameObject.op_Inequality(this.extraWinObject, null)) {
                        this.extraWinObject.SetActive(true);
                    }
                    UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(isWin ? this.winPanelFx : this.losePanelFx) : null;
                }));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.bossSeq, this.showResultDuration);
                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.bossSeq, Bridge.fn.bind(this, function () {
                    var $t, $t1, $t2, $t3;
                    UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.StopBGM() : null;
                    if (this.extraObjectsToHide != null) {
                        var array = this.extraObjectsToHide;
                        $t1 = Bridge.getEnumerator(array);
                        try {
                            while ($t1.moveNext()) {
                                var gameObject = $t1.Current;
                                if (UnityEngine.GameObject.op_Inequality(gameObject, null)) {
                                    gameObject.SetActive(false);
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (isWin) {
                        if (this.objectsToHideOnWin != null) {
                            var array2 = this.objectsToHideOnWin;
                            $t2 = Bridge.getEnumerator(array2);
                            try {
                                while ($t2.moveNext()) {
                                    var gameObject2 = $t2.Current;
                                    if (UnityEngine.GameObject.op_Inequality(gameObject2, null)) {
                                        gameObject2.SetActive(false);
                                    }
                                }
                            } finally {
                                if (Bridge.is($t2, System.IDisposable)) {
                                    $t2.System$IDisposable$Dispose();
                                }
                            }
                        }
                        if (UnityEngine.GameObject.op_Inequality(this.winPanel, null)) {
                            this.winPanel.SetActive(true);
                        }
                    } else {
                        if (this.objectsToHideOnLose != null) {
                            var array3 = this.objectsToHideOnLose;
                            $t3 = Bridge.getEnumerator(array3);
                            try {
                                while ($t3.moveNext()) {
                                    var gameObject3 = $t3.Current;
                                    if (UnityEngine.GameObject.op_Inequality(gameObject3, null)) {
                                        gameObject3.SetActive(false);
                                    }
                                }
                            } finally {
                                if (Bridge.is($t3, System.IDisposable)) {
                                    $t3.System$IDisposable$Dispose();
                                }
                            }
                        }
                        if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                            this.losePanel.SetActive(true);
                        }
                    }
                    DG.Tweening.DOVirtual.DelayedCall(0.2, Bridge.fn.bind(this, function () {
                        this.canClickToStore = true;
                    }));
                }));
            },
            /*BossController.StartBossSequence end.*/


        }
    });
    /*BossController end.*/

    /*CacheCollider start.*/
    Bridge.define("CacheCollider");
    /*CacheCollider end.*/

    /*ChoiceBoard start.*/
    Bridge.define("ChoiceBoard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spriteRenderer: null,
            borderRenderer: null,
            increaseBorderSprite: null,
            decreaseBorderSprite: null,
            choiceBoardType: 0,
            choosenSeq: null
        },
        props: {
            ChoiceType: {
                get: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#ChoiceType#get", this ); }

                    return this.choiceBoardType;
                }
            },
            VisualRender: {
                get: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#VisualRender#get", this ); }

                    return this.spriteRenderer;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#init", this ); }

                this.choiceBoardType = EChoiceType.IncreaseGeneric;
            }
        },
        methods: {
            /*ChoiceBoard.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.spriteRenderer, null)) {
                    this.spriteRenderer = this.GetComponent(UnityEngine.SpriteRenderer);
                }
                this.UpdateBorderVisual();
            },
            /*ChoiceBoard.Awake end.*/

            /*ChoiceBoard.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#OnValidate", this ); }

                this.UpdateBorderVisual();
            },
            /*ChoiceBoard.OnValidate end.*/

            /*ChoiceBoard.UpdateBorderVisual start.*/
            UpdateBorderVisual: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#UpdateBorderVisual", this ); }

                if (UnityEngine.Component.op_Equality(this.borderRenderer, null)) {
                    return;
                }
                if (this.choiceBoardType === EChoiceType.IncreaseGeneric) {
                    if (this.increaseBorderSprite != null) {
                        this.borderRenderer.sprite = this.increaseBorderSprite;
                    }
                } else if (this.choiceBoardType === EChoiceType.DecreaseGeneric && this.decreaseBorderSprite != null) {
                    this.borderRenderer.sprite = this.decreaseBorderSprite;
                }
            },
            /*ChoiceBoard.UpdateBorderVisual end.*/

            /*ChoiceBoard.AssignVisualData start.*/
            AssignVisualData: function (newSprite) {
if ( TRACE ) { TRACE( "ChoiceBoard#AssignVisualData", this ); }

                if (UnityEngine.Component.op_Inequality(this.spriteRenderer, null)) {
                    this.spriteRenderer.sprite = newSprite;
                }
            },
            /*ChoiceBoard.AssignVisualData end.*/

            /*ChoiceBoard.SetChoiceBoardType start.*/
            SetChoiceBoardType: function (choiceType) {
if ( TRACE ) { TRACE( "ChoiceBoard#SetChoiceBoardType", this ); }

                this.choiceBoardType = choiceType;
                this.UpdateBorderVisual();
            },
            /*ChoiceBoard.SetChoiceBoardType end.*/

            /*ChoiceBoard.AssignData start.*/
            AssignData: function (choiceData) {
if ( TRACE ) { TRACE( "ChoiceBoard#AssignData", this ); }

                if (choiceData == null) {
                    return;
                }
                if (UnityEngine.Component.op_Inequality(this.spriteRenderer, null)) {
                    this.spriteRenderer.sprite = choiceData.VisualSprite;
                }
                this.choiceBoardType = choiceData.ChoiceType;
                if (choiceData.BorderSprite != null) {
                    if (UnityEngine.Component.op_Inequality(this.borderRenderer, null)) {
                        this.borderRenderer.sprite = choiceData.BorderSprite;
                    }
                } else {
                    this.UpdateBorderVisual();
                }
            },
            /*ChoiceBoard.AssignData end.*/

            /*ChoiceBoard.PlayChooseSequence start.*/
            PlayChooseSequence: function () {
if ( TRACE ) { TRACE( "ChoiceBoard#PlayChooseSequence", this ); }

                this.choosenSeq != null ? DG.Tweening.TweenExtensions.Kill(this.choosenSeq) : null;
                this.choosenSeq = DG.Tweening.DOTween.Sequence();
                var targetZ = this.transform.localPosition.z + 5.0;
                DG.Tweening.TweenSettingsExtensions.Append(this.choosenSeq, DG.Tweening.ShortcutExtensions.DOLocalMoveZ(this.transform, targetZ, 0.5));
                if (UnityEngine.Component.op_Inequality(this.spriteRenderer, null)) {
                    DG.Tweening.TweenSettingsExtensions.Join(this.choosenSeq, DG.Tweening.DOTweenModuleSprite.DOFade(this.spriteRenderer, 0.0, 0.5));
                }
                if (UnityEngine.Component.op_Inequality(this.borderRenderer, null)) {
                    DG.Tweening.TweenSettingsExtensions.Join(this.choosenSeq, DG.Tweening.DOTweenModuleSprite.DOFade(this.borderRenderer, 0.0, 0.5));
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, this.choosenSeq, function () {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                });
            },
            /*ChoiceBoard.PlayChooseSequence end.*/


        }
    });
    /*ChoiceBoard end.*/

    /*ChoiceBoardHolder start.*/
    Bridge.define("ChoiceBoardHolder", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                OnLastBoardPassed: null
            }
        },
        fields: {
            choiceBoards: null,
            holderCollider: null,
            IsLastBoard: false
        },
        methods: {
            /*ChoiceBoardHolder.ApplyBoardData start.*/
            ApplyBoardData: function (index, choiceData) {
if ( TRACE ) { TRACE( "ChoiceBoardHolder#ApplyBoardData", this ); }

                if (this.choiceBoards != null && index >= 0 && index < this.choiceBoards.length) {
                    this.choiceBoards[index].AssignData(choiceData);
                }
            },
            /*ChoiceBoardHolder.ApplyBoardData end.*/

            /*ChoiceBoardHolder.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ChoiceBoardHolder#Awake", this ); }

                this.holderCollider = this.GetComponent(UnityEngine.Collider);
            },
            /*ChoiceBoardHolder.Awake end.*/

            /*ChoiceBoardHolder.PickBoard start.*/
            PickBoard: function (player, currentWorldPos) {
if ( TRACE ) { TRACE( "ChoiceBoardHolder#PickBoard", this ); }

                var $t, $t1, $t2;
                if (UnityEngine.MonoBehaviour.op_Equality(player, null) || this.choiceBoards == null || this.choiceBoards.length === 0) {
                    return;
                }
                if (UnityEngine.Component.op_Inequality(this.holderCollider, null)) {
                    this.holderCollider.enabled = false;
                }
                UnityEngine.MonoBehaviour.op_Inequality(($t = ProgressTrackingManager.Instance), null) ? $t.AddProgress() : null;
                if (this.IsLastBoard) {
                    !Bridge.staticEquals(ChoiceBoardHolder.OnLastBoardPassed, null) ? ChoiceBoardHolder.OnLastBoardPassed(player) : null;
                }
                var tempChoiceBoard = this.GetNearestBoard(currentWorldPos.$clone());
                if (!(UnityEngine.MonoBehaviour.op_Inequality(tempChoiceBoard, null))) {
                    return;
                }
                tempChoiceBoard.PlayChooseSequence();
                var chosenSprite = ((UnityEngine.Component.op_Inequality(tempChoiceBoard.VisualRender, null)) ? tempChoiceBoard.VisualRender.sprite : null);
                !Bridge.staticEquals(UIManager.OnCharacterChoose, null) ? UIManager.OnCharacterChoose(tempChoiceBoard.ChoiceType, chosenSprite) : null;
                !Bridge.staticEquals(UIManager.OnCharacterPick, null) ? UIManager.OnCharacterPick(tempChoiceBoard.ChoiceType) : null;
                if (tempChoiceBoard.ChoiceType === EChoiceType.IncreaseGeneric) {
                    UnityEngine.MonoBehaviour.op_Inequality(($t1 = Ply_SoundManager.Instance), null) ? $t1.PlayFx(FxType.RightChoice) : null;
                    player.UpgradePlayer(1);
                } else {
                    UnityEngine.MonoBehaviour.op_Inequality(($t2 = Ply_SoundManager.Instance), null) ? $t2.PlayFx(FxType.WrongChoice) : null;
                    player.UpgradePlayer(-1);
                    if (player.CurrentLevel < 1) {
                        !Bridge.staticEquals(GameManager.OnGameEnded, null) ? GameManager.OnGameEnded(false) : null;
                    }
                }
                DG.Tweening.DOVirtual.DelayedCall(0.6, function () {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                });
            },
            /*ChoiceBoardHolder.PickBoard end.*/

            /*ChoiceBoardHolder.GetNearestBoard start.*/
            GetNearestBoard: function (worldPos) {
if ( TRACE ) { TRACE( "ChoiceBoardHolder#GetNearestBoard", this ); }

                var nearestBoard = null;
                var closestSqrDistance = 3.40282347E+38;
                for (var i = 0; i < this.choiceBoards.length; i = (i + 1) | 0) {
                    var board = this.choiceBoards[i];
                    if (!(UnityEngine.MonoBehaviour.op_Equality(board, null))) {
                        var sqrDistance = (board.transform.position.$clone().sub( worldPos )).lengthSq();
                        if (sqrDistance < closestSqrDistance) {
                            closestSqrDistance = sqrDistance;
                            nearestBoard = board;
                        }
                    }
                }
                return nearestBoard;
            },
            /*ChoiceBoardHolder.GetNearestBoard end.*/

            /*ChoiceBoardHolder.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "ChoiceBoardHolder#OnTriggerEnter", this ); }

                var player = other.GetComponent(PlayerController);
                if (UnityEngine.MonoBehaviour.op_Equality(player, null)) {
                    player = other.GetComponentInParent(PlayerController);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(player, null)) {
                    this.PickBoard(player, other.transform.position.$clone());
                }
            },
            /*ChoiceBoardHolder.OnTriggerEnter end.*/


        }
    });
    /*ChoiceBoardHolder end.*/

    /*ChoiceBoardPairData start.*/
    Bridge.define("ChoiceBoardPairData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            ChoicePairDatas: null
        }
    });
    /*ChoiceBoardPairData end.*/

    /*ChoiceBoardPlacer start.*/
    Bridge.define("ChoiceBoardPlacer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            choiceBoardHolderprefab: null,
            startPos: null,
            endPos: null,
            choiceBoardPairData: null,
            spawnCount: 0,
            spawnGenericByNumber: false,
            shufflePairsOrder: false,
            shuffleLeftRight: false,
            spawnOnStart: false
        },
        props: {
            SpawnedCount: {
                get: function () {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#SpawnedCount#get", this ); }

                    return this.spawnGenericByNumber ? this.spawnCount : ((this.choiceBoardPairData != null && this.choiceBoardPairData.ChoicePairDatas != null && this.choiceBoardPairData.ChoicePairDatas.length !== 0) ? this.choiceBoardPairData.ChoicePairDatas.length : this.spawnCount);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#init", this ); }

                this.spawnCount = 5;
                this.spawnGenericByNumber = true;
                this.shufflePairsOrder = false;
                this.shuffleLeftRight = true;
                this.spawnOnStart = true;
            }
        },
        methods: {
            /*ChoiceBoardPlacer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#Start", this ); }

                if (this.spawnOnStart) {
                    this.Spawn();
                }
            },
            /*ChoiceBoardPlacer.Start end.*/

            /*ChoiceBoardPlacer.ClearExisting start.*/
            ClearExisting: function () {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#ClearExisting", this ); }

                for (var i = (this.transform.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var child = this.transform.GetChild(i);
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(child.gameObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(child.gameObject);
                    }
                }
            },
            /*ChoiceBoardPlacer.ClearExisting end.*/

            /*ChoiceBoardPlacer.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#Spawn", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.choiceBoardHolderprefab, null)) {
                    UnityEngine.Debug.LogWarning$1("ChoiceBoardPlacer: No prefab assigned.", this);
                    return;
                }
                this.ClearExisting();
                var startZ = ((UnityEngine.Component.op_Inequality(this.startPos, null)) ? this.startPos.position.z : this.transform.position.z);
                var endZ = ((UnityEngine.Component.op_Inequality(this.endPos, null)) ? this.endPos.position.z : (startZ + 100.0));
                var totalDistance = endZ - startZ;
                var pairDataList = null;
                if (this.choiceBoardPairData != null && this.choiceBoardPairData.ChoicePairDatas != null && this.choiceBoardPairData.ChoicePairDatas.length !== 0) {
                    pairDataList = Bridge.cast(System.Array.clone(this.choiceBoardPairData.ChoicePairDatas), System.Array.type(ChoicePairData));
                    if (this.shufflePairsOrder) {
                        this.ShuffleArray(ChoicePairData, pairDataList);
                    }
                }
                var count = (this.spawnGenericByNumber ? this.spawnCount : ((pairDataList != null) ? pairDataList.length : this.spawnCount));
                if (count <= 0) {
                    return;
                }
                var stepZ = totalDistance / (((count + 1) | 0));
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var targetZ = startZ + stepZ * (((i + 1) | 0));
                    var currentPosition = new pc.Vec3( this.transform.position.x, this.transform.position.y, targetZ );
                    var choiceBoardHolder = UnityEngine.Object.Instantiate$3(ChoiceBoardHolder, this.choiceBoardHolderprefab, currentPosition, this.transform.rotation, this.transform);
                    if (UnityEngine.MonoBehaviour.op_Inequality(choiceBoardHolder, null)) {
                        choiceBoardHolder.IsLastBoard = i === ((count - 1) | 0);
                    }
                    if (pairDataList != null && pairDataList.length !== 0) {
                        var dataIndex = i % pairDataList.length;
                        var pair = pairDataList[dataIndex];
                        if (!this.shuffleLeftRight || !(UnityEngine.Random.value > 0.5)) {
                            choiceBoardHolder.ApplyBoardData(0, pair.choiceData1);
                            choiceBoardHolder.ApplyBoardData(1, pair.choiceData2);
                        } else {
                            choiceBoardHolder.ApplyBoardData(1, pair.choiceData1);
                            choiceBoardHolder.ApplyBoardData(0, pair.choiceData2);
                        }
                    }
                }
            },
            /*ChoiceBoardPlacer.Spawn end.*/

            /*ChoiceBoardPlacer.ShuffleArray start.*/
            ShuffleArray: function (T, array) {
if ( TRACE ) { TRACE( "ChoiceBoardPlacer#ShuffleArray", this ); }

                for (var i = (array.length - 1) | 0; i > 0; i = (i - 1) | 0) {
                    var randomIndex = UnityEngine.Random.Range(0, ((i + 1) | 0));
                    var temp = Bridge.rValue(array[i]);
                    array[i] = Bridge.rValue(array[randomIndex]);
                    array[randomIndex] = Bridge.rValue(temp);
                }
            },
            /*ChoiceBoardPlacer.ShuffleArray end.*/


        }
    });
    /*ChoiceBoardPlacer end.*/

    /*ChoiceData start.*/
    Bridge.define("ChoiceData", {
        fields: {
            VisualSprite: null,
            BorderSprite: null,
            ChoiceType: 0
        }
    });
    /*ChoiceData end.*/

    /*ChoicePairData start.*/
    Bridge.define("ChoicePairData", {
        fields: {
            choiceData1: null,
            choiceData2: null
        }
    });
    /*ChoicePairData end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*EChoiceType start.*/
    Bridge.define("EChoiceType", {
        $kind: 6,
        statics: {
            fields: {
                IncreaseGeneric: 0,
                DecreaseGeneric: 1
            }
        }
    });
    /*EChoiceType end.*/

    /*FxAudio start.*/
    Bridge.define("FxAudio", {
        fields: {
            Clock: null,
            PlayerWin: null,
            PlayerLoose: null,
            RightChoice: null,
            WrongChoice: null,
            MaxLevel: null,
            FightingCloud: null
        },
        methods: {
            /*FxAudio.GetSoundData start.*/
            GetSoundData: function (type) {
if ( TRACE ) { TRACE( "FxAudio#GetSoundData", this ); }

                switch (type) {
                    case FxType.Clock: 
                        return this.Clock;
                    case FxType.PlayerWin: 
                        return this.PlayerWin;
                    case FxType.PlayerLoose: 
                        return this.PlayerLoose;
                    case FxType.RightChoice: 
                        return this.RightChoice;
                    case FxType.WrongChoice: 
                        return this.WrongChoice;
                    case FxType.MaxLevel: 
                        return this.MaxLevel;
                    case FxType.FightingCloud: 
                        return this.FightingCloud;
                    default: 
                        return null;
                }
            },
            /*FxAudio.GetSoundData end.*/


        }
    });
    /*FxAudio end.*/

    /*FxType start.*/
    Bridge.define("FxType", {
        $kind: 6,
        statics: {
            fields: {
                Clock: 0,
                PlayerWin: 1,
                PlayerLoose: 2,
                RightChoice: 3,
                WrongChoice: 4,
                MaxLevel: 5,
                FightingCloud: 6
            }
        }
    });
    /*FxType end.*/

    /*GameEndUI start.*/
    Bridge.define("GameEndUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            winCanvasHolder: null,
            loseCanvasHolder: null,
            toStoreButton: null,
            endDisplayDelayTime: 0,
            seq: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameEndUI#init", this ); }

                this.endDisplayDelayTime = 2.5;
            }
        },
        methods: {
            /*GameEndUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameEndUI#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.toStoreButton, null)) {
                    this.toStoreButton.gameObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.winCanvasHolder, null)) {
                    this.winCanvasHolder.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.loseCanvasHolder, null)) {
                    this.loseCanvasHolder.SetActive(false);
                }
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                if (UnityEngine.MonoBehaviour.op_Inequality(this.toStoreButton, null)) {
                    this.toStoreButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ToStoreButtonClicked));
                }
            },
            /*GameEndUI.Start end.*/

            /*GameEndUI.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "GameEndUI#OnDestroy", this ); }

                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*GameEndUI.OnDestroy end.*/

            /*GameEndUI.OnGameEnded start.*/
            OnGameEnded: function (winState) {
if ( TRACE ) { TRACE( "GameEndUI#OnGameEnded", this ); }

                if (this.endDisplayDelayTime <= 0.0) {
                    if (UnityEngine.GameObject.op_Inequality(this.winCanvasHolder, null)) {
                        this.winCanvasHolder.SetActive(winState);
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.loseCanvasHolder, null)) {
                        this.loseCanvasHolder.SetActive(!winState);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.toStoreButton, null)) {
                        this.toStoreButton.gameObject.SetActive(true);
                    }
                    return;
                }
                this.seq != null ? DG.Tweening.TweenExtensions.Kill(this.seq) : null;
                this.seq = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Sequence, this.seq, true);
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.seq, this.endDisplayDelayTime);
                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.seq, Bridge.fn.bind(this, function () {
                    var $t;
                    if (winState) {
                        UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.UpdateBGMState() : null;
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.winCanvasHolder, null)) {
                        this.winCanvasHolder.SetActive(winState);
                    }
                    if (UnityEngine.GameObject.op_Inequality(this.loseCanvasHolder, null)) {
                        this.loseCanvasHolder.SetActive(!winState);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.toStoreButton, null)) {
                        this.toStoreButton.gameObject.SetActive(true);
                    }
                }));
            },
            /*GameEndUI.OnGameEnded end.*/

            /*GameEndUI.ToStoreButtonClicked start.*/
            ToStoreButtonClicked: function () {
if ( TRACE ) { TRACE( "GameEndUI#ToStoreButtonClicked", this ); }

                GameManager.GotoStore();
            },
            /*GameEndUI.ToStoreButtonClicked end.*/


        }
    });
    /*GameEndUI end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                OnGameStart: null,
                OnCharacterReachedTheEnd: null,
                OnGameEnded: null,
                isGamePaused: false,
                Instance: null,
                isGameEnded: false,
                MainCamera: null
            },
            props: {
                IsGamePause: {
                    get: function () {
if ( TRACE ) { TRACE( "GameManager#IsGamePause#get", this ); }

                        return GameManager.isGamePaused;
                    }
                }
            },
            methods: {
                /*GameManager.CheckWinCondition:static start.*/
                CheckWinCondition: function (currentLevel) {
if ( TRACE ) { TRACE( "GameManager#CheckWinCondition", this ); }

                    var targetWinLevel = ((UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) ? GameManager.Instance.winLevel : 4);
                    return currentLevel >= targetWinLevel;
                },
                /*GameManager.CheckWinCondition:static end.*/

                /*GameManager.PauseGame:static start.*/
                PauseGame: function () {
if ( TRACE ) { TRACE( "GameManager#PauseGame", this ); }

                    GameManager.isGamePaused = true;
                    UnityEngine.Time.timeScale = 0.0;
                },
                /*GameManager.PauseGame:static end.*/

                /*GameManager.UnPauseGame:static start.*/
                UnPauseGame: function () {
if ( TRACE ) { TRACE( "GameManager#UnPauseGame", this ); }

                    GameManager.isGamePaused = false;
                    UnityEngine.Time.timeScale = 1.0;
                },
                /*GameManager.UnPauseGame:static end.*/

                /*GameManager.GotoStore:static start.*/
                GotoStore: function () {
if ( TRACE ) { TRACE( "GameManager#GotoStore", this ); }

                    AppLovinAnalytics.Track(ALEvent.CTA_CLICKED);
                    UnityEngine.Debug.Log$1("Track: CTA Clicked");
                    Luna.Unity.LifeCycle.GameEnded();
                    Luna.Unity.Playable.InstallFullGame();
                },
                /*GameManager.GotoStore:static end.*/


            }
        },
        fields: {
            maxLevel: 0,
            winLevel: 0,
            totalMoveTime: 0,
            currentPlayerLevel: 0,
            Player: null
        },
        props: {
            MaxLevel: {
                get: function () {
if ( TRACE ) { TRACE( "GameManager#MaxLevel#get", this ); }

                    return this.maxLevel;
                }
            },
            WinLevel: {
                get: function () {
if ( TRACE ) { TRACE( "GameManager#WinLevel#get", this ); }

                    return this.winLevel;
                }
            },
            TotalMoveTime: {
                get: function () {
if ( TRACE ) { TRACE( "GameManager#TotalMoveTime#get", this ); }

                    return this.totalMoveTime;
                }
            },
            CurrentPlayerLevel: {
                get: function () {
if ( TRACE ) { TRACE( "GameManager#CurrentPlayerLevel#get", this ); }

                    return this.currentPlayerLevel;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.maxLevel = 4;
                this.winLevel = 3;
                this.totalMoveTime = 10.0;
                this.currentPlayerLevel = 1;
            }
        },
        methods: {
            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.Player, null)) {
                    this.currentPlayerLevel = this.Player.CurrentLevel;
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                GameManager.MainCamera = UnityEngine.Camera.main;
                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    GameManager.Instance = this;
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnd));
                GameManager.OnCharacterReachedTheEnd = Bridge.fn.combine(GameManager.OnCharacterReachedTheEnd, Bridge.fn.cacheBind(this, this.OnCharacterReachedEnd));
                if (UnityEngine.MonoBehaviour.op_Inequality(Ply_SoundManager.Instance, null)) {
                    Ply_SoundManager.Instance.UpdateBGMState();
                }
            },
            /*GameManager.Start end.*/

            /*GameManager.OnClick_GotoStore start.*/
            OnClick_GotoStore: function () {
if ( TRACE ) { TRACE( "GameManager#OnClick_GotoStore", this ); }

                GameManager.GotoStore();
            },
            /*GameManager.OnClick_GotoStore end.*/

            /*GameManager.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "GameManager#GoToStore", this ); }

                GameManager.GotoStore();
            },
            /*GameManager.GoToStore end.*/

            /*GameManager.OnGameEnd start.*/
            OnGameEnd: function (winState) {
if ( TRACE ) { TRACE( "GameManager#OnGameEnd", this ); }

                GameManager.isGameEnded = true;
            },
            /*GameManager.OnGameEnd end.*/

            /*GameManager.OnCharacterReachedEnd start.*/
            OnCharacterReachedEnd: function (currentLevel) {
if ( TRACE ) { TRACE( "GameManager#OnCharacterReachedEnd", this ); }

                !Bridge.staticEquals(GameManager.OnGameEnded, null) ? GameManager.OnGameEnded(currentLevel >= this.winLevel) : null;
            },
            /*GameManager.OnCharacterReachedEnd end.*/


        }
    });
    /*GameManager end.*/

    /*ImageScroller start.*/
    Bridge.define("ImageScroller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rawImage: null,
            moveVector: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ImageScroller#init", this ); }

                this.moveVector = new UnityEngine.Vector2();
                this.moveVector = new pc.Vec2( 0.1, 0.1 );
            }
        },
        methods: {
            /*ImageScroller.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ImageScroller#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.rawImage, null)) {
                    this.rawImage = this.GetComponent(UnityEngine.UI.RawImage);
                }
            },
            /*ImageScroller.Awake end.*/

            /*ImageScroller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ImageScroller#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                    this.rawImage.uvRect = new UnityEngine.Rect.$ctor3(this.rawImage.uvRect.position.$clone().add( this.moveVector.$clone().scale( UnityEngine.Time.deltaTime ) ), this.rawImage.uvRect.size.$clone());
                }
            },
            /*ImageScroller.Update end.*/


        }
    });
    /*ImageScroller end.*/

    /*InputManager start.*/
    Bridge.define("InputManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            OnClickedDown: null,
            minimumSwipeDistance: 0,
            startPosition: null,
            endPosition: null,
            isDragging: false
        },
        events: {
            OnSwipe: null,
            OnSwipeDirection: null,
            OnDrag: null,
            OnDragEnd: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InputManager#init", this ); }

                this.startPosition = new UnityEngine.Vector2();
                this.endPosition = new UnityEngine.Vector2();
                this.minimumSwipeDistance = 80.0;
            }
        },
        methods: {
            /*InputManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "InputManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    InputManager.Instance = this;
                }
            },
            /*InputManager.Awake end.*/

            /*InputManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "InputManager#Update", this ); }

                this.HandleInput();
            },
            /*InputManager.Update end.*/

            /*InputManager.HandleInput start.*/
            HandleInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandleInput", this ); }

                this.HandleTouchInput();
            },
            /*InputManager.HandleInput end.*/

            /*InputManager.HandleMouseInput start.*/
            HandleMouseInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandleMouseInput", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.StartSwipe(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()));
                }
                if (UnityEngine.Input.GetMouseButton(0) && this.isDragging) {
                    !Bridge.staticEquals(this.OnDrag, null) ? this.OnDrag(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone())) : null;
                }
                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.EndSwipe(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()));
                    !Bridge.staticEquals(this.OnDragEnd, null) ? this.OnDragEnd() : null;
                }
            },
            /*InputManager.HandleMouseInput end.*/

            /*InputManager.HandleTouchInput start.*/
            HandleTouchInput: function () {
if ( TRACE ) { TRACE( "InputManager#HandleTouchInput", this ); }

                if (UnityEngine.Input.touchCount === 0) {
                    return;
                }
                var touch = UnityEngine.Input.GetTouch(0);
                switch (touch.phase) {
                    case UnityEngine.TouchPhase.Began: 
                        this.StartSwipe(touch.position.$clone());
                        break;
                    case UnityEngine.TouchPhase.Moved: 
                    case UnityEngine.TouchPhase.Stationary: 
                        if (this.isDragging) {
                            !Bridge.staticEquals(this.OnDrag, null) ? this.OnDrag(touch.position.$clone()) : null;
                        }
                        break;
                    case UnityEngine.TouchPhase.Ended: 
                    case UnityEngine.TouchPhase.Canceled: 
                        this.EndSwipe(touch.position.$clone());
                        !Bridge.staticEquals(this.OnDragEnd, null) ? this.OnDragEnd() : null;
                        break;
                }
            },
            /*InputManager.HandleTouchInput end.*/

            /*InputManager.StartSwipe start.*/
            StartSwipe: function (position) {
if ( TRACE ) { TRACE( "InputManager#StartSwipe", this ); }

                this.isDragging = true;
                this.startPosition = position.$clone();
                !Bridge.staticEquals(this.OnClickedDown, null) ? this.OnClickedDown(position.$clone()) : null;
            },
            /*InputManager.StartSwipe end.*/

            /*InputManager.EndSwipe start.*/
            EndSwipe: function (position) {
if ( TRACE ) { TRACE( "InputManager#EndSwipe", this ); }

                if (this.isDragging) {
                    this.isDragging = false;
                    this.endPosition = position.$clone();
                    var swipe = this.endPosition.$clone().sub( this.startPosition );
                    if (!(swipe.length() < this.minimumSwipeDistance)) {
                        !Bridge.staticEquals(this.OnSwipe, null) ? this.OnSwipe(swipe.$clone()) : null;
                        !Bridge.staticEquals(this.OnSwipeDirection, null) ? this.OnSwipeDirection(this.GetSwipeDirection(swipe.$clone())) : null;
                    }
                }
            },
            /*InputManager.EndSwipe end.*/

            /*InputManager.GetSwipeDirection start.*/
            GetSwipeDirection: function (swipe) {
if ( TRACE ) { TRACE( "InputManager#GetSwipeDirection", this ); }

                swipe.normalize();
                if (Math.abs(swipe.x) > Math.abs(swipe.y)) {
                    return (swipe.x > 0.0) ? SwipeDirection.Right : SwipeDirection.Left;
                }
                return (swipe.y > 0.0) ? SwipeDirection.Up : SwipeDirection.Down;
            },
            /*InputManager.GetSwipeDirection end.*/


        }
    });
    /*InputManager end.*/

    /*MaterialUVScroller start.*/
    Bridge.define("MaterialUVScroller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetMaterial: null,
            scrollSpeed: null,
            offset: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MaterialUVScroller#init", this ); }

                this.scrollSpeed = new UnityEngine.Vector2();
                this.offset = new UnityEngine.Vector2();
                this.scrollSpeed = new pc.Vec2( 0.01, 0.01 );
            }
        },
        methods: {
            /*MaterialUVScroller.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MaterialUVScroller#Awake", this ); }

                if (this.targetMaterial == null) {
                    var renderer = this.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(renderer, null)) {
                        this.targetMaterial = renderer.material;
                    }
                }
            },
            /*MaterialUVScroller.Awake end.*/

            /*MaterialUVScroller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MaterialUVScroller#Update", this ); }

                if (this.targetMaterial != null) {
                    this.offset = this.offset.$clone().add( this.scrollSpeed.$clone().scale( UnityEngine.Time.deltaTime ) );
                    this.targetMaterial.mainTextureOffset = this.offset.$clone();
                }
            },
            /*MaterialUVScroller.Update end.*/


        }
    });
    /*MaterialUVScroller end.*/

    /*MusicID start.*/
    Bridge.define("MusicID", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Gameplay: 1,
                GameEnded: 2
            }
        }
    });
    /*MusicID end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            endPos: null,
            switchTrackTime: 0,
            trackRightTransform: null,
            trackLeftTransform: null,
            startRight: false,
            playerTransform: null,
            playerVisual: null,
            winPar: null,
            currentLevel: 0,
            dragSmoothSpeed: 0,
            moveCurve: null,
            currentLocalPos: null,
            OnRight: false,
            moveSeq: null,
            gameStart: false,
            mainCam: null
        },
        props: {
            totalMoveTime: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerController#totalMoveTime#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) ? GameManager.Instance.TotalMoveTime : 10.0;
                }
            },
            CurrentLevel: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerController#CurrentLevel#get", this ); }

                    return this.currentLevel;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.currentLocalPos = new UnityEngine.Vector3();
                this.switchTrackTime = 0.5;
                this.startRight = true;
                this.currentLevel = 1;
                this.dragSmoothSpeed = 20.0;
            }
        },
        methods: {
            /*PlayerController.UpgradePlayer start.*/
            UpgradePlayer: function (upgradePointsChanged) {
if ( TRACE ) { TRACE( "PlayerController#UpgradePlayer", this ); }

                var $t, $t1;
                var targetMaxLevel = ((UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) ? GameManager.Instance.MaxLevel : 4);
                var nextLevel = Math.max(1, Math.min(((this.currentLevel + upgradePointsChanged) | 0), targetMaxLevel));
                if (nextLevel !== this.currentLevel) {
                    this.currentLevel = nextLevel;
                    if (this.currentLevel >= targetMaxLevel) {
                        UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(FxType.MaxLevel) : null;
                    } else {
                        UnityEngine.MonoBehaviour.op_Inequality(($t1 = Ply_SoundManager.Instance), null) ? $t1.PlayFx((upgradePointsChanged > 0) ? FxType.RightChoice : FxType.WrongChoice) : null;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.playerVisual, null)) {
                        this.playerVisual.UpdateVisualBylevel(this.currentLevel);
                    }
                }
            },
            /*PlayerController.UpgradePlayer end.*/

            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.playerVisual, null) && UnityEngine.Component.op_Inequality(this.playerTransform, null)) {
                    this.playerVisual = this.playerTransform.GetComponent(PlayerVisual);
                }
                this.SwitchTrack(this.startRight);
                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    InputManager.Instance.addOnSwipeDirection(Bridge.fn.cacheBind(this, this.OnSwipe));
                    InputManager.Instance.addOnDrag(Bridge.fn.cacheBind(this, this.OnDrag));
                    InputManager.Instance.addOnDragEnd(Bridge.fn.cacheBind(this, this.OnDragEnd));
                }
                GameManager.OnGameStart = Bridge.fn.combine(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnd));
                this.mainCam = ((UnityEngine.Component.op_Inequality(GameManager.MainCamera, null)) ? GameManager.MainCamera : UnityEngine.Camera.main);
            },
            /*PlayerController.Start end.*/

            /*PlayerController.StopMoving start.*/
            StopMoving: function () {
if ( TRACE ) { TRACE( "PlayerController#StopMoving", this ); }

                this.moveSeq != null ? DG.Tweening.TweenExtensions.Kill(this.moveSeq) : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    InputManager.Instance.removeOnSwipeDirection(Bridge.fn.cacheBind(this, this.OnSwipe));
                    InputManager.Instance.removeOnDrag(Bridge.fn.cacheBind(this, this.OnDrag));
                    InputManager.Instance.removeOnDragEnd(Bridge.fn.cacheBind(this, this.OnDragEnd));
                }
            },
            /*PlayerController.StopMoving end.*/

            /*PlayerController.OnGameEnd start.*/
            OnGameEnd: function (winState) {
if ( TRACE ) { TRACE( "PlayerController#OnGameEnd", this ); }

                if (winState && UnityEngine.Component.op_Inequality(this.winPar, null)) {
                    this.winPar.Play();
                }
                this.StopMoving();
                DG.Tweening.DOVirtual.DelayedCall(4.0, function () {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                });
            },
            /*PlayerController.OnGameEnd end.*/

            /*PlayerController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayerController#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    InputManager.Instance.removeOnSwipeDirection(Bridge.fn.cacheBind(this, this.OnSwipe));
                    InputManager.Instance.removeOnDrag(Bridge.fn.cacheBind(this, this.OnDrag));
                    InputManager.Instance.removeOnDragEnd(Bridge.fn.cacheBind(this, this.OnDragEnd));
                }
                GameManager.OnGameStart = Bridge.fn.remove(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
            },
            /*PlayerController.OnDestroy end.*/

            /*PlayerController.OnGameStarted start.*/
            OnGameStarted: function () {
if ( TRACE ) { TRACE( "PlayerController#OnGameStarted", this ); }

                if (UnityEngine.Component.op_Inequality(this.playerTransform, null)) {
                    this.playerTransform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 0.0 );
                }
                this.StartMoving();
                GameManager.OnGameStart = Bridge.fn.remove(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
            },
            /*PlayerController.OnGameStarted end.*/

            /*PlayerController.StartMoving start.*/
            StartMoving: function () {
if ( TRACE ) { TRACE( "PlayerController#StartMoving", this ); }

                this.moveSeq != null ? DG.Tweening.TweenExtensions.Kill(this.moveSeq) : null;
                this.moveSeq = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.moveSeq, Bridge.fn.bind(this, function () {
                    !Bridge.staticEquals(UIManager.OnCharacterStartMove, null) ? UIManager.OnCharacterStartMove(this.totalMoveTime) : null;
                }));
                if (UnityEngine.Component.op_Inequality(this.endPos, null)) {
                    DG.Tweening.TweenSettingsExtensions.Append(this.moveSeq, DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this.endPos.position.$clone(), this.totalMoveTime), this.moveCurve));
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, this.moveSeq, Bridge.fn.bind(this, function () {
                    !Bridge.staticEquals(GameManager.OnCharacterReachedTheEnd, null) ? GameManager.OnCharacterReachedTheEnd(this.currentLevel) : null;
                }));
                this.gameStart = true;
            },
            /*PlayerController.StartMoving end.*/

            /*PlayerController.OnDrag start.*/
            OnDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "PlayerController#OnDrag", this ); }

                if (!(UnityEngine.Component.op_Equality(this.playerTransform, null)) && !(UnityEngine.Component.op_Equality(this.mainCam, null))) {
                    var screenZ = this.mainCam.WorldToScreenPoint(this.playerTransform.position).z;
                    var screenPoint = new pc.Vec3( screenPosition.x, screenPosition.y, screenZ );
                    var worldPoint = this.mainCam.ScreenToWorldPoint(screenPoint);
                    var parent = this.playerTransform.parent;
                    var localPoint = ((UnityEngine.Component.op_Inequality(parent, null)) ? parent.InverseTransformPoint(worldPoint) : this.playerTransform.localPosition.$clone());
                    var leftX = ((UnityEngine.Component.op_Inequality(this.trackLeftTransform, null)) ? this.trackLeftTransform.localPosition.x : (-2.0));
                    var rightX = ((UnityEngine.Component.op_Inequality(this.trackRightTransform, null)) ? this.trackRightTransform.localPosition.x : 2.0);
                    var minX = UnityEngine.Mathf.Min(leftX, rightX);
                    var maxX = UnityEngine.Mathf.Max(leftX, rightX);
                    var targetX = Math.max(minX, Math.min(localPoint.x, maxX));
                    this.currentLocalPos = new pc.Vec3( targetX, this.playerTransform.localPosition.y, this.playerTransform.localPosition.z );
                    this.playerTransform.localPosition = new pc.Vec3().lerp( this.playerTransform.localPosition, this.currentLocalPos, UnityEngine.Time.deltaTime * this.dragSmoothSpeed );
                    if (!this.gameStart) {
                        !Bridge.staticEquals(GameManager.OnGameStart, null) ? GameManager.OnGameStart() : null;
                        this.gameStart = true;
                    }
                }
            },
            /*PlayerController.OnDrag end.*/

            /*PlayerController.OnDragEnd start.*/
            OnDragEnd: function () {
if ( TRACE ) { TRACE( "PlayerController#OnDragEnd", this ); }

                if (UnityEngine.Component.op_Inequality(this.playerTransform, null)) {
                    this.currentLocalPos = this.playerTransform.localPosition.$clone();
                }
            },
            /*PlayerController.OnDragEnd end.*/

            /*PlayerController.SwitchTrack start.*/
            SwitchTrack: function (rightTrack) {
if ( TRACE ) { TRACE( "PlayerController#SwitchTrack", this ); }

                if (!(UnityEngine.Component.op_Equality(this.playerTransform, null))) {
                    this.currentLocalPos = ((!rightTrack) ? ((UnityEngine.Component.op_Inequality(this.trackLeftTransform, null)) ? this.trackLeftTransform.localPosition.$clone() : pc.Vec3.LEFT.clone()) : ((UnityEngine.Component.op_Inequality(this.trackRightTransform, null)) ? this.trackRightTransform.localPosition.$clone() : pc.Vec3.RIGHT.clone()));
                    DG.Tweening.ShortcutExtensions.DOKill(this.playerTransform);
                    DG.Tweening.ShortcutExtensions.DOLocalMove(this.playerTransform, this.currentLocalPos.$clone(), this.switchTrackTime);
                    this.OnRight = rightTrack;
                }
            },
            /*PlayerController.SwitchTrack end.*/

            /*PlayerController.OnSwipe start.*/
            OnSwipe: function (swipeDir) {
if ( TRACE ) { TRACE( "PlayerController#OnSwipe", this ); }
 },
            /*PlayerController.OnSwipe end.*/


        }
    });
    /*PlayerController end.*/

    /*PlayerVisual start.*/
    Bridge.define("PlayerVisual", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            playerSpriteRenderer: null,
            fakeShadowRenderer: null,
            levelSprite: null,
            levelScaleMultipliers: null,
            maxPowerParScaleMultiplier: 0,
            bounceYMultiplier: 0,
            bounceDuration: 0,
            scaleTransitionDuration: 0,
            visualAnimator: null,
            level4TriggerName: null,
            level4SpriteDelay: 0,
            maxPowerPar: null,
            defaultScale: null,
            maxPowerParDefaultScale: null,
            defaultColor: null,
            isScaleInitialized: false,
            isGameStarted: false,
            currentLevelInternal: 0,
            level4DelayTween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerVisual#init", this ); }

                this.defaultScale = new UnityEngine.Vector3();
                this.maxPowerParDefaultScale = new UnityEngine.Vector3();
                this.defaultColor = new UnityEngine.Color();
                this.levelScaleMultipliers = System.Array.init([1.0, 1.0, 1.0, 1.1], System.Single);
                this.maxPowerParScaleMultiplier = 1.1;
                this.bounceYMultiplier = 0.95;
                this.bounceDuration = 0.4;
                this.scaleTransitionDuration = 0.25;
                this.level4TriggerName = "1";
                this.level4SpriteDelay = 0.3;
                this.defaultColor = new pc.Color( 1, 1, 1, 1 );
                this.currentLevelInternal = 1;
            }
        },
        methods: {
            /*PlayerVisual.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerVisual#Awake", this ); }

                this.InitScale();
            },
            /*PlayerVisual.Awake end.*/

            /*PlayerVisual.InitScale start.*/
            InitScale: function () {
if ( TRACE ) { TRACE( "PlayerVisual#InitScale", this ); }

                if (!this.isScaleInitialized) {
                    this.defaultScale = this.transform.localScale.$clone();
                    if (UnityEngine.Component.op_Inequality(this.playerSpriteRenderer, null)) {
                        this.defaultColor = this.playerSpriteRenderer.color.$clone();
                    }
                    if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                        this.maxPowerParDefaultScale = this.maxPowerPar.transform.localScale.$clone();
                    }
                    this.isScaleInitialized = true;
                }
            },
            /*PlayerVisual.InitScale end.*/

            /*PlayerVisual.GetScaleMultiplierForLevel start.*/
            GetScaleMultiplierForLevel: function (level) {
if ( TRACE ) { TRACE( "PlayerVisual#GetScaleMultiplierForLevel", this ); }

                if (this.levelScaleMultipliers == null || this.levelScaleMultipliers.length === 0) {
                    return 1.0;
                }
                var idx = Math.max(0, Math.min(((level - 1) | 0), ((this.levelScaleMultipliers.length - 1) | 0)));
                return this.levelScaleMultipliers[idx];
            },
            /*PlayerVisual.GetScaleMultiplierForLevel end.*/

            /*PlayerVisual.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerVisual#Start", this ); }

                this.InitScale();
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                    this.maxPowerPar.gameObject.SetActive(false);
                }
                if (this.levelSprite == null || this.levelSprite.length === 0) {
                    UnityEngine.Debug.LogWarning$1("Sprites for player level are empty");
                }
                GameManager.OnGameStart = Bridge.fn.combine(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStart));
                this.UpdateVisualBylevel(1);
            },
            /*PlayerVisual.Start end.*/

            /*PlayerVisual.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlayerVisual#OnDestroy", this ); }

                GameManager.OnGameStart = Bridge.fn.remove(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStart));
                this.level4DelayTween != null ? DG.Tweening.TweenExtensions.Kill(this.level4DelayTween) : null;
            },
            /*PlayerVisual.OnDestroy end.*/

            /*PlayerVisual.OnGameStart start.*/
            OnGameStart: function () {
if ( TRACE ) { TRACE( "PlayerVisual#OnGameStart", this ); }

                this.isGameStarted = true;
                this.StartBouncing();
            },
            /*PlayerVisual.OnGameStart end.*/

            /*PlayerVisual.AssingPlayerVisual start.*/
            AssingPlayerVisual: function (newVisual) {
if ( TRACE ) { TRACE( "PlayerVisual#AssingPlayerVisual", this ); }

                if (UnityEngine.Component.op_Inequality(this.playerSpriteRenderer, null)) {
                    this.playerSpriteRenderer.sprite = newVisual;
                }
            },
            /*PlayerVisual.AssingPlayerVisual end.*/

            /*PlayerVisual.UpdateVisualBylevel start.*/
            UpdateVisualBylevel: function (currentLevel) {
if ( TRACE ) { TRACE( "PlayerVisual#UpdateVisualBylevel", this ); }

                this.InitScale();
                this.currentLevelInternal = currentLevel;
                this.level4DelayTween != null ? DG.Tweening.TweenExtensions.Kill(this.level4DelayTween) : null;
                var isMaxLevel = currentLevel >= 4;
                if (this.levelSprite != null && this.levelSprite.length !== 0) {
                    var levelIdx = Math.max(0, Math.min(((currentLevel - 1) | 0), ((this.levelSprite.length - 1) | 0)));
                    if (isMaxLevel) {
                        if (UnityEngine.Component.op_Inequality(this.visualAnimator, null)) {
                            this.visualAnimator.enabled = true;
                            this.visualAnimator.SetTrigger$1(this.level4TriggerName);
                        }
                        this.level4DelayTween = DG.Tweening.DOVirtual.DelayedCall(this.level4SpriteDelay, Bridge.fn.bind(this, function () {
                            if (UnityEngine.Component.op_Inequality(this.visualAnimator, null)) {
                                this.visualAnimator.enabled = false;
                            }
                            if (UnityEngine.Component.op_Inequality(this.playerSpriteRenderer, null)) {
                                this.playerSpriteRenderer.color = this.defaultColor.$clone();
                            }
                            this.AssingPlayerVisual(this.levelSprite[levelIdx]);
                        }));
                    } else {
                        if (UnityEngine.Component.op_Inequality(this.visualAnimator, null)) {
                            this.visualAnimator.enabled = false;
                        }
                        if (UnityEngine.Component.op_Inequality(this.playerSpriteRenderer, null)) {
                            this.playerSpriteRenderer.color = this.defaultColor.$clone();
                        }
                        this.AssingPlayerVisual(this.levelSprite[levelIdx]);
                    }
                }
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                    this.maxPowerPar.gameObject.SetActive(isMaxLevel);
                }
                if (this.isGameStarted) {
                    this.StartBouncing();
                    return;
                }
                var playerScaleMult = this.GetScaleMultiplierForLevel(currentLevel);
                var targetPlayerScale = this.defaultScale.$clone().clone().scale( playerScaleMult );
                var targetParScale = (isMaxLevel ? (this.maxPowerParDefaultScale.$clone().clone().scale( this.maxPowerParScaleMultiplier )) : this.maxPowerParDefaultScale.$clone());
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                this.transform.localScale = targetPlayerScale.$clone();
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.maxPowerPar.transform);
                    this.maxPowerPar.transform.localScale = targetParScale.$clone();
                }
            },
            /*PlayerVisual.UpdateVisualBylevel end.*/

            /*PlayerVisual.StartBouncing start.*/
            StartBouncing: function () {
if ( TRACE ) { TRACE( "PlayerVisual#StartBouncing", this ); }

                this.InitScale();
                var isMaxLevel = this.currentLevelInternal >= 4;
                var playerScaleMult = this.GetScaleMultiplierForLevel(this.currentLevelInternal);
                var targetPlayerScale = this.defaultScale.$clone().clone().scale( playerScaleMult );
                var targetParScale = (isMaxLevel ? (this.maxPowerParDefaultScale.$clone().clone().scale( this.maxPowerParScaleMultiplier )) : this.maxPowerParDefaultScale.$clone());
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.maxPowerPar.transform);
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, targetPlayerScale.$clone(), this.scaleTransitionDuration), DG.Tweening.Ease.OutBack), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScaleY(this.transform, targetPlayerScale.y * this.bounceYMultiplier, this.bounceDuration), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
                }));
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null) && isMaxLevel) {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.maxPowerPar.transform, targetParScale.$clone(), this.scaleTransitionDuration), DG.Tweening.Ease.OutBack), Bridge.fn.bind(this, function () {
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScaleY(this.maxPowerPar.transform, targetParScale.y * this.bounceYMultiplier, this.bounceDuration), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
                    }));
                }
            },
            /*PlayerVisual.StartBouncing end.*/

            /*PlayerVisual.ClearPlayerVisual start.*/
            ClearPlayerVisual: function () {
if ( TRACE ) { TRACE( "PlayerVisual#ClearPlayerVisual", this ); }

                this.AssingPlayerVisual(null);
            },
            /*PlayerVisual.ClearPlayerVisual end.*/

            /*PlayerVisual.SetVisualEnable start.*/
            SetVisualEnable: function (enableState) {
if ( TRACE ) { TRACE( "PlayerVisual#SetVisualEnable", this ); }

                if (UnityEngine.Component.op_Inequality(this.playerSpriteRenderer, null)) {
                    this.playerSpriteRenderer.enabled = enableState;
                }
                if (UnityEngine.Component.op_Inequality(this.fakeShadowRenderer, null)) {
                    this.fakeShadowRenderer.enabled = enableState;
                }
                if (UnityEngine.Component.op_Inequality(this.maxPowerPar, null)) {
                    this.maxPowerPar.gameObject.SetActive(enableState);
                }
            },
            /*PlayerVisual.SetVisualEnable end.*/


        }
    });
    /*PlayerVisual end.*/

    /*Ply_GameUnit start.*/
    Bridge.define("Ply_GameUnit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tf: null
        }
    });
    /*Ply_GameUnit end.*/

    /*Ply_Singleton$1 start.*/
    Bridge.define("Ply_Singleton$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: Bridge.getDefaultValue(T)
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Ply_Singleton$1#init", this ); }

                    this.Ins = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*Ply_Singleton$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ply_Singleton$1#Awake", this ); }

                Ply_Singleton$1(T).Ins = Bridge.rValue(this.GetComponent(T));
            },
            /*Ply_Singleton$1.Awake end.*/


        }
    }; });
    /*Ply_Singleton$1 end.*/

    /*Ply_Pool+PoolAmount start.*/
    Bridge.define("Ply_Pool.PoolAmount", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Ply_Pool.PoolAmount#getDefaultValue", this ); }
 return new Ply_Pool.PoolAmount(); }
            }
        },
        fields: {
            type: 0,
            amount: 0,
            gameUnit: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Ply_Pool.PoolAmount#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Ply_Pool.PoolAmount#getHashCode", this ); }

                var h = Bridge.addHash([3789508863, this.type, this.amount, this.gameUnit]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Ply_Pool.PoolAmount#equals", this ); }

                if (!Bridge.is(o, Ply_Pool.PoolAmount)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.amount, o.amount) && Bridge.equals(this.gameUnit, o.gameUnit);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Ply_Pool.PoolAmount#$clone", this ); }

                var s = to || new Ply_Pool.PoolAmount();
                s.type = this.type;
                s.amount = this.amount;
                s.gameUnit = this.gameUnit;
                return s;
            }
        }
    });
    /*Ply_Pool+PoolAmount end.*/

    /*PoolType start.*/
    Bridge.define("PoolType", {
        $kind: 6,
        statics: {
            fields: {
                Bullet: 0,
                Enemy: 1,
                VFX_Spark: 2,
                VFX_Explore: 3,
                Enemy_Bullet: 4,
                Booster: 5,
                CorrectEffect: 6,
                CorrectText1: 7,
                CorrectText2: 8,
                CorrectText3: 9,
                BlinkFX: 10
            }
        }
    });
    /*PoolType end.*/

    /*ProgressTrackingManager start.*/
    Bridge.define("ProgressTrackingManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            maxScore: 0,
            choiceBoardPlacer: null,
            currentScore: 0,
            currentPercent: 0,
            isStarted: false,
            pass25: false,
            pass50: false,
            pass75: false,
            pass100: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProgressTrackingManager#init", this ); }

                this.maxScore = 5;
                this.currentScore = 0;
                this.currentPercent = 0;
                this.isStarted = false;
                this.pass25 = false;
                this.pass50 = false;
                this.pass75 = false;
                this.pass100 = false;
            }
        },
        methods: {
            /*ProgressTrackingManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ProgressTrackingManager#Awake", this ); }

                AppLovinAnalytics.Track(ALEvent.LOADING);
                UnityEngine.Debug.Log$1("Track: Loading");
                if (UnityEngine.MonoBehaviour.op_Equality(ProgressTrackingManager.Instance, null)) {
                    ProgressTrackingManager.Instance = this;
                } else if (UnityEngine.MonoBehaviour.op_Inequality(ProgressTrackingManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*ProgressTrackingManager.Awake end.*/

            /*ProgressTrackingManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ProgressTrackingManager#Start", this ); }

                AppLovinAnalytics.Track(ALEvent.LOADED);
                AppLovinAnalytics.Track(ALEvent.DISPLAYED);
                UnityEngine.Debug.Log$1("Track: Displayed");
                var dynamicMaxScore = this.GetDynamicMaxScore();
                if (dynamicMaxScore > 0) {
                    this.maxScore = dynamicMaxScore;
                }
                AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
                UnityEngine.Debug.Log$1("Track: Challenge Started");
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*ProgressTrackingManager.Start end.*/

            /*ProgressTrackingManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "ProgressTrackingManager#OnDestroy", this ); }

                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*ProgressTrackingManager.OnDestroy end.*/

            /*ProgressTrackingManager.AddProgress start.*/
            AddProgress: function (amount) {
if ( TRACE ) { TRACE( "ProgressTrackingManager#AddProgress", this ); }

                if (amount === void 0) { amount = 1; }
                this.UpdateGameProgress(((this.currentScore + amount) | 0));
            },
            /*ProgressTrackingManager.AddProgress end.*/

            /*ProgressTrackingManager.UpdateGameProgress start.*/
            UpdateGameProgress: function (score) {
if ( TRACE ) { TRACE( "ProgressTrackingManager#UpdateGameProgress", this ); }

                this.currentScore = score;
                var dynamicMaxScore = this.GetDynamicMaxScore();
                if (dynamicMaxScore > 0) {
                    this.maxScore = dynamicMaxScore;
                }
                if (!this.isStarted && this.currentScore > 0) {
                    this.isStarted = true;
                }
                if (this.maxScore > 0) {
                    var progressPercent = ((this.currentPercent = (Bridge.Int.div(Bridge.Int.mul(this.currentScore, 100), this.maxScore)) | 0));
                    if (progressPercent >= 25 && !this.pass25) {
                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
                        UnityEngine.Debug.Log$1("Track: Challenge Pass 25%");
                        this.pass25 = true;
                    }
                    if (progressPercent >= 50 && !this.pass50) {
                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
                        UnityEngine.Debug.Log$1("Track: Challenge Pass 50%");
                        this.pass50 = true;
                    }
                    if (progressPercent >= 75 && !this.pass75) {
                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
                        UnityEngine.Debug.Log$1("Track: Challenge Pass 75%");
                        this.pass75 = true;
                    }
                    if (progressPercent >= 100 && !this.pass100) {
                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
                        UnityEngine.Debug.Log$1("Track: Challenge Pass 100% (Solved)");
                        this.pass100 = true;
                    }
                }
            },
            /*ProgressTrackingManager.UpdateGameProgress end.*/

            /*ProgressTrackingManager.OnGameEnded start.*/
            OnGameEnded: function (winState) {
if ( TRACE ) { TRACE( "ProgressTrackingManager#OnGameEnded", this ); }

                if (winState) {
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
                    UnityEngine.Debug.Log$1("Track: Challenge Solved");
                } else {
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
                }
            },
            /*ProgressTrackingManager.OnGameEnded end.*/

            /*ProgressTrackingManager.GetDynamicMaxScore start.*/
            GetDynamicMaxScore: function () {
if ( TRACE ) { TRACE( "ProgressTrackingManager#GetDynamicMaxScore", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.choiceBoardPlacer, null)) {
                    var count = this.choiceBoardPlacer.SpawnedCount;
                    if (count > 0) {
                        return count;
                    }
                }
                return this.maxScore;
            },
            /*ProgressTrackingManager.GetDynamicMaxScore end.*/


        }
    });
    /*ProgressTrackingManager end.*/

    /*RonaldoPenalty.PenaltyBallController start.*/
    Bridge.define("RonaldoPenalty.PenaltyBallController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leftTop: null,
            bottomCenter: null,
            rightTop: null,
            leftTopY: 0,
            bottomCenterY: 0,
            rightTopY: 0,
            halfWidth: 0,
            goalZ: 0,
            flightTime: 0,
            trailRenderer: null,
            goalTag: null,
            initialPosition: null,
            initialRotation: null,
            isFlying: false,
            hasResolved: false,
            isGoalScored: false,
            currentIsInsideGoal: false,
            currentShotTarget: null,
            blockBounceSpeed: 0,
            blockBounceUpward: 0,
            goalFallSpeed: 0,
            goalFallDownward: 0,
            goalDropDamping: 0,
            rb: null,
            currentShotDirection: null
        },
        events: {
            OnGoal: null,
            OnBlocked: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#init", this ); }

                this.initialPosition = new UnityEngine.Vector3();
                this.initialRotation = new UnityEngine.Quaternion();
                this.currentShotTarget = new UnityEngine.Vector3();
                this.currentShotDirection = new UnityEngine.Vector3();
                this.leftTopY = 2.25;
                this.bottomCenterY = 0.18;
                this.rightTopY = 2.25;
                this.halfWidth = 3.2;
                this.goalZ = 10.0;
                this.flightTime = 0.65;
                this.goalTag = "Goal";
                this.isFlying = false;
                this.hasResolved = false;
                this.isGoalScored = false;
                this.currentIsInsideGoal = true;
                this.blockBounceSpeed = 65.0;
                this.blockBounceUpward = 0.45;
                this.goalFallSpeed = 8.0;
                this.goalFallDownward = -1.2;
                this.goalDropDamping = 0.25;
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyBallController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#Awake", this ); }

                this.initialPosition = this.transform.position.$clone();
                this.initialRotation = this.transform.rotation.$clone();
                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Equality(this.bottomCenter, null) && this.initialPosition.y > 0.0) {
                    this.bottomCenterY = this.initialPosition.y;
                }
                if (UnityEngine.Component.op_Inequality(this.bottomCenter, null)) {
                    this.goalZ = this.bottomCenter.position.z;
                }
                var lWorld = ((UnityEngine.Component.op_Inequality(this.leftTop, null)) ? this.leftTop.position.$clone() : new pc.Vec3( 0.0 - this.halfWidth, this.leftTopY, this.goalZ ));
                var cWorld = ((UnityEngine.Component.op_Inequality(this.bottomCenter, null)) ? this.bottomCenter.position.$clone() : new pc.Vec3( 0.0, this.bottomCenterY, this.goalZ ));
                var rWorld = ((UnityEngine.Component.op_Inequality(this.rightTop, null)) ? this.rightTop.position.$clone() : new pc.Vec3( this.halfWidth, this.rightTopY, this.goalZ ));
                UnityEngine.Debug.Log$1(System.String.format("<color=cyan>[BALL DEBUG][Awake]</color> LeftTop(world)={0} | BottomCenter(world)={1} | RightTop(world)={2} | goalZ(field)={3}", lWorld.$clone(), cWorld.$clone(), rWorld.$clone(), Bridge.box(this.goalZ, System.Single, System.Single.format, System.Single.getHashCode)));
            },
            /*RonaldoPenalty.PenaltyBallController.Awake end.*/

            /*RonaldoPenalty.PenaltyBallController.SetVShapeMarkers start.*/
            SetVShapeMarkers: function (left, center, right) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#SetVShapeMarkers", this ); }

                this.leftTop = left;
                this.bottomCenter = center;
                this.rightTop = right;
            },
            /*RonaldoPenalty.PenaltyBallController.SetVShapeMarkers end.*/

            /*RonaldoPenalty.PenaltyBallController.SetGoalCenter start.*/
            SetGoalCenter: function (center, width) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#SetGoalCenter", this ); }

                if (width === void 0) { width = 3.2; }
                this.halfWidth = width;
                if (UnityEngine.Component.op_Inequality(center, null)) {
                    this.bottomCenter = center;
                    this.goalZ = center.position.z;
                }
            },
            /*RonaldoPenalty.PenaltyBallController.SetGoalCenter end.*/

            /*RonaldoPenalty.PenaltyBallController.ResetBall start.*/
            ResetBall: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#ResetBall", this ); }

                this.StopAllCoroutines();
                this.isFlying = false;
                this.hasResolved = false;
                this.isGoalScored = false;
                this.currentIsInsideGoal = true;
                this.transform.position = this.initialPosition.$clone();
                this.transform.rotation = this.initialRotation.$clone();
                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    this.rb.linearVelocity = pc.Vec3.ZERO.clone();
                    this.rb.angularVelocity = pc.Vec3.ZERO.clone();
                    this.rb.linearDamping = 0.0;
                }
                if (UnityEngine.Component.op_Inequality(this.trailRenderer, null)) {
                    this.trailRenderer.Clear();
                    this.trailRenderer.enabled = false;
                }
                var vector = this.initialPosition.$clone();
                UnityEngine.Debug.Log$1("<color=cyan>[BALL]</color> Reset Ball v\u1ec1 v\u1ecb tr\u00ed xu\u1ea5t ph\u00e1t: " + (Bridge.toString(vector) || ""));
            },
            /*RonaldoPenalty.PenaltyBallController.ResetBall end.*/

            /*RonaldoPenalty.PenaltyBallController.Shoot start.*/
            Shoot: function (crosshairPos) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#Shoot", this ); }

                if (!this.isFlying) {
                    this.isFlying = true;
                    this.hasResolved = false;
                    this.isGoalScored = false;
                    if (UnityEngine.Component.op_Inequality(this.trailRenderer, null)) {
                        this.trailRenderer.Clear();
                        this.trailRenderer.enabled = true;
                    }
                    var normalizedOffset = { };
                    var vShapeTarget = ((this.currentShotTarget = this.CalculateVShapeTargetByX(crosshairPos.x, normalizedOffset, Bridge.ref(this, "currentIsInsideGoal"))));
                    this.currentShotDirection = (vShapeTarget.$clone().sub( this.transform.position )).clone().normalize().$clone();
                    var arcApex = pc.math.lerp(0.06, 1.15, normalizedOffset.v * normalizedOffset.v);
                    UnityEngine.Debug.Log$1(System.String.format("<color=yellow>[BALL SHOOT]</color> CrosshairX={0:F2} | V-Shape Target={1} | isInsideGoal={2} | arcApex={3:F2}", Bridge.box(crosshairPos.x, System.Single, System.Single.format, System.Single.getHashCode), vShapeTarget.$clone(), Bridge.box(this.currentIsInsideGoal, System.Boolean, System.Boolean.toString), Bridge.box(arcApex, System.Single, System.Single.format, System.Single.getHashCode)));
                    this.StartCoroutine$1(this.FlyTrajectory(vShapeTarget.$clone(), arcApex, normalizedOffset.v, this.currentIsInsideGoal));
                }
            },
            /*RonaldoPenalty.PenaltyBallController.Shoot end.*/

            /*RonaldoPenalty.PenaltyBallController.CalculateVShapeTargetByX start.*/
            CalculateVShapeTargetByX: function (crosshairX, normalizedOffset, isInsideGoal) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#CalculateVShapeTargetByX", this ); }

                var lPos = ((UnityEngine.Component.op_Inequality(this.leftTop, null)) ? this.leftTop.position.$clone() : new pc.Vec3( 0.0 - this.halfWidth, this.leftTopY, this.goalZ ));
                var cPos = ((UnityEngine.Component.op_Inequality(this.bottomCenter, null)) ? this.bottomCenter.position.$clone() : new pc.Vec3( 0.0, this.bottomCenterY, this.goalZ ));
                var rPos = ((UnityEngine.Component.op_Inequality(this.rightTop, null)) ? this.rightTop.position.$clone() : new pc.Vec3( this.halfWidth, this.rightTopY, this.goalZ ));
                var minX = UnityEngine.Mathf.Min(lPos.x, rPos.x);
                var maxX = UnityEngine.Mathf.Max(lPos.x, rPos.x);
                var midX = cPos.x;
                var lY = ((UnityEngine.Component.op_Inequality(this.leftTop, null)) ? this.leftTop.position.y : this.leftTopY);
                var cY = ((UnityEngine.Component.op_Inequality(this.bottomCenter, null)) ? this.bottomCenter.position.y : this.bottomCenterY);
                var rY = ((UnityEngine.Component.op_Inequality(this.rightTop, null)) ? this.rightTop.position.y : this.rightTopY);
                var gZ = ((UnityEngine.Component.op_Inequality(this.bottomCenter, null)) ? this.bottomCenter.position.z : this.goalZ);
                var goalTarget = new UnityEngine.Vector3();
                if (crosshairX < minX) {
                    isInsideGoal.v = false;
                    normalizedOffset.v = 1.0;
                    var outDist2 = minX - crosshairX;
                    goalTarget = new pc.Vec3( crosshairX, UnityEngine.Mathf.Max(lY, 1.8) + outDist2 * 0.35, gZ + 3.5 );
                    UnityEngine.Debug.Log$1(System.String.format("<color=red>[V-SHAPE]</color> CrosshairX={0:F2} < C\u1ed9t tr\u00e1i({1:F2}) -> S\u00daT RA NGO\u00c0I TR\u00c1I! Target={2}", Bridge.box(crosshairX, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(minX, System.Single, System.Single.format, System.Single.getHashCode), goalTarget.$clone()));
                } else if (crosshairX > maxX) {
                    isInsideGoal.v = false;
                    normalizedOffset.v = 1.0;
                    var outDist = crosshairX - maxX;
                    goalTarget = new pc.Vec3( crosshairX, UnityEngine.Mathf.Max(rY, 1.8) + outDist * 0.35, gZ + 3.5 );
                    UnityEngine.Debug.Log$1(System.String.format("<color=red>[V-SHAPE]</color> CrosshairX={0:F2} > C\u1ed9t ph\u1ea3i({1:F2}) -> S\u00daT RA NGO\u00c0I PH\u1ea2I! Target={2}", Bridge.box(crosshairX, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(maxX, System.Single, System.Single.format, System.Single.getHashCode), goalTarget.$clone()));
                } else {
                    isInsideGoal.v = true;
                    if (crosshairX <= midX) {
                        var range2 = midX - minX;
                        var t2 = ((range2 > 0.001) ? Math.max(0, Math.min(1, (crosshairX - minX) / range2)) : 0.5);
                        var targetY2 = pc.math.lerp(lY, cY, t2);
                        goalTarget = new pc.Vec3( crosshairX, targetY2, gZ );
                        normalizedOffset.v = 1.0 - t2;
                        UnityEngine.Debug.Log$1(System.String.format("<color=green>[V-SHAPE]</color> CrosshairX={0:F2} -> N\u1eecA TR\u00c1I G\u00d4N (t={1:F2}, Y={2:F2}), Target={3}", Bridge.box(crosshairX, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(t2, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(targetY2, System.Single, System.Single.format, System.Single.getHashCode), goalTarget.$clone()));
                    } else {
                        var range = maxX - midX;
                        var t = ((range > 0.001) ? Math.max(0, Math.min(1, (crosshairX - midX) / range)) : 0.5);
                        var targetY = pc.math.lerp(cY, rY, t);
                        goalTarget = new pc.Vec3( crosshairX, targetY, gZ );
                        normalizedOffset.v = t;
                        UnityEngine.Debug.Log$1(System.String.format("<color=green>[V-SHAPE]</color> CrosshairX={0:F2} -> N\u1eecA PH\u1ea2I G\u00d4N (t={1:F2}, Y={2:F2}), Target={3}", Bridge.box(crosshairX, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(t, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(targetY, System.Single, System.Single.format, System.Single.getHashCode), goalTarget.$clone()));
                    }
                }
                return goalTarget.$clone();
            },
            /*RonaldoPenalty.PenaltyBallController.CalculateVShapeTargetByX end.*/

            /*RonaldoPenalty.PenaltyBallController.FlyTrajectory start.*/
            FlyTrajectory: function (target, arcApex, normalizedOffset, isInsideGoal) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#FlyTrajectory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    elapsed,
                    spinSpeed,
                    t,
                    currentPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = this.transform.position.$clone();
                                        elapsed = 0.0;
                                        spinSpeed = ((isInsideGoal && normalizedOffset < 0.45) ? 850.0 : 650.0);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.flightTime && !this.hasResolved ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.flightTime));
                                        currentPos = new pc.Vec3().lerp( start, target, t );
                                        currentPos.y = pc.math.lerp(start.y, target.y, t) + arcApex * 4.0 * t * (1.0 - t);
                                        this.transform.position = currentPos.$clone();
                                        this.transform.Rotate$1(pc.Vec3.RIGHT.clone(), spinSpeed * UnityEngine.Time.deltaTime, UnityEngine.Space.World);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!this.hasResolved) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 5: {
                                    if (isInsideGoal) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    UnityEngine.Debug.Log$1("<color=yellow>[BALL]</color> \u0110\u00e3 bay h\u1ebft qu\u1ef9 \u0111\u1ea1o t\u1edbi target nh\u01b0ng CH\u01afA va ch\u1ea1m Goal/Net -> ti\u1ebfp t\u1ee5c bay ch\u1edd va ch\u1ea1m th\u1eadt...");
                                        $enumerator.current = this.StartCoroutine$1(this.FlyIntoGoalUntilHit(target.$clone(), start.$clone(), spinSpeed));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    return false;
                                }
                                case 8: {
                                    this.hasResolved = true;
                                        this.isFlying = false;
                                        UnityEngine.Debug.Log$1("<color=red>[BALL MISS]</color> B\u00f3ng bay ra ngo\u00e0i s\u00e2n! Ti\u1ebfp t\u1ee5c bay 3s...");
                                        $enumerator.current = this.StartCoroutine$1(this.FlyOutOfBounds(target.$clone(), start.$clone(), spinSpeed));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    UnityEngine.Debug.Log$1("<color=red>[BALL MISS]</color> H\u1ebft 3s -> T\u00ednh MISS v\u00e0 chuy\u1ec3n hi\u1ec7p!");
                                        !Bridge.staticEquals(this.OnBlocked, null) ? this.OnBlocked() : null;
                                    $step = 10;
                                    continue;
                                }
                                case 10: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyBallController.FlyTrajectory end.*/

            /*RonaldoPenalty.PenaltyBallController.FlyIntoGoalUntilHit start.*/
            FlyIntoGoalUntilHit: function (target, start, spinSpeed) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#FlyIntoGoalUntilHit", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    flyDir,
                    speed,
                    elapsed,
                    maxWaitTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    flyDir = (target.$clone().sub( start )).clone().normalize().$clone();
                                        speed = pc.Vec3.distance( start, target ) / UnityEngine.Mathf.Max(this.flightTime, 0.01);
                                        elapsed = 0.0;
                                        maxWaitTime = 1.5;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < maxWaitTime && !this.hasResolved ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        this.transform.position = this.transform.position.$clone().add( flyDir.$clone().clone().scale( speed ).clone().scale( UnityEngine.Time.deltaTime ) );
                                        this.transform.Rotate$1(pc.Vec3.RIGHT.clone(), spinSpeed * UnityEngine.Time.deltaTime, UnityEngine.Space.World);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!this.hasResolved) {
                                            this.hasResolved = true;
                                            this.isFlying = false;
                                            UnityEngine.Debug.LogWarning$1(System.String.format("<color=red>[BALL] KH\u00d4NG t\u00ecm th\u1ea5y va ch\u1ea1m v\u1edbi collider Goal/Net sau {0:F1}s ch\u1edd th\u00eam!</color> Ki\u1ec3m tra l\u1ea1i Collider l\u01b0\u1edbi/khung th\u00e0nh c\u00f3 che \u0111\u00fang v\u00f9ng ch\u1eef V kh\u00f4ng. T\u1ea1m t\u00ednh MISS \u0111\u1ec3 kh\u00f4ng b\u1ecba goal gi\u1ea3.", [Bridge.box(maxWaitTime, System.Single, System.Single.format, System.Single.getHashCode)]));
                                            !Bridge.staticEquals(this.OnBlocked, null) ? this.OnBlocked() : null;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyBallController.FlyIntoGoalUntilHit end.*/

            /*RonaldoPenalty.PenaltyBallController.FlyOutOfBounds start.*/
            FlyOutOfBounds: function (target, start, spinSpeed) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#FlyOutOfBounds", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    flyDir,
                    speed,
                    elapsed,
                    continueTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    flyDir = (target.$clone().sub( start )).clone().normalize().$clone();
                                        speed = pc.Vec3.distance( start, target ) / this.flightTime;
                                        elapsed = 0.0;
                                        continueTime = 3.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < continueTime ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        this.transform.position = this.transform.position.$clone().add( flyDir.$clone().clone().scale( speed ).clone().scale( UnityEngine.Time.deltaTime ) );
                                        this.transform.Rotate$1(pc.Vec3.RIGHT.clone(), spinSpeed * UnityEngine.Time.deltaTime, UnityEngine.Space.World);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyBallController.FlyOutOfBounds end.*/

            /*RonaldoPenalty.PenaltyBallController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#OnTriggerEnter", this ); }

                this.HandleCollision(other.gameObject, "OnTriggerEnter");
            },
            /*RonaldoPenalty.PenaltyBallController.OnTriggerEnter end.*/

            /*RonaldoPenalty.PenaltyBallController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#OnCollisionEnter", this ); }

                this.HandleCollision(collision.gameObject, "OnCollisionEnter");
            },
            /*RonaldoPenalty.PenaltyBallController.OnCollisionEnter end.*/

            /*RonaldoPenalty.PenaltyBallController.HandleCollision start.*/
            HandleCollision: function (hitObj, collisionType) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#HandleCollision", this ); }

                var objName = hitObj.name.toLowerCase();
                if (System.String.contains(objName,"ronaldo") || System.String.contains(objName,"player") || System.String.contains(objName,"crosshair") || System.String.contains(objName,"marker") || System.String.contains(objName,"s\u00e2n") || System.String.contains(objName,"pitch") || System.String.contains(objName,"grass")) {
                    return;
                }
                UnityEngine.Debug.Log$1(System.String.format("<color=orange>[BALL COLLISION - {0}]</color> Ch\u1ea1m v\u00e0o: <b>{1}</b> (Tag: {2}) t\u1ea1i Pos={3} | Ball Pos={4}", collisionType, hitObj.name, hitObj.tag, hitObj.transform.position.$clone(), this.transform.position.$clone()));
                if (this.isGoalScored) {
                    UnityEngine.Debug.Log$1("<color=grey>[BALL IGNORE]</color> \u0110\u00e3 ghi b\u00e0n r\u1ed3i, b\u1ecf qua va ch\u1ea1m v\u1edbi " + (hitObj.name || ""));
                } else {
                    if (!this.isFlying || this.hasResolved) {
                        return;
                    }
                    if (!System.String.contains(objName,"goalkeeper") && !hitObj.CompareTag("Goalkeeper") && (hitObj.CompareTag(this.goalTag) || System.String.contains(objName,"goal") || System.String.contains(objName,"net"))) {
                        var beforeNetSnap = this.transform.position.$clone();
                        UnityEngine.Debug.Log$1(System.String.format("<color=green>[BALL GOAL]</color> Ch\u1ea1m v\u00e0o {0} -> GOAL! (currentIsInsideGoal={1})", hitObj.name, Bridge.box(this.currentIsInsideGoal, System.Boolean, System.Boolean.toString)));
                        this.isGoalScored = true;
                        this.hasResolved = true;
                        this.isFlying = false;
                        this.StopAllCoroutines();
                        if (this.currentIsInsideGoal) {
                            this.transform.position = this.currentShotTarget.$clone();
                        }
                        UnityEngine.Debug.Log$1(System.String.format("<color=cyan>[BALL DEBUG][SNAP-NetHit]</color> BeforeSnap={0} -> AfterSnap={1} (currentShotTarget={2})", beforeNetSnap.$clone(), this.transform.position.$clone(), this.currentShotTarget.$clone()));
                        !Bridge.staticEquals(this.OnGoal, null) ? this.OnGoal() : null;
                        this.ApplyGoalPhysics();
                    } else if (!this.currentIsInsideGoal) {
                        UnityEngine.Debug.Log$1("<color=grey>[BALL OUT OF BOUNDS]</color> C\u00fa s\u00fat ra ngo\u00e0i, b\u1ecf qua va ch\u1ea1m v\u1edbi " + (hitObj.name || ""));
                    } else {
                        if (!hitObj.CompareTag("Goalkeeper") && !hitObj.CompareTag("Defender") && !(UnityEngine.MonoBehaviour.op_Inequality(hitObj.GetComponentInParent(RonaldoPenalty.PenaltyGoalkeeperAI), null)) && !(UnityEngine.MonoBehaviour.op_Inequality(hitObj.GetComponentInParent(RonaldoPenalty.PenaltyDefenderAI), null)) && !System.String.contains(objName,"goalkeeper") && !System.String.contains(objName,"defender") && !System.String.contains(objName,"gk")) {
                            return;
                        }
                        if (this.transform.position.z >= this.goalZ - 0.4) {
                            var beforeSnap = this.transform.position.$clone();
                            UnityEngine.Debug.Log$1(System.String.format("<color=green>[BALL GOAL]</color> B\u00f3ng \u0111\u00e3 qua v\u1ea1ch v\u00f4i (Z={0:F2}) tr\u01b0\u1edbc khi ch\u1ea1m Blocker {1} -> GOAL!", Bridge.box(this.transform.position.z, System.Single, System.Single.format, System.Single.getHashCode), hitObj.name));
                            this.isGoalScored = true;
                            this.hasResolved = true;
                            this.isFlying = false;
                            this.StopAllCoroutines();
                            this.transform.position = this.currentShotTarget.$clone();
                            UnityEngine.Debug.Log$1(System.String.format("<color=cyan>[BALL DEBUG][SNAP-BlockerButGoal]</color> BeforeSnap={0} -> AfterSnap={1} (currentShotTarget={2}) | DeltaY={3:F4}", beforeSnap.$clone(), this.transform.position.$clone(), this.currentShotTarget.$clone(), Bridge.box(this.transform.position.y - beforeSnap.y, System.Single, System.Single.format, System.Single.getHashCode)));
                            !Bridge.staticEquals(this.OnGoal, null) ? this.OnGoal() : null;
                            this.ApplyGoalPhysics();
                            return;
                        }
                        UnityEngine.Debug.Log$1("<color=red>[BALL BLOCKED]</color> B\u1ecb ch\u1eb7n b\u1edfi " + (hitObj.name || "") + "! B\u1eafn Rigidbody n\u1ea3y ng\u01b0\u1ee3c l\u1ea1i!");
                        this.hasResolved = true;
                        this.isFlying = false;
                        this.StopAllCoroutines();
                        var reflectDir = (this.transform.position.$clone().sub( hitObj.transform.position )).clone().normalize().$clone();
                        reflectDir.y = this.blockBounceUpward;
                        reflectDir.z = 0.0 - Math.abs(reflectDir.z);
                        reflectDir.normalize();
                        if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                            this.rb.linearVelocity = pc.Vec3.ZERO.clone();
                            this.rb.angularVelocity = pc.Vec3.ZERO.clone();
                            this.rb.linearVelocity = reflectDir.$clone().clone().scale( this.blockBounceSpeed );
                            UnityEngine.Debug.Log$1(System.String.format("<color=cyan>[BALL DEBUG][PHYSICS BOUNCE]</color> reflectDir={0} | velocity={1} | isKinematic={2} | mass={3}", reflectDir.$clone(), this.rb.linearVelocity.$clone(), Bridge.box(this.rb.isKinematic, System.Boolean, System.Boolean.toString), Bridge.box(this.rb.mass, System.Single, System.Single.format, System.Single.getHashCode)));
                            this.StartCoroutine$1(this.LogVelocityFramesForDebug());
                        } else {
                            UnityEngine.Debug.LogError$2("<color=red>[BALL DEBUG] rb (Rigidbody) \u0111ang NULL -> kh\u00f4ng set \u0111\u01b0\u1ee3c velocity n\u1ea3y!</color> Ki\u1ec3m tra l\u1ea1i Ball GameObject c\u00f3 \u0111\u00fang component Rigidbody kh\u00f4ng.");
                        }
                        !Bridge.staticEquals(this.OnBlocked, null) ? this.OnBlocked() : null;
                    }
                }
            },
            /*RonaldoPenalty.PenaltyBallController.HandleCollision end.*/

            /*RonaldoPenalty.PenaltyBallController.LogVelocityFramesForDebug start.*/
            LogVelocityFramesForDebug: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#LogVelocityFramesForDebug", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < 10 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (UnityEngine.Component.op_Equality(this.rb, null)) {
                                            $step = 5;
                                            continue;
                                        }
                                        UnityEngine.Debug.Log$1(System.String.format("<color=magenta>[BALL DEBUG][BOUNCE FRAME {0}]</color> velocity={1} | pos={2} | isKinematic={3}", Bridge.box(i, System.Int32), this.rb.linearVelocity.$clone(), this.transform.position.$clone(), Bridge.box(this.rb.isKinematic, System.Boolean, System.Boolean.toString)));
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyBallController.LogVelocityFramesForDebug end.*/

            /*RonaldoPenalty.PenaltyBallController.ApplyGoalPhysics start.*/
            ApplyGoalPhysics: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#ApplyGoalPhysics", this ); }

                if (!(UnityEngine.Component.op_Equality(this.rb, null))) {
                    this.rb.linearVelocity = pc.Vec3.ZERO.clone();
                    this.rb.angularVelocity = pc.Vec3.ZERO.clone();
                    var dir = this.currentShotDirection.$clone();
                    dir.y = this.goalFallDownward;
                    dir.normalize();
                    this.rb.linearVelocity = dir.$clone().clone().scale( this.goalFallSpeed );
                    this.rb.linearDamping = this.goalDropDamping;
                    UnityEngine.Debug.Log$1(System.String.format("<color=cyan>[BALL DEBUG][GOAL PHYSICS]</color> direction={0} | velocity={1} | damping={2}", this.currentShotDirection.$clone(), this.rb.linearVelocity.$clone(), Bridge.box(this.rb.linearDamping, System.Single, System.Single.format, System.Single.getHashCode)));
                }
            },
            /*RonaldoPenalty.PenaltyBallController.ApplyGoalPhysics end.*/

            /*RonaldoPenalty.PenaltyBallController.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyBallController#OnDrawGizmosSelected", this ); }

                var lPos = ((UnityEngine.Component.op_Inequality(this.leftTop, null)) ? this.leftTop.position.$clone() : new pc.Vec3( 0.0 - this.halfWidth, this.leftTopY, this.goalZ ));
                var cPos = ((UnityEngine.Component.op_Inequality(this.bottomCenter, null)) ? this.bottomCenter.position.$clone() : new pc.Vec3( 0.0, this.bottomCenterY, this.goalZ ));
                var rPos = ((UnityEngine.Component.op_Inequality(this.rightTop, null)) ? this.rightTop.position.$clone() : new pc.Vec3( this.halfWidth, this.rightTopY, this.goalZ ));
                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 0.2, 0.95, 0.35, 0.95 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
            },
            /*RonaldoPenalty.PenaltyBallController.OnDrawGizmosSelected end.*/


        }
    });
    /*RonaldoPenalty.PenaltyBallController end.*/

    /*RonaldoPenalty.PenaltyDefenderAI start.*/
    Bridge.define("RonaldoPenalty.PenaltyDefenderAI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leftLimit: null,
            rightLimit: null,
            speed: 0,
            startActive: false,
            t: 0,
            direction: 0,
            isMoving: false,
            initialPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#init", this ); }

                this.initialPosition = new UnityEngine.Vector3();
                this.speed = 2.2;
                this.startActive = false;
                this.t = 0.5;
                this.direction = 1;
                this.isMoving = false;
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyDefenderAI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#Awake", this ); }

                this.initialPosition = this.transform.position.$clone();
                if (this.startActive) {
                    this.Activate();
                } else {
                    this.isMoving = false;
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.Awake end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.SetBounds start.*/
            SetBounds: function (left, right) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#SetBounds", this ); }

                this.leftLimit = left;
                this.rightLimit = right;
                this.CalculateCurrentT();
            },
            /*RonaldoPenalty.PenaltyDefenderAI.SetBounds end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.SetSpeed start.*/
            SetSpeed: function (newSpeed) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#SetSpeed", this ); }

                this.speed = newSpeed;
            },
            /*RonaldoPenalty.PenaltyDefenderAI.SetSpeed end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.Activate start.*/
            Activate: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#Activate", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                this.isMoving = true;
                this.direction = 1;
                this.CalculateCurrentT();
            },
            /*RonaldoPenalty.PenaltyDefenderAI.Activate end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.Deactivate start.*/
            Deactivate: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#Deactivate", this ); }

                this.isMoving = false;
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                if (!pc.Vec3.equals( this.initialPosition, pc.Vec3.ZERO.clone() )) {
                    this.transform.position = this.initialPosition.$clone();
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.Deactivate end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.ResetPosition start.*/
            ResetPosition: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#ResetPosition", this ); }

                if (!pc.Vec3.equals( this.initialPosition, pc.Vec3.ZERO.clone() )) {
                    this.transform.position = this.initialPosition.$clone();
                }
                this.CalculateCurrentT();
                this.direction = 1;
            },
            /*RonaldoPenalty.PenaltyDefenderAI.ResetPosition end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.CalculateCurrentT start.*/
            CalculateCurrentT: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#CalculateCurrentT", this ); }

                if (UnityEngine.Component.op_Inequality(this.leftLimit, null) && UnityEngine.Component.op_Inequality(this.rightLimit, null)) {
                    var segment = this.rightLimit.position.$clone().sub( this.leftLimit.position );
                    var sqrMag = segment.lengthSq();
                    if (sqrMag > 0.0001) {
                        var offset = this.transform.position.$clone().sub( this.leftLimit.position );
                        this.t = Math.max(0, Math.min(1, offset.dot( segment ) / sqrMag));
                    } else {
                        this.t = 0.5;
                    }
                } else {
                    this.t = 0.5;
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.CalculateCurrentT end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.SetupRound start.*/
            SetupRound: function (round) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#SetupRound", this ); }

                if (round <= 1) {
                    this.Deactivate();
                } else {
                    this.Activate();
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.SetupRound end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#Update", this ); }

                if (this.isMoving && !(UnityEngine.Component.op_Equality(this.leftLimit, null)) && !(UnityEngine.Component.op_Equality(this.rightLimit, null))) {
                    this.t += this.direction * this.speed * UnityEngine.Time.deltaTime;
                    if (this.t >= 1.0) {
                        this.t = 1.0;
                        this.direction = -1;
                    }
                    if (this.t <= 0.0) {
                        this.t = 0.0;
                        this.direction = 1;
                    }
                    var smoothT = pc.math.smoothstep(0.0, 1.0, this.t);
                    this.transform.position = new pc.Vec3().lerp( this.leftLimit.position, this.rightLimit.position, smoothT );
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.Update end.*/

            /*RonaldoPenalty.PenaltyDefenderAI.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyDefenderAI#OnDrawGizmosSelected", this ); }

                if (UnityEngine.Component.op_Inequality(this.leftLimit, null) && UnityEngine.Component.op_Inequality(this.rightLimit, null)) {
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 0, 1, 1, 1 );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                }
            },
            /*RonaldoPenalty.PenaltyDefenderAI.OnDrawGizmosSelected end.*/


        }
    });
    /*RonaldoPenalty.PenaltyDefenderAI end.*/

    /*RonaldoPenalty.PenaltyGameManager start.*/
    Bridge.define("RonaldoPenalty.PenaltyGameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            ball: null,
            targetMover: null,
            goalkeeper: null,
            ronaldoAnimator: null,
            uiManager: null,
            defenderRound2: null,
            defenderRound3: null,
            targetSpeeds: null,
            delayBetweenRounds: 0,
            kickImpactDelay: 0,
            promptEveryRound: false,
            currentState: 0,
            currentRound: 0,
            totalGoals: 0,
            isTapToStoreActive: false,
            isChallengeStarted: false,
            pass25Tracked: false,
            pass50Tracked: false,
            pass75Tracked: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#init", this ); }

                this.targetSpeeds = System.Array.init([2.0, 2.8, 3.6], System.Single);
                this.delayBetweenRounds = 1.2;
                this.kickImpactDelay = 0.35;
                this.promptEveryRound = false;
                this.currentRound = 1;
                this.totalGoals = 0;
                this.isTapToStoreActive = false;
                this.isChallengeStarted = false;
                this.pass25Tracked = false;
                this.pass50Tracked = false;
                this.pass75Tracked = false;
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyGameManager.SetupDependencies start.*/
            SetupDependencies: function (b, t, gk, def2, def3, anim, ui) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#SetupDependencies", this ); }

                this.ball = b;
                this.targetMover = t;
                this.goalkeeper = gk;
                this.defenderRound2 = def2;
                this.defenderRound3 = def3;
                this.ronaldoAnimator = anim;
                this.uiManager = ui;
            },
            /*RonaldoPenalty.PenaltyGameManager.SetupDependencies end.*/

            /*RonaldoPenalty.PenaltyGameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#Awake", this ); }

                AppLovinAnalytics.Track(ALEvent.LOADING);
                if (UnityEngine.MonoBehaviour.op_Inequality(RonaldoPenalty.PenaltyGameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(RonaldoPenalty.PenaltyGameManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                    return;
                }
                RonaldoPenalty.PenaltyGameManager.Instance = this;
                this.ResolveUIManager();
            },
            /*RonaldoPenalty.PenaltyGameManager.Awake end.*/

            /*RonaldoPenalty.PenaltyGameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#Start", this ); }

                AppLovinAnalytics.Track(ALEvent.LOADED);
                AppLovinAnalytics.Track(ALEvent.DISPLAYED);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.ball, null)) {
                    this.ball.addOnGoal(Bridge.fn.cacheBind(this, this.HandleGoal));
                    this.ball.addOnBlocked(Bridge.fn.cacheBind(this, this.HandleMiss));
                }
                this.ResolveUIManager();
                this.InitGameFlow();
            },
            /*RonaldoPenalty.PenaltyGameManager.Start end.*/

            /*RonaldoPenalty.PenaltyGameManager.ResolveUIManager start.*/
            ResolveUIManager: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#ResolveUIManager", this ); }

                var $t;
                if (!(UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) && this.uiManager.HasValidSprites) {
                    return;
                }
                var myMgr = this.GetComponent(RonaldoPenalty.PenaltyUIManager);
                if (UnityEngine.MonoBehaviour.op_Inequality(myMgr, null) && myMgr.HasValidSprites) {
                    this.uiManager = myMgr;
                    return;
                }
                var allUIs = UnityEngine.Object.FindObjectsOfType(RonaldoPenalty.PenaltyUIManager);
                var array = allUIs;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var u = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(u, null) && u.HasValidSprites) {
                            this.uiManager = u;
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                    this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.ResolveUIManager end.*/

            /*RonaldoPenalty.PenaltyGameManager.InitGameFlow start.*/
            InitGameFlow: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#InitGameFlow", this ); }

                this.currentRound = 1;
                this.totalGoals = 0;
                this.isTapToStoreActive = false;
                if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                    this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                    this.uiManager.ResetUI();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.ball, null)) {
                    this.ball.ResetBall();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound2, null)) {
                    this.defenderRound2.Deactivate();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound3, null)) {
                    this.defenderRound3.Deactivate();
                }
                this.StartRound(this.currentRound);
            },
            /*RonaldoPenalty.PenaltyGameManager.InitGameFlow end.*/

            /*RonaldoPenalty.PenaltyGameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#Update", this ); }

                if (this.isTapToStoreActive || this.currentState === RonaldoPenalty.PenaltyGameState.Result) {
                    if (UnityEngine.Input.GetMouseButtonDown(0) || UnityEngine.Input.GetMouseButtonUp(0) || (UnityEngine.Input.touchCount > 0 && (UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began || UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended))) {
                        UnityEngine.Debug.Log$1("<color=green>[PenaltyGameManager]</color> Tap to store detected!");
                        GameManager.GotoStore();
                    }
                } else if (UnityEngine.Input.GetMouseButtonDown(0) || (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began)) {
                    if (this.currentState === RonaldoPenalty.PenaltyGameState.WaitingForStart) {
                        this.StartAiming();
                    } else if (this.currentState === RonaldoPenalty.PenaltyGameState.Aiming) {
                        this.ExecuteShot();
                    }
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.Update end.*/

            /*RonaldoPenalty.PenaltyGameManager.StartAiming start.*/
            StartAiming: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#StartAiming", this ); }

                if (!this.isChallengeStarted) {
                    this.isChallengeStarted = true;
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
                    UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_STARTED");
                }
                this.currentState = RonaldoPenalty.PenaltyGameState.Aiming;
                if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                    this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                    this.uiManager.SetPromptVisible(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.targetMover, null)) {
                    var speedIdx = Math.max(0, Math.min(((this.currentRound - 1) | 0), ((this.targetSpeeds.length - 1) | 0)));
                    this.targetMover.SetSpeed(this.targetSpeeds[speedIdx]);
                    this.targetMover.StartMoving();
                }
                UnityEngine.Debug.Log$1(System.String.format("<color=yellow>[PenaltyGameManager]</color> Click 1: B\u1eaft \u0111\u1ea7u ch\u1ea1y TargetCrosshair (Round {0}) -> Ch\u1edd Click 2 \u0111\u1ec3 s\u00fat!", [Bridge.box(this.currentRound, System.Int32)]));
            },
            /*RonaldoPenalty.PenaltyGameManager.StartAiming end.*/

            /*RonaldoPenalty.PenaltyGameManager.StartRound start.*/
            StartRound: function (round) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#StartRound", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.goalkeeper, null)) {
                    this.goalkeeper.SetupRound(round);
                }
                if (round === 1) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound2, null)) {
                        this.defenderRound2.Deactivate();
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound3, null)) {
                        this.defenderRound3.Deactivate();
                    }
                } else if (round === 2) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound2, null)) {
                        this.defenderRound2.Activate();
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound3, null)) {
                        this.defenderRound3.Deactivate();
                    }
                } else if (round >= 3) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound2, null)) {
                        this.defenderRound2.Activate();
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound3, null)) {
                        this.defenderRound3.Activate();
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.ronaldoAnimator, null)) {
                    this.ronaldoAnimator.PlayIdle();
                }
                if (round === 1 || this.promptEveryRound) {
                    this.currentState = RonaldoPenalty.PenaltyGameState.WaitingForStart;
                    if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                        this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                        this.uiManager.SetPromptVisible(true);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.targetMover, null)) {
                        this.targetMover.StopMoving();
                        this.targetMover.Hide();
                    }
                    return;
                }
                this.currentState = RonaldoPenalty.PenaltyGameState.Aiming;
                if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                    this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                    this.uiManager.SetPromptVisible(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.targetMover, null)) {
                    var speedIdx = Math.max(0, Math.min(((round - 1) | 0), ((this.targetSpeeds.length - 1) | 0)));
                    this.targetMover.SetSpeed(this.targetSpeeds[speedIdx]);
                    this.targetMover.StartMoving();
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.StartRound end.*/

            /*RonaldoPenalty.PenaltyGameManager.ExecuteShot start.*/
            ExecuteShot: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#ExecuteShot", this ); }

                if (!this.isChallengeStarted) {
                    this.isChallengeStarted = true;
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_STARTED);
                    UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_STARTED");
                }
                this.currentState = RonaldoPenalty.PenaltyGameState.Shooting;
                if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                    this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                    this.uiManager.SetPromptVisible(false);
                }
                var crosshairPos = ((UnityEngine.MonoBehaviour.op_Inequality(this.targetMover, null)) ? this.targetMover.GetCurrentPosition() : pc.Vec3.ZERO.clone());
                if (UnityEngine.MonoBehaviour.op_Inequality(this.targetMover, null)) {
                    this.targetMover.StopMoving();
                    this.targetMover.Hide();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.ronaldoAnimator, null)) {
                    this.ronaldoAnimator.PlayKick();
                }
                this.StartCoroutine$1(this.ShootBallAfterDelay(crosshairPos.$clone(), this.kickImpactDelay));
            },
            /*RonaldoPenalty.PenaltyGameManager.ExecuteShot end.*/

            /*RonaldoPenalty.PenaltyGameManager.ShootBallAfterDelay start.*/
            ShootBallAfterDelay: function (crosshairPos, delay) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#ShootBallAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (delay > 0.0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.ball, null)) {
                                            this.ball.Shoot(crosshairPos.$clone());
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyGameManager.ShootBallAfterDelay end.*/

            /*RonaldoPenalty.PenaltyGameManager.TrackRoundProgress start.*/
            TrackRoundProgress: function (roundJustFinished) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#TrackRoundProgress", this ); }

                if (roundJustFinished === 1 && !this.pass25Tracked) {
                    this.pass25Tracked = true;
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_25);
                    UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_25 (\u0110\u00e3 ho\u00e0n th\u00e0nh l\u01b0\u1ee3t s\u00fat 1/3)");
                } else if (roundJustFinished === 2 && !this.pass50Tracked) {
                    this.pass50Tracked = true;
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_50);
                    UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_50 (\u0110\u00e3 ho\u00e0n th\u00e0nh l\u01b0\u1ee3t s\u00fat 2/3)");
                } else if (roundJustFinished >= 3 && !this.pass75Tracked) {
                    this.pass75Tracked = true;
                    AppLovinAnalytics.Track(ALEvent.CHALLENGE_PASS_75);
                    UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_PASS_75 (\u0110\u00e3 ho\u00e0n th\u00e0nh l\u01b0\u1ee3t s\u00fat 3/3)");
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.TrackRoundProgress end.*/

            /*RonaldoPenalty.PenaltyGameManager.HandleGoal start.*/
            HandleGoal: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#HandleGoal", this ); }

                if (this.currentState === RonaldoPenalty.PenaltyGameState.Shooting) {
                    this.currentState = RonaldoPenalty.PenaltyGameState.Result;
                    this.totalGoals = (this.totalGoals + 1) | 0;
                    if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                        this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                        this.uiManager.UpdateRoundResult(((this.currentRound - 1) | 0), true);
                    }
                    this.TrackRoundProgress(this.currentRound);
                    if (this.currentRound >= 3) {
                        this.StartCoroutine$1(this.EndGameEvaluationRoutine());
                        return;
                    }
                    this.currentRound = (this.currentRound + 1) | 0;
                    this.StartCoroutine$1(this.NextRoundRoutine());
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.HandleGoal end.*/

            /*RonaldoPenalty.PenaltyGameManager.HandleMiss start.*/
            HandleMiss: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#HandleMiss", this ); }

                if (this.currentState === RonaldoPenalty.PenaltyGameState.Shooting) {
                    this.currentState = RonaldoPenalty.PenaltyGameState.Result;
                    if (UnityEngine.MonoBehaviour.op_Equality(this.uiManager, null)) {
                        this.uiManager = RonaldoPenalty.PenaltyUIManager.Instance || UnityEngine.Object.FindObjectOfType(RonaldoPenalty.PenaltyUIManager);
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                        this.uiManager.UpdateRoundResult(((this.currentRound - 1) | 0), false);
                    }
                    this.TrackRoundProgress(this.currentRound);
                    if (this.currentRound >= 3) {
                        this.StartCoroutine$1(this.EndGameEvaluationRoutine());
                        return;
                    }
                    this.currentRound = (this.currentRound + 1) | 0;
                    this.StartCoroutine$1(this.NextRoundRoutine());
                }
            },
            /*RonaldoPenalty.PenaltyGameManager.HandleMiss end.*/

            /*RonaldoPenalty.PenaltyGameManager.NextRoundRoutine start.*/
            NextRoundRoutine: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#NextRoundRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenRounds);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.ball, null)) {
                                            this.ball.ResetBall();
                                        }
                                        this.StartRound(this.currentRound);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyGameManager.NextRoundRoutine end.*/

            /*RonaldoPenalty.PenaltyGameManager.EndGameEvaluationRoutine start.*/
            EndGameEvaluationRoutine: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#EndGameEvaluationRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    $t1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delayBetweenRounds);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.totalGoals >= 3) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    this.currentState = RonaldoPenalty.PenaltyGameState.Result;
                                        this.isTapToStoreActive = true;
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.ronaldoAnimator, null)) {
                                            this.ronaldoAnimator.PlayIdle();
                                        }
                                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_SOLVED);
                                        AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
                                        UnityEngine.Debug.Log$1("<color=green>[AppLovin Track]</color> CHALLENGE_SOLVED & ENDCARD_SHOWN (Win)");
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                                            this.uiManager.ShowWinEndcard(function () {
                                                GameManager.GotoStore();
                                            });
                                        } else {
                                            UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(FxType.PlayerWin) : null;
                                        }
                                        !Bridge.staticEquals(GameManager.OnGameEnded, null) ? GameManager.OnGameEnded(true) : null;
                                        return false;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    this.currentState = RonaldoPenalty.PenaltyGameState.Lose;
                                        AppLovinAnalytics.Track(ALEvent.CHALLENGE_FAILED);
                                        AppLovinAnalytics.Track(ALEvent.ENDCARD_SHOWN);
                                        UnityEngine.Debug.Log$1("<color=red>[AppLovin Track]</color> CHALLENGE_FAILED & ENDCARD_SHOWN (Lose)");
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                                            $step = 4;
                                            continue;
                                        } else  {
                                            $step = 5;
                                            continue;
                                        }
                                }
                                case 4: {
                                    this.uiManager.ShowLoseScreen(2.0, Bridge.fn.bind(this, function () {
                                            this.ResetToGameplayInitialState();
                                            this.isTapToStoreActive = true;
                                        }));
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    UnityEngine.MonoBehaviour.op_Inequality(($t1 = Ply_SoundManager.Instance), null) ? $t1.PlayFx(FxType.PlayerLoose) : null;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.ResetToGameplayInitialState();
                                        this.isTapToStoreActive = true;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    !Bridge.staticEquals(GameManager.OnGameEnded, null) ? GameManager.OnGameEnded(false) : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyGameManager.EndGameEvaluationRoutine end.*/

            /*RonaldoPenalty.PenaltyGameManager.ResetToGameplayInitialState start.*/
            ResetToGameplayInitialState: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#ResetToGameplayInitialState", this ); }

                AppLovinAnalytics.Track(ALEvent.CHALLENGE_RETRY);
                UnityEngine.Debug.Log$1("<color=yellow>[AppLovin Track]</color> CHALLENGE_RETRY");
                this.currentRound = 1;
                this.totalGoals = 0;
                this.pass25Tracked = false;
                this.pass50Tracked = false;
                this.pass75Tracked = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.uiManager, null)) {
                    this.uiManager.ResetUI();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.ball, null)) {
                    this.ball.ResetBall();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound2, null)) {
                    this.defenderRound2.Deactivate();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.defenderRound3, null)) {
                    this.defenderRound3.Deactivate();
                }
                this.StartRound(1);
            },
            /*RonaldoPenalty.PenaltyGameManager.ResetToGameplayInitialState end.*/

            /*RonaldoPenalty.PenaltyGameManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#RestartGame", this ); }

                this.InitGameFlow();
            },
            /*RonaldoPenalty.PenaltyGameManager.RestartGame end.*/

            /*RonaldoPenalty.PenaltyGameManager.GotoStore start.*/
            GotoStore: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#GotoStore", this ); }

                GameManager.GotoStore();
            },
            /*RonaldoPenalty.PenaltyGameManager.GotoStore end.*/

            /*RonaldoPenalty.PenaltyGameManager.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGameManager#GoToStore", this ); }

                GameManager.GotoStore();
            },
            /*RonaldoPenalty.PenaltyGameManager.GoToStore end.*/


        }
    });
    /*RonaldoPenalty.PenaltyGameManager end.*/

    /*RonaldoPenalty.PenaltyGameState start.*/
    Bridge.define("RonaldoPenalty.PenaltyGameState", {
        $kind: 6,
        statics: {
            fields: {
                WaitingForStart: 0,
                Aiming: 1,
                Shooting: 2,
                Result: 3,
                Lose: 4
            }
        }
    });
    /*RonaldoPenalty.PenaltyGameState end.*/

    /*RonaldoPenalty.PenaltyGoalkeeperAI start.*/
    Bridge.define("RonaldoPenalty.PenaltyGoalkeeperAI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leftPost: null,
            rightPost: null,
            baseSpeed: 0,
            changeSpeedByRound: false,
            currentSpeed: 0,
            t: 0,
            direction: 0,
            isPatrolling: false,
            startPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#init", this ); }

                this.startPos = new UnityEngine.Vector3();
                this.baseSpeed = 1.8;
                this.changeSpeedByRound = false;
                this.t = 0.5;
                this.direction = 1;
                this.isPatrolling = true;
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyGoalkeeperAI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#Awake", this ); }

                this.startPos = this.transform.position.$clone();
                this.currentSpeed = this.baseSpeed;
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.Awake end.*/

            /*RonaldoPenalty.PenaltyGoalkeeperAI.SetBounds start.*/
            SetBounds: function (left, right) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#SetBounds", this ); }

                this.leftPost = left;
                this.rightPost = right;
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.SetBounds end.*/

            /*RonaldoPenalty.PenaltyGoalkeeperAI.SetupRound start.*/
            SetupRound: function (round) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#SetupRound", this ); }

                if (this.changeSpeedByRound) {
                    this.currentSpeed = this.baseSpeed + (((round - 1) | 0)) * 0.5;
                } else {
                    this.currentSpeed = this.baseSpeed;
                }
                this.transform.position = this.startPos.$clone();
                this.t = 0.5;
                this.isPatrolling = true;
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.SetupRound end.*/

            /*RonaldoPenalty.PenaltyGoalkeeperAI.StopPatrol start.*/
            StopPatrol: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#StopPatrol", this ); }

                this.isPatrolling = false;
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.StopPatrol end.*/

            /*RonaldoPenalty.PenaltyGoalkeeperAI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#Update", this ); }

                if (this.isPatrolling && !(UnityEngine.Component.op_Equality(this.leftPost, null)) && !(UnityEngine.Component.op_Equality(this.rightPost, null))) {
                    this.t += this.direction * this.currentSpeed * UnityEngine.Time.deltaTime;
                    if (this.t >= 1.0) {
                        this.t = 1.0;
                        this.direction = -1;
                    }
                    if (this.t <= 0.0) {
                        this.t = 0.0;
                        this.direction = 1;
                    }
                    var smoothT = pc.math.smoothstep(0.0, 1.0, this.t);
                    this.transform.position = new pc.Vec3().lerp( this.leftPost.position, this.rightPost.position, smoothT );
                }
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.Update end.*/

            /*RonaldoPenalty.PenaltyGoalkeeperAI.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyGoalkeeperAI#OnDrawGizmosSelected", this ); }

                if (UnityEngine.Component.op_Inequality(this.leftPost, null) && UnityEngine.Component.op_Inequality(this.rightPost, null)) {
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 1, 0, 1 );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                }
            },
            /*RonaldoPenalty.PenaltyGoalkeeperAI.OnDrawGizmosSelected end.*/


        }
    });
    /*RonaldoPenalty.PenaltyGoalkeeperAI end.*/

    /*RonaldoPenalty.PenaltyPlayerAnimator start.*/
    Bridge.define("RonaldoPenalty.PenaltyPlayerAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            animator: null,
            kickDuration: 0,
            hashIdle: 0,
            hashKick: 0,
            hashCelebrate: 0,
            hashDisappointed: 0,
            returnToIdleCoroutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#init", this ); }

                this.kickDuration = 1.0;
                this.hashIdle = UnityEngine.Animator.StringToHash("Idle");
                this.hashKick = UnityEngine.Animator.StringToHash("Kick");
                this.hashCelebrate = UnityEngine.Animator.StringToHash("Celebrate");
                this.hashDisappointed = UnityEngine.Animator.StringToHash("Disappointed");
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyPlayerAnimator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.animator, null)) {
                    this.animator = this.GetComponent(UnityEngine.Animator);
                }
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.Awake end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#Start", this ); }

                this.PlayIdle();
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.Start end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayIdle start.*/
            PlayIdle: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#PlayIdle", this ); }

                if (this.returnToIdleCoroutine != null) {
                    this.StopCoroutine$2(this.returnToIdleCoroutine);
                    this.returnToIdleCoroutine = null;
                }
                if (UnityEngine.Component.op_Inequality(this.animator, null) && this.animator.runtimeAnimatorController != null) {
                    this.animator.ResetTrigger(this.hashKick);
                    this.animator.SetTrigger(this.hashIdle);
                }
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayIdle end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayKick start.*/
            PlayKick: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#PlayKick", this ); }

                if (this.returnToIdleCoroutine != null) {
                    this.StopCoroutine$2(this.returnToIdleCoroutine);
                }
                if (UnityEngine.Component.op_Inequality(this.animator, null) && this.animator.runtimeAnimatorController != null) {
                    this.animator.ResetTrigger(this.hashIdle);
                    this.animator.SetTrigger(this.hashKick);
                    this.returnToIdleCoroutine = this.StartCoroutine$1(this.ReturnToIdleRoutine());
                }
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayKick end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.ReturnToIdleRoutine start.*/
            ReturnToIdleRoutine: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#ReturnToIdleRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    waitTime,
                    stateInfo,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    waitTime = this.kickDuration;
                                        if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                                            stateInfo = this.animator.GetCurrentAnimatorStateInfo(0);
                                            if (stateInfo.length > 0.2) {
                                                waitTime = stateInfo.length;
                                            }
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(waitTime);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.PlayIdle();
                                        this.returnToIdleCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.ReturnToIdleRoutine end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayCelebrate start.*/
            PlayCelebrate: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#PlayCelebrate", this ); }

                if (UnityEngine.Component.op_Inequality(this.animator, null) && this.animator.runtimeAnimatorController != null) {
                    this.animator.SetTrigger(this.hashCelebrate);
                }
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayCelebrate end.*/

            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayDisappointed start.*/
            PlayDisappointed: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyPlayerAnimator#PlayDisappointed", this ); }

                if (UnityEngine.Component.op_Inequality(this.animator, null) && this.animator.runtimeAnimatorController != null) {
                    this.animator.SetTrigger(this.hashDisappointed);
                }
            },
            /*RonaldoPenalty.PenaltyPlayerAnimator.PlayDisappointed end.*/


        }
    });
    /*RonaldoPenalty.PenaltyPlayerAnimator end.*/

    /*RonaldoPenalty.PenaltyTargetMover start.*/
    Bridge.define("RonaldoPenalty.PenaltyTargetMover", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leftPoint: null,
            rightPoint: null,
            speed: 0,
            isMoving: false,
            t: 0,
            direction: 0,
            aimLineRenderer: null,
            ballTransform: null,
            lineWidth: 0,
            dashDensity: 0,
            dashRatio: 0,
            dashColor: null,
            lineGroundY: 0,
            pulseEffect: false,
            pulseSpeed: 0,
            pulseScaleAmount: 0,
            sortingOrder: 0,
            sortingLayerName: null,
            baseScale: null,
            dashedTexture: null,
            dashedSprite: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#init", this ); }

                this.dashColor = new UnityEngine.Color();
                this.baseScale = new UnityEngine.Vector3();
                this.speed = 2.0;
                this.isMoving = false;
                this.t = 0.5;
                this.direction = 1;
                this.lineWidth = 0.18;
                this.dashDensity = 0.5;
                this.dashRatio = 0.35;
                this.dashColor = new pc.Color( 1.0, 0.88, 0.05, 1.0 );
                this.lineGroundY = 0.04;
                this.pulseEffect = true;
                this.pulseSpeed = 6.0;
                this.pulseScaleAmount = 0.12;
                this.sortingOrder = 50;
                this.sortingLayerName = "Default";
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyTargetMover.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#Awake", this ); }

                this.baseScale = this.transform.localScale.$clone();
                if (pc.Vec3.equals( this.baseScale, pc.Vec3.ZERO.clone() )) {
                    this.baseScale = new pc.Vec3( 1, 1, 1 );
                }
                if (UnityEngine.Component.op_Equality(this.ballTransform, null)) {
                    var ballObj = UnityEngine.GameObject.FindWithTag("Ball");
                    if (UnityEngine.GameObject.op_Inequality(ballObj, null)) {
                        this.ballTransform = ballObj.transform;
                    }
                }
                this.SetupAimLineSprite();
                this.ApplySortingOrder();
            },
            /*RonaldoPenalty.PenaltyTargetMover.Awake end.*/

            /*RonaldoPenalty.PenaltyTargetMover.SetBallTransform start.*/
            SetBallTransform: function (ball) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#SetBallTransform", this ); }

                this.ballTransform = ball;
            },
            /*RonaldoPenalty.PenaltyTargetMover.SetBallTransform end.*/

            /*RonaldoPenalty.PenaltyTargetMover.SetupAimLineSprite start.*/
            SetupAimLineSprite: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#SetupAimLineSprite", this ); }

                if (UnityEngine.Component.op_Equality(this.aimLineRenderer, null)) {
                    var lineObj = new UnityEngine.GameObject.$ctor2("AimLineSprite");
                    lineObj.transform.SetParent(this.transform.parent, false);
                    this.aimLineRenderer = lineObj.AddComponent(UnityEngine.SpriteRenderer);
                }
                if (this.dashedSprite == null) {
                    this.dashedSprite = this.CreateDashedSprite();
                }
                this.aimLineRenderer.sprite = this.dashedSprite;
                this.aimLineRenderer.drawMode = UnityEngine.SpriteDrawMode.Tiled;
                this.aimLineRenderer.size = new pc.Vec2( 0.01, this.lineWidth );
                this.aimLineRenderer.color = new pc.Color( 1, 1, 1, 1 );
                this.aimLineRenderer.sortingLayerName = this.sortingLayerName;
                this.aimLineRenderer.sortingOrder = this.sortingOrder;
                this.aimLineRenderer.enabled = false;
            },
            /*RonaldoPenalty.PenaltyTargetMover.SetupAimLineSprite end.*/

            /*RonaldoPenalty.PenaltyTargetMover.CreateDashedSprite start.*/
            CreateDashedSprite: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#CreateDashedSprite", this ); }

                var texWidth = 64;
                var texHeight = 16;
                if (this.dashedTexture == null) {
                    this.dashedTexture = new UnityEngine.Texture2D.$ctor11(texWidth, texHeight, UnityEngine.TextureFormat.RGBA32, false);
                    this.dashedTexture.wrapMode = UnityEngine.TextureWrapMode.Clamp;
                    this.dashedTexture.filterMode = UnityEngine.FilterMode.Point;
                    var emptyColor = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    var pixels = System.Array.init(Bridge.Int.mul(texWidth, texHeight), function (){
                        return new UnityEngine.Color();
                    }, UnityEngine.Color);
                    for (var y = 0; y < texHeight; y = (y + 1) | 0) {
                        for (var x = 0; x < texWidth; x = (x + 1) | 0) {
                            var isDash = x < texWidth * this.dashRatio;
                            pixels[((Bridge.Int.mul(y, texWidth) + x) | 0)] = (isDash ? this.dashColor.$clone() : emptyColor.$clone());
                        }
                    }
                    this.dashedTexture.SetPixels$1(pixels);
                    this.dashedTexture.Apply();
                }
                var pixelsPerUnit = texWidth * UnityEngine.Mathf.Max(this.dashDensity, 0.001);
                return UnityEngine.Sprite.Create$3(this.dashedTexture, new UnityEngine.Rect.$ctor1(0.0, 0.0, texWidth, texHeight), new pc.Vec2( 0.0, 0.5 ), pixelsPerUnit, 0, UnityEngine.SpriteMeshType.FullRect);
            },
            /*RonaldoPenalty.PenaltyTargetMover.CreateDashedSprite end.*/

            /*RonaldoPenalty.PenaltyTargetMover.ApplySortingOrder start.*/
            ApplySortingOrder: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#ApplySortingOrder", this ); }

                var r = this.GetComponent(UnityEngine.Renderer);
                if (UnityEngine.Component.op_Inequality(r, null)) {
                    r.sortingLayerName = this.sortingLayerName;
                    r.sortingOrder = this.sortingOrder;
                }
            },
            /*RonaldoPenalty.PenaltyTargetMover.ApplySortingOrder end.*/

            /*RonaldoPenalty.PenaltyTargetMover.SetBounds start.*/
            SetBounds: function (left, right) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#SetBounds", this ); }

                this.leftPoint = left;
                this.rightPoint = right;
            },
            /*RonaldoPenalty.PenaltyTargetMover.SetBounds end.*/

            /*RonaldoPenalty.PenaltyTargetMover.SetSpeed start.*/
            SetSpeed: function (newSpeed) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#SetSpeed", this ); }

                this.speed = newSpeed;
            },
            /*RonaldoPenalty.PenaltyTargetMover.SetSpeed end.*/

            /*RonaldoPenalty.PenaltyTargetMover.StartMoving start.*/
            StartMoving: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#StartMoving", this ); }

                this.isMoving = true;
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(true);
                if (UnityEngine.Component.op_Inequality(this.aimLineRenderer, null)) {
                    this.aimLineRenderer.enabled = true;
                }
            },
            /*RonaldoPenalty.PenaltyTargetMover.StartMoving end.*/

            /*RonaldoPenalty.PenaltyTargetMover.StopMoving start.*/
            StopMoving: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#StopMoving", this ); }

                this.isMoving = false;
                if (UnityEngine.Component.op_Inequality(this.aimLineRenderer, null)) {
                    this.aimLineRenderer.enabled = false;
                }
            },
            /*RonaldoPenalty.PenaltyTargetMover.StopMoving end.*/

            /*RonaldoPenalty.PenaltyTargetMover.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#Hide", this ); }

                if (UnityEngine.Component.op_Inequality(this.aimLineRenderer, null)) {
                    this.aimLineRenderer.enabled = false;
                }
                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
            },
            /*RonaldoPenalty.PenaltyTargetMover.Hide end.*/

            /*RonaldoPenalty.PenaltyTargetMover.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#Update", this ); }

                if (this.pulseEffect) {
                    var scale = 1.0 + Math.sin(UnityEngine.Time.time * this.pulseSpeed) * this.pulseScaleAmount;
                    this.transform.localScale = this.baseScale.$clone().clone().scale( scale );
                }
                if (!this.isMoving || UnityEngine.Component.op_Equality(this.leftPoint, null) || UnityEngine.Component.op_Equality(this.rightPoint, null)) {
                    return;
                }
                this.t += this.direction * this.speed * UnityEngine.Time.deltaTime;
                if (this.t >= 1.0) {
                    this.t = 1.0;
                    this.direction = -1;
                }
                if (this.t <= 0.0) {
                    this.t = 0.0;
                    this.direction = 1;
                }
                var smoothT = pc.math.smoothstep(0.0, 1.0, this.t);
                this.transform.position = new pc.Vec3().lerp( this.leftPoint.position, this.rightPoint.position, smoothT );
                if (!(UnityEngine.Component.op_Inequality(this.aimLineRenderer, null)) || !this.isMoving) {
                    return;
                }
                if (UnityEngine.Component.op_Inequality(this.ballTransform, null)) {
                    this.aimLineRenderer.enabled = true;
                    var startPos = new pc.Vec3( this.ballTransform.position.x, this.lineGroundY, this.ballTransform.position.z + 0.15 );
                    var endPos = new pc.Vec3( this.transform.position.x, this.lineGroundY, this.transform.position.z );
                    var delta = endPos.$clone().sub( startPos );
                    var distance = delta.length();
                    this.aimLineRenderer.transform.position = startPos.$clone();
                    if (distance > 0.001) {
                        var sideways = new pc.Vec3().cross( pc.Vec3.UP.clone(), delta.clone().normalize() );
                        this.aimLineRenderer.transform.rotation = new pc.Quat().lookRotation( pc.Vec3.UP.clone(), sideways );
                    }
                    this.aimLineRenderer.size = new pc.Vec2( UnityEngine.Mathf.Max(distance, 0.01), this.lineWidth );
                } else {
                    var ballObj = UnityEngine.GameObject.FindWithTag("Ball");
                    if (UnityEngine.GameObject.op_Inequality(ballObj, null)) {
                        this.ballTransform = ballObj.transform;
                    }
                }
            },
            /*RonaldoPenalty.PenaltyTargetMover.Update end.*/

            /*RonaldoPenalty.PenaltyTargetMover.GetCurrentPosition start.*/
            GetCurrentPosition: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#GetCurrentPosition", this ); }

                return this.transform.position.$clone();
            },
            /*RonaldoPenalty.PenaltyTargetMover.GetCurrentPosition end.*/

            /*RonaldoPenalty.PenaltyTargetMover.GetNormalizedT start.*/
            GetNormalizedT: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#GetNormalizedT", this ); }

                return this.t;
            },
            /*RonaldoPenalty.PenaltyTargetMover.GetNormalizedT end.*/

            /*RonaldoPenalty.PenaltyTargetMover.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyTargetMover#OnDrawGizmosSelected", this ); }

                if (UnityEngine.Component.op_Inequality(this.leftPoint, null) && UnityEngine.Component.op_Inequality(this.rightPoint, null)) {
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                    pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1.0, 0.2, 0.2, 0.9 );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                    pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
                }
            },
            /*RonaldoPenalty.PenaltyTargetMover.OnDrawGizmosSelected end.*/


        }
    });
    /*RonaldoPenalty.PenaltyTargetMover end.*/

    /*RonaldoPenalty.PenaltyUIManager start.*/
    Bridge.define("RonaldoPenalty.PenaltyUIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            roundIndicators: null,
            iconEmpty: null,
            iconCheck: null,
            iconCross: null,
            winEndcardPanel: null,
            losePanel: null,
            promptText: null,
            objectsToHideOnWin: null,
            objectsToHideOnLose: null,
            extraObjectsToHide: null,
            onEndcardClick: null,
            initialIndicatorColors: null,
            isWinEndcardActive: false
        },
        props: {
            IconEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#IconEmpty#get", this ); }

                    return this.iconEmpty;
                }
            },
            IconCheck: {
                get: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#IconCheck#get", this ); }

                    return this.iconCheck;
                }
            },
            IconCross: {
                get: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#IconCross#get", this ); }

                    return this.iconCross;
                }
            },
            HasValidSprites: {
                get: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#HasValidSprites#get", this ); }

                    return this.iconCheck != null && this.iconCross != null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#init", this ); }

                this.isWinEndcardActive = false;
            }
        },
        methods: {
            /*RonaldoPenalty.PenaltyUIManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(RonaldoPenalty.PenaltyUIManager.Instance, null) || this.HasValidSprites) {
                    RonaldoPenalty.PenaltyUIManager.Instance = this;
                }
                this.AutoFindReferences();
            },
            /*RonaldoPenalty.PenaltyUIManager.Awake end.*/

            /*RonaldoPenalty.PenaltyUIManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#Start", this ); }

                this.AutoFindReferences();
                this.ResetUI();
            },
            /*RonaldoPenalty.PenaltyUIManager.Start end.*/

            /*RonaldoPenalty.PenaltyUIManager.AutoFindReferences start.*/
            AutoFindReferences: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#AutoFindReferences", this ); }

                var $t, $t1;
                var allUIMgrs = UnityEngine.Object.FindObjectsOfType(RonaldoPenalty.PenaltyUIManager);
                var array = allUIMgrs;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var mgr = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(mgr, null) && UnityEngine.MonoBehaviour.op_Inequality(mgr, this)) {
                            if (this.iconEmpty == null && mgr.iconEmpty != null) {
                                this.iconEmpty = mgr.iconEmpty;
                            }
                            if (this.iconCheck == null && mgr.iconCheck != null) {
                                this.iconCheck = mgr.iconCheck;
                            }
                            if (this.iconCross == null && mgr.iconCross != null) {
                                this.iconCross = mgr.iconCross;
                            }
                            if (UnityEngine.GameObject.op_Equality(this.winEndcardPanel, null) && UnityEngine.GameObject.op_Inequality(mgr.winEndcardPanel, null)) {
                                this.winEndcardPanel = mgr.winEndcardPanel;
                            }
                            if (UnityEngine.GameObject.op_Equality(this.losePanel, null) && UnityEngine.GameObject.op_Inequality(mgr.losePanel, null)) {
                                this.losePanel = mgr.losePanel;
                            }
                            if (UnityEngine.GameObject.op_Equality(this.promptText, null) && UnityEngine.GameObject.op_Inequality(mgr.promptText, null)) {
                                this.promptText = mgr.promptText;
                            }
                            if ((this.objectsToHideOnWin == null || this.objectsToHideOnWin.length === 0) && mgr.objectsToHideOnWin != null && mgr.objectsToHideOnWin.length !== 0) {
                                this.objectsToHideOnWin = mgr.objectsToHideOnWin;
                            }
                            if ((this.objectsToHideOnLose == null || this.objectsToHideOnLose.length === 0) && mgr.objectsToHideOnLose != null && mgr.objectsToHideOnLose.length !== 0) {
                                this.objectsToHideOnLose = mgr.objectsToHideOnLose;
                            }
                            if ((this.extraObjectsToHide == null || this.extraObjectsToHide.length === 0) && mgr.extraObjectsToHide != null && mgr.extraObjectsToHide.length !== 0) {
                                this.extraObjectsToHide = mgr.extraObjectsToHide;
                            }
                            if ((this.roundIndicators == null || this.roundIndicators.length === 0) && mgr.roundIndicators != null && mgr.roundIndicators.length !== 0) {
                                this.roundIndicators = mgr.roundIndicators;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (this.iconCheck == null || this.iconCross == null || this.iconEmpty == null) {
                    var allSprites = UnityEngine.Resources.FindObjectsOfTypeAll(UnityEngine.Sprite);
                    var array2 = allSprites;
                    $t1 = Bridge.getEnumerator(array2);
                    try {
                        while ($t1.moveNext()) {
                            var s = $t1.Current;
                            if (!(s == null)) {
                                if (this.iconCheck == null && (Bridge.referenceEquals(s.name, "Win") || Bridge.referenceEquals(s.name, "True-false_0") || Bridge.referenceEquals(s.name, "icon_check") || Bridge.referenceEquals(s.name, "BoxTick"))) {
                                    this.iconCheck = s;
                                }
                                if (this.iconCross == null && (Bridge.referenceEquals(s.name, "Loss") || Bridge.referenceEquals(s.name, "lose") || Bridge.referenceEquals(s.name, "True-false_1") || Bridge.referenceEquals(s.name, "icon_cross") || Bridge.referenceEquals(s.name, "YOU LOSE"))) {
                                    this.iconCross = s;
                                }
                                if (this.iconEmpty == null && (Bridge.referenceEquals(s.name, "WhiteBorder") || Bridge.referenceEquals(s.name, "icon_empty") || Bridge.referenceEquals(s.name, "red_border"))) {
                                    this.iconEmpty = s;
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }
                if (this.roundIndicators == null || this.roundIndicators.length === 0 || UnityEngine.MonoBehaviour.op_Equality(this.roundIndicators[0], null)) {
                    var found = new (System.Collections.Generic.List$1(UnityEngine.UI.Image)).ctor();
                    for (var i = 1; i <= 3; i = (i + 1) | 0) {
                        var obj = UnityEngine.GameObject.Find(System.String.format("Round_{0}_Indicator", [Bridge.box(i, System.Int32)]));
                        if (UnityEngine.GameObject.op_Inequality(obj, null)) {
                            var img = obj.GetComponent(UnityEngine.UI.Image);
                            if (UnityEngine.MonoBehaviour.op_Inequality(img, null)) {
                                found.add(img);
                            }
                        }
                    }
                    if (found.Count > 0) {
                        this.roundIndicators = found.ToArray();
                    }
                }
                if (UnityEngine.GameObject.op_Equality(this.promptText, null)) {
                    this.promptText = UnityEngine.GameObject.Find("Tap to play") || UnityEngine.GameObject.Find("Tap TO play") || UnityEngine.GameObject.Find("Tap To play") || UnityEngine.GameObject.Find("Tap To Play") || UnityEngine.GameObject.Find("PromptText");
                }
                if (UnityEngine.GameObject.op_Equality(this.losePanel, null)) {
                    this.losePanel = UnityEngine.GameObject.Find("LosePanel");
                }
                if (UnityEngine.GameObject.op_Equality(this.winEndcardPanel, null)) {
                    this.winEndcardPanel = UnityEngine.GameObject.Find("WinEndcardPanel") || UnityEngine.GameObject.Find("Endcard");
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.AutoFindReferences end.*/

            /*RonaldoPenalty.PenaltyUIManager.CacheInitialColors start.*/
            CacheInitialColors: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#CacheInitialColors", this ); }

                if (this.roundIndicators == null || (this.initialIndicatorColors != null && this.initialIndicatorColors.length === this.roundIndicators.length)) {
                    return;
                }
                this.initialIndicatorColors = System.Array.init(this.roundIndicators.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                for (var i = 0; i < this.roundIndicators.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.roundIndicators[i], null)) {
                        this.initialIndicatorColors[i] = this.roundIndicators[i].color.$clone();
                    }
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.CacheInitialColors end.*/

            /*RonaldoPenalty.PenaltyUIManager.SetupReferences start.*/
            SetupReferences: function (indicators, lose, prompt, winEndcard, empty, check, cross) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#SetupReferences", this ); }

                if (winEndcard === void 0) { winEndcard = null; }
                if (empty === void 0) { empty = null; }
                if (check === void 0) { check = null; }
                if (cross === void 0) { cross = null; }
                this.roundIndicators = indicators;
                this.losePanel = lose;
                this.promptText = prompt;
                this.winEndcardPanel = winEndcard;
                if (empty != null) {
                    this.iconEmpty = empty;
                }
                if (check != null) {
                    this.iconCheck = check;
                }
                if (cross != null) {
                    this.iconCross = cross;
                }
                this.CacheInitialColors();
            },
            /*RonaldoPenalty.PenaltyUIManager.SetupReferences end.*/

            /*RonaldoPenalty.PenaltyUIManager.ResetUI start.*/
            ResetUI: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#ResetUI", this ); }

                this.isWinEndcardActive = false;
                this.AutoFindReferences();
                this.CacheInitialColors();
                this.SetObjectsActive(this.objectsToHideOnWin, true);
                this.SetObjectsActive(this.objectsToHideOnLose, true);
                this.SetObjectsActive(this.extraObjectsToHide, true);
                if (this.roundIndicators != null) {
                    for (var i = 0; i < this.roundIndicators.length; i = (i + 1) | 0) {
                        var img = this.roundIndicators[i];
                        if (UnityEngine.MonoBehaviour.op_Inequality(img, null)) {
                            if (this.iconEmpty != null) {
                                img.sprite = this.iconEmpty;
                            }
                            if (this.initialIndicatorColors != null && i < this.initialIndicatorColors.length) {
                                img.color = this.initialIndicatorColors[i].$clone();
                            }
                        }
                    }
                }
                if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                    this.losePanel.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.winEndcardPanel, null)) {
                    this.winEndcardPanel.SetActive(false);
                }
                this.SetPromptVisible(true);
            },
            /*RonaldoPenalty.PenaltyUIManager.ResetUI end.*/

            /*RonaldoPenalty.PenaltyUIManager.SetPromptVisible start.*/
            SetPromptVisible: function (visible) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#SetPromptVisible", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.promptText, null)) {
                    this.promptText.SetActive(visible);
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.SetPromptVisible end.*/

            /*RonaldoPenalty.PenaltyUIManager.UpdateRoundResult start.*/
            UpdateRoundResult: function (roundIndex, isGoal) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#UpdateRoundResult", this ); }

                this.AutoFindReferences();
                this.CacheInitialColors();
                if (this.roundIndicators == null || roundIndex < 0 || roundIndex >= this.roundIndicators.length) {
                    return;
                }
                var img = this.roundIndicators[roundIndex];
                if (UnityEngine.MonoBehaviour.op_Inequality(img, null)) {
                    var targetSprite = (isGoal ? this.iconCheck : this.iconCross);
                    if (targetSprite != null) {
                        img.sprite = targetSprite;
                        img.color = new pc.Color( 1, 1, 1, 1 );
                        UnityEngine.Debug.Log$1(System.String.format("<color=green>[UI SUCCESS]</color> Round {0} ({1}) -> {2} Sprite='{3}'", Bridge.box(((roundIndex + 1) | 0), System.Int32), img.gameObject.name, isGoal ? "CHECK (WIN)" : "CROSS (LOSS)", targetSprite.name));
                    } else {
                        UnityEngine.Debug.LogWarning$1("<color=red>[UI ERROR]</color> Sprite " + ((isGoal ? "iconCheck" : "iconCross") || "") + " is null! Vui l\u00f2ng g\u00e1n Sprite Win/Loss v\u00e0o PenaltyUIManager.");
                    }
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.UpdateRoundResult end.*/

            /*RonaldoPenalty.PenaltyUIManager.ShowWinEndcard start.*/
            ShowWinEndcard: function (onClickStore) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#ShowWinEndcard", this ); }

                var $t;
                this.SetPromptVisible(false);
                if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                    this.losePanel.SetActive(false);
                }
                this.SetObjectsActive(this.objectsToHideOnWin, false);
                this.SetObjectsActive(this.extraObjectsToHide, false);
                this.onEndcardClick = onClickStore || GameManager.GotoStore;
                this.isWinEndcardActive = true;
                if (UnityEngine.GameObject.op_Inequality(this.winEndcardPanel, null)) {
                    this.winEndcardPanel.SetActive(true);
                }
                UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(FxType.PlayerWin) : null;
            },
            /*RonaldoPenalty.PenaltyUIManager.ShowWinEndcard end.*/

            /*RonaldoPenalty.PenaltyUIManager.ShowLoseScreen start.*/
            ShowLoseScreen: function (autoResetDelay, onComplete) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#ShowLoseScreen", this ); }

                var $t;
                this.isWinEndcardActive = false;
                this.SetPromptVisible(false);
                if (UnityEngine.GameObject.op_Inequality(this.winEndcardPanel, null)) {
                    this.winEndcardPanel.SetActive(false);
                }
                this.SetObjectsActive(this.objectsToHideOnLose, false);
                this.SetObjectsActive(this.extraObjectsToHide, false);
                if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                    this.losePanel.SetActive(true);
                }
                UnityEngine.MonoBehaviour.op_Inequality(($t = Ply_SoundManager.Instance), null) ? $t.PlayFx(FxType.PlayerLoose) : null;
                this.StartCoroutine$1(this.LoseRoutine(autoResetDelay, onComplete));
            },
            /*RonaldoPenalty.PenaltyUIManager.ShowLoseScreen end.*/

            /*RonaldoPenalty.PenaltyUIManager.SetObjectsActive start.*/
            SetObjectsActive: function (list, active) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#SetObjectsActive", this ); }

                if (list == null) {
                    return;
                }
                for (var i = 0; i < list.length; i = (i + 1) | 0) {
                    if (UnityEngine.GameObject.op_Inequality(list[i], null)) {
                        list[i].SetActive(active);
                    }
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.SetObjectsActive end.*/

            /*RonaldoPenalty.PenaltyUIManager.LoseRoutine start.*/
            LoseRoutine: function (delay, onComplete) {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#LoseRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.GameObject.op_Inequality(this.losePanel, null)) {
                                            this.losePanel.SetActive(false);
                                        }
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RonaldoPenalty.PenaltyUIManager.LoseRoutine end.*/

            /*RonaldoPenalty.PenaltyUIManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#Update", this ); }

                if ((this.isWinEndcardActive || (UnityEngine.GameObject.op_Inequality(this.winEndcardPanel, null) && (this.winEndcardPanel.activeSelf || this.winEndcardPanel.activeInHierarchy))) && (UnityEngine.Input.GetMouseButtonDown(0) || UnityEngine.Input.GetMouseButtonUp(0) || (UnityEngine.Input.touchCount > 0 && (UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began || UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended)))) {
                    UnityEngine.Debug.Log$1("<color=green>[PenaltyUI]</color> Clicked on Win Endcard -> GotoStore");
                    if (!Bridge.staticEquals(this.onEndcardClick, null)) {
                        this.onEndcardClick();
                    } else {
                        GameManager.GotoStore();
                    }
                }
            },
            /*RonaldoPenalty.PenaltyUIManager.Update end.*/

            /*RonaldoPenalty.PenaltyUIManager.GotoStore start.*/
            GotoStore: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#GotoStore", this ); }

                GameManager.GotoStore();
            },
            /*RonaldoPenalty.PenaltyUIManager.GotoStore end.*/

            /*RonaldoPenalty.PenaltyUIManager.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#GoToStore", this ); }

                GameManager.GotoStore();
            },
            /*RonaldoPenalty.PenaltyUIManager.GoToStore end.*/

            /*RonaldoPenalty.PenaltyUIManager.OnClick_GotoStore start.*/
            OnClick_GotoStore: function () {
if ( TRACE ) { TRACE( "RonaldoPenalty.PenaltyUIManager#OnClick_GotoStore", this ); }

                GameManager.GotoStore();
            },
            /*RonaldoPenalty.PenaltyUIManager.OnClick_GotoStore end.*/


        }
    });
    /*RonaldoPenalty.PenaltyUIManager end.*/

    /*SoundData start.*/
    Bridge.define("SoundData", {
        fields: {
            clip: null,
            volume: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SoundData#init", this ); }

                this.volume = 1.0;
            }
        }
    });
    /*SoundData end.*/

    /*SoundID start.*/
    Bridge.define("SoundID", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                PlayerWin: 1,
                PlayerLoose: 2,
                RightChoice: 3,
                WrongChoice: 4,
                MaxLevel: 5,
                Punch: 6,
                Bonk: 7
            }
        }
    });
    /*SoundID end.*/

    /*SwipeDirection start.*/
    Bridge.define("SwipeDirection", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Up: 1,
                Down: 2,
                Left: 3,
                Right: 4
            }
        }
    });
    /*SwipeDirection end.*/

    /*UICheckBox start.*/
    Bridge.define("UICheckBox", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            iconImg: null,
            startingSprite: null
        },
        methods: {
            /*UICheckBox.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UICheckBox#Awake", this ); }

                this.ResetIcon();
            },
            /*UICheckBox.Awake end.*/

            /*UICheckBox.ResetIcon start.*/
            ResetIcon: function () {
if ( TRACE ) { TRACE( "UICheckBox#ResetIcon", this ); }

                if (this.startingSprite != null) {
                    this.ChangeIcon(this.startingSprite);
                }
            },
            /*UICheckBox.ResetIcon end.*/

            /*UICheckBox.ChangeIcon start.*/
            ChangeIcon: function (sprite) {
if ( TRACE ) { TRACE( "UICheckBox#ChangeIcon", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.iconImg, null) && sprite != null) {
                    this.iconImg.sprite = sprite;
                }
            },
            /*UICheckBox.ChangeIcon end.*/


        }
    });
    /*UICheckBox end.*/

    /*UICheckBoxHolder start.*/
    Bridge.define("UICheckBoxHolder", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            uICheckBoxes: null,
            choiceNum: 0
        },
        methods: {
            /*UICheckBoxHolder.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UICheckBoxHolder#Start", this ); }

                var $t;
                this.choiceNum = 0;
                if (this.uICheckBoxes != null) {
                    var array = this.uICheckBoxes;
                    $t = Bridge.getEnumerator(array);
                    try {
                        while ($t.moveNext()) {
                            var checkBox = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(checkBox, null)) {
                                checkBox.ResetIcon();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                UIManager.OnCharacterChoose = Bridge.fn.combine(UIManager.OnCharacterChoose, Bridge.fn.cacheBind(this, this.OnCharacterChoose));
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*UICheckBoxHolder.Start end.*/

            /*UICheckBoxHolder.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UICheckBoxHolder#OnDestroy", this ); }

                UIManager.OnCharacterChoose = Bridge.fn.remove(UIManager.OnCharacterChoose, Bridge.fn.cacheBind(this, this.OnCharacterChoose));
                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
            },
            /*UICheckBoxHolder.OnDestroy end.*/

            /*UICheckBoxHolder.OnGameEnded start.*/
            OnGameEnded: function (obj) {
if ( TRACE ) { TRACE( "UICheckBoxHolder#OnGameEnded", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
            },
            /*UICheckBoxHolder.OnGameEnded end.*/

            /*UICheckBoxHolder.OnCharacterChoose start.*/
            OnCharacterChoose: function (type, sprite) {
if ( TRACE ) { TRACE( "UICheckBoxHolder#OnCharacterChoose", this ); }

                if (this.uICheckBoxes != null && this.choiceNum >= 0 && this.choiceNum < this.uICheckBoxes.length) {
                    this.uICheckBoxes[this.choiceNum].ChangeIcon(sprite);
                    this.choiceNum = (this.choiceNum + 1) | 0;
                }
            },
            /*UICheckBoxHolder.OnCharacterChoose end.*/


        }
    });
    /*UICheckBoxHolder end.*/

    /*UIGuidingMove start.*/
    Bridge.define("UIGuidingMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            startPosition: null,
            endPosition: null,
            duration: 0,
            ease: 0,
            resetToStartOnComplete: false,
            loop: false,
            loopCount: 0,
            loopType: 0,
            moveTween: null,
            moveSequence: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#init", this ); }

                this.startPosition = new UnityEngine.Vector2();
                this.endPosition = new UnityEngine.Vector2();
                this.startPosition = new pc.Vec2( -230.0, 0.0 );
                this.endPosition = new pc.Vec2( 290.0, 0.0 );
                this.duration = 0.8;
                this.ease = DG.Tweening.Ease.Linear;
                this.resetToStartOnComplete = false;
                this.loop = true;
                this.loopCount = -1;
                this.loopType = DG.Tweening.LoopType.Yoyo;
            }
        },
        methods: {
            /*UIGuidingMove.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    this.target = this.GetComponent(UnityEngine.RectTransform);
                }
            },
            /*UIGuidingMove.Awake end.*/

            /*UIGuidingMove.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#OnEnable", this ); }

                this.PlaySequence();
            },
            /*UIGuidingMove.OnEnable end.*/

            /*UIGuidingMove.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#OnDisable", this ); }

                this.KillTween();
            },
            /*UIGuidingMove.OnDisable end.*/

            /*UIGuidingMove.KillTween start.*/
            KillTween: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#KillTween", this ); }

                this.moveTween != null ? DG.Tweening.TweenExtensions.Kill(this.moveTween) : null;
                this.moveSequence != null ? DG.Tweening.TweenExtensions.Kill(this.moveSequence) : null;
            },
            /*UIGuidingMove.KillTween end.*/

            /*UIGuidingMove.ResetSequence start.*/
            ResetSequence: function (startPos, endPos) {
if ( TRACE ) { TRACE( "UIGuidingMove#ResetSequence", this ); }

                this.startPosition = startPos.$clone();
                this.endPosition = endPos.$clone();
                this.PlaySequence();
            },
            /*UIGuidingMove.ResetSequence end.*/

            /*UIGuidingMove.PlaySequence start.*/
            PlaySequence: function () {
if ( TRACE ) { TRACE( "UIGuidingMove#PlaySequence", this ); }

                if (UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }
                this.KillTween();
                this.target.anchoredPosition = this.startPosition.$clone();
                if (this.resetToStartOnComplete) {
                    this.moveSequence = DG.Tweening.DOTween.Sequence();
                    DG.Tweening.TweenSettingsExtensions.Append(this.moveSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.target, this.endPosition.$clone(), this.duration), this.ease));
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(this.moveSequence, Bridge.fn.bind(this, function () {
                        if (UnityEngine.Component.op_Inequality(this.target, null)) {
                            this.target.anchoredPosition = this.startPosition.$clone();
                        }
                    }));
                    if (this.loop) {
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Sequence, this.moveSequence, this.loopCount, DG.Tweening.LoopType.Restart);
                    }
                } else {
                    this.moveTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.target, this.endPosition.$clone(), this.duration), this.ease);
                    if (this.loop) {
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, this.moveTween, this.loopCount, this.loopType);
                    }
                }
            },
            /*UIGuidingMove.PlaySequence end.*/


        }
    });
    /*UIGuidingMove end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                OnCharacterStartMove: null,
                OnCharacterChoose: null,
                OnCharacterPick: null,
                OnLooseSequenceStart: null,
                Instance: null
            }
        },
        methods: {
            /*UIManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(UIManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(UIManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    UIManager.Instance = this;
                }
            },
            /*UIManager.Awake end.*/


        }
    });
    /*UIManager end.*/

    /*UIProgressBar start.*/
    Bridge.define("UIProgressBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fillImage: null,
            fillBackground: null
        },
        methods: {
            /*UIProgressBar.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UIProgressBar#Start", this ); }

                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                UIManager.OnCharacterStartMove = Bridge.fn.combine(UIManager.OnCharacterStartMove, Bridge.fn.cacheBind(this, this.OnCharacterStartMove));
            },
            /*UIProgressBar.Start end.*/

            /*UIProgressBar.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UIProgressBar#OnDestroy", this ); }

                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                UIManager.OnCharacterStartMove = Bridge.fn.remove(UIManager.OnCharacterStartMove, Bridge.fn.cacheBind(this, this.OnCharacterStartMove));
            },
            /*UIProgressBar.OnDestroy end.*/

            /*UIProgressBar.OnCharacterStartMove start.*/
            OnCharacterStartMove: function (totalMoveTime) {
if ( TRACE ) { TRACE( "UIProgressBar#OnCharacterStartMove", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillImage, null)) {
                    DG.Tweening.DOTweenModuleUI.DOFillAmount(this.fillImage, 1.0, totalMoveTime);
                }
            },
            /*UIProgressBar.OnCharacterStartMove end.*/

            /*UIProgressBar.OnGameEnded start.*/
            OnGameEnded: function (winState) {
if ( TRACE ) { TRACE( "UIProgressBar#OnGameEnded", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillImage, null)) {
                    this.fillImage.enabled = false;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillBackground, null)) {
                    this.fillBackground.enabled = false;
                }
            },
            /*UIProgressBar.OnGameEnded end.*/


        }
    });
    /*UIProgressBar end.*/

    /*UIPulse start.*/
    Bridge.define("UIPulse", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetScale: null,
            duration: 0,
            ease: 0,
            rectTransform: null,
            originalScale: null,
            pulseTween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIPulse#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.targetScale = new pc.Vec3( 1.1, 1.1, 1.1 );
                this.duration = 0.5;
                this.ease = DG.Tweening.Ease.InOutSine;
            }
        },
        methods: {
            /*UIPulse.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIPulse#Awake", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Inequality(this.rectTransform, null)) {
                    this.originalScale = this.rectTransform.localScale.$clone();
                }
            },
            /*UIPulse.Awake end.*/

            /*UIPulse.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UIPulse#OnEnable", this ); }

                if (!(UnityEngine.Component.op_Equality(this.rectTransform, null))) {
                    this.rectTransform.localScale = this.originalScale.$clone();
                    this.pulseTween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, this.targetScale.$clone(), this.duration), this.ease), -1, DG.Tweening.LoopType.Yoyo);
                }
            },
            /*UIPulse.OnEnable end.*/

            /*UIPulse.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UIPulse#OnDisable", this ); }

                this.pulseTween != null ? DG.Tweening.TweenExtensions.Kill(this.pulseTween) : null;
                if (UnityEngine.Component.op_Inequality(this.rectTransform, null)) {
                    this.rectTransform.localScale = this.originalScale.$clone();
                }
            },
            /*UIPulse.OnDisable end.*/


        }
    });
    /*UIPulse end.*/

    /*UITutorial start.*/
    Bridge.define("UITutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutorialUIHolder: null
        },
        methods: {
            /*UITutorial.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UITutorial#Start", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.tutorialUIHolder, null)) {
                    this.tutorialUIHolder.SetActive(true);
                }
                GameManager.OnGameStart = Bridge.fn.combine(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
                GameManager.OnGameEnded = Bridge.fn.combine(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    var instance = InputManager.Instance;
                    instance.OnClickedDown = Bridge.fn.combine(instance.OnClickedDown, Bridge.fn.cacheBind(this, this.OnClicked));
                }
            },
            /*UITutorial.Start end.*/

            /*UITutorial.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UITutorial#OnDestroy", this ); }

                GameManager.OnGameStart = Bridge.fn.remove(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
                GameManager.OnGameEnded = Bridge.fn.remove(GameManager.OnGameEnded, Bridge.fn.cacheBind(this, this.OnGameEnded));
                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    var instance = InputManager.Instance;
                    instance.OnClickedDown = Bridge.fn.remove(instance.OnClickedDown, Bridge.fn.cacheBind(this, this.OnClicked));
                }
            },
            /*UITutorial.OnDestroy end.*/

            /*UITutorial.OnGameEnded start.*/
            OnGameEnded: function (obj) {
if ( TRACE ) { TRACE( "UITutorial#OnGameEnded", this ); }

                Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(false);
            },
            /*UITutorial.OnGameEnded end.*/

            /*UITutorial.OnClicked start.*/
            OnClicked: function (vector) {
if ( TRACE ) { TRACE( "UITutorial#OnClicked", this ); }

                !Bridge.staticEquals(GameManager.OnGameStart, null) ? GameManager.OnGameStart() : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(InputManager.Instance, null)) {
                    var instance = InputManager.Instance;
                    instance.OnClickedDown = Bridge.fn.remove(instance.OnClickedDown, Bridge.fn.cacheBind(this, this.OnClicked));
                }
            },
            /*UITutorial.OnClicked end.*/

            /*UITutorial.OnGameStarted start.*/
            OnGameStarted: function () {
if ( TRACE ) { TRACE( "UITutorial#OnGameStarted", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.tutorialUIHolder, null)) {
                    this.tutorialUIHolder.SetActive(false);
                }
                GameManager.OnGameStart = Bridge.fn.remove(GameManager.OnGameStart, Bridge.fn.cacheBind(this, this.OnGameStarted));
            },
            /*UITutorial.OnGameStarted end.*/


        }
    });
    /*UITutorial end.*/

    /*Yielders start.*/
    Bridge.define("Yielders", {
        statics: {
            fields: {
                _timeInterval: null,
                _endOfFrame: null,
                _fixedUpdate: null
            },
            props: {
                EndOfFrame: {
                    get: function () {
if ( TRACE ) { TRACE( "Yielders#EndOfFrame#get", this ); }

                        return Yielders._endOfFrame;
                    }
                },
                FixedUpdate: {
                    get: function () {
if ( TRACE ) { TRACE( "Yielders#FixedUpdate#get", this ); }

                        return Yielders._fixedUpdate;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Yielders#init", this ); }

                    this._timeInterval = new (System.Collections.Generic.Dictionary$2(System.Single,UnityEngine.WaitForSeconds)).$ctor4(100);
                    this._endOfFrame = new UnityEngine.WaitForEndOfFrame();
                    this._fixedUpdate = new UnityEngine.WaitForFixedUpdate();
                }
            },
            methods: {
                /*Yielders.Get:static start.*/
                Get: function (seconds) {
if ( TRACE ) { TRACE( "Yielders#Get", this ); }

                    if (!Yielders._timeInterval.containsKey(seconds)) {
                        Yielders._timeInterval.add(seconds, new UnityEngine.WaitForSeconds(seconds));
                    }
                    return Yielders._timeInterval.getItem(seconds);
                },
                /*Yielders.Get:static end.*/


            }
        }
    });
    /*Yielders end.*/

    /*Ply_Pool start.*/
    Bridge.define("Ply_Pool", {
        inherits: function () {
if ( TRACE ) { TRACE( "Ply_Pool#inherits", this ); }
 return [Ply_Singleton$1(Ply_Pool)]; },
        fields: {
            poolAmounts: null,
            dict: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ply_Pool#init", this ); }

                this.dict = new (System.Collections.Generic.Dictionary$2(PoolType,System.Collections.Generic.Queue$1(Ply_GameUnit))).ctor();
            }
        },
        methods: {
            /*Ply_Pool.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ply_Pool#Awake", this ); }

                Ply_Singleton$1(Ply_Pool).prototype.Awake.call(this);
                this.OnInit();
            },
            /*Ply_Pool.Awake end.*/

            /*Ply_Pool.OnInit start.*/
            OnInit: function () {
if ( TRACE ) { TRACE( "Ply_Pool#OnInit", this ); }

                for (var i = 0; i < this.poolAmounts.length; i = (i + 1) | 0) {
                    if (!this.dict.containsKey(this.poolAmounts[i].type)) {
                        this.dict.setItem(this.poolAmounts[i].type, new (System.Collections.Generic.Queue$1(Ply_GameUnit)).ctor());
                    }
                    for (var j = 0; j < this.poolAmounts[i].amount; j = (j + 1) | 0) {
                        var gameUnit = UnityEngine.Object.Instantiate(Ply_GameUnit, this.poolAmounts[i].gameUnit);
                        gameUnit.gameObject.SetActive(false);
                        this.dict.getItem(this.poolAmounts[i].type).Enqueue(gameUnit);
                    }
                }
            },
            /*Ply_Pool.OnInit end.*/

            /*Ply_Pool.Spawn$1 start.*/
            Spawn$1: function (poolType, pos, rot) {
if ( TRACE ) { TRACE( "Ply_Pool#Spawn$1", this ); }

                var gameUnit = ((this.dict.getItem(poolType).Count > 0) ? this.dict.getItem(poolType).Dequeue() : UnityEngine.Object.Instantiate(Ply_GameUnit, this.GetPrefab(poolType)));
                gameUnit.tf.SetPositionAndRotation(pos, rot);
                gameUnit.gameObject.SetActive(true);
                return gameUnit;
            },
            /*Ply_Pool.Spawn$1 end.*/

            /*Ply_Pool.Spawn start.*/
            Spawn: function (T, poolType, pos, rot) {
if ( TRACE ) { TRACE( "Ply_Pool#Spawn", this ); }

                return Bridge.as(this.Spawn$1(poolType, pos.$clone(), rot.$clone()), T);
            },
            /*Ply_Pool.Spawn end.*/

            /*Ply_Pool.Despawn start.*/
            Despawn: function (poolType, gameUnit) {
if ( TRACE ) { TRACE( "Ply_Pool#Despawn", this ); }

                gameUnit.gameObject.SetActive(false);
                this.dict.getItem(poolType).Enqueue(gameUnit);
            },
            /*Ply_Pool.Despawn end.*/

            /*Ply_Pool.GetPrefab start.*/
            GetPrefab: function (poolType) {
if ( TRACE ) { TRACE( "Ply_Pool#GetPrefab", this ); }

                for (var i = 0; i < this.poolAmounts.length; i = (i + 1) | 0) {
                    if (this.poolAmounts[i].type === poolType) {
                        return this.poolAmounts[i].gameUnit;
                    }
                }
                return null;
            },
            /*Ply_Pool.GetPrefab end.*/


        },
        overloads: {
            "Spawn(PoolType, Vector3, Quaternion)": "Spawn$1"
        }
    });
    /*Ply_Pool end.*/

    /*Ply_SoundManager start.*/
    Bridge.define("Ply_SoundManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#inherits", this ); }
 return [Ply_Singleton$1(Ply_SoundManager)]; },
        statics: {
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#Instance#get", this ); }

                        if (UnityEngine.MonoBehaviour.op_Equality(Ply_Singleton$1(Ply_SoundManager).Ins, null)) {
                            Ply_Singleton$1(Ply_SoundManager).Ins = UnityEngine.Object.FindObjectOfType(Ply_SoundManager);
                        }
                        return Ply_Singleton$1(Ply_SoundManager).Ins;
                    }
                }
            }
        },
        fields: {
            audioClips: null,
            sound: null,
            fx: null,
            loopFx: null,
            enableSound: false,
            _lastEnableSound: false,
            bgmVolume: 0,
            _lastBgmVolume: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#init", this ); }

                this.fx = System.Array.init(40, null, UnityEngine.AudioSource);
                this.loopFx = System.Array.init(40, null, UnityEngine.AudioSource);
                this.enableSound = true;
                this.bgmVolume = 0.3;
            }
        },
        methods: {
            /*Ply_SoundManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#Awake", this ); }

                Ply_Singleton$1(Ply_SoundManager).prototype.Awake.call(this);
                this.EnsureAudioListener();
            },
            /*Ply_SoundManager.Awake end.*/

            /*Ply_SoundManager.EnsureAudioListener start.*/
            EnsureAudioListener: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#EnsureAudioListener", this ); }

                var mainCam = UnityEngine.Camera.main;
                var listener = ((UnityEngine.Component.op_Inequality(mainCam, null)) ? mainCam.GetComponent(UnityEngine.AudioListener) : this.GetComponent(UnityEngine.AudioListener));
                if (UnityEngine.Component.op_Equality(listener, null)) {
                    if (UnityEngine.Component.op_Inequality(mainCam, null)) {
                        mainCam.gameObject.AddComponent(UnityEngine.AudioListener);
                    } else {
                        Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.AddComponent(UnityEngine.AudioListener);
                    }
                }
            },
            /*Ply_SoundManager.EnsureAudioListener end.*/

            /*Ply_SoundManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#Start", this ); }

                this._lastEnableSound = this.enableSound;
                this._lastBgmVolume = this.bgmVolume;
                this.UpdateBGMState();
            },
            /*Ply_SoundManager.Start end.*/

            /*Ply_SoundManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#Update", this ); }

                if (this._lastEnableSound !== this.enableSound || this._lastBgmVolume !== this.bgmVolume) {
                    this._lastEnableSound = this.enableSound;
                    this._lastBgmVolume = this.bgmVolume;
                    this.UpdateBGMState();
                }
            },
            /*Ply_SoundManager.Update end.*/

            /*Ply_SoundManager.UpdateBGMState start.*/
            UpdateBGMState: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#UpdateBGMState", this ); }

                if (UnityEngine.Component.op_Inequality(this.sound, null)) {
                    this.sound.mute = !this.enableSound;
                    this.sound.volume = this.bgmVolume;
                }
                for (var i = 0; i < this.fx.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.fx[i], null)) {
                        this.fx[i].mute = !this.enableSound;
                    }
                    if (UnityEngine.Component.op_Inequality(this.loopFx[i], null)) {
                        this.loopFx[i].mute = !this.enableSound;
                    }
                }
            },
            /*Ply_SoundManager.UpdateBGMState end.*/

            /*Ply_SoundManager.PlayFx start.*/
            PlayFx: function (fxType) {
if ( TRACE ) { TRACE( "Ply_SoundManager#PlayFx", this ); }

                if (!this.enableSound) {
                    return 0.0;
                }
                var data = this.audioClips.GetSoundData(fxType);
                if (data == null || data.clip == null) {
                    return 0.0;
                }
                if (UnityEngine.Component.op_Equality(this.fx[fxType], null)) {
                    this.fx[fxType] = new UnityEngine.GameObject.$ctor2(System.String.format("FX_{0}", [Bridge.box(fxType, FxType, System.Enum.toStringFn(FxType))])).AddComponent(UnityEngine.AudioSource);
                }
                var v = data.volume;
                this.fx[fxType].clip = data.clip;
                this.fx[fxType].volume = UnityEngine.Mathf.Min(1.0, v);
                this.fx[fxType].Play();
                for (v -= 1.0; v > 0.0; v -= 1.0) {
                    this.fx[fxType].PlayOneShot$1(data.clip, UnityEngine.Mathf.Min(1.0, v));
                }
                return data.clip.length;
            },
            /*Ply_SoundManager.PlayFx end.*/

            /*Ply_SoundManager.PlaySequentialSounds start.*/
            PlaySequentialSounds: function (mainSound, additionalSounds) {
if ( TRACE ) { TRACE( "Ply_SoundManager#PlaySequentialSounds", this ); }

                if (Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeInHierarchy) {
                    this.StartCoroutine$1(this.PlaySequentialSoundsRoutine(mainSound, additionalSounds));
                }
            },
            /*Ply_SoundManager.PlaySequentialSounds end.*/

            /*Ply_SoundManager.PlaySequentialSoundsRoutine start.*/
            PlaySequentialSoundsRoutine: function (mainSound, additionalSounds) {
if ( TRACE ) { TRACE( "Ply_SoundManager#PlaySequentialSoundsRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    $t,
                    fx,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = this.PlayFx(mainSound);
                                        if (additionalSounds == null || additionalSounds.Count <= 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    $t = Bridge.getEnumerator(additionalSounds);
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ($t.moveNext()) {
                                            fx = $t.Current;
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(duration);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    duration = this.PlayFx(fx);
                                    $step = 3;
                                    continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Ply_SoundManager.PlaySequentialSoundsRoutine end.*/

            /*Ply_SoundManager.StopBGM start.*/
            StopBGM: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#StopBGM", this ); }

                if (UnityEngine.Component.op_Inequality(this.sound, null)) {
                    this.sound.Stop();
                }
            },
            /*Ply_SoundManager.StopBGM end.*/

            /*Ply_SoundManager.Mute start.*/
            Mute: function () {
if ( TRACE ) { TRACE( "Ply_SoundManager#Mute", this ); }

                if (UnityEngine.Component.op_Inequality(this.sound, null)) {
                    this.sound.Stop();
                }
                for (var i = 0; i < this.fx.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.fx[i], null)) {
                        this.fx[i].Stop();
                    }
                    if (UnityEngine.Component.op_Inequality(this.loopFx[i], null)) {
                        this.loopFx[i].Stop();
                    }
                }
            },
            /*Ply_SoundManager.Mute end.*/

            /*Ply_SoundManager.PlayClip start.*/
            PlayClip: function (clip, volume) {
if ( TRACE ) { TRACE( "Ply_SoundManager#PlayClip", this ); }

                if (volume === void 0) { volume = 1.0; }
                if (!(clip == null) && this.enableSound) {
                    var go = new UnityEngine.GameObject.$ctor2("SFX_Clip");
                    var a = go.AddComponent(UnityEngine.AudioSource);
                    a.clip = clip;
                    a.volume = volume;
                    UnityEngine.Debug.Log$1(System.String.format("PlayClip: clip: {0}, volume: {1}", clip, Bridge.box(volume, System.Single, System.Single.format, System.Single.getHashCode)));
                    a.Play();
                    UnityEngine.Object.Destroy$1(go, clip.length + 0.1);
                }
            },
            /*Ply_SoundManager.PlayClip end.*/

            /*Ply_SoundManager.PlayLoopFx start.*/
            PlayLoopFx: function (fxType, volume) {
if ( TRACE ) { TRACE( "Ply_SoundManager#PlayLoopFx", this ); }

                if (volume === void 0) { volume = 1.0; }
                if (!this.enableSound) {
                    return;
                }
                var data = this.audioClips.GetSoundData(fxType);
                if (data != null && !(data.clip == null)) {
                    if (UnityEngine.Component.op_Equality(this.loopFx[fxType], null)) {
                        var go = new UnityEngine.GameObject.$ctor2(System.String.format("LoopFX_{0}", [Bridge.box(fxType, FxType, System.Enum.toStringFn(FxType))]));
                        this.loopFx[fxType] = go.AddComponent(UnityEngine.AudioSource);
                        this.loopFx[fxType].loop = true;
                        this.loopFx[fxType].playOnAwake = false;
                    }
                    this.loopFx[fxType].clip = data.clip;
                    this.loopFx[fxType].volume = UnityEngine.Mathf.Min(1.0, data.volume) * volume;
                    if (!this.loopFx[fxType].isPlaying) {
                        this.loopFx[fxType].Play();
                    }
                }
            },
            /*Ply_SoundManager.PlayLoopFx end.*/

            /*Ply_SoundManager.StopLoopFx start.*/
            StopLoopFx: function (fxType) {
if ( TRACE ) { TRACE( "Ply_SoundManager#StopLoopFx", this ); }

                var source = this.loopFx[fxType];
                if (UnityEngine.Component.op_Inequality(source, null) && source.isPlaying) {
                    source.Stop();
                }
            },
            /*Ply_SoundManager.StopLoopFx end.*/


        }
    });
    /*Ply_SoundManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","DG.Tweening","UnityEngine","UnityEngine.UI","System.Collections.Generic","System.Collections","RonaldoPenalty","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*ALEvent start.*/
    $m("ALEvent", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CHALLENGE_FAILED","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_FAILED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_PASS_25","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_PASS_25","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_PASS_50","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_PASS_50","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_PASS_75","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_PASS_75","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_RETRY","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_RETRY","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_SOLVED","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_SOLVED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CHALLENGE_STARTED","is":true,"t":4,"rt":ALEvent,"sn":"CHALLENGE_STARTED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"CTA_CLICKED","is":true,"t":4,"rt":ALEvent,"sn":"CTA_CLICKED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"DISPLAYED","is":true,"t":4,"rt":ALEvent,"sn":"DISPLAYED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"ENDCARD_SHOWN","is":true,"t":4,"rt":ALEvent,"sn":"ENDCARD_SHOWN","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"LOADED","is":true,"t":4,"rt":ALEvent,"sn":"LOADED","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}},{"a":2,"n":"LOADING","is":true,"t":4,"rt":ALEvent,"sn":"LOADING","box":function ($v) { return Bridge.box($v, ALEvent, System.Enum.toStringFn(ALEvent));}}]}; }, $n);
    /*ALEvent end.*/

    /*AppLovinAnalytics start.*/
    $m("AppLovinAnalytics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Track","is":true,"t":8,"pi":[{"n":"evt","pt":ALEvent,"ps":0}],"sn":"Track","rt":$n[0].Void,"p":[ALEvent]}]}; }, $n);
    /*AppLovinAnalytics end.*/

    /*BossController start.*/
    $m("BossController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"isWin","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnLastBoardPassed","t":8,"pi":[{"n":"player","pt":PlayerController,"ps":0}],"sn":"OnLastBoardPassed","rt":$n[0].Void,"p":[PlayerController]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartBossSequence","t":8,"pi":[{"n":"isWin","pt":$n[0].Boolean,"ps":0}],"sn":"StartBossSequence","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"bossSeq","t":4,"rt":$n[1].Sequence,"sn":"bossSeq"},{"at":[new UnityEngine.HeaderAttribute("Visual References"),new UnityEngine.TooltipAttribute("SpriteRenderer hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u1ee7a Boss"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bossSpriteRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"bossSpriteRenderer"},{"a":1,"n":"canClickToStore","t":4,"rt":$n[0].Boolean,"sn":"canClickToStore","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("GameObject hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u1ee7a C\u1ea7u th\u1ee7 (Character Visual)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"characterVisual","t":4,"rt":$n[2].GameObject,"sn":"characterVisual"},{"at":[new UnityEngine.HeaderAttribute("Player Reference"),new UnityEngine.TooltipAttribute("Tham chi\u1ebfu t\u1edbi PlayerController trong Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPlayer","t":4,"rt":PlayerController,"sn":"currentPlayer"},{"at":[new UnityEngine.HeaderAttribute("Runtime Status"),new UnityEngine.TooltipAttribute("C\u1ea5p \u0111\u1ed9 hi\u1ec7n t\u1ea1i c\u1ee7a C\u1ea7u th\u1ee7 (T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt \u0111\u1ec3 ti\u1ec7n theo d\u00f5i)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPlayerLevel","t":4,"rt":$n[0].Int32,"sn":"currentPlayerLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Timing Settings"),new UnityEngine.TooltipAttribute("Th\u1eddi gian ch\u1edd (gi\u00e2y) sau khi \u0111i qua c\u1ed5ng cu\u1ed1i tr\u01b0\u1edbc khi k\u00edch ho\u1ea1t \u0111\u1ea5u Boss (\u0110i\u1ec1n >= 0 \u0111\u1ec3 \u0111\u1ebfm ng\u01b0\u1ee3c sau c\u1ed5ng cu\u1ed1i, \u0111i\u1ec1n -1 \u0111\u1ec3 nh\u00e2n v\u1eadt \u0111i t\u1edbi End m\u1edbi k\u00edch ho\u1ea1t)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayAfterLastBoard","t":4,"rt":$n[0].Single,"sn":"delayAfterLastBoard","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c GameObject ph\u1ee5 c\u1ea7n t\u1ef1 \u0111\u1ed9ng t\u1eaft cho C\u1ea2 HAI khi UI Result xu\u1ea5t hi\u1ec7n (v\u00ed d\u1ee5 resultObject, extraWinObject...)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"extraObjectsToHide","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"extraObjectsToHide"},{"at":[new UnityEngine.TooltipAttribute("GameObject ph\u1ee5 hi\u1ec7n l\u00ean c\u00f9ng l\u00fac v\u1edbi Win Sprite (Ch\u1ec9 b\u1eadt khi Th\u1eafng)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"extraWinObject","t":4,"rt":$n[2].GameObject,"sn":"extraWinObject"},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian (gi\u00e2y) hi\u1ec3n th\u1ecb hi\u1ec7u \u1ee9ng m\u00e2y \u0111\u1ed1i kh\u00e1ng FightingCloud"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightDuration","t":4,"rt":$n[0].Single,"sn":"fightDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Fight Effect"),new UnityEngine.TooltipAttribute("GameObject / ParticleSystem hi\u1ec7u \u1ee9ng m\u00e2y \u0111\u1ed1i kh\u00e1ng (FightingCloud)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightingCloud","t":4,"rt":$n[2].GameObject,"sn":"fightingCloud"},{"at":[new UnityEngine.HeaderAttribute("Audio Settings (Ply_SoundManager)"),new UnityEngine.TooltipAttribute("Lo\u1ea1i \u00e2m thanh ph\u00e1t khi hi\u1ec7u \u1ee9ng FightingCloud xu\u1ea5t hi\u1ec7n"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightingCloudFx","t":4,"rt":FxType,"sn":"fightingCloudFx","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":1,"n":"isSequenceStarted","t":4,"rt":$n[0].Boolean,"sn":"isSequenceStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("UI Panel hi\u1ec3n th\u1ecb m\u00e0n h\u00ecnh Th\u1ea5t B\u1ea1i (Lose Panel)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"losePanel","t":4,"rt":$n[2].GameObject,"sn":"losePanel"},{"at":[new UnityEngine.TooltipAttribute("Lo\u1ea1i \u00e2m thanh ph\u00e1t khi m\u00e0n h\u00ecnh Lose Panel xu\u1ea5t hi\u1ec7n"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"losePanelFx","t":4,"rt":FxType,"sn":"losePanelFx","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"at":[new UnityEngine.TooltipAttribute("Sprite hi\u1ec3n th\u1ecb khi C\u1ea7u th\u1ee7 Th\u1ea5t b\u1ea1i tr\u01b0\u1edbc Boss"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lossSprite","t":4,"rt":$n[2].Sprite,"sn":"lossSprite"},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch GameObject ch\u1ec9 \u1ea9n khi LOSE"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objectsToHideOnLose","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToHideOnLose"},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch GameObject ch\u1ec9 \u1ea9n khi WIN"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objectsToHideOnWin","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToHideOnWin"},{"at":[new UnityEngine.HeaderAttribute("Result Showcase"),new UnityEngine.TooltipAttribute("GameObject hi\u1ec3n th\u1ecb k\u1ebft qu\u1ea3 sau khi \u0111\u1ea5u v\u1edbi Boss"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"resultObject","t":4,"rt":$n[2].GameObject,"sn":"resultObject"},{"at":[new UnityEngine.TooltipAttribute("SpriteRenderer tr\u00ean Result Object d\u00f9ng \u0111\u1ec3 g\u00e1n Sprite k\u1ebft qu\u1ea3"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"resultSpriteRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"resultSpriteRenderer"},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian (gi\u00e2y) hi\u1ec3n th\u1ecb Result Object tr\u01b0\u1edbc khi b\u1eadt m\u00e0n h\u00ecnh Win/Loss UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"showResultDuration","t":4,"rt":$n[0].Single,"sn":"showResultDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI Result Panels"),new UnityEngine.TooltipAttribute("UI Panel hi\u1ec3n th\u1ecb m\u00e0n h\u00ecnh Chi\u1ebfn Th\u1eafng (Win Panel)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winPanel","t":4,"rt":$n[2].GameObject,"sn":"winPanel"},{"at":[new UnityEngine.TooltipAttribute("Lo\u1ea1i \u00e2m thanh ph\u00e1t khi m\u00e0n h\u00ecnh Win Panel xu\u1ea5t hi\u1ec7n"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winPanelFx","t":4,"rt":FxType,"sn":"winPanelFx","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"at":[new UnityEngine.TooltipAttribute("Sprite hi\u1ec3n th\u1ecb khi C\u1ea7u th\u1ee7 Chi\u1ebfn th\u1eafng Boss"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winSprite","t":4,"rt":$n[2].Sprite,"sn":"winSprite"}]}; }, $n);
    /*BossController end.*/

    /*CacheCollider start.*/
    $m("CacheCollider", function () { return {"att":1048961,"a":2,"s":true}; }, $n);
    /*CacheCollider end.*/

    /*ChoiceBoard start.*/
    $m("ChoiceBoard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AssignData","t":8,"pi":[{"n":"choiceData","pt":ChoiceData,"ps":0}],"sn":"AssignData","rt":$n[0].Void,"p":[ChoiceData]},{"a":2,"n":"AssignVisualData","t":8,"pi":[{"n":"newSprite","pt":$n[2].Sprite,"ps":0}],"sn":"AssignVisualData","rt":$n[0].Void,"p":[$n[2].Sprite]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":2,"n":"PlayChooseSequence","t":8,"sn":"PlayChooseSequence","rt":$n[0].Void},{"a":2,"n":"SetChoiceBoardType","t":8,"pi":[{"n":"choiceType","pt":EChoiceType,"ps":0}],"sn":"SetChoiceBoardType","rt":$n[0].Void,"p":[EChoiceType]},{"a":2,"n":"UpdateBorderVisual","t":8,"sn":"UpdateBorderVisual","rt":$n[0].Void},{"a":2,"n":"ChoiceType","t":16,"rt":EChoiceType,"g":{"a":2,"n":"get_ChoiceType","t":8,"rt":EChoiceType,"fg":"ChoiceType","box":function ($v) { return Bridge.box($v, EChoiceType, System.Enum.toStringFn(EChoiceType));}},"fn":"ChoiceType"},{"a":2,"n":"VisualRender","t":16,"rt":$n[2].SpriteRenderer,"g":{"a":2,"n":"get_VisualRender","t":8,"rt":$n[2].SpriteRenderer,"fg":"VisualRender"},"fn":"VisualRender"},{"at":[new UnityEngine.TooltipAttribute("Renderer hi\u1ec3n th\u1ecb khung vi\u1ec1n c\u1ee7a b\u1ea3ng l\u1ef1a ch\u1ecdn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"borderRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"borderRenderer"},{"at":[new UnityEngine.HeaderAttribute("Choice Settings"),new UnityEngine.TooltipAttribute("Lo\u1ea1i l\u1ef1a ch\u1ecdn c\u1ee7a b\u1ea3ng (T\u0103ng/Gi\u1ea3m ch\u1ec9 s\u1ed1...)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceBoardType","t":4,"rt":EChoiceType,"sn":"choiceBoardType","box":function ($v) { return Bridge.box($v, EChoiceType, System.Enum.toStringFn(EChoiceType));}},{"a":1,"n":"choosenSeq","t":4,"rt":$n[1].Sequence,"sn":"choosenSeq"},{"at":[new UnityEngine.TooltipAttribute("Sprite khung vi\u1ec1n khi lo\u1ea1i l\u1ef1a ch\u1ecdn l\u00e0 Decrease Generic"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"decreaseBorderSprite","t":4,"rt":$n[2].Sprite,"sn":"decreaseBorderSprite"},{"at":[new UnityEngine.HeaderAttribute("Border Sprites (Default)"),new UnityEngine.TooltipAttribute("Sprite khung vi\u1ec1n khi lo\u1ea1i l\u1ef1a ch\u1ecdn l\u00e0 Increase Generic"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"increaseBorderSprite","t":4,"rt":$n[2].Sprite,"sn":"increaseBorderSprite"},{"at":[new UnityEngine.HeaderAttribute("Renderers"),new UnityEngine.TooltipAttribute("Renderer hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u1ee7a b\u1ea3ng l\u1ef1a ch\u1ecdn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spriteRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"spriteRenderer"}]}; }, $n);
    /*ChoiceBoard end.*/

    /*ChoiceBoardHolder start.*/
    $m("ChoiceBoardHolder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyBoardData","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"choiceData","pt":ChoiceData,"ps":1}],"sn":"ApplyBoardData","rt":$n[0].Void,"p":[$n[0].Int32,ChoiceData]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetNearestBoard","t":8,"pi":[{"n":"worldPos","pt":$n[2].Vector3,"ps":0}],"sn":"GetNearestBoard","rt":ChoiceBoard,"p":[$n[2].Vector3]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"PickBoard","t":8,"pi":[{"n":"player","pt":PlayerController,"ps":0},{"n":"currentWorldPos","pt":$n[2].Vector3,"ps":1}],"sn":"PickBoard","rt":$n[0].Void,"p":[PlayerController,$n[2].Vector3]},{"a":2,"n":"IsLastBoard","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsLastBoard","t":8,"rt":$n[0].Boolean,"fg":"IsLastBoard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsLastBoard","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsLastBoard"},"fn":"IsLastBoard"},{"a":2,"n":"OnLastBoardPassed","is":true,"t":4,"rt":Function,"sn":"OnLastBoardPassed"},{"at":[new UnityEngine.HeaderAttribute("Board References"),new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c ChoiceBoard thu\u1ed9c Holder n\u00e0y (th\u01b0\u1eddng g\u1ed3m 2 \u00f4 l\u1ef1a ch\u1ecdn)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceBoards","t":4,"rt":System.Array.type(ChoiceBoard),"sn":"choiceBoards"},{"a":1,"n":"holderCollider","t":4,"rt":$n[2].Collider,"sn":"holderCollider"},{"a":1,"backing":true,"n":"<IsLastBoard>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsLastBoard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ChoiceBoardHolder end.*/

    /*ChoiceBoardPairData start.*/
    $m("ChoiceBoardPairData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "ChoiceBoardPairData", menuName: "Scriptable Objects/Data/ChoiceBoardPairData"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Data List"),new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c c\u1eb7p l\u1ef1a ch\u1ecdn trong m\u00e0n ch\u01a1i")],"a":2,"n":"ChoicePairDatas","t":4,"rt":System.Array.type(ChoicePairData),"sn":"ChoicePairDatas"}]}; }, $n);
    /*ChoiceBoardPairData end.*/

    /*ChoiceBoardPlacer start.*/
    $m("ChoiceBoardPlacer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.ContextMenu.ctor("Clear Existing")],"a":2,"n":"ClearExisting","t":8,"sn":"ClearExisting","rt":$n[0].Void},{"a":1,"n":"ShuffleArray","t":8,"pi":[{"n":"array","pt":System.Array.type(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"ShuffleArray","rt":$n[0].Void,"p":[System.Array.type(System.Object)]},{"at":[new UnityEngine.ContextMenu.ctor("Spawn")],"a":2,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"SpawnedCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SpawnedCount","t":8,"rt":$n[0].Int32,"fg":"SpawnedCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"SpawnedCount"},{"at":[new UnityEngine.HeaderAttribute("Spawn References"),new UnityEngine.TooltipAttribute("Prefab ChoiceBoardHolder s\u1ebd \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceBoardHolderprefab","t":4,"rt":ChoiceBoardHolder,"sn":"choiceBoardHolderprefab"},{"at":[new UnityEngine.TooltipAttribute("ScriptableObject ch\u1ee9a d\u1eef li\u1ec7u c\u00e1c c\u1eb7p l\u1ef1a ch\u1ecdn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceBoardPairData","t":4,"rt":ChoiceBoardPairData,"sn":"choiceBoardPairData"},{"at":[new UnityEngine.TooltipAttribute("Transform \u0111i\u1ec3m \u0111\u00edch \u0111\u1ec3 t\u1ef1 \u0111\u1ed9ng t\u00ednh kho\u1ea3ng c\u00e1ch"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPos","t":4,"rt":$n[2].Transform,"sn":"endPos"},{"at":[new UnityEngine.TooltipAttribute("T\u1ef1 \u0111\u1ed9ng tr\u00e1o \u0111\u1ed5i ng\u1eabu nhi\u00ean v\u1ecb tr\u00ed Tr\u00e1i/Ph\u1ea3i trong t\u1eebng c\u1eb7p c\u1ed5ng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shuffleLeftRight","t":4,"rt":$n[0].Boolean,"sn":"shuffleLeftRight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Shuffle Settings"),new UnityEngine.TooltipAttribute("T\u1ef1 \u0111\u1ed9ng tr\u00e1o \u0111\u1ed5i ng\u1eabu nhi\u00ean th\u1ee9 t\u1ef1 danh s\u00e1ch c\u00e1c c\u1eb7p c\u1ed5ng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shufflePairsOrder","t":4,"rt":$n[0].Boolean,"sn":"shufflePairsOrder","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Spawn Settings"),new UnityEngine.TooltipAttribute("S\u1ed1 l\u01b0\u1ee3ng h\u00e0ng b\u1ea3ng l\u1ef1a ch\u1ecdn c\u1ea7n sinh ra (N l\u01b0\u1ee3t chia \u0111\u1ec1u t\u1eeb B\u1eaft \u0111\u1ea7u \u0111\u1ebfn EndPos)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnCount","t":4,"rt":$n[0].Int32,"sn":"spawnCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("N\u1ebfu true: Sinh t\u1ef1 \u0111\u1ed9ng theo s\u1ed1 l\u01b0\u1ee3ng spawnCount. N\u1ebfu false: Sinh theo d\u1eef li\u1ec7u trong ChoiceBoardPairData"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnGenericByNumber","t":4,"rt":$n[0].Boolean,"sn":"spawnGenericByNumber","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Auto Spawn"),new UnityEngine.TooltipAttribute("T\u1ef1 \u0111\u1ed9ng sinh c\u00e1c b\u1ea3ng l\u1ef1a ch\u1ecdn khi Start()"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnOnStart","t":4,"rt":$n[0].Boolean,"sn":"spawnOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Transform v\u1ecb tr\u00ed b\u1eaft \u0111\u1ea7u (n\u1ebfu \u0111\u1ec3 tr\u1ed1ng s\u1ebd l\u1ea5y v\u1ecb tr\u00ed transform n\u00e0y)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPos","t":4,"rt":$n[2].Transform,"sn":"startPos"}]}; }, $n);
    /*ChoiceBoardPlacer end.*/

    /*ChoiceData start.*/
    $m("ChoiceData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.TooltipAttribute("H\u00ecnh \u1ea3nh khung vi\u1ec1n t\u00f9y ch\u1ecdn (N\u1ebfu \u0111\u1ec3 tr\u1ed1ng s\u1ebd d\u00f9ng khung m\u1eb7c \u0111\u1ecbnh theo Increase/Decrease)")],"a":2,"n":"BorderSprite","t":4,"rt":$n[2].Sprite,"sn":"BorderSprite"},{"at":[new UnityEngine.TooltipAttribute("Lo\u1ea1i l\u1ef1a ch\u1ecdn t\u01b0\u01a1ng \u1ee9ng")],"a":2,"n":"ChoiceType","t":4,"rt":EChoiceType,"sn":"ChoiceType","box":function ($v) { return Bridge.box($v, EChoiceType, System.Enum.toStringFn(EChoiceType));}},{"at":[new UnityEngine.HeaderAttribute("Choice Data"),new UnityEngine.TooltipAttribute("H\u00ecnh \u1ea3nh \u0111\u1ea1i di\u1ec7n cho l\u1ef1a ch\u1ecdn n\u00e0y")],"a":2,"n":"VisualSprite","t":4,"rt":$n[2].Sprite,"sn":"VisualSprite"}]}; }, $n);
    /*ChoiceData end.*/

    /*ChoicePairData start.*/
    $m("ChoicePairData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Pair Choices"),new UnityEngine.TooltipAttribute("D\u1eef li\u1ec7u l\u1ef1a ch\u1ecdn \u00f4 th\u1ee9 nh\u1ea5t (tr\u00e1i)")],"a":2,"n":"choiceData1","t":4,"rt":ChoiceData,"sn":"choiceData1"},{"at":[new UnityEngine.TooltipAttribute("D\u1eef li\u1ec7u l\u1ef1a ch\u1ecdn \u00f4 th\u1ee9 hai (ph\u1ea3i)")],"a":2,"n":"choiceData2","t":4,"rt":ChoiceData,"sn":"choiceData2"}]}; }, $n);
    /*ChoicePairData end.*/

    /*EChoiceType start.*/
    $m("EChoiceType", function () { return {"att":8449,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DecreaseGeneric","is":true,"t":4,"rt":EChoiceType,"sn":"DecreaseGeneric","box":function ($v) { return Bridge.box($v, EChoiceType, System.Enum.toStringFn(EChoiceType));}},{"a":2,"n":"IncreaseGeneric","is":true,"t":4,"rt":EChoiceType,"sn":"IncreaseGeneric","box":function ($v) { return Bridge.box($v, EChoiceType, System.Enum.toStringFn(EChoiceType));}}]}; }, $n);
    /*EChoiceType end.*/

    /*FxAudio start.*/
    $m("FxAudio", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSoundData","t":8,"pi":[{"n":"type","pt":FxType,"ps":0}],"sn":"GetSoundData","rt":SoundData,"p":[FxType]},{"a":2,"n":"Clock","t":4,"rt":SoundData,"sn":"Clock"},{"a":2,"n":"FightingCloud","t":4,"rt":SoundData,"sn":"FightingCloud"},{"a":2,"n":"MaxLevel","t":4,"rt":SoundData,"sn":"MaxLevel"},{"a":2,"n":"PlayerLoose","t":4,"rt":SoundData,"sn":"PlayerLoose"},{"a":2,"n":"PlayerWin","t":4,"rt":SoundData,"sn":"PlayerWin"},{"a":2,"n":"RightChoice","t":4,"rt":SoundData,"sn":"RightChoice"},{"a":2,"n":"WrongChoice","t":4,"rt":SoundData,"sn":"WrongChoice"}]}; }, $n);
    /*FxAudio end.*/

    /*FxType start.*/
    $m("FxType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clock","is":true,"t":4,"rt":FxType,"sn":"Clock","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"FightingCloud","is":true,"t":4,"rt":FxType,"sn":"FightingCloud","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"MaxLevel","is":true,"t":4,"rt":FxType,"sn":"MaxLevel","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"PlayerLoose","is":true,"t":4,"rt":FxType,"sn":"PlayerLoose","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"PlayerWin","is":true,"t":4,"rt":FxType,"sn":"PlayerWin","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"RightChoice","is":true,"t":4,"rt":FxType,"sn":"RightChoice","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}},{"a":2,"n":"WrongChoice","is":true,"t":4,"rt":FxType,"sn":"WrongChoice","box":function ($v) { return Bridge.box($v, FxType, System.Enum.toStringFn(FxType));}}]}; }, $n);
    /*FxType end.*/

    /*GameEndUI start.*/
    $m("GameEndUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"winState","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ToStoreButtonClicked","t":8,"sn":"ToStoreButtonClicked","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("End Sequence Timings"),new UnityEngine.TooltipAttribute("Th\u1eddi gian ch\u1edd (gi\u00e2y) tr\u01b0\u1edbc khi xu\u1ea5t hi\u1ec7n giao di\u1ec7n k\u1ebft th\u00fac"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endDisplayDelayTime","t":4,"rt":$n[0].Single,"sn":"endDisplayDelayTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Panel UI hi\u1ec3n th\u1ecb khi ng\u01b0\u1eddi ch\u01a1i th\u1ea5t b\u1ea1i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseCanvasHolder","t":4,"rt":$n[2].GameObject,"sn":"loseCanvasHolder"},{"a":1,"n":"seq","t":4,"rt":$n[1].Sequence,"sn":"seq"},{"at":[new UnityEngine.TooltipAttribute("N\u00fat b\u1ea5m chuy\u1ec3n h\u01b0\u1edbng ng\u01b0\u1eddi ch\u01a1i t\u1edbi c\u1eeda h\u00e0ng (Store)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toStoreButton","t":4,"rt":$n[3].Button,"sn":"toStoreButton"},{"at":[new UnityEngine.HeaderAttribute("UI Canvas Holders"),new UnityEngine.TooltipAttribute("Panel UI hi\u1ec3n th\u1ecb khi ng\u01b0\u1eddi ch\u01a1i chi\u1ebfn th\u1eafng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winCanvasHolder","t":4,"rt":$n[2].GameObject,"sn":"winCanvasHolder"}]}; }, $n);
    /*GameEndUI end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckWinCondition","is":true,"t":8,"pi":[{"n":"currentLevel","pt":$n[0].Int32,"ps":0}],"sn":"CheckWinCondition","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[0].Void},{"a":2,"n":"GotoStore","is":true,"t":8,"sn":"GotoStore","rt":$n[0].Void},{"a":1,"n":"OnCharacterReachedEnd","t":8,"pi":[{"n":"currentLevel","pt":$n[0].Int32,"ps":0}],"sn":"OnCharacterReachedEnd","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"OnClick_GotoStore","t":8,"sn":"OnClick_GotoStore","rt":$n[0].Void},{"a":1,"n":"OnGameEnd","t":8,"pi":[{"n":"winState","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnd","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"PauseGame","is":true,"t":8,"sn":"PauseGame","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UnPauseGame","is":true,"t":8,"sn":"UnPauseGame","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"CurrentPlayerLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentPlayerLevel","t":8,"rt":$n[0].Int32,"fg":"CurrentPlayerLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentPlayerLevel"},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"IsGamePause","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGamePause","t":8,"rt":$n[0].Boolean,"fg":"IsGamePause","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsGamePause"},{"a":2,"n":"MainCamera","is":true,"t":16,"rt":$n[2].Camera,"g":{"a":2,"n":"get_MainCamera","t":8,"rt":$n[2].Camera,"fg":"MainCamera","is":true},"s":{"a":1,"n":"set_MainCamera","t":8,"p":[$n[2].Camera],"rt":$n[0].Void,"fs":"MainCamera","is":true},"fn":"MainCamera"},{"a":2,"n":"MaxLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MaxLevel","t":8,"rt":$n[0].Int32,"fg":"MaxLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"MaxLevel"},{"a":2,"n":"TotalMoveTime","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_TotalMoveTime","t":8,"rt":$n[0].Single,"fg":"TotalMoveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"TotalMoveTime"},{"a":2,"n":"WinLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_WinLevel","t":8,"rt":$n[0].Int32,"fg":"WinLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"WinLevel"},{"a":2,"n":"isGameEnded","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_isGameEnded","t":8,"rt":$n[0].Boolean,"fg":"isGameEnded","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_isGameEnded","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"isGameEnded","is":true},"fn":"isGameEnded"},{"a":2,"n":"OnCharacterReachedTheEnd","is":true,"t":4,"rt":Function,"sn":"OnCharacterReachedTheEnd"},{"a":2,"n":"OnGameEnded","is":true,"t":4,"rt":Function,"sn":"OnGameEnded"},{"a":2,"n":"OnGameStart","is":true,"t":4,"rt":Function,"sn":"OnGameStart"},{"a":2,"n":"Player","t":4,"rt":PlayerController,"sn":"Player"},{"at":[new UnityEngine.HeaderAttribute("Runtime Status"),new UnityEngine.TooltipAttribute("C\u1ea5p \u0111\u1ed9 hi\u1ec7n t\u1ea1i c\u1ee7a C\u1ea7u th\u1ee7 trong m\u00e0n ch\u01a1i (T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt \u0111\u1ec3 theo d\u00f5i)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPlayerLevel","t":4,"rt":$n[0].Int32,"sn":"currentPlayerLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isGamePaused","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isGamePaused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Game Rules"),new UnityEngine.TooltipAttribute("C\u1ea5p \u0111\u1ed9 t\u1ed1i \u0111a c\u1ea7u th\u1ee7 c\u00f3 th\u1ec3 \u0111\u1ea1t t\u1edbi (M\u1eb7c \u0111\u1ecbnh = 4)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxLevel","t":4,"rt":$n[0].Int32,"sn":"maxLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("T\u1ed5ng th\u1eddi gian di chuy\u1ec3n t\u1eeb v\u1ecb tr\u00ed b\u1eaft \u0111\u1ea7u t\u1edbi \u0111i\u1ec3m \u0111\u00edch (gi\u00e2y)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalMoveTime","t":4,"rt":$n[0].Single,"sn":"totalMoveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("C\u1ea5p \u0111\u1ed9 t\u1ed1i thi\u1ec3u c\u1ea7n \u0111\u1ea1t \u0111\u1ec3 t\u00ednh chi\u1ebfn th\u1eafng khi t\u1edbi \u0111\u00edch (Win Level)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winLevel","t":4,"rt":$n[0].Int32,"sn":"winLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<MainCamera>k__BackingField","is":true,"t":4,"rt":$n[2].Camera,"sn":"MainCamera"},{"a":1,"backing":true,"n":"<isGameEnded>k__BackingField","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isGameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameManager end.*/

    /*ImageScroller start.*/
    $m("ImageScroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveVector","t":4,"rt":$n[2].Vector2,"sn":"moveVector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rawImage","t":4,"rt":$n[3].RawImage,"sn":"rawImage"}]}; }, $n);
    /*ImageScroller end.*/

    /*InputManager start.*/
    $m("InputManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EndSwipe","t":8,"pi":[{"n":"position","pt":$n[2].Vector2,"ps":0}],"sn":"EndSwipe","rt":$n[0].Void,"p":[$n[2].Vector2]},{"a":1,"n":"GetSwipeDirection","t":8,"pi":[{"n":"swipe","pt":$n[2].Vector2,"ps":0}],"sn":"GetSwipeDirection","rt":SwipeDirection,"p":[$n[2].Vector2],"box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}},{"a":1,"n":"HandleInput","t":8,"sn":"HandleInput","rt":$n[0].Void},{"a":1,"n":"HandleMouseInput","t":8,"sn":"HandleMouseInput","rt":$n[0].Void},{"a":1,"n":"HandleTouchInput","t":8,"sn":"HandleTouchInput","rt":$n[0].Void},{"a":1,"n":"StartSwipe","t":8,"pi":[{"n":"position","pt":$n[2].Vector2,"ps":0}],"sn":"StartSwipe","rt":$n[0].Void,"p":[$n[2].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":InputManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":InputManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[InputManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"OnClickedDown","t":4,"rt":Function,"sn":"OnClickedDown"},{"a":1,"n":"endPosition","t":4,"rt":$n[2].Vector2,"sn":"endPosition"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Swipe Settings"),new UnityEngine.TooltipAttribute("Kho\u1ea3ng c\u00e1ch vu\u1ed1t t\u1ed1i thi\u1ec3u (pixel) \u0111\u1ec3 ghi nh\u1eadn h\u00e0nh \u0111\u1ed9ng Swipe"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minimumSwipeDistance","t":4,"rt":$n[0].Single,"sn":"minimumSwipeDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector2,"sn":"startPosition"},{"a":2,"n":"OnDrag","t":2,"ad":{"a":2,"n":"add_OnDrag","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDrag","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDrag","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDrag","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnDragEnd","t":2,"ad":{"a":2,"n":"add_OnDragEnd","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDragEnd","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDragEnd","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDragEnd","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnSwipe","t":2,"ad":{"a":2,"n":"add_OnSwipe","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSwipe","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSwipe","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSwipe","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnSwipeDirection","t":2,"ad":{"a":2,"n":"add_OnSwipeDirection","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSwipeDirection","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSwipeDirection","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSwipeDirection","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":InputManager,"sn":"Instance"}]}; }, $n);
    /*InputManager end.*/

    /*MaterialUVScroller start.*/
    $m("MaterialUVScroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"offset","t":4,"rt":$n[2].Vector2,"sn":"offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scrollSpeed","t":4,"rt":$n[2].Vector2,"sn":"scrollSpeed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetMaterial","t":4,"rt":$n[2].Material,"sn":"targetMaterial"}]}; }, $n);
    /*MaterialUVScroller end.*/

    /*MusicID start.*/
    $m("MusicID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameEnded","is":true,"t":4,"rt":MusicID,"sn":"GameEnded","box":function ($v) { return Bridge.box($v, MusicID, System.Enum.toStringFn(MusicID));}},{"a":2,"n":"Gameplay","is":true,"t":4,"rt":MusicID,"sn":"Gameplay","box":function ($v) { return Bridge.box($v, MusicID, System.Enum.toStringFn(MusicID));}},{"a":2,"n":"None","is":true,"t":4,"rt":MusicID,"sn":"None","box":function ($v) { return Bridge.box($v, MusicID, System.Enum.toStringFn(MusicID));}}]}; }, $n);
    /*MusicID end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector2,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].Vector2]},{"a":1,"n":"OnDragEnd","t":8,"sn":"OnDragEnd","rt":$n[0].Void},{"a":1,"n":"OnGameEnd","t":8,"pi":[{"n":"winState","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnd","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnGameStarted","t":8,"sn":"OnGameStarted","rt":$n[0].Void},{"a":1,"n":"OnSwipe","t":8,"pi":[{"n":"swipeDir","pt":SwipeDirection,"ps":0}],"sn":"OnSwipe","rt":$n[0].Void,"p":[SwipeDirection]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartMoving","t":8,"sn":"StartMoving","rt":$n[0].Void},{"a":2,"n":"StopMoving","t":8,"sn":"StopMoving","rt":$n[0].Void},{"a":1,"n":"SwitchTrack","t":8,"pi":[{"n":"rightTrack","pt":$n[0].Boolean,"ps":0}],"sn":"SwitchTrack","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"UpgradePlayer","t":8,"pi":[{"n":"upgradePointsChanged","pt":$n[0].Int32,"ps":0}],"sn":"UpgradePlayer","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"CurrentLevel","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentLevel","t":8,"rt":$n[0].Int32,"fg":"CurrentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentLevel"},{"a":1,"n":"totalMoveTime","t":16,"rt":$n[0].Single,"g":{"a":1,"n":"get_totalMoveTime","t":8,"rt":$n[0].Single,"fg":"totalMoveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"totalMoveTime"},{"a":1,"n":"OnRight","t":4,"rt":$n[0].Boolean,"sn":"OnRight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Player Status"),new UnityEngine.TooltipAttribute("C\u1ea5p \u0111\u1ed9 hi\u1ec7n t\u1ea1i c\u1ee7a C\u1ea7u th\u1ee7 (1 -> 4) (Hi\u1ec3n th\u1ecb tr\u1ef1c ti\u1ebfp tr\u00ean Inspector)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentLevel","t":4,"rt":$n[0].Int32,"sn":"currentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentLocalPos","t":4,"rt":$n[2].Vector3,"sn":"currentLocalPos"},{"at":[new UnityEngine.HeaderAttribute("Drag & Curve Settings"),new UnityEngine.TooltipAttribute("T\u1ed1c \u0111\u1ed9 l\u00e0m m\u01b0\u1ee3t v\u1ecb tr\u00ed khi ng\u01b0\u1eddi ch\u01a1i k\u00e9o vu\u1ed1t"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragSmoothSpeed","t":4,"rt":$n[0].Single,"sn":"dragSmoothSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement Path & Timing"),new UnityEngine.TooltipAttribute("\u0110i\u1ec3m \u0111\u00edch m\u00e0 nh\u00e2n v\u1eadt s\u1ebd di chuy\u1ec3n t\u1edbi"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPos","t":4,"rt":$n[2].Transform,"sn":"endPos"},{"a":1,"n":"gameStart","t":4,"rt":$n[0].Boolean,"sn":"gameStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mainCam","t":4,"rt":$n[2].Camera,"sn":"mainCam"},{"at":[new UnityEngine.TooltipAttribute("\u0110\u01b0\u1eddng cong gia t\u1ed1c di chuy\u1ec3n c\u1ee7a nh\u00e2n v\u1eadt"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveCurve","t":4,"rt":pc.AnimationCurve,"sn":"moveCurve"},{"a":1,"n":"moveSeq","t":4,"rt":$n[1].Sequence,"sn":"moveSeq"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.TooltipAttribute("Transform \u0111i\u1ec1u khi\u1ec3n v\u1ecb tr\u00ed/h\u00ecnh \u1ea3nh nh\u00e2n v\u1eadt"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerTransform","t":4,"rt":$n[2].Transform,"sn":"playerTransform"},{"at":[new UnityEngine.TooltipAttribute("Script qu\u1ea3n l\u00fd h\u00ecnh \u1ea3nh/level c\u1ee7a c\u1ea7u th\u1ee7"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerVisual","t":4,"rt":PlayerVisual,"sn":"playerVisual"},{"at":[new UnityEngine.TooltipAttribute("Kh\u1edfi \u0111\u1ea7u \u1edf l\u00e0n \u0111\u01b0\u1eddng b\u00ean ph\u1ea3i hay kh\u00f4ng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startRight","t":4,"rt":$n[0].Boolean,"sn":"startRight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian chuy\u1ec3n \u0111\u1ed5i gi\u1eefa c\u00e1c l\u00e0n \u0111\u01b0\u1eddng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"switchTrackTime","t":4,"rt":$n[0].Single,"sn":"switchTrackTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Transform \u0111\u1ecbnh v\u1ecb v\u1ecb tr\u00ed l\u00e0n b\u00ean tr\u00e1i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackLeftTransform","t":4,"rt":$n[2].Transform,"sn":"trackLeftTransform"},{"at":[new UnityEngine.HeaderAttribute("Track Transforms"),new UnityEngine.TooltipAttribute("Transform \u0111\u1ecbnh v\u1ecb v\u1ecb tr\u00ed l\u00e0n b\u00ean ph\u1ea3i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackRightTransform","t":4,"rt":$n[2].Transform,"sn":"trackRightTransform"},{"at":[new UnityEngine.TooltipAttribute("Particle System hi\u1ec3n th\u1ecb hi\u1ec7u \u1ee9ng khi chi\u1ebfn th\u1eafng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winPar","t":4,"rt":$n[2].ParticleSystem,"sn":"winPar"}]}; }, $n);
    /*PlayerController end.*/

    /*PlayerVisual start.*/
    $m("PlayerVisual", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AssingPlayerVisual","t":8,"pi":[{"n":"newVisual","pt":$n[2].Sprite,"ps":0}],"sn":"AssingPlayerVisual","rt":$n[0].Void,"p":[$n[2].Sprite]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearPlayerVisual","t":8,"sn":"ClearPlayerVisual","rt":$n[0].Void},{"a":1,"n":"GetScaleMultiplierForLevel","t":8,"pi":[{"n":"level","pt":$n[0].Int32,"ps":0}],"sn":"GetScaleMultiplierForLevel","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"InitScale","t":8,"sn":"InitScale","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameStart","t":8,"sn":"OnGameStart","rt":$n[0].Void},{"a":2,"n":"SetVisualEnable","t":8,"pi":[{"n":"enableState","pt":$n[0].Boolean,"ps":0}],"sn":"SetVisualEnable","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartBouncing","t":8,"sn":"StartBouncing","rt":$n[0].Void},{"a":2,"n":"UpdateVisualBylevel","t":8,"pi":[{"n":"currentLevel","pt":$n[0].Int32,"ps":0}],"sn":"UpdateVisualBylevel","rt":$n[0].Void,"p":[$n[0].Int32]},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian m\u1ed9t l\u01b0\u1ee3t nh\u00fan xu\u1ed1ng / n\u1ea3y l\u00ean (gi\u00e2y)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bounceDuration","t":4,"rt":$n[0].Single,"sn":"bounceDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Bouncing Animation Settings"),new UnityEngine.TooltipAttribute("T\u1ec9 l\u1ec7 gi\u1ea3m chi\u1ec1u cao Y khi nh\u00fan nh\u1ea3y (M\u1eb7c \u0111\u1ecbnh 0.95 t\u01b0\u01a1ng \u1ee9ng 95% chi\u1ec1u cao)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bounceYMultiplier","t":4,"rt":$n[0].Single,"sn":"bounceYMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentLevelInternal","t":4,"rt":$n[0].Int32,"sn":"currentLevelInternal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"defaultColor","t":4,"rt":$n[2].Color,"sn":"defaultColor"},{"a":1,"n":"defaultScale","t":4,"rt":$n[2].Vector3,"sn":"defaultScale"},{"at":[new UnityEngine.TooltipAttribute("SpriteRenderer hi\u1ec3n th\u1ecb b\u00f3ng gi\u1ea3 d\u01b0\u1edbi ch\u00e2n c\u1ea7u th\u1ee7"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fakeShadowRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"fakeShadowRenderer"},{"a":1,"n":"isGameStarted","t":4,"rt":$n[0].Boolean,"sn":"isGameStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isScaleInitialized","t":4,"rt":$n[0].Boolean,"sn":"isScaleInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"level4DelayTween","t":4,"rt":$n[1].Tween,"sn":"level4DelayTween"},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian ch\u1edd (gi\u00e2y) ch\u1ea1y hi\u1ec7u \u1ee9ng tr\u01b0\u1edbc khi g\u00e1n Sprite Level 4 (M\u1eb7c \u0111\u1ecbnh 0.3s)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"level4SpriteDelay","t":4,"rt":$n[0].Single,"sn":"level4SpriteDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("T\u00ean Trigger parameter trong Animator Controller \u0111\u1ec3 ch\u1ea1y Animation (M\u1eb7c \u0111\u1ecbnh: 1)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"level4TriggerName","t":4,"rt":$n[0].String,"sn":"level4TriggerName"},{"at":[new UnityEngine.HeaderAttribute("Level Scale Settings"),new UnityEngine.TooltipAttribute("T\u1ec9 l\u1ec7 ph\u00f3ng to nh\u00e2n v\u1eadt theo t\u1eebng c\u1ea5p \u0111\u1ed9 (Level 1, 2, 3, 4...). M\u1eb7c \u0111\u1ecbnh Level 4 = 1.1"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelScaleMultipliers","t":4,"rt":$n[0].Array.type(System.Single),"sn":"levelScaleMultipliers"},{"at":[new UnityEngine.HeaderAttribute("Level Visual Data"),new UnityEngine.TooltipAttribute("M\u1ea3ng ch\u1ee9a h\u00ecnh \u1ea3nh c\u1ea7u th\u1ee7 t\u01b0\u01a1ng \u1ee9ng t\u1eebng c\u1ea5p \u0111\u1ed9 (Level 1, 2, 3...)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelSprite","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"levelSprite"},{"at":[new UnityEngine.HeaderAttribute("Effects"),new UnityEngine.TooltipAttribute("Particle System ph\u00e1t hi\u1ec7u \u1ee9ng khi nh\u00e2n v\u1eadt \u0111\u1ea1t s\u1ee9c m\u1ea1nh t\u1ed1i \u0111a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxPowerPar","t":4,"rt":$n[2].ParticleSystem,"sn":"maxPowerPar"},{"a":1,"n":"maxPowerParDefaultScale","t":4,"rt":$n[2].Vector3,"sn":"maxPowerParDefaultScale"},{"at":[new UnityEngine.TooltipAttribute("T\u1ec9 l\u1ec7 ph\u00f3ng to ri\u00eang cho Particle System (PowerFulPar) khi \u1edf Level 4"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxPowerParScaleMultiplier","t":4,"rt":$n[0].Single,"sn":"maxPowerParScaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Renderers"),new UnityEngine.TooltipAttribute("SpriteRenderer ch\u00ednh hi\u1ec3n th\u1ecb h\u00ecnh \u1ea3nh c\u1ea7u th\u1ee7"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSpriteRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"playerSpriteRenderer"},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian hi\u1ec7u \u1ee9ng ph\u00f3ng to / thu nh\u1ecf khi \u0111\u1ed5i Level (gi\u00e2y)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleTransitionDuration","t":4,"rt":$n[0].Single,"sn":"scaleTransitionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Level 4 Animation Settings"),new UnityEngine.TooltipAttribute("Animator th\u1ef1c hi\u1ec7n hi\u1ec7u \u1ee9ng chuy\u1ec3n \u0111\u1ed5i khi l\u00ean Level 4 (T\u00f9y ch\u1ecdn)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visualAnimator","t":4,"rt":$n[2].Animator,"sn":"visualAnimator"}]}; }, $n);
    /*PlayerVisual end.*/

    /*Ply_GameUnit start.*/
    $m("Ply_GameUnit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"tf","t":4,"rt":$n[2].Transform,"sn":"tf"}]}; }, $n);
    /*Ply_GameUnit end.*/

    /*Ply_Pool start.*/
    $m("Ply_Pool", function () { return {"nested":[Ply_Pool.PoolAmount],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Despawn","t":8,"pi":[{"n":"poolType","pt":PoolType,"ps":0},{"n":"gameUnit","pt":Ply_GameUnit,"ps":1}],"sn":"Despawn","rt":$n[0].Void,"p":[PoolType,Ply_GameUnit]},{"a":2,"n":"GetPrefab","t":8,"pi":[{"n":"poolType","pt":PoolType,"ps":0}],"sn":"GetPrefab","rt":Ply_GameUnit,"p":[PoolType]},{"a":1,"n":"OnInit","t":8,"sn":"OnInit","rt":$n[0].Void},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"poolType","pt":PoolType,"ps":0},{"n":"pos","pt":$n[2].Vector3,"ps":1},{"n":"rot","pt":$n[2].Quaternion,"ps":2}],"sn":"Spawn$1","rt":Ply_GameUnit,"p":[PoolType,$n[2].Vector3,$n[2].Quaternion]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"poolType","pt":PoolType,"ps":0},{"n":"pos","pt":$n[2].Vector3,"ps":1},{"n":"rot","pt":$n[2].Quaternion,"ps":2}],"tpc":1,"tprm":["T"],"sn":"Spawn","rt":System.Object,"p":[PoolType,$n[2].Vector3,$n[2].Quaternion]},{"a":1,"n":"dict","t":4,"rt":$n[4].Dictionary$2(PoolType,System.Collections.Generic.Queue$1(Ply_GameUnit)),"sn":"dict"},{"a":2,"n":"poolAmounts","t":4,"rt":System.Array.type(Ply_Pool.PoolAmount),"sn":"poolAmounts"}]}; }, $n);
    /*Ply_Pool end.*/

    /*Ply_Pool+PoolAmount start.*/
    $m("Ply_Pool.PoolAmount", function () { return {"td":Ply_Pool,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"amount","t":4,"rt":$n[0].Int32,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"gameUnit","t":4,"rt":Ply_GameUnit,"sn":"gameUnit"},{"a":2,"n":"type","t":4,"rt":PoolType,"sn":"type","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}}]}; }, $n);
    /*Ply_Pool+PoolAmount end.*/

    /*Ply_Singleton$1 start.*/
    $m("Ply_Singleton$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Ins","is":true,"t":4,"rt":T,"sn":"Ins"}]}; }, $n);
    /*Ply_Singleton$1 end.*/

    /*Ply_SoundManager start.*/
    $m("Ply_SoundManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnsureAudioListener","t":8,"sn":"EnsureAudioListener","rt":$n[0].Void},{"a":2,"n":"Mute","t":8,"sn":"Mute","rt":$n[0].Void},{"a":2,"n":"PlayClip","t":8,"pi":[{"n":"clip","pt":$n[2].AudioClip,"ps":0},{"n":"volume","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayClip","rt":$n[0].Void,"p":[$n[2].AudioClip,$n[0].Single]},{"a":2,"n":"PlayFx","t":8,"pi":[{"n":"fxType","pt":FxType,"ps":0}],"sn":"PlayFx","rt":$n[0].Single,"p":[FxType],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PlayLoopFx","t":8,"pi":[{"n":"fxType","pt":FxType,"ps":0},{"n":"volume","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayLoopFx","rt":$n[0].Void,"p":[FxType,$n[0].Single]},{"a":2,"n":"PlaySequentialSounds","t":8,"pi":[{"n":"mainSound","pt":FxType,"ps":0},{"n":"additionalSounds","pt":$n[4].List$1(FxType),"ps":1}],"sn":"PlaySequentialSounds","rt":$n[0].Void,"p":[FxType,$n[4].List$1(FxType)]},{"a":1,"n":"PlaySequentialSoundsRoutine","t":8,"pi":[{"n":"mainSound","pt":FxType,"ps":0},{"n":"additionalSounds","pt":$n[4].List$1(FxType),"ps":1}],"sn":"PlaySequentialSoundsRoutine","rt":$n[5].IEnumerator,"p":[FxType,$n[4].List$1(FxType)]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopBGM","t":8,"sn":"StopBGM","rt":$n[0].Void},{"a":2,"n":"StopLoopFx","t":8,"pi":[{"n":"fxType","pt":FxType,"ps":0}],"sn":"StopLoopFx","rt":$n[0].Void,"p":[FxType]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateBGMState","t":8,"sn":"UpdateBGMState","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":Ply_SoundManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":Ply_SoundManager,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_lastBgmVolume","t":4,"rt":$n[0].Single,"sn":"_lastBgmVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastEnableSound","t":4,"rt":$n[0].Boolean,"sn":"_lastEnableSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"audioClips","t":4,"rt":FxAudio,"sn":"audioClips"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.TooltipAttribute("\u00c2m l\u01b0\u1ee3ng nh\u1ea1c n\u1ec1n BGM (M\u1eb7c \u0111\u1ecbnh 0.3)")],"a":2,"n":"bgmVolume","t":4,"rt":$n[0].Single,"sn":"bgmVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("--- Settings ---"),new UnityEngine.TooltipAttribute("B\u1eadt/t\u1eaft to\u00e0n b\u1ed9 \u00e2m thanh (True = B\u1eadt, False = T\u1eaft)")],"a":2,"n":"enableSound","t":4,"rt":$n[0].Boolean,"sn":"enableSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fx","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"fx"},{"a":1,"n":"loopFx","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"loopFx"},{"a":2,"n":"sound","t":4,"rt":$n[2].AudioSource,"sn":"sound"}]}; }, $n);
    /*Ply_SoundManager end.*/

    /*PoolType start.*/
    $m("PoolType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BlinkFX","is":true,"t":4,"rt":PoolType,"sn":"BlinkFX","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"Booster","is":true,"t":4,"rt":PoolType,"sn":"Booster","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"Bullet","is":true,"t":4,"rt":PoolType,"sn":"Bullet","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"CorrectEffect","is":true,"t":4,"rt":PoolType,"sn":"CorrectEffect","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"CorrectText1","is":true,"t":4,"rt":PoolType,"sn":"CorrectText1","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"CorrectText2","is":true,"t":4,"rt":PoolType,"sn":"CorrectText2","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"CorrectText3","is":true,"t":4,"rt":PoolType,"sn":"CorrectText3","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"Enemy","is":true,"t":4,"rt":PoolType,"sn":"Enemy","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"Enemy_Bullet","is":true,"t":4,"rt":PoolType,"sn":"Enemy_Bullet","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"VFX_Explore","is":true,"t":4,"rt":PoolType,"sn":"VFX_Explore","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}},{"a":2,"n":"VFX_Spark","is":true,"t":4,"rt":PoolType,"sn":"VFX_Spark","box":function ($v) { return Bridge.box($v, PoolType, System.Enum.toStringFn(PoolType));}}]}; }, $n);
    /*PoolType end.*/

    /*ProgressTrackingManager start.*/
    $m("ProgressTrackingManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddProgress","t":8,"pi":[{"n":"amount","dv":1,"o":true,"pt":$n[0].Int32,"ps":0}],"sn":"AddProgress","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetDynamicMaxScore","t":8,"sn":"GetDynamicMaxScore","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"winState","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateGameProgress","t":8,"pi":[{"n":"score","pt":$n[0].Int32,"ps":0}],"sn":"UpdateGameProgress","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Instance","is":true,"t":16,"rt":ProgressTrackingManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":ProgressTrackingManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ProgressTrackingManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.TooltipAttribute("Tham chi\u1ebfu t\u1edbi ChoiceBoardPlacer trong Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceBoardPlacer","t":4,"rt":ChoiceBoardPlacer,"sn":"choiceBoardPlacer"},{"at":[new UnityEngine.TooltipAttribute("Ph\u1ea7n tr\u0103m ti\u1ebfn \u0111\u1ed9 hi\u1ec7n t\u1ea1i (%)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPercent","t":4,"rt":$n[0].Int32,"sn":"currentPercent","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Debug (Ch\u1ec9 xem khi \u0111ang ch\u01a1i)"),new UnityEngine.TooltipAttribute("S\u1ed1 \u0111i\u1ec3m hi\u1ec7n t\u1ea1i \u0111ang \u0111\u1ea1t \u0111\u01b0\u1ee3c"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isStarted","t":4,"rt":$n[0].Boolean,"sn":"isStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Progress Settings"),new UnityEngine.TooltipAttribute("T\u1ed5ng s\u1ed1 \u0111i\u1ec3m/c\u1ed5ng t\u1ed1i \u0111a (T\u1ef1 \u0111\u1ed9ng l\u1ea5y d\u1ef1a tr\u00ean s\u1ed1 l\u01b0\u1ee3ng c\u1ed5ng sinh ra trong ChoiceBoardPlacer)")],"a":2,"n":"maxScore","t":4,"rt":$n[0].Int32,"sn":"maxScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pass100","t":4,"rt":$n[0].Boolean,"sn":"pass100","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pass25","t":4,"rt":$n[0].Boolean,"sn":"pass25","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pass50","t":4,"rt":$n[0].Boolean,"sn":"pass50","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pass75","t":4,"rt":$n[0].Boolean,"sn":"pass75","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ProgressTrackingManager,"sn":"Instance"}]}; }, $n);
    /*ProgressTrackingManager end.*/

    /*SoundData start.*/
    $m("SoundData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"clip","t":4,"rt":$n[2].AudioClip,"sn":"clip"},{"a":2,"n":"volume","t":4,"rt":$n[0].Single,"sn":"volume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SoundData end.*/

    /*SoundID start.*/
    $m("SoundID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bonk","is":true,"t":4,"rt":SoundID,"sn":"Bonk","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"MaxLevel","is":true,"t":4,"rt":SoundID,"sn":"MaxLevel","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"None","is":true,"t":4,"rt":SoundID,"sn":"None","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"PlayerLoose","is":true,"t":4,"rt":SoundID,"sn":"PlayerLoose","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"PlayerWin","is":true,"t":4,"rt":SoundID,"sn":"PlayerWin","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"Punch","is":true,"t":4,"rt":SoundID,"sn":"Punch","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"RightChoice","is":true,"t":4,"rt":SoundID,"sn":"RightChoice","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}},{"a":2,"n":"WrongChoice","is":true,"t":4,"rt":SoundID,"sn":"WrongChoice","box":function ($v) { return Bridge.box($v, SoundID, System.Enum.toStringFn(SoundID));}}]}; }, $n);
    /*SoundID end.*/

    /*SwipeDirection start.*/
    $m("SwipeDirection", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Down","is":true,"t":4,"rt":SwipeDirection,"sn":"Down","box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}},{"a":2,"n":"Left","is":true,"t":4,"rt":SwipeDirection,"sn":"Left","box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}},{"a":2,"n":"None","is":true,"t":4,"rt":SwipeDirection,"sn":"None","box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}},{"a":2,"n":"Right","is":true,"t":4,"rt":SwipeDirection,"sn":"Right","box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}},{"a":2,"n":"Up","is":true,"t":4,"rt":SwipeDirection,"sn":"Up","box":function ($v) { return Bridge.box($v, SwipeDirection, System.Enum.toStringFn(SwipeDirection));}}]}; }, $n);
    /*SwipeDirection end.*/

    /*UICheckBox start.*/
    $m("UICheckBox", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangeIcon","t":8,"pi":[{"n":"sprite","pt":$n[2].Sprite,"ps":0}],"sn":"ChangeIcon","rt":$n[0].Void,"p":[$n[2].Sprite]},{"a":2,"n":"ResetIcon","t":8,"sn":"ResetIcon","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("UI References"),new UnityEngine.TooltipAttribute("Component Image d\u00f9ng hi\u1ec3n th\u1ecb icon c\u1ee7a checkbox"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconImg","t":4,"rt":$n[3].Image,"sn":"iconImg"},{"at":[new UnityEngine.HeaderAttribute("Icon Configuration"),new UnityEngine.TooltipAttribute("Sprite h\u00ecnh \u1ea3nh icon m\u1eb7c \u0111\u1ecbnh khi kh\u1edfi t\u1ea1o"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startingSprite","t":4,"rt":$n[2].Sprite,"sn":"startingSprite"}]}; }, $n);
    /*UICheckBox end.*/

    /*UICheckBoxHolder start.*/
    $m("UICheckBoxHolder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCharacterChoose","t":8,"pi":[{"n":"type","pt":EChoiceType,"ps":0},{"n":"sprite","pt":$n[2].Sprite,"ps":1}],"sn":"OnCharacterChoose","rt":$n[0].Void,"p":[EChoiceType,$n[2].Sprite]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"obj","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"choiceNum","t":4,"rt":$n[0].Int32,"sn":"choiceNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("UI Configuration"),new UnityEngine.TooltipAttribute("M\u1ea3ng c\u00e1c th\u00e0nh ph\u1ea7n UICheckBox hi\u1ec3n th\u1ecb ti\u1ebfn tr\u00ecnh ch\u1ecdn l\u1ef1a"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uICheckBoxes","t":4,"rt":System.Array.type(UICheckBox),"sn":"uICheckBoxes"}]}; }, $n);
    /*UICheckBoxHolder end.*/

    /*UIGuidingMove start.*/
    $m("UIGuidingMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"KillTween","t":8,"sn":"KillTween","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"PlaySequence","t":8,"sn":"PlaySequence","rt":$n[0].Void},{"a":2,"n":"ResetSequence","t":8,"pi":[{"n":"startPos","pt":$n[2].Vector2,"ps":0},{"n":"endPos","pt":$n[2].Vector2,"ps":1}],"sn":"ResetSequence","rt":$n[0].Void,"p":[$n[2].Vector2,$n[2].Vector2]},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian th\u1ef1c hi\u1ec7n di chuy\u1ec3n"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Ki\u1ec3u \u0111\u01b0\u1eddng cong di chuy\u1ec3n Ease c\u1ee7a DOTween"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ease","t":4,"rt":$n[1].Ease,"sn":"ease","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.TooltipAttribute("V\u1ecb tr\u00ed k\u1ebft th\u00fac di chuy\u1ec3n (Anchored Position)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPosition","t":4,"rt":$n[2].Vector2,"sn":"endPosition"},{"at":[new UnityEngine.HeaderAttribute("Looping"),new UnityEngine.TooltipAttribute("B\u1eadt/T\u1eaft ch\u1ebf \u0111\u1ed9 l\u1eb7p l\u1ea1i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loop","t":4,"rt":$n[0].Boolean,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("S\u1ed1 l\u1ea7n l\u1eb7p l\u1ea1i (-1 l\u00e0 l\u1eb7p v\u00f4 h\u1ea1n)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loopCount","t":4,"rt":$n[0].Int32,"sn":"loopCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Ki\u1ec3u l\u1eb7p l\u1ea1i (Yoyo, Restart, Incremental)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loopType","t":4,"rt":$n[1].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":1,"n":"moveSequence","t":4,"rt":$n[1].Sequence,"sn":"moveSequence"},{"a":1,"n":"moveTween","t":4,"rt":$n[1].Tween,"sn":"moveTween"},{"at":[new UnityEngine.TooltipAttribute("T\u1ef1 \u0111\u1ed9ng d\u1ecbch chuy\u1ec3n v\u1ec1 v\u1ecb tr\u00ed b\u1eaft \u0111\u1ea7u (Start Position) sau khi di chuy\u1ec3n xong t\u1edbi End Position"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"resetToStartOnComplete","t":4,"rt":$n[0].Boolean,"sn":"resetToStartOnComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.TooltipAttribute("V\u1ecb tr\u00ed b\u1eaft \u0111\u1ea7u di chuy\u1ec3n (Anchored Position)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector2,"sn":"startPosition"},{"at":[new UnityEngine.HeaderAttribute("UI Component"),new UnityEngine.TooltipAttribute("RectTransform c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng h\u01b0\u1edbng d\u1eabn di chuy\u1ec3n (v\u00ed d\u1ee5: Icon b\u00e0n tay)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[2].RectTransform,"sn":"target"}]}; }, $n);
    /*UIGuidingMove end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":UIManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":UIManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[UIManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"OnCharacterChoose","is":true,"t":4,"rt":Function,"sn":"OnCharacterChoose"},{"a":2,"n":"OnCharacterPick","is":true,"t":4,"rt":Function,"sn":"OnCharacterPick"},{"a":2,"n":"OnCharacterStartMove","is":true,"t":4,"rt":Function,"sn":"OnCharacterStartMove"},{"a":2,"n":"OnLooseSequenceStart","is":true,"t":4,"rt":Function,"sn":"OnLooseSequenceStart"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":UIManager,"sn":"Instance"}]}; }, $n);
    /*UIManager end.*/

    /*UIProgressBar start.*/
    $m("UIProgressBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCharacterStartMove","t":8,"pi":[{"n":"totalMoveTime","pt":$n[0].Single,"ps":0}],"sn":"OnCharacterStartMove","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"winState","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("Image hi\u1ec3n th\u1ecb ph\u00f4ng n\u1ec1n c\u1ee7a thanh ti\u1ebfn tr\u00ecnh"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillBackground","t":4,"rt":$n[3].Image,"sn":"fillBackground"},{"at":[new UnityEngine.HeaderAttribute("UI References"),new UnityEngine.TooltipAttribute("Image hi\u1ec3n th\u1ecb ph\u1ea7n ti\u1ebfn tr\u00ecnh (Fill Image)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillImage","t":4,"rt":$n[3].Image,"sn":"fillImage"}]}; }, $n);
    /*UIProgressBar end.*/

    /*UIPulse start.*/
    $m("UIPulse", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("Th\u1eddi gian th\u1ef1c hi\u1ec7n m\u1ed9t l\u01b0\u1ee3t ph\u00f3ng to/thu nh\u1ecf (gi\u00e2y)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0110\u01b0\u1eddng cong bi\u1ebfn thi\u00ean (Ease) c\u1ee7a animation DOTween"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ease","t":4,"rt":$n[1].Ease,"sn":"ease","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"pulseTween","t":4,"rt":$n[1].Tween,"sn":"pulseTween"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.HeaderAttribute("Pulse Settings"),new UnityEngine.TooltipAttribute("K\u00edch th\u01b0\u1edbc ph\u00f3ng to m\u1ee5c ti\u00eau khi t\u1ea1o hi\u1ec7u \u1ee9ng n\u1ea3y"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"}]}; }, $n);
    /*UIPulse end.*/

    /*UITutorial start.*/
    $m("UITutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnClicked","t":8,"pi":[{"n":"vector","pt":$n[2].Vector2,"ps":0}],"sn":"OnClicked","rt":$n[0].Void,"p":[$n[2].Vector2]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnGameEnded","t":8,"pi":[{"n":"obj","pt":$n[0].Boolean,"ps":0}],"sn":"OnGameEnded","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnGameStarted","t":8,"sn":"OnGameStarted","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("UI References"),new UnityEngine.TooltipAttribute("Panel UI ch\u1ee9a c\u00e1c th\u00e0nh ph\u1ea7n h\u01b0\u1edbng d\u1eabn ch\u01a1i ban \u0111\u1ea7u"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialUIHolder","t":4,"rt":$n[2].GameObject,"sn":"tutorialUIHolder"}]}; }, $n);
    /*UITutorial end.*/

    /*Yielders start.*/
    $m("Yielders", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Get","is":true,"t":8,"pi":[{"n":"seconds","pt":$n[0].Single,"ps":0}],"sn":"Get","rt":$n[2].WaitForSeconds,"p":[$n[0].Single]},{"a":2,"n":"EndOfFrame","is":true,"t":16,"rt":$n[2].WaitForEndOfFrame,"g":{"a":2,"n":"get_EndOfFrame","t":8,"rt":$n[2].WaitForEndOfFrame,"fg":"EndOfFrame","is":true},"fn":"EndOfFrame"},{"a":2,"n":"FixedUpdate","is":true,"t":16,"rt":$n[2].WaitForFixedUpdate,"g":{"a":2,"n":"get_FixedUpdate","t":8,"rt":$n[2].WaitForFixedUpdate,"fg":"FixedUpdate","is":true},"fn":"FixedUpdate"},{"a":1,"n":"_endOfFrame","is":true,"t":4,"rt":$n[2].WaitForEndOfFrame,"sn":"_endOfFrame"},{"a":1,"n":"_fixedUpdate","is":true,"t":4,"rt":$n[2].WaitForFixedUpdate,"sn":"_fixedUpdate"},{"a":1,"n":"_timeInterval","is":true,"t":4,"rt":$n[4].Dictionary$2(System.Single,UnityEngine.WaitForSeconds),"sn":"_timeInterval"}]}; }, $n);
    /*Yielders end.*/

    /*RonaldoPenalty.PenaltyBallController start.*/
    $m("RonaldoPenalty.PenaltyBallController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyGoalPhysics","t":8,"sn":"ApplyGoalPhysics","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CalculateVShapeTargetByX","t":8,"pi":[{"n":"crosshairX","pt":$n[0].Single,"ps":0},{"n":"normalizedOffset","out":true,"pt":$n[0].Single,"ps":1},{"n":"isInsideGoal","out":true,"pt":$n[0].Boolean,"ps":2}],"sn":"CalculateVShapeTargetByX","rt":$n[2].Vector3,"p":[$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"FlyIntoGoalUntilHit","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"start","pt":$n[2].Vector3,"ps":1},{"n":"spinSpeed","pt":$n[0].Single,"ps":2}],"sn":"FlyIntoGoalUntilHit","rt":$n[5].IEnumerator,"p":[$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":1,"n":"FlyOutOfBounds","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"start","pt":$n[2].Vector3,"ps":1},{"n":"spinSpeed","pt":$n[0].Single,"ps":2}],"sn":"FlyOutOfBounds","rt":$n[5].IEnumerator,"p":[$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":1,"n":"FlyTrajectory","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"arcApex","pt":$n[0].Single,"ps":1},{"n":"normalizedOffset","pt":$n[0].Single,"ps":2},{"n":"isInsideGoal","pt":$n[0].Boolean,"ps":3}],"sn":"FlyTrajectory","rt":$n[5].IEnumerator,"p":[$n[2].Vector3,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"HandleCollision","t":8,"pi":[{"n":"hitObj","pt":$n[2].GameObject,"ps":0},{"n":"collisionType","pt":$n[0].String,"ps":1}],"sn":"HandleCollision","rt":$n[0].Void,"p":[$n[2].GameObject,$n[0].String]},{"a":1,"n":"LogVelocityFramesForDebug","t":8,"sn":"LogVelocityFramesForDebug","rt":$n[5].IEnumerator},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[2].Collision]},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":2,"n":"ResetBall","t":8,"sn":"ResetBall","rt":$n[0].Void},{"a":2,"n":"SetGoalCenter","t":8,"pi":[{"n":"center","pt":$n[2].Transform,"ps":0},{"n":"width","dv":3.2,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"SetGoalCenter","rt":$n[0].Void,"p":[$n[2].Transform,$n[0].Single]},{"a":2,"n":"SetVShapeMarkers","t":8,"pi":[{"n":"left","pt":$n[2].Transform,"ps":0},{"n":"center","pt":$n[2].Transform,"ps":1},{"n":"right","pt":$n[2].Transform,"ps":2}],"sn":"SetVShapeMarkers","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform,$n[2].Transform]},{"a":2,"n":"Shoot","t":8,"pi":[{"n":"crosshairPos","pt":$n[2].Vector3,"ps":0}],"sn":"Shoot","rt":$n[0].Void,"p":[$n[2].Vector3]},{"at":[new UnityEngine.HeaderAttribute("Block Bounce (Va ch\u1ea1m Goalkeeper/Defender)"),new UnityEngine.TooltipAttribute("T\u1ed1c \u0111\u1ed9 b\u1eafn ra (m/s) khi b\u1ecb ch\u1eb7n. K\u1ebft h\u1ee3p v\u1edbi Physic Material (Bounciness) tr\u00ean Collider c\u1ee7a b\u00f3ng \u0111\u1ec3 t\u1ea1o l\u1ef1c n\u1ea3y th\u1eadt qua Unity Physics.")],"a":2,"n":"blockBounceSpeed","t":4,"rt":$n[0].Single,"sn":"blockBounceSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 cao (tr\u1ee5c Y, D\u01af\u01a0NG = h\u1ea5t l\u00ean) \u00e9p c\u1ee9ng v\u00e0o h\u01b0\u1edbng ph\u1ea3n x\u1ea1 tr\u01b0\u1edbc khi giao cho Physics, \u0111\u1ec3 c\u00fa n\u1ea3y lu\u00f4n h\u1ea5t l\u00ean ch\u1ee9 kh\u00f4ng s\u01b0\u1ee3t ngang")],"a":2,"n":"blockBounceUpward","t":4,"rt":$n[0].Single,"sn":"blockBounceUpward","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Transform \u0111i\u1ec3m th\u1ea5p nh\u1ea5t \u1edf gi\u1eefa c\u1ee7a ch\u1eef V (BottomCenter)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottomCenter","t":4,"rt":$n[2].Transform,"sn":"bottomCenter"},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 cao \u0111i\u1ec3m th\u1ea5p nh\u1ea5t \u1edf ch\u00ednh gi\u1eefa (s\u00e1t \u0111\u1ea5t)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottomCenterY","t":4,"rt":$n[0].Single,"sn":"bottomCenterY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentIsInsideGoal","t":4,"rt":$n[0].Boolean,"sn":"currentIsInsideGoal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currentShotDirection","t":4,"rt":$n[2].Vector3,"sn":"currentShotDirection"},{"a":1,"n":"currentShotTarget","t":4,"rt":$n[2].Vector3,"sn":"currentShotTarget"},{"at":[new UnityEngine.HeaderAttribute("Flight Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flightTime","t":4,"rt":$n[0].Single,"sn":"flightTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Linear Damping l\u00fac r\u01a1i trong l\u01b0\u1edbi - \u0111\u1ec3 TH\u1ea4P m\u1edbi c\u00f2n th\u1ea5y n\u1ea3y theo Bounciness, \u0111\u1ec3 cao qu\u00e1 s\u1ebd m\u1ea5t h\u1eb3n \u0111\u1ed9 n\u1ea3y, r\u01a1i th\u1eb3ng \u0111\u1ee9ng lu\u00f4n")],"a":2,"n":"goalDropDamping","t":4,"rt":$n[0].Single,"sn":"goalDropDamping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 ch\u00fac (tr\u1ee5c Y, \u00c2M = ch\u00fac xu\u1ed1ng) \u00e9p v\u00e0o h\u01b0\u1edbng r\u01a1i tr\u01b0\u1edbc khi giao Physics, \u0111\u1ec3 r\u01a1i nhanh xu\u1ed1ng l\u01b0\u1edbi thay v\u00ec tr\u00f4i ngang")],"a":2,"n":"goalFallDownward","t":4,"rt":$n[0].Single,"sn":"goalFallDownward","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Goal Drop (R\u01a1i v\u00e0o l\u01b0\u1edbi l\u00fac ghi b\u00e0n)"),new UnityEngine.TooltipAttribute("T\u1ed1c \u0111\u1ed9 r\u01a1i ban \u0111\u1ea7u (m/s) khi ghi b\u00e0n, giao cho Physics \u0111\u1ec3 r\u01a1i/n\u1ea3y t\u1ef1 nhi\u00ean")],"a":2,"n":"goalFallSpeed","t":4,"rt":$n[0].Single,"sn":"goalFallSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Goal Collider Tag"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goalTag","t":4,"rt":$n[0].String,"sn":"goalTag"},{"at":[new UnityEngine.TooltipAttribute("V\u1ecb tr\u00ed tr\u1ee5c Z c\u1ee7a khung th\u00e0nh"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goalZ","t":4,"rt":$n[0].Single,"sn":"goalZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Kho\u1ea3ng c\u00e1ch t\u1eeb t\u00e2m g\u00f4n sang 2 b\u00ean c\u1ed9t d\u1ecdc"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"halfWidth","t":4,"rt":$n[0].Single,"sn":"halfWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hasResolved","t":4,"rt":$n[0].Boolean,"sn":"hasResolved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"initialPosition","t":4,"rt":$n[2].Vector3,"sn":"initialPosition"},{"a":1,"n":"initialRotation","t":4,"rt":$n[2].Quaternion,"sn":"initialRotation"},{"a":1,"n":"isFlying","t":4,"rt":$n[0].Boolean,"sn":"isFlying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGoalScored","t":4,"rt":$n[0].Boolean,"sn":"isGoalScored","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("V-Shape 3D Target Setup (\u0110\u01b0\u1eddng ch\u1eef V xanh l\u00e1 trong khung th\u00e0nh)"),new UnityEngine.TooltipAttribute("Transform \u0111i\u1ec3m g\u00f3c cao b\u00ean tr\u00e1i c\u1ee7a ch\u1eef V (LeftTop)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftTop","t":4,"rt":$n[2].Transform,"sn":"leftTop"},{"at":[new UnityEngine.HeaderAttribute("T\u1ecda \u0111\u1ed9 Ch\u1eef V M\u1eb7c \u0110\u1ecbnh (N\u1ebfu kh\u00f4ng g\u00e1n Transform)"),new UnityEngine.TooltipAttribute("\u0110\u1ed9 cao \u0111i\u1ec3m g\u00f3c cao b\u00ean tr\u00e1i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftTopY","t":4,"rt":$n[0].Single,"sn":"leftTopY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[2].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.TooltipAttribute("Transform \u0111i\u1ec3m g\u00f3c cao b\u00ean ph\u1ea3i c\u1ee7a ch\u1eef V (RightTop)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightTop","t":4,"rt":$n[2].Transform,"sn":"rightTop"},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 cao \u0111i\u1ec3m g\u00f3c cao b\u00ean ph\u1ea3i"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightTopY","t":4,"rt":$n[0].Single,"sn":"rightTopY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trailRenderer","t":4,"rt":$n[2].TrailRenderer,"sn":"trailRenderer"},{"a":2,"n":"OnBlocked","t":2,"ad":{"a":2,"n":"add_OnBlocked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBlocked","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBlocked","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBlocked","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGoal","t":2,"ad":{"a":2,"n":"add_OnGoal","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGoal","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGoal","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGoal","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*RonaldoPenalty.PenaltyBallController end.*/

    /*RonaldoPenalty.PenaltyDefenderAI start.*/
    $m("RonaldoPenalty.PenaltyDefenderAI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"sn":"Activate","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CalculateCurrentT","t":8,"sn":"CalculateCurrentT","rt":$n[0].Void},{"a":2,"n":"Deactivate","t":8,"sn":"Deactivate","rt":$n[0].Void},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":2,"n":"ResetPosition","t":8,"sn":"ResetPosition","rt":$n[0].Void},{"a":2,"n":"SetBounds","t":8,"pi":[{"n":"left","pt":$n[2].Transform,"ps":0},{"n":"right","pt":$n[2].Transform,"ps":1}],"sn":"SetBounds","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":2,"n":"SetSpeed","t":8,"pi":[{"n":"newSpeed","pt":$n[0].Single,"ps":0}],"sn":"SetSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetupRound","t":8,"pi":[{"n":"round","pt":$n[0].Int32,"ps":0}],"sn":"SetupRound","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"direction","t":4,"rt":$n[0].Int32,"sn":"direction","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"initialPosition","t":4,"rt":$n[2].Vector3,"sn":"initialPosition"},{"a":1,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Movement Bounds"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftLimit","t":4,"rt":$n[2].Transform,"sn":"leftLimit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightLimit","t":4,"rt":$n[2].Transform,"sn":"rightLimit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Initial State"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startActive","t":4,"rt":$n[0].Boolean,"sn":"startActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"t","t":4,"rt":$n[0].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RonaldoPenalty.PenaltyDefenderAI end.*/

    /*RonaldoPenalty.PenaltyGameManager start.*/
    $m("RonaldoPenalty.PenaltyGameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EndGameEvaluationRoutine","t":8,"sn":"EndGameEvaluationRoutine","rt":$n[5].IEnumerator},{"a":1,"n":"ExecuteShot","t":8,"sn":"ExecuteShot","rt":$n[0].Void},{"a":2,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[0].Void},{"a":2,"n":"GotoStore","t":8,"sn":"GotoStore","rt":$n[0].Void},{"a":1,"n":"HandleGoal","t":8,"sn":"HandleGoal","rt":$n[0].Void},{"a":1,"n":"HandleMiss","t":8,"sn":"HandleMiss","rt":$n[0].Void},{"a":1,"n":"InitGameFlow","t":8,"sn":"InitGameFlow","rt":$n[0].Void},{"a":1,"n":"NextRoundRoutine","t":8,"sn":"NextRoundRoutine","rt":$n[5].IEnumerator},{"a":1,"n":"ResetToGameplayInitialState","t":8,"sn":"ResetToGameplayInitialState","rt":$n[0].Void},{"a":1,"n":"ResolveUIManager","t":8,"sn":"ResolveUIManager","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":2,"n":"SetupDependencies","t":8,"pi":[{"n":"b","pt":$n[6].PenaltyBallController,"ps":0},{"n":"t","pt":$n[6].PenaltyTargetMover,"ps":1},{"n":"gk","pt":$n[6].PenaltyGoalkeeperAI,"ps":2},{"n":"def2","pt":$n[6].PenaltyDefenderAI,"ps":3},{"n":"def3","pt":$n[6].PenaltyDefenderAI,"ps":4},{"n":"anim","pt":$n[6].PenaltyPlayerAnimator,"ps":5},{"n":"ui","pt":$n[6].PenaltyUIManager,"ps":6}],"sn":"SetupDependencies","rt":$n[0].Void,"p":[$n[6].PenaltyBallController,$n[6].PenaltyTargetMover,$n[6].PenaltyGoalkeeperAI,$n[6].PenaltyDefenderAI,$n[6].PenaltyDefenderAI,$n[6].PenaltyPlayerAnimator,$n[6].PenaltyUIManager]},{"a":1,"n":"ShootBallAfterDelay","t":8,"pi":[{"n":"crosshairPos","pt":$n[2].Vector3,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"ShootBallAfterDelay","rt":$n[5].IEnumerator,"p":[$n[2].Vector3,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartAiming","t":8,"sn":"StartAiming","rt":$n[0].Void},{"a":1,"n":"StartRound","t":8,"pi":[{"n":"round","pt":$n[0].Int32,"ps":0}],"sn":"StartRound","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"TrackRoundProgress","t":8,"pi":[{"n":"roundJustFinished","pt":$n[0].Int32,"ps":0}],"sn":"TrackRoundProgress","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[6].PenaltyGameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[6].PenaltyGameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[6].PenaltyGameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Controllers"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ball","t":4,"rt":$n[6].PenaltyBallController,"sn":"ball"},{"a":1,"n":"currentRound","t":4,"rt":$n[0].Int32,"sn":"currentRound","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentState","t":4,"rt":$n[6].PenaltyGameState,"sn":"currentState","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}},{"at":[new UnityEngine.HeaderAttribute("Defenders Theo T\u1eebng Round (Round 1 Kh\u00f4ng C\u00f3)"),new UnityEngine.TooltipAttribute("H\u1eadu v\u1ec7 xu\u1ea5t hi\u1ec7n \u1edf L\u1ea7n s\u00fat 2 (VD: Messi)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defenderRound2","t":4,"rt":$n[6].PenaltyDefenderAI,"sn":"defenderRound2"},{"at":[new UnityEngine.TooltipAttribute("H\u1eadu v\u1ec7 xu\u1ea5t hi\u1ec7n \u1edf L\u1ea7n s\u00fat 3 (C\u1ea7u th\u1ee7 ti\u1ebfp theo)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defenderRound3","t":4,"rt":$n[6].PenaltyDefenderAI,"sn":"defenderRound3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayBetweenRounds","t":4,"rt":$n[0].Single,"sn":"delayBetweenRounds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goalkeeper","t":4,"rt":$n[6].PenaltyGoalkeeperAI,"sn":"goalkeeper"},{"a":1,"n":"isChallengeStarted","t":4,"rt":$n[0].Boolean,"sn":"isChallengeStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTapToStoreActive","t":4,"rt":$n[0].Boolean,"sn":"isTapToStoreActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 tr\u1ec5 t\u1eeb khi Click/Ronaldo vung ch\u00e2n \u0111\u1ebfn khi ch\u00e2n ch\u1ea1m b\u00f3ng (gi\u00e2y)")],"a":2,"n":"kickImpactDelay","t":4,"rt":$n[0].Single,"sn":"kickImpactDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pass25Tracked","t":4,"rt":$n[0].Boolean,"sn":"pass25Tracked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pass50Tracked","t":4,"rt":$n[0].Boolean,"sn":"pass50Tracked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pass75Tracked","t":4,"rt":$n[0].Boolean,"sn":"pass75Tracked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Hi\u1ec7n Prompt Text v\u00e0 ch\u1edd tap l\u1ea7n 1 tr\u01b0\u1edbc m\u1ed7i hi\u1ec7p (true) hay ch\u1ec9 \u1edf hi\u1ec7p \u0111\u1ea7u ti\u00ean (false)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"promptEveryRound","t":4,"rt":$n[0].Boolean,"sn":"promptEveryRound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ronaldoAnimator","t":4,"rt":$n[6].PenaltyPlayerAnimator,"sn":"ronaldoAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetMover","t":4,"rt":$n[6].PenaltyTargetMover,"sn":"targetMover"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetSpeeds","t":4,"rt":$n[0].Array.type(System.Single),"sn":"targetSpeeds"},{"a":1,"n":"totalGoals","t":4,"rt":$n[0].Int32,"sn":"totalGoals","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uiManager","t":4,"rt":$n[6].PenaltyUIManager,"sn":"uiManager"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[6].PenaltyGameManager,"sn":"Instance"}]}; }, $n);
    /*RonaldoPenalty.PenaltyGameManager end.*/

    /*RonaldoPenalty.PenaltyGameState start.*/
    $m("RonaldoPenalty.PenaltyGameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Aiming","is":true,"t":4,"rt":$n[6].PenaltyGameState,"sn":"Aiming","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}},{"a":2,"n":"Lose","is":true,"t":4,"rt":$n[6].PenaltyGameState,"sn":"Lose","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}},{"a":2,"n":"Result","is":true,"t":4,"rt":$n[6].PenaltyGameState,"sn":"Result","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}},{"a":2,"n":"Shooting","is":true,"t":4,"rt":$n[6].PenaltyGameState,"sn":"Shooting","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}},{"a":2,"n":"WaitingForStart","is":true,"t":4,"rt":$n[6].PenaltyGameState,"sn":"WaitingForStart","box":function ($v) { return Bridge.box($v, RonaldoPenalty.PenaltyGameState, System.Enum.toStringFn(RonaldoPenalty.PenaltyGameState));}}]}; }, $n);
    /*RonaldoPenalty.PenaltyGameState end.*/

    /*RonaldoPenalty.PenaltyGoalkeeperAI start.*/
    $m("RonaldoPenalty.PenaltyGoalkeeperAI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":2,"n":"SetBounds","t":8,"pi":[{"n":"left","pt":$n[2].Transform,"ps":0},{"n":"right","pt":$n[2].Transform,"ps":1}],"sn":"SetBounds","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":2,"n":"SetupRound","t":8,"pi":[{"n":"round","pt":$n[0].Int32,"ps":0}],"sn":"SetupRound","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"StopPatrol","t":8,"sn":"StopPatrol","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Speed Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseSpeed","t":4,"rt":$n[0].Single,"sn":"baseSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"changeSpeedByRound","t":4,"rt":$n[0].Boolean,"sn":"changeSpeedByRound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currentSpeed","t":4,"rt":$n[0].Single,"sn":"currentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"direction","t":4,"rt":$n[0].Int32,"sn":"direction","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isPatrolling","t":4,"rt":$n[0].Boolean,"sn":"isPatrolling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Movement Bounds"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftPost","t":4,"rt":$n[2].Transform,"sn":"leftPost"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightPost","t":4,"rt":$n[2].Transform,"sn":"rightPost"},{"a":1,"n":"startPos","t":4,"rt":$n[2].Vector3,"sn":"startPos"},{"a":1,"n":"t","t":4,"rt":$n[0].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RonaldoPenalty.PenaltyGoalkeeperAI end.*/

    /*RonaldoPenalty.PenaltyPlayerAnimator start.*/
    $m("RonaldoPenalty.PenaltyPlayerAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayCelebrate","t":8,"sn":"PlayCelebrate","rt":$n[0].Void},{"a":2,"n":"PlayDisappointed","t":8,"sn":"PlayDisappointed","rt":$n[0].Void},{"a":2,"n":"PlayIdle","t":8,"sn":"PlayIdle","rt":$n[0].Void},{"a":2,"n":"PlayKick","t":8,"sn":"PlayKick","rt":$n[0].Void},{"a":1,"n":"ReturnToIdleRoutine","t":8,"sn":"ReturnToIdleRoutine","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Animator Reference"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":1,"n":"hashCelebrate","t":4,"rt":$n[0].Int32,"sn":"hashCelebrate","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"hashDisappointed","t":4,"rt":$n[0].Int32,"sn":"hashDisappointed","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"hashIdle","t":4,"rt":$n[0].Int32,"sn":"hashIdle","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"hashKick","t":4,"rt":$n[0].Int32,"sn":"hashKick","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Kick Settings"),new UnityEngine.TooltipAttribute("Th\u1eddi gian animation s\u00fat b\u00f3ng (s\u1ebd t\u1ef1 \u0111\u1ed9ng ph\u00e1t hi\u1ec7n n\u1ebfu \u0111\u1ec3 <= 0)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"kickDuration","t":4,"rt":$n[0].Single,"sn":"kickDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"returnToIdleCoroutine","t":4,"rt":$n[2].Coroutine,"sn":"returnToIdleCoroutine"}]}; }, $n);
    /*RonaldoPenalty.PenaltyPlayerAnimator end.*/

    /*RonaldoPenalty.PenaltyTargetMover start.*/
    $m("RonaldoPenalty.PenaltyTargetMover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplySortingOrder","t":8,"sn":"ApplySortingOrder","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateDashedSprite","t":8,"sn":"CreateDashedSprite","rt":$n[2].Sprite},{"a":2,"n":"GetCurrentPosition","t":8,"sn":"GetCurrentPosition","rt":$n[2].Vector3},{"a":2,"n":"GetNormalizedT","t":8,"sn":"GetNormalizedT","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":2,"n":"SetBallTransform","t":8,"pi":[{"n":"ball","pt":$n[2].Transform,"ps":0}],"sn":"SetBallTransform","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":2,"n":"SetBounds","t":8,"pi":[{"n":"left","pt":$n[2].Transform,"ps":0},{"n":"right","pt":$n[2].Transform,"ps":1}],"sn":"SetBounds","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":2,"n":"SetSpeed","t":8,"pi":[{"n":"newSpeed","pt":$n[0].Single,"ps":0}],"sn":"SetSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetupAimLineSprite","t":8,"sn":"SetupAimLineSprite","rt":$n[0].Void},{"a":2,"n":"StartMoving","t":8,"sn":"StartMoving","rt":$n[0].Void},{"a":2,"n":"StopMoving","t":8,"sn":"StopMoving","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Dashed Aim Line (Sprite thay cho LineRenderer)"),new UnityEngine.TooltipAttribute("SpriteRenderer v\u1ebd \u0111\u01b0\u1eddng n\u00e9t \u0111\u1ee9t (t\u1ef1 t\u1ea1o l\u00fac Awake n\u1ebfu \u0111\u1ec3 tr\u1ed1ng, KH\u00d4NG parent v\u00e0o Crosshair \u0111\u1ec3 kh\u00f4ng b\u1ecb \u1ea3nh h\u01b0\u1edfng b\u1edfi hi\u1ec7u \u1ee9ng Pulse)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"aimLineRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"aimLineRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballTransform","t":4,"rt":$n[2].Transform,"sn":"ballTransform"},{"a":1,"n":"baseScale","t":4,"rt":$n[2].Vector3,"sn":"baseScale"},{"at":[new UnityEngine.TooltipAttribute("M\u00e0u v\u00e0ng t\u01b0\u01a1i c\u1ee7a n\u00e9t \u0111\u1ee9t"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dashColor","t":4,"rt":$n[2].Color,"sn":"dashColor"},{"at":[new UnityEngine.TooltipAttribute("M\u1eadt \u0111\u1ed9 n\u00e9t \u0111\u1ee9t: s\u1ed1 chu k\u1ef3 g\u1ea1ch/kho\u1ea3ng-tr\u1ed1ng tr\u00ean m\u1ed7i \u0111\u01a1n v\u1ecb kho\u1ea3ng c\u00e1ch. C\u00c0NG TH\u1ea4P -> g\u1ea1ch c\u00e0ng th\u01b0a/d\u00e0i ra"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dashDensity","t":4,"rt":$n[0].Single,"sn":"dashDensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("T\u1ef7 l\u1ec7 ph\u1ea7n \u0111\u1eb7c (v\u1ea1ch) trong 1 chu k\u1ef3, c\u00f2n l\u1ea1i l\u00e0 kho\u1ea3ng tr\u1ed1ng. C\u00c0NG TH\u1ea4P -> v\u1ea1ch c\u00e0ng ng\u1eafn, kho\u1ea3ng tr\u1ed1ng c\u00e0ng nhi\u1ec1u (th\u01b0a h\u01a1n)"),new UnityEngine.RangeAttribute(0.05, 0.9),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dashRatio","t":4,"rt":$n[0].Single,"sn":"dashRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dashedSprite","t":4,"rt":$n[2].Sprite,"sn":"dashedSprite"},{"a":1,"n":"dashedTexture","t":4,"rt":$n[2].Texture2D,"sn":"dashedTexture"},{"a":1,"n":"direction","t":4,"rt":$n[0].Int32,"sn":"direction","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Movement Bounds (\u0110\u01b0\u1eddng ch\u1ea1y ngang m\u00e0u \u0110\u1ecf)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftPoint","t":4,"rt":$n[2].Transform,"sn":"leftPoint"},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 cao c\u1ee7a line tr\u00ean m\u1eb7t c\u1ecf \u0111\u1ec3 kh\u00f4ng b\u1ecb ch\u00ecm"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lineGroundY","t":4,"rt":$n[0].Single,"sn":"lineGroundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\u0110\u1ed9 r\u1ed9ng c\u1ee7a v\u1ea1ch n\u00e9t \u0111\u1ee9t"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lineWidth","t":4,"rt":$n[0].Single,"sn":"lineWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Visual Effects"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseEffect","t":4,"rt":$n[0].Boolean,"sn":"pulseEffect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseScaleAmount","t":4,"rt":$n[0].Single,"sn":"pulseScaleAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseSpeed","t":4,"rt":$n[0].Single,"sn":"pulseSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightPoint","t":4,"rt":$n[2].Transform,"sn":"rightPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingLayerName","t":4,"rt":$n[0].String,"sn":"sortingLayerName"},{"at":[new UnityEngine.HeaderAttribute("Rendering Order (Always On Top)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[0].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RonaldoPenalty.PenaltyTargetMover end.*/

    /*RonaldoPenalty.PenaltyUIManager start.*/
    $m("RonaldoPenalty.PenaltyUIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AutoFindReferences","t":8,"sn":"AutoFindReferences","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheInitialColors","t":8,"sn":"CacheInitialColors","rt":$n[0].Void},{"a":2,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[0].Void},{"a":2,"n":"GotoStore","t":8,"sn":"GotoStore","rt":$n[0].Void},{"a":1,"n":"LoseRoutine","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"LoseRoutine","rt":$n[5].IEnumerator,"p":[$n[0].Single,Function]},{"a":2,"n":"OnClick_GotoStore","t":8,"sn":"OnClick_GotoStore","rt":$n[0].Void},{"a":2,"n":"ResetUI","t":8,"sn":"ResetUI","rt":$n[0].Void},{"a":1,"n":"SetObjectsActive","t":8,"pi":[{"n":"list","pt":System.Array.type(UnityEngine.GameObject),"ps":0},{"n":"active","pt":$n[0].Boolean,"ps":1}],"sn":"SetObjectsActive","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.GameObject),$n[0].Boolean]},{"a":2,"n":"SetPromptVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetPromptVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetupReferences","t":8,"pi":[{"n":"indicators","pt":System.Array.type(UnityEngine.UI.Image),"ps":0},{"n":"lose","pt":$n[2].GameObject,"ps":1},{"n":"prompt","pt":$n[2].GameObject,"ps":2},{"n":"winEndcard","dv":null,"o":true,"pt":$n[2].GameObject,"ps":3},{"n":"empty","dv":null,"o":true,"pt":$n[2].Sprite,"ps":4},{"n":"check","dv":null,"o":true,"pt":$n[2].Sprite,"ps":5},{"n":"cross","dv":null,"o":true,"pt":$n[2].Sprite,"ps":6}],"sn":"SetupReferences","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.UI.Image),$n[2].GameObject,$n[2].GameObject,$n[2].GameObject,$n[2].Sprite,$n[2].Sprite,$n[2].Sprite]},{"a":2,"n":"ShowLoseScreen","t":8,"pi":[{"n":"autoResetDelay","pt":$n[0].Single,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"ShowLoseScreen","rt":$n[0].Void,"p":[$n[0].Single,Function]},{"a":2,"n":"ShowWinEndcard","t":8,"pi":[{"n":"onClickStore","pt":Function,"ps":0}],"sn":"ShowWinEndcard","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateRoundResult","t":8,"pi":[{"n":"roundIndex","pt":$n[0].Int32,"ps":0},{"n":"isGoal","pt":$n[0].Boolean,"ps":1}],"sn":"UpdateRoundResult","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"HasValidSprites","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasValidSprites","t":8,"rt":$n[0].Boolean,"fg":"HasValidSprites","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasValidSprites"},{"a":2,"n":"IconCheck","t":16,"rt":$n[2].Sprite,"g":{"a":2,"n":"get_IconCheck","t":8,"rt":$n[2].Sprite,"fg":"IconCheck"},"fn":"IconCheck"},{"a":2,"n":"IconCross","t":16,"rt":$n[2].Sprite,"g":{"a":2,"n":"get_IconCross","t":8,"rt":$n[2].Sprite,"fg":"IconCross"},"fn":"IconCross"},{"a":2,"n":"IconEmpty","t":16,"rt":$n[2].Sprite,"g":{"a":2,"n":"get_IconEmpty","t":8,"rt":$n[2].Sprite,"fg":"IconEmpty"},"fn":"IconEmpty"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[6].PenaltyUIManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[6].PenaltyUIManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[6].PenaltyUIManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c GameObject c\u1ea7n \u1ea9n cho C\u1ea2 HAI (Win & Lose) - Ho\u1eb7c \u0111\u1ec3 tr\u1ed1ng n\u1ebfu \u0111\u00e3 chia ri\u00eang \u1edf tr\u00ean"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"extraObjectsToHide","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"extraObjectsToHide"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconCheck","t":4,"rt":$n[2].Sprite,"sn":"iconCheck"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconCross","t":4,"rt":$n[2].Sprite,"sn":"iconCross"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconEmpty","t":4,"rt":$n[2].Sprite,"sn":"iconEmpty"},{"a":1,"n":"initialIndicatorColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"initialIndicatorColors"},{"a":1,"n":"isWinEndcardActive","t":4,"rt":$n[0].Boolean,"sn":"isWinEndcardActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"losePanel","t":4,"rt":$n[2].GameObject,"sn":"losePanel"},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c GameObject ch\u1ec9 \u1ea9n khi LOSE (VD: ScorePanel, Target...)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objectsToHideOnLose","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToHideOnLose"},{"at":[new UnityEngine.HeaderAttribute("Hide On Result"),new UnityEngine.TooltipAttribute("Danh s\u00e1ch c\u00e1c GameObject ch\u1ec9 \u1ea9n khi WIN (VD: ScorePanel, Gameplay UI...)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objectsToHideOnWin","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToHideOnWin"},{"a":1,"n":"onEndcardClick","t":4,"rt":Function,"sn":"onEndcardClick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"promptText","t":4,"rt":$n[2].GameObject,"sn":"promptText"},{"at":[new UnityEngine.HeaderAttribute("Score Indicators"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"roundIndicators","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"roundIndicators"},{"at":[new UnityEngine.HeaderAttribute("Panels & Prompts"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winEndcardPanel","t":4,"rt":$n[2].GameObject,"sn":"winEndcardPanel"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[6].PenaltyUIManager,"sn":"Instance"}]}; }, $n);
    /*RonaldoPenalty.PenaltyUIManager end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[1].DOTweenCYInstruction.WaitForCompletion,$n[1].DOTweenCYInstruction.WaitForRewind,$n[1].DOTweenCYInstruction.WaitForKill,$n[1].DOTweenCYInstruction.WaitForElapsedLoops,$n[1].DOTweenCYInstruction.WaitForPosition,$n[1].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[1].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Tween],"pi":[{"n":"tween","pt":$n[1].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[1].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[1].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[1].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[1].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[1].PathType,$n[1].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[1].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[1].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[1].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[1].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[1].PathType,$n[1].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[1].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[1].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[1].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[1].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[1].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[1].PathType,$n[1].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[1].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[1].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[1].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[1].PathType,$n[1].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[1].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[1].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[1].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[1].Tweener,"p":[$n[3].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[1].Tweener,"p":[$n[3].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[1].Tweener,"p":[$n[3].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[3].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[1].Sequence,"p":[$n[3].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[1].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[1].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[1].Tweener,"p":[$n[3].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[1].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[1].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[1].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[1].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[1].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[1].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[1].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[1].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[3].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[1].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[1].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[1].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[1].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[1].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[1].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[1].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[1].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[1].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[1].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[1].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[1].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
