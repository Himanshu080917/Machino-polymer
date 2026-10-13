import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [currentSlide, setCurrentSlide] = useState(1);
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
      window.location.href = '/#contact';
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
          B1. HERO SECTION (Full-bleed photo with hero slider & readable mobile overlay)
          ========================================================================= */}
      <div
        className="w-full relative pt-6 sm:pt-10 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-neutral-900"
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
          {/* Legible Overlay: Top-to-bottom white gradient on mobile <768px, left-to-right on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/75 sm:bg-gradient-to-r sm:from-white sm:via-white/85 sm:to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[clamp(16px,4.5vw,90px)] relative z-10">
          {/* Breadcrumbs: Home > About Us > Company Overview */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#4b5568] mb-6 sm:mb-10">
            <Link to="/" className="hover:text-[#111a2e] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              Home
            </Link>
            <span className="text-[#9aa3b2] text-xs">›</span>
            <Link to="/about" className="hover:text-[#111a2e] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              About Us
            </Link>
            <span className="text-[#9aa3b2] text-xs">›</span>
            <span className="font-medium text-[#111a2e] min-h-[44px] flex items-center">
              Company Overview
            </span>
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, 3-line H1, Paragraph, CTA Buttons */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7">
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.hero.eyebrow}
              </div>

              <h1 className="text-[clamp(30px,5.5vw,56px)] font-bold text-[#111a2e] leading-[1.08] tracking-tight">
                <div>{content.hero.titleLine1}</div>
                <div>{content.hero.titleLine2}</div>
                <div>{content.hero.titleLine3}</div>
              </h1>

              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] max-w-xl font-normal">
                {content.hero.paragraph}
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#materials"
                  className="inline-flex items-center justify-center gap-3 px-7 min-h-[48px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  <span>{content.hero.exploreButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Tagline */}
              <div className="pt-4 sm:pt-6">
                <div className="w-8 h-1 bg-[#111a2e] rounded-full mb-2.5" />
                <div className="text-xs sm:text-sm font-bold tracking-wider text-[#111a2e] uppercase">
                  {content.hero.tagline}
                </div>
              </div>
            </div>

            {/* Right Column Overlay Text (Hidden on < 768px, visible on >= 768px) */}
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

          {/* Slider Indicators (Bottom Center) */}
          <div className="flex items-center justify-center gap-1 mt-8 sm:mt-12">
            {content.hero.slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer p-2"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-10 bg-[#111a2e]' : 'w-4 bg-[#111a2e]/30'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* =========================================================================
              B2. STATS BAR (Below hero as 2x2 on mobile, 4x1 on desktop)
              ========================================================================= */}
          <div className="mt-8 sm:mt-12 lg:-mb-14 relative z-20">
            <StatsBar stats={content.stats} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          B3. WHAT WE MANUFACTURE
          ========================================================================= */}
      <section className="w-full bg-white pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.whatWeManufacture.eyebrow}
              </div>
              <h2 className="text-[clamp(28px,4.5vw,40px)] font-bold text-[#111a2e] leading-tight tracking-tight">
                {content.whatWeManufacture.title}
              </h2>
              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] pt-1">
                {content.whatWeManufacture.body}
              </p>
              <div className="pt-2">
                <a
                  href="#materials"
                  className="inline-flex items-center justify-center gap-3 px-7 min-h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 cursor-pointer w-full sm:w-auto"
                >
                  <span>{content.whatWeManufacture.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Pellets in Bowls + Frosted Card (Below photo on mobile, overlay on desktop) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-[14px] overflow-hidden shadow-lg aspect-[16/11] bg-neutral-100 group">
                <img
                  src={content.whatWeManufacture.image}
                  alt="Colorful polymer compound pellets"
                  width={680}
                  height={460}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Frosted White Card on Desktop / Tablet (>= sm screens) */}
                <div className="hidden sm:block absolute top-6 left-6 max-w-[310px] bg-white/90 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-white/50 shadow-lg">
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

              {/* Mobile Card Below Photo (< sm screens, not overlapping) */}
              <div className="sm:hidden bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold tracking-wider text-[#111a2e] uppercase mb-3">
                  {content.whatWeManufacture.cardTitle}
                </div>
                <ul className="space-y-2.5">
                  {content.whatWeManufacture.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#111a2e]">
                      <CheckCircle2 className="w-4 h-4 text-[#1e4fa3] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B4. INDUSTRIES WE SERVE
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-16 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[clamp(16px,4.5vw,90px)]">
          {/* Header Row: Button below heading on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.industriesWeServe.eyebrow}
              </div>
              <h2 className="text-[clamp(28px,4.5vw,40px)] font-bold text-[#111a2e] tracking-tight">
                {content.industriesWeServe.title}
              </h2>
            </div>

            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] rounded-[6px] border border-[#17213b] bg-white text-[#17213b] text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>{content.industriesWeServe.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 6 Cards Grid (6 on desktop, 3x2 on tablet, 2 per row on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
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

                {/* Label + Icon (No truncate, wraps naturally without clipping) */}
                <div className="p-3 sm:p-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="shrink-0">{getIndustryIcon(ind.title)}</span>
                    <span className="text-xs sm:text-sm font-bold text-[#111a2e] leading-snug">
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
          B5. MANUFACTURING EXCELLENCE (Photo top on mobile at 16:10, text below)
          ========================================================================= */}
      <section className="w-full bg-white border-b border-[#e5e8ee] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Photo: Top on mobile at 16:10, Left on desktop */}
          <div className="order-1 lg:order-none lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] bg-neutral-900">
            <img
              src={content.manufacturingExcellence.image}
              alt="Stainless steel reactors and cleanroom manufacturing"
              width={750}
              height={550}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-left-bottom"
            />
          </div>

          {/* Text + 4 Pillars below */}
          <div className="order-2 lg:order-none lg:col-span-7 py-12 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-[clamp(16px,4.5vw,80px)] flex flex-col justify-center space-y-6">
            <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
              {content.manufacturingExcellence.eyebrow}
            </div>

            <h2 className="text-[clamp(28px,4.5vw,40px)] font-bold text-[#111a2e] leading-tight tracking-tight">
              <div>{content.manufacturingExcellence.titleLine1}</div>
              <div>{content.manufacturingExcellence.titleLine2}</div>
            </h2>

            <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] max-w-2xl font-normal">
              {content.manufacturingExcellence.body}
            </p>

            {/* 4 Icon items in 2x2 grid on mobile, 4 in row on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-b border-[#e5e8ee] py-5 my-2">
              {content.manufacturingExcellence.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="text-center flex flex-col items-center justify-center p-3"
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
                className="inline-flex items-center justify-center gap-3 px-7 min-h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>{content.manufacturingExcellence.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B6. OUR CORE CAPABILITIES (Stacked: text, list card rows >=56px, then photo)
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-16 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.coreCapabilities.eyebrow}
              </div>
              <h2 className="text-[clamp(28px,4.5vw,40px)] font-bold text-[#111a2e] tracking-tight leading-tight">
                {content.coreCapabilities.title}
              </h2>
              <p className="text-base text-[#4b5568] leading-[1.7]">
                {content.coreCapabilities.body}
              </p>
              <div className="pt-2">
                <a
                  href="#mirac"
                  className="inline-flex items-center justify-center gap-3 px-6 min-h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer w-full sm:w-auto"
                >
                  <span>{content.coreCapabilities.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle Column: List Card (rows >= 56px) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[12px] border border-[#e5e8ee] shadow-[0_6px_24px_rgba(16,24,40,0.06)] divide-y divide-[#e5e8ee] overflow-hidden">
                {content.coreCapabilities.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 min-h-[56px] flex items-center justify-between gap-4 hover:bg-[#f8fafc] transition-colors"
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
              <div className="relative rounded-[14px] overflow-hidden shadow-md aspect-[16/10] sm:aspect-[4/5] bg-neutral-100 group">
                <img
                  src={content.coreCapabilities.image}
                  alt="Gloved hand inspecting blue polymer compounds"
                  width={340}
                  height={425}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6">
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
          B7. WHY CHOOSE MACHINO (2 per row on mobile, last one centered)
          ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-[clamp(16px,4.5vw,90px)]">
          <div className="text-center space-y-2 mb-10 sm:mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
              {content.whyChooseMachino.eyebrow}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,40px)] font-bold text-[#111a2e] tracking-tight">
              {content.whyChooseMachino.title}
            </h2>
          </div>

          {/* 5 items: 2 per row on mobile, 5th centered; 5 in row on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x divide-[#e5e8ee] bg-[#f3f5f9] rounded-[14px] p-5 sm:p-10 border border-[#e5e8ee]">
            {content.whyChooseMachino.pillars.map((pillar, idx) => {
              const isLast = idx === 4;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                    isLast ? 'col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xs flex items-center justify-center text-[#111a2e] mb-3 sm:mb-4 border border-[#e5e8ee]">
                    {getWhyIcon(pillar.icon)}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#111a2e] leading-snug">
                    {pillar.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          B8. CTA BANNER
          ========================================================================= */}
      <section className="relative w-full overflow-hidden min-h-[auto] flex items-center py-12 sm:py-16 bg-[#05140e]">
        <img
          src={content.cta.image}
          alt="Lush glossy green leaves representing sustainable polymer breakthrough"
          width={2400}
          height={800}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none"
        />

        {/* Strengthened Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,20,14,0.96) 0%, rgba(5,20,14,0.85) 45%, rgba(5,20,14,0.3) 100%)',
          }}
        />

        {/* Content Block */}
        <div className="relative z-10 w-full max-w-[1480px] mx-auto px-5 sm:px-10 lg:px-[clamp(24px,4.5vw,90px)]">
          <div className="max-w-[760px] flex flex-col justify-center text-left">
            <div className="text-[13px] sm:text-[14px] font-medium tracking-[0.12em] text-white uppercase">
              {content.cta.eyebrow}
            </div>

            <h2 className="text-[clamp(26px,4vw,46px)] font-bold text-white leading-[1.15] tracking-normal font-sans mt-2.5 sm:mt-3">
              <div>{content.cta.titleLine1}</div>
              <div>{content.cta.titleLine2}</div>
            </h2>

            <p className="text-[clamp(14px,1.1vw,18px)] text-white/90 mt-3 sm:mt-4 leading-relaxed font-normal font-sans">
              {content.cta.subtitle}
            </p>

            <div className="mt-6 sm:mt-7">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-3 px-7 min-h-[48px] rounded-[6px] bg-white text-[#17213b] text-sm font-semibold hover:bg-[#f1f4f9] hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer w-full sm:w-auto"
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
