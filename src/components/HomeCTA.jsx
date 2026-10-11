import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Search 
} from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { COMPANY_DETAILS } from '../data/productsData';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function HomeCTA({ openQuoteModal }) {
  const [openFaqId, setOpenFaqId] = useState(1);
  const [faqSearch, setFaqSearch] = useState('');
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const toggleFaq = (id) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

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
        
        {/* Buyer Frequently Asked Questions Section */}
        <div style={{ maxWidth: '880px', margin: '0 auto 5.5rem auto' }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-cobalt" style={{ marginBottom: '0.8rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
              International Buyer Verification
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', 
              fontWeight: '800', 
              color: '#1A0A10',
              letterSpacing: '-0.025em',
              marginBottom: '0.75rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1rem', color: '#5E5055' }}>
              Transparent answers regarding our Pakistan-based custom manufacturing and export supply operations.
            </p>

            {/* Quick Filter Search inside FAQ */}
            <div style={{ maxWidth: '380px', margin: '1.5rem auto 0 auto', position: 'relative' }}>
              <Search size={16} color="#8C7D82" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search FAQs (e.g. MOQ, samples, custom)..."
                value={faqSearch}
                onChange={e => setFaqSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.3rem',
                  borderRadius: '10px',
                  border: '1px solid #EAE1DD',
                  fontSize: '0.86rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#1A0A10'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  style={{
                    border: '1px solid',
                    borderColor: isOpen ? '#F0CBD3' : '#EAE1DD',
                    borderRadius: '14px',
                    backgroundColor: isOpen ? '#FFFFFF' : '#FCF9F7',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 4px 15px rgba(128, 0, 32, 0.08)' : '0 1px 2px rgba(26, 10, 16, 0.02)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: '700', 
                      color: isOpen ? '#800020' : '#1A0A10',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.15s ease'
                    }}>
                      {faq.question}
                    </span>
                    <span style={{ 
                      color: isOpen ? '#800020' : '#8C7D82',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ 
                      padding: '0 1.5rem 1.35rem 1.5rem', 
                      fontSize: '0.94rem', 
                      color: '#5E5055', 
                      lineHeight: '1.7',
                      borderTop: '1px solid #F5EFEB'
                    }} className="fade-in">
                      <div style={{ paddingTop: '0.85rem' }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 9 — Home — Final CTA Card */}
        <div style={{
          background: 'linear-gradient(180deg, #2D0A18 0%, #1F0510 100%)',
          borderRadius: '26px',
          padding: 'clamp(2.75rem, 5vw, 4.5rem) clamp(1.75rem, 4vw, 4rem)',
          color: '#FAF7F5',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(36, 7, 19, 0.4)',
          border: '1px solid #541731'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-2' : ''}`}>
          {/* Maroon Ambient Spotlight */}
          <div style={{
            position: 'absolute',
            top: '-25%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(128, 0, 32, 0.35) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(128, 0, 32, 0.35)',
              color: '#F0CBD3',
              border: '1px solid #800020',
              padding: '0.35rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.03em',
              marginBottom: '1.25rem'
            }}>
              Direct Export Inquiry Channel
            </span>

            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: '800', 
              letterSpacing: '-0.03em',
              lineHeight: '1.18',
              marginBottom: '1.25rem',
              color: '#FFFFFF'
            }}>
              Have a Product Requirement?
            </h2>

            <p style={{ 
              fontSize: '1.12rem', 
              color: '#D1C4C8', 
              lineHeight: '1.75', 
              marginBottom: '2.5rem' 
            }}>
              Share your product specifications, quantity and destination with us. We'll review your requirements and get back to you with the next steps.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button 
                onClick={openQuoteModal}
                className="btn-cobalt"
                style={{ padding: '0.95rem 2.4rem', fontSize: '1rem', borderRadius: '12px', backgroundColor: '#800020', border: '1px solid #A0183A' }}
              >
                <FileText size={18} />
                <span>Request a Quote</span>
              </button>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ 
                  padding: '0.95rem 2rem', 
                  fontSize: '1rem', 
                  backgroundColor: 'transparent',
                  color: '#FAF7F5',
                  borderColor: '#5A2338',
                  borderRadius: '12px'
                }}
              >
                <Phone size={16} color="#F0CBD3" />
                <span>WhatsApp: {COMPANY_DETAILS.whatsappRaw}</span>
              </a>
            </div>

            <div style={{ 
              marginTop: '2.75rem', 
              paddingTop: '1.75rem', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              fontSize: '0.82rem',
              color: '#B8A8AD'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={15} color="#F0CBD3" /> Commercial Export Accountable
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={15} color="#F0CBD3" /> Official Domain Sales Communications
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={15} color="#F0CBD3" /> Office: House No. 540, Street No. 8, Shah Faiz Park, Burewala
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
