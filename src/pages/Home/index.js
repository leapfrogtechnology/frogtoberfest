import React, { Fragment } from 'react';

import SiteTitle from 'components/SiteTitle';
import SiteDetails from 'components/SiteDetails';
import UsernameForm from 'components/UsernameForm';

const Home = () => (
  <Fragment>
    <SiteTitle />
    <UsernameForm />
    <SiteDetails />
  </Fragment>
);

export default Home;
