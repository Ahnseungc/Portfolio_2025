"use client";

import { useEffect, useRef } from "react";

const TEXT = "CHANGE BY DEFAULT";
const DURATION = 3200;
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

  useEffect(() => {
    if (!overlayRef.current || !canvasRef.current) return;
    const ol = overlayRef.current as HTMLDivElement;
    const cv = canvasRef.current as HTMLCanvasElement;
    const tag = tagRef.current;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { ol.style.display = "none"; return; }

    const ctx = cv.getContext("2d")!;
    let particles: Particle[] = [];
    let rafId = 0;
    let W = 0, H = 0, dpr = 1;
    let startTime: number | null = null;
    let done = false;

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

      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const o = off.getContext("2d")!;
      // 폰트 크기를 캔버스 너비에 맞게 자동 조절
      let fs = Math.min(W * 0.12, H * 0.22, 180);
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.font = `800 ${fs}px 'Pretendard Variable', Pretendard, -apple-system, sans-serif`;
      // 텍스트가 화면 너비 90% 초과하면 줄여서 맞춤
      const measured = o.measureText(TEXT).width;
      if (measured > W * 0.9) fs = fs * (W * 0.9 / measured);
      o.font = `800 ${fs}px 'Pretendard Variable', Pretendard, -apple-system, sans-serif`;
      o.fillStyle = "#000";
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

    function fadeOut() {
      done = true;
      ol.style.transition = "opacity 0.6s ease";
      ol.style.opacity = "0";
      ol.style.pointerEvents = "none";
      setTimeout(() => { ol.style.display = "none"; }, 700);
    }

    function draw(now: number) {
      if (done) return;
      if (startTime === null) startTime = now;

      const p = clamp01((now - startTime) / DURATION);
      const convE   = easeInOut(clamp01((p - P_FLOW) / (P_CONV - P_FLOW)));
      const dispRaw = clamp01((p - P_HOLD) / (1 - P_HOLD));
      const dispE   = easeOut(dispRaw);
      const driftK  = 1 - convE;
      const fadeIn  = clamp01(p / (P_FLOW * 0.6));

      ctx.clearRect(0, 0, W, H);
      const ink  = cssVar("--text")    || "#181f29";
      const blue = cssVar("--primary") || "#3182f6";

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

      if (tag) tag.classList.toggle("show", p < P_CONV);

      if (p >= 1) { fadeOut(); return; }
      rafId = requestAnimationFrame(draw);
    }

    function skip() {
      cancelAnimationFrame(rafId);
      fadeOut();
    }

    const skipBtn = ol.querySelector<HTMLButtonElement>(".intro__skip");
    if (skipBtn) skipBtn.addEventListener("click", skip);
    const onKeydown = (e: KeyboardEvent) => { if (e.key === "Escape") skip(); };
    window.addEventListener("keydown", onKeydown);

    const start = () => {
      try { buildParticles(); rafId = requestAnimationFrame(draw); }
      catch (e) { console.error("[intro]", e); ol.style.display = "none"; }
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      setTimeout(start, 100);
    }

    const onResize = () => {
      if (!done) try { buildParticles(); startTime = null; } catch { /* ignore */ }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="intro" id="intro" ref={overlayRef}>
      <canvas className="intro__canvas" ref={canvasRef} />
      <div className="intro__tag" ref={tagRef}>SCROLL TO ENTER</div>
      <button className="intro__skip" type="button">건너뛰기 →</button>
    </div>
  );
}
