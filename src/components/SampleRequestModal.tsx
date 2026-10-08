import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MATERIALS_DATA } from '../data/materialsData';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGrade?: string;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedGrade,
}) => {
  const [grade, setGrade] = useState(preselectedGrade || MATERIALS_DATA[0].gradeName);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [application, setApplication] = useState('Automotive Exterior Bumper');
  const [quantity, setQuantity] = useState('5 kg Trial Plaque Batch');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Update grade if preselectedGrade changes
  React.useEffect(() => {
    if (preselectedGrade) {
      setGrade(preselectedGrade);
    }
  }, [preselectedGrade]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket = `MPL-SAM-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newTicket);
    setIsSubmitted(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5500', '#10B981', '#1E293B', '#FFFFFF'],
      });
    } catch {
      // ignore
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#CBD5E1] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Ribbon */}
        <div className="p-6 bg-[#EDF4F0] border-b border-[#D8E6DE] relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white hover:bg-slate-100 text-[#64748B] hover:text-[#0F172A] shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
            <span className="text-xs font-mono-tech text-[#FF5500] uppercase tracking-wider font-bold">
              MIRAC Technical Sample Dispatch
            </span>
          </div>

          <h2 className="text-2xl font-display font-black text-[#0F172A]">
            Request Material Sample & TDS
          </h2>
          <p className="text-xs text-[#475569] mt-0.5">
            Test custom compounded Machino pellets in your mold & trial lab. Dispatched directly from Gurugram & Gujarat hubs.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A]">
                Sample Request Dispatched to MIRAC Team!
              </h3>
              <p className="text-xs text-[#475569] max-w-md mx-auto">
                Thank you, <strong className="text-[#0F172A]">{name || 'Partner'}</strong>. Your evaluation sample of <strong className="text-[#0F172A]">{grade}</strong> ({quantity}) has been registered under ticket:
              </p>
              <div className="inline-block p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] font-mono-tech text-base font-bold text-[#FF5500]">
                {ticketId}
              </div>
              <p className="text-[11px] text-[#64748B] max-w-sm mx-auto">
                A Machino Technical Application Engineer will review mold specs and dispatch the material Certificate of Analysis (CoA) within 24 hours to <strong className="text-[#0F172A]">{email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Material Grade Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold flex items-center justify-between">
                  <span>Selected Material Compound</span>
                  <span className="text-[#FF5500]">Required *</span>
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#FF5500] font-medium"
                  required
                >
                  {MATERIALS_DATA.map((mat) => (
                    <option key={mat.id} value={mat.gradeName} className="bg-white text-[#0F172A]">
                      {mat.gradeName} ({mat.category}) - {mat.reinforcement}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2-Column: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Gaurav Agrawal"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Company / OEM *</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Maruti Suzuki / Tier-1 Partner"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* 2-Column: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Corporate Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* 2-Column: Application & Sample Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Target Application</label>
                  <select
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="Automotive Exterior Bumper">Automotive Exterior Bumper</option>
                    <option value="Automotive Interior Trims & IP">Automotive Interior Trims & IP</option>
                    <option value="EV Battery Enclosure / Trays">EV Battery Enclosure / Trays</option>
                    <option value="Under-The-Hood Shrouds">Under-The-Hood Shrouds</option>
                    <option value="Home Appliance Outer Tub">Home Appliance Outer Tub</option>
                    <option value="Electrical Switchgear Box">Electrical Switchgear Box</option>
                    <option value="PlusCircular™ PCR Evaluation">PlusCircular™ PCR Evaluation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Sample Batch Size</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="5 kg Trial Plaque Batch">5 kg Trial Plaque Batch (Lab Testing)</option>
                    <option value="25 kg Standard Bag">25 kg Standard Bag (Mold Trial)</option>
                    <option value="100 kg Pilot Lot">100 kg Pilot Lot (Pre-production Run)</option>
                    <option value="Custom Compounding Discussion">Custom Formulation Discussion</option>
                  </select>
                </div>
              </div>

              {/* Mold Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-tech uppercase text-[#475569] font-bold">Specific Requirements / Target Specs</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention desired MFI, color masterbatch shade, filler %, or OEM specification (e.g., MSIL / Hyundai spec)..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] text-xs placeholder-[#94A3B8] focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sample Request to MIRAC Lab</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
