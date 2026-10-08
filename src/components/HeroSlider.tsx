import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  id: string;
  stageName: string;
  topWord: string;
  image: string;
  imagePosition?: string;
  mobilePosition?: string;
  eyebrow: string;
  headlinePart1: string;
  headlinePart2: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    id: 'material',
    stageName: 'MATERIAL',
    topWord: 'MATERIAL',
    image: '/images/hero-material.jpg',
    imagePosition: 'center center',
    mobilePosition: '80% center',
    eyebrow: 'PRIME & CIRCULAR RESIN FOUNDATION',
    headlinePart1: 'Engineered from the Base.',
    headlinePart2: 'Uncompromising Quality.',
    subtext: 'High-purity polyolefins, engineered elastomers, and certified recycled feedstocks.',
  },
  {
    id: 'molecule',
    stageName: 'MOLECULE',
    topWord: 'MOLECULE',
    image: '/images/hero-molecule.jpg',
    imagePosition: 'center center',
    mobilePosition: '80% center',
    eyebrow: 'REACTIVE COMPATIBILIZATION & NANO-FILLERS',
    headlinePart1: 'Precision at the',
    headlinePart2: 'Molecular Scale.',
    subtext: 'Custom macromolecular tailoring for superior impact, flow, and thermal resistance.',
  },
  {
    id: 'engineering',
    stageName: 'ENGINEERING',
    topWord: 'ENGINEERING',
    image: '/images/hero-engineering.jpg',
    imagePosition: 'center center',
    mobilePosition: '84% center',
    eyebrow: 'ADVANCED MATERIALS & CIRCULAR ENGINEERING',
    headlinePart1: 'Engineering Better Materials.',
    headlinePart2: 'Enabling Better Futures.',
    subtext: 'Twin-screw high-torque compounding with gravimetric precision and real-time QA.',
  },
  {
    id: 'application',
    stageName: 'APPLICATION',
    topWord: 'APPLICATION',
    image: '/images/hero-application.jpg',
    imagePosition: 'center center',
    mobilePosition: '78% center',
    eyebrow: 'CRITICAL COMPONENT PERFORMANCE',
    headlinePart1: 'Designed for the Toughest',
    headlinePart2: 'Operating Conditions.',
    subtext: 'Meeting stringent OEM requirements for crash zones, interior aesthetics, and UV endurance.',
  },
  {
    id: 'industry',
    stageName: 'INDUSTRY',
    topWord: 'INDUSTRY',
    image: '/images/hero-industry.jpg',
    imagePosition: 'center center',
    mobilePosition: '80% center',
    eyebrow: 'EMPOWERING GLOBAL OEMS & TIER-1S',
    headlinePart1: 'Accelerating Industry',
    headlinePart2: 'Transformation.',
    subtext: 'Trusted partner for automotive, electronics, appliances, and industrial leaders worldwide.',
  },
  {
    id: 'circular-future',
    stageName: 'CIRCULAR FUTURE',
    topWord: 'CIRCULAR FUTURE',
    image: '/images/hero-circular-future.jpg',
    imagePosition: 'center center',
    mobilePosition: '90% center',
    eyebrow: 'CLOSED-LOOP CIRCULAR RECOVERY',
    headlinePart1: 'Closing the Loop for a',
    headlinePart2: 'Sustainable Tomorrow.',
    subtext: 'GRS-certified circular compounds delivering up to -68% carbon footprint reduction.',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-slide from right to left every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[calc(100vh-65px)] min-h-[560px] sm:min-h-[640px] max-h-[940px] flex flex-col justify-between overflow-hidden bg-[#0A0E17]"
    >
      {/* Horizontal Sliding Carousel Track (Slides smoothly from right to left) */}
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(currentIdx * 100) / slides.length}%)`,
        }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="relative h-full shrink-0 overflow-hidden"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={s.image}
              alt={s.topWord}
              className="w-full h-full object-cover object-[var(--pos-mobile)] md:object-[var(--pos-desktop)]"
              style={
                {
                  '--pos-mobile': s.mobilePosition || '80% center',
                  '--pos-desktop': s.imagePosition || 'center center',
                } as React.CSSProperties
              }
            />
            {/* Multi-stop cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Top spacer for clean layout */}
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 pt-4 sm:pt-10 pointer-events-none" />

      {/* Navigation Arrows for Manual Sliding */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FF5500] text-white/80 hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 hidden sm:flex cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 -translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FF5500] text-white/80 hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 hidden sm:flex cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 translate-x-0.5" />
      </button>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 pb-6 sm:pb-12 flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6">
        
        {/* Left: Interactive 6-Stage Lifecycle Selector */}
        <div className="w-full md:w-auto bg-black/60 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/10 shadow-2xl overflow-x-auto max-w-full">
          <div className="text-[10px] font-mono-tech uppercase tracking-widest text-[#FF5500] font-bold px-2 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>MATERIALS LIFECYCLE</span>
          </div>
          <div className="flex flex-nowrap sm:flex-wrap md:flex-nowrap items-center gap-1 sm:gap-1.5 min-w-max sm:min-w-0">
            {slides.map((s, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentIdx(idx);
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#FF5500] text-white font-bold shadow-lg shadow-[#FF5500]/30 scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{s.stageName}</span>
                  {idx < slides.length - 1 && (
                    <ChevronRight className={`w-3 h-3 ${isActive ? 'text-white' : 'text-white/30'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Smooth Vertical Scrolling Headline Track */}
        <div className="w-full md:w-auto max-w-xl ml-0 md:ml-auto overflow-hidden h-[155px] sm:h-[185px] md:h-[205px]">
          <div
            className="flex flex-col h-full transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              transform: `translateY(-${currentIdx * 100}%)`,
            }}
          >
            {slides.map((s) => (
              <div
                key={s.id}
                className="h-full shrink-0 flex flex-col justify-end text-left md:text-right space-y-1 sm:space-y-2 pb-0.5"
              >
                {/* Eyebrow: Bright Orange uppercase letter-spaced text */}
                <div className="text-[#FF5500] font-mono-tech tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase drop-shadow-sm">
                  {s.eyebrow}
                </div>

                {/* Large Two-line Headline: Crisp White Bold + Thin Italic Serif */}
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[44px] font-display text-white leading-[1.15] tracking-tight drop-shadow-md">
                  <div>
                    <span className="font-extrabold text-white">{s.headlinePart1} </span>
                  </div>
                  <div className="mt-0.5">
                    <span className="font-light italic font-serif text-white/95">{s.headlinePart2}</span>
                  </div>
                </h2>

                <p className="text-white/75 text-xs sm:text-sm max-w-md ml-0 md:ml-auto leading-relaxed">
                  {s.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
