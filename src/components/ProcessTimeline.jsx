import React, { useState, useEffect } from 'react';
import { 
  FileSearch, 
  FileText, 
  Calculator, 
  FlaskConical, 
  CheckCircle, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Layers,
  LayoutGrid,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function ProcessTimeline({ openQuoteModal }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'

  const steps = [
    {
      num: '01',
      title: 'Inquiry',
      subtitle: 'Buyer submits preliminary requirements',
      timeline: 'Day 1',
      desc: 'Buyer sends initial product category, estimated target volume, destination country, and tech pack or reference photos.',
      buyerRole: 'Provide target styles, quantity breakdown, and destination port.',
      ourRole: 'Evaluate manufacturing feasibility across Pakistani partner facilities.',
      deliverable: 'Inquiry confirmation and technical spec intake sheet.',
      icon: FileSearch
    },
    {
      num: '02',
      title: 'Specification',
      subtitle: 'Technical parameter clarification',
      timeline: 'Days 2–3',
      desc: 'We review and clarify exact fabric composition, GSM, pantone colors, size specs, printing/embroidery techniques, and packaging.',
      buyerRole: 'Confirm fabric weight, artwork vectors (.ai/.pdf), and tolerance chart.',
      ourRole: 'Align specs with technical mills in Faisalabad & Lahore clusters.',
      deliverable: 'Final Approved Technical Specification Sheet.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Quotation',
      subtitle: 'Transparent commercial offer',
      timeline: 'Days 3–4',
      desc: 'Accurate unit pricing provided based on order quantity, custom details, Incoterm (FOB/CIF), and current Pakistani raw material market rates.',
      buyerRole: 'Review pricing breakdown and confirm payment term preference.',
      ourRole: 'Consolidate raw material costs, processing, and ocean freight rates.',
      deliverable: 'Formal Proforma Invoice & Commercial Price Matrix.',
      icon: Calculator
    },
    {
      num: '04',
      title: 'Sampling',
      subtitle: 'Physical prototype development',
      timeline: '7–10 Days',
      desc: 'Buyer-specific counter samples or fit samples developed through selected manufacturing partners and dispatched for physical inspection.',
      buyerRole: 'Examine hand-feel, measurement tolerance, and fit upon DHL receipt.',
      ourRole: 'Supervise master sampling pattern, lab dip shades, and rapid courier dispatch.',
      deliverable: 'Physical Golden Counter Sample delivered to buyer desk.',
      icon: FlaskConical
    },
    {
      num: '05',
      title: 'Approval',
      subtitle: 'Buyer sign-off & order confirmation',
      timeline: 'Milestone Sign-off',
      desc: 'Buyer approves physical samples, measurements, lab dips, and commercial payment terms before committing to bulk fabric processing.',
      buyerRole: 'Submit formal written approval and deposit commercial order bond.',
      ourRole: 'Lock fabric batch knitting slots and lock industrial production lines.',
      deliverable: 'Counter-Signed Manufacturing & Export Agreement.',
      icon: CheckCircle
    },
    {
      num: '06',
      title: 'Production',
      subtitle: 'Scheduled bulk manufacturing',
      timeline: '25–40 Days',
      desc: 'Bulk knitting/weaving, dyeing, cutting, embroidery/printing, and garment assembly coordinated with the selected partner facility.',
      buyerRole: 'Receive weekly progress reports and milestone photo updates.',
      ourRole: 'Coordinate timeline adherence, line balancing, and raw material throughput.',
      deliverable: 'Completed bulk production run ready for audit.',
      icon: Factory
    },
    {
      num: '07',
      title: 'Quality Control',
      subtitle: 'Continuous inline & final inspection',
      timeline: 'Pre-Shipment Audit',
      desc: 'Dimensional tolerance, stitch density, seam strength, color fastness, and overall appearance checked against approved samples.',
      buyerRole: 'Review high-resolution inspection report or appoint 3rd party auditor.',
      ourRole: 'Execute inline checking and AQL 2.5 final random inspection.',
      deliverable: 'Certified Pre-Shipment Inspection Report with photo logs.',
      icon: ShieldCheck
    },
    {
      num: '08',
      title: 'Packaging & Export',
      subtitle: 'Barcoding, carton packaging & shipment',
      timeline: 'Container Dispatch',
      desc: 'Individual polybagging, custom export cartons, palletization, Pakistani customs clearance, and global shipment coordination.',
      buyerRole: 'Receive Bill of Lading (B/L) and clear cargo at destination port.',
      ourRole: 'Supervise container loading, customs clearance, and port terminal dispatch.',
      deliverable: 'Full Export Document Set (B/L, Commercial Invoice, Packing List).',
      icon: PackageCheck
    }
  ];

  // Auto-play timer for Carousel Walkthrough (pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const timer = setInterval(() => {
      setActiveStage(prev => (prev + 1) % steps.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, steps.length]);

  const currentStep = steps[activeStage];
  const StepIcon = currentStep.icon;

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStage((prev) => (prev - 1 + steps.length) % steps.length);
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
        {/* Section Header */}
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
              Structured Sourcing Methodology
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
              fontWeight: '800', 
              color: '#1A0A10',
              letterSpacing: '-0.025em',
              lineHeight: '1.2',
              marginBottom: '0.65rem'
            }}>
              Our Manufacturing & Export Process
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5E5055', maxWidth: '680px', lineHeight: '1.65' }}>
              A disciplined 8-stage export pipeline ensuring full transparency from your initial technical inquiry through final container dispatch.
            </p>
          </div>

          {/* Mode Switcher */}
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
              <span>Interactive Walkthrough</span>
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
              <span>Full 8-Step Grid</span>
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL / WALKTHROUGH MODE ================= */}
        {viewMode === 'carousel' ? (
          <div>
            {/* Horizontal Stage Stepper Progress Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              marginBottom: '2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            className="no-scrollbar"
          >
              {steps.map((step, idx) => {
                const isActive = idx === activeStage;
                const isPassed = idx < activeStage;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      flex: '1',
                      minWidth: '110px',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '12px',
                      border: isActive ? '2px solid #800020' : '1px solid #EAE1DD',
                      backgroundColor: isActive ? '#800020' : isPassed ? '#FFFFFF' : '#FAF7F5',
                      color: isActive ? '#FFFFFF' : '#1A0A10',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 6px 18px rgba(128, 0, 32, 0.25)' : 'none'
                    }}
                  >
                    <div style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      letterSpacing: '0.05em',
                      opacity: isActive ? 0.9 : 0.6,
                      marginBottom: '0.2rem'
                    }}>
                      STAGE {step.num}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Animated Card Spotlight */}
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #EAE1DD',
                boxShadow: '0 20px 45px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                marginBottom: '3rem'
              }}
            >
              {/* Card Top Banner with Progress & Controls */}
              <div style={{
                background: 'linear-gradient(180deg, #360C1E 0%, #240713 100%)',
                color: '#FFFFFF',
                padding: '1.25rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid #541731'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#800020',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(128, 0, 32, 0.5)'
                  }}>
                    <StepIcon size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#F0CBD3', letterSpacing: '0.05em' }}>
                      STAGE {currentStep.num} OF 08
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
                      {currentStep.title} — {currentStep.subtitle}
                    </div>
                  </div>
                </div>

                {/* Timeline Tag & Carousel Prev/Next Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#FAF7F5',
                    fontWeight: '600'
                  }}>
                    <Clock size={14} color="#F0CBD3" />
                    <span>Estimated: {currentStep.timeline}</span>
                  </div>

                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: isAutoPlaying ? '#800020' : 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    title={isAutoPlaying ? "Pause Walkthrough" : "Play Walkthrough"}
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <div style={{ display: 'flex', gap: '0.3rem' }}>
                    <button
                      onClick={handlePrev}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      aria-label="Previous Stage"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      aria-label="Next Stage"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Body with Detailed Breakdown */}
              <div style={{ padding: '2.5rem 2rem' }}>
                <p style={{
                  fontSize: '1.15rem',
                  color: '#1A0A10',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontWeight: '500'
                }}>
                  {currentStep.desc}
                </p>

                {/* 3 Detail Boxes: Buyer Role, Enterprise Role, Milestone Deliverable */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {/* Buyer Responsibility */}
                  <div style={{
                    backgroundColor: '#FAF7F5',
                    border: '1px solid #EAE1DD',
                    borderRadius: '16px',
                    padding: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      color: '#5E5055',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <span>Buyer Responsibility</span>
                    </div>
                    <div style={{ fontSize: '0.94rem', color: '#1A0A10', lineHeight: '1.6', fontWeight: '600' }}>
                      {currentStep.buyerRole}
                    </div>
                  </div>

                  {/* USE Coordination Role */}
                  <div style={{
                    backgroundColor: '#FDF2F4',
                    border: '1px solid #F0CBD3',
                    borderRadius: '16px',
                    padding: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      color: '#800020',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <span>Uzair Sharif Enterprises Role</span>
                    </div>
                    <div style={{ fontSize: '0.94rem', color: '#800020', lineHeight: '1.6', fontWeight: '600' }}>
                      {currentStep.ourRole}
                    </div>
                  </div>

                  {/* Deliverable Document */}
                  <div style={{
                    backgroundColor: '#FAF7F5',
                    border: '1px solid #EAE1DD',
                    borderRadius: '16px',
                    padding: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      color: '#5E5055',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <CheckCircle2 size={14} color="#800020" />
                      <span>Stage Deliverable</span>
                    </div>
                    <div style={{ fontSize: '0.94rem', color: '#1A0A10', lineHeight: '1.6', fontWeight: '600' }}>
                      {currentStep.deliverable}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= FULL 8-STEP GRID MODE ================= */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}>
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  className="subtle-card"
                  style={{ 
                    padding: '2rem 1.75rem', 
                    borderRadius: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EAE1DD',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#800020';
                    e.currentTarget.style.boxShadow = '0 14px 30px rgba(128, 0, 32, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#EAE1DD';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                  }}
                >
                  <div>
                    {/* Header with Step Number & Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        backgroundColor: '#360C1E', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 3px 8px rgba(54,12,30,0.3)'
                      }}>
                        <IconComponent size={22} color="#F0CBD3" />
                      </div>
                      <span style={{ 
                        fontFamily: 'monospace', 
                        fontWeight: '800', 
                        fontSize: '0.95rem',
                        color: '#800020',
                        backgroundColor: '#FDF2F4',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '8px',
                        border: '1px solid #F0CBD3'
                      }}>
                        {step.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1A0A10', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                      {step.title}
                    </h3>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#800020', marginBottom: '0.75rem' }}>
                      {step.subtitle}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#5E5055', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                      {step.desc}
                    </p>
                  </div>

                  <div style={{
                    backgroundColor: '#FAF7F5',
                    border: '1px solid #EAE1DD',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#1A0A10',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <Clock size={13} color="#800020" />
                    <span>{step.timeline}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Start Inquiry Button Callout */}
        <div style={{ textAlign: 'center' }} className={`reveal-init ${isVisible ? 'reveal-active delay-4' : ''}`}>
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
            <span>Start Your Specification Inquiry</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
