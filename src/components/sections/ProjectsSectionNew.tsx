"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

const FADE_DISTANCE_PX = 40;

const fadeUpVariants = {
  hidden: { opacity: 0, y: FADE_DISTANCE_PX },
  visible: { opacity: 1, y: 0 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

interface ProjectsSectionNewProps {
  projects: Project[];
  onExternalLink: (url: string) => void;
}

export default function ProjectsSectionNew({
  projects,
  onExternalLink,
}: ProjectsSectionNewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.div
        className="mb-12 flex items-center justify-between"
        variants={fadeUpVariants}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          PROJECTS
        </p>
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          onClick={() => onExternalLink("https://github.com/Ahnseungc")}
        >
          Github 전체 보기
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </motion.div>
      <div className="space-y-16">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="group flex flex-col gap-8 border-b border-white/10 pb-16 md:flex-row md:items-start"
            variants={fadeUpVariants}
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {project.year}
                </p>
                {project.isAward ? (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    Awarded
                  </span>
                ) : null}
              </div>
              <h3 className="text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                {project.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-64">
              <Button
                variant="secondary"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/15"
                onClick={() => onExternalLink(project.demoUrl ?? "#")}
              >
                데모 보기
              </Button>
              <Button
                variant="outline"
                className="rounded-full border border-white/20 px-6 py-5 text-sm font-semibold text-white hover:border-white/30"
                onClick={() => onExternalLink(project.githubUrl ?? "#")}
              >
                GitHub 살펴보기
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

