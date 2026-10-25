export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  category: "infrastructure" | "security" | "support" | "workplace" | "software";
  categoryLabel: string;
  tagline: string;
  icon: string;
  heroImage: string;
  overview: string;
  summaryPoints: string[];
  scope: {
    heading: string;
    description: string;
    items: string[];
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  technicalHighlights: {
    title: string;
    detail: string;
  }[];
  engagementModels: {
    title: string;
    description: string;
    bestFor: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure Management",
    subtitle: "End-to-End Infrastructure Lifecycle, Capacity Planning & Reliability",
    category: "infrastructure",
    categoryLabel: "Core Infrastructure",
    tagline: "Building the silent, dependable backbone that powers everyday business operations.",
    icon: "Server",
    heroImage: "/images/hero-server-rack.jpg",
    overview:
      "Enterprise operations depend on reliable hardware, disciplined cable management, clean power distribution, and vigilant system administration. PRA IT Solutions plans, deploys, and maintains physical and virtual infrastructure for multi-workstation offices, warehouse distribution hubs, and industrial branches.",
    summaryPoints: [
      "Objective assessment of existing racks, servers, storage, and networking hardware",
      "Disciplined cable routing, server racking, labeling, and thermal management",
      "Preventive maintenance schedules reducing unexpected equipment downtime",
      "Clear asset registers and vendor coordination for warranty and lifecycle upgrades",
    ],
    scope: [
      {
        heading: "Infrastructure Assessment & Audits",
        description: "Baseline audit of physical racks, power delivery, heat load, cable health, and switch capacities.",
        items: [
          "Rack space utilization and cable pathway inspection",
          "Power backup (UPS) load calculations and battery health check",
          "Thermal load analysis and ventilation verification",
          "Complete hardware inventory and configuration mapping",
        ],
      },
      {
        heading: "Server Room & Rack Engineering",
        description: "Professional rack installations designed for ease of maintenance, cooling, and clear identification.",
        items: [
          "Standard 19-inch 24U/42U server rack assembly and grounding",
          "Patch panel termination, port color-coding, and durable labeling",
          "Cable tray management eliminating wire bird's nests",
          "UPS redundancy configuration and safe automated shutdown scripting",
        ],
      },
      {
        heading: "Preventive Maintenance & Lifecycle Management",
        description: "Scheduled health checks to catch degrading power supplies, failing disks, and dust accumulation.",
        items: [
          "Biannual internal physical cleaning and filter replacement",
          "Firmware updates on enterprise switches, SANs, and server boards",
          "Hardware health monitoring (fan RPM, PSU voltages, disk S.M.A.R.T.)",
          "Hardware upgrade path planning before reaching end-of-service-life",
        ],
      },
      {
        heading: "Multi-Location Branch Infrastructure Support",
        description: "Uniform infrastructure standards across head offices, remote warehouses, and dispatch hubs.",
        items: [
          "Standardized branch IT rack schematics and hardware Bill-of-Materials",
          "Remote out-of-band management setup for remote site troubleshooting",
          "Vendor coordination for third-party warranty dispatch",
          "Periodic multi-site status and capacity utilization reports",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Site Survey",
        description: "We document existing equipment, physical space, electrical supplies, cooling, and pain points.",
      },
      {
        step: "02",
        title: "Topology & Rack Design",
        description: "Clear architectural schematics showing rack layout, cable pathways, and power distribution.",
      },
      {
        step: "03",
        title: "Structured Execution",
        description: "Clean racking, labeling, structured cabling, configuration, and end-to-end testing.",
      },
      {
        step: "04",
        title: "Handover & Lifecycle Support",
        description: "Comprehensive asset documentation, network diagram delivery, and ongoing preventive maintenance.",
      },
    ],
    technicalHighlights: [
      {
        title: "Cable Organization",
        detail: "Zero messy tangles: bundle-tied, velcro-fastened, and numbered at both patch panel and drop.",
      },
      {
        title: "Thermal Efficiency",
        detail: "Separation of cold intake and hot exhaust aisles to maximize equipment lifespan.",
      },
      {
        title: "Power Redundancy",
        detail: "Dual-circuit routing where supported, with automated UPS load shedding for critical servers.",
      },
    ],
    engagementModels: [
      {
        title: "Installation & Modernization Project",
        description: "One-time complete overhaul, server room re-racking, cabling cleanup, and asset documentation.",
        bestFor: "Relocations, office buildouts, or remediation of messy legacy server rooms.",
      },
      {
        title: "Comprehensive Annual Maintenance Contract (AMC)",
        description: "Scheduled preventive maintenance, emergency incident response, and component servicing.",
        bestFor: "Established operations needing predictable operational upkeep without full-time staff.",
      },
      {
        title: "Fully Managed Infrastructure",
        description: "Continuous health tracking, proactive patching, lifecycle management, and regular executive reports.",
        bestFor: "Mid-sized businesses and multi-site distribution operators.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between an installation project and an ongoing AMC?",
        answer:
          "An installation project delivers a turnkey, documented, tested physical setup. An AMC provides ongoing operational assurance: periodic physical servicing, firmware patching, emergency troubleshooting, and warranty coordination.",
      },
      {
        question: "Can PRA re-organize an existing 'spaghetti' server rack without shutting down business operations?",
        answer:
          "Yes. We schedule cabling overhauls during planned maintenance windows (weekends or overnight) with pre-labeled jumpers and phased reconnections to minimize operational downtime.",
      },
      {
        question: "Do you supply the server racks and accessories, or can we procure them directly?",
        answer:
          "Both options are supported. We can supply enterprise-grade racks, PDUs, and cable trays, or work with your existing procurement channels based on detailed technical specifications we provide.",
      },
    ],
    ctaText: "Discuss Your Infrastructure",
  },
  {
    slug: "networking",
    title: "Networking & Connectivity",
    subtitle: "Enterprise Structured Cabling, Business Wi-Fi, Switching & Secure Inter-Branch WAN",
    category: "infrastructure",
    categoryLabel: "Connectivity",
    tagline: "High-throughput, clean-routed data backbones engineered for offices, warehouses, and industrial yards.",
    icon: "Network",
    heroImage: "/images/network-switch-cabling.jpg",
    overview:
      "A sluggish or drop-prone network stalls warehouse picking, freezes billing terminals, and hampers team collaboration. PRA designs, installs, and tunes robust local area networks (LAN), industrial wireless deployments, and secure multi-location interconnects (IPsec / SD-WAN) built on enterprise hardware.",
    summaryPoints: [
      "Cat6/Cat6A structured cabling with fluke-certified testing and labeled terminations",
      "High-density commercial and industrial Wi-Fi engineered around metal racking and interference",
      "VLAN network segmentation separating corporate data, CCTV feeds, and guest access",
      "Secure site-to-site VPN tunnels connecting head office, warehouses, and branch locations",
    ],
    scope: [
      {
        heading: "Structured Cabling & Fiber Backbones",
        description: "Certified copper and optical fiber cabling for campus, warehouse, and multi-floor office settings.",
        items: [
          "Cat6 / Cat6A unshielded and shielded twisted-pair runs in conduit/trays",
          "Single-mode and multi-mode fiber optic backbone runs between distribution racks",
          "Patch panel punch-downs with sequential numbering and clear zone maps",
          "Fluke channel/link testing verifying wiremap, length, attenuation, and NEXT",
        ],
      },
      {
        heading: "Commercial & Industrial Wi-Fi Solutions",
        description: "Predictive RF planning and access point deployment for seamless warehouse and office coverage.",
        items: [
          "Heatmap-guided placement accounting for concrete pillars, steel beams, and high racks",
          "Industrial APs with external directional antennas for tall-aisle logistics yards",
          "Seamless 802.11k/v/r fast roaming for mobile barcode scanners and tablets",
          "Secure WPA3-Enterprise authentication and isolated guest portal with bandwidth limits",
        ],
      },
      {
        heading: "Managed Switching & Routing Infrastructure",
        description: "Layer 2 / Layer 3 managed switches configured for traffic prioritization and fault isolation.",
        items: [
          "Spanning Tree Protocol (RSTP/MSTP) preventing accidental network loops",
          "Quality of Service (QoS) prioritizing real-time voice (VoIP) and video traffic",
          "Link Aggregation (LACP) providing high-throughput redundant uplinks",
          "Power over Ethernet (PoE/PoE+) calculations ensuring stable CCTV and AP power",
        ],
      },
      {
        heading: "Site-to-Site VPN & Remote Access",
        description: "Encrypted tunnels connecting distributed branch offices, dispatch yards, and remote teams.",
        items: [
          "IPsec site-to-site tunnels with automated failover across dual broadband/leased lines",
          "Secure client-based remote access (WireGuard / OpenVPN / SSL VPN) with multi-factor authentication",
          "Split-tunneling policies preserving core business bandwidth",
          "Router access control lists (ACLs) enforcing zero unnecessary exposure",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Survey & Heatmap",
        description: "We inspect cable pathways, conduit feasibility, RF interference sources, and rack locations.",
      },
      {
        step: "02",
        title: "Network Topology Design",
        description: "Schematic outlining core switches, edge switches, VLAN boundaries, and fiber links.",
      },
      {
        step: "03",
        title: "Physical Pull & Termination",
        description: "Disciplined pulling through designated trays/pipes, punch-down, and labeling at both ends.",
      },
      {
        step: "04",
        title: "Certification & Validation",
        description: "Full wire certification, throughput testing, Wi-Fi coverage validation, and documentation.",
      },
    ],
    technicalHighlights: [
      {
        title: "VLAN Separation",
        detail: "Isolation of security cameras and biometric readers from sensitive financial databases.",
      },
      {
        title: "Warehouse AP Tuning",
        detail: "Antenna down-tilt and TX power adjustment preventing co-channel interference along aisles.",
      },
      {
        title: "Dual-WAN Failover",
        detail: "Automated route failover so a cut fiber line switches internet traffic seamlessly to secondary ISP.",
      },
    ],
    engagementModels: [
      {
        title: "Greenfield Cabling & Network Rollout",
        description: "Complete design, conduit fitting, cabling, switch config, and AP installation for new facilities.",
        bestFor: "New warehouses, renovated offices, or factory additions.",
      },
      {
        title: "Network Remediation & Wi-Fi Optimization",
        description: "Troubleshooting dropouts, eliminating bottlenecks, and re-terminating failing connections.",
        bestFor: "Locations experiencing slow speeds, frequent disconnects, or unmanaged growth.",
      },
      {
        title: "Multi-Branch Managed Network Support",
        description: "Ongoing switch management, firmware updates, and bandwidth monitoring across all branches.",
        bestFor: "Multi-branch companies needing consistent network oversight.",
      },
    ],
    faqs: [
      {
        question: "Why does Wi-Fi in high-rack warehouses often fail with consumer or standard office APs?",
        answer:
          "High metallic racking and shifting inventory stacks act as RF shields, while standard omni antennas scatter signal horizontally into metal. Industrial APs with narrow beamwidth directional antennas focus RF energy down aisles, maintaining connectivity for moving forklifts and hand-scanners.",
      },
      {
        question: "Do you provide test reports for structured cabling?",
        answer:
          "Yes. For all structured cabling projects, we provide certified test reports verifying cable continuity, wiremap, length, signal loss, and cross-talk performance.",
      },
      {
        question: "Can PRA help configure redundant internet connections from two different ISPs?",
        answer:
          "Yes. We configure multi-WAN edge routers and firewalls with policy-based routing, health-check monitors, and automatic failover to keep critical systems online.",
      },
    ],
    ctaText: "Discuss Your Network Requirements",
  },
  {
    slug: "security",
    title: "Cybersecurity & Data Protection",
    subtitle: "Next-Gen Firewalls, Endpoint Defense, Email Filtering & Pragmatic Security Posture",
    category: "security",
    categoryLabel: "Defense & Integrity",
    tagline: "Practical, multi-layered security controls protecting business assets against ransomware, phishing, and data loss.",
    icon: "ShieldCheck",
    heroImage: "/images/operations-center.jpg",
    overview:
      "Modern cyber threats rarely arrive via dramatic movie-style intrusions—they infiltrate via deceptive email attachments, unpatched desktop software, and open remote desktop ports. PRA implements disciplined, defense-in-depth security architectures suited to growing corporate and operational environments.",
    summaryPoints: [
      "Hardware firewall deployment with stateful inspection, intrusion prevention (IPS), and GeoIP blocking",
      "Centrally managed endpoint detection and antivirus for corporate desktops, laptops, and servers",
      "Corporate email security featuring SPF, DKIM, DMARC validation, and anti-phishing protection",
      "Disciplined patch management and vulnerability surface reduction without disrupting work",
    ],
    scope: [
      {
        heading: "Next-Generation Firewall (NGFW) Deployment",
        description: "Securing network perimeters with granular application control and content filtering.",
        items: [
          "Perimeter firewall deployment (Fortinet, Sophos, pfSense, or enterprise preferred)",
          "Deep packet inspection and automated Intrusion Prevention Systems (IPS)",
          "Restricted outbound egress filtering preventing compromised machines from beaconing C2 servers",
          "Granular web filtering preventing access to high-risk malware domains and illicit content",
        ],
      },
      {
        heading: "Centrally Managed Endpoint Security",
        description: "Shielding laptops, desktops, and file servers against malware, ransomware, and unauthorized devices.",
        items: [
          "Centralized cloud/on-prem dashboard monitoring endpoint health across all employees",
          "Behavioral ransomware shielding that terminates unauthorized encryption attempts",
          "USB port storage restriction preventing unauthorized flash drive data extraction",
          "Automated signature and heuristic engine updates with minimal system overhead",
        ],
      },
      {
        heading: "Email Security & Anti-Phishing Safeguards",
        description: "Hardening business email domains against spoofing, impersonation, and malicious attachments.",
        items: [
          "Implementation and validation of SPF, DKIM, and DMARC DNS policies",
          "Inbound attachment sandboxing and suspicious link rewriting",
          "Display-name spoofing protection for executive and finance mailboxes",
          "Safe mailbox authentication practices enforcing multi-factor authentication (MFA)",
        ],
      },
      {
        heading: "Access Control & Attack Surface Reduction",
        description: "Closing unnecessary open ports and establishing least-privilege administrative practices.",
        items: [
          "Elimination of direct internet-exposed Remote Desktop (RDP) ports",
          "Role-based network access separating guest devices, IoT sensors, and corporate assets",
          "Privilege separation: preventing regular day-to-day work under domain admin accounts",
          "Pragmatic data protection guidelines aligned with modern Indian business regulatory awareness",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Perimeter & Posture Audit",
        description: "We review external port exposure, firewall rules, endpoint software status, and email DNS records.",
      },
      {
        step: "02",
        title: "Hardening Roadmap",
        description: "Prioritized recommendations addressing immediate vulnerabilities first (e.g. exposed RDP, weak DNS).",
      },
      {
        step: "03",
        title: "Firewall & Agent Rollout",
        description: "Phased deployment of firewall policies and managed endpoint agents across workstations.",
      },
      {
        step: "04",
        title: "Monitoring & Review",
        description: "Routine alert review, firmware security updates, and quarterly security posture checks.",
      },
    ],
    technicalHighlights: [
      {
        title: "Zero Open RDP",
        detail: "All remote administrative access routed through encrypted VPNs with mandatory MFA.",
      },
      {
        title: "DMARC Enforcement",
        detail: "Protecting your brand domain from being used by scammers to send fake invoices to your clients.",
      },
      {
        title: "Air-Gapped Recovery",
        detail: "Ensuring backup copies cannot be deleted or encrypted by ransomware running on the primary network.",
      },
    ],
    engagementModels: [
      {
        title: "Firewall & Security Deployment Project",
        description: "Turnkey hardware firewall installation, network segmentation, and endpoint protection rollout.",
        bestFor: "Companies upgrading their internet perimeter or responding to security audit findings.",
      },
      {
        title: "Security Hardening & Review",
        description: "Independent audit of external attack surface, active directory policies, and email authentication.",
        bestFor: "Organizations preparing for vendor compliance reviews or client security questionnaires.",
      },
      {
        title: "Managed Security Oversight (AMC)",
        description: "Ongoing firewall firmware maintenance, endpoint alert triage, and policy updates.",
        bestFor: "Companies seeking active security administration without hiring in-house security analysts.",
      },
    ],
    faqs: [
      {
        question: "Does installing a firewall guarantee our company will never be hacked?",
        answer:
          "No reputable security provider can promise 100% invulnerability. Security is a continuous process of defense-in-depth: firewalls block unauthorized network probes, endpoint software catches malicious executables, email filters intercept phishing, and air-gapped backups ensure you can recover if an employee clicks a bad link.",
      },
      {
        question: "How do your solutions assist with Indian data protection norms (DPDP)?",
        answer:
          "We implement technical safeguards: role-based access control, network segmentation, storage encryption, and audit logs. While legal compliance involves organizational policies and data governance, our technical infrastructure ensures your digital assets meet standard data hygiene and security diligence.",
      },
      {
        question: "Can we install endpoint protection on employees' remote laptops?",
        answer:
          "Yes. Our centralized endpoint solutions use lightweight cloud-connected agents that enforce security policies, block malicious websites, and report malware incidents regardless of where employees are working.",
      },
    ],
    ctaText: "Discuss Your Security Requirements",
  },
  {
    slug: "cctv-access-control",
    title: "CCTV, Surveillance & Access Control",
    subtitle: "High-Definition IP Surveillance, Yard Monitoring, Biometric Attendance & Physical Access",
    category: "security",
    categoryLabel: "Physical Systems",
    tagline: "Total site visibility, perimeter security, and verifiable personnel entry for offices, gates, and warehouses.",
    icon: "Camera",
    heroImage: "/images/warehouse-logistics-it.jpg",
    overview:
      "Physical security is the first line of defense for logistics yards, factories, and corporate offices. PRA designs and installs commercial-grade IP CCTV systems, Network Video Recorders (NVR), outdoor perimeter cameras, and biometric attendance systems that provide clear visual evidence and verifiable employee access logs.",
    summaryPoints: [
      "High-resolution 4MP/4K IP surveillance cameras with infrared night vision and wide dynamic range",
      "Specialized perimeter, loading dock, vehicle gate, and warehouse tall-aisle camera placement",
      "Network Video Recorder (NVR) sizing providing adequate retention days without frame drops",
      "Biometric fingerprint, facial recognition, and RFID access-control turnstiles and door locks",
    ],
    scope: [
      {
        heading: "Commercial IP CCTV Surveillance Architecture",
        description: "End-to-end IP video systems engineered for high fidelity, low light, and reliable recording.",
        items: [
          "Fixed dome cameras for office interiors, corridors, reception, and cashier stations",
          "Weatherproof IP67 bullet and turret cameras for outdoor parking, perimeter walls, and dispatch bays",
          "PTZ (Pan-Tilt-Zoom) cameras for active yard monitoring and vehicle movement tracking",
          "Wide Dynamic Range (WDR) sensors preventing washed-out images at sunny warehouse shutter entrances",
        ],
      },
      {
        heading: "NVR Storage & Remote Monitoring Setup",
        description: "Reliable storage calculations ensuring recordings are preserved for required compliance windows.",
        items: [
          "Enterprise surveillance-grade hard drives (WD Purple / Seagate SkyHawk) engineered for 24/7 write duty",
          "H.265+ smart video compression maximizing storage efficiency without degrading critical details",
          "Isolated CCTV VLAN preventing security cameras from saturating primary office internet",
          "Secure remote viewing on authorized manager laptops and mobile devices via encrypted streams",
        ],
      },
      {
        heading: "Biometric Attendance & Access Control",
        description: "Regulating entry to server rooms, corporate offices, and warehouse floors with automated logging.",
        items: [
          "High-speed optical fingerprint and contactless facial recognition terminals",
          "Electromagnetic (EM) door locks, drop bolts, and emergency exit push-bars with power backup",
          "Role-based time-slot access (e.g. cleaning crew permitted only during authorized hours)",
          "Centralized attendance management software integration with payroll CSV exports",
        ],
      },
      {
        heading: "Loading Dock & Gate Operations Coverage",
        description: "Specialized optical placement designed for transport hubs, fleet yards, and distribution centers.",
        items: [
          "High-angle overview cameras monitoring loading and unloading bays to resolve cargo dispute claims",
          "Entry gate cameras angled for clear vehicle number plate and driver facial capture",
          "Strobe and two-way audio integration for remote perimeter warning deterrence",
          "UPS battery backup keeping surveillance online during grid power transitions",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Walkthrough & Blindspot Analysis",
        description: "We evaluate lighting conditions, entrance points, yard perimeters, and cabling distances.",
      },
      {
        step: "02",
        title: "Camera Field-of-View Mapping",
        description: "Selection of focal lengths (2.8mm wide vs 6mm narrow) ensuring proper identification range.",
      },
      {
        step: "03",
        title: "Conduit, Cabling & Mounting",
        description: "Outdoor UV-resistant Cat6 cabling in PVC/metal conduits with surge protection at building entries.",
      },
      {
        step: "04",
        title: "NVR Tuning & Staff Training",
        description: "Motion detection zones, recording schedule setup, retention verification, and app training.",
      },
    ],
    technicalHighlights: [
      {
        title: "Dedicated CCTV VLAN",
        detail: "Camera streams never contend with employee internet traffic or video calls.",
      },
      {
        title: "Surveillance Drive Duty",
        detail: "We use only surveillance-rated drives rated for continuous 24/7 video writes, avoiding desktop drive failures.",
      },
      {
        title: "Smart Search",
        detail: "Find specific incidents quickly using motion-region filtering rather than scrubbing days of footage.",
      },
    ],
    engagementModels: [
      {
        title: "Turnkey CCTV & Access Installation",
        description: "Complete equipment supply, cabling, mounting, NVR configuration, and commissioning.",
        bestFor: "New premises, facility expansions, or replacing degraded analog camera setups.",
      },
      {
        title: "CCTV System AMC & Maintenance",
        description: "Quarterly camera lens cleaning, angle adjustments, NVR HDD health checks, and quick repairs.",
        bestFor: "Enterprises with extensive camera counts that cannot afford undetected recording failures.",
      },
      {
        title: "Biometric & Door Access Upgrades",
        description: "Retrofitting modern facial-recognition or card locks onto existing corporate glass or wooden doors.",
        bestFor: "Offices seeking modern contactless entry and automated attendance tracking.",
      },
    ],
    faqs: [
      {
        question: "What is the practical difference between analog HD cameras and IP network cameras?",
        answer:
          "IP cameras digitize video onboard and transmit high-bandwidth digital data over standard Cat6 ethernet, offering sharper detail, digital zoom without extreme pixelation, simpler cabling via PoE (Power over Ethernet), and superior encryption.",
      },
      {
        question: "How many days of video recordings can our NVR store?",
        answer:
          "Storage duration depends on camera resolution, bitrate, frame rate, motion triggers, and hard drive capacity. We calculate the exact hard drive terabytes needed to guarantee your required retention window (e.g. 15, 30, or 60 days).",
      },
      {
        question: "Can biometric attendance systems link to our payroll software?",
        answer:
          "Yes. Our attendance management software can generate standard shift reports, overtime records, and export CSV/Excel files compatible with standard Indian payroll and ERP systems.",
      },
    ],
    ctaText: "Request a CCTV Site Assessment",
  },
  {
    slug: "servers-storage-backup",
    title: "Servers, Storage & Backup",
    subtitle: "On-Premises Servers, Network Attached Storage (NAS), Virtualization & Resilient Recovery",
    category: "infrastructure",
    categoryLabel: "Core Systems",
    tagline: "Protecting business data against drive failures, accidental deletions, and operational disasters.",
    icon: "Database",
    heroImage: "/images/hero-server-rack.jpg",
    overview:
      "Your company's financial databases, customer records, contracts, and application servers are your most valuable intangible assets. PRA configures resilient server hardware, high-capacity centralized storage (NAS/SAN), and disciplined automated backup pipelines that test for recovery, not just file copying.",
    summaryPoints: [
      "Enterprise rack and tower server deployment with hardware RAID for zero-interruption disk swaps",
      "Centralized Network Attached Storage (NAS) with granular user permissions and active directory sync",
      "Automated, multi-tier backup following the 3-2-1 rule (local snapshot + air-gapped on-prem + secure offsite)",
      "Periodic disaster recovery restoration drills verifying that backups actually restore cleanly",
    ],
    scope: [
      {
        heading: "Enterprise Server Deployment & Virtualization",
        description: "Sizing and installing dependable compute hardware tailored to your application workloads.",
        items: [
          "Deployment of enterprise servers (Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem)",
          "Hardware RAID array configuration (RAID 1, 5, 6, 10) with hot-spare disk provisions",
          "Type-1 hypervisor installation (VMware ESXi, Proxmox VE, Microsoft Hyper-V) for workload consolidation",
          "Out-of-band management setup (iDRAC / iLO) allowing remote power cycling and hardware diagnostics",
        ],
      },
      {
        heading: "Centralized Storage (NAS & SAN)",
        description: "Eliminating scattered desktop storage with high-reliability centralized shared pools.",
        items: [
          "Enterprise NAS deployment (Synology, QNAP, TrueNAS) for department shared folders",
          "Windows Active Directory / LDAP integration for single-sign-on folder permissions",
          "Immutable Btrfs/ZFS snapshots shielding files from accidental deletion and ransomware tampering",
          "10GbE SFP+ / RJ45 high-speed connectivity for large design, accounting, and database files",
        ],
      },
      {
        heading: "The 3-2-1 Backup Architecture",
        description: "Bulletproof data protection ensuring that no single physical event can destroy business history.",
        items: [
          "3 copies of critical business data across 2 different physical storage media",
          "1 copy kept offsite in an encrypted, geographically isolated cloud or secondary branch",
          "Deduplicated, incremental image-level backups of entire virtual machines and system states",
          "Automated daily email reports alerting administrators of any job failures or quota limits",
        ],
      },
      {
        heading: "Disaster Recovery Planning & Verification",
        description: "Because an untested backup is only a wish. We verify recovery runbooks before emergencies occur.",
        items: [
          "Clear Recovery Time Objective (RTO) and Recovery Point Objective (RPO) documentation",
          "Quarterly test restoration drills on sandbox VMs to verify database integrity",
          "Bare-metal recovery documentation for critical domain controllers and ERP servers",
          "Emergency operational runbook detailing step-by-step restoration procedures",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Data & Workload Inventory",
        description: "We map out core applications, database sizes, daily change rates, and acceptable downtime.",
      },
      {
        step: "02",
        title: "Hardware & RAID Architecture",
        description: "Compute and storage capacity sizing including IOPS, RAM headroom, and growth projections.",
      },
      {
        step: "03",
        title: "Installation & Migration",
        description: "Racking, RAID initialization, hypervisor setup, VM configuration, and verified data migration.",
      },
      {
        step: "04",
        title: "Backup & Restore Drill",
        description: "Automated schedule activation followed by a mandatory live restore test to verify data fidelity.",
      },
    ],
    technicalHighlights: [
      {
        title: "Backup vs. Recovery",
        detail: "Having backup files is useless if you don't have compatible hardware or a proven restore procedure.",
      },
      {
        title: "Hot-Spare Disks",
        detail: "RAID arrays automatically rebuild onto an idling spare disk the instant a mechanical drive fails.",
      },
      {
        title: "Ransomware Immutability",
        detail: "Read-only snapshots that cannot be modified or deleted even if admin credentials are compromised.",
      },
    ],
    engagementModels: [
      {
        title: "Server & Storage Commissioning Project",
        description: "Turnkey procurement, hardware assembly, RAID setup, hypervisor tuning, and data migration.",
        bestFor: "Upgrading aging hardware, consolidating multiple towers into a clean rack server.",
      },
      {
        title: "Managed Backup & Disaster Recovery Service",
        description: "Ongoing daily backup monitoring, failure triage, space management, and quarterly test restores.",
        bestFor: "Firms needing guaranteed data protection without burdening in-house staff.",
      },
      {
        title: "Storage Expansion & NAS Setup",
        description: "Deploying high-capacity network storage for document archiving, CAD files, or accounting backups.",
        bestFor: "Growing businesses outgrowing localized USB external drives and desktop folders.",
      },
    ],
    faqs: [
      {
        question: "Why isn't copying files to an external USB drive considered a proper business backup?",
        answer:
          "USB drives rely on human discipline to plug in, lack automated verification, have high mechanical failure rates, offer no version history if a file was corrupted weeks ago, and are vulnerable to being encrypted by ransomware if left connected.",
      },
      {
        question: "What is the difference between RTO and RPO?",
        answer:
          "RPO (Recovery Point Objective) is how much data you can afford to lose measured in time (e.g. 4 hours of transactions). RTO (Recovery Time Objective) is how long it takes to restore systems back online (e.g. 2 hours after a server crash). We design systems around these targets.",
      },
      {
        question: "Do you support hybrid cloud backup for on-premises servers?",
        answer:
          "Yes. We configure hybrid setups where fast local snapshots allow instant restoration of accidental file deletions, while nightly encrypted differentials sync to secure cloud repositories for disaster survival.",
      },
    ],
    ctaText: "Discuss Infrastructure & Backup Planning",
  },
  {
    slug: "managed-it-support",
    title: "Managed IT Support & AMC",
    subtitle: "Helpdesk Troubleshooting, Preventive Maintenance & Predictable Annual IT Upkeep",
    category: "support",
    categoryLabel: "Operations & AMC",
    tagline: "Proactive IT maintenance and responsive assistance keeping corporate and branch operations running smoothly.",
    icon: "Headphones",
    heroImage: "/images/operations-center.jpg",
    overview:
      "IT issues shouldn't halt your workday. A printer that won't connect, a corrupt email profile, or a server hanging during month-end billing directly impacts your revenue. PRA's Managed IT Support and Annual Maintenance Contracts (AMC) provide structured helpdesk resolution, routine preventive maintenance, and disciplined asset tracking.",
    summaryPoints: [
      "Structured helpdesk support resolving everyday user workstation, software, and peripheral issues",
      "Scheduled preventive maintenance servicing hardware, cleaning dust, and applying critical updates",
      "Comprehensive Annual Maintenance Contracts (AMC) covering servers, networking, and desktops",
      "Multi-location support coordinating assistance across head office, warehouses, and branch hubs",
    ],
    scope: [
      {
        heading: "Workstation & Helpdesk Support",
        description: "Rapid troubleshooting for everyday employee computer, software, and peripheral problems.",
        items: [
          "Operating system troubleshooting (Windows 11 Pro, Windows 10, macOS, Linux)",
          "Outlook / Microsoft 365 / Google Workspace email configuration and sync error resolution",
          "Network printer, barcode scanner, and peripheral driver configuration",
          "Slow PC diagnostic and performance optimization (SSD upgrades, RAM checks, startup tuning)",
        ],
      },
      {
        heading: "Preventive Maintenance Cycles",
        description: "Proactive servicing that catches failing hardware and software bloat before it causes work stoppages.",
        items: [
          "Scheduled physical cleaning of internal fans, power supplies, and heat sinks to prevent thermal throttling",
          "Operating system patch management applied during off-peak hours after testing",
          "Antivirus and endpoint security definition updates and scheduled deep scans",
          "Disk cleanup, temporary file purging, and drive health (S.M.A.R.T.) telemetry checks",
        ],
      },
      {
        heading: "Annual Maintenance Contracts (Comprehensive & Non-Comprehensive AMC)",
        description: "Predictable, contracted IT upkeep eliminating the uncertainty of ad-hoc hourly repair bills.",
        items: [
          "Comprehensive AMC: labor, preventive visits, and agreed component replacement coverage",
          "Non-Comprehensive AMC: regular servicing, scheduled maintenance, and priority service calls (parts at cost)",
          "Periodic IT asset audit recording serial numbers, configurations, and warranty expiry dates",
          "Dedicated escalation paths with documented ticket tracking and resolution logs",
        ],
      },
      {
        heading: "Vendor & ISP Coordination",
        description: "We act as your technical representative so your staff doesn't spend hours on hold with ISPs.",
        items: [
          "Internet Service Provider (ISP) outage tracking, ticketing, and escalation to restoration",
          "OEM hardware warranty claims and replacement dispatch coordination (Dell, HP, Lenovo)",
          "Software licensing renewal reminders and compliance record-keeping",
          "Technical liaison for proprietary business software and ERP database vendors",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding & Asset Tagging",
        description: "We audit every machine, record serial numbers, install management tools, and establish baselines.",
      },
      {
        step: "02",
        title: "Preventive Stabilization",
        description: "First-round deep cleaning, unpatched software updates, and immediate fix of chronic issues.",
      },
      {
        step: "03",
        title: "Daily Helpdesk & Maintenance",
        description: "Users submit tickets via email/phone; our team resolves issues remotely or via scheduled visits.",
      },
      {
        step: "04",
        title: "Monthly Review & Reporting",
        description: "Transparent summary of tickets logged, recurring issues identified, and hardware recommendations.",
      },
    ],
    technicalHighlights: [
      {
        title: "Clear SLA Expectations",
        detail: "Transparent, realistic response times based on incident severity rather than misleading 24/7 marketing claims.",
      },
      {
        title: "Asset Inventory",
        detail: "Live tracking of which machine is running what hardware, who it is assigned to, and when warranty lapses.",
      },
      {
        title: "Root Cause Resolution",
        detail: "We don't just reboot an issue repeatedly; we identify why it hangs and fix the underlying configuration.",
      },
    ],
    engagementModels: [
      {
        title: "Annual Maintenance Contract (AMC)",
        description: "The gold standard for corporate predictability: includes regular scheduled maintenance and priority calls.",
        bestFor: "Companies with 10 to 200+ machines wanting fixed operational costs and dedicated support.",
      },
      {
        title: "Monthly Retainer Managed IT",
        description: "Continuous proactive management, monitoring, patching, and dedicated support hours per month.",
        bestFor: "Fast-growing companies requiring ongoing technical guidance and regular administrative tasks.",
      },
      {
        title: "On-Demand / Project Support",
        description: "Structured scope for one-off troubleshooting, hardware upgrades, or office relocations.",
        bestFor: "Smaller teams with infrequent support requirements.",
      },
    ],
    faqs: [
      {
        question: "How do users submit support requests?",
        answer:
          "Users can submit issues through our dedicated support email or phone line. Every issue is logged, prioritized by operational impact, and tracked through to verified resolution.",
      },
      {
        question: "Do you provide onsite support or only remote assistance?",
        answer:
          "Both. Remote support resolves the majority of software, email, and configuration issues within minutes. For hardware failures, network cabling, rack servicing, and physical troubleshooting, our engineers conduct scheduled or emergency onsite visits.",
      },
      {
        question: "Can an AMC be customized for multiple branch locations or warehouses?",
        answer:
          "Yes. We structure multi-location AMCs that combine centralized remote helpdesk for all branches with scheduled physical preventive visits to warehouses and satellite facilities.",
      },
    ],
    ctaText: "Discuss an IT Support Plan",
  },
  {
    slug: "corporate-it",
    title: "Corporate IT Hardware & Software",
    subtitle: "Commercial Desktops, Laptops, Workstations, Enterprise Software & Genuine Licensing",
    category: "workplace",
    categoryLabel: "Workplace & Hardware",
    tagline: "Commercial-grade IT equipment and verified software licenses matched to real business requirements.",
    icon: "Laptop",
    heroImage: "/images/operations-center.jpg",
    overview:
      "Consumer laptops and non-genuine software introduce security vulnerabilities, sudden driver crashes, and severe compliance liabilities. PRA assists corporate clients in procuring commercial-grade business desktops, rugged laptops, thin clients, and genuine volume software licenses engineered for multi-year enterprise duty.",
    summaryPoints: [
      "Commercial-grade business laptops and desktops (Dell Latitude/OptiPlex, HP EliteBook/ProDesk, Lenovo ThinkPad)",
      "Specialized CAD/engineering workstations, thin clients, and durable barcode scanning terminals",
      "Genuine Microsoft 365, Windows Pro, Adobe Creative Cloud, and enterprise antivirus licensing",
      "Standardized corporate imaging, domain joining, security agent pre-installation, and zero-touch rollout",
    ],
    scope: [
      {
        heading: "Commercial Desktops & Corporate Laptops",
        description: "Business machines built with durable chassis, matte anti-glare screens, and extended warranty support.",
        items: [
          "Dell OptiPlex / Latitude business series with 3-year Next Business Day onsite warranty",
          "HP Pro / Elite commercial notebooks and miniature desktops for space-constrained desks",
          "Lenovo ThinkPad / ThinkCentre business systems recognized for mechanical keyboard durability",
          "Pre-configured hardware profiles suited for accounting, sales, logistics operations, and management",
        ],
      },
      {
        heading: "Performance Workstations & Thin Clients",
        description: "High-compute machines for architects, engineers, design teams, and secure remote desktop workers.",
        items: [
          "ISV-certified workstations (Dell Precision, HP Z-Series) with ECC memory and dedicated workstation GPUs",
          "Low-power fanless thin clients for warehouse dispatch desks, billing counters, and call centers",
          "Dual-monitor and ultra-wide display setups designed for financial analysts and multi-app operators",
          "Ruggedized tablets and barcode scanners suitable for warehouse environments",
        ],
      },
      {
        heading: "Genuine Software Licensing & Compliance",
        description: "Eliminating legal liability and security risks through proper business licensing.",
        items: [
          "Microsoft 365 Business Standard / Premium subscription advisory, procurement, and domain migration",
          "Windows 11 Pro operating system licensing and Active Directory compatibility verification",
          "Commercial PDF editing tools, compression software, and enterprise productivity suites",
          "Annual license renewal tracking ensuring zero disruption to critical business tools",
        ],
      },
      {
        heading: "Device Deployment & Fleet Lifecycle",
        description: "Standardizing your corporate machine fleet so onboarding a new employee takes minutes, not days.",
        items: [
          "Base disk imaging with approved corporate software, standard fonts, and security certificates",
          "BitLocker drive encryption configuration protecting company data if a laptop is lost or stolen",
          "Asset tagging, serial number cataloging, and user assignment documentation",
          "Safe e-waste retirement and certified disk wiping when machines reach end-of-service",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirement Scoping",
        description: "We determine the exact performance profiles needed for your specific roles (accounting, dispatch, CAD).",
      },
      {
        step: "02",
        title: "Transparent Quotation",
        description: "Clear itemized quote detailing exact model numbers, component specs, and manufacturer warranty terms.",
      },
      {
        step: "03",
        title: "Staging & Pre-Configuration",
        description: "Unboxing, OS activation, company software installation, BitLocker encryption, and testing.",
      },
      {
        step: "04",
        title: "Desk Delivery & User Sign-Off",
        description: "Delivery to employee desk or branch, user sign-off documentation, and asset register update.",
      },
    ],
    technicalHighlights: [
      {
        title: "Commercial vs Consumer",
        detail: "Commercial machines feature magnesium alloy frames, vPro remote management, and 3-year enterprise warranties.",
      },
      {
        title: "BitLocker by Default",
        detail: "All laptops deployed with hardware-backed TPM drive encryption preventing data theft.",
      },
      {
        title: "Audit Protection",
        detail: "Genuine license documentation protects your business from software audit penalties.",
      },
    ],
    engagementModels: [
      {
        title: "Bulk Hardware Procurement & Rollout",
        description: "Coordinated purchasing, staging, and deployment of multi-unit desktop or laptop refreshes.",
        bestFor: "New office openings, annual hardware refreshes, or department expansions.",
      },
      {
        title: "Software Licensing & Cloud Migration",
        description: "Procurement, licensing migration, and user setup for Microsoft 365, email, and productivity tools.",
        bestFor: "Firms transitioning away from legacy email or unsanctioned personal accounts.",
      },
      {
        title: "Hardware Lifecycle Management",
        description: "Continuous replacement planning, maintenance, and asset tracking under an ongoing AMC.",
        bestFor: "Organizations seeking predictable IT capital expenditure.",
      },
    ],
    faqs: [
      {
        question: "Why should a business buy commercial laptops instead of retail consumer models from retail stores?",
        answer:
          "Retail consumer laptops are designed for home use with plastic hinges, glossy screens, consumer Windows Home editions (which cannot join corporate domains or run BitLocker), and 1-year carry-in warranties. Commercial laptops (ThinkPad, Latitude, EliteBook) feature durable construction, Windows Pro, 3-year onsite business warranties, and long component availability.",
      },
      {
        question: "Do you provide software licensing directly?",
        answer:
          "Yes, we facilitate genuine business software licensing through authorized distributor channels, ensuring your organization receives valid license certificates and cloud admin control.",
      },
      {
        question: "Can PRA pre-configure laptops before delivering them to our staff?",
        answer:
          "Yes. Our staging service includes OS setup, joining your corporate network, installing endpoint security, configuring email profiles, and activating drive encryption so machines are ready for immediate use upon unboxing.",
      },
    ],
    ctaText: "Request a Hardware or Software Quote",
  },
  {
    slug: "software-development",
    title: "Software, Web & Mobile Development",
    subtitle: "Custom Web Applications, Operational Dashboards, Business Portals & API Integrations",
    category: "software",
    categoryLabel: "Digital & Custom",
    tagline: "Purpose-built business software that connects physical workflows, databases, and daily operations.",
    icon: "Code",
    heroImage: "/images/operations-center.jpg",
    overview:
      "Off-the-shelf software rarely fits operational workflows perfectly. When spreadsheets become unwieldy and generic ERPs feel too rigid, PRA builds clean, responsive web applications, executive dashboards, dispatch portals, and internal tools tailored precisely to how your business operates.",
    summaryPoints: [
      "Modern corporate web applications and customer portals built with React, TypeScript, and robust backends",
      "Internal operational dashboards visualizing inventory, dispatch status, support tickets, and KPI metrics",
      "Restful API integrations connecting accounting systems, warehouse tools, and third-party logistics data",
      "Disciplined software development lifecycle: discovery, scope, wireframe, coding, testing, and deployment",
    ],
    scope: [
      {
        heading: "Corporate Web Applications & Portals",
        description: "High-performance web applications designed with responsive layouts, clean UX, and strict security.",
        items: [
          "Customer and vendor self-service portals with role-based authentication and secure document sharing",
          "Internal operations tracking systems replacing disorganized shared Excel spreadsheets",
          "Fast, SEO-optimized corporate websites reflecting brand maturity and technical credibility",
          "Accessible UI designs complying with modern web standards and multi-device usability",
        ],
      },
      {
        heading: "Operational Dashboards & BI Reporting",
        description: "Turning raw operational data into clear, real-time visual metrics for management decisions.",
        items: [
          "Real-time operational dashboards for dispatch tracking, warehouse throughput, and error rates",
          "Custom financial and inventory metric reporting pulling from SQL databases",
          "Automated PDF report generation and scheduled email digests for management",
          "Interactive drill-down tables with search, filtering, and role-based data visibility",
        ],
      },
      {
        heading: "API Integrations & Workflow Automation",
        description: "Eliminating manual double-entry by bridging separate commercial software systems.",
        items: [
          "REST and GraphQL API integration connecting CRM, ERP, and localized database systems",
          "Automated webhook handlers updating order statuses across billing and dispatch systems",
          "SMS and WhatsApp notification gateways for automated customer milestone updates",
          "Database synchronization scripts keeping branch servers aligned with central databases",
        ],
      },
      {
        heading: "Mobile Applications & Field Tools",
        description: "Lightweight mobile solutions empowering floor staff, drivers, and field technicians.",
        items: [
          "Cross-platform mobile applications (React Native / Flutter) for iOS and Android",
          "Barcode scanner and camera capture integration for fast warehouse stock audits",
          "Offline-first data caching allowing technicians to work without reliable cellular coverage",
          "Secure OAuth 2.0 authentication and biometric phone login",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Scoping",
        description: "We map your actual operational workflow, identify data models, and write clear functional specifications.",
      },
      {
        step: "02",
        title: "UX Design & Wireframing",
        description: "Interactive UI layouts and database schemas reviewed with you before writing a line of code.",
      },
      {
        step: "03",
        title: "Agile Engineering",
        description: "Structured sprints with clean code, TypeScript types, modular architecture, and security reviews.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Rigorous quality assurance, user acceptance testing, cloud/on-prem deployment, and training.",
      },
    ],
    technicalHighlights: [
      {
        title: "Modern Tech Stack",
        detail: "React, Node.js, Python, PostgreSQL, TypeScript, and Docker ensuring longevity and maintainability.",
      },
      {
        title: "Security by Design",
        detail: "Strict input validation, parameterized SQL queries, encrypted tokens, and OWASP top-10 defense.",
      },
      {
        title: "Complete Ownership",
        detail: "Clean documented source code with clear intellectual property ownership upon project completion.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Development Project",
        description: "Clear milestone-based delivery with documented functional requirements, fixed timeline, and fixed price.",
        bestFor: "Well-defined internal tools, portals, dashboards, or corporate web applications.",
      },
      {
        title: "Dedicated Phase-Based Retainer",
        description: "Continuous development cycles for evolving products needing iterative feature releases and maintenance.",
        bestFor: "Complex software requiring ongoing enhancements and feature iterations.",
      },
      {
        title: "System Integration & Automation",
        description: "Focused technical projects connecting disparate databases, APIs, or legacy systems.",
        bestFor: "Organizations seeking to automate repetitive manual data-entry between systems.",
      },
    ],
    faqs: [
      {
        question: "How do you distinguish custom software from third-party SaaS products?",
        answer:
          "Third-party SaaS (like Microsoft 365 or Zoho) charges monthly per-user fees for standard functionality. Custom development builds proprietary software owned entirely by your business, tailored precisely to your unique workflow, with no recurring per-user licensing fees.",
      },
      {
        question: "Who owns the intellectual property and code when the project is done?",
        answer:
          "Upon full project delivery and settlement, you own 100% of the custom source code, documentation, and digital assets developed for your project.",
      },
      {
        question: "Do you provide hosting and maintenance after launch?",
        answer:
          "Yes. We offer managed hosting on approved cloud providers (AWS, Azure, DigitalOcean) or on your own internal servers, along with software maintenance contracts covering bug fixes, security patches, and OS compatibility updates.",
      },
    ],
    ctaText: "Discuss a Software Project",
  },
];
