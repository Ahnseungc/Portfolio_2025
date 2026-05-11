import { projects } from "@/data";

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return projects.map((p) => ({ slug: p.slug }));
}
