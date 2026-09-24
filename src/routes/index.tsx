import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { GroupTabs } from "@/components/GroupTabs";
import { RegionPopup } from "@/components/RegionPopup";
import { SplashScreen } from "@/components/SplashScreen";
import { jewelryData, type RegionGroup } from "@/data/jewelry";
import { getRegionKeyBySlug } from "@/lib/regionSlug";

interface HomeSearch {
  region?: string;
}

const IndiaMap = lazy(() => import("@/components/IndiaMap"));

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  validateSearch: (search): HomeSearch => ({
    region: typeof search.region === "string" ? search.region : undefined,
  }),
  head: () => ({
    meta: [
      { title: "The Jewels of India | Interactive Map of Regional Indian Jewelry Traditions" },
      {
        name: "description",
        content:
          "Explore India's jewelry heritage region by region. The Jewels of India is an interactive map covering all 36 states and union territories, from Kundan in Rajasthan to Temple jewelry in Tamil Nadu.",
      },
      { property: "og:title", content: "The Jewels of India | Interactive Map of Regional Indian Jewelry Traditions" },
      {
        property: "og:description",
        content:
          "Explore India's jewelry heritage region by region. The Jewels of India is an interactive map covering all 36 states and union territories, from Kundan in Rajasthan to Temple jewelry in Tamil Nadu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content:
          "https://thejewelsofindia.lovable.app/__l5e/assets-v1/fc345b19-c666-481a-849a-1a8be26c9898/site-preview.png",
      },
      {
        name: "twitter:image",
        content:
          "https://thejewelsofindia.lovable.app/__l5e/assets-v1/fc345b19-c666-481a-849a-1a8be26c9898/site-preview.png",
      },
    ],
  }),
  component: Index,
});

function MapFallback() {
  return (
    <div className="flex h-[55vh] min-h-[360px] items-center justify-center rounded-2xl border border-[color:var(--gold-border)] bg-[color:var(--ivory)] text-[color:var(--text-muted)] sm:h-[65vh] sm:min-h-[480px] md:h-[70vh] md:min-h-[540px]">
      Loading map…
    </div>
  );
}

function Index() {
  const [group, setGroup] = useState<RegionGroup>("state");
  const [selected, setSelected] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/" });

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("replay-splash") === "1") {
      window.sessionStorage.removeItem("replay-splash");
      setSplashDone(false);
    }
  }, []);

  useEffect(() => {
    if (!search.region) return;
    const key = jewelryData[search.region]
      ? search.region
      : getRegionKeyBySlug(search.region);
    if (key) setSelected(key);
  }, [search.region]);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <main
        className="min-h-screen"
        style={{
          color: "var(--ink)",
        }}
      >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:py-16">
        <header className="text-center">
          <p className="label-gold">
            An Interactive Jewelry Map
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl md:text-7xl">
            The Jewels of <span className="text-[color:var(--gold)]">India</span>
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[color:var(--text-secondary)] sm:mt-5 sm:text-base md:text-lg">
            Discover the craftsmanship, materials, and cultural stories behind jewelry from every region of India — click any state to explore.
          </h2>
        </header>

        <div className="mt-10 flex flex-col items-center gap-4">
          <GroupTabs active={group} onChange={setGroup} />
          <p className="text-center text-sm text-[color:var(--text-muted)]">
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

        <footer className="label-gold mt-12 text-center">
          Crafted with reverence for India's artisans
        </footer>
      </div>

      <RegionPopup
        info={selected ? jewelryData[selected] : null}
        onClose={() => {
          setSelected(null);
          navigate({ to: "/", search: {} });
        }}
      />
    </main>
    </>
  );
}
