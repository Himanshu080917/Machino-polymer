import React from 'react';

export const MadeInIndiaSection: React.FC<{ onExploreStory?: () => void }> = ({ onExploreStory }) => {
  return (
    <section id="about" className="py-14 sm:py-28 lg:py-32 bg-white text-[#0F172A] relative overflow-hidden">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Two-line Display Headline + Large Innovation Subtitle */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-display font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
              <div>Made in India,</div>
              <div className="mt-1">Respected worldwide!</div>
            </h2>

            <p className="text-xl sm:text-3xl lg:text-[34px] font-light text-[#64748B] leading-[1.28] max-w-2xl">
              We are a global materials innovation company engineering the future of sustainable products.
            </p>
          </div>

          {/* Right Column: Two-Paragraph Narrative + Our story Link */}
          <div className="lg:col-span-5 space-y-7 lg:pt-3">
            <div className="text-[#475569] text-base sm:text-lg lg:text-[18px] leading-[1.7] space-y-6">
              <p>
                Founded on the principles of material science, precision manufacturing and environmental stewardship, Machino Polymers brings four decades of expertise to global industries.
              </p>
              <p>
                From automotive lightweighting to circular packaging, we engineer polymers that perform better, last longer, and return to the cycle.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#mirac"
                onClick={(e) => {
                  if (onExploreStory) {
                    e.preventDefault();
                    onExploreStory();
                  }
                }}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#FF5500] transition-colors group cursor-pointer"
              >
                <span>Our story</span>
                <span className="font-serif text-xl group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
