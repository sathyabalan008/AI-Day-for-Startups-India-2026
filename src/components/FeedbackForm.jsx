import React, { useState } from 'react';
import { Star, Send, Loader, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    likedMost: '',
    suggestions: '',
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select an experience rating.");
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f59e0b', '#10b981', '#38bdf8', '#a855f7']
      });
    }, 1200);
  };

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Your Thoughts</span>
          <h2 className="section-title">Share Your Feedback</h2>
          <p className="section-desc">
            We'd love to hear about your experience at AI Day 2026. Your insights help us improve.
          </p>
        </div>

        <div className="feedback-card glass-card">
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div className="success-icon" style={{ borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <CheckCircle size={36} />
              </div>
              <h3 className="success-title">Feedback Submitted!</h3>
              <p className="success-desc">
                Thank you for helping us shape the future of AI Day. We appreciate your valuable insights!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <label className="form-label" style={{ marginBottom: '8px' }}>
                  Rate your overall experience *
                </label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <button
                      key={starValue}
                      type="button"
                      className={`star-btn ${starValue <= (hoverRating || rating) ? 'active' : ''}`}
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`Rate ${starValue} stars`}
                    >
                      <Star size={32} fill={starValue <= (hoverRating || rating) ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="feedback-liked">
                  What did you like most about the conference? *
                </label>
                <textarea
                  id="feedback-liked"
                  name="likedMost"
                  required
                  className="form-textarea"
                  placeholder="e.g. The sovereign LLM panel, startup pitch competitions, networking..."
                  value={formData.likedMost}
                  onChange={handleChange}
                  style={{ height: '100px' }}
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
                  placeholder="e.g. More hands-on developer workshops, larger Q&A sessions..."
                  value={formData.suggestions}
                  onChange={handleChange}
                  style={{ height: '100px' }}
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
                    Sending feedback...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Submit Feedback
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
