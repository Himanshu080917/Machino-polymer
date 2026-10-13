import React, { useRef } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Eye,
  Target,
  Award,
  FileCheck2,
} from 'lucide-react';
import { aboutContent } from '../../data/aboutContent';
import { StatsBar } from './StatsBar';

interface AboutUsSectionProps {
  onOpenContact?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenContact }) => {
  const content = aboutContent.aboutUs;
  const journeyTimelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (journeyTimelineRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      journeyTimelineRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollToJourney = () => {
    const el = document.getElementById('about-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="w-full text-[#111a2e]">
      {/* =========================================================================
          A1. HERO SECTION
          ========================================================================= */}
      <div className="w-full bg-white relative pt-6 sm:pt-10 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
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
            {/* Left Column: Eyebrow, H1, Paragraph, CTA Button */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#4b5568] uppercase">
                {content.hero.eyebrow}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111a2e] leading-[1.08] tracking-tight">
                <div>{content.hero.titleLine1}</div>
                <div>{content.hero.titleLine2}</div>
                <div className="text-[#1e4fa3]">{content.hero.titleAccent}</div>
              </h1>

              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] max-w-xl font-normal">
                {content.hero.paragraph}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleScrollToJourney}
                  className="inline-flex items-center justify-center gap-3 px-7 h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 shadow-sm cursor-pointer"
                >
                  <span>{content.hero.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Factory Building Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(16,24,40,0.08)] bg-neutral-100 group">
                <img
                  src={content.hero.image}
                  alt="Machino Polymers Limited factory facility"
                  width={750}
                  height={450}
                  className="w-full h-auto object-cover min-h-[320px] sm:min-h-[420px]"
                />
                {/* Left Edge Soft Fade overlay to blend seamlessly */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white/90 via-white/40 to-transparent pointer-events-none" />

                {/* Bottom-right photo badge with vertical white line */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded border border-white/20 text-white text-left">
                  <div className="w-[2px] h-9 bg-white shrink-0" />
                  <div className="text-[10px] sm:text-[11px] font-semibold tracking-wider leading-tight uppercase">
                    {content.hero.photoBadge.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              A2. STATS BAR (Overlapping bottom of hero)
              ========================================================================= */}
          <div className="mt-12 sm:mt-16 lg:-mb-14 relative z-20">
            <StatsBar stats={content.stats} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          A3. OUR STORY
          ========================================================================= */}
      <section className="w-full bg-white pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.story.title}
              </h2>
              <div className="text-lg sm:text-xl font-bold text-[#111a2e] leading-snug">
                {content.story.subtitle}
              </div>
              <p className="text-base sm:text-lg text-[#4b5568] leading-[1.7] pt-1">
                {content.story.body}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleScrollToJourney}
                  className="inline-flex items-center gap-3 px-7 h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 cursor-pointer"
                >
                  <span>{content.story.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Dark-tinted image card with white overlay quote */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[14px] overflow-hidden shadow-lg aspect-[16/10] bg-[#111a2e] group">
                <img
                  src={content.story.image}
                  alt="Polymer pellets pouring from nozzle"
                  width={680}
                  height={425}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-luminosity brightness-75 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#111a2e]/60" />
                <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight max-w-md">
                    {content.story.quote}
                  </blockquote>
                  <div className="w-12 h-1 bg-white mt-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A4. OUR JOURNEY (Light grey-blue band #f3f5f9)
          ========================================================================= */}
      <section id="about-journey" className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee] scroll-mt-28">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.journey.title}
              </h2>
              <div className="text-base sm:text-lg font-normal text-[#4b5568]">
                {content.journey.subtitle}
              </div>
            </div>

            {/* Prev/Next Circular Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTimeline('left')}
                aria-label="Previous milestones"
                className="w-10 h-10 rounded-full border border-[#17213b]/30 bg-white flex items-center justify-center text-[#17213b] hover:bg-[#17213b] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTimeline('right')}
                aria-label="Next milestones"
                className="w-10 h-10 rounded-full border border-[#17213b]/30 bg-white flex items-center justify-center text-[#17213b] hover:bg-[#17213b] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Timeline Row */}
          <div className="relative">
            <div
              ref={journeyTimelineRef}
              className="flex items-start gap-8 sm:gap-12 lg:gap-16 overflow-x-auto pb-6 scrollbar-none snap-x"
            >
              {content.journey.milestones.map((milestone, idx) => (
                <div key={idx} className="flex-1 min-w-[160px] sm:min-w-[190px] snap-start relative flex flex-col items-center text-center">
                  {/* Connecting Line */}
                  {idx < content.journey.milestones.length - 1 && (
                    <div className="hidden sm:block absolute top-8 left-1/2 w-full h-[2px] bg-[#e5e8ee] z-0" />
                  )}

                  {/* Circular Node */}
                  <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full border-4 border-white shadow-md overflow-hidden bg-white mb-4">
                    <img
                      src={milestone.image}
                      alt={milestone.year}
                      width={72}
                      height={72}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text under node */}
                  <div className="text-xl sm:text-2xl font-bold text-[#111a2e] mb-1">
                    {milestone.year}
                  </div>
                  <div className="text-xs sm:text-sm text-[#4b5568] leading-snug max-w-[160px]">
                    {milestone.description}
                  </div>
                </div>
              ))}

              {/* Far right handwritten text */}
              <div className="shrink-0 flex flex-col justify-center items-start pl-4 sm:pl-8 self-center">
                <div className="text-2xl sm:text-3xl font-serif-italic text-[#17213b] -rotate-6 italic leading-tight">
                  A journey<br />of progress
                </div>
                <div className="w-10 h-1 bg-[#1e4fa3] mt-2 rounded-full -rotate-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A5. OUR LEADERSHIP (White band)
          ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.leadership.title}
              </h2>
              <div className="text-lg font-bold text-[#111a2e] leading-snug">
                {content.leadership.subtitle}
              </div>
              <p className="text-base text-[#4b5568] leading-[1.7] pt-1">
                {content.leadership.body}
              </p>
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] bg-[#17213b] text-white text-sm font-semibold hover:bg-[#111a2e] transition-all hover:gap-4 cursor-pointer"
                >
                  <span>{content.leadership.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 3 Portrait Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {content.leadership.leaders.map((leader, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[10px] border border-[#e5e8ee] overflow-hidden shadow-[0_6px_24px_rgba(16,24,40,0.06)] group hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        width={280}
                        height={210}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-5 text-left">
                      <div className="font-bold text-[#111a2e] text-base sm:text-lg">
                        {leader.name}
                      </div>
                      <div className="text-xs sm:text-sm text-[#4b5568] mt-1">
                        {leader.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A6. OUR VISION & MISSION (Light grey-blue band #f3f5f9)
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="space-y-3 mb-10">
            <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
              {content.visionMission.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Two columns with divider */}
            <div className="lg:col-span-6 bg-white rounded-[12px] p-6 sm:p-10 border border-[#e5e8ee] shadow-[0_6px_24px_rgba(16,24,40,0.06)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e8ee]">
                {/* Vision */}
                <div className="space-y-3 pr-0 sm:pr-6">
                  <div className="w-11 h-11 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#1e4fa3] border border-[#e5e8ee]">
                    <Eye className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111a2e]">
                    {content.visionMission.vision.heading}
                  </h3>
                  <p className="text-sm text-[#4b5568] leading-relaxed">
                    {content.visionMission.vision.body}
                  </p>
                </div>

                {/* Mission */}
                <div className="space-y-3 pt-6 sm:pt-0 sm:pl-6">
                  <div className="w-11 h-11 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#1e4fa3] border border-[#e5e8ee]">
                    <Target className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111a2e]">
                    {content.visionMission.mission.heading}
                  </h3>
                  <p className="text-sm text-[#4b5568] leading-relaxed">
                    {content.visionMission.mission.body}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Landscape Image with Mountain Road */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[14px] overflow-hidden shadow-md aspect-[16/9] group">
                <img
                  src={content.visionMission.image}
                  alt="Mountain highway representing progress"
                  width={680}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                  <div className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-sm">
                    {content.visionMission.imageOverlay}
                  </div>
                  <div className="w-10 h-1 bg-white mt-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A7. GLOBAL PRESENCE (White band)
          ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.globalPresence.title}
              </h2>
              <div className="text-lg font-bold text-[#111a2e]">
                {content.globalPresence.subtitle}
              </div>
              <p className="text-base text-[#4b5568] leading-[1.7]">
                {content.globalPresence.body}
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer"
                >
                  <span>{content.globalPresence.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Center: Dotted Map with pins */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[480px] aspect-[16/10] flex items-center justify-center p-2">
                <img
                  src="/images/about/map-dots.webp"
                  alt="Global network map"
                  width={480}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto object-contain opacity-85"
                />
              </div>

              {/* Map Legend */}
              <div className="flex items-center gap-6 mt-4 text-xs font-semibold text-[#4b5568]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  <span>Manufacturing Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1e4fa3]" />
                  <span>Sales & Distribution</span>
                </div>
              </div>
            </div>

            {/* Right: 2 Thumb Cards (India & UAE) */}
            <div className="lg:col-span-3 space-y-4">
              {content.globalPresence.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-[10px] bg-white border border-[#e5e8ee] shadow-[0_4px_16px_rgba(16,24,40,0.04)]"
                >
                  <img
                    src={card.image}
                    alt={card.country}
                    width={60}
                    height={46}
                    loading="lazy"
                    className="w-14 h-11 object-cover rounded shrink-0 border border-[#e5e8ee]"
                  />
                  <div>
                    <div className="font-bold text-[#111a2e] text-base">{card.country}</div>
                    <div className="text-xs text-[#4b5568] leading-tight mt-0.5">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A8. QUALITY & CERTIFICATIONS (Light band)
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.certifications.title}
              </h2>
              <div className="text-lg font-bold text-[#111a2e]">
                {content.certifications.subtitle}
              </div>
              <p className="text-base text-[#4b5568] leading-[1.7]">
                {content.certifications.body}
              </p>
              <div className="pt-2">
                <a
                  href="#materials"
                  className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer"
                >
                  <span>{content.certifications.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 4 Outline Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {content.certifications.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[10px] bg-white border border-[#e5e8ee] shadow-[0_4px_16px_rgba(16,24,40,0.04)] text-center flex flex-col items-center justify-center min-h-[140px] hover:border-[#17213b] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#111a2e] mb-3">
                      <FileCheck2 className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="text-base font-bold text-[#111a2e] leading-snug">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#4b5568] mt-1 font-medium">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A9. SUSTAINABILITY & ESG  |  CSR INITIATIVES (50/50 Split)
          ========================================================================= */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#e5e8ee]">
        {/* Left Half: Sustainability & ESG (Dark green photo background) */}
        <div className="relative py-16 sm:py-24 px-[clamp(16px,4.5vw,70px)] bg-[#0d2818] overflow-hidden flex flex-col justify-center text-white">
          <img
            src={content.sustainabilityAndCsr.sustainability.image}
            alt="Glass globe on moss representing sustainability"
            width={740}
            height={460}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2818]/90 via-[#0d2818]/70 to-[#0d2818]/40" />

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {content.sustainabilityAndCsr.sustainability.eyebrow}
            </h2>
            <div className="text-lg font-semibold text-emerald-300">
              {content.sustainabilityAndCsr.sustainability.subtitle}
            </div>
            <p className="text-base text-gray-200 leading-[1.7]">
              {content.sustainabilityAndCsr.sustainability.body}
            </p>
            <div className="pt-3">
              <a
                href="#sustainability"
                className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] border border-white text-white bg-transparent text-sm font-semibold hover:bg-white hover:text-[#0d2818] transition-all cursor-pointer"
              >
                <span>{content.sustainabilityAndCsr.sustainability.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Half: CSR Initiatives (Light background with child planting sapling) */}
        <div className="relative py-16 sm:py-24 px-[clamp(16px,4.5vw,70px)] bg-white overflow-hidden flex flex-col justify-center">
          <div className="max-w-xl space-y-4 relative z-10">
            <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
              {content.sustainabilityAndCsr.csr.title}
            </h2>
            <div className="text-lg font-bold text-[#111a2e]">
              {content.sustainabilityAndCsr.csr.subtitle}
            </div>
            <p className="text-base text-[#4b5568] leading-[1.7]">
              {content.sustainabilityAndCsr.csr.body}
            </p>
            <div className="pt-3">
              <a
                href="#sustainability"
                className="inline-flex items-center gap-3 px-6 h-[46px] rounded-[6px] border border-[#17213b] text-[#17213b] bg-white text-sm font-semibold hover:bg-[#17213b] hover:text-white transition-all cursor-pointer"
              >
                <span>{content.sustainabilityAndCsr.csr.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Child planting photo subtle position on right */}
          <div className="hidden sm:block absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none opacity-40 lg:opacity-60 overflow-hidden">
            <img
              src={content.sustainabilityAndCsr.csr.image}
              alt="Child planting sapling"
              width={300}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          A10. AWARDS & RECOGNITION (Light grey-blue band #f3f5f9)
          ========================================================================= */}
      <section className="w-full bg-[#f3f5f9] py-20 sm:py-24 border-b border-[#e5e8ee]">
        <div className="max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-[28px] h-[4px] bg-[#9aa3b2] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111a2e] tracking-tight">
                {content.awards.title}
              </h2>
              <div className="text-lg font-bold text-[#111a2e]">
                {content.awards.subtitle}
              </div>
              <p className="text-base text-[#4b5568] leading-[1.7]">
                {content.awards.body}
              </p>
            </div>

            {/* Right: 4 Columns with Laurel Wreath Icon */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e8ee] bg-white rounded-[12px] p-6 sm:p-8 border border-[#e5e8ee] shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
                {content.awards.items.map((award, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                      idx > 0 ? 'pt-6 sm:pt-0' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#111a2e] mb-3 border border-[#e5e8ee]">
                      <Award className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-[#111a2e] text-sm sm:text-base leading-snug">
                      {award.title}
                    </div>
                    {award.subtitle && (
                      <div className="text-xs text-[#4b5568] mt-1 leading-snug">
                        {award.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A11. CTA BANNER (Dark navy photo background: Hand with white polymer pellets)
          ========================================================================= */}
      <section className="relative w-full bg-[#111a2e] text-white py-20 sm:py-28 overflow-hidden">
        <img
          src={content.cta.image}
          alt="Hand holding white polymer pellets"
          width={1480}
          height={380}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111a2e]/95 via-[#111a2e]/80 to-[#111a2e]/60" />

        <div className="relative z-10 max-w-[1480px] mx-auto px-[clamp(16px,4.5vw,90px)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight">
              {content.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-normal">
              {content.cta.subtitle}
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 px-8 h-[48px] rounded-[6px] bg-white text-[#111a2e] text-sm font-semibold hover:bg-neutral-100 transition-all hover:gap-4 shadow-md cursor-pointer"
              >
                <span>{content.cta.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right-aligned overlay text with short underline */}
          <div className="lg:text-right">
            <div className="text-xl sm:text-2xl font-semibold text-white/90">
              {content.cta.sideNote}
            </div>
            <div className="w-12 h-1 bg-white mt-3 rounded-full lg:ml-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};
