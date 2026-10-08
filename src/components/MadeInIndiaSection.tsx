import React from 'react';
import { ArrowRight, Atom, ShieldCheck, Recycle, Sparkles } from 'lucide-react';

export const MadeInIndiaSection: React.FC<{ onExploreStory?: () => void }> = ({ onExploreStory }) => {
  const cards = [
    {
      icon: Atom,
      title: 'Science-First Formulations',
      desc: 'Proprietary compounding chemistry tailored to exact mechanical, thermal, and regulatory specs.',
    },
    {
      icon: ShieldCheck,
      title: 'IATF 16949 & ISO Certified',
      desc: 'Automotive-grade quality governance and lot-to-lot traceability across all manufacturing hubs.',
    },
    {
      icon: Recycle,
      title: 'Zero-Compromise Circularity',
      desc: 'Certified post-consumer & post-industrial recycled resins engineered for prime performance parity.',
    },
    {
      icon: Sparkles,
      title: 'Dedicated Application Labs',
      desc: 'Rapid prototyping, CAE simulation, and accelerated environmental aging at the MIRAC innovation center.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAF9] text-[#0F172A] relative overflow-hidden border-b border-[#E2E8F0]">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              THE PLUS FACTOR
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Made in India, <br />
              <span className="text-[#FF5500]">Respected worldwide!</span>
            </h2>

            <p className="text-[#475569] text-base leading-relaxed">
              For over three decades, Machino Polymers has engineered high-performance compounded polymers for the world’s most demanding automotive, electrical, and industrial manufacturers. Every formulation is crafted with precision, verified by science, and delivered with unyielding reliability.
            </p>

            <div>
              <a
                href="#mirac"
                onClick={(e) => {
                  if (onExploreStory) {
                    e.preventDefault();
                    onExploreStory();
                  }
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5500] hover:text-[#0F172A] transition-colors group"
              >
                <span>Our story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Bento Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#FF5500]/50 hover:shadow-lg hover:shadow-[#FF5500]/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0F172A] mb-2 group-hover:text-[#FF5500] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
