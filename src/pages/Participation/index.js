import React, { Fragment } from 'react';

import SiteTitle from 'components/SiteTitle';
import SiteDetails from 'components/SiteDetails';
import UsernameForm from 'components/UsernameForm';

const Participation = () => (
  <Fragment>
    <SiteTitle>Frogtoberfest Checker</SiteTitle>
    <UsernameForm />
    <SiteDetails />
  </Fragment>
);

export default Participation;
