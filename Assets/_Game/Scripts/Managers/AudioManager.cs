using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance;

    [Header("Audio Sources")]
    [Tooltip("AudioSource dùng phát các hiệu ứng âm thanh (SFX)")]
    [SerializeField] private AudioSource soundAudioSource;

    [Tooltip("AudioSource dùng phát nhạc nền (BGM)")]
    [SerializeField] private AudioSource musicAudioSource;

    [Header("Database Reference")]
    [Tooltip("Data SoundDataBase chứa danh sách âm thanh và nhạc nền")]
    [SerializeField] private SoundDataBase soundDataBase;

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        if (soundAudioSource == null)
            soundAudioSource = GetComponent<AudioSource>();

        if (soundDataBase != null)
            soundDataBase.Init();
    }

    public static void PlaySound(SoundID soundID, float volume = 1f)
    {
        if (Instance == null || Instance.soundDataBase == null || Instance.soundAudioSource == null) return;

        AudioList audioList = Instance.soundDataBase.GetSound(soundID);

        if (audioList.audioClips == null || audioList.audioClips.Length == 0)
        {
            Debug.LogWarning($"No clips assigned for sound: {soundID}");
            return;
        }

        AudioClip clip = audioList.audioClips[Random.Range(0, audioList.audioClips.Length)];
        Instance.soundAudioSource.PlayOneShot(clip, volume);
    }

    public static void PlayMusic(MusicID musicID, float volume = 1f, bool isLoop = true)
    {
        if (Instance == null || Instance.soundDataBase == null || Instance.musicAudioSource == null) return;

        MusicAudioData music = Instance.soundDataBase.GetMusic(musicID);

        if (music.audioClip == null)
        {
            Debug.LogWarning($"No clip assigned for music: {musicID}");
            return;
        }

        Instance.musicAudioSource.clip = music.audioClip;
        Instance.musicAudioSource.volume = volume;
        Instance.musicAudioSource.loop = isLoop;
        Instance.musicAudioSource.Play();
    }

    public static void StopMusic()
    {
        if (Instance != null && Instance.musicAudioSource != null)
            Instance.musicAudioSource.Stop();
    }
}

[System.Serializable]
public struct AudioList
{
    [Header("Sound Item")]
    [Tooltip("ID phân loại âm thanh")]
    [SerializeField] private SoundID audioID;

    [Tooltip("Danh sách các AudioClip tương ứng (sẽ phát ngẫu nhiên)")]
    public AudioClip[] audioClips;

    public SoundID AudioID => audioID;
}
