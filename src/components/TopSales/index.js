import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { topSalesGetAll } from "../../reducers/topSalesSlice";
import Preloader from "../Preloader";
import ErrorLabel from "../ErrorLabel";
import ItemCard from "../ItemCard";

export default function TopSales() {
  const { items, status } = useSelector((state) => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topSalesGetAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "pending") {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Preloader />
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <ErrorLabel handleError={() => dispatch(topSalesGetAll())} />
      </section>
    );
  }

  return (
    items.length > 0 && (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>

        <div className="row">
          {items.map((item) => (
            <div className="col-4" key={item.id}>
              <ItemCard data={item} />
            </div>
          ))}
        </div>
      </section>
    )
  );
}
