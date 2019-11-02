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
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    height: 270,
    left: 800,
    position: "absolute"
  },
  background: {
    backgroundImage: `url(${background})`,
    width: '80%',
    height: 300,
    left: 250,
    position: "absolute"
  },
  bigAvatar: {
    width: 250,
    height: 250,
    display: "flex",
    position: "absolute",
    top: 40,
    left: 290
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
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
                <Grid item></Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">First Year</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Avatar
            alt="IMAGE"
            src={require("./static/images/yaoshui.jpg")}
            className={classes.bigAvatar}
          />
        </Paper>
      </div>
     </div>
  );
}
