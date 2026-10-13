import React, { useEffect, useRef } from 'react';
import { CompanyOverviewSection } from '../components/about/CompanyOverviewSection';

interface CompanyOverviewPageProps {
  onOpenContact?: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewPageProps> = ({ onOpenContact }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Company Overview | Machino Polymers Limited";
    // Move focus to page main heading
    const heading = pageRef.current?.querySelector('h1, h2');
    if (heading instanceof HTMLElement) {
      heading.setAttribute('tabIndex', '-1');
      heading.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div
      ref={pageRef}
      className="w-full bg-white animate-in fade-in duration-200"
    >
      <CompanyOverviewSection onOpenContact={onOpenContact} />
    </div>
  );
};

export default CompanyOverview;
