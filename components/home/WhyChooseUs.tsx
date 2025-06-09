import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Users, 
  Clock, 
  Award, 
  FileCheck, 
  Headphones 
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Professionals',
    description: 'Our team includes ASNT Level III certified technicians and AWS Certified Welding Inspectors.',
    stat: '15+ Certifications'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Over 25 years of combined experience in metal inspection and non-destructive testing.',
    stat: '25+ Years Experience'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick response times with comprehensive reporting typically delivered within 24-48 hours.',
    stat: '24-48 Hour Reports'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'ISO 9001 certified quality management system ensuring consistent, reliable results.',
    stat: 'ISO 9001 Certified'
  },
  {
    icon: FileCheck,
    title: 'Detailed Reporting',
    description: 'Comprehensive inspection reports with clear findings, recommendations, and digital documentation.',
    stat: '100% Digital Reports'
  },
  {
    icon: Headphones,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency inspection services for critical situations and urgent needs.',
    stat: '24/7 Availability'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose Precision Metal Inspection?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of expertise with cutting-edge technology to deliver 
            unmatched inspection services that exceed industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                  {feature.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our Quality Promise
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We guarantee accurate, reliable inspection results backed by our extensive experience 
                and commitment to excellence. Every project receives the same meticulous attention 
                to detail, regardless of size or complexity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">100% Accuracy Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileCheck className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">Comprehensive Documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">Industry-Leading Standards</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
                alt="Quality inspection process"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">99.8%</div>
                  <div className="text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}