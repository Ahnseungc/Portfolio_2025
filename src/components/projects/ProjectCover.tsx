"use client";

import Image from "next/image";

type ProjectCoverProps = {
  src: string;
  alt: string;
  /** DESIGN.md: product shadow only on imagery */
  withProductShadow?: boolean;
  className?: string;
};

export function ProjectCover({
  src,
  alt,
  withProductShadow = true,
  className = "",
}: ProjectCoverProps) {
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
      <div
        className={`relative flex aspect-square w-full items-center justify-center rounded-lg bg-apple-parchment ${withProductShadow ? "shadow-apple-product" : ""} ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-1/2 w-1/2 object-contain opacity-80" />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-lg bg-apple-parchment ${withProductShadow ? "shadow-apple-product" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={82}
        className="object-cover"
      />
    </div>
  );
}
