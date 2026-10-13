import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Lightbulb,
  Leaf,
  Users,
  Globe,
  Settings,
  Cpu,
  Layers,
  HeartPulse,
  Car,
  Package,
  Wrench,
  FlaskConical,
  Palette,
  Microscope,
  Boxes,
  Truck,
} from 'lucide-react';
import { aboutContent } from '../../data/aboutContent';
import { StatsBar } from './StatsBar';

interface CompanyOverviewSectionProps {
  onOpenContact?: () => void;
}

export const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({
  onOpenContact,
}) => {
  const content = aboutContent.companyOverview;
  const [currentSlide, setCurrentSlide] = useState(1); // Middle slide active by default per design
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance hero slides every 6s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.hero.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, content.hero.slides.length]);

  const handleContactClick = (e: React.MouseEvent) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getIndustryIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-[#111a2e] stroke-[1.5]";
    switch (name) {
      case 'Automotive':
        return <Car className={iconClass} />;
      case 'Electrical & Electronics':
        return <Cpu className={iconClass} />;
      case 'Industrial Applications':
        return <Wrench className={iconClass} />;
      case 'Consumer Goods':
        return <Boxes className={iconClass} />;
      case 'Packaging':
        return <Package className={iconClass} />;
      case 'Healthcare & Medical':
        return <HeartPulse className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  const getCapabilityIcon = (idx: number) => {
    const iconClass = "w-5 h-5 text-[#1e4fa3] stroke-[1.5]";
    switch (idx) {
      case 0:
        return <FlaskConical className={iconClass} />;
      case 1:
        return <Palette className={iconClass} />;
      case 2:
        return <Microscope className={iconClass} />;
      case 3:
        return <Layers className={iconClass} />;
      case 4:
        return <Truck className={iconClass} />;
      default:
        return <FlaskConical className={iconClass} />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    const iconClass = "w-10 h-10 text-[#111a2e] stroke-[1.5]";
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'lightbulb':
        return <Lightbulb className={iconClass} />;
      case 'leaf':
        return <Leaf className={iconClass} />;
      case 'people':
        return <Users className={iconClass} />;
      case 'globe':
        return <Globe className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section id="company-overview" className="w-full text-[#111a2e] scroll-mt-28">
      {/* =========================================================================
          B1. HERO SECTION (Full-bleed photo with hero slider)
          ========================================================================= */}
      <div
        className="w-full relative pt-6 sm:pt-10 pb-20 sm:pb-28 lg:pb-32 overflow-hidden bg-neutral-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Slide Images */}
        <div className="absolute inset-0 z-0">
          {content.hero.slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={slide.alt}
              width={1600}
              height={900}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-90' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}
          {/* White / Light Gradient on Left for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:via-white/70 sm:to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)] relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#4b5568] mb-8 sm:mb-12">
            {content.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-[#9aa3b2] text-xs">›</span>}
                <a
                  href={crumb.href}
                  className={`hover:text-[#111a2e] transition-colors ${
                    idx === content.breadcrumbs.length - 1 ? 'font-medium text-[#111a2e]' : ''
                  }`}
                >
                  {crumb.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, 3-line H1, Paragraph, CTA Buttons */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.hero.eyebrow}
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111a2e] leading-[1.08] tracking-tight">
                <div>{content.hero.titleLine1}</div>
                <div>{content.hero.titleLine2}</div>
                <div>{content.hero.titleLine3}</div>
              </h2>

              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] max-w-xl font-normal">
                {content.hero.paragraph}
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#materials"
                  className="inline-flex items-center justify-center gap-3 px-7 h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 shadow-sm cursor-pointer"
                >
                  <span>{content.hero.exploreButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Small caption with short dark bar above it */}
              <div className="pt-6 sm:pt-8">
                <div className="w-8 h-1 bg-[#111a2e] rounded-full mb-3" />
                <div className="text-xs sm:text-sm font-bold tracking-wider text-[#111a2e] uppercase">
                  {content.hero.tagline}
                </div>
              </div>
            </div>

            {/* Right Column Overlay Text (High Performance Polymers / Real World Possibilities) */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center">
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20 text-white text-left">
                <div className="w-[2px] h-12 bg-white shrink-0" />
                <div className="text-xs font-bold tracking-widest leading-relaxed uppercase">
                  {content.hero.sideBadge.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slider Indicators (Bottom Center: 3 bars, middle one active by default) */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {content.hero.slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? 'w-10 bg-[#111a2e]' : 'w-4 bg-[#111a2e]/30'
                }`}
              />
            ))}
          </div>

          {/* =========================================================================
              B2. STATS BAR (Floating card overlapping bottom of hero)
              ========================================================================= */}
          <div className="mt-12 sm:mt-16 lg:-mb-14 relative z-20">
            <StatsBar stats={content.stats} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          B3. WHAT WE MANUFACTURE
          ========================================================================= */}
      <section className="w-full bg-white pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.whatWeManufacture.eyebrow}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111a2e] leading-tight tracking-tight">
                {content.whatWeManufacture.title}
              </h3>
              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] pt-1">
                {content.whatWeManufacture.body}
              </p>
              <div className="pt-3">
                <a
                  href="#materials"
                  className="inline-flex items-center gap-3 px-7 h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 cursor-pointer"
                >
                  <span>{content.whatWeManufacture.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Pellets in Bowls + Frosted Overlay Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[14px] overflow-hidden shadow-lg aspect-[16/11] bg-neutral-100 group">
                <img
                  src={content.whatWeManufacture.image}
                  alt="Colorful polymer compound pellets"
                  width={680}
                  height={460}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Frosted White Card: ENGINEERED FOR PERFORMANCE */}
                <div className="absolute top-6 left-6 max-w-[270px] sm:max-w-[310px] bg-white/90 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-white/50 shadow-lg">
                  <div className="text-xs font-bold tracking-wider text-[#111a2e] uppercase mb-4">
                    {content.whatWeManufacture.cardTitle}
                  </div>
                  <ul className="space-y-2.5">
                    {content.whatWeManufacture.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111a2e]">
                        <CheckCircle2 className="w-4 h-4 text-[#1e4fa3] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B4. INDUSTRIES WE SERVE
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.industriesWeServe.eyebrow}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.industriesWeServe.title}
              </h3>
            </div>

            <a
              href="#industries"
              className="inline-flex items-center gap-2 px-6 h-[42px] rounded-[6px] border border-[#17213b] bg-white text-[#17213b] text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>{content.industriesWeServe.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 6 Cards Grid (6 on desktop, 3x2 on tablet, 2 per row on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {content.industriesWeServe.industries.map((ind, idx) => (
              <a
                key={idx}
                href={ind.anchor}
                className="bg-white rounded-[10px] border border-[#e5e8ee] overflow-hidden shadow-[0_6px_24px_rgba(16,24,40,0.06)] group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Image */}
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    width={240}
                    height={180}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Label + Icon + Small Circular Arrow Bottom Right */}
                <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="shrink-0">{getIndustryIcon(ind.title)}</span>
                    <span className="text-xs sm:text-sm font-bold text-[#111a2e] leading-tight truncate">
                      {ind.title}
                    </span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#4b5568] group-hover:bg-[#17213b] group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          B5. MANUFACTURING EXCELLENCE (Full-bleed split)
          ========================================================================= */}
      <section className="w-full bg-white border-b border-[#e5e8ee] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Factory Photo flush to page edge */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[460px] bg-neutral-900">
            <img
              src={content.manufacturingExcellence.image}
              alt="Stainless steel reactors and cleanroom manufacturing"
              width={750}
              height={550}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-left-bottom"
            />
          </div>

          {/* Right: Text + 4 Pillars */}
          <div className="lg:col-span-7 py-16 sm:py-24 px-[clamp(16px,4.5vw,80px)] flex flex-col justify-center space-y-6">
            <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
              {content.manufacturingExcellence.eyebrow}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#111a2e] leading-tight tracking-tight">
              <div>{content.manufacturingExcellence.titleLine1}</div>
              <div>{content.manufacturingExcellence.titleLine2}</div>
            </h3>

            <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] max-w-2xl font-normal">
              {content.manufacturingExcellence.body}
            </p>

            {/* 4 Icon items in a row with dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e8ee] border-t border-b border-[#e5e8ee] py-6 my-2">
              {content.manufacturingExcellence.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`text-center flex flex-col items-center justify-center p-3 ${
                    idx > 0 ? 'pt-4 sm:pt-0' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#1e4fa3] mb-2 border border-[#e5e8ee]">
                    <Settings className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#111a2e] leading-snug">
                    {pillar}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#manufacturing"
                className="inline-flex items-center gap-3 px-7 h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer"
              >
                <span>{content.manufacturingExcellence.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B6. OUR CORE CAPABILITIES (Light grey band, 3 columns)
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.coreCapabilities.eyebrow}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight leading-tight">
                {content.coreCapabilities.title}
              </h3>
              <p className="text-base text-[#4b5568] leading-[1.7]">
                {content.coreCapabilities.body}
              </p>
              <div className="pt-2">
                <a
                  href="#mirac"
                  className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer"
                >
                  <span>{content.coreCapabilities.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle Column: 5 rows list card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[12px] border border-[#e5e8ee] shadow-[0_6px_24px_rgba(16,24,40,0.06)] divide-y divide-[#e5e8ee] overflow-hidden">
                {content.coreCapabilities.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#f8fafc] transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-9 h-9 rounded-full bg-[#f3f5f9] flex items-center justify-center shrink-0">
                        {getCapabilityIcon(idx)}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#111a2e]">
                        {cap}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9aa3b2]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Gloved hand photo */}
            <div className="lg:col-span-3">
              <div className="relative rounded-[14px] overflow-hidden shadow-md aspect-[4/5] bg-neutral-100 group">
                <img
                  src={content.coreCapabilities.image}
                  alt="Gloved hand inspecting blue polymer compounds"
                  width={340}
                  height={425}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="text-xs font-bold tracking-widest text-white uppercase text-right leading-relaxed">
                    {content.coreCapabilities.imageBadge.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B7. WHY CHOOSE MACHINO
          ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="text-center space-y-2 mb-12 sm:mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
              {content.whyChooseMachino.eyebrow}
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
              {content.whyChooseMachino.title}
            </h3>
          </div>

          {/* 5 Items in one row separated by vertical dividers */}
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#e5e8ee] bg-[#f3f5f9] rounded-[14px] p-6 sm:p-10 border border-[#e5e8ee]">
            {content.whyChooseMachino.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-4 ${
                  idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-xs flex items-center justify-center text-[#111a2e] mb-4 border border-[#e5e8ee]">
                  {getWhyIcon(pillar.icon)}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#111a2e] leading-snug">
                  {pillar.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          B8. CTA BANNER (One continuous photo background across the whole banner)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden min-h-[clamp(260px,17vw,330px)] flex items-center py-[clamp(40px,3.5vw,56px)] bg-[#05140e]">
        {/* Continuous Photo Background covering the entire banner */}
        {/* TODO: Swap in hi-res 2400px leaf photo exported from Figma if available */}
        <img
          src={content.cta.image}
          alt="Lush glossy green leaves representing sustainable polymer breakthrough"
          width={2400}
          height={800}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none"
        />

        {/* Continuous Left-to-Right Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,20,14,0.92) 0%, rgba(5,20,14,0.70) 35%, rgba(5,20,14,0.15) 70%, rgba(5,20,14,0) 100%)',
          }}
        />

        {/* Content Block on the Left */}
        <div className="relative z-10 w-full max-w-[1480px] mx-auto px-[clamp(24px,4.5vw,90px)]">
          <div className="max-w-[760px] flex flex-col justify-center text-left">
            {/* Eyebrow: WHITE, uppercase, ~14px, letter-spacing 0.12em, font-weight 500 */}
            <div className="text-[14px] font-medium tracking-[0.12em] text-white uppercase">
              {content.cta.eyebrow}
            </div>

            {/* H2 on two lines: ~44px, weight 600-700, line-height 1.15, color #fff, normal sans */}
            <h2 className="text-[clamp(28px,2.4vw,46px)] font-bold text-white leading-[1.15] tracking-normal font-sans mt-3">
              <div>{content.cta.titleLine1}</div>
              <div>{content.cta.titleLine2}</div>
            </h2>

            {/* Sub: ~17px, color rgba(255,255,255,0.88), margin-top 16px */}
            <p className="text-[clamp(14px,0.95vw,18px)] text-white/88 mt-4 leading-relaxed font-normal font-sans">
              {content.cta.subtitle}
            </p>

            {/* Button "Get In Touch →": white bg, navy text (#17213b), radius 6px, height ~46px, padding 0 28px, font-weight 600, arrow on right; margin-top 28px */}
            <div className="mt-7">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 px-[28px] h-[46px] rounded-[6px] bg-white text-[#17213b] text-sm font-semibold hover:bg-[#f1f4f9] hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
              >
                <span>{content.cta.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
