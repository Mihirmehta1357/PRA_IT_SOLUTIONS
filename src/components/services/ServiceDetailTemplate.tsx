import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { CTASection } from '../ui/CTASection';
import type { ServiceItem } from '../../data/servicesData';
import {
  CheckCircle2,
  ChevronDown,
  Layers,
  Wrench,
  Clock,
  Sparkles
} from 'lucide-react';
import './ServiceDetailTemplate.css';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ service }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page">
      <Breadcrumbs
        items={[
          { label: "All Services", path: "/services" },
          { label: service.title }
        ]}
      />

      {/* Service Page Hero */}
      <section className="service-hero-section">
        <div className="container service-hero-grid">
          <div className="service-hero-left">
            <div className="eyebrow">{service.categoryLabel.toUpperCase()}</div>
            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-subtitle">{service.subtitle}</p>
            <p className="service-hero-overview">{service.overview}</p>

            <div className="service-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {service.ctaText} <span className="btn-arrow">→</span>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
          </div>

          <div className="service-hero-right">
            <div className="service-image-container">
              <img
                src={service.heroImage}
                alt={service.title}
                className="service-main-image"
              />
              <div className="service-image-tag">
                <span className="tag-label">VERIFIED ENGINEERING STANDARD</span>
                <span className="tag-val">{service.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Points Strip */}
      <section className="service-summary-strip">
        <div className="container">
          <div className="summary-strip-grid">
            {service.summaryPoints.map((point, idx) => (
              <div key={idx} className="summary-strip-item">
                <CheckCircle2 size={18} className="summary-check-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technical Scope */}
      <section className="section-pad service-scope-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">DETAILED WORK SCOPE</div>
            <h2 className="section-title">
              Engineering depth &amp; <span className="title-copper">deliverables.</span>
            </h2>
            <p className="section-subcopy">
              We define clear operational boundaries so our clients know exactly what hardware, configuration, and verification is included.
            </p>
          </div>

          <div className="scope-blocks-grid">
            {service.scope.map((block, idx) => (
              <div key={idx} className="scope-block-card">
                <div className="scope-card-num">0{idx + 1}</div>
                <h3 className="scope-card-title">{block.heading}</h3>
                <p className="scope-card-desc">{block.description}</p>
                <div className="scope-items-box">
                  <span className="scope-items-label">Included Deliverables:</span>
                  <ul className="scope-items-list">
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <span className="bullet-dash">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights Panel */}
      <section className="service-highlights-section">
        <div className="container">
          <div className="highlights-panel">
            <div className="eyebrow eyebrow-dark">TECHNICAL CRITERIA</div>
            <h2 className="highlights-title">
              Engineered for <span className="copper-italic">operational reality.</span>
            </h2>
            <div className="highlights-grid">
              {service.technicalHighlights.map((th, idx) => (
                <div key={idx} className="highlight-item">
                  <div className="highlight-icon"><Sparkles size={18} /></div>
                  <h4>{th.title}</h4>
                  <p>{th.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Methodology */}
      <section className="section-pad service-process-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">STRUCTURED EXECUTION</div>
            <h2 className="section-title">
              Delivery workflow &amp; <span className="title-copper">handover.</span>
            </h2>
            <p className="section-subcopy">
              From site survey through configuration, certified testing, and client training.
            </p>
          </div>

          <div className="deployment-steps-grid">
            {service.process.map((p, idx) => (
              <div key={idx} className="dep-step-card">
                <span className="dep-step-num">{p.step}</span>
                <h3 className="dep-step-title">{p.title}</h3>
                <p className="dep-step-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models for this Service */}
      <section className="section-pad service-models-section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="eyebrow">CONTRACT MODELS</div>
            <h2 className="section-title">
              Flexible engagement <span className="title-copper">options.</span>
            </h2>
            <p className="section-subcopy">
              Choose the service model that fits your operational requirements and capital budget.
            </p>
          </div>

          <div className="service-models-grid">
            {service.engagementModels.map((model, idx) => (
              <div key={idx} className="service-model-card">
                <div className="model-top-icon">
                  {idx === 0 ? <Wrench size={22} /> : idx === 1 ? <Clock size={22} /> : <Layers size={22} />}
                </div>
                <h3 className="service-model-title">{model.title}</h3>
                <p className="service-model-desc">{model.description}</p>
                <div className="service-model-best">
                  <strong>Recommended For:</strong> {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-pad service-faq-section">
          <div className="container">
            <div className="section-heading-wrap">
              <div className="eyebrow">CLARIFICATIONS &amp; POLICIES</div>
              <h2 className="section-title">
                Frequently asked <span className="title-copper">questions.</span>
              </h2>
              <p className="section-subcopy">
                Honest answers regarding scope, guarantees, and operational expectations.
              </p>
            </div>

            <div className="faq-accordion-list">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} className={`faq-icon ${isOpen ? 'faq-icon-rot' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific CTA */}
      <CTASection
        title={`Discuss your ${service.title.toLowerCase()} requirement.`}
        subtitle="Share your facility details or hardware requirements to receive an objective proposal from our engineering team."
        primaryCtaText={service.ctaText}
        primaryCtaLink="/contact"
      />
    </div>
  );
};
