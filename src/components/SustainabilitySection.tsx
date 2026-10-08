import React, { useState } from 'react';
import { Leaf, Award, Calculator, Sparkles } from 'lucide-react';

export const SustainabilitySection: React.FC<{ onOpenSampleModal: (gradeName?: string) => void }> = ({ onOpenSampleModal }) => {
  const [annualTonnage, setAnnualTonnage] = useState<number>(500); // Metric Tons
  const [pcrShare, setPcrShare] = useState<number>(40); // % PCR Content

  // CO2 savings calculation (Average ~1.4 tons CO2 saved per ton of PCR PP vs Virgin PP)
  const co2Saved = Math.round(annualTonnage * (pcrShare / 100) * 1.42);
  const crudeOilSaved = Math.round(annualTonnage * (pcrShare / 100) * 8.5); // Barrels equivalent
  const plasticDiverted = Math.round(annualTonnage * (pcrShare / 100)); // Tons

  const processSteps = [
    {
      step: '01',
      title: 'Traceable Feedstock Ingestion',
      desc: '100% GRS verified post-consumer (PCR) and post-industrial (PIR) plastic streams with full chain-of-custody documentation.',
    },
    {
      step: '02',
      title: 'Deodorization & Multi-Stage Filtration',
      desc: 'Proprietary thermal vacuum degassing eliminating volatile odors (VDA 270 Grade 2.5) and microscopic particulates down to 50 microns.',
    },
    {
      step: '03',
      title: 'Molecular Compatibilization',
      desc: 'High-torque twin screw compounding with chain extenders and impact modifiers to restore molecular entanglement to near-virgin levels.',
    },
    {
      step: '04',
      title: 'MIRAC Quality Certification',
      desc: 'Full lot testing for tensile, flexural modulus, low-temperature impact, and RoHS/REACH compliance prior to OEM dispatch.',
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-[#EDF5F1] relative overflow-hidden bg-tech-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono-tech text-emerald-800 font-bold">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>PlusCircular™ Green Earth Initiative</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            CIRCULAR ENGINEERING. <br />
            <span className="text-emerald-700">ENGINEERED TO RETURN.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base">
            Empowering OEMs to meet ambitious Scope 3 decarbonization targets without compromising on structural rigidity, cycle times, or surface finish.
          </p>
        </div>

        {/* 2-Column: Process Flow + Interactive Carbon Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: 4-Stage Process Flow */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-emerald-600" />
                <h3 className="font-display font-bold text-lg text-[#0F172A]">
                  Global Recycled Standard (GRS) Certified
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Machino Polymers operates GRS Scope-certified compounding lines, ensuring full traceability from raw bale intake to finished compounding granules.
              </p>
            </div>

            <div className="space-y-3">
              {processSteps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-emerald-300 transition-all flex items-start gap-4 group shadow-sm"
                >
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 font-mono-tech text-xs font-bold text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-emerald-700 transition-colors">
                      {st.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Decarbonization Calculator */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-300 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-base text-[#0F172A]">
                    Decarbonization Calculator
                  </h3>
                </div>
                <span className="text-[10px] font-mono-tech uppercase font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                  Live LCA Model
                </span>
              </div>

              {/* Slider 1: Annual Demand */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#64748B] font-medium">Annual Polymer Consumption:</span>
                  <span className="font-mono-tech font-bold text-[#0F172A]">{annualTonnage.toLocaleString()} MT / Year</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={annualTonnage}
                  onChange={(e) => setAnnualTonnage(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: PCR % Share */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#64748B] font-medium">PlusCircular™ PCR Blend Share:</span>
                  <span className="font-mono-tech font-bold text-emerald-700">{pcrShare}% Recycled</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={pcrShare}
                  onChange={(e) => setPcrShare(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Computed Carbon & Energy Savings */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-[10px] font-mono-tech text-emerald-800 uppercase font-bold">CO₂ Abated</div>
                  <div className="text-lg font-display font-black text-emerald-900 mt-1">{co2Saved} MT</div>
                  <div className="text-[9px] text-[#64748B]">Annual Reduction</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-[10px] font-mono-tech text-emerald-800 uppercase font-bold">Waste Diverted</div>
                  <div className="text-lg font-display font-black text-emerald-900 mt-1">{plasticDiverted} MT</div>
                  <div className="text-[9px] text-[#64748B]">Landfill Averted</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-[10px] font-mono-tech text-emerald-800 uppercase font-bold">Crude Saved</div>
                  <div className="text-lg font-display font-black text-emerald-900 mt-1">{crudeOilSaved}</div>
                  <div className="text-[9px] text-[#64748B]">Barrels of Oil</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenSampleModal('PlusCircular™ PCR-PP 30')}
                  className="w-full py-3 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request PlusCircular™ Evaluation Grade</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
