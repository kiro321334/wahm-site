"use client";
import { useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
export default function WorkModal({ p, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const close = () => ref.current.close();
  // pause any other video when one starts playing
  const onPlay = (e) => {
    ref.current.querySelectorAll("video").forEach((v) => {
      if (v !== e.target) v.pause();
    });
  };
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
      aria-label={`Folder: ${p.title}`}
      className="m-auto h-svh w-full max-w-2xl overflow-hidden border-line bg-panel p-0 text-white backdrop:bg-black/85 backdrop:backdrop-blur-sm md:h-[92svh] md:rounded-2xl md:border"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <p className="eyebrow">
            {p.cat} · {p.count} {p.count === 1 ? "video" : "videos"}
          </p>
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Close"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line"
          >
            <Icon n="close" size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-2xl font-bold uppercase leading-tight md:text-3xl">
            {p.title}
          </h2>
          <p className="mt-3 leading-relaxed text-white/75">{p.brief}</p>
          <div className="mt-6 grid gap-5">
            {p.videos.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl border border-line bg-black ${p.reel ? "mx-auto aspect-[9/16] w-full max-w-[280px]" : "aspect-video"}`}
              >
                <video
                  src={src}
                  poster={p.posters[i]}
                  controls
                  playsInline
                  preload="none"
                  onPlay={onPlay}
                  aria-label={`${p.title} – video ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <a href="#contact" onClick={close} className="btn-p mt-8 w-full">
            Start a similar project
          </a>
        </div>
      </div>
    </dialog>
  );
}
