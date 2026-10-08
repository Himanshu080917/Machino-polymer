import React, { useState } from 'react';
import { Car, Recycle, Zap, Boxes, CheckCircle2, ChevronRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industriesData';

interface IndustryApplicationsProps {
  onOpenSampleModal: (gradeName?: string) => void;
}

export const IndustryApplications: React.FC<IndustryApplicationsProps> = ({ onOpenSampleModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentIndustry = INDUSTRIES_DATA[activeTab];

  const iconMap: Record<string, any> = {
    Car,
    Recycle,
    Zap,
    Boxes,
  };

  return (
    <section id="industries" className="py-24 bg-[#F8FAF9] relative bg-tech-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8E6DE] text-xs font-mono-tech text-[#475569]">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            <span>Target Market Applications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            ENGINEERED FOR <span className="text-[#FF5500]">CRITICAL APPLICATIONS</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            From crash-zone automotive bumper systems to high-voltage EV battery trays and precision appliances, Machino compounds power global industry standards.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const Icon = iconMap[ind.iconName] || Car;
            const isSelected = activeTab === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#FF5500] text-white shadow-md'
                    : 'bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Display */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-lg overflow-hidden">
          
          {/* Top Banner Image with Overlay */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={currentIndustry.heroImage}
              alt={currentIndustry.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
            
            {/* Banner Header Text */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono-tech uppercase font-bold tracking-wider bg-white/20 text-white backdrop-blur-md"
                >
                  {currentIndustry.subtitle}
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-black text-white mt-2">
                  {currentIndustry.title}
                </h3>
              </div>

              {/* Top Stats */}
              <div className="flex items-center gap-3">
                {currentIndustry.keyStats.map((st, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-black/50 border border-white/20 backdrop-blur-md text-right">
                    <div className="text-[10px] font-mono-tech text-white/80 uppercase font-semibold">{st.label}</div>
                    <div className="text-xs sm:text-sm font-display font-bold text-white">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Component Grid */}
          <div className="p-6 sm:p-10 space-y-8 bg-white">
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-4xl">
              {currentIndustry.description}
            </p>

            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#FF5500] font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                <span>Engineered Component Solutions</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentIndustry.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all space-y-3 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-display font-bold text-base text-[#0F172A] group-hover:text-[#FF5500] transition-colors">
                        {comp.name}
                      </h5>
                      <span className="px-2.5 py-0.5 rounded bg-white text-[11px] font-mono-tech text-[#0F172A] font-bold border border-[#E2E8F0]">
                        {comp.recommendedGrade}
                      </span>
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      <strong className="text-[#334155]">Requirement:</strong> {comp.requirement}
                    </p>

                    <div className="space-y-1 pt-1">
                      {comp.advantages.map((adv, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium">{adv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#E2E8F0] flex justify-end">
                      <button
                        onClick={() => onOpenSampleModal(comp.recommendedGrade)}
                        className="text-xs font-bold text-[#FF5500] hover:text-[#E64D00] flex items-center gap-1 transition-colors"
                      >
                        <span>Request Sample for {comp.recommendedGrade}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
