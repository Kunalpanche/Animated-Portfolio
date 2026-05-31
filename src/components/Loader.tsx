import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const criticalAssets = {
  video: 'https://cdn.jsdelivr.net/gh/Kunalpanche/Animated-Portfolio@main/src/assets/bgg.mp4',
  images: [
    'https://cdn.jsdelivr.net/gh/Kunalpanche/Animated-Portfolio@main/src/assets/project/Ayursetu.png',
    'https://cdn.jsdelivr.net/gh/Kunalpanche/Animated-Portfolio@main/src/assets/project/cih.png'
  ]
};

const words = ["INNOVATING", "DESIGNING", "CODING", "CREATING", "DEVELOPING"];

const getLoadingLog = (pct: number) => {
  if (pct < 15) return "Initializing portfolio kernel...";
  if (pct < 30) return "Assembling AyurSetu AI & AR 3D assets...";
  if (pct < 45) return "Deploying Vajra grid tamper-proof protocols...";
  if (pct < 60) return "Tuning IndicVoice-Guard CNN deepfake detectors...";
  if (pct < 75) return "Calibrating YOLO pothole telemetry feeds...";
  if (pct < 90) return "Synchronizing Central India Hackathon rubrics...";
  if (pct < 100) return "Initializing hackathon winner database...";
  return "Portfolios nominal. System ready.";
};

interface LoaderProps {
  onLoaded: () => void;
}

export function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  
  const progressRef = useRef(0);
  const startTimeRef = useRef(Date.now());
  const timeoutRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const MIN_LOAD_TIME = 3800; // 3.8 seconds minimum load time

  // Derive the active word index directly from progress (0-100 mapped to 5 words)
  const wordIndex = Math.min(Math.floor((progress / 100) * words.length), words.length - 1);

  // Disable scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Canvas particle system (interactive physics overlay)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
      decay: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const spawnParticles = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2.8,
          vy: (Math.random() - 0.5) * 2.8,
          alpha: 1,
          size: Math.random() * 2 + 1.2,
          decay: Math.random() * 0.012 + 0.008
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY, 3);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticles(touch.clientX, touch.clientY, 3);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY, 15); // burst on click
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        spawnParticles(touch.clientX, touch.clientY, 15); // burst on touch/tap
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('touchstart', handleTouchStart);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.alpha -= p.decay;

        ctx.fillStyle = `rgba(225, 224, 204, ${p.alpha})`; // Gold / Champagne theme color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      particles = particles.filter(p => p.alpha > 0);

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Asset preloading
  useEffect(() => {
    let videoLoaded = false;
    let imagesLoadedCount = 0;
    const totalImages = criticalAssets.images.length;

    const checkReady = () => {
      if (videoLoaded && imagesLoadedCount === totalImages) {
        setAssetsReady(true);
      }
    };

    // Preload Video
    const video = document.createElement('video');
    video.src = criticalAssets.video;
    video.preload = 'auto';
    
    const handleVideoLoad = () => {
      videoLoaded = true;
      checkReady();
    };

    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('canplaythrough', handleVideoLoad);
    video.load(); // Force loading

    // Preload Images
    const imgElements: HTMLImageElement[] = [];
    criticalAssets.images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoadedCount++;
        checkReady();
      };
      img.onerror = () => {
        imagesLoadedCount++; // count failed images as resolved to avoid lockouts
        checkReady();
      };
      imgElements.push(img);
    });

    // Safety timeout (max 6 seconds to prevent lockouts on very slow connections)
    const safetyTimeout = setTimeout(() => {
      setAssetsReady(true);
    }, 6000);

    return () => {
      clearTimeout(safetyTimeout);
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplaythrough', handleVideoLoad);
    };
  }, []);

  // Smooth, monotonic loader timeline linked to time elapsed and asset readiness
  useEffect(() => {
    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const timePercent = Math.min((elapsed / MIN_LOAD_TIME) * 100, 100);

      const current = progressRef.current;
      let next = current;

      if (!assetsReady) {
        const target = Math.min(timePercent, 85);
        if (current < target) {
          next = current + (target - current) * 0.1 + 0.25;
        }
      } else {
        const target = timePercent;
        if (current < target) {
          next = current + (target - current) * 0.15 + 0.35;
        } else if (elapsed >= MIN_LOAD_TIME) {
          next = 100;
        }
      }

      next = Math.max(next, current); // enforce monotonic growth
      const rounded = Math.min(Math.round(next), 100);
      progressRef.current = next;
      setProgress(rounded);

      if (rounded < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Slight delay for loader slideout transition
        timeoutRef.current = setTimeout(() => {
          onLoaded();
        }, 400) as unknown as number;
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [assetsReady, onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -45 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#030303] text-primary flex flex-col justify-between p-8 sm:p-12 md:p-16 select-none overflow-hidden"
    >
      {/* Interactive Physics Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      
      {/* Background Aesthetics */}
      <div className="absolute inset-0 noise-overlay opacity-[0.25] mix-blend-overlay pointer-events-none z-0" />
      
      {/* Top Section */}
      <div className="flex justify-between items-center w-full z-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/50">
            Kunal Panche — Portfolio
          </span>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary/30">
          Init_v2.0
        </span>
      </div>

      {/* Center Section: Animated Word Cycling & Loading Logs */}
      <div className="flex flex-col items-center justify-center flex-grow z-10">
        <div className="h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={wordIndex}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -35, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] text-center font-sans text-primary/80"
            >
              {words[wordIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
        
        {/* Sleek Progress Bar */}
        <div className="w-48 sm:w-64 h-[1px] bg-primary/10 mt-6 relative overflow-hidden rounded-full">
          <motion.div
            style={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-primary"
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>

        {/* Dynamic Project Load Log */}
        <div className="h-6 mt-6 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] text-primary/50 text-center max-w-sm sm:max-w-md">
          {getLoadingLog(progress)}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full z-10">
        <div className="max-w-xs">
          <p className="font-serif italic text-primary/30 text-xs sm:text-sm leading-relaxed mb-1">
            Interact: Hover or tap to emit spark energy
          </p>
          <p className="font-serif italic text-primary/40 text-xs sm:text-sm leading-relaxed">
            Preloading digital experiences & system resources...
          </p>
        </div>
        <div className="flex items-baseline">
          <span className="text-[12vw] sm:text-[9vw] md:text-[8vw] font-serif italic text-[#E1E0CC]/90 leading-none">
            {String(progress).padStart(3, '0')}
          </span>
          <span className="text-xl sm:text-2xl font-serif italic text-primary/40 ml-1">%</span>
        </div>
      </div>
    </motion.div>
  );
}
