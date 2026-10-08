import React from 'react';

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
    <section id="future-materials" className="relative z-20 w-full bg-[#050D18] overflow-hidden">
      {/* Full-Fidelity Visual with 100% visible small pieces, molecular rings, and pellets on the left */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        <img
          src="/images/future-materials-cta.jpg"
          alt="The materials of tomorrow are designed today - Machino Polymers"
          className="w-full h-auto object-cover block select-none"
        />

        {/* Interactive Clickable Hotspot over 'Start a conversation' Button */}
        <button
          onClick={handleClick}
          aria-label="Start a conversation"
          className="absolute left-[6.4%] top-[86.5%] w-[21.2%] h-[6.9%] min-h-[36px] rounded-md opacity-0 hover:opacity-20 bg-white transition-opacity cursor-pointer focus:outline-none focus:opacity-25"
        />
      </div>
    </section>
  );
};
