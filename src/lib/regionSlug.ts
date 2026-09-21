import { jewelryData, type JewelryInfo } from "@/data/jewelry";

export function toRegionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getRegionKeyBySlug(slug: string): string | undefined {
  const target = slug.toLowerCase();
  return Object.keys(jewelryData).find(
    (key) =>
      toRegionSlug(key) === target || toRegionSlug(jewelryData[key]!.name) === target,
  );
}

export function getRegionBySlug(slug: string): JewelryInfo | undefined {
  const key = getRegionKeyBySlug(slug);
  return key ? jewelryData[key] : undefined;
}
