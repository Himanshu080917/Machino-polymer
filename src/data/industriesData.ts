export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  heroImage: string;
  keyStats: { label: string; value: string }[];
  description: string;
  components: {
    name: string;
    requirement: string;
    recommendedGrade: string;
    advantages: string[];
  }[];
  accentColor: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'automotive',
    title: 'Automotive & Mobility',
    subtitle: 'From Lightweighting to EV Powertrains',
    iconName: 'Car',
    heroImage: '/images/automotive-app.jpg',
    accentColor: '#E62325',
    keyStats: [
      { label: 'Weight Reduction vs Steel', value: 'Up to 40%' },
      { label: 'OEM Approvals', value: '35+ Global Specs' },
      { label: 'Low Temp Impact', value: '-30°C Tested' }
    ],
    description: 'Machino Polymers is the pioneer of automotive polypropylene compounding in India. In strategic collaboration with Suzuki Motor Corporation and global Tier-1s, we engineer materials that withstand extreme thermal fluctuations, crash safety loads, and demanding aesthetics.',
    components: [
      {
        name: 'Aerodynamic Front & Rear Bumpers',
        requirement: 'High impact at -30°C, paint adhesion, dimensional stability, low thermal expansion.',
        recommendedGrade: 'MACH-PP T20 HD',
        advantages: ['Class-A surface finish', 'Zero tiger stripe defect', 'OEM standardized']
      },
      {
        name: 'EV Battery Enclosures & High Voltage Trays',
        requirement: 'UL94 V-0 flame retardance, CTI > 600V, thermal shock resistance.',
        recommendedGrade: 'MACH-BLEND PC/PBT EV-FR',
        advantages: ['Non-halogenated eco FR', 'Prevents thermal runaway propagation', 'High dielectric strength']
      },
      {
        name: 'Instrument Panels & Cockpit Carrier',
        requirement: 'Airbag deployment safety, low fogging & low VOC, scratch resistance.',
        recommendedGrade: 'MACH-PP IP-SAFE ULTRA',
        advantages: ['Ductile fracture during cold deployment', 'Meets stringent VDA 278 VOC limits']
      },
      {
        name: 'Under-the-Hood Cooling Shrouds & Fans',
        requirement: 'High continuous operating temperature (140°C), fatigue strength.',
        recommendedGrade: 'MACH-PP GF30 STRUCT',
        advantages: ['High stiffness-to-weight ratio', 'Vibration dampening']
      }
    ]
  },
  {
    id: 'sustainability-circular',
    title: 'Circular & Sustainable Solutions',
    subtitle: 'Global Recycled Standard (GRS) Verified Polymer Stream',
    iconName: 'Recycle',
    heroImage: '/images/circular-eco.jpg',
    accentColor: '#10B981',
    keyStats: [
      { label: 'Carbon Emission Cut', value: 'Up to 55%' },
      { label: 'GRS Certified Grades', value: '100% Traceable' },
      { label: 'Recycled Content Range', value: '20% - 100%' }
    ],
    description: 'Under our PlusCircular™ initiative, Machino Polymers closes the loop on polymer waste. Through proprietary deodorization, intensive filtration, and molecular chain rebuilding, our PCR and PIR compounds achieve virgin-grade mechanical performance.',
    components: [
      {
        name: 'Automotive Underbody Aero Shields',
        requirement: 'Acoustic absorption, high stone impact, weatherability using 30-50% PCR content.',
        recommendedGrade: 'PlusCircular™ PCR-PP 30',
        advantages: ['Meets OEM Scope-3 targets', 'Zero volatile odor', 'Certified LCA metrics']
      },
      {
        name: 'Sustainable Logistics Pallets & Crates',
        requirement: 'High stack load capacity, drop impact durability, multiple reuse cycles.',
        recommendedGrade: 'PlusCircular™ PIR-MAX 50',
        advantages: ['Cost-optimized closed loop', 'Crack resistant in cold storage']
      },
      {
        name: 'Eco Appliance Internal Brackets',
        requirement: 'Dimensional stability and green product label compliance.',
        recommendedGrade: 'PlusCircular™ HYBRID-ECO 40',
        advantages: ['RoHS / REACH compliant', 'Consistent MFI from batch to batch']
      }
    ]
  },
  {
    id: 'appliances-electronics',
    title: 'Appliances & Electrical',
    subtitle: 'Flame Retardancy, Glow Wire & Aesthetic Precision',
    iconName: 'Zap',
    heroImage: '/images/hero-molecule.jpg',
    accentColor: '#3B82F6',
    keyStats: [
      { label: 'Flame Retardant Standard', value: 'UL94 V-0' },
      { label: 'Glow Wire Flammability', value: '960°C Pass' },
      { label: 'CTI Rating', value: '> 600 Volts' }
    ],
    description: 'Supplying the world’s leading appliance and power equipment manufacturers with specialized compounds engineered for electrical insulation, high mechanical load under vibration, and high-gloss scratch resistance.',
    components: [
      {
        name: 'Washing Machine Outer Tubs & Agitators',
        requirement: 'Detergent & bleach resistance, high fatigue life under 1400 RPM spin cycles.',
        recommendedGrade: 'MACH-PP GF30 STRUCT',
        advantages: ['Long-term water immersion stability', 'High flexural modulus']
      },
      {
        name: 'Smart Energy Meter & Switchgear Boxes',
        requirement: 'Glow wire 960°C flammability, outdoor UV stability, tamper-proof impact.',
        recommendedGrade: 'MACH-PP FR-V0 ULTRA',
        advantages: ['Zero flame dripping', 'UL94 V-0 certified at thin walls (1.0mm)']
      },
      {
        name: 'Refrigerator Liners & Crisper Drawers',
        requirement: 'Food contact compliance (FDA/EU), low temperature ductility.',
        recommendedGrade: 'MACH-PP FOOD-GRADE HD',
        advantages: ['High clarity, odor-free, stress-crack resistant']
      }
    ]
  },
  {
    id: 'industrial-packaging',
    title: 'Industrial & Packaging',
    subtitle: 'Heavy Duty Compounding for Extreme Loads',
    iconName: 'Boxes',
    heroImage: '/images/plant-facility.jpg',
    accentColor: '#F59E0B',
    keyStats: [
      { label: 'Top-Load Compression', value: '> 1,500 kg' },
      { label: 'High Speed Molding MFI', value: 'Up to 50' },
      { label: 'Chemical Resistance', value: 'Acids & Alkalis' }
    ],
    description: 'Custom formulated masterbatches, high-flow polypropylene, and mineral composites designed for high-speed cycle times, maximum stacking strength, and chemical barrier properties.',
    components: [
      {
        name: 'Heavy-Duty Storage Bins & Totes',
        requirement: 'Impact resistance, stackability under heavy loads, warp resistance.',
        recommendedGrade: 'MACH-PP HI-IMPACT 15',
        advantages: ['Fast cycle times in molds', 'Superior drop test survival']
      },
      {
        name: 'High-Speed Beverage Closures & Caps',
        requirement: 'Tight dimensional tolerance, organoleptic neutral (no taste transfer).',
        recommendedGrade: 'MACH-PP CAP-FLOW 45',
        advantages: ['Consistent torque control', 'Optimum living hinge durability']
      }
    ]
  }
];
