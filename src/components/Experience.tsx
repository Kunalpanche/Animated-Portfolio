import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Experience Data
const experienceData = [
  {
    id: 1,
    num: "01",
    role: "AI Engineer",
    company: "Acube AI",
    date: "Jan 2026 - Present",
    location: "Nagpur",
    desc: [
      "Driving mission-critical AI engineering initiatives, models, and real-world optimizations.",
      "Developing and deploying scalable machine learning models for enterprise applications.",
      "Collaborating with cross-functional teams to integrate AI features into core products.",
      "Optimizing model performance and reducing inference latency for real-time processing."
    ]
  },
  {
    id: 2,
    num: "02",
    role: "Co-Founder",
    company: "TraillX",
    date: "Feb 2025 - Present (1 yr 3 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Showcased TraillX at Advantage Vidarbha 2025 by AID, engaging 500+ visitors over 3 days.",
      "Collected valuable product feedback and iterated on core platform features.",
      "Trained 40+ students in building real-world AI Agent and Automation solutions.",
      "Driving TraillX’s mission to empower the next generation with future-ready skills."
    ]
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
      "Coordinated 20+ mentors, judges, and secured multiple sponsorships for the events.",
      "Directed content and social media strategies, boosting overall online engagement by 4x."
    ]
  },
  {
    id: 4,
    num: "04",
    role: "Mentor",
    company: "Smart India Hackathon",
    date: "Aug 2025 - Dec 2025 (5 mos)",
    location: "India",
    desc: [
      "Mentored and guided participating teams through the complete hackathon lifecycle.",
      "Assisted students in ideation, problem-solving, and robust architectural design.",
      "Provided technical support for troubleshooting complex implementation issues.",
      "Guided teams in delivering impactful, production-ready solutions for real issues."
    ]
  },
  {
    id: 5,
    num: "05",
    role: "Full Stack Developer",
    company: "EY",
    date: "Dec 2024 - Jan 2025 (2 mos)",
    location: "Remote",
    desc: [
      "Developed robust and scalable full-stack applications for enterprise clients.",
      "Collaborated seamlessly with enterprise-grade architectures and modern tech stacks.",
      "Participated in agile sprints, code reviews, and continuous integration processes.",
      "Enhanced overall application performance, security features, and user experience."
    ]
  },
  {
    id: 6,
    num: "06",
    role: "Ai and Cloud Intern",
    company: "Edunet Foundation",
    date: "Jul 2024 - Aug 2024 (2 mos)",
    location: "Remote",
    desc: [
      "Participated in an intensive internship focused on applied AI and cloud technologies.",
      "Partnered with industry experts to explore and implement impactful real-world solutions.",
      "Gained hands-on experience with IBM Cloud, Watson Studio, and advanced NLP pipelines.",
      "Explored and integrated open-source Generative AI and LLM models into pilot projects."
    ]
  },
  {
    id: 7,
    num: "07",
    role: "Data Analyst Intern",
    company: "DYSMECH COMPETENCY SERVICES",
    date: "Jan 2024 - Apr 2024 (4 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Collaborated with cross-discipline teams to extract actionable insights from datasets.",
      "Utilized advanced analytical techniques to contribute to strategic decision-making.",
      "Created comprehensive data dashboards and reports for visual data representation.",
      "Empowered key stakeholders with valuable insights, directly optimizing daily operations."
    ]
  },
  {
    id: 8,
    num: "08",
    role: "IoT Intern",
    company: "IoTronics Tech Lab Pvt. Ltd.",
    date: "Oct 2023 - Dec 2023 (3 mos)",
    location: "Nagpur, MH, India",
    desc: [
      "Designed and tested hardware projects using advanced IoT kits and microcontrollers.",
      "Wrote and documented comprehensive Arduino programming procedures and workflows.",
      "Performed extensive functional testing on connected smart devices and environment sensors.",
      "Drove internal IoT innovation through hands-on application with state-of-the-art technology."
    ]
  }
];

function ExperienceCardContent({ exp }: { exp: (typeof experienceData)[number] }) {
  return (
    <div className="flex w-[85vw] shrink-0 md:w-[60vw] lg:w-[50vw] xl:w-[45vw] flex-col p-8 md:p-12 lg:p-16 pt-16 md:pt-24 lg:pt-32 h-full justify-start transition-opacity duration-300">
      
      {/* Top half: Role & Details */}
      <div className="flex flex-col justify-start relative w-full mb-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs sm:text-sm font-mono text-gray-500 flex items-center gap-3 uppercase tracking-widest">
             <span className="w-1.5 h-1.5 rounded-full bg-primary/50 block"></span>
             {exp.num} <span className="mx-2">—</span> {exp.date}
          </span>
        </div>
        
        <h3 className="mb-4 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight leading-[1.1] text-primary">
          {exp.role}
        </h3>
        <h4 className="text-2xl md:text-3xl font-serif italic text-gray-400">
          {exp.company}
        </h4>
      </div>

      {/* Bottom half: Description */}
      <div className="flex w-full flex-col mt-4">
        <ul className="text-lg md:text-xl text-gray-400 space-y-4 leading-relaxed font-normal">
        {exp.desc.map((d, i) => (
          <li key={i} className="flex gap-4 items-start py-2 border-b border-white/5 last:border-0">
            <span className="text-primary/40 mt-1 font-serif italic">++</span>
            <span className="block">{d}</span>
          </li>
        ))}
        </ul>

        {exp.location && (
          <p className="mt-12 text-sm text-gray-600 uppercase tracking-widest flex items-center gap-4">
            <span className="block w-6 h-[1px] bg-gray-600/50"></span>
            {exp.location}
          </p>
        )}
      </div>

    </div>
  );
}

export function Experience() {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"]
  });

  // Adding a spring for perfectly smooth scrolling (gsap-like easing)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const [scrollWidth, setScrollWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMeasurements = () => {
      if (trackRef.current) {
        setScrollWidth(trackRef.current.scrollWidth);
        const isDesktop = window.innerWidth >= 1024;
        setIsMobile(!isDesktop);
        // The container width depends on screen size (lg is 66.666vw roughly, else 100vw)
        setViewportWidth(isDesktop ? window.innerWidth * 0.666 : window.innerWidth);
      }
    };

    updateMeasurements();
    // Re-measure after a small delay to ensure rendering is complete
    setTimeout(updateMeasurements, 100);
    window.addEventListener('resize', updateMeasurements);
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  // We want to translate from 0 to the exact remaining distance minus some padding.
  const distanceToTranslate = -((scrollWidth - viewportWidth) + 100); 

  // Apply smooth transform using calculated width and spring progress
  const xTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    [0, scrollWidth === 0 || isMobile ? 0 : distanceToTranslate]
  );

  return (
    <section ref={scrollSectionRef} id="experience" className="bg-black text-primary border-t border-white/10 relative lg:h-[400vh]">
      
      <div className="lg:sticky top-0 lg:top-[5vh] h-auto lg:h-[90vh] flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left Area (Static Sidebar Header) */}
        <div className="w-full lg:w-1/3 lg:shrink-0 p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:justify-start lg:min-h-[85vh] bg-black lg:border-r border-white/10 z-20">
          <div className="lg:mt-32 my-4 lg:mb-12">
            <span className="text-primary/50 text-[10px] sm:text-xs uppercase tracking-widest mb-12 block">
              Experience
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-normal tracking-tight leading-[0.95]">
              <span className="text-primary">My</span><br/>
              <span className="text-gray-500 italic font-serif">journey</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-10 max-w-[280px] leading-relaxed">
              A complete yet focused range of roles, internships, and ventures that have shaped my technical and leadership skills across every stage of my career.
            </p>
          </div>
        </div>

        {/* Right Area (Scrollable Horizontal Track) */}
        <div className="w-full lg:w-2/3 flex items-center overflow-x-auto lg:overflow-hidden border-t lg:border-t-0 border-white/5 h-full relative scroll-smooth [scrollbar-width:none]">
          <motion.div 
            ref={trackRef}
            style={{ x: isMobile ? 0 : xTransform }}
            className="flex w-max items-stretch h-[85%] md:h-[75%] lg:h-auto lg:py-16"
          >
            {experienceData.map((exp) => (
              <div key={exp.id} className="shrink-0 border-r border-white/5 last:border-none">
                <ExperienceCardContent exp={exp} />
              </div>
            ))}
            {/* Spacer at the end */}
            <div className="w-8 md:w-24 shrink-0 border-l border-white/5"></div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
