"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  drift: number;
  phase: number;
  blue: boolean;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cv = canvasRef.current as HTMLCanvasElement;
    const ctx = cv.getContext("2d")!;

    let W = 0, H = 0, dpr = 1;
    let stars: Star[] = [];
    let rafId = 0;

    function resize() {
      dpr = Math.min(2, devicePixelRatio || 1);
      W = innerWidth;
      H = document.documentElement.scrollHeight;
      cv.width  = W * dpr;
      cv.height = H * dpr;
      cv.style.width  = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function buildStars() {
      // 총 별 개수: 화면 넓이 기준
      const count = Math.floor((W * H) / 6000);
      stars = [];

      for (let i = 0; i < count; i++) {
        // 은하수 밴드: 중앙에 더 몰리게 (가우시안 분포 근사)
        const bandY = H * 0.35 + (Math.random() + Math.random() + Math.random() - 1.5) * H * 0.28;
        const isInBand = Math.random() < 0.55;

        stars.push({
          x: Math.random() * W,
          y: isInBand ? bandY : Math.random() * H,
          r: Math.random() < 0.08 ? 1.8 + Math.random() * 1.2 : 0.5 + Math.random() * 1.1,
          alpha: 0.08 + Math.random() * 0.55,
          speed: 0.008 + Math.random() * 0.018,
          drift: (Math.random() - 0.5) * 0.3,
          phase: Math.random() * Math.PI * 2,
          blue: Math.random() < 0.22,
        });
      }
    }

    function draw(now: number) {
      ctx.clearRect(0, 0, W, H);

      const t = now * 0.001;
      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary").trim() || "#3182f6";
      const ink = getComputedStyle(document.documentElement)
        .getPropertyValue("--text").trim() || "#181f29";
      // 다크모드에서는 흰 별, 라이트모드에서는 어두운 별
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const starColor = isDark ? "255,255,255" : "24,31,41";

      for (const s of stars) {
        // 천천히 위로 흐름 + 좌우 드리프트
        const y = ((s.y - t * s.speed * H) % H + H) % H;
        const x = s.x + Math.sin(t * 0.3 + s.phase) * s.drift * 8;

        // 반짝임 (twinkle)
        const twinkle = 0.6 + 0.4 * Math.sin(t * 1.8 + s.phase);
        const alpha = s.alpha * twinkle;

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        if (s.blue) {
          ctx.fillStyle = `${primary}`;
          ctx.globalAlpha = alpha * 0.7;
        } else {
          ctx.fillStyle = `rgb(${starColor})`;
          ctx.globalAlpha = alpha;
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    rafId = requestAnimationFrame(draw);

    // 페이지 높이 변화 감지
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
}
