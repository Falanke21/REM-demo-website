import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

import './AuthForm.css'

class AuthForm extends React.Component {
  togglePasswordMask = () => {
    const container = document.getElementById("passInput");
    if (container.type === "password") {
      container.type = "text";
    } else {
      container.type = "password";
    }
  };

  render() {
    return (
      <div className="main-container">
        <div>
          <Input
            name='username'
            value={this.props.username}
            onChange={this.props.handleChange}
            type='text'
            placeholder='Username'
          />

          <Input
            id='passInput'
            name='password'
            value={this.props.password}
            onChange={this.props.handleChange}
            type='password'
            placeholder='Password'
          />

          <Button variant="contained" color="primary"
            onClick={this.props.checkAuth}>
            Login
          </Button>
        </div>

        <div>
          <Checkbox
            type='checkbox'
            onClick={this.togglePasswordMask}
          />
          Show Password
        </div>
      </div>
    )
  }
}

export default AuthForm;