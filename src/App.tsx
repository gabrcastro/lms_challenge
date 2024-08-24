import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStore } from "./state/auth.store";

const queryClient = new QueryClient();

function App() {
  const element = useRoutes(routes);
  const { setToken } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) setToken(token);
  }, [setToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen">{element}</div>
    </QueryClientProvider>
  );
}

export default App;
