// App.jsx
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './utils/data';
import './components/Portfolio.css';

export default function App() {
  return (
    <>
      <div className="ambient-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      {/* Passando os dados do data.js para os componentes */}
      <Hero data={portfolioData.hero} />
      <Projects projects={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        © {new Date().getFullYear()} {portfolioData.hero.name}.
      </footer>
    </>
  );
}