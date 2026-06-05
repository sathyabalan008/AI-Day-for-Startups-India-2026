import React from 'react';
import { Calendar, MapPin, ArrowRight, Cpu, Layers, ShieldAlert, Monitor } from 'lucide-react';

const techTracks = [
  {
    title: 'Multimodal AI Capabilities',
    desc: 'Deep dive into Gemini models, Vertex AI, Google AI Studio, and Gemma open models.',
    icon: Cpu
  },
  {
    title: 'Building AI Agents',
    desc: 'Construct fast prototypes and deploy custom agents using the Google GenAI SDK and Codelabs.',
    icon: Layers
  },
  {
    title: 'Sovereign AI Solutions',
    desc: 'Explore regional, localized, and highly secure AI architectures for local enterprises.',
    icon: ShieldAlert
  },
  {
    title: 'Physical AI & Edge Intelligence',
    desc: 'Deploy machine learning models on hardware devices, robotics, and edge nodes.',
    icon: Monitor
  }
];

export default function Hero({ onOpenRegister }) {
  return (
    <section className="hero">
      <div className="container">
        {/* Partner Branding Logo Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '0.05em' }}>
            Startup<span style={{ color: '#38bdf8' }}>TN</span>
          </span>
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }}></div>
          <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
            Google for Developers
          </span>
        </div>

        <div className="hero-pill">
          <span>AI Day for Startups INDIA 2026 — Chennai</span>
        </div>
        
        <h1>
          Shape the Future with <span className="gradient-text">Google AI</span> & StartupTN
        </h1>
        
        <p className="hero-desc">
          The ultimate gathering of AI builders, ML engineers, and founders in Tamil Nadu. Explore multimodal models, code custom agents, and network with the ecosystem.
        </p>
        
        <div className="hero-actions">
          <button onClick={onOpenRegister} className="btn btn-primary">
            Register Today <ArrowRight size={16} />
          </button>
          <a href="https://goo.gle/AI-Day-Startups" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Official RSVP Link
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '48px', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} className="gradient-text" style={{ strokeWidth: 2.5 }} />
            <span>June 5, 2026 (09:00 AM - 05:00 PM)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} className="gradient-text" style={{ strokeWidth: 2.5 }} />
            <span>SRM Ramapuram, Chennai</span>
          </div>
        </div>

        {/* 4 Focus Area Cards */}
        <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-heading)' }}>
          What to Expect — <span className="gradient-text">Core Focus Areas</span>
        </h2>
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', textAlign: 'left', marginBottom: '60px' }}>
          {techTracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div key={index} className="stat-card glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '24px', textDecoration: 'none' }}>
                <div className="logo-icon" style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '12px', borderRadius: '12px', minWidth: '44px' }}>
                  <IconComponent size={20} color="#38bdf8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>
                    {track.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {track.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">300+</div>
            <div className="stat-label">AI Startups</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">4</div>
            <div className="stat-label">Core Tracks</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">SRM</div>
            <div className="stat-label">Ramapuram Hub</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">100%</div>
            <div className="stat-label">Free Entry</div>
          </div>
        </div>
      </div>
    </section>
  );
}
