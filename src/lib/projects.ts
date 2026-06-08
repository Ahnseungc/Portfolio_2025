import { projects, type Project, type ProjectStep } from "@/data/portfolio";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectSteps(project: Project): ProjectStep[] {
  if (project.steps?.length) return project.steps;

  const steps: ProjectStep[] = [
    {
      eyebrow: "01 · 개요",
      title: project.title,
      desc: project.desc,
      did: project.overview,
      image: {
        src: project.thumbnail,
        alt: project.title,
        caption: project.placeholder,
      },
    },
  ];

  project.sections.forEach((section, index) => {
    steps.push({
      eyebrow: `${String(index + 2).padStart(2, "0")} · ${section.title}`,
      title: section.title,
      desc: section.content,
      did: project.highlights[index],
      image: project.images[index] ?? project.images[project.images.length - 1],
    });
  });

  if (project.highlights.length > project.sections.length) {
    const lastHighlight = project.highlights[project.highlights.length - 1];
    steps.push({
      eyebrow: `${String(steps.length + 1).padStart(2, "0")} · 결과`,
      title: "핵심 성과",
      desc: lastHighlight,
      did: project.highlights.slice(-2).join(" "),
      image: project.images[project.images.length - 1],
    });
  }

  return steps;
}
