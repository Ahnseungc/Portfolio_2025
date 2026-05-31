"use client";

import { useEffect, useRef } from "react";
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
          <h2 className="section-title" data-reveal="">바꾼 것들</h2>
          <p className="lead" data-reveal="fade">
            구조를 뜯어고치고, 아키텍처를 전환하고, 더 나은 방식으로 다시 지은 작업들.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <article className="proj-card" key={i} data-reveal="">
              <div className="proj-card__media">
                <span className="proj-card__tag">{p.tag}</span>
                <div className="placeholder">{p.placeholder}</div>
              </div>
              <div className="proj-card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-card__meta">
                  {p.chips.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
                <a className="proj-card__link" href={p.caseHref}>
                  케이스 보기 <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}

          <a
            className="proj-card proj-card--more"
            href="https://github.com/Ahnseungc"
            target="_blank"
            rel="noopener"
            data-reveal=""
          >
            <span className="mono">MORE ON GITHUB</span>
            <h3>더 많은 작업과<br />실험들 →</h3>
            <span className="url">github.com/Ahnseungc</span>
          </a>
        </div>
      </div>
    </section>
  );
}
