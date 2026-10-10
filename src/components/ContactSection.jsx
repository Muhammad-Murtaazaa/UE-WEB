import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS_CATEGORIES } from '../data/productsData';

export default function ContactSection({ openQuoteModal }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
    honeypot: '' // Anti-spam protection
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard bot submission
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div className="bg-dot-grid-dark" style={{ 
        background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #541731'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff' }}>
            International Sales Desk
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Contact Uzair Sharif Enterprises
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#d1c0c6', lineHeight: '1.7' }}>
            Get in touch directly with our commercial export management team in Pakistan for quotations, sampling inquiries, and sourcing partnerships.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '3.5rem',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column: Official Contact Coordinates */}
          <div>
            <span className="badge-pill badge-slate" style={{ marginBottom: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #EAE1DD', color: '#800020' }}>
              Corporate Entity Coordinates
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#1A0A10', marginBottom: '1.25rem' }}>
              Uzair Sharif Enterprises (SMC-Private) Limited
            </h2>
            <p style={{ fontSize: '1rem', color: '#4B5565', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              We welcome international inquiries from apparel brands, corporate merchandising directors, buying houses, and independent wholesalers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              {/* Email Card */}
              <div className="subtle-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} color="#800020" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                    Official Business Email
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    <a href={`mailto:${COMPANY_DETAILS.emailInfo}`} style={{ color: '#1A0A10', fontWeight: '700', textDecoration: 'none', display: 'block', fontSize: '0.98rem' }}>
                      {COMPANY_DETAILS.emailInfo}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="subtle-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} color="#800020" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                    Business WhatsApp & Direct Line
                  </div>
                  <a 
                    href={COMPANY_DETAILS.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1A0A10', fontWeight: '700', textDecoration: 'none', display: 'block', fontSize: '1rem', marginTop: '0.2rem' }}
                  >
                    {COMPANY_DETAILS.whatsappRaw} ({COMPANY_DETAILS.whatsappIntl})
                  </a>
                  <span style={{ fontSize: '0.75rem', color: '#800020', fontWeight: '600' }}>
                    Available for international buyer messaging
                  </span>
                </div>
              </div>

              {/* Country of Operations */}
              <div className="subtle-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
                <div style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '10px', 
                  backgroundColor: '#FAF7F5', 
                  border: '1px solid #EAE1DD',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} color="#1A0A10" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7A82' }}>
                    Country of Incorporation & Operations
                  </div>
                  <div style={{ fontWeight: '700', color: '#1A0A10', fontSize: '0.98rem', marginTop: '0.2rem' }}>
                    Pakistan
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#8C7A82' }}>
                    Textile & Garment Export Operations
                  </span>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#4B5565' }}>
              <Clock size={16} color="#800020" />
              <span>Typical international buyer response turnaround: <strong>Within 24 Business Hours</strong></span>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="subtle-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '20px', backgroundColor: '#FFFFFF', borderColor: '#EAE1DD' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }} className="fade-in">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  backgroundColor: '#FDF2F4', 
                  border: '1px solid #F0CBD3',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={36} color="#800020" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.6rem' }}>
                  Inquiry Successfully Received
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4B5565', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Our export team at <strong>Uzair Sharif Enterprises</strong> has received your inquiry for {formData.product || 'custom garments'}. We will review and reach out to your business email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.35rem' }}>
                    Send an Inquiry
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#8C7A82' }}>
                    Fill out your basic product requirements to initiate communication.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  
                  {/* Honeypot field (hidden from real users) */}
                  <input 
                    type="text" 
                    name="website_url_check" 
                    value={formData.honeypot} 
                    onChange={e => setFormData({...formData, honeypot: e.target.value})} 
                    style={{ display: 'none' }} 
                    tabIndex="-1" 
                    autoComplete="off" 
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Your Full Name*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Company / Brand Name*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Apex Apparel Ltd"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Business Email*
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="buyer@apexapparel.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Country / Destination*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="United States / United Kingdom..."
                        value={formData.country}
                        onChange={e => setFormData({...formData, country: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Product Category*
                      </label>
                      <select
                        required
                        value={formData.product}
                        onChange={e => setFormData({...formData, product: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          fontSize: '0.9rem',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10'
                        }}
                      >
                        <option value="">Select a Category...</option>
                        {PRODUCTS_CATEGORIES.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                        Estimated Quantity*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. 500 pcs, 2,000 pcs"
                        value={formData.quantity}
                        onChange={e => setFormData({...formData, quantity: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #EAE1DD',
                          backgroundColor: '#FFFFFF',
                          color: '#1A0A10',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A0A10', marginBottom: '0.35rem' }}>
                      Message & Requirements*
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please mention fabric GSM, size breakdown, branding requirements, or any questions..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #EAE1DD',
                        backgroundColor: '#FFFFFF',
                        color: '#1A0A10',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-cobalt"
                    style={{ padding: '0.85rem', width: '100%', fontSize: '0.95rem' }}
                  >
                    <Send size={16} /> Send Direct Inquiry
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#8C7A82' }}>
                    Need to provide detailed technical specifications? Use our comprehensive{' '}
                    <span 
                    onClick={openQuoteModal} 
                    style={{ color: '#800020', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Request a Quote Engine
                  </span>.
                </div>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
