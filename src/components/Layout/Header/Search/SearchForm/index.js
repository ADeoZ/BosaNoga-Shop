import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { catalogGetAll, putSearch } from "../../../../../reducers/catalogSlice";
import {
  resetSearchFormState,
  setOpen,
  setSearchFormQuery,
} from "../../../../../reducers/searchFormSlice";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const { isOpen } = useSelector((state) => state.searchForm);
  const dispatch = useDispatch();
  const history = useHistory();
  const searchInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      searchInput.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === "") {
      dispatch(setOpen());
    } else {
      if (history.location.pathname === process.env.REACT_APP_LINK_CATALOG) {
        dispatch(putSearch(search));
        dispatch(catalogGetAll());
        dispatch(resetSearchFormState());
      } else {
        dispatch(setSearchFormQuery(search));
        history.push(process.env.REACT_APP_LINK_CATALOG);
      }
      setSearch("");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <form
      data-id="search-form"
      className={
        "header-controls-search-form form-inline" + (isOpen ? "" : " invisible")
      }
      onSubmit={handleSubmit}
    >
      <input
        ref={searchInput}
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
