import React from 'react';
import { IndustriesHero } from '@/components/industries/IndustriesHero';
import { IndustriesOverview } from '@/components/industries/IndustriesOverview';
import { IndustrySolutions } from '@/components/industries/IndustrySolutions';
import { IndustryStats } from '@/components/industries/IndustryStats';
import { CallToAction } from '@/components/home/CallToAction';

export const metadata = {
  title: 'Industries We Serve - Precision Metal Inspection Services',
  description: 'Comprehensive metal inspection and NDT services for oil & gas, construction, manufacturing, power generation, and other critical industries.',
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustrySolutions />
      <IndustryStats />
      <CallToAction />
    </>
  );
} 