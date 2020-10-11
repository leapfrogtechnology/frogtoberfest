import React from 'react';

const checklistItems = [
  'Create 6 pull requests (PRs) between Oct 1-31.',
  'At least 4 PRs should be in repositories not owned by you.',
  'PRs can be made to any public repository on GitHub.',
  'PRs should not be labeled as `invalid`.'
];

/**
 * Component to show details about Frogtoberfest in the homepage.
 */
const SiteDetails = () => (
  <div className="md:py-4 mb-6">
    <div className="rounded mx-auto shadow w-3/4 sm:w-1/2">
      <div className="px-6 py-4">
        <div className="font-bold mb-4">
          <p className="mb-4 leading-normal text-lg mb-1">
            Frogtoberfest is a spin-off of Hacktoberfest; a month-long Open Source contribution challenge for
            Leapfroggers.
          </p>
        </div>
        <ul className="p-0">
          {checklistItems.map((item, index) => (
            <li className="flex leading-tight items-center mb-3" key={index}>
              <div className="rounded-full fill-current text-green-500">
                <svg
                  className="w-6 h-6 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="text-gray-600 text-m ml-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SiteDetails;
