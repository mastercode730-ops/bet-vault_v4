'use client';

const WA = 'https://wa.me/918764465110?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const tickers = [
  '🏏 Live Cricket Betting', '⚡ ID Ready in 5 Minutes', '🔐 Bank-Level Encryption',
  '💰 Same-Day Withdrawals', '🎰 Live Casino Games', '⚽ Football Markets', '🏀 Basketball',
  '🎾 Tennis Betting', '🏆 IPL 2026 Action', '📱 24/7 WhatsApp Support',
];

export default function HeroSection() {
  return (
    <section id="hero" style={{ paddingTop: '70px', background: '#080810' }}>

      {/* ── Main Banner ── */}
      <div style={{
        position: 'relative',
        minHeight: 'clamp(320px, 58vw, 560px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050508 0%, #0F0510 35%, #1A0808 70%, #080810 100%)',
      }}>

        {/* Diagonal stripe pattern */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none', opacity:0.04,
          backgroundImage:`repeating-linear-gradient(
            45deg,
            #D4AF37 0px, #D4AF37 1px,
            transparent 1px, transparent 40px
          )`,
        }} />

        {/* Left glow */}
        <div style={{
          position:'absolute', top:'-15%', left:'-8%',
          width:'clamp(280px, 45vw, 560px)', height:'clamp(280px, 45vw, 560px)',
          borderRadius:'50%',
          background:'radial-gradient(circle, rgba(192,57,43,0.15) 0%, transparent 68%)',
          pointerEvents:'none',
        }} />

        {/* Right glow */}
        <div style={{
          position:'absolute', bottom:'-20%', right:'0%',
          width:'clamp(220px, 35vw, 440px)', height:'clamp(220px, 35vw, 440px)',
          borderRadius:'50%',
          background:'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 65%)',
          pointerEvents:'none',
        }} />

        {/* Big ghost emoji right */}
        <div style={{
          position:'absolute', right:'clamp(10px,5vw,60px)', top:'50%', transform:'translateY(-50%)',
          opacity:0.07, pointerEvents:'none', fontSize:'clamp(120px,22vw,260px)', lineHeight:1, userSelect:'none',
        }}>🏏</div>

        {/* Subtle vignette overlay */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(5,5,8,0.6) 100%)',
        }} />

        {/* ── Content ── */}
        <div className="wrap" style={{ position:'relative', zIndex:2, padding:'clamp(40px,6vw,72px) 20px' }}>
          <div style={{ maxWidth:'680px' }}>

            {/* Badge */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'6px 16px',
              borderRadius:'4px', border:'1px solid rgba(192,57,43,0.4)', background:'rgba(192,57,43,0.07)',
              marginBottom:'24px' }}>
              <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#10B981',
                boxShadow:'0 0 10px #10B981', flexShrink:0, animation:'blink 1.5s infinite' }} />
              <span style={{ color:'#E74C3C', fontSize:'11px', fontWeight:800, letterSpacing:'0.14em',
                textTransform:'uppercase', fontFamily:"'Manrope',sans-serif" }}>
                India&apos;s #1 Trusted Betting Platform
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily:"'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 6vw, 4.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              margin: '0 0 20px',
              color: '#F5F0E8',
            }}>
              Bet Smarter.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F0CC5C 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Win Bigger.</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #C0392B 0%, #E74C3C 60%, #C0392B 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Live Today.</span>
            </h1>

            {/* Subtext */}
            <p style={{ color:'#A09BB0', fontSize:'clamp(14px,2.5vw,17px)', lineHeight:1.75,
              marginBottom:'32px', maxWidth:'520px', fontFamily:"'Manrope',sans-serif" }}>
              Get your verified cricket betting ID delivered straight to your WhatsApp in under 5 minutes.
              Live markets, IPL action, instant payouts — managed by people who actually care.
            </p>

            {/* CTAs */}
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold"
                style={{ padding:'clamp(13px,2vw,17px) clamp(24px,3vw,36px)', borderRadius:'6px',
                  fontSize:'clamp(13px,2vw,15px)', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                <WaIcon /> Get My Betting ID
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline-gold"
                style={{ padding:'clamp(13px,2vw,17px) clamp(20px,3vw,28px)', borderRadius:'6px',
                  fontSize:'clamp(13px,2vw,15px)' }}>
                How It Works →
              </a>
            </div>

            {/* Trust chips */}
            <div style={{ display:'flex', gap:'20px', flexWrap:'wrap', marginTop:'28px' }}>
              {['✅ 3M+ Members','⚡ 5 Min Setup','🔐 Bank-Level Secure'].map((chip, i) => (
                <span key={i} style={{ color:'#6B6880', fontSize:'12px', fontWeight:600,
                  display:'flex', alignItems:'center', gap:'4px', fontFamily:"'Manrope',sans-serif" }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'90px',
          background:'linear-gradient(to bottom, transparent, #080810)', pointerEvents:'none' }} />
      </div>

      {/* ── Crimson Ticker ── */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...tickers, ...tickers].map((item, i) => (
            <span key={i} style={{ color:'#fff', fontWeight:700, fontSize:'12px', letterSpacing:'0.04em',
              margin:'0 28px', display:'inline-flex', alignItems:'center', gap:'6px',
              fontFamily:"'Manrope',sans-serif" }}>
              {item}<span style={{ color:'rgba(255,255,255,0.25)', marginLeft:'10px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div style={{ background:'rgba(212,175,55,0.03)', borderBottom:'1px solid rgba(212,175,55,0.1)' }}>
        <div className="wrap">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', padding:'18px 0' }}>
            {[
              { v:'3M+',    l:'Active Bettors'  },
              { v:'< 5min', l:'ID Activation'   },
              { v:'24/7',   l:'Live Support'    },
              { v:'100%',   l:'Secure Platform' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign:'center', padding:'8px 4px',
                borderRight: i < 3 ? '1px solid rgba(212,175,55,0.08)' : 'none' }}>
                <div className="gold-text" style={{
                  fontFamily:"'Playfair Display',serif", fontWeight:900,
                  fontSize:'clamp(1rem,3vw,1.5rem)', lineHeight:1 }}>{s.v}</div>
                <div style={{ color:'#6B6880', fontSize:'clamp(9px,1.8vw,11px)',
                  marginTop:'4px', fontFamily:"'Manrope',sans-serif" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
