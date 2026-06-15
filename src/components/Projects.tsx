"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="projects section-pad" id="work" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">02 — SELECTED WORK</span>
          <h2 className="section-title" data-reveal="">프로젝트</h2>
          <p className="lead" data-reveal="fade">
            GitHub에 공개된 저장소입니다. 회사 프로젝트는 경력에서 확인할 수 있습니다.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <Link
              className="proj-card"
              href={`/projects/${p.slug}`}
              key={p.slug}
              data-reveal=""
              scroll={false}
            >
              <div className="proj-card__media">
                <span className="proj-card__tag">{p.tag}</span>
                <ProjectThumbnail
                  src={p.thumbnail}
                  alt={p.title}
                  placeholder={p.placeholder}
                />
              </div>
              <div className="proj-card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-card__meta">
                  {p.chips.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
                <span className="proj-card__link">
                  자세히 보기 <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          ))}

          <a
            className="proj-card proj-card--more"
            href="https://github.com/Ahnseungc"
            target="_blank"
            rel="noopener"
            data-reveal=""
          >
            <span className="mono">GITHUB</span>
            <h3>더 많은 저장소 →</h3>
            <span className="url">github.com/Ahnseungc</span>
          </a>
        </div>
      </div>
    </section>
  );
}
