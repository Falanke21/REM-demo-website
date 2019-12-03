import React, { Component, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { whileStatement } from "@babel/types";

import { Link } from "react-router-dom";

const useStylesLineimgs = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        height: "200px",
        flexWrap: "nowrap",
        width: "2800px",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)"
    },
    title: {
        color: "white"
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    }
}));

const useStylesSquareimgs = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 900,
        height: 1000,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        cursor: "pointer"
    },
    titleBar: {
        background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    icon: {
        color: "white"
    }
}));
function GridBox(props) {
    const classes = useStylesSquareimgs();
    return (
        <div className={classes.root}>
            <GridList
                cellHeight={300}
                spacing={4}
                className={classes.gridList}
                cols={6.0}
            >
                {props.tileData.map(tile => (
                    <GridListTile
                        key={tile.id}
                        component={Link}
                        to={`/item/${tile.id}`}
                        className={classes.gridListTile}
                        onClick={() =>
                            console.log(`Grid id ${tile.id} clicked!`)
                        }
                        cols={tile.featured ? 2 : 2}
                        rows={tile.featured ? 1 : 1}
                    >
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

function LineGridBox(props) {
    const classes = useStylesLineimgs();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={10.0} cellHeight={150}>
                {props.tileData.map(tile => (
                    <GridListTile
                        key={tile.img}
                        component={Link}
                        to={`/item/${tile.id}`}
                    >
                        <img src={tile.img} alt={tile.title} height="90px" />
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
    constructor(props) {
        super(props);
        this.state = {
            tileData: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/item", {
            method: "GET"
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject("Internal server error");
                }
            })
            .then(json => {
                for (let x of json.items) {
                    x.img = "http://localhost:3001/static/" + x.img;
                }
                this.setState({ tileData: json.items });
            })
            .catch(err => {
                alert(err);
            });
    }

    render() {
        return (
            <div>
                <GridBox tileData={this.state.tileData}></GridBox>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <LineGridBox tileData={this.state.tileData}></LineGridBox>
            </div>
        );
    }
}

export default ItemGrid;
