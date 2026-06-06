import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

const bgVideo = 'https://cdn.jsdelivr.net/gh/Kunalpanche/Animated-Portfolio@main/src/assets/bgg.mp4';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#awards" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black relative">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <motion.video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] md:scale-110 lg:scale-120 xl:scale-[1.15]"
        />

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Desktop Navbar - flush with the top edge, no top padding */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 hidden md:flex justify-center">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-9 flex items-center gap-4 sm:gap-7 md:gap-12 lg:gap-16 border-x border-b border-white/5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs sm:text-sm md:text-[15px] whitespace-nowrap transition-colors duration-300"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Header - separate absolute overlay */}
        <div className="absolute top-0 left-0 w-full z-30 flex md:hidden justify-between items-center px-6 py-4">
          {/* Mobile Branded Logo/Link */}
          <a
            href="#"
            className="text-xl font-serif italic text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Kunal Panche
          </a>

          {/* Hamburger Toggle Button - only visible when menu is closed */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="relative z-50 w-11 h-11 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center focus:outline-none text-[#E1E0CC]"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
            >
              {/* Dedicated Close (X) Button inside the Overlay */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/55 text-[#E1E0CC] backdrop-blur-sm transition-all duration-300 hover:bg-[#E1E0CC] hover:text-black focus:outline-none"
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>

              {/* Background Aesthetics */}
              <div className="absolute inset-0 noise-overlay opacity-[0.4] mix-blend-overlay pointer-events-none" />
              <div className="absolute top-10 left-10 text-xs font-serif italic text-primary/40 uppercase tracking-widest pointer-events-none">
                Navigation Menu
              </div>
              <div className="absolute bottom-10 left-10 text-[10px] font-sans text-primary/20 uppercase tracking-[0.2em] pointer-events-none">
                © 2026 Kunal Panche
              </div>

              <motion.nav
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                animate="open"
                initial="closed"
                className="flex flex-col items-center gap-8"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1, transition: { y: { stiffness: 120, damping: 15 } } },
                      closed: { y: 30, opacity: 0 }
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl sm:text-4xl font-light tracking-tight text-primary/80 hover:text-primary transition-all duration-300 relative group"
                    >
                      <span className="relative z-10 font-serif italic">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 pb-6 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            {/* Left Col - Heading */}
            <div className="md:col-span-8 flex flex-col">
              <WordsPullUp
                text="Kunal"
                showAsterisk={false}
                className="text-[#E1E0CC] font-medium leading-[0.65] tracking-[-0.07em] text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[10vw] whitespace-nowrap"
              />
              <WordsPullUp
                text="Panche"
                showAsterisk={false}
                className="text-[#E1E0CC] font-medium leading-[0.65] tracking-[-0.07em] text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[10vw] whitespace-nowrap -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20"
              />
            </div>

            {/* Right Col - Text & Button */}
            <div className="md:col-span-4 flex flex-col items-start gap-6 md:gap-8 mb-2 md:mb-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/90 text-xs sm:text-sm md:text-base leading-snug max-w-sm"
              >
                Computer Engineering graduate skilled in Python, Data Analysis, and Full Stack Development. Passionate about problem-solving and a 10x National Hackathon Winner.
              </motion.p>

              <motion.a
                href="mailto:kunalpanche34@gmail.com"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 bg-primary text-black rounded-full py-1 pl-5 pr-1 hover:gap-3 transition-all duration-300"
              >
                <span className="font-medium text-m sm:text-base whitespace-nowrap font-serif">Let's Connect</span>
                <div className="bg-black rounded-full flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transform group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
