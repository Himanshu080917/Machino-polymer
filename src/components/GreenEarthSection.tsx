import React from 'react';
import { CheckCircle2, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';

export const GreenEarthSection: React.FC<{ onOpenSampleModal?: (grade?: string) => void }> = ({
  onOpenSampleModal,
}) => {
  const pillars = [
    {
      title: 'Up to 100% Recycled Content',
      desc: 'Formulations engineered with high-purity post-consumer (PCR) and post-industrial (PIR) resins.',
    },
    {
      title: '-68% Lower Carbon Footprint',
      desc: 'Substantial Scope-3 lifecycle greenhouse gas reduction verified by ISO 14040/44 LCA methodologies.',
    },
    {
      title: 'Closed-Loop OEM Takeback',
      desc: 'Seamless reverse logistics converting industrial scrap and end-of-life components back into prime parts.',
    },
    {
      title: 'Prime Parity Mechanicals',
      desc: 'Proprietary chain-extenders and tougheners ensuring impact, tensile, and thermal integrity match virgin grades.',
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-[#F0FDF4] text-[#0F172A] relative overflow-hidden border-b border-[#DCFCE7]">
      {/* Subtle emerald glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag & Title */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 font-mono-tech text-xs font-bold tracking-widest uppercase">
            <Leaf className="w-3.5 h-3.5" />
            <span>GREEN EARTH CIRCULARITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Circular Engineering. <br />
            <span className="text-emerald-600">Engineered to Return.</span>
          </h2>

          <p className="text-[#475569] text-base leading-relaxed">
            We transform post-industrial and post-consumer polymers into certified, high-performance compounds without sacrificing mechanical strength, aesthetic finish, or thermal integrity.
          </p>
        </div>

        {/* Content Grid: Left Specs & Pillars, Right Forest Image with Metric Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: GRS Badge + 4 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* GRS Certification Badge */}
            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono-tech uppercase text-emerald-700 font-bold tracking-wider">
                  GLOBAL RECYCLED STANDARD (GRS)
                </div>
                <div className="text-sm font-semibold text-[#0F172A]">
                  100% Chain-of-Custody Traceability &amp; LCA Audited
                </div>
              </div>
            </div>

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-emerald-100/80 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="font-display font-bold text-sm text-[#0F172A]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenSampleModal?.('EcoTuf® GRS-Certified PP')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <span>Request Sustainable Compound Samples</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Forest Canopy Photo with Floating Glass Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-200 shadow-xl group">
              <img
                src="/images/circular-forest.jpg"
                alt="Machino Polymers Sustainable Forestry and Carbon Reduction"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono-tech uppercase tracking-widest text-emerald-400 font-bold">
                    ANNUAL CARBON OFFSET DELIVERED
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    18,500+ MT CO₂e
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono-tech font-bold">
                  SCOPE-3 READY
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
