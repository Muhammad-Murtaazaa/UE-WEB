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
    <div className={`brand-logo-root brand-logo-${size}`} style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'sm' ? '0.5rem' : '0.65rem', textDecoration: 'none' }}>
      {/* Official Brand Emblem from public/LOGO.png */}
      <div className="brand-logo-emblem" style={{
        width: `${currentIcon.width}px`,
        height: `${currentIcon.height}px`,
        borderRadius: `${currentIcon.radius}px`,
        backgroundColor: '#FFFFFF',
        border: isLightText ? '1.5px solid rgba(255, 255, 255, 0.25)' : '1.5px solid #EAE1DD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isLightText ? '0 4px 14px rgba(0, 0, 0, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.06)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        padding: '2px'
      }}>
        <img 
          src="/logo-maroon.png?v=maroon" 
          alt="Uzair Sharif Enterprises"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className="brand-logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <div className="brand-logo-title" style={{ 
            fontSize: size === 'sm' ? '0.96rem' : size === 'lg' ? '1.35rem' : '1.18rem', 
            fontWeight: '800', 
            color: isLightText ? '#FFFFFF' : '#1A0A10',
            letterSpacing: '-0.025em',
            whiteSpace: 'nowrap'
          }}>
            Uzair Sharif <span style={{ color: '#800020' }}>Enterprises</span>
          </div>
          
          {showSubtitle && (
            <div className="brand-logo-subtitle" style={{ 
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
