"use client";
import { useRef, useState } from "react";
const SRC = "/work/showreel/1.mp4";
const COVER = "/work/showreel/1.jpg";
const fmt = (s) => {
  if (!Number.isFinite(s)) return "00:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
};

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function ShowReel() {
  const box = useRef(null);
  const vid = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };
  const seek = (e) => {
    const v = vid.current;
    if (!v || !dur) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime =
      Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * dur;
  };
  const mute = () => {
    const v = vid.current;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const full = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else box.current?.requestFullscreen?.();
  };
  const pct = dur ? (cur / dur) * 100 : 0;

  return (
    <section id="reel" className="bg-[#0a0a0f] px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Showreel</p>
        <div
          ref={box}
          className="brackets group relative mt-6 aspect-video overflow-hidden rounded-2xl border border-violet/40 bg-black shadow-[0_0_40px_-10px_rgba(124,58,237,.5)]"
        >
          <video
            ref={vid}
            src={SRC}
            playsInline
            preload="none"
            onClick={toggle}
            onPlay={() => {
              setPlaying(true);
              setStarted(true);
            }}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
            className="h-full w-full cursor-pointer object-cover"
          />
          {!started && (
            <Image
              src={COVER}
              alt="WAHM showreel cover"
              fill
              priority
              sizes="(min-width:1024px) 1024px, 100vw"
              className="pointer-events-none object-cover"
            />
          )}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          <span className="pointer-events-none absolute right-4 top-4 h-2 w-2 rounded-full bg-green-400" />

          {!playing && (
            <button
              type="button"
              onClick={toggle}
              aria-label="Play showreel"
              className="ping absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet text-white transition hover:scale-110 md:h-20 md:w-20"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <div className="absolute inset-x-4 bottom-3 md:inset-x-6 md:bottom-4">
            <div
              role="slider"
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.round(dur)}
              aria-valuenow={Math.round(cur)}
              onClick={seek}
              className="h-1.5 w-full cursor-pointer rounded-full bg-white/20"
            >
              <div
                className="h-full rounded-full bg-violet"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={playing ? "Pause" : "Play"}
                  className="grid h-7 w-7 place-items-center"
                >
                  <Svg>
                    {playing ? (
                      <>
                        <path d="M8 5v14" />
                        <path d="M16 5v14" />
                      </>
                    ) : (
                      <path d="M7 4l13 8-13 8z" />
                    )}
                  </Svg>
                </button>
                <span className="tabular-nums">
                  {fmt(cur)} / {fmt(dur)}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={mute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="grid h-7 w-7 place-items-center"
                >
                  <Svg>
                    <path d="M11 5L6 9H3v6h3l5 4z" />
                    {muted ? (
                      <>
                        <path d="M22 9l-6 6" />
                        <path d="M16 9l6 6" />
                      </>
                    ) : (
                      <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" />
                    )}
                  </Svg>
                </button>
                <button
                  type="button"
                  onClick={full}
                  aria-label="Fullscreen"
                  className="grid h-7 w-7 place-items-center"
                >
                  <Svg>
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </Svg>
                </button>
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-mute">Cinematic, VFX and motion.</p>
      </div>
    </section>
  );
}
