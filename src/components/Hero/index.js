import React from 'react';
import MetaPlate from './components/MetaPlate';
import HeroArt from './components/HeroArt';
import mainLogo from '../../assets/images/main-logo-v2.svg';

export default function Hero() {
  return (
    <header className="screen hero" id="mission">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1 className="hero-logo-crop">
            <img className="hero-logo" src={mainLogo} alt="Frogtoberfest 2026" />
          </h1>
          <p className="lede lg">
            A month-long virtual challenge to build an open-source, AI‑powered product that solves something real.
          </p>
          <MetaPlate />
        </div>
      </div>

      {/* Placed after .hero-inner so mobile (where this switches from an
          absolute full-bleed layer to a normal-flow block) shows the headline
          before the mech, not after. Desktop is unaffected: it's
          position:absolute there, so document order doesn't drive its
          visual placement. */}
      <HeroArt />
    </header>
  );
}
