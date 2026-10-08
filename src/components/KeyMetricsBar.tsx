import React from 'react';

export const KeyMetricsBar: React.FC = () => {
  const tickerItems = [
    '150,000 MT ANNUAL CAPACITY',
    '30+ YEARS OF INDUSTRY LEADERSHIP',
    'TRUSTED BY 40+ GLOBAL OEMS',
    '500+ SPECIALIZED PRODUCT GRADES',
    'CIRCULAR ENGINEERING PIONEER',
    'IATF 16949 & GRS CERTIFIED',
  ];

  return (
    <section className="relative z-20 w-full bg-[#FFFFFF] border-y border-[#E2E8F0] py-4 overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-center sm:text-left">
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-[#334155] font-mono-tech text-xs sm:text-[13px] tracking-wider font-semibold"
            >
              <span className="hover:text-[#FF5500] transition-colors">{item}</span>
              {idx < tickerItems.length - 1 && (
                <span className="text-[#FF5500] font-bold text-sm hidden lg:inline">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
