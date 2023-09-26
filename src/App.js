import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubCorner from './components/GithubCorner';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Participation from './pages/Participation';
import User from './pages/User';
import Me from './pages/Me';
import NotFound from './pages/NotFound';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s | Hacktoberfest Checker" />
    <GithubCorner />
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/participation" component={Participation} />
          <Route exact path="/user/:username" component={User} />
          <Route exact path="/me" component={Me} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PageWrapper>
  </Fragment>
);

export default App;
