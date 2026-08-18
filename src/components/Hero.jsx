import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {portfolioData} from '../utils/data';


export default function Hero({ data }) {
  return (
    <section className="section-container" id="hero">
      <div className="hero-content">
        <h1>Olá, eu sou <span style={{ color: "var(--accent-color)" }}>{data.name}</span></h1>
        <p>{data.role}<br></br> {data.description}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projetos"><button className="btn-primary">Ver projetos</button></a>
          <a href="#contato">
            <button className="btn-secondary">Falar comigo <ArrowUpRight size={18} /></button>
          </a>
        </div>
      </div>
    </section>
  );
}