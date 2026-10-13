import React, { useEffect, useRef } from 'react';

export const PhotoBannerSection: React.FC = () => {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!bannerRef.current) return;
      if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        bannerRef.current.style.transform = '';
        bannerRef.current.style.filter = '';
        return;
      }

      const bannerEl = bannerRef.current;
      const stackContainer = bannerEl.parentElement;
      const miracEl = stackContainer?.querySelector('.stacked-panel-mirac') as HTMLElement | null;

      if (!miracEl) return;

      const bannerRect = bannerEl.getBoundingClientRect();
      const miracRect = miracEl.getBoundingClientRect();

      // Overlap begins when the top of MIRAC enters the bottom of the banner
      const overlapDistance = bannerRect.bottom - miracRect.top;
      const totalRange = bannerRect.height;

      if (overlapDistance <= 0) {
        bannerEl.style.transform = 'scale(1)';
        bannerEl.style.filter = 'brightness(1)';
      } else {
        const progress = Math.min(Math.max(overlapDistance / totalRange, 0), 1);
        const scale = 1 - progress * 0.05; // 1 -> 0.95
        const brightness = 1 - progress * 0.4; // 1 -> 0.6
        bannerEl.style.transform = `scale(${scale})`;
        bannerEl.style.filter = `brightness(${brightness})`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className="stacked-panel-banner relative w-full h-[50svh] min-h-[260px] max-h-[440px] sm:h-[340px] lg:h-[calc(100svh-var(--nav-h))] lg:min-h-[520px] lg:max-h-none overflow-hidden bg-[#070B14] flex items-center justify-center transition-[transform,filter] duration-75 ease-out"
    >
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
