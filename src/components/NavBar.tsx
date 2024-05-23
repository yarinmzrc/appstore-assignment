import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/favorites",
    text: "Favorites",
  },
];

interface NavLinkProps {
  to: string;
  text: string;
  isActive: boolean;
}

const NavLink = ({ to, text, isActive }: NavLinkProps) => (
  <Link to={to} className={`hover:underline ${isActive ? "underline" : ""}`}>
    {text}
  </Link>
);

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex justify-between items-end py-4 mb-6 border-b border-slate-300 dark:border-slate-600">
      <p className="font-bold text-2xl">AppStore</p>
      <div className="flex items-center gap-3">
        {routes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            text={route.text}
            isActive={route.to === path}
          />
        ))}
      </div>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
