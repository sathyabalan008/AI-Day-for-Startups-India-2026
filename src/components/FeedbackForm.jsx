import React, { useState } from 'react';
import { Send, Loader, CheckCircle, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';

const initialVotes = {
  excellent: 148,
  veryGood: 76,
  good: 24,
  fair: 8,
  poor: 2
};

const pollOptions = [
  { key: 'excellent', num: 1, title: 'Excellent', subtitle: 'Excellent', badgeText: 'AI Day for Startups - Excellent Experience', color: '#1a73e8' },
  { key: 'veryGood', num: 2, title: 'Very Good', subtitle: 'Very Good', badgeText: 'AI Day for Startups - Very Good Experience', color: '#34a853' },
  { key: 'good', num: 3, title: 'Good', subtitle: 'Good', badgeText: 'AI Day for Startups - Good Experience', color: '#f9ab00' },
  { key: 'fair', num: 4, title: 'Fair', subtitle: 'Fair', badgeText: 'AI Day for Startups - Fair Experience', color: '#fd7e14' },
  { key: 'poor', num: 5, title: 'Poor', subtitle: 'Poor', badgeText: 'AI Day for Startups - Poor Experience', color: '#ea4335' }
];

export default function FeedbackForm() {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState(null); // 'excellent' | 'veryGood' | etc.
  const [formData, setFormData] = useState({
    likedMost: '',
    suggestions: '',
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate total votes and percentages
  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const getPercentage = (key) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes[key] / totalVotes) * 100);
  };

  const handleVote = (option) => {
    if (userVote) {
      if (userVote === option) return; // Clicked same option
      setVotes(prev => ({
        ...prev,
        [userVote]: prev[userVote] - 1,
        [option]: prev[option] + 1
      }));
    } else {
      setVotes(prev => ({
        ...prev,
        [option]: prev[option] + 1
      }));
    }
    setUserVote(option);

    const optConfig = pollOptions.find(o => o.key === option);
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.85 },
      colors: [optConfig.color]
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userVote) {
      alert("Please cast your vote by clicking 'VOTE' on one of the cards first!");
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#1a73e8', '#34a853', '#f9ab00', '#ea4335']
      });
    }, 1200);
  };

  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=111215&bgcolor=ffffff&data=https://ai-day-for-startups-india-2026.vercel.app/%23feedback";

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Interactive Feedback</span>
          <h2 className="section-title">Cast Your Experience Vote</h2>
          <p className="section-desc">
            Submit your feedback and help us count the final scores for AI Day for Startups Chennai 2026.
          </p>
        </div>

        <div className="feedback-container">
          {/* Left Side: QR Code scan-to-vote */}
          <div className="feedback-qr-box" style={{ background: '#111215', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Smartphone size={24} style={{ color: '#1a73e8' }} />
            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              Scan on Mobile
            </h3>
            <img 
              src={qrCodeUrl} 
              alt="Feedback Form QR Code" 
              className="feedback-qr-img"
              style={{ border: '4px solid rgba(255,255,255,0.15)', background: '#fff' }}
              loading="lazy"
            />
            <p style={{ fontSize: '0.85rem', color: '#8a8d94', lineHeight: '1.4' }}>
              Scan this code to cast your vote and submit suggestions directly from your phone.
            </p>
          </div>

          {/* Right Side: Exact replica mobile voting poll */}
          <div className="feedback-form-box">
            <div className="replica-poll-container">
              <h3 className="replica-poll-title">Google AI Day for Startups India 2026</h3>

              {/* Scrolling Flash News Banner */}
              <div className="replica-ticker">
                <div className="ticker-label">
                  <span className="ticker-dot"></span>
                  FLASH NEWS
                </div>
                <div className="ticker-text-wrapper">
                  <span className="ticker-text">
                    Sovereign AI Codelabs, building agents, and real-time app prototyping using Antigravity, Gemini API, and Vertex AI at SRM Ramapuram, Chennai.
                  </span>
                </div>
              </div>

              {/* Live Poll Results (Shown at top after voting) */}
              {userVote && (
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', marginBottom: '12px', fontWeight: 700, fontFamily: 'var(--font-heading)', textAlign: 'left' }}>
                    Live Poll Results (Total: {totalVotes} votes)
                  </div>
                  <div className="poll-results" style={{ background: '#18191c', borderColor: 'rgba(255,255,255,0.08)' }}>
                    {pollOptions.map((opt) => {
                      const percent = getPercentage(opt.key);
                      return (
                        <div key={opt.key} className="poll-result-row">
                          <div className="poll-result-header" style={{ color: '#ffffff' }}>
                            <span style={{ fontWeight: userVote === opt.key ? '800' : '600' }}>
                              {opt.title} {userVote === opt.key ? '★' : ''}
                            </span>
                            <span>{percent}% ({votes[opt.key]} votes)</span>
                          </div>
                          <div className="poll-bar-outer" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                            <div 
                              className="poll-bar-inner" 
                              style={{ 
                                width: `${percent}%`, 
                                backgroundColor: opt.color 
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Vertical Replica Voting Cards */}
              {!isSuccess ? (
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {pollOptions.map((opt) => (
                      <div key={opt.key} className="replica-vote-card">
                        <div className="card-main-content">
                          {/* Left Logo Wrapper */}
                          <div className="left-logo-wrapper">
                            <img src="/logo.png" alt="Logo" className="left-logo-sq" />
                            <div className="number-badge">{opt.num}</div>
                          </div>
                          
                          {/* Middle Text */}
                          <div className="middle-text-wrapper">
                            <span className="vote-title">{opt.title}</span>
                            <span className="vote-subtitle">{opt.subtitle}</span>
                            <span className="vote-badge">{opt.badgeText}</span>
                          </div>

                          {/* Right Logo Circle */}
                          <div className="right-logo-wrapper">
                            <img src="/logo.png" alt="Logo" className="right-logo-circle" />
                          </div>
                        </div>

                        {/* VOTE Button */}
                        <button
                          type="button"
                          className="replica-vote-btn"
                          style={{
                            backgroundColor: userVote === opt.key ? '#1a73e8' : '#34a853'
                          }}
                          onClick={() => handleVote(opt.key)}
                        >
                          {userVote === opt.key ? 'VOTED' : 'VOTE'}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Questionnaire Form Block (Shown only after casting a vote) */}
                  {userVote && (
                    <div style={{ marginTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px', textAlign: 'left' }}>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="form-label" style={{ color: '#ffffff' }} htmlFor="feedback-liked">
                            What did you like most about the conference? *
                          </label>
                          <textarea
                            id="feedback-liked"
                            name="likedMost"
                            required
                            className="form-textarea"
                            style={{ background: '#18191c', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                            placeholder="e.g. The sovereign LLM panel, agentic codelabs, networking..."
                            value={formData.likedMost}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" style={{ color: '#ffffff' }} htmlFor="feedback-suggestions">
                            Suggestions for improvement
                          </label>
                          <textarea
                            id="feedback-suggestions"
                            name="suggestions"
                            className="form-textarea"
                            style={{ background: '#18191c', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                            placeholder="e.g. More hands-on AI workshops, longer session Q&As..."
                            value={formData.suggestions}
                            onChange={handleChange}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                          <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="form-label" style={{ color: '#ffffff' }} htmlFor="feedback-name">Your Name (Optional)</label>
                            <input
                              type="text"
                              id="feedback-name"
                              name="name"
                              className="form-input"
                              style={{ background: '#18191c', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                              placeholder="e.g. Amit Sharma"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="form-label" style={{ color: '#ffffff' }} htmlFor="feedback-email">Your Email (Optional)</label>
                            <input
                              type="email"
                              id="feedback-email"
                              name="email"
                              className="form-input"
                              style={{ background: '#18191c', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                              placeholder="e.g. amit@gmail.com"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ width: '100%', padding: '14px', marginTop: '10px' }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                              Submitting feedback...
                            </>
                          ) : (
                            <>
                              Submit detailed feedback
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px 20px', color: '#ffffff' }}>
                  <div className="success-icon" style={{ borderColor: '#34a853', background: 'rgba(52, 168, 83, 0.1)', color: '#34a853' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="success-title" style={{ color: '#ffffff' }}>Feedback Submitted!</h3>
                  <p className="success-desc" style={{ color: '#8a8d94', marginBottom: '24px' }}>
                    Thank you for helping us shape the future of AI Day. Your vote and detailed feedback have been recorded.
                  </p>
                  <button 
                    onClick={() => { setIsSuccess(false); setUserVote(null); setFormData({ likedMost: '', suggestions: '', name: '', email: '' }); }}
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                  >
                    Back to Vote
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
