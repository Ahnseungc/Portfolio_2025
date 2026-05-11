"use client";

import { motion } from "framer-motion";
import { libraries } from "@/data";
import { handleExternalLink } from "@/utils/external";
import { springLift, springSnappy } from "@/lib/motion";

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

/** 라이트 스토어 유틸리티 — 다크 경력 다음 라이트 교차 */
export default function LibrariesSection() {
  return (
    <motion.section
      id="libraries"
      className="w-full bg-apple-canvas py-16 md:py-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerContainerVariants}
    >
      <div className="mx-auto max-w-[980px] px-4 md:px-6">
        <motion.p
          variants={fadeUpVariants}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48"
        >
          레버리지
        </motion.p>
        <motion.h2
          variants={fadeUpVariants}
          className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink"
        >
          라이브러리
        </motion.h2>
        <motion.p variants={fadeUpVariants} className="mt-4 max-w-2xl text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-apple-ink-muted-80">
          1→100은 결국 같은 문제를 한 번만 푸는 일입니다. 패키지와 훅으로
          팀의 다음 스프린트를 가볍게 만듭니다.
        </motion.p>

        <div className="mt-14 space-y-8">
          {libraries.map((library) => (
            <motion.article
              key={library.id}
              variants={fadeUpVariants}
              whileHover={{ y: -4, transition: springLift }}
              whileTap={{ scale: 0.995 }}
              className="flex flex-col gap-6 rounded-[18px] border border-apple-hairline bg-apple-canvas p-6 transition-shadow duration-300 hover:shadow-apple-product md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="min-w-0 space-y-3">
                <h3 className="text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-apple-ink">
                  {library.name}
                </h3>
                <p className="max-w-xl text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-ink-muted-80">
                  {library.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {library.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-apple-hairline px-3 py-1 text-[14px] text-apple-ink-muted-80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                transition={springSnappy}
                className="shrink-0 rounded-lg bg-apple-ink px-[15px] py-2 text-[14px] font-normal leading-[1.29] tracking-[-0.224px] text-white"
                onClick={() => handleExternalLink(library.url)}
              >
                문서 · npm
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
