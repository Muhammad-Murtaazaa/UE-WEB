import React, { useState, useRef, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  ChevronRight, 
  ChevronLeft, 
  FileText, 
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  LayoutGrid,
  Pause,
  Play
} from 'lucide-react';
import { PRODUCTS_CATEGORIES } from '../data/productsData';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function ProductCategoriesPreview({ onSelectCategory, openQuoteModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeImageIndexes, setActiveImageIndexes] = useState({});
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselTrackRef = useRef(null);

  // Switch image on card thumbnail click
  const handleThumbnailClick = (categoryId, imageIndex, e) => {
    e.stopPropagation();
    setActiveImageIndexes(prev => ({
      ...prev,
      [categoryId]: imageIndex
    }));
  };

  // Continuous auto-scroll mechanism when viewing carousel
  useEffect(() => {
    if (viewMode !== 'carousel' || !isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      if (carouselTrackRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselTrackRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // Loop back smoothly if reached end
        if (scrollLeft >= maxScroll - 5) {
          carouselTrackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselTrackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [viewMode, isAutoPlaying, isHovered]);

  const handleManualScroll = (direction) => {
    if (carouselTrackRef.current) {
      const scrollAmount = direction === 'next' ? 360 : -360;
      carouselTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#FAF7F5', 
        paddingTop: '5rem', 
        paddingBottom: '5rem',
        borderBottom: '1px solid #EAE1DD',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-pill badge-cobalt">Custom Manufacturing Catalogue</span>
              <span className="badge-pill badge-amber">No Ready Stock</span>
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', 
              fontWeight: '800', 
              color: '#1A0A10',
              letterSpacing: '-0.025em',
              lineHeight: '1.2'
            }}>
              Our Product Categories
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#5E5055', marginTop: '0.5rem', maxWidth: '640px' }}>
              We develop and coordinate bulk garment production according to buyer specifications. Explore our core apparel manufacturing categories.
            </p>
          </div>

          {/* View Mode & Carousel Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            
            {/* View Switcher: Carousel vs Grid */}
            <div style={{
              display: 'inline-flex',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EAE1DD',
              borderRadius: '10px',
              padding: '3px'
            }}>
              <button
                onClick={() => setViewMode('carousel')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'carousel' ? '#800020' : 'transparent',
                  color: viewMode === 'carousel' ? '#FFFFFF' : '#5E5055',
                  transition: 'all 0.15s ease'
                }}
              >
                <SlidersHorizontal size={14} />
                <span>Carousel Slider</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '7px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'grid' ? '#800020' : 'transparent',
                  color: viewMode === 'grid' ? '#FFFFFF' : '#5E5055',
                  transition: 'all 0.15s ease'
                }}
              >
                <LayoutGrid size={14} />
                <span>Grid View</span>
              </button>
            </div>

            {/* Carousel Arrow & Auto-Play Controls (Visible in Carousel View) */}
            {viewMode === 'carousel' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    padding: '0.45rem',
                    cursor: 'pointer',
                    color: isAutoPlaying ? '#800020' : '#5E5055',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    transition: 'all 0.15s ease'
                  }}
                  title={isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
                >
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: isAutoPlaying ? '#800020' : '#8C7D82',
                    display: 'inline-block',
                    boxShadow: isAutoPlaying ? '0 0 8px #800020' : 'none'
                  }} />
                  {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>

                <button
                  onClick={() => handleManualScroll('prev')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#1A0A10',
                    transition: 'all 0.15s ease'
                  }}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => handleManualScroll('next')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#1A0A10',
                    transition: 'all 0.15s ease'
                  }}
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* View Full Catalogue Button */}
            <button
              onClick={() => onSelectCategory('all')}
              className="btn-secondary"
              style={{
                padding: '0.48rem 1rem',
                fontSize: '0.82rem',
                borderRadius: '8px',
                borderColor: '#EAE1DD'
              }}
            >
              <span>Explore All</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Buyer Transparency Notice */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAE1DD',
          borderLeft: '4px solid #800020',
          borderRadius: '14px',
          padding: '1.15rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          boxShadow: '0 1px 3px rgba(26, 10, 16, 0.04)'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-1' : ''}`}>
          <Info size={22} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: '#5E5055', lineHeight: '1.65' }}>
            <strong style={{ color: '#1A0A10' }}>Representative Product Capabilities:</strong> All apparel images shown represent our manufacturing, fabric, and finishing capabilities. Uzair Sharif Enterprises does <em>not</em> carry pre-made warehouse stock. Every order is manufactured from scratch according to your custom GSM, dimensions, fabric blends, branding, and approved pre-production samples.
          </div>
        </div>

        {/* Categories: Dynamic Carousel vs Grid Render */}
        {viewMode === 'carousel' ? (
          /* Full Viewport Carousel Container (Occupies Whole Viewport, Zero Scrollbar) */
          <div className="carousel-viewport-bleed">
            <div 
              ref={carouselTrackRef}
              className="no-scrollbar"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                display: 'flex', 
                gap: '1.75rem',
                overflowX: 'auto',
                paddingBottom: '2rem',
                paddingTop: '0.75rem',
                paddingLeft: 'max(2rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                paddingRight: 'max(2rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
            {PRODUCTS_CATEGORIES.map((category, idx) => {
              const currentImgIdx = activeImageIndexes[category.id] || 0;
              const currentImg = category.images[currentImgIdx];

              return (
                <div 
                  key={category.id}
                  className="card-vercel"
                  style={{ 
                    flex: '0 0 clamp(320px, 34vw, 380px)',
                    scrollSnapAlign: 'start',
                    display: 'flex', 
                    flexDirection: 'column', 
                    overflow: 'hidden',
                    borderRadius: '18px',
                    backgroundColor: '#FFFFFF',
                    borderColor: '#EAE1DD',
                    boxShadow: '0 4px 16px rgba(26, 10, 16, 0.06)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 18px 36px rgba(128, 0, 32, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(26, 10, 16, 0.06)';
                  }}
                >
                  {/* Image Stage with 3 Interactive Thumbnails */}
                  <div style={{ position: 'relative', height: '260px', backgroundColor: '#1A0A10', overflow: 'hidden' }}>
                    <img 
                      src={currentImg.url} 
                      alt={`${category.name} - ${currentImg.caption}`}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block' 
                      }}
                    />
                    
                    {/* Top Badge: Custom Made */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '0.85rem', 
                      left: '0.85rem',
                      backgroundColor: 'rgba(26, 10, 16, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#F0CBD3',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      letterSpacing: '0.02em'
                    }}>
                      {category.badge}
                    </div>

                    {/* 3 Interactive Photo Switcher Thumbnails */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '0.75rem', 
                      right: '0.75rem', 
                      display: 'flex', 
                      gap: '0.35rem',
                      backgroundColor: 'rgba(26, 10, 16, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.3rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.18)'
                    }}>
                      {category.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={(e) => handleThumbnailClick(category.id, i, e)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            border: currentImgIdx === i ? '2px solid #800020' : '1px solid rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            padding: 0,
                            backgroundColor: '#000'
                          }}
                          title={`View angle ${i + 1}`}
                        >
                          <img 
                            src={img.url} 
                            alt="thumbnail" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Photo Caption Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      maxWidth: '60%',
                      backgroundColor: 'rgba(26, 10, 16, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.68rem',
                      color: '#FAF7F5',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      Angle {currentImgIdx + 1}/3
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1A0A10', letterSpacing: '-0.01em' }}>
                        {category.name}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: '#800020', fontWeight: '700' }}>
                        {category.gsmRange}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#5E5055', marginBottom: '0.65rem' }}>
                      {category.subtitle}
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#5E5055', lineHeight: '1.55', marginBottom: '1rem' }}>
                      {category.description}
                    </p>

                    {/* Key Specifications Tag Cloud */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      <span style={{ 
                        fontSize: '0.72rem', 
                        backgroundColor: '#F5EFEB', 
                        color: '#1A0A10', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '6px',
                        fontWeight: '600',
                        border: '1px solid #F0E8E5'
                      }}>
                        {category.fabricOptions[0]}
                      </span>
                      <span style={{ 
                        fontSize: '0.72rem', 
                        backgroundColor: '#FDF2F4', 
                        color: '#800020', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '6px',
                        fontWeight: '700',
                        border: '1px solid #F0CBD3'
                      }}>
                        Private Label Ready
                      </span>
                    </div>

                    {/* Card Actions */}
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.6rem', paddingTop: '1rem', borderTop: '1px solid #F0E8E5' }}>
                      <button
                        onClick={() => onSelectCategory(category.id)}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.65rem 0.75rem', fontSize: '0.82rem', borderColor: '#EAE1DD' }}
                      >
                        <span>Specifications</span>
                        <ArrowRight size={13} />
                      </button>
                      <button
                        onClick={() => openQuoteModal(category.name)}
                        className="btn-cobalt"
                        style={{ flex: 1, padding: '0.65rem 0.75rem', fontSize: '0.82rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
                      >
                        <FileText size={13} />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
            gap: '2.25rem' 
          }}>
            {PRODUCTS_CATEGORIES.map((category, idx) => {
              const currentImgIdx = activeImageIndexes[category.id] || 0;
              const currentImg = category.images[currentImgIdx];
              const delayClass = `delay-${(idx % 6) + 1}`;

              return (
                <div 
                  key={category.id}
                  className={`card-vercel reveal-init ${isVisible ? `reveal-active ${delayClass}` : ''}`}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    overflow: 'hidden',
                    borderRadius: '18px',
                    backgroundColor: '#FFFFFF',
                    borderColor: '#EAE1DD',
                    boxShadow: '0 4px 16px rgba(26, 10, 16, 0.06)'
                  }}
                >
                  {/* Image Stage with 3 Interactive Thumbnails */}
                  <div style={{ position: 'relative', height: '270px', backgroundColor: '#1A0A10', overflow: 'hidden' }}>
                    <img 
                      src={currentImg.url} 
                      alt={`${category.name} - ${currentImg.caption}`}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block' 
                      }}
                    />
                    
                    {/* Top Badge: Custom Made */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '0.85rem', 
                      left: '0.85rem',
                      backgroundColor: 'rgba(26, 10, 16, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#F0CBD3',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      letterSpacing: '0.02em'
                    }}>
                      {category.badge}
                    </div>

                    {/* 3 Interactive Photo Switcher Thumbnails */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '0.75rem', 
                      right: '0.75rem', 
                      display: 'flex', 
                      gap: '0.4rem',
                      backgroundColor: 'rgba(26, 10, 16, 0.82)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.35rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.18)'
                    }}>
                      {category.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={(e) => handleThumbnailClick(category.id, i, e)}
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            border: currentImgIdx === i ? '2px solid #800020' : '1px solid rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            padding: 0,
                            backgroundColor: '#000'
                          }}
                          title={`View photo ${i + 1}`}
                        >
                          <img 
                            src={img.url} 
                            alt="thumbnail" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Photo Caption Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      maxWidth: '65%',
                      backgroundColor: 'rgba(26, 10, 16, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      color: '#FAF7F5',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      Photo {currentImgIdx + 1}/3 • Representative Sample
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1A0A10', letterSpacing: '-0.01em' }}>
                        {category.name}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: '#800020', fontWeight: '700' }}>
                        {category.gsmRange}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.84rem', fontWeight: '600', color: '#5E5055', marginBottom: '0.75rem' }}>
                      {category.subtitle}
                    </div>

                    <p style={{ fontSize: '0.86rem', color: '#5E5055', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {category.description}
                    </p>

                    {/* Key Specifications Tag Cloud */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                      <span style={{ 
                        fontSize: '0.74rem', 
                        backgroundColor: '#F5EFEB', 
                        color: '#1A0A10', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        fontWeight: '600',
                        border: '1px solid #F0E8E5'
                      }}>
                        {category.fabricOptions[0]}
                      </span>
                      <span style={{ 
                        fontSize: '0.74rem', 
                        backgroundColor: '#F5EFEB', 
                        color: '#1A0A10', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        fontWeight: '600',
                        border: '1px solid #F0E8E5'
                      }}>
                        {category.fitOptions[0]}
                      </span>
                      <span style={{ 
                        fontSize: '0.74rem', 
                        backgroundColor: '#FDF2F4', 
                        color: '#800020', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        fontWeight: '700',
                        border: '1px solid #F0CBD3'
                      }}>
                        Private Label Ready
                      </span>
                    </div>

                    {/* Card Actions */}
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', paddingTop: '1.15rem', borderTop: '1px solid #F0E8E5' }}>
                      <button
                        onClick={() => onSelectCategory(category.id)}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.7rem 0.85rem', fontSize: '0.85rem', borderColor: '#EAE1DD' }}
                      >
                        <span>Specifications</span>
                        <ArrowRight size={14} />
                      </button>
                      <button
                        onClick={() => openQuoteModal(category.name)}
                        className="btn-cobalt"
                        style={{ flex: 1, padding: '0.7rem 0.85rem', fontSize: '0.85rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
                      >
                        <FileText size={14} />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA bar */}
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center', 
          backgroundColor: '#FFFFFF', 
          borderRadius: '20px', 
          padding: '2.75rem 2rem',
          border: '1px solid #EAE1DD',
          boxShadow: '0 2px 8px rgba(26, 10, 16, 0.04)'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-3' : ''}`}>
          <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Need a Custom Apparel Silhouette Not Listed Here?
          </h3>
          <p style={{ fontSize: '0.96rem', color: '#5E5055', maxWidth: '600px', margin: '0 auto 1.75rem auto', lineHeight: '1.65' }}>
            Through our selected manufacturing partners in Pakistan, we develop specialty knit and woven products according to custom tech packs.
          </p>
          <button 
            onClick={() => openQuoteModal('Custom Apparel Specification')}
            className="btn-cobalt"
            style={{ padding: '0.9rem 2rem', fontSize: '0.96rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
          >
            <FileText size={16} /> Request Custom Specifications Quote
          </button>
        </div>

      </div>
    </section>
  );
}
