import React from 'react';
import { 
  ShieldCheck, 
  FlaskRound as Flask, 
  Tag, 
  Package, 
  Building2, 
  FileCheck2, 
  Info,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function ComplianceSection({ openQuoteModal }) {
  const complianceAreas = [
    {
      title: 'Product Testing',
      desc: 'Required testing can be coordinated according to destination-market and buyer requirements.',
      points: [
        'Seam strength & tensile resistance verification',
        'Bursting strength tests for heavy knitwear',
        'Pilling resistance and dimensional stability after domestic washing',
        'Button & snap attachment pull strength testing'
      ],
      icon: Flask
    },
    {
      title: 'Textile Chemical & Physical Testing',
      desc: 'Physical and chemical testing where required by buyer protocol or destination regulations.',
      points: [
        'Color fastness to washing, perspiration, light & rubbing (crocking)',
        'pH value of aqueous extract testing',
        'Formaldehyde and azo dyes detection compliance (REACH / CPSIA)',
        'Fiber composition quantitative verification'
      ],
      icon: ShieldCheck
    },
    {
      title: 'Destination Labeling Compliance',
      desc: 'Buyer and destination-market labeling requirements strictly adhered to.',
      points: [
        'US Federal Trade Commission (FTC) Textile & Care Labeling rules',
        'EU Textile Regulation No 1007/2011 fiber content compliance',
        'UK Care Labelling & country-of-origin standards',
        'Language-specific care instructions & RN / CA numbers'
      ],
      icon: Tag
    },
    {
      title: 'Packaging & Environmental Compliance',
      desc: 'Buyer-specific packaging requirements designed for international shipping and retail compliance.',
      points: [
        'Suffocation warning labels on polybags where legally required',
        'Recyclable LDPE / biodegradable packaging options',
        'Solid 5-ply / 7-ply drop-tested corrugated cartons',
        'Strict barcode readability and destination warehouse labeling'
      ],
      icon: Package
    },
    {
      title: 'Third-Party Testing Coordination',
      desc: 'Where required, testing can be coordinated through appropriate independent testing laboratories.',
      points: [
        'Coordination with SGS Pakistan',
        'Coordination with Intertek Pakistan',
        'Coordination with Bureau Veritas (BV)',
        'Direct dispatch of sealed test swatches to client-nominated labs'
      ],
      icon: Building2
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
        borderBottom: '1px solid #331623'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff' }}>
            International Standards Coordination
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Compliance & Buyer Requirements
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#d1c0c6', lineHeight: '1.7' }}>
            Compliance requirements vary according to product category, destination market and buyer specifications. We coordinate applicable testing, labeling, packaging and other compliance requirements according to the requirements of each order.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        {/* Section 17 — Honest Integrity Statement on Certifications */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAE1DD',
          borderLeft: '5px solid #800020',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <Info size={24} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.4rem' }}>
                Honest Certification & Standards Policy
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#4B5565', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                Many overseas suppliers display unverified or outdated certification logos (such as generic ISO, OEKO-TEX, WRAP, or BSCI badges) without context. 
                At <strong>Uzair Sharif Enterprises</strong>, we believe in honest commercial partnership:
              </p>
              <p style={{ fontSize: '0.88rem', color: '#8C7A82', lineHeight: '1.65' }}>
                We match specific purchase orders with manufacturing partner facilities that hold active certifications matching your destination market standards, or we arrange order-specific certified laboratory test reports (SGS, Intertek, Bureau Veritas) according to your compliance manual.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Compliance Areas Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {complianceAreas.map((area, idx) => {
            const IconComp = area.icon;
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
                  <IconComp size={22} color="#800020" />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.5rem' }}>
                  {area.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: '#4B5565', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {area.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid #EAE1DD', paddingTop: '1.25rem' }}>
                  {area.points.map((pt, i) => (
                    <li key={i} style={{ fontSize: '0.84rem', color: '#1A0A10', display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                      <CheckCircle2 size={15} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
          >
            <FileText size={18} /> Discuss Your Destination Compliance Needs
          </button>
        </div>

      </div>
    </div>
  );
}
