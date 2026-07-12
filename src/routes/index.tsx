import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { GroupTabs } from "@/components/GroupTabs";
import { RegionPopup } from "@/components/RegionPopup";
import { SplashScreen } from "@/components/SplashScreen";
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

function MapFallback() {
  return (
    <div className="flex h-[55vh] min-h-[360px] items-center justify-center rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] text-[color:var(--ink)]/50 sm:h-[65vh] sm:min-h-[480px] md:h-[70vh] md:min-h-[540px]">
      Loading map…
    </div>
  );
}

function Index() {
  const [group, setGroup] = useState<RegionGroup>("state");
  const [selected, setSelected] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
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
            An Interactive Jewelry Map
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-6xl md:text-7xl">
            Jewels of <em className="text-[color:var(--gold-deep)]">India</em>
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-[color:var(--gold)] sm:mt-5 sm:w-24" />
          <p className="mx-auto mt-4 max-w-xl text-base italic text-[color:var(--ink)]/75 sm:mt-5 sm:text-lg md:text-3xl font-serif">
            ​Discover the vast jewelry ecosystem across India
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center gap-4">
          <GroupTabs active={group} onChange={setGroup} />
          <p className="text-center text-sm text-[color:var(--ink)]/60">
            Tap a highlighted region on the map to reveal its signature jewelry.
          </p>
        </div>

        <div className="mt-8">
          {mounted ? (
            <Suspense fallback={<MapFallback />}>
              <IndiaMap activeGroup={group} onSelect={setSelected} onGroupChange={setGroup} />
            </Suspense>
          ) : (
            <MapFallback />
          )}
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
    </>
  );
}
