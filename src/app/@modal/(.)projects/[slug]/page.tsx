import { notFound } from "next/navigation";
import ProjectDetailScroller from "@/components/ProjectDetailScroller";
import ProjectModal from "@/components/ProjectModal";
import { getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <ProjectModal>
      <ProjectDetailScroller project={project} />
    </ProjectModal>
  );
}
