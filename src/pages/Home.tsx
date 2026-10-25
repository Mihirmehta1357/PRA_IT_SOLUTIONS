import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { projectsData } from '../data/projectsData';
import { ProcessSteps } from '../components/ui/ProcessSteps';
import { TechnicalDiagram } from '../components/ui/TechnicalDiagram';
import { CTASection } from '../components/ui/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Camera,
  Fingerprint,
  Network,
  Server,
  Laptop,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Truck,
  Cpu
} from 'lucide-react';
import './Home.css';

export const Home: React.FC = () => {
  // Activate scroll-reveal animations across sections
  useScrollReveal();

  const hardwareShowcase = [
    {
      title: 'CCTV & Video Surveillance Systems',
      category: 'Physical Security',
      image: '/images/cctv-surveillance.jpg',
      alt: 'Commercial outdoor IP bullet camera with metal conduit piping',
      specs: [
        '4MP / 4K Ultra-HD Commercial IP Cameras',
        'NVR Storage Arrays & Remote Live Mobile Viewing',
        'Loading Dock, Yard & Perimeter Surveillance',
      ],
      link: '/services/cctv-access-control',
      badge: 'High Demand',
      icon: Camera,
    },
    {
      title: 'Biometric Attendance & Access Control',
      category: 'Access & Time Tracking',
      image: '/images/biometric-access.jpg',
      alt: 'Wall-mounted biometric facial recognition and fingerprint terminal with electromagnetic lock',
      specs: [
        'High-Speed Facial Recognition & Optical Fingerprint',
        'Electromagnetic (EM) Glass & Wooden Door Locks',
        'Shift Attendance & Automated Payroll Integration',
      ],
      link: '/services/cctv-access-control',
      badge: 'Enterprise Security',
      icon: Fingerprint,
    },
    {
      title: 'Cat6A Structured Cabling & Switching',
      category: 'Network Connectivity',
      image: '/images/network-switch-cabling.jpg',
      alt: 'Commercial network rack with neatly loomed Cat6A patch cables and 48-port PoE switches',
      specs: [
        'Certified Cat6A / Cat6 & Single-Mode Fiber Backbones',
        '24 / 48-Port Managed PoE+ Enterprise Switches',
        'High-Bay Directional Warehouse Wireless APs',
      ],
      link: '/services/networking',
      badge: 'Fluke Tested',
      icon: Network,
    },
    {
      title: 'Server Room Infrastructure & 42U Racks',
      category: 'Core Compute & Power',
      image: '/images/hero-server-rack.jpg',
      alt: 'Organized 42U enterprise server rack with amber status LEDs and horizontal cable managers',
      specs: [
        'Standardized 42U / 24U Server Enclosures',
        'Precision Cable Looming & Rack Thermal Airflow',
        'Online Double-Conversion Rackmount UPS & PDUs',
      ],
      link: '/services/it-infrastructure',
      badge: 'Zero Clutter',
      icon: Server,
    },
    {
      title: 'Corporate Hardware & Workstation Fleet',
      category: 'Workplace Supply',
      image: '/images/corporate-workstations.jpg',
      alt: 'Corporate workstations with dual monitors, commercial business laptops and genuine software',
      specs: [
        'Tier-1 Commercial Desktops & Business Laptops (Dell/Lenovo)',
        'Genuine Microsoft 365 Business & Windows Pro Licenses',
        'Multi-Monitor Workstations & Silent Thin Clients',
      ],
      link: '/services/corporate-it',
      badge: '100% Genuine OEM',
      icon: Laptop,
    },
    {
      title: 'Managed IT AMC & Emergency Onsite Support',
      category: 'Continuous Maintenance',
      image: '/images/operations-center.jpg',
      alt: 'Operations monitoring center with system status dashboards and technical support desk',
      specs: [
        '2-4 Hour Rapid Onsite Dispatch in Uran & Navi Mumbai',
        'Preventative Monthly Hardware Health Checks',
        'Comprehensive & Non-Comprehensive AMC Contracts',
      ],
      link: '/services/managed-it-support',
      badge: '2-4 Hr Dispatch',
      icon: Headphones,
    },
  ];

  return (
    <div className="home-page">
      {/* 1. ASYMMETRIC EDITORIAL HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Headline, Punchy Subcopy & Actions */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span>URAN · JNPT · NAVI MUMBAI · MUMBAI MMR</span>
            </div>

            <h1 className="hero-title">
              Technology,<br />
              <span className="hero-title-copper">built around</span><br />
              your business.
            </h1>

            <p className="hero-subcopy">
              Commercial CCTV surveillance, biometric access control, Cat6A structured cabling, server rack infrastructure &amp; managed IT support AMC—engineered for corporate offices, warehouses, and logistics facilities.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-btn-primary" id="hero-discuss-btn">
                Discuss a Project <span className="btn-arrow">→</span>
              </Link>
              <a
                href={`tel:${siteConfig.contact.phonePrimary}`}
                className="btn btn-secondary hero-btn-secondary"
                id="hero-call-btn"
              >
                <Phone size={16} /> Direct Desk: {siteConfig.contact.displayPhonePrimary}
              </a>
            </div>

            {/* Quick Contact & Dispatch Info Bar */}
            <div className="hero-dispatch-strip">
              <div className="dispatch-badge-item">
                <Clock size={15} className="dispatch-icon" />
                <span><strong>2-4 Hr Onsite Dispatch</strong> in Uran &amp; JNPT</span>
              </div>
              <div className="dispatch-badge-sep">·</div>
              <div className="dispatch-badge-item">
                <CheckCircle2 size={15} className="dispatch-icon" />
                <span>GST: <strong>{siteConfig.gstNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Server Infrastructure Visual Frame */}
          <div className="hero-right">
            <div className="hero-reticle-graphic" aria-hidden="true">
              <svg viewBox="0 0 400 400" className="reticle-svg">
                <circle cx="200" cy="200" r="160" fill="none" stroke="#B85F3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.45" />
                <circle cx="200" cy="200" r="110" fill="none" stroke="#B85F3B" strokeWidth="1" opacity="0.6" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="#B85F3B" strokeWidth="1" opacity="0.5" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="#B85F3B" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="200" r="4" fill="#B85F3B" />
              </svg>
              <div className="reticle-caption">
                RELIABLE<br />
                ENGINEERING<br />
                PROVEN IN<br />
                THE FIELD
              </div>
            </div>

            <div className="hero-image-frame">
              <img
                src="/images/hero-server-rack.jpg"
                alt="Immaculate enterprise server room with organized amber cabling and server racks"
                className="hero-image"
                loading="eager"
              />

              <div className="hero-image-overlay-panel">
                <div className="overlay-meta-top">
                  SURVEILLANCE<br />
                  BIOMETRICS<br />
                  NETWORKS<br />
                  SERVERS
                </div>
                <div className="overlay-counter">
                  01 <span>/</span> 06
                </div>
                <div className="overlay-meta-bottom">
                  <div className="meta-copper-line" />
                  SCALABLE<br />
                  COMPLIANT<br />
                  ZERO-DOWNTIME
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CORE CAPABILITY PILLARS STRIP */}
        <div className="hero-pillars-bar">
          <div className="container pillars-container">
            <div className="pillar-column reveal-on-scroll reveal-stagger-1">
              <div className="pillar-header">
                <span className="pillar-num">01 —</span>
                <div className="pillar-icon-box">
                  <Camera size={18} />
                </div>
              </div>
              <h2 className="pillar-title">CCTV &amp; Physical Security</h2>
              <p className="pillar-desc">
                High-definition IP surveillance, biometric shift attendance terminals, and electromagnetic door locks for facilities and offices.
              </p>
              <Link to="/services/cctv-access-control" className="pillar-link">
                Explore CCTV &amp; Biometrics <ArrowRight size={14} />
              </Link>
            </div>

            <div className="pillar-column reveal-on-scroll reveal-stagger-2">
              <div className="pillar-header">
                <span className="pillar-num">02 —</span>
                <div className="pillar-icon-box">
                  <Network size={18} />
                </div>
              </div>
              <h2 className="pillar-title">Networks &amp; Infrastructure</h2>
              <p className="pillar-desc">
                Certified Cat6A structured cabling, single-mode fiber, managed PoE switches, and 42U server rack management.
              </p>
              <Link to="/services/networking" className="pillar-link">
                Explore Infrastructure <ArrowRight size={14} />
              </Link>
            </div>

            <div className="pillar-column reveal-on-scroll reveal-stagger-3">
              <div className="pillar-header">
                <span className="pillar-num">03 —</span>
                <div className="pillar-icon-box">
                  <Headphones size={18} />
                </div>
              </div>
              <h2 className="pillar-title">Managed IT Support &amp; AMC</h2>
              <p className="pillar-desc">
                Routine preventative maintenance, fast 2-4 hr onsite dispatch across Uran &amp; Navi Mumbai, and corporate hardware supply.
              </p>
              <Link to="/services/managed-it-support" className="pillar-link">
                Explore Support &amp; AMC <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED STANDARDS STRIP */}
      <section className="capabilities-strip-section">
        <div className="container">
          <div className="capabilities-strip-grid">
            <div className="capability-strip-item reveal-on-scroll reveal-stagger-1">
              <div className="cap-icon-wrap"><CheckCircle2 size={16} /></div>
              <div>
                <strong>Fluke Wiremap Tested</strong>
                <span>100% Certified Cat6A &amp; single-mode optical fiber</span>
              </div>
            </div>
            <div className="capability-strip-item reveal-on-scroll reveal-stagger-2">
              <div className="cap-icon-wrap"><Clock size={16} /></div>
              <div>
                <strong>2-4 Hr Rapid Dispatch</strong>
                <span>Direct response for Uran, JNPT, Panvel &amp; Navi Mumbai</span>
              </div>
            </div>
            <div className="capability-strip-item reveal-on-scroll reveal-stagger-3">
              <div className="cap-icon-wrap"><Cpu size={16} /></div>
              <div>
                <strong>100% Genuine OEM Hardware</strong>
                <span>Authorized Dell, Lenovo, HP, Hikvision, CP Plus &amp; Synology</span>
              </div>
            </div>
            <div className="capability-strip-item reveal-on-scroll reveal-stagger-4">
              <div className="cap-icon-wrap"><Truck size={16} /></div>
              <div>
                <strong>Logistics &amp; Port Ready</strong>
                <span>Specialized for CFS yards, high-bay warehouses &amp; depots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL HARDWARE & SOLUTIONS SHOWCASE (Inspired by ARP Services, elevated to Enterprise) */}
      <section className="section-pad showcase-section" id="hardware-solutions">
        <div className="container">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <div className="eyebrow">CORE HARDWARE &amp; DEPLOYMENT CAPABILITIES</div>
              <h2 className="section-title">
                Hardware-led infrastructure, <span className="title-copper">precision installed.</span>
              </h2>
              <p className="section-subcopy">
                Browse our core physical deployment categories. Every system is scoped with exact OEM model numbers, installed with metallic conduit piping, and certified before handover.
              </p>
            </div>
            <Link to="/services" className="btn btn-secondary header-row-cta">
              All 7 Service Disciplines <ArrowRight size={14} />
            </Link>
          </div>

          <div className="showcase-grid">
            {hardwareShowcase.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className={`showcase-card sheen-card reveal-on-scroll reveal-stagger-${(index % 3) + 1}`}
                >
                  <div className="showcase-card-image-wrap">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="showcase-card-img"
                      loading="lazy"
                    />
                    <span className="showcase-card-badge">{item.badge}</span>
                    <span className="showcase-card-cat">{item.category}</span>
                  </div>

                  <div className="showcase-card-body">
                    <div className="showcase-card-header">
                      <div className="showcase-icon-box">
                        <IconComp size={18} />
                      </div>
                      <h3 className="showcase-card-title">{item.title}</h3>
                    </div>

                    <ul className="showcase-specs-list">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx}>
                          <CheckCircle2 size={13} className="spec-check-icon" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="showcase-card-actions">
                      <Link to={item.link} className="showcase-detail-btn">
                        <span>View Specifications</span> <ArrowRight size={14} />
                      </Link>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-whatsapp-btn"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LOGISTICS & INDUSTRIAL IT FEATURE SECTION */}
      <section className="logistics-feature-section">
        <div className="container">
          <div className="logistics-feature-grid">
            {/* Left Content */}
            <div className="logistics-feature-content reveal-on-scroll">
              <div className="eyebrow eyebrow-dark">STRATEGIC CORRIDOR EXPERTISE</div>
              <h2 className="logistics-feature-title">
                IT infrastructure for ports, CFS &amp; <span className="copper-italic">high-bay warehouses.</span>
              </h2>
              <p className="logistics-feature-lead">
                Operating directly in the Uran &amp; JNPT corridor, we understand the operational reality of metallic container stacks, electrical noise, dust, and continuous 24/7 trucking movements.
              </p>

              <div className="logistics-points-list">
                <div className="logistics-point-item">
                  <div className="point-number">01</div>
                  <div>
                    <h4 className="point-heading">High-Bay Directional Industrial Wi-Fi</h4>
                    <p className="point-desc">
                      Aisle-focused directional antennas eliminate metallic signal reflection, keeping barcode handhelds and forklift tablets connected without drops.
                    </p>
                  </div>
                </div>

                <div className="logistics-point-item">
                  <div className="point-number">02</div>
                  <div>
                    <h4 className="point-heading">Gate &amp; Weighbridge Video Surveillance</h4>
                    <p className="point-desc">
                      License plate recognition (ANPR) and high-speed boom barrier integration for container freight stations and dispatch checkposts.
                    </p>
                  </div>
                </div>

                <div className="logistics-point-item">
                  <div className="point-number">03</div>
                  <div>
                    <h4 className="point-heading">Branch-to-HQ Secure VPN Interconnect</h4>
                    <p className="point-desc">
                      Sub-second automated failover tunnels keeping remote weighbridges, regional depots, and central ERP databases continuously synchronized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="logistics-actions">
                <Link to="/industries/logistics-industrial-it" className="btn btn-primary" id="logistics-explore-btn">
                  Explore Logistics &amp; Industrial Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="logistics-feature-visual reveal-on-scroll">
              <div className="logistics-image-frame">
                <img
                  src="/images/warehouse-logistics-it.jpg"
                  alt="Modern logistics distribution warehouse with industrial wireless access points and surveillance cameras"
                  className="logistics-img"
                  loading="lazy"
                />
                <div className="logistics-image-annotation">
                  <span className="ann-label">OPERATIONAL SITE ARCHITECTURE</span>
                  <span className="ann-sub">Continuous Wi-Fi · 4MP Dock Video · Air-Gapped Local NVR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Technical Architecture Diagram */}
          <TechnicalDiagram />
        </div>
      </section>

      {/* 6. SOLUTION SCENARIOS (Practical Illustrative Case Studies) */}
      <section className="section-pad scenarios-section">
        <div className="container">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <div className="eyebrow">PROVEN BLUEPRINTS</div>
              <h2 className="section-title">
                Illustrative solution <span className="title-copper">scenarios.</span>
              </h2>
              <p className="section-subcopy">
                Detailed architectural case studies showing exact Bill of Materials, network topologies, and operational outcomes.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary header-row-cta">
              View All Scenarios <ArrowRight size={14} />
            </Link>
          </div>

          <div className="scenarios-grid">
            {projectsData.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`scenario-card sheen-card reveal-on-scroll reveal-stagger-${index + 1}`}
              >
                <div className="scenario-image-wrap">
                  <img src={item.image} alt={item.title} className="scenario-img" loading="lazy" />
                  <span className="scenario-badge">Architecture Blueprint</span>
                </div>
                <div className="scenario-body">
                  <span className="scenario-category">{item.categoryLabel}</span>
                  <h3 className="scenario-title">{item.title}</h3>
                  <p className="scenario-summary">{item.scopeSummary}</p>

                  <div className="scenario-outcomes-box">
                    <span className="outcomes-label">Key Engineering Outcomes:</span>
                    <ul className="outcomes-list">
                      {item.keyOutcomes.slice(0, 2).map((oc, i) => (
                        <li key={i}>{oc}</li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/projects" className="scenario-link">
                    Read Complete Architecture &amp; BoM <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (01-04 Methodology) */}
      <section className="section-pad process-section">
        <div className="container">
          <div className="process-header reveal-on-scroll">
            <div className="eyebrow">THE PRA METHODOLOGY</div>
            <h2 className="section-title">
              Clear stages, <span className="title-copper">zero ambiguity.</span>
            </h2>
            <p className="section-subcopy">
              We replace guesswork with structured site surveys, engineering schematics, certified testing, and accountable support.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* 8. FAST CONSULTATION & LOCAL DISPATCH BANNER */}
      <section className="local-dispatch-callout reveal-on-scroll">
        <div className="container">
          <div className="dispatch-callout-card">
            <div className="callout-content">
              <span className="callout-pill">URAN &amp; NAVI MUMBAI ENGINEERING DESK</span>
              <h3 className="callout-title">Need an infrastructure audit or fast hardware quote?</h3>
              <p className="callout-desc">
                Visit our office at Kalpana Niwas, Shop 1, Kotnaka, Uran, or connect directly with our technical team for a site visit within 24 hours.
              </p>
            </div>
            <div className="callout-actions">
              <a href={`tel:${siteConfig.contact.phonePrimary}`} className="btn btn-primary">
                <Phone size={16} /> Call {siteConfig.contact.displayPhonePrimary}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary callout-whatsapp"
              >
                <MessageCircle size={16} /> Quick WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA */}
      <CTASection
        title="Let's build the right technology foundation."
        subtitle="Share your requirement—whether CCTV surveillance, biometric door locks, structured cabling, or annual AMC upkeep—and we will prepare a clear technical proposal."
        primaryCtaText="Discuss a Project"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
