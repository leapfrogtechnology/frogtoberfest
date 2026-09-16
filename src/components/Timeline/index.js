import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TimelineNode from './components/TimelineNode';
import NODES from './nodes';

export default function Timeline() {
  const railRef = useRef(null);
  const fillRef = useRef(null);

  /* ---- Fill rail + light up nodes as they scroll into view ---- */
  useEffect(() => {
    const rail = railRef.current;
    const fill = fillRef.current;
    if (!rail || !fill) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) fill.style.transition = 'none';

    function updateFill() {
      const railRect = rail.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.7;
      let progressPx = viewportCenter - railRect.top;
      progressPx = Math.max(0, Math.min(progressPx, railRect.height));
      const fraction = railRect.height > 0 ? progressPx / railRect.height : 0;
      fill.style.transform = 'scaleY(' + fraction + ')';

      rail.querySelectorAll('.tl-node').forEach(node => {
        const r = node.getBoundingClientRect();
        const nodeTop = r.top - railRect.top;
        node.classList.toggle('active', nodeTop <= progressPx);
      });
    }

    // rAF-throttled: scroll can fire far faster than the browser paints,
    // and this reads layout (getBoundingClientRect) on every node -- running
    // it unthrottled reads/writes layout on every scroll tick instead of
    // once per frame.
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateFill();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateFill();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="screen timeline screen-pad" id="timeline">
      <div className="wrap">
        <div className="callout" style={{ marginBottom: 56 }}>
          <div className="callout-hdr">
            <span className="chip" aria-hidden="true"></span>
            Field Note
          </div>
          <div className="callout-body">
            <p className="lede">Navigate your way through the challenge.</p>
            <Link className="btn btn-outline" to="/guidelines">
              View Guidelines <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="sec-head">
          <div>
            <p className="tag">Screen 03 &middot; Mission Log</p>
            <h2 className="h2">Timeline</h2>
          </div>
          <span className="sec-head-right">Webinar &rarr; Demo Day</span>
        </div>

        <div className="tl-rail" ref={railRef}>
          <div className="tl-fill" ref={fillRef} aria-hidden="true"></div>

          {NODES.map(node => (
            <TimelineNode key={node.phase} {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}
