import React from 'react';

export function CompanyStats() {
  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Companies Served' },
    { number: '10,000+', label: 'Inspections Completed' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '15+', label: 'Certified Technicians' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}