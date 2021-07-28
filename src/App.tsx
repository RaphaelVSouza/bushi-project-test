import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Anime from 'pages/Anime';
import Home from 'pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anime" component={Anime} />
      </Switch>
    </Router>
  );
}

export default App;
