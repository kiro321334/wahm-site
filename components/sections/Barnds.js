import Heading from "@/components/ui/Heading";

const CLIENTS = [
  {
    name: "Seif Sayko",
    platform: "YouTube",
    url: "https://www.youtube.com/@SEIFSAYKO/videos",
  },
  {
    name: "Moheb",
    platform: "YouTube",
    url: "https://www.youtube.com/@MOHEB16",
  },
  {
    name: "Hamod",
    platform: "YouTube",
    url: "https://www.youtube.com/@Hamod-055",
  },
  {
    name: "Abdullah The Architect",
    platform: "YouTube",
    url: "https://www.youtube.com/@abdullahthe_architect/videos",
  },
  {
    name: "Galal",
    platform: "YouTube",
    url: "https://www.youtube.com/@galalexe/videos",
  },
  {
    name: "Ahmed Rizk",
    platform: "YouTube",
    url: "https://www.youtube.com/@Ahmed_Rizk_SHAFRA",
  },
  {
    name: "M. Ghandour",
    platform: "TikTok",
    url: "https://www.tiktok.com/@m.ghandour1?lang=ar",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ClientCard({ client }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-56 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
    >
      {client.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.avatar}
          alt={client.name}
          width={44}
          height={44}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
        />
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white/80 transition group-hover:text-white">
          {initials(client.name)}
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-white">
          {client.name}
        </span>
        <span className="block text-xs text-mute">{client.platform}</span>
      </span>
    </a>
  );
}

export default function Barnds() {
  // Each group holds the list twice so the strip always fills wide screens.
  const group = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-14">
      <div className="mx-auto max-w-3xl px-5">
        <Heading eyebrow="Trusted By" title="Creators I’ve worked with." />
        <p className="mt-4 text-sm text-mute">
          Motion and video work delivered for creators across YouTube and
          TikTok.
        </p>
      </div>

      <div
        className="clients-marquee relative mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="clients-track flex w-max">
          {[0, 1].map((g) => (
            <div
              key={g}
              className="flex shrink-0 gap-4 pr-4"
              aria-hidden={g === 1 ? true : undefined}
            >
              {group.map((client, i) => (
                <ClientCard key={`${g}-${i}`} client={client} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track { animation: clients-scroll 40s linear infinite; }
        .clients-marquee:hover .clients-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .clients-track { animation: none; }
          .clients-marquee { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
