import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Microscope, 
  Zap, 
  Wrench, 
  Gauge, 
  Building, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'Non-Destructive Testing',
    description: 'Ultrasonic, radiographic, magnetic particle, and liquid penetrant testing methods.',
    features: ['UT Testing', 'RT Inspection', 'MT Analysis', 'PT Examination'],
    href: '/services#ndt'
  },
  {
    icon: Zap,
    title: 'Weld Inspection',
    description: 'Comprehensive weld quality assessment and certification services.',
    features: ['Visual Inspection', 'AWS Standards', 'CWI Certified', 'Code Compliance'],
    href: '/services#weld'
  },
  {
    icon: Wrench,
    title: 'Material Testing',
    description: 'Mechanical and chemical properties analysis for material certification.',
    features: ['Tensile Testing', 'Hardness Testing', 'Impact Testing', 'Chemical Analysis'],
    href: '/services#material'
  },
  {
    icon: Gauge,
    title: 'Pressure Testing',
    description: 'Hydrostatic and pneumatic testing for pressure vessels and pipelines.',
    features: ['Hydrostatic Test', 'Pneumatic Test', 'Leak Detection', 'Pressure Certification'],
    href: '/services#pressure'
  },
  {
    icon: Building,
    title: 'Structural Inspection',
    description: 'Comprehensive structural integrity assessment and monitoring.',
    features: ['Load Testing', 'Fatigue Analysis', 'Crack Detection', 'Structural Health'],
    href: '/services#structural'
  },
  {
    icon: Gauge,
    title: 'Pipeline Services',
    description: 'Specialized pipeline inspection and integrity management services.',
    features: ['Inline Inspection', 'Corrosion Assessment', 'Pipeline Mapping', 'Integrity Management'],
    href: '/services#pipeline'
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Comprehensive Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From non-destructive testing to material analysis, we provide complete inspection solutions 
            that ensure safety, compliance, and quality across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}