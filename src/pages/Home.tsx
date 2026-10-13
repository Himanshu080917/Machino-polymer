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
    <div className="w-full">
      {/* 2. Hero 6-Stage Lifecycle Carousel */}
      <div id="materials" className="scroll-mt-[var(--nav-h)] h-0 w-full pointer-events-none" />
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

      {/* Innovation / MIRAC Reliable Scroll Anchor immediately before .mirac-stack */}
      <div id="innovation" style={{ scrollMarginTop: 'var(--nav-h)' }} className="scroll-mt-[var(--nav-h)] h-0 w-full pointer-events-none" />
      <div id="mirac" style={{ scrollMarginTop: 'var(--nav-h)' }} className="scroll-mt-[var(--nav-h)] h-0 w-full pointer-events-none" />

      {/* 8 & 9. Stacked Panels Container (MIRAC overlaying Magnific Banner ONLY) */}
      <div className="mirac-stack relative w-full">
        {/* Base Panel: Magnific Banner pinned while MIRAC slides over */}
        <PhotoBannerSection />

        {/* Overlay Panel: MIRAC Section with rounded top & shadow */}
        <MiracRDSection />
      </div>

      {/* 10. Quality Management Systems (Normal document flow - no overlay effect) */}
      <QualityDisciplineSection />

      {/* 11. Next-Gen Future Materials CTA Banner (Normal document flow - no overlay effect) */}
      <FutureMaterialsCTA
        onOpenSampleModal={onOpenSampleModal}
        onOpenContact={onOpenContact}
      />
    </div>
  );
};

export default Home;
