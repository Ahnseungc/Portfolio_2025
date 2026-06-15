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
        <h1>
          <span className="line" data-reveal="">
            안녕하세요,
          </span>
          <br />
          <span className="line" data-reveal="" style={{ "--d": "0.1s" } as React.CSSProperties}>
            개발자 <span className="accent">안승찬</span>입니다.
          </span>
        </h1>
        <p className="lead" data-reveal="fade" style={{ "--d": "0.2s" } as React.CSSProperties}>
          TypeScript, Next.js, React Native를 중심으로 웹·앱을 개발합니다.
          <br />
          WebView 아키텍처와 성능 개선을 주로 다뤄왔습니다.
        </p>
        <div className="hero__actions" data-reveal="fade" style={{ "--d": "0.28s" } as React.CSSProperties}>
          <a className="btn btn--primary" href="#work">
            프로젝트 <span className="arrow">→</span>
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
