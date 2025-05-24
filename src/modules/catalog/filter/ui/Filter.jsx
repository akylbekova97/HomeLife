import { useContext } from "react";
import { FilterComponent } from "../../filter-component";
import { FilterContext } from "../../../../context/FilterContext";

const Data1 = [
  { id: 1, value: "Samsung" },
  { id: 2, value: "Tefal" },
  { id: 3, value: "LG" },
];

const Data2 = [
  { id: 1, value: "Стандартный" },
  { id: 2, value: "Мощный" },
  { id: 3, value: "Хозяйственный" },
];
const Data3 = [
  { id: 1, value: "до 500" },
  { id: 2, value: "от 500 до 1000" },
  { id: 4, value: "от 1000 до 2000" },
  { id: 3, value: "от 2000 более" },
];

export function Filter() {
  const { updateFilter } = useContext(FilterContext);

  return (
    <div>
      <FilterComponent
        filterName="brand"
        onFilterChange={updateFilter}
        title={"Бренд"}
        data={Data1}
      />
      <FilterComponent
        filterName="price"
        title={"Цена"}
        isSlaider
        onFilterChange={updateFilter}
      />
      <FilterComponent
        filterName="type"
        title={"Тип"}
        data={Data2}
        onFilterChange={updateFilter}
      />
      <FilterComponent
        filterName="power"
        title={"Потребляемая мощность"}
        data={Data3}
        onFilterChange={updateFilter}
      />
    </div>
  );
}
