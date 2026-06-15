import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fa",
    theme_color: "#3182f6",
    lang: "ko",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: absoluteUrl("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
