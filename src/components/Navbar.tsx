import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, type NavLinkItem } from '../data/navLinks';

interface NavbarProps {
  onOpenCapabilities?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCapabilities, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close on click outside navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, link: NavLinkItem) => {
    setMobileMenuOpen(false);

    // Page Route Link (About Us, Company Overview)
    if (link.to) {
      return;
    }

    // Anchor Link (Materials, Industries, etc.)
    if (link.href) {
      e.preventDefault();

      if (link.isContact && onOpenContact) {
        onOpenContact();
        return;
      }

      const targetId = link.href.replace('#', '');

      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home with hash
        navigate(`/${link.href}`);
      }
    }
  };

  const handleCapabilitiesClick = () => {
    setMobileMenuOpen(false);
    if (onOpenCapabilities) {
      onOpenCapabilities();
    } else {
      if (location.pathname === '/') {
        const el = document.getElementById('future-materials') || document.getElementById('materials');
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#materials');
      }
    }
  };

  return (
    <header
      ref={navRef}
      className="w-full bg-[#EDF4F0] border-b border-[#D8E6DE] sticky top-0 z-50 transition-all duration-200"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[clamp(16px,4.5vw,90px)] h-[var(--nav-h)] flex items-center justify-between">
        
        {/* Left: Official MPL Logo Mark + Live Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-4 md:gap-[clamp(12px,1.5vw,30px)] group focus:outline-none shrink-0 min-h-[44px]"
        >
          <img
            src="/images/MPL LOGO.jpg"
            alt="Machino Polymers Limited logo"
            width={120}
            height={95}
            className="w-[44px] sm:w-[56px] lg:w-[clamp(56px,5.8vw,120px)] h-auto object-contain shrink-0 mix-blend-multiply"
          />
          <span className="text-[#0B0F1A] font-semibold text-sm sm:text-base lg:text-[clamp(15px,1.05vw,22px)] leading-[1.2] tracking-normal whitespace-nowrap truncate max-w-[170px] sm:max-w-none">
            <span className="hidden sm:inline">Machino Polymers Limited</span>
            <span className="sm:hidden">Machino Polymers</span>
          </span>
        </Link>

        {/* Right Section: Navigation Links & CAPABILITIES Button (Desktop >= 1100px) */}
        <div className="hidden min-[1100px]:flex items-center gap-[clamp(14px,1.6vw,32px)]">
          <nav className="flex items-center gap-[clamp(12px,1.6vw,32px)] whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = link.to ? location.pathname === link.to : false;

              if (link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-sm font-semibold transition-colors relative py-2 min-h-[44px] flex items-center cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#FF5500] after:absolute after:bottom-[6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#FF5500]'
                        : 'text-[#1F2937] hover:text-[#FF5500]'
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-sm font-semibold text-[#1F2937] hover:text-[#FF5500] transition-colors flex items-center gap-1.5 group/link cursor-pointer whitespace-nowrap py-2 min-h-[44px]"
                >
                  <span>{link.label}</span>
                  {link.hasArrow && (
                    <span className="text-sm text-[#1F2937] group-hover/link:text-[#FF5500] group-hover/link:translate-x-0.5 transition-transform font-bold">
                      →
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Solid Orange Rectangular Button (Square Corners) */}
          <button
            type="button"
            onClick={handleCapabilitiesClick}
            className="bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold tracking-[0.15em] text-xs px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-none uppercase transition-colors shadow-sm focus:outline-none cursor-pointer shrink-0 whitespace-nowrap flex items-center justify-center"
          >
            CAPABILITIES
          </button>
        </div>

        {/* Mobile / Tablet (< 1100px) Hamburger Button (44x44px minimum tap target) */}
        <div className="flex items-center min-[1100px]:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#111827] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Below the navbar, covers full height with body lock) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="min-[1100px]:hidden fixed top-[var(--nav-h)] left-0 right-0 bottom-0 bg-[#EDF4F0] border-t border-[#D8E6DE] z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = link.to ? location.pathname === link.to : false;

              if (link.to) {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-lg font-semibold min-h-[48px] px-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      isActive
                        ? 'text-[#FF5500] bg-[#FF5500]/10 font-bold'
                        : 'text-[#1F2937] hover:bg-black/5 hover:text-[#FF5500]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-lg font-semibold text-[#1F2937] hover:bg-black/5 hover:text-[#FF5500] min-h-[48px] px-3 rounded-lg flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  {link.hasArrow && <ArrowUpRight className="w-5 h-5 text-[#FF5500]" />}
                </a>
              );
            })}
          </nav>

          {/* CAPABILITIES Button Full Width at bottom of mobile menu */}
          <div className="pt-6 pb-2 border-t border-[#D8E6DE] mt-6">
            <button
              type="button"
              onClick={handleCapabilitiesClick}
              className="w-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold tracking-[0.15em] text-sm py-4 min-h-[52px] rounded-lg uppercase transition-colors shadow-md focus:outline-none cursor-pointer flex items-center justify-center"
            >
              CAPABILITIES
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
