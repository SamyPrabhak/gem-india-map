import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getCsvRegion, getPopupPieces } from "./csvJewelry";

describe("map jewellery previews", () => {
  test("Tamil Nadu shows four styles", () => {
    const region = getCsvRegion("Tamil Nadu");
    if (!region) throw new Error("Tamil Nadu data is missing");
    assert.equal(getPopupPieces(region).length, 4);
  });

  test("other regions show no more than three styles", () => {
    const region = getCsvRegion("Karnataka");
    if (!region) throw new Error("Karnataka data is missing");
    assert.ok(region.pieces.length > 3);
    assert.equal(getPopupPieces(region).length, 3);
  });
});