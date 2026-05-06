export type RegionGroup = "state" | "ut" | "island";

export interface JewelryInfo {
  name: string;
  jewelryType: string;
  description: string;
  group: RegionGroup;
}

// Keys MUST match NAME_1 in india.geojson exactly.
export const jewelryData: Record<string, JewelryInfo> = {
  "Andhra Pradesh": {
    name: "Andhra Pradesh",
    jewelryType: "Gold Filigree & Bandhani Sets",
    description:
      "Known for Karimnagar silver filigree and elaborate gold bridal sets featuring intricate floral motifs and uncut diamonds.",
    group: "state",
  },
  "Arunachal Pradesh": {
    name: "Arunachal Pradesh",
    jewelryType: "Tribal Bead & Bamboo Ornaments",
    description:
      "Tribes craft layered necklaces from glass beads, brass bells and bamboo, often paired with feathered headgear for festivals.",
    group: "state",
  },
  Assam: {
    name: "Assam",
    jewelryType: "Asomiya Gohona",
    description:
      "Traditional 24k pieces like Jonbiri (crescent moon), Dhol Biri and Lokaparo, inspired by nature and Bihu rituals.",
    group: "state",
  },
  Bihar: {
    name: "Bihar",
    jewelryType: "Lac & Silver Tribal Jewelry",
    description:
      "Lacquered bangles, hansli necklaces and chunky silver anklets are everyday adornments rooted in Madhubani tradition.",
    group: "state",
  },
  Chhattisgarh: {
    name: "Chhattisgarh",
    jewelryType: "Bastar Dhokra",
    description:
      "Lost-wax brass casting by Bastar artisans yields rustic pendants, anklets and tribal motif neckpieces.",
    group: "state",
  },
  Goa: {
    name: "Goa",
    jewelryType: "Indo-Portuguese Filigree",
    description:
      "Goan jewelers blend Catholic and Hindu motifs in delicate gold filigree crosses, fish pendants and coral strands.",
    group: "state",
  },
  Gujarat: {
    name: "Gujarat",
    jewelryType: "Jadtar & Kutchi Silver",
    description:
      "Kundan-set jadtar from Ahmedabad and tribal Kutchi silver with tiny bells, mirrors and chunky cuffs.",
    group: "state",
  },
  Haryana: {
    name: "Haryana",
    jewelryType: "Pazeb & Hansli",
    description:
      "Heavy silver anklets (pazeb), nose rings and rigid hansli necklaces are central to rural bridal trousseaus.",
    group: "state",
  },
  "Himachal Pradesh": {
    name: "Himachal Pradesh",
    jewelryType: "Chiri Tikka & Pahari Silver",
    description:
      "Forehead chiri tikka, chandrahaar necklaces and turquoise-studded silver reflect Pahari and Tibetan influences.",
    group: "state",
  },
  "Jammu and Kashmir": {
    name: "Jammu & Kashmir",
    jewelryType: "Dejhoor & Jhumka",
    description:
      "Kashmiri Pandit women wear hexagonal gold dejhoor; the valley is also famed for enameled jhumkas and turquoise.",
    group: "state",
  },
  Jharkhand: {
    name: "Jharkhand",
    jewelryType: "Tribal Brass & Cowrie",
    description:
      "Santhal and Munda communities craft cowrie-shell necklaces, brass hairpins and beaded waistbands.",
    group: "state",
  },
  Karnataka: {
    name: "Karnataka",
    jewelryType: "Temple Jewelry & Kasumala",
    description:
      "Mysore's temple-inspired gold sets, kasumala (coin necklaces) and the Nagas-themed bridal pieces.",
    group: "state",
  },
  Kerala: {
    name: "Kerala",
    jewelryType: "Palakka Mala & Mullamottu",
    description:
      "Iconic green-stone palakka necklaces, jasmine-bud mullamottu malas and heavy gold mango malas worn at weddings.",
    group: "state",
  },
  "Madhya Pradesh": {
    name: "Madhya Pradesh",
    jewelryType: "Bagh & Gond Silver",
    description:
      "Tribal Gond and Bhil silver with geometric motifs, plus Bagh-region beaded necklaces and oxidised cuffs.",
    group: "state",
  },
  Maharashtra: {
    name: "Maharashtra",
    jewelryType: "Thushi & Kolhapuri Saaj",
    description:
      "Snug gold-bead thushi chokers and the auspicious Kolhapuri Saaj with 21 leaf-shaped pendants define Marathi bridal style.",
    group: "state",
  },
  Manipur: {
    name: "Manipur",
    jewelryType: "Likphi & Marei",
    description:
      "Likphi gold pendants and marei coral-and-bead necklaces accompany Manipuri Raas Leela costumes.",
    group: "state",
  },
  Meghalaya: {
    name: "Meghalaya",
    jewelryType: "Khasi Coral Strands",
    description:
      "Khasi and Jaintia women wear thick red coral bead strands (paila) along with gold pendants for festivals.",
    group: "state",
  },
  Mizoram: {
    name: "Mizoram",
    jewelryType: "Thi-hna & Amber Beads",
    description:
      "Mizo necklaces of amber, agate and brass, paired with traditional puanchei textiles.",
    group: "state",
  },
  Nagaland: {
    name: "Nagaland",
    jewelryType: "Naga Beadwork",
    description:
      "Each tribe wears distinct multi-strand bead necklaces with conch shells, boar tusks and brass heads marking status.",
    group: "state",
  },
  Orissa: {
    name: "Odisha",
    jewelryType: "Cuttack Tarakasi",
    description:
      "Cuttack's silver filigree (tarakasi) creates gossamer earrings, brooches and the famed Durga tableaux.",
    group: "state",
  },
  Punjab: {
    name: "Punjab",
    jewelryType: "Kaintha & Phulkari Beads",
    description:
      "Heavy gold kaintha necklaces, jhumkas and ivory-and-red chooda bangles define Punjabi bridal jewelry.",
    group: "state",
  },
  Rajasthan: {
    name: "Rajasthan",
    jewelryType: "Kundan, Polki & Meenakari",
    description:
      "Jaipur and Bikaner perfected uncut-diamond polki, kundan setting and vibrant meenakari enamel reverse-work.",
    group: "state",
  },
  Sikkim: {
    name: "Sikkim",
    jewelryType: "Yencho & Khao",
    description:
      "Bhutia and Lepcha gold yencho earrings and khao necklaces blend Tibetan turquoise with coral.",
    group: "state",
  },
  "Tamil Nadu": {
    name: "Tamil Nadu",
    jewelryType: "Temple Jewelry",
    description:
      "Born in Chola temples, featuring goddess motifs, rubies and emeralds — worn by Bharatanatyam dancers and brides alike.",
    group: "state",
  },
  Telangana: {
    name: "Telangana",
    jewelryType: "Hyderabadi Pearls & Jadau",
    description:
      "Hyderabad's Basra pearls, Nizami satlada necklaces and jadau sets reflect a rich Deccan-Mughal legacy.",
    group: "state",
  },
  Tripura: {
    name: "Tripura",
    jewelryType: "Bamboo & Silver Tribal",
    description:
      "Tripuri women craft bamboo earrings and silver coin necklaces worn with traditional risa and rignai.",
    group: "state",
  },
  "Uttar Pradesh": {
    name: "Uttar Pradesh",
    jewelryType: "Lucknowi Bidri & Chikan-inspired Gold",
    description:
      "Varanasi's gold ghungroo work and Lucknow's bidriware-inspired pendants celebrate Mughal-era craftsmanship.",
    group: "state",
  },
  Uttaranchal: {
    name: "Uttarakhand",
    jewelryType: "Nath & Galobandh",
    description:
      "Garhwali and Kumaoni brides wear large gold naths (nose rings) and the velvet-backed galobandh choker.",
    group: "state",
  },
  "West Bengal": {
    name: "West Bengal",
    jewelryType: "Filigree & Shola Pith",
    description:
      "Bengali brides wear Sita haar gold necklaces, jhumkas and the white shola-pith mukut and tiara on their wedding day.",
    group: "state",
  },

  // Union Territories
  Chandigarh: {
    name: "Chandigarh",
    jewelryType: "Contemporary Punjabi Gold",
    description:
      "A modern hub blending Punjabi kaintha and jhumka traditions with contemporary diamond and platinum design.",
    group: "ut",
  },
  "Dadra and Nagar Haveli": {
    name: "Dadra & Nagar Haveli",
    jewelryType: "Warli Tribal Silver",
    description:
      "Warli and Dhodia tribes wear silver hansli, chunky anklets and beaded necklaces echoing their wall-art motifs.",
    group: "ut",
  },
  "Daman and Diu": {
    name: "Daman & Diu",
    jewelryType: "Coastal Coral & Filigree",
    description:
      "Portuguese-influenced filigree gold, coral pendants and shell-bead chokers mark this coastal heritage.",
    group: "ut",
  },
  Delhi: {
    name: "Delhi",
    jewelryType: "Polki & Mughal Jadau",
    description:
      "Old Delhi's Dariba Kalan has crafted Mughal-era polki, jadau and meenakari sets for over four centuries.",
    group: "ut",
  },
  Puducherry: {
    name: "Puducherry",
    jewelryType: "Franco-Tamil Temple Gold",
    description:
      "A blend of Tamil temple jewelry with delicate French-influenced gold chains and cameo pendants.",
    group: "ut",
  },

  // Islands
  "Andaman and Nicobar": {
    name: "Andaman & Nicobar Islands",
    jewelryType: "Shell, Coral & Coconut",
    description:
      "Indigenous communities craft necklaces and earrings from conch shells, red coral, mother-of-pearl and carved coconut.",
    group: "island",
  },
  Lakshadweep: {
    name: "Lakshadweep",
    jewelryType: "Coral & Cowrie Adornments",
    description:
      "Islanders fashion cowrie-shell strands, coral chokers and silver anklets reflecting their Arabian Sea heritage.",
    group: "island",
  },
};
