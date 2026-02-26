"use client";

import { motion } from "framer-motion";
import Antigravity from "./Antigravity"; 
import ScrambledText from "./ScrambledText"; 
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql } from 'react-icons/si';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Node.js", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Git"
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-[#0F172A] text-[#E2E8F0]">
      
      {/* Antigravity Background */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <span className="text-[#3B82F6] font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-[#E2E8F0]/80 text-lg leading-relaxed"
          >
            <div className="min-h-[100px]">
                <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:/\\*">
                  Hello! My name is Abderrahmane and I enjoy creating things that live on the internet. 
                  Here are a few technologies I've been working with recently:
                </ScrambledText>
            </div>

            <ul className="grid grid-cols-2 gap-3 mt-4">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#3B82F6" }}
                  className="flex items-center font-mono text-sm"
                >

                </motion.li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Image Container */}
            <div className="relative group w-full max-w-sm mb-12">
              <div className="absolute inset-0 border-2 border-[#3B82F6] rounded-xl translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative z-10 aspect-square bg-slate-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-[#3B82F6] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm bg-[#1e293b]">
                  [Profile Image]
                </div>
              </div>
            </div>

            {/* Logo Loop Animation (Below Image) */}
            <div className="w-full max-w-sm h-[80px] relative overflow-hidden mt-4">
               <LogoLoop
                  logos={techLogos}
                  speed={80}
                  direction="left"
                  logoHeight={40}
                  gap={40}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#0F172A"
                  ariaLabel="Technologies"
                  useCustomRender={false}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}