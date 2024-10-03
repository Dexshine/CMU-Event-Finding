import { lazy } from "react";
import MainLayout from "../layout/main";
import GuestGuard from "../utils/route-guard/GuestGuard";
import EventPage from "../pages/event";
import HomePage from "../pages/home";

// const EventPage = lazy(() => import("../pages/event"));

// ==============================|| MAIN ROUTING ||============================== //

const GuestRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <MainLayout />
    </GuestGuard>
  ),
  children: [
    {
      index: true,
      element: <HomePage />,
    },

    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ],
};

export default GuestRoutes;
