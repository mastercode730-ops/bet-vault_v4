"use client";
import Link from 'next/link';
import Image from 'next/image';

const WA = 'https://wa.me/91918360750829?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const quickLinks = [
  { label:'Home',         href:'#hero'         },
  { label:'About Us',     href:'#about'        },
  { label:'Sports',       href:'#sports'       },
  { label:'How It Works', href:'#how-it-works' },
  { label:'Blog',         href:'#blog'         },
  { label:'FAQ',          href:'#faq'          },
];

const blogLinks = [
  { label:'IPL Gaming Guide 2026',     href:'/blog/ipl-gaming-guide-2026'               },
  { label:'Choosing a Safe Platform',   href:'/blog/how-to-choose-safe-gaming-platform'   },
  { label:'Top Gaming Strategies',     href:'/blog/cricket-gaming-strategies-that-work'  },
  { label:'Understanding Gaming Odds', href:'/blog/understanding-gaming-odds'            },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background:'#050508', borderTop:'1px solid rgba(212,175,55,0.12)',
      paddingTop:'64px', paddingBottom:'28px' }}>
      <style>{`
        .ft-link { color:#A09BB0; font-size:14px; cursor:pointer; background:none; border:none;
          padding:0; display:flex; align-items:center; gap:8px; text-decoration:none;
          transition:color 0.2s; font-family:'Manrope',sans-serif; }
        .ft-link:hover { color:#D4AF37 !important; }
        .ft-legal { color:#4B4860; font-size:12px; text-decoration:none;
          transition:color 0.2s; font-family:'Manrope',sans-serif; }
        .ft-legal:hover { color:#D4AF37; }
      `}</style>

      <div className="wrap">
        {/* Top grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'40px', marginBottom:'52px' }}
          id="ft-grid">

          {/* Brand col */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'18px' }}>
              <Image src="/logo.jpeg" alt="Bet Vault" width={52} height={52}
                style={{ borderRadius:'8px', objectFit:'contain', border:'1px solid rgba(212,175,55,0.3)' }} />
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'20px',
                  color:'#F5F0E8', letterSpacing:'0.04em' }}>BET VAULT</div>
                <div style={{ fontSize:'10px', color:'rgba(212,175,55,0.7)', letterSpacing:'0.2em',
                  textTransform:'uppercase', fontFamily:"'Manrope',sans-serif", fontWeight:600 }}>
                  Premium · Trusted · Fast
                </div>
              </div>
            </div>
            <p style={{ color:'#6B6880', fontSize:'14px', lineHeight:1.8, maxWidth:'320px',
              marginBottom:'22px', fontFamily:"'Manrope',sans-serif" }}>
              India&apos;s go-to service for getting a cricket Gaming ID quickly and safely. Fast setup, 
              real support, and a team that genuinely cares about your experience.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"
              style={{ padding:'11px 22px', borderRadius:'6px', fontSize:'13px',
                fontWeight:700, display:'inline-flex' }}>
              <WaIcon />&nbsp;+91 86787 56678
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color:'#D4AF37', fontWeight:700, fontSize:'12px', letterSpacing:'0.14em',
              textTransform:'uppercase', marginBottom:'18px', fontFamily:"'Manrope',sans-serif" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex',
              flexDirection:'column', gap:'12px' }}>
              <li></li>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <button className="ft-link"
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior:'smooth' })}>
                    <span style={{ color:'#C0392B', fontWeight:700, fontSize:'14px' }}>›</span> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog links */}
          <div>
            <h4 style={{ color:'#D4AF37', fontWeight:700, fontSize:'12px', letterSpacing:'0.14em',
              textTransform:'uppercase', marginBottom:'18px', fontFamily:"'Manrope',sans-serif" }}>
              Latest Articles
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex',
              flexDirection:'column', gap:'12px' }}>
              {blogLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="ft-link">
                    <span style={{ color:'#C0392B', fontWeight:700, fontSize:'14px' }}>›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color:'#D4AF37', fontWeight:700, fontSize:'12px', letterSpacing:'0.14em',
              textTransform:'uppercase', marginBottom:'18px', fontFamily:"'Manrope',sans-serif" }}>
              Contact
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'8px',
                  background:'rgba(37,211,102,0.09)', border:'1px solid rgba(37,211,102,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <WaIcon color="#25D366" />
                </div>
                <div>
                  <div style={{ color:'#F5F0E8', fontSize:'13px', fontWeight:600,
                    fontFamily:"'Manrope',sans-serif" }}>WhatsApp</div>
                  <div style={{ color:'#6B6880', fontSize:'12px',
                    fontFamily:"'Manrope',sans-serif" }}>+91 86787 56678</div>
                </div>
              </a>
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'8px',
                  background:'rgba(212,175,55,0.07)', border:'1px solid rgba(212,175,55,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="16" height="16" fill="none" stroke="#D4AF37" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ color:'#F5F0E8', fontSize:'13px', fontWeight:600,
                    fontFamily:"'Manrope',sans-serif" }}>Support Hours</div>
                  <div style={{ color:'#6B6880', fontSize:'12px',
                    fontFamily:"'Manrope',sans-serif" }}>24 / 7 / 365</div>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'8px',
                  background:'rgba(212,175,55,0.07)', border:'1px solid rgba(212,175,55,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="16" height="16" fill="none" stroke="#D4AF37" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ color:'#F5F0E8', fontSize:'13px', fontWeight:600,
                    fontFamily:"'Manrope',sans-serif" }}>Location</div>
                  <div style={{ color:'#6B6880', fontSize:'12px',
                    fontFamily:"'Manrope',sans-serif" }}>Pan-India · All States</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <style>{`
          @media(min-width:640px){ #ft-grid{grid-template-columns:1fr 1fr!important} }
          @media(min-width:1024px){ #ft-grid{grid-template-columns:2fr 1fr 1fr 1fr!important} }
        `}</style>

        {/* Disclaimer */}
        <div style={{ background:'rgba(212,175,55,0.04)', border:'1px solid rgba(212,175,55,0.15)',
          borderRadius:'8px', padding:'16px 20px', marginBottom:'28px', textAlign:'center' }}>
          <p style={{ color:'#A09BB0', fontSize:'12px', lineHeight:1.75, margin:0,
            fontFamily:"'Manrope',sans-serif" }}>
            <strong style={{ color:'#D4AF37' }}>Responsible Gambling: </strong>
            Gaming is for entertainment only. Always gamble within your means. Must be 18+ to use this platform. Please check local laws before participating.
          </p>
        </div>

        {/* Sports icons */}
        <div style={{ display:'flex', justifyContent:'center', gap:'18px', marginBottom:'22px' }}>
          {['🏏','⚽','🏀','🎾','🎰'].map((ic, i) => (
            <span key={i} style={{ fontSize:'20px', opacity:0.4 }}>{ic}</span>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(212,175,55,0.08)', paddingTop:'22px', textAlign:'center' }}>
          <p style={{ color:'#4B4860', fontSize:'12px', margin:'0 0 10px',
            fontFamily:"'Manrope',sans-serif" }}>
            © {year} Bet Vault. All rights reserved.
          </p>
          <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'18px' }}>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="ft-legal">Sitemap</a>
            <span style={{ color: '#3B3850' }}>·</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="ft-legal">Robots.txt</a>
            <span style={{ color: '#3B3850' }}>·</span>
            {['Privacy Policy','Terms & Conditions','Responsible Gaming'].map(l => (
              <a key={l} href={WA} target="_blank" rel="noopener noreferrer" className="ft-legal">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

function WaIcon({ color = '#fff' }: { color?: string }) {
  return (
    <svg width="16" height="16" fill={color} viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
