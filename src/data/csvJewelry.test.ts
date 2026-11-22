import { describe, expect, test } from "bun:test";
import { getCsvRegion, getPopupPieces } from "./csvJewelry";

describe("map jewellery previews", () => {
  test("Tamil Nadu shows four styles", () => {
    const region = getCsvRegion("Tamil Nadu");
    if (!region) throw new Error("Tamil Nadu data is missing");
    expect(getPopupPieces(region)).toHaveLength(4);
  });

  test("other regions show no more than three styles", () => {
    const region = getCsvRegion("Karnataka");
    if (!region) throw new Error("Karnataka data is missing");
    expect(region.pieces.length).toBeGreaterThan(3);
    expect(getPopupPieces(region)).toHaveLength(3);
  });
});