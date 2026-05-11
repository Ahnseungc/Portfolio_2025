import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";
import SubNav from "@/components/layout/SubNav";
import { ProjectBody } from "@/components/projects/ProjectBody";
import { ProjectCover } from "@/components/projects/ProjectCover";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const base = getSiteUrl();

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${base}/projects/${slug}`;
  const ogImage = new URL(project.image, base).toString();

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.tags, project.category, "안승찬", "프론트엔드"],
    authors: [{ name: "안승찬", url: base }],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: pageUrl,
      siteName: "안승찬 포트폴리오",
      title: `${project.title} | 안승찬`,
      description: project.description,
      images: [
        {
          url: ogImage,
          alt: `${project.title} 썸네일`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | 안승찬`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const coverAlt = `${project.title} 대표 이미지`;

  return (
    <>
      <SubNav title={project.title} ctaHref={project.githubUrl} ctaLabel="GitHub" />
      <article className="min-h-screen bg-apple-canvas pb-24 pt-8 md:pb-32">
        <div className="mx-auto max-w-[980px] px-4 md:px-6">
          <Link
            href="/#projects"
            className="inline-flex text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary hover:underline"
          >
            ← 프로젝트 목록
          </Link>

          <header className="mt-10 space-y-4">
            <p className="text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-apple-ink-muted-48">
              {project.year} · {project.category}
            </p>
            <h1 className="text-[34px] font-semibold leading-[1.47] tracking-[-0.374px] text-apple-ink md:text-[40px] md:leading-[1.1] md:tracking-[-0.01em]">
              {project.title}
            </h1>
            <p className="max-w-2xl text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-apple-ink-muted-80">
              {project.description}
            </p>
            <p className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-apple-ink">
              {project.team} · {project.role}
            </p>
            <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-apple-ink-muted-80">
              Impact: {project.impact}
            </p>
          </header>

          <div className="mt-12 max-w-3xl">
            <ProjectCover src={project.image} alt={coverAlt} withProductShadow />
          </div>

          <div className="mt-16 max-w-3xl">
            <ProjectBody text={project.fullDescription} />
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-apple-hairline bg-apple-canvas px-4 py-3 text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-apple-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white transition-transform active:scale-95"
            >
              데모 · 문서
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-apple-primary bg-apple-canvas px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary transition-transform active:scale-95"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
