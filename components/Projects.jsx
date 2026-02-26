"use client";

import { motion } from "framer-motion";
import Antigravity from "./Antigravity"; // Make sure to import it

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, Stripe payments, and a dynamic CMS admin dashboard.",
    tech: ["Next.js", "Tailwind", "Prisma", "Stripe"],
    link: "#",
  },
  {
    title: "AI Chat Interface",
    description: "A sleek, responsive chat interface integrating OpenAI's API. Features message history, streaming responses, and dark mode.",
    tech: ["React", "Node.js", "OpenAI", "Framer Motion"],
    link: "#",
  },
  {
    title: "Task Management SaaS",
    description: "A collaborative task manager allowing teams to create kanban boards, assign tasks, and track productivity in real-time.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
    link: "#",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-[#0F172A] text-[#E2E8F0]">
      
      {/* Antigravity Background Animation */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center opacity-70 pointer-events-none">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1.5}
          particleSize={2}
          lerpSpeed={0.1}
          color="#2330e7"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Main Content (z-10 keeps it above the animation) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center md:justify-start">
            <span className="text-[#3B82F6] font-mono text-xl mr-2">02.</span> Some Things I've Built
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] rounded-full mx-auto md:mx-0 mt-4"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#1e293b]/90 backdrop-blur-sm rounded-xl p-8 flex flex-col h-full shadow-lg shadow-black/20 border border-slate-700/50 hover:border-[#3B82F6]/50 transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <svg className="w-10 h-10 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <a href={project.link} className="text-[#E2E8F0] hover:text-[#3B82F6] transition-colors relative z-20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">{project.title}</h3>
              <p className="text-[#E2E8F0]/70 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-[#3B82F6]">
                {project.tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}