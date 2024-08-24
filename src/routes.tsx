import { RouteObject } from "react-router-dom";

import { Navigate } from "react-router-dom";
import HomePage from "@/features/home/home.page";
import LayoutStudent from "@/features/layout/layout.student";
import HistoryPage from "@/features/history/history.page";
import CourseInfoPage from "@/features/course_info/course_info.page";
import PlayerPage from "@/features/player/player.page";
import SettingsPage from "@/features/settings/settings.page";
import LayoutAuth from "@/features/layout/layout.auth";
import { LoginPage } from "@/features/auth/login.page";

// export const AppRoutes = () => {
//   const { token } = useAuthStore();

//   if (!token) {
//     return (
//       <Routes>
//         <Route path="/" element={<LayoutAuth />}>
//           <Route index element={<LoginPage />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     );
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<LayoutStudent />}>
//         <Route index element={<HomePage />} />
//         <Route path="/history" element={<HistoryPage />} />
//         <Route path="/course" element={<CourseInfoPage />} />
//         <Route path="/player" element={<PlayerPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Route>
//     </Routes>
//   );
// };

function root() {
  const token = localStorage.getItem("token");
  if (!token) {
    // If the token doesnt exist, render the student's layout
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
    // If the token exist, render the authentication layout
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

const routes: RouteObject[] = root();
export default routes;
