import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();

  return {
    name: "안승찬 포트폴리오",
    short_name: "안승찬",
    description: "프론트엔드 개발자 포트폴리오 — Next.js, React Native, Flutter, 웹뷰 브릿지",
    start_url: "/",
    display: "browser",
    background_color: "#f5f5f7",
    theme_color: "#f5f5f7",
    lang: "ko",
    icons: [
      {
        src: `${base}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
