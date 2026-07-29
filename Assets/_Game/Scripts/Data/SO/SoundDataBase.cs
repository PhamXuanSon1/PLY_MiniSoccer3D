using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "SoundDataBase", menuName = "Scriptable Objects/Data/SoundDataBase")]
public class SoundDataBase : ScriptableObject
{
    [Header("Sound Config")]
    [Tooltip("Danh sách các hiệu ứng âm thanh (SFX) trong game")]
    public List<AudioList> sounds;

    [Header("Music Config")]
    [Tooltip("Danh sách các bản nhạc nền (BGM) trong game")]
    public List<MusicAudioData> musics;

    private Dictionary<SoundID, AudioList> soundDict;
    private Dictionary<MusicID, MusicAudioData> musicDict;

    public void Init()
    {
        soundDict = new Dictionary<SoundID, AudioList>();
        musicDict = new Dictionary<MusicID, MusicAudioData>();

        if (sounds != null)
        {
            foreach (var sound in sounds)
            {
                if (sound.AudioID == SoundID.None)
                    continue;

                if (!soundDict.TryAdd(sound.AudioID, sound))
                {
                    Debug.LogWarning($"Duplicate sound ID found: {sound.AudioID}");
                }
            }
        }

        if (musics != null)
        {
            foreach (var music in musics)
            {
                if (music.AudioID == MusicID.None)
                    continue;

                if (!musicDict.TryAdd(music.AudioID, music))
                {
                    Debug.LogWarning($"Duplicate music ID found: {music.AudioID}");
                }
            }
        }
    }

    public AudioList GetSound(SoundID id)
    {
        if (soundDict == null)
            Init();

        soundDict.TryGetValue(id, out var sound);
        return sound;
    }

    public MusicAudioData GetMusic(MusicID id)
    {
        if (musicDict == null)
            Init();

        musicDict.TryGetValue(id, out var music);
        return music;
    }
}

[System.Serializable]
public struct MusicAudioData
{
    [Header("Music Item")]
    [Tooltip("ID phân loại bản nhạc")]
    [SerializeField] private MusicID audioID;

    [Tooltip("AudioClip tương ứng với nhạc nền")]
    public AudioClip audioClip;

    public MusicID AudioID => audioID;
}
