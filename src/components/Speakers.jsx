import React from 'react';

const speakersList = [
  {
    name: 'Dr. Aruna Sen',
    role: 'Head of AI Research',
    company: 'IndiaAI Foundation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    twitter: '#',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Rohan Verma',
    role: 'Founder & CEO',
    company: 'Neurotech Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    twitter: '#',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Meera Nair',
    role: 'General Partner',
    company: 'Elevate Ventures',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    twitter: '#',
    linkedin: '#',
    github: '#'
  }
];

export default function Speakers() {
  return (
    <section id="speakers" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Speakers</span>
          <h2 className="section-title">Industry Leaders & Visionaries</h2>
          <p className="section-desc">
            Hear from the pioneers who are redefining machine learning, robotics, and venture capital in the AI space.
          </p>
        </div>
        
        <div className="speakers-grid">
          {speakersList.map((speaker, index) => (
            <div key={index} className="speaker-card glass-card">
              <div className="speaker-img-wrapper">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="speaker-img"
                  loading="lazy"
                />
                <div className="speaker-glow-overlay"></div>
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <div className="speaker-role">{speaker.role}</div>
                <div className="speaker-company">{speaker.company}</div>
                <div className="speaker-socials">
                  <a href={speaker.twitter} className="speaker-social-link" aria-label="Twitter" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"></path>
                    </svg>
                  </a>
                  <a href={speaker.linkedin} className="speaker-social-link" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </a>
                  <a href={speaker.github} className="speaker-social-link" aria-label="GitHub" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
