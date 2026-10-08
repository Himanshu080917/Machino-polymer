import React from 'react';

export const GreenEarthSection: React.FC<{ onOpenSampleModal?: (grade?: string) => void }> = ({
  onOpenSampleModal,
}) => {
  return (
    <section id="sustainability" className="relative w-full bg-[#0E1F17] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[700px]">
        
        {/* Left Column: Dark Pine Typography & Content Panel */}
        <div className="lg:col-span-5 bg-[#0E1F17] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-7 sm:space-y-8 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-emerald-400 font-mono-tech text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
            <span className="w-5 h-[1.5px] bg-emerald-400 shrink-0" />
            <span>GREEN EARTH SUSTAINABILITY SOLUTIONS</span>
          </div>

          {/* 4-Line Display Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-display leading-[1.08] tracking-tight">
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
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-white/20 bg-transparent hover:bg-white/10 hover:border-white/40 text-white font-medium text-sm transition-all group cursor-pointer"
            >
              <span>Discover Green Earth</span>
              <span className="font-serif text-lg group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Full-bleed Forest Canopy & GRS Cards Artwork from Figma */}
        <div className="lg:col-span-7 relative min-h-[440px] lg:min-h-[700px] overflow-hidden bg-[#0E1F17]">
          <img
            src="/images/green-earth-graphic.jpg"
            alt="Machino Polymers Green Earth Circularity & GRS Certified Solutions"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};
