"use client";
import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (
    sectionRef: React.RefObject<HTMLDivElement | null>
  ) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  librariesRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Navigation({
  activeSection,
  onScrollToSection,
  aboutRef,
  experienceRef,
  projectsRef,
  librariesRef,
  contactRef,
}: NavigationProps) {
  const navigationItems = [
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Projects", ref: projectsRef },
    { name: "Libraries", ref: librariesRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-900"></div>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onScrollToSection(item.ref)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
