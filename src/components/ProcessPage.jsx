import React from 'react';
import { 
  FileSearch, 
  ListChecks, 
  Calculator, 
  FlaskConical, 
  CheckCircle, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  Ship,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function ProcessPage({ openQuoteModal }) {
  const steps = [
    {
      num: '01',
      title: 'Buyer Inquiry',
      subtitle: 'Buyer sends preliminary product requirement',
      details: 'The buyer provides product category, estimated order volume, destination market, target delivery date, and tech pack or reference photos.',
      inputs: ['Product category & style reference', 'Target order quantity per size/color', 'Target country & preferred Incoterm', 'Artwork / logo vector files (if any)'],
      icon: FileSearch
    },
    {
      num: '02',
      title: 'Requirement Analysis',
      subtitle: 'Technical clarification & parameter breakdown',
      details: 'We carefully review and verify every technical variable before proposing prices or scheduling machinery.',
      inputs: ['Product type & garment silhouette', 'Fabric composition & yarn blend', 'Target GSM & fabric knit/weave style', 'Pantone TCX / TPX color matching', 'Size breakdown chart (grading)', 'Printing / embroidery technique', 'Woven / care label requirements', 'Custom polybag & carton markings', 'Destination shipping constraints'],
      icon: ListChecks
    },
    {
      num: '03',
      title: 'Quotation',
      subtitle: 'Specification-based transparent costing',
      details: 'We calculate unit manufacturing, embellishment, packaging, and export logistics costs to issue an itemized quotation.',
      inputs: ['Clear FOB or CIF unit price offer', 'Minimum order threshold per colorway', 'Sampling fee schedule & lead time', 'Estimated bulk production turnaround'],
      icon: Calculator
    },
    {
      num: '04',
      title: 'Sampling',
      subtitle: 'Buyer-specific sample development',
      details: 'When required, counter-samples or fit samples are crafted through our selected manufacturing partners to validate quality before bulk manufacturing.',
      inputs: ['1-to-1 prototype tailoring', 'Fabric hand-feel and weight confirmation', 'Embroidery & print proofing', 'Express international courier dispatch (DHL/FedEx)'],
      icon: FlaskConical
    },
    {
      num: '05',
      title: 'Approval',
      subtitle: 'Formal buyer sign-off & deposit',
      details: 'The buyer inspects the sample, confirms physical measurements, verifies artwork positioning, and authorizes the purchase order.',
      inputs: ['Buyer written sample approval', 'Lab dip colorway sign-off', 'Proforma invoice confirmation', 'Agreed payment milestone setup'],
      icon: CheckCircle
    },
    {
      num: '06',
      title: 'Production',
      subtitle: 'Structured bulk execution',
      details: 'Production is arranged with specialized partner units according to the approved pre-production golden sample.',
      inputs: ['Yarn procurement & knitting/weaving', 'Dyeing & bio-polishing treatment', 'Precision fabric cutting & bundling', 'Inline stitching assembly & embellishment'],
      icon: Factory
    },
    {
      num: '07',
      title: 'Quality Control',
      subtitle: 'Multi-stage specification checking',
      details: 'Continuous checking against agreed measurements, stitch per inch (SPI) standards, color fastness, and cosmetic cleanliness.',
      inputs: ['AQL 2.5 standard inspection sampling', 'Measurement tolerance audit (+/- 0.5cm)', 'Pull test on snaps, buttons & seams', 'Needle detection & metal safety sweep'],
      icon: ShieldCheck
    },
    {
      num: '08',
      title: 'Packaging',
      subtitle: 'Buyer-specific carton & unit pack preparation',
      details: 'Individual folding, tissue paper, silica gel packs, barcode stickering, and solid 5-ply export master cartons.',
      inputs: ['Individual sealed polybags', 'Ratio packing vs. solid packing by size', 'Custom printed exterior carton marks', 'Moisture protection & strapping'],
      icon: PackageCheck
    },
    {
      num: '09',
      title: 'Export',
      subtitle: 'Customs clearance & international freight',
      details: 'Complete Pakistan export documentation processing and coordination with international shipping lines or air forwarders.',
      inputs: ['Commercial Invoice & Detailed Packing List', 'Certificate of Origin (Chamber of Commerce)', 'Pakistani export customs clearance', 'Bill of Lading (B/L) / Airway Bill (AWB)'],
      icon: Ship
    }
  ];

  return (
    <div style={{ backgroundColor: '#EDECE6', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div style={{ 
        backgroundColor: '#0A1128', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #1E294B'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#1546D9', color: '#ffffff' }}>
            Transparent Step-by-Step Execution
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Our Manufacturing & Supply Process
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7' }}>
            From initial product inquiry through final container dispatch, we coordinate every stage with transparent milestones.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        
        {/* Detailed 9-Step Process Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="subtle-card"
                style={{
                  padding: '2.25rem 2rem',
                  borderRadius: '16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  backgroundColor: '#FAF9F5',
                  borderColor: '#DCDAD1'
                }}
              >
                {/* Left: Step Overview */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: '800', 
                      fontSize: '1.15rem', 
                      backgroundColor: '#0A1128', 
                      color: '#1546D9', 
                      padding: '0.35rem 0.75rem', 
                      borderRadius: '8px' 
                    }}>
                      {step.num}
                    </span>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      backgroundColor: '#EBF0FE', 
                      border: '1px solid #A4BCFD',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <IconComp size={20} color="#1546D9" />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0A1128', marginBottom: '0.4rem' }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1546D9', marginBottom: '0.75rem' }}>
                    {step.subtitle}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#4B5565', lineHeight: '1.65' }}>
                    {step.details}
                  </p>
                </div>

                {/* Right: Key Deliverables Checklist */}
                <div style={{ 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: '12px', 
                  padding: '1.5rem', 
                  border: '1px solid #E6E4DC' 
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#6E798A', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                    Key Checkpoints & Parameters
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                    {step.inputs.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0A1128' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1546D9' }}></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Start Inquiry CTA */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={openQuoteModal}
            className="btn-cobalt"
            style={{ padding: '0.95rem 2.5rem', fontSize: '1.05rem' }}
          >
            <FileText size={18} /> Initiate Step 01: Submit Your Inquiry
          </button>
        </div>

      </div>
    </div>
  );
}
