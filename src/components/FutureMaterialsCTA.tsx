import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FutureMaterialsCTAProps {
  onOpenContact?: () => void;
  onOpenSampleModal?: (grade?: string) => void;
}

export const FutureMaterialsCTA: React.FC<FutureMaterialsCTAProps> = ({ onOpenContact }) => {
  const handleClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="future-materials" className="relative w-full bg-[#050D18] overflow-hidden">
      {/* Full-Fidelity Visual */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        <img
          src="/images/future-materials-cta.jpg"
          alt="The materials of tomorrow are designed today - Machino Polymers"
          className="w-full h-auto object-cover block select-none"
        />

        {/* Premium, Highly Attractive Interactive CTA Button */}
        <button
          onClick={handleClick}
          aria-label="Start a conversation"
          className="absolute left-[6.1%] top-[86.1%] w-[21.8%] min-w-[140px] h-[7.6%] min-h-[38px] rounded-lg sm:rounded-xl bg-gradient-to-r from-[#FF5500] via-[#FF6611] to-[#FF4500] text-white font-display font-bold text-[clamp(10px,1.15vw,16px)] tracking-wide shadow-[0_4px_22px_rgba(255,85,0,0.55),0_0_35px_rgba(255,85,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,85,0,0.8),0_0_55px_rgba(255,85,0,0.5)] border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#FF5500]/60"
        >
          {/* Subtle Dynamic Light Shimmer Sweep on Hover */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

          {/* Button Label & Icon */}
          <span className="relative z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] whitespace-nowrap">
            Start a conversation
          </span>
          <ArrowRight className="relative z-10 w-[clamp(12px,1.1vw,18px)] h-[clamp(12px,1.1vw,18px)] transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] shrink-0" />
        </button>
      </div>
    </section>
  );
};
