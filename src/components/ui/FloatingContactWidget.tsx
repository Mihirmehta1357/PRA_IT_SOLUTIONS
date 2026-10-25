import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { MessageCircle, Phone, X, MapPin } from 'lucide-react';
import './FloatingContactWidget.css';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="floating-contact-container" aria-label="Quick Contact Options">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="floating-card animate-fade-in" role="dialog" aria-modal="false" aria-label="Direct Dispatch & Inquiries">
          <div className="floating-card-header">
            <div className="floating-header-info">
              <span className="floating-badge">
                <span className="pulse-dot" /> Uran &amp; Navi Mumbai Active
              </span>
              <h4 className="floating-title">Quick IT Assistance</h4>
            </div>
            <button
              className="floating-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Quick Contact Panel"
            >
              <X size={16} />
            </button>
          </div>

          <div className="floating-card-body">
            <p className="floating-intro">
              Direct line to our technical engineering &amp; sales desk in Uran:
            </p>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-action-btn action-whatsapp"
              id="floating-whatsapp-btn"
            >
              <div className="action-icon-circle whatsapp-bg">
                <MessageCircle size={18} />
              </div>
              <div className="action-text">
                <span className="action-label">Chat on WhatsApp</span>
                <span className="action-sub">{siteConfig.contact.displayPhonePrimary}</span>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.contact.phonePrimary}`}
              className="quick-action-btn action-phone"
              id="floating-call-primary-btn"
            >
              <div className="action-icon-circle phone-bg">
                <Phone size={18} />
              </div>
              <div className="action-text">
                <span className="action-label">Sales &amp; Projects Desk</span>
                <span className="action-sub">{siteConfig.contact.displayPhonePrimary}</span>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneSecondary}`}
              className="quick-action-btn action-support"
              id="floating-call-secondary-btn"
            >
              <div className="action-icon-circle support-bg">
                <Phone size={18} />
              </div>
              <div className="action-text">
                <span className="action-label">Technical Support &amp; AMC</span>
                <span className="action-sub">{siteConfig.contact.displayPhoneSecondary}</span>
              </div>
            </a>

            <div className="floating-footer-location">
              <MapPin size={12} />
              <span>Kalpana Niwas, Shop 1, Kotnaka, Uran</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger Buttons */}
      <div className="floating-trigger-group">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-bubble-whatsapp"
          aria-label="Chat on WhatsApp"
          title="Chat directly on WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="bubble-tooltip">WhatsApp Quick Chat</span>
        </a>

        <button
          className={`floating-bubble-main ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close Contact Menu' : 'Open Contact Menu'}
          title="Emergency Dispatch & Contact Desk"
        >
          {isOpen ? <X size={20} /> : <Phone size={20} />}
          <span className="bubble-pulse" />
        </button>
      </div>
    </aside>
  );
};
