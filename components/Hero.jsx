"use client";
import CircularText from './CircularText';
import { motion } from "framer-motion";
import Antigravity from "./Antigravity";
import SplitText from "./SplitText"; // Make sure the path is correct

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters/words have animated!");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] pt-20">
      
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




      {/* Hero Content (z-10 keeps it above the animation) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:items-start items-center">
        
        <div className="mb-4">
          <SplitText
            text=" Hello World, I am"
            className="text-[#3B82F6] font-mono text-sm md:text-base tracking-wide"
            delay={30}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>
        
        <div className="mb-4">
          <SplitText
            text="Abderrahmane."
            className="text-5xl md:text-7xl font-extrabold text-[#E2E8F0] tracking-tight drop-shadow-lg"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>
        
        <div className="mb-8">
          <SplitText
            text="Full Stack Developer"
            className="text-3xl md:text-5xl font-bold text-[#E2E8F0]/60"
            delay={40}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="max-w-lg mb-10">
          <SplitText
            text="I build exceptional and accessible digital experiences. Focused on modern web technologies, responsive design, and clean code."
            className="text-[#E2E8F0]/80 text-lg leading-relaxed md:text-left text-center"
            delay={260} // Faster delay for long text
            duration={1.25}
            ease="power3.out"
            splitType="words" // "words" is much better for long descriptions than "chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }} // Waits for the text to finish animating before popping in
        >
          





        </motion.div>


        
  
<CircularText
  text="full stack Developer "
  onHover="goBonkers"
  spinDuration={5}
  className="custom-class"
/>
      </div>
    </section>
  );
}