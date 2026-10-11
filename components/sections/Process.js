import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Process() {
  return (<section id="process" className="mx-auto max-w-3xl px-5 py-14"><Heading eyebrow="Methodology" title="How we work" />
    <ol className="relative mt-8 grid gap-8"><span aria-hidden="true" className="absolute bottom-4 left-[17px] top-4 w-0.5 bg-gradient-to-b from-violet via-cyan to-violet" />
      {steps.map(([t, s, d], i) => <li key={t} className="reveal relative flex gap-4"><span className="z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet text-xs font-bold shadow-[0_0_18px_rgba(124,92,255,.7)] ring-4 ring-bg">0{i + 1}</span>
        <div><h3 className="font-bold">{t}</h3><p className="text-xs font-semibold text-cyan">{s}</p><p className="mt-1 text-sm leading-relaxed text-mute">{d}</p></div></li>)}</ol></section>);
}
