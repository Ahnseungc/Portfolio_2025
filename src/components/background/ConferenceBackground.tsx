"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ConferenceBackground() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.6, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0.4, 0.1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.8], [0.3, 0.05]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5], [1.2, 1.8]);
  const scale3 = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.3]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] rounded-full bg-gradient-radial blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)`,
          opacity: opacity1,
          scale: scale1,
          rotate: rotate1,
        }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 h-[120%] w-[120%] rounded-full bg-gradient-radial blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.15) 45%, transparent 70%)`,
          opacity: opacity2,
          scale: scale2,
          rotate: rotate2,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[100%] w-[100%] rounded-full bg-gradient-radial blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 75%)`,
          opacity: opacity3,
          scale: scale3,
          rotate: rotate3,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
