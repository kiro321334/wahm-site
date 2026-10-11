'use client';
import { site } from '@/lib/site';
import { projectTypes } from '@/data/content';
const inp = 'mt-2 w-full rounded-lg border border-line bg-panel2 px-4 py-3.5 text-base text-white placeholder:text-white/30 focus:border-violet focus:outline-none';
const lab = 'block text-[11px] font-medium uppercase tracking-[.14em] text-mute';
export default function ContactForm() {
  const send = (e) => { e.preventDefault(); const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nType: ${d.get('type')}\nLink/Brief: ${d.get('link') || '-'}\n\n${d.get('msg')}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry – ' + d.get('type'))}&body=${encodeURIComponent(body)}`; };
  return (<form onSubmit={send} className="mt-6 grid gap-5 rounded-2xl border border-line bg-panel p-5 shadow-[0_0_60px_-30px_rgba(124,92,255,.8)]">
    <div><label htmlFor="name" className={lab}>Your name</label><input id="name" name="name" required autoComplete="name" placeholder="e.g. Marcus Vance" className={inp} /></div>
    <div><label htmlFor="email" className={lab}>Email address</label><input id="email" name="email" required type="email" autoComplete="email" placeholder="marcus@production.com" className={inp} /></div>
    <div><label htmlFor="type" className={lab}>Project type</label><select id="type" name="type" className={inp}>{projectTypes.map((o) => <option key={o}>{o}</option>)}</select></div>
    <div><label htmlFor="link" className={lab}>Project link or brief</label><input id="link" name="link" placeholder="Frame.io, Google Drive, or Figma URL" className={inp} /></div>
    <div><label htmlFor="msg" className={lab}>Message / vision</label><textarea id="msg" name="msg" rows={3} placeholder="Describe the scene, pacing, target delivery date…" className={inp} /></div>
    <button type="submit" className="btn-p w-full uppercase tracking-widest">Send request</button></form>);
}
