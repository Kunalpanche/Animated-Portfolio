import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { twMerge } from 'tailwind-merge';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className, showAsterisk }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(' ');

  return (
    <div ref={ref} className={twMerge('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block pb-[0.2em] -mb-[0.2em] pr-[0.5em] -mr-[0.25em] last:-mr-[0.5em]">
          <motion.span
            className="inline-block relative"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            {word}
            {showAsterisk && i === words.length - 1 && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
