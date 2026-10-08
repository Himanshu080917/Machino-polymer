import React, { useState } from 'react';
import { ShieldCheck, Award, Microscope } from 'lucide-react';

export const MiracRDSection: React.FC = () => {
  const [showEquipment, setShowEquipment] = useState(false);

  return (
    <section id="mirac" className="relative w-full overflow-hidden bg-[#0A0E17] text-white">
      
      {/* Full-bleed Laboratory Background Photo */}
      <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center py-20 lg:py-24">
        
        {/* Background Image */}
        <img
          src="/images/mirac-lab.jpg"
          alt="MIRAC Research & Application Laboratory Scientist"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] brightness-[0.55] contrast-110"
        />

        {/* Multi-stop Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            
            {/* Eyebrow */}
            <div className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.25em]">
              MIRAC
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.08] tracking-tight">
              Innovation at the <br />
              molecular level.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Machino Innovative Research and Application Center (MIRAC), the in house R&amp;D unit of MPL is accredited by Department of Scientific and Industrial Research under Ministry of Science and Technology, Govt. of India. MIRAC is accredited by NABL and also possesses the ISO/ IEC 17025 certification.
              </p>
              <p className="text-white/70">
                MIRAC&apos;s strength lies in its skilled &amp; qualified polymer scientists and engineers who always strive in developing innovative products in its state-of-the-art R&amp;D laboratory.
              </p>
            </div>

            {/* Explore Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowEquipment(!showEquipment)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1E293B]/90 hover:bg-[#334155] text-white border border-white/20 text-sm font-bold tracking-wide transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <span>{showEquipment ? 'Hide Equipment Suite' : 'Explore MIRAC'}</span>
              </button>
            </div>

            {/* DSIR and NABL Accreditation Badges at bottom left */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/15">
              
              {/* DSIR Seal */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90">
                  <Award className="w-5 h-5 text-[#FF5500]" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono-tech font-bold text-white uppercase tracking-wider">
                    DSIR RECOGNIZED
                  </div>
                  <div className="text-[9px] text-white/60 uppercase tracking-widest">
                    GOVT. OF INDIA R&amp;D
                  </div>
                </div>
              </div>

              {/* NABL Seal */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono-tech font-bold text-white uppercase tracking-wider">
                    NABL ACCREDITED
                  </div>
                  <div className="text-[9px] text-white/60 uppercase tracking-widest">
                    ISO/IEC 17025 CERTIFIED
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Expandable Equipment Suite Section */}
      {showEquipment && (
        <div className="bg-[#070B14] py-16 px-6 sm:px-10 lg:px-12 border-t border-white/10 animate-fade-in">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <Microscope className="w-6 h-6 text-[#FF5500]" />
              <h3 className="text-2xl font-display font-bold text-white">
                NABL Accredited Polymer Testing &amp; Characterization Equipment
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'FTIR Spectrophotometer', cat: 'Analytical', standard: 'ASTM E1252', desc: 'Polymer identification and additive molecular fingerprinting.' },
                { name: 'Computerized UTM (50 kN)', cat: 'Mechanical', standard: 'ISO 527 / ASTM D638', desc: 'Tensile, flexural, and elongation mechanical profiling.' },
                { name: 'Notched Izod / Charpy Tester', cat: 'Impact', standard: 'ISO 179 / ASTM D256', desc: 'Sub-zero impact toughness testing down to -40°C.' },
                { name: 'Melt Flow Indexer (MFI/MFR)', cat: 'Rheology', standard: 'ISO 1133 / ASTM D1238', desc: 'Melt flow rate rheology under calibrated loads.' },
                { name: 'HDT / Vicat Softening Tester', cat: 'Thermal', standard: 'ISO 75 / ASTM D648', desc: 'Heat deflection temperature under elevated loads.' },
                { name: 'Differential Scanning Calorimeter', cat: 'Thermal', standard: 'ISO 11357', desc: 'Crystallization kinetics and glass transition profiling.' },
                { name: 'Xenon Weather-Ometer', cat: 'Weathering', standard: 'SAE J2527', desc: 'Automotive accelerated interior & exterior UV aging.' },
                { name: 'UL-94 Flammability Chamber', cat: 'Safety', standard: 'UL-94 V-0/V-1/V-2', desc: 'Vertical and horizontal flame propagation validation.' },
              ].map((eq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono-tech uppercase text-[#FF5500] font-bold">{eq.cat}</span>
                    <span className="text-[10px] font-mono-tech text-white/50">{eq.standard}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">{eq.name}</h4>
                  <p className="text-xs text-white/60">{eq.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
