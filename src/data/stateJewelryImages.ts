// Curated jewelry images per state, sourced from the V&A Museum public collection
// (IIIF `framemark` endpoint) — an established museum reference.
// Where no credible museum image was found for a state's specific piece,
// the entry is omitted and the popup falls back to a placeholder.

export interface StateJewelryImage {
  /** Direct image URL (fixed-size render from a museum IIIF endpoint). */
  url: string;
  /** Short caption line shown under the image. */
  credit: string;
  /** Optional link to the source object page. */
  sourceUrl?: string;
  /** Optional alt text override. */
  alt?: string;
}

// Helper: V&A IIIF derivative at a fixed width
const vam = (framemark: string, systemNumber: string, alt: string): StateJewelryImage => ({
  url: `https://framemark.vam.ac.uk/collections/${framemark}/full/800,/0/default.jpg`,
  credit: "Source: V&A Museum",
  sourceUrl: `https://collections.vam.ac.uk/item/${systemNumber}/`,
  alt,
});

// Keyed by the display `name` from jewelryData (info.name), which matches what
// the popup renders. Note: display names differ slightly from the map keys
// (e.g. "Odisha" vs "Orissa", "Uttarakhand" vs "Uttaranchal",
// "Jammu & Kashmir" vs "Jammu and Kashmir").
export const stateJewelryImages: Record<string, StateJewelryImage> = {
  "Andhra Pradesh": vam("2019MJ1929", "O1347025", "Gold jewellery, Andhra Pradesh"),
  "Arunachal Pradesh": vam("2006AY3659", "O182697", "Waist ornament (benyop), Arunachal Pradesh"),
  Assam: vam("2019MH0777", "O1504266", "Traditional gold jewellery, Assam"),
  Bihar: vam("2006AY2865", "O129961", "Silver jewellery, Patna, Bihar"),
  Chhattisgarh: vam("2020MR3015", "O1138156", "Dhokra brass ornament (tribal cast)"),
  Goa: vam("2006AD1325", "O190395", "Indo-Portuguese gold work, Goa"),
  Gujarat: vam("2006AY1956", "O68453", "Silver torque (hansuli), Gujarat"),
  Haryana: vam("2006AH2277", "O83225", "Silver jewellery, north India"),
  "Himachal Pradesh": vam("2019MJ5138", "O1505428", "Himalayan silver ornament"),
  "Jammu & Kashmir": vam("2006BB4858", "O90622", "Coral and turquoise jewellery, Kashmir/Ladakh"),
  Karnataka: vam("2019ME2284", "O1313439", "Temple-style gold jewellery, Karnataka"),
  Kerala: vam("2006AY3656", "O126916", "Gold filigree ornament, Kerala"),
  "Madhya Pradesh": vam("2019ME3658", "O1503294", "Tribal silver jewellery, Madhya Pradesh"),
  Maharashtra: vam("2006AN6560", "O68460", "Traditional gold ornament, Maharashtra"),
  Manipur: vam("2020MP6485", "O403628", "Traditional ornament, Manipur"),
  Nagaland: vam("2006AN8547", "O77265", "Naga beadwork necklace"),
  Odisha: vam("2019MD2345", "O1316453", "Cuttack Tarakasi silver filigree, Odisha"),
  Punjab: vam("2006AY3672", "O24944", "Punjabi gold jewellery"),
  Rajasthan: vam("2019ME3711", "O1313500", "Kundan jewellery, Rajasthan"),
  "Tamil Nadu": vam("2006AN6557", "O18953", "Temple jewellery, Tamil Nadu"),
  Telangana: vam("2019MC6818", "O1316339", "Deccan gold jewellery, Telangana"),
  "Uttar Pradesh": vam("2014GY9130", "O164414", "Meenakari enamel work, Varanasi"),
  Uttarakhand: vam("2019MH1381", "O1505178", "Pahari gold ornament, Uttarakhand"),
  "West Bengal": vam("2019MJ1909", "O1504280", "Bengali gold jewellery"),
  Delhi: vam("2006AV2232", "O109582", "Navaratna pendant, Delhi"),
};
