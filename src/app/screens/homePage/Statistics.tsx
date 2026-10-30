import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";

export default function Statistics() {
    return (
        <div className={"static-frame"}>
            <Container>
                <Stack className="info">
                    <Stack className="static-box">
                        <Box className="static-num">12</Box>
                        <Box className="static-text">Restaurant</Box>
                    </Stack>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            height: 64,
                            width: "2px",
                            border: 0,
                            bgcolor: "#E3C08D",
                            alignSelf: "center",
                        }}
                    />

                    <Stack className="static-box">
                        <Box className="static-num">8</Box>
                        <Box className="static-text">Experience</Box>
                    </Stack>

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            height: 64,
                            width: "2px",
                            border: 0,
                            bgcolor: "#E3C08D",
                            alignSelf: "center",
                        }}
                    />
                    <Stack className="static-box">
                        <Box className="static-num">50+</Box>
                        <Box className="static-text">Menu</Box>
                    </Stack>

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            height: 64,
                            width: "2px",
                            border: 0,
                            bgcolor: "#E3C08D",
                            alignSelf: "center",
                        }}
                    />

                    <Stack className="static-box">
                        <Box className="static-num">600+</Box>
                        <Box className="static-text">Clients</Box>
                    </Stack>
                </Stack>
            </Container>
        </div >
    );
}