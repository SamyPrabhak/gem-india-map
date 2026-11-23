import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  region: string;
  imageUrl: string;
  onOpen: (photo: { src: string; alt: string }) => void;
}

export function StylePhoto({ name, region, imageUrl, onOpen }: Props) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailedUrl(imageUrl);
  }, [imageUrl]);
  const alt = `${name}, traditional jewellery of ${region}`;

  if (!imageUrl || failedUrl === imageUrl) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[color:var(--ivory-deep)] text-center font-serif text-sm italic text-[color:var(--gold)]">
        Image coming soon
      </div>
    );
  }

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        onClick={() => onOpen({ src: imageUrl, alt })}
        className="block h-full w-full rounded-none p-0"
        aria-label={`Open image of ${name}`}
      >
        <img
          ref={imgRef}
          src={imageUrl}
          alt={alt}
          loading="lazy"
          className="h-full w-full cursor-zoom-in object-cover"
          onError={() => setFailedUrl(imageUrl)}
        />
      </Button>
      <span className="pointer-events-none absolute bottom-1.5 right-2 rounded bg-[color:var(--ink)]/70 px-1.5 py-0.5 text-[11px] leading-none text-[color:var(--gold)]">
        Tap to enlarge
      </span>
    </>
  );
}