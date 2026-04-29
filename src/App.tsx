import { Hero } from './components/Hero';
import { About } from './components/About';
import { Awards } from './components/Awards';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
// import { ShowcaseText } from './components/ShowcaseText';

import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-primary">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
      {/* <ShowcaseText /> */}
      <Footer />
    </main>
  );
}

export default App;
