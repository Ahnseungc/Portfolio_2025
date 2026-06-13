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
            구조를 바꾸고,
          </span>
          <br />
          <span className="line" data-reveal="" style={{ "--d": "0.12s" } as React.CSSProperties}>
            경험을 <span className="accent">다시 씁니다.</span>
          </span>
        </h1>
        <p className="lead" data-reveal="fade" style={{ "--d": "0.22s" } as React.CSSProperties}>
          렌더링·하이드레이션·번들 최적화로 화면 성능을 다듬고, WebView 구조와 모노레포·디자인 시스템·CI/CD를
          직접 설계해온 프론트엔드 개발자. — 안승찬
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
