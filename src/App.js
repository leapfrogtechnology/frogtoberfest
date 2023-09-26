import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Checker from './pages/Checker';
import User from './pages/User';
import Me from './pages/Me';
import NotFound from './pages/NotFound';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="Hacktoberfest" />
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checker" component={Checker} />
          <Route exact path="/user/:username" component={User} />
          <Route exact path="/me" component={Me} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PageWrapper>
  </Fragment>
);

export default App;
