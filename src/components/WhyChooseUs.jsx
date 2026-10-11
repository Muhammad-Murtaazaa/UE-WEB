import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Settings2, 
  Tag, 
  Workflow, 
  CheckCircle2, 
  Ship, 
  ArrowRight,
  ShieldAlert,
  Network
} from 'lucide-react';

export default function WhyChooseUs({ openQuoteModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const points = [
    {
      num: '01',
      title: 'Partner-Based Model',
      desc: 'Selected manufacturing partners across Pakistan.',
      detail: 'Direct access to audited specialized industrial units across Faisalabad, Lahore, and Karachi. No single factory bottleneck; your order is placed in the optimal facility.',
      icon: Network
    },
    {
      num: '02',
      title: 'Custom Production',
      desc: 'Products developed according to buyer specifications.',
      detail: 'Zero ready-made stock. From raw fabric selection and custom knitting/weaving to precise GSM tolerances, dyeing, silhouette cuts, and custom pantone shades.',
      icon: Settings2
    },
    {
      num: '03',
      title: 'Private Label Execution',
      desc: 'Labels, tags, printing and custom packaging.',
      detail: 'Complete retail-ready branding including custom damask woven neck tags, care labels, hangtags with barcodes, branded polybags, and custom master shipping cartons.',
      icon: Tag
    },
    {
      num: '04',
      title: 'Sampling Support',
      desc: 'Pre-production samples for buyer approval.',
      detail: 'Fast turnaround physical prototypes dispatched to your door for fit, hand-feel, shrinkage, and seam strength testing before bulk fabric cutting begins.',
      icon: Workflow
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
        backgroundColor: '#FAF7F5', 
        paddingTop: '5.5rem', 
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #EAE1DD'
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
            Built for International B2B Buyers
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
            fontWeight: '800', 
            color: '#1A0A10',
            letterSpacing: '-0.025em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Why Choose Uzair Sharif Enterprises?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#5E5055', lineHeight: '1.7' }}>
            International brands, apparel importers, and wholesale buyers choose our supply coordination model for transparency, specification accuracy, and dedicated export support.
          </p>
        </div>

        {/* 6 Key Points Grid with Stagger Reveal and Interactive Card Animations */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '1.75rem',
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
                  border: '1px solid #EAE1DD',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#800020';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(128, 0, 32, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#EAE1DD';
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
                  backgroundColor: '#800020'
                }} />

                {/* Number Watermark */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.75rem',
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#FAF7F5',
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
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem', 
                  boxShadow: '0 3px 8px rgba(128, 0, 32, 0.12)' 
                }}>
                  <IconComponent size={26} color="#800020" />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.45rem', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>

                <div style={{ 
                  fontSize: '0.94rem', 
                  fontWeight: '700', 
                  color: '#800020', 
                  marginBottom: '0.85rem' 
                }}>
                  {item.desc}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#5E5055', lineHeight: '1.7' }}>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verification Strip Callout */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAE1DD',
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
              backgroundColor: '#800020',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#1A0A10' }}>
                SECP Incorporated & Federal Board of Revenue (FBR) Registered
              </div>
              <div style={{ fontSize: '0.82rem', color: '#5E5055' }}>
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
              backgroundColor: '#800020',
              border: '1px solid #A0183A'
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
