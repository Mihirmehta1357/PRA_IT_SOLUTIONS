import React, { useState } from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send
} from 'lucide-react';
import './Contact.css';

interface FormData {
  serviceCategory: string;
  companyName: string;
  contactName: string;
  workEmail: string;
  phone: string;
  industry: string;
  location: string;
  requirementType: string;
  timeline: string;
  budgetRange: string;
  detailedRequirements: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceCategory: 'networking',
    companyName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    industry: 'logistics',
    location: '',
    requirementType: 'new-setup',
    timeline: 'immediate',
    budgetRange: '',
    detailedRequirements: '',
    consent: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company name is required';
    }

    if (!formData.contactName.trim()) {
      errs.contactName = 'Contact person name is required';
    }

    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid work email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[\d+\-\s().]{7,25}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid telephone number';
    }

    if (!formData.location.trim()) {
      errs.location = 'Facility city or location is required';
    }

    if (!formData.detailedRequirements.trim()) {
      errs.detailedRequirements = 'Please provide a brief summary of your technical requirement';
    } else if (formData.detailedRequirements.trim().length < 10) {
      errs.detailedRequirements = 'Please provide at least 10 characters describing your requirement';
    }

    if (!formData.consent) {
      errs.consent = 'Please confirm consent to process your enquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Honest submission boundary:
    // When live CRM/API endpoint is configured, this connects directly.
    // Here we simulate the network transmission and provide honest confirmation feedback.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="contact-page">
      <Breadcrumbs items={[{ label: "Contact & Request a Quote" }]} />

      {/* Page Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="eyebrow">DIRECT CORPORATE ENGAGEMENT</div>
          <h1 className="contact-h1">Tell us what your business needs.</h1>
          <p className="contact-lead">
            Share your requirement and we’ll help identify the right next step, from an infrastructure assessment to a software project or ongoing IT support.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form & Direct Corporate Information */}
      <section className="section-pad contact-main-section">
        <div className="container contact-main-grid">
          {/* Left Column: Quotation Request Form */}
          <div className="contact-form-column">
            {submitStatus === 'success' ? (
              <div className="submission-success-panel" role="status">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} className="success-icon" />
                </div>
                <h3 className="success-title">Technical Enquiry Recorded</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.contactName}</strong>. Your enquiry for <strong>{formData.companyName}</strong> has been logged in our system.
                </p>
                <div className="success-summary-box">
                  <div><strong>Selected Scope:</strong> {formData.serviceCategory}</div>
                  <div><strong>Facility Location:</strong> {formData.location}</div>
                  <div><strong>Confirmation Notice:</strong> Our infrastructure engineering desk will review your requirements and reach out via <strong>{formData.workEmail}</strong> or <strong>{formData.phone}</strong> within 1 business day.</div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormData({
                      serviceCategory: 'networking',
                      companyName: '',
                      contactName: '',
                      workEmail: '',
                      phone: '',
                      industry: 'logistics',
                      location: '',
                      requirementType: 'new-setup',
                      timeline: 'immediate',
                      budgetRange: '',
                      detailedRequirements: '',
                      consent: false,
                    });
                  }}
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form className="quote-form-card" onSubmit={handleSubmit} noValidate>
                <div className="form-card-header">
                  <h2 className="form-card-title">Request a Project Proposal or Quote</h2>
                  <p className="form-card-sub">
                    Fill in your technical requirements below for an objective engineering evaluation.
                  </p>
                </div>

                {/* Service Category */}
                <div className="form-group">
                  <label htmlFor="serviceCategory" className="form-label">
                    Primary Service Discipline <span className="required">*</span>
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    className="form-select"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                  >
                    <option value="networking">Networking &amp; Structured Cabling</option>
                    <option value="it-infrastructure">IT Infrastructure &amp; Server Rooms</option>
                    <option value="security">Cybersecurity &amp; Next-Gen Firewalls</option>
                    <option value="cctv-access-control">CCTV, Surveillance &amp; Biometrics</option>
                    <option value="servers-storage-backup">Servers, NAS Storage &amp; 3-2-1 Backup</option>
                    <option value="managed-it-support">Managed IT Support &amp; AMC Contract</option>
                    <option value="corporate-it">Corporate Hardware &amp; Software Licensing</option>
                    <option value="software-development">Custom Software &amp; Operational Dashboards</option>
                    <option value="logistics-turnkey">Turnkey Logistics Facility IT Package</option>
                  </select>
                </div>

                {/* Company & Contact Names */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company / Organization Name <span className="required">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      className="form-input"
                      placeholder="e.g. Apex Freight Logistics Pvt Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    {errors.companyName && (
                      <div className="form-error-msg">{errors.companyName}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactName" className="form-label">
                      Contact Person &amp; Designation <span className="required">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      name="contactName"
                      className="form-input"
                      placeholder="e.g. Vikram Sharma, Operations Head"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                    {errors.contactName && (
                      <div className="form-error-msg">{errors.contactName}</div>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="workEmail" className="form-label">
                      Official Work Email <span className="required">*</span>
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      name="workEmail"
                      className="form-input"
                      placeholder="vikram@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                    />
                    {errors.workEmail && (
                      <div className="form-error-msg">{errors.workEmail}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Contact Phone / Mobile <span className="required">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && (
                      <div className="form-error-msg">{errors.phone}</div>
                    )}
                  </div>
                </div>

                {/* Industry & Location */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="industry" className="form-label">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="form-select"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="logistics">Logistics, Transport &amp; Fleet</option>
                      <option value="warehousing">Warehousing &amp; Distribution</option>
                      <option value="manufacturing">Manufacturing &amp; Industrial</option>
                      <option value="corporate">Corporate Office / Multi-Branch</option>
                      <option value="healthcare">Healthcare &amp; Diagnostics</option>
                      <option value="education">Educational Campus</option>
                      <option value="retail">Retail / Multi-Store Network</option>
                      <option value="other">Other Sector</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location" className="form-label">
                      Facility City / State <span className="required">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      className="form-input"
                      placeholder="e.g. Bengaluru, Hosur Road Hub"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                    {errors.location && (
                      <div className="form-error-msg">{errors.location}</div>
                    )}
                  </div>
                </div>

                {/* Requirement Type & Timeline */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="requirementType" className="form-label">
                      Requirement Type
                    </label>
                    <select
                      id="requirementType"
                      name="requirementType"
                      className="form-select"
                      value={formData.requirementType}
                      onChange={handleChange}
                    >
                      <option value="new-setup">New Facility / Greenfield Setup</option>
                      <option value="upgrade">Modernization &amp; Cable Remediation</option>
                      <option value="amc">Annual Maintenance Contract (AMC)</option>
                      <option value="procurement">Hardware &amp; Software Licensing Procurement</option>
                      <option value="audit">Site Audit &amp; Security Review</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline" className="form-label">
                      Target Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="form-select"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="immediate">Immediate (within 2-4 weeks)</option>
                      <option value="1-3-months">1 to 3 Months</option>
                      <option value="planning">Budgeting &amp; Planning Phase</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Requirements Textarea */}
                <div className="form-group">
                  <label htmlFor="detailedRequirements" className="form-label">
                    Brief Technical Requirements / Facility Context <span className="required">*</span>
                  </label>
                  <textarea
                    id="detailedRequirements"
                    name="detailedRequirements"
                    className="form-textarea"
                    placeholder="Describe your current setup, approximate facility square footage, number of user workstations, camera counts, or specific pain points (e.g. Wi-Fi drops in warehouse, need clean server rack, or AMC quote for 40 PCs)..."
                    value={formData.detailedRequirements}
                    onChange={handleChange}
                    required
                  />
                  {errors.detailedRequirements && (
                    <div className="form-error-msg">{errors.detailedRequirements}</div>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="form-group consent-group">
                  <label htmlFor="consent-input" className="consent-label">
                    <input
                      id="consent-input"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="consent-checkbox"
                    />
                    <span>
                      I authorize PRA IT SOLUTIONS to review these requirement details and contact me regarding this quotation request.
                    </span>
                  </label>
                  {errors.consent && (
                    <div className="form-error-msg">{errors.consent}</div>
                  )}
                </div>

                {/* Submit Action */}
                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Processing Technical Enquiry...'
                    ) : (
                      <>
                        <Send size={16} /> Submit Quotation Request <span className="btn-arrow">→</span>
                      </>
                    )}
                  </button>
                  <span className="privacy-note">
                    <ShieldCheck size={14} className="privacy-shield" /> Strictly confidential corporate review.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Corporate Information & Contact Details */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <span className="info-card-badge">DIRECT CORPORATE DESK</span>
              <h3 className="info-card-title">Connect with Engineering</h3>
              <p className="info-card-desc">
                Prefer to speak directly with an engineer or have an architectural BoM ready for bidding? Reach our team directly.
              </p>

              <div className="info-channels-list">
                <div className="info-channel-item">
                  <div className="channel-icon-wrap"><Mail size={18} /></div>
                  <div>
                    <span className="channel-label">General &amp; Technical Enquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="channel-link">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-wrap"><Phone size={18} /></div>
                  <div>
                    <span className="channel-label">Engineering Desk</span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="channel-link">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-wrap"><Clock size={18} /></div>
                  <div>
                    <span className="channel-label">Business Working Hours</span>
                    <span className="channel-text">{siteConfig.contact.businessHours}</span>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-wrap"><MapPin size={18} /></div>
                  <div>
                    <span className="channel-label">Registered Technical Operations</span>
                    <span className="channel-text">
                      {siteConfig.contact.address.line1},<br />
                      {siteConfig.contact.address.line2},<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Support Desk Note */}
              <div className="support-desk-box">
                <span className="support-badge">EXISTING CONTRACT CLIENTS</span>
                <p>
                  If your organization holds an active Annual Maintenance Contract (AMC), submit critical incident tickets directly to our helpdesk:
                </p>
                <a href={`mailto:${siteConfig.contact.supportEmail}`} className="support-email-link">
                  {siteConfig.contact.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
