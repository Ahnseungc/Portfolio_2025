"use client";

import { useEffect, useRef } from "react";
import { awards } from "@/data/portfolio";

export default function Awards() {
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
    <section className="awards section-pad" id="awards" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">04 — AWARDS &amp; TALKS</span>
          <h2 className="section-title" data-reveal="">활동과 수상</h2>
        </div>
        <div className="awards-list">
          {awards.map((a, i) => (
            <div
              className="award"
              key={i}
              data-reveal="fade"
              style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}
            >
              <div className="award__year">{a.year}</div>
              <div className="award__main">
                <h3>{a.title}</h3>
                <div className="award__org">{a.org}</div>
              </div>
              <div className={`award__kind${a.isTalk ? " award__kind--talk" : ""}`}>
                {a.kind}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
