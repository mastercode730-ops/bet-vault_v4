import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Bet Vault Blog`,
    description: post.excerpt,
  };
}

const WA = 'https://wa.me/918360750829?text=Hi%20Bet%20Vault%2C%20I%20need%20more%20information%20on%20this';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter(p => p.slug !== slug).slice(0, 3);
  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <>
      <style>{`
        body { background: #080810; }
        .back-link:hover { color: #F0CC5C !important; }
        .rel-card { transition: border-color 0.25s, transform 0.25s; }
        .rel-card:hover { border-color: rgba(212,175,55,0.45) !important; transform: translateY(-3px); }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap');
      `}</style>

      {/* ── Sticky header ── */}
      <header style={{ background:'rgba(5,5,8,0.97)', borderBottom:'1px solid rgba(212,175,55,0.15)',
        padding:'14px 0', position:'sticky', top:0, zIndex:50, backdropFilter:'blur(16px)' }}>
        <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
          maxWidth:'1240px', margin:'0 auto', padding:'0 24px' }}>
          <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'19px',
              color:'#F5F0E8', letterSpacing:'0.04em' }}>
              BET <span style={{ color:'#D4AF37' }}>VAULT</span>
            </span>
            <span style={{ fontSize:'10px', color:'rgba(212,175,55,0.6)', letterSpacing:'0.18em',
              textTransform:'uppercase', fontFamily:"'Manrope',sans-serif" }}>Blog</span>
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ padding:'9px 22px', borderRadius:'6px', fontSize:'13px', fontWeight:700,
              background:'linear-gradient(135deg,#D4AF37,#B8960C)', color:'#080810',
              textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'8px',
              fontFamily:"'Manrope',sans-serif" }}>
            Get My Betting ID
          </a>
        </div>
        {/* Gold accent line */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px',
          background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent)' }} />
      </header>

      <main style={{ background:'#080810', minHeight:'100vh', paddingBottom:'88px' }}>

        {/* ── Hero banner ── */}
        <div style={{ background:'linear-gradient(135deg,#1A0808 0%,#0F0F1C 60%,#080810 100%)',
          borderBottom:'1px solid rgba(212,175,55,0.12)', padding:'56px 0 48px',
          position:'relative', overflow:'hidden' }}>

          {/* Background glow */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none',
            background:'radial-gradient(ellipse at 20% 50%,rgba(192,57,43,0.1) 0%,transparent 60%)' }} />

          <div style={{ maxWidth:'820px', margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
            <Link href="/#blog" className="back-link"
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', color:'#D4AF37',
                fontSize:'13px', textDecoration:'none', marginBottom:'24px', fontWeight:600,
                fontFamily:"'Manrope',sans-serif" }}>
              ← Back to Blog
            </Link>

            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px', flexWrap:'wrap' }}>
              <span style={{ background:'rgba(212,175,55,0.1)', border:'1px solid rgba(212,175,55,0.3)',
                color:'#D4AF37', fontSize:'10px', fontWeight:700, padding:'3px 12px', borderRadius:'3px',
                letterSpacing:'0.12em', textTransform:'uppercase', fontFamily:"'Manrope',sans-serif" }}>
                {post.tag}
              </span>
              <span style={{ color:'#4B4860', fontSize:'13px', fontFamily:"'Manrope',sans-serif" }}>
                {post.date} · {post.readTime}
              </span>
            </div>

            <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900,
              fontSize:'clamp(1.6rem,4vw,2.8rem)', color:'#F5F0E8', lineHeight:1.18,
              marginBottom:'20px', letterSpacing:'-0.01em' }}>
              {post.title}
            </h1>

            <p style={{ color:'#A09BB0', fontSize:'17px', lineHeight:1.8,
              fontFamily:"'Manrope',sans-serif" }}>{post.excerpt}</p>
          </div>
        </div>

        {/* ── Article body ── */}
        <div style={{ maxWidth:'820px', margin:'0 auto', padding:'52px 24px 0' }}>
          <article>
            {paragraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ fontFamily:"'Playfair Display',serif", fontWeight:800,
                    fontSize:'clamp(1.2rem,2.8vw,1.55rem)', color:'#D4AF37',
                    marginTop:'44px', marginBottom:'16px', letterSpacing:'-0.01em',
                    paddingLeft:'16px', borderLeft:'3px solid #C0392B' }}>
                    {para.replace('## ', '')}
                  </h2>
                );
              }
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <p key={i} style={{ color:'#F5F0E8', fontWeight:700, fontSize:'16px',
                    lineHeight:1.75, marginBottom:'12px', fontFamily:"'Manrope',sans-serif" }}>
                    {para.replace(/\*\*/g, '')}
                  </p>
                );
              }
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} style={{ color:'#A09BB0', fontSize:'16px', lineHeight:1.9,
                  marginBottom:'20px', fontFamily:"'Manrope',sans-serif" }}>
                  {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} style={{ color:'#D1C8B8', fontWeight:700 }}>{part.replace(/\*\*/g, '')}</strong>
                      : <span key={j}>{part}</span>
                  )}
                </p>
              );
            })}

            {/* In-article CTA */}
            <div style={{ background:'linear-gradient(135deg,#1A0808 0%,#0F0F1C 100%)',
              border:'1px solid rgba(212,175,55,0.25)', borderRadius:'12px',
              padding:'36px', textAlign:'center', margin:'48px 0', position:'relative',
              overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, pointerEvents:'none',
                background:'radial-gradient(circle at 50% 0%,rgba(212,175,55,0.06),transparent 65%)' }} />
              <div style={{ position:'relative', zIndex:1 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'22px',
                  color:'#F5F0E8', marginBottom:'12px' }}>
                  Ready to Start Betting?
                </h3>
                <p style={{ color:'#A09BB0', fontSize:'15px', lineHeight:1.75, marginBottom:'24px',
                  fontFamily:"'Manrope',sans-serif" }}>
                  Get your Bet Vault cricket betting ID set up in minutes — just send us a message on WhatsApp and we handle the rest.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  style={{ padding:'14px 32px', borderRadius:'6px', fontSize:'14px', fontWeight:800,
                    background:'linear-gradient(135deg,#D4AF37,#B8960C)', color:'#080810',
                    textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'8px',
                    textTransform:'uppercase', letterSpacing:'0.06em', fontFamily:"'Manrope',sans-serif" }}>
                  <WaIcon /> Get My Betting ID Now
                </a>
              </div>
            </div>
          </article>

          {/* More articles */}
          <div style={{ marginTop:'64px', paddingTop:'44px',
            borderTop:'1px solid rgba(212,175,55,0.12)' }}>
            <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'22px',
              color:'#F5F0E8', marginBottom:'24px' }}>
              More Articles
            </h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',
              gap:'16px' }}>
              {others.map((other, i) => (
                <Link key={i} href={`/blog/${other.slug}`} className="rel-card"
                  style={{ display:'block', textDecoration:'none', background:'#0F0F1C',
                    border:'1px solid rgba(212,175,55,0.12)', borderRadius:'10px', overflow:'hidden' }}>
                  <div style={{ height:'3px',
                    background: i % 2 === 0
                      ? 'linear-gradient(90deg,#C0392B,#E74C3C)'
                      : 'linear-gradient(90deg,#D4AF37,#F0CC5C)' }} />
                  <div style={{ padding:'20px' }}>
                    <span style={{ background:'rgba(212,175,55,0.1)', border:'1px solid rgba(212,175,55,0.25)',
                      color:'#D4AF37', fontSize:'10px', fontWeight:700, padding:'2px 10px',
                      borderRadius:'3px', letterSpacing:'0.1em', textTransform:'uppercase',
                      display:'inline-block', marginBottom:'12px', fontFamily:"'Manrope',sans-serif" }}>
                      {other.tag}
                    </span>
                    <p style={{ color:'#D1C8B8', fontWeight:700, fontSize:'14px', lineHeight:1.45,
                      margin:'0 0 12px', fontFamily:"'Playfair Display',serif" }}>{other.title}</p>
                    <span style={{ color:'#D4AF37', fontSize:'13px', fontWeight:600,
                      fontFamily:"'Manrope',sans-serif" }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        style={{ position:'fixed', bottom:'24px', right:'20px', zIndex:99, padding:'13px 22px',
          borderRadius:'999px', fontSize:'13px', fontWeight:700, display:'inline-flex',
          alignItems:'center', gap:'8px', background:'linear-gradient(135deg,#25D366,#128C7E)',
          color:'#fff', textDecoration:'none', boxShadow:'0 4px 24px rgba(37,211,102,0.45)',
          fontFamily:"'Manrope',sans-serif", animation:'pulse-wa 2s ease-in-out infinite' }}>
        <WaIcon /> Get Your ID
      </a>
      <style>{`@keyframes pulse-wa{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,0.35)}50%{box-shadow:0 4px 44px rgba(37,211,102,0.7)}}`}</style>
    </>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink:0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
