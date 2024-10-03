import { lazy } from "react";
import MainLayout from "../layout/main";
import AuthGuard from "../utils/route-guard/AuthGuard";
import EventCreateEditPage from "../pages/event/edit";
// import EventPage from "../pages/event";

// sample page routing
const EventPage = lazy(() => import("../pages/event"));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/event",
      // element: <EventPage />,
      children: [
        {
          index: true,
          element: <EventPage />,
        },
        { path: "create", element: <EventCreateEditPage /> },
      ],
    },
  ],
};

export default MainRoutes;
