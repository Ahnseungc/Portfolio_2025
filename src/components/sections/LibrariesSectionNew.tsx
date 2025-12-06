"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Library } from "@/types";

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

interface LibrariesSectionNewProps {
  libraries: Library[];
  onExternalLink: (url: string) => void;
}

export default function LibrariesSectionNew({
  libraries,
  onExternalLink,
}: LibrariesSectionNewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="libraries"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.div className="mb-12" variants={fadeUpVariants}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          LIBRARIES
        </p>
      </motion.div>
      <div className="space-y-12">
        {libraries.map((library) => (
          <motion.article
            key={library.id}
            className="flex flex-col gap-6 border-b border-white/10 pb-12 md:flex-row md:items-start md:justify-between"
            variants={fadeUpVariants}
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">
                {library.name}
              </h3>
              <p className="text-base leading-relaxed text-gray-300">
                {library.description}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                {library.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-56">
              <Button
                variant="outline"
                className="rounded-full border-white/20 px-6 py-5 text-sm font-semibold text-white hover:border-white/30"
                onClick={() => onExternalLink(library.url)}
              >
                문서 읽기
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

