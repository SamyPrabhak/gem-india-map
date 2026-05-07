import { useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Gem } from "lucide-react";
import type { JewelryInfo } from "@/data/jewelry";

interface Props {
  info: JewelryInfo | null;
  onClose: () => void;
}

export function RegionPopup({ info, onClose }: Props) {
  useEffect(() => {
    if (!info) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [info, onClose]);

  if (!info) return null;

  const groupLabel =
    info.group === "state" ? "State" : info.group === "ut" ? "Union Territory" : "Islands";

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-stretch justify-center bg-[color:var(--ink)]/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[100vh] w-full max-w-2xl flex-col overflow-hidden rounded-none border border-[color:var(--gold)]/40 bg-[color:var(--ivory)] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[color:var(--gold)]/20 bg-[color:var(--ivory)] px-5 py-4 sm:px-8 sm:py-6">
          <div className="min-w-0">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-deep)]">
              {groupLabel}
            </p>
            <h2 className="mt-1 truncate font-serif text-2xl text-[color:var(--ink)] sm:text-4xl">
              {info.name}
            </h2>
            <p className="mt-1 text-sm text-[color:var(--ink)]/60 sm:text-base">
              Capital: <span className="text-[color:var(--ink)]/80">{info.capital}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-[color:var(--ink)]/60 transition hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--ink)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          {/* Hero band */}
          <div className="flex h-32 items-center justify-center rounded-xl border border-[color:var(--gold)]/20 bg-gradient-to-br from-[color:var(--ivory-deep)] via-[color:var(--ivory)] to-[#e9dcb6] sm:h-44">
            <Gem className="h-10 w-10 text-[color:var(--gold-deep)]/70 sm:h-14 sm:w-14" />
          </div>

          {/* About */}
          <section className="mt-6">
            <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-[color:var(--gold-deep)]">
              About the {info.group === "island" ? "Region" : groupLabel}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/80 sm:text-base">
              {info.about}
            </p>
          </section>

          {/* Famous Jewellery Styles */}
          <section className="mt-8">
            <h3 className="font-serif text-xl text-[color:var(--ink)] sm:text-2xl">
              Famous Jewellery Styles
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {info.styles.map((s) => (
                <article
                  key={s.name}
                  className="rounded-xl border border-[color:var(--gold)]/30 bg-white/60 p-4 shadow-sm transition hover:border-[color:var(--gold)]/60 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--gold)]/15 sm:h-12 sm:w-12">
                      <Gem className="h-5 w-5 text-[color:var(--gold-deep)] sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-lg text-[color:var(--ink)] sm:text-xl">
                        {s.name}
                      </h4>
                      <p className="text-xs italic text-[color:var(--gold-deep)] sm:text-sm">
                        {s.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/75">
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section className="mt-8">
            <h3 className="font-serif text-xl text-[color:var(--ink)] sm:text-2xl">Fun Facts</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {info.funFacts.map((f, i) => (
                <li
                  key={i}
                  className="rounded-full border border-[color:var(--gold)]/20 bg-[color:var(--ivory-deep)]/60 px-4 py-2.5 text-sm text-[color:var(--ink)]/80"
                >
                  <span className="mr-2 font-serif italic text-[color:var(--gold-deep)]">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 z-10 flex flex-col-reverse gap-3 border-t border-[color:var(--gold)]/20 bg-[color:var(--ivory)] px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-8">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 font-sans text-sm font-medium text-[color:var(--ink)] shadow transition hover:bg-[color:var(--gold-deep)] hover:text-[color:var(--ivory)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Map
          </button>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 font-sans text-sm font-medium text-[color:var(--ivory)] shadow transition hover:bg-[color:var(--ink)]/85"
          >
            Explore More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegionPopup;
