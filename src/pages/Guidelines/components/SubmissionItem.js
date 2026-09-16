import React from 'react';
export default function SubmissionItem({ idx, title, children }) {
  return (
    <div className="submission-item">
      <span className="idx">{idx}</span>
      <span className="title">{title}</span>
      <span className="desc">{children}</span>
    </div>
  );
}
