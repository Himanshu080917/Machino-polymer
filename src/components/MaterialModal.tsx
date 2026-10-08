import React from 'react';
import { X, Sparkles, Download, CheckCircle2, ShieldCheck, Layers, Factory } from 'lucide-react';
import { type MaterialGrade } from '../data/materialsData';

interface MaterialModalProps {
  material: MaterialGrade | null;
  onClose: () => void;
  onRequestSample: (gradeName: string) => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({ material, onClose, onRequestSample }) => {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="p-6 sm:p-8 bg-[#EDF4F0] border-b border-[#D8E6DE] relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white hover:bg-slate-100 text-[#64748B] hover:text-[#0F172A] transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider bg-white text-[#0F172A] border border-[#D8E6DE]"
            >
              {material.category}
            </span>
            {material.recycledContent && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-emerald-100 text-emerald-800 font-bold">
                {material.recycledContent}
              </span>
            )}
            {material.flammability && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-purple-100 text-purple-800 font-bold">
                {material.flammability}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-[#0F172A]">
            {material.gradeName}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            Base Polymer: <strong className="text-[#0F172A]">{material.baseResin}</strong> | Reinforcement: <strong className="text-[#0F172A]">{material.reinforcement}</strong>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Mechanical & Physical Properties Table */}
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#FF5500] font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technical Data Specification (TDS) Matrix</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Melt Flow Index (MFI)</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.mfi}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">g/10 min (230°C / 2.16kg)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Tensile Strength</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.tensileStrength}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">ISO 527 (50 mm/min)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Flexural Modulus</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.flexuralModulus}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">ISO 178 (2 mm/min)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Izod Impact (Notched)</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.izodImpact}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">ISO 180/1A (at 23°C)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Heat Deflection (HDT)</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.hdt}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">ISO 75 (0.45 MPa)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
                <div className="text-[11px] font-mono-tech text-[#64748B] uppercase font-semibold">Specific Density</div>
                <div className="text-base font-display font-bold text-[#0F172A] mt-1">{material.density}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono-tech">ISO 1183 (23°C)</div>
              </div>
            </div>
          </div>

          {/* Key Features & Performance Advantages */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#475569] font-bold mb-2.5">
              Formulation Features & Processing Edge
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {material.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications & OEM Approvals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#475569] font-bold mb-2">
                Target Applications
              </h4>
              <ul className="space-y-1.5 text-xs text-[#334155]">
                {material.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0]">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#475569] font-bold mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>OEM Specs & Validations</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {material.oemApprovals.map((oem, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-white text-[11px] text-[#0F172A] border border-[#E2E8F0] font-medium">
                    {oem}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#F8FAF9] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-[#64748B] flex items-center gap-1.5">
            <Factory className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Manufactured at Gurugram, Gujarat & Chennai Facilities</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                alert(`Technical Data Sheet (TDS) for ${material.gradeName} downloaded.`);
              }}
              className="px-4 py-2.5 rounded-none bg-white hover:bg-slate-100 border border-[#CBD5E1] text-[#0F172A] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF TDS</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestSample(material.gradeName);
              }}
              className="px-5 py-2.5 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Sample Batch</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
