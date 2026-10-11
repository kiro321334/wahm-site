import { create } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Create() {
  return (<section id="create" className="mx-auto max-w-5xl px-5 py-14"><Heading eyebrow="Styles & Formats" title="What we create" />
    <div className="mt-7 grid gap-4 md:grid-cols-3">{create.map(([ic, t, d]) => <article key={t} className="card reveal p-5"><Icon n={ic} size={22} className="text-cyan" /><h3 className="mt-3 font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{d}</p></article>)}</div>
    <div className="mt-6 text-center"><a href="#contact" className="btn-o mx-auto max-w-[14rem]">Request a quote</a></div></section>);
}
