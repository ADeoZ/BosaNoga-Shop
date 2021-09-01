export default function CatalogContainer(props) {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
    </section>
  );
}
