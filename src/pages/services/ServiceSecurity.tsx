import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceSecurity: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'security')!;
  return <ServiceDetailTemplate service={service} />;
};
