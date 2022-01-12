import React from 'react'
import {
    Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, TextField, BottomNavigation, Paper,
    BottomNavigationAction, Card, Divider
} from '@mui/material';
import { deepOrange, green, blue } from '@mui/material/colors';

export default function Person({ isCreator, index, person }) {
    const color = index % 2 ? blue[700] : blue[500]
    return (
        <>
            {
                isCreator ? <>
                    <Box className="d-flex" sx={{ p: 1.5, alignItems: "center", bgcolor: "#", borderRadius: "10px" }}>
                        <Avatar variant="rounded" sx={{ mr: 2, bgcolor: blue[700] }}>AV</Avatar>
                        <Box
                        >
                            <p className='p-0 m-0 fw-medium' sx={{ color: "#17584E" }}>Adrian Van Ladrillano</p>
                            <p className='text-small text-muted p-0 m-0' sx={{ color: "#17584E" }}>Creator</p>
                        </Box>
                    </Box>
                </> : <>
                    <Box className="d-flex" sx={{ py: 1.5, alignItems: "center" }}>
                        <Avatar sx={{ width: 32, height: 32, mr: 2, bgcolor: color }}
                        >
                            <span className="text-small fw-bold p-0 m-0">TG</span>
                        </Avatar>
                        <Box
                        >
                            <p className='p-0 m-0 fw-medium'>
                                {person}
                            </p>
                            <p className='text-small text-muted p-0 m-0' sx={{ color: "#17584E" }}>Creator</p>
                        </Box>
                    </Box>
                </>
            }
        </ >
    )
}
