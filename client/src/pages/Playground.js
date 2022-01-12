import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import {
    AvatarGroup,
    Avatar
} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TinyMce from "../components/TinyMce"



import Title from "../components/Title"

import Sidebar from "../components/Sidebar"


export default function Playground() {
    const handleChange = () => {
        console.log("wew")
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar position="left" isLeft={true} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default' }}
            >
                <Toolbar>
                    <Title title="Design Group"></Title>
                    <Box className="text-muted text-small" sx={{ ml: "auto" }}>Session ID: <span>
                        sadG54sad2Yk986</span></Box>
                </Toolbar>
                <Divider />

                {/* Content */}
                <Box sx={{ p: 4, height: "80vh" }} style={{ background: "#F8FAFB" }}>
                    <TinyMce handleChange={handleChange} />
                </Box>
                {/*  */}
            </Box>
            <Sidebar position="right" />
        </Box>
    );
}