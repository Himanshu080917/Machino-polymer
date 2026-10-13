import React from 'react';

interface AboutSubNavProps {
  activeSection: 'about-us' | 'company-overview';
  onNavigate: (target: 'about-us' | 'company-overview') => void;
}

export const AboutSubNav: React.FC<AboutSubNavProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="sticky top-[var(--navbar-height,80px)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#e5e8ee] transition-all duration-200">
      <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)] py-2.5 flex items-center justify-between sm:justify-center">
        {/* Pill Container */}
        <div className="inline-flex items-center p-1 bg-[#f3f5f9] rounded-full border border-[#e5e8ee] shadow-xs">
          <button
            type="button"
            onClick={() => onNavigate('about-us')}
            className={`px-5 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'about-us'
                ? 'bg-[#111a2e] text-white shadow-sm'
                : 'text-[#4b5568] hover:text-[#111a2e]'
            }`}
            aria-current={activeSection === 'about-us' ? 'true' : 'false'}
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => onNavigate('company-overview')}
            className={`px-5 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'company-overview'
                ? 'bg-[#111a2e] text-white shadow-sm'
                : 'text-[#4b5568] hover:text-[#111a2e]'
            }`}
            aria-current={activeSection === 'company-overview' ? 'true' : 'false'}
          >
            Company Overview
          </button>
        </div>
      </div>
    </div>
  );
};
