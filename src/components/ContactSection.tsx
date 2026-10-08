import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Factory } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAF9] relative bg-tech-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs font-mono-tech text-[#FF5500] font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Polymer Scientists</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
            START A <span className="text-[#FF5500]">CONVERSATION</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            Whether you need a custom polypropylene formulation, circular PCR integration, or technical data sheets, our application engineering team is at your service.
          </p>
        </div>

        {/* 2-Column: Direct Info + Quick Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Corporate & Plant Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* HQ Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#0F172A]">
                    Corporate Headquarters
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Machino Polymers Limited
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed pl-1">
                Plot 41-43, Sector 32, Institutional Area, <br />
                Gurugram - 122001, Haryana, India
              </p>

              <div className="pt-2 border-t border-[#E2E8F0] space-y-2 text-xs">
                <a
                  href="mailto:contact@machino.com"
                  className="flex items-center gap-2.5 text-[#334155] hover:text-[#FF5500] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#FF5500]" />
                  <span>sales@machino.com / contact@machino.com</span>
                </a>
                <a
                  href="tel:+911244710100"
                  className="flex items-center gap-2.5 text-[#334155] hover:text-[#FF5500] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#FF5500]" />
                  <span>+91 124 4710100 / +91 124 2381200</span>
                </a>
              </div>
            </div>

            {/* Plants Quick List */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#64748B] uppercase tracking-wider font-bold">
                <Factory className="w-4 h-4 text-[#FF5500]" />
                <span>Manufacturing Units</span>
              </div>

              <div className="space-y-2 text-xs text-[#334155]">
                <div className="flex justify-between py-1.5 border-b border-[#F1F5F9]">
                  <strong className="text-[#0F172A]">Gurugram Unit (HQ)</strong>
                  <span className="text-[#64748B]">Sector 32 & Manesar, Haryana</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F1F5F9]">
                  <strong className="text-[#0F172A]">Gujarat Unit</strong>
                  <span className="text-[#64748B]">Sanand / Halol Auto Corridor</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F1F5F9]">
                  <strong className="text-[#0F172A]">Chennai Unit</strong>
                  <span className="text-[#64748B]">Sriperumbudur Hub, Tamil Nadu</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-lg">
              {formSent ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A]">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                    A Machino Application Engineer will contact you within 4 business hours to discuss your compound requirements.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-4 px-5 py-2 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                    <h3 className="font-display font-bold text-lg text-[#0F172A]">
                      Technical Consultation & Inquiries
                    </h3>
                    <span className="text-[10px] font-mono-tech text-[#64748B] font-semibold">Response: &lt; 4 Hours</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Name *</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Inquiry Type</label>
                      <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#FF5500]">
                        <option value="automotive">Automotive OEM Specification</option>
                        <option value="circular">PlusCircular™ Recycled PP Integration</option>
                        <option value="appliance">Appliance / Flame Retardant Grade</option>
                        <option value="mirac">MIRAC Lab Testing & Co-Development</option>
                        <option value="general">Bulk Procurement / Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Message / Technical Requirement</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the component, target polymer properties (MFI, Tensile, Izod, HDT), or existing challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
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
    </section>
  );
};
