import React from 'react';
import './ProcessSteps.css';

interface Step {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Objective Site Audit & Workflow Discovery",
    details: [
      "Physical inspection of cable trays, racks, thermal load, and RF coverage",
      "Interviews with operations managers regarding friction points & downtime",
      "Analysis of software requirements, bandwidth constraints, and licensing",
    ],
  },
  {
    number: "02",
    title: "Plan",
    summary: "Detailed Schematics & Transparent BoM",
    details: [
      "Layer-2/3 network topology drawings and VLAN boundary mappings",
      "Field-of-view camera placement diagrams with zero blindspot engineering",
      "Clear, itemized Bill of Materials with model numbers and warranty terms",
    ],
  },
  {
    number: "03",
    title: "Implement",
    summary: "Structured Installation & Certified Testing",
    details: [
      "Clean cable pulls, termination, and Fluke channel wire certification",
      "Server racking, UPS calibration, and automated shutdown testing",
      "Out-of-peak migration windows to prevent daytime business disruption",
    ],
  },
  {
    number: "04",
    title: "Support",
    summary: "Continuous Preventive Care & Helpdesk",
    details: [
      "Complete handover binder with asset tags, IP maps, and admin credentials",
      "Scheduled preventive maintenance to clean dust and verify backups",
      "Dedicated helpdesk escalation channel with tracked ticket resolution",
    ],
  },
];

interface ProcessStepsProps {
  steps?: Step[];
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps = defaultSteps }) => {
  return (
    <div className="process-steps-grid">
      {steps.map((step) => (
        <div key={step.number} className="process-step-card">
          <div className="step-header">
            <span className="step-number">{step.number}</span>
            <div className="step-line" />
          </div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-summary">{step.summary}</p>
          <ul className="step-details-list">
            {step.details.map((detail, idx) => (
              <li key={idx} className="step-detail-item">
                <span className="step-dot" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
