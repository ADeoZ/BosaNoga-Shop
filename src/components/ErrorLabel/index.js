import PropTypes from "prop-types";

export default function ErrorLabel({ handleError }) {
  return (
    <div
      className="alert alert-danger d-flex justify-content-center align-items-center"
      role="alert"
    >
      Произошла ошибка!
      <button className="btn btn-danger btn-sm ml-3" onClick={handleError}>
        Повторить
      </button>
    </div>
  );
}

ErrorLabel.propTypes = {
  handleError: PropTypes.func.isRequired,
};
