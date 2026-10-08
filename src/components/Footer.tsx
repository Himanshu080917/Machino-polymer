import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070B14] text-[#9CA3AF] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main 4-Column Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-white/10">
          
          {/* Left Column: Big Circular Swirl Logo + Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-3">
              <img
                src="/icons/logo-mpl.svg"
                alt="Machino Polymers Limited Logo"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <h3 className="text-white font-display font-black text-lg sm:text-xl tracking-tight">
                Machino Polymers Limited
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              A global advanced materials and circular engineering company. Engineering better materials for a sustainable world.
            </p>
          </div>

          {/* Col 1: COMPANY */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              COMPANY
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#9CA3AF]">
              <li><a href="#about" className="hover:text-[#FF5500] transition-colors">About Us</a></li>
              <li><a href="#materials" className="hover:text-[#FF5500] transition-colors">Materials</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Industries</a></li>
              <li><a href="#sustainability" className="hover:text-[#FF5500] transition-colors">Sustainability</a></li>
              <li><a href="#mirac" className="hover:text-[#FF5500] transition-colors">Research</a></li>
            </ul>
          </div>

          {/* Col 2: INDUSTRIES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              INDUSTRIES
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#9CA3AF]">
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Automotive</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">White Goods and Appliances</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Consumer Goods</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Packaging</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Electric and Electronics</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Hygiene and Medical</a></li>
              <li><a href="#industries" className="hover:text-[#FF5500] transition-colors">Applications</a></li>
            </ul>
          </div>

          {/* Col 3: CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white font-bold">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#9CA3AF]">
              <div>
                <a href="mailto:info@machinopolymers.com" className="hover:text-[#FF5500] transition-colors">
                  info@machinopolymers.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-white/90">
                <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
                <a href="tel:+911234567890" className="hover:text-[#FF5500] transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed pt-1 max-w-xs">
                Plot No. 2, Sector 33, Delhi Jaipur Highway, Gurgaon – 122001, India.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright left, PRIVACY / TERMS & Scroll to Top right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © 2026 Machino Polymers Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 font-mono-tech uppercase tracking-wider">
            <a href="#privacy" className="hover:text-white transition-colors">
              PRIVACY
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              TERMS
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#FF5500] transition-colors cursor-pointer ml-2"
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
