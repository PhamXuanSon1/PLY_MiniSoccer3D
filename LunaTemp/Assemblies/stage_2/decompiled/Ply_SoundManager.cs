using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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

	public static Ply_SoundManager Instance => Ply_Singleton<Ply_SoundManager>.Ins;

	public override void Awake()
	{
		base.Awake();
		EnsureAudioListener();
	}

	private void EnsureAudioListener()
	{
		if (Object.FindObjectOfType<AudioListener>() == null)
		{
			Camera mainCam = Camera.main;
			if (mainCam != null)
			{
				mainCam.gameObject.AddComponent<AudioListener>();
			}
			else
			{
				base.gameObject.AddComponent<AudioListener>();
			}
		}
	}

	private void Start()
	{
		_lastEnableSound = enableSound;
		_lastBgmVolume = bgmVolume;
		UpdateBGMState();
	}

	private void Update()
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
			if (fx[i] != null)
			{
				fx[i].mute = !enableSound;
			}
			if (loopFx[i] != null)
			{
				loopFx[i].mute = !enableSound;
			}
		}
	}

	public float PlayFx(FxType fxType)
	{
		if (!enableSound)
		{
			return 0f;
		}
		SoundData data = audioClips.GetSoundData(fxType);
		if (data == null || data.clip == null)
		{
			return 0f;
		}
		if (fx[(int)fxType] == null)
		{
			fx[(int)fxType] = new GameObject($"FX_{fxType}").AddComponent<AudioSource>();
		}
		float v = data.volume;
		fx[(int)fxType].clip = data.clip;
		fx[(int)fxType].volume = Mathf.Min(1f, v);
		fx[(int)fxType].Play();
		for (v -= 1f; v > 0f; v -= 1f)
		{
			fx[(int)fxType].PlayOneShot(data.clip, Mathf.Min(1f, v));
		}
		return data.clip.length;
	}

	public void PlaySequentialSounds(FxType mainSound, List<FxType> additionalSounds)
	{
		if (base.gameObject.activeInHierarchy)
		{
			StartCoroutine(PlaySequentialSoundsRoutine(mainSound, additionalSounds));
		}
	}

	private IEnumerator PlaySequentialSoundsRoutine(FxType mainSound, List<FxType> additionalSounds)
	{
		float duration = PlayFx(mainSound);
		if (additionalSounds == null || additionalSounds.Count <= 0)
		{
			yield break;
		}
		foreach (FxType fx in additionalSounds)
		{
			yield return new WaitForSeconds(duration);
			duration = PlayFx(fx);
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
		if (!(clip == null) && enableSound)
		{
			GameObject go = new GameObject("SFX_Clip");
			AudioSource a = go.AddComponent<AudioSource>();
			a.clip = clip;
			a.volume = volume;
			Debug.Log($"PlayClip: clip: {clip}, volume: {volume}");
			a.Play();
			Object.Destroy(go, clip.length + 0.1f);
		}
	}

	public void PlayLoopFx(FxType fxType, float volume = 1f)
	{
		if (!enableSound)
		{
			return;
		}
		SoundData data = audioClips.GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			if (loopFx[(int)fxType] == null)
			{
				GameObject go = new GameObject($"LoopFX_{fxType}");
				loopFx[(int)fxType] = go.AddComponent<AudioSource>();
				loopFx[(int)fxType].loop = true;
				loopFx[(int)fxType].playOnAwake = false;
			}
			loopFx[(int)fxType].clip = data.clip;
			loopFx[(int)fxType].volume = Mathf.Min(1f, data.volume) * volume;
			if (!loopFx[(int)fxType].isPlaying)
			{
				loopFx[(int)fxType].Play();
			}
		}
	}

	public void StopLoopFx(FxType fxType)
	{
		AudioSource source = loopFx[(int)fxType];
		if (source != null && source.isPlaying)
		{
			source.Stop();
		}
	}
}
