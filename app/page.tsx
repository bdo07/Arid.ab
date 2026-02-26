"use client";

import dynamic from "next/dynamic";

// Dynamic imports (disable SSR)
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Projects = dynamic(() => import("../components/Projects"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#0F172A] min-h-screen selection:bg-[#3B82F6]/30 selection:text-[#3B82F6]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}