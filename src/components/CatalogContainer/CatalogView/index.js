import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  catalogGetAll,
  putSearch,
  resetCatalogState,
} from "../../../reducers/catalogSlice";
import ErrorLabel from "../../ErrorLabel";
import Preloader from "../../Preloader";
import ItemCard from "../../ItemCard";
import { resetSearchFormState } from "../../../reducers/searchFormSlice";

export default function CatalogView() {
  const { items, showMore, status } = useSelector((state) => state.catalog);
  const { searchFormQ } = useSelector((state) => state.searchForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchFormQ !== "") {
      dispatch(putSearch(searchFormQ));
      dispatch(resetSearchFormState());
    }
    dispatch(catalogGetAll());
    return () => dispatch(resetCatalogState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOffset = () => {
    dispatch(catalogGetAll(true));
  };

  if (status.catalog === "pending") {
    return <Preloader />;
  }

  if (status.catalog === "error") {
    return <ErrorLabel handleError={() => dispatch(catalogGetAll())} />;
  }

  return (
    <>
      <div className="row">
        {items.length > 0 &&
          items.map((item) => (
            <div className="col-4" key={item.id}>
              <ItemCard data={item} catalog />
            </div>
          ))}
        {status.catalog !== "pending" && !items.length && (
          <div className="card w-100 text-center">
            <div className="card-body">В этой категории нет товаров.</div>
          </div>
        )}
      </div>
      {showMore &&
        ((status.offset === "error" && (
          <ErrorLabel handleError={() => dispatch(catalogGetAll(true))} />
        )) ||
          (status.offset === "pending" && <Preloader />) || (
            <div className="text-center">
              <button
                className="btn btn-outline-primary"
                onClick={handleOffset}
              >
                Загрузить ещё
              </button>
            </div>
          ))}
    </>
  );
}
