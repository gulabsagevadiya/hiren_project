import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  Settings, 
  Search, 
  ClipboardCheck, 
  Send,
  ArrowRight
} from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    title: 'Project Assessment',
    description: 'Review specifications, codes, and requirements to develop optimal inspection plan.',
    details: [
      'Technical specification review',
      'Code requirement analysis',
      'Method selection',
      'Timeline development'
    ]
  },
  {
    icon: Settings,
    title: 'Equipment Setup',
    description: 'Calibrate and prepare specialized NDT equipment according to applicable standards.',
    details: [
      'Equipment calibration',
      'Standard verification',
      'Safety preparation',
      'Documentation setup'
    ]
  },
  {
    icon: Search,
    title: 'Inspection Execution',
    description: 'Perform systematic inspection using certified technicians and proven procedures.',
    details: [
      'Systematic examination',
      'Data collection',
      'Real-time evaluation',
      'Quality verification'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Analysis & Evaluation',
    description: 'Analyze results against acceptance criteria and industry standards.',
    details: [
      'Data analysis',
      'Criteria comparison',
      'Defect characterization',
      'Risk assessment'
    ]
  },
  {
    icon: Send,
    title: 'Reporting & Delivery',
    description: 'Provide comprehensive reports with findings, recommendations, and certifications.',
    details: [
      'Detailed reporting',
      'Digital documentation',
      'Recommendations',
      'Certification delivery'
    ]
  }
];

export function ServiceProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Inspection Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring thorough, accurate, and compliant inspection 
            results for every project, regardless of size or complexity.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-blue-600">
                        Step {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>

                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Quality Assurance Throughout
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every step of our process includes built-in quality checks, documentation, 
              and verification to ensure the highest standards of accuracy and reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Calibrated Equipment</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">24-48h</div>
                <div className="text-gray-600">Report Delivery</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">99.8%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}