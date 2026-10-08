import React from 'react';
import { Zap, Lightbulb, Award, Calendar } from 'lucide-react';

export const GreenEarthSection: React.FC<{ onOpenSampleModal?: (grade?: string) => void }> = ({
  onOpenSampleModal,
}) => {
  const cards = [
    {
      icon: Zap,
      title1: 'Sustainably',
      title2: 'Committed',
    },
    {
      icon: Lightbulb,
      title1: 'Innovation',
      title2: 'Driven',
    },
    {
      icon: Award,
      title1: 'Quality',
      title2: 'Focussed',
    },
    {
      icon: Calendar,
      title1: 'Tomorrow',
      title2: 'Ready',
    },
  ];

  return (
    <section id="sustainability" className="relative w-full bg-[#0B1B14] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Column: Dark Pine Narrative Panel */}
        <div className="lg:col-span-5 bg-[#0B1B14] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-emerald-400 font-mono-tech text-xs tracking-[0.2em] uppercase font-semibold">
            <span className="w-5 h-[1.5px] bg-emerald-400" />
            <span>GREEN EARTH SUSTAINABILITY SOLUTIONS</span>
          </div>

          {/* 4-Line Display Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-display leading-[1.08] tracking-tight">
            <div className="font-extrabold text-white">Circular</div>
            <div className="font-extrabold text-white">Engineering.</div>
            <div className="font-light text-[#64748B] mt-1">Engineered</div>
            <div className="font-light text-[#64748B]">to Return.</div>
          </h2>

          {/* Description */}
          <p className="text-[#94A3B8] text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-lg">
            Green Earth is Machino&apos;s proprietary circular manufacturing programme — integrating post-consumer and post-industrial recycled streams into premium-grade polymer compounds without performance compromise.
          </p>

          {/* Discover Green Earth Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenSampleModal?.('EcoTuf® GRS-Certified Circular Resin')}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-white/20 bg-white/5 hover:bg-emerald-600/30 hover:border-emerald-400/50 text-white font-medium text-sm transition-all group cursor-pointer"
            >
              <span>Discover Green Earth</span>
              <span className="font-serif text-lg group-hover:translate-x-1.5 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Full-bleed Forest Photo with GRS Badge & 4 Glassmorphic Cards */}
        <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Background Aerial Forest Image */}
          <img
            src="/images/circular-forest.jpg"
            alt="Lush green forest canopy representing sustainable polymers"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Multi-stop cinematic dark green & black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B14] via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-[#0B1B14]/20 to-black/40" />

          {/* Top Banner: GRS Certification Badge */}
          <div className="relative z-10 w-full max-w-xl mx-auto rounded-2xl bg-[#1C4B27]/90 backdrop-blur-md border border-emerald-500/40 p-5 sm:p-6 text-center shadow-2xl space-y-1">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-emerald-300 font-bold">
              TRUSTED &amp; CERTIFIED
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-display font-extrabold text-white tracking-tight">
              Global Recycled Standard (GRS) Certified
            </h3>
            <div className="text-xs sm:text-sm font-medium text-emerald-200/90">
              Certified in November 2025
            </div>
          </div>

          {/* Bottom Grid: 4 Glassmorphism Feature Cards */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-10">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-black/50 backdrop-blur-md border border-white/15 rounded-xl p-4 flex flex-col justify-between h-32 hover:border-emerald-400/50 hover:bg-black/65 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm sm:text-[15px] font-bold text-white leading-tight">
                    <div>{c.title1}</div>
                    <div>{c.title2}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
