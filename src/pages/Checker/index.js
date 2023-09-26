import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SiteTitle from 'components/SiteTitle';
import SiteDetails from 'components/SiteDetails';
import UsernameForm from 'components/UsernameForm';
import SiteHeader from 'components/SiteHeader';

const Checker = () => (
  <Fragment>
    <SiteHeader></SiteHeader>
    <SiteTitle>Frogtoberfest Checker</SiteTitle>
    <UsernameForm />
    <SiteDetails />
  </Fragment>
);

export default Checker;
