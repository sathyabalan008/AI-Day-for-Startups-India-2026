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

const pollLabels = {
  excellent: { text: 'Excellent Experience', color: '#1a73e8' }, // Google Blue
  veryGood: { text: 'Very Good Experience', color: '#34a853' },  // Google Green
  good: { text: 'Good Experience', color: '#f9ab00' },          // Google Yellow
  fair: { text: 'Fair Experience', color: '#fd7e14' },          // Orange
  poor: { text: 'Poor Experience', color: '#ea4335' }           // Google Red
};

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
      // User already voted, adjust counts (subtract from old, add to new)
      if (userVote === option) return; // Clicked same one
      setVotes(prev => ({
        ...prev,
        [userVote]: prev[userVote] - 1,
        [option]: prev[option] + 1
      }));
    } else {
      // First time voting
      setVotes(prev => ({
        ...prev,
        [option]: prev[option] + 1
      }));
    }
    setUserVote(option);

    // Fire minor feedback confetti
    confetti({
      particleCount: 20,
      spread: 30,
      origin: { y: 0.8 },
      colors: [pollLabels[option].color]
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userVote) {
      alert("Please cast your vote on your experience level first!");
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire grand finale confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1a73e8', '#34a853', '#f9ab00', '#ea4335']
      });
    }, 1200);
  };

  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=1a73e8&bgcolor=ffffff&data=https://ai-day-for-startups-india-2026.vercel.app/%23feedback";

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Live Feedback Poll</span>
          <h2 className="section-title">AI Day for Startups - Live Voting</h2>
          <p className="section-desc">
            Vote on your experience at SRM Ramapuram, Chennai. View live results instantly and submit your detailed suggestions.
          </p>
        </div>

        <div className="feedback-container">
          {/* QR Code Container */}
          <div className="feedback-qr-box">
            <Smartphone size={24} style={{ color: 'var(--text-accent)' }} />
            <h3 style={{ fontSize: '1.1rem', color: '#202124', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              Scan to Vote
            </h3>
            <img 
              src={qrCodeUrl} 
              alt="Feedback Form QR Code" 
              className="feedback-qr-img"
              loading="lazy"
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Scan to vote and fill out this questionnaire from your phone during the conference.
            </p>
          </div>

          {/* Form Container */}
          <div className="feedback-form-box glass-card">
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div className="success-icon">
                  <CheckCircle size={36} />
                </div>
                <h3 className="success-title">Vote Counted & Submitted!</h3>
                <p className="success-desc" style={{ marginBottom: '24px' }}>
                  Thank you for helping us improve AI Day. Below are the current aggregate results of the attendee poll.
                </p>

                {/* Final Results Display */}
                <div className="poll-results" style={{ textAlign: 'left' }}>
                  {Object.keys(pollLabels).map((key) => {
                    const labelInfo = pollLabels[key];
                    const percent = getPercentage(key);
                    return (
                      <div key={key} className="poll-result-row">
                        <div className="poll-result-header">
                          <span>{labelInfo.text}</span>
                          <span>{percent}% ({votes[key]} votes)</span>
                        </div>
                        <div className="poll-bar-outer">
                          <div 
                            className="poll-bar-inner" 
                            style={{ 
                              width: `${percent}%`, 
                              backgroundColor: labelInfo.color 
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Voting Group */}
                <div style={{ marginBottom: '24px' }}>
                  <label className="form-label" style={{ textAlign: 'center', marginBottom: '12px' }}>
                    Cast Your Vote: Overall Experience *
                  </label>
                  
                  <div className="poll-options">
                    {Object.keys(pollLabels).map((key) => {
                      const opt = pollLabels[key];
                      return (
                        <button
                          key={key}
                          type="button"
                          className={`poll-option-btn ${userVote === key ? 'active' : ''}`}
                          onClick={() => handleVote(key)}
                        >
                          {opt.text.split(' ')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Results (Toggles visible after first vote cast) */}
                {userVote && (
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: 600 }}>
                      Live Poll Results (Total votes: {totalVotes})
                    </div>
                    <div className="poll-results">
                      {Object.keys(pollLabels).map((key) => {
                        const labelInfo = pollLabels[key];
                        const percent = getPercentage(key);
                        return (
                          <div key={key} className="poll-result-row">
                            <div className="poll-result-header">
                              <span style={{ fontWeight: userVote === key ? '700' : '600' }}>
                                {labelInfo.text} {userVote === key ? '★' : ''}
                              </span>
                              <span>{percent}% ({votes[key]} votes)</span>
                            </div>
                            <div className="poll-bar-outer">
                              <div 
                                className="poll-bar-inner" 
                                style={{ 
                                  width: `${percent}%`, 
                                  backgroundColor: labelInfo.color 
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="feedback-liked">
                    What did you like most about the conference? *
                  </label>
                  <textarea
                    id="feedback-liked"
                    name="likedMost"
                    required
                    className="form-textarea"
                    placeholder="e.g. The agentic coding showcase, hands-on codelabs, networking..."
                    value={formData.likedMost}
                    onChange={handleChange}
                    style={{ height: '90px' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="feedback-suggestions">
                    Suggestions for improvement
                  </label>
                  <textarea
                    id="feedback-suggestions"
                    name="suggestions"
                    className="form-textarea"
                    placeholder="e.g. Add more intermediate workshops, longer GPU cloud credits..."
                    value={formData.suggestions}
                    onChange={handleChange}
                    style={{ height: '90px' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="feedback-name">Your Name (Optional)</label>
                    <input
                      type="text"
                      id="feedback-name"
                      name="name"
                      className="form-input"
                      placeholder="e.g. Amit Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="feedback-email">Your Email (Optional)</label>
                    <input
                      type="email"
                      id="feedback-email"
                      name="email"
                      className="form-input"
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
                      Submitting response...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Submit Detailed Feedback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
