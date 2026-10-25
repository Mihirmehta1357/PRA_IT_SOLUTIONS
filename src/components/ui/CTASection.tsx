import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './CTASection.css';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  badge?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's build the right technology foundation.",
  subtitle = "Whether you are outfitting a new warehouse, modernizing corporate servers, or seeking structured IT support, share your requirement with our engineering team.",
  primaryCtaText = "Discuss a Project",
  primaryCtaLink = "/contact",
  badge = "CONFIDENTIAL REQUIREMENT REVIEW",
}) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          {/* Subtle architectural background line */}
          <div className="cta-architectural-grid" />

          <div className="cta-content">
            <div className="eyebrow eyebrow-dark">{badge}</div>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>

            <div className="cta-trust-strip">
              <span className="trust-pill">
                <CheckCircle2 size={14} className="trust-icon" /> Honest technical scoping
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={14} className="trust-icon" /> No inflated hardware quotes
              </span>
              <span className="trust-pill">
                <ShieldCheck size={14} className="trust-icon" /> Genuine enterprise licensing
              </span>
            </div>

            <div className="cta-actions">
              <Link to={primaryCtaLink} className="btn btn-primary cta-btn">
                {primaryCtaText} <span className="btn-arrow"><ArrowRight size={16} /></span>
              </Link>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn btn-secondary cta-btn-secondary">
                <Phone size={15} /> Speak to an Engineer
              </a>
            </div>

            <div className="cta-footnote">
              <Mail size={13} />
              <span>Or email your technical RFP / BOM directly to </span>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
