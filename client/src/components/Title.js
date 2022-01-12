import React from 'react'
import {
    Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, TextField, BottomNavigation, Paper,
    BottomNavigationAction
} from '@mui/material';
export default function Title({ title, isSidebar, isLeft }) {
    return (
        <>
            <Box className="d-flex" sx={{ alignItems: "center" }}>
                {!isSidebar ? (
                    <>
                        <Avatar variant="square" sx={{ mr: 2 }} src="https://algogenes.com/wp-content/uploads/2021/01/logo-social-sq.png" />
                        <Box>
                            <h4 className="p-0 m-0 fw-medium">{title}</h4>
                            <p className="p-0 m-0 text-muted text-small">130 members 20 Online</p>
                        </Box>
                    </>
                ) :
                    <>
                        <Avatar variant="square" sx={{ mr: 2 }} src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg" /><h3 className="p-0 m-0 fw-medium text-custom">{title}</h3>
                    </>
                }
            </Box>
        </>
    )
}
