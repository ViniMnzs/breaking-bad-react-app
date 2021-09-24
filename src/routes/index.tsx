import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

import GlobalStyle from '../assets/css';

const Index: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Index;
