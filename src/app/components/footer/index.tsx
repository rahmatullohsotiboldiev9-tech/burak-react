import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack direction="row" sx={{ mt: "94px" }}>
          <Stack direction="column" style={{ width: "340px" }}>
            <Box>
              <img width={"100px"} src={"/icons/burak.svg"} alt="Burak logo" />
            </Box>
            <Box className={"foot-desc-txt"}>
              Focusing on the gourmet Turkish breakfast as well as the youth
              society, CZN Burak Gurme aims to bring Turkish cuisine back. CZN
              Burak Gurme creates an illusion with its cuisine.
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.svg"} alt="Facebook" />
              <img src={"/icons/twitter.svg"} alt="Twitter" />
              <img src={"/icons/instagram.svg"} alt="Instagram" />
              <img src={"/icons/youtube.svg"} alt="YouTube" />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} direction="row">
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Sections</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  className={"foot-category-link"}
                  sx={{
                    mt: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box className={"find-us"} sx={{ display: "flex", flexDirection: "row" }}>
                    <span>Location :</span>
                    <div>Downtown, Dubai</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Phone :</span>
                    <div>+971 4 554 7777</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Email :</span>
                    <div>devexuz@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Workingg hours :</span>
                    <div>Visit 24 hours</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #f7f9f9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}