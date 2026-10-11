import Image from 'next/image';
import { heroStats } from '@/data/content';
export default function Hero() {
  return (<section className="flex h-svh min-h-[660px] flex-col pt-16"><div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col md:max-w-3xl">
    <div className="relative min-h-[200px] flex-1 overflow-hidden bg-[#08080c]">
      <Image src="/hero.jpg" alt="WAHM logo – Beyond Perception. VFX, CGI, Motion, Film studio" fill priority fetchPriority="high" sizes="(min-width:768px) 768px, 100vw" className="object-cover md:object-contain" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg to-transparent" />
    </div>
    <div className="px-5 pb-5 pt-4 text-center">
      <p className="fade-up text-[10px] tracking-[.25em] text-mute">WAHM | VFX · CGI · MOTION · FILM</p>
      <h1 className="fade-up d1 mt-2 text-[1.85rem] font-bold leading-[1.1] md:text-5xl">The eye sees what is there. <span className="grad-text">Wahm perceives what isn’t.</span></h1>
      <p className="fade-up d2 mt-2 text-sm text-mute">We create what doesn’t exist.</p>
      <dl className="fade-up d3 mt-4 grid grid-cols-3 divide-x divide-line border-y border-line py-2.5">{heroStats.map(([v, l]) => <div key={l}><dt className="font-bold">{v}</dt><dd className="text-[9px] tracking-[.18em] text-mute">{l}</dd></div>)}</dl>
      <div className="fade-up d4 mt-4 grid grid-cols-2 gap-3"><a href="#work" className="btn-p sweep relative overflow-hidden">View work ↓</a><a href="#contact" className="btn-o">Start a project</a></div></div></div></section>);
}
