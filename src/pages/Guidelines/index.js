import React from 'react';
import { useEffect } from 'react';
import Submission from './components/Submission';
import Eligibility from './components/Eligibility';
import Judging from './components/Judging';

export default function Guidelines() {
  /* ---- Sidebar index: highlight the doc-block currently in view.
     Picks whichever section has the largest fraction of ITS OWN height
     currently visible, not raw visible pixels -- Guidelines is short enough
     (as its own standalone page) that Submission (by far the tallest block)
     would otherwise always win a raw-pixel comparison purely by being
     bigger, even three-quarters scrolled past. Ratio normalizes for that;
     ties (multiple sections simultaneously fully visible, unavoidable once
     remaining scrollable distance is shorter than a viewport) prefer the
     later section, since sections are scanned in order and a tie keeps
     overwriting the pick. ---- */
  useEffect(() => {
    const docLinks = document.querySelectorAll('.doc-index a');
    if (!docLinks.length) return undefined;

    const docSections = Array.prototype.map.call(docLinks, link => document.querySelector(link.getAttribute('href')));

    function updateActive() {
      const vh = window.innerHeight;
      let activeIndex = 0;
      let bestRatio = -1;
      docSections.forEach((section, i) => {
        if (!section) return;
        const r = section.getBoundingClientRect();
        const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
        const ratio = visible / (r.height || 1);
        if (ratio >= bestRatio - 0.001) {
          activeIndex = i;
          bestRatio = Math.max(bestRatio, ratio);
        }
      });
      docLinks.forEach((link, i) => link.classList.toggle('is-active', i === activeIndex));
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActive();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="screen guidelines screen-pad" id="guidelines">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Field Documentation</p>
            <h2 className="h2">Guidelines</h2>
          </div>
        </div>

        <div className="doc-layout">
          <nav className="doc-index" aria-label="Guidelines index">
            <a href="#submission">01 &middot; Submission</a>
            <a href="#eligibility">02 &middot; Eligibility</a>
            <a href="#judging">03 &middot; Judging Criteria</a>
          </nav>

          <div>
            <Submission />
            <Eligibility />
            <Judging />
          </div>
        </div>
      </div>
    </section>
  );
}
