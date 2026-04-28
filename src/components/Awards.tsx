import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const awardsData = [
  {
    id: 1,
    num: "01",
    title: "10x National Hackathon Winner",
    desc: "Unmatched problem solving under pressure",
    year: "2021-26",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    num: "02",
    title: "Student of the Year",
    desc: "Academic & Extracurricular Excellence",
    year: "2025",
    imgUrl: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    num: "03",
    title: "SIH Mentor",
    desc: "Smart India Hackathon Mentorship",
    year: "2025",
    imgUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    num: "04",
    title: "Hackathon Judge",
    desc: "IIIT Nagpur Hackathon Panel",
    year: "2024",
    imgUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    num: "05",
    title: "Best Innovation Award",
    desc: "National Tech Symposium",
    year: "2023",
    imgUrl: "https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    num: "06",
    title: "AI/ML Track Winner",
    desc: "Predictive Analytics Challenge",
    year: "2024",
    imgUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    num: "07",
    title: "Open Source Advocate",
    desc: "Top Contributor in Hacktoberfest",
    year: "2022",
    imgUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    num: "08",
    title: "Data Analytics Excellence",
    desc: "State-level Data Viz Competition",
    year: "2023",
    imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    num: "09",
    title: "Best Full Stack Project",
    desc: "Inter-collegiate DevFest",
    year: "2024",
    imgUrl: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    num: "10",
    title: "Community Builder",
    desc: "Tech Club President",
    year: "2025",
    imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

export function Awards() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section id="awards" className="bg-black text-primary py-24 px-4 md:px-8 border-t border-white/10 relative">
      
      {/* Header section matching reference */}
      <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-between mb-12 md:mb-20 relative">
        <div className="absolute top-0 left-0 hidden md:block">
           <span className="text-primary/50 text-[10px] sm:text-xs uppercase tracking-widest block">
            [05] Awards
          </span>
        </div>
        
        <div className="mx-auto text-center flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95] text-center">
            <span className="text-primary">Awards &</span><br/>
            <span className="text-gray-500 italic font-serif">Recognitions</span>
          </h2>
          <p className="text-[10px] sm:text-xs font-sans text-primary/40 mt-8 tracking-[0.3em] uppercase">© 2021 — 2026</p>
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="flex md:hidden gap-4 mt-8">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-white/5 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-white/5 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Masonry on Desktop / Carousel on Mobile */}
      <div 
        ref={carouselRef}
        className="max-w-[1600px] mx-auto flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar gap-6 md:gap-8 md:columns-2 lg:columns-3 md:space-y-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {awardsData.map((award, idx) => {
          
          // Generate a varied height so it looks like proper masonry on desktop
          const isTall = idx === 1 || idx === 3 || idx === 6;
          const heightClass = isTall ? 'h-[600px] lg:h-[700px]' : (idx % 2 === 0 ? 'h-[400px] lg:h-[450px]' : 'h-[500px] lg:h-[550px]');

          return (
            <motion.div 
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group cursor-pointer shrink-0 snap-center w-[85vw] md:w-full md:mb-8"
            >
              {/* Image Box */}
              <div 
                className={`relative w-full ${heightClass} overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700`}
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <img 
                  src={award.imgUrl} 
                  alt={award.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] opacity-80 group-hover:opacity-100"
                />
                
                {/* Thin overlay to map the dark tone in references */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                
                {/* Number [01] */}
                <div className="absolute top-4 left-5">
                  <span className="text-[10px] font-mono text-primary/40">[{award.num}]</span>
                </div>
                
                {/* Center Hover Content (Simulating Logo overlay) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span className="text-primary font-medium text-sm tracking-tight">Kunal</span>
                  </div>
                </div>

                {/* Plus (+) sign */}
                <div className="absolute bottom-5 right-5 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <span className="text-primary/40 text-xl leading-none font-light">+</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 pb-4 flex justify-between items-start border-b border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                <div className="pr-4">
                  <h4 className="text-primary text-xl font-normal tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-500">{award.title}</h4>
                  <p className="text-xs font-normal text-gray-500 uppercase tracking-widest">{award.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-gray-600 whitespace-nowrap mt-1">{award.year}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Link matching "All Case Studies" */}
      <div className="max-w-[1600px] mx-auto flex justify-end mt-16 pb-8 border-t border-white/10 pt-8">
        <a href="#awards" className="text-xs uppercase tracking-[0.2em] font-medium text-primary/60 hover:text-primary transition-all duration-300 flex items-center gap-4 group">
          <span>[10] All Accolades</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary group-hover:text-black transition-all duration-500">
            <span className="text-lg leading-none mb-0.5">↗</span>
          </div>
        </a>
      </div>

    </section>
  );
}