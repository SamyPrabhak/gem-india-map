import { useEffect, useState } from "react";
import { Gem, Loader2 } from "lucide-react";
import { jewelryPieceWiki } from "@/data/jewelryPieceWiki";

interface Props {
  regionName: string;
  /** Specific style name (e.g. "Kundan", "Vaddanam"). Falls back to region mapping. */
  styleName?: string;
}

const cache = new Map<string, string | null>();

async function fetchWikiImage(title: string): Promise<string | null> {
  if (cache.has(title)) return cache.get(title)!;
  const enc = encodeURIComponent(title.replace(/ /g, "_"));
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${enc}`);
    if (!res.ok) {
      cache.set(title, null);
      return null;
    }
    const data: { originalimage?: { source: string }; thumbnail?: { source: string } } =
      await res.json();
    const url = data.originalimage?.source ?? data.thumbnail?.source ?? null;
    cache.set(title, url);
    return url;
  } catch {
    cache.set(title, null);
    return null;
  }
}

export function JewelryPieceImage({ regionName, styleName }: Props) {
  const regionRef = jewelryPieceWiki[regionName] ?? null;
  const label = styleName ?? regionRef?.label ?? "Traditional Jewellery";
  // Build ordered list of Wikipedia titles to try.
  const candidates: string[] = [];
  if (styleName) {
    candidates.push(styleName);
    candidates.push(`${styleName} (jewellery)`);
    candidates.push(`${styleName} jewellery`);
  }
  if (regionRef?.wikiTitle) candidates.push(regionRef.wikiTitle);

  const [src, setSrc] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    if (candidates.length === 0) {
      setSrc(null);
      return;
    }
    setSrc(undefined);
    (async () => {
      for (const title of candidates) {
        const url = await fetchWikiImage(title);
        if (cancelled) return;
        if (url) {
          setSrc(url);
          return;
        }
      }
      if (!cancelled) setSrc(null);
    })();
    return () => {
      cancelled = true;
    };
  }, [candidates.join("|")]);


  return (
    <figure className="mt-3 overflow-hidden rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--ivory-deep)]/60">
      <div className="relative aspect-[16/9] w-full bg-[color:var(--ivory-deep)]">
        {src === undefined ? (
          <div className="absolute inset-0 flex items-center justify-center text-[color:var(--ink)]/40">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : src ? (
          <img
            src={src}
            alt={label ? `${label} — traditional jewellery of ${regionName}` : regionName}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setSrc(null)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[color:var(--gold)]/10 to-[color:var(--gold)]/25 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--gold)]/25">
              <Gem className="h-7 w-7 text-[color:var(--gold-deep)]" />
            </div>
            <p className="px-4 font-serif text-sm italic text-[color:var(--ink)]/60">
              Image of {label ?? "this piece"} coming soon
            </p>
          </div>
        )}
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink)]/55 sm:px-4">
        <span className="truncate">{label ?? "Traditional Jewellery"}</span>
        <span className="shrink-0 normal-case tracking-normal text-[11px] text-[color:var(--ink)]/50">
          {src
            ? "Source: Wikimedia Commons"
            : candidates.length > 0
              ? "Source: pending curation"
              : "No credible image sourced"}
        </span>
      </figcaption>
    </figure>
  );
}

export default JewelryPieceImage;
