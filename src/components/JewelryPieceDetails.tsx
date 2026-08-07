import { getJewelryPiece } from "@/data/jewelryPieces";

interface Props {
  stateName: string;
}

const GOLD = "#D4AE4A";

export function JewelryPieceDetails({ stateName }: Props) {
  const piece = getJewelryPiece(stateName);
  if (!piece) return null;

  const hasContent =
    piece.jewelry_name || piece.materials || piece.technique || piece.cultural_significance;
  if (!hasContent && !piece.image_url) return null;

  return (
    <section className="mt-8">
      <h3 className="font-serif text-xl text-[color:var(--ink)] sm:text-2xl">
        {piece.jewelry_name || "Signature Jewellery"}
      </h3>

      {/* Image — 4:5 crop with gold hairline border */}
      <div
        className="mt-4 w-full overflow-hidden rounded-xl"
        style={{ border: `1px solid ${GOLD}`, aspectRatio: "4 / 5" }}
      >
        {piece.image_url ? (
          <img
            src={piece.image_url}
            alt={`${piece.jewelry_name || "Traditional jewellery"} from ${piece.state}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-[color:var(--ivory-deep)]/60 font-serif text-sm italic"
            style={{ color: GOLD }}
          >
            Image coming soon
          </div>
        )}
      </div>

      <dl className="mt-4 flex flex-col gap-3">
        {piece.materials && <Row label="Materials" value={piece.materials} />}
        {piece.technique && <Row label="Technique" value={piece.technique} />}
        {piece.cultural_significance && (
          <Row label="Cultural Significance" value={piece.cultural_significance} />
        )}
      </dl>

      {piece.source && (
        <a
          href={piece.source}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block break-all text-[11px] text-[color:var(--ink)]/50 underline hover:text-[color:var(--gold-deep)]"
        >
          Source
        </a>
      )}
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-deep)]">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-[color:var(--ink)]/80">{value}</dd>
    </div>
  );
}

export default JewelryPieceDetails;
