import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import UserPanel from './UserPanel.js';
import TransactionList from './TransactionList';

class AdminDashBoard extends React.Component {
  render() {
    return (
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='flex-start'
      >
        <Grid item xs={3}>
          <Paper>
            <UserPanel/>
          </Paper>
        </Grid>
          <Grid item xs={7}>
            <Paper>
              <TransactionList/>
            </Paper>
          </Grid>
      </Grid>
    );
  }
}

export default AdminDashBoard;