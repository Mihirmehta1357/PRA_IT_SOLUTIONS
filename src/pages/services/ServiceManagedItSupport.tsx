import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceManagedItSupport: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'managed-it-support')!;
  return <ServiceDetailTemplate service={service} />;
};
