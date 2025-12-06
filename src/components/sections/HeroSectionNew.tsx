"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FADE_DISTANCE_PX = 40;
const STAGGER_CHILD_DELAY_SECONDS = 0.12;

const fadeUpVariants = {
  hidden: { opacity: 0, y: FADE_DISTANCE_PX },
  visible: { opacity: 1, y: 0 },
};

const heroBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER_CHILD_DELAY_SECONDS },
  },
};

interface HeroSectionNewProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export default function HeroSectionNew({
  onScrollToProjects,
  onScrollToContact,
}: HeroSectionNewProps) {
  return (
    <motion.section
      id="hero"
      className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-6 py-28 shadow-[0_80px_160px_-60px_rgba(0,0,0,0.6)] md:py-44"
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants}
    >
      <div className="relative z-10 flex flex-col gap-10">
        <motion.div
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
          variants={heroBadgeVariants}
        >
          Black Conference 2025
        </motion.div>
        <motion.h1
          className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          variants={fadeUpVariants}
        >
          기술의 감도, 디자인의 공명.
          <motion.span
            className="relative inline-block"
            variants={fadeUpVariants}
          >
            <span className="absolute inset-x-0 bottom-2 h-4 rounded-full bg-fuchsia-500/30 blur-sm" />
            <span className="relative bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              맥락을 설계하고, 경험을 증폭합니다
            </span>
          </motion.span>
          .
        </motion.h1>
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
          variants={fadeUpVariants}
        >
          대담한 인터랙션, 절제된 정보 구조, 고해상도 비주얼. 프로덕트의
          메시지를 선명하게 드러내는 설계를 합니다. 팀의 속도를 높이고
          사용자의 집중을 지키는 것이 목표입니다.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUpVariants}
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-6 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.7)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-110"
            onClick={onScrollToProjects}
          >
            프로젝트 보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 px-8 py-6 text-base font-semibold text-gray-200 transition-[transform,color,border-color] hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            onClick={onScrollToContact}
          >
            협업 문의하기
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

