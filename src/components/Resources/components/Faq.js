import React from 'react';
import { useRef } from 'react';

export default function Faq({ q, children }) {
  const answerRef = useRef(null);
  const contentRef = useRef(null);

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
    requestAnimationFrame(() => {
      answer.style.maxHeight = `${content.scrollHeight}px`;
    });
  }

  return (
    <details className="faq" name="faq-accordion" onToggle={handleToggle}>
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
