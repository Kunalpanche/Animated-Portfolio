
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { ScrollRevealText } from './ScrollRevealText';

export function About() {
  const headingSegments = [
    { text: "I am Kunal Panche, ", className: "font-normal" },
    { text: "a software developer. ", className: "italic font-serif" },
    { text: "I build data-driven solutions and full-stack applications.", className: "font-normal" },
  ];

  return (
    <section id="about" className="bg-black py-20 px-4 md:px-8">
      <div className="bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-[2rem] max-w-6xl mx-auto py-24 px-6 md:px-12 flex flex-col items-center text-center shadow-lg">
        {/* Main Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-primary mb-16">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll Reveal Paragraph */}
        <div className="max-w-xl mx-auto text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed">
          <ScrollRevealText 
            text="Driven by real-world problem solving, I have mentored at SIH 2025 and acted as a Hackathon Judge at IIIT Nagpur. Having won 10 national hackathons, I thrive in fast-paced environments where code meets creativity." 
          />
        </div>
      </div>
    </section>
  );
}
