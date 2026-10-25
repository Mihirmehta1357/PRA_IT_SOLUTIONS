import React, { useState } from 'react';
import { Warehouse, Network, ShieldCheck, Server, Headphones, ArrowRight } from 'lucide-react';
import './TechnicalDiagram.css';

interface TechnicalDiagramProps {
  title?: string;
  subtitle?: string;
}

export const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({
  title = "Illustrative Multi-Location Operational Architecture",
  subtitle = "How edge operational sites connect safely to central systems, security monitoring, and continuous IT care.",
}) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      stage: "Edge Site",
      label: "Warehouse / Branch Yard",
      icon: <Warehouse size={22} />,
      detail:
        "Industrial high-bay APs, rugged barcode scanners, weighbridge terminals, and local billing computers.",
      specs: "Cat6A shielded drops · IP67 enclosures · 802.11k/r roaming",
    },
    {
      id: 1,
      stage: "Site Perimeter",
      label: "CCTV & Physical Access",
      icon: <ShieldCheck size={22} />,
      detail:
        "4MP night-vision cameras covering gates, loading docks, and turnstiles with facial biometric validation.",
      specs: "Isolated CCTV VLAN · 35-day local NVR storage · WDR sensors",
    },
    {
      id: 2,
      stage: "Edge Network",
      label: "Managed Switch & Firewall",
      icon: <Network size={22} />,
      detail:
        "Hardware firewall with Dual-WAN automated ISP failover and QoS traffic shaping.",
      specs: "Layer-3 routing · Spanning Tree loops blocked · IPsec encryption",
    },
    {
      id: 3,
      stage: "Core Backend",
      label: "Servers & 3-2-1 Backup",
      icon: <Server size={22} />,
      detail:
        "On-premise enterprise server cluster, RAID 10 storage array, and air-gapped immutable backup snapshots.",
      specs: "Hot-spare disks · Btrfs snapshots · Dual online UPS power",
    },
    {
      id: 4,
      stage: "Lifecycle Support",
      label: "Proactive AMC & Helpdesk",
      icon: <Headphones size={22} />,
      detail:
        "Centralized telemetry, quarterly physical servicing, remote helpdesk, and transparent ticket reporting.",
      specs: "Direct engineer access · Patch testing · Asset tracking",
    },
  ];

  return (
    <div className="technical-diagram-panel">
      <div className="diagram-header">
        <div className="eyebrow eyebrow-dark">ARCHITECTURE SCHEMATIC</div>
        <h3 className="diagram-title">{title}</h3>
        <p className="diagram-subtitle">{subtitle}</p>
      </div>

      {/* Nodes Flow Bar */}
      <div className="diagram-flow">
        {nodes.map((node, index) => {
          const isActive = activeNode === index;
          return (
            <React.Fragment key={node.id}>
              <button
                type="button"
                className={`diagram-node ${isActive ? 'diagram-node-active' : ''}`}
                onClick={() => setActiveNode(index)}
              >
                <div className="node-stage-badge">{node.stage}</div>
                <div className="node-icon-wrap">{node.icon}</div>
                <div className="node-label">{node.label}</div>
              </button>
              {index < nodes.length - 1 && (
                <div className="diagram-connector">
                  <div className="connector-line" />
                  <ArrowRight size={14} className="connector-arrow" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="diagram-active-card">
        <div className="active-card-meta">
          <span className="active-card-badge">Selected Subsystem:</span>
          <span className="active-card-title">{nodes[activeNode].label}</span>
        </div>
        <p className="active-card-desc">{nodes[activeNode].detail}</p>
        <div className="active-card-specs">
          <span className="specs-label">Technical Standard:</span> {nodes[activeNode].specs}
        </div>
      </div>
    </div>
  );
};
