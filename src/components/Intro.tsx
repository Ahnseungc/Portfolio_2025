"use client";

import { useEffect, useRef } from "react";

const TEXT_LINES = ["Adapt to change.", "Build to last."];
const DURATION = 4800;
const P_FLOW = 0.12;
const P_CONV = 0.58;
const P_HOLD = 0.74;

function lockPageScroll() {
  const y = window.scrollY;
  document.documentElement.classList.add("intro-locked");
  document.body.dataset.introScrollY = String(y);
  document.body.style.position = "fixed";
  document.body.style.top = `-${y}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function unlockPageScroll() {
  const y = Number(document.body.dataset.introScrollY || 0);
  document.documentElement.classList.remove("intro-locked");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  delete document.body.dataset.introScrollY;
  window.scrollTo(0, y);
}

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

    let scrollUnlocked = false;
    const unlockScroll = () => {
      if (scrollUnlocked) return;
      scrollUnlocked = true;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeydown);
      unlockPageScroll();
    };

    const ctx = canvasRef.current.getContext("2d")!;
    let particles: Particle[] = [];
    let rafId = 0;
    let idleRafId = 0;
    let W = 0, H = 0, dpr = 1;
    let startTime: number | null = null;
    let done = false;
    let started = false;
    let particlesReady = false;
    let touchStartY = 0;

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
      let fs = Math.min(W * 0.085, H * 0.11, 64);
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.font = `800 ${fs}px 'Pretendard Variable', Pretendard, -apple-system, sans-serif`;
      const maxLineWidth = Math.max(...TEXT_LINES.map((line) => o.measureText(line).width));
      if (maxLineWidth > W * 0.92) fs = fs * ((W * 0.92) / maxLineWidth);
      o.font = `800 ${fs}px 'Pretendard Variable', Pretendard, -apple-system, sans-serif`;
      o.fillStyle = "#000";
      const lineHeight = fs * 1.18;
      const blockHeight = lineHeight * TEXT_LINES.length;
      const startY = H * 0.46 - blockHeight / 2 + lineHeight / 2;
      TEXT_LINES.forEach((line, index) => {
        o.fillText(line, W / 2, startY + index * lineHeight);
      });
      const data = o.getImageData(0, 0, W, H).data;

      const gap = W < 680 ? 3 : 4;
      particles = [];
      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            const ang = Math.random() * Math.PI * 2;
            const spd = Math.max(W, H) * (0.45 + Math.random() * 0.9);
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
      cancelAnimationFrame(idleRafId);
      cancelAnimationFrame(rafId);
      ol.classList.add("is-done");
      ol.style.transition = "opacity 0.6s ease";
      ol.style.opacity = "0";
      ol.style.pointerEvents = "none";
      setTimeout(() => {
        ol.style.display = "none";
        unlockScroll();
      }, 700);
    }

    function drawIdle(now: number) {
      if (done || started) return;

      ctx.clearRect(0, 0, W, H);
      const ink  = cssVar("--text")    || "#181f29";
      const blue = cssVar("--primary") || "#3182f6";

      for (const pt of particles) {
        const x = pt.bx + Math.sin(now * 0.0006 + pt.ph) * 22;
        const y = pt.by + Math.cos(now * 0.0005 + pt.ph * 1.3) * 22;
        ctx.globalAlpha = 0.5 + Math.sin(now * 0.001 + pt.ph) * 0.12;
        ctx.fillStyle   = pt.blue ? blue : ink;
        ctx.fillRect(x, y, pt.s, pt.s);
      }
      ctx.globalAlpha = 1;
      idleRafId = requestAnimationFrame(drawIdle);
    }

    function draw(now: number) {
      if (done) return;
      if (startTime === null) startTime = now;

      const p = clamp01((now - startTime) / DURATION);
      const convE   = easeInOut(clamp01((p - P_FLOW) / (P_CONV - P_FLOW)));
      const dispRaw = clamp01((p - P_HOLD) / (1 - P_HOLD));
      const dispE   = dispRaw * dispRaw;
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

    function beginAnimation() {
      if (started || done || !particlesReady) return;
      started = true;
      cancelAnimationFrame(idleRafId);
      if (tag) tag.classList.remove("show");
      startTime = null;
      rafId = requestAnimationFrame(draw);
    }

    function onScrollIntent(e: Event) {
      e.preventDefault();
      beginAnimation();
    }

    const onWheel = (e: WheelEvent) => {
      if (done) return;
      if (!started) {
        if (Math.abs(e.deltaY) > 1 || Math.abs(e.deltaX) > 1) {
          onScrollIntent(e);
        } else {
          e.preventDefault();
        }
        return;
      }
      e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (done) return;
      if (!started) {
        const y = e.touches[0]?.clientY ?? touchStartY;
        if (Math.abs(touchStartY - y) > 10) {
          onScrollIntent(e);
        } else {
          e.preventDefault();
        }
        return;
      }
      e.preventDefault();
    };

    function skip() {
      fadeOut();
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skip();
        return;
      }
      if (!started && particlesReady) {
        const startKeys = [" ", "ArrowDown", "PageDown", "Enter"];
        if (startKeys.includes(e.key)) {
          e.preventDefault();
          beginAnimation();
          return;
        }
      }
      if (started && !done) {
        const blockKeys = [" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];
        if (blockKeys.includes(e.key)) e.preventDefault();
      }
    };

    const prepare = () => {
      try {
        buildParticles();
        particlesReady = true;
        if (tag) tag.classList.add("show");
        idleRafId = requestAnimationFrame(drawIdle);
      } catch (e) {
        console.error("[intro]", e);
        ol.style.display = "none";
        unlockScroll();
      }
    };

    const skipBtn = ol.querySelector<HTMLButtonElement>(".intro__skip");
    if (skipBtn) skipBtn.addEventListener("click", skip);

    window.scrollTo(0, 0);
    lockPageScroll();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeydown);

    if (document.fonts?.ready) {
      document.fonts.ready.then(prepare).catch(prepare);
    } else {
      setTimeout(prepare, 100);
    }

    const onResize = () => {
      if (done) return;
      try {
        buildParticles();
        if (started) {
          startTime = null;
        } else {
          cancelAnimationFrame(idleRafId);
          idleRafId = requestAnimationFrame(drawIdle);
        }
      } catch { /* ignore */ }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(idleRafId);
      skipBtn?.removeEventListener("click", skip);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("resize", onResize);
      unlockScroll();
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
