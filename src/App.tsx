import { useRoutes } from "react-router-dom";
import ThemeRoutes from "./routes/Router";
import "./App.css";

function App() {
  const routing = useRoutes(ThemeRoutes);
  return routing;
}

export default App;
