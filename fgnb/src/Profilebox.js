import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0.5,
    width:600,
    height:350,
    left: 650,
	display:"flex",
	position: "absolute",
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    height:300,
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} color="pink">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    Name: Frank Hua
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="body2" gutterBottom>
                  SuperSuperSmart Person
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">First Year</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}