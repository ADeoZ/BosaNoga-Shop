import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  catalogGetAll,
  resetCatalogState,
} from "../../../reducers/catalogSlice";
import ItemCard from "../../ItemCard";
import Preloader from "../../Preloader";

export default function CatalogView() {
  const { items, showMore, status } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catalogGetAll());
    return () => {
      dispatch(resetCatalogState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOffset = () => {
    dispatch(catalogGetAll(true));
  };

  if (status === "pending") {
    return <Preloader />;
  }

  return (
    <>
      <div className="row">
        {items.map((item) => (
          <div className="col-4" key={item.id}>
            <ItemCard data={item} catalog />
          </div>
        ))}
      </div>
      {showMore &&
        ((status === "pendingOffset" && <Preloader />) || (
          <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleOffset}>
              Загрузить ещё
            </button>
          </div>
        ))}
    </>
  );
}
