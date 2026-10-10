import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  FileText, 
  Mail, 
  Phone, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  GitFork, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

export default function Navbar({ activePage, setActivePage, openQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'process', label: 'Our Process' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="glass-header" style={{ width: '100%' }}>
      {/* Scroll Progress Bar at very top */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Top Professional Notice Bar */}
      <div style={{ 
        backgroundColor: '#240713', 
        color: '#D1C4C8', 
        fontSize: '0.78rem', 
        padding: '0.45rem 1.5rem',
        borderBottom: '1px solid #4F162C'
      }}>
        <div className="container-custom" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '7px', 
              height: '7px', 
              borderRadius: '50%', 
              backgroundColor: '#800020',
              boxShadow: '0 0 8px rgba(128, 0, 32, 0.9)' 
            }}></span>
            <span style={{ color: '#FAF7F5', fontWeight: '600' }}>
              B2B Custom Apparel Supply Partner
            </span>
            <span style={{ color: '#5E5055' }}>|</span>
            <span style={{ color: '#D1C4C8' }}>100% Made to Buyer Specifications • No Ready Stock</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href="mailto:info@uzairsharifenterprises.com" 
              style={{ color: '#FAF7F5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Mail size={12} color="#800020" /> info@uzairsharifenterprises.com
            </a>
            <span style={{ color: '#5E5055' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#D1C4C8' }}>
              <Globe2 size={12} color="#800020" /> Pakistan Export Operations
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-custom" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingTop: '0.9rem',
        paddingBottom: '0.9rem'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '11px', 
            backgroundColor: '#240713',
            border: '1px solid #4F162C',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(36, 7, 19, 0.25)'
          }}>
            <span style={{ 
              fontWeight: '800', 
              fontSize: '1.12rem', 
              color: '#FAF7F5',
              letterSpacing: '-0.02em'
            }}>
              US<span style={{ color: '#A0183A' }}>E</span>
            </span>
          </div>
          <div>
            <div style={{ 
              fontWeight: '800', 
              fontSize: '1.22rem', 
              color: '#1A0A10', 
              lineHeight: '1.18',
              letterSpacing: '-0.02em'
            }}>
              Uzair Sharif Enterprises
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#5E5055', 
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <span>(SMC-Private) Limited</span>
              <span style={{ color: '#D4C5C0' }}>•</span>
              <span style={{ color: '#800020', fontWeight: '700' }}>Garments Export</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '1.8rem',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? '800' : '600',
                      color: isActive ? '#800020' : '#1A0A10',
                      padding: '0.4rem 0.2rem',
                      position: 'relative',
                      transition: 'color 0.15s ease'
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0',
                        width: '100%',
                        height: '2.5px',
                        backgroundColor: '#800020',
                        borderRadius: '2px'
                      }}></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ 
              padding: '0.65rem 1.35rem', 
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '8px',
              backgroundColor: '#800020',
              border: '1px solid #A0183A'
            }}
          >
            <FileText size={16} />
            <span>Request a Quote</span>
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: '#FFFFFF',
              border: '1px solid #EAE1DD',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#1A0A10'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FAF7F5',
          borderBottom: '1px solid #EAE1DD',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 12px 30px rgba(26, 10, 16, 0.12)'
        }} className="fade-in">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: activePage === item.id ? '#FDF2F4' : '#FFFFFF',
                    color: activePage === item.id ? '#800020' : '#1A0A10',
                    fontWeight: activePage === item.id ? '700' : '600',
                    border: '1px solid',
                    borderColor: activePage === item.id ? '#F0CBD3' : '#EAE1DD',
                    borderRadius: '8px',
                    padding: '0.75rem 0.95rem',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{item.label}</span>
                  {activePage === item.id && <ArrowRight size={16} color="#800020" />}
                </button>
              </li>
            ))}
            <li style={{ paddingTop: '0.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="btn-cobalt"
                style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', backgroundColor: '#800020', border: '1px solid #A0183A' }}
              >
                <FileText size={18} /> Request a Quote
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive helper styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
