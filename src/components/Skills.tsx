"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

const ICON_SLUG: Record<string, string> = {
  // Frontend
  React: "react",
  "Next.js": "nextdotjs",
  "React Native": "react",
  TypeScript: "typescript",
  Electron: "electron",
  // State · Data
  "React Query": "reactquery",
  Zustand: "zustand",
  Recoil: "recoil",
  SWR: "swr",
  Zod: "zod",
  // Styling
  "Tailwind CSS": "tailwindcss",
  Storybook: "storybook",
  "CSS Modules": "css3",
  "Styled Components": "styledcomponents",
  // Testing
  Jest: "jest",
  Vitest: "vitest",
  Cypress: "cypress",
  Playwright: "playwright",
  // Infra · CI/CD
  "GitHub Actions": "githubactions",
  Jenkins: "jenkins",
  AWS: "amazonaws",
  Docker: "docker",
  PM2: "pm2",
  // Tools
  Figma: "figma",
  Cursor: "cursor",
  "Claude Code": "anthropic",
  Jira: "jira",
  Notion: "notion",
};

const DARK_INVERT = new Set([
  "nextdotjs", "cursor", "notion", "zustand", "swr",
  "styledcomponents", "pm2", "recoil",
]);

const CDN = "https://cdn.simpleicons.org";

export default function Skills() {
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
    <section className="skills section-pad" id="skills" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">06 — SKILLS &amp; TOOLS</span>
          <h2 className="section-title" data-reveal="">기술 스택</h2>
          <p className="lead" data-reveal="fade">아래 기술을 사용할 수 있습니다.</p>
        </div>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <div
              className="skill-card"
              key={i}
              data-reveal=""
              style={{ "--d": `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className="skill-card__h">
                <div className="skill-card__ico">{s.ico}</div>
                <h3>{s.label}</h3>
              </div>
              <div className="skill-tags">
                {s.chips.map((c) => {
                  const slug = ICON_SLUG[c];
                  return (
                    <span className="skill-chip" key={c}>
                      {slug && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`${CDN}/${slug}`}
                          alt=""
                          aria-hidden="true"
                          width={14}
                          height={14}
                          className={`skill-chip__ico${DARK_INVERT.has(slug) ? " dark-invert" : ""}`}
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                      {c}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
