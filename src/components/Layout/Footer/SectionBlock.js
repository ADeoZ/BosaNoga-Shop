export default function SectionBlock(props) {
  return (
    <section>
      {props.title && <h5>{props.title}</h5>}
      {props.children}
    </section>
  );
}
