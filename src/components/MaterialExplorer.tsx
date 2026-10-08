import React, { useState, useMemo } from 'react';
import { Search, Layers, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { type MaterialGrade, MATERIALS_DATA } from '../data/materialsData';
import { MaterialModal } from './MaterialModal';

interface MaterialExplorerProps {
  onOpenSampleModal: (gradeName?: string) => void;
}

export const MaterialExplorer: React.FC<MaterialExplorerProps> = ({ onOpenSampleModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialGrade | null>(null);

  const categories = ['All', 'Polypropylene (PP)', 'PlusCircular™ (Eco)', 'Engineered Plastics', 'High Performance Blends'];

  const filteredMaterials = useMemo(() => {
    return MATERIALS_DATA.filter((m) => {
      const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.gradeName.toLowerCase().includes(q) ||
        m.baseResin.toLowerCase().includes(q) ||
        m.reinforcement.toLowerCase().includes(q) ||
        m.applications.some((app) => app.toLowerCase().includes(q)) ||
        m.features.some((feat) => feat.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="materials" className="py-24 bg-[#F1F6F3] relative bg-dot-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8E6DE] text-xs font-mono-tech text-[#475569]">
              <Layers className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Advanced Polymer Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight">
              ENGINEERED <span className="text-[#FF5500]">MATERIAL GRADES</span>
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base">
              Explore 500+ customized polypropylene compounds, GRS certified recycled formulations, and high-performance engineering thermoplastics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenSampleModal()}
              className="px-5 py-2.5 rounded-none bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Custom Compound</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-[#D8E6DE] shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by grade, resin, filler, or application..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs focus:outline-none focus:border-[#FF5500] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#0F172A]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#FF5500] text-white shadow-sm'
                        : 'bg-[#F1F5F3] text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="rounded-2xl bg-white light-panel-hover p-6 flex flex-col justify-between group border border-[#E2E8F0] relative overflow-hidden shadow-sm"
            >
              {/* Category indicator line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: mat.category.includes('Eco') ? '#10B981' : '#FF5500' }}
              />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold uppercase tracking-wider bg-[#F1F5F9] text-[#475569]"
                  >
                    {mat.category}
                  </span>
                  {mat.recycledContent && (
                    <span className="text-[10px] font-mono-tech text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                      {mat.recycledContent}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-[#0F172A] group-hover:text-[#FF5500] transition-colors">
                  {mat.gradeName}
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  {mat.baseResin} • {mat.reinforcement}
                </p>

                {/* Technical Quick Spec Strip */}
                <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-[#F8FAF9] border border-[#E2E8F0] text-center">
                  <div>
                    <div className="text-[10px] font-mono-tech text-[#64748B] uppercase font-semibold">MFI</div>
                    <div className="text-xs font-bold text-[#0F172A] mt-0.5">{mat.mfi}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tech text-[#64748B] uppercase font-semibold">Flex Mod</div>
                    <div className="text-xs font-bold text-[#0F172A] mt-0.5">{mat.flexuralModulus}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tech text-[#64748B] uppercase font-semibold">HDT</div>
                    <div className="text-xs font-bold text-[#0F172A] mt-0.5">{mat.hdt}</div>
                  </div>
                </div>

                {/* Features tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mat.features.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[11px] text-[#475569] border border-[#E2E8F0]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedMaterial(mat)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#FF5500] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>View TDS Specs</span>
                </button>

                <button
                  onClick={() => onOpenSampleModal(mat.gradeName)}
                  className="px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-[#FF5500] text-[#334155] hover:text-white text-xs font-semibold transition-all flex items-center gap-1"
                >
                  <span>Sample</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[#64748B] text-sm">
              No matching material grades found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#FF5500] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* TDS Modal */}
      <MaterialModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onRequestSample={(gradeName) => onOpenSampleModal(gradeName)}
      />
    </section>
  );
};
