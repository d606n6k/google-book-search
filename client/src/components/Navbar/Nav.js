import { NavLink, useLocation } from "react-router-dom";

function Nav({ exact, to, children }) {
  const { pathname } = useLocation();
  return (
    <NavLink className="nav-link active" exact={exact} to={to}>
      {children}{" "}
      {pathname === "/" && <span className="sr-only">(current)</span>}
    </NavLink>
  );
}
export default Nav;
