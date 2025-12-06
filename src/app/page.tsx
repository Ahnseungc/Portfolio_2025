"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Scroll3DBackground from "@/components/background/Scroll3DBackground";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProfileSection from "@/components/sections/ProfileSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LibrariesSection from "@/components/sections/LibrariesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const FADE_DISTANCE_PX = 60;
const STAGGER_CHILD_DELAY_SECONDS = 0.1;

const fadeUpVariants = {
  hidden: { opacity: 0, y: FADE_DISTANCE_PX },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_CHILD_DELAY_SECONDS,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-gray-100">
      {!showContent && (
        <Scroll3DBackground onAnimationComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants}>
            <ScrollProgress />
          </motion.div>
          {/* <motion.div variants={fadeUpVariants}>
            <Header />
          </motion.div> */}
          {/* <motion.div variants={fadeUpVariants}>
            <HeroSection />
          </motion.div> */}
          <motion.div variants={fadeUpVariants}>
            <ProfileSection />
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <WorkSection />
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <ProjectsSection />
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <LibrariesSection />
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <ContactSection />
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
