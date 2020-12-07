import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from 'components/Header';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';
import NGOList from 'views/NGOList';

import { PrivateRoute, PublicRoute } from 'views';

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <PublicRoute restricted={true} exact path='/' component={SignIn} />
        <PublicRoute restricted={true} exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/list' component={NGOList} />
      </Switch>
    </Router>
  )
}

export default App;
