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
            <div className="portrait">
              <span>[ 프로필 사진 ]</span>
            </div>
          </div>
          <div>
            <h2 className="section-title" data-reveal="">
              변화가<br />기본값입니다.
            </h2>
            <p data-reveal="" style={{ "--d": ".06s" } as React.CSSProperties}>
              세 곳의 스타트업에서 늘 구조를 바꾸는 쪽을 택했습니다. RN → WebView 전환, 모노레포 설계, 이 포트폴리오 전체를 통째로 갈아엎은 것처럼 — 익숙한 것에 안주하지 않습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".12s" } as React.CSSProperties}>
              React·Next.js·React Native·Flutter·Electron을 오가며 플랫폼의 경계를 넘어왔습니다. 어떤 스택이든 더 나은 구조가 있다면 기꺼이 다시 짭니다.
            </p>
            <p data-reveal="" style={{ "--d": ".18s" } as React.CSSProperties}>
              변화의 속도만큼 중요한 건 방향입니다. 디자이너·기획자·백엔드와 함께 옳은 방향을 빠르게 결정하는 구조를 만드는 일에 집중합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
