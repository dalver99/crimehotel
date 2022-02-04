import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Setmode, { AssignPlayerNumber } from './Setmode';
import useFetch from './useFetch';

function App() {
  const url = 'http://localhost:8000/gamemode';
  const { gamemode } = useFetch(url);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/setmode">
            <Setmode />
          </Route>
          <Route exact path="/assignplayernumber">
            <AssignPlayerNumber />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
