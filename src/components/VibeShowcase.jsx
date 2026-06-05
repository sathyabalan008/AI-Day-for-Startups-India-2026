import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  BarChart3, 
  CheckSquare, 
  User, 
  Music, 
  Calculator, 
  Layout, 
  BookOpen, 
  Hourglass, 
  CalendarRange, 
  ArrowRight, 
  Sparkles, 
  Play, 
  RefreshCw 
} from 'lucide-react';

const appCategories = [
  { id: 9, name: 'Event Countdowner', icon: Hourglass, desc: 'Live ticking countdown to the main AI Day event on June 5, 2026.' },
  { id: 6, name: 'Smart Calculators', icon: Calculator, desc: 'Estimate model pricing and token consumption for Gemini API tiers.' },
  { id: 2, name: 'Interactive Dashboards', icon: BarChart3, desc: 'Live dashboard visualizing ML performance metrics, CPU load, and request volume.' },
  { id: 1, name: 'Retro Arcade Games', icon: Gamepad2, desc: 'Build retro favorites like Pong, Breakout, or Snake using natural language.' },
  { id: 3, name: 'Productivity Utilities', icon: CheckSquare, desc: 'Interactive focus tools, Pomodoro timers, and developer task checklists.' },
  { id: 4, name: 'Personal Portfolios', icon: User, desc: 'Stunning dynamic portfolio pages with built-in showcase features.' },
  { id: 5, name: 'Custom Media Players', icon: Music, desc: 'Audio and playlist controllers complete with responsive frequency waves.' },
  { id: 7, name: 'Interactive Storyboards', icon: Layout, desc: 'Planning and design tool for wireframing user flows and layouts.' },
  { id: 8, name: 'Resource Libraries', icon: BookOpen, desc: 'Curated knowledge bases, prompt sheets, and starter kits.' },
  { id: 10, name: 'Daily Habit Logs', icon: CalendarRange, desc: 'Sleek progress calendars to log learning routines and streaks.' },
];

export default function VibeShowcase() {
  const [activeId, setActiveId] = useState(9); // Default to Countdowner
  
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Calculator State
  const [calcModel, setCalcModel] = useState('flash');
  const [inputTokens, setInputTokens] = useState(100000);
  const [outputTokens, setOutputTokens] = useState(50000);
  const [calcResult, setCalcResult] = useState(0);

  // Dashboard State
  const [dashboardModel, setDashboardModel] = useState('gemini-1.5-flash');
  const [dbData, setDbData] = useState({ requests: 124, utilization: 68, latency: 142 });
  const [chartBars, setChartBars] = useState([40, 65, 80, 50, 70, 95, 60]);

  // Handle countdown calculation
  useEffect(() => {
    const targetDate = new Date('June 5, 2026 09:30:00 GMT+0530').getTime();
    
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle calculator calculation
  useEffect(() => {
    const rates = {
      // Rates per million tokens
      flash: { input: 0.075, output: 0.30 },
      pro: { input: 1.25, output: 5.00 }
    };
    
    const selectedRates = rates[calcModel];
    const inputCost = (inputTokens / 1000000) * selectedRates.input;
    const outputCost = (outputTokens / 1000000) * selectedRates.output;
    
    setCalcResult((inputCost + outputCost).toFixed(4));
  }, [calcModel, inputTokens, outputTokens]);

  // Handle dashboard simulation
  useEffect(() => {
    if (activeId !== 2) return;

    const interval = setInterval(() => {
      setDbData(prev => ({
        requests: prev.requests + Math.floor(Math.random() * 7) - 3,
        utilization: Math.min(100, Math.max(10, prev.utilization + Math.floor(Math.random() * 9) - 4)),
        latency: Math.min(300, Math.max(50, prev.latency + Math.floor(Math.random() * 21) - 10))
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, [activeId]);

  // Animate chart bars on dashboard model change
  const handleDashboardModelChange = (model) => {
    setDashboardModel(model);
    // Shuffle bar heights based on selected model
    if (model === 'gemini-1.5-flash') {
      setChartBars([40, 65, 80, 50, 70, 95, 60]);
    } else if (model === 'gemini-1.5-pro') {
      setChartBars([75, 45, 90, 85, 55, 60, 80]);
    } else {
      setChartBars([95, 85, 99, 90, 95, 98, 97]);
    }
  };

  const activeApp = appCategories.find(app => app.id === activeId);

  return (
    <section className="vibe-showcase" id="vibe-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Vibe Coding Playground</span>
          <h2 className="section-title">Building Simple Apps in Seconds</h2>
          <p className="section-desc">
            Explore the 10 core application categories you can build and launch instantly using natural language prompts.
          </p>
        </div>

        {/* 10 Categories Grid */}
        <div className="vibe-grid">
          {appCategories.map((app) => {
            const Icon = app.icon;
            return (
              <div 
                key={app.id}
                className={`vibe-card ${activeId === app.id ? 'active' : ''}`}
                onClick={() => setActiveId(app.id)}
              >
                <Icon size={24} className="gradient-text" style={{ strokeWidth: 2 }} />
                <span className="vibe-card-title">{app.name}</span>
              </div>
            );
          })}
        </div>

        {/* Active Demo Area */}
        <div className="active-demo-area">
          <div className="demo-container">
            <div className="demo-title-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={18} className="gradient-text" />
                <span className="demo-title">{activeApp.name}</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-accent)', fontWeight: 600 }}>
                Demo Sandbox
              </span>
            </div>

            {/* Event Countdowner (9) */}
            {activeId === 9 && (
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  The clock is ticking down to the absolute biggest AI ecosystem meetup in India.
                </p>
                <div className="countdown-box">
                  <div className="countdown-segment">
                    <div className="countdown-num">{timeLeft.days}</div>
                    <div className="countdown-lbl">Days</div>
                  </div>
                  <div className="countdown-segment">
                    <div className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="countdown-lbl">Hrs</div>
                  </div>
                  <div className="countdown-segment">
                    <div className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="countdown-lbl">Min</div>
                  </div>
                  <div className="countdown-segment">
                    <div className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="countdown-lbl">Sec</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Starts June 5, 2026 @ 09:30 AM IST</span>
                  </div>
                </div>
              </div>
            )}

            {/* Smart Calculators (6) */}
            {activeId === 6 && (
              <div className="calc-grid">
                <div>
                  <div className="form-group">
                    <label className="form-label">Select LLM API Model</label>
                    <select 
                      className="form-select"
                      value={calcModel}
                      onChange={(e) => setCalcModel(e.target.value)}
                    >
                      <option value="flash">Gemini 1.5 Flash (Affordable & Ultra-Fast)</option>
                      <option value="pro">Gemini 1.5 Pro (High-Reasoning & Complex Tasks)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Input Tokens ({inputTokens.toLocaleString()})</label>
                    <input 
                      type="range" 
                      min="10000" 
                      max="5000000" 
                      step="10000" 
                      className="form-input" 
                      style={{ padding: 0, cursor: 'pointer', height: '6px' }}
                      value={inputTokens}
                      onChange={(e) => setInputTokens(Number(e.target.value))}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Output Tokens ({outputTokens.toLocaleString()})</label>
                    <input 
                      type="range" 
                      min="5000" 
                      max="1000000" 
                      step="5000" 
                      className="form-input" 
                      style={{ padding: 0, cursor: 'pointer', height: '6px' }}
                      value={outputTokens}
                      onChange={(e) => setOutputTokens(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="calc-output-box">
                  <div className="calc-output-title">Estimated Query Cost</div>
                  <div className="calc-output-val">${calcResult}</div>
                  <p className="calc-output-desc">
                    Based on standard pricing rate: 
                    {calcModel === 'flash' ? ' $0.075 / 1M input, $0.30 / 1M output.' : ' $1.25 / 1M input, $5.00 / 1M output.'}
                  </p>
                </div>
              </div>
            )}

            {/* Interactive Dashboards (2) */}
            {activeId === 2 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      className={`tab-btn ${dashboardModel === 'gemini-1.5-flash' ? 'active' : ''}`}
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                      onClick={() => handleDashboardModelChange('gemini-1.5-flash')}
                    >
                      Gemini 1.5 Flash
                    </button>
                    <button 
                      className={`tab-btn ${dashboardModel === 'gemini-1.5-pro' ? 'active' : ''}`}
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                      onClick={() => handleDashboardModelChange('gemini-1.5-pro')}
                    >
                      Gemini 1.5 Pro
                    </button>
                    <button 
                      className={`tab-btn ${dashboardModel === 'ultra-3.0' ? 'active' : ''}`}
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                      onClick={() => handleDashboardModelChange('ultra-3.0')}
                    >
                      Gemini 3.0 Ultra
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <RefreshCw size={12} className="animate-spin" style={{ animation: 'spin 3s linear infinite' }} />
                    <span>Auto-updating stream...</span>
                  </div>
                </div>

                <div className="db-metrics">
                  <div className="db-metric-card">
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      API Requests / Sec
                    </div>
                    <div className="db-metric-num">{dbData.requests} reqs</div>
                  </div>
                  <div className="db-metric-card">
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Latency (ms)
                    </div>
                    <div className="db-metric-num" style={{ color: dbData.latency > 200 ? '#ef4444' : '#10b981' }}>
                      {dbData.latency} ms
                    </div>
                  </div>
                  <div className="db-metric-card">
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      GPU Node Load
                    </div>
                    <div className="db-metric-num" style={{ color: dbData.utilization > 85 ? '#f59e0b' : '#38bdf8' }}>
                      {dbData.utilization}%
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>
                  Endpoint Throughput Distribution (Last 7 Epochs)
                </div>
                <div className="db-chart-container">
                  {chartBars.map((val, idx) => (
                    <div 
                      key={idx} 
                      className="db-chart-bar" 
                      style={{ height: `${val}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Other categories placeholder (1, 3, 4, 5, 7, 8, 10) */}
            {[1, 3, 4, 5, 7, 8, 10].includes(activeId) && (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <p style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '16px' }}>
                  {activeApp.desc}
                </p>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.1)', maxWidth: '500px', margin: '0 auto 24px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-accent)', marginBottom: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Sparkles size={14} /> Prompt Instruction
                  </div>
                  <code style={{ fontSize: '0.9rem', color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '6px 12px', display: 'inline-block', borderRadius: '6px' }}>
                    /create a simple {activeApp.name.toLowerCase()} with custom styling
                  </code>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  This sandbox environment can run generated react components dynamically. Build, edit, and launch this category using natural language with the assistant.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
