import { Hero } from './components/Hero';
import { About } from './components/About';
import { Awards } from './components/Awards';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-primary overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
      <Footer />
    </main>
  );
}

export default App;
