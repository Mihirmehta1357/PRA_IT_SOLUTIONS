import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { TechnicalDiagram } from '../components/ui/TechnicalDiagram';
import { CTASection } from '../components/ui/CTASection';
import {
  Warehouse,
  Network,
  CheckCircle2,
  Wifi,
  Clock
} from 'lucide-react';
import './IndustryLogisticsIndustrialIt.css';

export const IndustryLogisticsIndustrialIt: React.FC = () => {
  return (
    <div className="logistics-page">
      <Breadcrumbs
        items={[
          { label: "Industries", path: "/industries" },
          { label: "Logistics & Industrial IT Solutions" }
        ]}
      />

      {/* Hero Section */}
      <section className="logistics-hero">
        <div className="container logistics-hero-grid">
          <div className="logistics-hero-left">
            <div className="eyebrow eyebrow-dark">STRATEGIC INDUSTRY SPECIALIZATION</div>
            <h1 className="logistics-h1">
              Connected operations start with <span className="copper-italic">dependable IT.</span>
            </h1>
            <p className="logistics-hero-lead">
              From warehouse connectivity and site surveillance to infrastructure management and operational software, build the technology foundation your locations depend on.
            </p>
            <div className="logistics-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss Facility IT Requirements <span className="btn-arrow">→</span>
              </Link>
              <Link to="/projects" className="btn btn-secondary cta-btn-secondary">
                View Illustrative Scenarios
              </Link>
            </div>
          </div>

          <div className="logistics-hero-right">
            <div className="logistics-hero-image-frame">
              <img
                src="/images/warehouse-logistics-it.jpg"
                alt="High-bay logistics distribution facility with enterprise Wi-Fi and CCTV surveillance"
                className="logistics-hero-img"
              />
              <div className="logistics-hero-badge">
                <span className="badge-tag">FACILITY INFRASTRUCTURE</span>
                <span className="badge-title">Engineered for Dusty, High-Throughput Yards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-pad logistics-challenges-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">OPERATIONAL REALITY</div>
            <h2 className="section-title">
              Why standard office IT <span className="title-copper">fails in logistics facilities.</span>
            </h2>
            <p className="section-subcopy">
              Logistics hubs and transport yards face harsh environmental and spatial realities that consumer or basic office IT products simply cannot survive.
            </p>
          </div>

          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon"><Wifi size={24} /></div>
              <h3>Metallic RF Shielding</h3>
              <p>
                Dense steel racking, corrugated metal roofing, and stacked pallets act as Faraday shields, dropping standard Wi-Fi packets and freezing forklift barcode scanners.
              </p>
            </div>

            <div className="challenge-card">
              <div className="challenge-icon"><Clock size={24} /></div>
              <h3>24/7 Loading Yard Security</h3>
              <p>
                High-volume dispatch bays experience freight damage claims, unauthorized vehicle entry, and blindspots without continuous, tamper-evident high-definition video recording.
              </p>
            </div>

            <div className="challenge-card">
              <div className="challenge-icon"><Network size={24} /></div>
              <h3>Dispersed Branch Interconnect</h3>
              <p>
                Remote weighbridges and regional dispatch yards suffer frequent local fiber cuts, causing complete operational paralysis without automated secondary failover.
              </p>
            </div>

            <div className="challenge-card">
              <div className="challenge-icon"><Warehouse size={24} /></div>
              <h3>Dust, Heat &amp; Vibration</h3>
              <p>
                Non-sealed desktop PCs choke on corrugated box dust, causing overheated power supplies and sudden motherboard failures during peak month-end shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Logistics Capabilities Grid */}
      <section className="section-pad logistics-solutions-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">OUR SPECIALIZED SOLUTIONS</div>
            <h2 className="section-title">
              Nine pillars of <span className="title-copper">industrial IT reliability.</span>
            </h2>
            <p className="section-subcopy">
              A comprehensive technical framework purpose-built for freight hubs, distribution warehouses, transport yards, and multi-depot operators.
            </p>
          </div>

          <div className="capabilities-9-grid">
            <div className="cap-9-card">
              <span className="cap-9-num">01</span>
              <h4>High-Bay Warehouse Wi-Fi</h4>
              <p>Industrial access points with directional narrow-beam antennas focused down long aisles, delivering seamless fast-roaming for forklift tablets.</p>
              <Link to="/services/networking" className="cap-9-link">Networking Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">02</span>
              <h4>Gate, Yard &amp; Dock CCTV</h4>
              <p>4MP/4K weatherproof cameras with license plate capture and wide dynamic range to resolve freight damage and monitor perimeter fences.</p>
              <Link to="/services/cctv-access-control" className="cap-9-link">Surveillance Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">03</span>
              <h4>Branch-to-HQ Secure VPN</h4>
              <p>IPsec encrypted tunnels with automated multi-WAN ISP failover keeping remote dispatch offices continuously linked to central ERPs.</p>
              <Link to="/services/networking" className="cap-9-link">WAN Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">04</span>
              <h4>Rugged Dispatch Hardware</h4>
              <p>Dust-resistant solid-state thin clients, commercial desktops, and industrial barcode scanners built for heavy loading dock handling.</p>
              <Link to="/services/corporate-it" className="cap-9-link">Hardware Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">05</span>
              <h4>Biometric Turnstiles &amp; Access</h4>
              <p>High-speed facial recognition and RFID door locks preventing unauthorized entry to bonded cargo zones and server rooms.</p>
              <Link to="/services/cctv-access-control" className="cap-9-link">Access Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">06</span>
              <h4>3-2-1 Manifest &amp; Billing Backup</h4>
              <p>Automated snapshot protection shielding dispatch records and financial databases against hard drive crashes and ransomware.</p>
              <Link to="/services/servers-storage-backup" className="cap-9-link">Backup Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">07</span>
              <h4>Multi-Depot IT Support AMC</h4>
              <p>Scheduled preventive servicing to clean hardware fans, inspect cables, and provide rapid remote helpdesk for branch dispatchers.</p>
              <Link to="/services/managed-it-support" className="cap-9-link">AMC Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">08</span>
              <h4>Custom Yard Dashboards</h4>
              <p>Tailored web applications connecting weighbridge scales, gate-pass printers, and real-time truck turnaround telemetry.</p>
              <Link to="/services/software-development" className="cap-9-link">Software Details →</Link>
            </div>

            <div className="cap-9-card">
              <span className="cap-9-num">09</span>
              <h4>Thermal Server Enclosures</h4>
              <p>NEMA-rated dust-sealed wall boxes and 42U server cabinets equipped with filtered ventilation and online UPS power backups.</p>
              <Link to="/services/it-infrastructure" className="cap-9-link">Infrastructure Details →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Architecture Diagram */}
      <section className="logistics-diagram-section">
        <div className="container">
          <TechnicalDiagram
            title="Logistics Facility Multi-Tier Architecture"
            subtitle="Conceptual blueprint: Edge Facility (Wi-Fi, Terminals, Cameras) → Industrial Switching & PoE → Dual-WAN Firewall → Secure Corporate Core & 3-2-1 Backup."
          />
        </div>
      </section>

      {/* Illustrative Solution Scenario Showcase */}
      <section className="section-pad logistics-scenario-section">
        <div className="container">
          <div className="scenario-feature-card">
            <div className="scenario-feature-badge">
              <span>ILLUSTRATIVE SOLUTION SCENARIO</span>
            </div>
            <div className="scenario-feature-grid">
              <div>
                <span className="scenario-label">FACILITY PROFILE</span>
                <h3 className="scenario-headline">
                  Regional Freight Hub: Turnkey High-Bay Wi-Fi &amp; Perimeter CCTV
                </h3>
                <p className="scenario-context">
                  A regional transport business operating an 80,000 sq ft central hub and 4 regional yards experienced frequent barcode scanner disconnects in deep storage aisles, had unmonitored blindspots at the rear vehicle gate, and lacked standardized IT maintenance.
                </p>

                <div className="scenario-steps">
                  <div className="scenario-step-item">
                    <strong>The Engineering Deployment:</strong>
                    <p>
                      PRA engineered an integrated setup: 12 industrial PoE access points with directional aisle antennas, 32 high-resolution IP surveillance cameras with dual NVR redundancy, a unified 42U server rack with battery backup, and configured site-to-site VPN tunnels with automated 4G/dual-broadband failover.
                    </p>
                  </div>
                  <div className="scenario-step-item">
                    <strong>Verified Operational Outcomes:</strong>
                    <ul className="scenario-outcomes">
                      <li><CheckCircle2 size={14} className="check-copper" /> Zero wireless dead zones across all storage aisles</li>
                      <li><CheckCircle2 size={14} className="check-copper" /> Tamper-evident video proof resolving cargo damage disputes within minutes</li>
                      <li><CheckCircle2 size={14} className="check-copper" /> Continuous 99.8% network uptime across all 4 regional locations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="scenario-feature-img-wrap">
                <img
                  src="/images/warehouse-logistics-it.jpg"
                  alt="Logistics warehouse deployment scenario"
                  className="scenario-feature-img"
                />
                <div className="scenario-disclaimer">
                  *Illustrative capability scenario representing technical scope, architecture, and deliverables.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Workflow for Logistics Sites */}
      <section className="section-pad logistics-workflow-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">EXECUTION DISCIPLINE</div>
            <h2 className="section-title">
              How we deploy in <span className="title-copper">active operational yards.</span>
            </h2>
            <p className="section-subcopy">
              We coordinate around forklift shifts, vehicle dispatch schedules, and gate operations so your facility never misses a shipping window.
            </p>
          </div>

          <div className="workflow-steps-grid">
            <div className="workflow-card">
              <span className="wf-num">Step 01</span>
              <h4>Off-Shift RF &amp; Cable Audit</h4>
              <p>We map physical pathways, conduit requirements, and RF attenuation during shift changes or scheduled lulls.</p>
            </div>
            <div className="workflow-card">
              <span className="wf-num">Step 02</span>
              <h4>Pre-Terminated Staging</h4>
              <p>Racks, switches, and patch panels are assembled and pre-configured in our workshop before arriving on site.</p>
            </div>
            <div className="workflow-card">
              <span className="wf-num">Step 03</span>
              <h4>Zoned Conduit Pulling</h4>
              <p>Heavy-duty conduits and armored fiber are run in designated zones without impeding forklift traffic.</p>
            </div>
            <div className="workflow-card">
              <span className="wf-num">Step 04</span>
              <h4>Cutover &amp; Roaming Validation</h4>
              <p>Final system switchover executed during maintenance windows with live barcode scanner roaming drills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Callout CTA */}
      <CTASection
        title="Upgrade your warehouse or fleet IT infrastructure."
        subtitle="Schedule a comprehensive on-site facility audit with our industrial networking and surveillance specialists."
        primaryCtaText="Request a Facility Site Audit"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
