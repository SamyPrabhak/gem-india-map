import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";

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

type Brand = {
  name: string;
  badge: "Diaspora" | "India";
  location: string;
  description: string;
  tags: string[];
  url: string;
};

const FILTERS = [
  "All",
  "Based in India",
  "Diaspora Brand",
  "Traditional",
  "Contemporary",
  "Bridal",
] as const;

const BRANDS: Brand[] = [
  {
    name: "Amara Jewels",
    badge: "Diaspora",
    location: "New Jersey, USA",
    description:
      "Handcrafted kundan and polki bridal sets made in small batches, blending Mughal-era techniques with modern silhouettes.",
    tags: ["Bridal", "Kundan", "Polki"],
    url: "#",
  },
  {
    name: "Ratnavali Studio",
    badge: "India",
    location: "Jaipur, Rajasthan",
    description:
      "A family workshop specializing in traditional meenakari and jadau pieces, working directly with local artisan clusters.",
    tags: ["Traditional", "Meenakari", "Jadau"],
    url: "#",
  },
  {
    name: "Tara & Co.",
    badge: "Diaspora",
    location: "London, UK",
    description:
      "Contemporary temple-inspired jewelry in recycled gold, designed for everyday wear and heirloom gifting.",
    tags: ["Contemporary", "Temple", "Bridal"],
    url: "#",
  },
];

function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visibleBrands = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BRANDS.filter((brand) => {
      const matchesFilter =
        filter === "All" ||
        (filter === "Based in India" && brand.badge === "India") ||
        (filter === "Diaspora Brand" && brand.badge === "Diaspora") ||
        brand.tags.includes(filter);
      const matchesQuery =
        q.length === 0 ||
        [brand.name, brand.location, brand.description, ...brand.tags]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--ivory)", color: "var(--ink)" }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-5 sm:py-14">
        {/* Header */}
        <section className="flex flex-col items-center text-center">
          <p className="label-gold">Discover</p>
          <h1 className="mt-3 font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl md:text-5xl">
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

        {/* Card grid */}
        <section className="mt-10 grid flex-grow content-start gap-5 pb-4 text-left sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visibleBrands.map((brand) => (
            <article
              key={brand.name}
              className="flex flex-col overflow-hidden rounded-lg border border-[color:var(--gold-border)] bg-card transition hover:border-[color:var(--gold)]"
            >
              {/* Logo image area */}
              <div
                className="flex h-20 items-center justify-center"
                style={{ background: "#E8D8B0" }}
              >
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-sm border border-[color:var(--gold)] bg-card/60"
                >
                  <span
                    className="text-lg leading-none"
                    style={{ color: "var(--gold)" }}
                  >
                    ✦
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-lg leading-snug text-[color:var(--ink)] sm:text-xl">
                    {brand.name}
                  </h2>
                  <span className="shrink-0 rounded-full border border-[color:var(--gold-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-[1.5px] text-[color:var(--gold)]">
                    {brand.badge}
                  </span>
                </div>

                <p className="label-gold">{brand.location}</p>

                <p className="font-serif text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {brand.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--gold-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-[1.5px] text-[color:var(--gold)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={brand.url}
                  className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[color:var(--gold)] transition hover:text-[color:var(--gold-deep)]"
                >
                  Visit website
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          {visibleBrands.length === 0 && (
            <p className="col-span-full py-12 text-center font-serif text-sm text-[color:var(--text-muted)]">
              No brands match your search yet — check back soon.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default DirectoryPage;
