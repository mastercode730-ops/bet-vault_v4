import Image from 'next/image';

const WA = 'https://wa.me/8764465110?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

export default function AboutSection() {
  return (
    <section id="about" style={{ background:'#080810', padding:'88px 0' }}>
      <div className="wrap">

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'48px', alignItems:'start' }}
          id="about-layout">

          {/* Left — story text */}
          <div>
            <span className="sec-tag">About Bet Vault</span>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
              fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
              marginBottom:'22px', letterSpacing:'-0.01em' }}>
              We Started Because{' '}
              <span className="crimson-text">We Were Frustrated Too</span>
            </h2>

            <p style={{ color:'#A09BB0', fontSize:'15px', lineHeight:1.85, marginBottom:'16px',
              maxWidth:'540px', fontFamily:"'Manrope',sans-serif" }}>
              Unreliable platforms, customer support that never actually helps, withdrawal requests
              sitting for days — we went through all of it before we decided to build something
              better. We knew the experience did not have to be this painful.
            </p>
            <p style={{ color:'#A09BB0', fontSize:'15px', lineHeight:1.85, marginBottom:'16px',
              maxWidth:'540px', fontFamily:"'Manrope',sans-serif" }}>
              So we built what we ourselves would want to use. A platform run by people who genuinely
              love cricket, understand what Indian bettors need, and care about making every part of
              the experience feel effortless rather than frustrating.
            </p>
            <p style={{ color:'#A09BB0', fontSize:'15px', lineHeight:1.85, marginBottom:'36px',
              maxWidth:'540px', fontFamily:"'Manrope',sans-serif" }}>
              Today, over three million people across India trust us with their IDs and their money.
              That trust is not something we take lightly — and we earn it back every single day.
            </p>

            {/* Feature pills */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'12px',
              maxWidth:'540px', marginBottom:'36px' }}>
              {[
                { icon:'🔐', t:'Bank-Grade Security',  d:'Every transaction encrypted'   },
                { icon:'⚡', t:'Ultra Fast Setup',     d:'ID delivered in minutes'        },
                { icon:'🤝', t:'Zero Hidden Charges',  d:'Transparent every step of way' },
                { icon:'🇮🇳', t:'Pan-India Service',  d:'Available across all states'   },
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'12px',
                  padding:'16px', borderRadius:'8px', background:'#0F0F1C',
                  border:'1px solid rgba(212,175,55,0.12)' }}>
                  <span style={{ fontSize:'1.4rem', lineHeight:1, flexShrink:0 }}>{item.icon}</span>
                  <div>
                    <div style={{ color:'#F5F0E8', fontWeight:700, fontSize:'13px',
                      fontFamily:"'Manrope',sans-serif" }}>{item.t}</div>
                    <div style={{ color:'#6B6880', fontSize:'12px', marginTop:'3px',
                      fontFamily:"'Manrope',sans-serif" }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold"
              style={{ padding:'14px 32px', borderRadius:'6px', fontSize:'14px',
                fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em' }}>
              Get Started Today →
            </a>
          </div>

          {/* Right — stats panel */}
          <div style={{ background:'#0F0F1C', borderRadius:'12px',
            border:'1px solid rgba(212,175,55,0.2)', padding:'32px',
            display:'flex', flexDirection:'column', gap:'14px' }}>

            {/* Top label */}
            <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:'18px',
              color:'#F5F0E8', marginBottom:'4px', textAlign:'center', letterSpacing:'0.02em' }}>
              Platform At a Glance
            </div>
            <div className="divider" style={{ marginBottom:'8px' }} />

            {/* Stats grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              {[
                { v:'2023',     l:'Founded'          },
                { v:'3M+',      l:'Active Users'     },
                { v:'< 5 min',  l:'Avg. ID Setup'    },
                { v:'24/7',     l:'Support Hours'    },
                { v:'10+',      l:'Payment Methods'  },
                { v:'50+',      l:'Sport Markets'    },
              ].map((s, i) => (
                <div key={i} style={{ textAlign:'center', padding:'20px 10px', borderRadius:'8px',
                  background:'rgba(212,175,55,0.04)', border:'1px solid rgba(212,175,55,0.1)' }}>
                  <div className="gold-text" style={{ fontFamily:"'Playfair Display',serif",
                    fontWeight:900, fontSize:'clamp(1.1rem,3vw,1.6rem)', lineHeight:1 }}>{s.v}</div>
                  <div style={{ color:'#6B6880', fontSize:'11px', marginTop:'5px',
                    letterSpacing:'0.05em', fontFamily:"'Manrope',sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Live status */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center',
              padding:'16px', borderRadius:'8px',
              background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.18)', gap:'6px',
              marginTop:'4px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ width:'9px', height:'9px', borderRadius:'50%', background:'#10B981',
                  display:'inline-block', boxShadow:'0 0 10px #10B981' }} />
                <span style={{ color:'#10B981', fontWeight:700, fontSize:'13px',
                  fontFamily:"'Manrope',sans-serif" }}>Platform Status: Live</span>
              </div>
              <span style={{ color:'#6B6880', fontSize:'12px', fontFamily:"'Manrope',sans-serif" }}>
                All systems running. Ready for your first bet.
              </span>
            </div>
          </div>
        </div>

        <style>{`@media(min-width:900px){#about-layout{grid-template-columns:1fr 400px!important}}`}</style>
      </div>
    </section>
  );
}
