import React, { useState } from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/ui/CTASection';
import { projectsData } from '../data/projectsData';
import {
  CheckCircle2,
  Layers,
  Wrench,
  Info
} from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page">
      <Breadcrumbs items={[{ label: "Projects & Solution Scenarios" }]} />

      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <div className="eyebrow">CAPABILITY DEMONSTRATION</div>
          <h1 className="projects-h1">
            Proven engineering, <span className="title-copper">transparent methodology.</span>
          </h1>
          <p className="projects-lead">
            Explore our detailed solution blueprints and engineering case templates. These scenarios demonstrate how PRA approaches site surveys, equipment selection, wiring topology, and operational handover.
          </p>

          {/* Ethics / Integrity Disclosure Banner */}
          <div className="projects-integrity-banner">
            <Info size={18} className="integrity-icon" />
            <div>
              <strong>Transparent Portfolio Policy:</strong>
              <span>
                To honor non-disclosure agreements and uphold strict business integrity, client identities are anonymized. Scenarios below represent verified engineering architectures and actual equipment bills-of-materials deployed in operational environments.
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Scenarios ({projectsData.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'logistics' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('logistics')}
            >
              Logistics &amp; Warehouse
            </button>
            <button
              className={`filter-btn ${activeCategory === 'servers' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('servers')}
            >
              Server &amp; Racks
            </button>
            <button
              className={`filter-btn ${activeCategory === 'network' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('network')}
            >
              Fiber &amp; Switching
            </button>
            <button
              className={`filter-btn ${activeCategory === 'support' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('support')}
            >
              Managed AMC Support
            </button>
            <button
              className={`filter-btn ${activeCategory === 'software' ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory('software')}
            >
              Software &amp; Dashboards
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase Cards */}
      <section className="section-pad projects-showcase-section">
        <div className="container">
          <div className="projects-list">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="project-detail-card">
                <div className="project-card-header">
                  <div>
                    <div className="project-badge-row">
                      <span className="project-cat-pill">{project.categoryLabel}</span>
                      <span className="project-illustrative-tag">Illustrative Solution Scenario #{idx + 1}</span>
                    </div>
                    <h2 className="project-card-title">{project.title}</h2>
                    <div className="project-facility-meta">
                      <strong>Facility Type:</strong> {project.facilityType}
                    </div>
                  </div>
                </div>

                <div className="project-card-body-grid">
                  {/* Left Column: Visual and Technical Specs */}
                  <div className="project-left-col">
                    <div className="project-img-frame">
                      <img src={project.image} alt={project.title} className="project-img" />
                      {project.diagramTitle && (
                        <div className="project-img-caption">
                          <Layers size={13} />
                          <span>{project.diagramTitle}</span>
                        </div>
                      )}
                    </div>

                    {/* Technical Specifications Table */}
                    <div className="project-specs-panel">
                      <h4 className="specs-table-title">Engineering Bill-of-Materials Highlights:</h4>
                      <table className="specs-table">
                        <tbody>
                          {project.technicalSpecs.map((spec, sIdx) => (
                            <tr key={sIdx}>
                              <td className="spec-label">{spec.label}</td>
                              <td className="spec-value">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right Column: Challenges, Delivery & Outcomes */}
                  <div className="project-right-col">
                    {/* Summary */}
                    <div className="project-narrative-block">
                      <p className="project-summary-text">{project.scopeSummary}</p>
                    </div>

                    {/* Operational Challenges */}
                    <div className="project-narrative-block">
                      <h4 className="narrative-heading">The Operational Problem:</h4>
                      <ul className="project-bullet-list">
                        {project.challenges.map((ch, cIdx) => (
                          <li key={cIdx}>
                            <span className="bullet-num">0{cIdx + 1}</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Engineering Solution */}
                    <div className="project-narrative-block">
                      <h4 className="narrative-heading">Delivered Engineering Setup:</h4>
                      <ul className="project-bullet-list">
                        {project.solutionDelivered.map((sol, solIdx) => (
                          <li key={solIdx}>
                            <Wrench size={14} className="wrench-icon" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes Box */}
                    <div className="project-outcomes-box">
                      <h4 className="outcomes-box-title">Verified Engineering Outcomes:</h4>
                      <ul className="outcomes-checklist">
                        {project.keyOutcomes.map((oc, oIdx) => (
                          <li key={oIdx}>
                            <CheckCircle2 size={16} className="outcome-check" />
                            <span>{oc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Submission Template Note */}
      <section className="project-template-section">
        <div className="container">
          <div className="template-note-panel">
            <div className="eyebrow eyebrow-dark">FOR ENTERPRISE CLIENTS</div>
            <h3 className="template-note-title">
              Require a custom technical proposal or site architecture review?
            </h3>
            <p className="template-note-desc">
              Every facility has distinct constraints. We produce tailored architectural drawings, cable drop schedules, and transparent Bill-of-Materials before any project commitment.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="/contact" className="btn btn-primary">
                Request Facility Scoping Proposal →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to engineer your facility's technology?"
        subtitle="Share your site dimensions, device count, and operational requirements with our team."
        primaryCtaText="Discuss Your Project"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
