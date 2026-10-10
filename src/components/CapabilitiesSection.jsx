import React from 'react';
import { 
  Sliders, 
  Tag, 
  FlaskConical, 
  Workflow, 
  ShieldCheck, 
  Package, 
  Ship, 
  Lock, 
  Network,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function CapabilitiesSection({ openQuoteModal }) {
  const capabilities = [
    {
      title: 'Custom Apparel Development',
      desc: 'Products developed according to buyer tech packs, digital CADs, or physical benchmark garments.',
      items: ['Pattern drafting & grade scaling', 'Yarn selection & custom knit engineering', 'Pantone matching (Lab dip approval)', 'Shrinkage tolerance management'],
      icon: Sliders
    },
    {
      title: 'Private Label & Branding Programs',
      desc: 'Turnkey private label packages tailored for retail, e-commerce, and corporate uniforms.',
      items: ['High-definition damask woven neck labels', 'Printed satin wash-care labels', 'Custom die-cut hang tags with string aglets', 'Branded polybags & barcoding'],
      icon: Tag
    },
    {
      title: 'Pre-Production Sampling',
      desc: 'Physical prototype development prior to bulk fabric allocation and sewing line setup.',
      items: ['Fit sample development', 'Fabric hand-feel verification', 'Stitch & seam construction audit', 'Buyer revision & formal sign-off'],
      icon: FlaskConical
    },
    {
      title: 'Production Coordination',
      desc: 'Orchestrating production through selected specialized partner units across Pakistan.',
      items: ['Matching order size to optimal plant capacity', 'Raw material timeline scheduling', 'Line balancing & daily output tracking', 'Delay prevention & risk mitigation'],
      icon: Workflow
    },
    {
      title: 'Multi-Point Quality Coordination',
      desc: 'Agreed quality requirements monitored throughout the entire manufacturing process.',
      items: ['Fabric GSM & yarn count verification', 'Critical measurement point checking', 'Color fastness & wash test monitoring', 'Printing & embroidery adhesion tests', 'Packaging & polybag labeling review'],
      icon: ShieldCheck
    },
    {
      title: 'Export Packaging & Logistics',
      desc: 'Commercial packaging and international freight preparation according to export standards.',
      items: ['5-ply / 7-ply heavy export cartons', 'Moisture desiccant packs & carton taping', 'Commercial invoice & packing list issuance', 'Pakistani customs clearance & Bill of Lading (B/L)', 'FOB, CIF, CFR, or EXW coordination'],
      icon: Ship
    }
  ];

  return (
    <div style={{ backgroundColor: '#EDECE6', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div style={{ 
        backgroundColor: '#0A1128', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #1E294B'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#1546D9', color: '#ffffff' }}>
            Operational Scope & Sourcing Infrastructure
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Our Manufacturing Capabilities
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7' }}>
            Uzair Sharif Enterprises coordinates the complete commercial and manufacturing supply process from technical development to container loading.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        {/* Core Capabilities Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {capabilities.map((cap, idx) => {
            const IconC = cap.icon;
            return (
              <div 
                key={idx}
                className="subtle-card"
                style={{ 
                  padding: '2.25rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column',
                  backgroundColor: '#FAF9F5',
                  borderColor: '#DCDAD1'
                }}
              >
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  backgroundColor: '#EBF0FE', 
                  border: '1px solid #A4BCFD',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <IconC size={22} color="#1546D9" />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0A1128', marginBottom: '0.5rem' }}>
                  {cap.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: '#4B5565', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {cap.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.45rem', borderTop: '1px solid #E6E4DC', paddingTop: '1rem' }}>
                  {cap.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', color: '#0A1128', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="#1546D9" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Section 14 — Selected Manufacturing Partners in Pakistan */}
        <div style={{
          backgroundColor: '#FAF9F5',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid #DCDAD1',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-slate" style={{ marginBottom: '0.75rem', backgroundColor: '#EDECE6', border: '1px solid #DCDAD1', color: '#0A1128' }}>
              Strategic Industrial Partnerships
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0A1128', marginBottom: '1rem' }}>
              Selected Manufacturing Partners in Pakistan
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#4B5565', lineHeight: '1.75' }}>
              We work with selected manufacturing partners across Pakistan based on product category, technical requirements, order quantity and buyer specifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #DCDAD1' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#0A1128', marginBottom: '0.4rem' }}>
                Faisalabad Knitwear & Yarn Cluster
              </div>
              <div style={{ fontSize: '0.84rem', color: '#4B5565', lineHeight: '1.6' }}>
                Direct access to high-capacity spinning and circular knitting for jersey, pique, and fleece production.
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #DCDAD1' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#0A1128', marginBottom: '0.4rem' }}>
                Lahore Apparel & Finishing Hub
              </div>
              <div style={{ fontSize: '0.84rem', color: '#4B5565', lineHeight: '1.6' }}>
                Advanced cutting, automated stitching lines, specialty garment washing, and complex screen print setups.
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #DCDAD1' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#0A1128', marginBottom: '0.4rem' }}>
                Karachi Port & Denim Centers
              </div>
              <div style={{ fontSize: '0.84rem', color: '#4B5565', lineHeight: '1.6' }}>
                Proximity to seaport terminals for streamlined ocean container shipping and heavy woven/denim processing.
              </div>
            </div>
          </div>

          {/* Strict Professional Confidentiality Notice */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px dashed #A4BCFD',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Lock size={22} color="#1546D9" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.85rem', color: '#0A1128', lineHeight: '1.6' }}>
              <strong style={{ color: '#1546D9' }}>Commercial Accountability & Integrity Policy:</strong> Uzair Sharif Enterprises operates as the single commercial and legal entity for all purchase orders. Partner factory contracts, operational data, and buyer tech pack details are protected under strict bilateral commercial non-disclosure agreements.
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
          >
            <FileText size={18} /> Request Capabilities Assessment
          </button>
        </div>

      </div>
    </div>
  );
}
