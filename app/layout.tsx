import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wodnystandart.pl"),
  title: "Wodny Standart | Inteligentne ciepło dla Twojego domu",
  description:
    "Profesjonalny montaż i serwis kotłów w Krakowie. Ponad 20 lat doświadczenia, szybka reakcja i nowoczesne instalacje grzewcze.",
  openGraph: {
    title: "Wodny Standart",
    description:
      "Montaż kotłów, serwis i pompy ciepła w Krakowie. Szybko, czysto i z doświadczeniem.",
    images: [
      {
        url: "/images/hero-technician.jpg",
        width: 1280,
        height: 853,
        alt: "Technik Wodny Standart przy instalacji grzewczej",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-bg)] font-[var(--font-body)] text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
