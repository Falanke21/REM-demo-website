import React from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
const useStyles = makeStyles(theme => ({
  }));
class Bidding extends React.Component{

    render(){
        return(
            <div>
                <Navigation></Navigation>
            </div>
        );
    }
}
export default Bidding;