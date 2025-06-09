import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    name: 'Robert Johnson',
    title: 'President & CEO',
    credentials: ['PE', 'ASNT Level III'],
    experience: '30+ years',
    specialties: ['NDT Leadership', 'Quality Systems', 'Industry Standards'],
    bio: 'Robert founded the company with a vision to provide the highest quality inspection services. His extensive background in metallurgy and NDT has shaped our company culture.',
    initials: 'RJ'
  },
  {
    name: 'Dr. Sarah Martinez',
    title: 'Chief Technical Officer',
    credentials: ['PhD Materials Science', 'ASNT Level III', 'AWS CWI'],
    experience: '25+ years',
    specialties: ['Materials Engineering', 'Failure Analysis', 'R&D'],
    bio: 'Dr. Martinez leads our technical innovation and ensures our methods meet the latest industry standards and technological advances.',
    initials: 'SM'
  },
  {
    name: 'Michael Chen',
    title: 'Operations Manager',
    credentials: ['ASNT Level III', 'AWS CWI', 'API 570'],
    experience: '20+ years',
    specialties: ['Pipeline Inspection', 'Pressure Vessels', 'Team Leadership'],
    bio: 'Michael oversees all field operations, ensuring consistent quality and safety across all our inspection projects.',
    initials: 'MC'
  },
  {
    name: 'Jennifer Wilson',
    title: 'Quality Assurance Director',
    credentials: ['ASNT Level III', 'ISO 9001 Lead Auditor'],
    experience: '18+ years',
    specialties: ['Quality Systems', 'Compliance', 'Process Improvement'],
    bio: 'Jennifer maintains our ISO certification and ensures all procedures meet the highest quality standards.',
    initials: 'JW'
  },
  {
    name: 'David Rodriguez',
    title: 'Senior NDT Technician',
    credentials: ['ASNT Level II', 'AWS CWI', 'NACE CP-2'],
    experience: '15+ years',
    specialties: ['Ultrasonic Testing', 'Radiographic Testing', 'Weld Inspection'],
    bio: 'David is one of our most experienced field technicians, known for his precision and attention to detail.',
    initials: 'DR'
  },
  {
    name: 'Lisa Thompson',
    title: 'Client Relations Manager',
    credentials: ['PMP', 'Business Administration'],
    experience: '12+ years',
    specialties: ['Project Management', 'Client Communication', 'Business Development'],
    bio: 'Lisa ensures smooth project execution and maintains strong relationships with our valued clients.',
    initials: 'LT'
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the certified professionals who bring decades of experience and expertise 
            to every inspection project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-4">
                  <Avatar className="h-20 w-20 mx-auto">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.title}</p>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Credentials</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((cred, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {cred}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}