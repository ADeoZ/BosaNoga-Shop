import ItemFull from "../components/ItemFull";

export default function CatalogId({ match }) {
  return <ItemFull id={Number(match.params.id)} />;
}
