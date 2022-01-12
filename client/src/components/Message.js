import React from 'react'
import { Box, Avatar, CssBaseline, Toolbar, AppBar, List, Typography, Divider, IconButton } from '@mui/material';
import { blue, green } from '@mui/material/colors';

export default function Message({ text, user, index }) {
    return (
        <>
            <Box className="d-flex" key={index} sx={index % 2 ? { mb: 2, float: "right", flexDirection: "row-reverse", } : { float: "left", mb: 2, }}>
                <Avatar variant="rounded" sx={{ width: 28, height: 28, mr: 1.5, bgcolor: blue[700] }}
                >
                    <span className="text-small">AV</span>
                </Avatar>
                <Box>
                    <p className="p-0 m-0 fw-medium">
                        {user}
                        {/* <span className="m-auto text-muted text-small">
                                                            10:07AM
                                                        </span> */}
                    </p>

                    <Box sx={{ maxWidth: "300px", borderRadius: "10px", border: "1px solid #e1e1e1", p: 2, mt: 1 }} style={index % 2 ? { background: "#1976D2", color: "white" } : { background: "white" }} >
                        <p className="p-0 m-0 text-small">{text}</p>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
