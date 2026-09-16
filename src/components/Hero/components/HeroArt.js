import React from 'react';
import cloud1 from '../../../assets/images/cloud-1.png';
import cloud2 from '../../../assets/images/cloud-2.png';
import heroPilot from '../../../assets/images/hero-pilot-tall-v2.png';

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="false">
      <div className="blueprint-grid" aria-hidden="true"></div>
      <img className="hero-cloud hero-cloud-back" src={cloud2} alt="" aria-hidden="true" loading="lazy" />
      <div className="hero-figure">
        <span className="hero-annot" aria-hidden="true">
          UNIT&#8209;07 &middot; PILOT: HUMAN
        </span>
        <picture>
          <img
            src={heroPilot}
            alt="Frog Mecha with its pilot seated on its shoulder"
            width="935"
            height="1062"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <img className="hero-cloud hero-cloud-front" src={cloud1} alt="" aria-hidden="true" loading="lazy" />
    </div>
  );
}
