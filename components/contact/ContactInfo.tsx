import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users,
  AlertTriangle
} from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Hiren Bhai</div>
                <div className="text-gray-600">+91 7600869646</div>
                <div className="text-sm text-gray-500">Primary Contact</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Vishal Bhai</div>
                <div className="text-gray-600">+91 9998110705</div>
                <div className="text-sm text-gray-500">Secondary Contact</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">inspectra.services@gmail.com</div>
                <div className="text-sm text-gray-500">Response within 24 hours</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Address</div>
                <div className="text-gray-600">
                  Plot No-, Shed No-1, Shantidham-2,<br />
                  SIDC Road, Oorja Industrial Park-11,<br />
                  Near Sangam Technocast pvt ltd,<br />
                  Veraval(Shapar) - 360024,<br />
                  Dist Rajkot.
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">Business Hours</div>
                <div className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Button asChild className="w-full">
              <a href="tel:+917600869646">Call Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Service Areas */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Service Areas</h3>
          <div className="space-y-2 text-gray-600">
            <div>• Rajkot and Surrounding Areas</div>
            <div>• Gujarat Industrial Corridor</div>
            <div>• Nationwide for Major Projects</div>
            <div>• Mobile Services Available</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Facts */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-8 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Professional Inspection Services</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Expert Team</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Timely Service</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}