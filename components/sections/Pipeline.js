import { pipeline } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Pipeline() {
  return (<section className="bg-[#0d0d12] px-5 py-14"><div className="mx-auto max-w-5xl"><Heading eyebrow="Production Rig" title="The Pipeline" />
    <div className="mt-7 grid gap-4 md:grid-cols-3">{pipeline.map(([k, t, d]) => <article key={t} className="card reveal flex gap-4 p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-black text-sm font-bold">{k}</span><div><h3 className="flex items-center gap-2 font-bold">{t}<i className="h-1.5 w-1.5 rounded-full bg-cyan" /></h3><p className="mt-2 text-xs leading-relaxed text-mute">{d}</p></div></article>)}</div></div></section>);
}
