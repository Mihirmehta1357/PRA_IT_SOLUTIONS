import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceCorporateIt: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'corporate-it')!;
  return <ServiceDetailTemplate service={service} />;
};
