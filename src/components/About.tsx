"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";

const words = ["프론트에서", "막히는", "건", "대부분", "비슷합니다.", "렌더링,", "WebView", "동기,", "배포.", "재현하고", "숫자로", "확인한", "다음", "고칩니다."];
const keyWords = ["비슷합니다.", "고칩니다."];

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
              일하는<br />방식
            </h2>
            <p data-reveal="" style={{ "--d": ".06s" } as React.CSSProperties}>
              Lighthouse 40~50점대를 80~90점대로, LCP 5.2s를 2.1s까지 줄인 적이 있습니다. 커서 기반 무한스크롤, SSR/ISR/CSR 나누기, Dynamic Import 같은 건 그때 실제로 쓴 방법들이고요.
            </p>
            <p data-reveal="" style={{ "--d": ".12s" } as React.CSSProperties}>
              케어마인더에서는 RN → WebView + Next.js 전환을 주도했고, 4개 도메인 모노레포·CDS·S3 실시간 배포까지 맡았습니다. 지금은 금 거래 앱에서 WebView 브릿지, 앱테크, 트래픽 피크 대응을 하고 있습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".18s" } as React.CSSProperties}>
              코드 한 줄에는 의도를, 구조에는 책임 경계를 분명히 두는 편입니다. 기획·디자인·백엔드와 협업하는 방식을 정리하는 것도 좋아합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
