"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { projects, awards } from "@/data";

const FADE_DISTANCE_PX = 40;
const STAGGER_CHILD_DELAY_SECONDS = 0.12;

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

export default function ProfileSection() {
  const statistics = useMemo(
    () => [
      { label: "Years Building", value: "4+" },
      { label: "Production Projects", value: projects.length.toString() },
      { label: "Awards Won", value: awards.length.toString() },
    ],
    []
  );

  return (
    <motion.section
      id="profile"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants}
    >
      <motion.div className="mb-12" variants={fadeUpVariants}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          PROFILE
        </p>
      </motion.div>
      <motion.div
        className="grid gap-16 md:grid-cols-[1.2fr_1fr]"
        variants={fadeUpVariants}
      >
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            다양한 도메인의 문제를 이해하고, 빠르게 실험하며, 제품과 함께
            성장하는 프론트엔드 개발자입니다. 팀의 문화를 만들고 유지하는
            데에도 관심이 많습니다. 데이터 기반 의사결정과 디자인 시스템을
            통해 일관된 경험을 구축하는 일을 즐깁니다.
          </p>
          <p>
            최근에는 케어 마인더에서 모노레포 아키텍처를 도입하고, Electron과
            React Native를 활용한 크로스 플랫폼 경험을 설계했습니다.
            프로덕트와 엔지니어링 사이의 언어를 번역하며 팀에 영향력을
            확장하고 있습니다.
          </p>
        </div>
        <div className="space-y-6">
          {statistics.map((stat) => (
            <div key={stat.label} className="border-b border-white/10 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
