import React from 'react';

export default function BrandLogo({ 
  variant = 'dark', // 'dark' (on light bg) or 'light' (on dark bg)
  showSubtitle = true,
  size = 'md', // 'sm', 'md', 'lg'
  iconOnly = false
}) {
  const isLightText = variant === 'light';
  
  const iconSizes = {
    sm: { width: 34, height: 34, radius: 9 },
    md: { width: 44, height: 44, radius: 12 },
    lg: { width: 54, height: 54, radius: 14 }
  };

  const currentIcon = iconSizes[size] || iconSizes.md;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'sm' ? '0.6rem' : '0.75rem', textDecoration: 'none' }}>
      {/* Precision Emblem */}
      <div style={{
        width: `${currentIcon.width}px`,
        height: `${currentIcon.height}px`,
        borderRadius: `${currentIcon.radius}px`,
        backgroundColor: '#240713',
        border: '1.5px solid #800020',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(36, 7, 19, 0.35)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Inner Glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(128,0,32,0.4) 0%, rgba(20,4,10,0.8) 100%)',
          pointerEvents: 'none'
        }} />
        
        {/* Vector SVG Emblem */}
        <svg 
          width={currentIcon.width * 0.72} 
          height={currentIcon.height * 0.72} 
          viewBox="0 0 40 40" 
          fill="none" 
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* U shape */}
          <path 
            d="M10 10v11c0 5.5 4.5 10 10 10s10-4.5 10-10V10" 
            stroke="#FAF7F5" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* S curve in gold */}
          <path 
            d="M26 15.5c-1.4-1.8-3.4-2.5-6-2.5-4 0-6.2 2-6.2 4.5 0 3.8 8 3.2 8 6.8 0 2-1.8 3.5-4.8 3.5-2.8 0-5-1.4-6.5-3.5" 
            stroke="#D4AF37" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Center core knot */}
          <circle cx="20" cy="21" r="2" fill="#D4AF37" />
        </svg>
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <div style={{ 
            fontSize: size === 'sm' ? '0.96rem' : size === 'lg' ? '1.35rem' : '1.18rem', 
            fontWeight: '800', 
            color: isLightText ? '#FFFFFF' : '#1A0A10',
            letterSpacing: '-0.025em',
            whiteSpace: 'nowrap'
          }}>
            Uzair Sharif <span style={{ color: '#800020' }}>Enterprises</span>
          </div>
          
          {showSubtitle && (
            <div style={{ 
              fontSize: size === 'sm' ? '0.66rem' : '0.72rem', 
              color: isLightText ? '#CFC4C8' : '#7A686F', 
              fontWeight: '700',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginTop: '0.15rem'
            }}>
              <span>SMC-Pvt Ltd</span>
              <span style={{ color: '#800020' }}>•</span>
              <span style={{ color: isLightText ? '#E5D6DA' : '#800020' }}>Pakistan Export</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
