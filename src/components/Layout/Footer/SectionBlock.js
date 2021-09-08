import PropTypes from "prop-types";

export default function SectionBlock(props) {
  return (
    <section>
      {props.title && <h5>{props.title}</h5>}
      {props.children}
    </section>
  );
}

SectionBlock.propTypes = {
  title: PropTypes.string,
};
