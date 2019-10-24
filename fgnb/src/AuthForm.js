import React from 'react';

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
      <div>
        <div>
          <input
            name='username'
            value={this.props.username}
            onChange={this.props.handleChange}
            type='text'
            placeholder='Username'
          />
          <input
            id='passInput'
            name='password'
            value={this.props.password}
            onChange={this.props.handleChange}
            type='password'
            placeholder='Password'
          />
          <button
            onClick={this.props.checkAuth}>
            Login
          </button>
        </div>
        <div>
          <input
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