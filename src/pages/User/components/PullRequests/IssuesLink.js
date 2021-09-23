import React from 'react';

const IssuesLink = () => (
  <div className="flex flex-wrap justify-center content-center">
    <div className="text-white pb-4 pt-4">
      Look at the
      <a
        href="https://github.com/search?q=label:hacktoberfest+state:open+type:issue"
        className="text-green-400 underline px-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        issues
      </a>
      and start hacking!
    </div>
  </div>
);

export default IssuesLink;
