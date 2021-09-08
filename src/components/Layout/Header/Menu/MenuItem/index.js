import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MenuItem({ data }) {
  const location = useLocation();
  return (
    <li
      className={
        location.pathname === data.path ? "nav-item active" : "nav-item"
      }
    >
      <Link to={data.path} className="nav-link">
        {data.title}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
