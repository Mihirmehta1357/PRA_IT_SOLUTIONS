import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceItInfrastructure: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'it-infrastructure')!;
  return <ServiceDetailTemplate service={service} />;
};
