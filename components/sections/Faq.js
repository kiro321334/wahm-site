import { faqs } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export default function Faq() {
  return (<section id="faq" className="bg-[#0d0d12] px-5 py-14"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><div className="mx-auto max-w-3xl"><Heading eyebrow="Common Inquiries" title="Questions" />
    <div className="mt-7 grid gap-3">{faqs.map(([q, a], i) => (
      <details key={q} open={i === 0} className="group rounded-2xl border border-white/40 bg-panel open:border-cyan/50"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold">{q}<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-panel2"><Icon n="plus" size={13} className="group-open:hidden" /><Icon n="minus" size={13} className="hidden text-cyan group-open:block" /></span></summary>
        <p className="mx-5 border-t border-line py-4 text-sm leading-relaxed text-mute">{a}</p></details>))}</div></div></section>);
}
