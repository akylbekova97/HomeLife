import { FilterProvider } from "../../../../context/FilterContext";
import { Catalog } from "../../ui/Catalog";

export function CatalogFilter() {
  return(
    <FilterProvider>
    <Catalog />
  </FilterProvider>
  )
}
