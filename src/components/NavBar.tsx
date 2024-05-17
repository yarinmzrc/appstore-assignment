import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <p className="font-bold text-3xl">AppStore</p>
      <div className="flex items-center gap-3">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/favorites" className="hover:underline">
          Favorites
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
};

export default NavBar;