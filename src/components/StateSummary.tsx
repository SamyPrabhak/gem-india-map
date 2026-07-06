import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  query: string;
  fallback?: string;
}

const cache = new Map<string, string>();

async function fetchSummary(query: string): Promise<string> {
  if (cache.has(query)) return cache.get(query)!;
  const title = encodeURIComponent(query.replace(/ /g, "_"));
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
  if (!res.ok) throw new Error("summary fetch failed");
  const data: { extract?: string } = await res.json();
  const extract = (data.extract ?? "").replace(/[—–]/g, ",").trim();
  cache.set(query, extract);
  return extract;
}

export function StateSummary({ query, fallback }: Props) {
  const [text, setText] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setText(null);
    setFailed(false);
    fetchSummary(query)
      .then((t) => !cancelled && setText(t))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [query]);

  if (!text && !failed) {
    return (
      <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--ink)]/50">
        <Loader2 className="h-4 w-4 animate-spin" /> Loading history…
      </div>
    );
  }

  const body = text || (fallback ?? "").replace(/[—–]/g, ",");
  return (
    <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/80 sm:text-base">{body}</p>
  );
}

export default StateSummary;
