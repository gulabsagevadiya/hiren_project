import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Clock, FileText } from 'lucide-react';

export function ServiceCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free consultation and detailed quote. Our team is ready 
            to help with all your NDT and inspection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Options */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Our Experts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+91 7600869646</div>
                    <div className="text-sm text-gray-500">Hiren Bhai</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Secondary Contact</div>
                    <div className="text-gray-600">+91 9998110705</div>
                    <div className="text-sm text-gray-500">Vishal Bhai</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">inspectra.services@gmail.com</div>
                    <div className="text-sm text-gray-500">Response within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9AM-6PM</div>
                    <div className="text-sm text-gray-500">Sat: 9AM-2PM</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link href="tel:+917600869646">Call Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service Features */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">What You Get</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Professional Service</div>
                    <div className="text-sm text-gray-600">Expert team with years of experience in NDT services</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Timely Service</div>
                    <div className="text-sm text-gray-600">Quick response and efficient service delivery</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Detailed Reports</div>
                    <div className="text-sm text-gray-600">Comprehensive documentation with digital delivery</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Local Expertise</div>
                    <div className="text-sm text-gray-600">Serving Rajkot and surrounding areas</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="font-semibold text-blue-900">Service Areas</div>
                  <div className="text-sm text-blue-700">Rajkot and Gujarat Industrial Corridor</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <div className="text-lg text-gray-600">
            Trusted by industries across Gujarat for quality inspection services
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}