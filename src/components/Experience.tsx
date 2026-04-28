import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    num: "01",
    role: "AI Engineer",
    company: "Acube AI",
    date: "Jan 2026 - Present",
    location: "Nagpur",
    desc: [
      "Driving mission-critical AI engineering initiatives, models, and real-world optimizations."
    ],
    imgUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    num: "02",
    role: "Co-Founder",
    company: "TraillX",
    date: "Feb 2025 - Present (1 yr 3 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Showcased TraillX at Advantage Vidarbha 2025 by AID, engaged 500+ visitors over 3 days, and collected valuable product feedback.",
      "Trained 40+ students in building real-world AI Agent and Automation solutions through interactive workshops.",
      "Driving TraillX’s mission to empower the next generation with future-ready AI & automation skills."
    ],
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    num: "03",
    role: "Lead Organizer",
    company: "Central India Hackathon",
    date: "Dec 2024 - Present (1 yr 5 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Led CIH’s growth from 70+ teams in CIH 1.0 to 800+ teams (2000+ participants) in CIH 2.0.",
      "Managed tech operations including website, registration systems, and judging infrastructure.",
      "Coordinated 20+ mentors, judges, and secured multiple sponsorships.",
      "Directed content and social media, boosting online engagement by 4x."
    ],
    imgUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    num: "04",
    role: "Mentor",
    company: "Smart India Hackathon",
    date: "Aug 2025 - Dec 2025 (5 mos)",
    location: "India",
    desc: [
      "Mentored and guided participating teams through the ideation and execution process, aiding in building impactful solutions."
    ],
    imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    num: "05",
    role: "Full Stack Developer",
    company: "EY",
    date: "Dec 2024 - Jan 2025 (2 mos)",
    location: "Remote",
    desc: [
      "Developed robust and scalable full-stack applications.",
      "Collaborated with enterprise-grade architectures and modern tech stacks."
    ],
    imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 6,
    num: "06",
    role: "Ai and Cloud Intern",
    company: "Edunet Foundation",
    date: "Jul 2024 - Aug 2024 (2 mos)",
    location: "Remote",
    desc: [
      "Participated in a four-week internship focused on AI and cloud technologies.",
      "Partnered with industry experts to explore and implement real-world solutions.",
      "Gained hands-on experience with IBM Cloud, Watson Studio, NLP, GenAI, and LLM models."
    ],
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 7,
    num: "07",
    role: "Data Analyst Intern",
    company: "DYSMECH COMPETENCY SERVICES",
    date: "Jan 2024 - Apr 2024 (4 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Collaborated to extract actionable insights from complex datasets.",
      "Utilized advanced analytical techniques to contribute to strategic decision-making.",
      "Empowered stakeholders with valuable insights optimizing operations."
    ],
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 8,
    num: "08",
    role: "IoT Intern",
    company: "IoTronics Tech Lab Pvt. Ltd.",
    date: "Oct 2023 - Dec 2023 (3 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Designed and tested projects using advanced IoT kits and Arduino programming.",
      "Performed extensive testing and documented programming procedures.",
      "Drove IoT innovation through hands-on application with state-of-the-art technology."
    ],
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop"
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-black text-primary border-t border-white/10 relative">
      
      <div className="flex flex-col lg:flex-row relative">
        
        {/* Left Column (Sticky Sidebar) */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen lg:min-h-[600px] p-8 md:p-12 lg:p-16 lg:border-r border-white/10 flex flex-col justify-start bg-black z-10">
          <div className="mb-12 mt-12 lg:mt-24">
            <span className="text-primary/50 text-[10px] sm:text-xs uppercase tracking-widest mb-12 block">
              [02] Experience
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95]">
              <span className="text-primary">My</span><br/>
              <span className="text-gray-500 italic font-serif">journey</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-10 max-w-[280px] leading-relaxed">
              A complete yet focused range of roles, internships, and ventures that have shaped my technical and leadership skills across every stage of my career.
            </p>
          </div>
        </div>

        {/* Right Column (Scrollable List) */}
        <div className="w-full lg:w-2/3 flex flex-col text-primary">
          {experienceData.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col md:flex-row border-b border-white/10 group hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
                
                {/* Left side: Role & Details */}
                <div className="w-full md:w-5/12 flex flex-col justify-start p-8 md:p-12 lg:p-16 md:border-r border-white/10 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono text-gray-500 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary/50 block"></span>
                       {exp.num}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3 leading-tight text-primary">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-serif italic text-gray-400 mb-6">
                    {exp.company}
                  </h4>
                  
                  <div className="mt-auto pt-6 text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-widest border-t border-white/5 inline-block">
                    {exp.date}
                  </div>
                </div>

                {/* Right side: Description */}
                <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-12 lg:p-16 border-t md:border-t-0 border-white/10">
                  <ul className="text-base sm:text-lg text-gray-400 space-y-4 leading-relaxed font-normal">
                    {exp.desc.map((d, i) => (
                      <li key={i} className="flex flex-col gap-2">
                        <span className="block">{d}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.location && (
                    <p className="mt-8 text-xs sm:text-sm text-gray-600 uppercase tracking-widest flex items-center gap-2">
                      <span className="block w-4 h-[1px] bg-gray-600/50"></span>
                      {exp.location}
                    </p>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}