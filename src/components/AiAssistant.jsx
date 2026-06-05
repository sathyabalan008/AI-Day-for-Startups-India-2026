import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const SYSTEM_ANSWERS = {
  welcome: "Welcome to AI Day for Startups INDIA 2026 - Chennai! I am your StartupTN & Google AI Guide. Ask me about the venue, the schedule, the technical tracks, or how to RSVP.",
  speakers: "Sessions will be delivered by Google Developer Experts, Cloud GCP Architects, and StartupTN leads. They will deep-dive into: Multimodal AI (Gemini/Gemma), Building AI Agents, Sovereign AI, and Edge Intelligence.",
  schedule: "The Chennai agenda on June 5, 2026 is:\n\n• **9:00 AM**: Registration & Welcome Keynote\n• **10:00 AM**: Multimodal AI Capabilities with Google Gemini\n• **11:30 AM**: Hands-on Codelab: Building AI Agents (Bring your laptops!)\n• **2:00 PM**: Sovereign AI & Edge Intelligence Panel\n• **3:30 PM**: AI Startup Pitch Showcase & Demos\n• **4:30 PM**: StartupTN Networking Mixer & Refreshments",
  pitch: "The **AI Startup Pitch Showcase** starts at 3:30 PM. Local AI startups will demo physical AI, edge intelligence, and custom LLM solutions. Secure your spot by clicking the 'Register Today' or using the official RSVP link.",
  venue: "The event is held on **June 5, 2026 (09:00 AM - 05:00 PM)** at **SRM Ramapuram, Chennai**. It is 100% free but requires an RSVP on the Google portal.",
  default: "I can help you with details about the Chennai event. Ask me about: 'StartupTN', 'Google tracks', 'schedule', 'venue', 'pitch showcase', or how to 'register'."
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

      if (lower.includes('speaker') || lower.includes('expert') || lower.includes('who') || lower.includes('track') || lower.includes('google') || lower.includes('gemma') || lower.includes('gemini')) {
        reply = SYSTEM_ANSWERS.speakers;
      } else if (lower.includes('schedule') || lower.includes('agenda') || lower.includes('time') || lower.includes('when') || lower.includes('morning') || lower.includes('afternoon')) {
        reply = SYSTEM_ANSWERS.schedule;
      } else if (lower.includes('pitch') || lower.includes('showcase') || lower.includes('demo') || lower.includes('startup') || lower.includes('startuptn')) {
        reply = SYSTEM_ANSWERS.pitch;
      } else if (lower.includes('venue') || lower.includes('where') || lower.includes('location') || lower.includes('chennai') || lower.includes('srm') || lower.includes('ramapuram')) {
        reply = SYSTEM_ANSWERS.venue;
      } else if (lower.includes('register') || lower.includes('ticket') || lower.includes('rsvp') || lower.includes('book')) {
        reply = "You can RSVP directly using the official Google for Developers link: **https://goo.gle/AI-Day-Startups**, or click the 'Register Today' button at the top!";
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
              <span>StartupTN & Google Guide</span>
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
              <button className="ai-quick-btn" onClick={() => handleSendMessage("What is the schedule?")}>
                Schedule
              </button>
              <button className="ai-quick-btn" onClick={() => handleSendMessage("Where is the venue?")}>
                Venue Info
              </button>
              <button className="ai-quick-btn" onClick={() => handleSendMessage("What are the Google tracks?")}>
                Tech Tracks
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
