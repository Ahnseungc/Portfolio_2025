import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import StarBackground from "@/components/StarBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
// import CaseStudy from "@/components/CaseStudy";
import Career from "@/components/Career";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ThemeSync from "@/components/ThemeSync";
import { createPageMetadata } from "@/lib/metadata";
import { getVelogPosts } from "@/lib/velog";

export const metadata = createPageMetadata();

export const revalidate = 3600;

export default async function Home() {
  let blogPosts: Awaited<ReturnType<typeof getVelogPosts>> = [];
  try {
    blogPosts = await getVelogPosts();
  } catch {
    blogPosts = [];
  }

  return (
    <main id="main">
      <StarBackground />
      <ThemeSync />
      <Intro />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Blog posts={blogPosts} />
      {/* <CaseStudy /> */}
      <Career />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
