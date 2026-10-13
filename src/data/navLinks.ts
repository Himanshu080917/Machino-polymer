export interface NavLinkItem {
  label: string;
  to?: string;      // Real router route
  href?: string;    // Anchor for home page section
  hasArrow?: boolean;
  isContact?: boolean;
}

export const navLinks: NavLinkItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Company Overview', to: '/about/company-overview' },
  { label: 'Materials', href: '#materials' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Innovation', href: '#mirac' },
  { label: 'Contact', href: '#contact', hasArrow: true, isContact: true },
];
