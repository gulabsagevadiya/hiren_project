import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Zero safety incidents in over 10,000 projects completed',
    value: '100%'
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'ASNT Level III certified technicians across all major NDT methods',
    value: '15+'
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: 'Repeat business from satisfied clients across industries',
    value: '98%'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'Emergency response within 2 hours for critical situations',
    value: '2hrs'
  }
];

export function IndustryStats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Industry-Leading Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our performance metrics and 
            the trust our clients place in us across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Certifications */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Industry Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-xl font-bold text-gray-900">ISO 9001</div>
                <div className="text-sm text-gray-600">Quality Management</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-xl font-bold text-gray-900">ASNT</div>
                <div className="text-sm text-gray-600">Level III Certified</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-xl font-bold text-gray-900">AWS</div>
                <div className="text-sm text-gray-600">CWI Certified</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-xl font-bold text-gray-900">API</div>
                <div className="text-sm text-gray-600">Certified Inspector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 