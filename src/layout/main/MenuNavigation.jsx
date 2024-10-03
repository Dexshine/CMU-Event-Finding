import {
  Comment,
  Dashboard,
  Edit,
  Login,
  Newspaper,
} from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const StyedTab = styled(Tab)(({ theme }) => ({
  marginInline: "10px",
  "&.Mui-selected": {
    color: "#6b69b1",
  },
}));

export default function MenuNavigation() {
  const { user, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    navigate(newValue);
  };

  const signIn = async () => {
    setLoading(true);
    const promise = await new Promise((resolve) => {
      setTimeout(() => {
        login();

        resolve();
      }, 500);
    });

    setLoading(false);
    // return promise;
  };

  console.log("user", user);

  return (
    <Box
      sx={{
        maxWidth: "800px",
        width: "100%",
        margin: "auto",
        position: "sticky",
        top: "20px",
        zIndex: 99,
      }}
    >
      <Tabs
        value={pathname}
        onChange={handleChange}
        aria-label="icon label tabs example"
        centered
        sx={{
          p: 1,
          background: "white",
          borderRadius: theme.shape.borderRadius,
        }}
        TabIndicatorProps={{
          style: {
            background: "#bdbdc8",
            opacity: 0.5,
            borderRadius: theme.shape.borderRadius,
            height: "100%",
          },
        }}
      >
        <Box
          display="flex"
          onClick={() => (!user ? signIn() : logout())}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
          p={1}
          sx={{
            cursor: "pointer",
          }}
        >
          {loading ? <CircularProgress /> : <Login />}
          <Typography variant="body2" fontWeight={500}>
            {!user ? "เข้าสู่ระบบ" : "ออกจากระบบ"}
          </Typography>
        </Box>
        {/* <Button>เข้าสู่ระบบ</Button> */}

        <StyedTab value="/" icon={<Newspaper />} label="ข่าวสารกิจกรรม" />
        <StyedTab
          // value={2}
          value="/event/create"
          icon={<Edit />}
          label="สร้างกิจกรรม"
        />
        <StyedTab
          // value={3}
          value="/event/review"
          icon={<Comment />}
          label="รีวิวกิจกรรม"
        />
        <StyedTab
          // value={4}
          value="/dashboard"
          icon={<Dashboard />}
          label="DASHBOARD"
        />
      </Tabs>
    </Box>
  );
}
