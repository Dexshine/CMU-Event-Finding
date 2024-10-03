import { lazy } from "react";

import NavMotion from "../layout/NavMotion";
import MinimalLayout from "../layout/minimal";
import GuestGuard from "../utils/route-guard/GuestGuard";

// login routing
const LoginPage = lazy(() => import("../pages/login"));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    </NavMotion>
  ),
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default LoginRoutes;
