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

    // The rail/fill line's top and bottom default to a guessed 8px in CSS,
    // which only matched the first/last markers back when they sat at a
    // fixed offset. Now that each marker centers on its own box (variable
    // height per node), the line has to be measured against the real
    // first/last node centers instead, or it juts out past the first
    // marker and drifts short of (or past) the last one.
    // Line inset (left:13px) and width (2px) from .tl-rail::before/.tl-fill,
    // and the marker's own width (16px) from .tl-node-inner::before -- kept
    // as constants here rather than read back from CSS since they're
    // already tightly coupled to those rules.
    const LINE_LEFT = 13;
    const LINE_WIDTH = 2;
    const MARKER_WIDTH = 16;

    function positionRail() {
      const nodes = rail.querySelectorAll('.tl-node-inner');
      if (!nodes.length) return;
      const railRect = rail.getBoundingClientRect();
      const firstRect = nodes[0].getBoundingClientRect();
      const lastRect = nodes[nodes.length - 1].getBoundingClientRect();
      const top = firstRect.top + firstRect.height / 2 - railRect.top;
      const bottom = railRect.bottom - (lastRect.bottom - lastRect.height / 2);
      rail.style.setProperty('--rail-top', `${top}px`);
      rail.style.setProperty('--rail-bottom', `${bottom}px`);

      // Measured, not guessed: the marker's `left` is relative to each
      // .tl-node-inner's own padding box, whose exact offset from the rail
      // (border/padding included) isn't reliably hand-calculable. Measuring
      // the real gap between the line's actual x and the box's actual left
      // edge removes the guesswork entirely.
      const lineCenterX = railRect.left + LINE_LEFT + LINE_WIDTH / 2;
      const markerLeft = lineCenterX - firstRect.left - MARKER_WIDTH / 2;
      rail.style.setProperty('--marker-left', `${markerLeft}px`);
    }

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

    function onResize() {
      positionRail();
      onScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    positionRail();
    updateFill();

    // Window resize alone misses reflows that change node heights without
    // resizing the window -- web fonts swapping in after first paint being
    // the main one -- which left --rail-top/--rail-bottom stale and the
    // line short of (or past) the real marker centers. ResizeObserver
    // catches any such reflow of the rail's content, not just the viewport.
    const ro = new ResizeObserver(onResize);
    ro.observe(rail);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
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
