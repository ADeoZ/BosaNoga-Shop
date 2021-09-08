import PropTypes from "prop-types";

export default function PaymentsItem({ classType }) {
  return (
    <div className={`footer-pay-systems footer-pay-systems-${classType}`} />
  );
}

PaymentsItem.propTypes = {
  classType: PropTypes.string.isRequired,
};
