import { Navigate, RouteObject } from "react-router-dom";
import HomePage from "./features/home/home.page";
import LayoutStudent from "./features/layout/layout.student";
import HistoryPage from "./features/history/history.page";
import CourseInfoPage from "./features/course_info/course_info.page";
import PlayerPage from "./features/player/player.page";
import SettingsPage from "./features/settings/settings.page";
import LayoutAuth from "./features/layout/layout.auth";
import { LoginPage } from "./features/auth/login.page";

function Root() {
  const user = localStorage.getItem("user");
  if (!user) {
    // If the user is logged in, render the student's layout
    return [
      {
        path: "/",
        element: <LayoutAuth />,
        children: [
          { path: "", element: <LoginPage /> },
          { path: "*", element: <Navigate to="/" replace /> },
        ],
      },
    ];
  } else {
    // If the user is not logged in, render the authentication layout
    return [
      {
        path: "/",
        element: <LayoutStudent />,
        children: [
          { path: "", element: <HomePage /> },
          { path: "/history", element: <HistoryPage /> },
          { path: "/course", element: <CourseInfoPage /> },
          { path: "/player", element: <PlayerPage /> },
          { path: "/settings", element: <SettingsPage /> },
          { path: "*", element: <Navigate to="/" replace /> },
        ],
      },
    ];
  }
}

const routes: RouteObject[] = Root();
export default routes;
