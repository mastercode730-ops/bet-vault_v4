const testimonials = [
  { name:'Rahul S.',  city:'Mumbai',    stars:5, sport:'🏏 IPL',      text:'Honestly, I was sceptical at first because I had been burned by other platforms before. But Bet Vault was genuinely different. My ID arrived in about eight minutes, and my first withdrawal came through the same evening. That had never happened with any platform I had tried before.' },
  { name:'Deepa M.', city:'Bangalore', stars:5, sport:'⚽ Football', text:'I was putting money into an online betting platform for the first time and I was quite nervous about it. The team on WhatsApp walked me through everything patiently and without any pressure. They explained how things work, answered my questions properly, and I felt safe from the start.' },
  { name:'Aryan T.', city:'Hyderabad', stars:5, sport:'🏏 T20',      text:'Fast deposits, fast withdrawals, and customer support that actually knows what it is doing. I sent a message at past one in the morning and got a proper response within a few minutes. That kind of availability is genuinely rare and it makes a real difference.' },
  { name:'Sneha P.', city:'Chennai',   stars:5, sport:'🎰 Casino',   text:'Six months in and I still have zero complaints. The platform is smooth, the bonuses work the way they say they will, and moving money in and out is simple. Exactly what I was looking for when I started looking for a reliable place to bet.' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background:'#080810', padding:'88px 0' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <span className="sec-tag">Member Stories</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
            marginBottom:'14px', letterSpacing:'-0.01em' }}>
            Real People, <span className="gold-text">Real Experiences</span>
          </h2>
          <p style={{ color:'#A09BB0', fontSize:'15px', maxWidth:'460px', margin:'0 auto',
            lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>
            Over three million members across India. Here is what some of them actually say.
          </p>
        </div>

        {/* Cards — masonry-feel grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'18px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="lux-card"
              style={{ borderRadius:'10px', padding:'28px', display:'flex', flexDirection:'column',
                gap:'16px', border:'1px solid rgba(212,175,55,0.12)', position:'relative',
                overflow:'hidden' }}>

              {/* Quote mark */}
              <div style={{ position:'absolute', top:'16px', right:'20px',
                fontFamily:"'Playfair Display',serif", fontSize:'60px', lineHeight:1,
                color:'rgba(212,175,55,0.06)', pointerEvents:'none', userSelect:'none' }}>&ldquo;</div>

              {/* Stars */}
              <div style={{ display:'flex', gap:'4px' }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color:'#D4AF37', fontSize:'15px', lineHeight:1 }}>★</span>
                ))}
              </div>

              {/* Sport tag */}
              <span style={{ alignSelf:'flex-start', background:'rgba(192,57,43,0.1)',
                border:'1px solid rgba(192,57,43,0.25)', color:'#E74C3C',
                fontSize:'11px', fontWeight:700, padding:'3px 10px', borderRadius:'3px',
                letterSpacing:'0.06em', fontFamily:"'Manrope',sans-serif" }}>{t.sport}</span>

              {/* Quote */}
              <p style={{ color:'#C0B8D0', fontSize:'14px', lineHeight:1.8, margin:0,
                fontStyle:'italic', flex:1, fontFamily:"'Manrope',sans-serif",
                position:'relative', zIndex:1 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ paddingTop:'14px', borderTop:'1px solid rgba(212,175,55,0.1)',
                display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ color:'#F5F0E8', fontWeight:700, fontSize:'14px',
                    fontFamily:"'Manrope',sans-serif" }}>{t.name}</div>
                  <div style={{ color:'#6B6880', fontSize:'12px', marginTop:'2px',
                    fontFamily:"'Manrope',sans-serif" }}>{t.city}</div>
                </div>
                <div style={{ width:'36px', height:'36px', borderRadius:'50%',
                  background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(192,57,43,0.1))',
                  border:'1px solid rgba(212,175,55,0.2)', display:'flex',
                  alignItems:'center', justifyContent:'center', fontSize:'16px' }}>
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
