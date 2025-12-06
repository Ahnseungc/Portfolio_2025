"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink, Github, Trophy } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  onExternalLink: (url: string) => void;
}

export default function ProjectModal({
  isOpen,
  project,
  onClose,
  onExternalLink,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.isAward && (
                  <div className="absolute top-4 right-4 bg-yellow-500 p-3 rounded-full shadow-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>{project.year}</p>
                  <p>{project.role}</p>
                  <p>{project.team}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  프로젝트 개요
                </h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  onClick={() => onExternalLink(project.demoUrl)}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  라이브 데모 보기
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl"
                  onClick={() => onExternalLink(project.githubUrl)}
                >
                  <Github className="mr-2 h-5 w-5" />
                  소스 코드 보기
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
