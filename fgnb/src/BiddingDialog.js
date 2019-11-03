import React from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function BiddingDialog(prop) {
	const [open, setOpen] = React.useState(false);
	const [bidAmount, setBitAmount] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
	};

	const handleChange = (event) => {
		setBitAmount(event.target.value);
	}
	
	const handleSubmit = () => {
		handleClose();
		// TODO add server call here
		alert(`Item id is ${prop.itemId}, The amount submitted is ${bidAmount}`);
	}

    return (
        <div>
            <Container maxWidth="md">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleClickOpen}
                >
                    Submit a bidding
                </Button>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Submit a bidding</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To submit a bidding, please enter your target amount
                        here. The seller will be notified.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
						helperText="Amount is in CAD"
                        label="Your Bidding"
                        type="number"
						fullWidth
						value={bidAmount}
						onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
