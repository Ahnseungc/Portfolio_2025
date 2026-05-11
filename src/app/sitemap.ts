import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const modified = new Date();

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(({ slug }) => ({
    url: `${base}/projects/${slug}`,
    lastModified: modified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    {
      url: base,
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
