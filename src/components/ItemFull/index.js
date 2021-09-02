import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemGetData, resetState } from "../../reducers/catalogItemSlice";
import Preloader from "../Preloader";
import noimage from "../../img/noimage.png";

export default function ItemFull({ id }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const { data, status } = useSelector((state) => state.catalogItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemGetData(id));
    return () => {
      dispatch(resetState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (size) => {
    return () => {
      setSelectedSize(size);
    };
  };

  console.log(data);

  if (status === "pending") {
    return (
      <section className="catalog-item">
        <h2 className="text-center">Загрузка...</h2>
        <Preloader />
      </section>
    );
  }

  return (
    <>
      {data && (
        <section className="catalog-item">
          <h2 className="text-center">{data.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={data.images[0]}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
                onError={(event) => (event.target.src = noimage)}
              />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{data.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{data.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{data.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{data.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{data.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{data.reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <p>
                  Размеры в наличии:
                  {data.sizes
                    .filter((size) => size.avalible)
                    .map((item) => (
                      <span
                        className={
                          "catalog-item-size" +
                          (selectedSize === item.size ? " selected" : "")
                        }
                        key={item.size}
                        onClick={handleClick(item.size)}
                      >
                        {item.size}
                      </span>
                    ))}
                </p>
                {data.sizes.filter((size) => size.avalible).length !== 0 && (
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">1</span>
                      <button className="btn btn-secondary">+</button>
                    </span>
                  </p>
                )}
              </div>
              {data.sizes.filter((size) => size.avalible).length !== 0 && (
                <button
                  className="btn btn-danger btn-block btn-lg"
                  disabled={!selectedSize}
                >
                  В корзину
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
