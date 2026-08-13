export interface CsvJewelryPiece {
  name: string;
  description: string;
  imageUrl: string;
  source: string;
}

export interface CsvRegion {
  state: string;
  about: string;
  pieces: CsvJewelryPiece[];
}

/** Generated from the Jewels of India dataset. */
export const csvRegions: CsvRegion[] = [
  {
    "state": "Jammu & Kashmir",
    "about": "Jammu and Kashmir is a union territory administered by India, covering the southern and southwestern parts of the Kashmir region. Srinagar serves as the summer capital and Jammu as the winter capital. The region is known for its mountains, valleys, and scenic landscapes.",
    "pieces": [
      {
        "name": "Halqaband",
        "description": "A traditional tight choker, the halqaband is worn around the neck. It is usually made of gold and has interlocking sections joined together with thread.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Halqaband_001.jp",
        "source": "https://www.mygoldguide.in/kashmiri-jewellery-traditional-gold-jewellery-designs-from-jammu-kashmir"
      },
      {
        "name": "Dejihor",
        "description": "Worn by every Pandit woman as a symbol of her marriage, the dejihor is a dangler earring that hangs from the upper portion of the ear. It is believed to have been designed by the great Kashmiri acharyas to infuse divine strength in married women.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Dejihor_001.jpg",
        "source": "https://www.mygoldguide.in/kashmiri-jewellery-traditional-gold-jewellery-designs-from-jammu-kashmir"
      },
      {
        "name": "Gunus",
        "description": "An ornament for the wrist, gunus is a thick gold bangle and has the head of a snake or a lion at both ends. This design is one of many gold designs inspired by wildlife.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Gunus_001.jpg",
        "source": "https://www.mygoldguide.in/kashmiri-jewellery-traditional-gold-jewellery-designs-from-jammu-kashmir"
      }
    ]
  },
  {
    "state": "Himachal Pradesh",
    "about": "Himachal Pradesh is situated in the Himalayas and is famous for its scenic mountain towns, snow-clad peaks, adventure sports, and vibrant Tibetan-Buddhist culture. It is a top destination for nature lovers and thrill-seekers alike.",
    "pieces": [
      {
        "name": "mulmentho",
        "description": "A traditional head and side-of-face ornament worn by women in the Kinnaur district.",
        "imageUrl": "https://indianbijou.wordpress.com/wp-content/uploads/2015/06/himachal-head-ornament-mool.jpg",
        "source": "https://indianbijou.wordpress.com/2015/06/06/himachal-pradesh-jewellery/"
      },
      {
        "name": "Shringar-patti",
        "description": "A head accessory that includes a fringe worn on either side of the face, consisting of a star or geometrical shaped pieces linking to each other. There are also moon or crescent shaped plaques sometimes enameled, suspended on to the middle forehead.",
        "imageUrl": "https://indianbijou.wordpress.com/wp-content/uploads/2015/06/himachal-pradesh-ornament-shingarpatti.jpg",
        "source": "https://indianbijou.wordpress.com/2015/06/06/himachal-pradesh-jewellery/"
      },
      {
        "name": "fibula",
        "description": "A traditional, ornate silver cloak clasp or shawl fastener, also known locally as a tomukch or bamno",
        "imageUrl": "https://indianbijou.wordpress.com/wp-content/uploads/2015/06/fibula.jpg",
        "source": "https://indianbijou.wordpress.com/2015/06/06/himachal-pradesh-jewellery/"
      }
    ]
  },
  {
    "state": "Punjab",
    "about": "Punjab is a state at the heart of India's Sikh community. Its name means \"land of five rivers.\" The region features rich farmlands, a deep history tied to the Indus Valley Civilization, and a vibrant culture famous for Bhangra dance and its distinct cuisine.",
    "pieces": [
      {
        "name": "latkan nath",
        "description": "The latkan nath stands out from the rest with its unique embellishment that includes a floral motif that is attached to the chain of the nath.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542142/Latkan_Nath.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-punjabi-bride/"
      },
      {
        "name": "ChandBali",
        "description": "Crescent or round shaped earring is elegant yet bold with its intricate designs and drop stones that comprise of pearls or precious stones.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542143/Chandbali.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-punjabi-bride/"
      },
      {
        "name": "Saggi Phul",
        "description": "A central gold head stud that supports the phulkari dupatta, the Saggi phul is also embossed with floral motifs",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542143/Saggi.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-punjabi-bride/"
      }
    ]
  },
  {
    "state": "Uttarakhand",
    "about": "Uttarakhand is a state in northern India nestled in the Himalayas. Often called Devbhoomi, meaning \"Land of the Gods,\" its culture is a vibrant Himalayan tradition deeply rooted in Hinduism and community life.",
    "pieces": [
      {
        "name": "Bulaq",
        "description": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-punjabi-bride/",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Wearing_gold_in_Uttarakhand_Bulaq_001.jpg",
        "source": "https://www.mygoldguide.in/uttarakhand-traditional-jewellery-charm-of-pahari-women"
      },
      {
        "name": "Kaanphool",
        "description": "‘Kaan’ means ear and ‘phool’ means flower. Made of gold, kaanphool are earrings carved with floral motifs that usually cover the entire ear. Jaunsari women most commonly wear these.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Wearing_gold_in_Uttarakhand_Kaanphool_001.jpg",
        "source": "https://www.mygoldguide.in/uttarakhand-traditional-jewellery-charm-of-pahari-women"
      },
      {
        "name": "Pahunchi",
        "description": "pahunchi are gold bangles worn by women on special events. They are popular in the Kumaon and Garhwal regions and are another form of auspicious jewellery for married women. Typically, you’ll see women wearing such jewellery during important family functions and festivals. What makes these bangles unique is how they are made using small gold beads studded on a red cloth.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/Wearing_gold_in_Uttarakhand_Pahunchi_001.jpg",
        "source": "https://www.mygoldguide.in/uttarakhand-traditional-jewellery-charm-of-pahari-women"
      }
    ]
  },
  {
    "state": "Haryana",
    "about": "Haryana is a state in northern India with the Yamuna River running along its eastern border with Uttar Pradesh. Its capital, Chandigarh, is shared with Punjab and is celebrated for its modernist architecture and gridlike street plan, designed by Swiss architect Le Corbusier.",
    "pieces": [
      {
        "name": "Mohan Mala",
        "description": "A necklace that is made by stringing together a series of golden beads",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786569245/Traditional-Jewelry-of-Haryana-24.jpg",
        "source": "https://bridaljewellerybox.blogspot.com/2018/05/long-live-jewellery-heritage-of-haryana.html"
      },
      {
        "name": "Chhaj",
        "description": "A head accessory that is made of silver, it sits pretty on the head with the fringe-like patterns covering half the face",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786569245/c00d47dbebe40ac7da24601407a00715.jpg",
        "source": "https://bridaljewellerybox.blogspot.com/2018/05/long-live-jewellery-heritage-of-haryana.html"
      },
      {
        "name": "Aarsi",
        "description": "A ring with a mirror as the centrepiece.When not in use, the mirror can be covered with a lid attached to it.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786569244/92d64e65552cf5771e207c3c6fb7adfd--indian-bridal-indian-style.jpg",
        "source": "https://bridaljewellerybox.blogspot.com/2018/05/long-live-jewellery-heritage-of-haryana.html"
      }
    ]
  },
  {
    "state": "Delhi",
    "about": "Delhi, officially the National Capital Territory (NCT) of Delhi, is a megacity and union territory of India, home to New Delhi, the nation's capital. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, alongside the sprawling Jama Masjid mosque and Chandni Chowk, a vibrant bazaar filled with food carts, sweet shops, and spice stalls.",
    "pieces": [
      {
        "name": "Kundan Jewelry",
        "description": "A style of Highly refined gold-foil gem-setting that creates dense, regal bridal necklace and earring sets.Kundan uses glass or synthetic stones set in gold foil, making it a lighter and more budget-friendly choice",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRVIweh2TpL0-NcjtomTL5rye32IDrA-fddWCTn5Xqylx3F_LFSG_GC0&s=10",
        "source": "Google"
      },
      {
        "name": "Polki Jewelry",
        "description": "High-end uncut diamond and gemstone jewellery created by embedding stones into heated gold frames filled with lac.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7-ntf4VpsZKpNwnF384JKXo_B2qhZ1GyqEbSzMl-dw&s=10",
        "source": "Google"
      },
      {
        "name": "Meenakari Jewelry",
        "description": "An elaborate art combining goldsmith techniques and vibrant enamel painting, often depicting birds, flowers, and fish on gold.",
        "imageUrl": "https://www.culturalindia.net/iliimages/Meenakari-Jewelry-1.jpg",
        "source": "https://www.culturalindia.net/jewellery/types/meenakari.html"
      }
    ]
  },
  {
    "state": "Rajasthan",
    "about": "Rajasthan is a state in northwestern India and the largest Indian state by area. Its culture is a vibrant tapestry of royal Rajput heritage, characterized by bold colors, grand forts, deeply rooted folk music, and warm hospitality.",
    "pieces": [
      {
        "name": "Borla / Maang tikka",
        "description": "Maang tikka is known as Borla in Rajasthan. Unlike the regular ones, it is spherical in shape and is made of gold. Traditionally a Rajsathani Borla is studded with kundan, pearls, and Meenakari work. These days’ brides wear it with two-sided chains known as Sheeshfool.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/2798/8644/files/20_600x600.jpg?v=1594714355",
        "source": "https://meirajewellery.com/en-us/pages/rajasthani-jewellery"
      },
      {
        "name": "Gajara(Bangles)",
        "description": "Bangadi has a thick lining and small gold protrusions.Traditionally, Bangadi used to be made in gold and plastic but now many variations of it are available.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/2798/8644/files/rajasthan_gajra.jpg?v=1594712295",
        "source": "https://meirajewellery.com/en-us/pages/rajasthani-jewellery"
      },
      {
        "name": "Haath Phool",
        "description": "Haath Phool is a piece of jewellery which adorns the back of the palm and the wrist. It is an accessory that has one or multiple delicate chains connected to a bangle or a bracelet with an adjustable ring. Royal Haath Phools are made of precious metals and stones like gold, meenakari, kundan, and sometimes Jadau.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/2798/8644/files/MJ-PNJ-02-XJET-01.jpg?v=1594712855",
        "source": "https://meirajewellery.com/en-us/pages/rajasthani-jewellery"
      }
    ]
  },
  {
    "state": "Uttar Pradesh",
    "about": "Uttar Pradesh is a state in northern India and, with over 241 million inhabitants, the most populated state in the country. It is famous for the Taj Mahal, the ghats of Varanasi, classical Kathak dance, and Awadhi cuisine. The state is also celebrated for its vibrant handicrafts, including Chikankari embroidery, Zardozi metalwork, and Banarasi sarees.",
    "pieces": [
      {
        "name": "Passa and Chik",
        "description": "The Passa, a side headpiece, and the Chik, a gold choker, are often associated with Mughal and Awadhi traditions.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/1194/1498/files/Latest_Bridal_Passa_Designs.jpg?v=1740033643",
        "source": "https://www.memeraki.com/blogs/posts/bridal-jewelry-across-india-a-legacy-of-craft-culture-and-captivating-history?srsltid=AfmBOopzCfkY49DhncTvxx-ATizIOa3jOnXMeQLZgf7jSB62mBD0V46k#uttar-pradesh"
      },
      {
        "name": "Katesari",
        "description": "Katesari is a type of choker necklace belonging to Uttar Pradesh. It is frequently made of silver and comprises parts with a transparent glass stone with a red dot in the middle that is foil-backed.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-I2hLcomE2PZSrWZVBWZPdtROhvzT0K_3IFsEwB7Ng&s=10",
        "source": "https://www.aurusjewels.com/blogs/news/north-indian-wedding-jewelry-designs?srsltid=AfmBOortGLm4PC8OpCXFJInQUdPJ1W6TMCRW8jlZs9MM9nVYx8BrLUe8"
      },
      {
        "name": "Bichhua",
        "description": "Toe rings traditionally worn by married Hindu women, often crafted in silver.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhCjdjJUaKKVD5y-wbz9mAFrUI6WFpvwIJ--C2yc0vw&s=10",
        "source": "Google"
      }
    ]
  },
  {
    "state": "Bihar",
    "about": "Bihar is a state in eastern India, bordering Nepal and divided by the River Ganges. It is home to important Buddhist pilgrimage sites, including the Mahabodhi Temple in Bodh Gaya, where the Buddha is said to have meditated under the Bodhi Tree. Madhubani painting, also known as Mithila painting, is a world-renowned art form from the region, often depicting mythological themes.",
    "pieces": [
      {
        "name": "Sita Haar",
        "description": "A statement-making long necklace forged out of gold and dangles down to the bride’s waist.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558489/Screenshot_2026-08-12_at_2.14.42_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-bihari-bride/"
      },
      {
        "name": "Dholna",
        "description": "The Dholna is a necklace featuring an ornate gold drum-shaped locket. It is worn not only on wedding days but also during festive occasions",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558388/Screenshot_2026-08-12_at_2.13.02_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-bihari-bride/"
      },
      {
        "name": "Chandrahar",
        "description": "A traditional layered necklace crafted from gold and pearls, featuring dual lockets on either side adorned with floral motifs.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558278/Screenshot_2026-08-12_at_2.11.11_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-bihari-bride/"
      }
    ]
  },
  {
    "state": "Sikkim",
    "about": "Sikkim is a state in northeast India, bordered by Bhutan, Tibet, and Nepal. It is home to glaciers, alpine meadows, and thousands of varieties of wildflowers. Steep mountain paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700s.",
    "pieces": [
      {
        "name": "Yencho  earrings",
        "description": "Yencho is a type of earring that originates from Bhutan and is mostly worn by Bhutia women. They are traditionally flat and circular. These earrings are symbolic and convey meaningful messages like grace, elegance, and good fortune.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/inline-images/Yencho%20earrings-min-min_0.jpg",
        "source": "https://www.mygoldguide.in/fascinating-sikkimese-jewellery-designs"
      },
      {
        "name": "Khao Sikkim necklace (pendant)",
        "description": "Khao pendant represents the faith of the Bhutanese people and symbolises the abstract representation of a mandala (meaning the circle of life). The pendant shape, whether circular or rectangular, symbolises the religious beliefs of Bhutia tribes.",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/inline-images/Khao%20pendant-min-min.jpg",
        "source": "https://www.mygoldguide.in/fascinating-sikkimese-jewellery-designs"
      },
      {
        "name": "Kilip (head ornament)",
        "description": "Head ornaments called ‘Kilips’ or a clip are traditional bridal adornments. These are exquisite pieces that are crafted from gold and feature intricate nature-inspired designs, typically in the form of moon cycles – a full moon or crescent shapes, which is a particularly favoured motif. Designs etched or carved on the Kilip are nature-centric and the different shapes and designs are true renditions of Sikkimese symbolism",
        "imageUrl": "https://www.mygoldguide.in/sites/default/files/inline-images/Kilip-min-min.jpg",
        "source": "https://www.mygoldguide.in/fascinating-sikkimese-jewellery-designs"
      }
    ]
  },
  {
    "state": "Arunachal Pradesh",
    "about": "Arunachal Pradesh is a state in northeast India, formerly known as the North-East Frontier Agency until 1972. It is home to a rich diversity of tribes, including the Adi, Apatani, Monpa, Nyishi, Galo, Tagin, and Wancho, each with its own language, customs, and social structure.",
    "pieces": [
      {
        "name": "benyop",
        "description": "A  belt on which series of three, five, seven or nine brass discs are strung on a cane, screwpine fiber or leather cord. The largest disc, its spiral motif represents the wheel of life, is placed at the centre, the others arranged in graduated sizes.",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7mWkqhr9FORlNEXi0DW80EooG0XwzsFlw15ockYcZ5UVC92vc_im0UgMN8FUuh7q63ghgjIJw7PqfguweSfTLJhdDpjscZuxDs0DfjgcAkb8s5uHsw8a_sV8rDeMqOkkqLB0jDX93FGiM/s1600/adi+minyong3.jpg",
        "source": "https://local-moda.blogspot.com/2012/12/tribal-jewelry-and-adornments-of.html"
      },
      {
        "name": "gichli",
        "description": "A pair of huge trumpet-shaped silver earrings worn in the stretched earlobe holes",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_ta9GihgS7KuBI7Zvb6KVc7dD8JEoAU2m3_TcYbeRhp5DhcuYr1r4bm1NKYMvnDihrU4zM-RDS80QeP_EzpkIFhmljTGNz8kgZ3LmzqXZgetbyioMBICLnxm3GodJBOZlSZWG0tdAhloe/s1600/adi-galo+jew2.jpg",
        "source": "https://local-moda.blogspot.com/2012/12/tribal-jewelry-and-adornments-of.html"
      },
      {
        "name": "lenchi",
        "description": "A traditional silver fillet or crown-like head ornament worn by women of the Aka tribe in Arunachal Pradesh, India.",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGHuDw_Q67BjV3pmc-1f5HUnDCLOkpzaH-7s43901SnEvoOISByjeUMmin1otNN6PBQOaHxO39nq3wfWsPT42llWHbGXkEpTGLb5U2IE8QM6ETsMomzBC_Qados60eXeBhS97JjIHSTW7j/s1600/miji+jew.jpg",
        "source": "https://local-moda.blogspot.com/2012/12/tribal-jewelry-and-adornments-of.html"
      }
    ]
  },
  {
    "state": "Nagaland",
    "about": "Nagaland is a mountainous state in northeast India, bordering Myanmar. The Naga people fought alongside the British in World War I, and during World War II, the historic Battle of Kohima was fought in the region. Nagaland is known for its distinct festivals, most notably the Hornbill Festival, as well as its unique weaving traditions and vibrant cultural heritage.",
    "pieces": [
      {
        "name": "Kuki Jewelry",
        "description": "The Kuki tribe's jewelry features snake-inspired patterns, rooted in a folktale of a demonic serpent who fell for a maiden's beauty. Enchanted by each other, the snake's movements and scales inspired the maiden to weave his patterns into fabric and jewelry, a tradition that continues to this day.",
        "imageUrl": "https://jayahegvknewmuseumstore.wordpress.com/wp-content/uploads/2019/08/08.png",
        "source": "https://jayahegvknewmuseumstore.wordpress.com/2019/08/01/tales-of-the-east-insight-into-naga-jewellery-traditions/"
      },
      {
        "name": "Naga Beaded Jewelry",
        "description": "The origin of Naga beads is not known, though it has been written about extensively. Naga people consider beads to be talismans, equivalent in value to gems.Among the Nagas, necklaces that are thick with many strands are ordinarily worn by womenfolk. They believed that the thicker the neckpiece, the higher the presumed wealth of the wearer and her family.",
        "imageUrl": "https://jayahegvknewmuseumstore.wordpress.com/wp-content/uploads/2019/08/07.jpg?w=1440&h=1354",
        "source": "https://jayahegvknewmuseumstore.wordpress.com/2019/08/01/tales-of-the-east-insight-into-naga-jewellery-traditions/"
      },
      {
        "name": "Konyak Collar",
        "description": "The Konyak collar is skillfully made using ancient deomani glass beads that are short, tubular or cylindrical, and adorned with mini brass heads. The collar serves as a symbolic descriptor of the wearer’s tribal orientation and social status.",
        "imageUrl": "https://jayahegvknewmuseumstore.wordpress.com/wp-content/uploads/2019/08/06.jpg?w=1440&h=1080",
        "source": "https://jayahegvknewmuseumstore.wordpress.com/2019/08/01/tales-of-the-east-insight-into-naga-jewellery-traditions/"
      }
    ]
  },
  {
    "state": "Manipur",
    "about": "Manipur is a state in northeastern India known for its beautiful hills, lakes, and vibrant culture. It is famous for its graceful and classical Manipuri dance style. Traditional celebrations such as Yaoshang and Lai Haraoba are an important part of local life.",
    "pieces": [
      {
        "name": "Kharu",
        "description": "Kharu is a thick, rigid bangle made of gold or silver, often worn in pairs. The design is simple yet bold, sometimes adorned with intricate engravings and floral patterns. Brides and married women primarily wear Kharu during special occasions and festivals.",
        "imageUrl": "https://res-console.cloudinary.com/jvo5qmfw/thumbnails/v1/image/upload/v1786539442/S2hhcnU=/preview",
        "source": "https://www.theculturegully.in/post/traditional-manipuri-bridal-jewelry-a-guide-to-sacred-gold-ornaments-and-their-cultural-significanc"
      },
      {
        "name": "Heibi Mapal",
        "description": "Heibi Mapal is a thick traditional gold necklace whose name literally means \"Heibi plant-like necklace.\" The Heibi plant is revered in Manipuri folklore for its association with protection, healing, and prosperity, and is believed to ward off evil and negative influences. It is a prominent piece of both traditional and bridal Manipuri jewelry.",
        "imageUrl": "https://res-console.cloudinary.com/jvo5qmfw/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/SGVpYmlfTWFwYWw=/template_primary",
        "source": "https://www.theculturegully.in/post/traditional-manipuri-bridal-jewelry-a-guide-to-sacred-gold-ornaments-and-their-cultural-significanc"
      },
      {
        "name": "Khownappi",
        "description": "Traditional Manipuri earrings made of gold, often bejeweled with emeralds or rubies. They feature elaborate floral or geometric designs with various dangling tiers. Despite their ornate appearance, they are lightweight and worn as a mark of grace and cultural pride.",
        "imageUrl": "https://res-console.cloudinary.com/jvo5qmfw/thumbnails/v1/image/upload/v1786539447/S2hvd25hcHBp/drilldown",
        "source": "https://www.theculturegully.in/post/traditional-manipuri-bridal-jewelry-a-guide-to-sacred-gold-ornaments-and-their-cultural-significanc"
      }
    ]
  },
  {
    "state": "Mizoram",
    "about": "Mizoram is a state in northeastern India, known as the \"Land of the Hill People.\" It shares borders with Myanmar and Bangladesh and features a heavily forested, mountainous landscape. The state is predominantly inhabited by various Mizo ethnic groups, and the traditional bamboo dance known as Cheraw is a defining cultural hallmark.",
    "pieces": [
      {
        "name": "Pumtek Beads Necklace",
        "description": "A Necklace made from Pumtek beads , an ancient, highly valued stone beads made from fossilized or opalized palm wood.",
        "imageUrl": "https://www.ethnicjewelsmagazine.co.uk/wp-content/uploads/2019/11/1-5.jpg",
        "source": "Google"
      },
      {
        "name": "Thi Hna",
        "description": "A prominent traditional necklace made from large, prized amber beads, often worn during festivals and auspicious occasions.",
        "imageUrl": "https://www.1stdibs.com/furniture/folk-art/tribal-art/rare-burmese-mizoram-amber-fossil-tribal-necklace-late-19th-century/id-f_26027852/",
        "source": "Google"
      },
      {
        "name": "vakiria",
        "description": "A traditional, ornate headpiece worn by Mizo women during cultural dances",
        "imageUrl": "https://kr.pinterest.com/pin/859132066454361321/",
        "source": "Google"
      }
    ]
  },
  {
    "state": "Tripura",
    "about": "Tripura is a hilly state in northeast India, home to a diverse mix of tribal cultures and religious groups. Bengali and Kokborok are the primary languages alongside English, reflecting a blend of Bengali culture and 19 distinct indigenous tribal communities, including the Tripuri, Reang, and Chakma.",
    "pieces": [
      {
        "name": "Sangai",
        "description": "Hairpins used by both women and men.During the old days, Reang men had long hair, so they made buns using Sangai, a type of hairpin.",
        "imageUrl": "https://static.wixstatic.com/media/ba2ea9_c1a45ea37140469ea02d334f4f866971~mv2.png/v1/fill/w_578,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba2ea9_c1a45ea37140469ea02d334f4f866971~mv2.png",
        "source": "https://www.adivasilivesmatter.com/post/the-traditional-ornaments-of-the-reang-tribe-of-tripura"
      },
      {
        "name": "Berberang Yaksos",
        "description": "Berberang Yaksos are spiralled and flattened silver bangles.",
        "imageUrl": "https://static.wixstatic.com/media/ba2ea9_9a61a6beedd849b68a53e4c820f1aae5~mv2.png/v1/fill/w_700,h_522,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba2ea9_9a61a6beedd849b68a53e4c820f1aae5~mv2.png",
        "source": "https://www.adivasilivesmatter.com/post/the-traditional-ornaments-of-the-reang-tribe-of-tripura"
      },
      {
        "name": "Wareih",
        "description": "A type of earring worn in the upper part of the ear.",
        "imageUrl": "https://static.wixstatic.com/media/ba2ea9_f42ad9df88ea4127a7da2c92d751e9ec~mv2.png/v1/fill/w_700,h_526,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba2ea9_f42ad9df88ea4127a7da2c92d751e9ec~mv2.png",
        "source": "The Traditional Ornaments Of The Reang Tribe Of Tripura"
      }
    ]
  },
  {
    "state": "Meghalaya",
    "about": "Meghalaya is a state in northeast India, home to some of the wettest places on earth. Cherrapunji (Sohra) is famous for landmarks including Nohkalikai Falls, India's tallest plunge waterfall, the Seven Sisters Falls, and the limestone Mawsmai Cave.",
    "pieces": [
      {
        "name": "Ki Sohshkor",
        "description": "A pair of Long, elegant gold earrings that loop downward.",
        "imageUrl": "https://in.pinterest.com/pin/219128338110242234/",
        "source": "https://www.youtube.com/shorts/8fzInmA2PyU"
      },
      {
        "name": "Yu Paila",
        "description": "A traditional necklace made from a thick string of vivid red coral beads, heavily worn during festivals and ceremonies.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786570930/Screenshot_2026-08-12_at_5.40.29_PM.png",
        "source": "https://www.youtube.com/shorts/8fzInmA2PyU"
      },
      {
        "name": "U Shan Ryndang",
        "description": "A traditional semi-circular choker necklace worn by the Khasi and Pnar communities. It is also called Kenopad",
        "imageUrl": "https://www.instagram.com/p/BO7WnuTD3oQ/",
        "source": "https://www.youtube.com/shorts/8fzInmA2PyU"
      }
    ]
  },
  {
    "state": "Assam",
    "about": "Assam is a state in northeastern India known for its wildlife, archaeological sites, and tea plantations. Its most prominent festival is Bihu. Key attractions include the UNESCO-listed Kaziranga National Park, home to the one-horned rhinoceros, Majuli, the world's largest river island, and the scenic hill station of Haflong.",
    "pieces": [
      {
        "name": "Loka Paro",
        "description": "A gold beaded necklace with a pendant inspired by the shape of pigeons.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557157/Screenshot_2026-08-12_at_1.52.31_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-assamese-bride/"
      },
      {
        "name": "Kerumoni",
        "description": "A round gem-encrusted pendant with a hollow center, the kerumoni is an Assamese necklace with a colorful beaded necktie that can be adjusted for comfort.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557057/Screenshot_2026-08-12_at_1.50.51_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-assamese-bride/"
      },
      {
        "name": "Dholbri",
        "description": "A unique drum-shaped pendant studded with gemstones or adorned with meenakari work, the dholbri is a necklace design that is authentically unique to Assam and is attached with an adjustable silken chain.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557006/Screenshot_2026-08-12_at_1.50.01_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewelry-guide-for-the-assamese-bride/"
      }
    ]
  },
  {
    "state": "West Bengal",
    "about": "West Bengal is a state in eastern India, nestled between the Himalayas and the Bay of Bengal. Its capital, Kolkata (formerly Calcutta), retains architectural and cultural remnants of its time as a major East India Company trading post. Traditional clothing includes handloom sarees such as Tant, Baluchari, and Jamdani.",
    "pieces": [
      {
        "name": "Mukut",
        "description": "the mukut is a mini gold Indian-style tiara that sits on the Bengali bride’s crown.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786556732/Screenshot_2026-08-12_at_1.45.26_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-bengali-bride/"
      },
      {
        "name": "Mantasha",
        "description": "A broad, delicately hewn wristlet with golden lacework, the mantasha also includes a dainty ring that hooks onto one of the bride’s fingers",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786556823/Screenshot_2026-08-12_at_1.46.58_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-bengali-bride/"
      },
      {
        "name": "Bauti",
        "description": "A traditional half-cut bangle that’s filled with lac to preserves its shape and coated with gold, the bauti is worn by women across Bengal",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786556796/Screenshot_2026-08-12_at_1.46.32_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-bengali-bride/"
      }
    ]
  },
  {
    "state": "Jharkhand",
    "about": "Jharkhand is a state in eastern India known for its waterfalls, the elegant Jain temples of Parasnath Hill, and the elephants and tigers of Betla National Park. The state has a rich tribal heritage, with unique art forms like Sohrai painting and Dhokra metal craft, folk dances like Chhau and Paika, and festivals such as Sarhul and Karma that celebrate the earth and nature.",
    "pieces": [
      {
        "name": "Payari",
        "description": "Payari is a foot ornament made of bronze, brass, or silver, worn by both adults and children. It can be either smooth or engraved and is solid with no opening or link, meaning it is slipped directly onto the foot.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786567950/Screenshot_2026-08-12_at_4.52.27_PM.png",
        "source": "https://www.instagram.com/p/DQgnli2k7B7/?img_index=2"
      },
      {
        "name": "Khambhiya",
        "description": "Khambhiya is a silver necklace worn around the neck that resembles a vine or twig. It is intricately decorated with designs of flowers, leaves, and peacocks. The embossed patterns are often filled with red and black enamel detailing, adding color and depth to its design.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786567834/Screenshot_2026-08-12_at_4.50.07_PM.png",
        "source": "https://www.instagram.com/p/DQgnli2k7B7/?img_index=2"
      },
      {
        "name": "Khongoso",
        "description": "The name \"Khongoso\" comes from the word meaning \"to tear hair\" , as it is attached by parting the hair.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786567708/Screenshot_2026-08-12_at_4.48.22_PM.png",
        "source": "https://www.instagram.com/p/DQgnli2k7B7/?img_index=2"
      }
    ]
  },
  {
    "state": "Odisha",
    "about": "Odisha (formerly Orissa) is an eastern Indian state on the Bay of Bengal, known for its tribal cultures and ancient Hindu temples. Its culture is centered around the Jagannath cult in Puri and is celebrated for its inclusivity, the renowned Odissi dance form, distinct handloom textiles, and grand festivals like Rath Yatra.",
    "pieces": [
      {
        "name": "Malatada (Waist Chain of Gandia)",
        "description": "A waist chain worn by the Gandia women of the Nabarangpur region of south Odisha. It is worn around the midsection during marriage ceremonies and festive occasions.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560759/Screenshot_2026-08-12_at_2.52.33_PM.png",
        "source": "https://lunarsecstacy.com/2021/05/29/a-few-of-the-widely-used-ethnic-tribal-jewellery-of-odisha-east-india/"
      },
      {
        "name": "Sipna (Hairpin of Dongria Kandha)",
        "description": "Sipna is a scissor-shaped aluminum hairpin worn by Dongria Kandha women of Odisha, known for their distinctive hairstyles. It is used to adorn the bun during weddings and festive events.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560632/Screenshot_2026-08-12_at_2.50.27_PM.png",
        "source": "https://lunarsecstacy.com/2021/05/29/a-few-of-the-widely-used-ethnic-tribal-jewellery-of-odisha-east-india/"
      },
      {
        "name": "Dabulubeida (Coin Necklace of Bonda)",
        "description": "Dabulubeida is a traditional coin necklace worn by the Bonda women of Mudulipada in the Malkangiri region of Odisha.The coin jewelry and coin finger rings serve as markers of an individual's monetary status within the community.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560533/Screenshot_2026-08-12_at_2.48.47_PM.png",
        "source": "https://lunarsecstacy.com/2021/05/29/a-few-of-the-widely-used-ethnic-tribal-jewellery-of-odisha-east-india/"
      }
    ]
  },
  {
    "state": "Chhattisgarh",
    "about": "Chhattisgarh is a heavily forested state in central India, known for its temples and waterfalls. With an ancient history dating back to the 4th-century kingdom of Dakshin Kosala, the region finds mention in the Ramayana. Known for its 36 traditional forts, it was historically ruled by the Kalachuri dynasty.",
    "pieces": [
      {
        "name": "Nagmori",
        "description": "An Armlet shaped like a serpant,especially popular among the Gond,Agaria and Raut communities",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560264/Screenshot_2026-08-12_at_2.44.18_PM.png",
        "source": "https://www.instagram.com/p/DUheDtrj2Z3/?img_index=6"
      },
      {
        "name": "Gotla",
        "description": "A neck ornament for a child,meant to keep the neck straight.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560163/Screenshot_2026-08-12_at_2.42.38_PM.png",
        "source": "https://www.instagram.com/p/DUheDtrj2Z3/?img_index=6"
      },
      {
        "name": "Kardhan",
        "description": "The Kardhan is a waist belf fasened with a clip and worn by women of almost all communities in Chhattisgarh.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786560050/Screenshot_2026-08-12_at_2.40.45_PM.png",
        "source": "https://www.instagram.com/p/DUheDtrj2Z3/?img_index=6"
      }
    ]
  },
  {
    "state": "Madhya Pradesh",
    "about": "Madhya Pradesh is a large state in central India, home to major UNESCO World Heritage Sites including the Khajuraho temples, Sanchi Stupa, and Bhimbetka Rock Shelters. It is also renowned for its wildlife, with Kanha, Bandhavgarh, and Pench National Parks among its key attractions. Major cities include Gwalior, Bhopal, Indore, and the sacred city of Ujjain.",
    "pieces": [
      {
        "name": "Thappa and thussa jewelry",
        "description": "Thappa literally means stamping and so this form of jewellery-making results from embossing sheets of gold, mixed with metals like copper, beaten into wafer-thin plates, with floral and geometric patterns. In Thussa work goldsmiths braid together strands of gold to make elaborate neckpieces, bangles and arm bands.",
        "imageUrl": "https://assets.cntraveller.in/photos/60b9f25b689bf55e0664e17e/16:9/w_960,c_limit/Thappa%20and%20thussa%20jewellery-654491-1366x768.jpg",
        "source": "https://www.cntraveller.in/story/what-bring-back-your-mp-trip/"
      },
      {
        "name": "Hansuli",
        "description": "Hansuli (also spelled Hasli) is a traditional, rigid, collar-style necklace that rests flat against the collarbone.",
        "imageUrl": "https://i.etsystatic.com/33420287/r/il/c8ce5b/3619308059/il_fullxfull.3619308059_mjde.jpg",
        "source": "Google"
      },
      {
        "name": "Theva Jewelry",
        "description": "Thewa is a 400-year-old art of making gold filigree on the molten glass with patterns inspired by nature and mythology.This inherited art is practiced by a few Soni families in Mandsaur district of Madhya Pradesh.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786632851/Screenshot_2026-08-13_at_10.54.05_AM.png",
        "source": "https://www.mptourism.com/madhya-pradesh-thewa-jewellery.html"
      }
    ]
  },
  {
    "state": "Gujarat",
    "about": "Gujarat is a state along the western coast of India with a culture that is a vibrant blend of ancient traditions, commerce, and spirituality, deeply rooted in Hindu, Jain, and Islamic influences. It is renowned for colorful festivals, especially the nine-night Navratri Garba dance, as well as vibrant handicrafts like Bandhani textiles.",
    "pieces": [
      {
        "name": "Kundan Butti",
        "description": "A pair of kundan encrusted earrings with chains that are attached to the head to support them",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558840/Screenshot_2026-08-12_at_2.20.34_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-gujarati-bride/"
      },
      {
        "name": "Dodi",
        "description": "A gold necklace with a luxurious antique finish, the dodi boasts of intricate meenakari and kundan work on the surface.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558749/Screenshot_2026-08-12_at_2.19.03_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-gujarati-bride/"
      },
      {
        "name": "Shinka",
        "description": "Forged out of gold and encrusted with gemstones, this headgear is unique to Gujarati brides and features drop beads that caress her forehead.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786558686/Screenshot_2026-08-12_at_2.17.55_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-gujarati-bride/"
      }
    ]
  },
  {
    "state": "Maharashtra",
    "about": "Maharashtra has a history spanning thousands of years, evolving from ancient kingdoms into a medieval power center under the Maratha Empire, founded by Chhatrapati Shivaji Maharaj in the 17th century. Its traditional folk arts include Lavani, a musical dance form, Powada, ballads honoring Shivaji Maharaj, and Warli painting, a celebrated tribal art form",
    "pieces": [
      {
        "name": "Brahmani Nath",
        "description": "The Brahmani Nath is crafted out of gold, pearls and beads and donned by women on auspicious or festive occasions.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542524/Screenshot_2026-08-12_at_9.48.40_AM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-maharashtrian-bride/"
      },
      {
        "name": "Kolhapuri Saaj",
        "description": "Originating from the Kolhapur region in Maharashtra, the stunning Kolhapuri Saaj Necklace is usually gifted by the groom’s family to the bride, and contains 21 leaves/pendants, out of which ten depict the different forms of Lord Vishnu.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542498/Screenshot_2026-08-12_at_9.48.14_AM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-maharashtrian-bride/"
      },
      {
        "name": "Thushi",
        "description": "A choker necklace crafted out of gold beads in varying sizes, the Thushi is adjustable thanks to a soft thread that can be adjusted according to the wearer’s convenience.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786542483/Screenshot_2026-08-12_at_9.47.58_AM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-maharashtrian-bride/"
      }
    ]
  },
  {
    "state": "Goa",
    "about": "Goa is the smallest state in India, located on the southwest coast along the Arabian Sea. It is famous for its long sandy beaches, Portuguese colonial history, vibrant nightlife, and distinctive colorful architecture.",
    "pieces": [
      {
        "name": "Piddukachi Kankna",
        "description": "Embellished with beads that come in a variety of colors,It is a pair of light bangles that are paired with other bangles. The black beaded PidduKachi Kakna, however, remains a favorite amongst most Konkani women.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786559578/Screenshot_2026-08-12_at_2.32.53_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-konkani-bride/"
      },
      {
        "name": "Galsiri",
        "description": "A necklace with multiple coin lockets that are embossed with images of deities, the Galsiri is made out of gold and coral beads and comes with an adjustment necktie.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786559462/Screenshot_2026-08-12_at_2.30.56_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-konkani-bride/"
      },
      {
        "name": "Pichodi",
        "description": "Crafted out of gold and adorned with a delicate crown-like design",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786559459/Screenshot_2026-08-12_at_2.30.21_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/traditional-jewellery-guide-for-the-konkani-bride/"
      }
    ]
  },
  {
    "state": "Karnataka",
    "about": "Karnataka is a state in southwest India with coastlines along the Arabian Sea. Its capital, Bengaluru (formerly Bangalore), is a high-tech hub known for its shopping and nightlife. The state is also renowned for vibrant dance forms like Yakshagana and Dollu Kunitha, and for historic landmarks including Hampi and the Mysuru Palace.",
    "pieces": [
      {
        "name": "Kokkethathi (Necklace)",
        "description": "Kokkethathi - The half moon shaped pendant strung on a necklace is the traditional bridal jewellery of Coorgi or Kodava bride.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786541535/Kokkethathi.png",
        "source": "https://www.southindianjewels.in/post/traditional-jewellery-of-kannadiga-bride"
      },
      {
        "name": "Lakshmi sara (Necklace)",
        "description": "Lakshmi sara is the necklace a bride wears for the representations and blessing of goddess Lakshmi in her new life.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786541536/Lakshmi_Sara.png",
        "source": "https://www.southindianjewels.in/post/traditional-jewellery-of-kannadiga-bride"
      },
      {
        "name": "Giliola Sara (Necklace)",
        "description": "Earrings with plenty of precious stones and pearls studded in the shape of parrots. The word Gili means parrot in Kannada and Ole means danglers. Gili ole represents parrot danglers.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786541536/Giliola_Sara.png",
        "source": "https://www.southindianjewels.in/post/traditional-jewellery-of-kannadiga-bride"
      }
    ]
  },
  {
    "state": "Kerala",
    "about": "Kerala is a state on the Malabar Coast of southern India, known for its palm-lined beaches and backwaters — a vast network of canals and lagoons. Inland, the Western Ghats rise steeply, with mountain slopes supporting tea, spice, and coffee plantations.",
    "pieces": [
      {
        "name": "Elakkathali",
        "description": "An enchanting collar necklace that matches every movement and sparkles with every move.",
        "imageUrl": "https://www.vadaamalar.com/pub/media/catalog/product/cache/f419bba492ccf21e7b4de75f01a0f32d/n/e/neca428.jpg",
        "source": "https://www.vadaamalar.com/pub/media/catalog/product/cache/f419bba492ccf21e7b4de75f01a0f32d/n/e/neca428.jpg"
      },
      {
        "name": "lakshmi kasumala",
        "description": "The traditional lakshmi kasu necklace is all about Lekshmi Devi, the deity of wealth, embossed in dainty coins. Crafted out of gold, the traditional lakshmi kasu necklace is crafted out of gold, making it a classic ornament.",
        "imageUrl": "https://storage.googleapis.com/blog-bucket-staging/Media/c4e4b14d-original_jos-alukkas-product-fh5mxb-1024x899.png",
        "source": "https://www.josalukkasonline.com/blog/keralas-dazzling-heritage-a-deep-dive-into-traditional-kerala-jewellery-designs/?srsltid=AfmBOoqWve6VCZC0lQTnF74AyDdm4yCYwh4Dz_MXAVmkZElPNdNDrGDD"
      },
      {
        "name": "Palakka mala",
        "description": "Palakka means the seed of the Pala tree. The true charm of a palakka necklace lies in the green stones that the necklace is embedded with. This traditional Gold Jewellery piece is celebrated for its allure and cultural symbolism. They also feature emerald stones in between",
        "imageUrl": "https://storage.googleapis.com/blog-bucket-staging/Media/4c0301c8-original_jos-alukkas-gold-necklace-ja270h-slmc-1024x899.png",
        "source": "https://www.josalukkasonline.com/blog/keralas-dazzling-heritage-a-deep-dive-into-traditional-kerala-jewellery-designs/?srsltid=AfmBOoqWve6VCZC0lQTnF74AyDdm4yCYwh4Dz_MXAVmkZElPNdNDrGDD"
      }
    ]
  },
  {
    "state": "Tamil Nadu",
    "about": "Tamil Nadu is the southernmost state of India, known as the \"land of temples.\" It features intricate Dravidian architecture with towering gopurams (gateway towers). Hinduism is central to the daily life of most residents, with grand temple festivals celebrated throughout the year.",
    "pieces": [
      {
        "name": "Vanki (Armlets)",
        "description": "These ‘V’ shaped armlets have a unique design in the centre and delicately carved peacocks or florals on the side.",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIyA0cU_5To3C7H_eGmWKKQXVJDJ0z7EYpzyFB9GO3x6e2dBkcGcYIgRXis3XNKOW8SQa9Os2QGxHrmqFUAJ-OfBIrYVRKBZ-DLDoq_gEdIU_idJCXfzR6BOnFl37xl5QJ_MqaBsYO1gI/s1600/Vanki.jpg",
        "source": "http://blog.zaamordiamonds.com/2016/08/traditional-jewellery-of-tamil-nadu.html"
      },
      {
        "name": "Jadanagam (Hair Accessory)",
        "description": "A jadanagam (or jadai nagam) is a traditional South Indian hair ornament shaped like a serpent that is intertwined down a braided plait, while a kunjam (or kunjalam) is the decorative tassel or hanging floral/metal bell piece worn at the very bottom end of the braid.",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvAUIkKK5-Ai2Av9RzLHackqqDQK299elps_YmuZzlq0B3ggRC9RWFnl1nPdVbhbrOQs_2zva34SFfXJQgmBSxR2OOHTqSzsfIczIfBJWsSoOxIdukKArwt0MKEdncbJKNb5eyOb3WD5A/s1600/Jadanagam.jpg",
        "source": "http://blog.zaamordiamonds.com/2016/08/traditional-jewellery-of-tamil-nadu.html"
      },
      {
        "name": "Maangamalai ( mango necklace)",
        "description": "The Maangamalai is a necklace of mangoes, stunning in appearance, consisting of stone studded gold mangoes struck together with a huge pendant of encrusted peacock.",
        "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1yfwS8hYFTHPnZJs_rSUdKyvVApxtstRbaXGnyYpT8BZI3HZA-snn7AgdH8aZVJdUhHERDrhIRqRoVuA_dEbiWFWXEPiPA7o_LAKjvJ-_qYT0WmLrpFXVmQfRkW8Ae27BfVEueC98wqA/s1600/Maangamaalai.jpg",
        "source": "http://blog.zaamordiamonds.com/2016/08/traditional-jewellery-of-tamil-nadu.html"
      }
    ]
  },
  {
    "state": "Andhra Pradesh",
    "about": "Andhra Pradesh is a state with a rich blend of Vedic traditions, ancient Buddhist influence, and royal Nizami heritage. It is characterized by the Telugu language, spicy cuisine, and classical arts such as the Kuchipudi dance form, along with festivals like Ugadi.",
    "pieces": [
      {
        "name": "Tirmani",
        "description": "Consisting of three different gemstones, the Tirmani is an aristocratic Nizami necklace with a pendant encrusted with three different gemstones held in place with multiple pearl strands reflecting the classic Nawabi design.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557650/Screenshot_2026-08-12_at_2.00.44_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/a-traditional-jewelry-guide-for-the-telugu-bride/"
      },
      {
        "name": "Nakshi Haram",
        "description": "Nakshi (carved) jewelry is an ancient art that involves sculpting sheets of gold into gods, goddesses, fairies and mythical Creatures. It features delicate and intricate gold carvings that are further enhanced by precious stones and gold pearls.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557614/Screenshot_2026-08-12_at_2.00.08_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/a-traditional-jewelry-guide-for-the-telugu-bride/"
      },
      {
        "name": "Gundla Haram",
        "description": "Crafted from golden beads, this timeless and elegant necklace has multiple beaded layers with a pendant on one or both sides combining them together.",
        "imageUrl": "https://res.cloudinary.com/jvo5qmfw/image/upload/v1786557745/Screenshot_2026-08-12_at_2.02.20_PM.png",
        "source": "https://weddingsutra.com/bride/bridal-fashion/a-traditional-jewelry-guide-for-the-telugu-bride/"
      }
    ]
  },
  {
    "state": "Telangana",
    "about": "Telangana is India's youngest state, formed on June 2, 2014, yet it boasts a history spanning over 2,500 years on the Deccan Plateau. It is known for landmarks such as Golconda Fort and Charminar, as well as the remarkable architectural legacy of the Kakatiya dynasty.",
    "pieces": [
      {
        "name": "Guttapusalu Necklace",
        "description": "A signature traditional necklace characterized by clustered strands of pearls that resemble small fish shoals, often paired with rubies or emeralds.",
        "imageUrl": "https://www.google.com/imgres?q=Guttapusalu%20Necklace&imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FJpMAAOSwBJ1l-p83%2Fs-l1200.jpg&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fitm%2F388886316017&docid=inpz2h73NV3TCM&tbnid=kZpdIpdKIL96TM&vet=12ahUKEwj3vPaGi5yWAxXsMlkFHRb2H_QQnPAOegQIRBAA..i&w=899&h=1200&hcb=2&ved=2ahUKEwj3vPaGi5yWAxXsMlkFHRb2H_QQnPAOegQIRBAA",
        "source": "Google"
      },
      {
        "name": "Karimnagar Silver Filigree Jewelry",
        "description": "Delicate and intricate jewelry and accessories crafted by twisting ultra-thin silver threads into lace-like patterns, a GI-tagged art form of the region.",
        "imageUrl": "https://www.google.com/imgres?q=Karimnagar%20Silver%20Filigree%20jewelry&imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0686%2F9437%2F6495%2Ffiles%2Fsilver-filigree-of-karimnagar-gi-tagged-metal-craft-of-telangana-make-an-image-about-this-topic.png%3Fv%3D1770718823&imgrefurl=https%3A%2F%2Fkrafteria.com%2Fblogs%2Fnews%2Fsilver-filigree-of-karimnagar%3Fsrsltid%3DAfmBOookDQpoDUtbyZGF1Wrer_oTIDI4wpHxZpDdLOUpdhvXuCOra9rH&docid=wGhMKlr6o0x09M&tbnid=ZmEML6oVvoZ_3M&vet=12ahUKEwi20JCii5yWAxVTK1kFHUz6BM8QnPAOegUI5gUQAA..i&w=1248&h=832&hcb=2&ved=2ahUKEwi20JCii5yWAxVTK1kFHUz6BM8QnPAOegUI5gUQAA",
        "source": "Google"
      },
      {
        "name": "Satlada",
        "description": "A necklace comprises seven strands of pearls with each having a pendant crafted with gold and precious stones.",
        "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9WGjXwpHgs80BxzJlqR8dqFAFjCKguQ6KxgPAc5-oP0ObIh_2zx_XRF-j5N30Z_uCd8tCMRaIk9x-v5Jdw3gpiq50bH9-hnelIYDTjm3sUceNqeHTco_N",
        "source": "Google"
      }
    ]
  },
  {
    "state": "Andaman & Nicobar Islands",
    "about": "The Andaman and Nicobar Islands is a union territory of India comprising 836 islands, of which only 31 are inhabited. Key attractions include Radhanagar Beach on Havelock Island, the historic Cellular Jail in Port Blair, snorkeling at Elephant Beach, the ruins on Netaji Subhash Chandra Bose Island, and the limestone caves of Baratang.",
    "pieces": [
      {
        "name": "Shell Jewelry",
        "description": "Necklaces, bracelets, earrings, and even anklets are crafted with different types and sizes of shells. These pieces often feature intricate designs and vibrant colours.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRyB2jo2xhgs2nZn3s7IB4H53UgYtnEK791bgj-u9Nw&s=10",
        "source": "https://www.andamantourism.org/things-to-buy-from-andaman/"
      },
      {
        "name": "Wooden Jewelry",
        "description": "Wooden beads and pieces are used to create unique jewellery pieces. Necklaces, bracelets and earrings showcase the natural beauty of the wood while incorporating traditional and contemporary designs.",
        "imageUrl": "https://asiainch.org/wp-content/uploads/2001/07/4-3.png",
        "source": "https://www.andamantourism.org/things-to-buy-from-andaman/"
      },
      {
        "name": "Pearl Jewelry",
        "description": "In the Andaman Islands, particularly around the region of Neil Island, pearl farming is a significant industry. As a result, you can find a variety of exquisite pearl jewellery crafted by local artisans. Pearl necklaces featuring pearls of varying sizes and shapes are a common and popular item.",
        "imageUrl": "https://www.andamantourism.org/wp-content/uploads/2024/02/Watch-Out-for-Pearl-Jewellery.jpg",
        "source": "https://www.andamantourism.org/things-to-buy-from-andaman/"
      }
    ]
  },
  {
    "state": "Lakshadweep",
    "about": "Lakshadweep is India's smallest union territory, made up of 36 islands, of which 10 are inhabited, with the rest consisting of atolls and reefs. Kavaratti, one of the more developed islands, is home to dozens of mosques, including the ornately decorated Ujra Mosque, as well as the Kavaratti Aquarium, which showcases regional fish, shark, and coral species",
    "pieces": [
      {
        "name": "Laccadive Jewelry",
        "description": "The jewelry is expertly produced by local craftsmen using a combination of designs made of gold, coral, and pearls. The patterns often reflect the island’s natural beauty, with motifs influenced by sea life and local flora.",
        "imageUrl": "https://www.youngintach.org/public/frontend_assets/images/LACCADIVE-JEWELRY-2.jpg",
        "source": "https://www.youngintach.org/public/maps_craft_lakshadweep_island"
      },
      {
        "name": "Silver Anklets",
        "description": "Light silver anklets traditionally bought from Kerala mainland traders.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkuelnWYHMasWu1Oq5gY7Dswc_82iwLy3skHRhwtlEA&s=10",
        "source": "Google"
      }
    ]
  }
];

const normalize = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/\bislands?\b/g, "").replace(/[^a-z]/g, "");

const index = new Map(csvRegions.map((r) => [normalize(r.state), r]));

export function getCsvRegion(stateName: string): CsvRegion | undefined {
  return index.get(normalize(stateName));
}
