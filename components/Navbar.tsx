'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const WA = 'https://wa.me/918764465110?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const navLinks = [
  { label: 'Home',       href: '#hero'         },
  { label: 'About',      href: '#about'        },
  { label: 'Sports',     href: '#sports'       },
  { label: 'Blog',       href: '#blog'         },
  { label: 'FAQ',        href: '#faq'          },
  { label: 'Contact',    href: '#footer'       },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <style>{`
        @media(max-width:767px){ .mob-drawer{display:block!important} .ham-btn{display:flex!important} }
        .mob-drawer{ display:none; }
        .ham-btn{ display:none; }
        .mob-row{ display:flex; width:100%; text-align:left; background:none; border:none; cursor:pointer;
          color:#A09BB0; padding:14px 24px; font-size:13px; font-weight:600; letter-spacing:0.08em;
          text-transform:uppercase; border-bottom:1px solid rgba(212,175,55,0.06);
          transition:color 0.2s, background 0.2s; font-family:'Manrope',sans-serif;
          align-items:center; gap:10px; }
        .mob-row:hover{ color:#D4AF37; background:rgba(212,175,55,0.04); }
      `}</style>

      {/* ── Top accent bar ── */}
      <div style={{ position:'fixed', top:0, left:0, right:0, zIndex:101, height:'2px',
        background:'linear-gradient(90deg,#8B0000,#C0392B,#D4AF37,#C0392B,#8B0000)' }} />

      <nav style={{
        position: 'fixed', top: '2px', left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(8,8,16,0.98)' : 'rgba(8,8,16,0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212,175,55,0.12)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
      }}>
        <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'68px' }}>

          {/* ── Logo ── */}
          <button onClick={() => scrollTo('#hero')}
            style={{ display:'flex', alignItems:'center', gap:'14px', background:'none', border:'none', cursor:'pointer', padding:0 }}>
            <div style={{ position:'relative', width:'46px', height:'46px', borderRadius:'8px', overflow:'hidden',
              border:'1px solid rgba(212,175,55,0.35)', flexShrink:0 }}>
              <Image src="/logo.jpeg" alt="Bet Vault" fill sizes="46px" style={{ objectFit:'contain' }} priority />
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'2px', lineHeight:1 }}>
              <span style={{ fontFamily:"'Playfair Display', serif", fontWeight:800, fontSize:'18px',
                color:'#F5F0E8', letterSpacing:'0.04em' }}>
                BET <span style={{ color:'#D4AF37' }}>VAULT</span>
              </span>
              <span style={{ fontSize:'9px', color:'rgba(212,175,55,0.7)', letterSpacing:'0.2em',
                textTransform:'uppercase', fontFamily:"'Manrope',sans-serif", fontWeight:600 }}>
                Premium · Trusted · Fast
              </span>
            </div>
          </button>

          {/* ── Desktop Links ── */}
          <div className="hide-mob" style={{ display:'flex', alignItems:'center', gap:'32px' }}>
            {navLinks.map(l => (
              <button key={l.label} className={`nav-item${active === l.href ? ' active' : ''}`}
                onClick={() => { scrollTo(l.href); setActive(l.href); }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* ── Right side ── */}
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            {/* Live badge */}
            <div className="hide-mob" style={{ display:'flex', alignItems:'center', gap:'6px', padding:'5px 12px',
              borderRadius:'4px', background:'rgba(16,185,129,0.07)', border:'1px solid rgba(16,185,129,0.2)' }}>
              <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#10B981',
                display:'block', animation:'blink 1.5s infinite', boxShadow:'0 0 6px #10B981' }} />
              <span style={{ color:'#10B981', fontSize:'11px', fontWeight:700, letterSpacing:'0.06em',
                fontFamily:"'Manrope',sans-serif" }}>LIVE</span>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"
              style={{ padding:'9px 18px', borderRadius:'6px', fontSize:'13px', fontWeight:700 }}>
              <WaIcon size={15} />
              <span>+91 87644 65110</span>
            </a>

            {/* Hamburger */}
            <button className="ham-btn" onClick={() => setOpen(!open)}
              style={{ alignItems:'center', justifyContent:'center', width:'40px', height:'40px',
                borderRadius:'6px', background:'rgba(212,175,55,0.08)', border:'1px solid rgba(212,175,55,0.25)',
                cursor:'pointer', color:'#D4AF37', flexShrink:0 }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {open
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="mob-drawer" style={{ background:'#0A0A16', borderTop:'1px solid rgba(212,175,55,0.1)' }}>
            {navLinks.map(l => (
              <button key={l.label} className="mob-row"
                onClick={() => { scrollTo(l.href); setOpen(false); setActive(l.href); }}>
                <span style={{ color:'#D4AF37', fontWeight:700, fontSize:'16px' }}>›</span> {l.label}
              </button>
            ))}
            <div style={{ padding:'14px 20px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"
                style={{ width:'100%', justifyContent:'center', padding:'14px', borderRadius:'6px', fontSize:'14px' }}>
                <WaIcon size={18} /> WhatsApp +91 87644 65110
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa pulse-wa"
        style={{ position:'fixed', bottom:'24px', right:'18px', zIndex:99, padding:'12px 18px',
          borderRadius:'999px', fontSize:'13px', fontWeight:700, gap:'8px' }}>
        <WaIcon size={18} />
        <span id="float-cta" style={{ display:'none' }}>Get Your ID</span>
      </a>
      <style>{`@media(min-width:480px){#float-cta{display:inline!important}}`}</style>
    </>
  );
}

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
