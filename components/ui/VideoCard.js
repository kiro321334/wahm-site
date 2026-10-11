'use client';
import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function VideoCard({ src, poster, label }) {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const start = () => { setActive(true); setLoading(true); };
  // أي فيديو يشتغل يوقّف الباقي
  const onPlay = (e) => {
    document.querySelectorAll('video').forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-black">
      {!active ? (
        <button
          type="button"
          onClick={start}
          aria-label={`Play ${label}`}
          className="group absolute inset-0"
        >
          <Image
            src={poster}
            alt={label}
            fill
            loading="lazy"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet text-white transition group-hover:scale-110">
            <Icon n="play" size={20} fill />
          </span>
        </button>
      ) : (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={label}
          onWaiting={() => setLoading(true)}
          onPlaying={() => setLoading(false)}
          onPause={() => setLoading(false)}
          onError={() => setLoading(false)}
          onPlay={onPlay}
          className="h-full w-full object-cover"
        />
      )}
      {loading && (
        <span role="status" aria-label="Loading video" className="pointer-events-none absolute inset-0 grid place-items-center bg-black/40">
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/25 border-t-violet" />
        </span>
      )}
    </div>
  );
}