'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { projects, filters } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
import VideoCard from '@/components/ui/VideoCard';
const WorkModal = dynamic(() => import('@/components/ui/WorkModal'), { ssr: false });
const LIMIT = 6;

function Folder({ p, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      aria-label={`Open folder: ${p.title}`}
      className="group relative block w-full text-left"
    >
      <span className="relative block aspect-[4/3]">
        <span className="absolute left-0 top-0 h-7 w-2/5 rounded-t-xl border border-b-0 border-line bg-violet/80" />
        <span className="absolute inset-x-0 bottom-0 top-5 overflow-hidden rounded-2xl rounded-tl-none border border-line bg-panel">
          <Image
            src={p.cover}
            alt={`${p.title} – ${p.cat} folder cover by WAHM`}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <span className="tag absolute left-3 top-3">{p.cat}</span>
        </span>
        <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 rounded-b-2xl border border-line bg-black/60 px-4 py-3 backdrop-blur-md">
          <span className="min-w-0">
            <span className="block truncate font-bold leading-snug">{p.title}</span>
            <span className="text-xs text-mute">
              {p.count} {p.count === 1 ? 'video' : 'videos'}
            </span>
          </span>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet text-white transition group-hover:scale-110">
            <Icon n="play" size={16} fill />
          </span>
        </span>
      </span>
    </button>
  );
}

export default function Work() {
  const [f, setF] = useState('All');
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);

  const isAll = f === 'All';
  const list = projects.filter((p) => isAll || p.cat === f);

  // لما يختار كاتيجوري: نفرد فيديوهاتها مباشرة
  const videos = isAll
    ? []
    : list.flatMap((p) =>
        p.videos.map((src, i) => ({
          src,
          poster: p.posters[i],
          label: `${p.title} – video ${i + 1}`,
        })),
      );

  const total = isAll ? list.length : videos.length;
  const shownFolders = all ? list : list.slice(0, LIMIT);
  const shownVideos = all ? videos : videos.slice(0, LIMIT);
  const unit = isAll ? 'folders' : 'videos';

  return (
    <section id="work" className="bg-[#0d0d12] px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <Heading
          eyebrow="Selected Work"
          title="Craft in Motion"
          sub="Six styles. One standard."
          right={<span className="pb-1 text-sm text-mute">{total} {unit}</span>}
        />
        <div role="tablist" className="noscroll -mx-5 mt-6 flex gap-2 overflow-x-auto px-5">
          {filters.map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={f === k}
              className="chip"
              onClick={() => { setF(k); setAll(false); }}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isAll
            ? shownFolders.map((p) => <Folder key={p.id} p={p} onOpen={setOpen} />)
            : shownVideos.map((v) => <VideoCard key={v.src} {...v} />)}
        </div>

        {total > LIMIT && (
          <div className="mt-6 text-center">
            <button type="button" aria-expanded={all} onClick={() => setAll(!all)} className="btn-o mx-auto max-w-[16rem]">
              {all ? 'Show less' : `View more (${total - LIMIT} ${unit})`}
            </button>
          </div>
        )}
        {open && <WorkModal p={open} onClose={() => setOpen(null)} />}
      </div>
    </section>
  );
}