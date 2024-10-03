import * as React from "react";
import { AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import useAuth from "../../hooks/useAuth";
// preview-start
const providers = [{ id: "google", name: "Google" }];

// preview-end

export default function LoginPage() {
  const theme = useTheme();
  const { login } = useAuth();

  const signIn = async (provider) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Sign in with ${provider.id}`);
        login();
        resolve();
      }, 500);
    });
    return promise;
  };
  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    // preview-end
  );
}
