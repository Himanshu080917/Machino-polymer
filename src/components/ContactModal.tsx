import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Factory } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-md animate-fade-in">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-[#F8FAF9] border border-[#E2E8F0] shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0] bg-white">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#FF5500] font-bold">
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Polymer Scientists</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Contact Dialog"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Headline */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0F172A] tracking-tight">
              START A <span className="text-[#FF5500]">CONVERSATION</span>
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5 leading-relaxed">
              Whether you need a custom polypropylene formulation, circular PCR integration, or technical data sheets, our application engineering team is at your service.
            </p>
          </div>

          {/* 2-Column: Direct Info + Quick Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Corporate & Plant Channels */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* HQ Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0F172A]">
                      Corporate Headquarters
                    </h3>
                    <p className="text-[11px] text-[#64748B]">
                      Machino Polymers Limited
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed pl-1">
                  Plot 41-43, Sector 32, Institutional Area, <br />
                  Gurugram - 122001, Haryana, India
                </p>

                <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5 text-xs">
                  <a
                    href="mailto:contact@machino.com"
                    className="flex items-center gap-2 text-[#334155] hover:text-[#FF5500] transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>sales@machino.com / contact@machino.com</span>
                  </a>
                  <a
                    href="tel:+911244710100"
                    className="flex items-center gap-2 text-[#334155] hover:text-[#FF5500] transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>+91 124 4710100 / +91 124 2381200</span>
                  </a>
                </div>
              </div>

              {/* Plants Quick List */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#64748B] uppercase tracking-wider font-bold">
                  <Factory className="w-4 h-4 text-[#FF5500]" />
                  <span>Manufacturing Units</span>
                </div>

                <div className="space-y-1.5 text-xs text-[#334155]">
                  <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                    <strong className="text-[#0F172A]">Gurugram Unit (HQ)</strong>
                    <span className="text-[#64748B]">Sector 32 &amp; Manesar</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                    <strong className="text-[#0F172A]">Gujarat Unit</strong>
                    <span className="text-[#64748B]">Sanand / Halol Corridor</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <strong className="text-[#0F172A]">Chennai Unit</strong>
                    <span className="text-[#64748B]">Sriperumbudur Hub</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-md">
                {formSent ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-300">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A]">
                      Inquiry Received!
                    </h3>
                    <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                      A Machino Application Engineer will contact you within 4 business hours to discuss your compound requirements.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="mt-3 px-5 py-2 rounded-md bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                      <h3 className="font-display font-bold text-base text-[#0F172A]">
                        Technical Consultation &amp; Inquiries
                      </h3>
                      <span className="text-[10px] font-mono-tech text-[#64748B] font-semibold">Response: &lt; 4 Hours</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-tech uppercase text-[#475569] font-bold">Name *</label>
                        <input
                          type="text"
                          required
                          autoFocus
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-tech uppercase text-[#475569] font-bold">Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="Company name"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-tech uppercase text-[#475569] font-bold">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-tech uppercase text-[#475569] font-bold">Inquiry Type</label>
                        <select className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#FF5500]">
                          <option value="automotive">Automotive OEM Specification</option>
                          <option value="circular">PlusCircular™ Recycled PP Integration</option>
                          <option value="appliance">Appliance / Flame Retardant Grade</option>
                          <option value="mirac">MIRAC Lab Testing &amp; Co-Development</option>
                          <option value="general">Bulk Procurement / Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono-tech uppercase text-[#475569] font-bold">Message / Technical Requirement</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us about the component, target polymer properties (MFI, Tensile, Izod, HDT), or existing challenges..."
                        className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to Application Engineers</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
