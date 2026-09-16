import React from 'react';
import DocBlockHeader from './DocBlockHeader';
import Criterion from './Criterion';

export default function Judging() {
  return (
    <div className="doc-block" id="judging">
      <DocBlockHeader>03 &middot; Judging Criteria</DocBlockHeader>
      <div className="criteria-grid">
        <Criterion num="01" title="Agentic Depth">
          Real autonomy, tool use, or multi-step reasoning rather than a single prompt dressed up.
        </Criterion>
        <Criterion num="02" title="Demo Credibility">
          Does it actually complete the task it claims to, end to end?
        </Criterion>
        <Criterion num="03" title="Repo &amp; Doc Clarity">
          Could a stranger understand what it does in under 5 minutes?
        </Criterion>
      </div>
    </div>
  );
}
