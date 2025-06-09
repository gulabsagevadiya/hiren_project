import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    title: 'Quality Manager',
    company: 'Gulf Coast Refinery',
    content: 'Precision Metal has been our go-to inspection partner for over 5 years. Their attention to detail and quick turnaround times have been crucial to our operations.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Sarah Johnson',
    title: 'Project Engineer',
    company: 'Steel Bridge Construction',
    content: 'The thoroughness of their structural inspections and the clarity of their reports have made our bridge projects much more efficient and safe.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'David Chen',
    title: 'Operations Director',
    company: 'Houston Manufacturing',
    content: 'Their 24/7 emergency service saved us from a costly shutdown. The team responded within 2 hours and identified the issue immediately.',
    rating: 5,
    avatar: 'DC'
  },
  {
    name: 'Jennifer Wilson',
    title: 'Safety Coordinator',
    company: 'Offshore Energy Solutions',
    content: 'Professional, certified, and reliable. Their offshore inspection services meet all our safety requirements and regulatory compliance needs.',
    rating: 5,
    avatar: 'JW'
  }
];

const clientLogos = [
  'Shell Energy',
  'ExxonMobil',
  'Chevron',
  'ConocoPhillips',
  'Kiewit Corporation',
  'Bechtel',
  'Fluor Corporation',
  'Halliburton'
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders have to say 
            about our inspection services and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md">
              <CardContent className="p-8 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="text-gray-500 font-semibold text-lg hover:text-gray-700 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}