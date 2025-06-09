import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Award } from 'lucide-react';

export function IndustriesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From oil & gas to aerospace, we provide comprehensive metal inspection and NDT services 
              tailored to the unique requirements of each industry. Our expertise ensures safety, 
              compliance, and operational excellence across all critical applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Industry-Specific Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Certified Expertise</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Compliance Guaranteed</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 