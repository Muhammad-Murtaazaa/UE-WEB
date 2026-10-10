import React from 'react';
import { 
  Sliders, 
  Tag, 
  FlaskConical, 
  Workflow, 
  ShieldCheck, 
  Ship, 
  Lock, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function CapabilitiesSection({ openQuoteModal }) {
  const capabilities = [
    {
      title: 'Custom Apparel Development',
      desc: 'Technical product engineering developed according to buyer tech packs, digital CADs, or reference samples.',
      items: [
        'Product development based on buyer specifications and reference samples',
        'Fabric and material options through selected manufacturing partners',
        'Custom sizes, colors, prints and embroidery as required',
        'Product specifications finalized before bulk production'
      ],
      icon: Sliders
    },
    {
      title: 'Private Label & Custom Branding',
      desc: 'Complete turnkey private label trims and custom packaging programs tailored for retail and apparel brands.',
      items: [
        'Custom woven and printed brand labels',
        'Buyer-specific care labels and product tags',
        'Custom logo printing and embroidery',
        'Branded packaging and barcode labeling as required'
      ],
      icon: Tag
    },
    {
      title: 'Pre-Production Sampling',
      desc: 'Physical prototype development and fit approvals prior to bulk fabric allocation and sewing line allocation.',
      items: [
        'Sample development through selected manufacturing partners',
        'Fabric, fit and product specification review',
        'Sample revisions based on buyer feedback',
        'Buyer sample approval before bulk production'
      ],
      icon: FlaskConical
    },
    {
      title: 'Production Coordination',
      desc: 'Orchestrating manufacturing schedules and raw materials across specialized partner production facilities.',
      items: [
        'Order allocation to suitable manufacturing partners',
        'Raw material procurement and production scheduling',
        'Production progress tracking and timeline management',
        'Production delays and order updates coordinated with manufacturing partners'
      ],
      icon: Workflow
    },
    {
      title: 'Production Quality Coordination',
      desc: 'Rigorous inline and end-of-line verification ensuring compliance with agreed international buyer specifications.',
      items: [
        'Product specifications and agreed quality requirements review',
        'Size, measurements and workmanship checks through manufacturing partners',
        'Testing coordination where required by the buyer',
        'Final product, labeling and packaging review before shipment'
      ],
      icon: ShieldCheck
    },
    {
      title: 'Export Packaging & Logistics',
      desc: 'Export-grade packaging, document coordination, and global sea/air freight fulfillment under agreed Incoterms.',
      items: [
        'Export packaging according to buyer specifications',
        'Factory pickup and inland transportation coordination',
        'Export documentation and customs clearance coordination',
        'Shipping line booking and Bill of Lading coordination',
        'Shipment arrangements under agreed Incoterms'
      ],
      icon: Ship
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div style={{ 
        backgroundColor: '#1A0A10', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #441F2F'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff', border: '1px solid #A0183A' }}>
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
          <p style={{ fontSize: '1.1rem', color: '#D1C4C8', lineHeight: '1.7' }}>
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
                  backgroundColor: '#FFFFFF',
                  borderColor: '#EAE1DD'
                }}
              >
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <IconC size={22} color="#800020" />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.5rem' }}>
                  {cap.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: '#5E5055', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {cap.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.55rem', borderTop: '1px solid #F0E8E5', paddingTop: '1.1rem' }}>
                  {cap.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.84rem', color: '#1A0A10', display: 'flex', alignItems: 'flex-start', gap: '0.55rem', lineHeight: '1.5' }}>
                      <CheckCircle2 size={15} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
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
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid #EAE1DD',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-slate" style={{ marginBottom: '0.75rem', backgroundColor: '#FDF2F4', border: '1px solid #F0CBD3', color: '#800020' }}>
              Strategic Industrial Partnerships
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#1A0A10', marginBottom: '1rem' }}>
              Selected Manufacturing Partners in Pakistan
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#5E5055', lineHeight: '1.75' }}>
              We work with selected manufacturing partners across Pakistan based on product category, technical requirements, order quantity and buyer specifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ backgroundColor: '#FAF7F5', padding: '1.5rem', borderRadius: '12px', border: '1px solid #EAE1DD' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#1A0A10', marginBottom: '0.4rem' }}>
                Faisalabad Knitwear & Fabric Cluster
              </div>
              <div style={{ fontSize: '0.84rem', color: '#5E5055', lineHeight: '1.6' }}>
                Direct access to high-capacity spinning and circular knitting for jersey, pique, and fleece production.
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF7F5', padding: '1.5rem', borderRadius: '12px', border: '1px solid #EAE1DD' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#1A0A10', marginBottom: '0.4rem' }}>
                Lahore Apparel & Finishing Hub
              </div>
              <div style={{ fontSize: '0.84rem', color: '#5E5055', lineHeight: '1.6' }}>
                Advanced cutting, automated stitching lines, specialty garment washing, and complex screen print setups.
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF7F5', padding: '1.5rem', borderRadius: '12px', border: '1px solid #EAE1DD' }}>
              <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#1A0A10', marginBottom: '0.4rem' }}>
                Karachi Port & Denim Centers
              </div>
              <div style={{ fontSize: '0.84rem', color: '#5E5055', lineHeight: '1.6' }}>
                Proximity to seaport terminals for streamlined ocean container shipping and heavy woven/denim processing.
              </div>
            </div>
          </div>

          {/* Strict Professional Confidentiality Notice */}
          <div style={{
            backgroundColor: '#FAF7F5',
            border: '1px dashed #E8BAC5',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Lock size={22} color="#800020" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.85rem', color: '#1A0A10', lineHeight: '1.6' }}>
              <strong style={{ color: '#800020' }}>Commercial Accountability & Integrity Policy:</strong> Uzair Sharif Enterprises operates as the single commercial and legal entity for all purchase orders. Partner factory contracts, operational data, and buyer tech pack details are protected under strict bilateral commercial non-disclosure agreements.
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
