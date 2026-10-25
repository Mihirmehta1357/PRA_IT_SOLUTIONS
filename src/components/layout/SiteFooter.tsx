import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Clock, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import './SiteFooter.css';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      {/* 1. TOP DISPATCH & EMERGENCY SUPPORT MARQUEE / BAR */}
      <div className="footer-dispatch-banner">
        <div className="container dispatch-banner-inner">
          <div className="dispatch-left">
            <span className="dispatch-live-pulse" />
            <span className="dispatch-label">RAPID ONSITE DISPATCH:</span>
            <span className="dispatch-regions">Uran · JNPT Port Corridor · Panvel · Navi Mumbai · Mumbai MMR</span>
          </div>
          <div className="dispatch-actions">
            <a href={`tel:${siteConfig.contact.phonePrimary}`} className="dispatch-action-link" id="footer-call-primary">
              <Phone size={14} /> Call: {siteConfig.contact.displayPhonePrimary}
            </a>
            <span className="dispatch-sep">|</span>
            <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="dispatch-action-link" id="footer-call-secondary">
              Support: {siteConfig.contact.displayPhoneSecondary}
            </a>
            <span className="dispatch-sep">|</span>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="dispatch-whatsapp-link" id="footer-whatsapp">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main-container">
        {/* 2. MAIN 4-COLUMN ARCHITECTURAL GRID */}
        <div className="footer-columns-grid">
          {/* Column 1: Registered Identity & Verified Credentials */}
          <div className="footer-col col-identity">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-monogram">{siteConfig.brandMonogram}</span>
              <span className="footer-logo-sub">IT SOLUTIONS</span>
            </Link>
            <p className="footer-tagline">
              {siteConfig.tagline} Enterprise IT infrastructure, CCTV surveillance, biometric access control and disciplined managed support.
            </p>

            {/* Verified Indian B2B GSTIN Badge */}
            <div className="footer-gst-badge">
              <div className="gst-badge-top">
                <CheckCircle2 size={15} className="gst-icon" />
                <span className="gst-label">REGISTERED B2B TAX ENTITY</span>
              </div>
              <div className="gst-number-display">
                <span className="gst-title">GSTIN:</span>
                <span className="gst-val">{siteConfig.gstNumber}</span>
              </div>
              <span className="gst-jurisdiction">State Code: 27 (Maharashtra) · Verified Invoicing</span>
            </div>

            <div className="footer-trust-marks">
              <span className="trust-mark-item"><ShieldCheck size={14} /> Fluke-Tested Cabling</span>
              <span className="trust-mark-item"><ShieldCheck size={14} /> 100% Genuine OEM Hardware</span>
            </div>
          </div>

          {/* Column 2: Physical Security & Infrastructure */}
          <div className="footer-col">
            <h4 className="footer-col-title">Security &amp; Infrastructure</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/cctv-access-control" className="footer-link">
                  CCTV Surveillance Systems
                </Link>
              </li>
              <li>
                <Link to="/services/cctv-access-control" className="footer-link">
                  Biometric Face &amp; Fingerprint Access
                </Link>
              </li>
              <li>
                <Link to="/services/networking" className="footer-link">
                  Cat6A Structured Cabling &amp; Fiber
                </Link>
              </li>
              <li>
                <Link to="/services/it-infrastructure" className="footer-link">
                  Server Room 42U Rack Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/servers-storage-backup" className="footer-link">
                  Enterprise Servers &amp; NAS Storage
                </Link>
              </li>
              <li>
                <Link to="/industries/logistics-industrial-it" className="footer-link highlight-link">
                  Logistics &amp; Port IT Solutions <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Managed IT & Workplace Supply */}
          <div className="footer-col">
            <h4 className="footer-col-title">Support &amp; Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/managed-it-support" className="footer-link">
                  Corporate IT AMC Contracts
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-it" className="footer-link">
                  Commercial Laptops &amp; Desktops
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-it" className="footer-link">
                  Genuine Microsoft 365 Licensing
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="footer-link">
                  Custom Operations Software &amp; Apps
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Architectural Solution Blueprints
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link highlight-link">
                  All 7 Service Disciplines <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Uran Office, Desk & Contact */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Registered Office</h4>
            <div className="footer-address-block">
              <div className="address-item">
                <MapPin size={17} className="footer-meta-icon" />
                <address className="office-address">
                  <strong>Kalpana Niwas, Shop no. 1</strong><br />
                  Fish Market Road, Kotnaka<br />
                  Near Riksha Stop, Uran<br />
                  Navi Mumbai - 400702, Maharashtra
                </address>
              </div>

              <div className="address-item">
                <Clock size={16} className="footer-meta-icon" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM<br /><small>(24/7 AMC Emergency Dispatch)</small></span>
              </div>

              <div className="footer-phone-channels">
                <a href={`tel:${siteConfig.contact.phonePrimary}`} className="footer-phone-link">
                  <Phone size={14} /> <span>Sales: {siteConfig.contact.displayPhonePrimary}</span>
                </a>
                <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="footer-phone-link">
                  <Phone size={14} /> <span>Support: {siteConfig.contact.displayPhoneSecondary}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="footer-mail-link">
                  <Mail size={14} /> <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-action"
                id="footer-maps-btn"
              >
                <span>Open in Google Maps</span> <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* 3. BOTTOM LEGAL, GST & REGIONAL ATTRIBUTION */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {currentYear} {siteConfig.companyName}. All rights reserved. Registered GSTIN: <strong>{siteConfig.gstNumber}</strong>.
          </div>

          <div className="footer-regional-strip">
            <span className="regional-dot" /> Uran &amp; Navi Mumbai HQ · Serving Greater Mumbai &amp; Raigad District
          </div>

          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <span>·</span>
            <Link to="/services">Services</Link>
            <span>·</span>
            <Link to="/industries">Industries</Link>
            <span>·</span>
            <Link to="/projects">Projects</Link>
            <span>·</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
