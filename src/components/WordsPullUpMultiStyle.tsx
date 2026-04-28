import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Flatten segments into an array of words, keeping track of their class names
  const wordsWithClasses: { word: string; className?: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(' ');
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordsWithClasses.push({ word, className: segment.className });
      }
    });
  });

  return (
    <div ref={ref} className={clsx('inline-flex flex-wrap justify-center', className)}>
      {wordsWithClasses.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
          <motion.span
            className={clsx('inline-block', item.className)}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
