import React, { useState } from 'react';
import { Factory, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PLANTS_DATA } from '../data/manufacturingData';

export const ManufacturingFootprint: React.FC = () => {
  const [activePlantId, setActivePlantId] = useState<string>(PLANTS_DATA[0].id);

  const activePlant = PLANTS_DATA.find((p) => p.id === activePlantId) || PLANTS_DATA[0];

  return (
    <section id="manufacturing" className="py-24 bg-[#F1F6F3] relative bg-dot-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8E6DE] text-xs font-mono-tech text-[#475569]">
            <Factory className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Industrial Footprint & Scale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            PRECISION AT <span className="text-[#FF5500]">INDUSTRIAL SCALE</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            With <strong className="text-[#0F172A]">150,000 MT</strong> annual compounding capacity across 4 strategic automotive and industrial corridors in India, Machino ensures seamless just-in-time delivery.
          </p>
        </div>

        {/* Manufacturing Plant Hub Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Plant Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {PLANTS_DATA.map((plant) => {
              const isSelected = plant.id === activePlantId;
              return (
                <button
                  key={plant.id}
                  onClick={() => setActivePlantId(plant.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#FF5500] shadow-md'
                      : 'bg-white/80 border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF5500]" />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono-tech text-[#64748B] uppercase tracking-wider font-semibold">
                      {plant.state}
                    </span>
                    <span className="text-xs font-mono-tech font-bold text-[#FF5500]">
                      {plant.capacity}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#0F172A]">
                    {plant.name}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{plant.location}</span>
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Plant Specification Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-lg space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[#FF5500] font-bold">
                    Strategic Manufacturing Facility
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mt-1">
                    {activePlant.name}
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-right">
                  <div className="text-[10px] font-mono-tech text-[#64748B] uppercase font-semibold">Installed Capacity</div>
                  <div className="text-xl font-display font-black text-[#0F172A]">{activePlant.capacity}</div>
                </div>
              </div>

              {/* Plant Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                  <div className="text-xs font-mono-tech text-[#64748B] uppercase mb-1 font-semibold">Extrusion Infrastructure</div>
                  <div className="text-sm font-bold text-[#0F172A]">{activePlant.linesCount}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                  <div className="text-xs font-mono-tech text-[#64748B] uppercase mb-1 font-semibold">Primary Compounding Focus</div>
                  <div className="text-xs font-semibold text-[#334155]">{activePlant.specialization}</div>
                </div>
              </div>

              {/* Plant Highlights & Automation Features */}
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#475569] font-bold mb-3">
                  Automation & Quality Controls
                </h4>
                <div className="space-y-2">
                  {activePlant.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Management Certifications */}
              <div className="pt-2">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#475569] font-bold mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Audited Certifications</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePlant.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono-tech font-bold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
