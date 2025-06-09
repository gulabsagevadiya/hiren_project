import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Microscope, 
  Zap, 
  Wrench, 
  Gauge, 
  Building, 
  ArrowRight 
} from 'lucide-react';

const solutions = [
  {
    icon: Microscope,
    title: 'Non-Destructive Testing',
    description: 'Advanced NDT methods for comprehensive material and component inspection.',
    industries: ['Oil & Gas', 'Power Generation', 'Aerospace', 'Manufacturing'],
    methods: ['Ultrasonic Testing', 'Radiographic Testing', 'Magnetic Particle Testing', 'Liquid Penetrant Testing']
  },
  {
    icon: Zap,
    title: 'Weld Inspection',
    description: 'Comprehensive weld quality assessment and certification services.',
    industries: ['Construction', 'Marine & Offshore', 'Heavy Equipment', 'Automotive'],
    methods: ['Visual Inspection', 'AWS Standards', 'CWI Certified', 'Code Compliance']
  },
  {
    icon: Wrench,
    title: 'Material Testing',
    description: 'Mechanical and chemical properties analysis for material certification.',
    industries: ['Manufacturing', 'Aerospace', 'Automotive', 'Power Generation'],
    methods: ['Tensile Testing', 'Hardness Testing', 'Impact Testing', 'Chemical Analysis']
  },
  {
    icon: Gauge,
    title: 'Pressure Testing',
    description: 'Hydrostatic and pneumatic testing for pressure vessels and pipelines.',
    industries: ['Oil & Gas', 'Power Generation', 'Marine & Offshore', 'Manufacturing'],
    methods: ['Hydrostatic Test', 'Pneumatic Test', 'Leak Detection', 'Pressure Certification']
  },
  {
    icon: Building,
    title: 'Structural Inspection',
    description: 'Comprehensive structural integrity assessment and monitoring.',
    industries: ['Construction', 'Marine & Offshore', 'Heavy Equipment', 'Manufacturing'],
    methods: ['Load Testing', 'Fatigue Analysis', 'Crack Detection', 'Structural Health']
  }
];

export function IndustrySolutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of inspection and testing services is designed to meet 
            the unique challenges and requirements of each industry we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 mt-2">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Industries Served</h4>
                    <div className="space-y-2">
                      {solution.industries.map((industry, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                          {industry}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Testing Methods</h4>
                    <div className="space-y-2">
                      {solution.methods.map((method, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white p-8 lg:p-12">
          <div className="text-center space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Trusted Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">8</div>
                <div className="text-blue-100">Major Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">25+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">500+</div>
                <div className="text-blue-100">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">10K+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 