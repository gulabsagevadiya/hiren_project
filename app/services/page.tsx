import React from 'react';
import { ServicesHero } from '@/components/services/ServicesHero';
import { NDTServices } from '@/components/services/NDTServices';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata = {
  title: 'Professional NDT & Metal Inspection Services | Precision Metal Inspection',
  description: 'Comprehensive non-destructive testing services including ultrasonic, radiographic, magnetic particle, and dye penetrant testing. Certified technicians and advanced equipment.',
  keywords: 'NDT services, ultrasonic testing, radiographic testing, magnetic particle testing, dye penetrant testing, weld inspection, material testing',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <NDTServices />
      <ServiceProcess />
      <ServiceBenefits />
      <ServiceCTA />
    </>
  );
}