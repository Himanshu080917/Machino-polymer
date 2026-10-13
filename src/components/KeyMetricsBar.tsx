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
    <section className="relative z-20 w-full bg-[#182C48] py-3 sm:py-4 overflow-hidden border-y border-[#1E3A5F] shadow-inner max-w-full">
      {/* Desktop / Large Screen Layout (>= 1024px) - Exact previous design untouched */}
      <div className="hidden lg:block w-full max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-x-6 text-left">
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 lg:gap-6 text-white font-mono-tech text-xs lg:text-[13px] tracking-[0.14em] font-bold"
            >
              <span className="hover:text-[#FF5500] transition-colors whitespace-nowrap">{item}</span>
              {idx < tickerItems.length - 1 && (
                <span className="text-[#FF5500] font-black text-xs">•</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Continuous Smooth Marquee (< 1024px) */}
      <div className="lg:hidden w-full overflow-hidden flex select-none">
        <div className="flex items-center gap-6 shrink-0 animate-[marquee_28s_linear_infinite] will-change-transform pr-6">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-white font-mono-tech text-[11px] tracking-[0.08em] font-bold whitespace-nowrap"
            >
              <span className="hover:text-[#FF5500] transition-colors">{item}</span>
              <span className="text-[#FF5500] font-bold text-[10px]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
