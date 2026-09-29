using UnityEngine;

/// <summary>
/// Dữ liệu hiệu ứng Max Level dựng lại từ video ref (~27.5fps, bỏ đoạn khung bùng trắng đứng yên ở đầu).
/// Editor tool (Tools > PLY > Build Max Level Glow Animation) bake dữ liệu này thành AnimationClip (60fps, nội suy mượt).
/// </summary>
public static class MaxLevelGlowTimeline
{
    public const float VideoFps = 27.46f;
    public const int ClipFps = 60;

    // Thời gian crossfade khi nhảy sang trạng thái mới (giữ nhịp nháy nhưng không giật)
    public const float SnapBlendSeconds = 0.05f;

    // Tên các layer con dưới Visuals (đường dẫn dùng trong AnimationClip)
    public const string RimLayer = "GlowRimBack";
    public const string WhiteLayer = "GlowWhiteFront";
    public const string HaloLayer = "GlowHaloFront";
    public const string BurstLayer = "GlowBurstFx";

    public enum BurstFx { None, Blur, BlurColor, BlurChroma, ChromaEdge }

    // Trạng thái hiển thị tại một thời điểm
    public struct State
    {
        public float rim, white, halo;   // alpha của 3 lớp glow
        public Color tint;               // màu nhân vật (nhân với màu gốc)
        public BurstFx burst;            // lớp FX mờ/lệch màu (ẩn nhân vật khi hiện rõ)
        public float burstAlpha;         // độ hiện của lớp FX (fade in/out thay vì bật tắt)
        public float burstScale;
    }

    private struct Key
    {
        public float frames;   // số frame video giữ / chuyển sang trạng thái này
        public bool lerp;      // true = chuyển mượt từ khung trước, false = nhảy ngay
        public State state;
    }

    private static Key Snap(float frames, float rim, float white, float halo, Color tint)
    {
        return new Key { frames = frames, state = new State { rim = rim, white = white, halo = halo, tint = tint, burstScale = 1f } };
    }

    private static Key Lerp(float frames, float rim, float white, float halo, Color tint)
    {
        Key k = Snap(frames, rim, white, halo, tint);
        k.lerp = true;
        return k;
    }

    private static Key Burst(float frames, BurstFx fx, float scale, float rim)
    {
        return new Key { frames = frames, state = new State { rim = rim, tint = Color.white, burst = fx, burstAlpha = 1f, burstScale = scale } };
    }

    private static Color Gray(float v) { return new Color(v, v, v, 1f); }

    // Bắt đầu nhấp nháy ngay (bỏ khung bùng trắng mờ đứng yên); 3 nhịp "bùng mờ -> trắng -> sáng -> tối",
    // nhịp 4 nháy màu từng frame, nhịp cuối lệch màu RGB rồi ổn định có viền sáng tới giây 9
    private static readonly Key[] Keys = BuildKeys();

    private static Key[] BuildKeys()
    {
        Color n = Color.white;
        Color dark = Gray(0.5f);
        return new[]
        {
            // Nhịp 1 (f176-190): chớp bùng mờ 2 frame rồi vào nhấp nháy luôn
            Burst(2, BurstFx.Blur, 1.3f, 0.6f),
            Snap(0, 1f, 0.6f, 0.8f, n),
            Lerp(4, 0.9f, 0.1f, 0.3f, n),
            Lerp(3, 0.5f, 0f, 0f, n),
            Lerp(6, 0f, 0f, 0f, dark),
            // Nhịp 2 (f191-205)
            Burst(2, BurstFx.Blur, 1.3f, 0.5f),
            Snap(2, 1f, 0.8f, 0.7f, n),
            Lerp(5, 0.6f, 0f, 0f, n),
            Lerp(6, 0f, 0f, 0f, dark),
            // Nhịp 3 (f206-220)
            Burst(2, BurstFx.Blur, 1.3f, 0.5f),
            Snap(3, 1f, 1f, 1f, n),
            Lerp(2, 0.9f, 0.2f, 0.3f, n),
            Lerp(2, 0.5f, 0f, 0f, Gray(0.95f)),
            Lerp(6, 0f, 0f, 0f, dark),
            // Nhịp 4 (f221-237): bùng ảnh màu mờ ngang, trắng, rồi nháy màu từng frame
            Burst(2, BurstFx.BlurColor, 1.3f, 0f),
            Snap(2, 1f, 1f, 1f, n),
            Snap(1, 0.6f, 0f, 0f, Gray(0.8f)),
            Snap(1, 1f, 0.6f, 0.3f, n),
            Snap(1, 0.4f, 0f, 0f, new Color(0.75f, 0.65f, 0.55f, 1f)),
            Snap(1, 1f, 0.7f, 0.3f, n),
            Snap(2, 0.8f, 0.3f, 0f, new Color(1f, 0.88f, 0.95f, 1f)),
            Snap(1, 0.5f, 0f, 0f, Gray(0.75f)),
            Snap(1, 1f, 0.2f, 0f, n),
            Snap(1, 0.3f, 0f, 0f, new Color(0.65f, 0.75f, 0.65f, 1f)),
            Snap(2, 0.9f, 0.25f, 0f, new Color(1f, 0.82f, 1f, 1f)),
            Snap(1, 0.4f, 0f, 0f, new Color(0.6f, 0.65f, 0.85f, 1f)),
            Snap(1, 0.3f, 0f, 0f, new Color(0.6f, 0.75f, 0.75f, 1f)),
            // Nhịp 5 (f238-247): bùng mờ lệch màu RGB -> viền lệch màu -> ổn định có viền sáng tới giây 9
            Burst(2, BurstFx.BlurChroma, 1.2f, 0.6f),
            Burst(1, BurstFx.ChromaEdge, 1f, 0.8f),
            Snap(7, 0.7f, 0f, 0f, n),
        };
    }

    /// <summary>Tổng thời lượng (giây).</summary>
    public static float Duration
    {
        get
        {
            float frames = 0f;
            foreach (Key k in Keys) frames += k.frames;
            return frames / VideoFps;
        }
    }

    /// <summary>Trạng thái hiển thị tại thời điểm t (giây), đã làm mượt các bước chuyển.</summary>
    public static State Evaluate(float t)
    {
        State prev = new State { tint = Color.white, burstScale = 1f };
        float start = 0f;

        for (int i = 0; i < Keys.Length; i++)
        {
            Key k = Keys[i];
            float duration = k.frames / VideoFps;
            float end = start + duration;

            if (t < end || i == Keys.Length - 1)
            {
                // Lerp: chuyển đều suốt đoạn; Snap/Burst: crossfade ngắn ở đầu đoạn rồi giữ
                float blend = k.lerp ? duration : Mathf.Min(duration, SnapBlendSeconds);
                if (blend <= 0f) return Blend(prev, k.state, 1f);

                float p = Mathf.Clamp01((t - start) / blend);
                if (!k.lerp) p = p * p * (3f - 2f * p);
                return Blend(prev, k.state, p);
            }

            prev = Blend(prev, k.state, 1f);
            start = end;
        }

        return prev;
    }

    private static State Blend(State a, State b, float p)
    {
        State s;
        s.rim = Mathf.Lerp(a.rim, b.rim, p);
        s.white = Mathf.Lerp(a.white, b.white, p);
        s.halo = Mathf.Lerp(a.halo, b.halo, p);
        s.tint = Color.Lerp(a.tint, b.tint, p);
        s.burstAlpha = Mathf.Lerp(a.burstAlpha, b.burstAlpha, p);
        s.burstScale = Mathf.Lerp(a.burstScale, b.burstScale, p);
        // Khi FX đang mờ dần thì vẫn giữ sprite FX cũ để fade out
        s.burst = b.burst != BurstFx.None ? b.burst : a.burst;
        return s;
    }
}
