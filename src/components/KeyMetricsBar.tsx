import React from 'react';

export const KeyMetricsBar: React.FC = () => {
  const tickerItems = [
    '150,000 MT ANNUAL CAPACITY',
    '30+ YEARS OF INDUSTRY LEADERSHIP',
    'TRUSTED BY 40+ OEMS',
    '500+ PRODUCT GRADES',
    'CIRCULAR ENGINEERING PIONEER',
  ];

  return (
    <section className="relative z-20 w-full bg-[#182C48] py-3.5 sm:py-4 overflow-hidden border-y border-[#1E3A5F] shadow-inner">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-center sm:text-left">
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 text-white font-mono-tech text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] font-bold"
            >
              <span className="hover:text-[#FF5500] transition-colors whitespace-nowrap">{item}</span>
              {idx < tickerItems.length - 1 && (
                <span className="text-[#FF5500] font-black text-xs hidden sm:inline">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
