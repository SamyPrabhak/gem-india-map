// Wikipedia article titles for each state's traditional jewelry piece.
// The article lead image is fetched at runtime via the Wikipedia REST summary API.
// Wikimedia Commons hosts many public-domain images from the V&A, Met, and
// National Museum collections, so credible imagery is generally available for
// well-documented techniques (Kundan, Meenakari, Dhokra, Temple jewellery…).
// null => show placeholder (no credible image sourced).

export interface JewelryPieceRef {
  wikiTitle: string;
  label: string; // human-readable piece name shown in caption
}

export const jewelryPieceWiki: Record<string, JewelryPieceRef | null> = {
  "Andhra Pradesh": { wikiTitle: "Filigree", label: "Karimnagar Silver Filigree" },
  "Arunachal Pradesh": null,
  Assam: { wikiTitle: "Assamese traditional jewellery", label: "Asomiya Gohona" },
  Bihar: null,
  Chhattisgarh: { wikiTitle: "Dhokra", label: "Bastar Dhokra" },
  Goa: { wikiTitle: "Filigree", label: "Indo-Portuguese Filigree" },
  Gujarat: { wikiTitle: "Jadau", label: "Jadtar (Jadau) Jewellery" },
  Haryana: null,
  "Himachal Pradesh": null,
  "Jammu and Kashmir": { wikiTitle: "Dejhoor", label: "Dejhoor" },
  "Jammu & Kashmir": { wikiTitle: "Dejhoor", label: "Dejhoor" },
  Jharkhand: null,
  Karnataka: { wikiTitle: "Temple jewellery", label: "Temple Jewellery" },
  Kerala: { wikiTitle: "Palakka mala", label: "Palakka Mala" },
  "Madhya Pradesh": null,
  Maharashtra: { wikiTitle: "Kolhapuri Saaj", label: "Kolhapuri Saaj" },
  Manipur: null,
  Meghalaya: null,
  Mizoram: null,
  Nagaland: null,
  Odisha: { wikiTitle: "Tarakasi", label: "Tarakasi Silver Filigree" },
  Punjab: { wikiTitle: "Punjabi jewellery", label: "Punjabi Jewellery" },
  Rajasthan: { wikiTitle: "Kundan", label: "Kundan" },
  Sikkim: null,
  "Tamil Nadu": { wikiTitle: "Temple jewellery", label: "Temple Jewellery" },
  Telangana: { wikiTitle: "Filigree", label: "Hyderabadi Jewellery" },
  Tripura: null,
  "Uttar Pradesh": { wikiTitle: "Meenakari", label: "Meenakari" },
  Uttarakhand: null,
  "West Bengal": { wikiTitle: "Filigree", label: "Bengali Filigree" },
  Chandigarh: null,
  "Dadra & Nagar Haveli": null,
  "Daman & Diu": null,
  Delhi: { wikiTitle: "Meenakari", label: "Mughal Meenakari" },
  Puducherry: null,
  "Andaman & Nicobar Islands": null,
  Lakshadweep: null,
};
