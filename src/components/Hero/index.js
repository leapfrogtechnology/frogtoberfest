import React from 'react';
import { useEffect, useRef } from 'react';
import MetaPlate from './components/MetaPlate';
import HeroArt from './components/HeroArt';
import mainLogo from '../../assets/images/main-logo-v2.svg';

export default function Hero() {
  const ctaRef = useRef(null);

  /* ---- Nav CTA: only shown once this hero's own Register button scrolls
     out of view, so there's always one reachable on screen. Resets the
     nav CTA to always-visible on unmount, since other pages have no hero
     CTA of their own to wait for. ---- */
  useEffect(() => {
    const navCta = document.getElementById('navCta');
    const heroCta = ctaRef.current;
    if (!navCta || !heroCta) return undefined;

    if (!('IntersectionObserver' in window)) {
      navCta.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          navCta.classList.toggle('is-visible', !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    observer.observe(heroCta);
    return () => {
      observer.disconnect();
      navCta.classList.add('is-visible');
    };
  }, []);

  return (
    <header className="screen hero" id="mission">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1 className="hero-logo-crop">
            <img className="hero-logo" src={mainLogo} alt="Frogtoberfest 2026" />
          </h1>
          <p className="lede lg">
            A month-long virtual challenge to build an open-source, AI-powered product that solves something real.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href="https://frog.ly/frogtoberfest-2026" ref={ctaRef}>
              <span className="chip" aria-hidden="true"></span> Register Now
            </a>
          </div>

          <MetaPlate />
        </div>
      </div>

      {/* Placed after .hero-inner so mobile (where this switches from an
          absolute full-bleed layer to a normal-flow block) shows the headline
          and CTA before the mech, not after. Desktop is unaffected: it's
          position:absolute there, so document order doesn't drive its
          visual placement. */}
      <HeroArt />
    </header>
  );
}
