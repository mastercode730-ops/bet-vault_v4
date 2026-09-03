'use client';
import { useState } from 'react';

const WA = 'https://wa.me/918360750829?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const faqs = [
  { q: "What is BetVault?", a: "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information." },
  { q: "How does a BetVault ID work?", a: "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process." },
  { q: "How can I access BetVault?", a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site." },
  { q: "What sports are available on BetVault?", a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability." },
  { q: "Does BetVault provide live sports information?", a: "Check the site's current sports section for any live-event information and the terms that apply to its use." },
  { q: "How can I get help with my BetVault account?", a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: "How do I find BetVault login information?", a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: "What payment options are supported?", a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: "What should I do if I have trouble accessing my account?", a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: "Where can I find the latest BetVault updates?", a: "Refer to BetVault's current website information and terms for the most accurate answer." }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background:'#0F0F1C', padding:'88px 0' }}>
      <div className="wrap" style={{ maxWidth:'820px' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <span className="sec-tag">Got Questions?</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
            marginBottom:'14px', letterSpacing:'-0.01em' }}>
            Straight Answers to the{' '}
            <span className="gold-text">Questions We Hear Most</span>
          </h2>
          <p style={{ color:'#A09BB0', fontSize:'15px', maxWidth:'460px', margin:'0 auto',
            lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>
            No corporate speak, no vague non-answers. Just clear, honest information.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width:'100%', display:'flex', alignItems:'center',
                  justifyContent:'space-between', gap:'16px', padding:'20px 22px',
                  background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                <span style={{ color: open === i ? '#D4AF37' : '#F5F0E8', fontWeight:600,
                  fontSize:'14px', lineHeight:1.45, transition:'color 0.2s', flex:1,
                  fontFamily:"'Manrope',sans-serif" }}>
                  {faq.q}
                </span>
                <span style={{ flexShrink:0, width:'28px', height:'28px', borderRadius:'4px',
                  border:'1px solid rgba(212,175,55,0.3)',
                  background: open === i ? 'rgba(212,175,55,0.12)' : 'transparent',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#D4AF37', transition:'transform 0.3s, background 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div style={{ padding:'0 22px 20px' }}>
                  <div style={{ height:'1px', background:'rgba(212,175,55,0.12)', marginBottom:'16px' }} />
                  <p style={{ color:'#A09BB0', fontSize:'14px', lineHeight:1.85, margin:0,
                    fontFamily:"'Manrope',sans-serif" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign:'center', marginTop:'48px' }}>
          <p style={{ color:'#6B6880', fontSize:'14px', marginBottom:'18px',
            fontFamily:"'Manrope',sans-serif" }}>
            Still have a question? We are one WhatsApp message away.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"
            style={{ padding:'14px 30px', borderRadius:'6px', fontSize:'14px', fontWeight:700 }}>
            <WaIcon /> Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
