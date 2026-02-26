
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";



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