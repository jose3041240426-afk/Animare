import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  const firstImage = project.images?.[0];

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Animare`,
      description: project.summary || project.description,
      url: `https://animare.dev/proyectos/${id}`,
      images: firstImage
        ? [{ url: firstImage, width: 1200, height: 630, alt: project.title }]
        : undefined,
    },
    alternates: {
      canonical: `https://animare.dev/proyectos/${id}`,
    },
  };
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
