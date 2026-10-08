import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FutureMaterialsCTAProps {
  onOpenContact?: () => void;
  onOpenSampleModal?: (grade?: string) => void;
}

export const FutureMaterialsCTA: React.FC<FutureMaterialsCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="future-materials" className="relative z-20 w-full min-h-[580px] lg:min-h-[640px] flex items-center bg-[#070D18] overflow-hidden">
      
      {/* High-Clarity Background Image of Hand Holding Polymer Pellets on the Right */}
      <img
        src="/images/future-materials-cta.jpg"
        alt="Hand holding translucent polymer pellets"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] brightness-110 contrast-105"
      />

      {/* Localized Left Gradient: Only shields text on the left, keeping the right side (hand & pellets) bright and 100% visible */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#070D18] via-[#070D18]/95 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/60 via-transparent to-transparent z-0" />

      {/* Left-Aligned Content Container matching Figma */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full py-20 lg:py-28">
        <div className="max-w-xl space-y-7 text-left">
          
          {/* Eyebrow with Orange Line */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-0.5 bg-[#FF5500]" />
            <span className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              THE FUTURE OF MATERIALS
            </span>
          </div>

          {/* 3-Line Headline: Bold + Light + Bold */}
          <h2 className="text-4xl sm:text-5xl lg:text-[66px] font-display text-white tracking-tight leading-[1.06]">
            <span className="font-extrabold block">The materials of</span>
            <span className="font-light text-white/70 block">tomorrow are</span>
            <span className="font-extrabold block">designed today.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Partner with Machino to engineer materials that outperform, outlast and return to the cycle. Talk to our engineering and application development team.
          </p>

          {/* Single Solid Orange CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 hover:translate-x-0.5 cursor-pointer group"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
