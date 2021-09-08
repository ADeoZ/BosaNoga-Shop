import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function InformationItem({ data }) {
  return (
    <li className="nav-item">
      <Link to={data.path} className="nav-link">
        {data.title}
      </Link>
    </li>
  );
}

InformationItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
