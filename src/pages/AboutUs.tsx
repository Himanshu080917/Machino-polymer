import React, { useEffect, useRef } from 'react';
import { AboutUsSection } from '../components/about/AboutUsSection';

interface AboutUsPageProps {
  onOpenContact?: () => void;
}

export const AboutUs: React.FC<AboutUsPageProps> = ({ onOpenContact }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "About Us | Machino Polymers Limited";
    // Move focus to page main heading
    const heading = pageRef.current?.querySelector('h1');
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
      <AboutUsSection onOpenContact={onOpenContact} />
    </div>
  );
};

export default AboutUs;
