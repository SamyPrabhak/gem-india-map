import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

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

const FILTERS = [
  "All",
  "Based in India",
  "Diaspora Brand",
  "Traditional",
  "Contemporary",
  "Bridal",
] as const;

function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--ivory)", color: "var(--ink)" }}
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
            diaspora, launching soon.
          </p>
        </section>

        {/* Search + filters */}
        <section className="mt-8 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-xl">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-muted)]"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brands, jewelry type, or state..."
              className="w-full rounded-full border border-[color:var(--gold-border)] bg-card py-2.5 pl-11 pr-4 font-serif text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--gold)]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={
                    "rounded-full border px-3.5 py-1.5 font-serif text-xs transition sm:text-[13px] " +
                    (active
                      ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-[color:var(--ivory)]"
                      : "border-[color:var(--gold-border)] bg-transparent text-[color:var(--text-secondary)] hover:border-[color:var(--gold)] hover:text-[color:var(--ink)]")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </section>

        {/* Coming Soon */}
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
            Coming Soon
          </p>
        </section>
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
