const WA = 'https://wa.me/918764465110?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

export default function IntroSection() {
  return (
    <section id="intro" style={{ background:'#080810', padding:'80px 0' }}>
      <div className="wrap" style={{ maxWidth:'860px' }}>

        {/* Two-column layout: large quote left, points right */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'48px', alignItems:'start' }}
          id="intro-grid">

          {/* Left: heading block */}
          <div>
            <span className="sec-tag">India&apos;s #1 Trusted Platform</span>
            <h2 style={{
              fontFamily:"'Playfair Display',serif", fontWeight:900,
              fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1,
              color:'#F5F0E8', marginBottom:'24px', letterSpacing:'-0.01em',
            }}>
              Your <span className="gold-text">Cricket Betting ID</span>{' '}
              — Set Up in Minutes, Not Days
            </h2>
            <p style={{ color:'#A09BB0', fontSize:'16px', lineHeight:1.8, marginBottom:'16px',
              fontFamily:"'Manrope',sans-serif" }}>
              There are millions of cricket fans in India who want to bet, but most platforms make it
              so complicated that people give up before they even start. Bet Vault exists to fix that.
              We get your ID set up fast, handle everything over WhatsApp, and make sure your first
              experience is smooth — not stressful.
            </p>
            <p style={{ color:'#A09BB0', fontSize:'16px', lineHeight:1.8, marginBottom:'36px',
              fontFamily:"'Manrope',sans-serif" }}>
              Whether you are chasing IPL action, international T20s, or want to explore live casino
              games, your{' '}
              <strong style={{ color:'#D4AF37' }}>Bet Vault ID</strong>{' '}
              gives you one login that opens everything — backed by a team that is genuinely there when you need them.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold"
              style={{ padding:'15px 36px', borderRadius:'6px', fontSize:'15px',
                fontWeight:800, letterSpacing:'0.05em', textTransform:'uppercase' }}>
              <WaIcon /> Get My ID Now
            </a>
          </div>

          {/* Right: three highlight points */}
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { num:'01', title:'Instant WhatsApp Setup', body:"Just send us a message and we sort everything. No lengthy sign-up forms, no document uploads, no waiting queues. Your ID arrives in minutes." },
              { num:'02', title:'Real People, Real Support', body:"Every message you send is read by a real team member. We don't use bots or ticket systems. You get an actual response from someone who can actually help." },
              { num:'03', title:'Safe From Start to Finish', body:"Bank-level encryption, trusted payment gateways, and a track record of 3 million+ Indian bettors who trust us with their money every day." },
            ].map((item, i) => (
              <div key={i} style={{ display:'flex', gap:'18px', padding:'22px',
                background:'#0F0F1C', borderRadius:'8px', border:'1px solid rgba(212,175,55,0.12)',
                position:'relative', overflow:'hidden' }}>
                <div style={{ flexShrink:0 }}>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:'36px',
                    color:'rgba(212,175,55,0.12)', lineHeight:1 }}>{item.num}</span>
                </div>
                <div>
                  <h3 style={{ color:'#F5F0E8', fontWeight:700, fontSize:'15px', margin:'0 0 8px',
                    fontFamily:"'Manrope',sans-serif" }}>{item.title}</h3>
                  <p style={{ color:'#A09BB0', fontSize:'14px', lineHeight:1.7, margin:0,
                    fontFamily:"'Manrope',sans-serif" }}>{item.body}</p>
                </div>
                {/* Left accent */}
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'3px',
                  background:'linear-gradient(to bottom, #D4AF37, #C0392B)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){#intro-grid{grid-template-columns:1fr 1fr!important;max-width:100%!important;}}`}</style>
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
