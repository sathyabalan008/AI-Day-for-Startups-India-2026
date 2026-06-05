import React, { useState } from 'react';
import { X, CheckCircle, Loader } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Developer',
    reason: '',
    subscribe: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#38bdf8', '#10b981']
      });
    }, 1500);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isSuccess ? 'Registration Complete' : 'Secure Your Ticket'}
          </h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          {isSuccess ? (
            <div className="success-view">
              <div className="success-icon">
                <CheckCircle size={36} />
              </div>
              <h3 className="success-title">You're on the list!</h3>
              <p className="success-desc">
                Thank you for registering for AI Day 2026. A confirmation ticket and QR code have been sent to <strong>{formData.email}</strong>.
              </p>
              <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="reg-name">Full Name</label>
                <input 
                  type="text" 
                  id="reg-name"
                  name="name" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Amit Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-email">Email Address</label>
                <input 
                  type="email" 
                  id="reg-email"
                  name="email" 
                  required 
                  className="form-input" 
                  placeholder="e.g. amit@startup.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-org">Company / Startup / Institution</label>
                <input 
                  type="text" 
                  id="reg-org"
                  name="organization" 
                  required 
                  className="form-input" 
                  placeholder="e.g. AI Labs India"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-role">Your Role</label>
                <select 
                  id="reg-role"
                  name="role" 
                  className="form-select"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Founder">Founder / Co-Founder</option>
                  <option value="Developer">AI Developer / ML Engineer</option>
                  <option value="Researcher">Researcher / Academician</option>
                  <option value="Investor">Investor / Venture Capitalist</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-reason">What are you hoping to get out of AI Day?</label>
                <textarea 
                  id="reg-reason"
                  name="reason" 
                  className="form-textarea" 
                  placeholder="e.g. Pitching my startup, networking with investors, learning about local LLMs..."
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>

              <div className="form-checkbox-group">
                <input 
                  type="checkbox" 
                  id="reg-sub"
                  name="subscribe" 
                  className="form-checkbox"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                <label htmlFor="reg-sub" className="form-checkbox-label">
                  Keep me updated about future AI meetups and newsletters.
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> 
                    Securing your spot...
                  </>
                ) : (
                  'Register for Free Spot'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
