import React from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";

const modalSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperSx = {
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 5,
  p: 2,
};

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;

  /** HANDLERS **/

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={modalSx}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack direction={"row"} sx={{ ...paperSx, width: "800px" }}>
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
              <h2 id="transition-modal-title">Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="signup-username"
                label="username"
                variant="outlined"
              />
              <TextField
                sx={{ my: "17px" }}
                id="signup-phone"
                label="phone number"
                variant="outlined"
              />
              <TextField
                id="signup-password"
                label="password"
                variant="outlined"
                type="password"
              />
              <Fab
                sx={{ marginTop: "30px", width: "120px" }}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={modalSx}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack direction={"row"} sx={{ ...paperSx, width: "700px" }}>
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2 id="transition-modal-title">Login Form</h2>
              <TextField
                id="login-username"
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
              />
              <TextField
                id="login-password"
                label="password"
                variant="outlined"
                type="password"
              />
              <Fab
                sx={{ marginTop: "27px", width: "120px" }}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}