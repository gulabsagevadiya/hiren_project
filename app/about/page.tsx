import React from 'react';
import { CompanyStory } from '@/components/about/CompanyStory';
import { TeamSection } from '@/components/about/TeamSection';
import { CertificationsSection } from '@/components/about/CertificationsSection';
import { CompanyStats } from '@/components/about/CompanyStats';

export const metadata = {
  title: 'About Us - Precision Metal Inspection Services',
  description: 'Learn about our 25+ years of metal inspection expertise, certified team, and commitment to quality assurance across all industries.',
};

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <CompanyStats />
      <TeamSection />
      <CertificationsSection />
    </>
  );
}