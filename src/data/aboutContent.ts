// Single source of truth for copy and data across About Us (Part A) and Company Overview (Part B)
// Text reproduced verbatim from design specification.

export interface TimelineMilestone {
  year: string;
  description: string;
  image: string;
}

export interface LeaderProfile {
  name: string;
  role: string;
  image: string;
}

export interface IndustryCard {
  title: string;
  image: string;
  anchor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  iconType: 'gear' | 'globe' | 'factory' | 'people';
}

export const PLACEHOLDER_VIDEO_URL = "";

export const aboutContent = {
  // Part A: About Us
  aboutUs: {
    breadcrumbs: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
    ],
    hero: {
      eyebrow: "ABOUT US",
      titleLine1: "Built on Trust.",
      titleLine2: "Driven by a",
      titleAccent: "Better Tomorrow.",
      paragraph:
        "For over three decades, Machino Polymers has been engineering high-performance polymer solutions that power progress, create value and contribute to a more sustainable world.",
      ctaButton: "Our Journey",
      photoBadge: ["OUR PEOPLE.", "OUR TECHNOLOGY.", "A BRIGHTER TOMORROW."],
      image: "/images/about/about-hero-factory.webp",
    },
    stats: [
      { value: 3, suffix: "+", label: "Decades of Experience", iconType: "gear" },
      { value: 2, suffix: "", label: "Countries (India & UAE)", iconType: "globe" },
      { value: 15, suffix: "+", label: "Manufacturing Units", iconType: "factory" },
      { value: 1000, suffix: "+", label: "Customers Worldwide", iconType: "people" },
    ] as StatItem[],
    story: {
      title: "Our Story",
      subtitle: "From a bold vision to a global presence.",
      body: "What started with a clear vision and a commitment to quality has grown into a trusted B2B partner for leading industries across India and the UAE. Our journey is built on innovation, customer collaboration and a relentless pursuit of excellence.",
      buttonText: "Read Our Full Story",
      quote: "“Transforming possibilities with polymers.”",
      image: "/images/about/story-pellets.webp",
    },
    journey: {
      title: "Our Journey",
      subtitle: "Key milestones that have shaped who we are today.",
      handwrittenNote: "A journey of progress",
      milestones: [
        {
          year: "1990",
          description: "Foundation and early growth",
          image: "/images/about/journey-1990.webp",
        },
        {
          year: "2000",
          description: "Expanded product portfolio",
          image: "/images/about/journey-2000.webp",
        },
        {
          year: "2010",
          description: "Strengthened customer partnerships",
          image: "/images/about/journey-2010.webp",
        },
        {
          year: "2020",
          description: "Scaling new heights",
          image: "/images/about/journey-2020.webp",
        },
        {
          year: "Today",
          description: "Building a more sustainable tomorrow",
          image: "/images/about/journey-today.webp",
        },
      ] as TimelineMilestone[],
    },
    leadership: {
      title: "Our Leadership",
      subtitle: "Experienced. Visionary. People-Centric.",
      body: "Our leadership team brings deep industry expertise, a passion for innovation and a strong commitment to creating long-term value for all stakeholders.",
      buttonText: "Meet Our Leadership Team",
      leaders: [
        {
          name: "Name Here",
          role: "Chairman & Managing Director",
          image: "/images/about/leader-1.webp",
        },
        {
          name: "Name Here",
          role: "Whole-time Director",
          image: "/images/about/leader-2.webp",
        },
        {
          name: "Name Here",
          role: "Director",
          image: "/images/about/leader-3.webp",
        },
      ] as LeaderProfile[],
    },
    visionMission: {
      title: "Our Vision & Mission",
      vision: {
        heading: "Our Vision",
        body: "To be a global leader in polymer solutions, recognised for innovation, quality and sustainable growth.",
      },
      mission: {
        heading: "Our Mission",
        body: "To deliver high-performance polymer compounds that enable our customers to create a better, more sustainable tomorrow.",
      },
      imageOverlay: "Engineering Materials for a Brighter Tomorrow",
      image: "/images/about/vision-road.webp",
    },
    globalPresence: {
      title: "Global Presence",
      subtitle: "Made in India. Serving the world.",
      body: "With state-of-the-art manufacturing plants and warehouses across strategic locations in India and the UAE, we cater to customers worldwide with speed, reliability and local support.",
      buttonText: "View Our Locations",
      legend: [
        { label: "Manufacturing Facilities", color: "#10b981" },
        { label: "Sales & Distribution", color: "#1e4fa3" },
      ],
      cards: [
        {
          country: "India",
          description: "Multiple manufacturing plants & warehouses",
          image: "/images/about/india-thumb.webp",
        },
        {
          country: "UAE",
          description: "Strategic presence to serve global markets",
          image: "/images/about/uae-thumb.webp",
        },
      ],
    },
    certifications: {
      title: "Quality & Certifications",
      subtitle: "A Commitment to Excellence.",
      body: "Our dedication to quality is reflected in our globally recognized certifications, robust management systems and a culture of continuous improvement.",
      buttonText: "View All Certifications",
      items: [
        { label: "ISO", sub: "9001:2015", icon: "iso" },
        { label: "IATF", sub: "16949:2016", icon: "iatf" },
        { label: "NABL", sub: "Accredited Lab", icon: "nabl" },
        { label: "Other", sub: "Certifications", icon: "other" },
      ],
    },
    sustainabilityAndCsr: {
      sustainability: {
        eyebrow: "Sustainability & ESG",
        subtitle: "Responsible Materials. Brighter Possibilities.",
        body: "We are committed to reducing our environmental footprint through sustainable materials, responsible operations and a circular economy approach.",
        buttonText: "Our ESG Approach",
        image: "/images/about/esg-globe.webp",
      },
      csr: {
        title: "CSR Initiatives",
        subtitle: "Creating a Positive Impact.",
        body: "We believe in giving back to the communities where we operate. Through education, skill development, healthcare and environmental initiatives, we work towards a more inclusive and sustainable future.",
        buttonText: "Our CSR Initiatives",
        image: "/images/about/csr-child.webp",
      },
    },
    awards: {
      title: "Awards & Recognition",
      subtitle: "Trusted. Recognised. Valued.",
      body: "Our pursuit of innovation and excellence has been acknowledged by leading industry bodies.",
      items: [
        { title: "Suzuki Award", subtitle: "for Special Support in Technology Upgrade" },
        { title: "Certificate of Excellence", subtitle: "by INC. 500" },
        { title: "Best Innovation", subtitle: "100 Companies by INC. India" },
        { title: "Other Recognitions", subtitle: "" },
      ],
    },
    cta: {
      title: "Let's Build a More Sustainable Future Together.",
      subtitle: "Partner with us for innovative polymer solutions.",
      buttonText: "Get In Touch",
      sideNote: "Small Materials. Big Possibilities.",
      image: "/images/about/cta-pellets.webp",
    },
  },

  // Part B: Company Overview
  companyOverview: {
    breadcrumbs: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
      { label: "Company Overview", href: "#company-overview" },
    ],
    hero: {
      eyebrow: "COMPANY OVERVIEW",
      titleLine1: "Engineering",
      titleLine2: "Polymers for",
      titleLine3: "a Better Tomorrow",
      paragraph:
        "A leading manufacturer of high-performance polymer compounds, enabling innovation across industries with quality, consistency and sustainability at the core.",
      exploreButton: "Explore Our Products",
      tagline: "TRUSTED MATERIALS. ADVANCING A BRIGHTER TOMORROW.",
      sideBadge: ["HIGH PERFORMANCE POLYMERS", "REAL WORLD POSSIBILITIES"],
      slides: [
        { image: "/images/about/co-hero-scoop.webp", alt: "Polymer production steel scoop" },
        { image: "/images/about/co-hero-scoop.webp", alt: "Advanced compounding process" },
        { image: "/images/about/co-hero-scoop.webp", alt: "High quality polymer compounds" },
      ],
    },
    stats: [
      { value: 3, suffix: "+", label: "Decades of Experience", iconType: "gear" },
      { value: 15, suffix: "+", label: "Manufacturing Units", iconType: "factory" },
      { value: 2, suffix: "", label: "Countries (India & UAE)", iconType: "globe" },
      { value: 1000, suffix: "+", label: "Happy Customers", iconType: "people" },
    ] as StatItem[],
    whatWeManufacture: {
      eyebrow: "WHAT WE MANUFACTURE",
      title: "Advanced Polymer Compounds for a Diverse World",
      body: "We develop, manufacture and supply a wide range of polymer compounds tailored to meet the evolving needs of global industries. Our solutions are designed to enhance performance, durability and efficiency.",
      buttonText: "View Product Range",
      image: "/images/about/co-manufacture-pellets.webp",
      cardTitle: "ENGINEERED FOR PERFORMANCE",
      features: [
        "Custom Formulations",
        "Consistent Quality",
        "Wide Material Portfolio",
        "Application Support",
      ],
    },
    industriesWeServe: {
      eyebrow: "INDUSTRIES WE SERVE",
      title: "Powering Progress Across Industries",
      buttonText: "View All Industries",
      industries: [
        { title: "Automotive", image: "/images/about/ind-automotive.webp", anchor: "#industries" },
        { title: "Electrical & Electronics", image: "/images/about/ind-electronics.webp", anchor: "#industries" },
        { title: "Industrial Applications", image: "/images/about/ind-industrial.webp", anchor: "#industries" },
        { title: "Consumer Goods", image: "/images/about/ind-consumer.webp", anchor: "#industries" },
        { title: "Packaging", image: "/images/about/ind-packaging.webp", anchor: "#industries" },
        { title: "Healthcare & Medical", image: "/images/about/ind-healthcare.webp", anchor: "#industries" },
      ] as IndustryCard[],
    },
    manufacturingExcellence: {
      eyebrow: "MANUFACTURING EXCELLENCE",
      titleLine1: "Built for Scale.",
      titleLine2: "Driven by Quality.",
      body: "Our state-of-the-art manufacturing plants and advanced infrastructure enable consistent quality, high production capacity and flexible solutions for global markets.",
      buttonText: "Explore Our Facilities",
      image: "/images/about/co-plant.webp",
      imageBadges: ["SCALE", "QUALITY", "CONSISTENCY"],
      pillars: [
        "World-class Facilities",
        "Advanced Process Control",
        "Sustainable Operations",
        "Global Supply Capability",
      ],
    },
    coreCapabilities: {
      eyebrow: "OUR CORE CAPABILITIES",
      title: "From Material to Application",
      body: "We deliver end-to-end solutions backed by technical expertise and advanced infrastructure.",
      buttonText: "Learn More About Our Capabilities",
      capabilities: [
        "Compounding & Custom Formulation",
        "Colour Matching",
        "Testing & Material Characterization",
        "Application Development",
        "Global Supply & Support",
      ],
      image: "/images/about/co-capabilities-hand.webp",
      imageBadge: ["MATERIAL", "EXPERTISE.", "REAL IMPACT."],
    },
    whyChooseMachino: {
      eyebrow: "WHY CHOOSE MACHINO",
      title: "A Partner You Can Rely On",
      pillars: [
        { label: "Consistent Quality", icon: "shield" },
        { label: "Innovation Driven", icon: "lightbulb" },
        { label: "Sustainable Solutions", icon: "leaf" },
        { label: "Customer Centric", icon: "people" },
        { label: "Global Presence", icon: "globe" },
      ],
    },
    cta: {
      eyebrow: "PARTNER WITH US",
      titleLine1: "Let's Create Innovative",
      titleLine2: "Polymer Solutions Together.",
      subtitle: "Discover how Machino Polymers can support your next breakthrough.",
      buttonText: "Get In Touch",
      image: "/images/about/co-cta-leaf.webp",
    },
  },
};
