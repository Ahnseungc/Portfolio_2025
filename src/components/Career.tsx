"use client";

import { useEffect, useRef } from "react";
import { career } from "@/data/portfolio";

export default function Career() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollDir = useRef<"down" | "up">("down");
  const prevY = useRef(0);

  // 스크롤 방향 추적
  useEffect(() => {
    prevY.current = window.scrollY;
    const track = () => {
      scrollDir.current = window.scrollY > prevY.current ? "down" : "up";
      prevY.current = window.scrollY;
    };
    window.addEventListener("scroll", track, { passive: true });
    return () => window.removeEventListener("scroll", track);
  }, []);

  // 아이템 + 섹션 헤드 — 위아래 방향 애니메이션
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".tl-s__item");
    const reveals = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const track = section.querySelector<HTMLElement>(".tl-s__track");

    // 타임라인 라인: 섹션 진입 시 채워짐
    const lineIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (track) track.classList.toggle("visible", e.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    lineIO.observe(section);

    // 아이템: 위아래 방향에 따라 아래·위서 들어옴
    const itemIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.dataset.from = scrollDir.current;
            el.classList.add("in");
          } else {
            el.classList.remove("in");
            delete el.dataset.from;
          }
        });
      },
      { threshold: 0.25 }
    );
    items.forEach((el) => itemIO.observe(el));

    // 섹션 헤드 reveals
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.dataset.from = scrollDir.current;
            el.classList.add("in");
          } else {
            el.classList.remove("in");
            delete el.dataset.from;
          }
        });
      },
      { threshold: 0.3 }
    );
    reveals.forEach((el) => revealIO.observe(el));

    return () => {
      lineIO.disconnect();
      itemIO.disconnect();
      revealIO.disconnect();
    };
  }, []);

  return (
    <section className="timeline section-pad" id="career" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">04 — CAREER</span>
          <h2 className="section-title" data-reveal="">경력</h2>
          <p className="lead" data-reveal="fade">
            다양한 제품에서 프론트엔드 개발 경험을 쌓고 있습니다.
          </p>
        </div>

        <div className="tl-s">
          <div className="tl-s__track">
            <div className="tl-s__fill" />
          </div>

          {career.map((item, i) => (
            <div key={i} className="tl-s__item">
              <div className="tl-s__dot" />
              <div className="tl-s__date">{item.date}</div>
              <div className="tl-s__role">{item.role}</div>
              <div className="tl-s__org">{item.org}</div>
              <div className="tl-s__desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
