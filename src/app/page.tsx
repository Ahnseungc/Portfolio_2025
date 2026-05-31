import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Career from "@/components/Career";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <CaseStudy />
      <Career />
      <Awards />
      <Skills />
      <Contact />
    </>
  );
}
