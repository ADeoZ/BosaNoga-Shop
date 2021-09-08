import CatalogContainer from "../components/CatalogContainer";
import CatalogSearch from "../components/CatalogContainer/CatalogSearch";
import CatalogCategory from "../components/CatalogContainer/CatalogCategory";
import CatalogView from "../components/CatalogContainer/CatalogView";

export default function Catalog() {
  return (
    <CatalogContainer>
      <CatalogSearch />
      <CatalogCategory />
      <CatalogView />
    </CatalogContainer>
  );
}
