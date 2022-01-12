import * as React from 'react';

import {
    Box, Drawer, AppBar, Toolbar, List, Typography, CssBaseline, AvatarGroup,
    Avatar, Divider, ListItem, ListItemIcon, ListItemText
} from '@mui/material';

import { InboxIcon, MailIcon } from '@mui/icons-material';

import TinyMce from "../components/TinyMce"

import Title from "../components/Title"
import Sidebar from "../components/Sidebar"
import { webhook } from "../redux/common"
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Playground() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    let name
    let room
    React.useEffect(() => {
        name = searchParams.get("name")
        room = searchParams.get("room")
        dispatch(webhook(name, room))
    }, [searchParams]);
    // let { value } = useSelector(({ common }))
    // console.log(data)

    const handleChange = () => {
        console.log("wew")
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar position="left" isLeft={true} />
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <Title title="Design Group"></Title>
                    <Box className="text-muted text-small" sx={{ ml: "auto" }}>Session ID: <span>
                        sadG54sad2Yk986</span></Box>
                </Toolbar>
                <Divider />

                <Box sx={{ p: 4, height: "80vh" }} style={{ background: "#F8FAFB" }}>
                    <TinyMce handleChange={handleChange} />
                </Box>
            </Box>
            <Sidebar position="right" />
        </Box>
    );
}