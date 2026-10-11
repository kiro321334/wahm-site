import { site } from '@/lib/site';
import { pillars, tools } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function About() {
  return (<section id="about" className="mx-auto max-w-3xl px-5 py-14"><Heading eyebrow="About Wahm" title="Beyond Perception" bar />
    <p className="reveal mt-5 leading-relaxed text-white/75">Wahm is the power to perceive what is not physically present. We craft imagined worlds, emotions, and moments that feel real. We create what doesn’t exist. This is not just visual effects, this is Wahm.</p>
    <div className="card reveal mt-6 bg-[#15132b] p-5"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full border border-violet/50 bg-violet/20 font-bold text-[#b9a8ff]" aria-hidden="true">{site.founder[0]}</span><div><p className="font-bold">{site.founder}</p><p className="text-xs text-mute">Lead Visual Director & Editor</p></div></div>
      <p className="mt-4 text-sm leading-relaxed text-white/80">Led by {site.founder}, a video editor specializing in modern and cinematic styles, with 4 years of experience.</p>
      <ul className="mt-4 flex flex-wrap gap-2">{tools.map((t) => <li key={t} className="rounded-full border border-line bg-bg/60 px-3 py-1.5 text-xs">{t}</li>)}</ul></div>
    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">{pillars.map(([ic, t, s]) => <div key={t} className="card reveal p-4"><Icon n={ic} size={22} className="text-cyan" /><p className="mt-3 text-sm font-bold">{t}</p><p className="text-xs text-mute">{s}</p></div>)}</div></section>);
}
