import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { brands } from "@/data/brands";

export const Route = createFileRoute("/directory")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: "Directory | The Jewels of India",
      },
      {
        name: "description",
        content:
          "Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora on The Jewels of India directory.",
      },
      {
        property: "og:title",
        content: "Directory | The Jewels of India",
      },
      {
        property: "og:description",
        content:
          "Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DirectoryPage,
});

const FILTERS = ["All", "Based in India", "Diaspora Brand", "Traditional", "Contemporary", "Bridal", "Fine Jewelry"];

function BrandLogo({ name, website, logo }: { name: string; website: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm border border-[color:var(--gold-border)] bg-[color:var(--ivory)] font-display text-xl text-[color:var(--gold-deep)]">
      {failed ? (
        name.charAt(0)
      ) : (
        <img
          src={logo ?? `https://www.google.com/s2/favicons?domain=${website}&sz=128`}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain p-1"
          onError={() => setFailed(true)}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth <= 16) setFailed(true);
          }}
        />
      )}
    </div>
  );
}

function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const q = query.trim().toLowerCase();
  const results = brands.filter((b) => {
    const pill = filter === "All" || b.category === filter || b.types.includes(filter);
    const text = !q || b.name.toLowerCase().includes(q) || b.types.some((t) => t.toLowerCase().includes(q)) || b.location.toLowerCase().includes(q);
    return pill && text;
  });
  return (
    <main
      className="min-h-screen"
      style={{ color: "var(--ink)" }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-5 sm:py-14">
        {/* Header */}
        <section className="flex flex-col items-center text-center">
          <h1 className="font-display text-4xl leading-tight text-[color:var(--ink)] sm:text-6xl md:text-7xl">
            Directory
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-px w-10"
            style={{ background: "var(--gold)" }}
          />
          <p className="mt-5 max-w-xl font-serif text-base text-[color:var(--text-secondary)] sm:text-lg">
            A curated space celebrating jewelry makers across India and its
            diaspora.
          </p>
          <div className="relative mt-8 w-full max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--gold)]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brands or jewelry type..."
              aria-label="Search brands"
              className="w-full rounded-full border border-[color:var(--gold-border)] bg-[color:var(--ivory)] py-3 pl-11 pr-4 font-serif text-sm text-[color:var(--ink)] placeholder:text-[color:var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[color:var(--gold)]"
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-1.5 font-serif text-xs uppercase tracking-[2px] transition-colors ${
                    active
                      ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-[color:var(--ink)]"
                      : "border-[color:var(--gold-border)] text-[color:var(--text-secondary)] hover:border-[color:var(--gold)]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </section>

        {results.length > 0 ? (
          <section className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {results.map((b) => (
              <article
                key={b.name}
                className="flex flex-col overflow-hidden rounded-md border border-[color:var(--gold-border)] bg-[color:var(--ivory)]"
              >
                <div className="flex h-20 items-center justify-center" style={{ background: "#E8D8B0" }}>
                  <BrandLogo name={b.name} website={b.website} />
                </div>
                <div className="flex flex-grow flex-col p-5">
                  <h2 className="font-serif text-xl font-bold text-[color:var(--ink)]">{b.name}</h2>
                  <p className="label-gold mt-1">{b.location}</p>
                  <p className="mt-3 flex-grow font-serif text-sm leading-relaxed text-[color:var(--text-secondary)]">
                    {b.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-[color:var(--gold)] px-2.5 py-0.5 text-[10px] uppercase tracking-[1.5px] text-[color:var(--gold-deep)]">
                      {b.category === "Diaspora Brand" ? "Diaspora" : "India"}
                    </span>
                    {b.types.map((t) => (
                      <span key={t} className="rounded-full border border-[color:var(--gold-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-[1.5px] text-[color:var(--gold-deep)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://${b.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-serif text-sm text-[color:var(--gold-deep)] hover:text-[color:var(--gold)]"
                  >
                    Visit website <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </section>
        ) : (
        <section className="flex flex-grow flex-col items-center justify-center py-16 text-center">
          <div className="relative h-28 w-28 sm:h-36 sm:w-36">
            <div className="diamond-glow absolute inset-0 rounded-full bg-[color:var(--gold)]/20 blur-2xl" />
            <div className="shimmer-bar pointer-events-none absolute inset-0 z-10 rounded-full" />

            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
            >
              <path
                d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
                fill="url(#diaFillDir)"
                opacity="0.35"
              />
              <path
                d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
                stroke="#C8A050"
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M12 52 L108 52"
                stroke="#C8A050"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path d="M40 37.5 L32 52" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 34 L60 52" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M80 37.5 L88 52" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M32 52 L60 112" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 52 L60 112" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M88 52 L60 112" stroke="#C8A050" strokeWidth="1.2" strokeLinecap="round" />
              <defs>
                <linearGradient id="diaFillDir" x1="60" y1="34" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F5EDD8" />
                  <stop offset="100%" stopColor="#C8A050" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="mt-8 font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
            No brands found
          </p>
        </section>
        )}
      </div>

      <style>{`
        .diamond-glow {
          animation: glowPulse 2.4s ease-in-out infinite;
        }
        .shimmer-bar {
          background: linear-gradient(
            110deg,
            transparent 35%,
            rgba(255, 255, 255, 0.85) 50%,
            transparent 65%
          );
          animation: shimmerSweep 2s linear infinite;
          mix-blend-mode: overlay;
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(0.92); opacity: 0.55; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(100%) skewX(-20deg); }
        }
      `}</style>
    </main>
  );
}

export default DirectoryPage;
