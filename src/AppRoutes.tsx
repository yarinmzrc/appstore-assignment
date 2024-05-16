import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Favorites, NotFound } from "./pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
