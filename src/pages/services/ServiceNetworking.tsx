import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceNetworking: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'networking')!;
  return <ServiceDetailTemplate service={service} />;
};
