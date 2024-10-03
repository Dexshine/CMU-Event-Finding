import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const image = "/assets/images/banner.jpeg";

  return (
    <Box
      sx={{
        position: "absolute",
        height: "500px",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 100%",
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <Container>
        <Typography variant="h2" color="white" fontWeight={600} pt={10}>
          ข่าวสารกิจกรรม
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
