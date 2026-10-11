import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Info, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  X, 
  Eye, 
  Sparkles, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Tag
} from 'lucide-react';
import { PRODUCTS_CATEGORIES } from '../data/productsData';

export default function ProductsCatalogue({ initialCategoryId = 'all', openQuoteModal }) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(initialCategoryId);
  const [selectedFabricFilter, setSelectedFabricFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  const fabricTags = [
    { id: 'all', label: 'All Materials' },
    { id: 'cotton', label: '100% Cotton' },
    { id: 'fleece', label: 'Heavy Fleece' },
    { id: 'denim', label: 'Denim & Twill' },
    { id: 'performance', label: 'Performance / Dry-Fit' }
  ];

  const filteredCategories = PRODUCTS_CATEGORIES.filter((cat) => {
    const matchesCategory = selectedCategoryFilter === 'all' || cat.id === selectedCategoryFilter;
    
    let matchesFabric = true;
    if (selectedFabricFilter === 'cotton') {
      matchesFabric = cat.fabricOptions.some(f => f.toLowerCase().includes('cotton'));
    } else if (selectedFabricFilter === 'fleece') {
      matchesFabric = cat.fabricOptions.some(f => f.toLowerCase().includes('fleece') || f.toLowerCase().includes('terry'));
    } else if (selectedFabricFilter === 'denim') {
      matchesFabric = cat.fabricOptions.some(f => f.toLowerCase().includes('denim') || f.toLowerCase().includes('twill'));
    } else if (selectedFabricFilter === 'performance') {
      matchesFabric = cat.fabricOptions.some(f => f.toLowerCase().includes('polyester') || f.toLowerCase().includes('spandex') || f.toLowerCase().includes('mesh'));
    }

    const matchesSearch = 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.fabricOptions.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.customizations.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesFabric && matchesSearch;
  });

  const handleOpenDetailModal = (category, initialIdx = 0) => {
    setModalProduct(category);
    setModalImageIdx(initialIdx);
  };

  const handleNextModalImage = (e) => {
    e.stopPropagation();
    if (!modalProduct) return;
    setModalImageIdx((prev) => (prev + 1) % modalProduct.images.length);
  };

  const handlePrevModalImage = (e) => {
    e.stopPropagation();
    if (!modalProduct) return;
    setModalImageIdx((prev) => (prev - 1 + modalProduct.images.length) % modalProduct.images.length);
  };

  return (
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Vercel Styled Header Banner */}
      <div className="bg-dot-grid-dark" style={{ 
        background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #541731'
      }}>
        <div className="container-custom" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff', border: '1px solid #A0183A' }}>
            Digital Sourcing Catalogue
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.035em',
            lineHeight: '1.18',
            marginBottom: '1rem'
          }}>
            Garment Manufacturing Capabilities
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#D1C4C8', lineHeight: '1.75' }}>
            Browse our core custom apparel categories. All garments are custom manufactured to your requested fabric composition, weight (GSM), sizing chart, and branding details.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '3.5rem' }}>
        
        {/* Important Product Page Disclaimer Banner */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAE1DD',
          borderLeft: '5px solid #800020',
          borderRadius: '14px',
          padding: '1.35rem 1.75rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.15rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Info size={24} color="#800020" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.94rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.3rem' }}>
              Important Capability Disclaimer
            </div>
            <div style={{ fontSize: '0.88rem', color: '#5E5055', lineHeight: '1.65' }}>
              Product images shown are representative of our product capabilities. Final products are developed according to buyer specifications, approved samples and order requirements. Uzair Sharif Enterprises does not stock pre-made garments.
            </div>
          </div>
        </div>

        {/* Filters and Search Console */}
        <div style={{ 
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAE1DD',
          borderRadius: '16px',
          padding: '1.75rem',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          
          {/* Row 1: Search & Total Stats */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #F0E8E5', paddingBottom: '1.25rem' }}>
            <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '450px' }}>
              <Search size={18} color="#8C7D82" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search products by silhouette, fabric, or finish..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.4rem',
                  borderRadius: '10px',
                  border: '1px solid #EAE1DD',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#FAF7F5',
                  color: '#1A0A10'
                }}
              />
            </div>

            <div style={{ fontSize: '0.85rem', color: '#5E5055', fontWeight: '600' }}>
              Displaying <strong style={{ color: '#800020' }}>{filteredCategories.length}</strong> of {PRODUCTS_CATEGORIES.length} Categories (27 Representative Photos)
            </div>
          </div>

          {/* Row 2: Category Filters */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              Filter by Apparel Category
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              <button
                onClick={() => setSelectedCategoryFilter('all')}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  border: '1px solid',
                  borderColor: selectedCategoryFilter === 'all' ? '#800020' : '#EAE1DD',
                  backgroundColor: selectedCategoryFilter === 'all' ? '#800020' : '#FFFFFF',
                  color: selectedCategoryFilter === 'all' ? '#FFFFFF' : '#1A0A10',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                All Categories
              </button>
              {PRODUCTS_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: selectedCategoryFilter === cat.id ? '#800020' : '#EAE1DD',
                    backgroundColor: selectedCategoryFilter === cat.id ? '#800020' : '#FFFFFF',
                    color: selectedCategoryFilter === cat.id ? '#FFFFFF' : '#1A0A10',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Fabric Type Filters */}
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              Filter by Base Material Group
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {fabricTags.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFabricFilter(f.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: selectedFabricFilter === f.id ? '#1A0A10' : '#EAE1DD',
                    backgroundColor: selectedFabricFilter === f.id ? '#1A0A10' : '#FFFFFF',
                    color: selectedFabricFilter === f.id ? '#FFFFFF' : '#5E5055',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Categories Digital Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', 
          gap: '2rem' 
        }}>
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="card-vercel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
                borderColor: '#EAE1DD'
              }}
            >
              {/* Primary Image Cover with Overlays */}
              <div style={{ position: 'relative', height: '280px', backgroundColor: '#240713' }}>
                <img 
                  src={category.images[0].url} 
                  alt={category.name}
                  onError={(e) => {
                    if (category.images[0].fallbackUrl && e.currentTarget.src !== category.images[0].fallbackUrl) {
                      e.currentTarget.src = category.images[0].fallbackUrl;
                    }
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  backgroundColor: 'rgba(26, 10, 16, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FAF7F5',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  3 Photos Available
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  backgroundColor: '#800020',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '6px'
                }}>
                  Made to Order
                </div>

                {/* Quick view button over image */}
                <button
                  onClick={() => handleOpenDetailModal(category, 0)}
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    right: '0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1A0A10',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(26, 10, 16, 0.18)'
                  }}
                >
                  <Eye size={14} color="#800020" /> View All 3 Angles
                </button>
              </div>

              {/* 3 Small Thumbnails Strip */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '2px', 
                backgroundColor: '#EAE1DD',
                borderBottom: '1px solid #EAE1DD'
              }}>
                {category.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => handleOpenDetailModal(category, i)}
                    style={{ height: '75px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                    title={`Click to inspect Photo ${i + 1}`}
                  >
                    <img 
                      src={img.url} 
                      alt={img.caption}
                      onError={(e) => {
                        if (img.fallbackUrl && e.currentTarget.src !== img.fallbackUrl) {
                          e.currentTarget.src = img.fallbackUrl;
                        }
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '4px',
                      fontSize: '0.65rem',
                      color: '#ffffff',
                      backgroundColor: 'rgba(26, 10, 16, 0.75)',
                      padding: '1px 4px',
                      borderRadius: '3px'
                    }}>
                      P{i + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#1A0A10', letterSpacing: '-0.01em' }}>
                    {category.name}
                  </h2>
                  <span style={{ fontSize: '0.74rem', fontWeight: '700', color: '#800020', backgroundColor: '#FDF2F4', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid #F0CBD3' }}>
                    Custom Production
                  </span>
                </div>

                <div style={{ fontSize: '0.84rem', fontWeight: '600', color: '#8C7D82', marginBottom: '0.75rem' }}>
                  {category.subtitle}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#5E5055', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {category.description}
                </p>

                {/* Key Technical Parameter Pills */}
                <div style={{ 
                  backgroundColor: '#FAF7F5', 
                  borderRadius: '10px', 
                  padding: '0.9rem', 
                  marginBottom: '1.5rem',
                  border: '1px solid #F0E8E5',
                  fontSize: '0.78rem'
                }}>
                  <div style={{ marginBottom: '0.35rem' }}>
                    <strong style={{ color: '#1A0A10' }}>Fabrics: </strong>
                    <span style={{ color: '#5E5055' }}>{category.fabricOptions.join(' • ')}</span>
                  </div>
                  <div style={{ marginBottom: '0.35rem' }}>
                    <strong style={{ color: '#1A0A10' }}>Fits: </strong>
                    <span style={{ color: '#5E5055' }}>{category.fitOptions.join(' • ')}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#1A0A10' }}>Branding: </strong>
                    <span style={{ color: '#800020', fontWeight: '600' }}>Custom Embroidery, Prints, Labels, Packaging</span>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => handleOpenDetailModal(category, 0)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.7rem', fontSize: '0.85rem', borderColor: '#EAE1DD' }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => openQuoteModal(category.name)}
                    className="btn-cobalt"
                    style={{ flex: 1, padding: '0.7rem', fontSize: '0.85rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
                  >
                    <FileText size={14} />
                    <span>Inquire / Quote</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Digital Spec & Lightbox Modal */}
      {modalProduct && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(26, 10, 16, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }} className="fade-in">
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '920px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            border: '1px solid #EAE1DD',
            position: 'relative'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.35rem 2rem',
              borderBottom: '1px solid #541731',
              background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)',
              color: '#ffffff',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px'
            }}>
              <div>
                <span className="badge-pill badge-cobalt" style={{ marginBottom: '0.35rem', backgroundColor: '#800020', color: '#ffffff', border: '1px solid #A0183A' }}>
                  Representative Capability Profile
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', letterSpacing: '-0.02em', margin: 0 }}>
                  {modalProduct.name} — Technical Overview
                </h3>
              </div>
              <button
                onClick={() => setModalProduct(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ffffff'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Image Stage + Specs */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                
                {/* Image Stage with Controls */}
                <div>
                  <div style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    height: '350px', 
                    backgroundColor: '#240713',
                    marginBottom: '1rem',
                    border: '1px solid #EAE1DD',
                    position: 'relative'
                  }}>
                    <img 
                      src={modalProduct.images[modalImageIdx].url} 
                      alt={modalProduct.images[modalImageIdx].caption}
                      onError={(e) => {
                        const fb = modalProduct.images[modalImageIdx].fallbackUrl;
                        if (fb && e.currentTarget.src !== fb) {
                          e.currentTarget.src = fb;
                        }
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />

                    {/* Left/Right Lightbox Arrows */}
                    <button
                      onClick={handlePrevModalImage}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(26, 10, 16, 0.75)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Previous angle"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={handleNextModalImage}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(26, 10, 16, 0.75)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Next angle"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      backgroundColor: 'rgba(26, 10, 16, 0.85)',
                      color: '#FAF7F5',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {modalProduct.images[modalImageIdx].caption} (Photo {modalImageIdx + 1} of 3)
                    </div>
                  </div>

                  {/* 3 Thumbnails Selector */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {modalProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalImageIdx(idx)}
                        style={{
                          flex: 1,
                          height: '75px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: modalImageIdx === idx ? '2px solid #800020' : '1px solid #EAE1DD',
                          cursor: 'pointer',
                          padding: 0
                        }}
                      >
                        <img 
                          src={img.url} 
                          alt="thumbnail" 
                          onError={(e) => {
                            if (img.fallbackUrl && e.currentTarget.src !== img.fallbackUrl) {
                              e.currentTarget.src = img.fallbackUrl;
                            }
                          }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specs Detail Column */}
                <div>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em' }}>
                      Fabric Weight & GSM
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#800020' }}>
                      Custom to Buyer Specs (Any GSM Produced)
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                      Available Fabrics & Blends
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {modalProduct.fabricOptions.map((f, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: '#1A0A10', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2 size={15} color="#800020" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                      Fit & Grading Profiles
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {modalProduct.fitOptions.map((fit, i) => (
                        <span key={i} className="badge-pill badge-slate" style={{ backgroundColor: '#FAF7F5', border: '1px solid #EAE1DD', color: '#1A0A10' }}>
                          {fit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                      Custom Branding & Finishing
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {modalProduct.customizations.map((c, i) => (
                        <li key={i} style={{ fontSize: '0.82rem', color: '#5E5055', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#800020' }}></span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const categoryName = modalProduct.name;
                      setModalProduct(null);
                      openQuoteModal(categoryName);
                    }}
                    className="btn-cobalt"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '0.96rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
                  >
                    <FileText size={16} /> Request Quotation for {modalProduct.name}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
