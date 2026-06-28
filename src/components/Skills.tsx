"use client";

import { useEffect, useRef } from "react";
import { stack } from "@/data/portfolio";

const CDN = "https://cdn.simpleicons.org";

function monogram(name: string): string {
  const map: Record<string, string> = {
    "C++": "C++", "GRPC": "gRPC", "OpenGL": "GL",
    "NodeJS": "N", "NextJS": "N", "Next.js": "N",
    "React Native": "RN", "Styled Comp.": "SC",
    "GitHub Actions": "GA", "Claude Code": "CC",
  };
  if (map[name]) return map[name];
  return name.replace(/[^A-Za-z0-9+]/g, "").slice(0, 2);
}

function iconSrc(slug: string, isDark: boolean): string {
  const color = isDark ? "aeb6c1" : "4e5968";
  return `${CDN}/${slug}/${color}`;
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  /* IO 리빌 + 다크모드 아이콘 재색칠 */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".tech");

    /* 스크롤 리빌 */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
    setTimeout(() => items.forEach((el) => el.classList.add("in")), 1000);

    /* 다크/라이트 전환 시 아이콘 색 업데이트 */
    const updateIcons = () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      section.querySelectorAll<HTMLImageElement>("img.tech__img").forEach((img) => {
        const slug = img.dataset.slug;
        if (slug) img.src = iconSrc(slug, isDark);
      });
    };
    updateIcons();

    const mo = new MutationObserver(updateIcons);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  const total = stack.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <section className="skills section-pad" id="skills" ref={sectionRef}>
      <div className="wrap">

        {/* 헤더 */}
        <header className="ts-head">
          <span className="ts-eyebrow">
            <span className="ts-eyebrow__dot" />
            TECH STACK
          </span>
          <h2 className="ts-h1">다뤄온 기술 스택</h2>
          <p className="ts-lead">
            언어부터 프론트엔드·인프라·도구까지, 제품을 만들며 실제로 사용한 도구들입니다.
          </p>
          <div className="ts-total">
            <span>총</span>
            <b>{total}</b>
            <span>개의 기술 스택</span>
          </div>
        </header>

        {/* 카테고리 카드 스택 */}
        <div className="cat-stack">
          {stack.map((cat, ci) => {
            const isDark = typeof document !== "undefined"
              ? document.documentElement.dataset.theme === "dark"
              : false;

            return (
              <section key={ci} className="cat">
                <div className="cat__head">
                  <span className="cat__idx">
                    {String(ci + 1).padStart(2, "0")} · {cat.en}
                  </span>
                  <h3 className="cat__title">{cat.title}</h3>
                  <span className="cat__count">총 {cat.items.length}개의 기술 스택</span>
                </div>
                <div className="cat__rule" />
                <div className="tech-grid">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="tech"
                      style={{ "--d": `${(i * 0.03).toFixed(2)}s` } as React.CSSProperties}
                    >
                      <div className="tech__tile">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="tech__img"
                          alt={item.n}
                          crossOrigin="anonymous"
                          src={iconSrc(item.s, isDark)}
                          data-slug={item.s}
                          onError={(e) => {
                            const tile = (e.currentTarget as HTMLImageElement).parentElement!;
                            tile.innerHTML = `<div class="tech__mono">${monogram(item.n)}</div>`;
                          }}
                        />
                      </div>
                      <div className="tech__name">{item.n}</div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </section>
  );
}
