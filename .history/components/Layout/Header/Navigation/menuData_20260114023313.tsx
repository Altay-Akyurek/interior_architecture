import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  {
    label: "Projeler",
    href: "/portfolio",
    submenu: [
      { label: "Projeler Listesi", href: "/portfolio" },
      { label: "Projeler Detayları", href: "/portfolio/portfolio-1" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

