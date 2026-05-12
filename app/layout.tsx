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
  metadataBase: new URL("https://animare.dev"),
  title: {
    default: "Animare — Software Company | Desarrollo Web de Alto Impacto",
    template: "%s | Animare",
  },
  description:
    "Animare es una empresa de desarrollo de software especializada en crear experiencias digitales de alto impacto. Diseño web premium, apps móviles y sistemas POS con estética editorial y rendimiento extremo.",
  keywords: [
    "desarrollo web",
    "software company",
    "diseño web",
    "desarrollo de software",
    "apps móviles",
    "punto de venta",
    "POS",
    "UI/UX design",
    "Next.js",
    "React",
    "animare",
    "animare.dev",
    "desarrollo web México",
    "empresa de software",
    "páginas web profesionales",
  ],
  authors: [{ name: "Animare", url: "https://animare.dev" }],
  creator: "Animare",
  publisher: "Animare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://animare.dev",
    siteName: "Animare",
    title: "Animare — Software Company | Desarrollo Web de Alto Impacto",
    description:
      "Transformamos visiones técnicas en realidades digitales. Software de vanguardia con estética editorial y rendimiento extremo.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Animare Software Company Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animare — Software Company",
    description:
      "Desarrollo web de alto impacto. Diseño premium y rendimiento extremo.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://animare.dev",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Animare",
  url: "https://animare.dev",
  logo: "https://animare.dev/logo.png",
  description:
    "Empresa de desarrollo de software especializada en experiencias digitales de alto impacto.",
  email: "contacto@animare.dev",
  telephone: "+52-618-332-1927",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  sameAs: [
    "https://www.instagram.com/animare.dev/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-618-332-1927",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${prata.variable} antialiased`}>
        <GlassBackground />
        <div className="noise-overlay" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

