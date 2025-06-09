import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, FileCheck, Users } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
    details: 'Certified quality management system ensuring consistent, high-quality service delivery.',
    validUntil: '2025',
    category: 'Quality'
  },
  {
    icon: Award,
    title: 'ASNT Level III',
    description: 'American Society for Nondestructive Testing',
    details: 'Multiple Level III certified technicians in UT, RT, MT, and PT methods.',
    validUntil: 'Current',
    category: 'Technical'
  },
  {
    icon: FileCheck,
    title: 'AWS Certified Welding Inspector',
    description: 'American Welding Society Certification',
    details: 'Certified Welding Inspectors qualified to inspect structural and pressure vessel welds.',
    validUntil: 'Current',
    category: 'Welding'
  },
  {
    icon: Users,
    title: 'API 570/510/653',
    description: 'American Petroleum Institute Certifications',
    details: 'Piping, pressure vessel, and tank inspection certifications for oil & gas industry.',
    validUntil: 'Current',
    category: 'Industry'
  }
];

const complianceStandards = [
  'ASME Boiler & Pressure Vessel Code',
  'AWS D1.1 Structural Welding Code',
  'API 570 Piping Inspection Code',
  'API 510 Pressure Vessel Inspection Code',
  'API 653 Tank Inspection Code',
  'NACE International Standards',
  'ASTM International Standards',
  'ANSI/ASNT Standards'
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications and adherence to industry standards ensure the highest 
            quality and compliance in all our inspection services.
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <cert.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                      <Badge variant="secondary">{cert.category}</Badge>
                    </div>
                    <p className="text-blue-600 font-medium">{cert.description}</p>
                    <p className="text-gray-600 leading-relaxed">{cert.details}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Valid until:</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {cert.validUntil}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center space-y-6 mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Industry Standards Compliance
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with all major industry standards and codes, 
              ensuring our inspections meet or exceed regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="text-sm font-medium text-gray-700">{standard}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
              <Shield className="h-5 w-5" />
              <span className="font-medium">All certifications current and up-to-date</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}