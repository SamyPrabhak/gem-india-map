import { useEffect, useState } from "react";
import { Gem, Loader2 } from "lucide-react";

interface Props {
  region: string;
}

// Map each region → a Wikipedia article title for the specific jewelry piece
// named in that region's description. Article images on Wikipedia are hosted
// on Wikimedia Commons and frequently originate from museum collections
// (V&A, Met, National Museum, Google Arts & Culture partners).
// Regions absent from this map (or whose fetch fails) render the placeholder.
const PIECE_ARTICLE: Record<string, string> = {
  "Andhra Pradesh": "Filigree",
  Assam: "Jewellery of Assam",
  Bihar: "Lac",
  Chhattisgarh: "Dhokra",
  Goa: "Filigree",
  Gujarat: "Kundan",
  Haryana: "Anklet",
  "Himachal Pradesh": "Chandra Haar",
  "Jammu and Kashmir": "Dejhoor",
  Karnataka: "Temple jewellery",
  Kerala: "Jewellery of Kerala",
  "Madhya Pradesh": "Gond people",
  Maharashtra: "Kolhapuri Saaj",
  Meghalaya: "Coral",
  Odisha: "Filigree",
  Orissa: "Filigree",
  Punjab: "Chooda (bangles)",
  Rajasthan: "Kundan",
  Sikkim: "Turquoise",
  "Tamil Nadu": "Temple jewellery",
  Telangana: "Basra pearl",
  "Uttar Pradesh": "Bidriware",
  Uttaranchal: "Nose piercing",
  Uttarakhand: "Nose piercing",
  "West Bengal": "Shola",
  Delhi: "Kundan",
  Puducherry: "Cameo (carving)",
  // Regions below intentionally omitted (no reliably-museum-sourced Wikipedia
  // image for the specific piece) so they fall back to the placeholder:
  // Arunachal Pradesh, Jharkhand, Manipur, Mizoram, Nagaland, Tripura,
  // Chandigarh, Dadra & Nagar Haveli, Daman & Diu, Andaman & Nicobar, Lakshadweep.
};

const cache = new Map<string, string | null>();

async function fetchArticleImage(title: string): Promise<string | null> {
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
    const src = data.originalimage?.source ?? data.thumbnail?.source ?? null;
    cache.set(title, src);
    return src;
  } catch {
    cache.set(title, null);
    return null;
  }
}

function Placeholder() {
  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-dashed border-[color:var(--gold)]/40 bg-[color:var(--ivory-deep)]/60 text-[color:var(--ink)]/40">
      <div className="flex flex-col items-center gap-2 text-center">
        <Gem className="h-8 w-8 text-[color:var(--gold-deep)]/60" />
        <p className="text-xs italic">No museum image available</p>
      </div>
    </div>
  );
}

export function JewelryPieceImage({ region }: Props) {
  const title = PIECE_ARTICLE[region];
  const [src, setSrc] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    if (!title) {
      setSrc(null);
      return;
    }
    setSrc(undefined);
    fetchArticleImage(title).then((s) => {
      if (!cancelled) setSrc(s);
    });
    return () => {
      cancelled = true;
    };
  }, [title]);

  if (!title || src === null) return <Placeholder />;

  if (src === undefined) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60 text-[color:var(--ink)]/50">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  return (
    <figure className="w-full">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--ivory-deep)]/60">
        <img
          src={src}
          alt={`${region} traditional jewelry piece`}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setSrc(null)}
        />
      </div>
      <figcaption className="mt-1.5 text-right text-[10px] italic text-[color:var(--ink)]/50">
        Source: Wikimedia Commons
      </figcaption>
    </figure>
  );
}

export default JewelryPieceImage;
