import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Toast({ show, handleChange }) {
    const [open, setOpen] = useState(show);


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Note archived"
            />
        </>
    );
}