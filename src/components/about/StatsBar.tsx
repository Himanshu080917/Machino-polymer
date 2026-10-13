import React, { useEffect, useRef, useState } from 'react';
import { Settings, Globe, Factory, Users } from 'lucide-react';
import type { StatItem } from '../../data/aboutContent';

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats, className = '' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts(stats.map((s) => s.value));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => Math.round(s.value * easeOutProgress))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(stats.map((s) => s.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  const renderIcon = (type: StatItem['iconType']) => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 text-[#17213b] stroke-[1.5]";
    switch (type) {
      case 'gear':
        return <Settings className={iconClass} />;
      case 'globe':
        return <Globe className={iconClass} />;
      case 'factory':
        return <Factory className={iconClass} />;
      case 'people':
        return <Users className={iconClass} />;
      default:
        return <Settings className={iconClass} />;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full bg-white rounded-[12px] border border-[#e5e8ee] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-6 sm:p-8 lg:p-10 relative z-20 ${className}`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#e5e8ee]">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 sm:gap-5 ${
              idx % 2 === 1 ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'
            } ${idx >= 2 ? 'pt-6 lg:pt-0' : 'pb-6 lg:pb-0'} ${
              idx > 0 && idx % 2 === 0 ? 'lg:pl-8' : ''
            }`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f3f5f9] flex items-center justify-center shrink-0 border border-[#e5e8ee]/80">
              {renderIcon(item.iconType)}
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#111a2e] leading-none tracking-tight font-sans">
                {counts[idx]}
                {item.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#4b5568] mt-1.5 leading-snug">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
