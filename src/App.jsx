import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./config/config-variable";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { themeStore } from "./themes/mui";

import "./index.css";
import "react-quill/dist/quill.snow.css";
import "dayjs/locale/th";
import { LocalizationProvider } from "@mui/x-date-pickers";

dayjs.extend(buddhistEra);
dayjs.locale("th");

const materialTheme = createTheme(themeStore);

const App = () => {
  return (
    <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <AuthProvider>
            <Toaster />
            <RouterProvider router={router} />
          </AuthProvider>
        </GoogleOAuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
