import React from 'react';
export default function TimelineNode({ date, phase, desc, hi }) {
  return (
    <div className={`tl-node${hi ? ' hi' : ''}`}>
      <div className="tl-node-inner">
        <span className="tl-date">{date}</span>
        <span className="tl-phase">{phase}</span>
        <span className="tl-desc">{desc}</span>
      </div>
    </div>
  );
}
