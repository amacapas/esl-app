import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Contact from './components/Contact'
import HowItWorks from './components/Works'

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/how-it-works" component={HowItWorks} />
      </Switch>
    </Router>
  );
}

export default App;
