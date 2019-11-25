import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './login_page/Login';
import Market from './market_page/Market';
import AdminDashBoard from './admin_page/AdminDashBoard';
import User from './profile_page/User';
import SignUp from './signup_page/SignUp';
import ItemDetail from './market_page/ItemDetail';
import AddItem from './profile_page/AddItem';
import BiddingList from './profile_page/BiddingList';
import Settings from './profile_page/Settings';
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
          <Route exact path="/biddinglist" component={BiddingList} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
