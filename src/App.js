import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/Header';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import NGOList from './views/NGOList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={SignIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/list' component={NGOList}></Route>
      </Switch>
    </Router>
  )
}

export default App;
