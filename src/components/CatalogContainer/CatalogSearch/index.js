import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogGetAll, putSearch } from "../../../reducers/catalogSlice";

export default function CatalogSearch() {
  const { searchQ } = useSelector((state) => state.catalog);
  const [search, setSearch] = useState(searchQ);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearch(searchQ);
  }, [searchQ])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putSearch(search));
    dispatch(catalogGetAll());
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        name="search"
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
