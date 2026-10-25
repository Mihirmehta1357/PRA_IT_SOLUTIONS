import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Globe, ChevronDown, Menu, X, ArrowRight, Camera, Network, Headphones } from 'lucide-react';
import './SiteHeader.css';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo with Official Emblem */}
        <Link to="/" className="brand-logo" aria-label="PRA IT SOLUTIONS Home">
          <img
            src="/images/pra-logo.png"
            alt="PRA IT SOLUTIONS Logo"
            className="brand-logo-img"
            width={44}
            height={44}
          />
          <div className="brand-logo-text">
            <span className="brand-logo-monogram">PRA</span>
            <span className="brand-logo-sub">IT SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {/* Services with Dropdown */}
          <div className="nav-item-dropdown" ref={servicesDropdownRef}>
            <button
              className={`nav-link-btn ${
                location.pathname.startsWith('/services') ? 'nav-link-active' : ''
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                size={14}
                className={`dropdown-chevron ${isServicesOpen ? 'chevron-rotated' : ''}`}
              />
            </button>

            {isServicesOpen && (
              <div
                className="services-megamenu"
                onMouseLeave={() => setIsServicesOpen(false)}
                role="menu"
              >
                <div className="megamenu-grid">
                  {siteConfig.navigation.servicesMenu.categories.map((cat, idx) => (
                    <div key={idx} className="megamenu-column">
                      <div className="megamenu-col-header">
                        {idx === 0 && <Camera size={16} className="megamenu-icon" />}
                        {idx === 1 && <Network size={16} className="megamenu-icon" />}
                        {idx === 2 && <Headphones size={16} className="megamenu-icon" />}
                        <span className="megamenu-cat-title">{cat.categoryTitle}</span>
                      </div>
                      <div className="megamenu-links">
                        {cat.services.map((svc) => (
                          <Link
                            key={svc.path}
                            to={svc.path}
                            className="megamenu-link-item"
                            role="menuitem"
                          >
                            <span className="megamenu-item-title">{svc.title}</span>
                            <span className="megamenu-item-desc">{svc.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="megamenu-footer">
                  <Link to="/services" className="megamenu-view-all">
                    View Complete Services Directory <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/industries/logistics-industrial-it"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Solutions
          </NavLink>

          <NavLink
            to="/industries"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Industries
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right CTA & Controls */}
        <div className="header-right">
          <div className="region-indicator" title="Region: India (English)">
            <Globe size={15} />
            <span>English</span>
            <ChevronDown size={12} />
          </div>

          <Link to="/contact" className="btn btn-primary header-cta">
            Discuss a project <span className="btn-arrow">→</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-inner">
            <div className="mobile-section-label">Main Navigation</div>
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              All Services
            </Link>
            <div className="mobile-sublinks">
              {siteConfig.navigation.servicesMenu.categories.flatMap(c => c.services).map(svc => (
                <Link
                  key={svc.path}
                  to={svc.path}
                  className="mobile-sublink-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {svc.title}
                </Link>
              ))}
            </div>

            <Link
              to="/industries/logistics-industrial-it"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Logistics & Industrial Solutions
            </Link>
            <Link to="/industries" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Industries We Serve
            </Link>
            <Link to="/projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Work & Solution Scenarios
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About PRA IT Solutions
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact & Quotation
            </Link>

            <div className="mobile-drawer-cta">
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discuss a project →
              </Link>
              <div className="mobile-contact-meta">
                <div>Enquiries: {siteConfig.contact.email}</div>
                <div>Desk: {siteConfig.contact.displayPhone}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
