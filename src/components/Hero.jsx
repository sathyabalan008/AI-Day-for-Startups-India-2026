import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-pill">
          <span>AI Day for Startups India 2026</span>
        </div>
        
        <h1>
          Unleash the Next Wave of <span className="gradient-text">AI Innovation</span>
        </h1>
        
        <p className="hero-desc">
          Join India's premier gathering of visionary founders, machine learning researchers, and leading VCs. Discover cutting-edge tech, pitch your startup, and build the future of AI.
        </p>
        
        <div className="hero-actions">
          <button onClick={onOpenRegister} className="btn btn-primary">
            Get Your Ticket <ArrowRight size={16} />
          </button>
          <a href="#schedule" className="btn btn-secondary">
            View Schedule
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '60px', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} className="gradient-text" style={{ strokeWidth: 2.5 }} />
            <span>June 5, 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} className="gradient-text" style={{ strokeWidth: 2.5 }} />
            <span>Bengaluru, India</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">500+</div>
            <div className="stat-label">Attendees</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">30+</div>
            <div className="stat-label">AI Speakers</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">20+</div>
            <div className="stat-label">VCs & Investors</div>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-number gradient-text">₹50L+</div>
            <div className="stat-label">Funding Pool</div>
          </div>
        </div>
      </div>
    </section>
  );
}
