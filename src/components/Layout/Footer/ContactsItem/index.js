import PropTypes from "prop-types";

export default function ContactsItem(props) {
  return (
    <>
      {props.link ? (
        <a
          href={props.link}
          className={`footer-contacts-${props.classNameType}`}
        >
          {props.children}
        </a>
      ) : (
        <span className={`footer-contacts-${props.classNameType}`}>
          {props.children}
        </span>
      )}
    </>
  );
}

ContactsItem.propTypes = {
  link: PropTypes.string,
  classNameType: PropTypes.string.isRequired,
};
