import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Brain, Code, Users, CheckSquare } from 'lucide-react';

const expectationColumns = [
  {
    title: 'INSIGHTS ON AI',
    subtitle: 'Trends, models, Google experts, VCs, and founders.',
    desc: 'Deep dive into Gemini API, Gemma, Bhashini, Veo, Imagen, Vertex AI, and deploying on Google Cloud.',
    icon: Brain,
    color: '#1a73e8' // Google Blue
  },
  {
    title: 'BUILD WITH GOOGLE AI',
    subtitle: 'Real time app building.',
    desc: 'Hands-on codelabs, building with Google AI Studio, GenAI SDK, Gemma, Gemini Nano, and experiencing agentic coding tools like Antigravity.',
    icon: Code,
    color: '#34a853' // Google Green
  },
  {
    title: 'NETWORKING',
    subtitle: 'Connect with industry leaders, peers.',
    desc: 'Share ideas and build relationships with Tamil Nadu’s top artificial intelligence developers, founders, and VCs.',
    icon: Users,
    color: '#f9ab00' // Google Yellow
  },
  {
    title: 'REGISTER TODAY',
    subtitle: 'Reserve your spot.',
    desc: 'Participation is 100% free but seating is limited. Secure your entry pass on the StartupTN portal today.',
    icon: CheckSquare,
    color: '#ea4335' // Google Red
  }
];

export default function Hero({ onOpenRegister }) {
  return (
    <section className="hero">
      <div className="container">
        {/* StartupTN & Google Co-Branding Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '900', fontFamily: 'var(--font-heading)', color: '#0f172a', letterSpacing: '-0.02em' }}>
              Startup<span style={{ color: '#1a73e8' }}>TN</span>
            </span>
          </div>
          <div style={{ width: '2px', height: '24px', background: '#e2e8f0' }}></div>
          <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#5f6368', letterSpacing: '-0.01em' }}>
            Google <span style={{ fontWeight: '400' }}>for Developers</span>
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '3.6rem', fontWeight: '800', marginBottom: '32px', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
          AI Day <span style={{ fontWeight: '400', color: '#5f6368' }}>for Startups</span> <br />
          <span style={{ color: '#34a853' }}>INDIA 2026 — Chennai</span>
        </h1>

        {/* Banner Pills Replica */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {/* Green Pill */}
          <div style={{ 
            backgroundColor: '#34a853', 
            color: '#ffffff', 
            padding: '10px 24px', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 10px rgba(52, 168, 83, 0.2)'
          }}>
            <Calendar size={18} />
            <span>5th June</span>
          </div>

          {/* Yellow Pill */}
          <div style={{ 
            backgroundColor: '#f9ab00', 
            color: '#202124', 
            padding: '10px 24px', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 10px rgba(249, 171, 0, 0.2)'
          }}>
            <Clock size={18} />
            <span>9:00 AM - 5:00 PM</span>
          </div>

          {/* Location Pill */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            color: '#202124', 
            border: '1px solid #dadce0',
            padding: '10px 24px', 
            borderRadius: '50px', 
            fontWeight: '600', 
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.04)'
          }}>
            <MapPin size={18} color="#ea4335" />
            <span>SRM Ramapuram</span>
          </div>
        </div>
        
        <p className="hero-desc" style={{ marginBottom: '48px', fontSize: '1.2rem' }}>
          Co-hosted by **StartupTN** and **Google for Developers**, this Chennai summit is the premier tech meetup for builders creating the next wave of Artificial Intelligence.
        </p>
        
        <div className="hero-actions" style={{ marginBottom: '80px' }}>
          <button onClick={onOpenRegister} className="btn btn-primary">
            Register Today <ArrowRight size={16} />
          </button>
          <a href="https://goo.gle/AI-Day-Startups" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Official RSVP Link
          </a>
        </div>

        {/* Expectation Columns Grid ("What to Expect?") */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-pill">Agendas</span>
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginTop: '8px' }}>
            What to Expect?
          </h2>
        </div>

        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'left', marginBottom: '40px' }}>
          {expectationColumns.map((col, index) => {
            const IconComponent = col.icon;
            return (
              <div 
                key={index} 
                className="stat-card glass-card" 
                style={{ 
                  padding: '24px 20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '16px',
                  borderTop: `4px solid ${col.color}`,
                  justifyContent: 'flex-start'
                }}
              >
                <div style={{ 
                  color: col.color, 
                  backgroundColor: `${col.color}0a`, 
                  padding: '8px', 
                  borderRadius: '8px', 
                  width: 'fit-content'
                }}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '800', color: col.color, letterSpacing: '0.02em', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
                    {col.title}
                  </h3>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#202124', lineHeight: '1.3', marginBottom: '8px' }}>
                    {col.subtitle}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {col.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
