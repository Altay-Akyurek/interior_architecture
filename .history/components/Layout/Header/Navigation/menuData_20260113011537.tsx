import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      { label: "Portfolio list", href: "/portfolio" },
      { label: "Portfolio details", href: "/portfolio/portfolio-1" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

