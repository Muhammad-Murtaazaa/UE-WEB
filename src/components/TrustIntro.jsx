import React from 'react';
import { 
  Building2, 
  GitMerge, 
  ShieldAlert, 
  CheckCircle, 
  SlidersHorizontal, 
  Scale, 
  Boxes,
  Compass
} from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function TrustIntro() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#FFFFFF', 
        paddingTop: '5rem', 
        paddingBottom: '5rem',
        borderBottom: '1px solid #EAE1DD'
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
            Corporate Credibility & Supply Coordination
          </span>
          <h2 style={{ 
            fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', 
            fontWeight: '800', 
            color: '#1A0A10',
            letterSpacing: '-0.025em',
            lineHeight: '1.2',
            marginBottom: '1.25rem'
          }}>
            Your Reliable Supply Partner from Pakistan
          </h2>
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#1A0A10', 
            lineHeight: '1.8',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            <strong>Uzair Sharif Enterprises (SMC-Private) Limited</strong> is a Pakistan-based export and supply company providing custom garments to international buyers.
          </p>
          <p style={{ 
            fontSize: '1.05rem', 
            color: '#5E5055', 
            lineHeight: '1.75' 
          }}>
            We coordinate product development, sampling, production, quality requirements, packaging and export according to buyer specifications.
          </p>
        </div>

        {/* 4 Core Pillars of Sourcing Reliability */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
          gap: '1.75rem' 
        }}>
          
          <div className={`card-vercel reveal-init ${isVisible ? 'reveal-active delay-1' : ''}`} style={{ padding: '2.25rem 2rem', borderRadius: '18px', backgroundColor: '#FAF7F5', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              backgroundColor: '#FDF2F4', 
              border: '1px solid #F0CBD3',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.35rem',
              boxShadow: '0 2px 6px rgba(128, 0, 32, 0.12)'
            }}>
              <Building2 size={24} color="#800020" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
              Single Commercial Point of Contact
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#5E5055', lineHeight: '1.65' }}>
              No messy direct supplier negotiations. You communicate seamlessly in professional English with one accountable Pakistani corporate partner.
            </p>
          </div>

          <div className={`card-vercel reveal-init ${isVisible ? 'reveal-active delay-2' : ''}`} style={{ padding: '2.25rem 2rem', borderRadius: '18px', backgroundColor: '#FAF7F5', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              backgroundColor: '#FDF2F4', 
              border: '1px solid #F0CBD3',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.35rem',
              boxShadow: '0 2px 6px rgba(128, 0, 32, 0.12)'
            }}>
              <SlidersHorizontal size={24} color="#800020" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
              Strict Buyer Specification Fidelity
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#5E5055', lineHeight: '1.65' }}>
              Fabric, GSM, lab dip pantone matching, knit density, and sizing specs are tracked with zero compromise across bulk manufacturing.
            </p>
          </div>

          <div className={`card-vercel reveal-init ${isVisible ? 'reveal-active delay-3' : ''}`} style={{ padding: '2.25rem 2rem', borderRadius: '18px', backgroundColor: '#FAF7F5', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              backgroundColor: '#FDF2F4', 
              border: '1px solid #F0CBD3',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.35rem',
              boxShadow: '0 2px 6px rgba(128, 0, 32, 0.12)'
            }}>
              <Scale size={24} color="#800020" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
              Transparent & Realistic Business Practice
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#5E5055', lineHeight: '1.65' }}>
              We never make fake factory claims, fake certificate badges, or fictitious ready-stock promises. Honest capabilities you can verify.
            </p>
          </div>

          <div className={`card-vercel reveal-init ${isVisible ? 'reveal-active delay-4' : ''}`} style={{ padding: '2.25rem 2rem', borderRadius: '18px', backgroundColor: '#FAF7F5', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              backgroundColor: '#FDF2F4', 
              border: '1px solid #F0CBD3',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.35rem',
              boxShadow: '0 2px 6px rgba(128, 0, 32, 0.12)'
            }}>
              <Boxes size={24} color="#800020" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
              Full Logistics & Export Coordination
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#5E5055', lineHeight: '1.65' }}>
              From export documentation and Pakistani customs clearance to FOB or CIF sea/air freight booking to your destination port.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
