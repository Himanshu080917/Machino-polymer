import React from 'react';

export const GreenEarthSection: React.FC<{ onOpenSampleModal?: (grade?: string) => void }> = ({
  onOpenSampleModal,
}) => {
  return (
    <section id="sustainability" className="relative w-full bg-[#0E1F17] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[auto] lg:min-h-[700px]">
        
        {/* Mobile: Image on Top (~240px tall), Desktop: Right Column */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative h-[240px] sm:h-[340px] lg:h-full min-h-[240px] lg:min-h-[700px] overflow-hidden bg-[#0E1F17]">
          <img
            src="/images/green-earth-graphic.jpg"
            alt="Machino Polymers Green Earth Circularity & GRS Certified Solutions"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mobile: Text Below, Desktop: Left Column */}
        <div className="order-2 lg:order-1 lg:col-span-5 bg-[#0E1F17] p-5 sm:p-10 lg:p-16 flex flex-col justify-center space-y-5 sm:space-y-8 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-emerald-400 font-mono-tech text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold">
            <span className="w-4 sm:w-5 h-[1.5px] bg-emerald-400 shrink-0" />
            <span>GREEN EARTH SUSTAINABILITY SOLUTIONS</span>
          </div>

          {/* 4-Line Display Headline */}
          <h2 className="text-[clamp(28px,5vw,60px)] font-display leading-[1.08] tracking-tight">
            <div className="font-extrabold text-white">Circular</div>
            <div className="font-extrabold text-white">Engineering.</div>
            <div className="font-light text-[#64748B] mt-1">Engineered</div>
            <div className="font-light text-[#64748B]">to Return.</div>
          </h2>

          {/* Description */}
          <p className="text-[#94A3B8] text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-md">
            Green Earth is Machino&apos;s proprietary circular manufacturing programme — integrating post-consumer and post-industrial recycled streams into premium-grade polymer compounds without performance compromise.
          </p>

          {/* Discover Green Earth Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenSampleModal?.('EcoTuf® GRS-Certified Circular Resin')}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 min-h-[44px] rounded-md border border-white/20 bg-transparent hover:bg-white/10 hover:border-white/40 text-white font-medium text-sm transition-all group cursor-pointer w-full sm:w-auto"
            >
              <span>Discover Green Earth</span>
              <span className="font-serif text-lg group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
