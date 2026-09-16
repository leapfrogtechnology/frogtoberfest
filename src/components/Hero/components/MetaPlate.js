import React from 'react';
export default function MetaPlate() {
  return (
    <div className="meta-plate">
      <div className="meta-plate-hdr">
        <span className="chip" aria-hidden="true"></span>
        <span>Key Dates</span>
        <span className="meta-plate-ref">02 Fields</span>
      </div>
      <dl className="meta-grid">
        <div className="meta-card">
          <dt>Register Before</dt>
          <dd>September 29, 2026</dd>
        </div>
        <div className="meta-card">
          <dt>Challenge Duration</dt>
          <dd>Oct 1 &ndash; Oct 30, 2026</dd>
        </div>
      </dl>
    </div>
  );
}
