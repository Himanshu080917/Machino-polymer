import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

interface IndustryTile {
  id: string;
  name: string;
  image: string;
  alt: string;
  tagline: string;
}

const industryTiles: IndustryTile[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    image: '/images/ind_col_0_automotive.jpg',
    alt: 'Automotive lightweighting and structural components',
    tagline: 'Under-the-hood, interior aesthetics, and crash zones',
  },
  {
    id: 'electrical',
    name: 'Electrical & Electronics',
    image: '/images/ind_col_1_electrical.jpg',
    alt: 'Electrical switchgear, enclosures, and flame retardant modules',
    tagline: 'UL94 V-0 flame retardant & high CTI compounds',
  },
  {
    id: 'industrial',
    name: 'Industrial Applications',
    image: '/images/ind_col_2_industrial.jpg',
    alt: 'Industrial machinery, high-torque gears, and heavy duty components',
    tagline: 'High impact, chemical & abrasion resistant polymers',
  },
  {
    id: 'consumer',
    name: 'Consumer Goods',
    image: '/images/ind_col_3_consumer.jpg',
    alt: 'Consumer lifestyle, retail, and durable goods',
    tagline: 'Scratch-resistant & food-contact compliant resins',
  },
  {
    id: 'appliances',
    name: 'Appliances',
    image: '/images/ind_col_4_appliances.jpg',
    alt: 'Home & commercial appliances with premium aesthetic finish',
    tagline: 'High gloss, heat resistance & dimensional stability',
  },
  {
    id: 'hygiene-medical',
    name: 'Hygiene & Medical',
    image: '/images/ind_col_5_medical.jpg',
    alt: 'Medical devices, healthcare components, and hygiene solutions',
    tagline: 'USP Class VI & biocompatible polymer compounds',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    image: '/images/ind_col_6_packaging.jpg',
    alt: 'Circular and lightweight sustainable packaging solutions',
    tagline: 'High barrier, thin-wall injection & GRS-certified PCR',
  },
];

export const IndustriesStrip: React.FC<{ onSelectIndustry?: (name: string) => void }> = ({
  onSelectIndustry,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string, name: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
    if (onSelectIndustry) {
      onSelectIndustry(name);
    }
  };

  return (
    <section id="industries" className="w-full bg-white text-[#0F172A] pt-16 sm:pt-20 pb-0 overflow-hidden">
      
      {/* Header matching Figma */}
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="space-y-2">
          {/* Eyebrow */}
          <div className="text-[#0F172A] font-sans font-semibold text-sm sm:text-base tracking-wide">
            Industries We Empower
          </div>

          {/* Large Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-black text-[#0F172A] leading-tight tracking-tight">
            Where Sustainable Materials Meet Real <span className="text-[#FF7A00] font-normal">Applications</span>
          </h2>

          {/* Thick Orange Bar below 'Where' */}
          <div className="w-12 h-1.5 bg-[#FF5500] rounded-xs pt-0.5 mt-3" />
        </div>
      </div>

      {/* 7 Interactive Columns: Click to Expand & Reveal Clear Image */}
      <div className="w-full flex flex-col sm:flex-row h-[460px] sm:h-[540px] lg:h-[620px] border-t border-slate-200 overflow-hidden">
        {industryTiles.map((tile) => {
          const isActive = activeId === tile.id;
          const isAnyActive = activeId !== null;

          return (
            <div
              key={tile.id}
              onClick={() => handleToggle(tile.id, tile.name)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                isActive
                  ? 'flex-[2.5] sm:flex-[2.8]'
                  : isAnyActive
                  ? 'flex-[0.8] opacity-85'
                  : 'flex-1 hover:flex-[1.25]'
              }`}
            >
              {/* High-Resolution Clean Image */}
              <img
                src={tile.image}
                alt={tile.alt}
                className={`w-full h-full object-cover object-center transition-all duration-700 ${
                  isActive
                    ? 'scale-105 brightness-110 contrast-105'
                    : 'scale-100 group-hover:scale-105 group-hover:brightness-105'
                }`}
              />

              {/* Dynamic Gradient Overlay: Becomes crystal clear when active/clicked */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? 'bg-gradient-to-t from-black/80 via-transparent to-black/10'
                    : 'bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:opacity-75'
                }`}
              />

              {/* Top-Right: Interactive Plus / Active Indicator */}
              <div className="absolute top-5 right-4 sm:right-5 z-20">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#FF5500] text-white rotate-45 shadow-lg shadow-[#FF5500]/40 scale-110'
                      : 'bg-black/30 backdrop-blur-xs text-white/90 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card / Title Area */}
              <div className="absolute bottom-6 left-4 right-4 sm:left-5 sm:right-5 z-20">
                {/* Tagline revealed when active/expanded */}
                {isActive && (
                  <div className="animate-fade-in mb-3 space-y-1">
                    <span className="inline-block text-[10px] font-mono-tech uppercase tracking-widest text-[#FF7A00] font-bold bg-black/70 px-2 py-0.5 rounded">
                      Featured Solution
                    </span>
                    <p className="text-white/90 text-xs sm:text-sm font-medium drop-shadow-md">
                      {tile.tagline}
                    </p>
                  </div>
                )}

                {/* Explore Grades Pill */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-tech font-bold uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/30 translate-y-0'
                      : 'bg-black/60 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
                  }`}
                >
                  <span>Explore Grades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Vertical Column Divider Line */}
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/20 pointer-events-none" />
            </div>
          );
        })}
      </div>

    </section>
  );
};
