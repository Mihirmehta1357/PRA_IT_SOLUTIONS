import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEO {
  title: string;
  description: string;
}

const pageSeoMap: Record<string, PageSEO> = {
  '/': {
    title: 'PRA IT SOLUTIONS | Enterprise IT Infrastructure, CCTV & Biometrics | Uran, Navi Mumbai',
    description: 'PRA IT SOLUTIONS delivers commercial CCTV surveillance, biometric access control, Cat6A structured cabling, server rack engineering & managed IT AMC support in Uran, JNPT and Navi Mumbai.',
  },
  '/about': {
    title: 'About PRA IT SOLUTIONS | Disciplined IT Engineering & Infrastructure Partner',
    description: 'Learn about PRA IT SOLUTIONS, our engineering philosophy, Uran Navi Mumbai headquarters, Fluke-tested structured cabling, and zero-compromise enterprise standards.',
  },
  '/services': {
    title: 'Enterprise IT Services Directory | PRA IT SOLUTIONS Uran Navi Mumbai',
    description: 'Explore our complete scope of services: CCTV surveillance, biometric door access, structured cabling, server infrastructure, corporate hardware supply, and AMC maintenance.',
  },
  '/services/cctv-access-control': {
    title: 'CCTV Surveillance & Biometric Access Systems | PRA IT SOLUTIONS Uran Navi Mumbai',
    description: 'Commercial IP dome/bullet cameras, NVR storage arrays, yard monitoring, high-speed biometric face and fingerprint terminals with EM locks across Uran, JNPT & Navi Mumbai.',
  },
  '/services/networking': {
    title: 'Enterprise Structured Cabling & Networking | PRA IT SOLUTIONS',
    description: 'Certified Cat6A cabling, single-mode fiber backbones, managed PoE switches, high-bay warehouse Wi-Fi, and branch-to-HQ VPN interconnects.',
  },
  '/services/it-infrastructure': {
    title: 'Server Room Infrastructure & Rack Management | PRA IT SOLUTIONS',
    description: 'Standardized 42U server cabinets, precision cable looming, PDU power distribution, and thermal monitoring for enterprise server rooms.',
  },
  '/services/servers-storage-backup': {
    title: 'Enterprise Servers, NAS Storage & 3-2-1 Backup | PRA IT SOLUTIONS',
    description: 'Tier-1 rackmount servers, Synology/QNAP NAS storage arrays, and immutable ransomware-resilient 3-2-1 backup architectures.',
  },
  '/services/managed-it-support': {
    title: 'Corporate Managed IT AMC & Onsite Support | Uran & Navi Mumbai',
    description: 'Preventive IT maintenance, 2-4 hour onsite emergency dispatch across Uran, JNPT & Navi Mumbai, helpdesk ticketing, and complete workstation upkeep.',
  },
  '/services/corporate-it': {
    title: 'Corporate IT Hardware Procurement & Genuine Licensing | PRA IT SOLUTIONS',
    description: 'Authorized commercial Dell/Lenovo/HP desktops, business laptops, monitors, thin clients, and genuine Microsoft 365 licensing with verified warranties.',
  },
  '/services/software-development': {
    title: 'Custom Business Software & Operational Dashboards | PRA IT SOLUTIONS',
    description: 'Bespoke web applications, internal dispatch tools, ERP integrations, and operational dashboards tailored to logistics and multi-site workflows.',
  },
  '/industries/logistics-industrial-it': {
    title: 'Logistics, Port & Warehouse IT Infrastructure | Uran & JNPT Corridor',
    description: 'Specialized IT solutions for container freight stations (CFS), transport fleet yards, high-bay warehouses, and weighbridge automation across Uran and JNPT.',
  },
  '/industries': {
    title: 'Industries We Serve | Enterprise IT for Operationally Intensive Sites',
    description: 'Discover how PRA IT SOLUTIONS engineers tailored infrastructure for logistics yards, warehousing hubs, manufacturing plants, corporate offices, and healthcare centers.',
  },
  '/projects': {
    title: 'Solution Blueprints & Architectural Scenarios | PRA IT SOLUTIONS',
    description: 'Detailed technical blueprints, Bill of Materials, and implementation methodologies for warehouse Wi-Fi, gate CCTV, server rooms, and multi-branch IT setups.',
  },
  '/contact': {
    title: 'Contact PRA IT SOLUTIONS | Request Quotation | Uran, Navi Mumbai Office',
    description: 'Visit our office at Kalpana Niwas, Uran, Navi Mumbai - 400702, call +91 98679 59932 / +91 77198 09134, or email sales@praitsolutions.com for an itemized quotation.',
  },
};

export const SEOHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = pageSeoMap[location.pathname] || {
      title: 'PRA IT SOLUTIONS | Enterprise IT Infrastructure, CCTV & Networks',
      description: 'Enterprise IT infrastructure, CCTV surveillance, biometric access control and managed IT support across Uran, JNPT and Navi Mumbai.',
    };

    document.title = seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', seo.description);
      document.head.appendChild(metaDesc);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://praitsolutions.com${location.pathname === '/' ? '' : location.pathname}`;
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, [location.pathname]);

  return null;
};
