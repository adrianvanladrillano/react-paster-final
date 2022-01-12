import {
  Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, TextField, BottomNavigation, Paper,
  BottomNavigationAction, CssBaseline, Toolbar, Divider
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";
import Title from "../components/Title"
import Person from "../components/Person"
import TinyMce from "../components/TinyMce"
import { useSelector, useDispatch } from "react-redux";
import { SET_DATA } from "../redux/common"
import Sidebar from "../components/Sidebar"


let socket;

const Chat = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [wew, setWew] = useState("");
  const [room, setRoom] = useState("");

  const [messages, setMessages] = useState([]);
  const [contents, setContents] = useState([]);

  const [message, setMessage] = useState("");

  const ENDPOINT = "http://localhost:5000";
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleChange = (evt, payload) => {
    if (evt === "EDITOR") {
      console.log(evt, payload)
      socket.emit("sendContent", { content: payload });
    }
  }

  useEffect(() => {
    socket = io(ENDPOINT);
    let name = searchParams.get("name")
    let room = searchParams.get("room")
    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [searchParams]);
  useEffect(() => {
    socket.on("content", (content) => {
      console.log("New content: ", content)
      setWew(content)
    });
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      dispatch(SET_DATA(message))
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { message });
      setMessage("");
    } else alert("empty input");
  };

  const handleContent = (e) => {
    e.preventDefault();
    // // let content = e.target.value
    // if (editorRef.current) {
    //   console.log(editorRef.current.getContent());
    // }
    socket.emit("sendContent", { content: editorRef.current.getContent() });
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
    // <Grid container sx={{ pt: 0, m: 0, justifyItems: "space-between", alignItems: "none", }} style={{ height: "87vh", padding: 0, margin: 0 }}>
    //   <Grid xl={2} style={{ height: "100%", borderRight: "1px solid #e1e1e1" }}>
    //     <Title title={"Users"} isSidebar={true} />
    //     <span className="text-muted">Creator</span>
    //     <Box>
    //       <Person />
    //     </Box>
    //   </Grid>

    //   <Grid xl={7} sx={{ borderRight: "1px solid #e1e1e1" }}>
    //     <Title title={room} />
    //     <TinyMce content={wew.text} handleChange={handleChange} />
    //     <p>Debugger: {wew.text}</p>
    //   </Grid>

    //   <Grid xl={3} sx={{ px: 2 }} style={{ height: "100%" }}>
    //     <Title title={"Messages"} isSidebar={true} />
    //     <List>
    //       {messages.map((val, i) => {
    //         return (
    //           <ListItem key={i} sx={val.user == val.name ? { float: "right" } : { float: "left" }}>
    //             <ListItemAvatar>
    //               <Avatar size="" alt="Profile Picture" >AM</Avatar>
    //             </ListItemAvatar>
    //             <ListItemText sx={{ p: 2 }} primary={val.user} secondary={val.text} style={{ background: "#F5F9FC" }} />
    //           </ListItem>
    //         );
    //       })}
    //     </List>
    //     <Box style={{ position: "absolute", bottom: 50 }}>
    //       <form action="" onSubmit={handleSubmit} className="d-flex">
    //         <Avatar />
    //         <TextField
    //           style={{ width: "100%" }}
    //           placeholder="Enter room ID"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //         <Button
    //           variant="contained"
    //           type="submit"
    //         >
    //           Send
    //         </Button>
    //       </form>
    //     </Box>
    //   </Grid>
    //   <Sidebar position="left" isLeft={true} />

    // </Grid >
  );
};

export default Chat;
