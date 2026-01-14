import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import ConditionalLayout from "@/components/ConditionalLayout";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PUAR İç Mimarlık | Fonksiyonel & Estetik Mekânlar",
  description: "İç Mimar Web Sitesi - Konut, Ofis, Ticari Projeler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <SessionProviderWrapper>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <NextTopLoader color='#f9c78f' />
              <ConditionalLayout>
                {children}
              </ConditionalLayout>
            </Aoscompo>
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
