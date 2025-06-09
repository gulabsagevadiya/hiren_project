import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-xl font-bold text-white">Precision Metal</div>
                <div className="text-sm text-gray-400">Inspection Services</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional metal inspection and non-destructive testing services with over 25 years of industry experience.
            </p>
            <div className="flex space-x-2">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">ISO 9001</span>
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">ASNT Level III</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">Our Services</Link>
              <Link href="/industries" className="hover:text-blue-400 transition-colors">Industries</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              <Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services#ndt" className="hover:text-blue-400 transition-colors">Non-Destructive Testing</Link>
              <Link href="/services#weld" className="hover:text-blue-400 transition-colors">Weld Inspection</Link>
              <Link href="/services#material" className="hover:text-blue-400 transition-colors">Material Testing</Link>
              <Link href="/services#pipeline" className="hover:text-blue-400 transition-colors">Pipeline Inspection</Link>
              <Link href="/services#structural" className="hover:text-blue-400 transition-colors">Structural Testing</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Main Office</div>
                  <div className="text-sm">123 Industrial Blvd<br />Houston, TX 77001</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-sm">555-123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-sm">info@precisionmetal.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Hours</div>
                  <div className="text-sm">Mon-Fri: 7AM-6PM<br />24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Precision Metal Inspection Services. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}