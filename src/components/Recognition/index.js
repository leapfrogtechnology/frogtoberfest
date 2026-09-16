import React from 'react';
import Badge from './components/Badge';
import mechVictory from '../../assets/images/mech-victory-v3.png';

export default function Recognition() {
  return (
    <section className="screen recognition screen-pad on-dark" id="recognition">
      <div className="blueprint-grid on-dark" aria-hidden="true"></div>
      <div className="wrap recognition-inner">
        <div>
          <p className="tag">Screen 02 &middot; Who Gets Celebrated</p>
          <h2 className="h2" style={{ color: 'var(--paper)', marginBottom: 32 }}>
            Recognition
          </h2>

          <div className="badge-list">
            <Badge rank="01" title="Best AI Project" prize="Grand Prize">
              The project that stands out for innovation, technical excellence, open-source contribution, and real-world
              impact.
            </Badge>
            <Badge rank="02" title="Top 5 Teams">
              Strongest projects are shortlisted to showcase their work at the final demo.
            </Badge>
            <Badge rank="03" title="All Eligible Participants">
              Digital Certificate of Recognition for their contribution to Frogtoberfest.
            </Badge>
          </div>
        </div>

        <div className="recognition-art">
          <picture>
            <img src={mechVictory} alt="Frog Mecha, victory pose" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </section>
  );
}
