import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({ show, room, handleChange }) {

    const handleModal = (evt) => {
        if (evt) {
            handleChange("CREATE", evt)
        }
        else {
            handleChange("MODAL", evt)
        }
    };

    return (
        <div>
            <Dialog open={show} onClose={() => handleModal(false)}>
                <DialogTitle>Here's the link for your session</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label=""
                        type="email"
                        fullWidth
                        variant="standard"
                        defaultValue={room}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleModal(false)}>Cancel</Button>
                    <Button onClick={() => handleModal("CREATE")}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}