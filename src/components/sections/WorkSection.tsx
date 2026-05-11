"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { experiences } from "@/data";
import { springLift, springSnappy } from "@/lib/motion";

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

/** 애플 홈 다크 제품 밴드 — 다크 타일 + Sky Link */
export default function WorkSection() {
  const list = useMemo(() => experiences, []);

  return (
    <motion.section
      id="work"
      className="w-full bg-apple-tile1 py-16 text-white md:py-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={staggerContainerVariants}
    >
      <div className="mx-auto max-w-[980px] px-4 md:px-6">
        <motion.p
          variants={fadeUpVariants}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-[#cccccc]"
        >
          1 → 100의 현장
        </motion.p>
        <motion.h2
          variants={fadeUpVariants}
          className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[56px] md:leading-[1.07] md:tracking-[-0.28px]"
        >
          경력
        </motion.h2>
        <motion.p variants={fadeUpVariants} className="mt-4 max-w-2xl text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-[#cccccc]">
          조직이 커질수록 손이 가는 곳을 줄이고, 같은 방향으로 달리게 만드는
          역할을 맡아왔습니다. 아래는 그 기록입니다.
        </motion.p>

        <div className="mt-14 space-y-16">
          {list.map((experience) => (
            <motion.article
              key={experience.id}
              variants={fadeUpVariants}
              whileHover={{ y: -3, transition: springLift }}
              className="border-t border-white/10 pt-14 transition-colors duration-300 first:border-t-0 first:pt-0 hover:bg-white/[0.03]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                <p className="shrink-0 text-[12px] font-normal uppercase leading-none tracking-[0.2em] text-[#cccccc]">
                  {experience.period}
                </p>
                <div className="min-w-0 flex-1 space-y-4">
                  <div>
                    <h3 className="text-[34px] font-semibold leading-[1.47] tracking-[-0.374px] text-white">
                      {experience.company}
                    </h3>
                    <p className="mt-1 text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#cccccc]">
                      {experience.role}
                    </p>
                  </div>
                  <p className="text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#cccccc]">
                    {experience.description}
                  </p>
                  <ul className="space-y-6">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement.title}>
                        <p className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-white">
                          {achievement.title}
                        </p>
                        <ul className="mt-2 space-y-2">
                          {achievement.description.map((item) => (
                            <li
                              key={item.text}
                              className="text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#cccccc]"
                            >
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-apple-primary-on-dark hover:underline"
                                >
                                  {item.text}
                                </a>
                              ) : (
                                item.text
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
