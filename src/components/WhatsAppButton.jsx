import React, { useState } from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 90
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '0',
          marginBottom: '10px',
          backgroundColor: '#090d16',
          color: '#ffffff',
          borderRadius: '10px',
          padding: '0.6rem 0.9rem',
          fontSize: '0.78rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          whiteSpace: 'nowrap',
          border: '1px solid #1e293b',
          pointerEvents: 'none'
        }} className="fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700', color: '#10b981' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            Export Desk Online
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.72rem', marginTop: '2px' }}>
            Direct buyer chat: {COMPANY_DETAILS.whatsappRaw}
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          backgroundColor: '#25D366',
          color: '#ffffff',
          padding: '0.75rem 1.25rem',
          borderRadius: '50px',
          textDecoration: 'none',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          border: '2px solid #ffffff',
          fontWeight: '700',
          fontSize: '0.88rem',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="pulse-glow"
        title="Chat with Uzair Sharif Enterprises on WhatsApp (03281672473)"
      >
        <MessageCircle size={22} fill="#ffffff" color="#25D366" />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
          <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', opacity: 0.92, letterSpacing: '0.04em' }}>
            Instant WhatsApp
          </span>
          <span style={{ fontSize: '0.92rem', letterSpacing: '-0.01em', fontWeight: '800' }}>
            {COMPANY_DETAILS.whatsappRaw}
          </span>
        </div>
      </a>
    </div>
  );
}
