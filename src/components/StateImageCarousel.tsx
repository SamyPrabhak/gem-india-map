import { useEffect, useState } from "react";
import { ImageOff, Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  query: string;
}

interface MediaItem {
  type?: string;
  title?: string;
  srcset?: { src: string; scale?: string }[];
}

const cache = new Map<string, string[]>();

async function fetchStateImages(query: string): Promise<string[]> {
  if (cache.has(query)) return cache.get(query)!;
  const title = encodeURIComponent(query.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/media-list/${title}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("media fetch failed");
  const data: { items?: MediaItem[] } = await res.json();
  const items = (data.items ?? []).filter((i) => i.type === "image");
  const urls: string[] = [];
  for (const it of items) {
    const src = it.srcset?.[0]?.src;
    if (!src) continue;
    // srcset entries are protocol-relative
    const abs = src.startsWith("http") ? src : `https:${src}`;
    // filter out icons / flags / tiny svgs
    if (/\.svg$/i.test(abs)) continue;
    if (/Commons-logo|Question_book|Ambox|Edit-clear|OOjs_UI|Symbol_/.test(abs)) continue;
    urls.push(abs);
    if (urls.length >= 5) break;
  }
  cache.set(query, urls);
  return urls;
}

export function StateImageCarousel({ query }: Props) {
  const [images, setImages] = useState<string[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setImages(null);
    setError(false);
    fetchStateImages(query)
      .then((imgs) => {
        if (!cancelled) setImages(imgs);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [query]);

  if (error || (images && images.length === 0)) {
    return (
      <div className="flex h-40 items-center justify-center gap-2 rounded-xl border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60 text-sm text-[color:var(--ink)]/50 sm:h-52">
        <ImageOff className="h-4 w-4" /> No images available
      </div>
    );
  }

  if (!images) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60 text-[color:var(--ink)]/50 sm:h-52">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={src}>
            <div className="overflow-hidden rounded-xl border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60">
              <img
                src={src}
                alt={`${query} — photo ${i + 1}`}
                loading="lazy"
                className="h-40 w-full object-cover sm:h-56 md:h-64"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-2 h-8 w-8 border-transparent bg-[color:var(--gold)] text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] hover:text-[color:var(--ivory)]" />
          <CarouselNext className="right-2 h-8 w-8 border-transparent bg-[color:var(--gold)] text-[color:var(--ink)] hover:bg-[color:var(--gold-deep)] hover:text-[color:var(--ivory)]" />
        </>
      )}
    </Carousel>
  );
}

export default StateImageCarousel;
