import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCapabilities?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCapabilities, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Materials', href: '#materials' },
    { label: 'Industries', href: '#industries' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Innovation', href: '#mirac' },
    { label: 'Contact', href: '#contact', hasArrow: true, isContact: true },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.isContact && onOpenContact) {
      e.preventDefault();
      onOpenContact();
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-[#EDF4F0] border-b border-[#D8E6DE] sticky top-0 z-50 transition-all duration-200">
      <div className="w-full max-w-[1920px] mx-auto px-[clamp(16px,4.7vw,90px)] min-h-[clamp(72px,6.5vw,125px)] py-2 sm:py-3 flex items-center justify-between">
        
        {/* Left: Official MPL Logo Mark + Live Wordmark */}
        <a href="#hero" className="flex items-center gap-[clamp(12px,1.8vw,35px)] group focus:outline-none shrink-0">
          <img
            src="/images/MPL LOGO.jpg"
            alt="Machino Polymers Limited logo"
            width={120}
            height={95}
            className="w-[clamp(56px,6.25vw,120px)] h-auto object-contain shrink-0 mix-blend-multiply"
          />
          <span className="text-[#0B0F1A] font-semibold text-[clamp(16px,1.15vw,22px)] leading-[1.2] tracking-normal whitespace-nowrap">
            <span className="hidden sm:inline">Machino Polymers Limited</span>
            <span className="sm:hidden">Machino Polymers</span>
          </span>
        </a>

        {/* Right Section: Navigation Links & CAPABILITIES Button */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          <nav className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-sm font-semibold text-[#1F2937] hover:text-[#FF5500] transition-colors flex items-center gap-1.5 group/link cursor-pointer"
              >
                <span>{link.label}</span>
                {link.hasArrow && (
                  <span className="text-sm text-[#1F2937] group-hover/link:text-[#FF5500] group-hover/link:translate-x-0.5 transition-transform font-bold">
                    →
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Solid Orange Rectangular Button (Square Corners) */}
          <button
            onClick={() => {
              if (onOpenCapabilities) {
                onOpenCapabilities();
              } else {
                const el = document.getElementById('future-cta') || document.getElementById('materials');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold tracking-[0.15em] text-xs px-6 py-3 rounded-none uppercase transition-colors shadow-sm focus:outline-none cursor-pointer shrink-0"
          >
            CAPABILITIES
          </button>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => {
              if (onOpenCapabilities) {
                onOpenCapabilities();
              } else {
                const el = document.getElementById('future-cta') || document.getElementById('materials');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#FF5500] text-white font-bold tracking-[0.15em] text-[11px] px-3.5 py-2 rounded-none uppercase"
          >
            CAPABILITIES
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111827] hover:bg-black/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8E6DE] bg-[#EDF4F0] px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-base font-semibold text-[#1F2937] hover:text-[#FF5500] flex items-center justify-between py-1.5 cursor-pointer"
              >
                <span>{link.label}</span>
                {link.hasArrow && <ArrowUpRight className="w-4 h-4 text-[#FF5500]" />}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
