import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { KeyMetricsBar } from './components/KeyMetricsBar';
import { MadeInIndiaSection } from './components/MadeInIndiaSection';
import { GreenEarthSection } from './components/GreenEarthSection';
import { IndustriesStrip } from './components/IndustriesStrip';
import { ManufacturingTechSection } from './components/ManufacturingTechSection';
import { PhotoBannerSection } from './components/PhotoBannerSection';
import { QualityDisciplineSection } from './components/QualityDisciplineSection';
import { MaterialExplorer } from './components/MaterialExplorer';
import { MiracRDSection } from './components/MiracRDSection';
import { ManufacturingFootprint } from './components/ManufacturingFootprint';
import { FutureMaterialsCTA } from './components/FutureMaterialsCTA';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedSampleGrade, setSelectedSampleGrade] = useState<string | undefined>(undefined);

  const handleOpenSampleModal = (gradeName?: string) => {
    setSelectedSampleGrade(gradeName);
    setIsSampleModalOpen(true);
  };

  const handleExploreMaterials = () => {
    const el = document.getElementById('materials') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0F172A] flex flex-col selection:bg-[#FF5500] selection:text-white">
      
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenCapabilities={handleExploreMaterials}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero 6-Stage Lifecycle Carousel */}
        <HeroSlider />

        {/* 3. Key Metrics Ticker Strip */}
        <KeyMetricsBar />

        {/* 4. Made in India, Respected Worldwide (The Plus Factor Philosophy) */}
        <MadeInIndiaSection
          onExploreStory={() => {
            const el = document.getElementById('mirac');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Green Earth Circularity & GRS Certification */}
        <GreenEarthSection
          onOpenSampleModal={handleOpenSampleModal}
        />

        {/* 6. Industries We Empower (7-Card Vertical Accordion) */}
        <IndustriesStrip
          onSelectIndustry={() => {
            handleExploreMaterials();
          }}
        />

        {/* 7. Manufacturing Excellence (Precision at Industrial Scale) */}
        <ManufacturingTechSection />

        {/* 7.1 Full-Bleed Photo Banner (Mid-Page Break) */}
        <PhotoBannerSection />

        {/* 8. Total Quality Management (Quality is a Discipline) */}
        <QualityDisciplineSection />

        {/* 9. Advanced Materials & Grades Catalog */}
        <MaterialExplorer
          onOpenSampleModal={handleOpenSampleModal}
        />

        {/* 10. MIRAC R&D Center & Testing Laboratory */}
        <MiracRDSection />

        {/* 11. Manufacturing Footprint Across India */}
        <ManufacturingFootprint />

        {/* 12. Next-Gen Future Materials CTA Banner */}
        <FutureMaterialsCTA
          onOpenSampleModal={handleOpenSampleModal}
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Global Cmd+K Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGrade={() => {
          handleExploreMaterials();
        }}
        onRequestSample={handleOpenSampleModal}
      />

      {/* Sample Request & RFQ Modal */}
      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        preselectedGrade={selectedSampleGrade}
      />

      {/* Interactive Start a Conversation / Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}

export default App;
