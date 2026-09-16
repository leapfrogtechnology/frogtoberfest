import React from 'react';
export default function Badge({ rank, title, children, prize }) {
  return (
    <div className="badge" data-rank={rank}>
      <span className="corner tl" aria-hidden="true"></span>
      <span className="corner br" aria-hidden="true"></span>
      <h3>{title}</h3>
      <p>{children}</p>
      {prize && <span className="prize">{prize}</span>}
    </div>
  );
}
