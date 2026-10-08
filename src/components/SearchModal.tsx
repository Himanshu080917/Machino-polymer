import React, { useState, useEffect } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { type MaterialGrade, MATERIALS_DATA } from '../data/materialsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGrade: (grade: MaterialGrade) => void;
  onRequestSample: (gradeName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectGrade, onRequestSample }) => {
  const [query, setQuery] = useState('');

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = MATERIALS_DATA.filter((mat) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      mat.gradeName.toLowerCase().includes(q) ||
      mat.baseResin.toLowerCase().includes(q) ||
      mat.reinforcement.toLowerCase().includes(q) ||
      mat.category.toLowerCase().includes(q) ||
      mat.applications.some((a) => a.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl rounded-2xl bg-white border border-[#CBD5E1] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-[#E2E8F0] flex items-center gap-3 bg-[#F8FAF9]">
          <Search className="w-5 h-5 text-[#FF5500] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type grade name, application, resin or property..."
            className="w-full bg-transparent text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white hover:bg-slate-200 text-[#64748B] hover:text-[#0F172A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1.5 divide-y divide-[#F1F5F9]">
          {results.map((mat) => (
            <div
              key={mat.id}
              className="p-3 rounded-xl hover:bg-[#F8FAF9] transition-all flex items-center justify-between gap-3 group cursor-pointer"
              onClick={() => {
                onClose();
                onSelectGrade(mat);
              }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: mat.category.includes('Eco') ? '#10B981' : '#FF5500' }}
                  />
                  <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-[#FF5500] transition-colors">
                    {mat.gradeName}
                  </h4>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B] font-semibold">
                    {mat.category}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {mat.baseResin} • {mat.reinforcement}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                    onRequestSample(mat.gradeName);
                  }}
                  className="px-2.5 py-1 rounded-none bg-[#FF5500]/10 hover:bg-[#FF5500] text-[#FF5500] hover:text-white text-xs font-bold transition-colors"
                >
                  Sample
                </button>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0F172A] transition-colors" />
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="text-center py-8 text-xs text-[#64748B]">
              No material grades matched "{query}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F8FAF9] border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
          <span>Search 500+ Machino Polymer grades & TDS specs</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
