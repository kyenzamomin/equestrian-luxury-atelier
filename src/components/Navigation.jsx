import React from 'react';

export default function Navigation() {
  return (
    <header className="atelier-nav">
      <a href="#top" className="nav-brand">
        Atelier Vance
      </a>
      <nav className="nav-links">
        <a href="#architect" className="nav-link">
          Practice & Mobility
        </a>
        <a href="#commissions" className="nav-link">
          Selected Estates
        </a>
        <a href="#studio-contact" className="nav-link">
          Commission a Site
        </a>
      </nav>
      <span className="nav-badge">Evelyn Vance • Principal</span>
    </header>
  );
}