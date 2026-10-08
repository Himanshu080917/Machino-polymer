import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface IndustryTile {
  id: string;
  name: string;
  image: string;
  alt: string;
}

const industryTiles: IndustryTile[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    image: '/images/industry-automotive.jpg',
    alt: 'Automotive manufacturing and components',
  },
  {
    id: 'electrical',
    name: 'Electrical & Electronics',
    image: '/images/industry-electrical.jpg',
    alt: 'Electrical switchgear and electronics',
  },
  {
    id: 'industrial',
    name: 'Industrial Applications',
    image: '/images/industry-industrial.jpg',
    alt: 'Industrial laser cutting and sparks',
  },
  {
    id: 'consumer',
    name: 'Consumer Goods',
    image: '/images/industry-consumer.jpg',
    alt: 'Consumer lifestyle products and shopping cart',
  },
  {
    id: 'appliances',
    name: 'Appliances',
    image: '/images/industry-appliances.jpg',
    alt: 'Home appliances and white air fryer',
  },
  {
    id: 'hygiene-medical',
    name: 'Hygiene & Medical',
    image: '/images/industry-medical.jpg',
    alt: 'Medical devices, tweezers and mask on teal',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    image: '/images/industry-packaging.jpg',
    alt: 'Sustainable plastic packaging bottle',
  },
];

export const IndustriesStrip: React.FC<{ onSelectIndustry?: (name: string) => void }> = ({
  onSelectIndustry,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="industries" className="w-full bg-white text-[#0F172A] pt-20 pb-0 overflow-hidden border-b border-[#E2E8F0]">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-12">
        <div className="space-y-3">
          
          {/* Eyebrow with orange horizontal bar beneath */}
          <div className="inline-block">
            <span className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              Industries We Empower
            </span>
            <div className="w-12 h-1 bg-[#FF5500] mt-1.5" />
          </div>

          {/* Large Bold Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0F172A] leading-tight tracking-tight">
            Where Sustainable Materials Meet Real <span className="text-[#FF5500]">Applications</span>
          </h2>
        </div>
      </div>

      {/* Full-width, edge-to-edge 7 equal-width horizontal columns with vivid background images */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0 border-t border-[#E2E8F0]">
        {industryTiles.map((tile) => {
          const isHovered = hoveredId === tile.id;
          return (
            <div
              key={tile.id}
              onMouseEnter={() => setHoveredId(tile.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectIndustry?.(tile.name)}
              className="relative h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden cursor-pointer group bg-slate-100"
            >
              {/* High-quality background image matching Figma */}
              <img
                src={tile.image}
                alt={tile.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                  isHovered ? 'scale-108' : 'scale-100'
                }`}
              />

              {/* Subtle top & bottom gradient for text contrast while preserving image brightness */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/35 group-hover:from-black/35 group-hover:to-black/50 transition-all duration-300" />

              {/* Top-Right: "+" Icon */}
              <div className="absolute top-5 right-5 z-10">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#FF5500] text-white rotate-45 scale-110 shadow-md'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <Plus className="w-5 h-5 drop-shadow" />
                </div>
              </div>

              {/* Upper-Left: Bold Title */}
              <div className="absolute top-6 left-5 right-8 z-10">
                <h3 className="font-display font-extrabold text-white text-lg sm:text-xl lg:text-[22px] leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {tile.name}
                </h3>
              </div>

              {/* Bottom interactive action reveal on hover */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span
                  className={`text-xs font-mono-tech text-white font-bold uppercase tracking-wider block bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-sm border border-white/20 transition-all duration-300 ${
                    isHovered
                      ? 'opacity-100 translate-y-0 shadow-lg'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  Explore Grades →
                </span>
              </div>

              {/* Right border divider between columns */}
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/20 pointer-events-none" />
            </div>
          );
        })}
      </div>

    </section>
  );
};
