import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter 
          key={i} 
          char={char} 
          index={i} 
          totalChars={totalChars} 
          progress={scrollYProgress} 
        />
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

function AnimatedLetter({ char, index, totalChars, progress }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}
