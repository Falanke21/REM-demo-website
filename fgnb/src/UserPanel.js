import React from 'react';
import { Grid } from '@material-ui/core';

class UserPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        "username": "",
        "password": ""
      }
    }
  }

  render() {
    return (
      <Grid
        container
        direction='column'
        justify='space-evenly'
        alignItems='flex-start'
      >
        {/* <UserQueryForm/> */}
        {/* <UserActionList/> */}
      </Grid>
    );
  }
}

export default UserPanel;