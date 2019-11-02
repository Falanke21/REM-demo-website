import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Market from './Market';
import AdminDashBoard from './AdminDashBoard';
import User from './User';
import SignUp from './SignUp';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admindash" component={AdminDashBoard} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/user" component={User} />
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/item/:itemId" component={ItemDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
