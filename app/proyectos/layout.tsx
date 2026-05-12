import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — Portafolio de Desarrollo Web",
  description:
    "Explora nuestro portafolio de proyectos: e-commerce, plataformas interactivas 3D, sistemas POS y apps móviles construidos con tecnología de vanguardia.",
  openGraph: {
    title: "Proyectos | Animare",
    description:
      "Portafolio de desarrollo web: e-commerce, experiencias 3D, sistemas POS y más.",
    url: "https://animare.dev/proyectos",
  },
  alternates: {
    canonical: "https://animare.dev/proyectos",
  },
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
