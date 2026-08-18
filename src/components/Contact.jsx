import React from 'react';
import { Mail, FolderGit2, Briefcase, ArrowUpRight } from 'lucide-react';
import {portfolioData} from '../utils/data';

export default function Contact({ data }) {
  return (
    <section className="section-container" id="contato">
      <span className="section-subtitle">Contato</span>
      <h2 className="section-title">Vamos construir algo juntos</h2>

      <div className="contact-list">
        <a href={`mailto:${data.email}`} className="contact-item">
          <div className="contact-info">
            <Mail size={24} color="var(--text-muted)" />
            <div>
              <span style={{ display: 'block', fontWeight: 'bold' }}>E-mail</span>
              <span style={{ color: 'var(--text-muted)' }}>{data.email}</span>
            </div>
          </div>
          <ArrowUpRight size={20} color="var(--text-muted)" />
        </a>

        <a href={data.githubLink} target="_blank" rel="noreferrer" className="contact-item">
          <div className="contact-info">
            <FolderGit2 size={24} color="var(--text-muted)" />
            <div>
              <span style={{ display: 'block', fontWeight: 'bold' }}>GitHub</span>
              <span style={{ color: 'var(--text-muted)' }}>{data.githubName}</span>
            </div>
          </div>
          <ArrowUpRight size={20} color="var(--text-muted)" />
        </a>

        <a href={data.linkedinLink} target="_blank" rel="noreferrer" className="contact-item">
          <div className="contact-info">
            <Briefcase size={24} color="var(--text-muted)" />
            <div>
              <span style={{ display: 'block', fontWeight: 'bold' }}>LinkedIn</span>
              <span style={{ color: 'var(--text-muted)' }}>{data.linkedinName}</span>
            </div>
          </div>
          <ArrowUpRight size={20} color="var(--text-muted)" />
        </a>
      </div>
    </section>
  );
}