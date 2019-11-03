import React, { Component } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "./tileData";
import { whileStatement } from "@babel/types";

const useStylesLineimgs = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        height: "80%",
        flexWrap: "nowrap",
        width: "80%",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        position: "absolute",
        left: "10%",
        top: "53%"
    },
    title: {
        color: "white"
    },
    listele: {
        width: "100px",
        height: "100px"
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    }
}));

function LineGridBox() {
    const classes = useStylesLineimgs();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={10.0} cellHeight={150}>
                {tileData.map(tile => (
                    <GridListTile
                        className={classes.listele}
                        key={tile.img}
                        component={Link}
                        to={`/item/${tile.id}`}
                    >
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

class ItemGrid extends Component {
    render() {
        return (
            <div>
                <LineGridBox></LineGridBox>
            </div>
        );
    }
}

export default ItemGrid;
