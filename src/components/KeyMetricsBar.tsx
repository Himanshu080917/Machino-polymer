import React from 'react';

export const KeyMetricsBar: React.FC = () => {
  const tickerItems = [
    '150,000 MT ANNUAL CAPACITY',
    '30+ YEARS OF INDUSTRY LEADERSHIP',
    'TRUSTED BY 40+ OEMS',
    '500+ PRODUCT GRADES',
    'CIRCULAR ENGINEERING PIONEER',
  ];

  // Duplicate to form two identical halves for a 100% seamless translateX(-50%) loop
  const singleTrack = [...tickerItems, ...tickerItems];

  return (
    <section className="relative z-20 w-full bg-[#182C48] py-3 sm:py-4 overflow-hidden border-y border-[#1E3A5F] shadow-inner max-w-full select-none group">
      {/* Edge gradient fades for a high-end smooth entrance/exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#182C48] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#182C48] to-transparent z-10" />

      {/* Moving Marquee Track across all viewports (with hover pause) */}
      <div className="w-full overflow-hidden flex">
        <div className="flex items-center gap-6 sm:gap-8 shrink-0 animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform pr-6 sm:pr-8">
          {singleTrack.concat(singleTrack).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 text-white font-mono-tech text-xs sm:text-[13px] tracking-[0.12em] sm:tracking-[0.14em] font-bold whitespace-nowrap shrink-0"
            >
              <span className="hover:text-[#FF5500] transition-colors">{item}</span>
              <span className="text-[#FF5500] font-black text-xs sm:text-sm select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
