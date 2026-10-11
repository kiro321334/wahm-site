import { nav } from '@/data/content';
import Image from 'next/image';
export default function Header() {
  return (<header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
    <a href="#top" aria-label="WAHM home" className="flex items-center gap-3"><Image src="/logo.jpg" alt="WAHM logo" width={36} height={36} priority className="h-9 w-9" /><span className="text-sm font-medium tracking-[.5em]">WAHM</span></a>
    <nav aria-label="Main" className="hidden gap-7 text-sm text-mute md:flex">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className="hover:text-white">{l}</a>)}</nav>
    <details className="relative md:hidden"><summary aria-label="Menu" className="grid h-10 w-10 cursor-pointer list-none place-items-end content-center gap-1.5"><i className="block h-0.5 w-6 bg-white" /><i className="block h-0.5 w-6 bg-white" /><i className="block h-0.5 w-3 bg-cyan" /></summary>
      <div className="absolute right-0 mt-3 grid w-48 gap-1 rounded-xl border border-line bg-panel p-2 text-sm shadow-xl">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 hover:bg-panel2">{l}</a>)}</div></details></div></header>);
}
