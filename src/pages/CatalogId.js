import Layout from "../components/Layout";
import ItemFull from "../components/ItemFull";

export default function CatalogId({ match }) {
  return (
    <Layout>
      <ItemFull id={match.params.id} />
    </Layout>
  );
}
