import React from 'react';
import { useRef } from 'react';

const NAV_HEIGHT = 80; // .nav .wrap height -- stays sticky above the content

export default function Faq({ q, children }) {
  const contentRef = useRef(null);
  const detailsRef = useRef(null);

  function handleToggle(e) {
    if (!e.target.open) return;

    // Once the answer has grown in, bring it fully into view if the
    // viewport's too short to show it all -- scrolls just enough to fit
    // the bottom on screen, without pushing the question itself above
    // the sticky nav if the answer is taller than the viewport allows.
    // Started right away rather than after the expand finishes: the
    // target height is already known, so the scroll's endpoint doesn't
    // need to wait for the box to actually reach it. Waiting for that
    // reads as a hold -- nothing moves in the viewport for the whole
    // expand, then it jumps into a separate scroll. Running both at once
    // reads as one motion.
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = details.getBoundingClientRect();
    const predictedBottom = rect.bottom + content.scrollHeight;
    const overflow = predictedBottom - window.innerHeight;
    if (overflow > 0) {
      const room = rect.top - NAV_HEIGHT;
      const scrollAmount = Math.max(0, Math.min(overflow, room));
      if (scrollAmount > 0) {
        window.scrollBy({ top: scrollAmount, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
  }

  return (
    <details className="faq" name="faq-accordion" onToggle={handleToggle} ref={detailsRef}>
      <summary>
        <h3>{q}</h3>
        <span className="faq-toggle" aria-hidden="true"></span>
      </summary>
      <div className="faq-answer-content" ref={contentRef}>
        {children}
      </div>
    </details>
  );
}
