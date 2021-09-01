import { Link } from "react-router-dom";

export default function InformationItem({ data }) {
  return (
    <li className="nav-item">
      <Link to={data.path} className="nav-link">
        {data.title}
      </Link>
    </li>
  );
}
