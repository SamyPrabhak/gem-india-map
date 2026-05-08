import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { jewelryData, type RegionGroup } from "@/data/jewelry";

interface Option {
  key: string;
  name: string;
  group: RegionGroup;
}

interface Props {
  onPick: (regionKey: string, group: RegionGroup) => void;
}

export function RegionSearch({ onPick }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const options = useMemo<Option[]>(
    () =>
      Object.entries(jewelryData)
        .map(([key, info]) => ({ key, name: info.name, group: info.group }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return options.filter((o) => o.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query, options]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const pick = (o: Option) => {
    onPick(o.key, o.group);
    setQuery("");
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (matches[activeIdx]) {
        e.preventDefault();
        pick(matches[activeIdx]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="absolute left-3 top-3 z-[1000] w-[78%] max-w-[300px] sm:w-[300px]"
    >
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--gold-deep)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Search a state or island…"
          className="h-10 w-full rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--ivory)]/95 pl-9 pr-9 font-sans text-sm text-[color:var(--ink)] shadow-[0_8px_24px_-12px_rgba(42,38,34,0.4)] outline-none backdrop-blur placeholder:text-[color:var(--ink)]/40 focus:border-[color:var(--gold-deep)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-[color:var(--ink)]/50 hover:bg-[color:var(--gold)]/15 hover:text-[color:var(--ink)]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div className="mt-2 overflow-hidden rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--ivory)]/98 shadow-[0_20px_40px_-20px_rgba(42,38,34,0.45)] backdrop-blur">
          {matches.length === 0 ? (
            <div className="px-4 py-3 text-sm text-[color:var(--ink)]/55">
              No regions match
            </div>
          ) : (
            <ul role="listbox" className="max-h-72 overflow-auto py-1">
              {matches.map((o, i) => (
                <li key={o.key}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => pick(o)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors ${
                      i === activeIdx
                        ? "bg-[color:var(--gold)]/20 text-[color:var(--ink)]"
                        : "text-[color:var(--ink)]/85 hover:bg-[color:var(--gold)]/10"
                    }`}
                  >
                    <span className="font-serif">{o.name}</span>
                    <span className="rounded-full border border-[color:var(--gold)]/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[color:var(--gold-deep)]">
                      {o.group === "island" ? "Islands" : "State"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default RegionSearch;
