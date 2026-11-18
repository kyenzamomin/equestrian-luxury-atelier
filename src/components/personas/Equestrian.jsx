import React, { useState, useEffect } from 'react';

const estatesData = [
  {
    id: 'chantilly',
    index: 'I. Chantilly, France — Master Planning & Restoration',
    title: 'Chantilly Equine Sanctuary',
    image: '/assets/images/estate-chantilly.jpg',
    detailImage: '/assets/images/estate-chantilly-interior.jpg',
    summary:
      'I directed the 24-month architectural master planning and structural rehabilitation of a 120-acre private warmblood estate outside Paris—transforming 19th-century limestone stabling into a passive-ventilated training sanctuary.',
    brief:
      'Historic cut-limestone barns retain deep winter dampness and trap ammonia below stall partitions, triggering recurrent airway inflammation in Grand Prix warmbloods, while unyielding stone pavers accelerate tendon fatigue.',
    intervention:
      'I designed concealed roof-ridge thermal chimneys that draw continuous cross-ventilation through floor-level unlacquered brass intake grilles without winter drafts. Below grade, I engineered a 45mm vulcanized rubber cobblestone subfloor and custom European oak stall partitions.',
    performance:
      'Cut airborne particulate concentrations by 68% across the winter season while eliminating post-work tendon inflammation across 34 resident competition horses.',
    specs: ['120 Acres', 'Passive Ridge Ventilation', '45mm Vulcanized Subfloor', 'Unlacquered Brass Hardware'],
  },
  {
    id: 'deauville',
    index: 'II. Normandy, France — Coastal Pavilion Architecture',
    title: 'Deauville Polo Pavilion',
    image: '/assets/images/estate-deauville.jpg',
    detailImage: '/assets/images/estate-deauville-detail.jpg',
    summary:
      'Commissioned for a private Normandy polo club, I conceived an open-span marine steel and saddle-leather pavilion engineered to withstand Atlantic salt gales while bathing every stall in diffused northern daylight.',
    brief:
      'Conventional structural steel pits rapidly under coastal salt spray, and enclosed tournament stabling overheats during peak August polo fixtures.',
    intervention:
      'I specified duplex marine-grade powder-coated structural steel beneath cantilevered Western red cedar eaves that shade high-summer sun while funneling coastal breezes. Inside the private owners’ gallery, I clad acoustic walls in vegetable-tanned saddle leather.',
    performance:
      'Delivered a corrosion-impervious coastal facility housing 48 polo ponies and a 200-guest viewing gallery with zero mechanical air conditioning.',
    specs: ['Marine-Grade Structural Steel', 'Cantilevered Cedar Eaves', 'Saddle-Leather Acoustic Walls', 'Tournament Arena'],
  },
  {
    id: 'bavaria',
    index: 'III. Munich, Germany — Acoustic Dressage Compound',
    title: 'Bavarian Dressage Compound',
    image: '/assets/images/estate-bavaria.jpg',
    detailImage: '/assets/images/estate-chantilly-interior.jpg',
    summary:
      'Upper-level dressage horses register subtle acoustic reverberation and structural vibration. I re-engineered this Munich compound around acoustic stillness and sub-zero Alpine thermal stability.',
    brief:
      'Standing-seam metal roofs amplify hail and rainfall acoustics, while reverberating concrete corridors elevated resting heart rates in young dressage prospects during indoor winter training.',
    intervention:
      'I lined interior vaults with micro-perforated Bavarian spruce acoustic baffles backed by raw sheep’s wool insulation, and decoupled the mechanical feed-processing wing on isolated neoprene foundation pads.',
    performance:
      'Reduced indoor reverberation time from 2.4 seconds to 0.55 seconds—achieving library-grade acoustic calm through heavy Alpine storms.',
    specs: ['Perforated Spruce Baffles', 'Neoprene Foundation Isolation', 'Equine Hydrotherapy Wing', 'Private Owner Lounge'],
  },
];

export default function Equestrian() {
  const [selectedEstate, setSelectedEstate] = useState(null);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.estateId) {
        const found = estatesData.find((item) => item.id === event.state.estateId);
        setSelectedEstate(found || null);
      } else {
        setSelectedEstate(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openEstateDossier = (estate) => {
    window.history.pushState({ estateId: estate.id }, '', `#${estate.id}`);
    setSelectedEstate(estate);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedEstate) {
    return (
      <article className="dossier-page">
        <div className="browser-hint">
          <span>Architectural Monograph — Use your browser’s Back button to return</span>
        </div>

        <span className="eyebrow">{selectedEstate.index}</span>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}>
          {selectedEstate.title}
        </h1>
        <p className="first-person-copy" style={{ maxWidth: '800px' }}>
          {selectedEstate.summary}
        </p>

        <img
          src={selectedEstate.detailImage}
          alt={selectedEstate.title}
          className="dossier-hero-img"
        />

        <div className="logic-grid">
          <div className="logic-box">
            <h4>I. Architectural & Site Brief</h4>
            <p>{selectedEstate.brief}</p>
          </div>
          <div className="logic-box">
            <h4>II. Spatial & Structural Intervention</h4>
            <p>{selectedEstate.intervention}</p>
          </div>
        </div>

        <div className="logic-box" style={{ marginBottom: '3rem' }}>
          <h4>III. Built Performance & Equine Outcome</h4>
          <p style={{ color: 'var(--text-ivory)' }}>{selectedEstate.performance}</p>
        </div>

        <div className="specs-row">
          {selectedEstate.specs.map((spec, i) => (
            <span key={i} className="spec-pill">
              {spec}
            </span>
          ))}
        </div>
      </article>
    );
  }

  return (
    <div id="top">
      {/* 1. CINEMATIC HERO */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/videos/equestrian-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">Evelyn Vance • Principal Equestrian Architect</span>
          <h1 className="hero-title">Architecture Engineered Around the Horse.</h1>
          <p className="hero-subtitle">
            I lead the master planning, acoustic engineering, and structural execution of private equestrian estates across Europe and the Gulf.
          </p>
          <a href="#commissions" className="hero-cta">
            Examine Built Commissions
          </a>
        </div>
      </section>

      {/* 2. ARCHITECT PERSPECTIVE & PORTRAIT */}
      <section id="architect" className="architect-section">
        <div>
          <div className="portrait-frame">
            <img src="/assets/images/evelyn.jpg" alt="Evelyn Vance — Principal Architect" />
          </div>
          <div className="portrait-caption">
            <span>Evelyn Vance, RIBA • M.Arch</span>
            <span>Paris • Munich</span>
          </div>
        </div>

        <div>
          <span className="eyebrow">Architectural Philosophy</span>
          <h2 className="architect-heading">
            Most equestrian estates are designed to flatter the spectator. Mine are engineered to protect the athlete.
          </h2>
          <p className="first-person-copy">
            Over twelve years advising private studs and Olympic training yards across Continental Europe, I observed a persistent disconnect: owners invested millions in quarried stone facades while their horses breathed stagnant air and trained on rigid subfloors.
          </p>
          <p className="first-person-copy">
            <strong>I reversed that hierarchy.</strong> Before I draw a roofline or specify unlacquered brass hardware, I model laminar airflow, acoustic reverberation, and hoof-impact biomechanics. Every estate I deliver begins with equine physiology and resolves in enduring European craft.
          </p>

          <div className="metrics-grid">
            <div>
              <div className="metric-value">14</div>
              <div className="metric-label">Private Estates Delivered</div>
            </div>
            <div>
              <div className="metric-value">68%</div>
              <div className="metric-label">Airborne Particulate Reduction</div>
            </div>
            <div>
              <div className="metric-value">12 Yrs</div>
              <div className="metric-label">Specialized Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRENT PRACTICE, TARGET ROLES & INTERNATIONAL MOBILITY */}
      <section className="credentials-strip">
        <div className="credential-block">
          <h4>Current Practice</h4>
          <div className="credential-primary">Atelier Vance — Principal Architect</div>
          <p className="credential-detail">
            Leading spatial master planning and equestrian infrastructure commissions from studios in Paris and Munich since 2019.
          </p>
        </div>

        <div className="credential-block">
          <h4>Target Roles & Mandates</h4>
          <div className="credential-primary">Director of Equestrian Architecture</div>
          <p className="credential-detail">
            Available for Principal Architect appointments, Head of Equine Infrastructure roles, and turnkey private estate master planning.
          </p>
        </div>

        <div className="credential-block">
          <h4>Geographic Mobility</h4>
          <div className="credential-primary">Europe, UK & Gulf States</div>
          <p className="credential-detail">
            Open to relocation and international site leadership across:
          </p>
          <div className="region-tags">
            <span className="region-tag">France</span>
            <span className="region-tag">Germany</span>
            <span className="region-tag">Switzerland</span>
            <span className="region-tag">United Kingdom</span>
            <span className="region-tag">Netherlands</span>
            <span className="region-tag">UAE & KSA</span>
          </div>
        </div>
      </section>

      {/* 4. SELECTED ESTATES */}
      <section id="commissions" className="commissions-section">
        <div className="section-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              Built Monograph
            </span>
            <h2 className="section-heading">Selected Estates</h2>
          </div>
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            Select an Estate to Inspect Structural Dossier
          </span>
        </div>

        {estatesData.map((estate, idx) => (
          <article
            key={estate.id}
            className={`estate-row ${idx % 2 === 1 ? 'reverse' : ''}`}
          >
            <div
              className="estate-media"
              onClick={() => openEstateDossier(estate)}
            >
              <img src={estate.image} alt={estate.title} />
            </div>

            <div>
              <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                {estate.index}
              </span>
              <h3 className="estate-title">{estate.title}</h3>
              <p className="estate-desc">{estate.summary}</p>

              <div className="specs-row">
                {estate.specs.map((spec, i) => (
                  <span key={i} className="spec-pill">
                    {spec}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="dossier-btn"
                onClick={() => openEstateDossier(estate)}
              >
                Inspect Structural Dossier →
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* 5. ARCHITECTURAL EXECUTION METHODOLOGY */}
      <section className="method-section">
        <span className="eyebrow">Practice Methodology</span>
        <h3 className="section-heading" style={{ fontSize: '2.2rem' }}>
          From Raw Acreage to Turnkey Sanctuary
        </h3>
        <div className="method-grid">
          <div className="method-card">
            <h4>I. Microclimate & Wind Diagnostics</h4>
            <p>
              I conduct on-site anemometer and thermal-gradient surveys before orienting barn wings, ensuring natural stack ventilation eliminates winter condensation.
            </p>
          </div>
          <div className="method-card">
            <h4>II. Orthopedic & Acoustic Engineering</h4>
            <p>
              I specify vulcanized subfloors, subsurface drainage matrices, and perforated timber baffles to protect equine joints and lower resting cortisol.
            </p>
          </div>
          <div className="method-card">
            <h4>III. Artisanal Fabrication & Handover</h4>
            <p>
              I work directly with European foundries and master saddlers to fabricate custom unlacquered brass hardware, ventilation grilles, and tack joinery.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO STUDIO CTA FOOTER */}
      <footer id="studio-contact" className="studio-footer">
        <span className="eyebrow">Custom Digital Portfolios</span>
        <h2 className="studio-title">Want a website built like this?</h2>
        <p className="studio-sub">
          I design and engineer editorial portfolio websites tailored to your discipline. Reach out directly to commission yours.
        </p>

        <div className="cta-button-group">
          <a
            href="https://www.linkedin.com/in/fauziya-momin-3b10202ab"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-btn-primary"
          >
            Connect on LinkedIn →
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fauziyamomin21@gmail.com&su=Custom%20Portfolio%20Website%20Inquiry&body=Hi%20Fauziya%2C%20I%20explored%20your%20Equestrian%20Atelier%20portfolio%20and%20would%20like%20to%20build%20a%20website%20like%20this."
            target="_blank"
            rel="noopener noreferrer"
            className="studio-btn-secondary"
          >
            Email fauziyamomin21@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}