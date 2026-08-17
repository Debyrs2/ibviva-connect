import logo from "@/assets/image.png.asset.json";
import p1 from "@/assets/IMG-20260816-WA0024.jpg.asset.json";
import p2 from "@/assets/IMG-20260726-WA0043.jpg.asset.json";
import p3 from "@/assets/IMG-20260815-WA0019.jpg.asset.json";
import p4 from "@/assets/IMG-20260726-WA0038.jpg.asset.json";
import p5 from "@/assets/image1.jpg.asset.json";
import p6 from "@/assets/image3.jpg.asset.json";
import p7 from "@/assets/image2.jpg.asset.json";

export const logoUrl = logo.url;

export const photos = [
  { url: p1.url, key: "photo1" },
  { url: p2.url, key: "photo2" },
  { url: p3.url, key: "photo3" },
  { url: p4.url, key: "photo4" },
  { url: p5.url, key: "photo5" },
  { url: p6.url, key: "photo6" },
  { url: p7.url, key: "photo7" },
] as const;

export const heroPhotos = [p1.url, p2.url, p5.url, p7.url];

export const CHURCH_NAME = "Igreja Batista Viva em Piedade";
export const ADDRESS = "Rua José Brás Moscow, 701, Piedade, Jaboatão dos Guararapes — PE";
export const MAPS_URL =
  "https://www.google.com/maps/place/Igreja+Batista+Viva+em+Piedade/@-8.1793185,-34.9226492,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1039c76cc19:0xa3933143d2942a46!8m2!3d-8.1793238!4d-34.9200743!16s%2Fg%2F11frs2czzz?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Igreja+Batista+Viva+em+Piedade,+Rua+Jos%C3%A9+Br%C3%A1s+Moscow,+701,+Piedade,+Jaboat%C3%A3o+dos+Guararapes&output=embed";
export const EMAIL = "Igrejab.viva@gmail.com";
export const PHONES = [
  { display: "+55 81 8892-2702", wa: "5581988922702" },
  { display: "+55 81 9929-6565", wa: "5581992296565" },
];
export const SOCIALS = {
  instagram: "https://www.instagram.com/ibviva?igsh=OXgxOGx5a2R1ZjY2",
  facebook: "https://www.facebook.com/share/1LoupHw9tb",
  youtube: "https://www.youtube.com/@ibviva2684",
};
