import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Ship, 
  Package, 
  Check, 
  Activity,
  Award
} from 'lucide-react';
import { PRODUCTS_CATEGORIES } from '../data/productsData';

export default function FabricSpecGuide({ openQuoteModal }) {
  // Pre-configured textile matrix data
  const fabricFamilies = [
    {
      id: 'fleece',
      name: 'Heavyweight Fleece & French Terry',
      categoryRef: 'Heavyweight Hoodies & Fleece',
      gsmRange: '300 – 480 GSM',
      yarnCount: '3-End Fleece Loop / 20s & 16s Ring-Spun',
      compositions: ['100% Combed Cotton', '80% Cotton / 20% Polyester', '100% Organic BCI Cotton'],
      finishes: ['Carbon Peach Softness', 'Brushed Fleece Interior', 'Anti-Pilling Enzyme Wash', 'Vintage Garment Dye'],
      bestFor: 'Luxury streetwear hoodies, oversized crewnecks, heavy sweatpants & joggers',
      colorFastness: 'Grade 4-5 (ISO 105)',
      shrinkage: 'Under 3% (Compacted & Pre-Shrunk)'
    },
    {
      id: 'jersey',
      name: 'Single Jersey & Combed Cotton',
      categoryRef: 'T-Shirts',
      gsmRange: '160 – 280 GSM',
      yarnCount: '24s/1, 30s/1 & 32s/1 Ring-Spun Combed Yarn',
      compositions: ['100% Ring-Spun Combed Cotton', '95% Cotton / 5% Elastane', 'Cotton / Modal Blends'],
      finishes: ['Bio-Wash Silicone Polish', 'Pigment Cold Dye', 'Acid Mineral Wash', 'Silky Compacted Finish'],
      bestFor: 'High-end streetwear tees, drop-shoulder t-shirts, ribbed tank tops & base layers',
      colorFastness: 'Grade 4 (ISO 105)',
      shrinkage: 'Under 3-4% (Heat-Set)'
    },
    {
      id: 'pique',
      name: 'Honeycomb Pique & Mercerized Knits',
      categoryRef: 'Polo Shirts',
      gsmRange: '200 – 260 GSM',
      yarnCount: '26s/2 & 30s/2 Double Ply Mercerized',
      compositions: ['100% Combed Cotton Pique', '65/35 Poly-Cotton (CVC)', 'Bamboo Cotton Pique'],
      finishes: ['Anti-Curl Collar Treatment', 'Double Mercerized Luster', 'Reactive Piece Dyeing'],
      bestFor: 'Corporate executive polos, tennis & golf apparel, structured casual wear',
      colorFastness: 'Grade 4-5 (AATCC 61)',
      shrinkage: 'Under 3% Stabilized'
    },
    {
      id: 'denim',
      name: 'Selvedge & Cotton Twill Denim',
      categoryRef: 'Denim Jeans & Jackets',
      gsmRange: '10 oz – 14.5 oz Weaves',
      yarnCount: 'Rope-Dyed Indigo Slub Ring Yarn',
      compositions: ['100% Pure Ring Cotton', '98% Cotton / 2% Elastane Spandex', 'Rigid Cotton Twill'],
      finishes: ['Stonewash & Enzyme Wash', 'Hand Whisker & Scraping', 'Resin 3D Crinkle', 'Raw Rigid'],
      bestFor: '5-pocket denim jeans, trucker jackets, rugged overshirts & workwear uniforms',
      colorFastness: 'Individually Stabilized',
      shrinkage: 'Sanforized (<2%)'
    },
    {
      id: 'interlock',
      name: 'Dry-Fit Interlock & Active Blends',
      categoryRef: 'Gym & Activewear',
      gsmRange: '160 – 240 GSM',
      yarnCount: 'Micro-Denier Synthetic & Spandex Blends',
      compositions: ['88% Polyester / 12% Spandex', '90% Nylon / 10% Elastane', 'Recycled Poly (rPET)'],
      finishes: ['Hydrophilic Moisture-Wicking', 'Anti-Microbial Silver Treatment', '4-Way Mechanical Stretch'],
      bestFor: 'Athletic compression tops, running tracksuits, performance gym shorts & leggings',
      colorFastness: 'Grade 4-5 Sublimation Resilient',
      shrinkage: 'Zero Shrinkage Synthetic'
    }
  ];

  const [activeTab, setActiveTab] = useState(fabricFamilies[0].id);
  const [selectedCat, setSelectedCat] = useState('Heavyweight Hoodies & Fleece');
  const [targetGsm, setTargetGsm] = useState(380);
  const [embellishment, setEmbellishment] = useState('High-Density Screen Print & 3D Puff');
  const [incoterm, setIncoterm] = useState('FOB');
  const [privateLabel, setPrivateLabel] = useState(true);

  const currentFabric = fabricFamilies.find(f => f.id === activeTab) || fabricFamilies[0];

  const handleLaunchRfq = () => {
    openQuoteModal(selectedCat);
  };

  return (
    <section 
      style={{ 
        background: 'linear-gradient(180deg, #2D0A18 0%, #1F0510 100%)', 
        color: '#FAF7F5',
        paddingTop: '5.5rem', 
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #541731',
        position: 'relative',
        overflow: 'hidden'
      }} 
      className="bg-dot-grid-dark"
    >
      {/* Ambient Maroon Glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160, 24, 58, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
          <span 
            className="badge-pill" 
            style={{ 
              backgroundColor: 'rgba(128, 0, 32, 0.4)', 
              color: '#F0CBD3', 
              border: '1px solid #800020', 
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}
          >
            TEXTILE ENGINEERING & SOURCING
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: '#FFFFFF'
          }}>
            Fabric Sourcing & Technical Specification Hub
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#D1C4C8', lineHeight: '1.7' }}>
            Direct access to Pakistan’s premier spinning, knitting, and weaving mills. Explore tested fabric compositions, GSM densities, and custom finishing treatments engineered to your brand’s exact tech pack requirements.
          </p>
        </div>

        {/* Fabric Tabs Bar */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2.5rem',
          scrollbarWidth: 'thin'
        }}>
          {fabricFamilies.map(f => {
            const isSelected = f.id === activeTab;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setActiveTab(f.id);
                  setSelectedCat(f.categoryRef);
                }}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: isSelected ? '#800020' : '#2A0D1B',
                  border: isSelected ? '1px solid #C41C48' : '1px solid #48172C',
                  color: isSelected ? '#FFFFFF' : '#D1C4C8',
                  fontWeight: isSelected ? '700' : '500',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 15px rgba(128, 0, 32, 0.4)' : 'none'
                }}
              >
                {f.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase & Spec Builder */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Textile Specifications Matrix */}
          <div style={{
            backgroundColor: '#270C1A',
            border: '1px solid #4F1830',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.45)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  color: '#F0CBD3',
                  backgroundColor: 'rgba(128,0,32,0.45)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                  border: '1px solid #800020'
                }}>
                  GSM: {currentFabric.gsmRange}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#B8A8AD', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={16} color="#4ADE80" /> OEKO-TEX Compliant
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                {currentFabric.name}
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#D1C4C8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Ideal for: <strong style={{ color: '#FAF7F5' }}>{currentFabric.bestFor}</strong>
              </p>

              {/* Technical Spec List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                
                <div style={{ backgroundColor: '#341023', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid #4D1830' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#B8A8AD', fontWeight: '700', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                    Yarn Count & Structure
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                    {currentFabric.yarnCount}
                  </div>
                </div>

                <div style={{ backgroundColor: '#341023', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid #4D1830' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#B8A8AD', fontWeight: '700', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    Available Compositions
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {currentFabric.compositions.map((comp, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.8rem', 
                        backgroundColor: '#44142D', 
                        color: '#FAF7F5', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        border: '1px solid #631C3E'
                      }}>
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#341023', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid #4D1830' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#B8A8AD', fontWeight: '700', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    Specialty Finishes & Treatments
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {currentFabric.finishes.map((fin, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.8rem', 
                        backgroundColor: 'rgba(128, 0, 32, 0.35)', 
                        color: '#F0CBD3', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        border: '1px solid #800020'
                      }}>
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Quality Standard Bar */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '0.75rem', 
              paddingTop: '1rem', 
              borderTop: '1px solid #4F1830' 
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#B8A8AD' }}>Color Fastness</div>
                <div style={{ fontWeight: '700', color: '#FAF7F5', fontSize: '0.88rem' }}>{currentFabric.colorFastness}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#B8A8AD' }}>Shrinkage Stability</div>
                <div style={{ fontWeight: '700', color: '#FAF7F5', fontSize: '0.88rem' }}>{currentFabric.shrinkage}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Order Specs & Direct Quotation Transfer */}
          <div style={{
            backgroundColor: '#270C1A',
            border: '1px solid #4F1830',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.45)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.75rem'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #4F1830' }}>
                <span className="badge-pill" style={{ backgroundColor: 'rgba(128, 0, 32, 0.35)', color: '#F0CBD3', border: '1px solid #800020' }}>
                  Technical Configuration
                </span>
                <span style={{ fontSize: '0.8rem', color: '#B8A8AD' }}>
                  Direct B2B Sourcing
                </span>
              </div>

              {/* Garment Selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5', marginBottom: '0.45rem' }}>
                  Apparel Category
                </label>
                <select
                  value={selectedCat}
                  onChange={e => setSelectedCat(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: '#341023',
                    color: '#FFFFFF',
                    border: '1px solid #5A1B38',
                    fontSize: '0.92rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {PRODUCTS_CATEGORIES.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* GSM Density Selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5' }}>
                    Target Fabric Density
                  </label>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', color: '#F0CBD3', fontSize: '1rem' }}>
                    {targetGsm} GSM
                  </span>
                </div>
                <input 
                  type="range"
                  min="160"
                  max="460"
                  step="10"
                  value={targetGsm}
                  onChange={e => setTargetGsm(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#800020',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#B8A8AD', marginTop: '4px' }}>
                  <span>160 GSM (Light)</span>
                  <span>300 GSM (Mid)</span>
                  <span>460 GSM (Heavy)</span>
                </div>
              </div>

              {/* Embellishment Type */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5', marginBottom: '0.45rem' }}>
                  Primary Embellishment & Technique
                </label>
                <select
                  value={embellishment}
                  onChange={e => setEmbellishment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: '#341023',
                    color: '#FFFFFF',
                    border: '1px solid #5A1B38',
                    fontSize: '0.92rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="High-Density Screen Print & 3D Puff">High-Density Screen Print & 3D Puff</option>
                  <option value="Direct Computerized Embroidery">Direct Computerized Embroidery (Tajima)</option>
                  <option value="Direct-To-Garment (DTG) Photorealistic">Direct-To-Garment (DTG) Photorealistic</option>
                  <option value="Chenille & Chenille-Felt Patches">Chenille & Felt Applique Patches</option>
                  <option value="Vintage Garment Dye / Acid Wash">Vintage Garment Dye / Acid Wash</option>
                  <option value="Minimal Clean / Blank Custom Cut">Clean Finish / Private Label Blanks</option>
                </select>
              </div>

              {/* Shipping Incoterm & Private Label Toggles */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#FAF7F5', marginBottom: '0.35rem' }}>
                    Incoterm
                  </label>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    {['FOB', 'CIF', 'EXW'].map(term => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setIncoterm(term)}
                        style={{
                          flex: 1,
                          padding: '0.5rem 0',
                          borderRadius: '8px',
                          border: incoterm === term ? '2px solid #800020' : '1px solid #4F1830',
                          backgroundColor: incoterm === term ? '#800020' : '#341023',
                          color: '#FFFFFF',
                          fontWeight: '700',
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#FAF7F5', marginBottom: '0.35rem' }}>
                    Branding Package
                  </label>
                  <button
                    type="button"
                    onClick={() => setPrivateLabel(!privateLabel)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.6rem',
                      borderRadius: '8px',
                      border: privateLabel ? '2px solid #800020' : '1px solid #4F1830',
                      backgroundColor: privateLabel ? '#800020' : '#341023',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    {privateLabel ? <Check size={14} /> : null}
                    {privateLabel ? 'Custom Tags & Polybag' : 'Plain Packaging'}
                  </button>
                </div>
              </div>

              {/* Quality & Schedule Assurance Box */}
              <div style={{
                backgroundColor: '#341023',
                border: '1px solid #4F1830',
                borderRadius: '12px',
                padding: '1rem 1.15rem',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F0CBD3', fontSize: '0.84rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                  <Activity size={16} color="#A0183A" /> Turnaround & Quotation Schedule
                </div>
                <p style={{ fontSize: '0.8rem', color: '#D1C4C8', lineHeight: '1.55', margin: 0 }}>
                  Because yarn spinning cycles, custom dyeing, and order complexity vary, our export team reviews your exact tech pack to deliver an honest, customized production schedule and competitive per-unit quotation.
                </p>
              </div>

            </div>

            {/* Launch RFQ Button */}
            <div>
              <button
                onClick={handleLaunchRfq}
                className="btn-cobalt"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  fontSize: '1rem', 
                  borderRadius: '12px', 
                  backgroundColor: '#800020', 
                  border: '1px solid #A0183A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                <span>Transfer Specifications to RFQ Engine</span>
                <ArrowRight size={18} />
              </button>
              <div style={{ textAlign: 'center', marginTop: '0.6rem', fontSize: '0.75rem', color: '#B8A8AD' }}>
                Golden sample approval & lab dips completed prior to bulk manufacturing
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
