import { Routes, Route } from "react-router-dom";
import { Home, Favorites, NotFound } from "./pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
