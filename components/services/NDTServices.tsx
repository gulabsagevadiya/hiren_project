import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Radio, 
  Magnet, 
  Droplets, 
  Gauge, 
  Wrench,
  Building,
  Microscope
} from 'lucide-react';

const ndtServices = [
  {
    id: 'ultrasonic',
    icon: Zap,
    title: 'Ultrasonic Testing (UT)',
    description: 'High-frequency sound waves detect internal flaws, measure thickness, and assess material integrity.',
    applications: [
      'Thickness measurement',
      'Flaw detection in welds',
      'Corrosion mapping',
      'Bond integrity testing'
    ],
    advantages: [
      'Deep penetration capability',
      'Precise flaw sizing',
      'Real-time results',
      'Portable equipment'
    ],
    standards: ['ASTM E114', 'ASME V', 'AWS D1.1'],
    equipment: 'Advanced phased array and conventional UT systems'
  },
  {
    id: 'radiographic',
    icon: Radio,
    title: 'Radiographic Testing (RT)',
    description: 'X-ray and gamma ray imaging reveals internal discontinuities and structural details.',
    applications: [
      'Weld quality assessment',
      'Casting inspection',
      'Pipeline integrity',
      'Structural analysis'
    ],
    advantages: [
      'Permanent film record',
      'Excellent sensitivity',
      'Volumetric inspection',
      'Industry standard method'
    ],
    standards: ['ASTM E94', 'ASME V', 'API 1104'],
    equipment: 'Digital radiography systems and conventional film techniques'
  },
  {
    id: 'magnetic-particle',
    icon: Magnet,
    title: 'Magnetic Particle Testing (MT)',
    description: 'Magnetic fields and iron particles detect surface and near-surface discontinuities in ferromagnetic materials.',
    applications: [
      'Surface crack detection',
      'Weld inspection',
      'Fatigue crack monitoring',
      'Quality control testing'
    ],
    advantages: [
      'Fast inspection method',
      'Highly sensitive to cracks',
      'Cost-effective',
      'Immediate results'
    ],
    standards: ['ASTM E709', 'ASME V', 'AWS D1.1'],
    equipment: 'Wet and dry magnetic particle systems with UV lighting'
  },
  {
    id: 'dye-penetrant',
    icon: Droplets,
    title: 'Dye Penetrant Testing (PT)',
    description: 'Liquid penetrant reveals surface-breaking discontinuities in non-porous materials.',
    applications: [
      'Surface crack detection',
      'Porosity identification',
      'Leak detection',
      'Non-magnetic material testing'
    ],
    advantages: [
      'Works on all materials',
      'Highly portable',
      'Cost-effective',
      'Easy interpretation'
    ],
    standards: ['ASTM E165', 'ASME V', 'AWS D1.1'],
    equipment: 'Visible and fluorescent penetrant systems'
  },
  {
    id: 'pressure-testing',
    icon: Gauge,
    title: 'Pressure Testing',
    description: 'Hydrostatic and pneumatic testing verifies pressure vessel and pipeline integrity.',
    applications: [
      'Pressure vessel certification',
      'Pipeline testing',
      'Leak detection',
      'Strength verification'
    ],
    advantages: [
      'Proof testing capability',
      'Leak detection',
      'Code compliance',
      'Safety verification'
    ],
    standards: ['ASME VIII', 'API 570', 'B31.3'],
    equipment: 'High-pressure pumps and precision monitoring systems'
  },
  {
    id: 'material-testing',
    icon: Microscope,
    title: 'Material Testing',
    description: 'Mechanical and chemical analysis determines material properties and composition.',
    applications: [
      'Tensile strength testing',
      'Hardness measurement',
      'Chemical analysis',
      'Impact testing'
    ],
    advantages: [
      'Material verification',
      'Quality assurance',
      'Failure analysis',
      'Code compliance'
    ],
    standards: ['ASTM A370', 'ASME IX', 'AWS D1.1'],
    equipment: 'Universal testing machines and portable hardness testers'
  },
  {
    id: 'weld-inspection',
    icon: Wrench,
    title: 'Weld Inspection',
    description: 'Comprehensive weld quality assessment using multiple NDT methods and visual inspection.',
    applications: [
      'Pre-weld preparation',
      'In-process monitoring',
      'Final inspection',
      'Code compliance verification'
    ],
    advantages: [
      'Multi-method approach',
      'CWI certified inspectors',
      'Complete documentation',
      'Code compliance'
    ],
    standards: ['AWS D1.1', 'ASME IX', 'API 1104'],
    equipment: 'Complete weld inspection toolkit and documentation systems'
  },
  {
    id: 'structural-inspection',
    icon: Building,
    title: 'Structural Inspection',
    description: 'Comprehensive structural integrity assessment for buildings, bridges, and infrastructure.',
    applications: [
      'Bridge inspection',
      'Building assessment',
      'Infrastructure monitoring',
      'Load testing'
    ],
    advantages: [
      'Safety assurance',
      'Preventive maintenance',
      'Code compliance',
      'Risk assessment'
    ],
    standards: ['AISC', 'ACI', 'AASHTO'],
    equipment: 'Advanced NDT equipment and structural monitoring systems'
  }
];

export function NDTServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Complete NDT Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of non-destructive testing services covers all major 
            inspection methods with certified technicians and state-of-the-art equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ndtServices.map((service, index) => (
            <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Advantages</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {advantage}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Standards & Codes</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.standards.map((standard, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {standard}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Equipment</h4>
                  <p className="text-sm text-gray-600">{service.equipment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}