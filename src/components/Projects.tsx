import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink, X } from 'lucide-react';

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
import cihImg from '../assets/project/cih.png';
import websparkImg from '../assets/webspark1.jpg';
import ayurSetuImg from '../assets/project/Ayursetu.png';
import iotImg from '../assets/project/iot.png';
import arMenuImg from '../assets/project/armenu.png';

const projectsData = [
  {
    num: "01",
    title: "AyurSetu",
    subtitle: "AI + AR Ayurveda Platform",
    desc: "A smart Ayurveda platform that combines AI and Augmented Reality to identify medicinal plants, visualize 3D AR models, suggest remedies, enable 1:1 doctor consultations, and provide an Ayurvedic marketplace with interactive multilingual learning.",
    features: [
      "Real-time Medicinal Plant Identification",
      "3D AR Visualization of Plants",
      "AI-Based Remedy Suggestor",
      "1:1 Ayurvedic Doctor Consultancy",
      "Ayurvedic Marketplace",
      "Chat With Plant",
      "Gamified Learning Modules",
      "Interactive Herbal Education"
    ],
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "LLM"
    ],
    github: "https://github.com/Kunalpanche/Ayursetu-Frontend.git",
    imgUrl: ayurSetuImg,
  },
  {
    num: "02",
    title: "VoiceShield AI",
    subtitle: "AI Voice Fraud Detector",
    desc: "A real-time AI voice fraud detection system built to combat social engineering and deepfake scams. It analyzes audio frequencies using deep learning, determining synthetic speech presence in under 500ms.",
    tech: ["Python", "PyTorch", "Librosa", "FastAPI", "React"],
    github: "https://github.com/Kunalpanche/VoiceShield-AI",
    live: "https://voiceshield.kunal.dev",
    imgUrl: aiImpactImg,
  },
  {
    num: "03",
    title: "Central India Hackathon Website",
    subtitle: "Pan-India Hackathon Platform",
    desc: "A high-performance event management and registration website that scaled to support 2,000+ developers across 150+ cities for Central India Hackathon. Features automated team matchmaking, real-time rubric-based evaluation for 30+ judges, and instant leaderboard generation.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Socket.io"],
    github: "",
    live: "https://phenomenal-profiterole-8d41cd.netlify.app/",
    imgUrl: cihImg,
  },
  {
    num: "04",
    title: "IoT Automation Suite",
    subtitle: "Arduino IoT & Home Automation",
    desc: "A collection of smart, automated IoT systems developed during an internship at IoTronics Tech Lab. Features Bluetooth-controlled door locks and curtains, keypad lock matrices, and voice-controlled lighting systems to construct custom home automation ecosystems.",
    features: [
      "Bluetooth-Controlled Curtain Opener",
      "Voice-Controlled Home Automation LED",
      "Keypad-Secured Digital Door Lock",
      "Smart Calculator on 4x4 Keyboard Matrix",
      "Expression Display on 8x8 LED Grid",
      "Custom Bluetooth LED Matrix Display"
    ],
    tech: ["Arduino", "C++", "HC-05 Bluetooth", "Keypad Matrix", "Relay Modules"],
    github: "https://github.com/Kunalpanche/IOT-PROJECTS",
    live: "",
    imgUrl: iotImg,
  },
  {
    num: "05",
    title: "Webspark Platform",
    subtitle: "Learning Management System",
    desc: "An interactive learning management system used to train and mentor over 160+ students. Includes progress trackers, project submission gates, live code playground, and automated feedback loops for assignments.",
    tech: ["React.js", "Node.js", "Firebase Auth", "Tailwind CSS", "Express"],
    github: "https://github.com/Kunalpanche/Webspark-LMS",
    live: "https://webspark.traillx.com",
    imgUrl: websparkImg,
  },
  {
    num: "06",
    title: "AR Menu",
    subtitle: "AR Restaurant Dining Menu",
    desc: "An interactive Augmented Reality menu platform that modernizes restaurant dining. Customers scan a QR code to view and interact with highly detailed 3D food items right on their tables before ordering.",
    features: [
      "Interactive 3D AR Dish Visualization",
      "Digital QR-Based Menu Access",
      "Real-time Food Item Customization",
      "Nutritional & Ingredient Information Display",
      "Optimized Mobile Browser Rendering"
    ],
    tech: ["React.js", "React Native", "Three.js", "Ar.js", "Tailwind CSS"],
    github: "",
    live: "https://ar-menu-production.vercel.app/",
    imgUrl: arMenuImg,
  }
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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
                  <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-primary/80 font-mono tracking-wider min-w-[250px]">
                    {project.tech.slice(0, 4).map(t => (
                      <div key={t} className="flex items-center gap-1.5">
                        <span className="text-primary font-bold">→</span>
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
                            <p className="text-gray-200 text-base md:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                              {project.desc}
                            </p>

                            {/* Features list */}
                            {project.features && (
                              <div className="mb-8">
                                <h5 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#E1E0CC] font-mono mb-4">Key Features:</h5>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-base text-gray-300">
                                  {project.features.map(f => (
                                    <li key={f} className="flex items-start gap-2">
                                      <span className="text-primary/70 mt-1">•</span>
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Tech stack tags - visible on all screens in expanded area */}
                            <div className="mb-8">
                              <h5 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#E1E0CC] font-mono mb-4">Technologies Used:</h5>
                              <div className="flex flex-wrap gap-2.5">
                                {project.tech.map(t => (
                                  <span 
                                    key={t} 
                                    className="text-xs sm:text-sm font-mono bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-medium tracking-wide"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
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
                            onClick={() => setSelectedImg(project.imgUrl)}
                            className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] cursor-zoom-in"
                          >
                            <img
                              src={project.imgUrl}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-100 block"
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

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-sm border border-white/10 bg-[#080808] text-primary shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close image details"
                onClick={() => setSelectedImg(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-black cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="bg-black flex items-center justify-center">
                <img
                  src={selectedImg}
                  alt="Project Detail Showcase"
                  className="max-w-full max-h-[85vh] object-contain block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
