import React from 'react';
export default function Statement({ num, children }) {
  return (
    <div className="statement">
      <span className="num">{num}</span>
      <p>{children}</p>
    </div>
  );
}
