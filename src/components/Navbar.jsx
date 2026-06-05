import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-container" style={{ color: '#fff' }}>
          <div className="logo-icon">
            <Sparkles size={18} color="#fff" />
          </div>
          <span>Gravity <span className="gradient-text">2026</span></span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#schedule" className="nav-link">Schedule</a></li>
            <li><a href="#speakers" className="nav-link">Speakers</a></li>
            <li><a href="#ai-assistant" className="nav-link">AI Assistant</a></li>
            <li>
              <button onClick={onOpenRegister} className="btn btn-primary">
                Register Now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
