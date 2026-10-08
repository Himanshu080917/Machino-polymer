import React from 'react';

export const ManufacturingTechSection: React.FC = () => {
  const stats = [
    {
      trackingId: 'strategic_plants_01',
      number: '4',
      unit: 'PLANTS',
      label: 'STRATEGIC PLANTS',
      desc: 'Located near major industrial hubs like Gurugram, Gujarat, Chennai and the UAE.',
    },
    {
      trackingId: 'annual_capacity_01',
      number: '150,000',
      unit: 'MT',
      label: 'ANNUAL CAPACITY',
      desc: 'High-volume throughput supporting OEM supply chain requirements at scale.',
    },
    {
      trackingId: 'trusted_partners_01',
      number: '40+',
      unit: 'OEMS',
      label: 'TRUSTED PARTNERS',
      desc: 'Automotive and Industrial Customers across India and MENA.',
    },
  ];

  return (
    <section id="manufacturing" className="w-full bg-white text-[#111827] py-20 lg:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Two-Column Header matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Left Column: Eyebrow + Bold Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[#10B981] font-mono-tech uppercase text-xs sm:text-sm font-bold tracking-[0.2em]">
              MANUFACTURING TECHNOLOGIES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#111827] leading-[1.08] tracking-tight">
              Precision at <br />
              industrial scale.
            </h2>
          </div>

          {/* Right Column: Narrative Paragraph */}
          <div className="lg:col-span-7 pt-2">
            <p className="text-[#4B5563] text-sm sm:text-base lg:text-[17px] leading-relaxed">
              State-of-the-art compounding lines powered by advanced automation ensure consistent quality, precision, and complete batch traceability across every production run. Equipped with co-rotating twin-screw extruders, gravimetric feeding systems, and both underwater and strand pelletizing technologies, our facilities deliver reliable, high-performance polymer compounds at scale.
            </p>
          </div>

        </div>

        {/* 3-Column Stats Grid with Light Border and Monospace Tracking IDs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB] rounded-lg divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] bg-white">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 lg:p-12 space-y-4 flex flex-col justify-between hover:bg-[#F9FAFB] transition-colors"
            >
              {/* Top Monospace Tracking ID */}
              <div className="font-mono-tech text-xs text-[#9CA3AF] tracking-wider">
                {item.trackingId}
              </div>

              {/* Number and Orange Unit */}
              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-5xl sm:text-6xl font-display font-black text-[#111827] tracking-tight">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-mono-tech font-bold uppercase tracking-wider text-[#FF5500]">
                  {item.unit}
                </span>
              </div>

              {/* Black Label */}
              <div className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider text-[#111827]">
                {item.label}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
