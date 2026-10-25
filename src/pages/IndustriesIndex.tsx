import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/ui/CTASection';
import { industriesData } from '../data/industriesData';
import {
  Truck,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  Boxes,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import './IndustriesIndex.css';

export const IndustriesIndex: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck size={24} />;
      case 'Boxes': return <Boxes size={24} />;
      case 'Factory': return <Factory size={24} />;
      case 'Building2': return <Building2 size={24} />;
      case 'HeartPulse': return <HeartPulse size={24} />;
      default: return <GraduationCap size={24} />;
    }
  };

  return (
    <div className="industries-index-page">
      <Breadcrumbs items={[{ label: "Industries We Serve" }]} />

      {/* Hero Section */}
      <section className="industries-hero-section">
        <div className="container">
          <div className="eyebrow">SECTORS &amp; OPERATIONAL ENVIRONMENTS</div>
          <h1 className="industries-h1">
            Engineered for where <span className="title-copper">downtime is expensive.</span>
          </h1>
          <p className="industries-lead">
            Every business environment has distinct operational constraints. From dusty warehouse aisles and noisy factory floors to high-security financial offices, PRA delivers IT infrastructure tailored to your exact physical reality.
          </p>

          {/* Quick Jump Bar */}
          <div className="industry-jump-pills">
            <span className="jump-label">Quick Jump:</span>
            {industriesData.map((ind) => (
              <a key={ind.id} href={`#${ind.id}`} className="jump-pill">
                {ind.title.split('&')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Strategic Callout: Logistics & Industrial IT */}
      <section className="logistics-strategic-strip">
        <div className="container">
          <div className="strategic-callout-panel">
            <div className="strategic-left">
              <span className="strategic-badge">STRATEGIC FOCUS</span>
              <h2>Logistics, Transport &amp; Distribution Facilities</h2>
              <p>
                Operating warehouses, fleet depots, or cross-docking facilities? Explore our specialized high-bay Wi-Fi, yard surveillance, and inter-branch VPN infrastructure.
              </p>
            </div>
            <div className="strategic-right">
              <Link to="/industries/logistics-industrial-it" className="btn btn-primary strategic-btn">
                Dedicated Logistics Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Detailed Directory */}
      <section className="section-pad industries-directory-section">
        <div className="container">
          <div className="industries-vertical-list">
            {industriesData.map((ind, index) => (
              <div key={ind.id} id={ind.id} className="industry-full-block">
                <div className="ind-block-header">
                  <div className="ind-block-icon-box">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <div>
                    <span className="ind-block-num">Sector 0{index + 1}</span>
                    <h2 className="ind-block-title">{ind.title}</h2>
                    <p className="ind-block-tagline">{ind.tagline}</p>
                  </div>
                </div>

                <p className="ind-block-overview">{ind.overview}</p>

                <div className="ind-block-content-grid">
                  {/* Left Column: Challenges */}
                  <div className="ind-challenges-col">
                    <h3 className="col-subheading">Operational Challenges</h3>
                    <ul className="ind-challenges-list">
                      {ind.keyChallenges.map((ch, i) => (
                        <li key={i}>
                          <span className="ch-bullet">!</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Tailored Solutions */}
                  <div className="ind-solutions-col">
                    <h3 className="col-subheading">Recommended IT Solutions</h3>
                    <div className="ind-solutions-list">
                      {ind.recommendedSolutions.map((sol, i) => (
                        <div key={i} className="ind-sol-item">
                          <CheckCircle2 size={16} className="sol-check" />
                          <div>
                            <strong>{sol.title}</strong>
                            <p>{sol.description}</p>
                            <Link to={`/services/${sol.serviceSlug}`} className="sol-service-link">
                              Explore Service Details <ChevronRight size={12} />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Illustrative Scenario Box */}
                <div className="ind-scenario-box">
                  <div className="scenario-tag">ILLUSTRATIVE ENGAGEMENT SCENARIO</div>
                  <h4>{ind.illustrativeScenario.title}</h4>
                  <div className="scenario-detail-grid">
                    <div>
                      <strong>The Challenge:</strong>
                      <p>{ind.illustrativeScenario.challenge}</p>
                    </div>
                    <div>
                      <strong>Engineering Setup:</strong>
                      <p>{ind.illustrativeScenario.architecture}</p>
                    </div>
                    <div>
                      <strong>Operational Outcome:</strong>
                      <p>{ind.illustrativeScenario.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="ind-block-footer">
                  <Link to="/contact" className="btn btn-secondary ind-cta-btn">
                    Discuss {ind.title.split('&')[0]} IT Setup <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your specific industry listed?"
        subtitle="Our core infrastructure—structured cabling, managed switching, firewalls, and preventive maintenance—applies to any facility requiring reliable technology."
        primaryCtaText="Speak with an Engineer"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
