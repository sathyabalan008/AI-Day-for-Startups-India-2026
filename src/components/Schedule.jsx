import React, { useState } from 'react';

const scheduleData = {
  keynotes: [
    {
      time: '09:30 AM',
      title: "Opening Keynote: India's AI Decade",
      speaker: 'Dr. Aruna Sen (Head of AI Research, IndiaAI)',
      desc: 'Exploring the national roadmap for compute infrastructure, local LLMs, and open-source intelligence.'
    },
    {
      time: '10:30 AM',
      title: 'Scaling Foundational Models in Production',
      speaker: 'Rohan Verma (Founder, Neurotech Labs)',
      desc: 'Deep dive into optimizing inference latency, parameter-efficient fine-tuning (PEFT), and edge computing deployment.'
    }
  ],
  panels: [
    {
      time: '11:30 AM',
      title: 'VC Panel: The Sovereign AI Funding Wave',
      speaker: 'Moderated by Meera Nair (Elevate Ventures)',
      desc: 'Leading investors discuss valuation trends, compute credit incentives, and what makes an AI startup stand out.'
    },
    {
      time: '02:00 PM',
      title: 'Ethical AI, Safety, and Regional Data Governance',
      speaker: 'Panel of Legal & Technical Experts',
      desc: 'Addressing regulatory compliance, safety guardrails, and building trust in automated systems.'
    }
  ],
  pitches: [
    {
      time: '03:00 PM',
      title: 'Startup Pitch Battle: Top 10 Teams',
      speaker: 'VC Jury & Incubators',
      desc: 'Ten shortlisted AI startups pitch their ideas live for a chance to win from a ₹50L seed grant pool.'
    },
    {
      time: '05:00 PM',
      title: 'Award Ceremony & Networking Mixer',
      speaker: 'All Speakers & Attendees',
      desc: 'Celebrating the pitch winners and concluding with a curated networking mixer and dinner.'
    }
  ]
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('keynotes');

  return (
    <section id="schedule" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Timeline</span>
          <h2 className="section-title">Event Schedule</h2>
          <p className="section-desc">
            Explore the agenda for AI Day 2026. Toggle through the tracks to plan your day.
          </p>
        </div>

        <div className="schedule-tabs">
          <button 
            className={`tab-btn ${activeTab === 'keynotes' ? 'active' : ''}`}
            onClick={() => setActiveTab('keynotes')}
          >
            Keynotes
          </button>
          <button 
            className={`tab-btn ${activeTab === 'panels' ? 'active' : ''}`}
            onClick={() => setActiveTab('panels')}
          >
            Panel Discussions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pitches' ? 'active' : ''}`}
            onClick={() => setActiveTab('pitches')}
          >
            Pitches & Networking
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
