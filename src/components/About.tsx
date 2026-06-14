"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";

const words = ["저는", "익숙한", "것을", "부수고,", "더", "나은", "것으로", "다시", "짓는", "일을", "두려워하지", "않습니다."];
const keyWords = ["부수고,", "다시", "않습니다."];

export default function About() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Sticky statement word reveal
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const wordEls = scene.querySelectorAll<HTMLSpanElement>("[data-word]");

    const onScroll = () => {
      const rect = scene.getBoundingClientRect();
      const h = scene.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      const threshold = progress * wordEls.length * 1.2;
      wordEls.forEach((el, i) => {
        el.classList.toggle("lit", i < threshold);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stats counter
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLSpanElement;
          const target = Number(el.dataset.count);
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            el.textContent = String(Math.round(ease * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll reveal for bio section
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
    <section className="about" id="about" ref={sectionRef}>
      {/* Pinned statement */}
      <div className="scene" style={{ height: "230vh" }} ref={sceneRef}>
        <div className="scene__sticky">
          <div className="wrap">
            <span className="section-num">01 — ABOUT</span>
            <p className="statement">
              {words.map((w, i) => (
                <span
                  key={i}
                  data-word=""
                  className={keyWords.includes(w) ? "key" : ""}
                >
                  {w}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="wrap section-pad" style={{ paddingTop: 0 }}>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} data-reveal="">
              <div className="stat__num">
                <span
                  ref={(el) => { statRefs.current[i] = el; }}
                  data-count={s.num}
                >
                  0
                </span>
                <span className="suf">{s.suf}</span>
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="wrap" style={{ paddingBottom: "clamp(80px, 14vh, 180px)" }}>
        <div className="about__bio">
          <div data-reveal="scale">
            <div className="portrait" style={{ padding: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="안승찬 프로필"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
          <div>
            <h2 className="section-title" data-reveal="">
              변화가<br />기본값입니다.
            </h2>
            <p data-reveal="" style={{ "--d": ".06s" } as React.CSSProperties}>
              렌더링·하이드레이션·번들 최적화로 화면 성능을 다듬는 작업을 주로 해온 프론트엔드 개발자입니다. Lighthouse 40~50점대를 80~90점대로, LCP 5.2s를 2.1s로 끌어내린 경험이 있습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".12s" } as React.CSSProperties}>
              WebView 구조와 모노레포, 디자인 시스템, CI/CD를 직접 설계하고 만들어 왔습니다. RN → WebView 전환을 주도하며 4개 도메인을 하나의 모노레포로 묶고, S3 기반 실시간 배포 체계를 구축했습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".18s" } as React.CSSProperties}>
              기획·디자인·백엔드·QA와 함께 일하는 방식을 정리해 팀이 더 빠르게 움직이도록 돕는 일에도 관심이 많습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
