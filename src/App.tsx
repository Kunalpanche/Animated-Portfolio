import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

// Helper component to handle smooth scrolling to hash elements or resetting to top on page transition
function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Wait slightly for DOM to render if navigating from another page
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects limit={3} />
      <Skills />
      <Awards />
    </>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-primary">
      {/* Premium Minimal Header */}
      <header className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 pb-10 md:pt-12 md:pb-14 flex justify-between items-center gap-4">
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-serif italic text-primary/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
        >
          Kunal Panche
        </Link>
        <Link
          to="/"
          className="group flex items-center gap-1.5 sm:gap-2 border border-white/10 hover:border-primary/50 text-[#E1E0CC] rounded-full py-2 px-4 sm:py-2.5 sm:px-6 text-xs sm:text-sm font-medium hover:text-primary transition-all duration-300 whitespace-nowrap"
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span>Back to Home</span>
        </Link>
      </header>
      
      {/* Render all projects (no limit) */}
      <Projects />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <main className="min-h-screen bg-black text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
