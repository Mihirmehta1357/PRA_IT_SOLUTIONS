import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';
import { projectsData } from '../data/projectsData';
import { ProcessSteps } from '../components/ui/ProcessSteps';
import { TechnicalDiagram } from '../components/ui/TechnicalDiagram';
import { CTASection } from '../components/ui/CTASection';
import {
  Code,
  Server,
  Headphones,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Network,
  Camera,
  Database,
  Laptop,
  Truck,
  Building2,
  Cpu
} from 'lucide-react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* 1. ASYMMETRIC EDITORIAL HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span>SOFTWARE · INFRASTRUCTURE · IT SERVICES</span>
            </div>

            <h1 className="hero-title">
              Technology,<br />
              <span className="hero-title-copper">built around</span><br />
              your business.
            </h1>

            <p className="hero-subcopy">
              Thoughtful software, connected infrastructure and dependable IT services—designed around how your business works.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-btn-primary">
                Discuss a project <span className="btn-arrow">→</span>
              </Link>
              <Link to="/services" className="btn btn-secondary hero-btn-secondary">
                Explore our services <span className="btn-arrow">→</span>
              </Link>
            </div>

            {/* Bottom Editorial Annotation Strip */}
            <div className="hero-annotation-strip">
              <span className="strip-mark">|</span>
              <span className="strip-text">IDEAS → SOLUTIONS → LONG-TERM PARTNERSHIP</span>
              <span className="strip-rule" />
            </div>
          </div>

          {/* Right Column: Server Rack Infrastructure Photography with Technical Framing */}
          <div className="hero-right">
            {/* Technical Reticle / Geometric Linework */}
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
                TECHNOLOGY<br />
                FOR A STRONGER<br />
                TOMORROW
              </div>
            </div>

            {/* Main Visual Photo Container */}
            <div className="hero-image-frame">
              <img
                src="/images/hero-server-rack.jpg"
                alt="Immaculate enterprise server room with organized amber cabling and server racks"
                className="hero-image"
                loading="eager"
              />

              {/* Dark Angular Olive Charcoal Framing Polygon */}
              <div className="hero-image-overlay-panel">
                <div className="overlay-meta-top">
                  PEOPLE<br />
                  TECHNOLOGY<br />
                  BUSINESS<br />
                  TOGETHER
                </div>
                <div className="overlay-counter">
                  01 <span>/</span> 03
                </div>
                <div className="overlay-meta-bottom">
                  <div className="meta-copper-line" />
                  SCALABLE<br />
                  SECURE<br />
                  FUTURE-READY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THREE-COLUMN CAPABILITY PILLARS (directly beneath hero) */}
        <div className="hero-pillars-bar">
          <div className="container pillars-container">
            {/* Column 01: Software & Digital Products */}
            <div className="pillar-column">
              <div className="pillar-header">
                <span className="pillar-num">01 —</span>
                <div className="pillar-icon-box">
                  <Code size={18} />
                </div>
              </div>
              <h2 className="pillar-title">Software &amp; Digital Products</h2>
              <p className="pillar-desc">
                Custom websites, web applications, mobile apps and business solutions to streamline your business and create new opportunities.
              </p>
              <Link to="/services/software-development" className="pillar-link">
                Explore software solutions <ArrowRight size={14} />
              </Link>
            </div>

            {/* Column 02: Networks & Infrastructure */}
            <div className="pillar-column">
              <div className="pillar-header">
                <span className="pillar-num">02 —</span>
                <div className="pillar-icon-box">
                  <Server size={18} />
                </div>
              </div>
              <h2 className="pillar-title">Networks &amp; Infrastructure</h2>
              <p className="pillar-desc">
                Design, implement and manage secure, scalable IT infrastructure, networks, cloud environments and business systems.
              </p>
              <Link to="/services/networking" className="pillar-link">
                Explore infrastructure solutions <ArrowRight size={14} />
              </Link>
            </div>

            {/* Column 03: Managed IT & Support */}
            <div className="pillar-column">
              <div className="pillar-header">
                <span className="pillar-num">03 —</span>
                <div className="pillar-icon-box">
                  <Headphones size={18} />
                </div>
              </div>
              <h2 className="pillar-title">Managed IT &amp; Support</h2>
              <p className="pillar-desc">
                Ongoing IT support, system monitoring, security, backup and maintenance to keep your business running smoothly.
              </p>
              <Link to="/services/managed-it-support" className="pillar-link">
                Explore IT services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES STRIP (Clean & Verifiable, No Fake Metrics) */}
      <section className="capabilities-strip-section">
        <div className="container">
          <div className="capabilities-strip-grid">
            <div className="capability-strip-item">
              <div className="cap-icon-wrap"><CheckCircle2 size={16} /></div>
              <div>
                <strong>Structured Physical Standards</strong>
                <span>Certified Cat6A, single-mode fiber, &amp; clean rack layouts</span>
              </div>
            </div>
            <div className="capability-strip-item">
              <div className="cap-icon-wrap"><ShieldCheck size={16} /></div>
              <div>
                <strong>Air-Gapped &amp; 3-2-1 Backups</strong>
                <span>Ransomware-resilient snapshots and verified restore drills</span>
              </div>
            </div>
            <div className="capability-strip-item">
              <div className="cap-icon-wrap"><Cpu size={16} /></div>
              <div>
                <strong>Genuine Commercial Licensing</strong>
                <span>Authentic Microsoft 365, Windows Pro, &amp; enterprise security</span>
              </div>
            </div>
            <div className="capability-strip-item">
              <div className="cap-icon-wrap"><Truck size={16} /></div>
              <div>
                <strong>Operational Facility Aware</strong>
                <span>Specialized for warehouses, fleet depots, and multi-branch sites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICE CATEGORIES DIRECTORY */}
      <section className="section-pad services-featured-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="eyebrow">PORTFOLIO OVERVIEW</div>
              <h2 className="section-title">
                Comprehensive IT services, <span className="title-copper">disciplined execution.</span>
              </h2>
              <p className="section-subcopy">
                From physical structured cabling in a new facility to multi-site managed helpdesk support, explore our verified service capabilities.
              </p>
            </div>
            <Link to="/services" className="btn btn-secondary header-row-cta">
              All 8 Service Disciplines <ArrowRight size={14} />
            </Link>
          </div>

          <div className="services-grid">
            {servicesData.slice(0, 6).map((service) => {
              const IconComp =
                service.icon === 'Server' ? Server :
                service.icon === 'Network' ? Network :
                service.icon === 'ShieldCheck' ? ShieldCheck :
                service.icon === 'Camera' ? Camera :
                service.icon === 'Database' ? Database :
                service.icon === 'Headphones' ? Headphones :
                service.icon === 'Laptop' ? Laptop : Code;

              return (
                <div key={service.slug} className="service-card-item">
                  <div className="service-card-top">
                    <span className="service-cat-pill">{service.categoryLabel}</span>
                    <div className="service-icon-box">
                      <IconComp size={20} />
                    </div>
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.subtitle}</p>
                  <ul className="service-features-list">
                    {service.summaryPoints.slice(0, 2).map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <Link to={`/services/${service.slug}`} className="service-explore-link">
                      Detailed Scope &amp; Specifications <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DEDICATED LOGISTICS & INDUSTRIAL IT FEATURE SECTION */}
      <section className="logistics-feature-section">
        <div className="container">
          <div className="logistics-feature-grid">
            {/* Left Content */}
            <div className="logistics-feature-content">
              <div className="eyebrow eyebrow-dark">STRATEGIC DIFFERENTIATION</div>
              <h2 className="logistics-feature-title">
                IT that keeps operations <span className="copper-italic">connected.</span>
              </h2>
              <p className="logistics-feature-lead">
                From high-rack warehouse connectivity and vehicle gate surveillance to multi-branch networks and operational software, build the technology foundation your locations depend on.
              </p>

              <div className="logistics-points-list">
                <div className="logistics-point-item">
                  <div className="point-number">01</div>
                  <div>
                    <h4 className="point-heading">High-Bay Directional Industrial Wi-Fi</h4>
                    <p className="point-desc">
                      Eliminate dead zones caused by metallic storage racking. Directional aisle antennas keep forklift terminals and handheld barcode scanners connected without roaming drops.
                    </p>
                  </div>
                </div>

                <div className="logistics-point-item">
                  <div className="point-number">02</div>
                  <div>
                    <h4 className="point-heading">Gate &amp; Loading Bay Surveillance</h4>
                    <p className="point-desc">
                      High-definition IP cameras with license-plate capture and Wide Dynamic Range (WDR) provide timestamped proof to resolve cargo disputes and secure perimeters.
                    </p>
                  </div>
                </div>

                <div className="logistics-point-item">
                  <div className="point-number">03</div>
                  <div>
                    <h4 className="point-heading">Branch-to-HQ Secure VPN Interconnect</h4>
                    <p className="point-desc">
                      Automated failover IPsec tunnels keeping remote weighbridges, regional depots, and central ERP databases synchronized with sub-second failover.
                    </p>
                  </div>
                </div>
              </div>

              <div className="logistics-actions">
                <Link to="/industries/logistics-industrial-it" className="btn btn-primary">
                  Explore Logistics &amp; Industrial Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="logistics-feature-visual">
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

      {/* 6. SELECTED SOLUTION SCENARIOS (Illustrative Case Studies) */}
      <section className="section-pad scenarios-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="eyebrow">PRACTICAL PROBLEM SOLVING</div>
              <h2 className="section-title">
                Illustrative solution <span className="title-copper">scenarios.</span>
              </h2>
              <p className="section-subcopy">
                Real operational challenges analyzed and resolved through disciplined engineering. Clearly labeled capability demonstrations.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary header-row-cta">
              View All 5 Scenarios <ArrowRight size={14} />
            </Link>
          </div>

          <div className="scenarios-grid">
            {projectsData.slice(0, 3).map((item) => (
              <div key={item.id} className="scenario-card">
                <div className="scenario-image-wrap">
                  <img src={item.image} alt={item.title} className="scenario-img" loading="lazy" />
                  <span className="scenario-badge">Illustrative Scenario</span>
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

      {/* 7. HOW WE WORK (01-04 Process Sequence) */}
      <section className="section-pad process-section">
        <div className="container">
          <div className="process-header">
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

      {/* 8. INDUSTRIES WE SUPPORT */}
      <section className="section-pad industries-overview-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="eyebrow">SECTORS &amp; FACILITIES</div>
              <h2 className="section-title">
                Engineered for operationally <span className="title-copper">intensive environments.</span>
              </h2>
              <p className="section-subcopy">
                Whether you manage a transport fleet yard, a multi-story corporate HQ, or a medical clinic, our IT infrastructure matches your uptime demands.
              </p>
            </div>
            <Link to="/industries" className="btn btn-secondary header-row-cta">
              All Industry Profiles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="industries-grid">
            {industriesData.slice(0, 4).map((ind) => {
              const IconComp =
                ind.icon === 'Truck' ? Truck :
                ind.icon === 'Boxes' ? Building2 :
                ind.icon === 'Factory' ? Server : Building2;

              return (
                <div key={ind.id} className="industry-overview-card">
                  <div className="ind-card-icon"><IconComp size={22} /></div>
                  <h3 className="ind-card-title">{ind.title}</h3>
                  <p className="ind-card-tagline">{ind.tagline}</p>
                  <p className="ind-card-desc">{ind.overview.slice(0, 140)}...</p>
                  <Link to="/industries" className="ind-card-link">
                    Explore Industry IT Needs <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WHY PRA IT SOLUTIONS */}
      <section className="why-pra-section">
        <div className="container">
          <div className="why-pra-panel">
            <div className="why-pra-content">
              <div className="eyebrow eyebrow-dark">OUR OPERATING PRINCIPLE</div>
              <h2 className="why-pra-title">
                Technology should reduce friction, <span className="copper-italic">not introduce it.</span>
              </h2>
              <p className="why-pra-lead">
                Too many businesses struggle with unmanaged network cables, pirated software liabilities, slow support desks, and vendor finger-pointing. PRA operates as a disciplined, single-point engineering partner.
              </p>

              <div className="why-pra-pillars-grid">
                <div className="why-pillar">
                  <h4>Disciplined Craftsmanship</h4>
                  <p>Every cable run is labeled at both ends, wiremap-tested, and neatly loomed. No messy server room surprises.</p>
                </div>
                <div className="why-pillar">
                  <h4>Genuine Compliance</h4>
                  <p>100% genuine commercial licensing and authentic enterprise hardware warranties, protecting your business from legal liabilities.</p>
                </div>
                <div className="why-pillar">
                  <h4>Transparent Scoping</h4>
                  <p>Clear, itemized Bill of Materials with exact model numbers and realistic SLAs. No hidden fees or inflated markups.</p>
                </div>
                <div className="why-pillar">
                  <h4>Facility-Aware Engineering</h4>
                  <p>We understand warehouse temperatures, industrial electrical noise, and loading bay camera angles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <CTASection
        title="Let's build the right technology foundation."
        subtitle="Share your requirement—whether an infrastructure site audit, high-bay warehouse Wi-Fi, or structured annual IT support—and we will prepare a clear technical proposal."
        primaryCtaText="Discuss a Project"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
