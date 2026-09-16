import React from 'react';
import DocBlockHeader from './DocBlockHeader';
import SubmissionItem from './SubmissionItem';

export default function Submission() {
  return (
    <div className="doc-block" id="submission">
      <DocBlockHeader>01 &middot; What You Need to Submit</DocBlockHeader>
      <SubmissionItem idx="01" title="Public GitHub repository">
        Source code is public and includes everything needed to run and understand the solution.
      </SubmissionItem>
      <SubmissionItem idx="02" title="Documentation">
        README, architecture overview, technology details, and limitations / future improvements.
      </SubmissionItem>
      <SubmissionItem idx="03" title="Working demo">
        A functional demonstration of the agent and its key capabilities.
      </SubmissionItem>
      <SubmissionItem idx="04" title="Demo video / presentation">
        A 2&ndash;3 min pre-recorded demo showing the problem, solution, workflow, and value.
      </SubmissionItem>
      <SubmissionItem idx="05" title="AI disclosure">
        Qualifies as an AI Agent: makes decisions, uses tools/systems, maintains context, or takes action &ndash; not
        just a chatbot or LLM wrapper.
      </SubmissionItem>
    </div>
  );
}
