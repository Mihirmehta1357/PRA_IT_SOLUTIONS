import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceCctvAccessControl: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'cctv-access-control')!;
  return <ServiceDetailTemplate service={service} />;
};
