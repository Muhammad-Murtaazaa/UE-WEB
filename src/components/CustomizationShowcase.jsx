import React, { useState, useRef, useEffect } from 'react';
import { 
  Palette, 
  Layers, 
  Weight, 
  Maximize, 
  Scissors, 
  Printer, 
  Sparkles, 
  Tag, 
  Bookmark, 
  Package, 
  Box,
  FileText,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  CheckCircle2,
  Sparkle,
  Play,
  Pause
} from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function CustomizationShowcase({ openQuoteModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselTrackRef = useRef(null);

  // Continuous silky-smooth auto-gliding animation across the full viewport
  useEffect(() => {
    if (viewMode !== 'carousel' || !isAutoPlaying || isHovered) return;

    let animId;
    const smoothGlide = () => {
      if (carouselTrackRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselTrackRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          carouselTrackRef.current.scrollLeft = 0;
        } else {
          carouselTrackRef.current.scrollLeft += 0.85; // Silky smooth luxury glide speed
        }
      }
      animId = requestAnimationFrame(smoothGlide);
    };

    animId = requestAnimationFrame(smoothGlide);
    return () => cancelAnimationFrame(animId);
  }, [viewMode, isAutoPlaying, isHovered, activeCategory]);

  const categories = [
    { id: 'all', label: 'All 11 Dimensions' },
    { id: 'fabric', label: 'Fabrics & Weight' },
    { id: 'cut', label: 'Cuts & Sizing' },
    { id: 'brand', label: 'Print & Branding' },
    { id: 'pack', label: 'Unit & Carton Packaging' }
  ];

  const specs = [
    { 
      id: 1,
      cat: 'fabric',
      num: '01',
      title: 'Fabric Composition', 
      desc: 'Single jersey, interlock, pique, 2-thread & 3-thread fleece, French terry, 100% cotton denim, spandex blends, and ribbed knits engineered to specification.', 
      highlight: 'Cotton, Poly-Cotton, French Terry, Denim',
      icon: Layers 
    },
    { 
      id: 2,
      cat: 'fabric',
      num: '02',
      title: 'GSM (Weight Range)', 
      desc: 'From lightweight 140 GSM summer tees to 450+ GSM heavyweight streetwear fleece hoodies and 14.5oz selvedge-grade denim fabrics.', 
      highlight: '140 GSM to 480+ GSM Exact Tolerance',
      icon: Weight 
    },
    { 
      id: 3,
      cat: 'fabric',
      num: '03',
      title: 'Color & Dyeing', 
      desc: 'Accurate Pantone TCX / TPX lab-dip matching, reactive piece dyeing, pigment overdyes, acid wash, mineral wash, and vintage sun-faded treatments.', 
      highlight: 'Pantone TCX / TPX Lab-Dip Matching',
      icon: Palette 
    },
    { 
      id: 4,
      cat: 'cut',
      num: '04',
      title: 'Fit & Silhouette', 
      desc: 'Regular, slim, relaxed, oversized streetwear, boxy vintage, drop shoulder, crop athletic, and fully customized bespoke tech pack grade blocks.', 
      highlight: 'Bespoke Block Grading to Tech Pack',
      icon: Scissors 
    },
    { 
      id: 5,
      cat: 'cut',
      num: '05',
      title: 'Size Grading', 
      desc: 'Full size range scaling from XS through 5XL, toddler, junior, or specialized regional charts tailored for US, UK, EU, or Australasian markets.', 
      highlight: 'XS to 5XL + Regional Grade Specs',
      icon: Maximize 
    },
    { 
      id: 6,
      cat: 'brand',
      num: '06',
      title: 'Printing Techniques', 
      desc: 'Silkscreen, water-based soft hand, plastisol, high-density 3D puff print, discharge ink, Direct-to-Garment (DTG), and high-resolution sublimation.', 
      highlight: 'Puff, Plastisol, Water-Based, DTG',
      icon: Printer 
    },
    { 
      id: 7,
      cat: 'brand',
      num: '07',
      title: 'Embroidery Options', 
      desc: 'Precision flat embroidery, 3D foam puff embroidery, tactile chenille patches, custom woven badges, tackle twill, and metallic specialty thread work.', 
      highlight: '3D Puff, Chenille, Micro-Stitch Badges',
      icon: Sparkles 
    },
    { 
      id: 8,
      cat: 'brand',
      num: '08',
      title: 'Woven & Care Labels', 
      desc: 'High-definition damask woven neck labels, soft satin wash-care instructions, heat-transfer tagless neck prints, and custom hem clips.', 
      highlight: 'Damask Woven & Tagless Heat Seals',
      icon: Tag 
    },
    { 
      id: 9,
      cat: 'brand',
      num: '09',
      title: 'Hang Tags & Trims', 
      desc: 'Custom printed heavyweight cardstock hang tags, matte foil stamping, spot UV gloss, branded string seal aglets, and EAN/UPC barcode stickers.', 
      highlight: 'Foil Stamped Tags + Barcode Stickers',
      icon: Bookmark 
    },
    { 
      id: 10,
      cat: 'pack',
      num: '10',
      title: 'Unit Packaging', 
      desc: 'Branded crystal-clear polybags, frosted self-adhesive ziplock bags, tissue paper wrapping, anti-suffocation warnings, and silica gel desiccant packs.', 
      highlight: 'Custom Frosted / Clear Polybags',
      icon: Package 
    },
    { 
      id: 11,
      cat: 'pack',
      num: '11',
      title: 'Master Cartons & Logistics', 
      desc: 'Export-grade 5-ply / 7-ply heavy corrugated cartons, custom stenciled shipping marks, container palletization, and strapping for ocean transit.', 
      highlight: '5-Ply Export Cartons & Palletization',
      icon: Box 
    }
  ];

  const filteredSpecs = activeCategory === 'all' 
    ? specs 
    : specs.filter(s => s.cat === activeCategory);

  const scrollCarousel = (direction) => {
    if (!carouselTrackRef.current) return;
    const scrollAmount = 360;
    carouselTrackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#FAF7F5', 
        paddingTop: '5.5rem', 
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #EAE1DD',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom">
        {/* Header Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '1.5rem',
          marginBottom: '2.5rem' 
        }} className={`reveal-init ${isVisible ? 'reveal-active' : ''}`}>
          <div>
            <span className="badge-pill badge-cobalt" style={{ marginBottom: '0.85rem', backgroundColor: '#FDF2F4', color: '#800020', border: '1px solid #F0CBD3' }}>
              Bespoke Manufacturing Engineering
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
              fontWeight: '800', 
              color: '#1A0A10',
              letterSpacing: '-0.025em',
              lineHeight: '1.2',
              marginBottom: '0.65rem'
            }}>
              Customized to Your Exact Specifications
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5E5055', maxWidth: '680px', lineHeight: '1.65' }}>
              Zero off-the-shelf ready garments. Every single parameter from fabric selection to export carton sealing is tailored to your brand’s technical pack.
            </p>
          </div>

          {/* Controls: Mode Switcher & Carousel Chevrons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* View Mode Switcher */}
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
                <span>Carousel View</span>
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

            {/* Auto-Play Toggle & Prev/Next buttons for Carousel Mode */}
            {viewMode === 'carousel' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #EAE1DD',
                    backgroundColor: isAutoPlaying ? '#FDF2F4' : '#FFFFFF',
                    color: isAutoPlaying ? '#800020' : '#5E5055',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  title={isAutoPlaying ? "Pause Auto-Slide" : "Enable Auto-Slide"}
                >
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: isAutoPlaying ? '#800020' : '#8C7D82',
                    display: 'inline-block',
                    boxShadow: isAutoPlaying ? '0 0 8px #800020' : 'none'
                  }} />
                  {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
                  <span>{isAutoPlaying ? 'Auto-Moving' : 'Paused'}</span>
                </button>

                <button
                  onClick={() => scrollCarousel('left')}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    color: '#1A0A10',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#800020';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#800020';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#1A0A10';
                    e.currentTarget.style.borderColor = '#EAE1DD';
                  }}
                  aria-label="Previous specification"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => scrollCarousel('right')}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    color: '#1A0A10',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#800020';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#800020';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#1A0A10';
                    e.currentTarget.style.borderColor = '#EAE1DD';
                  }}
                  aria-label="Next specification"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Filters Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  border: isActive ? '1px solid #800020' : '1px solid #EAE1DD',
                  backgroundColor: isActive ? '#800020' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#5E5055',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(128, 0, 32, 0.2)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* CAROUSEL SLIDER VIEW (Occupies Whole Viewport, Zero Scrollbars) */}
        {viewMode === 'carousel' ? (
          <div className="carousel-viewport-bleed">
            <div 
              ref={carouselTrackRef}
              className="no-scrollbar"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'flex',
                gap: '1.5rem',
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
            {filteredSpecs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  style={{
                    flex: '0 0 350px',
                    maxWidth: '350px',
                    scrollSnapAlign: 'start',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    borderRadius: '18px',
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#800020';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(128, 0, 32, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#EAE1DD';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.04)';
                  }}
                >
                  {/* Subtle Top Accent Bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: '#800020'
                  }} />

                  <div>
                    {/* Header with Number & Icon */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.25rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: '#FDF2F4',
                        border: '1px solid #F0CBD3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 3px 8px rgba(128, 0, 32, 0.12)'
                      }}>
                        <IconComp size={24} color="#800020" />
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: '800',
                        color: '#F0CBD3',
                        letterSpacing: '0.05em'
                      }}>
                        SPEC {item.num}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: '#1A0A10',
                      marginBottom: '0.65rem',
                      letterSpacing: '-0.02em'
                    }}>
                      {item.title}
                    </h3>

                    <p style={{
                      fontSize: '0.88rem',
                      color: '#5E5055',
                      lineHeight: '1.6',
                      marginBottom: '1.25rem'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlight Tag */}
                  <div style={{
                    backgroundColor: '#FAF7F5',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    padding: '0.55rem 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#1A0A10'
                  }}>
                    <CheckCircle2 size={14} color="#800020" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {filteredSpecs.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  style={{ 
                    padding: '1.85rem', 
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#800020';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(128, 0, 32, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#EAE1DD';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        backgroundColor: '#FDF2F4', 
                        border: '1px solid #F0CBD3',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                      }}>
                        <IconComp size={22} color="#800020" />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#800020' }}>
                        DIMENSION {item.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.45rem', letterSpacing: '-0.01em' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: '#5E5055', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{
                    backgroundColor: '#FAF7F5',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.76rem',
                    fontWeight: '700',
                    color: '#1A0A10'
                  }}>
                    <CheckCircle2 size={13} color="#800020" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Specification callout banner */}
        <div style={{
          background: 'linear-gradient(180deg, #2D0A18 0%, #1F0510 100%)',
          color: '#FAF7F5',
          borderRadius: '20px',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 20px 45px rgba(36, 7, 19, 0.35)',
          border: '1px solid #541731',
          marginTop: '1.5rem'
        }} className={`reveal-init ${isVisible ? 'reveal-active delay-3' : ''}`}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(128, 0, 32, 0.35)',
            border: '1px solid #800020',
            color: '#F0CBD3',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            <Sparkle size={13} />
            <span>Buyer Specification Intake Desk</span>
          </div>
          <h3 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '0.65rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Have a Specific Tech Pack or Garment Sample?
          </h3>
          <p style={{ fontSize: '1rem', color: '#D1C4C8', maxWidth: '680px', marginBottom: '1.85rem', lineHeight: '1.7' }}>
            Send us your measurement charts, vector artwork files (.ai, .pdf, .psd), and target order quantities. We will assess manufacturing feasibility and provide formal quotations.
          </p>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ 
              padding: '0.95rem 2.4rem', 
              fontSize: '1rem', 
              borderRadius: '12px',
              backgroundColor: '#800020',
              border: '1px solid #A0183A',
              boxShadow: '0 8px 24px rgba(128, 0, 32, 0.35)'
            }}
          >
            <FileText size={18} /> Submit Your Technical Specifications
          </button>
        </div>

      </div>
    </section>
  );
}
