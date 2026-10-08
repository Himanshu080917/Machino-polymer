import React from 'react';

export const QualityDisciplineSection: React.FC = () => {
  const certs = [
    { code: 'IATF16949:2016', name: 'Automotive Quality Management System' },
    { code: 'ISO 14001:2015', name: 'Environmental Management System' },
    { code: 'ISO 45001:2018', name: 'Occupational Health & Safety Management' },
    { code: 'NABL/ISO 17025', name: 'Accredited Testing and Calibration Lab' },
  ];

  const qcSteps = [
    {
      step: '01',
      title: 'Incoming Quality Control (IQC)',
      desc: 'Supplier evaluation, raw material testing (MFI, density, ash content), and strict batch approval gates.',
    },
    {
      step: '02',
      title: 'In-Process Quality Assurance (IPQA)',
      desc: 'Continuous monitoring of moisture, extruder parameters, and real-time gravimetric feeding control.',
    },
    {
      step: '03',
      title: 'Outgoing Quality Control (OQC)',
      desc: 'Pre-dispatch inspection, Certificate of Analysis (CoA) generation, and retained sample archiving.',
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-28 bg-white text-[#0F172A] relative z-20 overflow-hidden">
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16 lg:space-y-20">
        
        {/* Top Split: Left Headline & Certifications, Right Lab Technician Image (Aspect Ratio 4/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow + 3-Line Headline + Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              QUALITY MANAGEMENT SYSTEMS
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-display leading-[1.08] tracking-tight">
              <div className="font-black text-[#0F172A]">Quality is not</div>
              <div className="font-black text-[#0F172A]">a department.</div>
              <div className="font-light text-[#94A3B8] mt-1">It&apos;s a discipline.</div>
            </h2>

            <div className="pt-4 space-y-3">
              <div className="text-[#0F172A] font-mono-tech text-xs font-bold tracking-[0.15em] uppercase">
                CERTIFICATIONS &amp; STANDARDS
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
                {certs.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#94A3B8] mt-0.5">•</span>
                    <span>
                      <strong className="font-bold text-[#0F172A]">{c.code}</strong> — {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Lab Technician in Cleanroom Gear (Aspect 4/3, rounded-2xl, object-cover) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-4/3 bg-slate-100">
              <img
                src="/images/quality-lab-scientist.jpg"
                alt="Person in cleanroom gear examining a sample at Machino Polymers lab"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Bottom Process Grid: 3 Step Cards */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="text-[#0F172A] font-mono-tech text-xs font-bold tracking-[0.18em] uppercase">
            QUALITY CONTROL PROCESS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qcSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
              >
                <div className="text-3xl sm:text-4xl font-display font-black text-[#0F172A]">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
