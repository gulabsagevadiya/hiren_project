import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Award } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Professional NDT & Inspection Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive non-destructive testing and material inspection services using 
              advanced equipment and certified technicians. Ensuring safety, quality, and 
              compliance across all critical applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">ASNT Level III Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">AWS CWI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">ISO 9001 Quality System</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="tel:+1-555-123-4567">Call for Emergency Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}