import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeShowcase from './components/VibeShowcase';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import AiAssistant from './components/AiAssistant';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
      
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
        <VibeShowcase />
        <Schedule />
        <Speakers />
      </main>

      <Footer />
      
      <AiAssistant />
      
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </>
  );
}

export default App;
