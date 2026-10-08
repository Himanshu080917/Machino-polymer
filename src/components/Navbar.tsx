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
    { label: 'Innovation', href: '#quality' },
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
    <header className="w-full bg-[#EDF4F0] border-b border-[#D8E6DE] sticky top-0 z-50 transition-colors duration-200">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between">
        
        {/* Left: MPL Circular Dotted Logo + Brand Name */}
        <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none">
          <img
            src="/icons/logo-mpl.svg"
            alt="MPL Logo"
            className="w-9 h-9 shrink-0 transform group-hover:rotate-45 transition-transform duration-500"
          />
          <span className="text-[#111827] font-display font-black text-lg sm:text-xl tracking-tight">
            Machino Polymers Limited
          </span>
        </a>

        {/* Right Section: Navigation Links & CAPABILITIES Button */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-sm font-semibold text-[#1F2937] hover:text-[#FF5500] transition-colors flex items-center gap-1 group/link cursor-pointer"
              >
                <span>{link.label}</span>
                {link.hasArrow && (
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1F2937] group-hover/link:text-[#FF5500] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
            className="bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold tracking-[0.15em] text-xs px-6 py-3 rounded-none uppercase transition-colors shadow-sm focus:outline-none cursor-pointer"
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
        <div className="lg:hidden border-t border-[#D8E6DE] bg-[#EDF4F0] px-6 py-5 space-y-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#1F2937] hover:text-[#FF5500] flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                {link.hasArrow && <ArrowUpRight className="w-4 h-4 text-[#1F2937]" />}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
