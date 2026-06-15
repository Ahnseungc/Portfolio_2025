"use client";

import { useEffect, useRef } from "react";
import { career } from "@/data/portfolio";

export default function Career() {
  const tlRef = useRef<HTMLDivElement>(null);
  const lineIRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = tlRef.current;
    const lineI = lineIRef.current;
    if (!tl || !lineI) return;

    const items = tl.querySelectorAll<HTMLDivElement>(".tl__item");

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold: 0.4 }
    );
    items.forEach((el) => io.observe(el));

    const onScroll = () => {
      const rect = tl.getBoundingClientRect();
      const h = tl.offsetHeight;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (h + window.innerHeight)));
      lineI.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="timeline section-pad" id="career">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">04 — CAREER</span>
          <h2 className="section-title">경력</h2>
          <p className="lead">다양한 제품에서 프론트엔드 개발 경험을 쌓고 있습니다.</p>
        </div>
        <div className="tl" ref={tlRef}>
          <div className="tl__line">
            <i ref={lineIRef} />
          </div>
          {career.map((item, i) => (
            <div className="tl__item" key={i}>
              <div className="tl__dot" />
              <div className="tl__date">{item.date}</div>
              <div className="tl__role">{item.role}</div>
              <div className="tl__org">{item.org}</div>
              <div className="tl__desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
