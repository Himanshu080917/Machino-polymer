import React, { useEffect } from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { KeyMetricsBar } from '../components/KeyMetricsBar';
import { MadeInIndiaSection } from '../components/MadeInIndiaSection';
import { GreenEarthSection } from '../components/GreenEarthSection';
import { IndustriesStrip } from '../components/IndustriesStrip';
import { ManufacturingTechSection } from '../components/ManufacturingTechSection';
import { PhotoBannerSection } from '../components/PhotoBannerSection';
import { MiracRDSection } from '../components/MiracRDSection';
import { QualityDisciplineSection } from '../components/QualityDisciplineSection';
import { FutureMaterialsCTA } from '../components/FutureMaterialsCTA';

interface HomeProps {
  onOpenSampleModal: (gradeName?: string) => void;
  onOpenContact: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenSampleModal, onOpenContact }) => {
  useEffect(() => {
    document.title = "Machino Polymers | The Plus Factor in Advanced Polymers & Compounding";
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-200">
      {/* 2. Hero 6-Stage Lifecycle Carousel */}
      <HeroSlider />

      {/* 3. Key Metrics Ticker Strip */}
      <KeyMetricsBar />

      {/* 4. Restored Made in India, Respected Worldwide */}
      <MadeInIndiaSection />

      {/* 5. Green Earth Circularity & GRS Certification */}
      <GreenEarthSection onOpenSampleModal={onOpenSampleModal} />

      {/* 6. Industries We Empower (7-Card Vertical Accordion) */}
      <IndustriesStrip />

      {/* 7. Manufacturing Excellence (Precision at Industrial Scale) */}
      <ManufacturingTechSection />

      {/* Stacked Panels Container */}
      <div className="stack-container stack">
        {/* 8. Full-Bleed Photo Banner */}
        <PhotoBannerSection />

        {/* 9. MIRAC R&D Center */}
        <MiracRDSection />

        {/* 10. Quality Management Systems */}
        <QualityDisciplineSection />

        {/* 11. Next-Gen Future Materials CTA Banner */}
        <FutureMaterialsCTA
          onOpenSampleModal={onOpenSampleModal}
          onOpenContact={onOpenContact}
        />
      </div>
    </div>
  );
};

export default Home;
