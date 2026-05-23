import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

import aiImpactImg from '../assets/aiimpact.jpg';
import cihImg from '../assets/cih1.jpg';
import websparkImg from '../assets/webspark1.jpg';

// Unsplash placeholder for IoT image
const iotImg = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';

const projectsData = [
  {
    num: "01",
    title: "VoiceShield AI",
    subtitle: "AI Voice Fraud Detector",
    desc: "A real-time AI voice fraud detection system built to combat social engineering and deepfake scams. It analyzes audio frequencies using deep learning, determining synthetic speech presence in under 500ms.",
    tech: ["Python", "PyTorch", "Librosa", "FastAPI", "React"],
    github: "https://github.com/Kunalpanche/VoiceShield-AI",
    live: "https://voiceshield.kunal.dev",
    imgUrl: aiImpactImg,
  },
  {
    num: "02",
    title: "CIH Portal",
    subtitle: "Hackathon Platform",
    desc: "A high-performance event management and judging platform that scaled to support 2,000+ developers across 150+ cities for Central India Hackathon. Features automated team matchmaking, real-time rubric-based evaluation for 30+ judges, and instant leaderboard generation.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Socket.io"],
    github: "https://github.com/Kunalpanche/CIH-Portal",
    live: "https://cih.centralindiahackathon.com",
    imgUrl: cihImg,
  },
  {
    num: "03",
    title: "EnviroSense IoT",
    subtitle: "Smart Industrial Hub",
    desc: "An end-to-end IoT environment monitoring system designed for industrial smart spaces. Integrates ESP32 microcontrollers, DHT22 sensors, and gas detectors with a real-time dashboard displaying environmental vitals and anomaly alerts.",
    tech: ["C++ (Arduino)", "ESP32", "MQTT Protocol", "Node.js", "InfluxDB"],
    github: "https://github.com/Kunalpanche/EnviroSense-IoT",
    live: "",
    imgUrl: iotImg,
  },
  {
    num: "04",
    title: "Webspark Platform",
    subtitle: "Learning Management System",
    desc: "An interactive learning management system used to train and mentor over 160+ students. Includes progress trackers, project submission gates, live code playground, and automated feedback loops for assignments.",
    tech: ["React.js", "Node.js", "Firebase Auth", "Tailwind CSS", "Express"],
    github: "https://github.com/Kunalpanche/Webspark-LMS",
    live: "https://webspark.traillx.com",
    imgUrl: websparkImg,
  }
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-black text-primary py-24 md:py-32 px-4 md:px-8 border-t border-white/10 relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          {/* Section Title (Left Column) */}
          <div className="max-w-xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[0.95] text-left">
              <span className="text-primary">Featured</span>
              <br />
              <span className="text-gray-500 italic font-serif">Projects</span>
            </h2>
          </div>

          {/* Section Description (Right Column) */}
          <div className="max-w-2xl md:pt-4">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              A curated selection of applications, systems, and platforms developed to solve real-world problems. Ranging from deep learning voice analytics to massive event scaling platforms.
            </p>
          </div>
        </div>

        {/* Projects Accordion List */}
        <div className="border-t border-b border-white/10 divide-y divide-white/10">
          {projectsData.map((project, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div 
                key={project.num} 
                className="py-8 md:py-12 flex flex-col transition-all duration-300"
              >
                {/* Row Header (Trigger) */}
                <div 
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-grow">
                    {/* Number */}
                    <span className={`text-4xl md:text-6xl font-light font-mono leading-none transition-colors duration-500 ${
                      isOpen ? 'text-primary' : 'text-gray-600 group-hover:text-primary'
                    }`}>
                      {project.num}
                    </span>
                    {/* Title */}
                    <span className={`text-2xl sm:text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 ${
                      isOpen ? 'text-[#E1E0CC]' : 'text-gray-500 group-hover:text-[#E1E0CC]'
                    }`}>
                      {project.title}
                    </span>
                  </div>

                  {/* Tech Tags on Desktop (hidden on mobile) */}
                  <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-gray-500 font-mono tracking-wider min-w-[250px]">
                    {project.tech.slice(0, 4).map(t => (
                      <div key={t} className="flex items-center gap-1.5">
                        <span className="text-primary/60">→</span>
                        <span>{t.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Open/Close Button */}
                  <div className="ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        isOpen 
                          ? 'bg-primary border-primary text-black' 
                          : 'border-white/10 text-gray-400 group-hover:border-primary/50 group-hover:text-primary'
                      }`}
                    >
                      <Plus size={18} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        {/* Left Side: Subtitle, Description, Mobile Tags, Links */}
                        <div className="md:col-span-7 flex flex-col justify-between h-full">
                          <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-primary/60 font-mono mb-4">
                              {project.subtitle}
                            </h4>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                              {project.desc}
                            </p>

                            {/* Tech tags on Mobile */}
                            <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                              {project.tech.map(t => (
                                <span 
                                  key={t} 
                                  className="text-[10px] sm:text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4 mt-auto">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary text-black rounded-full py-2.5 px-6 text-sm font-medium hover:bg-primary/90 transition-all duration-300 group/btn"
                              >
                                <span>Visit Live Site</span>
                                <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white/10 hover:border-primary/50 text-[#E1E0CC] rounded-full py-2.5 px-6 text-sm font-medium hover:text-primary transition-all duration-300 group/btn"
                              >
                                <GithubIcon className="w-4 h-4" />
                                <span>View Repository</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right Side: Image Showcase */}
                        <div className="md:col-span-5 w-full">
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
                          >
                            <img
                              src={project.imgUrl}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
