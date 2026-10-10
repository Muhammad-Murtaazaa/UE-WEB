import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  FileText, 
  Phone,
  HelpCircle,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { COMPANY_DETAILS } from '../data/productsData';

export default function Chatbot({ openQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! Welcome to Uzair Sharif Enterprises (SMC-Private) Limited. I am your B2B Export Assistant. We coordinate custom apparel manufacturing & sampling from Pakistan to your exact specifications. How can I assist you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSendFaq = (faq) => {
    const userMsg = { id: Date.now(), sender: 'user', text: faq.question };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: faq.answer };
      setMessages(prev => [...prev, botMsg]);
    }, 450);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const userMsg = { id: Date.now(), sender: 'user', text: userText };
    setInputValue('');
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Answer matching logic
    const lower = userText.toLowerCase();
    let reply = "Thank you for your question. Uzair Sharif Enterprises manufactures custom garments strictly to buyer specifications with selected manufacturing partners in Pakistan. For an exact review of your requirements, please submit a quotation request or contact our sales team.";

    const matchedFaq = FAQ_DATA.find(f => 
      lower.includes(f.question.toLowerCase().replace('?', '')) ||
      (lower.includes('ready') && f.id === 1) ||
      (lower.includes('stock') && f.id === 1) ||
      (lower.includes('custom') && f.id === 2) ||
      (lower.includes('moq') && f.id === 3) ||
      (lower.includes('minimum') && f.id === 3) ||
      (lower.includes('design') && f.id === 4) ||
      (lower.includes('private label') && f.id === 4) ||
      (lower.includes('sample') && f.id === 5) ||
      (lower.includes('manufactur') && f.id === 6) ||
      (lower.includes('factory') && f.id === 6) ||
      (lower.includes('export') && f.id === 7) ||
      (lower.includes('country') && f.id === 7) ||
      (lower.includes('payment') && f.id === 8) ||
      (lower.includes('ship') && f.id === 9) ||
      (lower.includes('fob') && f.id === 9) ||
      (lower.includes('cif') && f.id === 9) ||
      (lower.includes('quality') && f.id === 10) ||
      (lower.includes('compliance') && f.id === 10)
    );

    if (matchedFaq) {
      reply = matchedFaq.answer;
    } else if (lower.includes('hello') || lower.includes('hi')) {
      reply = "Hello! Are you looking for custom t-shirts, hoodies, denim, sportswear or other custom apparel from Pakistan? Feel free to click any common buyer question below or send your tech pack.";
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
      reply = "Because we do not sell ready-made stock, unit pricing depends on your exact fabric GSM, order quantity, embellishments (printing/embroidery), and destination Incoterms. Click 'Request a Quote' to receive an itemized quotation!";
    } else if (lower.includes('whatsapp') || lower.includes('call') || lower.includes('phone')) {
      reply = `You can reach our export desk directly on WhatsApp at ${COMPANY_DETAILS.whatsappRaw} (+92 328 1672473) or email ${COMPANY_DETAILS.emailInfo}.`;
    }

    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: reply };
      setMessages(prev => [...prev, botMsg]);
    }, 550);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(COMPANY_DETAILS.emailInfo);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 95
    }}>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: '#090d16',
            color: '#ffffff',
            border: '2px solid #10b981',
            borderRadius: '50px',
            padding: '0.8rem 1.35rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            fontWeight: '700',
            fontSize: '0.9rem',
            transition: 'transform 0.2s ease'
          }}
          className="fade-in"
        >
          <Bot size={22} color="#10b981" />
          <span>B2B Assistant</span>
          <span style={{ 
            backgroundColor: '#10b981', 
            color: '#090d16', 
            fontSize: '0.68rem', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '10px',
            fontWeight: '800' 
          }}>
            10 FAQs
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: '390px',
          maxWidth: 'calc(100vw - 32px)',
          height: '560px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1px solid #cbd5e1',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }} className="fade-in">
          
          {/* Top Bar */}
          <div style={{
            backgroundColor: '#090d16',
            color: '#ffffff',
            padding: '1.1rem 1.35rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #1e293b'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(16, 185, 129, 0.2)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid rgba(16, 185, 129, 0.4)'
              }}>
                <Bot size={20} color="#10b981" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Uzair Sharif Enterprises</div>
                <div style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                  Pakistan Export Assistant Online
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick FAQ Chips Carousel */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            padding: '0.65rem 0.85rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
            gap: '0.45rem'
          }}>
            {FAQ_DATA.map(faq => (
              <button
                key={faq.id}
                onClick={() => handleSendFaq(faq)}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.15s ease'
                }}
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#ffffff'
          }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '0.6rem'
                }}
              >
                {msg.sender === 'bot' && (
                  <div style={{ 
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    backgroundColor: '#ecfdf5', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    border: '1px solid #a7f3d0'
                  }}>
                    <Bot size={15} color="#059669" />
                  </div>
                )}
                
                <div style={{
                  maxWidth: '82%',
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  fontSize: '0.86rem',
                  lineHeight: '1.6',
                  backgroundColor: msg.sender === 'user' ? '#090d16' : '#f1f5f9',
                  color: msg.sender === 'user' ? '#ffffff' : '#1e293b',
                  borderBottomRightRadius: msg.sender === 'user' ? '2px' : '14px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '14px',
                  boxShadow: msg.sender === 'user' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={15} color="#059669" />
                </div>
                <div style={{ backgroundColor: '#f1f5f9', padding: '0.6rem 0.9rem', borderRadius: '12px', display: 'flex', gap: '4px' }}>
                  <span className="dot-1" style={{ width: '6px', height: '6px', backgroundColor: '#64748b', borderRadius: '50%', display: 'inline-block' }}></span>
                  <span className="dot-2" style={{ width: '6px', height: '6px', backgroundColor: '#64748b', borderRadius: '50%', display: 'inline-block' }}></span>
                  <span className="dot-3" style={{ width: '6px', height: '6px', backgroundColor: '#64748b', borderRadius: '50%', display: 'inline-block' }}></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Direct CTA Action Strip */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            padding: '0.55rem 0.85rem',
            display: 'flex',
            gap: '0.5rem'
          }}>
            <button
              onClick={() => {
                setIsOpen(false);
                openQuoteModal();
              }}
              style={{
                flex: 1,
                padding: '0.55rem',
                backgroundColor: '#059669',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem'
              }}
            >
              <FileText size={14} /> Request Quote
            </button>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '0.55rem',
                backgroundColor: '#ffffff',
                color: '#090d16',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} color="#059669" /> WhatsApp
            </a>
            <button
              onClick={handleCopyEmail}
              style={{
                padding: '0.55rem 0.75rem',
                backgroundColor: '#ffffff',
                color: '#475569',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Copy sales email"
            >
              {copiedEmail ? <Check size={14} color="#059669" /> : <Copy size={14} />}
            </button>
          </div>

          {/* User Input Form */}
          <form 
            onSubmit={handleUserSubmit}
            style={{
              display: 'flex',
              padding: '0.85rem',
              borderTop: '1px solid #e2e8f0',
              backgroundColor: '#ffffff'
            }}
          >
            <input
              type="text"
              placeholder="Ask about MOQ, fabrics, sampling..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              style={{
                flex: 1,
                padding: '0.65rem 0.95rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                marginLeft: '0.5rem',
                padding: '0.65rem 0.95rem',
                backgroundColor: '#090d16',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={15} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
