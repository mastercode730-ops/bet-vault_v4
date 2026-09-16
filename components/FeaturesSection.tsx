import Image from 'next/image';

const WA = 'https://wa.me/918360750829?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

const features = [
  { img:'/trusted_platform.png', title:'100% Trusted',  desc:'Every account goes through strict security checks. We have been doing this since 2023 and our track record speaks clearly.' },
  { img:'/users_milestone.png',  title:'3 Million+ Users', desc:'Over three million Indian bettors have chosen Bet Vault. That number keeps growing because we deliver on what we promise.' },
  { img:'/instant_id.png',       title:'ID in Minutes',    desc:'No paperwork, no waiting days. Your Gaming ID is created, verified and sent to your WhatsApp within minutes of reaching out.' },
  { img:'/support_247.png',      title:'24/7 Real Support', desc:'Message us any time of day or night and get a reply from an actual person — not a bot — who can genuinely sort things out.' },
  { img:'/secure_payments.png',  title:'Secure Payments',   desc:'Every payment moves through encrypted, bank-grade rails. UPI, Net Banking, all the major Indian wallets — your money is safe.' },
  { img:'/bonus_offers.png',     title:'Exclusive Bonuses', desc:'Start with a welcome bonus that actually makes sense. More to bet with right from day one, no impossible conditions attached.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background:'#0F0F1C', padding:'88px 0' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <span className="sec-tag">Why Bettors Choose Us</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
            marginBottom:'14px', letterSpacing:'-0.01em' }}>
            Built Around What <span className="gold-text">Bettors Actually Need</span>
          </h2>
          <p style={{ color:'#A09BB0', fontSize:'15px', maxWidth:'480px', margin:'0 auto',
            lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>
            Not flashy promises — real features that genuinely make your experience better from day one.
          </p>
        </div>

        {/* Feature grid — 3 columns on desktop, magazine layout */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
          gap:'20px', marginBottom:'56px' }}>
          {features.map((f, i) => (
            <a key={i} href={WA} target="_blank" rel="noopener noreferrer" className="lux-card"
              style={{ display:'flex', alignItems:'flex-start', gap:'18px',
                padding:'28px 24px', borderRadius:'10px', textDecoration:'none',
                border:'1px solid rgba(212,175,55,0.12)' }}>
              {/* Icon */}
              <div style={{ width:'60px', height:'60px', position:'relative', flexShrink:0,
                background:'rgba(212,175,55,0.06)', borderRadius:'8px', padding:'8px',
                border:'1px solid rgba(212,175,55,0.15)' }}>
                <Image src={f.img} alt={f.title} fill sizes="60px" style={{ objectFit:'contain' }} />
              </div>
              {/* Text */}
              <div>
                <h3 style={{ color:'#D4AF37', fontWeight:700, fontSize:'15px',
                  margin:'0 0 8px', fontFamily:"'Manrope',sans-serif" }}>{f.title}</h3>
                <p style={{ color:'#A09BB0', fontSize:'13px', lineHeight:1.7,
                  margin:0, fontFamily:"'Manrope',sans-serif" }}>{f.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'14px' }}
          id="feat-stats">
          {[
            { v:'3M+',    l:'Active Members'   },
            { v:'< 5min', l:'ID Activation'    },
            { v:'24/7',   l:'Live Support'     },
            { v:'100%',   l:'Secure Platform'  },
          ].map((s, i) => (
            <div key={i} style={{ textAlign:'center', padding:'24px 12px', borderRadius:'8px',
              background:'rgba(212,175,55,0.04)', border:'1px solid rgba(212,175,55,0.15)' }}>
              <div className="gold-text" style={{ fontFamily:"'Playfair Display',serif",
                fontWeight:900, fontSize:'clamp(1.6rem,4vw,2.4rem)', lineHeight:1 }}>{s.v}</div>
              <div style={{ color:'#6B6880', fontSize:'12px', marginTop:'6px', letterSpacing:'0.05em',
                fontFamily:"'Manrope',sans-serif" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <style>{`@media(min-width:640px){#feat-stats{grid-template-columns:repeat(4,1fr)!important}}`}</style>

      </div>
    </section>
  );
}
