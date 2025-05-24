import { FilterProvider } from "../../../../context/FilterProvider";
import { Catalog } from "../../ui/Catalog";

export function CatalogFilter() {
  return (
    <FilterProvider>
      <Catalog />
    </FilterProvider>
  );
}
