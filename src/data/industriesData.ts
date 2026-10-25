export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  overview: string;
  keyChallenges: string[];
  recommendedSolutions: {
    title: string;
    description: string;
    serviceSlug: string;
  }[];
  illustrativeScenario: {
    title: string;
    challenge: string;
    architecture: string;
    outcome: string;
  };
}

export const industriesData: IndustryItem[] = [
  {
    id: "logistics-industrial-it",
    slug: "logistics-industrial-it",
    title: "Logistics, Transport & Industrial IT",
    tagline: "Connected operations start with dependable IT.",
    icon: "Truck",
    overview:
      "Operational intensity defines transport, fleet, and logistics facilities. Metal racking attenuates wireless signals, dust impacts unsealed hardware, and loading yards require continuous 24/7 perimeter surveillance. PRA engineers rugged IT infrastructure, high-bay directional Wi-Fi, secure inter-branch VPNs, and physical security systems purpose-built for harsh operational environments.",
    keyChallenges: [
      "Metal warehouse racking and steel framing scattering standard office Wi-Fi signals",
      "Dust, temperature fluctuations, and vibration degrading consumer desktop hardware",
      "Perimeter blindspots, gate congestion, and cargo dispute verification at loading bays",
      "Fragmented connectivity between remote dispatch yards, weighbridges, and corporate head office",
      "Risk of data loss or ransomware stalling daily transport manifests and billing",
    ],
    recommendedSolutions: [
      {
        title: "High-Bay Narrow-Beam Industrial Wi-Fi",
        description: "Industrial access points with directional down-tilt antennas maintaining continuous links for handheld scanners and forklift terminals.",
        serviceSlug: "networking",
      },
      {
        title: "Perimeter, Gate & Loading Dock Surveillance",
        description: "High-definition IP cameras with Wide Dynamic Range (WDR) and night vision capturing license plates, container numbers, and cargo handling.",
        serviceSlug: "cctv-access-control",
      },
      {
        title: "Branch-to-HQ Secure VPN Interconnect",
        description: "Automated IPsec failover tunnels connecting remote yards, weighbridges, and distribution hubs back to central ERP databases.",
        serviceSlug: "networking",
      },
      {
        title: "Ruggedized Workstations & Thin Clients",
        description: "Enclosed, dust-resistant terminals and barcode peripherals built for rough handling at dispatch counters.",
        serviceSlug: "corporate-it",
      },
      {
        title: "Immutable 3-2-1 Local & Offsite Backup",
        description: "Automated daily snapshot architecture protecting critical manifests and billing records from hardware crashes and cyber threats.",
        serviceSlug: "servers-storage-backup",
      },
    ],
    illustrativeScenario: {
      title: "Multi-Location Logistics Facility Network & Surveillance Setup",
      challenge:
        "A regional transport business operating an 80,000 sq ft central hub and 4 regional yards experienced frequent barcode scanner disconnects in deep storage aisles, had unmonitored blindspots at the rear vehicle gate, and lacked standardized IT maintenance.",
      architecture:
        "PRA deployed 12 industrial PoE access points with directional aisle antennas, 32 high-resolution IP surveillance cameras with dual NVR redundancy, a unified 42U server rack with battery backup, and configured site-to-site VPN tunnels with automated 4G/dual-broadband failover.",
      outcome:
        "Zero wireless dead zones across all storage aisles, complete tamper-evident video coverage for vehicle arrivals and loading bays, and 99.8% network uptime across all four branch locations.",
    },
  },
  {
    id: "warehousing",
    slug: "warehousing",
    title: "Warehousing & Distribution Hubs",
    tagline: "Resilient data networks and asset visibility across high-bay storage facilities.",
    icon: "Boxes",
    overview:
      "Distribution centers operate around fast inventory turnover and tight dispatch schedules. When barcode scanners drop offline or thermal label printers stall, trucks line up outside the gate. We design structured cabling, high-density industrial Wi-Fi, and rugged workstation environments that withstand heavy warehouse operations.",
    keyChallenges: [
      "Tall racking acting as electromagnetic shields causing dead zones in central aisles",
      "Long cable runs exceeding copper limits requiring fiber optic distribution backbones",
      "Dust and packaging debris accumulating inside workstation power supplies and cooling fans",
      "Strict security requirements for high-value bonded storage zones and returns processing",
    ],
    recommendedSolutions: [
      {
        title: "Fiber Optic Backbone & Industrial Switching",
        description: "Multi-mode fiber runs linking remote warehouse wall-boxes back to the central server rack.",
        serviceSlug: "networking",
      },
      {
        title: "High-Aisle IP Surveillance & NVR Recording",
        description: "Strategic camera layouts covering picking lanes, packing tables, and dock doors.",
        serviceSlug: "cctv-access-control",
      },
      {
        title: "Scheduled Hardware Preventive Servicing",
        description: "Regular physical blowouts and filter changes preventing thermal failure of billing computers.",
        serviceSlug: "managed-it-support",
      },
    ],
    illustrativeScenario: {
      title: "Omnichannel Distribution Center Infrastructure Modernization",
      challenge:
        "A major consumer goods distributor faced packet loss across long copper cable runs, causing inventory sync delays between picking tablets and their cloud WMS.",
      architecture:
        "Installed OM4 multi-mode fiber uplinks between three sub-distribution IDF racks, replaced unmanaged hubs with enterprise PoE switches, and configured dedicated Wi-Fi SSIDs for handheld terminals.",
      outcome:
        "Sub-millisecond local network latency, zero scanner dropouts during peak shifts, and clean cable management in all distribution racks.",
    },
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing & Industrial Facilities",
    tagline: "Bridging corporate IT networks and industrial shop-floor environments.",
    icon: "Factory",
    overview:
      "Modern factories require reliable IT infrastructure to connect production machines, quality testing benches, inventory stores, and administrative offices. We implement shielded cabling that resists electromagnetic interference (EMI), perimeter security, and air-gapped backups protecting proprietary CAD and production drawings.",
    keyChallenges: [
      "Severe electromagnetic interference from heavy motors, CNC machines, and welders",
      "Biometric attendance failures due to grease, moisture, or dust on employee fingers",
      "Strict intellectual property protection requirements for design files and proprietary recipes",
      "Coordinating access between shop floor workers, supervisors, and outside contractors",
    ],
    recommendedSolutions: [
      {
        title: "Shielded Cat6A Cabling & Conduit Protection",
        description: "Industrial cabling with foil shielding and metal conduit paths mitigating shop-floor electrical noise.",
        serviceSlug: "networking",
      },
      {
        title: "Contactless Facial Recognition Attendance",
        description: "High-speed facial terminals eliminating false rejections caused by dirty or wet fingerprints.",
        serviceSlug: "cctv-access-control",
      },
      {
        title: "Air-Gapped CAD & Database Backup",
        description: "Isolated repository backups shielding critical manufacturing drawings from malware.",
        serviceSlug: "servers-storage-backup",
      },
    ],
    illustrativeScenario: {
      title: "Auto-Component Manufacturing Plant Network & Access Overhaul",
      challenge:
        "Production supervisors reported frequent network freezes on test-bench PCs due to motor interference, and fingerprint biometric attendance created long queues at the shift-change gate.",
      architecture:
        "Replaced unshielded cabling with Cat6A STP in grounded metal conduits, separated shop floor SCADA equipment into an isolated VLAN, and installed dual facial-recognition biometric turnstiles.",
      outcome:
        "Complete elimination of network packet errors on the factory line and 4x faster employee throughput at shift transitions.",
    },
  },
  {
    id: "corporate",
    slug: "corporate",
    title: "Corporate Offices & Multi-Branch Businesses",
    tagline: "Standardized workplace technology, flawless video meetings, and managed IT care.",
    icon: "Building2",
    overview:
      "Corporate teams need fast internet, clear video conferencing, zero downtime on financial systems, and rapid helpdesk resolution when laptops glitch. PRA delivers end-to-end IT for head offices and branch networks: enterprise Wi-Fi, Microsoft 365 migrations, commercial laptops, and proactive maintenance contracts.",
    keyChallenges: [
      "Slow internet during simultaneous company-wide video calls and large file transfers",
      "Unmanaged personal laptops and non-genuine software creating security and compliance risks",
      "Complex onboarding workflows when adding new staff across multiple cities",
      "Unreliable conference room hardware causing frustrating delays in executive client calls",
    ],
    recommendedSolutions: [
      {
        title: "Enterprise Office Wi-Fi & QoS Bandwidth Shaping",
        description: "Bandwidth allocation prioritizing Microsoft Teams, Zoom, and ERP traffic over general browsing.",
        serviceSlug: "networking",
      },
      {
        title: "Standardized Commercial Fleet Deployment",
        description: "Pre-imaged Dell/Lenovo business laptops with BitLocker encryption and automated software provisioning.",
        serviceSlug: "corporate-it",
      },
      {
        title: "Predictable IT Support AMC",
        description: "Dedicated helpdesk resolving everyday user issues, email configs, and OS errors.",
        serviceSlug: "managed-it-support",
      },
    ],
    illustrativeScenario: {
      title: "50-Workstation Financial Advisory HQ Infrastructure Setup",
      challenge:
        "A growing corporate office moved to a new floor with zero existing IT infrastructure, needing turnkey cabling, high-density Wi-Fi, conference room technology, and access control within 3 weeks.",
      architecture:
        "Structured Cat6 cabling to 56 desk ports, 4 ceiling-mounted Wi-Fi 6 APs, dual-WAN failover firewall, EM-lock glass door access with RFID badges, and Microsoft 365 cloud email configuration.",
      outcome:
        "On-time project delivery, seamless day-one onboarding for all staff, and zero IT disruption during client video calls.",
    },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Diagnostic Facilities",
    tagline: "Always-on connectivity and strict data integrity for clinics and diagnostic labs.",
    icon: "HeartPulse",
    overview:
      "Clinics and diagnostic centers handle sensitive patient records, medical imaging files (PACS), and continuous lab machine data. System downtime can directly delay patient treatment. PRA implements high-availability local storage, quiet server racks, sterile-safe biometric terminals, and secure patient data backup.",
    keyChallenges: [
      "Zero tolerance for downtime during patient consultations and diagnostic reporting",
      "Large PACS medical imaging files requiring high-throughput internal network bandwidth",
      "Strict patient data privacy and confidentiality requirements",
      "Medical equipment requiring isolated network subnets to prevent malware cross-infection",
    ],
    recommendedSolutions: [
      {
        title: "10GbE Medical Imaging (PACS) Network Storage",
        description: "High-speed NAS storage enabling instantaneous retrieval of high-resolution digital X-rays and MRI scans.",
        serviceSlug: "servers-storage-backup",
      },
      {
        title: "Medical Device Network Segmentation",
        description: "Isolated VLANs preventing lab instruments from accessing general public internet.",
        serviceSlug: "security",
      },
      {
        title: "Contactless Access Control for Clean Zones",
        description: "Facial and wave-to-open contactless door sensors for operating rooms and sterile laboratories.",
        serviceSlug: "cctv-access-control",
      },
    ],
    illustrativeScenario: {
      title: "Multi-Speciality Diagnostic Center Network & PACS Storage",
      challenge:
        "A diagnostic center with MRI, CT, and ultrasound labs experienced severe delays when loading patient scans onto consulting doctors' workstations.",
      architecture:
        "Deployed a dedicated 10GbE network core connecting high-capacity TrueNAS storage arrays to doctor workstations via dedicated Cat6A links, with automated daily encrypted backups.",
      outcome:
        "Scan retrieval times reduced from 45 seconds to under 2 seconds, with complete backup redundancy.",
    },
  },
  {
    id: "education",
    slug: "education",
    title: "Educational Institutions & Campuses",
    tagline: "Secure campus connectivity, student lab management, and campus-wide safety surveillance.",
    icon: "GraduationCap",
    overview:
      "Schools, colleges, and training institutes face unique IT challenges: high device density in classrooms, open student Wi-Fi requiring strict content filtering, computer lab standardization, and comprehensive campus perimeter safety. PRA delivers campus-grade networking, lab PC maintenance, and IP CCTV surveillance.",
    keyChallenges: [
      "Hundreds of student smartphones simultaneously connecting and overloading consumer Wi-Fi",
      "Need for strict content filtering blocking adult, gaming, and malicious domains on student networks",
      "Frequent student computer lab software corruption requiring rapid re-imaging",
      "Campus perimeter safety and hallway monitoring across multiple buildings",
    ],
    recommendedSolutions: [
      {
        title: "Campus Wi-Fi with Captive Portal & Content Filtering",
        description: "High-density access points with bandwidth quotas and robust firewall web filtering.",
        serviceSlug: "networking",
      },
      {
        title: "Computer Lab Maintenance & Automated Re-Imaging",
        description: "Centralized disk imaging allowing 60 lab computers to be restored to clean state with one click.",
        serviceSlug: "managed-it-support",
      },
      {
        title: "Campus-Wide IP Surveillance & Emergency Gates",
        description: "Long-range outdoor bullet cameras and gate access tracking across school boundaries.",
        serviceSlug: "cctv-access-control",
      },
    ],
    illustrativeScenario: {
      title: "Integrated Campus IT Infrastructure Deployment",
      challenge:
        "An educational campus with 800+ students had unmanaged Wi-Fi that crashed during examinations and lacked centralized CCTV coverage for sports fields and bus parking zones.",
      architecture:
        "Configured outdoor and indoor enterprise APs with captive portal authentication, rolled out Next-Gen Firewall content filtering, and installed 48 IP cameras across perimeter fences and bus loading bays.",
      outcome:
        "Reliable internet during online examinations, full compliance with campus safety directives, and clean bandwidth allocation.",
    },
  },
];
