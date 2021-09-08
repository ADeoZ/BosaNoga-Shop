import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder, resetCartStatus } from "../../reducers/cartSlice";
import ErrorLabel from "../ErrorLabel";
import Preloader from "../Preloader";

export default function CartForm() {
  const { status } = useSelector((state) => state.cart);
  const EMPTY_STATE = { phone: "", address: "", agreement: false };
  const [form, setForm] = useState(EMPTY_STATE);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetCartStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postOrder({ phone: form.phone, address: form.address })).then(
      setForm(EMPTY_STATE)
    );
  };

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const { items } = useSelector((state) => state.cart);
  return (
    <section className="order">
      {items.length > 0 && (
        <>
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Ваш телефон"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Адрес доставки"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="agreement"
                  id="agreement"
                  checked={form.agreement}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="agreement">
                  Согласен с правилами доставки
                </label>
              </div>
              {status === "error" ? (
                <ErrorLabel
                  handleError={() =>
                    dispatch(
                      postOrder({ phone: form.phone, address: form.address })
                    ).then(setForm(EMPTY_STATE))
                  }
                />
              ) : status === "pending" ? (
                <Preloader />
              ) : (
                <button type="submit" className="btn btn-outline-secondary">
                  Оформить
                </button>
              )}
            </form>
          </div>
        </>
      )}
      {status === "success" && (
        <div
          className="alert alert-success d-flex justify-content-center"
          role="alert"
        >
          Заказ отправлен
        </div>
      )}
    </section>
  );
}
