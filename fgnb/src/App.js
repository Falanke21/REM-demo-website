import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Market from './Market';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exect path="/" component={Login} />
          <Route exect path="/market" component={Market} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
