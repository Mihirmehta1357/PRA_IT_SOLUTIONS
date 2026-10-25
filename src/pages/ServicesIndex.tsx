import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/ui/CTASection';
import { servicesData } from '../data/servicesData';
import {
  Server,
  Network,
  ShieldCheck,
  Camera,
  Database,
  Headphones,
  Laptop,
  Code,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './ServicesIndex.css';

export const ServicesIndex: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredServices = selectedFilter === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server size={22} />;
      case 'Network': return <Network size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'Camera': return <Camera size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Headphones': return <Headphones size={22} />;
      case 'Laptop': return <Laptop size={22} />;
      default: return <Code size={22} />;
    }
  };

  return (
    <div className="services-index-page">
      <Breadcrumbs items={[{ label: "All Services Directory" }]} />

      {/* Header Banner */}
      <section className="services-index-hero">
        <div className="container">
          <div className="eyebrow">ENTERPRISE SERVICE PORTFOLIO</div>
          <h1 className="services-hero-title">
            Structured IT capabilities, <span className="title-copper">dependable delivery.</span>
          </h1>
          <p className="services-hero-lead">
            Explore our eight core service disciplines. Each service is executed according to strict engineering standards, transparent Bill of Materials, and responsive operational support.
          </p>

          {/* Category Filter Pills */}
          <div className="service-filter-tabs">
            <button
              className={`filter-tab-btn ${selectedFilter === 'all' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Services ({servicesData.length})
            </button>
            <button
              className={`filter-tab-btn ${selectedFilter === 'infrastructure' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('infrastructure')}
            >
              Infrastructure &amp; Servers
            </button>
            <button
              className={`filter-tab-btn ${selectedFilter === 'security' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('security')}
            >
              Security &amp; Surveillance
            </button>
            <button
              className={`filter-tab-btn ${selectedFilter === 'support' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('support')}
            >
              Managed Support &amp; AMC
            </button>
            <button
              className={`filter-tab-btn ${selectedFilter === 'workplace' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('workplace')}
            >
              Workplace Hardware &amp; Licensing
            </button>
            <button
              className={`filter-tab-btn ${selectedFilter === 'software' ? 'filter-tab-active' : ''}`}
              onClick={() => setSelectedFilter('software')}
            >
              Custom Software &amp; Portals
            </button>
          </div>
        </div>
      </section>

      {/* Services Cards Directory */}
      <section className="section-pad services-directory-grid-section">
        <div className="container">
          <div className="services-full-grid">
            {filteredServices.map((service) => (
              <div key={service.slug} className="service-directory-card">
                <div className="dir-card-header">
                  <div className="dir-card-icon-wrap">
                    {getIcon(service.icon)}
                  </div>
                  <span className="dir-cat-badge">{service.categoryLabel}</span>
                </div>

                <h2 className="dir-card-title">{service.title}</h2>
                <p className="dir-card-sub">{service.subtitle}</p>
                <p className="dir-card-overview">{service.tagline}</p>

                <div className="dir-scope-box">
                  <span className="scope-box-label">Core Deliverables:</span>
                  <ul className="dir-scope-list">
                    {service.summaryPoints.map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="scope-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dir-card-footer">
                  <Link to={`/services/${service.slug}`} className="btn btn-secondary dir-explore-btn">
                    Explore Dedicated Service Page <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Service Pillars Explainer */}
      <section className="services-methodology-section">
        <div className="container">
          <div className="methodology-panel">
            <div className="eyebrow eyebrow-dark">HOW WE ENSURE INTEGRITY</div>
            <h2 className="methodology-title">
              Why our service architecture is <span className="copper-italic">different.</span>
            </h2>
            <div className="methodology-grid">
              <div className="methodology-item">
                <h4>Modular Independence</h4>
                <p>Each service can be commissioned independently or integrated into a comprehensive master facility contract.</p>
              </div>
              <div className="methodology-item">
                <h4>Zero Vendor Lock-in</h4>
                <p>We configure open, industry-standard equipment with full administrative credentials handed over to your leadership.</p>
              </div>
              <div className="methodology-item">
                <h4>Standardized Documentation</h4>
                <p>Every deployment concludes with a comprehensive technical binder containing IP tables, rack maps, and warranty receipts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need assistance selecting the right scope?"
        subtitle="Speak directly with our senior infrastructure architect to discuss your business requirements and receive an objective recommendation."
        primaryCtaText="Discuss Your Service Requirements"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
