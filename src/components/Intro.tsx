"use client";

import { useEffect, useRef } from "react";

const TEXT = "CHANGE BY DEFAULT";
const P_FLOW = 0.12;
const P_CONV = 0.58;
const P_HOLD = 0.74;

interface Particle {
  tx: number; ty: number;
  bx: number; by: number;
  vx: number; vy: number;
  ph: number; s: number; blue: boolean;
}

export default function Intro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const tagRef     = useRef<HTMLDivElement>(null);
  const cueRef     = useRef<HTMLDivElement>(null);
  const spacerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !canvasRef.current || !spacerRef.current) return;
    const ov  = overlayRef.current as HTMLDivElement;
    const cv  = canvasRef.current as HTMLCanvasElement;
    const tag = tagRef.current;
    const cue = cueRef.current;
    const sp  = spacerRef.current as HTMLDivElement;

    const ctx = cv.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles: Particle[] = [];
    let rafId = 0;
    let heroPlayed = false;
    let W = 0, H = 0, dpr = 1;
    let disabled = false;

    const easeOut   = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t: number) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
    const clamp01   = (t: number) => Math.max(0, Math.min(1, t));
    const cssVar    = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

    function buildParticles() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width  = W * dpr;
      cv.height = H * dpr;
      cv.style.width  = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // 오프스크린 캔버스에 텍스트 렌더링 → 픽셀 샘플링
      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const o = off.getContext("2d")!;
      const fs = Math.min(W * 0.09, H * 0.18, 140);
      o.fillStyle = "#000";
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.font = `800 ${fs}px 'Pretendard Variable', Pretendard, -apple-system, sans-serif`;
      o.fillText(TEXT, W / 2, H * 0.46);
      const data = o.getImageData(0, 0, W, H).data;

      const gap = W < 680 ? 3 : 4;
      particles = [];
      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            const ang = Math.random() * Math.PI * 2;
            const spd = 60 + Math.random() * 130;
            particles.push({
              tx: x + (Math.random() - 0.5) * gap * 0.6,
              ty: y + (Math.random() - 0.5) * gap * 0.6,
              bx: Math.random() * W,
              by: Math.random() * H,
              vx: Math.cos(ang) * spd,
              vy: Math.sin(ang) * spd,
              ph: Math.random() * Math.PI * 2,
              s: Math.random() < 0.4 ? 1.6 : 2.4,
              blue: Math.random() < 0.16,
            });
          }
        }
      }
    }

    function computeProgress() {
      const total = sp.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      return clamp01(window.scrollY / total);
    }

    let autoScrolled = false;

    function draw(now: number) {
      const p    = computeProgress();
      const done = p >= 0.999;

      // 인트로 끝나면 히어로로 즉시 점프 + 오버레이 페이드아웃
      if (done && !autoScrolled) {
        autoScrolled = true;

        // 1. 스페이서 숨김 → 히어로가 최상단으로 올라옴
        sp.style.display = "none";

        // 2. 스크롤 즉시 0으로 (히어로가 이제 최상단)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // 3. 히어로 내 data-reveal 강제 활성화
        const heroEl = document.getElementById('top');
        if (heroEl) {
          heroEl.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
            el.classList.add('in');
          });
        }

        // 4. 오버레이 페이드아웃
        ov.style.transition = 'opacity 0.5s ease';
        ov.style.opacity = '0';
        setTimeout(() => { ov.style.display = "none"; }, 600);

        cancelAnimationFrame(rafId);
        return;
      }

      if (p > 0.9 && !heroPlayed) {
        heroPlayed = true;
        const w = window as unknown as Record<string, unknown>;
        if (typeof w.__portfolioReplay === "function") (w.__portfolioReplay as () => void)();
      }
      if (p < 0.6) heroPlayed = false;

      if (!done) {
        ctx.clearRect(0, 0, W, H);
        const ink  = cssVar("--text")    || "#181f29";
        const blue = cssVar("--primary") || "#3182f6";

        const convE   = easeInOut(clamp01((p - P_FLOW) / (P_CONV - P_FLOW)));
        const dispRaw = clamp01((p - P_HOLD) / (1 - P_HOLD));
        const dispE   = easeOut(dispRaw);
        const driftK  = 1 - convE;
        const fadeIn  = clamp01(p / (P_FLOW * 0.6));

        for (const pt of particles) {
          const baseX = pt.bx + Math.sin(now * 0.0006 + pt.ph) * 22 * driftK;
          const baseY = pt.by + Math.cos(now * 0.0005 + pt.ph * 1.3) * 22 * driftK;

          let x = baseX + (pt.tx - baseX) * convE;
          let y = baseY + (pt.ty - baseY) * convE;
          let alpha = (0.5 + 0.5 * convE) * fadeIn;

          if (p >= P_CONV && p < P_HOLD) {
            x = pt.tx + Math.sin(now * 0.002  + pt.ph) * 0.4;
            y = pt.ty + Math.cos(now * 0.0022 + pt.ph) * 0.4;
            alpha = 1;
          }

          if (dispRaw > 0) {
            x = pt.tx + pt.vx * dispE;
            y = pt.ty + pt.vy * dispE - dispE * 30;
            alpha = 1 - dispE;
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle   = pt.blue ? blue : ink;
          ctx.fillRect(x, y, pt.s, pt.s);
        }
        ctx.globalAlpha = 1;
        ov.style.opacity = String(1 - dispE);

        if (tag) tag.classList.toggle("show", p < P_CONV);
        if (cue) cue.classList.toggle("show", p < P_FLOW * 1.4);
      }

      rafId = requestAnimationFrame(draw);
    }

    function disable() {
      disabled = true;
      cancelAnimationFrame(rafId);
      ov.style.display = "none";
      sp.style.display = "none";
    }

    function skip() {
      const end = sp.offsetTop + sp.offsetHeight - window.innerHeight;
      window.scrollTo({ top: end + 1, behavior: "smooth" });
    }

    if (reduce) { disable(); return; }

    const skipBtn = ov.querySelector<HTMLButtonElement>(".intro__skip");
    if (skipBtn) skipBtn.addEventListener("click", skip);
    const onKeydown = (e: KeyboardEvent) => { if (e.key === "Escape") skip(); };
    window.addEventListener("keydown", onKeydown);

    const start = () => {
      try {
        buildParticles();
        rafId = requestAnimationFrame(draw);
      } catch (e) {
        console.error("[intro]", e);
        disable();
      }
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(start).catch(start);
      document.fonts.ready
        .then(() => { if (!disabled) buildParticles(); })
        .catch(() => {});
    }
    setTimeout(start, 250);

    const onResize = () => {
      if (!disabled) try { buildParticles(); } catch { /* ignore */ }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="intro" id="intro" ref={overlayRef}>
        <canvas className="intro__canvas" ref={canvasRef} />
        <div className="intro__tag" ref={tagRef}>SCROLL TO ENTER</div>
        <div className="intro__cue" ref={cueRef} />
        <button className="intro__skip" type="button">건너뛰기 →</button>
      </div>
      {/* 스크롤 구동용 스페이서 — 이 구간을 스크롤하는 동안 인트로 진행 */}
      <div id="intro-spacer" ref={spacerRef} style={{ height: "320vh" }} />
    </>
  );
}
