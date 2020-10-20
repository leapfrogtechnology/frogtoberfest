import React from 'react';

const checklistItems = [
  '1. Create 6 pull requests (PRs) between Oct 1-31.',
  '2. At least 4 PRs should be in repositories not owned by you.',
  '3. PRs can be made to any public repository on GitHub.',
  '4. PRs should not be labeled as invalid.'
];

const SiteDetails = () => (
  <div className="md:py-4 mb-6 mt-8">
    <div className="rounded-lg mx-auto border border-white border-opacity-50 w-4/12">
      <div className="px-6 py-4">
        <div className="font-bold mb-8">
          <p className="mb-4 text-white font-semibold flex items-center text-lg">
            <svg
              className="mr-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66666 10C2.66666 10 3.33332 9.33337 5.33332 9.33337C7.33332 9.33337 8.66666 10.6667 10.6667 10.6667C12.6667 10.6667 13.3333 10 13.3333 10V2.00004C13.3333 2.00004 12.6667 2.66671 10.6667 2.66671C8.66666 2.66671 7.33332 1.33337 5.33332 1.33337C3.33332 1.33337 2.66666 2.00004 2.66666 2.00004V10Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66666 14.6667V10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Rules for participation
          </p>
        </div>
        <ul className="p-0">
          {checklistItems.map((item, index) => (
            <li className="flex leading-tight items-center mb-3" key={index}>
              <span className="text-white font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SiteDetails;
