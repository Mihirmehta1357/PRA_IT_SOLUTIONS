import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import './SiteFooter.css';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Highlight Strip */}
        <div className="footer-top-strip">
          <div className="footer-brand-block">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-monogram">PRA</span>
              <span className="footer-logo-sub">IT SOLUTIONS</span>
            </Link>
            <p className="footer-tagline">
              Thoughtful software, connected infrastructure and dependable IT services—designed around how your business works.
            </p>
          </div>

          <div className="footer-direct-contact">
            <div className="footer-contact-card">
              <span className="contact-card-label">Direct Corporate Enquiries</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="contact-card-value">
                <Mail size={16} /> {siteConfig.contact.email}
              </a>
            </div>
            <div className="footer-contact-card">
              <span className="contact-card-label">Desk / Assistance</span>
              <a href={`tel:${siteConfig.contact.phone}`} className="contact-card-value">
                <Phone size={16} /> {siteConfig.contact.displayPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* 4-Column Navigation Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">IT Services</h4>
            <ul className="footer-links-list">
              {siteConfig.navigation.footer.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions & Logistics */}
          <div className="footer-col">
            <h4 className="footer-col-title">Focus Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/industries/logistics-industrial-it" className="footer-link highlight-link">
                  Logistics & Industrial IT <ArrowUpRight size={13} />
                </Link>
              </li>
              {siteConfig.navigation.footer.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services/cctv-access-control" className="footer-link">
                  Yard & Gate Biometrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/industries/logistics-industrial-it" className="footer-link">
                  Transport & Fleet Yards
                </Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">
                  Warehousing & Distribution
                </Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">
                  Manufacturing Facilities
                </Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">
                  Multi-Branch Offices
                </Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">
                  Healthcare & Diagnostic Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Office */}
          <div className="footer-col">
            <h4 className="footer-col-title">Corporate Presence</h4>
            <div className="footer-address-block">
              <div className="address-item">
                <MapPin size={16} className="footer-meta-icon" />
                <span>
                  {siteConfig.contact.address.line1},<br />
                  {siteConfig.contact.address.line2},<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.postalCode}
                </span>
              </div>
              <div className="address-item">
                <Clock size={16} className="footer-meta-icon" />
                <span>{siteConfig.contact.businessHours}</span>
              </div>
              <div className="address-item">
                <ShieldCheck size={16} className="footer-meta-icon" />
                <span>Verified Hardware & Genuine Licensing Standards</span>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>
                Request Quotation →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Bottom Legal & Rights */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </div>
          <div className="footer-disclaimer">
            Illustrative solution scenarios and architectural schematics are designed for capability demonstration and client requirements scoping.
          </div>
          <div className="footer-bottom-links">
            <Link to="/about">About</Link>
            <span>·</span>
            <Link to="/services">Services</Link>
            <span>·</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
