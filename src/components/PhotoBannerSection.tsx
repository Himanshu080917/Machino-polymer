import React from 'react';

export const PhotoBannerSection: React.FC = () => {
  return (
    <section className="stacked-panel-banner relative w-full h-[50svh] min-h-[260px] max-h-[440px] sm:h-[340px] lg:h-[400px] overflow-hidden bg-[#070B14] flex items-center justify-center">
      <img
        src="/images/plant-production-floor.jpg"
        alt="Machino Polymers ISO 9001 and IATF 16949 Compliant Production Floor"
        className="w-full h-full object-cover object-center brightness-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute bottom-5 sm:bottom-6 left-4 sm:left-10 lg:left-16 z-10 max-w-[calc(100vw-32px)]">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xs text-white/90 font-mono-tech text-[10px] sm:text-xs tracking-wider uppercase border border-white/20 shadow-lg text-left leading-snug">
          ISO 9001 · IATF 16949 COMPLIANT PRODUCTION FLOOR
        </span>
      </div>
    </section>
  );
};
