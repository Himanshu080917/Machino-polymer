import React, { useState } from 'react';
import { Microscope } from 'lucide-react';

export const MiracRDSection: React.FC = () => {
  const [showEquipment, setShowEquipment] = useState(false);

  return (
    <section
      id="mirac"
      className="stacked-panel-mirac relative w-full min-h-[calc(100vh-var(--navbar-height))] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Full-bleed Raw Laboratory Photo (No baked text) */}
      <img
        src="/images/mirac-lab.jpg"
        alt="MIRAC Laboratory at Machino Polymers"
        className="absolute inset-0 w-full h-full object-cover object-[center_right] lg:object-[right_center] pointer-events-none"
      />

      {/* 2. Split Overlays */}
      {/* Left Half: Flat solid dark slate panel (#181C22) with hard 50% split on >=1024px to ensure zero ghosting/reflection */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[#181C22] z-0 pointer-events-none" />

      {/* Right Half: Subtle light dark tint ~rgba(0,0,0,0.35) so lab woman and green tubes show through cleanly */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-black/35 z-0 pointer-events-none" />

      {/* 3. Main Content Container (Left Half) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 pl-[clamp(24px,8.4vw,162px)] pr-[clamp(24px,4vw,60px)]">
        <div className="max-w-[680px] text-left">
          
          {/* H2 Title (No eyebrow in Figma) */}
          <h2 className="text-white font-display font-extrabold tracking-[-0.02em] leading-[1.14] text-[clamp(40px,4.15vw,80px)]">
            <span className="block">Innovation at the</span>
            <span className="block">molecular level.</span>
          </h2>

          {/* Body Text (Muted grey rgba(255,255,255,0.65), wrapping at ~680px) */}
          <div className="mt-8 sm:mt-11 space-y-2.5 text-white/65 text-[clamp(16px,1.15vw,22px)] leading-[1.6] font-normal">
            <p>
              Machino Innovative Research and Application Center (MIRAC), the in house R&amp;D unit of MPL is accredited by Department of Scientific and Industrial Research under Ministry of Science and Technology, Govt. of India. MIRAC is accredited by NABL and also possesses the ISO/ IEC 17025 certification.
            </p>
            <p>
              MIRAC&apos;s strength lies in its skilled &amp; qualified polymer scientists and engineers who always strive in developing innovative products in its state-of-the-art R&amp;D laboratory
            </p>
          </div>

          {/* Explore MIRAC Pill Button */}
          <div className="mt-7 sm:mt-9">
            <button
              onClick={() => setShowEquipment(!showEquipment)}
              className="inline-flex items-center justify-center rounded-full bg-[#1F2D52] hover:bg-[#27386A] text-white border border-white/15 text-[clamp(16px,1.1vw,22px)] font-semibold tracking-wide transition-all duration-200 shadow-xl hover:-translate-y-0.5 min-h-[56px] sm:min-h-[64px] px-8 sm:px-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-white/50 w-full sm:w-auto"
            >
              <span>{showEquipment ? 'Hide Equipment Suite' : 'Explore MIRAC'}</span>
            </button>
          </div>

          {/* Accreditation Badges Row (Below Button, aligned left, gap ~65px, height auto, no clipping) */}
          <div className="mt-7 sm:mt-9 flex items-center gap-[clamp(32px,3.4vw,65px)]">
            
            {/* DSIR Seal (~220px at 1920px) */}
            <div className="w-[clamp(120px,11.5vw,220px)] h-[clamp(120px,11.5vw,220px)] shrink-0">
              <img
                src="/images/badges/dsir.svg"
                alt="DSIR recognised in-house R&D unit"
                className="w-full h-full object-contain opacity-60 hover:opacity-85 transition-opacity duration-200"
              />
            </div>

            {/* NABL Seal (~155px at 1920px, height: auto, full wordmark visible) */}
            <div className="w-[clamp(90px,8vw,155px)] shrink-0">
              <img
                src="/images/badges/nabl.svg"
                alt="NABL accredited laboratory"
                className="w-full h-auto object-contain opacity-60 hover:opacity-85 transition-opacity duration-200"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Expandable Equipment Suite Section */}
      {showEquipment && (
        <div className="relative z-20 bg-[#0E131A] py-14 px-6 sm:px-10 lg:px-16 border-t border-white/10 animate-fade-in">
          <div className="w-full max-w-[1520px] mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <Microscope className="w-6 h-6 text-[#FF5500]" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
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

