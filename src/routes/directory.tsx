import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/directory")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: "Indian Jewelry Directory | The Jewels of India",
      },
      {
        name: "description",
        content:
          "Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora on The Jewels of India directory.",
      },
      {
        property: "og:title",
        content: "Indian Jewelry Directory | The Jewels of India",
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
          <h1 className="font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl md:text-5xl">
            Indian Jewelry Directory
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-px w-10"
            style={{ background: "var(--gold)" }}
          />
          <p className="mt-5 max-w-xl font-serif text-base text-[color:var(--text-secondary)] sm:text-lg">
            Independent brands, small businesses and diaspora designers keeping
            India's jewelry traditions alive.
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
      </div>
    </main>
  );
}

export default DirectoryPage;
