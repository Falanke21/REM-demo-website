import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import background from "./asset/profileBackground.JPG";
import bike from "./asset/profileBackground.JPG";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0.5
  },
  background: {
    backgroundImage: `url(${background})`,
    width: '55%',
    height: 300,
    left: '25%',
    position: "absolute"
  },
  bigAvatar: {
    width: 100,
    height: 100,
    position: "absolute",
    left: '50%',
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    width: 250,
    height: 150,
    left: '40%',
    top:110,
    position: "absolute",
  },
  info:{
    wdith: 600,
    height: 200,
    left: '20%',
    top:20,
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.root} color="pink">
        <div className={classes.info}>
        <Avatar alt="IMAGE" src={require("./static/images/yaoshui.jpg")} className={classes.bigAvatar}/>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    {/* Hard code data, add server call here */}
                    <Typography gutterBottom variant="subtitle1">
                      Name: Frank Hua
                    </Typography>
                    <br></br>
                    <Typography variant="body2" gutterBottom>
                      SuperSuperSmart Person
                    </Typography>
                    <br></br>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">First Year</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}
