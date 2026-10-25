import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceSoftwareDevelopment: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'software-development')!;
  return <ServiceDetailTemplate service={service} />;
};
