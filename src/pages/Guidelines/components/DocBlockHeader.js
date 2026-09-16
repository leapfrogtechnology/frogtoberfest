import React from 'react';
export default function DocBlockHeader({ children }) {
  return (
    <div className="doc-block-hdr">
      <span className="chip" aria-hidden="true"></span> {children}
    </div>
  );
}
