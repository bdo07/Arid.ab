"use client";

import { motion } from "framer-motion";
import Antigravity from "./Antigravity";
import TargetCursor from './TargetCursor'; // Import the cursor component

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-[#0F172A] text-[#E2E8F0]">
      
      {/* Tactical Target Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
      />

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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <p className="text-[#3B82F6] font-mono text-sm mb-4">03. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E2E8F0]">Get In Touch</h2>
          <p className="text-[#E2E8F0]/70 text-lg leading-relaxed max-w-xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6 max-w-md mx-auto text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-mono text-[#E2E8F0]/80">Name</label>
            <input
              type="text"
              id="name"
              // Added cursor-target class
              className="cursor-target bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-mono text-[#E2E8F0]/80">Email</label>
            <input
              type="email"
              id="email"
              // Added cursor-target class
              className="cursor-target bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-mono text-[#E2E8F0]/80">Message</label>
            <textarea
              id="message"
              rows={5}
              // Added cursor-target class
              className="cursor-target bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-[#E2E8F0] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all resize-none"
              placeholder="Hello Abderrahmane..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // Added cursor-target class
            className="cursor-target mt-4 bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#0F172A] px-8 py-4 rounded-lg font-bold transition-colors w-full"
          >
            Say Hello
          </motion.button>
        </motion.form>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 text-center mt-32 text-[#E2E8F0]/50 font-mono text-sm">
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </section>
  );
}