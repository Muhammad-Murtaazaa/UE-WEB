import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  Clock, 
  Ship, 
  ShieldCheck, 
  FileText, 
  Sliders, 
  Tag, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS_CATEGORIES } from '../data/productsData';

export default function SourcingEstimator({ openQuoteModal }) {
  const [selectedCat, setSelectedCat] = useState('Hoodies & Sweatshirts');
  const [quantity, setQuantity] = useState(1500);
  const [gsm, setGsm] = useState(360);
  const [incoterm, setIncoterm] = useState('FOB');
  const [hasEmbroidery, setHasEmbroidery] = useState(true);
  const [hasPrivateLabel, setHasPrivateLabel] = useState(true);

  // Dynamic calculations based on specs
  const samplingDays = '7 – 10 Calendar Days';
  let bulkDays = '25 – 30 Days';
  if (quantity > 3000) bulkDays = '35 – 42 Days';
  if (quantity > 7000) bulkDays = '45 – 55 Days';

  const handleLaunchRfq = () => {
    openQuoteModal(selectedCat);
  };

  return (
    <section style={{ 
      backgroundColor: '#0A1128', 
      color: '#EDECE6',
      paddingTop: '5.5rem', 
      paddingBottom: '5.5rem',
      borderBottom: '1px solid #1E294B',
      position: 'relative',
      overflow: 'hidden'
    }} className="bg-dot-grid-dark">
      
      {/* Cobalt Ambient Radial Spotlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 70, 217, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-pill" style={{ backgroundColor: 'rgba(21, 70, 217, 0.25)', color: '#A4BCFD', border: '1px solid #1546D9', marginBottom: '1rem' }}>
            Interactive Sourcing Tool
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: '#FFFFFF'
          }}>
            Garment Production & Lead-Time Estimator
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.7' }}>
            Configure your technical variables below to estimate pre-production sampling turnaround, bulk manufacturing duration, and Pakistan export coordination parameters.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Interactive Controls */}
          <div style={{
            backgroundColor: '#101935',
            border: '1px solid #1E294B',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}>
            {/* Category Select */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#EDECE6', marginBottom: '0.5rem' }}>
                Select Apparel Category
              </label>
              <select
                value={selectedCat}
                onChange={e => setSelectedCat(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#162244',
                  color: '#FFFFFF',
                  border: '1px solid #2D3E6B',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {PRODUCTS_CATEGORIES.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Quantity Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#EDECE6' }}>
                  Target Bulk Quantity
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', color: '#60A5FA', fontSize: '1.05rem' }}>
                  {quantity.toLocaleString()} pcs
                </span>
              </div>
              <input 
                type="range"
                min="500"
                max="10000"
                step="250"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#1546D9',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>
                <span>500 pcs (Small batch)</span>
                <span>5,000 pcs</span>
                <span>10,000+ pcs (Container)</span>
              </div>
            </div>

            {/* Target GSM */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#EDECE6' }}>
                  Fabric Weight (GSM)
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', color: '#60A5FA', fontSize: '1.05rem' }}>
                  {gsm} GSM
                </span>
              </div>
              <input 
                type="range"
                min="140"
                max="450"
                step="10"
                value={gsm}
                onChange={e => setGsm(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#1546D9',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>
                <span>140 GSM (Lightweight)</span>
                <span>280 GSM (Mid)</span>
                <span>450 GSM (Ultra Heavy)</span>
              </div>
            </div>

            {/* Preferred Incoterm */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#EDECE6', marginBottom: '0.5rem' }}>
                Commercial Trade Term (Incoterm)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {['FOB', 'CIF', 'EXW'].map(term => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setIncoterm(term)}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '8px',
                      border: incoterm === term ? '2px solid #1546D9' : '1px solid #2D3E6B',
                      backgroundColor: incoterm === term ? '#1546D9' : '#162244',
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Embellishment Toggles */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#EDECE6', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasEmbroidery} 
                  onChange={e => setHasEmbroidery(e.target.checked)}
                  style={{ accentColor: '#1546D9', width: '16px', height: '16px' }}
                />
                Custom Embroidery / Print
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#EDECE6', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasPrivateLabel} 
                  onChange={e => setHasPrivateLabel(e.target.checked)}
                  style={{ accentColor: '#1546D9', width: '16px', height: '16px' }}
                />
                Private Label (Tags & Bags)
              </label>
            </div>

          </div>

          {/* Right Column: Live Output Specs Card */}
          <div style={{
            backgroundColor: '#101935',
            border: '1px solid #1E294B',
            borderRadius: '20px',
            padding: '2.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #1E294B', paddingBottom: '1rem' }}>
                <div>
                  <span className="badge-pill" style={{ backgroundColor: 'rgba(21, 70, 217, 0.25)', color: '#A4BCFD', border: '1px solid #1546D9', marginBottom: '0.25rem' }}>
                    Calculated Projection
                  </span>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {selectedCat}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Est. Volume</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: '800', color: '#60A5FA' }}>
                    {quantity.toLocaleString()} pcs
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                
                <div style={{ backgroundColor: '#162244', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #1E294B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#94A3B8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Clock size={15} color="#60A5FA" /> Pre-Production Sample
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {samplingDays}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Dispatched via DHL/FedEx</div>
                </div>

                <div style={{ backgroundColor: '#162244', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #1E294B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#94A3B8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Layers size={15} color="#60A5FA" /> Bulk Line Manufacturing
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {bulkDays}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>From golden sample sign-off</div>
                </div>

                <div style={{ backgroundColor: '#162244', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #1E294B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#94A3B8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Ship size={15} color="#60A5FA" /> Loading Port & Trade
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {incoterm} Karachi (KPT/PQA)
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Ocean or Air freight</div>
                </div>

                <div style={{ backgroundColor: '#162244', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #1E294B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#94A3B8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={15} color="#60A5FA" /> Quality Protocol
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    AQL 2.5 Multi-Point
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Fabric, stitch & carton audit</div>
                </div>

              </div>

              {/* Note */}
              <div style={{ fontSize: '0.76rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '1.75rem', borderLeft: '3px solid #1546D9', paddingLeft: '0.75rem' }}>
                Exact commercial quotations are issued per order based on raw yarn fluctuations, Pantone lab dips, and packaging configurations.
              </div>
            </div>

            {/* Launch RFQ Button */}
            <button
              onClick={handleLaunchRfq}
              className="btn-cobalt"
              style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', borderRadius: '12px' }}
            >
              <span>Transfer These Specs to RFQ Engine</span>
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
