import React, { useState, useEffect, useRef } from 'react';
import { AboutSubNav } from './AboutSubNav';
import { AboutUsSection } from './AboutUsSection';
import { CompanyOverviewSection } from './CompanyOverviewSection';

interface AboutWrapperProps {
  onOpenContact?: () => void;
}

export const AboutWrapper: React.FC<AboutWrapperProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'about-us' | 'company-overview'>('about-us');
  const isNavigatingRef = useRef(false);

  // Smooth scroll handler with sticky header offset
  const scrollToTarget = (target: 'about-us' | 'company-overview') => {
    isNavigatingRef.current = true;
    setActiveTab(target);

    if (target === 'about-us') {
      const el = document.getElementById('about');
      if (el) {
        // Scroll so top of #about is aligned beneath navbar
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '#about');
      }
    } else {
      const el = document.getElementById('company-overview');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '#company-overview');
      }
    }

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  // Deep linking support on load and hash changes
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#company-overview' || hash === '#about/company-overview') {
        scrollToTarget('company-overview');
      } else if (hash === '#about') {
        scrollToTarget('about-us');
      }
    };

    // Check after DOM is fully painted
    const timer = setTimeout(handleHashCheck, 200);
    window.addEventListener('hashchange', handleHashCheck);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashCheck);
    };
  }, []);

  // IntersectionObserver to sync active tab during manual scrolling
  useEffect(() => {
    const companyOverviewEl = document.getElementById('company-overview');
    if (!companyOverviewEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;
        const entry = entries[0];
        // If Company Overview has entered the viewport above the fold
        if (entry.isIntersecting) {
          setActiveTab('company-overview');
        } else {
          setActiveTab('about-us');
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    observer.observe(companyOverviewEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative w-full bg-white">
      {/* Slim sticky sub-navigation pill tabs sitting just under the main navbar */}
      <AboutSubNav
        activeSection={activeTab}
        onNavigate={scrollToTarget}
      />

      {/* Part A: "About Us" full design */}
      <AboutUsSection onOpenContact={onOpenContact} />

      {/* Part B: "Company Overview" full design, nested inside #about */}
      <CompanyOverviewSection
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
