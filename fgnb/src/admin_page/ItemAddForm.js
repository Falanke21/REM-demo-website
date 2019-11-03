import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "70%",
        minWidth: 300,
        maxWidth: 800,
        marginTop: 20,
        margin: "auto",
        padding: 20
    },
    shortTextField: {
        marginLeft: 10,
        marginRight: 10,
        width: 200
    },
    longTextField: {
        marginLeft: 10,
        marginRight: 10,
        width: 420
    },
    submit: {
        marginTop: 10
    }
}));

function ItemAddForm(props) {
    const classes = useStyles();
    const [id, ] = React.useState("");
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [description, setDescription] = React.useState("");

    return (
        <div>
            <Paper classes={{ root: classes.root }}>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="name"
                            label="Name"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.shortTextField}
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                        />
                        <TextField
                            name="price"
                            label="Price"
                            type="number"
                            margin="normal"
                            variant="outlined"
                            className={classes.shortTextField}
                            value={price}
                            onChange={e => {
                                setPrice(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            name="location"
                            label="Location"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.longTextField}
                            value={location}
                            onChange={e => {
                                setLocation(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            name="description"
                            label="Description"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            className={classes.longTextField}
                            value={description}
                            onChange={e => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => {
                                props.addItem({
                                    id,
                                    name,
                                    price,
                                    location,
                                    description
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

export default ItemAddForm;
