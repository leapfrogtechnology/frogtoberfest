import React from 'react';
import DocBlockHeader from './DocBlockHeader';
import SubmissionItem from './SubmissionItem';

export default function Eligibility() {
  return (
    <div className="doc-block" id="eligibility">
      <DocBlockHeader>02 &middot; Eligibility</DocBlockHeader>
      <SubmissionItem idx="—" title="Who can enter">
        Anyone based in Nepal, solo or in a team of up to 5. This challenge has always been about fostering the Nepali
        open-source community.
      </SubmissionItem>
      <SubmissionItem idx="—" title="Registration window">
        September 15&ndash;29, 2026. Team, idea, and a public repo required to enter.
      </SubmissionItem>
    </div>
  );
}
