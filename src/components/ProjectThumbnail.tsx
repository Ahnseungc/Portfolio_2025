"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectThumbnailProps = {
  src: string;
  alt: string;
  placeholder: string;
};

export default function ProjectThumbnail({ src, alt, placeholder }: ProjectThumbnailProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="placeholder">{placeholder}</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 760px) 100vw, 50vw"
      className="proj-card__thumb"
      onError={() => setError(true)}
    />
  );
}
