import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Box, Row, Grid, Stack, FormControl, OutlinedInput, InputAdornment, Button, TextField, IconButton } from '@mui/material';
import Modal from "../components/Modal";
import Toast from "../components/Toast"

const Home = () => {
  let navigate = useNavigate()
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");


  const [modal, setModal] = useState(false)
  const [toast, setToast] = useState(true)

  let uuid = uuidv4().toString()

  const handleChange = (evt, payload) => {
    if (evt === "MODAL") {
      setModal(payload)
    }
    if (evt === "Snackbar") {
      setToast(payload)
    }
    if (evt === "CREATE") {
      window.location.href = `/chat?name=Admin&room=${uuid}`
      // navigate(`/chat?name=Admin&room=${uuid}`)
    }
  }

  const handleCreate = () => {
  }

  return (
    <div>
      <Grid container style={{ height: "85vh" }}>
        <Grid xl={6} sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>

          <Grid container style={{ width: "500px" }}>
            <h1 className="fw-medium" style={{ fontSize: "2.5em", margin: 0, padding: 0 }}>
              Premium something another typography here
            </h1>
            <Box sx={{ pt: 2, pb: 5 }}>
              Premium something another typography here,
              Premium something another typography here,
              Premium something another typography here,
            </Box>

            <Box className="d-flex">
              <Button sx={{ mr: 2 }} size="large" variant="contained" onClick={() => setModal(true)}>New Room</Button>
              <FormControl>
                <OutlinedInput
                  placeholder="Enter room ID"
                  defaultValue={room}
                  onChange={(e) => setRoom(e.target.value)}
                  endAdornment={
                    room === "" ? null : (
                      <InputAdornment position="end">
                        <Button
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          Join
                        </Button>
                      </InputAdornment>
                    )
                  }
                />
              </FormControl>
            </Box>

            <Modal show={modal} room={uuid} handleChange={handleChange} />
            <Toast show={toast} message={"Something"} handleChange={handleChange} />

          </Grid>
        </Grid>
        <Grid xl={6} sx={{ p: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box>
            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" />
          </Box>
        </Grid>
      </Grid>
      <h1>Home Page</h1>
      <div>
        <input
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Room"
          type="text"
          required
          defaultValue={uuid}
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit">Sign In</button>
      </Link>
    </div>
  );
};

export default Home;
