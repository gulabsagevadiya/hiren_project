import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            About Precision Metal Inspection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 25 years, we've been the trusted partner for metal inspection and 
            non-destructive testing services across critical industries.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 1999 by a team of experienced metallurgical engineers and NDT specialists, 
                Precision Metal Inspection Services began with a simple mission: to provide the most 
                accurate, reliable metal inspection services in the industry.
              </p>
              <p>
                What started as a small team serving local oil and gas facilities has grown into a 
                comprehensive inspection service provider trusted by Fortune 500 companies across 
                multiple industries. Our growth has been driven by our unwavering commitment to 
                quality, safety, and customer satisfaction.
              </p>
              <p>
                Today, we maintain the same dedication to excellence that founded our company, 
                while continuously investing in the latest technology and training to stay at the 
                forefront of the inspection industry.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              alt="Our facility and inspection equipment"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">1999</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Safety First</h3>
            <p className="text-gray-600">
              Every inspection prioritizes safety for our team, your personnel, and the public.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Precision</h3>
            <p className="text-gray-600">
              Accurate, detailed inspections using the latest technology and proven methodologies.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Partnership</h3>
            <p className="text-gray-600">
              Building long-term relationships through reliable service and expert consultation.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
            <p className="text-gray-600">
              Continuous improvement and investment in training, technology, and processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}