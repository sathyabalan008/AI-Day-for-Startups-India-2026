import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const SYSTEM_ANSWERS = {
  welcome: "Welcome to AI Day for Startups India 2026! I am your AI assistant. You can ask me about the schedule, speakers, pitching your startup, or the venue.",
  speakers: "We have an incredible lineup of speakers, including:\n\n• **Dr. Aruna Sen** (Head of AI Research at IndiaAI Foundation)\n• **Rohan Verma** (Founder & CEO of Neurotech Labs)\n• **Meera Nair** (General Partner at Elevate Ventures)\n\nThey will cover sovereign LLMs, production scaling, and VC funding.",
  schedule: "The event is packed with action:\n\n• **9:30 AM**: Keynote by Dr. Aruna Sen\n• **10:30 AM**: Scaling Models by Rohan Verma\n• **11:30 AM**: VC Panel with Meera Nair\n• **2:00 PM**: Ethical AI Panel\n• **3:00 PM**: Startup Pitch Battle (₹50L Seed Pool)\n• **5:00 PM**: Closing Mixer",
  pitch: "Startups can enter the **Startup Pitch Battle** at 3:00 PM. Shortlisted teams get 5 minutes to pitch to our VC jury. There is a **₹50L+ Seed Grant Pool** up for grabs! Tap 'Register Now' at the top to secure your ticket and submit your pitch details.",
  venue: "AI Day 2026 is happening on **June 5, 2026**, in the tech hub of **Bengaluru, India**. Registered attendees will receive the exact venue address and entry QR code via email.",
  default: "I'm sorry, I didn't quite catch that. You can ask about: 'speakers', 'schedule', 'pitch battle', 'venue', or how to 'register'."
};

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: SYSTEM_ANSWERS.welcome }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');

    // Logic to respond
    setTimeout(() => {
      let reply = SYSTEM_ANSWERS.default;
      const lower = text.toLowerCase();

      if (lower.includes('speaker') || lower.includes('who') || lower.includes('aruna') || lower.includes('rohan') || lower.includes('meera')) {
        reply = SYSTEM_ANSWERS.speakers;
      } else if (lower.includes('schedule') || lower.includes('agenda') || lower.includes('time') || lower.includes('when')) {
        reply = SYSTEM_ANSWERS.schedule;
      } else if (lower.includes('pitch') || lower.includes('funding') || lower.includes('money') || lower.includes('grant') || lower.includes('seed')) {
        reply = SYSTEM_ANSWERS.pitch;
      } else if (lower.includes('venue') || lower.includes('where') || lower.includes('location') || lower.includes('bengaluru')) {
        reply = SYSTEM_ANSWERS.venue;
      } else if (lower.includes('register') || lower.includes('ticket') || lower.includes('book')) {
        reply = "You can register for a free spot by clicking the **Register Now** button in the navigation bar at the top of the page!";
      }

      setMessages(prev => [...prev, { sender: 'assistant', text: reply }]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="ai-widget-container" id="ai-assistant">
      {isOpen && (
        <div className="ai-chat-panel">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <Sparkles size={16} className="gradient-text" />
              <span>Gravity AI Guide</span>
              <span className="ai-status-dot"></span>
            </div>
            <button className="modal-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          
          <div className="ai-chat-body" ref={chatBodyRef}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`ai-chat-message ${msg.sender === 'user' ? 'ai-msg-user' : 'ai-msg-assistant'}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={{ padding: '0 20px' }}>
            <div className="ai-quick-questions">
              <button className="ai-quick-btn" onClick={() => handleSendMessage("Who are the speakers?")}>
                Speakers
              </button>
              <button className="ai-quick-btn" onClick={() => handleSendMessage("What is the schedule?")}>
                Schedule
              </button>
              <button className="ai-quick-btn" onClick={() => handleSendMessage("How to pitch a startup?")}>
                Pitch Competition
              </button>
            </div>
          </div>

          <div className="ai-chat-footer">
            <input 
              type="text" 
              className="ai-chat-input" 
              placeholder="Ask me anything..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="ai-send-btn" onClick={() => handleSendMessage()} aria-label="Send message">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button className="ai-chat-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Open AI Assistant">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
