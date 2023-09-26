import React from 'react';

import { HOSTNAME } from 'config';
// import frogtoberfestLogo from 'assets/images/frogtoberfest2022-logo.png';
// import leapfrogOpenSourceLogo from 'assets/images/leapfrog-opensource-logo.png';
import Img1 from 'assets/images/img-1.png';

const SiteTitle = () => (
  <div className="md:py-6 text-center bg-dark-black">
    {/* <div className="mx-auto w-2/3 sm:w-1/2 md:py-12"> */}
    <div className="w-100 mx-auto mb-2">
      <img alt="Leapfrog Open Source" src={Img1} />
    </div>
    {/* </div> */}
  </div>
);

export default SiteTitle;
