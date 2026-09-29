using UnityEngine;

public static class MaxLevelGlowTimeline
{
	public enum BurstFx
	{
		None,
		Blur,
		BlurColor,
		BlurChroma,
		ChromaEdge
	}

	public struct State
	{
		public float rim;

		public float white;

		public float halo;

		public Color tint;

		public BurstFx burst;

		public float burstAlpha;

		public float burstScale;
	}

	private struct Key
	{
		public float frames;

		public bool lerp;

		public State state;
	}

	public const float VideoFps = 27.46f;

	public const int ClipFps = 60;

	public const float SnapBlendSeconds = 0.05f;

	public const string RimLayer = "GlowRimBack";

	public const string WhiteLayer = "GlowWhiteFront";

	public const string HaloLayer = "GlowHaloFront";

	public const string BurstLayer = "GlowBurstFx";

	private static readonly Key[] Keys = BuildKeys();

	public static float Duration
	{
		get
		{
			float frames = 0f;
			Key[] keys = Keys;
			for (int j = 0; j < keys.Length; j++)
			{
				Key i = keys[j];
				frames += i.frames;
			}
			return frames / 27.46f;
		}
	}

	private static Key Snap(float frames, float rim, float white, float halo, Color tint)
	{
		Key result = default(Key);
		result.frames = frames;
		result.state = new State
		{
			rim = rim,
			white = white,
			halo = halo,
			tint = tint,
			burstScale = 1f
		};
		return result;
	}

	private static Key Lerp(float frames, float rim, float white, float halo, Color tint)
	{
		Key i = Snap(frames, rim, white, halo, tint);
		i.lerp = true;
		return i;
	}

	private static Key Burst(float frames, BurstFx fx, float scale, float rim)
	{
		Key result = default(Key);
		result.frames = frames;
		result.state = new State
		{
			rim = rim,
			tint = Color.white,
			burst = fx,
			burstAlpha = 1f,
			burstScale = scale
		};
		return result;
	}

	private static Color Gray(float v)
	{
		return new Color(v, v, v, 1f);
	}

	private static Key[] BuildKeys()
	{
		Color i = Color.white;
		Color dark = Gray(0.5f);
		return new Key[30]
		{
			Burst(2f, BurstFx.Blur, 1.3f, 0.6f),
			Snap(0f, 1f, 0.6f, 0.8f, i),
			Lerp(4f, 0.9f, 0.1f, 0.3f, i),
			Lerp(3f, 0.5f, 0f, 0f, i),
			Lerp(6f, 0f, 0f, 0f, dark),
			Burst(2f, BurstFx.Blur, 1.3f, 0.5f),
			Snap(2f, 1f, 0.8f, 0.7f, i),
			Lerp(5f, 0.6f, 0f, 0f, i),
			Lerp(6f, 0f, 0f, 0f, dark),
			Burst(2f, BurstFx.Blur, 1.3f, 0.5f),
			Snap(3f, 1f, 1f, 1f, i),
			Lerp(2f, 0.9f, 0.2f, 0.3f, i),
			Lerp(2f, 0.5f, 0f, 0f, Gray(0.95f)),
			Lerp(6f, 0f, 0f, 0f, dark),
			Burst(2f, BurstFx.BlurColor, 1.3f, 0f),
			Snap(2f, 1f, 1f, 1f, i),
			Snap(1f, 0.6f, 0f, 0f, Gray(0.8f)),
			Snap(1f, 1f, 0.6f, 0.3f, i),
			Snap(1f, 0.4f, 0f, 0f, new Color(0.75f, 0.65f, 0.55f, 1f)),
			Snap(1f, 1f, 0.7f, 0.3f, i),
			Snap(2f, 0.8f, 0.3f, 0f, new Color(1f, 0.88f, 0.95f, 1f)),
			Snap(1f, 0.5f, 0f, 0f, Gray(0.75f)),
			Snap(1f, 1f, 0.2f, 0f, i),
			Snap(1f, 0.3f, 0f, 0f, new Color(0.65f, 0.75f, 0.65f, 1f)),
			Snap(2f, 0.9f, 0.25f, 0f, new Color(1f, 0.82f, 1f, 1f)),
			Snap(1f, 0.4f, 0f, 0f, new Color(0.6f, 0.65f, 0.85f, 1f)),
			Snap(1f, 0.3f, 0f, 0f, new Color(0.6f, 0.75f, 0.75f, 1f)),
			Burst(2f, BurstFx.BlurChroma, 1.2f, 0.6f),
			Burst(1f, BurstFx.ChromaEdge, 1f, 0.8f),
			Snap(7f, 0.7f, 0f, 0f, i)
		};
	}

	public static State Evaluate(float t)
	{
		State state = default(State);
		state.tint = Color.white;
		state.burstScale = 1f;
		State prev = state;
		float start = 0f;
		for (int i = 0; i < Keys.Length; i++)
		{
			Key j = Keys[i];
			float duration = j.frames / 27.46f;
			float end = start + duration;
			if (t < end || i == Keys.Length - 1)
			{
				float blend = (j.lerp ? duration : Mathf.Min(duration, 0.05f));
				if (blend <= 0f)
				{
					return Blend(prev, j.state, 1f);
				}
				float p = Mathf.Clamp01((t - start) / blend);
				if (!j.lerp)
				{
					p = p * p * (3f - 2f * p);
				}
				return Blend(prev, j.state, p);
			}
			prev = Blend(prev, j.state, 1f);
			start = end;
		}
		return prev;
	}

	private static State Blend(State a, State b, float p)
	{
		State s = default(State);
		s.rim = Mathf.Lerp(a.rim, b.rim, p);
		s.white = Mathf.Lerp(a.white, b.white, p);
		s.halo = Mathf.Lerp(a.halo, b.halo, p);
		s.tint = Color.Lerp(a.tint, b.tint, p);
		s.burstAlpha = Mathf.Lerp(a.burstAlpha, b.burstAlpha, p);
		s.burstScale = Mathf.Lerp(a.burstScale, b.burstScale, p);
		s.burst = ((b.burst != 0) ? b.burst : a.burst);
		return s;
	}
}
