import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl, site } from "@/lib/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title = site.title,
  description = site.description,
  path = "/",
  image = "/profile.png",
  type = "website",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    keywords: [...site.keywords],
    authors: [{ name: site.name, url: getSiteUrl() }],
    creator: site.name,
    publisher: site.name,
    category: "technology",
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      locale: site.locale,
      url,
      title,
      description,
      siteName: site.title,
      images: [
        {
          url: ogImage,
          alt: `${site.name} — ${site.jobTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const naverVerification = process.env.NAVER_SITE_VERIFICATION;
  if (googleVerification || naverVerification) {
    metadata.verification = {
      ...(googleVerification ? { google: googleVerification } : {}),
      other: {
        ...(naverVerification ? { "naver-site-verification": naverVerification } : {}),
      },
    };
  }

  return metadata;
}
