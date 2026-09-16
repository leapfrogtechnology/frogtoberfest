import React from 'react';
export default function Criterion({ num, title, children }) {
  return (
    <div className="criterion">
      <span className="num">{num}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
