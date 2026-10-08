import React from 'react';

export const PhotoBannerSection: React.FC = () => {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden bg-[#0B1120] flex items-center justify-center">
      
      {/* Full-width dark image background */}
      <img
        src="/images/plant-production-floor.jpg"
        alt="Machino Polymers ISO 9001 and IATF 16949 Compliant Production Floor"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 contrast-125"
      />

      {/* Dimmed / Darkened Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/80" />

      {/* Centered Large Faded / Low-Opacity Display Word Scroll-Reveal */}
      <div className="relative z-10 text-center px-4 select-none">
        <span className="font-serif italic text-white/20 text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-light tracking-wide block transform hover:scale-105 transition-transform duration-1000 ease-out">
          Magnificent
        </span>
      </div>

      {/* Small Caption Bottom-Center in Orange Uppercase */}
      <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
        <span className="font-mono-tech text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#F5821F] bg-black/60 backdrop-blur-xs px-4 py-2 rounded-sm border border-[#F5821F]/30 shadow-sm">
          ISO 9001 · IATF 16949 COMPLIANT PRODUCTION FLOOR
        </span>
      </div>

    </section>
  );
};
