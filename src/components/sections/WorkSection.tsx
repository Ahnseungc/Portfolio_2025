"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { experiences } from "@/data";

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

export default function WorkSection() {
  const highlightedExperiences = useMemo(() => experiences.slice(0, 2), []);

  return (
    <motion.section
      id="work"
      className="mx-auto max-w-6xl px-6 py-24 md:py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants}
    >
      <motion.div className="mb-12" variants={fadeUpVariants}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          WORK
        </p>
      </motion.div>
      <div className="space-y-16">
        {highlightedExperiences.map((experience) => (
          <motion.article
            key={experience.id}
            className="group flex flex-col gap-6 border-b border-white/10 pb-16 md:flex-row md:items-start"
            variants={fadeUpVariants}
          >
            <div className="min-w-[200px] text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              {experience.period}
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-white">
                  {experience.company}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {experience.role}
                </p>
              </div>
              <p className="text-base leading-relaxed text-gray-300">
                {experience.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                {experience.achievements.slice(0, 3).map((achievement) => (
                  <li key={achievement.title} className="flex gap-2">
                    <span className="mt-1 block h-2 w-2 min-w-[0.5rem] rounded-full bg-white/20" />
                    <div>
                      <p className="font-medium text-gray-200">
                        {achievement.title}
                      </p>
                      {achievement.description.slice(0, 2).map((item) => (
                        <p key={item.text} className="text-gray-400">
                          {item.text}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
