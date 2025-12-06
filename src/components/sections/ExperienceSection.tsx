"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/data";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      className="py-24 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 쌓은 실무 경험과 성장 과정을 소개합니다.
          </p>
        </motion.div>

        <motion.div className="space-y-12" variants={staggerContainer}>
          {experiences.map((exp) => (
            <motion.div key={exp.id} className="relative" variants={fadeInUp}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="sticky top-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 6).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-white rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 6 && (
                        <span className="px-3 py-1 text-sm text-gray-500">
                          +{exp.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    {exp.achievements.map((achievement) => (
                      <div
                        key={achievement.title}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {achievement.title}
                        </h4>
                        <ul className="space-y-3">
                          {achievement.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {desc.link ? (
                                <a
                                  href={desc.link}
                                  className="text-gray-600 hover:text-blue-600 hover:underline flex items-center space-x-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span>{desc.text}</span>
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              ) : (
                                <span className="text-gray-600">
                                  {desc.text}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
