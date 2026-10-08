import React from 'react';
import { Award } from 'lucide-react';

export const QualityDisciplineSection: React.FC = () => {
  const certs = ['IATF 16949:2016', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'];

  const qcSteps = [
    {
      step: '01',
      code: 'IQC',
      title: 'Incoming Quality Control',
      desc: '100% FTIR spectroscopy, melt flow rate (MFR/MFI), moisture titration, and ash content validation for every incoming polymer lot and additive batch.',
    },
    {
      step: '02',
      code: 'IPQA',
      title: 'In-Process Quality Assurance',
      desc: 'Real-time laser pellet inspection, continuous melt pressure monitoring, and calibrated temperature zone regulation throughout the compounding cycle.',
    },
    {
      step: '03',
      code: 'OQC',
      title: 'Outgoing Quality Certification',
      desc: 'Notched Izod impact testing (-40°C to +23°C), tensile/flexural modulus, HDT heat distortion, flammability (UL94), and digital Certificate of Analysis (CoA) generation.',
    },
  ];

  return (
    <section id="quality" className="py-24 bg-[#F8FAF9] text-[#0F172A] relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
            TOTAL QUALITY MANAGEMENT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Quality is not a department. <br />
            <span className="text-[#FF5500]">It&apos;s a discipline.</span>
          </h2>
          <p className="text-[#475569] text-base leading-relaxed">
            From raw monomer verification to finished granule spectroscopy, every kilogram undergoes stringent multi-stage inspection to guarantee flawless OEM processing.
          </p>
        </div>

        {/* Grid: Left Lab Scientist Photo & Certs, Right 3 QC Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image + Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl group">
              <img
                src="/images/quality-lab-scientist.jpg"
                alt="Machino Polymers Quality Assurance Scientist Testing Polymers"
                className="w-full h-[360px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#FF5500] font-bold mb-1">
                  MIRAC TESTING LABORATORY
                </div>
                <div className="text-sm font-semibold text-white">
                  Automotive-Standard Rheology &amp; Mechanical Characterization
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 gap-3">
              {certs.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center gap-2.5"
                >
                  <Award className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span className="text-xs font-mono-tech font-bold text-[#0F172A]">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3-Step QC Discipline */}
          <div className="lg:col-span-7 space-y-4">
            {qcSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#FF5500]/50 hover:shadow-lg hover:shadow-[#FF5500]/5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-[#FF5500]/10 text-[#FF5500] font-mono-tech font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono-tech text-[#FF5500] uppercase font-bold tracking-wider">
                      {step.code}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed pl-11">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
