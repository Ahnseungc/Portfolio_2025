"use client";

import { useScroll, useSpring, motion } from "framer-motion";

/** 크롬바만 단색 — 장식 그라데이션 없음 (DESIGN.md) */
const SCROLL_PROGRESS_SPRING = { stiffness: 380, damping: 32, mass: 0.6 };

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, SCROLL_PROGRESS_SPRING);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-apple-primary"
      style={{ scaleX: scrollProgress }}
      aria-hidden
    />
  );
}
