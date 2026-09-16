import React from 'react';
export default function Reason({ num, title, hi, children }) {
  return (
    <div className={`reason${hi ? ' hi' : ''}`}>
      <span className="num">{num}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
