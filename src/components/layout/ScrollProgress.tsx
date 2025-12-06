"use client";

import { useScroll, useSpring, motion } from "framer-motion";

const SCROLL_PROGRESS_SPRING = { stiffness: 120, damping: 24, mass: 0.4 };

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, SCROLL_PROGRESS_SPRING);

  return (
    <motion.div
      className="fixed left-0 top-0 z-30 h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400"
      style={{ scaleX: scrollProgress }}
    />
  );
}
