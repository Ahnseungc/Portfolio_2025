"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="wrap">
        <span className="eyebrow" data-reveal="fade" style={{ color: "var(--primary)" }}>
          GET IN TOUCH
        </span>
        <h2 className="contact__big" style={{ marginTop: 24 }}>
          <span data-reveal="">같이 바꿔</span>
          <br />
          <span data-reveal="" style={{ "--d": ".08s" } as React.CSSProperties}>
            나가요, <span className="accent">두려움 없이.</span>
          </span>
        </h2>
        <p className="contact__sub" data-reveal="fade">
          새로운 프로젝트, 합류 제안, 구조를 뒤집어야 하는 도전. 무엇이든 편하게 연락 주세요.
        </p>
        <div className="contact__actions" data-reveal="fade">
          <a className="btn btn--primary" href="mailto:omnipoo@naver.com">
            이메일 보내기 <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="tel:+821040350672">
            +82 10-4035-0672
          </a>
        </div>
        <div className="contact__foot">
          <span>© 2026 안승찬 · Frontend Engineer</span>
          <div className="contact__social">
            <a href="https://github.com/Ahnseungc" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="https://velog.io/@omnipo" target="_blank" rel="noopener">
              Velog
            </a>
            <a href="https://linkedin.com/in/seungchan-ahn" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
