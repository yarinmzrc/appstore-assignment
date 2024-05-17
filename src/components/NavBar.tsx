import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <p>AppStore</p>
      <div className="flex items-center gap-2">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
