// Generated from the Jewels of India directory Google Sheet.
import amrapaliLogo from "@/assets/brand-logos/amrapali.png";

export interface Brand {
  name: string;
  location: string;
  category: "Diaspora Brand" | "Based in India";
  types: string[];
  description: string;
  website: string;
  logo?: string;
}

export const brands: Brand[] = [
  { name: "Anu Merton", location: "Bengaluru & Jaipur, India", category: "Based in India", types: ["Traditional", "Contemporary"], description: "Handmade Indian jewelry brand founded in 2019, to make traditional Indian jewelry accessible and wearable every day. Works closely with karigars from Jaipur, Jodhpur, and Bihar.", website: "anumerton.com" },
  { name: "BySimran", location: "Pennsylvania, USA", category: "Diaspora Brand", types: ["Contemporary"], description: "Minimalist desi jewelry designed for South Asian and American identities, hypoallergenic, tarnish-free, and made for everyday wear.", website: "bysimran.com" },
  { name: "Kaju Studios", location: "USA", category: "Diaspora Brand", types: ["Contemporary"], description: "Stackable desi jewelry blending South Asian maximalism with everyday wearability. Made in gold vermeil, crafted in Jaipur.", website: "kajustudios.com" },
  { name: "Amrapali", location: "Jaipur, Rajasthan, India", category: "Based in India", types: ["Traditional", "Bridal"], description: "Heritage jewelry house founded in 1978, reviving tribal, fine and uncut gemstone jewelry rooted in Rajasthani traditions.", website: "amrapali.com", logo: amrapaliLogo },
  { name: "Kavya Potluri", location: "Hyderabad, India", category: "Based in India", types: ["Contemporary", "Fine Jewelry"], description: "A Forbes 30 Under 30 Asia luxury demi-fine label, handcrafted in-house, rooted in bold storytelling and intricate craftsmanship.", website: "kavyapotluri.com" },
  { name: "Shahi Qala", location: "Varanasi, India", category: "Based in India", types: ["Traditional"], description: "Reviving the lost art of Banarasi antique diamond jewelry with a focus on heritage craft and timeless design.", website: "shahiqala.com" },
  { name: "Sabyasachi", location: "Kolkata, West Bengal, India", category: "Based in India", types: ["Traditional", "Bridal", "Fine Jewelry"], description: "India's most celebrated couture house, reviving ancient jewelry crafts including jadau, nakashi, and temple jewelry.", website: "sabyasachi.com" },
  { name: "Misho Designs", location: "Mumbai, India", category: "Based in India", types: ["Contemporary", "Fine Jewelry"], description: "Award-winning sculptural jewelry brand worn by Beyonce and Deepika Padukone. Translates traditional Indian silversmithing into modern architectural forms.", website: "mishodesigns.com" },
  { name: "Amama", location: "New Delhi, India", category: "Based in India", types: ["Contemporary", "Traditional"], description: "Handcrafted jewelry brand founded in 2018, inspired by the founder's inherited grandmother's silver collection.", website: "amama.in" },
  { name: "Outhouse Jewellery", location: "Noida, India", category: "Based in India", types: ["Contemporary", "Fine Jewelry"], description: "Bridge-luxury jewelry house founded in 2012 by sisters Kaabia and Sasha Grewal. Bold sculptural designs worn by Alia Bhatt at the Met Gala.", website: "outhouse-jewellery.com" },
  { name: "Baka", location: "Ahmedabad, India", category: "Based in India", types: ["Contemporary"], description: "Slow-design, sustainable, ethically handcrafted jewelry using bamboo, semi-precious stones, and silver.", website: "shopbaka.com" },
  { name: "Bhavya Ramesh", location: "Mumbai, India", category: "Based in India", types: ["Contemporary"], description: "Bold avant-garde silver jewelry known for nail rings and mythological motifs. Handcrafted by artisans in Jaipur.", website: "bhavyaramesh.com" },
];
