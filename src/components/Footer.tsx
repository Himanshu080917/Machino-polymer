import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-40 w-full bg-[#070B14] text-[#9CA3AF] border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12">
        
        {/* Main Columns Grid: 1 col on mobile, 2 on tablet, 12-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          
          {/* Brand Info & Logo (Always Top / Left) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <div className="space-y-3">
              <img
                src="/images/MPL LOGO.jpg"
                alt="Machino Polymers Limited Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-white p-1"
              />
              <h3 className="text-white font-display font-black text-lg sm:text-xl tracking-tight">
                Machino Polymers Limited
              </h3>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              A global advanced materials and circular engineering company. Engineering better materials for a sustainable world.
            </p>
          </div>

          {/* Col 1: COMPANY */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              COMPANY
            </h4>
            <ul className="space-y-1 text-sm text-[#9CA3AF]">
              <li>
                <Link to="/about" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/company-overview" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Company Overview
                </Link>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Materials
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Industries
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#mirac" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: INDUSTRIES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              INDUSTRIES
            </h4>
            <ul className="space-y-1 text-sm text-[#9CA3AF]">
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  White Goods and Appliances
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Consumer Goods
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Packaging
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Electric and Electronics
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  Hygiene and Medical
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              CONTACT
            </h4>
            <div className="space-y-2 text-sm text-[#9CA3AF]">
              <div>
                <a href="mailto:info@machinopolymers.com" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  info@machinopolymers.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <ArrowRight className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href="tel:+911234567890" className="hover:text-[#FF5500] transition-colors min-h-[44px] flex items-center">
                  +91 123 456 7890
                </a>
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed pt-1 max-w-xs">
                Plot No. 2, Sector 33, Delhi Jaipur Highway, Gurgaon – 122001, India.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright left, PRIVACY / TERMS & Scroll to Top right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6B7280] text-center sm:text-left">
          <div>
            © 2026 Machino Polymers Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 font-mono-tech uppercase tracking-wider">
            <a href="#privacy" className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              PRIVACY
            </a>
            <a href="#terms" className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              TERMS
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#FF5500] transition-colors cursor-pointer min-h-[44px] px-2"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
