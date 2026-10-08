export interface MaterialGrade {
  id: string;
  gradeName: string;
  category: 'Polypropylene (PP)' | 'Engineered Plastics' | 'PlusCircular™ (Eco)' | 'High Performance Blends';
  baseResin: string;
  reinforcement: string;
  mfi: string; // Melt Flow Index (g/10min)
  tensileStrength: string; // MPa
  flexuralModulus: string; // MPa
  izodImpact: string; // kJ/m² or J/m
  hdt: string; // °C @ 0.45MPa or 1.8MPa
  density: string; // g/cm³
  flammability?: string;
  features: string[];
  applications: string[];
  oemApprovals: string[];
  recycledContent?: string;
  tagColor: string;
}

export const MATERIALS_DATA: MaterialGrade[] = [
  {
    id: 'mpl-pp-t20-prime',
    gradeName: 'MACH-PP T20 HD',
    category: 'Polypropylene (PP)',
    baseResin: 'Polypropylene Copolymer',
    reinforcement: '20% Ultra-Fine Talc Filled',
    mfi: '18 - 24',
    tensileStrength: '28 MPa',
    flexuralModulus: '2,350 MPa',
    izodImpact: '18 kJ/m²',
    hdt: '115 °C',
    density: '1.04 g/cm³',
    flammability: 'UL94 HB',
    features: ['High Dimensional Stability', 'Low Shrinkage', 'Class-A Surface Finish', 'Scratch Resistant'],
    applications: ['Automotive Bumpers', 'Door Trims', 'Pillar Trims', 'Instrument Panel Components'],
    oemApprovals: ['Maruti Suzuki (MSIL)', 'Tata Motors', 'Hyundai-Kia', 'Mahindra'],
    tagColor: '#E62325'
  },
  {
    id: 'mpl-pp-g30-str',
    gradeName: 'MACH-PP GF30 STRUCT',
    category: 'Polypropylene (PP)',
    baseResin: 'PP Homopolymer / Copolymer',
    reinforcement: '30% Chemically Coupled Glass Fiber',
    mfi: '6 - 9',
    tensileStrength: '78 MPa',
    flexuralModulus: '5,800 MPa',
    izodImpact: '12 kJ/m²',
    hdt: '152 °C',
    density: '1.12 g/cm³',
    flammability: 'UL94 HB',
    features: ['Extreme Rigidity', 'High Creep Resistance', 'Under-the-hood Thermal Resistance', 'Metal Replacement'],
    applications: ['Front End Modules (FEM)', 'Pedal Assemblies', 'Washing Machine Outer Tubs', 'Cooling Fan Shrouds'],
    oemApprovals: ['Maruti Suzuki', 'Whirlpool', 'LG Electronics', 'Honda Cars'],
    tagColor: '#3B82F6'
  },
  {
    id: 'mpl-circ-pcr30',
    gradeName: 'PlusCircular™ PCR-PP 30',
    category: 'PlusCircular™ (Eco)',
    baseResin: 'Circular Polypropylene',
    reinforcement: '30% Post-Consumer Recycled (GRS Certified) + Mineral',
    mfi: '14 - 18',
    tensileStrength: '24 MPa',
    flexuralModulus: '1,950 MPa',
    izodImpact: '22 kJ/m²',
    hdt: '102 °C',
    density: '1.02 g/cm³',
    recycledContent: '30% Certified PCR',
    features: ['GRS Scope Certified', 'Zero Odor Formulation', 'Near-Virgin Mechanicals', 'Low Carbon Footprint (-42%)'],
    applications: ['Wheel Arch Liners', 'Underbody Aeroshields', 'HVAC Air Ducts', 'Sustainable Packaging Crates'],
    oemApprovals: ['Global Tier-1 Validated', 'MSIL Green Supply'],
    tagColor: '#10B981'
  },
  {
    id: 'mpl-circ-pir50',
    gradeName: 'PlusCircular™ PIR-MAX 50',
    category: 'PlusCircular™ (Eco)',
    baseResin: 'Post-Industrial Recycled PP Blend',
    reinforcement: '50% Certified PIR Compound',
    mfi: '12 - 16',
    tensileStrength: '22 MPa',
    flexuralModulus: '1,750 MPa',
    izodImpact: '28 kJ/m²',
    hdt: '98 °C',
    density: '0.98 g/cm³',
    recycledContent: '50% Industrial Closed Loop',
    features: ['Closed Loop Engineering', 'High Toughness', 'Eco Cost Advantage', 'Traceable Supply Chain'],
    applications: ['Battery Trays', 'Pallets & Material Handling', 'Internal Bracket Mounts'],
    oemApprovals: ['Automotive Tier-1 & White Goods'],
    tagColor: '#059669'
  },
  {
    id: 'mpl-pc-pbt-ev',
    gradeName: 'MACH-BLEND PC/PBT EV-FR',
    category: 'High Performance Blends',
    baseResin: 'Polycarbonate / PBT Alloy',
    reinforcement: 'Halogen-Free Flame Retardant V0',
    mfi: '15 - 20',
    tensileStrength: '62 MPa',
    flexuralModulus: '2,700 MPa',
    izodImpact: '45 kJ/m²',
    hdt: '128 °C',
    density: '1.25 g/cm³',
    flammability: 'UL94 V-0 (1.5mm)',
    features: ['High Dielectric Strength', 'Glow Wire 960°C Ignitability', 'Chemical Resistance (Oils & Coolants)', 'Low Warpage'],
    applications: ['EV Battery Enclosures', 'High-Voltage Junction Boxes', 'Charging Gun Housings', 'Smart Energy Meters'],
    oemApprovals: ['Schneider Electric', 'Tata Power EV', 'Minda Corporation'],
    tagColor: '#8B5CF6'
  },
  {
    id: 'mpl-pa6-gf30',
    gradeName: 'MACH-NYLON PA6 GF30',
    category: 'Engineered Plastics',
    baseResin: 'Polyamide 6 (Nylon 6)',
    reinforcement: '30% Short Glass Fiber Reinforced',
    mfi: 'N/A (Viscosity 140)',
    tensileStrength: '165 MPa',
    flexuralModulus: '8,200 MPa',
    izodImpact: '11 kJ/m²',
    hdt: '205 °C',
    density: '1.36 g/cm³',
    flammability: 'UL94 HB',
    features: ['Superior Heat Deflection', 'High Mechanical Fatigue Life', 'Oil & Fuel Impermeability', 'Precision Moldability'],
    applications: ['Engine Cylinder Covers', 'Intake Manifolds', 'Industrial Gear Housing', 'Power Tool Casings'],
    oemApprovals: ['Maruti Suzuki', 'Bosch', 'Continental Automotive'],
    tagColor: '#F59E0B'
  },
  {
    id: 'mpl-pp-fr-v0',
    gradeName: 'MACH-PP FR-V0 ULTRA',
    category: 'Polypropylene (PP)',
    baseResin: 'PP Flame Retardant Masterbatch Compound',
    reinforcement: 'Halogen-Free Eco FR Additive',
    mfi: '10 - 15',
    tensileStrength: '32 MPa',
    flexuralModulus: '2,600 MPa',
    izodImpact: '8 kJ/m²',
    hdt: '120 °C',
    density: '1.18 g/cm³',
    flammability: 'UL94 V-0 (1.0mm)',
    features: ['Non-Halogenated & RoHS Compliant', 'Low Smoke Density', 'RoHS & REACH Compliant', 'Anti-Dripping System'],
    applications: ['Home Appliance Switch Panels', 'Circuit Breaker Enclosures', 'Lighting Ballast Housings'],
    oemApprovals: ['Havells', 'Anchor Panasonic', 'Voltas'],
    tagColor: '#EF4444'
  },
  {
    id: 'mpl-pp-uv-ext',
    gradeName: 'MACH-PP WEATHER-PRO',
    category: 'Polypropylene (PP)',
    baseResin: 'PP Impact Copolymer',
    reinforcement: 'HALS UV Stabilizer + 15% Mineral',
    mfi: '20 - 25',
    tensileStrength: '26 MPa',
    flexuralModulus: '1,850 MPa',
    izodImpact: '25 kJ/m²',
    hdt: '108 °C',
    density: '1.01 g/cm³',
    flammability: 'UL94 HB',
    features: ['SAE J2527 2500hr Xenon Weathering Pass', 'Color Fastness Delta E < 1.0', 'No Chalking / Bloom', 'Sub-Zero Impact -30°C'],
    applications: ['Cowl Grilles', 'Rear Spoiler Assemblies', 'Rooftop Luggage Racks', 'Outdoor Utility Cabinets'],
    oemApprovals: ['MSIL', 'Toyota Kirloskar', 'Mahindra EV'],
    tagColor: '#06B6D4'
  }
];
