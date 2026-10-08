export interface PlantFacility {
  id: string;
  name: string;
  location: string;
  state: string;
  capacity: string;
  linesCount: string;
  specialization: string;
  certifications: string[];
  features: string[];
  coordinates: { x: number; y: number }; // percentage on map
}

export interface LabTestEquipment {
  name: string;
  purpose: string;
  standard: string;
  category: 'Mechanical' | 'Thermal' | 'Rheological' | 'Weathering & Analytical';
}

export const PLANTS_DATA: PlantFacility[] = [
  {
    id: 'plant-gurugram',
    name: 'Gurugram Facility & Corporate HQ',
    location: 'Plot 41-43, Sector 32, Gurugram',
    state: 'Haryana (Northern Hub)',
    capacity: '60,000 MT / Year',
    linesCount: '6 High-Torque Twin Screw Lines',
    specialization: 'Automotive Primer PP Compounds, Interior/Exterior Masterbatches, Color Matching',
    certifications: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'GRS Scope Certified'],
    features: ['Real-time NIR in-line quality monitors', 'Automated pneumatic pellet conveying', 'Direct OEM conveyor dispatch'],
    coordinates: { x: 38, y: 32 }
  },
  {
    id: 'plant-gujarat',
    name: 'Gujarat Manufacturing Plant',
    location: 'Sanand / Halol Automotive Corridor',
    state: 'Gujarat (Western Hub)',
    capacity: '45,000 MT / Year',
    linesCount: '4 High-Capacity Compounding Extruders',
    specialization: 'Long Glass Fiber (LGF-PP), Underbody Composites, EV Battery Tray Alloys',
    certifications: ['IATF 16949:2016', 'ISO 14001:2015'],
    features: ['High-volume continuous compounding', 'Solar-powered green manufacturing setup', 'Close proximity to Western auto OEMs'],
    coordinates: { x: 26, y: 52 }
  },
  {
    id: 'plant-chennai',
    name: 'Chennai Facility',
    location: 'Sriperumbudur Industrial Hub',
    state: 'Tamil Nadu (Southern Hub)',
    capacity: '30,000 MT / Year',
    linesCount: '3 Advanced Extrusion Lines',
    specialization: 'Appliance Compounds, Flame Retardant V0, Electrical Switchgear Polymers',
    certifications: ['IATF 16949:2016', 'ISO 9001:2015'],
    features: ['Cleanroom compounding capability', 'Specialized flame-retardant additive dosing lines'],
    coordinates: { x: 48, y: 82 }
  },
  {
    id: 'plant-manesar',
    name: 'Manesar Advanced Compounding Unit',
    location: 'IMT Manesar, Gurugram',
    state: 'Haryana',
    capacity: '15,000 MT / Year',
    linesCount: '2 Specialized Pilot & Recycled Lines',
    specialization: 'PlusCircular™ PCR/PIR Processing & Deodorization, High-Performance Polymer Blends',
    certifications: ['GRS Scope Certified', 'IATF 16949:2016'],
    features: ['Multi-stage melt filtration', 'Intense vacuum degassing for VOC removal', 'MIRAC Pilot Scale Compounding'],
    coordinates: { x: 37, y: 36 }
  }
];

export const MIRAC_DETAILS = {
  fullName: 'Machino Innovative Research & Application Center',
  acronym: 'MIRAC',
  heroImage: '/images/mirac-lab.jpg',
  certifications: [
    { title: 'DSIR Recognized R&D Center', subtitle: 'Ministry of Science & Technology, Govt. of India' },
    { title: 'NABL Accredited Laboratory', subtitle: 'ISO/IEC 17025:2017 Testing & Calibration' }
  ],
  capabilities: [
    'Custom Polymer Alloy Synthesis & Compounding',
    'OEM Co-Development & Part Failure Analysis',
    'Accelerated Environmental & UV Weathering',
    'Advanced Flame Retardance & Thermal Profiling',
    'Circular Polymer Deodorization & Molecular Upgrading'
  ],
  equipmentList: [
    {
      name: 'Universal Testing Machine (UTM) Instron',
      purpose: 'Tensile strength, elongation, flexural modulus, multi-axial stress strain',
      standard: 'ASTM D638 / ISO 527',
      category: 'Mechanical'
    },
    {
      name: 'Zwick / Roell Izod & Charpy Impact Tester',
      purpose: 'Notched & unnotched impact toughness from -40°C to +80°C',
      standard: 'ASTM D256 / ISO 179',
      category: 'Mechanical'
    },
    {
      name: 'Melt Flow Indexer (MFI Dynisco)',
      purpose: 'Precision polymer melt flow rate and rheology profile',
      standard: 'ASTM D1238 / ISO 1133',
      category: 'Rheological'
    },
    {
      name: 'Differential Scanning Calorimeter (DSC - TA Instruments)',
      purpose: 'Crystallinity, glass transition temperature (Tg), melting point, OIT oxidation index',
      standard: 'ASTM D3418 / ISO 11357',
      category: 'Thermal'
    },
    {
      name: 'Thermogravimetric Analyzer (TGA)',
      purpose: 'Filler percentage verification (talc, glass fiber, carbon) and thermal decomposition',
      standard: 'ASTM E1131 / ISO 11358',
      category: 'Thermal'
    },
    {
      name: 'Atlas Xenon Arc Weather-Ometer',
      purpose: 'Accelerated UV sunlight weathering, humidity cycling, color shift (Delta E)',
      standard: 'SAE J2527 / ISO 4892-2',
      category: 'Weathering & Analytical'
    },
    {
      name: 'UL94 Vertical & Horizontal Flame Chamber',
      purpose: 'Flammability classification (V-0, V-1, V-2, HB) and glow wire test (IEC 60695)',
      standard: 'UL94 / IEC 60695-2-12',
      category: 'Thermal'
    },
    {
      name: 'X-Rite Color Spectrophotometer',
      purpose: 'Precision color delta matching and gloss measurement at 20°/60°/85°',
      standard: 'ASTM E1331 / ISO 2813',
      category: 'Weathering & Analytical'
    }
  ] as LabTestEquipment[]
};
