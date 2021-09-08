import TopSales from "../components/TopSales";
import CatalogContainer from "../components/CatalogContainer";
import CatalogCategory from "../components/CatalogContainer/CatalogCategory";
import CatalogView from "../components/CatalogContainer/CatalogView";

export default function Main() {
  return (
    <>
      <TopSales />
      <CatalogContainer>
        <CatalogCategory />
        <CatalogView />
      </CatalogContainer>
    </>
  );
}
