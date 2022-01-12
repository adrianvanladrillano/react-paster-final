import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import { blue, green } from '@mui/material/colors';

export default function Sidebar({ position, isLeft }) {
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
                    </> : <Box>
                        <Toolbar>
                            <Title isSidebar title="Chat room" />
                        </Toolbar>
                        <Divider></Divider>
                        <Box sx={{ p: 2 }}>
                            <List className="d-flex" sx={{ flexDirection: "column" }}>
                                {[1, 2, 3, 4, 5].map((val, index) => {
                                    return (
                                        <Box>
                                            <Box className="d-flex" key={index} sx={index % 2 ? { mb: 2, float: "right", flexDirection: "row-reverse", } : { float: "left", mb: 2, }}>
                                                <Avatar variant="rounded" sx={{ width: 28, height: 28, mr: 1.5, bgcolor: blue[700] }}
                                                >
                                                    <span className="text-small">AV</span>
                                                </Avatar>
                                                <Box>
                                                    <p className="p-0 m-0 fw-medium">
                                                        Adrian Van Ladrillano
                                                        {/* <span className="m-auto text-muted text-small">
                                                            10:07AM
                                                        </span> */}
                                                    </p>

                                                    <Box sx={{ maxWidth: "300px", borderRadius: "10px", border: "1px solid #e1e1e1", p: 2, mt: 1 }} style={index % 2 ? { background: "#1976D2", color: "white" } : { background: "white" }} >
                                                        <p className="p-0 m-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </p>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </List>
                        </Box>
                    </Box>
                }

            </Drawer>
        </>

    );
}