import React from 'react';

export function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Visit Our Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art facility is equipped with the latest inspection equipment 
            and located in the heart of Houston's industrial district.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Map Placeholder */}
            <div className="lg:col-span-2 h-96 lg:h-[500px] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-700">Interactive Map</div>
                    <div className="text-gray-500">123 Industrial Boulevard, Houston, TX 77001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Directions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">From Downtown Houston</h4>
                  <p className="text-sm text-gray-600">
                    Take I-45 South for 8 miles, exit at Industrial Blvd, turn right. 
                    Our facility is on the left after 0.5 miles.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">From Bush Intercontinental Airport</h4>
                  <p className="text-sm text-gray-600">
                    Take I-45 South for 35 miles, exit at Industrial Blvd, turn right. 
                    Approximately 45-minute drive.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <p className="text-sm text-gray-600">
                    Free parking available on-site. Visitor parking is located 
                    in front of the main building.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordinates:</span>
                    <span className="text-gray-900">29.7604, -95.3698</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nearest Highway:</span>
                    <span className="text-gray-900">I-45 South</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance from Airport:</span>
                    <span className="text-gray-900">35 miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}