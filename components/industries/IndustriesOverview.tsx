import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Factory, 
  Fuel, 
  Building, 
  Plane, 
  Car, 
  Ship, 
  Zap, 
  Wrench 
} from 'lucide-react';

const industries = [
  {
    icon: Fuel,
    title: 'Oil & Gas',
    description: 'Comprehensive inspection services for pipelines, refineries, and offshore platforms.',
    services: ['Pipeline Integrity', 'Pressure Vessels', 'Refineries', 'Offshore Platforms'],
    standards: ['API 570', 'ASME VIII', 'B31.3']
  },
  {
    icon: Building,
    title: 'Construction',
    description: 'Structural steel inspection and testing for buildings, bridges, and infrastructure.',
    services: ['Structural Steel', 'Bridge Inspection', 'Building Safety', 'Infrastructure'],
    standards: ['AISC', 'ACI', 'AASHTO']
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Quality control and equipment inspection for production facilities.',
    services: ['Quality Control', 'Equipment Testing', 'Production Lines', 'Safety Systems'],
    standards: ['ISO 9001', 'ASME B31.3', 'AWS D1.1']
  },
  {
    icon: Zap,
    title: 'Power Generation',
    description: 'Inspection services for power plants, turbines, and electrical infrastructure.',
    services: ['Power Plants', 'Turbines', 'Generators', 'Electrical Systems'],
    standards: ['ASME Section I', 'ASME Section VIII', 'API 510']
  },
  {
    icon: Ship,
    title: 'Marine & Offshore',
    description: 'Ship hull inspection and offshore rig testing services.',
    services: ['Ship Hulls', 'Offshore Rigs', 'Marine Equipment', 'Port Infrastructure'],
    standards: ['ABS', 'DNV', 'API 2X']
  },
  {
    icon: Plane,
    title: 'Aerospace',
    description: 'Aircraft component testing and safety certification services.',
    services: ['Aircraft Components', 'Engine Testing', 'Safety Systems', 'Maintenance'],
    standards: ['AS9100', 'NADCAP', 'AMS']
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Vehicle component testing and manufacturing quality services.',
    services: ['Component Testing', 'Manufacturing QC', 'Safety Systems', 'Materials'],
    standards: ['ISO/TS 16949', 'ASTM', 'SAE']
  },
  {
    icon: Wrench,
    title: 'Heavy Equipment',
    description: 'Inspection services for construction and mining equipment.',
    services: ['Construction Equipment', 'Mining Machinery', 'Industrial Tools', 'Maintenance'],
    standards: ['ISO 9001', 'ASME B30', 'OSHA']
  }
];

export function IndustriesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Comprehensive Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized inspection services are tailored to meet the unique requirements 
            and regulatory standards of each industry we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors">
                  <industry.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{industry.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500">Key Services:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {industry.services.slice(0, 2).map((service, idx) => (
                      <div key={idx} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {service}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-medium text-gray-500">Standards:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {industry.standards.map((standard, idx) => (
                      <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        {standard}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 