import { Link } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="navbar justify-content-center gap-5">
      <Link to="/">Accueil</Link> |{" "}
      <Link to="/about">A propos</Link>

    </nav>
  );
}

export default NavMain;