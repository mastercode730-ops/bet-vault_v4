'use client';
import { blogPosts } from '@/lib/blogData';

export default function BlogSection() {
  return (
    <section id="blog" style={{ background:'#0F0F1C', padding:'88px 0' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <span className="sec-tag">Betting Knowledge Hub</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:'clamp(1.6rem,3.5vw,2.6rem)', color:'#F5F0E8', lineHeight:1.15,
            marginBottom:'14px', letterSpacing:'-0.01em' }}>
            Learn Before You <span className="gold-text">Bet Big</span>
          </h2>
          <p style={{ color:'#A09BB0', fontSize:'15px', maxWidth:'480px', margin:'0 auto',
            lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>
            Practical guides and real insights written for Indian bettors — no unnecessary jargon, 
            no padding, just information that is actually useful.
          </p>
        </div>

        {/* Magazine-style grid: 1 large + 3 small */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'20px' }} id="blog-layout">

          {/* Featured post — large card */}
          <a href={`/blog/${blogPosts[0].slug}`} target="_blank" rel="noopener noreferrer"
            className="lux-card"
            style={{ borderRadius:'12px', overflow:'hidden', textDecoration:'none', display:'block',
              border:'1px solid rgba(212,175,55,0.2)', position:'relative' }}>
            {/* Top gold bar */}
            <div style={{ height:'4px', background:'linear-gradient(90deg,#D4AF37,#F0CC5C,#D4AF37)' }} />
            <div style={{ padding:'36px 32px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px',
                flexWrap:'wrap' }}>
                <span className="blog-chip">{blogPosts[0].tag}</span>
                <span style={{ color:'#4B4860', fontSize:'12px', fontFamily:"'Manrope',sans-serif" }}>
                  {blogPosts[0].date} · {blogPosts[0].readTime}
                </span>
                <span style={{ background:'rgba(212,175,55,0.12)', border:'1px solid rgba(212,175,55,0.3)',
                  color:'#D4AF37', fontSize:'10px', fontWeight:800, padding:'2px 10px', borderRadius:'3px',
                  letterSpacing:'0.1em' }}>FEATURED</span>
              </div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:800,
                fontSize:'clamp(1.2rem,2.5vw,1.7rem)', color:'#F5F0E8', lineHeight:1.25,
                margin:'0 0 14px', maxWidth:'600px' }}>{blogPosts[0].title}</h3>
              <p style={{ color:'#A09BB0', fontSize:'15px', lineHeight:1.75, margin:'0 0 24px',
                maxWidth:'580px', fontFamily:"'Manrope',sans-serif" }}>{blogPosts[0].excerpt}</p>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px',
                color:'#D4AF37', fontWeight:700, fontSize:'14px',
                fontFamily:"'Manrope',sans-serif", borderBottom:'1px solid rgba(212,175,55,0.3)',
                paddingBottom:'2px' }}>
                Read Full Article
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
            </div>
          </a>

          {/* 3 smaller cards */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'16px' }} id="blog-small-grid">
            {blogPosts.slice(1).map((post, i) => (
              <a key={i} href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                className="lux-card"
                style={{ borderRadius:'10px', overflow:'hidden', textDecoration:'none', display:'block',
                  border:'1px solid rgba(212,175,55,0.12)' }}>
                {/* Side accent */}
                <div style={{ height:'3px',
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg,#C0392B,#E74C3C)'
                    : 'linear-gradient(90deg,#D4AF37,#F0CC5C)' }} />
                <div style={{ padding:'22px 24px', display:'flex', flexDirection:'column', gap:'10px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap' }}>
                    <span className="blog-chip">{post.tag}</span>
                    <span style={{ color:'#4B4860', fontSize:'11px', fontFamily:"'Manrope',sans-serif" }}>
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700,
                    fontSize:'clamp(14px,2vw,16px)', color:'#F5F0E8', lineHeight:1.35, margin:0 }}>
                    {post.title}
                  </h3>
                  <p style={{ color:'#A09BB0', fontSize:'13px', lineHeight:1.7, margin:0,
                    fontFamily:"'Manrope',sans-serif" }}>{post.excerpt}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:'6px',
                    color: i % 2 === 0 ? '#E74C3C' : '#D4AF37',
                    fontSize:'13px', fontWeight:700, paddingTop:'10px',
                    borderTop:'1px solid rgba(212,175,55,0.08)',
                    fontFamily:"'Manrope',sans-serif" }}>
                    Read Full Article →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @media(min-width:860px){
            #blog-layout{grid-template-columns:1.3fr 1fr!important}
            #blog-small-grid{grid-template-columns:1fr!important}
          }
          @media(min-width:580px){
            #blog-small-grid{grid-template-columns:repeat(3,1fr)!important}
          }
          @media(min-width:860px){
            #blog-small-grid{grid-template-columns:1fr!important}
          }
        `}</style>

      </div>
    </section>
  );
}
