export interface NavLink {
  label: string;
  path: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavLink[];
}

export interface SiteConfig {
  companyName: string;
  brandMonogram: string;
  tagline: string;
  heroHeadline: {
    lead: string;
    emphasis: string;
    close: string;
  };
  heroSubcopy: string;
  gstNumber: string;
  serviceRegions: string[];
  contact: {
    email: string;
    supportEmail: string;
    phone: string;
    displayPhone: string;
    phonePrimary: string;
    displayPhonePrimary: string;
    phoneSecondary: string;
    displayPhoneSecondary: string;
    whatsappNumber: string;
    whatsappUrl: string;
    mapUrl: string;
    address: {
      line1: string;
      line2: string;
      landmark: string;
      city: string;
      district: string;
      state: string;
      postalCode: string;
      country: string;
      fullDisplay: string;
    };
    businessHours: string;
  };
  navigation: {
    primary: NavLink[];
    servicesMenu: {
      categories: {
        categoryTitle: string;
        services: {
          title: string;
          path: string;
          description: string;
        }[];
      }[];
    };
    industries: NavLink[];
    footer: {
      services: NavLink[];
      industries: NavLink[];
      company: NavLink[];
      solutions: NavLink[];
    };
  };
}

export const siteConfig: SiteConfig = {
  companyName: "PRA IT SOLUTIONS",
  brandMonogram: "PRA",
  tagline: "Technology, built around your business.",
  heroHeadline: {
    lead: "Technology,",
    emphasis: "built around",
    close: "your business.",
  },
  heroSubcopy:
    "CCTV surveillance, biometric attendance, enterprise networking, servers, storage & managed IT AMC — engineered for corporate offices, warehouses, and logistics facilities.",
  gstNumber: "27EWGPK9861K1ZQ",
  serviceRegions: [
    "Uran",
    "Navi Mumbai",
    "JNPT Port Corridor",
    "Panvel",
    "Mumbai MMR",
    "Pan-Maharashtra",
  ],
  contact: {
    email: "sales@praitsolutions.com",
    supportEmail: "sales@praitsolutions.com",
    phone: "+919867959932",
    displayPhone: "+91 98679 59932",
    phonePrimary: "+919867959932",
    displayPhonePrimary: "+91 98679 59932",
    phoneSecondary: "+917719809134",
    displayPhoneSecondary: "+91 77198 09134",
    whatsappNumber: "919867959932",
    whatsappUrl:
      "https://wa.me/919867959932?text=Hello%20PRA%20IT%20Solutions,%20I%20would%20like%20to%20discuss%20an%20IT%20requirement.",
    mapUrl:
      "https://maps.google.com/?q=Kalpana+Niwas+Fish+Market+Road+Kotnaka+Uran+Navi+Mumbai+400702",
    address: {
      line1: "Kalpana Niwas, Shop no. 1",
      line2: "Fish Market Road, Kotnaka",
      landmark: "Near Riksha Stop",
      city: "Uran, Navi Mumbai",
      district: "Raigad",
      state: "Maharashtra",
      postalCode: "400702",
      country: "India",
      fullDisplay:
        "Kalpana Niwas, Shop no. 1, Fish Market Road, Kotnaka Near Riksha Stop, Uran, Navi Mumbai - 400702, Maharashtra, India",
    },
    businessHours: "Monday to Saturday: 9:00 AM – 7:30 PM IST (Emergency AMC Support Available)",
  },
  navigation: {
    primary: [
      { label: "Services", path: "/services" },
      { label: "Solutions", path: "/industries/logistics-industrial-it" },
      { label: "Industries", path: "/industries" },
      { label: "Work", path: "/projects" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    servicesMenu: {
      categories: [
        {
          categoryTitle: "CCTV & Physical Security",
          services: [
            {
              title: "CCTV & Surveillance Infrastructure",
              path: "/services/cctv-access-control",
              description: "Commercial IP cameras, yard monitoring, NVR storage & remote viewing.",
            },
            {
              title: "Biometric Attendance & Access Control",
              path: "/services/cctv-access-control",
              description: "High-speed facial & fingerprint terminals, EM locks & shift attendance.",
            },
          ],
        },
        {
          categoryTitle: "Networks & Infrastructure",
          services: [
            {
              title: "Networking & Connectivity",
              path: "/services/networking",
              description: "Cat6A structured cabling, industrial Wi-Fi, switches, routers & VPNs.",
            },
            {
              title: "IT Infrastructure Management",
              path: "/services/it-infrastructure",
              description: "Server room rack engineering, cable loomed routing & thermal management.",
            },
            {
              title: "Servers, Storage & 3-2-1 Backup",
              path: "/services/servers-storage-backup",
              description: "Enterprise servers, NAS storage arrays & immutable backup snapshots.",
            },
          ],
        },
        {
          categoryTitle: "Workplace, Support & Software",
          services: [
            {
              title: "Managed IT Support & AMC Contracts",
              path: "/services/managed-it-support",
              description: "Preventive maintenance, rapid onsite dispatch, helpdesk & AMC upkeep.",
            },
            {
              title: "Corporate Hardware & Licensing",
              path: "/services/corporate-it",
              description: "Commercial desktops, laptops, thin clients & genuine Microsoft licenses.",
            },
            {
              title: "Software & Operational Dashboards",
              path: "/services/software-development",
              description: "Custom internal portals, dispatch tracking tools & business web applications.",
            },
          ],
        },
      ],
    },
    industries: [
      { label: "Logistics & Transport Facilities", path: "/industries/logistics-industrial-it", badge: "Strategic" },
      { label: "JNPT & CFS Container Freight Stations", path: "/industries/logistics-industrial-it" },
      { label: "Warehouses & Distribution Hubs", path: "/industries#warehousing" },
      { label: "Manufacturing & Industrial Facilities", path: "/industries#manufacturing" },
      { label: "Corporate Offices & Multi-Branch", path: "/industries#corporate" },
      { label: "Healthcare & Clinics", path: "/industries#healthcare" },
    ],
    footer: {
      services: [
        { label: "CCTV Surveillance Systems", path: "/services/cctv-access-control" },
        { label: "Biometric Attendance Terminals", path: "/services/cctv-access-control" },
        { label: "Structured Cabling & Wi-Fi", path: "/services/networking" },
        { label: "IT Infrastructure Management", path: "/services/it-infrastructure" },
        { label: "Enterprise Servers & NAS Storage", path: "/services/servers-storage-backup" },
        { label: "Corporate IT Support & AMC", path: "/services/managed-it-support" },
        { label: "Commercial Laptops & Hardware", path: "/services/corporate-it" },
        { label: "Software & Web Development", path: "/services/software-development" },
      ],
      industries: [
        { label: "Logistics Hubs & Fleet Yards", path: "/industries/logistics-industrial-it" },
        { label: "JNPT / Uran CFS Corridors", path: "/industries/logistics-industrial-it" },
        { label: "Warehousing & Cold Storage", path: "/industries" },
        { label: "Manufacturing Plants", path: "/industries" },
        { label: "Multi-Location Corporate Offices", path: "/industries" },
      ],
      company: [
        { label: "About PRA IT Solutions", path: "/about" },
        { label: "All Services Directory", path: "/services" },
        { label: "Solution Blueprints & Projects", path: "/projects" },
        { label: "Industry Expertise", path: "/industries" },
        { label: "Contact & Quotation Request", path: "/contact" },
      ],
      solutions: [
        { label: "High-Bay Warehouse Wireless", path: "/services/networking" },
        { label: "Dock & Perimeter Video Security", path: "/services/cctv-access-control" },
        { label: "Multi-Branch Maintenance AMC", path: "/services/managed-it-support" },
        { label: "3-2-1 Business Backup Architecture", path: "/services/servers-storage-backup" },
      ],
    },
  },
};
