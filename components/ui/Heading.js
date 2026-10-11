export default function Heading({ eyebrow, title, sub, bar = false, right }) {
  return (<div className="reveal flex items-end justify-between gap-4"><div><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2>{bar && <span className="mt-3 block h-0.5 w-14 bg-gradient-to-r from-violet to-cyan" />}{sub && <p className="sub">{sub}</p>}</div>{right}</div>);
}
