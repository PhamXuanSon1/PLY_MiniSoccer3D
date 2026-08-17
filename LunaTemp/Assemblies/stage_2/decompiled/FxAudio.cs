using System;

[Serializable]
public class FxAudio
{
	public SoundData Clock;

	public SoundData PlayerWin;

	public SoundData PlayerLoose;

	public SoundData RightChoice;

	public SoundData WrongChoice;

	public SoundData MaxLevel;

	public SoundData FightingCloud;

	public SoundData Confetti;

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
		case FxType.Confetti:
			return Confetti;
		default:
			return null;
		}
	}
}
