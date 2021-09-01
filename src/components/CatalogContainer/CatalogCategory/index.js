import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catalogGetCategories } from "../../../reducers/catalogSlice";
import CatalogCategoryItem from "./CatalogCategoryItem";

export default function CatalogCategory() {
  const { categories } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catalogGetCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const extCategories = [{ id: 0, title: "Все" }, ...categories];

  return (
    <ul className="catalog-categories nav justify-content-center">
      {extCategories.map((category) => (
        <CatalogCategoryItem data={category} key={category.id} />
      ))}
    </ul>
  );
}
