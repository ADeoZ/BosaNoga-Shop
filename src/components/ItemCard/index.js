import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import noimage from "../../img/noimage.png";

export default function ItemCard({ data, catalog }) {
  return (
    <div className={catalog ? "card catalog-item-card" : "card"}>
      <div className="card-img-container">
        <img
          src={data.images[0]}
          className="card-img-top img-fluid"
          alt={data.title}
          onError={(event) => (event.target.src = noimage)}
        />
      </div>
      <div className="card-body">
        <p className="card-text">{data.title}</p>
        <p className="card-text">{data.price.toLocaleString()} руб.</p>
        <Link
          to={`${process.env.REACT_APP_LINK_CATALOG_ID}${data.id}.html`}
          className="btn btn-outline-primary"
        >
          Заказать
        </Link>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  catalog: PropTypes.bool,
};

ItemCard.defaultProps = {
  catalog: false,
};
