import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Scale, 
  Globe2, 
  CheckCircle2,
  FileText,
  Users
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

export default function AboutSection({ openQuoteModal }) {
  return (
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <div className="bg-dot-grid-dark" style={{ 
        background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '5rem',
        borderBottom: '1px solid #541731'
      }}>
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff' }}>
            Corporate Profile
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            marginBottom: '1.25rem'
          }}>
            About Uzair Sharif Enterprises
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#d1c0c6', lineHeight: '1.7' }}>
            Uzair Sharif Enterprises (SMC-Private) Limited is a Pakistan-based export and supply company focused on custom garment manufacturing coordination.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        {/* Core Corporate Narrative */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <span className="badge-pill badge-slate" style={{ marginBottom: '0.8rem', backgroundColor: '#FFFFFF', border: '1px solid #EAE1DD', color: '#800020' }}>
              Strategic Supply Role
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#1A0A10', lineHeight: '1.3', marginBottom: '1.25rem' }}>
              Bridging International Apparel Brands with Pakistan's Industrial Capabilities
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#4B5565', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              We work with selected manufacturing partners across Pakistan to develop and supply products according to buyer specifications, order quantities, quality requirements and destination-market needs.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#4B5565', lineHeight: '1.8', marginBottom: '1.75rem' }}>
              Our role is to manage the commercial and export supply process from buyer inquiry and product development to sampling, production coordination, quality requirements, packaging and shipment.
            </p>
            
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderLeft: '4px solid #800020', 
              padding: '1.25rem 1.4rem', 
              borderRadius: '0 8px 8px 0',
              fontSize: '0.92rem',
              color: '#1A0A10',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid #EAE1DD',
              borderLeftWidth: '4px'
            }}>
              <strong style={{ color: '#800020' }}>Single Commercial Contract:</strong> As an SMC-Private Limited corporation registered in Pakistan, we serve as your direct contractual party, removing the risk and complexity of unverified factory communications.
            </div>
          </div>

          <div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #EAE1DD',
              boxShadow: '0 20px 40px rgba(26, 10, 16, 0.08)',
              backgroundColor: '#FFFFFF'
            }}>
              <img 
                src="/images/hero/hero-milling.jpg" 
                alt="Textile Weaving & Quality Inspection in Pakistan"
                onError={(e) => {
                  const fallback = "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1000&auto=format&fit=crop";
                  if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                }}
                style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '1rem 1.25rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #EAE1DD' }}>
                <span style={{ fontSize: '0.78rem', color: '#8C7A82' }}>
                  Representative quality assessment environment in Pakistan.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {/* Mission */}
          <div className="subtle-card" style={{ padding: '2.5rem 2rem', borderTop: '4px solid #800020', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              backgroundColor: '#FDF2F4', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.5rem',
              border: '1px solid #F0CBD3'
            }}>
              <Target size={24} color="#800020" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.85rem' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '1rem', color: '#4B5565', lineHeight: '1.75' }}>
              To provide international buyers with reliable access to Pakistani garment and textile manufacturing capabilities through professional communication, quality-focused supply coordination and dependable export services.
            </p>
          </div>

          {/* Vision */}
          <div className="subtle-card" style={{ padding: '2.5rem 2rem', borderTop: '4px solid #1A0A10', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              backgroundColor: '#FAF7F5', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.5rem',
              border: '1px solid #EAE1DD'
            }}>
              <Compass size={24} color="#1A0A10" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.85rem' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '1rem', color: '#4B5565', lineHeight: '1.75' }}>
              To build a trusted Pakistan-based export company serving long-term international buyers across apparel markets.
            </p>
          </div>
        </div>

        {/* Sourcing Integrity Statement */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '2.5rem',
          border: '1px solid #EAE1DD',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1A0A10', marginBottom: '1rem' }}>
            Our Policy on Transparent Representation
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#4B5565', lineHeight: '1.7', marginBottom: '1.25rem' }}>
            In an industry where many middlemen falsely display factory gates as their own, claim fake international certifications, or show unauthorized brand logos, Uzair Sharif Enterprises operates with uncompromising transparency:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.85rem', color: '#1A0A10' }}>
                We openly identify as an export and supply coordination enterprise working with specialized partner facilities.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.85rem', color: '#1A0A10' }}>
                We coordinate genuine laboratory testing per order rather than posting outdated, unverifiable certificates.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.85rem', color: '#1A0A10' }}>
                We respect buyer confidentiality and never disclose proprietary tech packs, logos, or client data.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
          >
            <FileText size={16} /> Request Sourcing Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
