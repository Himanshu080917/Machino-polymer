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

  const renderImageCard = () => (
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-[630/421] bg-slate-50">
      <img
        src="/images/quality-lab-scientist.jpg"
        alt="Person in cleanroom gear examining a sample at Machino Polymers lab"
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
      />
    </div>
  );

  return (
    <section id="quality" className="py-12 sm:py-20 lg:py-28 bg-white text-[#0F172A] relative z-20 overflow-hidden">
      <div className="w-full max-w-[1520px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Top Section: Heading + Image below heading on mobile, Side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Column (Desktop) / Main Column (Mobile) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="text-[#FF5500] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              QUALITY MANAGEMENT SYSTEMS
            </div>
            
            <h2 className="text-[clamp(30px,5vw,54px)] font-display leading-[1.08] tracking-tight">
              <div className="font-black text-[#0F172A]">Quality is not</div>
              <div className="font-black text-[#0F172A]">a department.</div>
              <div className="font-light text-[#94A3B8] mt-1">It&apos;s a discipline.</div>
            </h2>

            {/* Mobile/Tablet image card right below the heading */}
            <div className="lg:hidden pt-2 pb-2">
              {renderImageCard()}
            </div>

            <div className="pt-2 sm:pt-4 space-y-3">
              <div className="text-[#0F172A] font-mono-tech text-xs sm:text-[13px] font-bold tracking-[0.15em] uppercase">
                CERTIFICATIONS &amp; STANDARDS
              </div>
              <ul className="space-y-2.5 text-[15px] sm:text-base text-[#475569] leading-relaxed">
                {certs.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF5500] mt-1 font-bold">•</span>
                    <span>
                      <strong className="font-bold text-[#0F172A]">{c.code}</strong> — {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Lab Technician in Cleanroom Gear (Desktop only) */}
          <div className="hidden lg:block lg:col-span-6">
            {renderImageCard()}
          </div>

        </div>

        {/* Bottom Process Grid: 3 Step Cards */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="text-[#0F172A] font-mono-tech text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase">
            QUALITY CONTROL PROCESS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {qcSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
              >
                <div className="text-3xl sm:text-4xl font-display font-black text-[#0F172A]">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
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
