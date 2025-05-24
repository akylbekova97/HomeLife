import { useContext, useEffect } from "react";
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
        onBrandChange={(value) => updateFilter("brand", value)}
        title={"Бренд"}
        data={Data1}
      />
      <FilterComponent
        title={"Цена"}
        isSlaider
        onBrandChange={(value) => updateFilter("price", value)}
      />
      <FilterComponent
        title={"Тип"}
        data={Data2}
        onBrandChange={(value) => updateFilter("type", value)}
      />
      <FilterComponent
        title={"Потребляемая мощность"}
        data={Data3}
        onBrandChange={(value) => updateFilter("power", value)}
      />
    </div>
  );
}
