import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuNavigation from "./MenuNavigation";

const MainLayout = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
      }}
    >
      <Header />
      <Box height="200px" />
      <MenuNavigation />

      <Container sx={{ py: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
