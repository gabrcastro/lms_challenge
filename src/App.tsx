import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen">{element}</div>
    </QueryClientProvider>
  );
}

export default App;
