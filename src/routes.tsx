import { RouteObject } from "react-router-dom";
import HomePage from "./features/home/home.page";
import LayoutStudent from "./features/layout/layout.student";
import HistoryPage from "./features/history/history.page";
import CourseInfoPage from "./features/course_info/course_info.page";
import PlayerPage from "./features/player/player.page";
import SettingsPage from "./features/settings/settings.page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutStudent />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/course", element: <CourseInfoPage /> },
      { path: "/player", element: <PlayerPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
];

export default routes;
