import Layout from "../components/Layout";
import TopSales from "../components/TopSales";
import CatalogContainer from "../components/CatalogContainer";
import CatalogCategory from "../components/CatalogContainer/CatalogCategory";
import CatalogView from "../components/CatalogContainer/CatalogView";

export default function Main() {
  return (
    <Layout>
      <TopSales />
      <CatalogContainer>
        <CatalogCategory />
        <CatalogView />
      </CatalogContainer>
    </Layout>
  );
}
