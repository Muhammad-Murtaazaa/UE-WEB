import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Globe2, 
  PackageCheck,
  Building,
  Clock,
  Anchor,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/productsData';

export default function Hero({ openQuoteModal, navigateToProducts }) {
  // 5 Authentic Pakistani garment manufacturing background scenes (Vibrant & Clearly Visible)
  const bgSlides = [
    {
      id: 'milling',
      title: 'Fabric Knitting & Circular Milling',
      hub: 'Faisalabad Textile Hub, Pakistan',
      tag: '01 Yarn & Knit Engineering',
      desc: 'Combed cotton, custom GSM single jersey, pique, and heavy fleece engineered to buyer composition.',
      imageUrl: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'cutting',
      title: 'Precision CAD Pattern & Table Cutting',
      hub: 'Lahore Apparel Cluster, Pakistan',
      tag: '02 Tech Pack Alignment',
      desc: 'Computerized pattern grading and laser marker cutting ensuring strict tolerance across all sizes.',
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'stitching',
      title: 'Inline Stitching & Custom Embellishment',
      hub: 'Specialized Partner Facilities, Pakistan',
      tag: '03 Assembly & Branding',
      desc: 'High-density screen printing, multi-head embroidery, and private label damask neck trims.',
      imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'inspection',
      title: 'AQL 2.5 Quality Control & Dimensional Check',
      hub: 'Export Quality Audit Desk, Pakistan',
      tag: '04 Standards Verification',
      desc: 'Color fastness, pull test on hardware, measurement audits, and needle detection sweep.',
      imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'export',
      title: 'Export Packaging & Ocean Container Dispatch',
      hub: 'Karachi Seaport Terminals, Pakistan',
      tag: '05 Global Logistics',
      desc: '5-ply heavy export cartons, custom barcoding, moisture desiccant, and FOB ocean freight clearance.',
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  const SLIDE_DURATION = 5500; // 5.5s
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-rotating timer with live progress animation
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % bgSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, bgSlides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bgSlides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bgSlides.length) % bgSlides.length);
    setProgress(0);
  };

  const handleSelectSlide = (idx) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const active = bgSlides[currentSlide];

  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '90vh',
      backgroundColor: '#0A1128',
      color: '#FFFFFF',
      borderBottom: '1px solid #1E294B',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      
      {/* ================= BACKGROUND CAROUSEL LAYER (HIGH VISIBILITY) ================= */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {bgSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 6.5s ease-out',
                willChange: 'opacity, transform',
                pointerEvents: 'none'
              }}
            >
              <img 
                src={slide.imageUrl} 
                alt={slide.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block' 
                }}
              />
            </div>
          );
        })}

        {/* SOFT, GENTLE OVERLAY (Allows background photo to be clearly visible) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 17, 40, 0.40) 0%, rgba(10, 17, 40, 0.20) 45%, rgba(10, 17, 40, 0.60) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Subtle Vignette for edge framing */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(10, 17, 40, 0.45) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* ================= FOREGROUND HERO CONTENT ================= */}
      <div className="container-custom" style={{ 
        position: 'relative', 
        zIndex: 2, 
        paddingTop: '3.75rem', 
        paddingBottom: '2.5rem',
        maxWidth: '1080px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        
        {/* Frosted Glass Focal Container for maximum text legibility & image exposure around it */}
        <div style={{
          backgroundColor: 'rgba(10, 17, 40, 0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.20)',
          borderRadius: '26px',
          padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.25rem, 3.5vw, 2.75rem)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(21, 70, 217, 0.22)',
          margin: '0 auto'
        }}>
          {/* Live Top Announcement Pill */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            marginBottom: '1.5rem', 
            flexWrap: 'wrap',
            backgroundColor: 'rgba(21, 70, 217, 0.22)',
            border: '1px solid rgba(164, 188, 253, 0.35)',
            padding: '0.4rem 1.15rem',
            borderRadius: '9999px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
          }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#A4BCFD',
              fontWeight: '700',
              fontSize: '0.78rem'
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: '#1546D9', 
                display: 'inline-block',
                boxShadow: '0 0 10px #1546D9'
              }} />
              Uzair Sharif Enterprises (SMC-Pvt) Ltd
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <span style={{ fontSize: '0.78rem', color: '#EDECE6' }}>
              Pakistan Garment Export Coordination
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <span style={{ fontSize: '0.78rem', color: '#1546D9', fontWeight: '700', backgroundColor: '#FFFFFF', padding: '0.15rem 0.55rem', borderRadius: '4px' }}>
              100% Custom Specs
            </span>
          </div>

          {/* Central Bold Headline */}
          <h1 style={{ 
            fontSize: 'clamp(2.3rem, 4.8vw, 4.1rem)', 
            fontWeight: '800', 
            color: '#FFFFFF', 
            lineHeight: '1.12',
            letterSpacing: '-0.035em',
            marginBottom: '1.25rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
          }}>
            Pakistan-Based Custom Garment <br className="hidden-mobile" />
            <span style={{ 
              color: '#FFFFFF',
              background: 'linear-gradient(90deg, #FFFFFF 0%, #A4BCFD 50%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Manufacturing & Export
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: 'clamp(1rem, 1.6vw, 1.18rem)', 
            color: '#EDECE6', 
            lineHeight: '1.65', 
            maxWidth: '780px',
            margin: '0 auto 2rem auto',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
            fontWeight: '400'
          }}>
            We develop, coordinate, and export custom apparel for international brands and wholesale buyers through selected industrial manufacturing partners in Pakistan. Single legal contract, strict pre-production sampling, and global shipping.
          </p>

          {/* High-Visibility Clear CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {/* Primary Button: Cobalt Blue with Glow */}
            <button 
              onClick={() => openQuoteModal()}
              className="btn-cobalt"
              style={{ 
                padding: '1.05rem 2.4rem', 
                fontSize: '1.02rem',
                fontWeight: '700',
                borderRadius: '12px',
                backgroundColor: '#1546D9',
                border: '1px solid #3867F7',
                color: '#FFFFFF',
                boxShadow: '0 6px 26px rgba(21, 70, 217, 0.65)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.2s ease'
              }}
            >
              <FileText size={19} />
              <span>Request a Quote</span>
            </button>
            
            {/* Secondary Button: Warm Beige Glass */}
            <button 
              onClick={navigateToProducts}
              className="btn-secondary"
              style={{ 
                padding: '1.05rem 2.1rem', 
                fontSize: '1.02rem',
                fontWeight: '700',
                borderRadius: '12px',
                backgroundColor: '#EDECE6', 
                borderColor: '#EDECE6',
                color: '#0A1128',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore 9 Categories</span>
              <ArrowRight size={18} color="#1546D9" />
            </button>

            {/* Tertiary Button: Direct WhatsApp Desk */}
            <a 
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '1.05rem 1.75rem',
                fontSize: '0.96rem',
                fontWeight: '700',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1546D9';
                e.currentTarget.style.borderColor = '#1546D9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <PhoneCall size={18} color="#A4BCFD" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>

          {/* 4 Trust Verification Anchors */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(10, 17, 40, 0.65)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#EDECE6', fontWeight: '600' }}>
              <CheckCircle2 size={15} color="#A4BCFD" />
              <span>Zero Ready-Stock Claim</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#EDECE6', fontWeight: '600' }}>
              <Clock size={15} color="#A4BCFD" />
              <span>7–10 Days Sampling Turnaround</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#EDECE6', fontWeight: '600' }}>
              <ShieldCheck size={15} color="#A4BCFD" />
              <span>AQL 2.5 Standard Inspection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#EDECE6', fontWeight: '600' }}>
              <Anchor size={15} color="#A4BCFD" />
              <span>FOB Karachi / Qasim Logistics</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= CAROUSEL CONTROLS & LIVE STAGE BAR ================= */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        backgroundColor: 'rgba(10, 17, 40, 0.92)',
        borderTop: '1px solid rgba(255, 255, 255, 0.14)',
        backdropFilter: 'blur(20px)',
        padding: '0.9rem 1.5rem'
      }}>
        {/* Animated Slide Progress Bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#1546D9',
            boxShadow: '0 0 10px #1546D9',
            transition: 'width 0.05s linear'
          }} />
        </div>

        <div className="container-custom" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1.25rem' 
        }}>
          
          {/* Active Scene Information Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: '#1546D9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(21, 70, 217, 0.4)'
            }}>
              <Building size={18} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ 
                fontSize: '0.74rem', 
                fontWeight: '700', 
                color: '#A4BCFD', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {active.tag} • {active.hub}
              </div>
              <div style={{ 
                fontSize: '0.92rem', 
                fontWeight: '700', 
                color: '#FFFFFF' 
              }}>
                {active.title}
              </div>
            </div>
          </div>

          {/* Interactive Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Clickable Slide Indicator Dots */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {bgSlides.map((slide, idx) => {
                const isCur = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectSlide(idx)}
                    style={{
                      width: isCur ? '28px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: isCur ? '#1546D9' : 'rgba(255, 255, 255, 0.3)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isCur ? '0 0 8px #1546D9' : 'none'
                    }}
                    title={slide.title}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#EDECE6',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title={isPlaying ? "Pause Background Rotation" : "Resume Background Rotation"}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* Prev & Next Arrows */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1546D9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                aria-label="Previous scene"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1546D9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                aria-label="Next scene"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
