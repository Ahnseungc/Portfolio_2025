"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { handleEmailCopy } from "@/utils/clipboard";

const FADE_DISTANCE_PX = 40;
const STAGGER_CHILD_DELAY_SECONDS = 0.12;
const EMAIL_ADDRESS = "omnipo58@gmail.com";

const fadeUpVariants = {
  hidden: { opacity: 0, y: FADE_DISTANCE_PX },
  visible: { opacity: 1, y: 0 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER_CHILD_DELAY_SECONDS },
  },
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants}
    >
      <motion.div className="mb-12" variants={fadeUpVariants}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          CONTACT
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/5 px-8 py-14 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-12 md:py-16"
        variants={fadeUpVariants}
      >
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-white">
            제품과 팀의 리듬을 함께 만들 파트너를 찾고 계신가요?
          </h3>
          <p className="text-base leading-relaxed text-gray-300">
            프로젝트 제안, 협업 논의, 팀 빌딩 등 다양한 형태의 협업을
            환영합니다. 아이디어의 단계부터 함께 고민합니다.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-6 text-base font-semibold text-white hover:brightness-110"
            onClick={() => handleEmailCopy(EMAIL_ADDRESS)}
          >
            {EMAIL_ADDRESS}
          </Button>
          <Link
            href="https://velog.io/@omnipo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            기술 블로그 살펴보기
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
