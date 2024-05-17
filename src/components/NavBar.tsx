import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex justify-between items-center py-4 mb-6 border-b border-slate-300 dark:border-slate-600">
      <p className="font-bold text-2xl">AppStore</p>
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className={`hover:underline ${path === "/" ? "underline" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={`hover:underline ${
            path === "/favorites" ? "underline" : ""
          }`}
        >
          Favorites
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
