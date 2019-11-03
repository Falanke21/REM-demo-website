import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Market from './Market';
import AdminDashBoard from './AdminDashBoard';
import User from './User';
import SignUp from './SignUp';
import ItemDetail from './ItemDetail';
import AddItem from './AddItem';
import Bidding from './Bidding';
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
          <Route exact path="/additem" component={AddItem} />
          <Route exact path="/bidding" component={Bidding} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
