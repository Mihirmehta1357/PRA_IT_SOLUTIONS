import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProcessSteps } from '../components/ui/ProcessSteps';
import { CTASection } from '../components/ui/CTASection';
import {
  CheckCircle2,
  Server,
  FileText,
  Clock
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <Breadcrumbs items={[{ label: "About PRA IT Solutions" }]} />

      {/* Page Hero */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div className="eyebrow">COMPANY &amp; PHILOSOPHY</div>
              <h1 className="about-hero-title">
                Dependable IT engineering, <span className="title-copper">disciplined execution.</span>
              </h1>
              <p className="about-hero-lead">
                PRA IT SOLUTIONS delivers infrastructure management, structured networking, physical security, commercial hardware procurement, and custom business software for enterprises, warehouses, and operationally intensive businesses.
              </p>
            </div>
            <div className="about-hero-callout">
              <div className="callout-badge">OUR COMMITMENT</div>
              <p className="callout-quote">
                “We believe technology should quietly empower everyday operations, eliminating unexplained downtime and messy shortcuts.”
              </p>
              <div className="callout-signature">
                <strong>PRA IT SOLUTIONS</strong>
                <span>Engineering &amp; Operations Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy Strip */}
      <section className="about-philosophy-strip">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <span className="philosophy-num">01</span>
              <h4>No Hidden Shortcuts</h4>
              <p>Every cable run is labeled, wiremap-certified, and conduit-protected. Every server array has tested recovery runbooks.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-num">02</span>
              <h4>Genuine Enterprise Standards</h4>
              <p>We supply verified OEM hardware and legitimate software licenses, shielding our clients from legal and technical vulnerability.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-num">03</span>
              <h4>Facility-Aware Context</h4>
              <p>We understand that a dusty warehouse or 24/7 truck yard has very different environmental demands than an air-conditioned office.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-num">04</span>
              <h4>Transparent Partnership</h4>
              <p>No arbitrary markups or locked proprietary traps. Full handover binders with administrative access granted to clients upon completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Company Narrative */}
      <section className="section-pad about-narrative-section">
        <div className="container">
          <div className="about-narrative-grid">
            <div className="narrative-left">
              <div className="eyebrow">WHO WE ARE</div>
              <h2 className="narrative-title">
                The technical partner for companies where <span className="title-copper">operations matter.</span>
              </h2>
              <div className="narrative-text">
                <p>
                  Modern corporate and operational environments have outgrown ad-hoc computer repairmen and generic retail electronics. In a high-throughput distribution hub, a dropped Wi-Fi signal stalls order dispatches. In a corporate headquarters, an unpatched server can compromise financial databases.
                </p>
                <p>
                  <strong>PRA IT SOLUTIONS</strong> bridges the gap between complex enterprise IT standards and hands-on operational reality. We design, deploy, and maintain the silent infrastructure that keeps businesses connected: structured copper and fiber cabling, server room thermal engineering, high-definition CCTV surveillance, biometric access, and multi-location managed IT support.
                </p>
                <p>
                  Our positioning is rooted in operational reliability: we serve transport operators, distribution warehouses, manufacturing plants, and multi-branch commercial businesses with equal technical rigor.
                </p>
              </div>
            </div>

            <div className="narrative-right">
              <div className="narrative-visual-frame">
                <img
                  src="/images/operations-center.jpg"
                  alt="PRA IT Solutions operational control and infrastructure center"
                  className="narrative-img"
                />
                <div className="narrative-annotation">
                  <strong>SYSTEM MONITORING &amp; DISCIPLINE</strong>
                  <span>Continuous system hygiene and structured ticket resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-pad about-models-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="eyebrow">STRUCTURED COLLABORATION</div>
              <h2 className="section-title">
                How our engagements <span className="title-copper">are structured.</span>
              </h2>
              <p className="section-subcopy">
                We offer clear, contractually transparent engagement models tailored to your operational stage and internal team capacity.
              </p>
            </div>
          </div>

          <div className="engagement-models-grid">
            <div className="model-card">
              <div className="model-icon"><FileText size={24} /></div>
              <h3 className="model-title">Turnkey Implementation Projects</h3>
              <p className="model-desc">
                Fixed-scope engineering projects: greenfield structured cabling, server room racking, surveillance rollouts, or office relocations.
              </p>
              <ul className="model-points">
                <li><CheckCircle2 size={14} className="model-check" /> Documented Bill of Materials</li>
                <li><CheckCircle2 size={14} className="model-check" /> Fluke testing &amp; port labeling</li>
                <li><CheckCircle2 size={14} className="model-check" /> Full handover documentation</li>
              </ul>
              <div className="model-best-for">
                <strong>Best For:</strong> New warehouse setups, office moves, or server overhauls.
              </div>
            </div>

            <div className="model-card model-card-featured">
              <div className="model-badge">MOST POPULAR</div>
              <div className="model-icon"><Clock size={24} /></div>
              <h3 className="model-title">Annual Maintenance Contracts (AMC)</h3>
              <p className="model-desc">
                Predictable, scheduled preventive upkeep and priority troubleshooting covering your complete hardware and network inventory.
              </p>
              <ul className="model-points">
                <li><CheckCircle2 size={14} className="model-check" /> Scheduled physical fan &amp; dust cleaning</li>
                <li><CheckCircle2 size={14} className="model-check" /> OS patching &amp; antivirus definitions</li>
                <li><CheckCircle2 size={14} className="model-check" /> Priority on-site emergency visits</li>
              </ul>
              <div className="model-best-for">
                <strong>Best For:</strong> Mid-sized businesses wanting fixed IT upkeep costs.
              </div>
            </div>

            <div className="model-card">
              <div className="model-icon"><Server size={24} /></div>
              <h3 className="model-title">Fully Managed Infrastructure</h3>
              <p className="model-desc">
                Comprehensive IT stewardship acting as your outsourced technical department across all remote branches and facilities.
              </p>
              <ul className="model-points">
                <li><CheckCircle2 size={14} className="model-check" /> Centralized helpdesk ticket portal</li>
                <li><CheckCircle2 size={14} className="model-check" /> 3-2-1 backup health audits</li>
                <li><CheckCircle2 size={14} className="model-check" /> Vendor &amp; ISP escalation liaison</li>
              </ul>
              <div className="model-best-for">
                <strong>Best For:</strong> Multi-branch enterprises with 20+ endpoints.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section className="section-pad about-process-section">
        <div className="container">
          <div className="about-process-header">
            <div className="eyebrow">OUR METHODOLOGY</div>
            <h2 className="section-title">
              How we deliver <span className="title-copper">predictable results.</span>
            </h2>
            <p className="section-subcopy">
              A systematic 4-phase sequence that protects client time and ensures zero ambiguity.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Final Conversion CTA */}
      <CTASection
        title="Discuss your technology requirement."
        subtitle="Schedule an objective site walkthrough or submit your hardware procurement RFP directly to our senior engineering team."
        primaryCtaText="Contact Our Team"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
