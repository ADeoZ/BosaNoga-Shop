import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CartItem({ item, row, onRemove }) {
  return (
    <tr>
      <th scope="row">{row + 1}</th>
      <td>
        <Link to={`/catalog/${item.id}.html`}>{item.title}</Link>
      </td>
      <td>{item.size}</td>
      <td>{item.count}</td>
      <td>{item.price.toLocaleString()} руб.</td>
      <td>{(item.price * item.count).toLocaleString()} руб.</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onRemove(item.id, item.size)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    size: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  row: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
