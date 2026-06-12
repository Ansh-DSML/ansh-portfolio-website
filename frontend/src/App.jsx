import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FocusMilestones from './components/FocusMilestones';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FocusMilestones />
      <Projects />
      <ContactFooter />
    </div>
  );
}

export default App;
