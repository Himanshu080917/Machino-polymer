import React from 'react';

export const ManufacturingTechSection: React.FC = () => {
  const stats = [
    {
      trackingId: 'strategic_plants.01',
      number: '4',
      unit: 'PLANTS',
      label: 'STRATEGIC PLANTS',
      desc: 'Located near major industrial hubs like Gurugram, Gujarat, Chennai and the UAE.',
    },
    {
      trackingId: 'annual_capacity.01',
      number: '150,000',
      unit: 'MT',
      label: 'ANNUAL CAPACITY',
      desc: 'High-volume throughput supporting OEM supply chain requirements at scale.',
    },
    {
      trackingId: 'trusted_partners.01',
      number: '40+',
      unit: 'OEMS',
      label: 'TRUSTED PARTNERS',
      desc: 'Automotive and Industrial Customers across India and MENA.',
    },
  ];

  return (
    <section id="manufacturing" className="w-full bg-white text-[#0F172A] pt-14 sm:pt-20 pb-12 sm:pb-16">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Two-Column Header matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 lg:mb-16">
          
          {/* Left Column: Green Eyebrow + 2-Line Bold Heading */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="text-[#10B981] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              MANUFACTURING TECHNOLOGIES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-display font-black text-[#0F172A] leading-[1.08] tracking-tight">
              <div>Precision at</div>
              <div className="mt-1">industrial scale.</div>
            </h2>
          </div>

          {/* Right Column: Narrative Paragraph */}
          <div className="lg:col-span-7 pt-1 lg:pt-3">
            <p className="text-[#475569] text-sm sm:text-base lg:text-[17px] leading-[1.7] max-w-2xl">
              State-of-the-art compounding lines powered by advanced automation ensure consistent quality, precision, and complete batch traceability across every production run. Equipped with co-rotating twin-screw extruders, gravimetric feeding systems, and both underwater and strand pelletizing technologies, our facilities deliver reliable, high-performance polymer compounds at scale.
            </p>
          </div>

        </div>

        {/* 3-Column Stats Card matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E2E8F0] rounded-none divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] bg-white shadow-xs">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 lg:p-12 space-y-3 sm:space-y-4 flex flex-col justify-between hover:bg-[#FAFAFA] transition-colors"
            >
              {/* Top Monospace Tracking ID */}
              <div className="font-mono-tech text-xs text-[#CBD5E1] tracking-wider">
                {item.trackingId}
              </div>

              {/* Number and Orange Unit */}
              <div className="flex items-baseline gap-2.5 pt-2">
                <span className="text-5xl sm:text-6xl lg:text-[58px] font-display font-black text-[#0F172A] tracking-tight">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-mono-tech font-bold uppercase tracking-wider text-[#FF5500]">
                  {item.unit}
                </span>
              </div>

              {/* Black Label */}
              <div className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider text-[#0F172A]">
                {item.label}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
