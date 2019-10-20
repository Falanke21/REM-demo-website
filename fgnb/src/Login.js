import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div> 
        I'm the login page 
        <Link to={"./market"}>
          <button>Go to market</button>
          </Link>
      </div>
    );
  }
}

export default Login;
