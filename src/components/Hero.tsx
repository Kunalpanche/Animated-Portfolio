import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

const bgVideo = 'https://cdn.jsdelivr.net/gh/Kunalpanche/Animated-Portfolio@main/src/assets/bgg.mp4';

export function Hero() {
  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] md:scale-110 lg:scale-120 xl:scale-[1.15]"
        />

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-9 flex items-center gap-4 sm:gap-7 md:gap-12 lg:gap-16">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm md:text-[15px] whitespace-nowrap transition-colors duration-300"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

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
                Final-year Computer Engineering student skilled in Python, Data Analysis, and Full Stack Development. Passionate about problem-solving and a 10x National Hackathon Winner.
              </motion.p>

              <motion.a
                href="#contact"
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
