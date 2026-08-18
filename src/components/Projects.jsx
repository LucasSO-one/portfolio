import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Calculator, Smartphone, Terminal, Code } from 'lucide-react';
import {portfolioData} from '../utils/data';

const renderIcon = (iconName) => {
  const props = { size: 64, color: "rgba(255,255,255,0.8)" };
  switch (iconName) {
    case 'calculator': return <Calculator {...props} />;
    case 'terminal': return <Terminal {...props} />;
    case 'smartphone': return <Smartphone {...props} />;
    default: return <Code {...props} />;
  }
};

export default function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="section-container" id="projetos">
      <span className="section-subtitle">Portfólio</span>
      <h2 className="section-title">Projetos selecionados</h2>

      <div className="glass-card fade-in" key={currentProject.id}>
        <div className="projects-grid">
          
          <div className="project-visual" style={{ background: currentProject.bgGradient }}>
            <span className="project-badge">{currentProject.badge}</span>
            {renderIcon(currentProject.iconName)}
          </div>

          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{currentProject.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              {currentProject.description}
            </p>

            <div className="project-stats">
              {currentProject.stats.map((stat, i) => (
                <div key={i} className="stat-box">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="project-actions">
              <a href={currentProject.link} target="_blank" rel="noreferrer" className="btn-secondary">
                Visitar projeto <ArrowUpRight size={16} />
              </a>
              
              <button onClick={handleNext} className="btn-next">
                Próximo <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}