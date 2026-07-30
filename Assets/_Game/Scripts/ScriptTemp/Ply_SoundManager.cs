using UnityEngine;

#if UNITY_EDITOR
using UnityEditor;
#endif

public enum FxType
{
    Clock = 0,
    PlayerWin = 1,
    PlayerLoose = 2,
    RightChoice = 3,
    WrongChoice = 4,
    MaxLevel = 5,
    FightingCloud = 6
}

[System.Serializable]
public class SoundData
{
    public AudioClip clip;
    public float volume = 1f;
}

[System.Serializable]
public class FxAudio
{
    public SoundData Clock;
    public SoundData PlayerWin;
    public SoundData PlayerLoose;
    public SoundData RightChoice;
    public SoundData WrongChoice;
    public SoundData MaxLevel;
    public SoundData FightingCloud;

    public SoundData GetSoundData(FxType type)
    {
        switch (type)
        {
            case FxType.Clock:
                return Clock;
            case FxType.PlayerWin:
                return PlayerWin;
            case FxType.PlayerLoose:
                return PlayerLoose;
            case FxType.RightChoice:
                return RightChoice;
            case FxType.WrongChoice:
                return WrongChoice;
            case FxType.MaxLevel:
                return MaxLevel;
            case FxType.FightingCloud:
                return FightingCloud;
        }
        return null;
    }
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    public FxAudio audioClips;
    public AudioSource sound;

    private AudioSource[] fx = new AudioSource[40];
    private AudioSource[] loopFx = new AudioSource[40];

    [Header("--- Settings ---")]
    [Tooltip("Bật/tắt toàn bộ âm thanh (True = Bật, False = Tắt)")]
    public bool enableSound = true;
    private bool _lastEnableSound;

    [Range(0f, 1f)]
    [Tooltip("Âm lượng nhạc nền BGM (Mặc định 0.3)")]
    public float bgmVolume = 0.3f;
    private float _lastBgmVolume;

    public override void Awake()
    {
        base.Awake();
        EnsureAudioListener();
    }

    private void EnsureAudioListener()
    {
        if (FindObjectOfType<AudioListener>() == null)
        {
            Camera mainCam = Camera.main;
            if (mainCam != null)
            {
                mainCam.gameObject.AddComponent<AudioListener>();
            }
            else
            {
                gameObject.AddComponent<AudioListener>();
            }
        }
    }

    void Start()
    {
        _lastEnableSound = enableSound;
        _lastBgmVolume = bgmVolume;
        UpdateBGMState();
    }

    void Update()
    {
        if (_lastEnableSound != enableSound || _lastBgmVolume != bgmVolume)
        {
            _lastEnableSound = enableSound;
            _lastBgmVolume = bgmVolume;
            UpdateBGMState();
        }
    }

    public void UpdateBGMState()
    {
        if (sound != null)
        {
            sound.mute = !enableSound;
            sound.volume = bgmVolume;
        }
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null) fx[i].mute = !enableSound;
            if (loopFx[i] != null) loopFx[i].mute = !enableSound;
        }
    }
    // Giữ Instance để tương thích ngược với các script cũ
    public static Ply_SoundManager Instance => Ins;
    public float PlayFx(FxType fxType)
    {
        if (!enableSound) return 0f;

        SoundData data = audioClips.GetSoundData(fxType);
        if (data == null || data.clip == null)
            return 0f;

        if (fx[(int)fxType] == null)
        {
            fx[(int)fxType] =
                new GameObject($"FX_{fxType}")
                .AddComponent<AudioSource>();
        }

        float v = data.volume;
        fx[(int)fxType].clip = data.clip;
        fx[(int)fxType].volume = Mathf.Min(1f, v);
        fx[(int)fxType].Play();

        // Nếu volume > 1, dùng PlayOneShot để phát chồng thêm phần dư (ví dụ 1.5 sẽ phát 1 lần vol 1.0 và 1 lần vol 0.5)
        v -= 1f;
        while (v > 0)
        {
            fx[(int)fxType].PlayOneShot(data.clip, Mathf.Min(1f, v));
            v -= 1f;
        }
        
        return data.clip.length;
    }

    public void PlaySequentialSounds(FxType mainSound, System.Collections.Generic.List<FxType> additionalSounds)
    {
        if (!gameObject.activeInHierarchy) return;
        StartCoroutine(PlaySequentialSoundsRoutine(mainSound, additionalSounds));
    }

    private System.Collections.IEnumerator PlaySequentialSoundsRoutine(FxType mainSound, System.Collections.Generic.List<FxType> additionalSounds)
    {
        float duration = PlayFx(mainSound);
        
        if (additionalSounds != null && additionalSounds.Count > 0)
        {
            foreach (FxType fx in additionalSounds)
            {
                yield return new WaitForSeconds(duration);
                duration = PlayFx(fx);
            }
        }
    }

    public void StopBGM()
    {
        if (sound != null)
        {
            sound.Stop();
        }
    }

    public void Mute()
    {
        if (sound != null)
        {
            sound.Stop();
        }
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
            if (loopFx[i] != null)
            {
                loopFx[i].Stop();
            }
        }
    }


    public void PlayClip(AudioClip clip, float volume = 1f)
    {
        if (clip == null || !enableSound)
            return;
        GameObject go = new GameObject("SFX_Clip");
        AudioSource a = go.AddComponent<AudioSource>();
        a.clip = clip;
        a.volume = volume;
        Debug.Log($"PlayClip: clip: {clip}, volume: {volume}");
        a.Play();
        Destroy(go, clip.length + 0.1f);
    }

    public void PlayLoopFx(FxType fxType, float volume = 1f)
    {
        if (!enableSound) return;
        SoundData data = audioClips.GetSoundData(fxType);
        if (data == null || data.clip == null) return;
        if (loopFx[(int)fxType] == null)
        {
            GameObject go = new GameObject($"LoopFX_{fxType}");
            loopFx[(int)fxType] = go.AddComponent<AudioSource>();
            loopFx[(int)fxType].loop = true;
            loopFx[(int)fxType].playOnAwake = false;
        }
        loopFx[(int)fxType].clip = data.clip;
        // Áp dụng giới hạn volume cao nhất là 1 cho âm thanh loop
        loopFx[(int)fxType].volume = Mathf.Min(1f, data.volume) * volume;
        if (!loopFx[(int)fxType].isPlaying)
            loopFx[(int)fxType].Play();
    }

    public void StopLoopFx(FxType fxType)
    {
        AudioSource source = loopFx[(int)fxType];
        if (source != null && source.isPlaying)
            source.Stop();
    }
}

#if UNITY_EDITOR
[CustomPropertyDrawer(typeof(SoundData))]
public class SoundDataDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        EditorGUI.BeginProperty(position, label, property);

        // Vẽ Label của biến
        position = EditorGUI.PrefixLabel(position, GUIUtility.GetControlID(FocusType.Passive), label);

        var indent = EditorGUI.indentLevel;
        EditorGUI.indentLevel = 0;

        // Tính toán độ rộng: Clip chiếm 70%, RepeatCount chiếm 25%, còn lại là khoảng cách
        float clipWidth = position.width * 0.7f;
        float countWidth = position.width * 0.25f;
        float spacing = position.width * 0.05f;

        Rect clipRect = new Rect(position.x, position.y, clipWidth, position.height);
        Rect countRect = new Rect(position.x + clipWidth + spacing, position.y, countWidth, position.height);

        // Vẽ các ô input mà không hiện thêm label phụ bên trong
        EditorGUI.PropertyField(clipRect, property.FindPropertyRelative("clip"), GUIContent.none);
        EditorGUI.PropertyField(countRect, property.FindPropertyRelative("volume"), GUIContent.none);

        EditorGUI.indentLevel = indent;
        EditorGUI.EndProperty();
    }
}
#endif
