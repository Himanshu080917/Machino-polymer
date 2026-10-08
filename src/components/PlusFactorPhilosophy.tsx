import React, { useState } from 'react';
import { Atom, Recycle, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  icon: any;
  accentColor: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}

export const PlusFactorPhilosophy: React.FC<{ onExploreMaterials: () => void }> = ({ onExploreMaterials }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars: Pillar[] = [
    {
      id: 'innovation',
      tag: '+ INNOVATION',
      title: 'Molecular Chemistry & MIRAC R&D',
      headline: 'Where Material Chemistry Meets Precision Engineering',
      description: 'Our in-house DSIR-recognized and NABL-accredited R&D facility (MIRAC) continuously pioneers advanced polymer alloys, long-glass fiber formulations, and nano-composites customized to OEM requirements.',
      icon: Atom,
      accentColor: '#FF5500',
      metrics: [
        { label: 'R&D Accreditations', value: 'DSIR & NABL' },
        { label: 'Formulations Library', value: '500+ Tested' },
        { label: 'Failure Analysis Turnaround', value: '< 48 Hours' },
      ],
      bulletPoints: [
        'Proprietary compatibilizers for polar-nonpolar polymer alloys',
        'Sub-zero impact toughening down to -40°C for automotive crash zones',
        'Class-A low-gloss scratch resistant formulations for cockpit trims',
      ],
    },
    {
      id: 'sustainability',
      tag: '+ SUSTAINABILITY',
      title: 'PlusCircular™ Closed-Loop Engineering',
      headline: 'Zero-Compromise Circular Materials for Scope 3 Decarbonization',
      description: 'We turn post-consumer and post-industrial plastic waste into high-spec engineering compounds. With Global Recycled Standard (GRS) certification, our materials deliver up to 55% carbon emission reduction.',
      icon: Recycle,
      accentColor: '#10B981',
      metrics: [
        { label: 'Carbon Reduction', value: 'Up to -55%' },
        { label: 'GRS Verification', value: '100% Traceable' },
        { label: 'Recycled Content Option', value: '20% - 100%' },
      ],
      bulletPoints: [
        'Proprietary intensive deodorization removing volatile organic compounds (VOCs)',
        'Near-virgin tensile and flexural modulus retention over repeated cycles',
        'Life Cycle Assessment (LCA) certified green data for OEM audits',
      ],
    },
    {
      id: 'precision',
      tag: '+ PRECISION',
      title: 'Advanced Compounding Extrusion Technology',
      headline: 'Twin-Screw High-Torque Homogeneity at Scale',
      description: 'Operating high-output co-rotating twin-screw compounding lines equipped with loss-in-weight gravimetric feeders, multi-stage melt filtration, and real-time NIR spectrographic quality monitoring.',
      icon: Cpu,
      accentColor: '#2563EB',
      metrics: [
        { label: 'Extrusion Accuracy', value: '± 0.2% Gravimetric' },
        { label: 'MFI Variance', value: '< 2.5% Delta' },
        { label: 'Annual Output', value: '150,000 MT' },
      ],
      bulletPoints: [
        'Loss-in-weight gravimetric dosing for exact mineral & additive ratios',
        'Vacuum degassing zones removing moisture and trapped volatiles',
        'Underwater and strand pelletizing for uniform granule geometry',
      ],
    },
    {
      id: 'reliability',
      tag: '+ RELIABILITY',
      title: 'Automotive Grade Quality Management',
      headline: 'Trusted by the World’s Most Demanding OEMs',
      description: 'Our plants adhere to IATF 16949:2016 automotive quality management and ISO 14001 environmental safety standards. Every lot undergoes full rheological, thermal, and mechanical characterization prior to dispatch.',
      icon: ShieldCheck,
      accentColor: '#D97706',
      metrics: [
        { label: 'Quality Standard', value: 'IATF 16949:2016' },
        { label: 'On-Time Delivery', value: '99.8%' },
        { label: 'PPM Defect Rate', value: '< 10 PPM' },
      ],
      bulletPoints: [
        'Lot-specific Certificate of Analysis (CoA) with digital verification',
        'Strategic plant network near major OEM manufacturing clusters',
        'Emergency response compounding capabilities with dedicated safety stocks',
      ],
    },
  ];

  const current = pillars[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="plus-factor" className="py-24 bg-[#F8FAF9] relative overflow-hidden bg-tech-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20">
            <span className="text-[#FF5500] font-black text-sm">+</span>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF5500] font-bold">
              The Machino Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            WHAT IS THE <span className="text-[#FF5500]">PLUS FACTOR?</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
            In polymer engineering, standard materials meet basic specs. The <strong className="text-[#0F172A]">Plus Factor</strong> is our proprietary compounding mastery that elevates mechanical toughness, thermal stability, processability, and sustainability.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {pillars.map((p, idx) => {
            const TabIcon = p.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#FF5500] shadow-md shadow-[#FF5500]/10'
                    : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <TabIcon
                    className="w-5 h-5 transition-transform"
                    style={{ color: isSelected ? p.accentColor : '#94A3B8' }}
                  />
                  <span className="font-mono-tech text-[10px] text-[#94A3B8] font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[#0F172A]">
                  {p.tag}
                </div>
                <div className="text-[11px] text-[#64748B] truncate mt-0.5 font-medium">
                  {p.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: `${current.accentColor}15`, color: current.accentColor }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono-tech text-xs tracking-wider uppercase font-bold" style={{ color: current.accentColor }}>
                    {current.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A]">
                    {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {current.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: current.accentColor }}
                    />
                    <span className="text-xs sm:text-sm text-[#334155] leading-snug">
                      {bp}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onExploreMaterials}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#FF5500] transition-colors group"
                >
                  <span>Explore Engineered Compounds for {current.tag}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF5500]" />
                </button>
              </div>
            </div>

            {/* Right Column: Key Quantitative Proofs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2E8F0] space-y-4">
                <div className="text-xs font-mono-tech text-[#64748B] uppercase tracking-wider flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                  <span>Performance Benchmark</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified
                  </span>
                </div>

                <div className="space-y-4">
                  {current.metrics.map((met, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-[#E2E8F0] last:border-0">
                      <span className="text-xs text-[#64748B] font-medium">{met.label}</span>
                      <span className="font-display font-bold text-base" style={{ color: idx === 0 ? current.accentColor : '#0F172A' }}>
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[11px] text-[#64748B] leading-relaxed">
                  💡 <em>Every batch compounded at Machino is backed by digital certificate of analysis and full NIR spectrography traceability.</em>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
