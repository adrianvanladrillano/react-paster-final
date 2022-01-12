import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, AppBar, List, Typography, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "./Navbar"

import Title from "./Title"
import Person from "./Person"
import Message from "./Message"

import { blue, green } from '@mui/material/colors';
import { useSelector, useDispatch } from "react-redux";

export default function Sidebar({ position, isLeft }) {
    const data = useSelector((state) => state.common.data);
    console.log("data:", data)
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    let drawerWidth = isLeft ? 300 : 500
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    border: "1px solid white"
                }}
                variant="permanent"
                anchor={position}
            >
                {
                    isLeft ? <>
                        {JSON.stringify(data)}
                        <Toolbar>
                            <Title isSidebar title="Chat room" />
                        </Toolbar>
                        <Divider></Divider>
                        <Box sx={{ px: 2, py: 2 }}>
                            <Person isCreator />
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ px: 3.5, pb: 1, pt: 3 }}>Members</Box>
                        <Box sx={{ px: 3.5, }}>
                            {
                                ["Sample name 1", "Sample name 2", "Sample name 3", "Sample name 4", "Sample name 5"].map((person, index) => (
                                    <Person person={person} index={index} key={index} />
                                ))
                            }
                        </Box>
                    </> : <>
                        <Box>
                            <Toolbar>
                                <Title isSidebar title="Chat room" />
                            </Toolbar>
                            <Divider></Divider>
                            <Box sx={{ p: 2 }}>
                                <List className="d-flex" sx={{ flexDirection: "column" }}>
                                    {
                                        data.map(({ text, user }, index) => {
                                            return (
                                                <Message index={index} user={user} text={text} />
                                            );
                                        })
                                    }
                                </List>
                            </Box>
                        </Box>
                    </>

                }

            </Drawer>
        </>

    );
}