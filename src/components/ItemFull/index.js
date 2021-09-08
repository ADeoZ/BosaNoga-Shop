import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { itemGetData, resetItemState } from "../../reducers/catalogItemSlice";
import { addToCart } from "../../reducers/cartSlice";
import { useHistory } from "react-router-dom";
import Preloader from "../Preloader";
import ErrorLabel from "../ErrorLabel";
import noimage from "../../img/noimage.png";

export default function ItemFull({ id }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { data, status } = useSelector((state) => state.catalogItem);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(itemGetData(id));
    return () => {
      dispatch(resetItemState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSize = (size) => {
    return () => {
      setSelectedSize(size);
    };
  };

  const handleQuantity = (operand) => {
    return () => {
      switch (operand) {
        case "-":
          setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
          break;
        case "+":
          setQuantity((prev) => (prev < 10 ? prev + 1 : 10));
          break;
        default:
          break;
      }
    };
  };

  const handleSubmit = () => {
    const item = {
      id: Number(id),
      title: data.title,
      price: Number(data.price),
      size: selectedSize,
      count: Number(quantity),
    };
    dispatch(addToCart(item));
    history.push(process.env.REACT_APP_LINK_CART);
  };

  if (status === "pending") {
    return (
      <section className="catalog-item">
        <h2 className="text-center">Загрузка...</h2>
        <Preloader />
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="catalog-item">
        <ErrorLabel handleError={() => dispatch(itemGetData(id))} />
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
                        onClick={handleSize(item.size)}
                      >
                        {item.size}
                      </span>
                    ))}
                </p>
                {data.sizes.filter((size) => size.avalible).length !== 0 && (
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button
                        className="btn btn-secondary"
                        onClick={handleQuantity("-")}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="btn btn-outline-primary">
                        {quantity}
                      </span>
                      <button
                        className="btn btn-secondary"
                        onClick={handleQuantity("+")}
                        disabled={quantity >= 10}
                      >
                        +
                      </button>
                    </span>
                  </p>
                )}
              </div>
              {data.sizes.filter((size) => size.avalible).length !== 0 && (
                <button
                  className="btn btn-danger btn-block btn-lg"
                  onClick={handleSubmit}
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

ItemFull.propTypes = {
  id: PropTypes.number.isRequired,
};
