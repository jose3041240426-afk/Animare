import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de Tu Proyecto",
  description:
    "¿Tienes una idea? Contáctanos para transformarla en una realidad digital de alto impacto. Desarrollo web, apps móviles y sistemas POS a tu medida.",
  openGraph: {
    title: "Contacto | Animare",
    description:
      "Contáctanos para iniciar tu próximo proyecto digital de alto impacto.",
    url: "https://animare.dev/contacto",
  },
  alternates: {
    canonical: "https://animare.dev/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
