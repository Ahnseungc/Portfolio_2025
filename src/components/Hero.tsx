"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="hero" id="top" ref={sectionRef}>
      <div className="hero__center wrap">
        <span className="eyebrow hero__eyebrow" data-reveal="fade">
          FRONTEND ENGINEER
        </span>
        <h1>
          <span className="line" data-reveal="">
            WebView랑 성능,
          </span>
          <br />
          <span className="line" data-reveal="" style={{ "--d": "0.12s" } as React.CSSProperties}>
            <span className="accent">숫자로</span> 확인하고 고칩니다.
          </span>
        </h1>
        <p className="lead" data-reveal="fade" style={{ "--d": "0.22s" } as React.CSSProperties}>
          렌더링·번들·WebView 브릿지 쪽을 주로 해온 프론트엔드 개발자입니다.
          지금은 골드앤컴퍼니, 그 전엔 케어마인더·리케어랩에서 WebView 전환과 모노레포를 맡았습니다. — 안승찬
        </p>
        <div className="hero__actions" data-reveal="fade" style={{ "--d": "0.32s" } as React.CSSProperties}>
          <a className="btn btn--primary" href="#work">
            프로젝트 보기 <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            연락하기
          </a>
        </div>
      </div>
      <div className="scroll-cue">SCROLL</div>
    </header>
  );
}
