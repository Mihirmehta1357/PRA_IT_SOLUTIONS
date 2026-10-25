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
  contact: {
    email: string;
    supportEmail: string;
    phone: string;
    displayPhone: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    businessHours: string;
    whatsappNumber?: string;
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
    "Thoughtful software, connected infrastructure and dependable IT services—designed around how your business works.",
  contact: {
    email: "contact@praitsolutions.com",
    supportEmail: "support@praitsolutions.com",
    phone: "+918041239080",
    displayPhone: "+91 80 4123 9080",
    address: {
      line1: "Prestige Tech Park, Outer Ring Road",
      line2: "Marathahalli-Sarjapur Junction",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560103",
      country: "India",
    },
    businessHours: "Monday to Saturday: 9:00 AM – 6:30 PM IST",
    whatsappNumber: "+919876543210",
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
          categoryTitle: "Infrastructure & Networks",
          services: [
            {
              title: "IT Infrastructure Management",
              path: "/services/it-infrastructure",
              description: "End-to-end server, network and physical IT lifecycle management.",
            },
            {
              title: "Networking & Connectivity",
              path: "/services/networking",
              description: "Structured cabling, industrial Wi-Fi, switches, routers & secure VPNs.",
            },
            {
              title: "Servers, Storage & Backup",
              path: "/services/servers-storage-backup",
              description: "On-premises servers, NAS storage, local & hybrid backup architectures.",
            },
          ],
        },
        {
          categoryTitle: "Security & Physical Systems",
          services: [
            {
              title: "Cybersecurity & Data Protection",
              path: "/services/security",
              description: "Firewall deployment, endpoint protection, email security & posture review.",
            },
            {
              title: "CCTV, Surveillance & Access Control",
              path: "/services/cctv-access-control",
              description: "Site surveillance, NVR systems, biometric access & entry monitoring.",
            },
          ],
        },
        {
          categoryTitle: "Support, Hardware & Software",
          services: [
            {
              title: "Managed IT Support & AMC",
              path: "/services/managed-it-support",
              description: "Preventive maintenance, helpdesk, onsite support & annual contracts.",
            },
            {
              title: "Corporate IT Hardware & Software",
              path: "/services/corporate-it",
              description: "Commercial PCs, laptops, thin clients, enterprise software & genuine licensing.",
            },
            {
              title: "Software, Web & Mobile Development",
              path: "/services/software-development",
              description: "Custom internal portals, web applications, dashboards & integrations.",
            },
          ],
        },
      ],
    },
    industries: [
      { label: "Logistics & Industrial IT", path: "/industries/logistics-industrial-it", badge: "Strategic" },
      { label: "Warehousing & Distribution", path: "/industries#warehousing" },
      { label: "Manufacturing & Industrial", path: "/industries#manufacturing" },
      { label: "Corporate Offices & Multi-Branch", path: "/industries#corporate" },
      { label: "Healthcare & Clinics", path: "/industries#healthcare" },
      { label: "Education & Institutions", path: "/industries#education" },
    ],
    footer: {
      services: [
        { label: "IT Infrastructure Management", path: "/services/it-infrastructure" },
        { label: "Networking & Connectivity", path: "/services/networking" },
        { label: "Cybersecurity & Data Protection", path: "/services/security" },
        { label: "CCTV & Access Control", path: "/services/cctv-access-control" },
        { label: "Servers, Storage & Backup", path: "/services/servers-storage-backup" },
        { label: "Managed IT Support & AMC", path: "/services/managed-it-support" },
        { label: "Corporate Hardware & Licensing", path: "/services/corporate-it" },
        { label: "Software & Web Development", path: "/services/software-development" },
      ],
      industries: [
        { label: "Logistics & Transport Facilities", path: "/industries/logistics-industrial-it" },
        { label: "Warehouses & Distribution Hubs", path: "/industries" },
        { label: "Manufacturing Plants & Yards", path: "/industries" },
        { label: "Multi-Location Corporate Offices", path: "/industries" },
        { label: "Healthcare Facilities", path: "/industries" },
      ],
      company: [
        { label: "About PRA IT Solutions", path: "/about" },
        { label: "All Services Directory", path: "/services" },
        { label: "Solution Scenarios & Projects", path: "/projects" },
        { label: "Industry Expertise", path: "/industries" },
        { label: "Contact & Quote Request", path: "/contact" },
      ],
      solutions: [
        { label: "Warehouse Wireless & Cabling", path: "/services/networking" },
        { label: "Yard & Perimeter Surveillance", path: "/services/cctv-access-control" },
        { label: "Enterprise Backup Architecture", path: "/services/servers-storage-backup" },
        { label: "Multi-Site Maintenance AMC", path: "/services/managed-it-support" },
      ],
    },
  },
};
