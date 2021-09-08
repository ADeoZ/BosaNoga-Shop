import PropTypes from "prop-types";

export default function SocialItem({ classType }) {
  return (
    <div className={`footer-social-link footer-social-link-${classType}`} />
  );
}

SocialItem.propTypes = {
  classType: PropTypes.string.isRequired,
};
