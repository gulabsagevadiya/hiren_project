import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  DollarSign, 
  FileCheck, 
  Users, 
  Award,
  Zap,
  Target
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Safety',
    description: 'Prevent catastrophic failures and ensure personnel safety through early defect detection.',
    value: 'Risk Reduction'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Avoid expensive repairs and downtime through preventive inspection and maintenance.',
    value: 'ROI Optimization'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'Meet all industry standards and regulatory requirements with certified inspection services.',
    value: 'Code Compliance'
  },
  {
    icon: Clock,
    title: 'Minimized Downtime',
    description: 'Fast, efficient inspections that keep your operations running with minimal interruption.',
    value: 'Operational Efficiency'
  },
  {
    icon: Target,
    title: 'Precision Results',
    description: 'Accurate defect detection and sizing using advanced equipment and certified technicians.',
    value: '99.8% Accuracy'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'ASNT Level III certified technicians with decades of combined industry experience.',
    value: '25+ Years Experience'
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'State-of-the-art NDT equipment providing superior detection capabilities.',
    value: 'Latest Equipment'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'ISO 9001 certified quality management system ensuring consistent, reliable results.',
    value: 'ISO 9001 Certified'
  }
];

export function ServiceBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose Our NDT Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive inspection services deliver measurable value through enhanced 
            safety, cost savings, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors">
                  <benefit.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
                
                <div className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {benefit.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white p-8 lg:p-12">
          <div className="text-center space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Serving Critical Industries
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our NDT services are trusted across industries where safety, quality, 
              and reliability are paramount to operational success.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-2xl lg:text-3xl font-bold">Oil & Gas</div>
                <div className="text-blue-100 text-sm">Pipelines & Refineries</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl lg:text-3xl font-bold">Construction</div>
                <div className="text-blue-100 text-sm">Structural & Infrastructure</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl lg:text-3xl font-bold">Manufacturing</div>
                <div className="text-blue-100 text-sm">Quality Control</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl lg:text-3xl font-bold">Power</div>
                <div className="text-blue-100 text-sm">Generation & Distribution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}