import React, { useState } from 'react';

const scheduleData = {
  morning: [
    {
      time: '09:00 AM',
      title: 'Registrations & Welcome Keynote',
      speaker: 'StartupTN Regional Lead & Google Developer Relations',
      desc: 'Registration check-in at SRM Ramapuram campus, followed by opening remarks on Tamil Nadu’s startup ecosystem.'
    },
    {
      time: '10:00 AM',
      title: 'Multimodal AI Capabilities with Google Gemini',
      speaker: 'Google Developer Experts & Researchers',
      desc: 'Technical introduction to Gemini models, Vertex AI, Google AI Studio, and leveraging Gemma open models for local development.'
    }
  ],
  afternoon: [
    {
      time: '11:30 AM',
      title: 'Hands-on Codelab: Building AI Agents',
      speaker: 'Google Cloud Platform Architects',
      desc: 'Bring your laptops. Interactive session building real-world AI agent workflows using Google’s GenAI SDK.'
    },
    {
      time: '02:00 PM',
      title: 'Sovereign AI & Edge Intelligence for Startups',
      speaker: 'Hardware & Infrastructure Panelists',
      desc: 'Deploying edge models, parameter efficiency, data sovereignty, and secure localized AI hosting strategies.'
    }
  ],
  networking: [
    {
      time: '03:30 PM',
      title: 'AI Startup Pitch Showcase & Demos',
      speaker: 'Top 10 Shortlisted AI Teams',
      desc: 'Live demos of physical AI, edge computing projects, and custom LLM solutions developed in Tamil Nadu.'
    },
    {
      time: '04:30 PM',
      title: 'Startup TN Networking & Ecosystem Mixer',
      speaker: 'All Attendees & Mentors',
      desc: 'Connect with mentors, VCs, and tech enthusiasts. Closing tea, coffee, and refreshments.'
    }
  ]
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('morning');

  return (
    <section id="schedule" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Timeline</span>
          <h2 className="section-title">Event Schedule</h2>
          <p className="section-desc">
            Plan your day at SRM Ramapuram, Chennai. Toggle through our morning, afternoon, and showcase tracks.
          </p>
        </div>

        <div className="schedule-tabs">
          <button 
            className={`tab-btn ${activeTab === 'morning' ? 'active' : ''}`}
            onClick={() => setActiveTab('morning')}
          >
            Morning Sessions (09:00 AM)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'afternoon' ? 'active' : ''}`}
            onClick={() => setActiveTab('afternoon')}
          >
            Afternoon Codelabs (11:30 AM)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'networking' ? 'active' : ''}`}
            onClick={() => setActiveTab('networking')}
          >
            Pitches & Mixer (03:30 PM)
          </button>
        </div>

        <div className="timeline">
          {scheduleData[activeTab].map((item, index) => (
            <div 
              key={`${activeTab}-${index}`} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-speaker">{item.speaker}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
