import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
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
    return createPageMetadata({
      title: "프로젝트를 찾을 수 없습니다",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${project.title} · 안승찬`,
    description: project.desc,
    path: `/projects/${slug}`,
    image: project.thumbnail,
    type: "article",
  });
}

function ProjectJsonLd({
  project,
  slug,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.desc,
    url: absoluteUrl(`/projects/${slug}`),
    codeRepository: project.repoUrl,
    programmingLanguage: project.chips.filter((chip) =>
      ["TypeScript", "JavaScript", "React", "Next.js"].includes(chip)
    ),
    author: {
      "@type": "Person",
      name: "안승찬",
      url: absoluteUrl("/"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="project-page" id="main">
      <ProjectJsonLd project={project} slug={slug} />
      <div className="wrap">
        <Link href="/#work" className="project-page__back">
          ← 프로젝트 목록
        </Link>
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
