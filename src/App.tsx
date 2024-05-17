import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
