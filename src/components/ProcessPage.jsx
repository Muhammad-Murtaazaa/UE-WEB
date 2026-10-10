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
      title: 'Inquiry',
      subtitle: 'Buyer sends requirements or reference samples',
      details: 'Start by submitting your garment concept, digital CAD sketch, physical sample references, or detailed technical specifications pack.',
      inputs: ['Garment categories & intended styling', 'Reference images or competitor benchmarks', 'Target quantity & target budget expectations', 'Destination country & delivery deadlines'],
      icon: FileSearch
    },
    {
      num: '02',
      title: 'Requirement Analysis',
      subtitle: 'Technical clarification & parameter breakdown',
      details: 'We carefully review and verify every technical variable before proposing prices or scheduling machinery.',
      inputs: ['Product type & garment silhouette', 'Fabric composition & material blend', 'Target GSM & fabric knit/weave style', 'Pantone TCX / TPX color matching', 'Size breakdown chart (grading)', 'Printing / embroidery technique', 'Woven / care label requirements', 'Custom polybag & carton markings', 'Destination shipping constraints'],
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
      inputs: ['Fabric procurement & knitting/weaving', 'Dyeing & bio-polishing treatment', 'Precision fabric cutting & bundling', 'Inline stitching assembly & embellishment'],
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
    <div style={{ backgroundColor: '#FAF7F5', minHeight: '85vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div style={{ 
        backgroundColor: '#1A0A10', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '4.5rem',
        borderBottom: '1px solid #441F2F'
      }}>
        <div className="container-custom" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-cobalt" style={{ marginBottom: '1rem', backgroundColor: '#800020', color: '#ffffff', border: '1px solid #A0183A' }}>
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
          <p style={{ fontSize: '1.1rem', color: '#D1C4C8', lineHeight: '1.7' }}>
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
                  backgroundColor: '#FFFFFF',
                  borderColor: '#EAE1DD'
                }}
              >
                {/* Left: Step Overview */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: '800', 
                      fontSize: '1.15rem', 
                      backgroundColor: '#1A0A10', 
                      color: '#F0CBD3', 
                      padding: '0.35rem 0.75rem', 
                      borderRadius: '8px' 
                    }}>
                      {step.num}
                    </span>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      backgroundColor: '#FDF2F4', 
                      border: '1px solid #F0CBD3',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <IconComp size={20} color="#800020" />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.4rem' }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#800020', marginBottom: '0.75rem' }}>
                    {step.subtitle}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#5E5055', lineHeight: '1.65' }}>
                    {step.details}
                  </p>
                </div>

                {/* Right: Key Deliverables Checklist */}
                <div style={{ 
                  backgroundColor: '#FAF7F5', 
                  borderRadius: '12px', 
                  padding: '1.5rem', 
                  border: '1px solid #EAE1DD' 
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#8C7D82', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                    Key Checkpoints & Parameters
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                    {step.inputs.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#1A0A10' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#800020' }}></span>
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
            style={{ padding: '0.95rem 2.5rem', fontSize: '1.05rem', backgroundColor: '#800020', border: '1px solid #A0183A' }}
          >
            <FileText size={18} /> Initiate Step 01: Submit Your Inquiry
          </button>
        </div>

      </div>
    </div>
  );
}
