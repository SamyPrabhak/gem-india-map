import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const FILTERS = [
  "All",
  "Small Business",
  "Diaspora Brands",
  "Upcoming Designers",
  "Traditional",
  "Contemporary",
] as const;

type Filter = (typeof FILTERS)[number];

interface Brand {
  id: string;
  name: string;
  location: string;
  description: string;
  jewelryType: string;
  website: string;
  category: Filter;
}

const PLACEHOLDER_BRANDS: Brand[] = [
  {
    id: "1",
    name: "Kundan Kala",
    location: "Jaipur, Rajasthan",
    description:
      "A family-run studio specializing in hand-polished Kundan and Meenakari pieces inspired by royal Rajasthani archives.",
    jewelryType: "Kundan, Meenakari",
    website: "https://example.com/kundankala",
    category: "Traditional",
  },
  {
    id: "2",
    name: "Indus Modern",
    location: "Mumbai, Maharashtra / New York, USA",
    description:
      "Contemporary silhouettes rooted in South Asian symbolism, designed for the global Indian diaspora.",
    jewelryType: "Contemporary Fine Jewelry",
    website: "https://example.com/indusmodern",
    category: "Diaspora Brands",
  },
  {
    id: "3",
    name: "Ettika Atelier",
    location: "Bengaluru, Karnataka",
    description:
      "An emerging designer reinterpreting temple motifs into lightweight, wearable art for everyday elegance.",
    jewelryType: "Temple-Inspired Contemporary",
    website: "https://example.com/ettikaatelier",
    category: "Upcoming Designers",
  },
];

export const Route = createFileRoute("/directory")({
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

function DirectoryPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? PLACEHOLDER_BRANDS
      : PLACEHOLDER_BRANDS.filter((b) => b.category === activeFilter);

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -10%, #f3ecd9 0%, #fbf7ee 60%, #fbf7ee 100%)",
        color: "var(--ink)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:py-16">
        <header className="text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-deep)] sm:text-xs sm:tracking-[0.4em]">
            Directory
          </p>
          <h1 className="mt-3 font-serif text-2xl leading-tight sm:text-4xl md:text-5xl">
            Indian Jewelry Directory
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[color:var(--ink)]/70 sm:mt-5 sm:text-base md:text-lg">
            Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora
          </h2>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition sm:text-sm ${
                  isActive
                    ? "bg-[color:var(--gold)] text-[color:var(--ink)] shadow"
                    : "border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] text-[color:var(--ink)]/70 hover:text-[color:var(--ink)]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((brand) => (
            <article
              key={brand.id}
              className="flex flex-col rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl font-semibold leading-tight">
                  {brand.name}
                </h3>
                <span className="shrink-0 rounded-full border border-[color:var(--gold)]/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[color:var(--gold-deep)]">
                  {brand.jewelryType}
                </span>
              </div>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-wider text-[color:var(--gold-deep)]">
                {brand.location}
              </p>
              <p className="mt-4 flex-grow font-sans text-sm leading-relaxed text-[color:var(--ink)]/80">
                {brand.description}
              </p>
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 font-sans text-sm font-medium text-[color:var(--gold-deep)] underline-offset-4 hover:underline"
              >
                Visit website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-sans text-sm text-[color:var(--ink)]/60">
            No brands match this filter yet. Check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
