import { X } from "lucide-react";
import type { JewelryInfo } from "@/data/jewelry";

interface Props {
  info: JewelryInfo | null;
  onClose: () => void;
}

export function RegionPopup({ info, onClose }: Props) {
  if (!info) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end justify-center bg-[color:var(--ink)]/30 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[color:var(--gold)]/40 bg-[color:var(--ivory)] p-8 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-[color:var(--ink)]/60 transition hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--ink)]"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[color:var(--gold-deep)]">
          {info.group === "state" ? "State" : info.group === "ut" ? "Union Territory" : "Islands"}
        </p>
        <h2 className="mt-2 font-serif text-3xl text-[color:var(--ink)] sm:text-4xl">{info.name}</h2>
        <div className="mt-4 h-px w-16 bg-[color:var(--gold)]" />
        <p className="mt-5 font-serif text-xl italic text-[color:var(--gold-deep)]">
          {info.jewelryType}
        </p>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--ink)]/80">
          {info.description}
        </p>
      </div>
    </div>
  );
}

export default RegionPopup;
