import type { Metadata } from "next";
import { Prata, Inter } from "next/font/google";
import "./globals.css";
import GlassBackground from "./components/GlassBackground";
import Footer from "./components/Footer";


const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Animare",
  description: "A state-of-the-art interactive platform designed for visual excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${prata.variable} antialiased`}>
        <GlassBackground />
        <div className="noise-overlay" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
