export type RegionGroup = "state" | "ut" | "island";

export interface JewelryStyle {
  name: string;
  tagline: string;
  description: string;
}

export interface JewelryInfo {
  name: string;
  capital: string;
  jewelryType: string;
  description: string;
  about: string;
  styles: JewelryStyle[];
  funFacts: string[];
  group: RegionGroup;
}

const make = (
  name: string,
  group: RegionGroup,
  capital: string,
  jewelryType: string,
  description: string,
  about: string,
  styles: JewelryStyle[],
  funFacts: string[],
): JewelryInfo => ({ name, group, capital, jewelryType, description, about, styles, funFacts });

// Keys MUST match NAME_1 in india.geojson exactly.
export const jewelryData: Record<string, JewelryInfo> = {
  "Andhra Pradesh": make(
    "Andhra Pradesh", "state", "Amaravati",
    "Gold Filigree & Bandhani Sets",
    "Karimnagar silver filigree and elaborate gold bridal sets with floral motifs.",
    "Andhra Pradesh, on India's southeastern coast, is famed for temples, classical Kuchipudi dance and a long goldsmithing tradition centred around Karimnagar and Hyderabad's Deccan workshops.",
    [
      { name: "Karimnagar Filigree", tagline: "Gossamer silver lacework", description: "Hair-thin silver wires twisted into peacocks, lamps and floral medallions — a GI-tagged craft over 200 years old." },
      { name: "Buttalu", tagline: "Bridal coin necklace", description: "Layered gold coin necklaces worn by Telugu brides, often featuring Lakshmi motifs and uncut diamonds." },
      { name: "Vaddanam", tagline: "Ornate waist belt", description: "A heavy gold waistband with floral and goddess motifs, central to South Indian bridal trousseaus." },
    ],
    ["Karimnagar filigree has Persian origins, brought by 18th-century Mughal patrons.", "Andhra brides traditionally wear seven types of gold ornaments at once.", "Tirupati temple is one of the world's largest gold consumers."],
  ),
  "Arunachal Pradesh": make(
    "Arunachal Pradesh", "state", "Itanagar",
    "Tribal Bead & Bamboo Ornaments",
    "Layered necklaces of glass beads, brass bells and bamboo paired with feathered headgear.",
    "India's easternmost state is home to 26 major tribes, each with distinctive ornaments crafted from forest materials and trade beads.",
    [
      { name: "Apatani Beadwork", tagline: "Cobalt & coral strands", description: "Multi-strand necklaces of blue beads layered with brass discs, worn daily by Apatani women." },
      { name: "Nyishi Headgear", tagline: "Hornbill plumed crown", description: "Cane helmets crowned with hornbill beaks and feathers, paired with brass and bead jewelry." },
      { name: "Bamboo Earrings", tagline: "Forest-carved discs", description: "Disc-shaped bamboo plugs and earrings carved with geometric patterns by Adi and Galo tribes." },
    ],
    ["Some bead strands are heirlooms passed down 5+ generations.", "Tribes once used bear claws and tiger teeth as status symbols.", "Conservation laws now use brass replicas of hornbill beaks."],
  ),
  Assam: make(
    "Assam", "state", "Dispur",
    "Asomiya Gohona",
    "Traditional 24k pieces like Jonbiri, Dhol Biri and Lokaparo, inspired by nature and Bihu rituals.",
    "Assam, cradle of the Brahmaputra, has a 500-year-old goldsmithing tradition rooted in the Ahom dynasty and tied to Bihu and bridal customs.",
    [
      { name: "Jonbiri", tagline: "Crescent moon pendant", description: "A crescent-moon necklace symbolising fertility, set with rubies and worn by Bihu dancers." },
      { name: "Lokaparo", tagline: "Twin-pigeon pendant", description: "Two birds back-to-back in 24k gold, representing love and partnership." },
      { name: "Dhol Biri", tagline: "Drum-shaped pendant", description: "Inspired by the Bihu dhol drum, hammered in gold with red meenakari accents." },
    ],
    ["Assamese gold is among the purest used in Indian jewelry — often 24k.", "Each motif is named after a household or natural object.", "Bihu dancers wear up to 8 different gohona pieces."],
  ),
  Bihar: make(
    "Bihar", "state", "Patna",
    "Lac & Silver Tribal Jewelry",
    "Lacquered bangles, hansli necklaces and chunky silver anklets rooted in Madhubani tradition.",
    "Bihar's jewelry mirrors its folk-art heritage — bold lac bangles from Muzaffarpur and tribal silver from the Mithila region.",
    [
      { name: "Lac Bangles", tagline: "Mirror-set lacquer", description: "Glossy lacquer bangles studded with mirrors and beads, dyed in vivid reds and greens." },
      { name: "Hansli", tagline: "Rigid silver collar", description: "A solid silver torque worn close to the neck, often gifted at weddings." },
      { name: "Madhubani Pendants", tagline: "Folk-art on metal", description: "Etched silver pendants depicting fish, peacocks and Madhubani-style figures." },
    ],
    ["Lac bangle-making is a 600-year-old craft in Muzaffarpur.", "Hansli weight signals a family's prosperity.", "Madhubani motifs migrated from wall murals to jewelry only in the 1970s."],
  ),
  Chhattisgarh: make(
    "Chhattisgarh", "state", "Raipur",
    "Bastar Dhokra",
    "Lost-wax brass casting by Bastar artisans yielding rustic pendants, anklets and tribal motifs.",
    "Chhattisgarh's Bastar region is one of the oldest centres of Dhokra metal craft, practiced continuously for over 4,000 years.",
    [
      { name: "Dhokra Pendants", tagline: "4,000-year-old craft", description: "Lost-wax brass pendants featuring tribal figures, animals and tree-of-life motifs." },
      { name: "Paijan", tagline: "Bell-anklets", description: "Heavy silver anklets with tiny bells, worn during Karma and Suwa folk dances." },
      { name: "Cowrie Necklaces", tagline: "Forest currency", description: "Strung cowrie shells with brass beads — once used as both ornament and currency." },
    ],
    ["The Mohenjo-Daro 'Dancing Girl' bronze used the same Dhokra technique.", "Bastar artisans never use moulds — every piece is unique.", "Tribal women wear silver weighing up to 2kg on festival days."],
  ),
  Goa: make(
    "Goa", "state", "Panaji",
    "Indo-Portuguese Filigree",
    "Goan jewelers blend Catholic and Hindu motifs in delicate gold filigree, fish pendants and coral strands.",
    "Goa's 450 years of Portuguese rule produced a unique fusion jewelry vocabulary blending European, Konkani and Catholic iconography.",
    [
      { name: "Fatti", tagline: "Lustrous gold band", description: "A flat gold choker worn by Goan Catholic brides, often layered with rosaries." },
      { name: "Cordao", tagline: "Twisted gold rope", description: "A thick twisted gold chain inspired by Portuguese cordão necklaces." },
      { name: "Coral Mangalsutra", tagline: "Coastal sacred thread", description: "Hindu Goan mangalsutras featuring red coral beads from the Arabian Sea." },
    ],
    ["Goan goldsmiths historically worked exclusively in 22k.", "Catholic brides wear gold crosses with Hindu lotus borders.", "Coral was once Goa's most valuable export to inland kingdoms."],
  ),
  Gujarat: make(
    "Gujarat", "state", "Gandhinagar",
    "Jadtar & Kutchi Silver",
    "Kundan-set jadtar from Ahmedabad and tribal Kutchi silver with bells, mirrors and chunky cuffs.",
    "Gujarat's twin jewelry traditions — refined Ahmedabad jadtar for royalty and bold Kutchi tribal silver — span centuries of Rajput, Mughal and Rabari heritage.",
    [
      { name: "Jadtar", tagline: "Uncut diamond setting", description: "Polki diamonds set in 22k gold foil, with reverse meenakari enamel." },
      { name: "Kutchi Silver", tagline: "Mirrored tribal cuffs", description: "Heavy silver cuffs and necklaces with mirror inlays from Banni grasslands." },
      { name: "Damaroo Earrings", tagline: "Hourglass danglers", description: "Damru-shaped silver earrings worn by Rabari pastoralist women." },
    ],
    ["Kutchi women receive ornaments at every life milestone.", "Ahmedabad jadtar adorned the Mughal court for two centuries.", "Some Rabari women wear 5kg of silver daily."],
  ),
  Haryana: make(
    "Haryana", "state", "Chandigarh",
    "Pazeb & Hansli",
    "Heavy silver anklets, nose rings and rigid hansli necklaces central to rural bridal trousseaus.",
    "Haryana's robust folk culture is reflected in its substantial silver jewelry — designed to be heirloom and visible from afar.",
    [
      { name: "Pazeb", tagline: "Chiming silver anklets", description: "Multi-chain silver anklets with bells, worn at weddings and ghoomar dances." },
      { name: "Nath", tagline: "Ringed nose ornament", description: "Large gold nose rings with pearl drops, signature of Haryanvi brides." },
      { name: "Hansli", tagline: "Solid silver torque", description: "A rigid neck ring of pure silver, often given by maternal uncles." },
    ],
    ["A bride's pazeb can weigh over 500 grams per leg.", "Haryanvi silversmiths still cast in earthen moulds.", "The hansli is never removed — even at night."],
  ),
  "Himachal Pradesh": make(
    "Himachal Pradesh", "state", "Shimla",
    "Chiri Tikka & Pahari Silver",
    "Forehead chiri tikka, chandrahaar necklaces and turquoise-studded silver reflect Pahari and Tibetan influences.",
    "Himachal's mountain communities craft jewelry that fuses Tibetan turquoise traditions with Hindu Pahari design.",
    [
      { name: "Chiri Tikka", tagline: "Bird-shaped headpiece", description: "Forehead ornaments shaped like sparrows, perched above the centre parting." },
      { name: "Chandrahaar", tagline: "Layered moon necklace", description: "Multi-tiered silver necklaces with crescent pendants, worn over wool shawls." },
      { name: "Turquoise Earrings", tagline: "Tibetan trade stones", description: "Sky-blue turquoise set in silver, traded across the Spiti and Kinnaur passes." },
    ],
    ["Chiri tikkas are believed to ward off mountain spirits.", "Pahari silversmiths still travel village-to-village.", "Turquoise loses colour with the wearer's mood, locals say."],
  ),
  "Jammu and Kashmir": make(
    "Jammu & Kashmir", "state", "Srinagar",
    "Dejhoor & Jhumka",
    "Kashmiri Pandit women wear hexagonal gold dejhoor; the valley is also famed for enameled jhumkas and turquoise.",
    "Kashmir's jewelry weaves together Pandit Hindu rituals, Mughal-era enameling and Central Asian gemstone trade.",
    [
      { name: "Dejhoor", tagline: "Hexagonal gold pendant", description: "A pair of hexagonal gold pendants strung on red thread — given to Pandit women at marriage and worn for life." },
      { name: "Jhumka", tagline: "Bell-shaped earrings", description: "Domed earrings with intricate filigree and turquoise drops." },
      { name: "Halqaband", tagline: "Bejewelled choker", description: "Gold plaques set with rubies, emeralds and pearls, worn snug at the throat." },
    ],
    ["Dejhoor is replaced with athhoor (gold chain) only after the husband's passing.", "Kashmiri enamel uses crushed Persian glass.", "Turquoise from Nishapur travelled here via Silk Road caravans."],
  ),
  Jharkhand: make(
    "Jharkhand", "state", "Ranchi",
    "Tribal Brass & Cowrie",
    "Santhal and Munda communities craft cowrie-shell necklaces, brass hairpins and beaded waistbands.",
    "Jharkhand's tribal jewelry is deeply functional — every ornament carries clan identity, ritual meaning or harvest symbolism.",
    [
      { name: "Cowrie Necklaces", tagline: "Shells of fortune", description: "Strands of cowrie shells believed to bring wealth and ward off evil." },
      { name: "Brass Hairpins", tagline: "Sohrai-etched", description: "Long brass pins decorated with Sohrai art motifs, used to hold elaborate hair buns." },
      { name: "Bead Waistbands", tagline: "Karma dance regalia", description: "Multi-strand bead belts worn by Santhal women during the Karma harvest festival." },
    ],
    ["Cowries were once tribal currency across eastern India.", "Sohrai motifs on brass mirror the wall paintings of Hazaribagh.", "Each Santhal clan has a signature bead colour."],
  ),
  Karnataka: make(
    "Karnataka", "state", "Bengaluru",
    "Temple Jewelry & Kasumala",
    "Mysore's temple-inspired gold sets, kasumala coin necklaces and Nagas-themed bridal pieces.",
    "Karnataka's jewelry traditions trace back to the Vijayanagara and Wodeyar dynasties, with Mysore as the historical centre of South Indian temple gold.",
    [
      { name: "Kasumala", tagline: "Lakshmi coin chain", description: "A long necklace of Lakshmi-stamped gold coins, worn by Kannadiga brides." },
      { name: "Nagapadam", tagline: "Cobra-hood pendant", description: "Snake-hood pendants in gold and rubies, sacred to Naga worship." },
      { name: "Jadanagam", tagline: "Hair serpent", description: "An elaborate hair-braid ornament shaped like a snake, worn for weddings and Bharatanatyam." },
    ],
    ["Mysore Palace houses one of India's largest temple-gold collections.", "Kasumala coins were once real currency.", "The jadanagam can stretch over a metre long."],
  ),
  Kerala: make(
    "Kerala", "state", "Thiruvananthapuram",
    "Palakka Mala & Mullamottu",
    "Iconic green-stone palakka necklaces, jasmine-bud mullamottu malas and heavy gold mango malas.",
    "Kerala's matrilineal society made women custodians of family gold — producing some of India's most distinctive bridal designs.",
    [
      { name: "Palakka Mala", tagline: "Emerald leaf pendants", description: "A necklace of green-stone leaf pendants set in gold, worn at temple weddings." },
      { name: "Mullamottu Mala", tagline: "Jasmine-bud chain", description: "Tiny gold beads shaped like jasmine buds, strung in long ropes." },
      { name: "Manga Mala", tagline: "Mango motif row", description: "Repeating gold mango pendants, symbol of fertility and abundance." },
    ],
    ["Kerala brides wear up to 1kg of gold at weddings.", "Palakka stones are sourced from Kerala river beds.", "Manga mala motifs were inspired by Travancore palace orchards."],
  ),
  "Madhya Pradesh": make(
    "Madhya Pradesh", "state", "Bhopal",
    "Bagh & Gond Silver",
    "Tribal Gond and Bhil silver with geometric motifs, plus Bagh-region beaded necklaces and cuffs.",
    "Madhya Pradesh sits at India's tribal heartland, with Gond, Bhil and Baiga communities producing some of the country's most expressive metal jewelry.",
    [
      { name: "Gond Silver", tagline: "Geometric tribal cast", description: "Hammered silver pendants with sun, moon and tree-of-life motifs." },
      { name: "Hasli", tagline: "Crescent neck ring", description: "Solid silver crescent collars worn close to the neck by Bhil women." },
      { name: "Tagli", tagline: "Coin headpiece", description: "Silver-coin forehead ornaments suspended on chains across the parting." },
    ],
    ["Gond artisans believe metal carries ancestral spirits.", "Bhil brides receive jewelry weighing up to 3kg.", "Each clan has a guardian motif cast into every piece."],
  ),
  Maharashtra: make(
    "Maharashtra", "state", "Mumbai",
    "Thushi & Kolhapuri Saaj",
    "Snug gold-bead thushi chokers and the auspicious Kolhapuri Saaj with 21 leaf-shaped pendants.",
    "Maharashtra's bridal jewelry traditions are anchored by the Peshwa-era Kolhapuri Saaj and the Maratha thushi choker.",
    [
      { name: "Kolhapuri Saaj", tagline: "21 sacred pendants", description: "A necklace of 21 leaf-shaped pendants — each representing a deity — only worn by married women." },
      { name: "Thushi", tagline: "Snug gold beads", description: "Tightly packed gold-bead choker that sits high on the throat." },
      { name: "Nath", tagline: "Paisley nose ring", description: "Large paisley-shaped nose ring strung with pearls and a single ruby." },
    ],
    ["The Kolhapuri Saaj is gifted by the husband, never bought by the bride.", "Thushi beads are individually hand-rolled.", "The Maharashtrian nath rests on the cheek, not the lip."],
  ),
  Manipur: make(
    "Manipur", "state", "Imphal",
    "Likphi & Marei",
    "Likphi gold pendants and marei coral-and-bead necklaces accompany Manipuri Raas Leela costumes.",
    "Manipur's jewelry mirrors the elaborate costuming of its Vaishnavite Raas Leela dance and the Meitei coronation traditions.",
    [
      { name: "Likphi", tagline: "Gold royal pendant", description: "A lozenge-shaped gold pendant once reserved for Meitei royalty." },
      { name: "Marei", tagline: "Coral & gold strand", description: "Layered coral and gold-bead necklaces worn over Raas Leela costumes." },
      { name: "Khoumlou", tagline: "Bracelet of valour", description: "Solid gold bracelets gifted to warriors and brides as symbols of strength." },
    ],
    ["Raas Leela costumes can weigh more than the dancer.", "Coral beads were traded from Tibet via Burma.", "Likphi designs were once a state secret."],
  ),
  Meghalaya: make(
    "Meghalaya", "state", "Shillong",
    "Khasi Coral Strands",
    "Khasi and Jaintia women wear thick red coral bead strands (paila) along with gold pendants.",
    "Meghalaya's matrilineal Khasi society makes jewelry an inheritance passed mother-to-daughter, with red coral as the prized material.",
    [
      { name: "Paila", tagline: "Red coral strands", description: "Thick strands of red coral beads worn around the neck during festivals." },
      { name: "Kynjri Ksiar", tagline: "Gold crown", description: "A delicate gold crown worn by Khasi brides during the Nongkrem dance." },
      { name: "Pansngiat", tagline: "Hair flower", description: "Silver and gold hair ornaments shaped like blooming flowers." },
    ],
    ["Coral once cost more than gold in Khasi markets.", "All ornaments pass to the youngest daughter.", "Some paila strands are over 200 years old."],
  ),
  Mizoram: make(
    "Mizoram", "state", "Aizawl",
    "Thi-hna & Amber Beads",
    "Mizo necklaces of amber, agate and brass, paired with traditional puanchei textiles.",
    "Mizoram's hill-tribe jewelry fuses Burmese, Chin and indigenous Mizo aesthetics — favouring warm amber and bold brass.",
    [
      { name: "Thi-hna", tagline: "Amber & agate", description: "Multi-strand necklaces of golden amber and red agate beads." },
      { name: "Darbu", tagline: "Brass earrings", description: "Heavy brass disc earrings traditional to Mizo women." },
      { name: "Kawrchei Pendant", tagline: "Textile-matched", description: "Silver pendants designed to complement the puanchei wrap-skirt." },
    ],
    ["Amber beads were once dowry currency.", "Mizo silversmiths still hammer by lamplight.", "Each tribal sub-group has its own bead pattern."],
  ),
  Nagaland: make(
    "Nagaland", "state", "Kohima",
    "Naga Beadwork",
    "Each tribe wears distinct multi-strand bead necklaces with conch shells, boar tusks and brass heads marking status.",
    "Nagaland's 16 tribes each maintain a distinct visual identity — and beadwork is the loudest expression of clan, valor and marriage status.",
    [
      { name: "Konyak Beads", tagline: "Warrior strands", description: "Red, yellow and black bead strands featuring miniature brass heads — historically signifying conquests." },
      { name: "Ao Necklace", tagline: "Conch & cornelian", description: "White conch and orange cornelian strands worn at the Moatsu festival." },
      { name: "Boar Tusk Pendants", tagline: "Hunter's pride", description: "Pendants of polished boar tusks set in brass, marking hunting prowess." },
    ],
    ["Bead colour combinations identify the wearer's village.", "Brass head pendants once represented real headhunting trophies.", "Some strands take 6 months to assemble."],
  ),
  Orissa: make(
    "Odisha", "state", "Bhubaneswar",
    "Cuttack Tarakasi",
    "Cuttack's silver filigree creates gossamer earrings, brooches and the famed Durga tableaux.",
    "Odisha's silver filigree craft, called Tarakasi, has thrived in Cuttack for over 500 years and is now GI-protected.",
    [
      { name: "Tarakasi", tagline: "Silver lacework", description: "Filigree silver wires shaped into peacocks, lotuses and fish — gossamer-thin and weightless." },
      { name: "Jhumka", tagline: "Filigree bells", description: "Bell-shaped silver earrings made entirely from twisted filigree wire." },
      { name: "Tahia", tagline: "Odissi hair crown", description: "An elaborate silver and white-flower headpiece worn by Odissi dancers." },
    ],
    ["Cuttack's Durga Puja idols are fully clad in tarakasi silver.", "Filigree wires can be as thin as 0.1mm.", "Each piece is built without solder, only by twisting."],
  ),
  Punjab: make(
    "Punjab", "state", "Chandigarh",
    "Kaintha & Phulkari Beads",
    "Heavy gold kaintha necklaces, jhumkas and ivory-and-red chooda bangles define Punjabi bridal jewelry.",
    "Punjab's exuberant bridal jewelry mirrors the energy of its bhangra and giddha — bold, layered and gold-rich.",
    [
      { name: "Kaintha", tagline: "Heavy gold collar", description: "A flat gold collar with stone-set pendants, central to Punjabi bridal looks." },
      { name: "Chooda", tagline: "Bridal bangles", description: "Ivory and red bangles worn for 40 days post-wedding by Punjabi brides." },
      { name: "Pippal Patti", tagline: "Leaf earrings", description: "Long, leaf-shaped gold earrings inspired by the peepal tree." },
    ],
    ["A bride traditionally wears 21 chooda bangles per arm.", "Kalire (umbrella ornaments) hang from the chooda.", "Punjabi gold is famously 22-24 karat."],
  ),
  Rajasthan: make(
    "Rajasthan", "state", "Jaipur",
    "Kundan, Polki & Meenakari",
    "Jaipur and Bikaner perfected uncut-diamond polki, kundan setting and vibrant meenakari enamel reverse-work.",
    "Rajasthan is India's jewelry capital — Jaipur alone houses over 600 years of royal goldsmithing patronised by the Mughal and Rajput courts.",
    [
      { name: "Kundan", tagline: "Pure-gold setting", description: "Glass and gemstones set in 24k gold foil — the technique pioneered in Mughal Rajasthan." },
      { name: "Polki", tagline: "Uncut diamond brilliance", description: "Uncut, unfaceted diamonds set in their natural form — bridal heirloom material." },
      { name: "Meenakari", tagline: "Reverse enamel", description: "Vibrant enamel work on the reverse of polki pieces — making jewelry beautiful from both sides." },
    ],
    ["Jaipur cuts more coloured gemstones than anywhere else on earth.", "Meenakari was brought to Jaipur from Lahore by Raja Man Singh.", "A bridal kundan set can take 6 months to make."],
  ),
  Sikkim: make(
    "Sikkim", "state", "Gangtok",
    "Yencho & Khao",
    "Bhutia and Lepcha gold yencho earrings and khao necklaces blend Tibetan turquoise with coral.",
    "Sikkim's jewelry is distinctly Himalayan — fusing Buddhist symbolism with Tibetan turquoise and coral trade routes.",
    [
      { name: "Yencho", tagline: "Tibetan turquoise drops", description: "Long earrings featuring rough-cut turquoise set in 22k gold." },
      { name: "Khao", tagline: "Coral & gold strand", description: "A multi-strand necklace of red coral and gold beads worn by Bhutia brides." },
      { name: "Diu", tagline: "Amulet box", description: "A hinged gold pendant containing protective Buddhist mantras and relics." },
    ],
    ["Turquoise is believed to absorb illness from the wearer.", "Khao necklaces are weighed by the tola.", "Diu boxes are blessed by lamas before wearing."],
  ),
  "Tamil Nadu": make(
    "Tamil Nadu", "state", "Chennai",
    "Temple Jewelry",
    "Born in Chola temples, featuring goddess motifs, rubies and emeralds — worn by Bharatanatyam dancers and brides.",
    "Tamil Nadu's temple jewelry tradition began in the 9th-century Chola dynasty, originally crafted to adorn temple deities and now central to bridal and dance traditions.",
    [
      { name: "Vanki", tagline: "Inverted-V armlet", description: "An armlet shaped like an inverted V, set with rubies and emeralds, worn high on the upper arm." },
      { name: "Oddiyanam", tagline: "Royal waist belt", description: "An ornate gold waist belt with goddess motifs — central to Bharatanatyam costuming." },
      { name: "Maatal", tagline: "Ear-to-hair chain", description: "A chain that loops from the earring up to the hair, popular in Chettinad bridal looks." },
    ],
    ["Original temple jewelry was never worn by humans, only by deities.", "Each motif corresponds to a Hindu mantra.", "Chettinad weddings showcase 30+ pieces per bride."],
  ),
  Telangana: make(
    "Telangana", "state", "Hyderabad",
    "Hyderabadi Pearls & Jadau",
    "Hyderabad's Basra pearls, Nizami satlada necklaces and jadau sets reflect a rich Deccan-Mughal legacy.",
    "Telangana's capital Hyderabad has been the global hub of pearl trading for over 400 years, courtesy of the Nizam's patronage.",
    [
      { name: "Satlada", tagline: "Seven-strand pearls", description: "A seven-strand Basra pearl necklace — the signature Nizami bridal piece." },
      { name: "Jadau", tagline: "Mughal stone-setting", description: "Uncut diamonds, emeralds and rubies set in 22k gold with reverse meenakari." },
      { name: "Karanphool", tagline: "Floral ear cluster", description: "A flower-shaped ear ornament with a chain hooked into the hair." },
    ],
    ["Basra pearls are now extinct — only heirlooms remain.", "Hyderabad processes 90% of India's pearls.", "The Nizam's jewels are valued at over $2 billion."],
  ),
  Tripura: make(
    "Tripura", "state", "Agartala",
    "Bamboo & Silver Tribal",
    "Tripuri women craft bamboo earrings and silver coin necklaces worn with traditional risa and rignai.",
    "Tripura's tribal jewelry traditions blend forest materials with silver coinage from old trade routes.",
    [
      { name: "Bamboo Earrings", tagline: "Carved forest discs", description: "Light bamboo earrings carved with geometric patterns and dyed with natural pigments." },
      { name: "Coin Necklace", tagline: "British-era silver", description: "Necklaces strung with old British and Tripuri silver coins." },
      { name: "Brass Anklets", tagline: "Festival chimes", description: "Heavy brass anklets worn for the Garia and Hojagiri dances." },
    ],
    ["Bamboo jewelry is replaced annually as offering to ancestors.", "Some coin necklaces date to the 1800s.", "Hojagiri dancers balance pots while wearing 2kg of brass."],
  ),
  "Uttar Pradesh": make(
    "Uttar Pradesh", "state", "Lucknow",
    "Lucknowi Bidri & Chikan-inspired Gold",
    "Varanasi's gold ghungroo work and Lucknow's bidriware-inspired pendants celebrate Mughal-era craftsmanship.",
    "Uttar Pradesh, home to the Taj Mahal, has nurtured Mughal-era jewelry crafts in Lucknow, Varanasi and Agra for over 400 years.",
    [
      { name: "Bidri Pendants", tagline: "Silver-inlay blackware", description: "Blackened zinc pendants inlaid with silver wire in floral patterns." },
      { name: "Ghungroo Work", tagline: "Banarasi tinkling gold", description: "Gold necklaces with tiny suspended bells, made in Varanasi." },
      { name: "Pichhauri", tagline: "Awadhi nose chain", description: "A delicate gold chain stretching from nose ring to ear, popular in Awadh." },
    ],
    ["Bidriware originated in Bidar but flourished in UP under Awadh.", "Banarasi gold work matches Banarasi silk borders.", "Lucknow's chowk has had jewelry shops since the 1700s."],
  ),
  Uttaranchal: make(
    "Uttarakhand", "state", "Dehradun",
    "Nath & Galobandh",
    "Garhwali and Kumaoni brides wear large gold naths and the velvet-backed galobandh choker.",
    "Uttarakhand's Pahari communities maintain a distinct bridal vocabulary blending Hindu ritual with Himalayan craftsmanship.",
    [
      { name: "Nath", tagline: "Garhwali nose ring", description: "An oversized gold nose ring with red and green bead drops, central to bridal attire." },
      { name: "Galobandh", tagline: "Velvet gold choker", description: "Gold plaques mounted on red velvet, fastened snug at the throat." },
      { name: "Tehri Naulakha", tagline: "Royal nine-lakh necklace", description: "A multi-strand necklace once gifted by the Tehri royal family." },
    ],
    ["A Garhwali nath can weigh over 200 grams.", "Galobandh is worn only after marriage.", "Naulakha literally means 'worth nine lakh rupees'."],
  ),
  "West Bengal": make(
    "West Bengal", "state", "Kolkata",
    "Filigree & Shola Pith",
    "Bengali brides wear Sita haar gold necklaces, jhumkas and the white shola-pith mukut on their wedding day.",
    "Bengal's jewelry traditions are steeped in Tagore-era refinement and Durga Puja symbolism — light, lyrical and storied.",
    [
      { name: "Sita Haar", tagline: "Long bridal chain", description: "A multi-layered long gold necklace named after Sita, worn by Bengali brides." },
      { name: "Mukut", tagline: "Shola-pith crown", description: "White conical crowns made from shola-pith reed, worn by both bride and groom." },
      { name: "Ratan Chur", tagline: "Hand harness", description: "A bracelet connected by chains to rings on each finger." },
    ],
    ["Shola-pith is a freshwater plant only found in Bengal.", "Sita haar can have up to 7 layers.", "Bengali brides wear iron bangles (loha) covered in gold."],
  ),

  // Union Territories
  Chandigarh: make(
    "Chandigarh", "state", "Chandigarh",
    "Contemporary Punjabi Gold",
    "A modern hub blending Punjabi kaintha and jhumka traditions with contemporary diamond and platinum design.",
    "Chandigarh's jewelry market caters to both Punjab and Haryana, blending heritage Punjabi designs with modern diamond cuts.",
    [
      { name: "Modern Kaintha", tagline: "Diamond-edge classic", description: "Punjabi kaintha collars updated with diamond pavé borders." },
      { name: "Pippal Patti", tagline: "Leaf danglers", description: "Lightweight gold leaf earrings popular at Punjabi weddings." },
      { name: "Tikka", tagline: "Maang-tikka pendant", description: "Forehead ornaments featuring meenakari and uncut diamonds." },
    ],
    ["Sector 22 is Chandigarh's traditional gold market.", "Chooda ceremonies remain mandatory for brides.", "Platinum is increasingly chosen over gold here."],
  ),
  "Dadra and Nagar Haveli": make(
    "Dadra & Nagar Haveli", "state", "Silvassa",
    "Warli Tribal Silver",
    "Warli and Dhodia tribes wear silver hansli, chunky anklets and beaded necklaces echoing their wall-art motifs.",
    "Dadra & Nagar Haveli's tribal communities maintain jewelry traditions tied to harvest cycles and Warli folk art.",
    [
      { name: "Warli Pendants", tagline: "Folk-art on metal", description: "Silver pendants etched with Warli stick-figure motifs." },
      { name: "Hansli", tagline: "Crescent collar", description: "Solid silver crescent collars worn by Warli and Dhodia women." },
      { name: "Bead Belts", tagline: "Harvest waistbands", description: "Multi-strand bead waistbands worn during the Tarpa harvest dance." },
    ],
    ["Warli motifs are 3,000 years old.", "Tribal silver is melted and remade for each daughter.", "Hansli is gifted by the maternal uncle at puberty."],
  ),
  "Daman and Diu": make(
    "Daman & Diu", "state", "Daman",
    "Coastal Coral & Filigree",
    "Portuguese-influenced filigree gold, coral pendants and shell-bead chokers mark this coastal heritage.",
    "Daman & Diu's 450-year Portuguese legacy shaped a distinct Indo-European jewelry tradition centered on coral and filigree.",
    [
      { name: "Coral Pendants", tagline: "Sea-red gold", description: "Red coral set in 22k gold filigree pendants." },
      { name: "Cordao", tagline: "Twisted gold rope", description: "Heavy twisted gold chains with Portuguese cross pendants." },
      { name: "Shell Chokers", tagline: "Beachcomber craft", description: "Cowrie and conch shell chokers strung with gold beads." },
    ],
    ["Coral was once the region's prime export.", "Filigree workshops still use 200-year-old tools.", "Portuguese cross motifs blend with Hindu lotus."],
  ),
  Delhi: make(
    "Delhi", "state", "New Delhi",
    "Polki & Mughal Jadau",
    "Old Delhi's Dariba Kalan has crafted Mughal-era polki, jadau and meenakari sets for over four centuries.",
    "Delhi's Dariba Kalan jewelry bazaar dates to the Mughal era and remains India's most prestigious centre for polki and jadau.",
    [
      { name: "Polki Sets", tagline: "Uncut Mughal diamonds", description: "Bridal sets featuring uncut diamonds set in 22k gold with reverse meenakari." },
      { name: "Sarpech", tagline: "Royal turban ornament", description: "Mughal-style turban brooches with emerald drops and ruby centres." },
      { name: "Aad", tagline: "Bib-style choker", description: "Wide bib-style chokers covering the neck with kundan, polki and pearl drops." },
    ],
    ["Dariba Kalan was named for its silver coin trade.", "Many Delhi jewelers trace lineage to Shah Jahan's court.", "Sarpech is making a comeback at modern Indian weddings."],
  ),
  Puducherry: make(
    "Puducherry", "state", "Puducherry",
    "Franco-Tamil Temple Gold",
    "A blend of Tamil temple jewelry with delicate French-influenced gold chains and cameo pendants.",
    "Puducherry's 280 years of French rule produced a unique fusion jewelry style — Tamil temple motifs in delicate French gold.",
    [
      { name: "Cameo Pendants", tagline: "French-cut profiles", description: "Carved shell cameos set in 22k gold pendants — a Pondy specialty." },
      { name: "Mango Mala", tagline: "Tamil classic", description: "Repeating gold mango pendants strung in long necklaces." },
      { name: "Bombay Chain", tagline: "French-finish gold", description: "Lightweight, high-polish gold chains in Parisian designs." },
    ],
    ["Pondy jewelers serve French citizens with EU certifications.", "Local goldsmiths blend Tamil and Provençal motifs.", "The town has India's only French-trained jewelry school."],
  ),

  // Islands
  "Andaman and Nicobar": make(
    "Andaman & Nicobar Islands", "island", "Port Blair",
    "Shell, Coral & Coconut",
    "Indigenous communities craft necklaces and earrings from conch shells, red coral, mother-of-pearl and carved coconut.",
    "The Andaman & Nicobar Islands' indigenous tribes — Jarawa, Onge, Sentinelese and Nicobarese — craft jewelry exclusively from sea materials.",
    [
      { name: "Shell Strands", tagline: "Conch & cowrie", description: "Multi-strand necklaces of conch, cowrie and clamshell beads." },
      { name: "Coral Earrings", tagline: "Red sea fire", description: "Red coral earrings — historically used as both ornament and trade currency." },
      { name: "Coconut Discs", tagline: "Carved palm jewelry", description: "Disc-shaped earrings and pendants carved from coconut shells." },
    ],
    ["Some shells are believed to ward off cyclones.", "Coral harvesting is now strictly regulated.", "Nicobarese designs use only naturally bleached white shells."],
  ),
  Lakshadweep: make(
    "Lakshadweep", "island", "Kavaratti",
    "Coral & Cowrie Adornments",
    "Islanders fashion cowrie-shell strands, coral chokers and silver anklets reflecting their Arabian Sea heritage.",
    "Lakshadweep's island communities craft jewelry from Arabian Sea coral, cowrie shells and silver imported via the Malabar Coast.",
    [
      { name: "Cowrie Chokers", tagline: "White shell strands", description: "Tightly strung cowrie-shell chokers worn at island weddings." },
      { name: "Coral Strands", tagline: "Sea-red beads", description: "Long strands of polished red coral beads, often with silver clasps." },
      { name: "Silver Anklets", tagline: "Malabar imports", description: "Light silver anklets traditionally bought from Kerala mainland traders." },
    ],
    ["Cowries were the island's currency until the 1800s.", "Coral jewelry is gifted at every island wedding.", "All silver here is sourced from Kerala mainland."],
  ),
};
