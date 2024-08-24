// export function Root() {
//   const token = useIsAuthenticated();

//   if (!token) {
//     // If the token doesnt exist, render the student's layout
//     return [
//       {
//         path: "/",
//         element: <LayoutAuth />,
//         children: [
//           { path: "", element: <LoginPage /> },
//           { path: "*", element: <Navigate to="/" replace /> },
//         ],
//       },
//     ];
//   } else {
//     // If the token exist, render the authentication layout
//     return [
//       {
//         path: "/",
//         element: <LayoutStudent />,
//         children: [
//           { path: "", element: <HomePage /> },
//           { path: "/history", element: <HistoryPage /> },
//           { path: "/course", element: <CourseInfoPage /> },
//           { path: "/player", element: <PlayerPage /> },
//           { path: "/settings", element: <SettingsPage /> },
//           { path: "*", element: <Navigate to="/" replace /> },
//         ],
//       },
//     ];
//   }
// }
