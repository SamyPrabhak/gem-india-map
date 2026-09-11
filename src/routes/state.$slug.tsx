import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Gem } from "lucide-react";
import { getRegionBySlug } from "@/lib/regionSlug";
import { getCsvRegion } from "@/data/csvJewelry";
import { ImageLightbox } from "@/components/ImageLightbox";

export const Route = createFileRoute("/state/$slug")({
  loader: ({ params }) => {
    const info = getRegionBySlug(params.slug);
    if (!info) throw notFound();
    return { name: info.name };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Region not found — The Jewels of India" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} Jewellery — The Jewels of India`;
    const description = `Famous traditional jewellery styles of ${loaderData.name}, with images, descriptions and sources.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: RegionNotFound,
  component: StatePage,
});

function RegionNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-[color:var(--ink)]">Region not found</h1>
      <Link to="/" className="mt-6 inline-block text-[color:var(--gold-deep)] underline">
        Back to Map
      </Link>
    </main>
  );
}

function StatePage() {
  const { slug } = Route.useParams();
  const info = getRegionBySlug(slug)!;
  const csv = getCsvRegion(info.name);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const groupLabel =
    info.group === "state" ? "State" : info.group === "ut" ? "Union Territory" : "Islands";

  const pieces = csv
    ? csv.pieces.map((p) => ({
        name: p.name,
        description: p.description,
        imageUrl: p.imageUrl,
        source: p.source,
      }))
    : info.styles.map((s) => ({
        name: s.name,
        description: s.description,
        imageUrl: s.imageUrl ?? "",
        source: s.sourceLabel ?? "",
      }));

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -10%, #f3ecd9 0%, #fbf7ee 60%, #fbf7ee 100%)",
        color: "var(--ink)",
      }}
    >
      <div className="mx-auto max-w-7xl px-[11px] py-6 sm:px-[17px] sm:py-10">
        <Link
          to="/"
          search={{ region: slug }}
          className="inline-flex items-center gap-2 text-sm text-[color:var(--ink)]/60 transition hover:text-[color:var(--gold-deep)]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Map
        </Link>

        <header className="mt-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-deep)]">
            {groupLabel}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-6xl">{info.name}</h1>
          <p className="mt-2 text-sm text-[color:var(--ink)]/60 sm:text-base">
            Capital: <span className="text-[color:var(--ink)]/80">{info.capital}</span>
          </p>
          <div className="mt-5 h-px w-24 bg-[color:var(--gold)]" />
        </header>

        <section className="mt-8">
          <h2 className="font-serif text-2xl text-[color:var(--ink)] sm:text-3xl">
            Famous Jewellery Styles
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-[color:var(--gold)]/30 bg-white/70 p-5 shadow-sm transition hover:border-[color:var(--gold)]/60 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[color:var(--gold)]/15">
                    <Gem className="h-5 w-5 text-[color:var(--gold-deep)]" />
                  </div>
                  <h3 className="min-w-0 flex-1 font-serif text-xl text-[color:var(--ink)]">
                    {p.name}
                  </h3>
                </div>

                <figure className="mt-4">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#D4AE4A]">
                    {p.imageUrl ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setLightbox({
                              src: p.imageUrl,
                              alt: `${p.name} — traditional jewellery of ${info.name}`,
                            })
                          }
                          className="block h-full w-full"
                          aria-label={`Open image of ${p.name}`}
                        >
                          <img
                            src={p.imageUrl}
                            alt={`${p.name} — traditional jewellery of ${info.name}`}
                            loading="lazy"
                            className="h-full w-full cursor-zoom-in object-cover"
                          />
                        </button>
                        <span
                          className="pointer-events-none absolute bottom-1.5 right-2 rounded bg-black/35 px-1.5 py-0.5 leading-none text-[#D4AE4A]"
                          style={{ fontSize: "11px" }}
                        >
                          Tap to enlarge
                        </span>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[color:var(--ivory-deep)] text-center font-serif text-sm italic text-[#D4AE4A]">
                        Image coming soon
                      </div>
                    )}
                  </div>

                  {p.source ? (
                    <figcaption className="mt-2 text-center text-[11px] text-[color:var(--ink)]/50">
                      Source:{" "}
                      {/^https?:\/\//i.test(p.source) ? (
                        <a
                          href={p.source}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-[color:var(--gold)]/50"
                        >
                          {p.source.replace(/^https?:\/\/(www\.)?/i, "").split("/")[0]}
                        </a>
                      ) : (
                        <span>{p.source}</span>
                      )}
                    </figcaption>
                  ) : null}
                </figure>

                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/75">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <ImageLightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? info.name}
        onClose={() => setLightbox(null)}
      />
    </main>
  );
}
