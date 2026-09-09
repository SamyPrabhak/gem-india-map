import { jewelryData, type JewelryInfo } from "@/data/jewelry";

export function toRegionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getRegionBySlug(slug: string): JewelryInfo | undefined {
  const target = slug.toLowerCase();
  const key = Object.keys(jewelryData).find((n) => toRegionSlug(n) === target);
  return key ? jewelryData[key] : undefined;
}
