const WA = 'https://wa.me/8764465110?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const steps = [
  { n:'01', icon:'💬', title:'Message Us on WhatsApp', desc:'Send us a quick hello. No forms to fill, no queues to wait in — just a direct message and our team picks it up almost instantly.' },
  { n:'02', icon:'📋', title:'Share a Few Basic Details', desc:'We need just a couple of things from you — your name, the platform you prefer, and your deposit amount. That is genuinely all.' },
  { n:'03', icon:'✅', title:'ID Created and Delivered', desc:'We handle the setup and verification. Your login credentials come straight to your WhatsApp, clean and ready to use.' },
  { n:'04', icon:'🏏', title:'Start Betting and Winning', desc:'Fund your account with UPI, pick up your welcome bonus, and place your first bet. The action starts right here.' },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background:'#080810', padding:'88px 0' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <span className="sec-tag">Four Simple Steps</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
            marginBottom:'14px', letterSpacing:'-0.01em' }}>
            From Zero to <span className="crimson-text">Betting in Under 5 Minutes</span>
          </h2>
          <p style={{ color:'#A09BB0', fontSize:'15px', maxWidth:'460px', margin:'0 auto',
            lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>
            We stripped out everything complicated. Here is the entire process, start to finish.
          </p>
        </div>

        {/* Steps — horizontal timeline layout */}
        <div style={{ position:'relative', marginBottom:'52px' }}>
          {/* Connecting line (desktop only) */}
          <div id="timeline-line" style={{ display:'none', position:'absolute', top:'52px', left:'12.5%',
            right:'12.5%', height:'2px',
            background:'linear-gradient(90deg,#C0392B,#D4AF37,#C0392B)', opacity:0.3 }} />

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'20px' }}
            id="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="lux-card"
                style={{ borderRadius:'10px', padding:'32px 22px', display:'flex',
                  flexDirection:'column', alignItems:'center', textAlign:'center', gap:'14px',
                  position:'relative', border:'1px solid rgba(212,175,55,0.12)' }}>

                {/* Step number */}
                <div style={{ position:'absolute', top:'14px', right:'16px',
                  fontFamily:"'Playfair Display',serif", fontWeight:900,
                  fontSize:'28px', color:'rgba(212,175,55,0.1)', lineHeight:1 }}>{s.n}</div>

                {/* Icon circle */}
                <div style={{ width:'68px', height:'68px', borderRadius:'50%',
                  background:'linear-gradient(135deg,rgba(192,57,43,0.12),rgba(212,175,55,0.08))',
                  border:'1px solid rgba(212,175,55,0.2)', display:'flex', alignItems:'center',
                  justifyContent:'center', fontSize:'1.9rem', flexShrink:0 }}>
                  {s.icon}
                </div>

                <h3 style={{ color:'#F5F0E8', fontWeight:700, fontSize:'15px', margin:0,
                  fontFamily:"'Manrope',sans-serif", lineHeight:1.35 }}>{s.title}</h3>
                <p style={{ color:'#A09BB0', fontSize:'13px', lineHeight:1.7, margin:0,
                  fontFamily:"'Manrope',sans-serif" }}>{s.desc}</p>

                {/* Bottom accent */}
                <div style={{ width:'40px', height:'2px', borderRadius:'2px',
                  background:`linear-gradient(90deg,${i%2===0?'#C0392B,#E74C3C':'#D4AF37,#F0CC5C'})` }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(min-width:640px){#timeline-line{display:block!important}}
          @media(min-width:500px){#steps-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(min-width:900px){#steps-grid{grid-template-columns:repeat(4,1fr)!important}}
        `}</style>

        {/* CTA */}
        <div style={{ textAlign:'center' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa"
            style={{ padding:'15px 38px', borderRadius:'6px', fontSize:'15px', fontWeight:700 }}>
            <WaIcon /> Start Now — It Takes 5 Minutes
          </a>
        </div>

      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
