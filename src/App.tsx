import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="bg-gray-200 dark:bg-slate-800 dark:text-white">
          <div className="container max-w-[1360px] min-h-screen pb-6">
            <NavBar />
            <AppRoutes />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
