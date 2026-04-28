
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const line1 = [{ text: "Let's Connect", className: "font-normal" }];
  const line2 = [{ text: "Have a project in mind?", className: "font-normal" }];
  const line3 = [{ text: "Collaborate.", className: "italic font-serif" }];

  return (
    <footer id="contact" className="bg-black text-primary border-t border-white/10 pt-12 sm:pt-20" ref={containerRef}>
      {/* Top Section - Giant Text Lines */}
      <div className="flex flex-col text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium px-4 md:px-0">
        <div className="py-6 sm:py-10 border-b border-white/10">
          <WordsPullUpMultiStyle segments={line1} />
        </div>
        <div className="py-6 sm:py-10 border-b border-white/10">
          <WordsPullUpMultiStyle segments={line2} />
        </div>
        <div className="py-6 sm:py-10 border-b border-white/10 relative">
          <WordsPullUpMultiStyle segments={line3} />
          
          {/* Plus Button */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute left-1/2 -bottom-5 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black text-xl hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-black/50 z-10"
          >
            +
          </motion.div>
        </div>
      </div>

      {/* Sub-heading Paragraph */}
      <div className="max-w-xl mx-auto text-center mt-12 px-6">
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          I'd love to hear from you! Whether you have a project in mind or want to collaborate, feel free to reach out.
        </p>
      </div>

      {/* Middle Section - 4 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10 mt-16">
        <div className="lg:border-r border-b lg:border-b-0 border-white/10 p-8 sm:p-12 flex flex-col gap-4 text-sm sm:text-base text-gray-400">
          <span className="text-primary/50 text-[10px] uppercase tracking-widest mb-2">Navigation</span>
          <a href="#about" className="hover:text-primary transition-colors w-fit">About</a>
          <a href="#projects" className="hover:text-primary transition-colors w-fit">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors w-fit">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors w-fit">Skills</a>
        </div>
        <div className="lg:border-r border-b lg:border-b-0 border-white/10 p-8 sm:p-12 flex flex-col gap-4 text-sm sm:text-base text-gray-400">
          <span className="text-primary/50 text-[10px] uppercase tracking-widest mb-2">Socials</span>
          <a href="https://github.com/kunalpanche" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors w-fit">GitHub</a>
          <a href="https://www.linkedin.com/in/kunal-panche/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors w-fit">LinkedIn</a>
          <a href="https://twitter.com/kunalpanche" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors w-fit">Twitter</a>
        </div>
        <div className="lg:border-r border-b md:border-b-0 border-white/10 p-8 sm:p-12 flex flex-col gap-4 text-sm sm:text-base text-gray-400">
          <span className="text-primary/50 text-[10px] uppercase tracking-widest mb-2">Contact</span>
          <a href="mailto:kunalpanche34@gmail.com" className="hover:text-primary transition-colors w-fit">kunalpanche34@gmail.com</a>
          <p className="hover:text-primary transition-colors w-fit">+91 8975767008</p>
        </div>
        <div className="p-8 sm:p-12 flex flex-col gap-4 text-sm sm:text-base text-gray-400">
          <span className="text-primary/50 text-[10px] uppercase tracking-widest mb-2">Location</span>
          <p>Nagpur,<br/>Maharashtra, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[300px]">
        {/* Left Arrow Graphic & Copyright */}
        <div className="col-span-1 lg:border-r border-b lg:border-b-0 border-white/10 relative p-8 flex flex-col justify-end min-h-[200px] lg:min-h-full">
          <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none opacity-[0.15]">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary" fill="none" strokeWidth="0.5" preserveAspectRatio="none">
              <path d="M 0 50 L 100 50" />
              <path d="M 50 0 L 100 50 L 50 100" />
            </svg>
          </div>
          <p className="text-xs text-gray-500 z-10 font-sans tracking-wide">© Kunal Panche 2026</p>
        </div>
        
        {/* Giant Text Right Side */}
        <div className="col-span-1 lg:col-span-3 flex items-center justify-center p-8 lg:p-12 overflow-hidden relative">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20vw] lg:text-[18vw] leading-[0.8] font-medium tracking-tighter text-primary select-none whitespace-nowrap"
          >
            Kunal<span className="text-[5vw] lg:text-[4vw] font-sans align-top ml-2 text-gray-500">®</span>
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
