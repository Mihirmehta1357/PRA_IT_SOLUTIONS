import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDetailTemplate } from '../../components/services/ServiceDetailTemplate';

export const ServiceServersStorageBackup: React.FC = () => {
  const service = servicesData.find(s => s.slug === 'servers-storage-backup')!;
  return <ServiceDetailTemplate service={service} />;
};
