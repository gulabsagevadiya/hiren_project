import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Ensure Your Metal Quality?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get started with professional metal inspection services today. 
            Contact us for a free consultation and detailed quote for your project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Phone className="h-8 w-8 mx-auto text-blue-200" />
              <div className="font-semibold">Call Us</div>
              <div className="text-blue-100">+91 7600869646</div>
              <div className="text-blue-100 text-sm">+91 9998110705</div>
            </div>
            <div className="text-center space-y-2">
              <Mail className="h-8 w-8 mx-auto text-blue-200" />
              <div className="font-semibold">Email Us</div>
              <div className="text-blue-100">inspectra.services@gmail.com</div>
            </div>
            <div className="text-center space-y-2">
              <Clock className="h-8 w-8 mx-auto text-blue-200" />
              <div className="font-semibold">Business Hours</div>
              <div className="text-blue-100">Mon-Fri: 9AM-6PM</div>
              <div className="text-blue-100 text-sm">Sat: 9AM-2PM</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="tel:+917600869646">Call Now</Link>
            </Button>
          </div>

          <div className="text-center text-blue-100 text-sm">
            Professional Service • Expert Team • Timely Delivery
          </div>
        </div>
      </div>
    </section>
  );
}