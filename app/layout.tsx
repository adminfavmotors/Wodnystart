import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wodnystandart.pl"),
  title: "Wodny Standart | Inteligentne ciepło dla domu w Krakowie",
  description:
    "Profesjonalny montaż i serwis kotłów w Krakowie. Ponad 20 lat doświadczenia, szybki serwis i nowoczesne instalacje grzewcze.",
  openGraph: {
    title: "Wodny Standart 2026",
    description:
      "Montaż kotłów, serwis i pompy ciepła w Krakowie. Szybko, czysto i z doświadczeniem.",
    images: [
      {
        url: "/images/hero-technician.jpg",
        width: 1280,
        height: 853,
        alt: "Technik serwisujący instalację grzewczą",
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
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--bg)] font-[var(--font-body)] text-[var(--text)] antialiased`}
      >
        <div className="ambient-grid" />
        {children}
      </body>
    </html>
  );
}
