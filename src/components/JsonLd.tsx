import { absoluteUrl, getSiteUrl, site } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  const url = getSiteUrl();

  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.jobTitle,
          url,
          email: site.email,
          telephone: site.phone,
          image: absoluteUrl("/profile.png"),
          sameAs: [site.github, site.velog, site.linkedin],
          knowsAbout: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "WebView",
            "Performance Optimization",
            "Frontend Development",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "한림대학교",
          },
          worksFor: {
            "@type": "Organization",
            name: "(주)골드앤컴퍼니",
          },
        }}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.title,
          url,
          description: site.description,
          inLanguage: "ko-KR",
          author: {
            "@type": "Person",
            name: site.name,
          },
        }}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: site.title,
          url,
          mainEntity: {
            "@type": "Person",
            name: site.name,
            jobTitle: site.jobTitle,
            url,
          },
        }}
      />
    </>
  );
}
