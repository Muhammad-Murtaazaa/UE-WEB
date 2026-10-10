import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Globe2, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS_CATEGORIES } from '../data/productsData';

export default function Footer({ setActivePage, openQuoteModal }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products Catalogue' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'process', label: 'Our Process' },
    { id: 'compliance', label: 'Compliance & Standards' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#0A1128',
      color: '#ffffff',
      borderTop: '1px solid #1E294B',
      paddingTop: '5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container-custom">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Col 1: Corporate Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: '#1546D9',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1rem',
                boxShadow: '0 0 15px rgba(21, 70, 217, 0.4)'
              }}>
                USE
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1.05rem', lineHeight: '1.2' }}>
                  Uzair Sharif Enterprises
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  (SMC-Private) Limited
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#2D5DF5', marginBottom: '0.5rem' }}>
              Pakistan-Based Garment Exporter
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
              Custom Apparel • Private Label • Global Supply Network
            </div>
            
            <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.6' }}>
              We develop and supply custom garments according to buyer specifications through selected manufacturing partners in Pakistan.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Quick Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#1546D9'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Apparel Categories */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Manufacturing Categories
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {PRODUCTS_CATEGORIES.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleNav('products')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#1546D9'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Commercial Desk
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94a3b8' }}>
                <Mail size={16} color="#1546D9" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <a href={`mailto:${COMPANY_DETAILS.emailSales}`} style={{ color: '#ffffff', textDecoration: 'none', display: 'block' }}>
                    {COMPANY_DETAILS.emailSales}
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.emailInfo}`} style={{ color: '#94a3b8', textDecoration: 'none', display: 'block' }}>
                    {COMPANY_DETAILS.emailInfo}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8' }}>
                <Phone size={16} color="#1546D9" style={{ flexShrink: 0 }} />
                <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  {COMPANY_DETAILS.whatsappRaw} ({COMPANY_DETAILS.whatsappIntl})
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8' }}>
                <MapPin size={16} color="#1546D9" style={{ flexShrink: 0 }} />
                <span>Pakistan</span>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  onClick={openQuoteModal}
                  className="btn-cobalt"
                  style={{ width: '100%', padding: '0.65rem', fontSize: '0.82rem', borderRadius: '6px' }}
                >
                  <FileText size={14} /> Request a Quote
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Compliance Statement Box */}
        <div style={{
          backgroundColor: '#101935',
          border: '1px solid #1E294B',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          fontSize: '0.78rem',
          color: '#8A99AD',
          lineHeight: '1.65',
          marginBottom: '2.5rem'
        }}>
          <strong style={{ color: '#FAF9F5' }}>International Buyer Notice:</strong> Uzair Sharif Enterprises (SMC-Private) Limited coordinates custom bulk garment production exclusively according to verified buyer technical specifications and pre-production approved samples. We do not sell retail items, stock lots, or pre-made inventory. All representative product photographs illustrate technical capability.
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #1E294B',
          fontSize: '0.76rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Uzair Sharif Enterprises (SMC-Private) Limited</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#94a3b8' }}>Privacy Policy</span>
            <span style={{ color: '#94a3b8' }}>Terms & Conditions</span>
            <span style={{ color: '#94a3b8' }}>Pakistan Export Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
