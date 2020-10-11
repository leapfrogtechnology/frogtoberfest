import React from 'react';

import { HOSTNAME } from 'config';
import frogtoberfestLogo from 'assets/images/frogtoberfest2020-logo.png';

const SiteTitle = () => (
  <div className="md:py-4 text-center bg-gray-100">
    <div className="mx-auto w-2/3 sm:w-1/2 py-4">
      <div className="w-48 mx-auto mb-4">
        <img
          alt="Leapfrog Open Source"
          src="https://github.com/leapfrogtechnology/opensource/raw/master/assets/leapfrog-opensource-logo.png"
        />
      </div>
      <div className="text-gray-800 tracking-wide text-xs mb-4">PRESENTS</div>
      <a className="block cursor-pointer no-underline" href={HOSTNAME} title="Frogtoberfest">
        <img alt="Frogtoberfest Artwork" src={frogtoberfestLogo} />
      </a>
    </div>
  </div>
);

export default SiteTitle;
