import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { catalogGetAll, selectCategory } from "../../../../reducers/catalogSlice";

export default function CatalogCategoryItem({ data }) {
  const { categoryId } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectCategory(data.id));
    dispatch(catalogGetAll(data.id));
  };

  return (
    <li className="nav-item">
      <NavLink
        to="#"
        className="nav-link"
        activeClassName="active"
        isActive={() => categoryId === data.id && true}
        onClick={handleClick}
      >
        {data.title}
      </NavLink>
    </li>
  );
}
