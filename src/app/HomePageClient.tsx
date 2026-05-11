"use client";

import { motion } from "framer-motion";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LandingHero from "@/components/landing/LandingHero";
import JourneyNarrative from "@/components/landing/JourneyNarrative";
import MetricsStrip from "@/components/landing/MetricsStrip";
import DomainExpertise from "@/components/landing/DomainExpertise";
import SpotlightTile from "@/components/landing/SpotlightTile";
import ProfileSection from "@/components/sections/ProfileSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LibrariesSection from "@/components/sections/LibrariesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { springSnappy } from "@/lib/motion";

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.03,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSnappy,
  },
};

export default function HomePageClient() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <LandingHero />
      <JourneyNarrative />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.04 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants}>
          <MetricsStrip />
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <DomainExpertise />
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <SpotlightTile />
        </motion.div>
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
    </main>
  );
}
