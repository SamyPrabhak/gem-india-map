import type { RegionGroup } from "@/data/jewelry";

const TABS: { value: RegionGroup; label: string }[] = [
  { value: "state", label: "States" },
  { value: "island", label: "Islands" },
];

interface Props {
  active: RegionGroup;
  onChange: (g: RegionGroup) => void;
}

export function GroupTabs({ active, onChange }: Props) {
  return (
    <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] p-1 shadow-sm">
      {TABS.map((t) => {
        const isActive = active === t.value;
        return (
          <button
            key={t.value}
            onClick={() => onChange(t.value)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium tracking-wide transition ${
              isActive
                ? "bg-[color:var(--gold)] text-[color:var(--ink)] shadow"
                : "text-[color:var(--ink)]/70 hover:text-[color:var(--ink)]"
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

export default GroupTabs;
