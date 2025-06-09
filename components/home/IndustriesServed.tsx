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
    description: 'Pipeline inspection, refinery testing, offshore platform certification',
    applications: ['Pipeline Integrity', 'Pressure Vessels', 'Refineries', 'Offshore Platforms']
  },
  {
    icon: Building,
    title: 'Construction',
    description: 'Structural steel inspection, bridge testing, building safety assessment',
    applications: ['Structural Steel', 'Bridge Inspection', 'Building Safety', 'Infrastructure']
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Quality control, equipment inspection, production line testing',
    applications: ['Quality Control', 'Equipment Testing', 'Production Lines', 'Safety Systems']
  },
  {
    icon: Zap,
    title: 'Power Generation',
    description: 'Power plant inspection, turbine testing, electrical infrastructure',
    applications: ['Power Plants', 'Turbines', 'Generators', 'Electrical Systems']
  },
  {
    icon: Ship,
    title: 'Marine & Offshore',
    description: 'Ship hull inspection, offshore rig testing, maritime equipment',
    applications: ['Ship Hulls', 'Offshore Rigs', 'Marine Equipment', 'Port Infrastructure']
  },
  {
    icon: Plane,
    title: 'Aerospace',
    description: 'Aircraft component testing, engine inspection, safety certification',
    applications: ['Aircraft Components', 'Engine Testing', 'Safety Systems', 'Maintenance']
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Vehicle component testing, manufacturing quality, safety systems',
    applications: ['Component Testing', 'Manufacturing QC', 'Safety Systems', 'Materials']
  },
  {
    icon: Wrench,
    title: 'Heavy Equipment',
    description: 'Construction equipment, mining machinery, industrial tools',
    applications: ['Construction Equipment', 'Mining Machinery', 'Industrial Tools', 'Maintenance']
  }
];

export function IndustriesServed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive inspection services serve critical industries where safety, 
            quality, and compliance are paramount to operational success.
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
                <div className="space-y-1">
                  {industry.applications.slice(0, 2).map((app, idx) => (
                    <div key={idx} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {app}
                    </div>
                  ))}
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
                <div className="text-3xl lg:text-4xl font-bold">500+</div>
                <div className="text-blue-100">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">10K+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">8</div>
                <div className="text-blue-100">Major Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">25+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}