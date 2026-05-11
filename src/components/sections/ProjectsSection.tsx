"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";
import { handleExternalLink } from "@/utils/external";
import { springLift, springSnappy } from "@/lib/motion";
import { ProjectCover } from "@/components/projects/ProjectCover";

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

/** DESIGN.md — store-utility-card: white, hairline, rounded-lg 18px, no card shadow */
export default function ProjectsSection() {
  const sorted = [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return 0;
  });

  return (
    <motion.section
      id="projects"
      className="w-full bg-apple-parchment py-16 md:py-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={staggerContainerVariants}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <motion.div
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
          variants={fadeUpVariants}
        >
          <div>
            <p className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48">
              0 → 1의 기록
            </p>
            <h2 className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink">
              프로젝트
            </h2>
            <p className="mt-2 max-w-xl text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-apple-ink-muted-80">
              각 카드는 &lsquo;없던 것을 만들어 낸&rsquo; 한 번의 출항입니다.
              상세에서 기여·지표·배운 점을 적었습니다.
            </p>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            transition={springSnappy}
            className="inline-flex items-center gap-1 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary"
            onClick={() => handleExternalLink("https://github.com/Ahnseungc")}
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              whileHover={{ y: -5, transition: springLift }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-[18px] border border-apple-hairline bg-apple-canvas p-6 transition-colors hover:border-apple-ink-muted-48/40"
              >
                <motion.div whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <ProjectCover src={project.image} alt={`${project.title} 썸네일`} withProductShadow />
                  <div className="mt-5 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-apple-ink-muted-48">
                        {project.year}
                      </span>
                      {project.isAward ? (
                        <span className="rounded-full border border-apple-hairline px-2 py-0.5 text-[12px] font-semibold text-apple-ink-muted-80">
                          Award
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-apple-ink group-hover:text-apple-primary">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-apple-ink-muted-80">
                      {project.description}
                    </p>
                    <p className="text-[14px] font-semibold text-apple-primary">자세히 보기 →</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
