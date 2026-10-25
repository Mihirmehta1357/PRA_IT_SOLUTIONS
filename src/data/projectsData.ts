export interface ProjectItem {
  id: string;
  title: string;
  category: "network" | "cctv" | "servers" | "support" | "software" | "logistics";
  categoryLabel: string;
  isIllustrative: boolean;
  clientContext: string;
  facilityType: string;
  scopeSummary: string;
  challenges: string[];
  solutionDelivered: string[];
  keyOutcomes: string[];
  image: string;
  diagramTitle?: string;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "logistics-hub-network-cctv",
    title: "Regional Freight Hub: Turnkey High-Bay Wi-Fi & Perimeter CCTV",
    category: "logistics",
    categoryLabel: "Logistics & Industrial IT",
    isIllustrative: true,
    clientContext: "Regional Transport & Freight Logistics Operator (Illustrative Solution Scenario)",
    facilityType: "65,000 sq ft Logistics Hub + 2-Acre Truck Parking & Yard",
    scopeSummary:
      "Engineered an integrated technology deployment across a high-traffic distribution depot: industrial Wi-Fi covering metallic storage lanes, outdoor night-vision surveillance covering 14 loading bays and entry gates, and a centralized server rack with dual UPS power backup.",
    challenges: [
      "Heavy steel racking and metal shipping containers causing severe Wi-Fi signal reflections and dead zones",
      "Frequent freight damage disputes at loading docks without high-resolution video proof",
      "Dust and high ambient temperatures causing legacy desktop computers to overheat and crash",
      "No secondary ISP backup, causing total operational halt during frequent local fiber cuts",
    ],
    solutionDelivered: [
      "Deployed 14 industrial Wi-Fi access points equipped with specialized directional down-tilt antennas",
      "Installed 38 commercial 4MP IP cameras with Smart IR, including 8 specialized license-plate capture cameras at gates",
      "Configured dual NVRs with RAID 5 surveillance storage providing 35 days of continuous retention",
      "Installed enterprise dual-WAN edge router with automatic 4G LTE failover within 3 seconds of ISP drop",
      "Re-racked all core switches into a climate-managed 42U server cabinet with 6kVA online UPS",
    ],
    keyOutcomes: [
      "100% wireless coverage across all picking aisles with sub-50ms roaming for forklift handhelds",
      "Disputed cargo claims resolved within 15 minutes using timestamped 4MP dock video exports",
      "Zero hours of unscheduled business downtime across 12 consecutive months of operation",
    ],
    image: "/images/warehouse-logistics-it.jpg",
    diagramTitle: "Depot Edge Architecture: Gate Cameras → Industrial Switch → Dual NVR → Secure VPN",
    technicalSpecs: [
      { label: "Wi-Fi Standard", value: "Industrial Wi-Fi 6 (802.11ax) with Roaming (802.11k/r)" },
      { label: "Camera Count", value: "38 IP Cameras (Dome, Bullet & PTZ)" },
      { label: "Cabling", value: "Cat6A Shielded + Single-Mode Fiber Backbone" },
      { label: "Retention Window", value: "35 Days 24/7 Continuous Recording" },
      { label: "Power Redundancy", value: "Dual 6kVA Online Double-Conversion UPS" },
    ],
  },
  {
    id: "enterprise-server-rack-modernization",
    title: "Corporate Headquarters: Server Room & Cabling Re-Architecture",
    category: "servers",
    categoryLabel: "Server & Backup Systems",
    isIllustrative: true,
    clientContext: "Multi-Floor Corporate Commercial Headquarters (Illustrative Solution Scenario)",
    facilityType: "3-Floor Corporate Office with 140+ Workstations",
    scopeSummary:
      "Remediated a hazardous 10-year-old 'spaghetti' server room into an enterprise-grade, color-coded, labeled, and thermally optimized server facility without taking critical accounting systems offline.",
    challenges: [
      "Unlabeled cables tangled across racks making routine port troubleshooting high-risk and slow",
      "Hot air re-circulating into server intakes causing frequent emergency thermal shutdowns",
      "Reliance on single physical hard drives for critical accounting databases without automated offsite backups",
    ],
    solutionDelivered: [
      "Conducted complete port-by-port audit and pre-labeled all 280 network drops before physical migration",
      "Executed weekend overhaul installing brush panels, horizontal wire managers, and custom-length patch cords",
      "Deployed Dell PowerEdge rack server configured with hardware RAID 10 and hot-spare disks",
      "Implemented automated 3-2-1 backup architecture with daily local snapshots and encrypted cloud sync",
      "Installed environmental monitoring reporting temperature, humidity, and water-leak alarms to admin phones",
    ],
    keyOutcomes: [
      "Average network troubleshooting time reduced from 2.5 hours to under 10 minutes",
      "Server intake temperatures lowered by 8°C through proper blanking panels and exhaust ducting",
      "Verified 15-minute recovery point objective (RPO) with quarterly disaster drills",
    ],
    image: "/images/hero-server-rack.jpg",
    diagramTitle: "Server Rack Layout: Patch Panels → Core Switches → Compute Cluster → SAN/NAS",
    technicalSpecs: [
      { label: "Rack Footprint", value: "Dual 42U 19-inch Enclosed Server Racks" },
      { label: "Storage Array", value: "Synology Enterprise NAS with Btrfs Snapshot Immutability" },
      { label: "Compute Hardware", value: "Dell PowerEdge with Dual Redundant Gold PSUs" },
      { label: "Thermal Delta", value: "-8°C ambient reduction via cold-aisle containment" },
      { label: "Backup RTO", value: "Full VM restoration in under 45 minutes" },
    ],
  },
  {
    id: "campus-structured-cabling-switching",
    title: "Industrial Manufacturing Campus: Campus-Wide Fiber & Switching",
    category: "network",
    categoryLabel: "Network Infrastructure",
    isIllustrative: true,
    clientContext: "Precision Engineering & Manufacturing Campus (Illustrative Solution Scenario)",
    facilityType: "3 Production Sheds + Administrative Building across 5 Acres",
    scopeSummary:
      "Designed and deployed a campus optical fiber ring connecting four separate buildings with 10GbE uplinks, industrial managed switches, and VLAN segmentation separating office IT from factory machines.",
    challenges: [
      "Severe electrical noise from induction furnaces causing data corruption on legacy copper runs between sheds",
      "Unauthorized personal devices connecting to factory Wi-Fi and saturating bandwidth",
      "Inability to manage edge switches remotely across separate physical buildings",
    ],
    solutionDelivered: [
      "Laid outdoor armored 12-core single-mode fiber optic cables in underground HDPE conduits with pull boxes",
      "Installed Layer-3 core switch at HQ and hardened PoE+ distribution switches in each production shed",
      "Configured 802.1X network access control ensuring only authorized corporate devices obtain IP addresses",
      "Isolated CNC machinery and quality test benches onto private VLANs with zero outbound internet access",
    ],
    keyOutcomes: [
      "Zero packet errors or electrical interference across all building interconnects",
      "Guaranteed bandwidth reservations for ERP transactions and voice communications",
      "Centralized cloud switch management allowing single-pane configuration across all sheds",
    ],
    image: "/images/network-switch-cabling.jpg",
    diagramTitle: "Campus Optical Ring: Core Switch ↔ 10GbE Single-Mode Fiber ↔ Edge Distribution Racks",
    technicalSpecs: [
      { label: "Fiber Backbone", value: "12-Core Armored Single-Mode Fiber (OS2)" },
      { label: "Switching Fabric", value: "Layer 3 Managed Core with 10GbE SFP+ Aggregation" },
      { label: "Network Segmentation", value: "6 Isolated VLANs with Egress ACLs" },
      { label: "Outdoor Conduit", value: "Underground HDPE Heavy-Duty Ducts" },
    ],
  },
  {
    id: "multi-site-managed-it-support",
    title: "Multi-Branch Retail & Distribution: Proactive Managed IT & AMC",
    category: "support",
    categoryLabel: "Managed IT Support",
    isIllustrative: true,
    clientContext: "Commercial Distributor with 8 Regional Branches (Illustrative Solution Scenario)",
    facilityType: "Head Office + 7 Regional Sales & Dispatch Depots (110 Total Endpoints)",
    scopeSummary:
      "Transitioned a chaotic reactive repair model to a structured Annual Maintenance Contract (AMC) featuring centralized remote helpdesk, quarterly on-site preventive maintenance, and uniform endpoint security.",
    challenges: [
      "Branches hiring local unvetted computer repair technicians who installed pirated software and left systems vulnerable",
      "Frequent email sync problems and corrupted Outlook PST files stalling sales communications",
      "No central inventory of laptops, leading to missing machines and expired warranties",
    ],
    solutionDelivered: [
      "Audited and asset-tagged all 110 workstations across all 8 branches into a centralized asset register",
      "Migrated legacy POP3/IMAP email to enterprise Microsoft 365 Business Standard with unified domain control",
      "Installed centralized endpoint protection with cloud monitoring across all remote laptops",
      "Instituted quarterly physical servicing visits: fan cleaning, thermal repasting, and disk health diagnostics",
    ],
    keyOutcomes: [
      "Support ticket turnaround reduced from 3 business days to an average of 34 minutes for remote triage",
      "100% genuine software compliance across all company laptops and workstations",
      "Zero data loss incidents over 18 months of continuous managed support",
    ],
    image: "/images/operations-center.jpg",
    diagramTitle: "Central Helpdesk Workflow: User Request → Remote Triage → Resolution / On-Site Dispatch",
    technicalSpecs: [
      { label: "Supported Endpoints", value: "110 Laptops & Desktops across 8 Locations" },
      { label: "Helpdesk Channel", value: "Dedicated Support Desk Email & Phone Portal" },
      { label: "Average Triage", value: "34 Minutes First Response for Critical Tickets" },
      { label: "Maintenance Frequency", value: "Quarterly Onsite Preventive Inspection" },
    ],
  },
  {
    id: "custom-dispatch-dashboard-software",
    title: "Logistics Operations: Custom Yard & Dispatch Monitoring Dashboard",
    category: "software",
    categoryLabel: "Business Software & Dashboards",
    isIllustrative: true,
    clientContext: "Industrial Transport Fleet Operator (Illustrative Solution Scenario)",
    facilityType: "Transport Control Operations Center & Dispatch Offices",
    scopeSummary:
      "Developed a custom internal web dashboard linking gate security camera timestamps, weighbridge readings, and manual dispatch manifests into a single real-time operational overview.",
    challenges: [
      "Dispatch teams relying on phone calls and WhatsApp groups to verify whether trucks had cleared the gate",
      "Time-consuming reconciliation between physical paper weighbridge slips and accounting invoices",
      "Management lacking real-time visibility into vehicle turnaround times in the yard",
    ],
    solutionDelivered: [
      "Engineered a responsive React/Node.js web application optimized for multi-monitor operations rooms",
      "Integrated serial data feeds from electronic weighbridge scales directly into digital vehicle records",
      "Automated PDF gate-pass and dispatch receipt generation with QR-code verification",
      "Built executive KPI view showing daily vehicle throughput, average turnaround minutes, and pending loads",
    ],
    keyOutcomes: [
      "Gate clearance turnaround time dropped by 22 minutes per vehicle",
      "Eliminated 100% of paper weighbridge reconciliation discrepancies",
      "Provided leadership with real-time operational transparency from any authorized browser",
    ],
    image: "/images/operations-center.jpg",
    diagramTitle: "Data Pipeline: Weighbridge Sensor → Local Gateway → Web Dashboard → Accounting Export",
    technicalSpecs: [
      { label: "Frontend Stack", value: "React with TypeScript & Responsive Data Tables" },
      { label: "Backend API", value: "Node.js REST Services with PostgreSQL Database" },
      { label: "Data Latency", value: "Sub-2-second live dashboard telemetry refresh" },
      { label: "Security", value: "Role-Based Access Control with Audit Trail Logging" },
    ],
  },
];
