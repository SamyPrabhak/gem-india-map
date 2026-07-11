import { useEffect, useState } from "react";
import { ImageOff, Loader2, X } from "lucide-react";
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

const MAX_IMAGES = 3;
const cache = new Map<string, string[]>();

// Curated Wikipedia article titles per region — we fetch the hero image
// (originalimage / thumbnail) from each summary to guarantee scenic photos
// of well-known places instead of random maps/flags from the state article.
const LANDMARKS: Record<string, string[]> = {
  "Andhra Pradesh": ["Tirumala Venkateswara Temple", "Araku Valley", "Borra Caves"],
  "Arunachal Pradesh": ["Tawang Monastery", "Sela Pass", "Ziro Valley"],
  Assam: ["Kaziranga National Park", "Kamakhya Temple", "Majuli"],
  Bihar: ["Mahabodhi Temple", "Nalanda mahavihara", "Vikramshila"],
  Chhattisgarh: ["Chitrakote Falls", "Tirathgarh Falls", "Bastar district"],
  Goa: ["Basilica of Bom Jesus", "Dudhsagar Falls", "Palolem Beach"],
  Gujarat: ["Rann of Kutch", "Somnath temple", "Statue of Unity"],
  Haryana: ["Sultanpur National Park", "Kurukshetra", "Pinjore Gardens"],
  "Himachal Pradesh": ["Rohtang Pass", "Shimla", "Manali"],
  "Jammu and Kashmir": ["Dal Lake", "Gulmarg", "Pahalgam"],
  "Jammu & Kashmir": ["Dal Lake", "Gulmarg", "Pahalgam"],
  Jharkhand: ["Hundru Falls", "Betla National Park", "Dassam Falls"],
  Karnataka: ["Mysore Palace", "Hampi", "Kodagu district"],
  Kerala: ["Alleppey", "Munnar", "Padmanabhaswamy Temple"],
  "Madhya Pradesh": ["Khajuraho Group of Monuments", "Sanchi Stupa", "Bhimbetka rock shelters"],
  Maharashtra: ["Gateway of India", "Ajanta Caves", "Ellora Caves"],
  Manipur: ["Loktak Lake", "Kangla Fort", "Shirui Kashong Peak"],
  Meghalaya: ["Nohkalikai Falls", "Cherrapunji", "Living root bridge"],
  Mizoram: ["Aizawl", "Phawngpui", "Reiek"],
  Nagaland: ["Kohima", "Hornbill Festival", "Dzükou Valley"],
  Odisha: ["Konark Sun Temple", "Jagannath Temple, Puri", "Chilika Lake"],
  Punjab: ["Golden Temple", "Wagah", "Jallianwala Bagh"],
  Rajasthan: ["Hawa Mahal", "Amer Fort", "Jaisalmer Fort"],
  Sikkim: ["Kangchenjunga", "Tsomgo Lake", "Rumtek Monastery"],
  "Tamil Nadu": ["Meenakshi Temple", "Brihadeeswarar Temple", "Marina Beach"],
  Telangana: ["Charminar", "Golconda Fort", "Ramoji Film City"],
  Tripura: ["Ujjayanta Palace", "Neermahal", "Unakoti"],
  "Uttar Pradesh": ["Taj Mahal", "Varanasi", "Fatehpur Sikri"],
  Uttarakhand: ["Nainital", "Kedarnath Temple", "Valley of Flowers National Park"],
  "West Bengal": ["Victoria Memorial, Kolkata", "Howrah Bridge", "Darjeeling"],
  Chandigarh: ["Rock Garden of Chandigarh", "Sukhna Lake", "Capitol Complex, Chandigarh"],
  "Dadra & Nagar Haveli": ["Silvassa", "Dadra and Nagar Haveli", "Vanganga Lake"],
  "Daman & Diu": ["Diu Fort", "Nagoa Beach", "Daman, India"],
  Delhi: ["India Gate", "Red Fort", "Qutub Minar"],
  Puducherry: ["Auroville", "Promenade Beach, Pondicherry", "Rock Beach"],
  "Andaman & Nicobar Islands": ["Radhanagar Beach", "Cellular Jail", "Havelock Island"],
  Lakshadweep: ["Agatti Island", "Bangaram Island", "Kavaratti"],
};

async function fetchSummaryImage(title: string): Promise<string | null> {
  const enc = encodeURIComponent(title.replace(/ /g, "_"));
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${enc}`);
    if (!res.ok) return null;
    const data: { originalimage?: { source: string }; thumbnail?: { source: string } } =
      await res.json();
    return data.originalimage?.source ?? data.thumbnail?.source ?? null;
  } catch {
    return null;
  }
}

async function fetchStateImages(query: string): Promise<string[]> {
  if (cache.has(query)) return cache.get(query)!;
  const titles = LANDMARKS[query];
  if (titles && titles.length) {
    const results = await Promise.all(titles.map(fetchSummaryImage));
    const urls = results.filter((u): u is string => !!u).slice(0, MAX_IMAGES);
    cache.set(query, urls);
    return urls;
  }
  // Fallback: pull the region's own page hero image only.
  const hero = await fetchSummaryImage(query);
  const urls = hero ? [hero] : [];
  cache.set(query, urls);
  return urls;
}

export function StateImageCarousel({ query }: Props) {
  const [images, setImages] = useState<string[] | null>(null);
  const [error, setError] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

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
    <>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={src}>
              <button
                type="button"
                onClick={() => setLightbox(src)}
                className="group block w-full overflow-hidden rounded-xl border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60"
                aria-label={`Open photo ${i + 1} of ${query}`}
              >
                <img
                  src={src}
                  alt={`${query}, photo ${i + 1}`}
                  loading="lazy"
                  className="h-40 w-full cursor-zoom-in object-cover transition duration-300 group-hover:scale-[1.02] sm:h-56 md:h-64"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </button>
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-[color:var(--gold)] p-2 text-[color:var(--ink)] shadow transition hover:bg-[color:var(--gold-deep)] hover:text-[color:var(--ivory)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt={query}
            className="max-h-[92vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default StateImageCarousel;
