import React from 'react';
import { 
  Network, 
  Settings2, 
  Tag, 
  FlaskConical, 
  CheckCircle2, 
  Ship,
  ShieldCheck,
  Building2,
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function WhyChooseUs({ openQuoteModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const points = [
    {
      num: '01',
      title: 'Pakistan-Based Supply Network',
      desc: 'Selected manufacturing partners across Pakistan.',
      detail: 'We collaborate with vetted, specialized knit and woven production units located across key Pakistani textile hubs, matching your specific order quantity, machinery requirement, and fabric type.',
      icon: Network
    },
    {
      num: '02',
      title: 'Custom Production',
      desc: 'Products developed according to buyer specifications.',
      detail: 'Zero ready-made stock. From raw yarn selection and custom knitting/weaving to precise GSM tolerances, dyeing, silhouette cuts, and custom pantone shades.',
      icon: Settings2
    },
    {
      num: '03',
      title: 'Private Label Execution',
      desc: 'Custom labels, tags and packaging according to requirements.',
      detail: 'Complete brand execution: woven main labels, satin care labels, custom embossed hang tags, barcode stickers, printed polybags, and custom master export carton markings.',
      icon: Tag
    },
    {
      num: '04',
      title: 'Pre-Production Sampling',
      desc: 'Buyer-specific samples developed before bulk production.',
      detail: 'Physical prototypes and fit samples are developed and dispatched for your touch, measurement verification, and formal sign-off before commencing bulk line production.',
      icon: FlaskConical
    },
    {
      num: '05',
      title: 'Quality Coordination',
      desc: 'Specifications and agreed quality coordinated throughout production.',
      detail: 'Continuous on-site coordination from fabric roll inspection and inline stitching checks to final random inspection (AQL 2.5 standards) before dispatch.',
      icon: CheckCircle2
    },
    {
      num: '06',
      title: 'Export Logistics Coordination',
      desc: 'We manage commercial and export coordination through one contact.',
      detail: 'Streamlined commercial invoices, packing lists, Pakistan customs processing, Certificates of Origin, and ocean/air freight booking under your preferred Incoterms (FOB, CIF, CFR, EXW).',
      icon: Ship
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#FAF9F5', 
        paddingTop: '5.5rem', 
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #DCDAD1'
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem' }}>
            Built for International B2B Buyers
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
            fontWeight: '800', 
            color: '#0A1128',
            letterSpacing: '-0.025em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Why Choose Uzair Sharif Enterprises?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4B5565', lineHeight: '1.7' }}>
            International brands, apparel importers, and wholesale buyers choose our supply coordination model for transparency, specification accuracy, and dedicated export support.
          </p>
        </div>

        {/* 6 Key Points Grid with Stagger Reveal and Interactive Card Animations */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {points.map((item, idx) => {
            const IconComponent = item.icon;
            const delayClass = `delay-${idx + 1}`;
            return (
              <div 
                key={idx}
                className={`card-vercel reveal-init ${isVisible ? `reveal-active ${delayClass}` : ''}`}
                style={{ 
                  padding: '2.5rem 2.25rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '20px', 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #DCDAD1',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#1546D9';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(21, 70, 217, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#DCDAD1';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.03)';
                }}
              >
                {/* Top Glowing Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: '#1546D9'
                }} />

                {/* Number Watermark */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.75rem',
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#EDECE6',
                  fontFamily: 'monospace',
                  userSelect: 'none'
                }}>
                  {item.num}
                </div>

                {/* Icon */}
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '14px', 
                  backgroundColor: '#EBF0FE', 
                  border: '1px solid #A4BCFD', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem', 
                  boxShadow: '0 3px 8px rgba(21, 70, 217, 0.12)' 
                }}>
                  <IconComponent size={26} color="#1546D9" />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0A1128', marginBottom: '0.45rem', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>

                <div style={{ 
                  fontSize: '0.94rem', 
                  fontWeight: '700', 
                  color: '#1546D9', 
                  marginBottom: '0.85rem' 
                }}>
                  {item.desc}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#4B5565', lineHeight: '1.7' }}>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verification Strip Callout */}
        <div style={{
          backgroundColor: '#EDECE6',
          border: '1px solid #DCDAD1',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-3' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: '#1546D9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0A1128' }}>
                SECP Incorporated & Federal Board of Revenue (FBR) Registered
              </div>
              <div style={{ fontSize: '0.82rem', color: '#4B5565' }}>
                Single legal manufacturing contract with dedicated export documentation support.
              </div>
            </div>
          </div>

          <button
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{
              padding: '0.75rem 1.75rem',
              fontSize: '0.88rem',
              borderRadius: '10px',
              backgroundColor: '#1546D9'
            }}
          >
            <span>Request Commercial Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
