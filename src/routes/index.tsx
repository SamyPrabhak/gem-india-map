import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { GroupTabs } from "@/components/GroupTabs";
import { RegionPopup } from "@/components/RegionPopup";
import { jewelryData, type RegionGroup } from "@/data/jewelry";

const IndiaMap = lazy(() => import("@/components/IndiaMap"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jewels of India — Interactive Map of Regional Jewelry" },
      {
        name: "description",
        content:
          "Explore India's regional jewelry traditions. Click any state, union territory, or island to discover its signature ornaments.",
      },
      { property: "og:title", content: "Jewels of India — Interactive Map" },
      {
        property: "og:description",
        content: "An interactive political map celebrating India's jewelry heritage.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [group, setGroup] = useState<RegionGroup>("state");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -10%, #f3ecd9 0%, #fbf7ee 60%, #fbf7ee 100%)",
        color: "var(--ink)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <header className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[color:var(--gold-deep)]">
            An Interactive Heritage Map
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
            Jewels of <em className="text-[color:var(--gold-deep)]">India</em>
          </h1>
          <div className="mx-auto mt-5 h-px w-24 bg-[color:var(--gold)]" />
          <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic text-[color:var(--ink)]/75 sm:text-xl">
            From Cuttack's silver filigree to Kashmir's dejhoor — explore the
            ornaments that define every corner of the subcontinent.
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center gap-4">
          <GroupTabs active={group} onChange={setGroup} />
          <p className="text-center text-sm text-[color:var(--ink)]/60">
            Tap a highlighted region on the map to reveal its signature jewelry.
          </p>
        </div>

        <div className="mt-8">
          <Suspense
            fallback={
              <div className="flex h-[70vh] min-h-[500px] items-center justify-center rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] text-[color:var(--ink)]/50">
                Loading map…
              </div>
            }
          >
            <IndiaMap activeGroup={group} onSelect={setSelected} />
          </Suspense>
        </div>

        <footer className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-[color:var(--ink)]/50">
          Crafted with reverence for India's artisans
        </footer>
      </div>

      <RegionPopup
        info={selected ? jewelryData[selected] : null}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
