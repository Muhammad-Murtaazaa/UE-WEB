import React, { useState } from 'react';
import { 
  Sliders, 
  Clock, 
  Calendar, 
  Package, 
  Ship, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { PRODUCTS_CATEGORIES } from '../data/productsData';

export default function SourcingEstimator({ openQuoteModal }) {
  const [selectedCat, setSelectedCat] = useState('Heavyweight Hoodies & Fleece');
  const [quantity, setQuantity] = useState(1500);
  const [gsm, setGsm] = useState(380);
  const [incoterm, setIncoterm] = useState('FOB');
  const [hasEmbroidery, setHasEmbroidery] = useState(true);
  const [hasPrivateLabel, setHasPrivateLabel] = useState(true);

  // Dynamic calculated estimations
  const samplingDays = hasEmbroidery ? '8–11 Days' : '7–9 Days';
  
  let bulkDays = '25–30 Days';
  if (quantity <= 1000) bulkDays = '20–25 Days';
  else if (quantity > 5000) bulkDays = '35–45 Days';

  const handleLaunchRfq = () => {
    openQuoteModal(selectedCat);
  };

  return (
    <section style={{ 
      backgroundColor: '#1A0A10', 
      color: '#FAF7F5',
      paddingTop: '5.5rem', 
      paddingBottom: '5.5rem',
      borderBottom: '1px solid #441F2F',
      position: 'relative',
      overflow: 'hidden'
    }} className="bg-dot-grid-dark">
      
      {/* Maroon Ambient Radial Spotlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(128, 0, 32, 0.22) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-pill" style={{ backgroundColor: 'rgba(128, 0, 32, 0.35)', color: '#F0CBD3', border: '1px solid #800020', marginBottom: '1rem' }}>
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
          <p style={{ fontSize: '1.05rem', color: '#D1C4C8', lineHeight: '1.7' }}>
            Configure your technical variables below to estimate pre-production sampling turnaround, bulk manufacturing duration, and Pakistan export coordination parameters.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Interactive Controls */}
          <div style={{
            backgroundColor: '#251019',
            border: '1px solid #441F2F',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}>
            {/* Category Select */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5', marginBottom: '0.5rem' }}>
                Select Apparel Category
              </label>
              <select
                value={selectedCat}
                onChange={e => setSelectedCat(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#331623',
                  color: '#FFFFFF',
                  border: '1px solid #5A2338',
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
                <label style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5' }}>
                  Target Bulk Quantity
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', color: '#F0CBD3', fontSize: '1.05rem' }}>
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
                  accentColor: '#800020',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#B8A8AD', marginTop: '4px' }}>
                <span>500 pcs (Small batch)</span>
                <span>5,000 pcs</span>
                <span>10,000+ pcs (Container)</span>
              </div>
            </div>

            {/* Target GSM */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5' }}>
                  Fabric Weight (GSM)
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', color: '#F0CBD3', fontSize: '1.05rem' }}>
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
                  accentColor: '#800020',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#B8A8AD', marginTop: '4px' }}>
                <span>140 GSM (Lightweight)</span>
                <span>280 GSM (Mid)</span>
                <span>450 GSM (Ultra Heavy)</span>
              </div>
            </div>

            {/* Preferred Incoterm */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FAF7F5', marginBottom: '0.5rem' }}>
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
                      border: incoterm === term ? '2px solid #800020' : '1px solid #5A2338',
                      backgroundColor: incoterm === term ? '#800020' : '#331623',
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
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#FAF7F5', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasEmbroidery} 
                  onChange={e => setHasEmbroidery(e.target.checked)}
                  style={{ accentColor: '#800020', width: '16px', height: '16px' }}
                />
                Custom Embroidery / Print
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#FAF7F5', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={hasPrivateLabel} 
                  onChange={e => setHasPrivateLabel(e.target.checked)}
                  style={{ accentColor: '#800020', width: '16px', height: '16px' }}
                />
                Private Label (Tags & Bags)
              </label>
            </div>

          </div>

          {/* Right Column: Live Output Specs Card */}
          <div style={{
            backgroundColor: '#251019',
            border: '1px solid #441F2F',
            borderRadius: '20px',
            padding: '2.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #441F2F', paddingBottom: '1rem' }}>
                <div>
                  <span className="badge-pill" style={{ backgroundColor: 'rgba(128, 0, 32, 0.35)', color: '#F0CBD3', border: '1px solid #800020', marginBottom: '0.25rem' }}>
                    Calculated Projection
                  </span>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {selectedCat}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: '#B8A8AD' }}>Est. Volume</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: '800', color: '#F0CBD3' }}>
                    {quantity.toLocaleString()} pcs
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                
                <div style={{ backgroundColor: '#331623', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #441F2F' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#D1C4C8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Clock size={15} color="#F0CBD3" /> Pre-Production Sample
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {samplingDays}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#B8A8AD' }}>Dispatched via DHL/FedEx</div>
                </div>

                <div style={{ backgroundColor: '#331623', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #441F2F' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#D1C4C8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Layers size={15} color="#F0CBD3" /> Bulk Line Manufacturing
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {bulkDays}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#B8A8AD' }}>From golden sample sign-off</div>
                </div>

                <div style={{ backgroundColor: '#331623', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #441F2F' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#D1C4C8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <Ship size={15} color="#F0CBD3" /> Loading Port & Trade
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {incoterm} Karachi (KPT/PQA)
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#B8A8AD' }}>Ocean or Air freight</div>
                </div>

                <div style={{ backgroundColor: '#331623', padding: '1rem 1.15rem', borderRadius: '12px', border: '1px solid #441F2F' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#D1C4C8', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={15} color="#F0CBD3" /> Quality Protocol
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>
                    AQL 2.5 Multi-Point
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#B8A8AD' }}>Fabric, stitch & carton audit</div>
                </div>

              </div>

              {/* Note */}
              <div style={{ fontSize: '0.76rem', color: '#D1C4C8', lineHeight: '1.6', marginBottom: '1.75rem', borderLeft: '3px solid #800020', paddingLeft: '0.75rem' }}>
                Exact commercial quotations are issued per order based on raw fabric material fluctuations, Pantone lab dips, and packaging configurations.
              </div>
            </div>

            {/* Launch RFQ Button */}
            <button
              onClick={handleLaunchRfq}
              className="btn-cobalt"
              style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', borderRadius: '12px', backgroundColor: '#800020', border: '1px solid #A0183A' }}
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
