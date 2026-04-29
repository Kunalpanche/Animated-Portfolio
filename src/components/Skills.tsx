import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, BrainCircuit, BarChart3, Wrench } from 'lucide-react';

const getDevicon = (slug: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
const getSimpleIcon = (slug: string, color: string = '') => `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

// Custom colorful generic SVGs for abstract concepts
// nlpIcon and genaiIcon removed to fix build issues using them

const skillsData = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C++ (DSA)', iconUrl: getDevicon('cplusplus') },
      { name: 'JavaScript', iconUrl: getDevicon('javascript') },
      { name: 'Python', iconUrl: getDevicon('python') },
      { name: 'TypeScript', iconUrl: getDevicon('typescript') }
    ]
  },
  {
    id: 'web-dev',
    label: 'Web & App',
    icon: Globe,
    skills: [
      { name: 'React.js', iconUrl: getDevicon('react') },
      { name: 'React Native', iconUrl: getDevicon('react') },
      { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express.js', iconUrl: getSimpleIcon('express', 'white') },
      { name: 'MongoDB', iconUrl: getDevicon('mongodb') },
      { name: 'Firebase', iconUrl: getSimpleIcon('firebase') },
      { name: 'HTML5', iconUrl: getDevicon('html5') },
      { name: 'CSS3', iconUrl: getDevicon('css3') }
    ]
  },
  {
    id: 'ai-ml',
    label: 'AI & ML',
    icon: BrainCircuit,
    skills: [
      { name: 'Scikit-Learn', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'TensorFlow', iconUrl: getDevicon('tensorflow') },
      { name: 'PyTorch', iconUrl: getDevicon('pytorch') },
      { name: 'NLP', iconUrl: 'https://api.iconify.design/lucide:brain-circuit.svg?color=%23DEDBC8' },
      { name: 'GenAI', iconUrl: 'https://api.iconify.design/lucide:sparkles.svg?color=%23DEDBC8' },
      { name: 'LLM Models', iconUrl: getSimpleIcon('huggingface') }
    ]
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Pandas', iconUrl: getDevicon('pandas') },
      { name: 'NumPy', iconUrl: getDevicon('numpy') },
      { name: 'SQL', iconUrl: getDevicon('postgresql') },
      { name: 'Power BI', iconUrl: 'https://api.iconify.design/logos:microsoft-power-bi.svg' },
      { name: 'Excel', iconUrl: 'https://api.iconify.design/vscode-icons:file-type-excel.svg' }
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', iconUrl: getDevicon('git') },
      { name: 'GitHub', iconUrl: getSimpleIcon('github', 'white') },
      { name: 'VS Code', iconUrl: getDevicon('vscode') },
      { name: 'Jupyter', iconUrl: getDevicon('jupyter') },
      { name: 'Google Colab', iconUrl: getSimpleIcon('googlecolab') },
      { name: 'FastAPI', iconUrl: getDevicon('fastapi') },
      { name: 'Postman', iconUrl: getSimpleIcon('postman') },
      { name: 'n8n', iconUrl: getSimpleIcon('n8n') }
    ]
  }
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view on mobile if needed
  const handleCategoryClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(id);
    const btn = e.currentTarget;
    if (carouselRef.current) {
      const containerLeft = carouselRef.current.getBoundingClientRect().left;
      const btnLeft = btn.getBoundingClientRect().left;
      const offset = btnLeft - containerLeft - (carouselRef.current.offsetWidth / 2) + (btn.offsetWidth / 2);
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const activeSkills = skillsData.find(c => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="bg-black text-primary py-24 md:py-32 px-4 md:px-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1] mb-6">
            <span className="text-primary">Skills &</span> <span className="text-gray-500 italic font-serif">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto font-light tracking-wide">
            A comprehensive toolkit built through real-world projects and industry experience.
          </p>
        </div>

        {/* Category Carousel (The Interactive Icons) */}
        <div className="w-full relative mb-16 md:mb-24">
          {/* Edge fades for the carousel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div 
            ref={carouselRef}
            className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-12 md:px-24 py-12 -my-12 snap-x snap-mandatory"
          >
            {skillsData.map((category) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  onClick={(e) => handleCategoryClick(category.id, e)}
                  className={`relative flex flex-col items-center justify-center shrink-0 snap-center transition-all duration-500 group
                    ${isActive ? 'scale-110 md:scale-125 z-20' : 'scale-100 opacity-60 hover:opacity-100 hover:scale-105 z-10'}
                  `}
                  style={{ width: '80px', height: '80px' }}
                >
                  {/* Glowing Box */}
                  <div 
                    className={`absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 flex items-center justify-center
                      ${isActive 
                        ? 'bg-black/80 border border-primary/50 shadow-[0_0_30px_rgba(222,219,200,0.15)]' 
                        : 'bg-[#111] border border-white/10 group-hover:border-primary/30 group-hover:bg-[#1a1a1a]'}
                    `}
                  >
                    <Icon 
                      strokeWidth={isActive ? 2 : 1.5} 
                      className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500
                        ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-primary/80'}
                      `} 
                    />
                  </div>
                  
                  {/* Label below icon */}
                  <div className={`absolute -bottom-8 text-[10px] md:text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-500
                    ${isActive ? 'text-primary opacity-100' : 'text-gray-500 opacity-0 group-hover:opacity-100'}
                  `}>
                    {category.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Area */}
        <div className="w-full max-w-5xl min-h-[400px] flex flex-col items-center justify-center relative px-4">
          
          {/* Subtle large background number/text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
            <span className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] font-bold tracking-tighter leading-none whitespace-nowrap text-primary">
              {skillsData.find(c => c.id === activeCategory)?.skills.length.toString().padStart(2, '0')}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 z-10 w-full"
            >
              {activeSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 aspect-square w-24 sm:w-28 md:w-32 bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-[1.5rem] hover:bg-white/5 hover:border-primary/30 transition-all duration-300 group cursor-default hover:shadow-[0_0_15px_rgba(222,219,200,0.1)]"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                     <img 
                       src={skill.iconUrl} 
                       alt={skill.name} 
                       className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                     />
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-center text-primary/70 group-hover:text-primary transition-colors duration-300 font-medium tracking-wide leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
