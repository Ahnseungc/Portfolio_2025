"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ProjectImage({
  src,
  alt,
  caption,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, 720px",
}: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <figure className={`proj-img proj-img--placeholder ${className}`.trim()}>
        <div className="proj-img__slot">
          <span className="proj-img__slot-label">이미지 추가 예정</span>
          <span className="proj-img__slot-path">{src}</span>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className={`proj-img ${className}`.trim()}>
      <div className="proj-img__frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="proj-img__media"
          onError={() => setError(true)}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
