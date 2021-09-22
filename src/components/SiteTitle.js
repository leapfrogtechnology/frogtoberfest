import React from 'react';

import { HOSTNAME } from 'config';
import frogtoberfestLogo from 'assets/images/frogtoberfest_logo_2021.svg';
import lfOpensourceLogo from 'assets/images/leapfrog_opensource.png';

const SiteTitle = () => (
  <div className="md:py-4 text-center">
    <div className="mx-auto w-2/3 sm:w-1/2 py-4">
      <div className="w-48 mx-auto mt-5">
        <img alt="Leapfrog Open Source" src={lfOpensourceLogo} />
      </div>
      <a className="block cursor-pointer no-underline mt-20" href={HOSTNAME} title="Frogtoberfest">
        <img className="mx-auto" alt="Frogtoberfest Artwork" src={frogtoberfestLogo} />
        <h5 className="text-lg text-white font-normal pt-10">
          Frogtoberfest is inspired from Hacktoberfest a month long <br />
          opensource contribution challenge for Leapfroggers.
        </h5>
      </a>
    </div>
  </div>
);

export default SiteTitle;
