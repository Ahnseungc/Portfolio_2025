import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }

  return {
    title: `${project.title} · 안승찬`,
    description: project.desc,
    openGraph: {
      title: project.title,
      description: project.desc,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <div className="wrap">
        <Link href="/#work" className="project-page__back">
          ← 프로젝트 목록
        </Link>
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
