import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <LayoutWrapper>
          <NavBar />
          <AppRoutes />
        </LayoutWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
