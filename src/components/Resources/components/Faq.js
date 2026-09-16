import React from 'react';
import { useRef } from 'react';

const NAV_HEIGHT = 80; // .nav .wrap height -- stays sticky above the content

export default function Faq({ q, children }) {
  const answerRef = useRef(null);
  const contentRef = useRef(null);
  const detailsRef = useRef(null);

  /* A fixed CSS max-height ceiling forces the transition to always span
     that full range, so short answers (most of them, ~60px) reach their
     real height almost instantly relative to a generic tall ceiling --
     looks broken, not just fast. Measuring each answer's actual height on
     toggle keeps the transition's start/end matching real content. */
  function handleToggle(e) {
    const answer = answerRef.current;
    const content = contentRef.current;
    if (!answer || !content) return;
    if (!e.target.open) {
      answer.style.maxHeight = '0px';
      return;
    }
    // Reopening after this item was auto-closed by opening a different one
    // in the same name group doesn't reliably transition without this: the
    // browser needs a forced layout read between the "from" and "to" values
    // to register 0px as a real starting point rather than coalescing both
    // changes into one and skipping straight to the end value.
    answer.style.maxHeight = '0px';
    // eslint-disable-next-line no-unused-expressions
    answer.offsetHeight;
    // A single rAF doesn't reliably land in the next paint -- it can still
    // land in the same frame as the reset above, which coalesces both
    // writes and skips the eased transition (snaps straight to full height,
    // looking linear/instant). Nesting a second rAF guarantees the 0px
    // reset has actually painted before the target height is applied.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        answer.style.maxHeight = `${content.scrollHeight}px`;
      });
    });

    // Once the answer has grown in, bring it fully into view if the
    // viewport's too short to show it all -- scrolls just enough to fit
    // the bottom on screen, without pushing the question itself above
    // the sticky nav if the answer is taller than the viewport allows.
    const details = detailsRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => {
      if (!details) return;
      const rect = details.getBoundingClientRect();
      const overflow = rect.bottom - window.innerHeight;
      if (overflow <= 0) return;
      const room = rect.top - NAV_HEIGHT;
      const scrollAmount = Math.max(0, Math.min(overflow, room));
      if (scrollAmount > 0) {
        window.scrollBy({ top: scrollAmount, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }, 320);
  }

  return (
    <details className="faq" name="faq-accordion" onToggle={handleToggle} ref={detailsRef}>
      <summary>
        <h3>{q}</h3>
        <span className="faq-toggle" aria-hidden="true"></span>
      </summary>
      <div className="faq-answer" ref={answerRef}>
        <div className="faq-answer-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </details>
  );
}
