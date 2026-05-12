import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos Creativos — Componentes UI y Herramientas",
  description:
    "Colección de componentes React, botones animados, efectos de cursor y herramientas de diseño para elevar la calidad visual de tus proyectos web.",
  openGraph: {
    title: "Recursos Creativos | Animare",
    description:
      "Componentes UI premium, botones animados y herramientas de diseño web gratuitas.",
    url: "https://animare.dev/recursos",
  },
  alternates: {
    canonical: "https://animare.dev/recursos",
  },
};

export default function RecursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
