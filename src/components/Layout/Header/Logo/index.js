import { Link } from "react-router-dom";
import logoImg from "../../../../img/header-logo.png";

export default function Logo() {
  return (
    <Link to={process.env.REACT_APP_LINK_HOME} className="navbar-brand">
      <img src={logoImg} alt="Bosa Noga" />
    </Link>
  );
}
