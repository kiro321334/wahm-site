import { site, wa } from "@/lib/site";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaArtstation,
} from "react-icons/fa6";

const soc = [
  { label: "Instagram", href: site.instagram, Icon: FaInstagram },
  { label: "TikTok", href: site.tiktok, Icon: FaTiktok },
  { label: "ArtStation", href: site.artstation, Icon: FaArtstation },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-violet/60 px-5 pb-10 pt-16"
    >
      <Image
        src="/logo.jpg"
        alt=""
        aria-hidden="true"
        width={256}
        height={256}
        className="pointer-events-none absolute left-1/2 top-10 w-64 -translate-x-1/2 opacity-[.12] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="eyebrow">Initiate Collaboration</p>
        <h2 className="h2">Let’s create what doesn’t exist.</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-white/80">
          One message is all it takes. Tell us your idea and we’ll reply within
          24 hours.
        </p>

        {/* Main CTA */}

        <a
          href={wa("Hi WAHM, I’d like to discuss a project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-4 py-3.5 text-center text-xs font-bold tracking-wide text-white shadow-[0_0_40px_-8px] shadow-violet transition duration-300 hover:-translate-y-0.5 hover:brightness-110 xs:text-sm sm:mt-8 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>Start the conversation on WhatsApp</span>
        </a>

        {/* Social icons */}
        <ul className="mt-7 flex items-center justify-center gap-3">
          {soc.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer me"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-violet hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-mute">
          <i className="blink h-2 w-2 shrink-0 rounded-full bg-[#4ade80]" />
          Available for new projects
        </p>

        <footer className="mt-12 border-t border-line pt-8">
          <p className="flex items-center justify-center gap-3">
            <Image
              src="/logo.jpg"
              alt="WAHM logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-sm font-medium tracking-[.5em]">WAHM</span>
          </p>
          <p className="mt-2 text-[11px] font-bold tracking-[.3em] text-violet">
            BEYOND PERCEPTION.
          </p>
          <p lang="ar" dir="rtl" className="mt-2 text-xs text-mute">
            استوديو وهم — مؤثرات بصرية ومونتاج سينمائي
          </p>
          <div className="mt-5 flex items-center justify-between text-[11px] text-mute">
            <span>© 2026 WAHM STUDIO.</span>
            <a href="#top" className="text-[#a78bfa]">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
